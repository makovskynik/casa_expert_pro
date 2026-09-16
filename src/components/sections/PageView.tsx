import { AreaPage } from "@/components/sections/AreaPage";
import { CalculatorPage } from "@/components/sections/CalculatorPage";
import { GuidePage } from "@/components/sections/GuidePage";
import { HomePage } from "@/components/sections/HomePage";
import { IndexPage } from "@/components/sections/IndexPage";
import { ProjectPage } from "@/components/sections/ProjectPage";
import { ServicePage } from "@/components/sections/ServicePage";
import { ServicesIndexPage } from "@/components/sections/ServicesIndexPage";
import { SimplePage } from "@/components/sections/SimplePage";
import type { ResolvedPage } from "@/lib/i18n/routing";

export function PageView({
  page,
  searchParams,
}: {
  page: ResolvedPage;
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  switch (page.kind) {
    case "home":
      return <HomePage page={page} />;
    case "service":
      return <ServicePage page={page} />;
    case "services-index":
      return <ServicesIndexPage page={page} />;
    case "area":
      return <AreaPage page={page} />;
    case "project":
      return <ProjectPage page={page} />;
    case "guide":
      return <GuidePage page={page} />;
    case "calculator":
      return <CalculatorPage page={page} searchParams={searchParams} />;
    case "areas-index":
    case "projects-index":
    case "guides-index":
      return <IndexPage page={page} />;
    default:
      return <SimplePage page={page} />;
  }
}
