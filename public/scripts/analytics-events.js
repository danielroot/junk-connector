window.dataLayer = window.dataLayer || [];
window.addEventListener("booking-intent", function (event) {
  window.dataLayer.push({
    event: "booking_intent_debug",
    detail: event.detail || {},
  });
});
