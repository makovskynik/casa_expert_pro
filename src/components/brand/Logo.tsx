import { company } from "@/lib/content/site";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="logo-mark">
      <svg
        width={compact ? 28 : 36}
        height={compact ? 28 : 36}
        viewBox="0 0 36 36"
        aria-hidden="true"
      >
        <path
          d="M27.5 18c0 5.25-4.25 9.5-9.5 9.5S8.5 23.25 8.5 18 12.75 8.5 18 8.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <circle cx="27.2" cy="8.8" r="2.35" fill="#D96D3B" />
      </svg>
      <span className="logo-text">
        <strong>CASA EXPERT</strong>
        <small>{company.geoDescriptor.toUpperCase()}</small>
      </span>
    </span>
  );
}
