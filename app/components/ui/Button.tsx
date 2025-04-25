"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { classNames } from "../../lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent" | "outline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  href?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  href,
  className,
  ...props
}: ButtonProps) {
  const baseClasses = "rounded-full font-medium transition-colors inline-flex items-center justify-center";
  
  const variantClasses = {
    primary: "bg-primary text-white hover:bg-primary-dark",
    secondary: "bg-secondary text-white hover:bg-secondary-dark",
    accent: "bg-accent text-white hover:bg-accent-dark",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
  };
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg",
  };
  
  const widthClass = fullWidth ? "w-full" : "";
  
  const buttonClasses = classNames(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    widthClass,
    className
  );
  
  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }
  
  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
}
