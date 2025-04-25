import { ReactNode } from "react";
import Section, { SectionHeader } from "../ui/Section";
import { classNames } from "../../lib/utils";

interface Feature {
  title: string;
  description: string;
  icon: ReactNode;
}

interface FeaturesListProps {
  features: Feature[];
  title?: string;
  subtitle?: string;
  background?: "white" | "light" | "primary" | "secondary" | "accent" | "dark";
  centered?: boolean;
  columns?: 2 | 3 | 4;
  layout?: "grid" | "cards" | "list";
  className?: string;
}

export default function FeaturesList({
  features,
  title = "Why Choose Us",
  subtitle = "Discover the Plex Plumbing difference",
  background = "light",
  centered = true,
  columns = 3,
  layout = "grid",
  className,
}: FeaturesListProps) {
  // Determine grid columns class
  const gridColumnsClass = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  }[columns];
  
  return (
    <Section background={background} className={className}>
      <SectionHeader
        title={title}
        subtitle={subtitle}
        centered={centered}
      />
      
      {layout === "grid" && (
        <div className={`grid grid-cols-1 ${gridColumnsClass} gap-8 md:gap-12`}>
          {features.map((feature, index) => (
            <div key={index} className={centered ? "text-center" : ""}>
              <div className={classNames(
                "text-primary mb-4",
                centered ? "mx-auto" : ""
              )}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-black md:text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      )}
      
      {layout === "cards" && (
        <div className={`grid grid-cols-1 ${gridColumnsClass} gap-6`}>
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-black md:text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      )}
      
      {layout === "list" && (
        <div className="space-y-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <div className="text-primary mr-4 mt-1">{feature.icon}</div>
              <div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-black md:text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </Section>
  );
}
