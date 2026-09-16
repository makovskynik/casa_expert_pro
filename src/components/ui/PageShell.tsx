import type { ReactNode } from "react";

export function PageShell({
  children,
  className = "",
  wide = true,
}: {
  children: ReactNode;
  className?: string;
  wide?: boolean;
}) {
  return (
    <article className={`section page-shell ${className}`.trim()}>
      <div className={`container stack-lg${wide ? " screen" : ""}`}>{children}</div>
    </article>
  );
}
