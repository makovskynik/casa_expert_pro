import { ContentSections } from "@/components/content/ContentSections";
import { ProcessStrip } from "@/components/content/ProcessStrip";
import { CtaRow } from "@/components/ui/CtaRow";
import { PageShell } from "@/components/ui/PageShell";
import { getSimplePage } from "@/lib/content/registry";
import { company } from "@/lib/content/site";
import type { ResolvedPage } from "@/lib/i18n/routing";

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
  const copy = getSimplePage(page);

  return (
    <PageShell>
      <h1>{copy.h1}</h1>
      <p className="lead">{copy.summary}</p>
      <p className="measure">{copy.answer}</p>
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
    </PageShell>
  );
}
