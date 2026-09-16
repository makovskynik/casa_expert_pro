import type { Metadata } from "next";
import { SITE_URL } from "@/lib/content/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Casa Expert | Renovation & Solar in Costa Blanca",
    template: "%s",
  },
  description:
    "Renovation, building services and solar installation across Costa Blanca, managed by one multilingual team.",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#14201F" }],
  },
  openGraph: {
    type: "website",
    siteName: "Casa Expert Costa Blanca",
    title: "Renovation and solar, managed by one team",
    description:
      "Clear scope, documented progress and one point of contact across Costa Blanca.",
    images: [{ url: "/og-default-1200x630.png", width: 1200, height: 630, alt: "Casa Expert Costa Blanca" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Renovation and solar, managed by one team",
    description:
      "Clear scope, documented progress and one point of contact across Costa Blanca.",
    images: ["/og-default-1200x630.png"],
  },
  alternates: {
    types: {
      "text/plain": [
        { url: "/llms.txt", title: "LLM context" },
        { url: "/llms-full.txt", title: "LLM full context" },
      ],
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
