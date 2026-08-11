# Dom Weselny Agata

Strona internetowa Domu Weselnego Agata w Raszynie — elegancka wizytówka sali na wesela, komunie, chrzciny i konferencje.

**Live:** [domweselnyagata.pl](https://domweselnyagata.pl)

---

## O projekcie

Statyczna strona marketingowa (HTML / SCSS / JS) z naciskiem na atmosferę miejsca: full-bleed hero z wideo, spokojna typografia i galeria zdjęć.  
Szczegółowy opis designu, UX i zasad aktualizacji: **[DOKUMENTACJA.md](./DOKUMENTACJA.md)**.

## Stack

| Warstwa | Technologia |
|--------|-------------|
| Markup | HTML5 |
| Style | SCSS → CSS (`css/main1.css`) |
| Skrypty | Vanilla JS + jQuery (Lightbox) |
| Galeria | Lightbox2 |
| Fonty | Libre Baskerville, Roboto |
| Analityka | Google Analytics (po zgodzie cookies) |

## Struktura

```
├── index.html                 # Strona główna
├── polityka-prywatnosci.html # RODO / cookies
├── DOKUMENTACJA.md            # Design & UX (szczegóły)
├── Assets/                    # Zdjęcia, wideo, ikony
├── sass/                      # Źródła stylów
├── css/                       # Skompilowany CSS
└── src/                       # main.js, consent.js, lightbox
```

## Lokalny podgląd

Wystarczy otworzyć pliki przez lokalny serwer HTTP (np. Live Server w VS Code / Cursor) albo bezpośrednio `index.html` w przeglądarce.

```bash
# przykład — Python
python -m http.server 8080
```

Następnie: `http://localhost:8080`

## Style

Źródłem prawdy jest katalog `sass/`.  
**Produkcyjny arkusz ładowany przez stronę to `css/main1.css`.**

Po zmianach w SCSS przebuduj CSS tak, aby zaktualizować właśnie `main1.css` (np. Dart Sass):

```bash
sass sass/main.scss css/main1.css
```

## Główne sekcje strony

1. **Hero** — wideo + brand + cytat  
2. **O nas**  
3. **Oferta** — wesela, komunie/chrzciny, konferencje  
4. **Galeria** — Lightbox  
5. **Kontakt** — dane + mapa  
6. **Polityka prywatności** + baner cookies  

Sekcja **Sylwester** jest przygotowana sezonowo (zakomentowana w HTML) — szczegóły w dokumentacji.

## Autor

Strona: [AddPattern](https://midnajt.github.io/AddPattern.github.io/) · Marcin Krzysztoszek
