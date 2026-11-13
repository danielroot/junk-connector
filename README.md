# Junk Connector Static Site

Static Astro site for regional junk-removal booking pages with sponsored booking attribution.

Requires Node `>=22.12.0`:

```bash
nvm use 24
npm run build
```

## Commands

- `npm run dev` starts local development.
- `npm run build` type-checks, builds static output, and runs SEO QA.
- `npm run qa:playwright` runs browser checks against the static preview.

## Content Workflow

1. Add or edit approved regions in `src/data/regions.ts`.
2. Add item-specific pages in `src/data/items.ts`.
3. Keep `approved: false` until a region has real local signals, reviewed image prompts, and safe service claims.
4. Set `PUBLIC_LOADUP_ATTRIBUTION_SOURCE` to the host-source value supplied by LoadUp before publishing.
5. Generate region imagery from each `imagePrompt`, save optimized files under `public/assets/regions/`, and update the matching `heroImage`.

## SEO Guardrails

- Do not publish city pages that only swap city names into repeated copy.
- Do not add `LocalBusiness` schema unless the site has truthful NAP/location data for an actual business.
- Keep sponsored/affiliate links marked with `rel="sponsored"`.
- Run `npm run build` before publishing.

## Deployment

Netlify builds with Node 22, runs `npm run build`, and publishes `dist`. Set `PUBLIC_SITE_URL` in Netlify to the production domain so canonical URLs, Open Graph URLs, and the sitemap use the live host.

GitHub Pages uses `.github/workflows/deploy-pages.yml`, builds `dist`, and publishes it with `PUBLIC_SITE_BASE=/junk-connector/` so project-page asset paths resolve correctly.

Cloudflare Workers Builds uses `npm run build` followed by:

```bash
npx wrangler deploy --assets ./dist/ --compatibility-date 2026-11-10
```

Set `PUBLIC_SITE_URL=https://junkconnector.com`, `PUBLIC_SITE_BASE=/`, and the LoadUp-provided `PUBLIC_LOADUP_ATTRIBUTION_SOURCE` as build variables. Enable Cloudflare Web Analytics for privacy-first traffic and Core Web Vitals reporting. To add GA4 conversion reporting, also set the optional `PUBLIC_GA_MEASUREMENT_ID` build variable; booking and outbound-link events are emitted automatically.
