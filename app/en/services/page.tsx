import { Metadata } from "next";
import { generateMetadata } from "../../lib/seo";
import { services } from "../../lib/data";
import HeroSection from "../../components/blocks/HeroSection";
import ServicesList from "../../components/blocks/ServicesList";
import FeaturesList from "../../components/blocks/FeaturesList";
import CallToAction from "../../components/blocks/CallToAction";
import FaqSection from "../../components/blocks/FaqSection";

export const metadata: Metadata = generateMetadata({
  title: "Our Plumbing Services",
  description: "Explore our comprehensive range of professional plumbing services for residential and commercial properties in Melbourne.",
  keywords: ["plumbing services", "Melbourne plumber", "residential plumbing", "commercial plumbing", "emergency plumbing"],
  url: "/en/services",
});

export default function ServicesPage() {
  // Features for the Why Choose Us section
  const features = [
    {
      title: "Experienced Technicians",
      description: "Our team consists of highly trained and experienced plumbers who can handle any plumbing issue with expertise and precision.",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
    },
    {
      title: "Quality Materials",
      description: "We use only high-quality materials and parts that meet industry standards, ensuring durability and long-lasting results.",
      icon: (
        <svg
          className="w-12 h-12"
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
      ),
    },
    {
      title: "Transparent Pricing",
      description: "We provide detailed quotes before starting any work, with no hidden fees or unexpected charges.",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ];
  
  // FAQs for the services page
  const faqs = [
    {
      question: "Do you offer emergency plumbing services?",
      answer: "Yes, we provide 24/7 emergency plumbing services throughout Melbourne. Our team is always ready to respond quickly to urgent plumbing issues to minimize damage to your property.",
    },
    {
      question: "Are your plumbers licensed and insured?",
      answer: "Absolutely. All our plumbers are fully licensed, insured, and have undergone extensive training. We maintain all necessary certifications and stay updated with the latest plumbing technologies and techniques.",
    },
    {
      question: "How do you determine your pricing?",
      answer: "We provide transparent, upfront pricing based on the scope of work required. For standard services, we have fixed rates, while custom projects are quoted after a thorough assessment. We always provide detailed quotes before beginning any work.",
    },
    {
      question: "Do you offer warranties on your services?",
      answer: "Yes, we stand behind our work with comprehensive warranties. All our repairs and installations come with a service warranty, and we also honor manufacturers' warranties on products we install.",
    },
    {
      question: "How quickly can you respond to service requests?",
      answer: "For emergencies, we aim to respond within 30-60 minutes. For non-emergency services, we typically offer same-day or next-day appointments, depending on our schedule and your availability.",
    },
    {
      question: "Do you service both residential and commercial properties?",
      answer: "Yes, we provide plumbing services for both residential homes and commercial properties throughout Melbourne and surrounding areas. Our team is equipped to handle projects of any size.",
    },
  ];
  
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Professional Plumbing Services"
        subtitle="Comprehensive solutions for all your residential and commercial plumbing needs"
        image="/images/Employee_Fixing_Kitchen_Retail.jpeg"
        primaryButtonText="Request a Quote"
        primaryButtonHref="/en/contact"
        secondaryButtonText="Emergency Service"
        secondaryButtonHref="/en/services/emergency-plumbing"
      />
      
      {/* Services List */}
      <ServicesList
        services={services}
        title="Our Services"
        subtitle="Explore our full range of professional plumbing services"
        showViewAll={false}
        background="white"
        columns={3}
      />
      
      {/* Why Choose Us */}
      <FeaturesList
        features={features}
        title="Why Choose Our Services"
        subtitle="Experience the difference with Plex Plumbing Melbourne"
        background="light"
        layout="cards"
      />
      
      {/* Emergency Call to Action */}
      <CallToAction
        title="Need Emergency Plumbing Service?"
        description="Our team is available 24/7 to handle any plumbing emergency. Don't wait until it's too late!"
        primaryButtonText="Call Now"
        primaryButtonHref="tel:0405707017"
        secondaryButtonText="Learn More"
        secondaryButtonHref="/en/services/emergency-plumbing"
        background="secondary"
      />
      
      {/* FAQ Section */}
      <FaqSection
        faqs={faqs}
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our plumbing services"
        background="white"
      />
      
      {/* Final Call to Action */}
      <CallToAction
        title="Ready to Get Started?"
        description="Contact our team today to schedule a service or request a quote for your plumbing needs."
        primaryButtonText="Contact Us"
        primaryButtonHref="/en/contact"
        background="primary"
      />
    </>
  );
}
