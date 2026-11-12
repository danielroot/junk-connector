window.dataLayer = window.dataLayer || [];

function trackEvent(name, detail) {
  window.dataLayer.push({
    event: name,
    ...(detail || {}),
  });
}

window.addEventListener("booking-intent", function (event) {
  trackEvent("booking_intent", event.detail || {});
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
