import { IndexCard } from "@/components/content/IndexCard";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FinalCta } from "@/components/ui/FinalCta";
import { areas } from "@/content/areas";
import { guides } from "@/content/guides";
import { projects } from "@/content/projects";
import { nav, ui } from "@/content/ui";
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
  const t = ui[locale];
  const n = nav[locale];
  const copy = getSimplePage(page);
  const indexLabel =
    page.kind === "areas-index" ? n.areas : page.kind === "projects-index" ? n.projects : n.guides;

  return (
    <>
      <article className="content-page">
        <div className="container content-page-inner">
          <Breadcrumbs
            items={[
              { href: getPath({ kind: "home", locale }), label: n.home },
              { href: getPath(page), label: indexLabel },
            ]}
          />
          <header className="content-hero">
            <h1>{copy.h1}</h1>
            <p className="lead">{copy.summary}</p>
            <p className="measure">{copy.answer}</p>
          </header>
          <div className="grid-3 index-card-grid">
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
        </div>
      </article>
      <FinalCta locale={locale} title={t.finalCtaTitle} body={t.finalCtaBody} />
    </>
  );
}
