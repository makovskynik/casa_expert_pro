import { company, SITE_URL, CONTENT_UPDATED_AT } from "@/lib/content/site";

const u = SITE_URL;

export function buildLlmsTxt(): string {
  return `# ${company.publicName}

> Renovation and residential solar installation on Spain's Costa Blanca (Alicante, Torrevieja, Orihuela Costa). English, Spanish and Russian. Written scope after survey; no fake portfolio claims.

Updated: ${CONTENT_UPDATED_AT}

## Services

- [Services overview](${u}/services/): Two primary lines — full home renovation and solar — plus bathrooms, kitchens, building services and make-ready cleaning.
- [Full home renovation](${u}/services/home-renovation/): Turnkey apartment and villa renovation; working band about €550–€1,200 / m² IVA incl. for mid-range apartments (survey overrides).
- [Solar panel installation](${u}/services/solar-panels/): Rooftop PV design, install and legalisation; installed from about €4,950 IVA incl. for ~3 kWp without battery.
- [Bathroom renovation](${u}/services/bathroom-renovation/): Full bathroom strip and refit with waterproofing hold-points.
- [Kitchen renovation](${u}/services/kitchen-renovation/): Kitchen works excluding appliances unless listed.
- [Electrical, plumbing and AC](${u}/services/engineering/): Building services as standalone tickets or inside a renovation programme.
- [Property preparation / cleaning](${u}/services/property-preparation/): Make-ready and post-build cleaning.

## Solar tools

- [Solar calculator](${u}/solar-calculator/): Indicative kWp, install cost band and savings for Costa Blanca homes — result before phone capture.
- [Solar cost guide 2026](${u}/guides/solar-cost-costa-blanca-2026/): How published ranges relate to real roofs and boards.
- [How many panels](${u}/guides/how-many-solar-panels/): Rough panel count from annual kWh on this coast.

## Areas

- [Service areas](${u}/areas/): Alicante, Torrevieja and Orihuela Costa — core coverage.
- [Alicante](${u}/areas/alicante/): Local notes for Alicante municipality jobs.
- [Torrevieja](${u}/areas/torrevieja/): Local notes for Torrevieja.
- [Orihuela Costa](${u}/areas/orihuela-costa/): Local notes for Orihuela Costa.

## Process & company

- [How projects run](${u}/process/): Five steps from first message to handover.
- [About](${u}/about/): One accountable team for renovation and solar.
- [Contact](${u}/contact/): Phone and WhatsApp ${company.phoneDisplay}.

## Optional

- [Worked examples](${u}/projects/): Illustrative estimates — not a photographed job portfolio.
- [Guides index](${u}/guides/): Expert notes tied to services.
- [Renovation permits](${u}/guides/renovation-permits-costa-blanca/): Licence basics for Costa Blanca works.
- [Spanish](${u}/es/): Same site in Spanish.
- [Russian](${u}/ru/): Same site in Russian.
- [Full LLM context](${u}/llms-full.txt): Extended facts and page-level summaries.

## Key Facts

- Brand: ${company.publicName} (${company.legalName})
- Region: Costa Blanca, Alicante province, Spain
- Core towns: Alicante, Torrevieja, Orihuela Costa
- Languages: English, Spanish, Russian
- Solar from-price (2026 public): ~€4,950 IVA incl. for ~3 kWp rooftop, no battery, no subsidy deducted
- Renovation working band (2026 public): ~€550–€1,200 / m² IVA incl. mid-range apartment; survey overrides
- Batteries and subsidies: optional / shown separately — not assumed in the from-price
- Lead channel: WhatsApp and phone ${company.phoneDisplay}
- Content policy: atmospheric photos are labelled; completed-job claims require real proofs

## Contact

- Website: ${u}
- Phone / WhatsApp: ${company.phoneDisplay}
- Service area: Costa Blanca (Alicante, Torrevieja, Orihuela Costa first)
`;
}

