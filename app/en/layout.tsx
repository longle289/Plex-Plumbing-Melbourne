import type { Metadata } from "next";
import { generateMetadata } from "../lib/seo";
import Navigation from "../components/layout/Navigation";
import Script from "next/script";

export const metadata: Metadata = generateMetadata({
  title: "Professional Plumbing Services",
  description: "Reliable and affordable plumbing solutions for homes and businesses in Melbourne. Emergency plumbing, repairs, installations, and more.",
});

export default function EnglishLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navigation>{children}</Navigation>
      
      {/* JSON-LD for business */}
      <Script
        id="business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Plex Plumbing Melbourne",
            "image": "/images/Plex_Plumbing_Logo.jpeg",
            "@id": "https://plexplumbing.com.au",
            "url": "https://plexplumbing.com.au",
            "telephone": "0405 707 017",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Delahey",
              "addressLocality": "Melbourne",
              "addressRegion": "Victoria",
              "postalCode": "3037",
              "addressCountry": "AU",
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -37.7213,
              "longitude": 144.7663,
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                "opens": "07:00",
                "closes": "17:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "08:00",
                "closes": "14:00",
              },
            ],
            "priceRange": "$$",
          }),
        }}
      />
    </>
  );
}
