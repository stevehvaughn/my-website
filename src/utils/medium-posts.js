import { config } from './config.js';
import { safeFetch, withErrorBoundary } from './errorHandler.js';
import { withCache, cache } from './cache.js';

// Enhanced Medium posts loader with caching and error handling
export const loadMediumPosts = withCache(
  'medium-posts',
  withErrorBoundary(
    async () => {
      const response = await safeFetch(config.apis.mediumRss);
      const data = await response.json();
      
      // Basic validation of response structure
      if (!data || !Array.isArray(data.items)) {
        throw new Error('Invalid Medium RSS response format');
      }
      
      return data;
    },
    // Fallback data in case of error
    {
      status: 'error',
      feed: {
        url: '',
        title: 'Steve Vaughn\'s Medium Blog',
        link: 'https://medium.com/@stevehvaughn',
        author: 'Steve Vaughn',
        description: 'Development and music posts',
        image: ''
      },
      items: []
    }
  ),
  config.cache.mediumPosts.ttl
);

// Get cached Medium posts without refetching
export function getCachedMediumPosts() {
  return cache.get('medium-posts');
}

// Force refresh Medium posts
export async function refreshMediumPosts() {
  cache.delete('medium-posts');
  return await loadMediumPosts();
}