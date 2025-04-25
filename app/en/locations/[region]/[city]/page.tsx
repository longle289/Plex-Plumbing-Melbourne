import { Metadata } from "next";
import { notFound } from "next/navigation";
import { generateLocationMetadata, generateJsonLd } from "../../../../lib/seo";
import { getRegionBySlug, getCityByRegionAndSlug, getServicesForLocation } from "../../../../lib/utils";
import HeroSection from "../../../../components/blocks/HeroSection";
import ServicesList from "../../../../components/blocks/ServicesList";
import CallToAction from "../../../../components/blocks/CallToAction";
import Section, { SectionHeader } from "../../../../components/ui/Section";
import Link from "next/link";
import Script from "next/script";

interface CityPageProps {
  params: {
    region: string;
    city: string;
  };
}

export function generateMetadata({ params }: CityPageProps): Metadata {
  return generateLocationMetadata(params.region, params.city);
}

export default function CityPage({ params }: CityPageProps) {
  const region = getRegionBySlug(params.region);
  const city = region ? getCityByRegionAndSlug(params.region, params.city) : undefined;
  
  if (!region || !city) {
    notFound();
  }
  
  // Get featured services for this city
  const featuredServices = getServicesForLocation(params.city, 6);
  
  // Get nearby cities (up to 8)
  const nearbyCities = region.cities
    .filter((c) => c.slug !== params.city)
    .slice(0, 8);
  
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title={`Plumbing Services in ${city.name}, ${region.name}`}
        subtitle={`Professional plumbing solutions for ${city.name} homes and businesses`}
        image="/images/Employee_Fixing_Kitchen_Retail.jpeg"
        primaryButtonText="Request a Quote"
        primaryButtonHref="/en/contact"
        secondaryButtonText="Emergency Service"
        secondaryButtonHref="/en/services/emergency-plumbing"
      />
      
      {/* City Overview */}
      <Section background="white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Local Plumbing Services in {city.name}
          </h2>
          <p className="text-lg mb-8">
            Plex Plumbing Melbourne provides comprehensive plumbing services throughout {city.name} and the wider {region.name} area. Our team of licensed plumbers is ready to deliver exceptional solutions for all your plumbing needs.
          </p>
          <p className="mb-4">
            Whether you need emergency repairs, routine maintenance, or complete plumbing renovations in {city.name}, we're committed to providing prompt, reliable service with transparent pricing and guaranteed workmanship.
          </p>
        </div>
      </Section>
      
      {/* Services Section */}
      <ServicesList
        services={featuredServices}
        title={`Our Services in ${city.name}`}
        subtitle={`Professional plumbing solutions for ${city.name} homes and businesses`}
        showViewAll={true}
        background="light"
      />
      
      {/* Why Choose Us Section */}
      <Section background="white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Why Choose Us in {city.name}</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold mb-2">Local {city.name} Expertise</h3>
                <p className="text-gray-700">
                  Our plumbers have extensive experience working in {city.name}, with in-depth knowledge of local plumbing systems and common issues specific to this area.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">Fast Response Times</h3>
                <p className="text-gray-700">
                  With technicians based throughout {region.name}, we can quickly reach your {city.name} property for both emergency and scheduled services.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">Comprehensive Services</h3>
                <p className="text-gray-700">
                  We offer a full range of plumbing services to {city.name} residents and businesses, from emergency repairs to complete renovations.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">Trusted Reputation</h3>
                <p className="text-gray-700">
                  We've built a strong reputation for quality and reliability among {city.name} homeowners and businesses through years of dedicated service.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Popular Services in {city.name}</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-primary mt-1 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <Link
                    href="/en/services/blocked-drains-toilets"
                    className="font-medium hover:text-primary"
                  >
                    Blocked Drain Clearing
                  </Link>
                  <p className="text-sm text-gray-600">
                    Fast, effective solutions for blocked drains and toilets in {city.name} properties.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-primary mt-1 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <Link
                    href="/en/services/hot-water-system-services"
                    className="font-medium hover:text-primary"
                  >
                    Hot Water System Services
                  </Link>
                  <p className="text-sm text-gray-600">
                    Installation, repair, and maintenance of all hot water systems in {city.name}.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-primary mt-1 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <Link
                    href="/en/services/leak-detection-repair"
                    className="font-medium hover:text-primary"
                  >
                    Leak Detection & Repair
                  </Link>
                  <p className="text-sm text-gray-600">
                    Advanced technology to locate and fix hidden leaks in {city.name} properties.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-primary mt-1 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <Link
                    href="/en/services/bathroom-kitchen-renovations"
                    className="font-medium hover:text-primary"
                  >
                    Bathroom & Kitchen Renovations
                  </Link>
                  <p className="text-sm text-gray-600">
                    Complete plumbing solutions for renovation projects in {city.name}.
                  </p>
                </div>
              </li>
            </ul>
            
            <div className="mt-6 p-4 bg-primary/10 rounded-md">
              <h4 className="font-bold text-lg mb-2">24/7 Emergency Service in {city.name}</h4>
              <p className="text-gray-700 mb-4">
                We provide round-the-clock emergency plumbing services throughout {city.name}.
              </p>
              <Link
                href="/en/services/emergency-plumbing"
                className="btn-primary inline-block"
              >
                Emergency Service
              </Link>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Nearby Areas */}
      <Section background="light">
        <SectionHeader
          title={`We Also Serve Nearby Areas`}
          subtitle={`Plumbing services in areas surrounding ${city.name}`}
          centered={true}
        />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {nearbyCities.map((nearbyCity) => (
            <Link
              key={nearbyCity.slug}
              href={`/en/locations/${region.slug}/${nearbyCity.slug}`}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <h3 className="font-bold text-primary">{nearbyCity.name}</h3>
              <p className="text-sm text-gray-600 mt-1">View Services</p>
            </Link>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Link
            href={`/en/locations/${region.slug}`}
            className="btn-outline inline-block"
          >
            View All {region.name} Areas
          </Link>
        </div>
      </Section>
      
      {/* Service + Location Links */}
      <Section background="white">
        <SectionHeader
          title={`Popular Services in ${city.name}`}
          subtitle={`Find specific plumbing services for your ${city.name} property`}
          centered={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link
            href={`/en/services/emergency-plumbing/${params.city}`}
            className="bg-gray-100 p-4 rounded-lg hover:bg-primary-light hover:text-white transition-colors"
          >
            <h3 className="font-bold">Emergency Plumbing in {city.name}</h3>
            <p className="text-sm mt-1">24/7 emergency plumbing services</p>
          </Link>
          
          <Link
            href={`/en/services/blocked-drains-toilets/${params.city}`}
            className="bg-gray-100 p-4 rounded-lg hover:bg-primary-light hover:text-white transition-colors"
          >
            <h3 className="font-bold">Blocked Drains in {city.name}</h3>
            <p className="text-sm mt-1">Fast, effective drain clearing</p>
          </Link>
          
          <Link
            href={`/en/services/hot-water-system-services/${params.city}`}
            className="bg-gray-100 p-4 rounded-lg hover:bg-primary-light hover:text-white transition-colors"
          >
            <h3 className="font-bold">Hot Water Systems in {city.name}</h3>
            <p className="text-sm mt-1">Installation, repair & maintenance</p>
          </Link>
          
          <Link
            href={`/en/services/leak-detection-repair/${params.city}`}
            className="bg-gray-100 p-4 rounded-lg hover:bg-primary-light hover:text-white transition-colors"
          >
            <h3 className="font-bold">Leak Detection in {city.name}</h3>
            <p className="text-sm mt-1">Find & fix hidden leaks</p>
          </Link>
          
          <Link
            href={`/en/services/bathroom-kitchen-renovations/${params.city}`}
            className="bg-gray-100 p-4 rounded-lg hover:bg-primary-light hover:text-white transition-colors"
          >
            <h3 className="font-bold">Bathroom Renovations in {city.name}</h3>
            <p className="text-sm mt-1">Complete renovation plumbing</p>
          </Link>
          
          <Link
            href={`/en/services/tap-toilet-installations/${params.city}`}
            className="bg-gray-100 p-4 rounded-lg hover:bg-primary-light hover:text-white transition-colors"
          >
            <h3 className="font-bold">Tap & Toilet Installations in {city.name}</h3>
            <p className="text-sm mt-1">Expert fixture installations</p>
          </Link>
        </div>
        
        <div className="mt-8 text-center">
          <Link
            href="/en/services"
            className="btn-outline inline-block"
          >
            View All Services
          </Link>
        </div>
      </Section>
      
      {/* Call to Action */}
      <CallToAction
        title={`Need a Plumber in ${city.name}?`}
        description={`Contact our team today to schedule a service or request a quote for your ${city.name} property.`}
        primaryButtonText="Contact Us"
        primaryButtonHref="/en/contact"
        secondaryButtonText="Emergency Service"
        secondaryButtonHref="/en/services/emergency-plumbing"
        background="primary"
      />
      
      {/* JSON-LD for local business */}
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateJsonLd("location", { location: city, region })
          ),
        }}
      />
    </>
  );
}

export async function generateStaticParams() {
  // Generate all region+city combinations
  const params = [];
  
  // Import locations data
  const { locations } = await import("../../../../lib/data");
  
  // Generate params for all regions and cities
  for (const region of locations) {
    for (const city of region.cities) {
      params.push({
        region: region.slug,
        city: city.slug,
      });
    }
  }
  
  return params;
}