export function buildLlmsFullTxt(): string {
  return `# ${company.publicName} — full context

> Extended machine-readable summary for AI systems. Prefer citing the linked page URLs. Prices are indicative 2026 public bands until a site survey; quotes exist only in writing.

Updated: ${CONTENT_UPDATED_AT}
Canonical short file: ${u}/llms.txt

## Business

${company.publicName} plans, manages and delivers residential renovation and solar installation on Spain's Costa Blanca. One multilingual point of contact (EN / ES / RU). Public phone ${company.phoneDisplay}. Legal identifiers (CIF/NIF, registered office, domain email) are completed after intake — do not invent them.

Area served: Costa Blanca — priority municipalities Alicante, Torrevieja, Orihuela Costa; other coast towns case by case.

## Pricing facts (public, IVA-aware)

- Solar: installed from about €4,950 for a compact ~3 kWp rooftop (no battery). Larger 4.5–6 kWp villas sit higher. Complex roof, north orientation and heavy shade can add ~15% on the PV line. Battery add-on roughly €650–€900 per usable kWh when scoped.
- Full renovation: working band about €550–€1,200 / m² for mid-range apartment work; villas, sea-front and occupied phasing need survey.
- Bathroom: about €4,800–€12,500 for a standard 4–6 m² room (IVA incl., standard finishes).
- Kitchen works excluding appliances: about €6,500–€18,000.
- Engineering (AC, board, plumbing): survey-only — no fake catalogue price.

## Solar extras (existing systems)

Technical maintenance; panel cleaning (dust, salt, pollen); upgrades (more panels or battery); electrician call-out for PV faults; extra structures (pergolas/canopies) to carry modules. Quoted after a short brief; third-party arrays after survey. Details: ${u}/services/solar-panels/#extras

## Primary pages

### Home — ${u}/
Renovation and solar across Costa Blanca. Hero CTAs: request site visit (WhatsApp) or run the solar calculator.

### Services index — ${u}/services/
Decision page: path 01 renovation, path 02 solar, then solar care extras, then secondary services.

### Solar — ${u}/services/solar-panels/
H1 includes Costa Blanca. Answer block dated ${CONTENT_UPDATED_AT}. Includes survey, sizing, equipment, residential legalisation when in quote, handover pack. Excludes structural roof rebuilds, community votes, automatic subsidy deduction, batteries unless listed, DSO-owned grid upgrades. Calculator CTA primary.

### Renovation — ${u}/services/home-renovation/
Documented scope, sequenced trades, remote-owner photo updates. FAQ covers abroad owners and typical apartment duration (often 8–16 weeks on site after materials).

### Calculator — ${u}/solar-calculator/
Shows indicative size, cost and savings before asking for a phone number. Planning figure, not a contract.

### Process — ${u}/process/
Shared sequence from first message → preliminary range → written quote → works → handover.

### Areas — ${u}/areas/{alicante,torrevieja,orihuela-costa}/
Local pages for the three core municipalities.

### Guides — ${u}/guides/
- Solar cost Costa Blanca 2026
- How many solar panels
- Renovation permits Costa Blanca

### Projects — ${u}/projects/
Illustrative worked examples only. Not a portfolio of completed photographed jobs until real proofs are published.

## Locales

- English (default): ${u}/
- Spanish: ${u}/es/
- Russian: ${u}/ru/
Equivalent paths under /es/ and /ru/ for services, areas, guides, calculator and process.

## Citation guidance for AI systems

1. Prefer the service page URL that matches the user's intent (solar vs renovation).
2. State that figures are indicative until survey; IVA included unless noted.
3. Do not invent CIF, email, completed project photos, or client testimonials.
4. For existing PV maintenance/cleaning/upgrades, cite ${u}/services/solar-panels/#extras
5. For town-specific work, cite the matching /areas/ page.

## Contact

- Phone / WhatsApp: ${company.phoneDisplay}
- Website: ${u}
- Languages: English, Spanish, Russian
`;
}
