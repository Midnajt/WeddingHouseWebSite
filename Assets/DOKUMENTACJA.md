# Dom Weselny Agata — dokumentacja projektu

Dokumentacja pod przyszłe aktualizacje designu i UX.  
Strona: [domweselnyagata.pl](https://domweselnyagata.pl) · język: polski · statyczny HTML/SCSS/JS.

---

## 1. Cel produktu i ton marki

Marketingowa strona wizytówkowa sali weselnej w Raszynie (blisko Warszawy). Ma budować nastrój elegancji, ciepła rodzinnego i zaufania — nie wyglądać jak dashboard ani typowy szablon SaaS.

**Ton wizualny:** spokojny, romantyczny, „venue-first”. Brand i atmosfera miejsca są ważniejsze niż agresywne CTA czy gęste bloki marketingowe.

**Pierwszy viewport (hero):**
- nazwa marki jako główny sygnał,
- jedno krótkie hasło / cytat,
- pełnoekranowe wideo jako tło,
- delikatna wskazówka „Przewiń”.

Nie dodawać w hero: kart, badge’y, stripów ze statystykami, adresu, cennika ani drugiego bloku CTA.

---

## 2. Stack i struktura repozytorium

| Warstwa | Technologia |
|--------|-------------|
| Markup | HTML5 (`index.html`, `polityka-prywatnosci.html`) |
| Style | SCSS → CSS; **strony ładują `css/main1.css`** |
| JS | Vanilla + jQuery (w paczce Lightbox) |
| Galeria | Lightbox2 |
| Fonty | Google Fonts |
| Analityka | GA4 + Universal Analytics — tylko po zgodzie cookies |

```
WeddingHouseWebSite/
├── index.html
├── polityka-prywatnosci.html
├── sitemap.xml
├── .htaccess
├── DOKUMENTACJA.md          ← ten plik
├── Assets/
│   ├── video1.mp4           # hero
│   ├── Icons/               # UI SVG + chrome Lightbox
│   ├── Images/              # logo, zdjęcia sekcji, sezonowe
│   └── Photos/
│       ├── default/         # pełne zdjęcia galerii
│       ├── miniatures/      # miniatury (ta sama numeracja)
│       └── casino/          # galeria sylwestrowa (sekcja sezonowa)
├── css/
│   ├── main1.css            # ★ plik produkcyjny (linkowany w HTML)
│   ├── main.css             # równoległa kompilacja — nie linkowana
│   ├── index.css            # legacy — nie używać
│   └── lightbox.min.css
├── sass/
│   ├── main.scss            # entrypoint importów
│   ├── _variables.scss      # tokeny designu
│   └── _*.scss              # partials sekcji
└── src/
    ├── main.js              # nawigacja, scroll, galeria
    ├── consent.js           # baner cookies + GA
    └── lightbox-plus-jquery.js
```

### Ważne: kompilacja CSS

Źródłem prawdy jest `sass/`.  
**W przeglądarce działa wyłącznie `css/main1.css`.**  
Po zmianie SCSS trzeba przebudować właśnie ten plik (lub zaktualizować link w HTML, jeśli zmienicie nazwę).  
`main.css` i `index.css` traktować jako martwe / pomocnicze — nie edytować ich jako „żywej” wersji bez zmiany HTML.

---

## 3. Design system

Tokeny w `sass/_variables.scss`:

| Token | Wartość | Rola |
|-------|---------|------|
| `$black` | `#252525` | Footer, baner cookies, nagłówek strony prawnej |
| `$white` | `#f5f5f5` | Tła sekcji (off-white, nie czysta biel) |
| `$grey` | `#c1c1c1` | Tekst stłumiony, stany hamburgera |
| `$pink` | `#9d7f84` | Akcent marki (dusty rose / mauve) |
| `$special-font` | Libre Baskerville | Nagłówki, cytaty, brand |
| `$regular-font` | Roboto | Nawigacja, body, przyciski |

### Kolory pochodne (używane w SCSS)

- `darken($pink, 30%)` — mocniejsze tytuły / przycisk „Pokaż więcej”
- `lighten($pink, 8%)` — hover przycisku zgody cookies
- Overlay hero: `rgba(0,0,0,.3)`
- Overlay bannera oferty: `rgba(0,0,0,.4)`
- Cień nav: `0 5px 5px -2px #d3d3d3`
- Strona prawna: gradient `#f0ebe8 → $white`, lead `#555`

### Typografia — zasady

| Element | Font | Charakter |
|---------|------|-----------|
| Brand w hero, cytaty, H1/H2 emocjonalne | Libre Baskerville | ekspresyjny, często italic / uppercase z letter-spacing |
| Menu, teksty ofert, kontakt, UI | Roboto | czytelny, spokojny |

Nie zamieniać Libre Baskerville na Inter/Roboto/Arial w nagłówkach bez świadomego rebrandu — to główny „głos” marki.

### Layout i rytm

| Reguła | Wartość |
|--------|---------|
| Max szerokość treści `.con` | `1200px` |
| Treść strony prawnej | `820px` |
| Min. wysokość sekcji `.section` | `85vh` |
| Hero | `100vh`, full-bleed |
| Wysokość sticky nav | `75px` |
| Offset scrollu w JS | `-90px` (powiązane z nav) |
| Ramki zdjęć | `border: 1px solid $pink` + `border-radius: 10px` |
| Motyw „offset image” | `transform: translate(1rem, 1rem)` na zdjęciu względem ramki |

### Motywy wizualne do zachowania

1. **Full-bleed hero** — wideo krawędź-do-krawędzi, ciemny overlay, brand + cytat na środku.
2. **Różowa ramka ze zdjęciem przesuniętym** — charakterystyczny detal „O nas” / oferty.
3. **Parallax banner oferty** — `background-attachment: fixed` + tytuły na overlay.
4. **Karty oferty z różową obwódką** — wystające w górę nad banner (`translateY(-20%)`).
5. **Ciemny, spokojny footer** — copyright + credit AddPattern + link do polityki.

Unikać: fioletowych gradientów „AI default”, kremowo-terrakotowych szablonów, mocnych glow, gęstych pill-clusterów, kart w hero.

---

## 4. Architektura strony głównej (UX)

Kolejność w `index.html`:

```
header
  overlay menu (mobile)
  hamburger
  movie-overlay (fixed hero video)
  movie (spacer 100vh)
nav.mainMenu (sticky)
main
  .main      → O nas
  .offer     → Oferta
  [.newYear] → Sylwester (zakomentowane — sezonowe)
  .gallery   → Galeria
  .contact   → Kontakt
footer
upBtn
consent-banner
```

### 4.1 Hero (`movie-overlay` + spacer `.movie`)

**UX intent:** natychmiastowe wrażenie miejsca i marki.

- Fixed video `Assets/video1.mp4` (autoplay, muted, loop).
- Brand: „Dom Weselny Agata” z powiększonymi literami D / W / A.
- Cytat wyśrodkowany, fade-in (`show-quote`, delay 1s).
- Wskaźnik „Przewiń” — **obecnie tylko dekoracja** (`#scrollBtn` nie ma handlera w `main.js`).
- Pusty `.movie` daje wysokość scrolla, żeby sticky content zaczynał się pod hero.

**Przy aktualizacji:** nie przeładowywać hero treścią; ewentualnie podmienić wideo / cytat. Jeśli ma działać scroll po kliknięciu — dopiąć handler do `#scrollBtn`.

### 4.2 Nawigacja

**Desktop (`mainMenu`):**
- sticky, białe tło, lekki cień,
- logo wystające ponad nav,
- linki w kolorze `$pink`, separator pionowy.

**Mobile (≤550px):**
- desktop menu ukryte,
- hamburger fixed (prawy górny róg),
- pełnoekranowy overlay `.menu-screen` z dużymi serifowymi pozycjami.

**Konwencja krytyczna:**  
`data-direction="X"` → sekcja z klasą `.X`.  
Przykład: `data-direction="gallery"` scrolluje do `.gallery`.  
Zmiana nazwy klasy sekcji bez aktualizacji `data-direction` psuje nawigację.

Offset scrollu: `offset().top - 90`. Przy zmianie wysokości nav zaktualizować JS.

### 4.3 O nas (`.main`)

- Layout 50/50: zdjęcie (ramka + offset) + cytat + dwa bloki copy.
- Cytaty italic Libre Baskerville w odcieniach różu.
- ≤650px: kolumna.

**UX intent:** emocja + wiarygodność (firma rodzinna, ~200 gości, gratis druga sala + 5 pokoi).

### 4.4 Oferta (`.offer`)

- Banner parallax z tytułami.
- Trzy bloki: Wesela / Komunie-chrzciny / Konferencje.
- Karty nachodzą na banner od dołu.

**Przy aktualizacji:** można zmieniać treść i zdjęcia; zachować język różowych ramek i rytm „jeden blok = jeden typ imprezy”.

### 4.5 Sylwester (`.newYear`) — sezonowe

- HTML i pozycje menu **zakomentowane**.
- Style (`_newYear.scss`), assety casino i animacja sparkle w `main.js` **zostają**.
- Włączenie: odkomentować sekcję + pozycje w desktop/mobile menu (`data-direction="newYear"`).

### 4.6 Galeria (`.gallery`)

- Siatka linków Lightbox: miniatura `Photos/miniatures/` → full `Photos/default/`.
- Grupa: `data-lightbox="gallery"`.
- Kontener przycięty wysokością (~65vh); przycisk **Pokaż więcej / Zwiń** przełącza klasę `.show`.
- Numeracja plików musi być zsynchronizowana między `default` i `miniatures`.

### 4.7 Kontakt (`.contact`)

- Adres, telefon, e-mail, Facebook.
- Baner partnera (Weselezklasa) — style inline w `<head>` `index.html`.
- Mapa Google (iframe ~600px).

Dane kontaktowe muszą być spójne z `polityka-prywatnosci.html`.

### 4.8 Footer

```
© rok + nazwa + lokalizacja · kategoria
Strona stworzona przez AddPattern … — kontakt
Polityka prywatności → polityka-prywatnosci.html
```

### 4.9 UI pływające

| Element | Zachowanie |
|---------|------------|
| `.upBtn` | Pojawia się po scrollu poniżej nav; wraca do sekcji `.main` (nie na sam top) |
| `.consent-banner` | Dolny baner do czasu zgody; potem `localStorage` + start GA |

---

## 5. Strona polityki prywatności

Plik: `polityka-prywatnosci.html`

- Ten sam `main1.css` i `consent.js` (bez Lightbox / `main.js`).
- Ciemny header z linkiem do marki i „Wróć”.
- 10 sekcji RODO/cookies; data aktualizacji w treści.
- Ten sam footer i baner zgody.

Przy zmianie narzędzi analytics lub danych firmy — zaktualizować treść polityki **i** opis w banerze.

---

## 6. Interakcje (JS)

### `src/main.js`

| Funkcja | Opis |
|---------|------|
| Hamburger | Toggle `.cross-animation` + `.menu-screen.show` |
| Scroll listener | Po przejściu nav: hamburger `.bgcColor`, upBtn `.show` |
| `moveScreen` | Zamyka menu jeśli otwarte; smooth scroll do sekcji (−90px, 500ms) |
| Up button | Scroll do `.main` |
| Lightbox | `resizeDuration: 150`, `wrapAround: true` |
| Gallery button | Expand/collapse + zmiana etykiety |
| New Year sparkle | Losowa animacja ikon co 1–3 s (jeśli elementy istnieją w DOM) |

### `src/consent.js`

- Klucz: `localStorage.dw_agata_consent === "accepted"`
- Brak zgody → baner widoczny
- „Wyrażam zgodę” → zapis, ukrycie, wstrzyknięcie gtag (`G-X6DM40XW7P`, `UA-199945119-1`)
- Test ponownego pokazu: `localStorage.removeItem('dw_agata_consent')`

**Zasada UX/prawna:** nie ładować Analytics przed zgodą.

---

## 7. Responsywność — mapa breakpointów

| Breakpoint | Efekt |
|------------|--------|
| ≤1000px | Kafelki galerii ~40% szerokości |
| ≤900px | Karty oferty węższe (~200px) |
| ≤750px | Mniejsze paddingi/font menu desktop |
| ≥768px | New Year: layout plakatów side-by-side |
| ≤700px | Oferta w kolumnę; baner cookies w kolumnę |
| ≤650px | „O nas” w kolumnę |
| ≤600px | Header strony prawnej w kolumnę |
| **≤550px** | **Przełączenie nav: desktop → hamburger** |
| ≤500px | Skalowanie typografii hero |
| ≤440px | Galeria ~80%; kontakt stack |
| ≤400px | Dalsze skalowanie hero / oferty |
| ≤360px | Galeria full width |

Najważniejszy próg UX: **550px** (tryb nawigacji).  
Przy redesignie mobile sprawdzać jednocześnie hamburger, overlay i offset scrollu.

---

## 8. Assety — konwencje

| Ścieżka | Zawartość |
|---------|-----------|
| `Assets/Images/` | Logo, flowers, couple, bible, conference, table (parallax), newYear* |
| `Assets/Photos/default` + `miniatures` | Para full/thumb — te same nazwy (`photoN.jpg`) |
| `Assets/Photos/casino` | Sezon Sylwester |
| `Assets/Icons/` | phone, message, fb, arrow, favicon, UI Lightbox |
| `Assets/video1.mp4` | Hero |

**Uwagi:**
- `Assets/Food/` — legacy, nieużywane na stronie.
- Część zdjęć galerii może istnieć w folderze, ale nie być w HTML — kolejność w markupie jest źródłem prawdy.
- `og:image` wskazuje na `Assets/Photos/default/photo0.jpg`.

---

## 9. Naming i konwencje kodu

- BEM-ish: `block__element--modifier` (np. `offer__elementTitle`, `main__quote--darken`).
- Sekcje = kotwice scrolla (klasa sekcji = `data-direction`).
- Style sekcji trzymać w odpowiadającym partialu SCSS (`_offer.scss` → oferta).
- Nowe komponenty globalne (np. banery UI) → własny partial + import w `main.scss` + rebuild `main1.css`.

---

## 10. Co zachować vs co można zmieniać

### Zachować (tożsamość + architektura)

- Paleta `$pink / $black / $white / $grey` i para fontów Libre Baskerville + Roboto
- Hero: brand-first + full-bleed video + jeden cytat
- Motyw różowej ramki / offset image
- Sticky nav + hamburger ≤550px + model `data-direction`
- Consent przed Analytics + link do polityki
- Spokojny, venue-owy charakter — mało „UI clutter”

### Bezpieczne do zmiany

- Copy, zdjęcia, kolejność galerii
- Włączanie/wyłączanie bloku Sylwester
- Treść kart oferty (przy zachowaniu języka wizualnego)
- Rok i teksty w footerze
- Podpięcie `#scrollBtn`
- Usunięcie martwych assetów / legacy CSS
- Mapa, baner partnera, dane kontaktowe (z synchronizacją polityki)

### Zmieniać ostrożnie

- Breakpoint **550** i offset scrollu **−90**
- Kolor akcentu / font display bez pełnego rebrandu
- Nazwy klas sekcji bez aktualizacji nawigacji i JS
- Ładowanie cookies/analytics bez banera
- Dokładanie kart / badge / promo do hero

---

## 11. Checklist przy aktualizacji designu / UX

1. Edytujesz SCSS → przebuduj i sprawdź **`css/main1.css`**.
2. Nowa sekcja → klasa + pozycja menu z `data-direction` + ewentualnie mobile overlay.
3. Zmiana wysokości nav → zaktualizuj offset w `moveScreen` (−90).
4. Nowe zdjęcia w galerii → para `default` + `miniatures` + markup Lightbox.
5. Sezon Sylwester → odkomentuj HTML + nav; sprawdź sparkle i casino lightbox.
6. Zmiana analytics / RODO → `consent.js` + `polityka-prywatnosci.html` + tekst banera.
7. Mobile: przetestuj ≤550px (hamburger) i ≤400px (hero typography).
8. Pierwszy viewport: brand nadal dominuje po usunięciu nav z widoku.

---

## 12. Szybki „brand test”

Po zmianach hero zadaj pytanie:

> Czy pierwszy ekran mógłby należeć do innej marki, gdyby usunąć pasek nawigacji?

Jeśli tak — branding jest za słaby. Przywróć silniejszą obecność nazwy / typografii brandu i atmosfery miejsca.
