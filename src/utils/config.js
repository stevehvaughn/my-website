export const config = {
  // API Configuration
  apis: {
    mediumRss: 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@stevehvaughn',
    recaptchaVerify: 'https://www.google.com/recaptcha/api/siteverify',
  },
  
  // Contact Configuration
  contact: {
    recipientEmail: process.env.RECIPIENT_EMAIL || 'steve.h.vaughn@gmail.com',
    gmail: {
      user: process.env.GMAIL_USERNAME,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
    recaptcha: {
      secretKey: process.env.RECAPTCHA_SECRET_KEY,
    },
  },
  
  // Cache Configuration
  cache: {
    mediumPosts: {
      ttl: 1000 * 60 * 30, // 30 minutes
      maxAge: 1000 * 60 * 60 * 24, // 24 hours
    },
    defaultTtl: 1000 * 60 * 15, // 15 minutes
  },
  
  // Rate Limiting
  rateLimit: {
    contact: {
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 5, // 5 requests per window
    },
  },
  
  // Validation
  validation: {
    contact: {
      nameMaxLength: 100,
      emailMaxLength: 254,
      messageMaxLength: 1000,
    },
  },
  
  // External Services
  external: {
    clearbitLogoApi: 'https://logo.clearbit.com/',
    faviconApi: 'https://t3.gstatic.com/faviconV2',
  },
  
  // Development
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
};