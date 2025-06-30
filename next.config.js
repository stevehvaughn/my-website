/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // webpack(config, { nextRuntime }) {
  //   // as of Next.js latest versions, the nextRuntime is preferred over `isServer`, because of edge-runtime
  //   if (typeof nextRuntime === "undefined") {
  //     config.resolve.fallback = {
  //       ...config.resolve.fallback,
  //       fs: false,
  //     };
  //   }

  //   return config;
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'logo.clearbit.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.milespartnership.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'exploreasheville-5w80r7hif-asheville.vercel.app',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'michigan.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.michigan.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.gohawaii.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'gohawaii.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.visitmusiccity.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'milespartnership.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.theoceanac.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.gulfshores.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'exploreasheville-89fekrup4-asheville.vercel.app',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'visitmusiccity.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.visitmusiccity.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'exploreminnesota.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'visitmyrtlebeach.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.visitmyrtlebeach.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'birdinglouisiana.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.birdinglouisiana.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'destinationsinternational.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'flysrq.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'miamibeachconvention.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.miamibeachconvention.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'arkansas.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.arkansas.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.visitwinstonsalem.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'exploreasheville-pfxfxnl6t-asheville.vercel.app',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'capitalregionusa.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 't3.gstatic.com',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
