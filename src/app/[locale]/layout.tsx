import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SkipLink } from "@/components/layout/SkipLink";
import { StickyCta } from "@/components/layout/StickyCta";
import { manrope } from "@/lib/fonts";
import { HTML_LANG, isLocale, LOCALES } from "@/lib/i18n/config";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html lang={HTML_LANG[locale]} className={manrope.variable}>
      <body className={manrope.className}>
        <SkipLink locale={locale} />
        <Header locale={locale} />
        <main id="content">{children}</main>
        <Footer locale={locale} />
        <StickyCta locale={locale} />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
