import React from "react";

interface IconProps {
  className?: string;
  size?: number;
}

export function EmergencyIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="8" x2="12" y2="12"></line>
      <line x1="12" y1="16" x2="12.01" y2="16"></line>
    </svg>
  );
}

export function RepairsIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
    </svg>
  );
}

export function DrainIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
      <path d="M12 8v8"></path>
      <path d="m8 12 4 4 4-4"></path>
    </svg>
  );
}

export function HotWaterIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M8 2h8"></path>
      <path d="M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2"></path>
      <path d="M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0"></path>
    </svg>
  );
}

export function PipeIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3 10h18"></path>
      <path d="M3 14h18"></path>
      <path d="M10 3v18"></path>
      <path d="M14 3v18"></path>
    </svg>
  );
}

export function LeakIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 2v10"></path>
      <path d="M12 22v-3"></path>
      <path d="M4.93 10.93 7.76 8.1"></path>
      <path d="M16.24 15.9 19.07 13.07"></path>
      <path d="M2 12h3"></path>
      <path d="M19 12h3"></path>
      <path d="M4.93 13.07 7.76 15.9"></path>
      <path d="M16.24 8.1 19.07 10.93"></path>
      <circle cx="12" cy="12" r="4"></circle>
      <path d="m15 12-3 3-3-3 3-3 3 3Z"></path>
    </svg>
  );
}

export function RenovationIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="3" y1="9" x2="21" y2="9"></line>
      <line x1="9" y1="21" x2="9" y2="9"></line>
    </svg>
  );
}

export function TapIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
      <path d="M12 3v1"></path>
      <path d="M12 20v1"></path>
      <path d="M3 12h1"></path>
      <path d="M20 12h1"></path>
      <path d="M18.364 5.636l-.707.707"></path>
      <path d="M6.343 17.657l-.707.707"></path>
      <path d="M5.636 5.636l.707.707"></path>
      <path d="M17.657 17.657l.707.707"></path>
    </svg>
  );
}

export function ShowerIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m4 4 2.5 2.5"></path>
      <path d="M13.5 6.5a4.95 4.95 0 0 0-7 7"></path>
      <path d="M15 5 5 15"></path>
      <path d="M14 17v.01"></path>
      <path d="M10 16v.01"></path>
      <path d="M13 13v.01"></path>
      <path d="M16 10v.01"></path>
      <path d="M11 10v.01"></path>
      <path d="M17 14v.01"></path>
      <path d="M20 11v.01"></path>
    </svg>
  );
}

export function PressureIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 2v10"></path>
      <path d="m4.93 10.93 1.41 1.41"></path>
      <path d="M2 18h2"></path>
      <path d="M20 18h2"></path>
      <path d="m19.07 10.93-1.41 1.41"></path>
      <path d="M22 22H2"></path>
      <path d="m16 8-4 4-4-4"></path>
      <path d="M16 16a4 4 0 0 0-8 0"></path>
    </svg>
  );
}

export function MaintenanceIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path>
      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
      <path d="M12 2v2"></path>
      <path d="M12 22v-2"></path>
      <path d="m17 20.66-1-1.73"></path>
      <path d="M11 10.27 7 3.34"></path>
      <path d="m20.66 17-1.73-1"></path>
      <path d="m3.34 7 1.73 1"></path>
      <path d="M14 12h8"></path>
      <path d="M2 12h2"></path>
      <path d="m20.66 7-1.73 1"></path>
      <path d="m3.34 17 1.73-1"></path>
      <path d="m17 3.34-1 1.73"></path>
      <path d="m7 20.66 1-1.73"></path>
    </svg>
  );
}

export function StormwaterIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
      <path d="M12 12v9"></path>
      <path d="m8 17 4 4 4-4"></path>
    </svg>
  );
}

export function SewerIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3 11h18"></path>
      <path d="M5 7h14"></path>
      <path d="M7 3h10"></path>
      <path d="M3 15h18"></path>
      <path d="M5 19h14"></path>
    </svg>
  );
}

export function GasIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4.22 12.22a6 6 0 0 0 8.5 8.5C17.6 16.84 22 12.4 22 8a2 2 0 0 0-2-2c-4.4 0-8.84 4.4-12.72 9.28"></path>
      <path d="M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
      <path d="M14.5 6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
      <path d="M11.5 10.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
      <path d="M8.5 14.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
    </svg>
  );
}

export function AirconIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="7" width="20" height="10" rx="2"></rect>
      <path d="M12 17v3"></path>
      <path d="M8 17v3"></path>
      <path d="M16 17v3"></path>
      <path d="M7 12h10"></path>
    </svg>
  );
}

export function ApplianceIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="4" y="2" width="16" height="20" rx="2"></rect>
      <path d="M12 6h.01"></path>
      <path d="M12 10h.01"></path>
      <path d="M12 14h.01"></path>
      <path d="M12 18h.01"></path>
    </svg>
  );
}

export function RoofIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M2 20h20"></path>
      <path d="m12 2 10 10"></path>
      <path d="m12 2 -10 10"></path>
      <path d="M14 14h-4v6h4v-6z"></path>
    </svg>
  );
}

export function MeterIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"></path>
      <path d="M12 12 9 7"></path>
      <path d="M12 12 7 12"></path>
      <path d="M12 12 12 8"></path>
    </svg>
  );
}

export function PhoneIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  );
}

export function EmailIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </svg>
  );
}

export function LocationIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  );
}

export function ClockIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  );
}

export function CheckIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M20 6 9 17l-5-5"></path>
    </svg>
  );
}
