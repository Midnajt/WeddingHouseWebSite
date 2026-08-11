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
| Style | Tailwind 4 przez CDN (`@tailwindcss/browser`) + lokalny [`css/site.css`](css/site.css) |
| JS | ES modules w [`js/`](js/) |
| Galeria | PhotoSwipe 5 z jsDelivr CDN |
| Fonty | Google Fonts: Fraunces + DM Sans |
| Analityka | GA po zgodzie (`js/consent.js`) |

**Podgląd lokalny:** Live Server na `index.html`.  
**Deploy:** wgraj HTML/CSS/JS/Assets na FTP — bez `npm` na serwerze.

```
├── index.html / polityka-prywatnosci.html
├── css/site.css
├── js/main.js, consent.js, legal.js
└── Assets/
```

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
Animacje / drawer / consent / oferta — w `css/site.css`.

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

## 6. Checklist

1. Live Server → sprawdź wygląd  
2. FTP → wgraj `index.html`, `polityka-prywatnosci.html`, `css/`, `js/`, `Assets/`, `.htaccess`, `sitemap.xml`  
3. Nowe zdjęcie galerii → para w `Assets/Photos/miniatures` + `default` + link w HTML  
4. Zmiana RODO/GA → `js/consent.js` + treść polityki + baner  
