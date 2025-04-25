import Section from "../ui/Section";
import Button from "../ui/Button";
import Image from "next/image";
import { classNames } from "../../lib/utils";

interface CallToActionProps {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonHref: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  background?: "white" | "light" | "primary" | "secondary" | "accent" | "dark";
  image?: string;
  imagePosition?: "left" | "right";
  className?: string;
  imageAlt?: string;
}

export default function CallToAction({
  title,
  description,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
  background = "primary",
  image,
  imagePosition = "right",
  className,
  imageAlt = "Call to action image",
}: CallToActionProps) {
  // If there's an image, use a grid layout
  const hasImage = !!image;
  
  return (
    <Section background={background} className={className}>
      <div
        className={classNames(
          hasImage ? "grid gap-8 items-center" : "",
          hasImage && imagePosition === "left"
            ? "md:grid-cols-2 md:grid-flow-dense"
            : hasImage
            ? "md:grid-cols-2"
            : "",
          !hasImage ? "text-center max-w-3xl mx-auto" : ""
        )}
      >
        {/* Content */}
        <div
          className={classNames(
            hasImage && imagePosition === "right" ? "md:pr-8" : "",
            hasImage && imagePosition === "left" ? "md:pl-8 md:col-start-2" : ""
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg mb-8 opacity-90">{description}</p>
          
          <div className={classNames("flex gap-4", !hasImage ? "justify-center" : "")}>
            <Button
              variant={background === "white" || background === "light" ? "primary" : "secondary"}
              href={primaryButtonHref}
              size="lg"
            >
              {primaryButtonText}
            </Button>
            
            {secondaryButtonText && secondaryButtonHref && (
              <Button
                variant="outline"
                href={secondaryButtonHref}
                size="lg"
                className={
                  background === "white" || background === "light"
                    ? ""
                    : "border-white text-white hover:bg-white hover:text-gray-900"
                }
              >
                {secondaryButtonText}
              </Button>
            )}
          </div>
        </div>
        
        {/* Image */}
        {hasImage && (
          <div
            className={classNames(
              "relative h-64 md:h-full min-h-[320px]",
              imagePosition === "left" ? "md:col-start-1 md:row-start-1" : ""
            )}
          >
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        )}
      </div>
    </Section>
  );
}
