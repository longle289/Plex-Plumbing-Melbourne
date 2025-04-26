import { services, locations, Service, Region, City } from "./data";

export function getAllServiceSlugs() {
  return services.map((service) => service.id);
}

export function getAllRegionSlugs() {
  return locations.map((region) => region.slug);
}

export function getAllCitySlugs() {
  const citySlugs: string[] = [];
  
  for (const region of locations) {
    for (const city of region.cities) {
      citySlugs.push(city.slug);
    }
  }
  
  return citySlugs;
}

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.id === slug);
}

export function getRegionBySlug(slug: string): Region | undefined {
  return locations.find((region) => region.slug === slug);
}

export function getCityBySlug(slug: string): { city: City; region: Region } | undefined {
  for (const region of locations) {
    const city = region.cities.find((city) => city.slug === slug);
    if (city) {
      return { city, region };
    }
  }
  
  return undefined;
}

export function getCityByRegionAndSlug(regionSlug: string, citySlug: string): City | undefined {
  const region = getRegionBySlug(regionSlug);
  
  if (!region) {
    return undefined;
  }
  
  return region.cities.find((city) => city.slug === citySlug);
}

export function formatPhoneNumber(phone: string): string {
  // Format Australian phone number
  const cleaned = phone.replace(/\D/g, "");
  
  if (cleaned.length === 10) {
    return `${cleaned.slice(0, 4)} ${cleaned.slice(4, 7)} ${cleaned.slice(7)}`;
  }
  
  return phone;
}

export function generateStaticParams() {
  const params = [];
  
  // Generate service pages
  for (const service of services) {
    params.push({ service: service.id });
    
    // Generate service+location pages
    for (const region of locations) {
      for (const city of region.cities) {
        params.push({
          service: service.id,
          location: city.slug,
        });
      }
    }
  }
  
  // Generate region pages
  for (const region of locations) {
    params.push({ region: region.slug });
    
    // Generate city pages
    for (const city of region.cities) {
      params.push({
        region: region.slug,
        city: city.slug,
      });
    }
  }
  
  return params;
}

export function classNames(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text;
  }
  
  return text.slice(0, maxLength) + "...";
}

export function getRandomItems<T>(array: T[], count: number): T[] {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export function getRelatedServices(currentServiceId: string, count: number = 3): Service[] {
  const otherServices = services.filter((service) => service.id !== currentServiceId);
  return getRandomItems(otherServices, count);
}

export function getServicesForLocation(locationSlug: string, count?: number): Service[] {
  const allServices = [...services];
  
  if (count) {
    return getRandomItems(allServices, count);
  }
  
  return allServices;
}

/**
 * Adds cache busting parameter to a URL
 * @param url The URL to add cache busting to
 * @returns URL with cache busting parameter
 */
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
