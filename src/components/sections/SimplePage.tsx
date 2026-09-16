import { ContentSections } from "@/components/content/ContentSections";
import { ProcessStrip } from "@/components/content/ProcessStrip";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CtaRow } from "@/components/ui/CtaRow";
import { FinalCta } from "@/components/ui/FinalCta";
import { nav, ui } from "@/content/ui";
import { getSimplePage } from "@/lib/content/registry";
import { company } from "@/lib/content/site";
import { getPath, type ResolvedPage } from "@/lib/i18n/routing";

export function SimplePage({
  page,
}: {
  page: Exclude<
    ResolvedPage,
    | { kind: "home" }
    | { kind: "service" }
    | { kind: "area" }
    | { kind: "project" }
    | { kind: "guide" }
    | { kind: "calculator" }
    | { kind: "services-index" }
    | { kind: "areas-index" }
    | { kind: "projects-index" }
    | { kind: "guides-index" }
  >;
}) {
  const { locale } = page;
  const t = ui[locale];
  const n = nav[locale];
  const copy = getSimplePage(page);
  const crumbLabel =
    page.kind === "about"
      ? n.about
      : page.kind === "process"
        ? n.process
        : page.kind === "contact"
          ? n.contact
          : page.kind === "privacy"
            ? t.footerPrivacy
            : page.kind === "cookies"
              ? t.footerCookies
              : page.kind === "legal-notice"
                ? t.footerNotice
                : copy.h1;
  const showFinalCta = page.kind === "about" || page.kind === "process" || page.kind === "contact";

  return (
    <>
      <article className="content-page">
        <div className="container content-page-inner">
          <Breadcrumbs
            items={[
              { href: getPath({ kind: "home", locale }), label: n.home },
              { href: getPath(page), label: crumbLabel },
            ]}
          />
          <header className="content-hero">
            <h1>{copy.h1}</h1>
            <p className="lead">{copy.summary}</p>
            <p className="measure">{copy.answer}</p>
          </header>
          {copy.steps ? (
            <ProcessStrip
              steps={copy.steps.map((step) => ({
                title: step.title,
                body: step.body,
                meta:
                  step.result || step.timing
                    ? [step.result, step.timing].filter(Boolean).join(" · ")
                    : undefined,
              }))}
            />
          ) : null}
          {copy.sections ? <ContentSections sections={copy.sections} /> : null}
          {page.kind === "contact" ? (
            <CtaRow
              locale={locale}
              primaryHref={`tel:${company.phone}`}
              primaryLabel={company.phoneDisplay}
            />
          ) : null}
        </div>
      </article>
      {showFinalCta ? (
        <FinalCta locale={locale} title={t.finalCtaTitle} body={t.finalCtaBody} />
      ) : null}
    </>
  );
}
