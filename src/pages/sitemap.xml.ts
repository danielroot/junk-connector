import { approvedRegions } from "@data/regions";
import { junkItems } from "@data/items";
import { siteConfig } from "@data/site";
import { absoluteUrl, itemPath, regionPath } from "@lib/seo";

export function GET() {
  const paths = [
    "/",
    "/faq/",
    ...approvedRegions.map(regionPath),
    ...junkItems.map(itemPath),
  ];

  const urls = paths
    .map(
      (path) => `  <url>
    <loc>${absoluteUrl(path)}</loc>
    <changefreq>${path === "/" ? "weekly" : "monthly"}</changefreq>
    <priority>${path === "/" ? "1.0" : "0.7"}</priority>
  </url>`,
    )
    .join("\n");

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
