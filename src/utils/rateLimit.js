import { config } from './config.js';

// In-memory rate limiter for simple use cases
class RateLimiter {
  constructor(windowMs, max) {
    this.windowMs = windowMs;
    this.max = max;
    this.requests = new Map();
    
    // Clean up old entries periodically
    setInterval(() => {
      this.cleanup();
    }, windowMs);
  }
  
  // Check if request is allowed
  isAllowed(identifier) {
    const now = Date.now();
    const windowStart = now - this.windowMs;
    
    // Get or create request log for this identifier
    if (!this.requests.has(identifier)) {
      this.requests.set(identifier, []);
    }
    
    const requestLog = this.requests.get(identifier);
    
    // Remove old requests outside the window
    const validRequests = requestLog.filter(timestamp => timestamp > windowStart);
    this.requests.set(identifier, validRequests);
    
    // Check if under limit
    if (validRequests.length >= this.max) {
      return {
        allowed: false,
        remaining: 0,
        resetTime: Math.min(...validRequests) + this.windowMs
      };
    }
    
    // Add current request
    validRequests.push(now);
    
    return {
      allowed: true,
      remaining: this.max - validRequests.length,
      resetTime: now + this.windowMs
    };
  }
  
  // Clean up old entries
  cleanup() {
    const now = Date.now();
    const cutoff = now - this.windowMs;
    
    for (const [identifier, requests] of this.requests.entries()) {
      const validRequests = requests.filter(timestamp => timestamp > cutoff);
      
      if (validRequests.length === 0) {
        this.requests.delete(identifier);
      } else {
        this.requests.set(identifier, validRequests);
      }
    }
  }
  
  // Get current stats
  getStats() {
    return {
      totalIdentifiers: this.requests.size,
      windowMs: this.windowMs,
      max: this.max,
      identifiers: Array.from(this.requests.entries()).map(([id, requests]) => ({
        id,
        currentRequests: requests.length,
        oldestRequest: Math.min(...requests),
        newestRequest: Math.max(...requests)
      }))
    };
  }
}

// Global rate limiters
const contactRateLimiter = new RateLimiter(
  config.rateLimit.contact.windowMs,
  config.rateLimit.contact.max
);

// Helper function to get client identifier
function getClientIdentifier(req) {
  // In a real app, you might use IP address, user ID, or session ID
  // For this example, we'll use a combination of IP and user agent
  const forwarded = req.headers['x-forwarded-for'];
  const ip = forwarded ? forwarded.split(',')[0] : req.connection.remoteAddress;
  const userAgent = req.headers['user-agent'] || 'unknown';
  
  return `${ip}:${userAgent}`;
}

// Rate limiting middleware for Next.js API routes
export function withRateLimit(rateLimiter) {
  return (handler) => {
    return async (req, res) => {
      const identifier = getClientIdentifier(req);
      const result = rateLimiter.isAllowed(identifier);
      
      // Add rate limit headers
      res.setHeader('X-RateLimit-Limit', rateLimiter.max);
      res.setHeader('X-RateLimit-Remaining', result.remaining);
      res.setHeader('X-RateLimit-Reset', Math.ceil(result.resetTime / 1000));
      
      if (!result.allowed) {
        const retryAfter = Math.ceil((result.resetTime - Date.now()) / 1000);
        res.setHeader('Retry-After', retryAfter);
        
        return res.status(429).json({
          error: 'Too Many Requests',
          message: 'Rate limit exceeded. Please try again later.',
          retryAfter
        });
      }
      
      return handler(req, res);
    };
  };
}

// Specific rate limiters for different endpoints
export const contactRateLimit = withRateLimit(contactRateLimiter);

// Rate limit checker (for client-side usage)
export function checkRateLimit(identifier, type = 'contact') {
  let limiter;
  
  switch (type) {
    case 'contact':
      limiter = contactRateLimiter;
      break;
    default:
      throw new Error(`Unknown rate limit type: ${type}`);
  }
  
  return limiter.isAllowed(identifier);
}

// Export rate limiter instances for advanced usage
export { contactRateLimiter };

// Custom rate limiter factory
export function createRateLimiter(windowMs, max) {
  return new RateLimiter(windowMs, max);
}