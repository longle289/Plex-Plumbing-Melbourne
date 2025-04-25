import { Service } from "../../lib/data";
import Card from "../ui/Card";
import Section, { SectionHeader } from "../ui/Section";
import Button from "../ui/Button";
import { getRandomItems } from "../../lib/utils";

interface ServicesListProps {
  services: Service[];
  title?: string;
  subtitle?: string;
  limit?: number;
  showViewAll?: boolean;
  background?: "white" | "light" | "primary" | "secondary" | "accent" | "dark";
  centered?: boolean;
  columns?: 2 | 3 | 4;
  className?: string;
}

export default function ServicesList({
  services,
  title = "Our Services",
  subtitle = "Professional plumbing solutions for every need",
  limit,
  showViewAll = true,
  background = "white",
  centered = true,
  columns = 3,
  className,
}: ServicesListProps) {
  // Limit the number of services if specified
  const displayServices = limit ? getRandomItems(services, limit) : services;
  
  // Determine grid columns class
  const gridColumnsClass = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  }[columns];
  
  return (
    <Section background={background} className={className}>
      <SectionHeader
        title={title}
        subtitle={subtitle}
        centered={centered}
      />
      
      <div className={`grid grid-cols-1 ${gridColumnsClass} gap-6 md:gap-8`}>
        {displayServices.map((service) => (
          <Card
            key={service.id}
            title={service.title}
            description={service.shortDescription}
            image={service.image}
            href={`/en/services/${service.id}`}
            imageAlt={`${service.title} - Plex Plumbing Melbourne`}
          />
        ))}
      </div>
      
      {showViewAll && services.length > displayServices.length && (
        <div className="mt-12 text-center">
          <Button href="/en/services" variant="outline">
            View All Services
          </Button>
        </div>
      )}
    </Section>
  );
}
