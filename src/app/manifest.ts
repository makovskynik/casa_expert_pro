import { company } from "@/lib/content/site";
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${company.publicName} ${company.geoDescriptor}`,
    short_name: company.publicName,
    description: "Renovation and solar installation across Costa Blanca.",
    start_url: "/",
    display: "standalone",
    background_color: "#F3EFE6",
    theme_color: "#14201F",
    lang: "en",
    icons: [
      { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
