import Section, { SectionHeader } from "../ui/Section";
import { classNames } from "../../lib/utils";

interface Testimonial {
  quote: string;
  author: string;
  role?: string;
  location?: string;
}

interface TestimonialsListProps {
  testimonials: Testimonial[];
  title?: string;
  subtitle?: string;
  background?: "white" | "light" | "primary" | "secondary" | "accent" | "dark";
  centered?: boolean;
  layout?: "grid" | "slider" | "featured";
  columns?: 1 | 2 | 3;
  className?: string;
}

export default function TestimonialsList({
  testimonials,
  title = "What Our Customers Say",
  subtitle = "Hear from our satisfied customers across Melbourne",
  background = "white",
  centered = true,
  layout = "grid",
  columns = 3,
  className,
}: TestimonialsListProps) {
  // Determine grid columns class
  const gridColumnsClass = {
    1: "",
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
  }[columns];
  
  return (
    <Section background={background} className={className}>
      <SectionHeader
        title={title}
        subtitle={subtitle}
        centered={centered}
      />
      
      {layout === "grid" && (
        <div className={`grid grid-cols-1 ${gridColumnsClass} gap-8`}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
            >
              <div className="mb-4">
                <svg
                  className="w-8 h-8 text-primary opacity-50"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              <p className="text-gray-700 mb-4">{testimonial.quote}</p>
              <div>
                <p className="font-bold">{testimonial.author}</p>
                {(testimonial.role || testimonial.location) && (
                  <p className="text-sm text-gray-500">
                    {testimonial.role && <span>{testimonial.role}</span>}
                    {testimonial.role && testimonial.location && <span>, </span>}
                    {testimonial.location && <span>{testimonial.location}</span>}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
      
      {layout === "featured" && (
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <svg
              className="w-12 h-12 text-primary opacity-50 mx-auto"
              fill="currentColor"
              viewBox="0 0 32 32"
              aria-hidden="true"
            >
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
          </div>
          <p className="text-2xl font-medium mb-8">
            {testimonials[0]?.quote}
          </p>
          <div>
            <p className="font-bold text-lg">{testimonials[0]?.author}</p>
            {(testimonials[0]?.role || testimonials[0]?.location) && (
              <p className="text-gray-500">
                {testimonials[0]?.role && <span>{testimonials[0]?.role}</span>}
                {testimonials[0]?.role && testimonials[0]?.location && <span>, </span>}
                {testimonials[0]?.location && <span>{testimonials[0]?.location}</span>}
              </p>
            )}
          </div>
        </div>
      )}
      
      {layout === "slider" && (
        <div className="overflow-hidden">
          <div className="flex flex-nowrap overflow-x-auto pb-8 -mx-4 px-4 scrollbar-hide">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-none w-full md:w-1/2 lg:w-1/3 px-4"
              >
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 h-full">
                  <div className="mb-4">
                    <svg
                      className="w-8 h-8 text-primary opacity-50"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 mb-4">{testimonial.quote}</p>
                  <div>
                    <p className="font-bold">{testimonial.author}</p>
                    {(testimonial.role || testimonial.location) && (
                      <p className="text-sm text-gray-500">
                        {testimonial.role && <span>{testimonial.role}</span>}
                        {testimonial.role && testimonial.location && <span>, </span>}
                        {testimonial.location && <span>{testimonial.location}</span>}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}
