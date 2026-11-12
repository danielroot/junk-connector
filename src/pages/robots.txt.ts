import { absoluteUrl } from "@lib/seo";

export function GET() {
  return new Response(`User-agent: *
Allow: /
Disallow: /book/

Sitemap: ${absoluteUrl("/sitemap.xml")}
`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
