import Link from "next/link";

export type RelatedLinkItem = {
  href: string;
  title: string;
  summary?: string;
};

export function RelatedLinks({
  title,
  lead,
  items,
  numbered = false,
  className = "service-area-links",
}: {
  title: string;
  lead?: string;
  items: RelatedLinkItem[];
  numbered?: boolean;
  className?: string;
}) {
  if (!items.length) return null;
  const hasSummaries = !numbered && items.some((item) => item.summary);
  const listClass = numbered
    ? "service-guide-links"
    : hasSummaries
      ? "related-link-list"
      : className;
  return (
    <section className={numbered ? "service-guides" : "service-areas"}>
      <h2>{title}</h2>
      {lead ? <p className={numbered ? undefined : "service-areas-lead"}>{lead}</p> : null}
      <ul className={listClass}>
        {items.map((item, i) =>
          numbered ? (
            <li key={item.href}>
              <span className="process-num">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <Link href={item.href}>{item.title}</Link>
                {item.summary ? <p className="muted">{item.summary}</p> : null}
              </div>
            </li>
          ) : (
            <li key={item.href}>
              <div>
                <Link href={item.href}>{item.title}</Link>
                {item.summary ? <p className="muted">{item.summary}</p> : null}
              </div>
            </li>
          ),
        )}
      </ul>
    </section>
  );
}
