export const siteConfig = {
  name: "Junk Connector",
  baseUrl: import.meta.env.PUBLIC_SITE_URL || "https://junkconnector.example",
  gaMeasurementId: import.meta.env.PUBLIC_GA_MEASUREMENT_ID || "",
  defaultTitle: "Junk Connector | Book Junk Removal Online",
  defaultDescription:
    "Find local junk removal information, prepare your items, and start booking a pickup online.",
  affiliateDisclosure:
    "Junk Connector may earn a commission when you book through partner links on this site.",
  bookingPartnerAffiliateBaseUrl: "https://goloadup.com/affiliate/",
  bookingPartnerAttributionSource: import.meta.env.PUBLIC_LOADUP_ATTRIBUTION_SOURCE || "",
  bookingPartnerScriptUrl:
    "https://goloadup.com/wp-content/themes/goloadup/js/retail_brand_builder_setup.min.js",
  bookingPartnerIframeBaseUrl: "https://order.goloadup.com/retail/orders/new",
  defaultImage: `${import.meta.env.BASE_URL}assets/placeholders/junk-removal-characters.webp`,
};
