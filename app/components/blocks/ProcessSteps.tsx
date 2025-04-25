import { ReactNode } from "react";
import Section, { SectionHeader } from "../ui/Section";
import { classNames } from "../../lib/utils";
import Image from "next/image";

interface Step {
  title: string;
  description: string;
  icon?: ReactNode;
  image?: string;
}

interface ProcessStepsProps {
  steps: Step[];
  title?: string;
  subtitle?: string;
  background?: "white" | "light" | "primary" | "secondary" | "accent" | "dark";
  centered?: boolean;
  className?: string;
  layout?: "horizontal" | "vertical" | "zigzag";
  numbered?: boolean;
}

export default function ProcessSteps({
  steps,
  title = "Our Process",
  subtitle = "How we deliver exceptional plumbing services",
  background = "white",
  centered = true,
  className,
  layout = "horizontal",
  numbered = true,
}: ProcessStepsProps) {
  return (
    <Section background={background} className={className}>
      <SectionHeader
        title={title}
        subtitle={subtitle}
        centered={centered}
      />
      
      {layout === "horizontal" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={classNames(
                "relative",
                centered ? "text-center" : ""
              )}
            >
              {numbered && (
                <div
                  className={classNames(
                    "w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mb-4",
                    centered ? "mx-auto" : ""
                  )}
                >
                  {index + 1}
                </div>
              )}
              
              {step.icon && !numbered && (
                <div
                  className={classNames(
                    "text-primary mb-4",
                    centered ? "mx-auto" : ""
                  )}
                >
                  {step.icon}
                </div>
              )}
              
              {step.image && (
                <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-gray-200 -z-10 transform -translate-x-4">
                  <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 rotate-45 border-t-2 border-r-2 border-gray-200"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      
      {layout === "vertical" && (
        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className={classNames(
                "relative flex items-start mb-12 last:mb-0",
                index % 2 === 1 ? "flex-row-reverse" : ""
              )}
            >
              {/* Timeline line */}
              {index < steps.length - 1 && (
                <div className="absolute top-12 bottom-0 left-6 w-0.5 bg-gray-200"></div>
              )}
              
              {/* Step number or icon */}
              <div className="flex-shrink-0 z-10">
                {numbered ? (
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">
                    {index + 1}
                  </div>
                ) : step.icon ? (
                  <div className="text-primary">{step.icon}</div>
                ) : null}
              </div>
              
              {/* Content */}
              <div className="ml-8">
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                
                {step.image && (
                  <div className="relative h-48 w-full md:w-80 rounded-lg overflow-hidden">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
      
      {layout === "zigzag" && (
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className={classNames(
                "grid md:grid-cols-2 gap-8 items-center",
                index % 2 === 1 ? "md:grid-flow-dense" : ""
              )}
            >
              {/* Image */}
              {step.image && (
                <div
                  className={classNames(
                    "relative h-64 rounded-lg overflow-hidden",
                    index % 2 === 1 ? "md:col-start-2" : ""
                  )}
                >
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              
              {/* Content */}
              <div>
                <div className="flex items-center mb-4">
                  {numbered && (
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mr-4">
                      {index + 1}
                    </div>
                  )}
                  
                  {step.icon && !numbered && (
                    <div className="text-primary mr-4">{step.icon}</div>
                  )}
                  
                  <h3 className="text-2xl font-bold">{step.title}</h3>
                </div>
                
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </Section>
  );
}
