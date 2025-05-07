import { Metadata } from "next";
import { generateMetadata } from "../../lib/seo";
import HeroSection from "../../components/blocks/HeroSection";
import Section, { SectionHeader } from "../../components/ui/Section";
import CallToAction from "../../components/blocks/CallToAction";

export const metadata: Metadata = generateMetadata({
  title: "Privacy Policy",
  description: "Learn about how Plex Plumbing Melbourne collects, uses, and protects your personal information.",
  keywords: ["privacy policy", "data protection", "personal information", "plumbing privacy"],
  url: "/en/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your personal information"
        image="/images/Employee_Fixing_Kitchen_Retail.jpeg"
        imagePosition="right"
      />
      
      {/* Privacy Policy Content */}
      <Section background="white">
        <SectionHeader
          title="Privacy Policy"
          subtitle="Last Updated: May 7, 2025"
        />
        
        <div className="prose prose-lg max-w-none">
          <h3>1. Introduction</h3>
          <p>
            At Plex Plumbing Melbourne, we respect your privacy and are committed to protecting your personal data. 
            This privacy policy will inform you about how we look after your personal data when you visit our website 
            and tell you about your privacy rights and how the law protects you.
          </p>
          
          <h3>2. The Data We Collect About You</h3>
          <p>
            Personal data, or personal information, means any information about an individual from which that person 
            can be identified. We may collect, use, store and transfer different kinds of personal data about you which 
            we have grouped together as follows:
          </p>
          <ul>
            <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
            <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
            <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
            <li><strong>Marketing and Communications Data</strong> includes your preferences in receiving marketing from us and our third parties and your communication preferences.</li>
          </ul>
          
          <h3>3. How We Use Your Personal Data</h3>
          <p>
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul>
            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
            <li>Where we need to comply with a legal obligation.</li>
          </ul>
          
          <h3>4. Data Security</h3>
          <p>
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, 
            used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal 
            data to those employees, agents, contractors and other third parties who have a business need to know. 
            They will only process your personal data on our instructions and they are subject to a duty of confidentiality.
          </p>
          
          <h3>5. Data Retention</h3>
          <p>
            We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, 
            including for the purposes of satisfying any legal, accounting, or reporting requirements.
          </p>
          <p>
            To determine the appropriate retention period for personal data, we consider the amount, nature, and sensitivity 
            of the personal data, the potential risk of harm from unauthorized use or disclosure of your personal data, 
            the purposes for which we process your personal data and whether we can achieve those purposes through other means, 
            and the applicable legal requirements.
          </p>
          
          <h3>6. Your Legal Rights</h3>
          <p>
            Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
          </p>
          <ul>
            <li>Request access to your personal data.</li>
            <li>Request correction of your personal data.</li>
            <li>Request erasure of your personal data.</li>
            <li>Object to processing of your personal data.</li>
            <li>Request restriction of processing your personal data.</li>
            <li>Request transfer of your personal data.</li>
            <li>Right to withdraw consent.</li>
          </ul>
          
          <h3>7. Cookies</h3>
          <p>
            You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. 
            If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
          </p>
          
          <h3>8. Changes to This Privacy Policy</h3>
          <p>
            We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.
          </p>
          <p>
            We will let you know via email and/or a prominent notice on our website, when we make any significant changes to this privacy policy and we will update the "Last Updated" date at the top of this privacy policy.
          </p>
          
          <h3>9. Contact Us</h3>
          <p>
            If you have any questions about this privacy policy or our privacy practices, please contact us at:
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
        title="Need Plumbing Services?"
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
