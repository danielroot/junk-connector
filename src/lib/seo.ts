import { siteConfig } from "@data/site";
import type { Faq, JunkItem, Region } from "@data/types";

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.baseUrl).toString();
}

export function regionPath(region: Region) {
  return `/locations/${region.stateCode}/${region.slug}/`;
}

export function itemPath(item: JunkItem) {
  return `/junk-removal/${item.slug}/`;
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.baseUrl,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.baseUrl,
  };
}

export function serviceSchema(name: string, description: string, areaServed?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.baseUrl,
    },
    ...(areaServed ? { areaServed } : {}),
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function jsonLd(schema: unknown) {
  return JSON.stringify(schema).replace(/</g, "\\u003c");
}
