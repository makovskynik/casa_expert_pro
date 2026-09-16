import { PageView } from "@/components/sections/PageView";
import { seoFields } from "@/lib/content/registry";
import { isLocale, LOCALES } from "@/lib/i18n/config";
import {
  allResolvedPages,
  getInternalPath,
  resolveInternal,
} from "@/lib/i18n/routing";
import { buildMetadata } from "@/lib/seo/metadata";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return allResolvedPages().flatMap((page) =>
    LOCALES.includes(page.locale)
      ? [
          {
            locale: page.locale,
            slug: getInternalPath(page).split("/").filter(Boolean).slice(1),
          },
        ]
      : [],
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug?: string[] }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const page = resolveInternal(locale, slug);
  if (!page) return {};
  const fields = seoFields(page);
  return buildMetadata({
    page,
    title: fields.seoTitle,
    description: fields.description,
    locale,
  });
}

export default async function CatchAllPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string; slug?: string[] }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { locale, slug } = await params;
  const sp = await searchParams;
  if (!isLocale(locale)) notFound();
  const page = resolveInternal(locale, slug);
  if (!page) notFound();
  return <PageView page={page} searchParams={sp} />;
}
