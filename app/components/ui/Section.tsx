import { ReactNode } from "react";
import { classNames } from "../../lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: "white" | "light" | "primary" | "secondary" | "accent" | "dark";
  container?: boolean;
  id?: string;
}

export default function Section({
  children,
  className,
  background = "white",
  container = true,
  id,
}: SectionProps) {
  const backgroundClasses = {
    white: "bg-white",
    light: "bg-gray-100",
    primary: "bg-primary-light text-white",
    secondary: "bg-secondary-light text-white",
    accent: "bg-accent-light text-white",
    dark: "bg-gray-900 text-white",
  };
  
  const sectionClasses = classNames(
    "py-12 md:py-16 lg:py-20",
    backgroundClasses[background],
    className
  );
  
  return (
    <section className={sectionClasses} id={id}>
      {container ? (
        <div className="container-custom">{children}</div>
      ) : (
        children
      )}
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  centered = false,
  className,
}: SectionHeaderProps) {
  const headerClasses = classNames(
    "mb-8 md:mb-12",
    centered ? "text-center" : "",
    className
  );
  
  return (
    <div className={headerClasses}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      {subtitle && <p className="text-lg text-gray-600 max-w-3xl">{subtitle}</p>}
    </div>
  );
}
