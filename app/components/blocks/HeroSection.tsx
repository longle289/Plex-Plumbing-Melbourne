import Image from "next/image";
import Button from "../ui/Button";
import { classNames, withCacheBusting } from "../../lib/utils";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  image: string;
  desktopImage?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  overlay?: boolean;
  className?: string;
  imagePosition?: "left" | "right" | "center";
  imageAlt?: string;
  fullHeight?: boolean;
}

export default function HeroSection({
  title,
  subtitle,
  image,
  desktopImage,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
  overlay = true,
  className,
  imagePosition = "center",
  imageAlt = "Hero image",
  fullHeight = false,
}: HeroSectionProps) {
  const containerClasses = classNames(
    "relative overflow-hidden",
    fullHeight ? "min-h-screen" : "py-20 md:py-32 md:min-h-[500px]",
    className
  );
  
  const imagePositionClasses = {
    left: "object-left",
    right: "object-right",
    center: "object-center",
  };
  
  return (
    <div className={containerClasses}>
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        {/* Mobile Image (default) */}
        <Image
          src={withCacheBusting(image)}
          alt={imageAlt}
          fill
          priority
          className={classNames(
            "object-cover md:hidden", 
            imagePositionClasses[imagePosition]
          )}
        />
        
        {/* Desktop Image (shown on md breakpoint and above) */}
        {desktopImage ? (
          <Image
            src={withCacheBusting(desktopImage)}
            alt={imageAlt}
            fill
            priority
            className={classNames(
              "object-fill hidden md:block", 
              imagePositionClasses[imagePosition]
            )}
          />
        ) : (
          <Image
            src={withCacheBusting(image)}
            alt={imageAlt}
            fill
            priority
            className={classNames(
              "object-fill hidden md:block", 
              imagePositionClasses[imagePosition]
            )}
          />
        )}
        
        {overlay && (
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
        )}
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-20 flex items-center min-h-[600px] md:min-h-[700px]">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-12 text-white/95 leading-relaxed">{subtitle}</p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            {primaryButtonText && primaryButtonHref && (
              <Button
                variant="secondary"
                size="lg"
                href={primaryButtonHref}
                className="text-lg md:text-xl px-10 py-5 bg-emergency hover:bg-emergency-dark shadow-2xl"
              >
                <svg
                  className="w-6 h-6 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                {primaryButtonText}
              </Button>
            )}
            
            {secondaryButtonText && secondaryButtonHref && (
              <Button
                variant="outline"
                size="lg"
                href={secondaryButtonHref}
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg md:text-xl px-10 py-5 shadow-xl"
              >
                {secondaryButtonText}
              </Button>
            )}
          </div>
          
          <div className="mt-12 flex flex-wrap items-center gap-8 text-white/90">
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">24/7 Emergency Service</span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Licensed & Insured</span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Free Quotes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
