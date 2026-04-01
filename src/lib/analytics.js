export const GA_MEASUREMENT_ID =
  import.meta.env.VITE_GA_MEASUREMENT_ID || "G-7ZDP5SBV7G";

export const ANALYTICS_EVENTS = Object.freeze({
  clickWhatsapp: "click_whatsapp",
  clickEmail: "click_email",
  clickPhone: "click_phone",
  formSubmit: "form_submit",
  viewProduct: "view_product",
  generateLead: "generate_lead",
});

let hasInitializedGA = false;

function canUseDOM() {
  return typeof window !== "undefined" && typeof document !== "undefined";
}

function ensureGtag() {
  if (!canUseDOM()) {
    return null;
  }

  window.dataLayer = window.dataLayer || [];

  if (typeof window.gtag !== "function") {
    window.gtag = function gtag(...args) {
      window.dataLayer.push(args);
    };
  }

  return window.gtag;
}

function getDebugMode() {
  return import.meta.env.DEV;
}

export function initGA() {
  if (!GA_MEASUREMENT_ID || !canUseDOM()) {
    return;
  }

  const gtag = ensureGtag();

  if (hasInitializedGA || !gtag) {
    return;
  }

  gtag("config", GA_MEASUREMENT_ID, {
    send_page_view: false,
    debug_mode: getDebugMode(),
  });

  hasInitializedGA = true;
}

export function trackPageView(path, title) {
  if (!GA_MEASUREMENT_ID || !canUseDOM() || !path) {
    return;
  }

  initGA();

  const gtag = ensureGtag();

  if (!gtag) {
    return;
  }

  gtag("event", "page_view", {
    page_path: path,
    page_title: title || document.title,
    page_location: new URL(path, window.location.origin).toString(),
    debug_mode: getDebugMode(),
  });
}

export function trackEvent(name, params = {}) {
  if (!GA_MEASUREMENT_ID || !canUseDOM() || !name) {
    return;
  }

  initGA();

  const gtag = ensureGtag();

  if (!gtag) {
    return;
  }

  gtag("event", name, {
    ...params,
    debug_mode: getDebugMode(),
  });
}

export function trackLead(channel, params = {}) {
  const leadEventByChannel = {
    whatsapp: ANALYTICS_EVENTS.clickWhatsapp,
    email: ANALYTICS_EVENTS.clickEmail,
    phone: ANALYTICS_EVENTS.clickPhone,
  };

  const leadEvent = leadEventByChannel[channel];

  if (leadEvent) {
    trackEvent(leadEvent, params);
  }

  trackEvent(ANALYTICS_EVENTS.generateLead, {
    method: channel,
    ...params,
  });
}
