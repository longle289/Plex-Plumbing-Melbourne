import { Metadata } from "next";
import { services, locations } from "./data";

type SeoParams = {
  title?: string;
  description?: string;
  keywords?: string[];
  url?: string;
  ogImage?: string;
};

export function generateMetadata({
  title,
  description,
  keywords = [],
  url,
  ogImage = "/images/Plex_Plumbing_Logo.jpeg",
}: SeoParams): Metadata {
  const baseTitle = "Plex Plumbing Melbourne";
  const finalTitle = title ? `${title} | ${baseTitle}` : baseTitle;
  
  const baseDescription = "Reliable and affordable plumbing solutions for homes and businesses in Melbourne. Emergency plumbing, repairs, installations, and more.";
  const finalDescription = description || baseDescription;
  
  const baseKeywords = [
    "plumbing",
    "Melbourne",
    "plumber",
    "emergency plumbing",
    "plumbing services",
    "Victoria",
    "Australia",
  ];
  const finalKeywords = [...baseKeywords, ...keywords].join(", ");
  
  const baseUrl = "https://plexplumbing.com.au";
  const finalUrl = url ? `${baseUrl}${url}` : baseUrl;
  
  return {
    title: finalTitle,
    description: finalDescription,
    keywords: finalKeywords,
    openGraph: {
      title: finalTitle,
      description: finalDescription,
      url: finalUrl,
      siteName: baseTitle,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: finalTitle,
        },
      ],
      locale: "en_AU",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: finalTitle,
      description: finalDescription,
      images: [ogImage],
    },
    alternates: {
      canonical: finalUrl,
    },
  };
}

export function generateServiceMetadata(serviceId: string) {
  const service = services.find((s) => s.id === serviceId);
  
  if (!service) {
    return generateMetadata({});
  }
  
  return generateMetadata({
    title: service.title,
    description: service.description.substring(0, 160),
    keywords: service.keywords,
    url: `/en/services/${serviceId}`,
    ogImage: service.image,
  });
}

export function generateServiceLocationMetadata(serviceId: string, locationSlug: string) {
  const service = services.find((s) => s.id === serviceId);
  
  if (!service) {
    return generateMetadata({});
  }
  
  let locationName = "";
  let regionName = "";
  
  for (const region of locations) {
    const city = region.cities.find((c) => c.slug === locationSlug);
    if (city) {
      locationName = city.name;
      regionName = region.name;
      break;
    }
  }
  
  if (!locationName) {
    return generateServiceMetadata(serviceId);
  }
  
  const title = `${service.title} in ${locationName}, ${regionName}`;
  const description = `Professional ${service.title.toLowerCase()} services in ${locationName}. Fast, reliable, and affordable plumbing solutions by Plex Plumbing Melbourne.`;
  const keywords = [
    ...service.keywords,
    `${service.title.toLowerCase()} ${locationName}`,
    `${locationName} plumber`,
    `plumbing services ${locationName}`,
    `${regionName} plumbing`,
  ];
  
  return generateMetadata({
    title,
    description,
    keywords,
    url: `/en/services/${serviceId}/${locationSlug}`,
    ogImage: service.image,
  });
}

export function generateLocationMetadata(regionSlug: string, citySlug?: string) {
  const region = locations.find((r) => r.slug === regionSlug);
  
  if (!region) {
    return generateMetadata({});
  }
  
  if (!citySlug) {
    // Region page
    const title = `Plumbing Services in ${region.name}`;
    const description = `Professional plumbing services throughout ${region.name}. Emergency plumbing, repairs, installations, and more by Plex Plumbing Melbourne.`;
    const keywords = [
      `${region.name} plumber`,
      `plumbing services ${region.name}`,
      `emergency plumber ${region.name}`,
      ...region.cities.map((city) => `plumber ${city.name}`),
    ];
    
    return generateMetadata({
      title,
      description,
      keywords,
      url: `/en/locations/${regionSlug}`,
    });
  }
  
  // City page
  const city = region.cities.find((c) => c.slug === citySlug);
  
  if (!city) {
    return generateLocationMetadata(regionSlug);
  }
  
  const title = `Plumbing Services in ${city.name}, ${region.name}`;
  const description = `Professional plumbing services in ${city.name}. 24/7 emergency plumbing, repairs, installations, and more by Plex Plumbing Melbourne.`;
  const keywords = [
    `${city.name} plumber`,
    `plumbing services ${city.name}`,
    `emergency plumber ${city.name}`,
    `${city.name} ${region.name} plumbing`,
    `plumbing repairs ${city.name}`,
  ];
  
  return generateMetadata({
    title,
    description,
    keywords,
    url: `/en/locations/${regionSlug}/${citySlug}`,
  });
}

export function generateJsonLd(type: "business" | "service" | "location", params: any) {
  if (type === "business") {
    return {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Plex Plumbing Melbourne",
      image: "/images/Plex_Plumbing_Logo.jpeg",
      "@id": "https://plexplumbing.com.au",
      url: "https://plexplumbing.com.au",
      telephone: "0405 707 017",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Delahey",
        addressLocality: "Melbourne",
        addressRegion: "Victoria",
        postalCode: "3037",
        addressCountry: "AU",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -37.7213,
        longitude: 144.7663,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ],
          opens: "07:00",
          closes: "17:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "08:00",
          closes: "14:00",
        },
      ],
      priceRange: "$$",
    };
  }
  
  if (type === "service" && params.service) {
    const { service } = params;
    return {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      description: service.description,
      provider: {
        "@type": "LocalBusiness",
        name: "Plex Plumbing Melbourne",
        url: "https://plexplumbing.com.au",
      },
      areaServed: {
        "@type": "State",
        name: "Victoria",
      },
      serviceType: "Plumbing",
    };
  }
  
  if (type === "location" && params.location) {
    const { location, region } = params;
    return {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Plex Plumbing Melbourne",
      image: "/images/Plex_Plumbing_Logo.jpeg",
      "@id": `https://plexplumbing.com.au/en/locations/${region.slug}/${location.slug}`,
      url: `https://plexplumbing.com.au/en/locations/${region.slug}/${location.slug}`,
      telephone: "0405 707 017",
      address: {
        "@type": "PostalAddress",
        addressLocality: location.name,
        addressRegion: "Victoria",
        addressCountry: "AU",
      },
      priceRange: "$$",
      areaServed: {
        "@type": "City",
        name: location.name,
        containedIn: {
          "@type": "AdministrativeArea",
          name: region.name,
        },
      },
    };
  }
  
  return null;
}
