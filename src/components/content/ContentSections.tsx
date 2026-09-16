import type { ContentBlock } from "@/lib/content/types";

export function ContentSections({ sections }: { sections: ContentBlock[] }) {
  return (
    <>
      {sections.map((section) => (
        <section key={section.heading ?? section.body[0]} className="prose">
          {section.heading ? <h2>{section.heading}</h2> : null}
          {section.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </section>
      ))}
    </>
  );
}
