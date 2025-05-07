import { Metadata } from "next";
import { generateMetadata } from "../../lib/seo";
import HeroSection from "../../components/blocks/HeroSection";
import Section, { SectionHeader } from "../../components/ui/Section";
import CallToAction from "../../components/blocks/CallToAction";

export const metadata: Metadata = generateMetadata({
  title: "Terms of Service",
  description: "Read the terms and conditions that govern your use of Plex Plumbing Melbourne's services and website.",
  keywords: ["terms of service", "terms and conditions", "plumbing terms", "service agreement"],
  url: "/en/terms-of-service",
});

export default function TermsOfServicePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Terms of Service"
        subtitle="The terms and conditions that govern your use of our services"
        image="/images/Employee_Fixing_Kitchen_Retail_hero.jpeg"
        desktopImage="/images/Employee_Hero_Widescreen.jpeg"
        imagePosition="right"
      />
      
      {/* Terms of Service Content */}
      <Section background="white">
        <SectionHeader
          title="Terms of Service"
          subtitle="Last Updated: May 7, 2025"
        />
        
        <div className="prose prose-lg max-w-none">
          <h3>1. Introduction</h3>
          <p>
            These terms and conditions outline the rules and regulations for the use of Plex Plumbing Melbourne's website 
            and services. By accessing this website or using our services, we assume you accept these terms and conditions 
            in full. Do not continue to use Plex Plumbing Melbourne's website or services if you do not accept all of the 
            terms and conditions stated on this page.
          </p>
          
          <h3>2. License to Use Website</h3>
          <p>
            Unless otherwise stated, Plex Plumbing Melbourne and/or its licensors own the intellectual property rights 
            for all material on this website. All intellectual property rights are reserved. You may view and/or print 
            pages from the website for your own personal use subject to restrictions set in these terms and conditions.
          </p>
          <p>You must not:</p>
          <ul>
            <li>Republish material from this website</li>
            <li>Sell, rent or sub-license material from this website</li>
            <li>Reproduce, duplicate or copy material from this website</li>
            <li>Redistribute content from Plex Plumbing Melbourne (unless content is specifically made for redistribution)</li>
          </ul>
          
          <h3>3. Service Terms</h3>
          <p>
            By engaging our plumbing services, you agree to the following terms:
          </p>
          <ul>
            <li><strong>Quotes and Estimates:</strong> All quotes provided are valid for 30 days from the date of issue. Quotes are based on information provided and visual inspections. Additional costs may apply if unforeseen issues arise during the work.</li>
            <li><strong>Payment Terms:</strong> Payment is due upon completion of work for residential services under $2,000. For larger projects, a deposit may be required, with progress payments for extended projects.</li>
            <li><strong>Warranties:</strong> Our workmanship is guaranteed for 6 months from completion. Manufacturer warranties apply to all products and parts installed.</li>
            <li><strong>Cancellations:</strong> Cancellations with less than 24 hours notice may incur a call-out fee.</li>
          </ul>
          
          <h3>4. Emergency Services</h3>
          <p>
            For emergency plumbing services, additional call-out fees may apply outside of regular business hours. 
            These will be clearly communicated before work commences.
          </p>
          
          <h3>5. User Responsibilities</h3>
          <p>
            When using our services, you are responsible for:
          </p>
          <ul>
            <li>Providing accurate information about the plumbing issue</li>
            <li>Ensuring reasonable access to the work area</li>
            <li>Disclosing any known issues that may affect the plumbing work</li>
            <li>Obtaining necessary permissions (e.g., from landlords or body corporate) if you are not the property owner</li>
          </ul>
          
          <h3>6. Limitation of Liability</h3>
          <p>
            To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions 
            relating to our website and services and the use of this website. Nothing in this disclaimer will:
          </p>
          <ul>
            <li>Limit or exclude our or your liability for death or personal injury</li>
            <li>Limit or exclude our or your liability for fraud or fraudulent misrepresentation</li>
            <li>Limit any of our or your liabilities in any way that is not permitted under applicable law</li>
            <li>Exclude any of our or your liabilities that may not be excluded under applicable law</li>
          </ul>
          
          <h3>7. Indemnification</h3>
          <p>
            You hereby indemnify us and undertake to keep us indemnified against any losses, damages, costs, liabilities 
            and expenses incurred or suffered by us arising out of any breach by you of any provision of these terms.
          </p>
          
          <h3>8. Variations</h3>
          <p>
            We may revise these terms and conditions from time-to-time. Revised terms and conditions will apply to the 
            use of this website and our services from the date of the publication of the revised terms and conditions on 
            our website. Please check this page regularly to ensure you are familiar with the current version.
          </p>
          
          <h3>9. Entire Agreement</h3>
          <p>
            These terms and conditions, together with our Privacy Policy, constitute the entire agreement between you and 
            Plex Plumbing Melbourne in relation to your use of this website and our services, and supersede all previous 
            agreements in respect of your use of this website and services.
          </p>
          
          <h3>10. Governing Law</h3>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of Victoria, Australia, 
            and you submit to the non-exclusive jurisdiction of the state courts located in Victoria for the resolution 
            of any disputes.
          </p>
          
          <h3>11. Contact Us</h3>
          <p>
            If you have any questions about these Terms of Service, please contact us at:
          </p>
          <p>
            Email: info@plexplumbing.com.au<br />
            Phone: 0405 707 017<br />
            Address: Delahey, Melbourne, Victoria 3037, Australia
          </p>
        </div>
      </Section>
      
      {/* Call to Action */}
      <CallToAction
        title="Ready to Get Started?"
        description="Contact our team today for reliable and professional plumbing solutions."
        primaryButtonText="Contact Us"
        primaryButtonHref="/en/contact"
        secondaryButtonText="View Services"
        secondaryButtonHref="/en/services"
        background="light"
      />
    </>
  );
}
