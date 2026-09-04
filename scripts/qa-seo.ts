import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const dist = "dist";
const errors: string[] = [];
const titles = new Map<string, string>();
const descriptions = new Map<string, string>();

function walk(dir: string, files: string[] = []) {
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) {
      walk(path, files);
    } else if (path.endsWith(".html")) {
      files.push(path);
    }
  }
  return files;
}

function extract(html: string, pattern: RegExp) {
  return html.match(pattern)?.[1]?.trim() || "";
}

function partnerAnchorMissingSponsoredRel(html: string) {
  const anchorPattern = /<a\b[^>]*href="[^"]*goloadup\.com[^"]*"[^>]*>/gi;
  return Array.from(html.matchAll(anchorPattern)).some(([anchor]) => !anchor.includes('rel="sponsored"'));
}

for (const file of walk(dist)) {
  const html = readFileSync(file, "utf8");
  const title = extract(html, /<title>(.*?)<\/title>/s);
  const description = extract(html, /<meta name="description" content="([^"]+)"/s);
  const isBookingPage = file.endsWith(join("book", "index.html")) || file.endsWith("book.html");

  if (!title) errors.push(`${file}: missing <title>`);
  if (!description) errors.push(`${file}: missing meta description`);
  if (!html.includes('rel="canonical"')) errors.push(`${file}: missing canonical link`);
  if (!html.includes('type="application/ld+json"')) errors.push(`${file}: missing JSON-LD`);
  if (partnerAnchorMissingSponsoredRel(html)) {
    errors.push(`${file}: partner link missing rel="sponsored"`);
  }
  if (isBookingPage) {
    if (!html.includes('id="quote-form"')) {
      errors.push(`${file}: missing booking quote form container`);
    }
    if (!html.includes("order.goloadup.com/retail/orders/new")) {
      errors.push(`${file}: missing booking iframe base`);
    }
    if (!html.includes("data-attribution-source")) {
      errors.push(`${file}: missing booking attribution source`);
    }
  }

  if (title) {
    const duplicate = titles.get(title);
    if (duplicate) errors.push(`${file}: duplicate title also used by ${duplicate}`);
    titles.set(title, file);
  }

  if (description) {
    const duplicate = descriptions.get(description);
    if (duplicate) errors.push(`${file}: duplicate description also used by ${duplicate}`);
    descriptions.set(description, file);
  }
}

const sitemap = readFileSync(join(dist, "sitemap.xml"), "utf8");
if (!sitemap.includes("<urlset")) errors.push("dist/sitemap.xml: missing urlset");
if (!sitemap.includes("<loc>")) errors.push("dist/sitemap.xml: missing loc entries");

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`SEO QA passed for ${titles.size} pages.`);
