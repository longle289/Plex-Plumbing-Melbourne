import { Metadata } from "next";
import { generateMetadata } from "../lib/seo";
import { services, locations } from "../lib/data";
import HeroSection from "../components/blocks/HeroSection";
import ServicesList from "../components/blocks/ServicesList";
import FeaturesList from "../components/blocks/FeaturesList";
import CallToAction from "../components/blocks/CallToAction";
import TestimonialsList from "../components/blocks/TestimonialsList";
import LocationsMap from "../components/blocks/LocationsMap";

export const metadata: Metadata = generateMetadata({
  title: "Professional Plumbing Services in Melbourne",
  description: "Reliable and affordable plumbing solutions for homes and businesses in Melbourne. Emergency plumbing, repairs, installations, and more.",
});

export default function HomePage() {
  // Features for the Why Choose Us section
  const features = [
    {
      title: "24/7 Emergency Service",
      description: "Our team is available around the clock to handle any plumbing emergency, providing prompt and reliable service when you need it most.",
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
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Licensed & Insured",
      description: "All our plumbers are fully licensed and insured, ensuring high-quality workmanship and peace of mind for every job we undertake.",
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
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: "Upfront Pricing",
      description: "We provide clear, upfront pricing with no hidden fees or surprises, so you always know exactly what you're paying for.",
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
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Satisfaction Guaranteed",
      description: "We stand behind our work with a 100% satisfaction guarantee, ensuring every job is completed to the highest standards.",
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
            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
          />
        </svg>
      ),
    },
  ];
  
  // Testimonials for the testimonials section
  const testimonials = [
    {
      quote: "Plex Plumbing responded to our emergency call within 30 minutes. They fixed our burst pipe quickly and professionally, preventing further damage to our home. Highly recommended!",
      author: "Sarah Johnson",
      location: "Kensington",
    },
    {
      quote: "We hired Plex for our bathroom renovation and couldn't be happier with the results. Their attention to detail and quality workmanship transformed our outdated bathroom into a modern oasis.",
      author: "Michael Chen",
      location: "Carlton",
    },
    {
      quote: "After struggling with low water pressure for months, Plex Plumbing diagnosed and fixed the issue in just one visit. Their technician was knowledgeable, efficient, and left everything spotless.",
      author: "Emma Williams",
      location: "Footscray",
    },
  ];
  
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Professional Plumbing Services in Melbourne"
        subtitle="Reliable and affordable solutions for all your plumbing needs"
        image="/images/Employee_Fixing_Kitchen_Retail_hero.jpeg"
        desktopImage="/images/Employee_Hero_Widescreen.jpeg"
        primaryButtonText="Request a Quote"
        primaryButtonHref="/en/contact"
        secondaryButtonText="Emergency Service"
        secondaryButtonHref="/en/services/emergency-plumbing"
        imagePosition="center"
      />
      
      {/* Services Section */}
      <ServicesList
        services={services.slice(0, 6)}
        title="Our Services"
        subtitle="Professional plumbing solutions for every need"
        showViewAll={true}
        background="white"
      />
      
      {/* Why Choose Us Section */}
      <FeaturesList
        features={features}
        title="Why Choose Plex Plumbing"
        subtitle="Experience the difference with our professional plumbing services"
        background="light"
        layout="grid"
      />
      
      {/* Emergency Call to Action */}
      <CallToAction
        title="24/7 Emergency Plumbing Services"
        description="Facing a plumbing emergency? Our team is available around the clock to provide fast, reliable service when you need it most."
        primaryButtonText="Call Now"
        primaryButtonHref="tel:0405707017"
        secondaryButtonText="Learn More"
        secondaryButtonHref="/en/services/emergency-plumbing"
        background="secondary"
        image="/images/Employee_Repairing_Drainage_Pipes.jpeg"
      />
      
      {/* Testimonials Section */}
      <TestimonialsList
        testimonials={testimonials}
        title="What Our Customers Say"
        subtitle="Hear from our satisfied customers across Melbourne"
        background="white"
        layout="grid"
      />
      
      {/* Service Areas Section */}
      <LocationsMap
        regions={locations}
        title="Service Areas"
        subtitle="We provide plumbing services throughout Melbourne and surrounding areas"
        background="light"
        layout="accordion"
      />
      
      {/* Final Call to Action */}
      <CallToAction
        title="Ready to Solve Your Plumbing Problems?"
        description="Contact our team today for professional, reliable plumbing services tailored to your needs."
        primaryButtonText="Contact Us"
        primaryButtonHref="/en/contact"
        secondaryButtonText="View Services"
        secondaryButtonHref="/en/services"
        background="primary"
      />
    </>
  );
}
