import { Metadata } from "next";
import { notFound } from "next/navigation";
import { generateServiceMetadata } from "../../../lib/seo";
import { getServiceBySlug, getRelatedServices } from "../../../lib/utils";
import HeroSection from "../../../components/blocks/HeroSection";
import ServicesList from "../../../components/blocks/ServicesList";
import ProcessSteps from "../../../components/blocks/ProcessSteps";
import FaqSection from "../../../components/blocks/FaqSection";
import CallToAction from "../../../components/blocks/CallToAction";
import Section from "../../../components/ui/Section";
import Image from "next/image";

interface ServicePageProps {
  params: {
    service: string;
  };
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  return generateServiceMetadata(params.service);
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.service);
  
  if (!service) {
    notFound();
  }
  
  // Get related services
  const relatedServices = getRelatedServices(service.id, 3);
  
  // Process steps for this service
  const processSteps = [
    {
      title: "Initial Assessment",
      description: "Our technician will thoroughly assess your plumbing issue, identifying the root cause and determining the best solution.",
      image: service.image,
    },
    {
      title: "Detailed Quote",
      description: "We provide a comprehensive quote with transparent pricing before any work begins, so you know exactly what to expect.",
    },
    {
      title: "Professional Service",
      description: "Our licensed plumbers complete the work efficiently and to the highest standards, using quality materials and equipment.",
    },
    {
      title: "Quality Assurance",
      description: "We test all our work to ensure everything functions perfectly and meets our strict quality standards.",
    },
  ];
  
  // FAQs for this service
  const faqs = [
    {
      question: `How much does ${service.title.toLowerCase()} typically cost?`,
      answer: "The cost varies depending on the specific requirements of your project. We provide detailed, transparent quotes after assessing your needs, with no hidden fees or surprises.",
    },
    {
      question: `How quickly can you respond to ${service.title.toLowerCase()} requests?`,
      answer: "For emergencies, we aim to respond within 30-60 minutes. For standard services, we typically offer same-day or next-day appointments, depending on our schedule and your availability.",
    },
    {
      question: `Do you offer warranties for ${service.title.toLowerCase()}?`,
      answer: "Yes, all our work comes with a service warranty. We also honor manufacturers' warranties on any products or parts we install.",
    },
    {
      question: "Are your plumbers licensed and insured?",
      answer: "Absolutely. All our plumbers are fully licensed, insured, and have undergone extensive training to ensure the highest quality workmanship.",
    },
  ];
  
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title={service.title}
        subtitle={service.shortDescription}
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
            <h2 className="text-3xl font-bold mb-6">Professional {service.title}</h2>
            <div className="prose max-w-none">
              <p className="text-lg mb-4">{service.description}</p>
              <p className="mb-4">
                At Plex Plumbing Melbourne, we provide reliable, high-quality {service.title.toLowerCase()} services for both residential and commercial properties. Our experienced team is equipped with the latest tools and techniques to ensure efficient and long-lasting solutions.
              </p>
              <p>
                Whether you're dealing with an emergency situation or planning a scheduled service, our licensed plumbers are ready to deliver exceptional results that meet your specific needs and exceed your expectations.
              </p>
            </div>
          </div>
          
          <div className="relative h-80 rounded-lg overflow-hidden">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Section>
      
      {/* Process Steps */}
      <ProcessSteps
        steps={processSteps}
        title="Our Service Process"
        subtitle={`How we deliver exceptional ${service.title.toLowerCase()} services`}
        background="light"
        layout="horizontal"
      />
      
      {/* FAQ Section */}
      <FaqSection
        faqs={faqs}
        title="Frequently Asked Questions"
        subtitle={`Common questions about our ${service.title.toLowerCase()} services`}
        background="white"
      />
      
      {/* Related Services */}
      <ServicesList
        services={relatedServices}
        title="Related Services"
        subtitle="Explore other plumbing services we offer"
        background="light"
        columns={3}
      />
      
      {/* Call to Action */}
      <CallToAction
        title={`Ready for Professional ${service.title}?`}
        description="Contact our team today to schedule a service or request a quote for your plumbing needs."
        primaryButtonText="Contact Us"
        primaryButtonHref="/en/contact"
        secondaryButtonText="Call Now"
        secondaryButtonHref="tel:0405707017"
        background="primary"
      />
    </>
  );
}

export async function generateStaticParams() {
  return [
    { service: "emergency-plumbing" },
    { service: "general-plumbing-repairs" },
    { service: "blocked-drains-toilets" },
    { service: "hot-water-system-services" },
    { service: "pipe-relining-repairs" },
    { service: "leak-detection-repair" },
    { service: "bathroom-kitchen-renovations" },
    { service: "tap-toilet-installations" },
    { service: "shower-bath-installations" },
    { service: "water-pressure-issues" },
    { service: "scheduled-maintenance-programs" },
    { service: "stormwater-drainage-installation" },
    { service: "sewer-line-repairs" },
    { service: "gas-heater-installations" },
    { service: "air-conditioner-split-system-installation" },
    { service: "appliance-installations" },
    { service: "roof-plumbing" },
    { service: "water-meter-installations" },
  ];
}
