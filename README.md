# Casa Expert

Next.js App Router site for [casaexpertpro.com](https://casaexpertpro.com): renovations and solar on the Costa Blanca, in English, Spanish and Russian.

## Stack

- Next.js 16, React 19, TypeScript strict
- Content in Git (typed objects)
- Local solar calculator (static PVGIS-derived table, no runtime API)
- Vercel Analytics / Speed Insights
- Optional private Vercel Blob for leads (`LEADS_ENABLED=true`)

## Commands

```bash
npm install
npm run dev
npm test
npm run build
```

Preview deployments should stay `noindex` (`robots.ts` uses `VERCEL_ENV`).

## Languages

| Locale | Public home |
| --- | --- |
| EN | `/` |
| ES | `/es/` |
| RU | `/ru/` |

Do not auto-redirect by IP. Language switcher keeps the equivalent page.

## Intake still open

Legal name, CIF, street address, named team, client photos and installer-confirmed price matrix are placeholders until the business confirms them. Do not invent those facts in schema.
