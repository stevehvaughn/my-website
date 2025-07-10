import { config } from './config.js';

// In-memory cache implementation
class Cache {
  constructor() {
    this.store = new Map();
    this.timers = new Map();
  }
  
  set(key, value, ttl = config.cache.defaultTtl) {
    // Clear existing timer if any
    if (this.timers.has(key)) {
      clearTimeout(this.timers.get(key));
    }
    
    // Store value with timestamp
    this.store.set(key, {
      value,
      timestamp: Date.now(),
      ttl
    });
    
    // Set expiration timer
    const timer = setTimeout(() => {
      this.delete(key);
    }, ttl);
    
    this.timers.set(key, timer);
  }
  
  get(key) {
    const item = this.store.get(key);
    if (!item) return null;
    
    const { value, timestamp, ttl } = item;
    const now = Date.now();
    
    // Check if expired
    if (now - timestamp > ttl) {
      this.delete(key);
      return null;
    }
    
    return value;
  }
  
  delete(key) {
    this.store.delete(key);
    
    if (this.timers.has(key)) {
      clearTimeout(this.timers.get(key));
      this.timers.delete(key);
    }
  }
  
  has(key) {
    return this.get(key) !== null;
  }
  
  clear() {
    // Clear all timers
    for (const timer of this.timers.values()) {
      clearTimeout(timer);
    }
    
    this.store.clear();
    this.timers.clear();
  }
  
  size() {
    return this.store.size;
  }
  
  // Get cache statistics
  stats() {
    const items = Array.from(this.store.values());
    const now = Date.now();
    
    return {
      size: this.store.size,
      items: items.map(item => ({
        age: now - item.timestamp,
        ttl: item.ttl,
        timeLeft: item.ttl - (now - item.timestamp)
      }))
    };
  }
}

// Global cache instance
const globalCache = new Cache();

// Cache wrapper for async functions
export function withCache(key, asyncFn, ttl = config.cache.defaultTtl) {
  return async (...args) => {
    const cacheKey = typeof key === 'function' ? key(...args) : key;
    
    // Try to get from cache first
    const cached = globalCache.get(cacheKey);
    if (cached) {
      return cached;
    }
    
    try {
      // Execute function and cache result
      const result = await asyncFn(...args);
      globalCache.set(cacheKey, result, ttl);
      return result;
    } catch (error) {
      // Don't cache errors, just throw them
      throw error;
    }
  };
}

// Specific cache functions
export const cache = {
  get: (key) => globalCache.get(key),
  set: (key, value, ttl) => globalCache.set(key, value, ttl),
  delete: (key) => globalCache.delete(key),
  has: (key) => globalCache.has(key),
  clear: () => globalCache.clear(),
  size: () => globalCache.size(),
  stats: () => globalCache.stats()
};

// Cache invalidation helper
export function invalidateCache(pattern) {
  const keys = Array.from(globalCache.store.keys());
  const regex = new RegExp(pattern);
  
  keys.forEach(key => {
    if (regex.test(key)) {
      globalCache.delete(key);
    }
  });
}

export default cache;