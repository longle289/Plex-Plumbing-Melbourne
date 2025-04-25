import Link from "next/link";
import Image from "next/image";
import { services, locations, contactInfo } from "../../lib/data";
import { formatPhoneNumber } from "../../lib/utils";

export default function Footer() {
  // Get a subset of services for the footer
  const footerServices = services.slice(0, 6);
  
  // Get a subset of locations for the footer
  const footerLocations = locations.slice(0, 3).flatMap((region) => 
    region.cities.slice(0, 3).map((city) => ({
      name: city.name,
      slug: city.slug,
      regionSlug: region.slug,
    }))
  );

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Image
                src="/images/Plex_Plumbing_Logo.jpeg"
                alt="Plex Plumbing Melbourne"
                width={50}
                height={50}
                className="rounded-md"
              />
              <div className="ml-3">
                <div className="text-xl font-bold text-white">Plex Plumbing</div>
                <div className="text-sm text-gray-400">Melbourne</div>
              </div>
            </div>
            
            <p className="text-gray-400 mb-4">
              Reliable and affordable plumbing solutions for homes and businesses across Melbourne.
            </p>
            
            <div className="space-y-2">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-primary"
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
                <a href={`tel:${contactInfo.phone}`} className="hover:text-primary">
                  {formatPhoneNumber(contactInfo.phone)}
                </a>
              </div>
              
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-primary"
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
                <a href={`mailto:${contactInfo.email}`} className="hover:text-primary">
                  {contactInfo.email}
                </a>
              </div>
              
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-primary"
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
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Our Services</h3>
            <ul className="space-y-2">
              {footerServices.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/en/services/${service.id}`}
                    className="text-gray-400 hover:text-primary"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/en/services"
                  className="text-primary hover:underline"
                >
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Locations */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Service Areas</h3>
            <ul className="space-y-2">
              {footerLocations.map((location) => (
                <li key={location.slug}>
                  <Link
                    href={`/en/locations/${location.regionSlug}/${location.slug}`}
                    className="text-gray-400 hover:text-primary"
                  >
                    {location.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/en/locations"
                  className="text-primary hover:underline"
                >
                  View All Locations →
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Hours */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Business Hours</h3>
            <ul className="space-y-2 text-gray-400">
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
            
            <div className="mt-6">
              <h4 className="font-bold text-secondary mb-2">Emergency Service</h4>
              <p className="text-gray-400">{contactInfo.emergency}</p>
              <Link
                href="/en/services/emergency-plumbing"
                className="btn-secondary mt-3 inline-block"
              >
                Emergency Call
              </Link>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-gray-500 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              © {new Date().getFullYear()} Plex Plumbing Melbourne. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link href="/en/privacy-policy" className="hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="/en/terms-of-service" className="hover:text-primary">
                Terms of Service
              </Link>
              <Link href="/en/sitemap" className="hover:text-primary">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
