import { Metadata } from "next";
import { generateMetadata } from "../../lib/seo";
import { locations } from "../../lib/data";
import HeroSection from "../../components/blocks/HeroSection";
import LocationsMap from "../../components/blocks/LocationsMap";
import CallToAction from "../../components/blocks/CallToAction";
import Section, { SectionHeader } from "../../components/ui/Section";

export const metadata: Metadata = generateMetadata({
  title: "Service Areas",
  description: "Plex Plumbing Melbourne provides professional plumbing services throughout Melbourne and surrounding areas. Find your location for local plumbing solutions.",
  keywords: ["Melbourne plumber locations", "plumbing service areas", "local plumber", "Melbourne suburbs plumbing"],
  url: "/en/locations",
});

export default function LocationsPage() {
  // Count total cities
  const totalCities = locations.reduce(
    (count, region) => count + region.cities.length,
    0
  );
  
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Our Service Areas"
        subtitle="Professional plumbing services throughout Melbourne and surrounding areas"
        image="/images/Employee_Repairing_Garden_Drainage.jpeg"
        primaryButtonText="Request a Quote"
        primaryButtonHref="/en/contact"
        secondaryButtonText="Emergency Service"
        secondaryButtonHref="/en/services/emergency-plumbing"
      />
      
      {/* Service Area Overview */}
      <Section background="white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Serving {totalCities}+ Locations Across Melbourne
          </h2>
          <p className="text-lg mb-8">
            Plex Plumbing Melbourne provides professional plumbing services to homes and businesses throughout Melbourne and surrounding areas. Our team of licensed plumbers is strategically located to ensure prompt service to all the areas we cover.
          </p>
          <p className="mb-4">
            Whether you're in the heart of Melbourne CBD or in the surrounding suburbs, we're ready to deliver exceptional plumbing solutions tailored to your specific needs. Browse our service areas below to find your location.
          </p>
        </div>
      </Section>
      
      {/* Locations Map */}
      <LocationsMap
        regions={locations}
        title="Find Your Location"
        subtitle="Browse our service areas to find plumbing services near you"
        background="light"
        layout="accordion"
      />
      
      {/* Regions Overview */}
      <Section background="white">
        <SectionHeader
          title="Regions We Serve"
          subtitle="Comprehensive plumbing services across greater Melbourne"
          centered={true}
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((region) => (
            <div
              key={region.slug}
              className="bg-gray-100 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold mb-3">
                <a
                  href={`/en/locations/${region.slug}`}
                  className="text-primary hover:underline"
                >
                  {region.name}
                </a>
              </h3>
              <p className="text-gray-700 mb-4">
                Serving {region.cities.length} locations throughout the {region.name} area with professional plumbing services.
              </p>
              <a
                href={`/en/locations/${region.slug}`}
                className="text-primary font-medium hover:underline"
              >
                View all {region.name} locations →
              </a>
            </div>
          ))}
        </div>
      </Section>
      
      {/* Why Choose Us Section */}
      <Section background="light">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Why Choose Our Local Services</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold mb-2">Local Expertise</h3>
                <p className="text-gray-700">
                  Our plumbers have extensive knowledge of local plumbing systems, building codes, and common issues specific to different Melbourne areas.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">Fast Response Times</h3>
                <p className="text-gray-700">
                  With technicians based throughout Melbourne, we can quickly reach your property for both emergency and scheduled services.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">Consistent Quality</h3>
                <p className="text-gray-700">
                  No matter which area you're in, you'll receive the same high-quality service, professional workmanship, and attention to detail.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">Community Focus</h3>
                <p className="text-gray-700">
                  As a local business, we're committed to serving our community with integrity and building long-lasting relationships with our customers.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Our Coverage</h3>
            <ul className="space-y-2">
              {locations.map((region) => (
                <li key={region.slug} className="flex items-center">
                  <svg
                    className="w-5 h-5 text-primary mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{region.name}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-6 p-4 bg-gray-100 rounded-md">
              <h4 className="font-bold text-lg mb-2">Not sure if we service your area?</h4>
              <p className="text-gray-700 mb-4">
                Contact us today to confirm service availability for your specific location.
              </p>
              <a
                href="/en/contact"
                className="btn-primary inline-block"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Call to Action */}
      <CallToAction
        title="Need a Plumber in Your Area?"
        description="Contact our team today to schedule a service or request a quote for your property."
        primaryButtonText="Contact Us"
        primaryButtonHref="/en/contact"
        secondaryButtonText="Emergency Service"
        secondaryButtonHref="/en/services/emergency-plumbing"
        background="primary"
      />
    </>
  );
}
