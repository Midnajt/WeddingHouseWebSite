# Dom Weselny Agata — dokumentacja projektu

Dokumentacja pod przyszłe aktualizacje designu i UX.  
Strona: [domweselnyagata.pl](https://domweselnyagata.pl) · język: polski · **statyczny HTML/CSS/JS + CDN (bez Node)**.

---

## 1. Cel produktu i ton marki

Marketingowa strona wizytówkowa sali weselnej w Raszynie. Buduje nastrój elegancji i ciepła rodzinnego.

**Pierwszy viewport (hero):** brand, jeden cytat, full-bleed wideo, klikalne „Przewiń”.  
Bez kart, badge’y i stripów w hero.

---

## 2. Stack (FTP-friendly)

| Warstwa | Technologia |
|--------|-------------|
| Style | Tailwind 4 przez CDN (`@tailwindcss/browser`) + lokalny [`dist/css/site.css`](dist/css/site.css) |
| JS | ES modules w [`dist/js/`](dist/js/) |
| Galeria | PhotoSwipe 5 z jsDelivr CDN |
| Fonty | Google Fonts: Fraunces + DM Sans |
| Analityka | GA po zgodzie (`dist/js/consent.js`) |

**Podgląd lokalny:** Live Server na `dist/index.html`.  
**Deploy:** wgraj **zawartość** `dist/` do `www/` na OVH — bez `npm` na serwerze.

```
dist/
├── index.html / polityka-prywatnosci.html
├── .htaccess / robots.txt / sitemap.xml
├── css/site.css
├── js/main.js, consent.js, legal.js
└── Assets/
```

Udostępnianie w social media: tagi Open Graph w HTML + `dist/Assets/Images/og-image.jpg` (1200×630, absolutny URL `https://domweselnyagata.pl/...`).

---

## 3. Design system

| Token | Wartość | Rola |
|-------|---------|------|
| accent | `#9d7f84` | Akcent marki |
| accent-hover | `#b09498` | Hover |
| ink | `#252525` | Tekst / ciemne tła |
| paper | `#f7f4f2` | Tło |
| muted | `#8a8582` | Tekst stłumiony |
| display | Fraunces | Nagłówki, cytaty |
| sans | DM Sans | UI, body |

Tokeny Tailwind są w `<style type="text/tailwindcss">` w HTML.  
Animacje / drawer / consent / oferta — w `dist/css/site.css`.

---

## 4. UX sekcji

```
hero video → sticky nav / drawer
#onas → #oferta → #galeria → #kontakt (+ Weselezklasa)
footer → consent banner
```

- **Oferta:** mobile = snap-scroll; desktop = lista + podmiana zdjęcia  
- **Galeria:** columns + PhotoSwipe (CDN)  
- **Motion:** `.reveal`, parallax `[data-parallax]`, hero quote, scroll cue  
- **Cookies:** `localStorage.dw_agata_consent` → potem GA  

---

## 5. Co zachować

- Hero z wideo + brand-first  
- Kolor `#9d7f84`  
- Baner Weselezklasa  
- Consent przed Analytics  
- Brak Node w deployu  
- `og:image` jako absolutny HTTPS (Facebook nie czyta ścieżek względnych)  

## 6. Checklist

1. Live Server na `dist/index.html` → sprawdź wygląd  
2. FTP → wgraj **zawartość** `dist/` (w tym `.htaccess`, `robots.txt`, `sitemap.xml`, `Assets/Images/og-image.jpg`)  
3. Nowe zdjęcie galerii → para w `dist/Assets/Photos/miniatures` + `default` + link w HTML  
4. Zmiana RODO/GA → `dist/js/consent.js` + treść polityki + baner  
5. Po wgraniu og-image → odśwież [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)  
