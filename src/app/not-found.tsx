import { manrope } from "@/lib/fonts";
import { getPath } from "@/lib/i18n/routing";
import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="en">
      <body className={manrope.className} style={{ background: "#F3EFE6", color: "#14201F", fontFamily: "sans-serif" }}>
        <main style={{ maxWidth: 640, margin: "20vh auto", padding: "0 1.25rem" }}>
          <h1>Page not found</h1>
          <p>That URL is not in the current site map.</p>
          <p>
            <Link href={getPath({ kind: "home", locale: "en" })}>Back to home</Link>
          </p>
        </main>
      </body>
    </html>
  );
}
