import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@data/site";

type BookingContext = {
  campaign: string;
  region?: string;
  item?: string;
  back: string;
};

const defaultContext: BookingContext = {
  campaign: "booking-page",
  back: "/",
};

export default function BookingPage() {
  const embedRef = useRef<HTMLDivElement | null>(null);
  const [context, setContext] = useState<BookingContext>(defaultContext);
  const [contextInitialized, setContextInitialized] = useState(false);
  const [iframeSrc, setIframeSrc] = useState("");
  const [iframeFailed, setIframeFailed] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const sameOriginReferrer = getSameOriginReferrer();
    const back = sanitizeBackPath(params.get("back")) || sameOriginReferrer || "/";

    setContext({
      campaign: params.get("campaign") || defaultContext.campaign,
      region: params.get("region") || undefined,
      item: params.get("item") || undefined,
      back,
    });
    setContextInitialized(true);
  }, []);

  useEffect(() => {
    if (!contextInitialized) return;

    const url = new URL(siteConfig.bookingPartnerIframeBaseUrl);
    const currentParams = new URLSearchParams(window.location.search);

    currentParams.forEach((value, key) => {
      if (key === "back") return;
      url.searchParams.set(key, value);
    });

    for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_term"]) {
      if (url.searchParams.has(key)) continue;

      try {
        const stored = localStorage.getItem(key);
        const parsed = stored ? JSON.parse(stored) : null;
        if (parsed?.value) url.searchParams.set(key, parsed.value);
      } catch (error) {
        console.warn(`Failed to parse localStorage item for ${key}:`, error);
      }
    }

    url.searchParams.set("host_source", siteConfig.bookingPartnerAttributionSource);
    url.searchParams.set("utm_source", url.searchParams.get("utm_source") || "junkconnector");
    url.searchParams.set("utm_medium", url.searchParams.get("utm_medium") || "affiliate");
    url.searchParams.set("utm_campaign", url.searchParams.get("utm_campaign") || context.campaign);
    if (context.region) url.searchParams.set("region", context.region);
    if (context.item) url.searchParams.set("item", context.item);

    setIframeFailed(false);
    setIframeLoaded(false);
    setIframeSrc(url.toString());
    trackIntent("booking_page_opened", context);
  }, [context, contextInitialized]);

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      const iframe = embedRef.current?.querySelector<HTMLIFrameElement>(
        'iframe[data-resizable="true"]',
      );

      if (!iframe || !event.data || typeof event.data !== "object") return;

      if (event.data.type === "resizeIframe") {
        const height = Number.parseInt(event.data.height, 10);
        iframe.style.minHeight = "550px";
        iframe.style.height = `${Math.max(height || 0, 400)}px`;
        iframe.style.width = typeof event.data.width === "string" ? event.data.width : "100%";
      }

      if (event.data.type === "goToPath" && typeof event.data.path === "string") {
        window.location.assign(event.data.path);
      }

      if (event.data.type === "completed_order") {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: "orderCreation",
          orderId: event.data.order?.id,
          orderAmount: event.data.total,
          campaign: context.campaign,
          region: context.region,
          item: context.item,
        });
      }
    }

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [context]);

  return (
    <section className="booking-page" role="region" aria-label="Booking page">
      <header className="booking-page-bar">
        <a className="booking-back-link" href={context.back}>
          <span className="material-symbols-rounded" aria-hidden="true">
            arrow_back
          </span>
          Back to guide
        </a>
      </header>

      <div
        ref={embedRef}
        className="booking-embed-shell"
        aria-label="Booking form"
        data-booking-iframe-base={siteConfig.bookingPartnerIframeBaseUrl}
      >
        {!iframeLoaded && !iframeFailed && (
          <div className="booking-loading" role="status" aria-live="polite">
            <span className="booking-loading-spinner" aria-hidden="true" />
            <span className="booking-loading-title">Loading booking form</span>
            <span className="booking-loading-copy">
              Checking availability with the booking partner.
            </span>
          </div>
        )}
        <div
          className="quote-form-shell"
          id="quote-form"
          data-attribution-source={siteConfig.bookingPartnerAttributionSource}
          data-campaign={context.campaign}
          data-region={context.region || undefined}
          data-item={context.item || undefined}
          style={{ overflow: "auto", WebkitOverflowScrolling: "touch" }}
        >
          {iframeSrc && (
            <iframe
              title="Booking form"
              src={iframeSrc}
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              allow="payment"
              name="quote-form"
              data-resizable="true"
              data-no-lazy="1"
              className={iframeLoaded ? "booking-iframe is-loaded" : "booking-iframe"}
              onLoad={() => {
                setIframeLoaded(true);
                trackIntent("booking_iframe_loaded", context);
              }}
              onError={() => {
                setIframeFailed(true);
                trackIntent("booking_iframe_failed", context);
              }}
            />
          )}
        </div>
        {iframeFailed && (
          <p className="booking-error" role="status">
            The embedded booking form did not load. Go back and try again.
          </p>
        )}
      </div>
    </section>
  );
}

function sanitizeBackPath(value: string | null) {
  if (!value || !value.startsWith("/")) return "";
  if (value.startsWith("//")) return "";
  return value;
}

function getSameOriginReferrer() {
  if (!document.referrer) return "";

  try {
    const referrer = new URL(document.referrer);
    if (referrer.origin !== window.location.origin) return "";
    return `${referrer.pathname}${referrer.search}${referrer.hash}`;
  } catch {
    return "";
  }
}

function trackIntent(action: string, context: BookingContext) {
  window.dispatchEvent(
    new CustomEvent("booking-intent", {
      detail: {
        action,
        campaign: context.campaign,
        region: context.region,
        item: context.item,
      },
    }),
  );

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "booking_intent",
    action,
    campaign: context.campaign,
    region: context.region,
    item: context.item,
  });
}

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}
