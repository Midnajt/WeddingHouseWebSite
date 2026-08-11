# Dom Weselny Agata

Strona internetowa Domu Weselnego Agata w Raszynie — elegancka wizytówka sali na wesela, komunie, chrzciny i konferencje.

**Live:** [domweselnyagata.pl](https://domweselnyagata.pl)

---

## O projekcie

Statyczna strona (HTML + CSS + JS). **Nie wymaga Node.js** ani budowania — działa z Live Server w Cursor/VS Code i da się wrzucić na FTP jako pliki.

Szczegóły designu i UX: **[DOKUMENTACJA.md](./DOKUMENTACJA.md)**.

## Stack

| Warstwa | Technologia |
|--------|-------------|
| Style | Tailwind CSS 4 (CDN) + `css/site.css` |
| Skrypty | Vanilla ES modules (`js/`) |
| Galeria | PhotoSwipe 5 (CDN) |
| Fonty | Fraunces + DM Sans (Google Fonts) |
| Analityka | Google Analytics (po zgodzie cookies) |

## Lokalny podgląd

1. Otwórz projekt w Cursor.
2. Uruchom **Live Server** na `index.html`.

Nie trzeba `npm install` ani `npm run build`.

## Deploy na FTP

Wgraj na serwer (zachowując strukturę katalogów):

```
index.html
polityka-prywatnosci.html
sitemap.xml
.htaccess
css/
js/
Assets/
```

Folderów `node_modules`, `dist`, `src` już nie ma — nie są potrzebne.

## Struktura

```
├── index.html
├── polityka-prywatnosci.html
├── css/site.css          # animacje, drawer, consent, oferta
├── js/
│   ├── main.js           # nav, motion, oferta, PhotoSwipe
│   ├── consent.js        # cookies + GA
│   └── legal.js          # entry strony polityki
└── Assets/               # zdjęcia, wideo, ikony
```

## Autor

Strona: [AddPattern](https://midnajt.github.io/AddPattern.github.io/) · Marcin Krzysztoszek
