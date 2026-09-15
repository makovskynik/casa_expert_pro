import { DEFAULT_LOCALE, isLocale, type Locale } from "@/lib/i18n/config";
import {
  internalToPublicLookup,
  publicToInternalLookup,
  stripSlash,
  withSlash,
} from "@/lib/i18n/routing";
import { NextResponse, type NextRequest } from "next/server";

const publicMap = publicToInternalLookup();
const internalMap = internalToPublicLookup();

export function proxy(request: NextRequest) {
  const raw = request.nextUrl.pathname;
  const path = stripSlash(raw);

  if (path.startsWith("/api") || path.startsWith("/_next")) {
    return NextResponse.next();
  }

  const leaked = internalMap.get(path);
  const looksInternal = /^\/(en|es|ru)(\/|$)/.test(path);
  if (looksInternal && leaked && stripSlash(leaked) !== path) {
    const url = request.nextUrl.clone();
    url.pathname = leaked;
    return NextResponse.redirect(url, 308);
  }

  const match = publicMap.get(path);
  if (!match) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = withSlash(match.internal) === "/en/" ? "/en" : match.internal;
  const headers = new Headers(request.headers);
  const locale: Locale = isLocale(match.locale) ? match.locale : DEFAULT_LOCALE;
  headers.set("x-locale", locale);
  return NextResponse.rewrite(url, { request: { headers } });
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\..*).*)"],
};
