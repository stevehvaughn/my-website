import { config } from './config.js';

// Simplified validation focused on runtime input validation
// TypeScript handles compile-time type checking for static data

// Contact form validation (most critical for user input)
export function validateContactForm(formData) {
  const errors = [];
  
  // Name validation
  if (!formData.name || typeof formData.name !== 'string') {
    errors.push('Name is required');
  } else if (formData.name.trim().length === 0) {
    errors.push('Name cannot be empty');
  } else if (formData.name.length > config.validation.contact.nameMaxLength) {
    errors.push(`Name must be less than ${config.validation.contact.nameMaxLength} characters`);
  }
  
  // Email validation
  if (!formData.email || typeof formData.email !== 'string') {
    errors.push('Email is required');
  } else if (!isValidEmail(formData.email)) {
    errors.push('Invalid email format');
  } else if (formData.email.length > config.validation.contact.emailMaxLength) {
    errors.push(`Email must be less than ${config.validation.contact.emailMaxLength} characters`);
  }
  
  // Message validation
  if (!formData.message || typeof formData.message !== 'string') {
    errors.push('Message is required');
  } else if (formData.message.trim().length === 0) {
    errors.push('Message cannot be empty');
  } else if (formData.message.length > config.validation.contact.messageMaxLength) {
    errors.push(`Message must be less than ${config.validation.contact.messageMaxLength} characters`);
  }
  
  // Captcha validation
  if (!formData.captchaToken || typeof formData.captchaToken !== 'string') {
    errors.push('Captcha verification is required');
  }
  
  return {
    valid: errors.length === 0,
    errors
  };
}

// Generic data validation for runtime checks
export function validateData(data, type) {
  const errors = [];
  
  switch (type) {
    case 'performance':
      if (!data.ensembleId) errors.push('Ensemble ID is required');
      if (!data.title) errors.push('Title is required');
      if (!Array.isArray(data.dates) || data.dates.length === 0) {
        errors.push('At least one date is required');
      }
      if (!data.venue?.name) errors.push('Venue name is required');
      if (!data.venue?.address) errors.push('Venue address is required');
      if (!data.role) errors.push('Role is required');
      break;
      
    case 'project':
      if (!data.name) errors.push('Project name is required');
      if (!data.url || !isValidUrl(data.url)) errors.push('Valid URL is required');
      if (typeof data.year !== 'number') errors.push('Year must be a number');
      if (!data.title) errors.push('Title is required');
      if (!data.client) errors.push('Client is required');
      break;
      
    case 'ensemble':
      if (!data.id) errors.push('Ensemble ID is required');
      if (!data.name) errors.push('Ensemble name is required');
      if (!data.category) errors.push('Category is required');
      if (data.website && !isValidUrl(data.website)) errors.push('Website must be a valid URL');
      break;
      
    default:
      errors.push(`Unknown validation type: ${type}`);
  }
  
  return {
    valid: errors.length === 0,
    errors
  };
}

// Helper functions
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

// Input sanitization
export function sanitizeInput(input) {
  if (typeof input !== 'string') return input;
  
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: URLs
    .replace(/on\w+=/gi, ''); // Remove event handlers
}

export function sanitizeContactForm(formData) {
  return {
    name: sanitizeInput(formData.name),
    email: sanitizeInput(formData.email),
    message: sanitizeInput(formData.message),
    captchaToken: formData.captchaToken
  };
}