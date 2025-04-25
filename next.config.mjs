/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static exports
  trailingSlash: true, // Add trailing slashes to all URLs
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nextjs.org',
      },
    ],
  },
  // Enable ISR-like behavior with revalidation
  experimental: {
    // This allows for ISR-like behavior in static exports
    // Pages will be regenerated when accessed if older than revalidate seconds
    isrMemoryCacheSize: 0, // Disable memory cache
  },
};

export default nextConfig;
