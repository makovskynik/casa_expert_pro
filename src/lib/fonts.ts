import localFont from "next/font/local";

export const manrope = localFont({
  src: [
    {
      path: "../fonts/manrope-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/manrope-latin-700-normal.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/manrope-cyrillic-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/manrope-cyrillic-700-normal.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-manrope",
  fallback: ["system-ui", "sans-serif"],
});
