"use client";

import { useState } from "react";
import Section, { SectionHeader } from "../ui/Section";
import { classNames } from "../../lib/utils";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqs: FaqItem[];
  title?: string;
  subtitle?: string;
  background?: "white" | "light" | "primary" | "secondary" | "accent" | "dark";
  centered?: boolean;
  className?: string;
  layout?: "accordion" | "grid";
  columns?: 1 | 2;
}

export default function FaqSection({
  faqs,
  title = "Frequently Asked Questions",
  subtitle = "Find answers to common questions about our plumbing services",
  background = "light",
  centered = true,
  className,
  layout = "accordion",
  columns = 1,
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <Section background={background} className={className}>
      <SectionHeader
        title={title}
        subtitle={subtitle}
        centered={centered}
      />
      
      {layout === "accordion" && (
        <div className="max-w-3xl mx-auto divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="py-5">
              <button
                className="flex w-full justify-between items-start text-left"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                <span className="ml-6 flex-shrink-0">
                  <svg
                    className={classNames(
                      "h-6 w-6 transform",
                      openIndex === index ? "rotate-180" : "rotate-0"
                    )}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
              <div
                className={classNames(
                  "mt-2 pr-12 transition-all duration-300 ease-in-out overflow-hidden",
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <p className="text-base text-black md:text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {layout === "grid" && (
        <div
          className={classNames(
            "grid gap-6",
            columns === 2 ? "md:grid-cols-2" : "max-w-3xl mx-auto"
          )}
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                {faq.question}
              </h3>
              <p className="text-black md:text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      )}
    </Section>
  );
}
