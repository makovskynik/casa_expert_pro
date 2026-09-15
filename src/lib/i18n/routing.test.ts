import { describe, expect, it } from "vitest";
import {
  allResolvedPages,
  getAlternatePages,
  getInternalPath,
  getPath,
  isIndexable,
  publicToInternalLookup,
  resolvePublicPath,
  stripSlash,
} from "./routing";

describe("i18n routing", () => {
  it("keeps English home at / and localised homes at /es /ru", () => {
    expect(getPath({ kind: "home", locale: "en" })).toBe("/");
    expect(getPath({ kind: "home", locale: "es" })).toBe("/es");
    expect(getPath({ kind: "home", locale: "ru" })).toBe("/ru");
  });

  it("localises solar service slugs", () => {
    expect(getPath({ kind: "service", locale: "en", id: "solar-panels" })).toBe(
      "/services/solar-panels",
    );
    expect(getPath({ kind: "service", locale: "es", id: "solar-panels" })).toBe(
      "/es/servicios/placas-solares",
    );
    expect(getPath({ kind: "service", locale: "ru", id: "solar-panels" })).toBe(
      "/ru/uslugi/solnechnye-paneli",
    );
  });

  it("resolves public paths back to the same page", () => {
    for (const page of allResolvedPages()) {
      const resolved = resolvePublicPath(getPath(page));
      expect(resolved).toEqual(page);
    }
  });

  it("has reciprocal hreflang groups", () => {
    for (const page of allResolvedPages()) {
      const alts = getAlternatePages(page);
      expect(resolvePublicPath(getPath(alts.en))?.kind).toBe(page.kind);
      expect(resolvePublicPath(getPath(alts.es))?.kind).toBe(page.kind);
      expect(resolvePublicPath(getPath(alts.ru))?.kind).toBe(page.kind);
    }
  });

  it("maps public URLs to a single internal path without chains", () => {
    const map = publicToInternalLookup();
    const solar = map.get(stripSlash("/es/servicios/placas-solares"));
    expect(solar?.internal).toBe("/es/services/solar-panels");
    expect(getInternalPath({ kind: "service", locale: "es", id: "solar-panels" })).toBe(
      "/es/services/solar-panels",
    );
  });

  it("marks thank-you as non-indexable", () => {
    expect(isIndexable({ kind: "thank-you", locale: "en" })).toBe(false);
    expect(isIndexable({ kind: "home", locale: "en" })).toBe(true);
  });
});
