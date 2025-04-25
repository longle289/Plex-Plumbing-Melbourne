import { Metadata } from "next";
import { generateMetadata } from "../../lib/seo";
import HeroSection from "../../components/blocks/HeroSection";
import ContactForm from "../../components/blocks/ContactForm";
import FaqSection from "../../components/blocks/FaqSection";
import CallToAction from "../../components/blocks/CallToAction";

export const metadata: Metadata = generateMetadata({
  title: "Contact Us",
  description: "Get in touch with Plex Plumbing Melbourne for all your plumbing needs. Request a quote, schedule a service, or ask us any questions.",
  keywords: ["contact plumber", "plumbing quote", "Melbourne plumber contact", "schedule plumbing service"],
  url: "/en/contact",
});

export default function ContactPage() {
  // FAQs for the contact page
  const faqs = [
    {
      question: "How quickly can you respond to service requests?",
      answer: "For emergencies, we aim to respond within 30-60 minutes. For non-emergency services, we typically offer same-day or next-day appointments, depending on our schedule and your availability.",
    },
    {
      question: "Do you provide free quotes?",
      answer: "Yes, we provide free quotes for all our services. For simple jobs, we can often provide a quote over the phone. For more complex projects, we may need to visit your property to assess the situation before providing a detailed quote.",
    },
    {
      question: "What areas do you service?",
      answer: "We service Melbourne and surrounding areas, including all suburbs within the City of Melbourne, Maribyrnong, Hobsons Bay, Brimbank, Melton, and Wyndham regions. If you're unsure if we service your area, please contact us.",
    },
    {
      question: "What information should I provide when requesting a quote?",
      answer: "To provide the most accurate quote, please include details about the service you need, the issue you're experiencing, your location, and any relevant information about your property. Photos can also be helpful for us to better understand the situation.",
    },
    {
      question: "Do you offer emergency services outside of business hours?",
      answer: "Yes, we provide 24/7 emergency plumbing services. Our team is available around the clock to handle urgent plumbing issues, including weekends and holidays.",
    },
  ];
  
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Contact Us"
        subtitle="Get in touch with our team for all your plumbing needs"
        image="/images/Employee_Fixing_Kitchen_Retail.jpeg"
        primaryButtonText="Call Now"
        primaryButtonHref="tel:0405707017"
        imagePosition="right"
      />
      
      {/* Contact Form Section */}
      <ContactForm
        title="Get in Touch"
        subtitle="Fill out the form below and we'll get back to you as soon as possible"
        background="white"
        showContactInfo={true}
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
        subtitle="Find answers to common questions about contacting us and our services"
        background="white"
      />
    </>
  );
}
