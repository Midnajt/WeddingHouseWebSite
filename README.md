# Dom Weselny Agata

Strona internetowa Domu Weselnego Agata w Raszynie — elegancka wizytówka sali na wesela, komunie, chrzciny i konferencje.

**Live:** [domweselnyagata.pl](https://domweselnyagata.pl)

---

## O projekcie

Statyczna strona (HTML + CSS + JS). **Nie wymaga Node.js** ani budowania.

Gotowe pliki do publikacji są w folderze **`dist/`** — to jedyny katalog, który wgrywasz na FTP.

Szczegóły designu i UX: **[DOKUMENTACJA.md](./DOKUMENTACJA.md)**.

## Stack

| Warstwa | Technologia |
|--------|-------------|
| Style | Tailwind CSS 4 (CDN) + `dist/css/site.css` |
| Skrypty | Vanilla ES modules (`dist/js/`) |
| Galeria | PhotoSwipe 5 (CDN) |
| Fonty | Fraunces + DM Sans (Google Fonts) |
| Analityka | Google Analytics (po zgodzie cookies) |

## Lokalny podgląd

1. Otwórz projekt w Cursor.
2. Uruchom **Live Server** na `dist/index.html`.

Nie trzeba `npm install` ani `npm run build`.

## Deploy na FTP (OVH Cloud)

Wgraj **zawartość** `dist/` do katalogu `www/` na serwerze (nie sam folder `dist`):

```
.htaccess
index.html
polityka-prywatnosci.html
robots.txt
sitemap.xml
css/
js/
Assets/
```

W FileZilli włącz pokazywanie ukrytych plików — `.htaccess` musi leżeć obok `index.html`.

Po publikacji odśwież podgląd Facebooka: [Sharing Debugger](https://developers.facebook.com/tools/debug/).

## Struktura

```
├── dist/                         # to wgrywasz na FTP
│   ├── index.html
│   ├── polityka-prywatnosci.html
│   ├── .htaccess                 # HTTP → HTTPS, www → bez www
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── css/site.css
│   ├── js/
│   └── Assets/                   # zdjęcia, wideo, ikony, og-image.jpg
├── README.md
└── DOKUMENTACJA.md
```

## Autor

Strona: [AddPattern](https://addpattern.pl) · Marcin Krzysztoszek
