import "./consent.js";
import PhotoSwipeLightbox from "https://cdn.jsdelivr.net/npm/photoswipe@5.4.4/dist/photoswipe-lightbox.esm.min.js";

const navOffset = () => {
  const nav = document.querySelector("[data-site-nav]");
  return (nav?.offsetHeight || 72) + 8;
};

function scrollToTarget(selector) {
  if (selector === "top" || selector === "#") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const el = document.querySelector(selector);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - navOffset();
  window.scrollTo({ top, behavior: "smooth" });
}

const drawer = document.querySelector("[data-drawer]");
const backdrop = document.querySelector("[data-drawer-backdrop]");
const openBtn = document.querySelector("[data-drawer-open]");
const closeBtn = document.querySelector("[data-drawer-close]");

function openDrawer() {
  drawer?.classList.add("is-open");
  backdrop?.classList.add("is-open");
  document.body.classList.add("drawer-open");
  openBtn?.setAttribute("aria-expanded", "true");
}

function closeDrawer() {
  drawer?.classList.remove("is-open");
  backdrop?.classList.remove("is-open");
  document.body.classList.remove("drawer-open");
  openBtn?.setAttribute("aria-expanded", "false");
}

openBtn?.addEventListener("click", openDrawer);
closeBtn?.addEventListener("click", closeDrawer);
backdrop?.addEventListener("click", closeDrawer);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeDrawer();
});

document.querySelectorAll("[data-nav-link]").forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");
    if (!href?.startsWith("#")) return;
    e.preventDefault();
    closeDrawer();
    scrollToTarget(href);
  });
});

document.querySelectorAll("[data-scroll-to]").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    scrollToTarget(btn.getAttribute("data-scroll-to"));
  });
});

const upBtn = document.querySelector("[data-up-btn]");
const aboutSection = document.querySelector("#onas");

window.addEventListener(
  "scroll",
  () => {
    const threshold = aboutSection
      ? aboutSection.offsetTop - 40
      : window.innerHeight * 0.8;
    if (window.scrollY >= threshold) {
      upBtn?.classList.remove("scale-0", "opacity-0");
      upBtn?.classList.add("scale-100", "opacity-100");
    } else {
      upBtn?.classList.add("scale-0", "opacity-0");
      upBtn?.classList.remove("scale-100", "opacity-100");
    }
  },
  { passive: true }
);

upBtn?.addEventListener("click", () => scrollToTarget("#onas"));

const revealEls = document.querySelectorAll(".reveal");
if (revealEls.length && "IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
  );
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("is-visible"));
}

const parallaxEls = [...document.querySelectorAll("[data-parallax]")];

function updateParallax() {
  const vh = window.innerHeight;
  parallaxEls.forEach((el) => {
    const speed = parseFloat(el.dataset.parallaxSpeed || "0.2");
    const rect = el.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > vh) return;
    const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
    el.style.transform = `translate3d(0, ${progress * speed * -80}px, 0)`;
  });
}

if (parallaxEls.length && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  window.addEventListener("scroll", updateParallax, { passive: true });
  window.addEventListener("resize", updateParallax);
  updateParallax();
}

const offerItems = document.querySelectorAll("[data-offer-item]");
const offerImage = document.querySelector("[data-offer-image]");

offerItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("is-active")) return;
    offerItems.forEach((i) => i.classList.remove("is-active"));
    item.classList.add("is-active");

    const src = item.dataset.image;
    const alt = item.dataset.alt || "";
    if (!offerImage || !src) return;

    offerImage.style.opacity = "0";
    offerImage.style.transform = "scale(1.04)";
    window.setTimeout(() => {
      offerImage.src = src;
      offerImage.alt = alt;
      offerImage.style.opacity = "1";
      offerImage.style.transform = "scale(1)";
    }, 280);
  });

  item.addEventListener("mouseenter", () => {
    if (window.matchMedia("(hover: hover)").matches) {
      item.click();
    }
  });
});

const gallery = document.querySelector("[data-gallery]");
if (gallery) {
  const lightbox = new PhotoSwipeLightbox({
    gallery: "[data-gallery]",
    children: "a",
    pswpModule: () =>
      import("https://cdn.jsdelivr.net/npm/photoswipe@5.4.4/dist/photoswipe.esm.min.js"),
  });
  lightbox.init();
}

console.log("%c❤️ Kocham moją przyszłą żonę!", "color: red; font-size: 24px;");
