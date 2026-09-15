import type { Metadata } from "next";
import { SITE_URL } from "@/lib/content/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Casa Expert | Costa Blanca",
    template: "%s",
  },
  icons: {
    icon: "/brand/logo.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
