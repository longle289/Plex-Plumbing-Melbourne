"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { services, locations, Service, Region, City } from "../../lib/data";
import { classNames } from "../../lib/utils";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [locationsMenuOpen, setLocationsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/en" className="flex items-center">
            <Image
              src="/images/Plex_Plumbing_Logo_Upscaled.jpeg"
              alt="Plex Plumbing Melbourne"
              width={300}
              height={300}
              className="rounded-md"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/en"
              className="text-gray-700 hover:text-primary font-medium"
            >
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group" style={{ transition: 'all 0.3s ease' }}>
              <button
                className="text-gray-700 hover:text-primary font-medium flex items-center"
                onClick={() => setServicesMenuOpen(!servicesMenuOpen)}
              >
                Services
                <svg
                  className="ml-1 w-4 h-4"
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
              </button>
              
              <div className="absolute left-0 mt-2 w-72 bg-white rounded-md shadow-lg py-2 z-10 hidden group-hover:block transition-all duration-300 opacity-0 group-hover:opacity-100">
                {services.map((service: Service) => (
                  <Link
                    key={service.id}
                    href={`/en/services/${service.id}`}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Locations Dropdown */}
            <div className="relative group" style={{ transition: 'all 0.3s ease' }}>
              <button
                className="text-gray-700 hover:text-primary font-medium flex items-center"
                onClick={() => setLocationsMenuOpen(!locationsMenuOpen)}
              >
                Locations
                <svg
                  className="ml-1 w-4 h-4"
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
              </button>
              
              <div className="absolute left-0 mt-2 w-72 bg-white rounded-md shadow-lg py-2 z-10 hidden group-hover:block transition-all duration-300 opacity-0 group-hover:opacity-100">
                {locations.map((region: Region) => (
                  <div key={region.slug}>
                    <Link
                      href={`/en/locations/${region.slug}`}
                      className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                    >
                      {region.name}
                    </Link>
                    
                    {region.cities.slice(0, 5).map((city: City) => (
                      <Link
                        key={city.slug}
                        href={`/en/locations/${region.slug}/${city.slug}`}
                        className="block px-8 py-1 text-sm text-gray-600 hover:bg-gray-100"
                      >
                        {city.name}
                      </Link>
                    ))}
                    
                    {region.cities.length > 5 && (
                      <Link
                        href={`/en/locations/${region.slug}`}
                        className="block px-8 py-1 text-sm text-primary hover:bg-gray-100"
                      >
                        View all {region.cities.length} locations...
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            <Link
              href="/en/contact"
              className="text-gray-700 hover:text-primary font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* Contact and Emergency */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Phone Number */}
            <a 
              href="tel:0405707017" 
              className="flex items-center text-primary font-medium hover:text-primary-dark transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
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
              0405 707 017
            </a>
            
            {/* Emergency Call Button */}
            <Link
              href="/en/services/emergency-plumbing"
              className="btn-secondary flex items-center"
            >
              <svg
                className="w-5 h-5 mr-2"
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
              Emergency Call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-primary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={classNames(
          "md:hidden bg-white border-t",
          mobileMenuOpen ? "block" : "hidden"
        )}
      >
        <div className="container-custom py-4 space-y-2">
          <Link
            href="/en"
            className="block py-2 text-gray-700 hover:text-primary font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          
          {/* Mobile Services Dropdown */}
          <div>
            <button
              className="flex justify-between items-center w-full py-2 text-gray-700 hover:text-primary font-medium"
              onClick={() => setServicesMenuOpen(!servicesMenuOpen)}
            >
              Services
              <svg
                className={classNames(
                  "w-4 h-4 transition-transform",
                  servicesMenuOpen ? "rotate-180" : ""
                )}
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
            </button>
            
            <div
              className={classNames(
                "pl-4 space-y-2 mt-2",
                servicesMenuOpen ? "block" : "hidden"
              )}
            >
              {services.map((service: Service) => (
                <Link
                  key={service.id}
                  href={`/en/services/${service.id}`}
                  className="block py-1 text-gray-600 hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Mobile Locations Dropdown */}
          <div>
            <button
              className="flex justify-between items-center w-full py-2 text-gray-700 hover:text-primary font-medium"
              onClick={() => setLocationsMenuOpen(!locationsMenuOpen)}
            >
              Locations
              <svg
                className={classNames(
                  "w-4 h-4 transition-transform",
                  locationsMenuOpen ? "rotate-180" : ""
                )}
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
            </button>
            
            <div
              className={classNames(
                "pl-4 space-y-2 mt-2",
                locationsMenuOpen ? "block" : "hidden"
              )}
            >
              {locations.map((region: Region) => (
                <div key={region.slug} className="mb-2">
                  <Link
                    href={`/en/locations/${region.slug}`}
                    className="block py-1 font-medium text-gray-700 hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {region.name}
                  </Link>
                  
                  <div className="pl-4 space-y-1 mt-1">
                    {region.cities.slice(0, 3).map((city: City) => (
                      <Link
                        key={city.slug}
                        href={`/en/locations/${region.slug}/${city.slug}`}
                        className="block py-1 text-sm text-gray-600 hover:text-primary"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {city.name}
                      </Link>
                    ))}
                    
                    {region.cities.length > 3 && (
                      <Link
                        href={`/en/locations/${region.slug}`}
                        className="block py-1 text-sm text-primary hover:underline"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        View all {region.cities.length} locations...
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <Link
            href="/en/contact"
            className="block py-2 text-gray-700 hover:text-primary font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
          
          {/* Phone Number */}
          <a 
            href="tel:0405707017" 
            className="flex items-center text-primary font-medium hover:text-primary-dark transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            <svg
              className="w-5 h-5 mr-2"
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
            0405 707 017
          </a>
          
          {/* Emergency Call Button */}
          <Link
            href="/en/services/emergency-plumbing"
            className="btn-secondary flex items-center justify-center mt-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            <svg
              className="w-5 h-5 mr-2"
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
            Emergency Call
          </Link>
        </div>
      </div>
    </header>
  );
}
