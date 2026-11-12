window.dataLayer = window.dataLayer || [];

function trackEvent(name, detail) {
  if (typeof window.gtag === "function") {
    window.gtag("event", name, detail || {});
    return;
  }

  window.dataLayer.push({ event: name, ...(detail || {}) });
}

window.addEventListener("booking-intent", function (event) {
  trackEvent("booking_intent", event.detail || {});
});

window.addEventListener("booking-order-completed", function (event) {
  trackEvent("generate_lead", event.detail || {});
});

document.addEventListener("click", function (event) {
  var link = event.target.closest("a");
  if (!link) return;

  var eventName = link.dataset.analyticsEvent;
  if (eventName) {
    trackEvent(eventName, {
      link_url: link.href,
      page_path: window.location.pathname,
    });
  }

  if (link.origin !== window.location.origin) {
    trackEvent("outbound_click", {
      link_url: link.href,
      page_path: window.location.pathname,
    });
  }
});
