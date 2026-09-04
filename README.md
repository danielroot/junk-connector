# Junk Connector Static Site

Static Astro + React generator for regional junk-removal booking pages with sponsored LoadUp booking attribution.

Requires Node `>=22.12.0`. In this Codex workspace, the bundled Node runtime works:

```bash
PATH="/Users/danroot/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin:$PATH" npm run build
```

## Commands

- `npm run dev` starts local development.
- `npm run build` type-checks, builds static output, and runs SEO QA.
- `npm run qa:playwright` runs browser checks against the static preview.

## Content Workflow

1. Add or edit approved regions in `src/data/regions.ts`.
2. Add item-specific pages in `src/data/items.ts`.
3. Keep `approved: false` until a region has real local signals, reviewed image prompts, and safe service claims.
4. Replace `loadUpPartnerId` and `loadUpAffiliateBaseUrl` in `src/data/site.ts` after LoadUp confirms partner terms and the exact embed or affiliate URL.
5. Generate region imagery from each `imagePrompt`, save optimized files under `public/assets/regions/`, and update the matching `heroImage`.

## SEO Guardrails

- Do not publish city pages that only swap city names into repeated copy.
- Do not add `LocalBusiness` schema unless the site has truthful NAP/location data for an actual business.
- Keep sponsored/affiliate links marked with `rel="sponsored"`.
- Run `npm run build` before publishing.

## Deployment

Netlify builds with Node 22, runs `npm run build`, and publishes `dist`. Set `PUBLIC_SITE_URL` in Netlify to the production domain so canonical URLs, Open Graph URLs, and the sitemap use the live host.
