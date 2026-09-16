import type { FaqItem } from "@/lib/content/types";

export function Faqs({
  items,
  title,
  lead,
}: {
  items: FaqItem[];
  title: string;
  lead?: string;
}) {
  if (!items.length) return null;
  return (
    <section className="section section-faq" id="faq">
      <div className="container faq-block">
        <h2>{title}</h2>
        {lead ? <p className="faq-lead">{lead}</p> : null}
        <div className="faq">
          {items.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
