import { config } from './config.js';

// Custom error classes
export class APIError extends Error {
  constructor(message, status, endpoint) {
    super(message);
    this.name = 'APIError';
    this.status = status;
    this.endpoint = endpoint;
  }
}

export class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = 'ValidationError';
    this.field = field;
  }
}

export class CacheError extends Error {
  constructor(message, key) {
    super(message);
    this.name = 'CacheError';
    this.key = key;
  }
}

// Retry configuration
const defaultRetryConfig = {
  maxRetries: 3,
  baseDelay: 1000,
  maxDelay: 10000,
  exponentialBackoff: true,
  retryableErrors: [
    'ECONNRESET',
    'ECONNREFUSED',
    'ETIMEDOUT',
    'ENOTFOUND',
    'EHOSTUNREACH'
  ]
};

// Sleep helper
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Calculate delay with exponential backoff
function calculateDelay(attempt, baseDelay, maxDelay, exponentialBackoff) {
  if (!exponentialBackoff) return baseDelay;
  
  const delay = baseDelay * Math.pow(2, attempt);
  return Math.min(delay, maxDelay);
}

// Check if error is retryable
function isRetryableError(error, retryableErrors) {
  if (error.code && retryableErrors.includes(error.code)) {
    return true;
  }
  
  // HTTP status codes that are retryable
  if (error.status) {
    return error.status >= 500 || error.status === 429;
  }
  
  return false;
}

// Retry wrapper for async functions
export function withRetry(asyncFn, retryConfig = {}) {
  const config = { ...defaultRetryConfig, ...retryConfig };
  
  return async (...args) => {
    let lastError;
    
    for (let attempt = 0; attempt <= config.maxRetries; attempt++) {
      try {
        return await asyncFn(...args);
      } catch (error) {
        lastError = error;
        
        // Don't retry on last attempt
        if (attempt === config.maxRetries) {
          break;
        }
        
        // Don't retry if error is not retryable
        if (!isRetryableError(error, config.retryableErrors)) {
          break;
        }
        
        // Calculate delay and wait
        const delay = calculateDelay(
          attempt, 
          config.baseDelay, 
          config.maxDelay, 
          config.exponentialBackoff
        );
        
        if (config.isDevelopment) {
          console.warn(`Retry attempt ${attempt + 1}/${config.maxRetries} after ${delay}ms for:`, error.message);
        }
        
        await sleep(delay);
      }
    }
    
    // If we get here, all retries failed
    throw lastError;
  };
}

// Enhanced fetch with retry and error handling
export async function safeFetch(url, options = {}) {
  const fetchWithRetry = withRetry(async (url, options) => {
    const response = await fetch(url, {
      timeout: 10000,
      ...options
    });
    
    if (!response.ok) {
      throw new APIError(
        `HTTP ${response.status}: ${response.statusText}`,
        response.status,
        url
      );
    }
    
    return response;
  });
  
  return fetchWithRetry(url, options);
}

// Error logger
export function logError(error, context = {}) {
  const errorInfo = {
    message: error.message,
    name: error.name,
    stack: error.stack,
    timestamp: new Date().toISOString(),
    context
  };
  
  if (config.isDevelopment) {
    console.error('Error occurred:', errorInfo);
  } else {
    // In production, you might want to send to an error tracking service
    console.error('Error:', error.message);
  }
  
  return errorInfo;
}

// Global error handler
export function handleError(error, context = {}) {
  const errorInfo = logError(error, context);
  
  // Return user-friendly error message
  if (error instanceof ValidationError) {
    return {
      type: 'validation',
      message: error.message,
      field: error.field
    };
  }
  
  if (error instanceof APIError) {
    return {
      type: 'api',
      message: 'Service temporarily unavailable. Please try again later.',
      status: error.status
    };
  }
  
  // Generic error
  return {
    type: 'generic',
    message: 'An unexpected error occurred. Please try again later.'
  };
}

// Async error boundary for components
export function withErrorBoundary(asyncFn, fallback) {
  return async (...args) => {
    try {
      return await asyncFn(...args);
    } catch (error) {
      const errorInfo = handleError(error);
      
      if (typeof fallback === 'function') {
        return fallback(errorInfo);
      }
      
      return fallback;
    }
  };
}

// Health check helper
export async function healthCheck(url, timeout = 5000) {
  try {
    const response = await fetch(url, { 
      method: 'HEAD',
      timeout
    });
    
    return {
      healthy: response.ok,
      status: response.status,
      responseTime: performance.now()
    };
  } catch (error) {
    return {
      healthy: false,
      error: error.message,
      responseTime: null
    };
  }
}