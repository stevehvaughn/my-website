# Utils Directory - Robust Backend Alternative

This directory contains utilities that provide a robust backend-like functionality without requiring a traditional server, perfect for static hosting and serverless deployments.

## Architecture Overview

### Core Files

- **`config.js`** - Centralized configuration management
- **`cache.js`** - In-memory caching system with TTL support
- **`errorHandler.js`** - Comprehensive error handling with retry logic
- **`validation.js`** - Input validation and sanitization
- **`rateLimit.js`** - Rate limiting for API endpoints
- **`serviceWorker.js`** - PWA and offline functionality

### Data Management

- **`performances.ts`** - Performance data with TypeScript types
- **`projects.ts`** - Project portfolio data with TypeScript types
- **`ensembles.ts`** - Musical ensemble information
- **`technologies.ts`** - Technology stack data
- **`data.ts`** - Navigation and social links
- **`medium-posts.js`** - Enhanced Medium RSS integration

### Build & Development

- **`buildTime.js`** - Build-time data generation and validation
- **`fonts.js`** - Font loading utilities
- **`posts.js`** - Blog post utilities

## Key Features

### 1. **Caching System**
- In-memory caching with TTL
- Cache invalidation patterns
- Automatic cleanup
- Statistics tracking

```javascript
import { withCache, cache } from './cache.js';

// Cache a function result
const cachedFn = withCache('key', asyncFunction, 30000); // 30s TTL

// Manual cache operations
cache.set('key', value, ttl);
cache.get('key');
cache.delete('key');
```

### 2. **Error Handling**
- Retry logic with exponential backoff
- Comprehensive error types
- Graceful fallbacks
- User-friendly error messages

```javascript
import { withRetry, safeFetch, handleError } from './errorHandler.js';

// Retry with custom config
const retryFn = withRetry(asyncFunction, { maxRetries: 3 });

// Safe fetch with error handling
const response = await safeFetch('/api/endpoint');
```

### 3. **Validation & Sanitization**
- TypeScript-first approach
- Runtime input validation
- XSS protection
- Data sanitization

```javascript
import { validateContactForm, sanitizeInput } from './validation.js';

const cleanData = sanitizeInput(userInput);
const validation = validateContactForm(formData);
```

### 4. **Rate Limiting**
- In-memory rate limiting
- Configurable windows and limits
- Automatic cleanup
- Express-like middleware

```javascript
import { contactRateLimit } from './rateLimit.js';

// Apply to API route
export default contactRateLimit(handler);
```

### 5. **PWA Support**
- Service worker registration
- Offline functionality
- Background sync
- Install prompts

```javascript
import { registerServiceWorker, handleOfflineContactForm } from './serviceWorker.js';

registerServiceWorker();
```

## Configuration

### Environment Variables

Create a `.env.local` file based on `.env.example`:

```env
# Email Configuration
GMAIL_USERNAME=your-email@gmail.com
GMAIL_APP_PASSWORD=your-app-password
RECIPIENT_EMAIL=your-email@gmail.com

# reCAPTCHA Configuration
RECAPTCHA_SECRET_KEY=your-recaptcha-secret-key
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your-recaptcha-site-key
```

### Build Configuration

The build process includes:
1. Data validation
2. Static file generation
3. Search index creation
4. Build manifest generation

```bash
npm run build:data  # Generate static data files
npm run build       # Full build with data generation
npm run validate    # Type checking and linting
```

## Usage Patterns

### API Route Enhancement

```javascript
// Enhanced API route with all features
import { config } from '../../utils/config.js';
import { validateContactForm, sanitizeContactForm } from '../../utils/validation.js';
import { contactRateLimit } from '../../utils/rateLimit.js';
import { handleError, logError } from '../../utils/errorHandler.js';

async function handler(req, res) {
  try {
    const sanitizedData = sanitizeContactForm(req.body);
    const validation = validateContactForm(sanitizedData);
    
    if (!validation.valid) {
      return res.status(400).json({ errors: validation.errors });
    }
    
    // Process request...
    
  } catch (error) {
    logError(error, { endpoint: req.url });
    const errorInfo = handleError(error);
    return res.status(500).json({ message: errorInfo.message });
  }
}

export default contactRateLimit(handler);
```

### External API Integration

```javascript
// Enhanced external API calls
import { withCache } from './cache.js';
import { withRetry, safeFetch } from './errorHandler.js';

const loadExternalData = withCache(
  'external-data',
  withRetry(async () => {
    const response = await safeFetch('https://api.example.com/data');
    return response.json();
  }, { maxRetries: 3 }),
  300000 // 5 minutes TTL
);
```

## TypeScript Integration

All data files use TypeScript for compile-time type checking:

```typescript
import { Performance, Project, Ensemble } from '../types';

const performances: Performance[] = [...];
const projects: Project[] = [...];
const ensembles: Record<string, Ensemble> = {...};
```

## Monitoring & Debugging

### Cache Statistics
```javascript
import { cache } from './cache.js';
console.log(cache.stats());
```

### Error Tracking
- Errors are logged with context
- User-friendly error messages
- Proper HTTP status codes

### Rate Limit Monitoring
```javascript
import { contactRateLimiter } from './rateLimit.js';
console.log(contactRateLimiter.getStats());
```

## Performance Optimizations

1. **Build-time generation** - Static data files created at build time
2. **Intelligent caching** - Multiple cache layers with TTL
3. **Lazy loading** - Components and data loaded on demand
4. **Service worker** - Offline functionality and background sync
5. **TypeScript** - Compile-time optimizations and error catching

## Security Features

1. **Input sanitization** - XSS protection
2. **Rate limiting** - DoS protection
3. **Environment variables** - Secret management
4. **Error handling** - No sensitive data leakage
5. **CORS handling** - Request origin validation

This architecture provides enterprise-level robustness while maintaining the simplicity and cost-effectiveness of a serverless approach.