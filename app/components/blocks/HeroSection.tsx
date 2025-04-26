import Image from "next/image";
import Button from "../ui/Button";
import { classNames } from "../../lib/utils";

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
    fullHeight ? "min-h-screen" : "py-20 md:py-32",
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
          src={image}
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
            src={desktopImage}
            alt={imageAlt}
            fill
            priority
            className={classNames(
              "object-cover hidden md:block", 
              imagePositionClasses[imagePosition]
            )}
          />
        ) : (
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            className={classNames(
              "object-cover hidden md:block", 
              imagePositionClasses[imagePosition]
            )}
          />
        )}
        
        {overlay && (
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
        )}
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-20 flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">{subtitle}</p>
          
          <div className="flex flex-wrap gap-4">
            {primaryButtonText && primaryButtonHref && (
              <Button
                variant="secondary"
                size="lg"
                href={primaryButtonHref}
              >
                {primaryButtonText}
              </Button>
            )}
            
            {secondaryButtonText && secondaryButtonHref && (
              <Button
                variant="outline"
                size="lg"
                href={secondaryButtonHref}
                className="border-white text-white hover:bg-white hover:text-gray-900"
              >
                {secondaryButtonText}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
