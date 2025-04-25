# Plex Plumbing Melbourne Business Website

A modern, responsive website for Plex Plumbing Melbourne built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Tech Stack**: Next.js, TypeScript, and Tailwind CSS
- **Responsive Design**: Optimized for all device sizes
- **SEO Optimized**: Meta tags, structured data, and optimized content
- **Performance Focused**: Static site generation for fast loading
- **Multilingual Ready**: Structure supports multiple languages
- **Location-Based Pages**: Dynamic pages for different service areas
- **Service-Based Pages**: Detailed pages for each service offering

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── components/         # Reusable UI components
│   │   ├── blocks/         # Larger content blocks
│   │   ├── layout/         # Layout components
│   │   └── ui/             # Basic UI components
│   ├── en/                 # English language routes
│   │   ├── contact/        # Contact page
│   │   ├── locations/      # Location pages
│   │   └── services/       # Service pages
│   ├── lib/                # Utility functions and data
│   └── fonts/              # Font files
├── images/                 # Image assets
├── public/                 # Static assets
│   └── icons/              # SVG icons
├── next.config.mjs         # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## Component System

The website uses a modular component system:

- **UI Components**: Basic building blocks like Button, Card, Section
- **Layout Components**: Header, Footer, Navigation
- **Block Components**: Larger content sections like HeroSection, ServicesList, etc.

## Pages

- **Home**: Main landing page
- **Services**: Overview of all services
- **Service Detail**: Detailed page for each service
- **Service + Location**: Pages for specific services in specific locations
- **Locations**: Overview of service areas
- **Region**: Pages for each region
- **City**: Pages for each city within a region
- **Contact**: Contact form and information

## Data Structure

The site uses a structured data approach:

- **Services**: Array of service objects with details
- **Locations**: Hierarchical structure of regions and cities
- **Contact Info**: Business contact information

## Development

### Prerequisites

- Node.js 18+ and npm/yarn

### Setup

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Run the development server:
   ```
   npm run dev
   ```

### Building

To build the static site:

```
npm run build
```

The output will be in the `out` directory.

## Deployment

The site is configured for static deployment to any hosting platform that supports static sites:

1. Build the site: `npm run build`
2. Deploy the `out` directory to your hosting provider

## SEO Features

- Metadata for all pages
- JSON-LD structured data
- Sitemap generation
- Optimized for local SEO with location-specific pages

## Customization

- **Colors**: Edit the color variables in `app/globals.css`
- **Content**: Update the data in `app/lib/data.ts`
- **Components**: Modify or extend components as needed

## License

All rights reserved.
