import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { classNames } from "../../lib/utils";

interface CardProps {
  title: string;
  description?: string;
  image?: string;
  href?: string;
  icon?: ReactNode;
  className?: string;
  imageAlt?: string;
  footer?: ReactNode;
  children?: ReactNode;
}

export default function Card({
  title,
  description,
  image,
  href,
  icon,
  className,
  imageAlt = "Card image",
  footer,
  children,
}: CardProps) {
  const cardContent = (
    <>
      {image && (
        <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      
      <div className="p-6">
        {icon && <div className="mb-4 text-primary">{icon}</div>}
        
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        
        {description && <p className="text-gray-600 mb-4">{description}</p>}
        
        {children}
      </div>
      
      {footer && <div className="px-6 py-4 border-t">{footer}</div>}
    </>
  );
  
  const cardClasses = classNames(
    "bg-white rounded-lg shadow-md overflow-hidden group",
    className
  );
  
  if (href) {
    return (
      <Link href={href} className={cardClasses}>
        {cardContent}
      </Link>
    );
  }
  
  return <div className={cardClasses}>{cardContent}</div>;
}
