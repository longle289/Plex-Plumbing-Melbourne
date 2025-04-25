import { Metadata } from "next";
import { notFound } from "next/navigation";
import { generateServiceLocationMetadata, generateJsonLd } from "../../../../lib/seo";
import { getServiceBySlug, getCityBySlug } from "../../../../lib/utils";
import HeroSection from "../../../../components/blocks/HeroSection";
import ProcessSteps from "../../../../components/blocks/ProcessSteps";
import FaqSection from "../../../../components/blocks/FaqSection";
import CallToAction from "../../../../components/blocks/CallToAction";
import Section, { SectionHeader } from "../../../../components/ui/Section";
import Image from "next/image";
import Script from "next/script";

interface ServiceLocationPageProps {
  params: {
    service: string;
    location: string;
  };
}

export function generateMetadata({ params }: ServiceLocationPageProps): Metadata {
  return generateServiceLocationMetadata(params.service, params.location);
}

export default function ServiceLocationPage({ params }: ServiceLocationPageProps) {
  const service = getServiceBySlug(params.service);
  const locationInfo = getCityBySlug(params.location);
  
  if (!service || !locationInfo) {
    notFound();
  }
  
  const { city, region } = locationInfo;
  
  // Process steps for this service in this location
  const processSteps = [
    {
      title: "Book an Appointment",
      description: `Contact our ${city.name} team to schedule a convenient time for your ${service.title.toLowerCase()} service.`,
      image: service.image,
    },
    {
      title: "On-Site Assessment",
      description: `Our local technician will arrive at your ${city.name} property to assess your specific needs and provide a detailed quote.`,
    },
    {
      title: "Professional Service",
      description: `We'll complete your ${service.title.toLowerCase()} efficiently and to the highest standards, using quality materials and equipment.`,
    },
    {
      title: "Satisfaction Guarantee",
      description: `We ensure you're completely satisfied with our work before we leave your ${city.name} property.`,
    },
  ];
  
  // FAQs for this service in this location
  const faqs = [
    {
      question: `How quickly can you respond to ${service.title.toLowerCase()} calls in ${city.name}?`,
      answer: `As a local provider serving ${city.name} and the ${region.name} area, we can typically respond to service calls within 30-60 minutes for emergencies, and offer same-day or next-day appointments for standard services.`,
    },
    {
      question: `Do you charge extra for ${service.title.toLowerCase()} services in ${city.name}?`,
      answer: `No, we charge standard rates throughout our service area, including ${city.name}. There are no additional travel or call-out fees for ${region.name} locations.`,
    },
    {
      question: `Are your plumbers familiar with ${city.name} plumbing systems?`,
      answer: `Absolutely. Our technicians have extensive experience working in ${city.name} and throughout ${region.name}. They're familiar with local plumbing systems, building codes, and common issues specific to this area.`,
    },
    {
      question: `Do you offer warranties for ${service.title.toLowerCase()} in ${city.name}?`,
      answer: `Yes, all our work in ${city.name} and throughout Melbourne comes with our standard service warranty. We also honor manufacturers' warranties on any products or parts we install.`,
    },
  ];
  
  // Local benefits for this service in this location
  const localBenefits = [
    {
      title: `Local ${city.name} Expertise`,
      description: `Our plumbers have extensive experience working in ${city.name} and throughout ${region.name}, with in-depth knowledge of local plumbing systems and common issues.`,
    },
    {
      title: "Fast Response Times",
      description: `With technicians based throughout Melbourne, we can quickly reach your ${city.name} property for both emergency and scheduled services.`,
    },
    {
      title: "Comprehensive Services",
      description: `We offer a full range of plumbing services to ${city.name} residents and businesses, from emergency repairs to complete renovations.`,
    },
    {
      title: "Local Reputation",
      description: `We've built a strong reputation for quality and reliability among ${city.name} homeowners and businesses through years of dedicated service.`,
    },
  ];
  
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title={`${service.title} in ${city.name}, ${region.name}`}
        subtitle={`Professional, reliable ${service.title.toLowerCase()} services for ${city.name} homes and businesses`}
        image={service.image}
        primaryButtonText="Request a Quote"
        primaryButtonHref="/en/contact"
        secondaryButtonText="Call Now"
        secondaryButtonHref="tel:0405707017"
      />
      
      {/* Service Description */}
      <Section background="white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">{service.title} in {city.name}</h2>
            <div className="prose max-w-none">
              <p className="text-lg mb-4">
                Looking for professional {service.title.toLowerCase()} services in {city.name}? Plex Plumbing Melbourne provides expert solutions for all your plumbing needs throughout {region.name}.
              </p>
              <p className="mb-4">{service.description}</p>
              <p>
                Our team of licensed plumbers serves {city.name} and surrounding areas with prompt, reliable service. Whether you're dealing with an emergency or planning a scheduled service, we're ready to deliver exceptional results that meet your specific needs.
              </p>
            </div>
          </div>
          
          <div className="relative h-80 rounded-lg overflow-hidden">
            <Image
              src={service.image}
              alt={`${service.title} in ${city.name}`}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Section>
      
      {/* Local Benefits */}
      <Section background="light">
        <SectionHeader
          title={`Why Choose Us for ${service.title} in ${city.name}`}
          subtitle={`Experience the benefits of our local ${city.name} plumbing services`}
          centered={true}
        />
        
        <div className="grid md:grid-cols-2 gap-8">
          {localBenefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </Section>
      
      {/* Process Steps */}
      <ProcessSteps
        steps={processSteps}
        title={`Our ${service.title} Process in ${city.name}`}
        subtitle={`How we deliver exceptional plumbing services to ${city.name} residents and businesses`}
        background="white"
        layout="horizontal"
      />
      
      {/* Areas We Serve */}
      <Section background="light">
        <SectionHeader
          title={`${service.title} Throughout ${region.name}`}
          subtitle={`We provide professional ${service.title.toLowerCase()} services across ${city.name} and surrounding areas`}
          centered={true}
        />
        
        <div className="bg-white p-8 rounded-lg shadow-md">
          <p className="mb-4">
            In addition to {city.name}, we also provide {service.title.toLowerCase()} services to other areas within {region.name}, including:
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-6">
            {region.cities
              .filter((c) => c.slug !== city.slug)
              .map((nearbyCity) => (
                <a
                  key={nearbyCity.slug}
                  href={`/en/services/${service.id}/${nearbyCity.slug}`}
                  className="py-2 px-4 bg-gray-100 rounded-md text-primary hover:bg-primary-light hover:text-white transition-colors"
                >
                  {nearbyCity.name}
                </a>
              ))}
          </div>
        </div>
      </Section>
      
      {/* FAQ Section */}
      <FaqSection
        faqs={faqs}
        title={`${service.title} FAQs for ${city.name}`}
        subtitle={`Common questions about our ${service.title.toLowerCase()} services in ${city.name}`}
        background="white"
      />
      
      {/* Call to Action */}
      <CallToAction
        title={`Need ${service.title} in ${city.name}?`}
        description={`Contact our team today to schedule your ${service.title.toLowerCase()} service or request a quote for your ${city.name} property.`}
        primaryButtonText="Contact Us"
        primaryButtonHref="/en/contact"
        secondaryButtonText="Call Now"
        secondaryButtonHref="tel:0405707017"
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
  // Generate all service+location combinations
  const params = [];
  
  // Import services and locations data
  const { services, locations } = await import("../../../../lib/data");
  
  // Generate params for all services and cities
  for (const service of services) {
    for (const region of locations) {
      for (const city of region.cities) {
        params.push({
          service: service.id,
          location: city.slug,
        });
      }
    }
  }
  
  return params;
}
