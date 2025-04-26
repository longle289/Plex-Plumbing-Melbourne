# Cache Busting Implementation

This document explains the cache busting implementation in the Plex Plumbing Melbourne website.

## Overview

Cache busting is a technique used to prevent browsers from caching static assets like CSS, JavaScript, and images. When a website is updated, browsers might still use the cached version of these assets instead of downloading the new ones. Cache busting solves this by appending a unique identifier (like a version number or hash) to the file names or URLs, forcing browsers to download the new versions.

## Implementation Details

The cache busting implementation in this project consists of several parts:

### 1. Utility Function

A utility function `withCacheBusting` has been added to `app/lib/utils.ts`. This function appends a version parameter to URLs:

```typescript
export function withCacheBusting(url: string): string {
  // Skip cache busting for external URLs
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }
  
  // Use package version as cache buster
  const version = '1.0.0'; // This matches the version in package.json
  
  // Add version parameter to URL
  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}v=${version}`;
}
```

### 2. Next.js Configuration

The Next.js configuration in `next.config.mjs` has been updated to optimize asset caching:

```javascript
// Add cache busting for static assets
generateBuildId: async () => {
  // Use timestamp as build ID for cache busting
  return `build-${Date.now()}`;
},

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
```

### 3. Component Updates

The following components have been updated to use the cache busting utility:

- `HeroSection.tsx`: Uses `withCacheBusting` for both mobile and desktop images
- `Card.tsx`: Uses `withCacheBusting` for card images
- `CallToAction.tsx`: Uses `withCacheBusting` for the background image

## How It Works

1. When the application is built, Next.js generates a unique build ID using the current timestamp.
2. Static assets like CSS and JavaScript files are automatically cache-busted by Next.js using this build ID.
3. For images and other assets, the `withCacheBusting` utility function adds a version parameter to the URL.
4. When the version in `package.json` is updated, all image URLs will change, forcing browsers to download the new versions.

## Cache Control Headers

The implementation also sets appropriate Cache-Control headers:

- For Next.js static assets: `public, max-age=31536000, immutable` (cache for 1 year, never update)
- For images: `public, max-age=86400, must-revalidate` (cache for 1 day, then revalidate)

## Updating the Cache Buster

To force browsers to download new versions of all assets:

1. Update the version number in `package.json`
2. The `withCacheBusting` function will use this new version number, changing all image URLs
3. Rebuild and redeploy the application

## Benefits

- Ensures users always see the latest version of the website
- Improves performance by allowing long-term caching of assets that don't change often
- Provides a simple way to force cache invalidation when needed
