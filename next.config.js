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
    domains: ["www.milespartnership.com", "exploreasheville-5w80r7hif-asheville.vercel.app", "michigan.org", "gohawaii.com", "cdn.visitmusiccity.com", "milespartnership.com", "theoceanac.com", "gulfshores.com"],
  }
};

module.exports = nextConfig;
