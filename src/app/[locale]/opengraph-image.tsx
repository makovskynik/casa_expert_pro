import { ImageResponse } from "next/og";
import { isLocale } from "@/lib/i18n/config";

export const alt = "Casa Expert — Costa Blanca";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const line = !isLocale(locale)
    ? "Renovation and solar, Costa Blanca"
    : locale === "es"
      ? "Reformas y energía solar, Costa Blanca"
      : locale === "ru"
        ? "Ремонт и солнечная энергия, Коста-Бланка"
        : "Renovation and solar, Costa Blanca";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#14201F",
          color: "#F3EFE6",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 999,
              background: "#D96D3B",
            }}
          />
          <div style={{ fontSize: 28, letterSpacing: 6 }}>CASA EXPERT</div>
        </div>
        <div style={{ fontSize: 56, lineHeight: 1.1, maxWidth: 900 }}>{line}</div>
        <div style={{ fontSize: 24, color: "#C5C0B4" }}>Costa Blanca</div>
      </div>
    ),
    { ...size },
  );
}
