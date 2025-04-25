import { Region } from "../../lib/data";
import Section, { SectionHeader } from "../ui/Section";
import Link from "next/link";
import { classNames } from "../../lib/utils";

interface LocationsMapProps {
  regions: Region[];
  title?: string;
  subtitle?: string;
  background?: "white" | "light" | "primary" | "secondary" | "accent" | "dark";
  centered?: boolean;
  className?: string;
  layout?: "list" | "grid" | "accordion";
  showCityCount?: boolean;
}

export default function LocationsMap({
  regions,
  title = "Service Areas",
  subtitle = "We provide plumbing services throughout Melbourne and surrounding areas",
  background = "light",
  centered = true,
  className,
  layout = "accordion",
  showCityCount = true,
}: LocationsMapProps) {
  return (
    <Section background={background} className={className}>
      <SectionHeader
        title={title}
        subtitle={subtitle}
        centered={centered}
      />
      
      {layout === "list" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regions.map((region) => (
            <div key={region.slug}>
              <h3 className="text-xl font-bold mb-3">
                <Link
                  href={`/en/locations/${region.slug}`}
                  className="text-primary hover:underline"
                >
                  {region.name}
                </Link>
                {showCityCount && (
                  <span className="text-sm font-normal text-gray-500 ml-2">
                    ({region.cities.length} areas)
                  </span>
                )}
              </h3>
              
              <ul className="space-y-1">
                {region.cities.map((city) => (
                  <li key={city.slug}>
                    <Link
                      href={`/en/locations/${region.slug}/${city.slug}`}
                      className="text-gray-700 hover:text-primary"
                    >
                      {city.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
      
      {layout === "grid" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regions.map((region) => (
            <div
              key={region.slug}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold mb-3">
                <Link
                  href={`/en/locations/${region.slug}`}
                  className="text-primary hover:underline"
                >
                  {region.name}
                </Link>
              </h3>
              
              <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                {region.cities.map((city) => (
                  <div key={city.slug}>
                    <Link
                      href={`/en/locations/${region.slug}/${city.slug}`}
                      className="text-gray-700 hover:text-primary text-sm"
                    >
                      {city.name}
                    </Link>
                  </div>
                ))}
              </div>
              
              <Link
                href={`/en/locations/${region.slug}`}
                className="text-primary text-sm font-medium hover:underline mt-4 inline-block"
              >
                View all in {region.name} →
              </Link>
            </div>
          ))}
        </div>
      )}
      
      {layout === "accordion" && (
        <div className="space-y-4 max-w-4xl mx-auto">
          {regions.map((region, regionIndex) => (
            <details
              key={region.slug}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              open={regionIndex === 0}
            >
              <summary className="flex justify-between items-center p-4 cursor-pointer bg-white hover:bg-gray-50">
                <h3 className="text-xl font-bold">
                  {region.name}
                  {showCityCount && (
                    <span className="text-sm font-normal text-gray-500 ml-2">
                      ({region.cities.length} areas)
                    </span>
                  )}
                </h3>
                <svg
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              
              <div className="p-4 pt-0 border-t">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {region.cities.map((city) => (
                    <Link
                      key={city.slug}
                      href={`/en/locations/${region.slug}/${city.slug}`}
                      className={classNames(
                        "py-2 px-3 rounded-md text-gray-700 hover:bg-primary-light hover:text-white transition-colors",
                        "flex items-center"
                      )}
                    >
                      <svg
                        className="w-4 h-4 mr-2 flex-shrink-0"
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
                      {city.name}
                    </Link>
                  ))}
                </div>
                
                <div className="mt-4 text-right">
                  <Link
                    href={`/en/locations/${region.slug}`}
                    className="text-primary font-medium hover:underline"
                  >
                    View all in {region.name} →
                  </Link>
                </div>
              </div>
            </details>
          ))}
        </div>
      )}
    </Section>
  );
}
