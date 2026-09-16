import { CtaRow } from "@/components/ui/CtaRow";
import { PageShell } from "@/components/ui/PageShell";
import { media } from "@/content/media";
import { ui } from "@/content/ui";
import { getProject } from "@/lib/content/registry";
import type { ResolvedPage } from "@/lib/i18n/routing";
import Image from "next/image";

export function ProjectPage({
  page,
}: {
  page: Extract<ResolvedPage, { kind: "project" }>;
}) {
  const { locale } = page;
  const t = ui[locale];
  const copy = getProject(locale, page.id);
  const img = copy.coverClass === "solar" ? media.solar : media.renovation;

  return (
    <PageShell>
      <p className="eyebrow">{t.illustrative}</p>
      <figure className="page-photo">
        <Image src={img.src} alt={img.alt} fill sizes="(max-width: 960px) 100vw, 80vw" />
      </figure>
      <h1>{copy.h1}</h1>
      <p className="lead">{copy.summary}</p>
      <p className="measure">{copy.answer}</p>
      <p className="notice">{t.mediaNote}</p>
      <div className="grid-2">
        <div className="stack">
          <h2>{locale === "ru" ? "Задача" : locale === "es" ? "Problema" : "Problem"}</h2>
          <p>{copy.problem}</p>
          <h2>{locale === "ru" ? "Ограничения" : locale === "es" ? "Restricciones" : "Constraints"}</h2>
          <ul className="prose">
            {copy.constraints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="stack">
          <h2>{locale === "ru" ? "Состав" : locale === "es" ? "Alcance" : "Scope"}</h2>
          <ul className="prose">
            {copy.scope.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            <strong>{copy.costRange}</strong>
          </p>
          <p className="muted">{copy.duration}</p>
          <p>{copy.outcome}</p>
        </div>
      </div>
      <CtaRow locale={locale} />
    </PageShell>
  );
}
