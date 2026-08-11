const STORAGE_KEY = "dw_agata_consent";
const banner = document.querySelector("[data-consent-banner]");
const acceptBtn = document.querySelector("[data-consent-accept]");

function hasConsent() {
  try {
    return localStorage.getItem(STORAGE_KEY) === "accepted";
  } catch {
    return false;
  }
}

function saveConsent() {
  try {
    localStorage.setItem(STORAGE_KEY, "accepted");
  } catch {
    /* ignore */
  }
}

function loadAnalytics() {
  if (window.__dwAnalyticsLoaded) return;
  window.__dwAnalyticsLoaded = true;

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  const ga4 = document.createElement("script");
  ga4.async = true;
  ga4.src = "https://www.googletagmanager.com/gtag/js?id=G-X6DM40XW7P";
  document.head.appendChild(ga4);

  gtag("js", new Date());
  gtag("config", "G-X6DM40XW7P");
  gtag("config", "UA-199945119-1");

  const ua = document.createElement("script");
  ua.async = true;
  ua.src = "https://www.googletagmanager.com/gtag/js?id=UA-199945119-1";
  document.head.appendChild(ua);
}

function showBanner() {
  if (!banner) return;
  banner.hidden = false;
  banner.classList.add("is-visible");
}

function hideBanner() {
  if (!banner) return;
  banner.classList.remove("is-visible");
  banner.hidden = true;
}

if (hasConsent()) {
  hideBanner();
  loadAnalytics();
} else {
  showBanner();
}

acceptBtn?.addEventListener("click", () => {
  saveConsent();
  hideBanner();
  loadAnalytics();
});
