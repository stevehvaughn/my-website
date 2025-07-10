// Core data types
export interface Venue {
  name: string;
  address: string;
}

export interface Repertoire {
  composition: string;
  composer: string;
}

export interface Performance {
  ensembleId: string;
  title: string;
  dates: string[];
  venue: Venue;
  role: string;
  repertoire?: Repertoire[];
  description?: string;
}

export interface Ensemble {
  id: string;
  name: string;
  website: string;
  category: string;
  logo: string;
}

export interface Project {
  name: string;
  url: string;
  featured?: boolean;
  year: number;
  title: string;
  description: string;
  contributions?: string | null;
  image?: string | null;
  logo?: string | null;
  client: string;
}

export interface Technology {
  name: string;
  icon: string;
}

export interface TechnologyGroup {
  [category: string]: Technology[];
}

export interface NavLink {
  name: string;
  path: string;
}

export interface SocialLink {
  name: string;
  url: string;
}

// API Response types
export interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
  content: string;
  contentSnippet: string;
  guid: string;
  categories: string[];
  author: string;
  thumbnail?: string;
}

export interface MediumResponse {
  status: string;
  feed: {
    url: string;
    title: string;
    link: string;
    author: string;
    description: string;
    image: string;
  };
  items: MediumPost[];
}

// Contact form types
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  captchaToken: string;
}

export interface ContactFormResponse {
  success: boolean;
  message: string;
  errors?: string[];
}

// Cache types
export interface CacheItem<T> {
  value: T;
  timestamp: number;
  ttl: number;
}

export interface CacheStats {
  size: number;
  items: Array<{
    age: number;
    ttl: number;
    timeLeft: number;
  }>;
}

// Error types
export interface ErrorInfo {
  type: 'validation' | 'api' | 'generic';
  message: string;
  field?: string;
  status?: number;
}

export interface HealthCheckResult {
  healthy: boolean;
  status?: number;
  responseTime?: number | null;
  error?: string;
}

// Configuration types
export interface Config {
  apis: {
    mediumRss: string;
    recaptchaVerify: string;
  };
  contact: {
    recipientEmail: string;
    gmail: {
      user: string;
      pass: string;
    };
    recaptcha: {
      secretKey: string;
    };
  };
  cache: {
    mediumPosts: {
      ttl: number;
      maxAge: number;
    };
    defaultTtl: number;
  };
  rateLimit: {
    contact: {
      windowMs: number;
      max: number;
    };
  };
  validation: {
    contact: {
      nameMaxLength: number;
      emailMaxLength: number;
      messageMaxLength: number;
    };
  };
  external: {
    clearbitLogoApi: string;
    faviconApi: string;
  };
  isDevelopment: boolean;
  isProduction: boolean;
}