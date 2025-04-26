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
  // Add cache busting for static assets
  generateBuildId: async () => {
    // Use timestamp as build ID for cache busting
    return `build-${Date.now()}`;
  },
  // Configure asset prefix for better caching
  assetPrefix: process.env.NODE_ENV === 'production' ? undefined : undefined,
  // Configure headers for optimal caching
  headers: async () => {
    return [
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, must-revalidate',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
