type LogoVariant = "primary" | "reversed" | "mark";

const SRC: Record<LogoVariant, { src: string; width: number; height: number }> = {
  primary: {
    src: "/brand/logo/casa-expert-logo-primary.svg",
    width: 196,
    height: 42,
  },
  reversed: {
    src: "/brand/logo/casa-expert-logo-reversed.svg",
    width: 210,
    height: 45,
  },
  mark: {
    src: "/brand/logo/casa-expert-mark-primary.svg",
    width: 36,
    height: 36,
  },
};

export function Logo({
  variant = "primary",
  compact = false,
  className = "",
}: {
  variant?: LogoVariant;
  /** Mobile/compact header uses the mark only. */
  compact?: boolean;
  className?: string;
}) {
  const resolved = compact ? "mark" : variant;
  const asset = SRC[resolved];
  return (
    <span className={`brand-logo brand-logo-${resolved}${className ? ` ${className}` : ""}`}>
      {/* SVG logos stay as <img> so Next Image SVG restrictions do not apply. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={asset.src}
        alt="Casa Expert Costa Blanca"
        width={asset.width}
        height={asset.height}
        className="brand-logo-img"
        decoding="async"
      />
    </span>
  );
}
