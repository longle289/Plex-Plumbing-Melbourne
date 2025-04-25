import { Metadata } from "next";
import { notFound } from "next/navigation";
import { generateLocationMetadata } from "../../../lib/seo";
import { getRegionBySlug, getServicesForLocation } from "../../../lib/utils";
import HeroSection from "../../../components/blocks/HeroSection";
import ServicesList from "../../../components/blocks/ServicesList";
import CallToAction from "../../../components/blocks/CallToAction";
import Section, { SectionHeader } from "../../../components/ui/Section";
import Link from "next/link";

interface RegionPageProps {
  params: {
    region: string;
  };
}

export function generateMetadata({ params }: RegionPageProps): Metadata {
  return generateLocationMetadata(params.region);
}

export default function RegionPage({ params }: RegionPageProps) {
  const region = getRegionBySlug(params.region);
  
  if (!region) {
    notFound();
  }
  
  // Get featured services for this region
  const featuredServices = getServicesForLocation(params.region, 6);
  
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title={`Plumbing Services in ${region.name}`}
        subtitle={`Professional plumbing solutions throughout ${region.name} and surrounding areas`}
        image="/images/Employee_Fixing_Kitchen_Retail.jpeg"
        primaryButtonText="Request a Quote"
        primaryButtonHref="/en/contact"
        secondaryButtonText="Emergency Service"
        secondaryButtonHref="/en/services/emergency-plumbing"
      />
      
      {/* Region Overview */}
      <Section background="white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Serving {region.cities.length} Locations in {region.name}
          </h2>
          <p className="text-lg mb-8">
            Plex Plumbing Melbourne provides comprehensive plumbing services throughout {region.name}. Our team of licensed plumbers is ready to deliver exceptional solutions for all your plumbing needs, from emergency repairs to complete renovations.
          </p>
          <p className="mb-4">
            Whether you're in {region.cities[0].name}, {region.cities[1].name}, or any other area within {region.name}, we're committed to providing prompt, reliable service with transparent pricing and guaranteed workmanship.
          </p>
        </div>
      </Section>
      
      {/* Cities List */}
      <Section background="light">
        <SectionHeader
          title={`Areas We Serve in ${region.name}`}
          subtitle="Find plumbing services in your specific location"
          centered={true}
        />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {region.cities.map((city) => (
            <Link
              key={city.slug}
              href={`/en/locations/${region.slug}/${city.slug}`}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <h3 className="font-bold text-primary">{city.name}</h3>
              <p className="text-sm text-gray-600 mt-1">View Services</p>
            </Link>
          ))}
        </div>
      </Section>
      
      {/* Services Section */}
      <ServicesList
        services={featuredServices}
        title={`Our Services in ${region.name}`}
        subtitle={`Professional plumbing solutions for ${region.name} homes and businesses`}
        showViewAll={true}
        background="white"
      />
      
      {/* Why Choose Us Section */}
      <Section background="light">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Why Choose Us in {region.name}</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold mb-2">Local {region.name} Expertise</h3>
                <p className="text-gray-700">
                  Our plumbers have extensive experience working in {region.name}, with in-depth knowledge of local plumbing systems and common issues specific to this area.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">Fast Response Times</h3>
                <p className="text-gray-700">
                  With technicians based throughout {region.name}, we can quickly reach your property for both emergency and scheduled services.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">Comprehensive Services</h3>
                <p className="text-gray-700">
                  We offer a full range of plumbing services to {region.name} residents and businesses, from emergency repairs to complete renovations.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">Trusted Reputation</h3>
                <p className="text-gray-700">
                  We've built a strong reputation for quality and reliability among {region.name} homeowners and businesses through years of dedicated service.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Common Plumbing Issues in {region.name}</h3>
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
                  <span className="font-medium">Blocked Drains</span>
                  <p className="text-sm text-gray-600">
                    Common in older {region.name} properties due to tree root intrusion and aging pipe systems.
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
                  <span className="font-medium">Hot Water System Failures</span>
                  <p className="text-sm text-gray-600">
                    Particularly during winter months when systems are under increased demand.
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
                  <span className="font-medium">Leaking Taps and Pipes</span>
                  <p className="text-sm text-gray-600">
                    Often caused by wear and tear or pressure fluctuations in the local water supply.
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
                  <span className="font-medium">Stormwater Drainage Issues</span>
                  <p className="text-sm text-gray-600">
                    Especially during heavy rainfall periods, causing property flooding if not properly maintained.
                  </p>
                </div>
              </li>
            </ul>
            
            <div className="mt-6 p-4 bg-primary/10 rounded-md">
              <h4 className="font-bold text-lg mb-2">24/7 Emergency Service</h4>
              <p className="text-gray-700 mb-4">
                We provide round-the-clock emergency plumbing services throughout {region.name}.
              </p>
              <a
                href="/en/services/emergency-plumbing"
                className="btn-primary inline-block"
              >
                Emergency Service
              </a>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Call to Action */}
      <CallToAction
        title={`Need a Plumber in ${region.name}?`}
        description="Contact our team today to schedule a service or request a quote for your property."
        primaryButtonText="Contact Us"
        primaryButtonHref="/en/contact"
        secondaryButtonText="View All Locations"
        secondaryButtonHref="/en/locations"
        background="primary"
      />
    </>
  );
}

export async function generateStaticParams() {
  return [
    { region: "city-of-melbourne" },
    { region: "city-of-maribyrnong" },
    { region: "city-of-hobsons-bay" },
    { region: "city-of-brimbank" },
    { region: "city-of-melton" },
    { region: "city-of-wyndham" },
  ];
}
