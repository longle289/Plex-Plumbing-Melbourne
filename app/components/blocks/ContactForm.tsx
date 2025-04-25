"use client";

import { useState, FormEvent } from "react";
import Section, { SectionHeader } from "../ui/Section";
import Button from "../ui/Button";
import { contactInfo } from "../../lib/data";
import { formatPhoneNumber } from "../../lib/utils";

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  background?: "white" | "light" | "primary" | "secondary" | "accent" | "dark";
  centered?: boolean;
  className?: string;
  showContactInfo?: boolean;
}

export default function ContactForm({
  title = "Contact Us",
  subtitle = "Get in touch with our team for all your plumbing needs",
  background = "white",
  centered = true,
  className,
  showContactInfo = true,
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  }>({
    submitted: false,
    success: false,
    message: "",
  });
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: "Thank you for your message. We'll get back to you shortly!",
    });
    
    // In a real implementation, you would send the form data to your backend
    // and handle success/error states accordingly
  };
  
  return (
    <Section background={background} className={className}>
      <SectionHeader
        title={title}
        subtitle={subtitle}
        centered={centered}
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          {formStatus.submitted && formStatus.success ? (
            <div className="bg-accent/10 p-6 rounded-lg border border-accent text-center">
              <svg
                className="w-16 h-16 text-accent mx-auto mb-4"
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
              <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
              <p className="text-gray-700">{formStatus.message}</p>
              <Button
                variant="accent"
                className="mt-6"
                onClick={() => {
                  setFormStatus({
                    submitted: false,
                    success: false,
                    message: "",
                  });
                  setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    service: "",
                    message: "",
                  });
                }}
              >
                Send Another Message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>
                
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>
                
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>
                
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                  >
                    <option value="">Select a service</option>
                    <option value="emergency-plumbing">Emergency Plumbing</option>
                    <option value="general-plumbing-repairs">General Plumbing Repairs</option>
                    <option value="blocked-drains-toilets">Blocked Drains & Toilets</option>
                    <option value="hot-water-system-services">Hot Water System Services</option>
                    <option value="bathroom-kitchen-renovations">Bathroom & Kitchen Renovations</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
                ></textarea>
              </div>
              
              <div>
                <Button type="submit" variant="primary" size="lg">
                  Send Message
                </Button>
              </div>
            </form>
          )}
        </div>
        
        {/* Contact Information */}
        {showContactInfo && (
          <div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-primary mt-1 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div>
                    <p className="font-medium">Phone</p>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="text-primary hover:underline"
                    >
                      {formatPhoneNumber(contactInfo.phone)}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-primary mt-1 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-primary hover:underline"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg
                    className="w-5 h-5 text-primary mt-1 mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div>
                    <p className="font-medium">Address</p>
                    <p>{contactInfo.address}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-bold mb-2">Business Hours</h4>
                <ul className="space-y-1">
                  <li className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>{contactInfo.hours.weekdays}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span>{contactInfo.hours.saturday}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span>{contactInfo.hours.sunday}</span>
                  </li>
                </ul>
              </div>
              
              <div className="mt-8 p-4 bg-secondary/10 rounded-md border border-secondary/20">
                <h4 className="font-bold text-secondary mb-2">
                  Emergency Service
                </h4>
                <p className="text-sm">{contactInfo.emergency}</p>
                <Button
                  href="/en/services/emergency-plumbing"
                  variant="secondary"
                  className="mt-3"
                >
                  Emergency Plumbing
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Section>
  );
}
