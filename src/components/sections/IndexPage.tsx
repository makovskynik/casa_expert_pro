import { IndexCard } from "@/components/content/IndexCard";
import { PageShell } from "@/components/ui/PageShell";
import { areas } from "@/content/areas";
import { guides } from "@/content/guides";
import { projects } from "@/content/projects";
import { getSimplePage } from "@/lib/content/registry";
import {
  AREA_IDS,
  GUIDE_IDS,
  PROJECT_IDS,
  getPath,
  type ResolvedPage,
} from "@/lib/i18n/routing";

type IndexKind = "areas-index" | "projects-index" | "guides-index";

export function IndexPage({ page }: { page: Extract<ResolvedPage, { kind: IndexKind }> }) {
  const { locale } = page;
  const copy = getSimplePage(page);

  return (
    <PageShell>
      <h1>{copy.h1}</h1>
      <p className="lead">{copy.summary}</p>
      <p className="measure">{copy.answer}</p>
      <div className="grid-3">
        {(page.kind === "areas-index"
          ? AREA_IDS.map((id) => ({
              href: getPath({ kind: "area", locale, id }),
              title: areas[id][locale].name,
              text: areas[id][locale].summary,
            }))
          : page.kind === "projects-index"
            ? PROJECT_IDS.map((id) => ({
                href: getPath({ kind: "project", locale, id }),
                title: projects[id][locale].name,
                text: projects[id][locale].summary,
              }))
            : GUIDE_IDS.map((id) => ({
                href: getPath({ kind: "guide", locale, id }),
                title: guides[id][locale].name,
                text: guides[id][locale].summary,
              }))
        ).map((card) => (
          <IndexCard key={card.href} href={card.href} title={card.title} text={card.text} />
        ))}
      </div>
    </PageShell>
  );
}
