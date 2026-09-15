import { company } from "@/lib/content/site";
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${company.publicName} ${company.geoDescriptor}`,
    short_name: company.publicName,
    start_url: "/",
    display: "browser",
    background_color: "#F3EFE6",
    theme_color: "#14201F",
    lang: "en",
    icons: [
      { src: "/brand/logo.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}
