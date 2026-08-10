#!/usr/bin/env node
/**
 * Site build script — generates city/service pages from templates,
 * updates sitemap lastmod, and converts images to WebP.
 *
 * Usage:
 *   node scripts/build-site.js           # generate pages + update sitemap
 *   node scripts/build-site.js --images  # also convert images to WebP
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..");
const TODAY = new Date().toISOString().slice(0, 10);

const PARTIALS_DIR = path.join(ROOT, "templates", "partials");

const ICON_FONT_PRELOAD =
  '<link rel="preload" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/fonts/bootstrap-icons.woff2" as="font" type="font/woff2" crossorigin />';

const BOOTSTRAP_CSS_SYNC =
  '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />';

const ICONS_CSS_DEFER = `<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" rel="stylesheet" media="print" onload="this.media='all'" />
<noscript><link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" rel="stylesheet" /></noscript>`;

const GENERATED_HEAD_ASSETS = `${ICON_FONT_PRELOAD}
  ${BOOTSTRAP_CSS_SYNC}
  ${ICONS_CSS_DEFER}
  <link href="styles.min.css?v=3" rel="stylesheet" />
  <style>body{margin:0;background-color:#2b2b2b;color:#e9e9e9;font-family:system-ui,-apple-system,sans-serif}.container{max-width:1140px;margin:0 auto;padding:0 15px}</style>`;

const HUB_PAGES = new Set([
  "index.html",
  "nemacka.html",
  "austrija.html",
  "svajcarska.html",
  "italija.html",
  "spanija.html",
  "svedska.html",
  "danska.html",
]);

const GERMAN_CITIES = [
  {
    slug: "dusseldorf",
    name: "Düsseldorf",
    nameSr: "Diseldorfa",
    description:
      "Prevoz pokojnika iz Diseldorfa - MI ZAVRŠAVAMO SVU DOKUMENTACIJU! Brza organizacija transporta iz NRW, 15+ godina iskustva. Tel: 064 249 28 49.",
    intro:
      "Brza i pouzdana organizacija prevoza pokojnika iz Diseldorfa (Düsseldorf) u Srbiju. Specijalizovani smo za transport iz Severne Rajne-Vestfalije sa potpunom dokumentacijom i 24/7 podrškom.",
    docs: "Totenbescheinigung, Leichenpass, izvozna dozvola",
    services: [
      "Preuzimanje u bolnicama i domovima u Diseldorfu i okolini",
      "Kompletna nemačka dokumentacija (Standesamt, Gesundheitsamt)",
      "Transport do Beograda, Novog Sada i celog regiona",
      "Transparentne cene bez skrivenih troškova",
    ],
    faqs: [
      {
        q: "Koliko traje prevoz iz Diseldorfa?",
        a: "U proseku 2–3 dana do Srbije, u zavisnosti od dokumentacije i termina preuzimanja.",
      },
      {
        q: "Da li pokrivate ceo NRW region?",
        a: "Da, organizujemo prevoz iz Diseldorfa, Keln, Essen, Dortmund i svih gradova u Severnoj Rajni-Vestfaliji.",
      },
      {
        q: "Koja dokumentacija je potrebna u Diseldorfu?",
        a: "Potrebni su Totenbescheinigung, Leichenpass i dozvola za izvoz. Naš tim završava kompletnu administraciju.",
      },
    ],
    relatedBlog: [
      {
        href: "/blog-koliko-kosta-prevoz-pokojnika-nemacka",
        title: "Koliko košta prevoz pokojnika iz Nemačke",
      },
      {
        href: "/blog-dokumentacija-za-prevoz-pokojnika",
        title: "Dokumentacija za prevoz pokojnika",
      },
    ],
  },
  {
    slug: "koln",
    name: "Köln",
    nameSr: "Kelna",
    description:
      "Prevoz pokojnika iz Kelna - MI ZAVRŠAVAMO SVU DOKUMENTACIJU! Brza organizacija transporta, govorimo nemački. Tel: 064 249 28 49.",
    intro:
      "Profesionalan prevoz pokojnika iz Kelna (Köln) za Srbiju. Naš tim ima dugogodišnje iskustvo sa kelnским institucijama i obezbeđuje diskretan, brz transport sa kompletnom dokumentacijom.",
    docs: "Totenbescheinigung, Sterbeurkunde, Leichenpass",
    services: [
      "Preuzimanje u bolnicama, kapela i domovima u Keln",
      "Završavanje svih nemačkih administrativnih procedura",
      "Specijalizovana vozila sa rashladnim uređajem",
      "Podrška porodici na srpskom i nemačkom jeziku",
    ],
    faqs: [
      {
        q: "Koliko košta prevoz iz Kelna?",
        a: "Cena zavisi od udaljenosti i tipa sanduka. Kontaktirajte nas na +381 64 249 28 49 za besplatnu procenu.",
      },
      {
        q: "Da li radite sa kelnским Standesamt-om?",
        a: "Da, naš tim redovno saradjuje sa kelnским opštinskim i zdravstvenim institucijama.",
      },
      {
        q: "Koliko brzo možete organizovati transport?",
        a: "U hitnim slučajevima transport možemo organizovati u roku od 24–48 sati.",
      },
    ],
    relatedBlog: [
      {
        href: "/blog-koliko-kosta-prevoz-pokojnika-nemacka",
        title: "Koliko košta prevoz pokojnika iz Nemačke",
      },
      {
        href: "/blog-kako-organizovati-prevoz-pokojnika",
        title: "Kako organizovati prevoz pokojnika",
      },
    ],
  },
  {
    slug: "stuttgart",
    name: "Stuttgart",
    nameSr: "Štutgarta",
    description:
      "Prevoz pokojnika iz Štutgarta - MI ZAVRŠAVAMO SVU DOKUMENTACIJU! Transport iz Baden-Württemberg, 24/7 podrška. Tel: 064 249 28 49.",
    intro:
      "Organizujemo prevoz pokojnika iz Štutgarta (Stuttgart) i cele Baden-Württemberg regije za Srbiju. Pružamo kompletnu uslugu od preuzimanja do isporuke sa svom potrebnom dokumentacijom.",
    docs: "Totenbescheinigung, Leichenpass, carinska dokumentacija",
    services: [
      "Preuzimanje u Štutgartu i okolnim gradovima",
      "Kompletna dokumentacija za izvoz iz Nemačke",
      "Međunarodni transport specijalizovanim vozilom",
      "Koordinacija sa srpskim ambasadama i carinom",
    ],
    faqs: [
      {
        q: "Da li organizujete prevoz iz cele Baden-Württemberg?",
        a: "Da, pokrivamo Štutgart, Karlsruhe, Mannheim i celu južnu Nemačku.",
      },
      {
        q: "Koliko traje prevoz iz Štutgarta do Beograda?",
        a: "Putovanje traje oko 12–14 sati vozilom, a kompletan proces 2–4 dana sa dokumentacijom.",
      },
      {
        q: "Da li govorite nemački?",
        a: "Da, deo našeg tima tečno govori nemački i komunicira sa lokalnim institucijama.",
      },
    ],
    relatedBlog: [
      {
        href: "/blog-dokumentacija-za-prevoz-pokojnika",
        title: "Dokumentacija za prevoz pokojnika",
      },
      {
        href: "/blog-hitni-prevoz-pokojnika-sta-treba-znati",
        title: "Hitni prevoz pokojnika",
      },
    ],
  },
  {
    slug: "dortmund",
    name: "Dortmund",
    nameSr: "Dortmunda",
    description:
      "Prevoz pokojnika iz Dortmunda - MI ZAVRŠAVAMO SVU DOKUMENTACIJU! Brza organizacija iz NRW, 15+ godina iskustva. Tel: 064 249 28 49.",
    intro:
      "Pouzdana organizacija prevoza pokojnika iz Dortmunda (Dortmund) u Srbiju. Naš tim preuzima kompletnu dokumentaciju i obezbeđuje dostojanstven transport iz Ruhr regiona.",
    docs: "Totenbescheinigung, Leichenpass",
    services: [
      "Preuzimanje u Dortmundu i Ruhr oblasti",
      "Administracija kod lokalnih nemačkih institucija",
      "Transport specijalizovanim pogrebnim vozilom",
      "Dostava na bilo koju lokaciju u Srbiji",
    ],
    faqs: [
      {
        q: "Da li radite u celom Ruhr regionu?",
        a: "Da, organizujemo prevoz iz Dortmunda, Essen, Bochum, Duisburg i okolnih gradova.",
      },
      {
        q: "Koliko traje organizacija prevoza?",
        a: "Prosečno 2–4 dana uključujući pribavljanje dokumentacije.",
      },
    ],
    relatedBlog: [
      {
        href: "/blog-koliko-kosta-prevoz-pokojnika-nemacka",
        title: "Koliko košta prevoz pokojnika iz Nemačke",
      },
    ],
  },
  {
    slug: "leipzig",
    name: "Leipzig",
    nameSr: "Lajpciga",
    description:
      "Prevoz pokojnika iz Lajpciga - MI ZAVRŠAVAMO SVU DOKUMENTACIJU! Transport iz Saksonije, 24/7 podrška. Tel: 064 249 28 49.",
    intro:
      "Profesionalan prevoz pokojnika iz Lajpciga (Leipzig) za Srbiju. Specijalizovani smo za transport iz istočne Nemačke sa kompletnom dokumentacijom i podrškom porodici.",
    docs: "Totenbescheinigung, Leichenpass, izvozna dozvola",
    services: [
      "Preuzimanje u Lajpcigu i Saksoniji",
      "Kompletna nemačka i srpska dokumentacija",
      "Specijalizovana vozila za međunarodni transport",
      "Transparentne cene i 24/7 dostupnost",
    ],
    faqs: [
      {
        q: "Da li organizujete prevoz iz celog Lajpciga?",
        a: "Da, pokrivamo Lajpcig i celu Saksoniju, uključujući Dresden i Chemnitz.",
      },
      {
        q: "Koliko traje prevoz iz Lajpciga?",
        a: "Kompletan proces traje 2–4 dana, u zavisnosti od brzine izdavanja dokumentacije.",
      },
    ],
    relatedBlog: [
      {
        href: "/blog-kako-organizovati-prevoz-pokojnika",
        title: "Kako organizovati prevoz pokojnika",
      },
    ],
  },
  {
    slug: "dresden",
    name: "Dresden",
    nameSr: "Drezdena",
    description:
      "Prevoz pokojnika iz Drezdena - MI ZAVRŠAVAMO SVU DOKUMENTACIJU! Transport iz Saksonije, govorimo nemački. Tel: 064 249 28 49.",
    intro:
      "Organizujemo prevoz pokojnika iz Drezdena (Dresden) u Srbiju. Naš tim ima iskustva sa saksonskim institucijama i obezbeđuje brz, diskretan transport sa kompletnom papirologijom.",
    docs: "Totenbescheinigung, Leichenpass",
    services: [
      "Preuzimanje u Drezden i okolini",
      "Završavanje svih administrativnih procedura",
      "Međunarodni transport pogrebnim vozilom",
      "Podrška porodici tokom celog procesa",
    ],
    faqs: [
      {
        q: "Koliko traje prevoz iz Drezdena do Srbije?",
        a: "Vozno putovanje traje oko 10–12 sati, a kompletan proces sa dokumentacijom 2–4 dana.",
      },
      {
        q: "Da li radite sa drezdenskim institucijama?",
        a: "Da, redovno saradujemo sa Standesamt i Gesundheitsamt u Drezden.",
      },
    ],
    relatedBlog: [
      {
        href: "/blog-dokumentacija-za-prevoz-pokojnika",
        title: "Dokumentacija za prevoz pokojnika",
      },
    ],
  },
];

function renderCityPage(city) {
  const faqHtml = city.faqs
    .map(
      (faq, i) => `
          <div class="accordion-item">
            <h3 class="accordion-header" id="q${i + 1}">
              <button
                class="accordion-button${i > 0 ? " collapsed" : ""}"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#a${i + 1}"
              >
                ${faq.q}
              </button>
            </h3>
            <div
              id="a${i + 1}"
              class="accordion-collapse collapse${i === 0 ? " show" : ""}"
              data-bs-parent="#faqAccordion${city.slug}"
            >
              <div class="accordion-body">${faq.a}</div>
            </div>
          </div>`
    )
    .join("");

  const faqSchema = city.faqs
    .map(
      (faq) => `{
            "@type": "Question",
            "name": ${JSON.stringify(faq.q)},
            "acceptedAnswer": {
              "@type": "Answer",
              "text": ${JSON.stringify(faq.a)}
            }
          }`
    )
    .join(",\n          ");

  const servicesHtml = city.services
    .map(
      (s) => `<li class="mb-3">
                <i class="bi bi-check-circle-fill text-success me-2"></i>${s}
              </li>`
    )
    .join("\n              ");

  const relatedBlogHtml = (city.relatedBlog || [])
    .map(
      (b) =>
        `<li><a href="${b.href}" class="text-primary">${b.title}</a></li>`
    )
    .join("\n                  ");

  const url = `https://transportpokojnika.com/${city.slug}`;

  return `<!DOCTYPE html>
<html lang="sr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Prevoz pokojnika iz ${city.nameSr} | Transport</title>

    <meta name="description" content="${city.description}" />
    <meta name="author" content="Transport pokojnika - Pogrebno preduzeće" />

    <meta property="og:type" content="website" />
    <meta property="og:url" content="${url}" />
    <meta property="og:title" content="Prevoz pokojnika iz ${city.nameSr} (${city.name}) | Međunarodni transport" />
    <meta property="og:description" content="Organizujemo prevoz pokojnika iz ${city.nameSr} za Srbiju. Kompletna dokumentacija i 24/7 podrška." />
    <meta property="og:image" content="https://transportpokojnika.com/pogrebni-kombi-sa-sandukom.jpg" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="${url}" />
    <meta name="twitter:title" content="Prevoz pokojnika iz ${city.nameSr} (${city.name})" />
    <meta name="twitter:description" content="Organizujemo prevoz pokojnika iz ${city.nameSr} za Srbiju." />
    <meta name="twitter:image" content="https://transportpokojnika.com/pogrebni-kombi-sa-sandukom.jpg" />

    <link rel="canonical" href="${url}" />

    <link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin />
    ${GENERATED_HEAD_ASSETS}
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Prevoz pokojnika iz ${city.nameSr}",
        "description": "Profesionalan prevoz pokojnika iz ${city.nameSr} sa kompletnom dokumentacijom i 24/7 podrškom",
        "url": "${url}",
        "provider": {
          "@type": "FuneralService",
          "name": "Transport pokojnika - Pogrebno preduzeće",
          "telephone": "+381642492849",
          "email": "kontakt@transportpokojnika.com",
          "url": "https://transportpokojnika.com"
        },
        "areaServed": { "@type": "City", "name": "${city.name}" }
      }
    </script>

    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [${faqSchema}]
      }
    </script>

    <link rel="icon" type="image/png" href="vijenac logo.png" />
    <link rel="apple-touch-icon" href="vijenac logo.png" />
  </head>
  <body>
    <div id="header-container"></div>

    <main role="main">
      <nav class="container" aria-label="breadcrumb">
        <ol class="breadcrumb py-3">
          <li class="breadcrumb-item"><a href="/">Početna</a></li>
          <li class="breadcrumb-item"><a href="/#transport">Međunarodni transport</a></li>
          <li class="breadcrumb-item"><a href="/nemacka">Nemačka</a></li>
          <li class="breadcrumb-item active" aria-current="page">${city.nameSr}</li>
        </ol>
      </nav>

      <section class="container-fluid bg-light py-5">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <h1 class="display-4 mb-4">Prevoz pokojnika iz ${city.nameSr}</h1>
              <p class="lead mb-4">${city.intro}</p>
              <a href="tel:+381642492849" class="btn btn-primary btn-lg">Pozovite nas odmah</a>
            </div>
            <div class="col-lg-6">
              <picture>
                <source srcset="pogrebni-kombi-sa-sandukom.webp" type="image/webp" />
                <img loading="lazy" decoding="async" src="pogrebni-kombi-sa-sandukom.jpg" alt="Vozilo za prevoz pokojnika iz ${city.nameSr}" class="img-fluid rounded shadow mb-3" width="500" height="300" />
              </picture>
              <picture>
                <source srcset="pogrebni-sanduk.webp" type="image/webp" />
                <img loading="lazy" decoding="async" src="pogrebni-sanduk.png" alt="Pogrebni sanduk za prevoz iz ${city.nameSr}" class="img-fluid rounded shadow" width="500" height="300" />
              </picture>
            </div>
          </div>
        </div>
      </section>

      <section class="container my-5">
        <div class="row">
          <div class="col-md-6">
            <h2 class="mb-4">Usluge za ${city.nameSr}</h2>
            <ul class="list-unstyled">
              ${servicesHtml}
            </ul>
            <p class="mt-3">Potrebna dokumentacija uključuje: ${city.docs}. Više informacija na stranici <a href="/dokumentacija-za-prevoz-pokojnika" class="text-primary">dokumentacija za prevoz pokojnika</a>.</p>
          </div>
          <div class="col-md-6">
            <h2 class="mb-4">Kako izgleda postupak</h2>
            <div class="card service-card">
              <div class="card-body">
                <ol class="mb-0">
                  <li>Kontakt i procena situacije</li>
                  <li>Prikupljanje dokumentacije</li>
                  <li>Organizacija transporta iz ${city.nameSr}</li>
                  <li>Isporučenje na željenu adresu u Srbiji</li>
                </ol>
              </div>
            </div>
            ${relatedBlogHtml ? `<div class="mt-4"><h3 class="h5">Korisni članci</h3><ul>${relatedBlogHtml}</ul></div>` : ""}
          </div>
        </div>
      </section>

      <section class="container my-5">
        <h2 class="mb-4">O prevozu iz ${city.nameSr}</h2>
        <p>Prevoz pokojnika iz ${city.nameSr} (${city.name}) zahteva poštovanje nemačkih i srpskih propisa o prenosu umrlih preko granice. Naše pogrebno preduzeće sa više od 15 godina iskustva preuzima kompletnu organizaciju — od kontakta sa lokalnim Standesamt-om i bolnicama, preko pribavljanja Totenbescheinigung i Leichenpass, do transporta specijalizovanim vozilom sa rashladnim uređajem.</p>
        <p>Porodice koje žive u Srbiji a umrla im je bliska osoba u ${city.nameSr} ne moraju da brinu o birokratiji. Naš tim govori nemački i srpski, dostupan je 24 sata dnevno i pruža diskretnu podršku u najtežim trenucima. Za detalje o cenama pogledajte naš <a href="/cenovnik" class="text-primary">cenovnik</a>, a za opšte informacije o prevozu iz Nemačke posetite stranicu <a href="/nemacka" class="text-primary">prevoz pokojnika iz Nemačke</a>.</p>
        <p>Takođe organizujemo prevoz iz drugih nemačkih gradova: <a href="/berlin" class="text-primary">Berlin</a>, <a href="/munchen" class="text-primary">Minhen</a>, <a href="/hamburg" class="text-primary">Hamburg</a>, <a href="/frankfurt" class="text-primary">Frankfurt</a>, <a href="/koln" class="text-primary">Keln</a> i <a href="/dusseldorf" class="text-primary">Diseldorf</a>.</p>
      </section>

      <section class="py-5 bg-primary text-white">
        <div class="container text-center">
          <h2 class="mb-3">Potrebna vam je pomoć oko prevoza iz ${city.nameSr}?</h2>
          <p class="lead mb-4">Kontaktirajte nas 24/7 ili pogledajte sve informacije za Nemačku.</p>
          <a href="tel:+381642492849" class="btn btn-light btn-lg me-2"><i class="bi bi-telephone-fill me-2"></i>Pozovite odmah</a>
          <a href="/nemacka" class="btn btn-outline-light btn-lg">Nazad na Nemačku</a>
        </div>
      </section>

      <section class="container my-5" id="faq-${city.slug}">
        <h2 class="mb-4 text-center">Najčešća pitanja za ${city.nameSr}</h2>
        <div class="accordion" id="faqAccordion${city.slug}">${faqHtml}
        </div>
      </section>
    </main>

    <div id="footer-container"></div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" defer></script>
    <script src="includes.js?v=3" defer></script>

    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Početna", "item": "https://transportpokojnika.com/" },
          { "@type": "ListItem", "position": 2, "name": "Međunarodni transport", "item": "https://transportpokojnika.com/#transport" },
          { "@type": "ListItem", "position": 3, "name": "Nemačka", "item": "https://transportpokojnika.com/nemacka" },
          { "@type": "ListItem", "position": 4, "name": "${city.nameSr}", "item": "${url}" }
        ]
      }
    </script>
  </body>
</html>
`;
}

function generateCityPages() {
  GERMAN_CITIES.forEach((city) => {
    const filePath = path.join(ROOT, `${city.slug}.html`);
    fs.writeFileSync(filePath, renderCityPage(city), "utf8");
    console.log(`Generated ${city.slug}.html`);
  });
}

function updateSitemap(extraUrls) {
  const sitemapPath = path.join(ROOT, "sitemap.xml");
  let content = fs.readFileSync(sitemapPath, "utf8");

  extraUrls.forEach(({ loc, priority = "0.7" }) => {
    if (content.includes(loc)) return;
    const entry = `  <url>
    <loc>${loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>
`;
    content = content.replace("</urlset>", entry + "</urlset>");
  });

  content = content.replace(/<lastmod>[\d-]+<\/lastmod>/g, `<lastmod>${TODAY}</lastmod>`);
  fs.writeFileSync(sitemapPath, content, "utf8");
  console.log("Updated sitemap.xml");
}

function convertImages() {
  const exts = [".jpg", ".jpeg", ".png"];
  const files = fs.readdirSync(ROOT).filter((f) => exts.some((e) => f.toLowerCase().endsWith(e)));

  if (files.length === 0) {
    console.log("No source images found in project root — skipping WebP conversion.");
    return;
  }

  let sharp;
  try {
    sharp = require("sharp");
  } catch {
    console.log("Installing sharp for WebP conversion...");
    execSync("npm install sharp --no-save", { cwd: ROOT, stdio: "inherit" });
    sharp = require("sharp");
  }

  files.forEach((file) => {
    const input = path.join(ROOT, file);
    const output = path.join(ROOT, file.replace(/\.(jpe?g|png)$/i, ".webp"));
    sharp(input)
      .webp({ quality: 82 })
      .toFile(output)
      .then(() => console.log(`Converted ${file} → ${path.basename(output)}`))
      .catch((err) => console.error(`Failed ${file}:`, err.message));
  });
}

function wrapImagesWithPicture(html) {
  html = dedupePictureTags(html);

  const wrapAsset = (filename, webp) => {
    const re = new RegExp(`<img([^>]*?)src="${filename.replace(".", "\\.")}"([^>]*?)>`, "gi");
    html = html.replace(re, (match, before, after, offset, str) => {
      const prefix = str.slice(0, offset);
      const lastOpen = prefix.lastIndexOf("<picture>");
      const lastClose = prefix.lastIndexOf("</picture>");
      if (lastOpen > lastClose) return match;
      return `<picture><source srcset="${webp}" type="image/webp" /><img${before}src="${filename}"${after}>`;
    });
  };

  wrapAsset("pogrebni-kombi-sa-sandukom.jpg", "pogrebni-kombi-sa-sandukom.webp");
  wrapAsset("pogrebni-sanduk.png", "pogrebni-sanduk.webp");
  wrapAsset("pogrebni-sanduci.jpg", "pogrebni-sanduci.webp");

  return dedupePictureTags(html);
}

function dedupePictureTags(html) {
  let prev;
  do {
    prev = html;
    html = html.replace(
      /<picture><source srcset="([^"]+\.webp)" type="image\/webp" \/><picture><source srcset="\1" type="image\/webp" \/>/g,
      '<picture><source srcset="$1" type="image/webp" />'
    );
    html = html.replace(
      /<picture><source srcset="([^"]+\.webp)" type="image\/webp" \/><picture>/g,
      '<picture><source srcset="$1" type="image/webp" />'
    );
    html = html.replace(/<\/picture><\/picture>/g, "</picture>");
  } while (html !== prev);
  return html;
}

function updateBlogImageDimensions() {
  const blogFiles = fs.readdirSync(ROOT).filter((f) => f.startsWith("blog-") && f.endsWith(".html"));
  blogFiles.forEach((file) => {
    let content = fs.readFileSync(path.join(ROOT, file), "utf8");
    let modified = false;

    const withDims = content.replace(/<img(?![^>]*\bwidth=)([^>]*?)>/gi, (match, attrs) => {
      if (/class="[^"]*card-img-top/.test(attrs)) return match;
      return `<img width="800" height="450"${attrs}>`;
    });
    if (withDims !== content) {
      content = withDims;
      modified = true;
    }

    const wrapped = wrapImagesWithPicture(content);
    if (wrapped !== content) {
      content = wrapped;
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(path.join(ROOT, file), content, "utf8");
      console.log(`Updated images in ${file}`);
    }
  });
}

function updateBlogListingImages() {
  const filePath = path.join(ROOT, "blog.html");
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, "utf8");
  let modified = false;

  const cardPattern =
    /<img\s+src="(pogrebni-kombi-sa-sandukom\.jpg|pogrebni-sanduk\.png|pogrebni-sanduci\.jpg)"\s+class="card-img-top"\s+alt="([^"]*)"\s+loading="lazy"\s*\/>/g;

  let updated = content.replace(cardPattern, (_match, src, alt) => {
    const webp = src.replace(/\.(jpe?g|png)$/i, ".webp");
    return `<picture><source srcset="${webp}" type="image/webp" /><img src="${src}" class="card-img-top" alt="${alt}" width="400" height="225" loading="lazy" /></picture>`;
  });

  updated = updated.replace(
    /<img\s+src="([^"]+)"\s+class="card-img-top"\s+alt="([^"]*)"\s+loading="lazy"\s*\/>/g,
    '<img src="$1" class="card-img-top" alt="$2" width="400" height="225" loading="lazy" />'
  );

  if (updated !== content) {
    content = updated;
    modified = true;
  }

  const wrapped = wrapImagesWithPicture(content);
  if (wrapped !== content) {
    content = wrapped;
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content, "utf8");
    console.log("Updated images in blog.html");
  }
}

function dedupeAllPictureTags() {
  fs.readdirSync(ROOT)
    .filter((f) => f.endsWith(".html"))
    .forEach((file) => {
      const filePath = path.join(ROOT, file);
      let content = fs.readFileSync(filePath, "utf8");
      const deduped = dedupePictureTags(content);
      if (deduped !== content) {
        fs.writeFileSync(filePath, deduped, "utf8");
        console.log(`Deduped picture tags in ${file}`);
      }
    });
}

function updateStaticPageImages() {
  fs.readdirSync(ROOT)
    .filter((f) => f.endsWith(".html"))
    .forEach((file) => {
      const filePath = path.join(ROOT, file);
      let content = fs.readFileSync(filePath, "utf8");
      const updated = wrapImagesWithPicture(content);
      if (updated !== content) {
        fs.writeFileSync(filePath, updated, "utf8");
        console.log(`Updated images in ${file}`);
      }
    });
}

function renderServicePage({ slug, title, description, h1, lead, sections, faqs, relatedLinks }) {
  const url = `https://transportpokojnika.com/${slug}`;
  const faqHtml = (faqs || [])
    .map(
      (faq, i) => `
          <div class="accordion-item">
            <h3 class="accordion-header">
              <button class="accordion-button${i > 0 ? " collapsed" : ""}" type="button" data-bs-toggle="collapse" data-bs-target="#faq${i + 1}">${faq.q}</button>
            </h3>
            <div id="faq${i + 1}" class="accordion-collapse collapse${i === 0 ? " show" : ""}" data-bs-parent="#faqAccordion">
              <div class="accordion-body">${faq.a}</div>
            </div>
          </div>`
    )
    .join("");

  const faqSchema = (faqs || [])
    .map(
      (faq) => `{"@type":"Question","name":${JSON.stringify(faq.q)},"acceptedAnswer":{"@type":"Answer","text":${JSON.stringify(faq.a)}}}`
    )
    .join(",");

  const sectionsHtml = sections
    .map((s) => `<h2 class="mt-4">${s.h}</h2>${s.p.map((para) => `<p>${para}</p>`).join("")}`)
    .join("");

  const relatedHtml = (relatedLinks || [])
    .map((l) => `<li><a href="${l.href}" class="text-primary">${l.title}</a></li>`)
    .join("");

  return `<!DOCTYPE html>
<html lang="sr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  <meta name="description" content="${description}" />
  <meta name="author" content="Transport pokojnika - Pogrebno preduzeće" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="${url}" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:image" content="https://transportpokojnika.com/pogrebni-kombi-sa-sandukom.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
  <link rel="canonical" href="${url}" />
  <link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin />
  ${GENERATED_HEAD_ASSETS}
  <script type="application/ld+json">{"@context":"https://schema.org","@type":"Service","name":${JSON.stringify(h1)},"description":${JSON.stringify(description)},"url":"${url}","provider":{"@type":"FuneralService","name":"Transport pokojnika - Pogrebno preduzeće","telephone":"+381642492849","url":"https://transportpokojnika.com"}}</script>
  ${faqs && faqs.length ? `<script type="application/ld+json">{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[${faqSchema}]}</script>` : ""}
  <link rel="icon" type="image/png" href="vijenac logo.png" />
</head>
<body>
  <div id="header-container"></div>
  <main role="main">
    <nav class="container py-3" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/">Početna</a></li>
        <li class="breadcrumb-item active" aria-current="page">${h1}</li>
      </ol>
    </nav>
    <section class="container-fluid bg-light py-5">
      <div class="container">
        <h1 class="display-4 mb-4">${h1}</h1>
        <p class="lead">${lead}</p>
        <a href="tel:+381642492849" class="btn btn-primary btn-lg mt-3">Pozovite nas odmah</a>
      </div>
    </section>
    <section class="container my-5">
      <div class="row">
        <div class="col-lg-8">
          ${sectionsHtml}
          ${relatedHtml ? `<h2 class="mt-5">Povezane stranice</h2><ul>${relatedHtml}</ul>` : ""}
        </div>
        <div class="col-lg-4">
          <picture><source srcset="pogrebni-kombi-sa-sandukom.webp" type="image/webp" /><img src="pogrebni-kombi-sa-sandukom.jpg" alt="${h1}" class="img-fluid rounded shadow" width="400" height="240" loading="lazy" /></picture>
        </div>
      </div>
    </section>
    ${faqs && faqs.length ? `<section class="container my-5"><h2 class="mb-4">Najčešća pitanja</h2><div class="accordion" id="faqAccordion">${faqHtml}</div></section>` : ""}
    <section class="py-5 bg-primary text-white"><div class="container text-center"><h2 class="mb-3">Potrebna vam je pomoć?</h2><a href="tel:+381642492849" class="btn btn-light btn-lg me-2">Pozovite odmah</a><a href="/contact" class="btn btn-outline-light btn-lg">Kontakt</a></div></section>
  </main>
  <div id="footer-container"></div>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" defer></script>
  <script src="includes.js?v=3" defer></script>
</body>
</html>`;
}

const SERVICE_PAGES = [
  {
    slug: "dokumentacija-za-prevoz-pokojnika",
    title: "Dokumentacija za prevoz pokojnika | Kompletan vodič",
    description: "Sva dokumentacija potrebna za prevoz pokojnika iz inostranstva. MI ZAVRŠAVAMO SVU DOKUMENTACIJU! Standesamt, ambasade, carina. Tel: 064 249 28 49.",
    h1: "Dokumentacija za prevoz pokojnika",
    lead: "Kompletna usluga pribavljanja dokumentacije za međunarodni transport pokojnika. Naš tim preuzima svu papirologiju — vi se fokusirate na porodicu.",
    sections: [
      { h: "Koja dokumentacija je potrebna?", p: ["Za međunarodni prevoz pokojnika potrebni su: izvod iz matične knjige umrlih, potvrda o smrti, sprovodnica (dozvola za transport), pasoš pokojnika, dozvola za izvoz iz zemlje polaska i dozvola za uvoz u Srbiju.", "Dokumenti se razlikuju po zemljama. Za prevoz iz <a href=\"/nemacka\" class=\"text-primary\">Nemačke</a> potrebni su Totenbescheinigung i Leichenpass, iz <a href=\"/austrija\" class=\"text-primary\">Austrije</a> Sterbeurkunde, a iz <a href=\"/svajcarska\" class=\"text-primary\">Švajcarske</a> dodatne carinske dozvole."] },
      { h: "Mi završavamo svu dokumentaciju", p: ["Naše pogrebno preduzeće sa 15+ godina iskustva preuzima kompletnu administraciju. Kontaktiramo Standesamt, bolnice, ambasade i carinske organe umesto vas.", "Proces obično traje 2–5 radnih dana, u hitnim slučajevima i brže. Detaljniji vodič možete pročitati u našem <a href=\"/blog-dokumentacija-za-prevoz-pokojnika\" class=\"text-primary\">blog članku o dokumentaciji</a>."] },
    ],
    faqs: [
      { q: "Koliko traje pribavljanje dokumentacije?", a: "Prosečno 2–5 radnih dana, u zavisnosti od zemlje i kompleksnosti slučaja." },
      { q: "Da li moram lično da idem po dokumente?", a: "Ne — naš tim preuzima kompletnu administraciju umesto porodice." },
    ],
    relatedLinks: [{ href: "/nemacka", title: "Prevoz iz Nemačke" }, { href: "/blog-dokumentacija-za-prevoz-pokojnika", title: "Blog: Dokumentacija za prevoz" }, { href: "/cenovnik", title: "Cenovnik" }],
  },
  {
    slug: "pogrebni-sanduci",
    title: "Pogrebni sanduci | Transport pokojnika",
    description: "Pogrebni sanduci za međunarodni transport pokojnika. Standardni i premium modeli, usklađeni sa međunarodnim propisima. Tel: 064 249 28 49.",
    h1: "Pogrebni sanduci",
    lead: "Obezbeđujemo pogrebne sanduke usklađene sa međunarodnim propisima za transport pokojnika iz Evrope u Srbiju.",
    sections: [
      { h: "Sanduci za međunarodni transport", p: ["Za prevoz pokojnika preko granice potreban je sanduk koji ispunjava međunarodne standarde — hermetički zatvoren, od odgovarajućeg materijala i sa potrebnim oznakama.", "Nudimo standardne i premium modele u zavisnosti od želja porodice. Sanduk je uključen u cenu prevoza."] },
      { h: "Usklađenost sa propisima", p: ["Svi sanduci ispunjavaju zahteve nemačkih, austrijskih, švajcarskih i srpskih propisa. Ovo je ključno za carinske i granične kontrole tokom transporta."] },
    ],
    faqs: [
      { q: "Da li je sanduk uključen u cenu prevoza?", a: "Da, standardni sanduk je uključen u cenu međunarodnog transporta." },
      { q: "Mogu li izabrati premium sanduk?", a: "Da, nudimo različite modele. Kontaktirajte nas za detalje i cenovnik." },
    ],
    relatedLinks: [{ href: "/cenovnik", title: "Cenovnik usluga" }, { href: "/nemacka", title: "Prevoz iz Nemačke" }],
  },
  {
    slug: "ekshumacija",
    title: "Ekshumacija i prenos pokojnika | Transport pokojnika",
    description: "Profesionalna ekshumacija i prenos umrle osobe. Pravna dokumentacija, diskretan transport. 15+ godina iskustva. Tel: 064 249 28 49.",
    h1: "Ekshumacija i prenos umrle osobe",
    lead: "Organizujemo ekshumaciju i prenos umrlih sa kompletnom pravnom dokumentacijom i profesionalnim transportom.",
    sections: [
      { h: "Šta je ekshumacija?", p: ["Ekshumacija je izvlačenje posmrtnih ostataka iz groba radi prenosa na drugu lokaciju — u drugi grob, grad ili zemlju.", "Proces zahteva sudsku dozvolu, saglasnost nadležnih organa i poštovanje zakonskih rokova."] },
      { h: "Naša usluga", p: ["Preuzimamo kompletnu organizaciju: pribavljanje dozvola, koordinaciju sa grobljem, ekshumaciju, opremanje i transport na novu lokaciju.", "Više informacija u našem <a href=\"/blog-ekshumacija-i-prenos-umrle-osobe\" class=\"text-primary\">blog članku o ekshumaciji</a>."] },
    ],
    faqs: [
      { q: "Koliko traje proces ekshumacije?", a: "U zavisnosti od dozvola i lokacije, proces traje 1–4 nedelje." },
      { q: "Da li je potrebna sudska dozvola?", a: "Da, ekshumacija zahteva odobrenje nadležnog suda i groblja." },
    ],
    relatedLinks: [{ href: "/blog-ekshumacija-i-prenos-umrle-osobe", title: "Blog: Ekshumacija vodič" }, { href: "/repatrijacija-pokojnika", title: "Repatrijacija pokojnika" }],
  },
  {
    slug: "repatrijacija-pokojnika",
    title: "Repatrijacija pokojnika | Međunarodni transport",
    description: "Repatrijacija pokojnika iz inostranstva u Srbiju. Pravni okvir, dokumentacija, transport 24/7. MI ZAVRŠAVAMO SVU DOKUMENTACIJU! Tel: 064 249 28 49.",
    h1: "Repatrijacija pokojnika",
    lead: "Repatrijacija je prenos pokojnika iz inostranstva u domovinu. Organizujemo kompletan proces — od dokumentacije do isporuke.",
    sections: [
      { h: "Šta je repatrijacija?", p: ["Repatrijacija pokojnika podrazumeva legalni prenos umrle osobe iz zemlje boravka u Srbiju (ili drugu zemlju porijekla).", "Proces uključuje pribavljanje dozvola, carinske procedure i međunarodni transport specijalizovanim vozilom."] },
      { h: "Zemlje iz kojih repatriramo", p: ["Organizujemo repatrijaciju iz <a href=\"/nemacka\" class=\"text-primary\">Nemačke</a>, <a href=\"/austrija\" class=\"text-primary\">Austrije</a>, <a href=\"/svajcarska\" class=\"text-primary\">Švajcarske</a>, <a href=\"/italija\" class=\"text-primary\">Italije</a>, <a href=\"/spanija\" class=\"text-primary\">Španije</a>, <a href=\"/svedska\" class=\"text-primary\">Švedske</a> i <a href=\"/danska\" class=\"text-primary\">Danske</a>."] },
      { h: "Pravni aspekti", p: ["Repatrijacija mora biti u skladu sa međunarodnim konvencijama i nacionalnim zakonima. Detaljan pregled pravnih aspekata: <a href=\"/blog-repatrijacija-pokojnika-pravni-aspekti\" class=\"text-primary\">blog o repatrijaciji</a>."] },
    ],
    faqs: [
      { q: "Koliko traje repatrijacija?", a: "Prosečno 2–4 dana uključujući dokumentaciju i transport." },
      { q: "Da li pomažete oko ambasade?", a: "Da, koordinišemo sa ambasadama i konzulatima obe zemlje." },
    ],
    relatedLinks: [{ href: "/blog-repatrijacija-pokojnika-pravni-aspekti", title: "Blog: Pravni aspekti" }, { href: "/dokumentacija-za-prevoz-pokojnika", title: "Dokumentacija" }, { href: "/nemacka", title: "Prevoz iz Nemačke" }],
  },
];

function renderBlogPost({ slug, title, description, h1, lead, date, readTime, sections, relatedLinks }) {
  const url = `https://transportpokojnika.com/${slug}`;
  const sectionsHtml = sections
    .map((s) => `<h2>${s.h}</h2>${s.p.map((para) => `<p>${para}</p>`).join("")}${s.list ? `<ul>${s.list.map((li) => `<li>${li}</li>`).join("")}</ul>` : ""}`)
    .join("");

  const relatedHtml = (relatedLinks || [])
    .map((l) => `<li><a href="${l.href}" class="text-primary">${l.title}</a></li>`)
    .join("");

  return `<!DOCTYPE html>
<html lang="sr">
<head>
  <meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  <meta name="description" content="${description}" />
  <meta name="author" content="Transport pokojnika - Pogrebno preduzeće" />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="${url}" />
  <meta property="og:title" content="${h1}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:locale" content="sr_RS" />
  <meta property="og:image" content="https://transportpokojnika.com/pogrebni-kombi-sa-sandukom.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="${url}" />
  <meta name="twitter:title" content="${h1}" />
  <meta name="twitter:description" content="${description}" />
  <meta name="twitter:image" content="https://transportpokojnika.com/pogrebni-kombi-sa-sandukom.jpg" />
  <link rel="canonical" href="${url}" />
  ${GENERATED_HEAD_ASSETS}
  <script type="application/ld+json">{"@context":"https://schema.org","@type":"Article","headline":${JSON.stringify(h1)},"description":${JSON.stringify(description)},"image":"https://transportpokojnika.com/pogrebni-kombi-sa-sandukom.jpg","author":{"@type":"Organization","name":"Transport pokojnika - Pogrebno preduzeće"},"publisher":{"@type":"Organization","name":"Transport pokojnika - Pogrebno preduzeće","logo":{"@type":"ImageObject","url":"https://transportpokojnika.com/vijenac%20logo.png"}},"datePublished":"${date}","dateModified":"${date}","mainEntityOfPage":{"@type":"WebPage","@id":"${url}"}}</script>
  <link rel="icon" type="image/png" href="vijenac logo.png" />
</head>
<body>
  <div id="header-container"></div>
  <main role="main">
    <nav class="container py-3" aria-label="breadcrumb"><ol class="breadcrumb"><li class="breadcrumb-item"><a href="/">Početna</a></li><li class="breadcrumb-item"><a href="/blog">Blog</a></li><li class="breadcrumb-item active">${h1}</li></ol></nav>
    <article class="container py-5"><div class="row"><div class="col-lg-8 mx-auto">
      <header class="mb-4"><h1 class="display-4 mb-3">${h1}</h1><p class="lead text-muted">${lead}</p>
      <div class="d-flex text-muted small mb-4"><i class="bi bi-calendar me-2"></i><span>${date}</span><span class="mx-2">|</span><i class="bi bi-clock me-2"></i><span>${readTime}</span></div></header>
      <picture><source srcset="pogrebni-kombi-sa-sandukom.webp" type="image/webp" /><img src="pogrebni-kombi-sa-sandukom.jpg" alt="${h1}" class="img-fluid rounded shadow mb-4" width="800" height="450" loading="eager" /></picture>
      <div class="article-content">${sectionsHtml}
      ${relatedHtml ? `<h2 class="mt-5">Povezani resursi</h2><ul>${relatedHtml}</ul>` : ""}
      </div>
    </div></div></article>
    <section class="py-5 bg-primary text-white"><div class="container text-center"><h2 class="mb-3">Trebate pomoć?</h2><a href="tel:+381642492849" class="btn btn-light btn-lg">Pozovite nas 24/7</a></div></section>
  </main>
  <div id="footer-container"></div>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" defer></script>
  <script src="includes.js?v=3" defer></script>
</body>
</html>`;
}

const BLOG_POSTS = [
  {
    slug: "blog-sta-raditi-kada-neko-umre-u-inostranstvu",
    title: "Šta raditi kada neko umre u inostranstvu | Transport pokojnika",
    description: "Vodič: šta raditi kada neko umre u inostranstvu. Prvi koraci, dokumentacija, kontakt ambasade i organizacija prevoza. Dostupni 24/7.",
    h1: "Šta raditi kada neko umre u inostranstvu",
    lead: "Gubitak bliske osobe u inostranstvu je emocionalno naporan i administrativno zahtevan. Ovaj vodič objašnjava prve korake koje porodica treba da preduzme.",
    date: "5. avgust 2025",
    readTime: "10 min čitanja",
    sections: [
      { h: "Prvi koraci — šta odmah uraditi", p: ["Kontaktirajte lokalnu policiju ili bolnicu u zemlji gde se smrt dogodila. Oni izdaju zvaničnu potvrdu o smrti.", "Obavestite srpsku ambasadu ili konzulat u toj zemlji. Ambasada vam može pomoći oko dokumentacije i prevoda.", "Pozovite profesionalno pogrebno preduzeće koje se bavi međunarodnim transportom — mi preuzimamo celu organizaciju."], list: ["Pozovite nas na +381 64 249 28 49 (24/7)", "Pripremite pasoš pokojnika i podatke o mestu smrti", "Ne potpisujte dokumente bez saveta stručnjaka"] },
      { h: "Dokumentacija i rokovi", p: ["Svaka zemlja ima specifične procedure. U <a href=\"/nemacka\" class=\"text-primary\">Nemačkoj</a> se dokumenti izdaju u Standesamt, u <a href=\"/austrija\" class=\"text-primary\">Austriji</a> u matičnom uredu, a u <a href=\"/italija\" class=\"text-primary\">Italiji</a> u opštini (Comune).", "Naš tim završava kompletnu dokumentaciju — vi se ne morate baviti birokratijom. Detaljan spisak: <a href=\"/dokumentacija-za-prevoz-pokojnika\" class=\"text-primary\">dokumentacija za prevoz pokojnika</a>."] },
      { h: "Organizacija prevoza u domovinu", p: ["Prevoz pokojnika se obavlja specijalizovanim vozilom sa rashladnim uređajem. Proces traje 2–4 dana u proseku.", "Organizujemo prevoz iz svih evropskih zemalja u Srbiju. Za hitne slučajeve pogledajte <a href=\"/blog-hitni-prevoz-pokojnika-sta-treba-znati\" class=\"text-primary\">hitni prevoz pokojnika</a>."] },
      { h: "Zaključak", p: ["U najtežim trenucima važno je imati pouzdanog partnera. Naše preduzeće sa 15+ godina iskustva preuzima kompletnu organizaciju — od prve do poslednje dozvole."] },
    ],
    relatedLinks: [{ href: "/blog-hitni-prevoz-pokojnika-sta-treba-znati", title: "Hitni prevoz pokojnika" }, { href: "/nemacka", title: "Prevoz iz Nemačke" }, { href: "/dokumentacija-za-prevoz-pokojnika", title: "Dokumentacija" }],
  },
  {
    slug: "blog-prevoz-pokojnika-iz-italije-vodic",
    title: "Prevoz pokojnika iz Italije — vodič | Transport pokojnika",
    description: "Kompletan vodič za prevoz pokojnika iz Italije. Rим, Milan, Napulj — dokumentacija, cene, rokovi. MI ZAVRŠAVAMO SVU DOKUMENTACIJU!",
    h1: "Prevoz pokojnika iz Italije — kompletan vodič",
    lead: "Italija je jedna od najčešćih destinacija srpske dijaspore. Ovaj vodič pokriva sve što treba znati o prevozu pokojnika iz Italije u Srbiju.",
    date: "5. avgust 2025",
    readTime: "12 min čitanja",
    sections: [
      { h: "Specifičnosti italijanskog sistema", p: ["U Italiji se smrt prijavljuje u opštini (Comune) gde se dogodila. Izdaje se certificato di morte i permesso di trasporto.", "Italijanski propisi zahtevaju poseban sanduk i carinske procedure za izvoz. Naš tim ima iskustva sa svim italijanskim regionima."] },
      { h: "Gradovi iz kojih organizujemo prevoz", p: ["Organizujemo prevoz iz <a href=\"/rim\" class=\"text-primary\">Rima</a>, Milana, Napulja, Torina i svih italijanskih gradova.", "Za opšte informacije o transportu iz Italije posetite stranicu <a href=\"/italija\" class=\"text-primary\">prevoz pokojnika iz Italije</a>."] },
      { h: "Dokumentacija i rokovi", p: ["Potrebni dokumenti uključuju certificato di morte, permesso di trasporto, pasoš pokojnika i srpsku uvoznu dozvolu.", "Proces traje 2–4 dana. U hitnim slučajevima možemo ubrzati proceduru. Više o dokumentaciji: <a href=\"/dokumentacija-za-prevoz-pokojnika\" class=\"text-primary\">dokumentacija za prevoz</a>."] },
      { h: "Cena prevoza iz Italije", p: ["Cena zavisi od udaljenosti (Rim je udaljeniji od Beča, npr.) i tipa sanduka. Kontaktirajte nas za besplatnu procenu ili pogledajte <a href=\"/cenovnik\" class=\"text-primary\">cenovnik</a>."] },
      { h: "Zaključak", p: ["Prevoz pokojnika iz Italije zahteva poznavanje lokalnih propisa i srpskih procedura. Sa 15+ godina iskustva, preuzimamo kompletnu organizaciju umesto vas."] },
    ],
    relatedLinks: [{ href: "/italija", title: "Prevoz iz Italije" }, { href: "/rim", title: "Prevoz iz Rima" }, { href: "/blog-dokumentacija-za-prevoz-pokojnika", title: "Dokumentacija" }],
  },
];

function generateServicePages() {
  SERVICE_PAGES.forEach((page) => {
    fs.writeFileSync(path.join(ROOT, `${page.slug}.html`), renderServicePage(page), "utf8");
    console.log(`Generated ${page.slug}.html`);
  });
}

function generateBlogPosts() {
  BLOG_POSTS.forEach((post) => {
    fs.writeFileSync(path.join(ROOT, `${post.slug}.html`), renderBlogPost(post), "utf8");
    console.log(`Generated ${post.slug}.html`);
  });
}

function readPartial(name) {
  return fs.readFileSync(path.join(PARTIALS_DIR, name), "utf8").trim();
}

/** Replace inner HTML of a div#id, matching nested divs correctly. */
function replaceDivById(html, id, innerContent) {
  const openMatch = html.match(new RegExp(`<div id="${id}"[^>]*>`, "i"));
  if (!openMatch) return html;

  const start = openMatch.index;
  let pos = start + openMatch[0].length;
  let depth = 1;

  while (pos < html.length && depth > 0) {
    const nextOpen = html.indexOf("<div", pos);
    const nextClose = html.indexOf("</div>", pos);
    if (nextClose === -1) break;

    if (nextOpen !== -1 && nextOpen < nextClose) {
      depth++;
      pos = nextOpen + 4;
    } else {
      depth--;
      if (depth === 0) {
        return (
          html.slice(0, start) +
          `<div id="${id}">\n${innerContent}\n    </div>` +
          html.slice(nextClose + 6)
        );
      }
      pos = nextClose + 6;
    }
  }
  return html;
}

/** Remove duplicate header fragments left outside #header-container by a prior buggy inject. */
function stripOrphanedHeaderFragments(html) {
  const openMatch = html.match(/<div id="header-container"[^>]*>/i);
  if (!openMatch) return html;

  let pos = openMatch.index + openMatch[0].length;
  let depth = 1;
  while (pos < html.length && depth > 0) {
    const nextOpen = html.indexOf("<div", pos);
    const nextClose = html.indexOf("</div>", pos);
    if (nextClose === -1) break;
    if (nextOpen !== -1 && nextOpen < nextClose) {
      depth++;
      pos = nextOpen + 4;
    } else {
      depth--;
      if (depth === 0) {
        pos = nextClose + 6;
        break;
      }
      pos = nextClose + 6;
    }
  }

  const afterContainer = html.slice(pos);
  const mainMatch = afterContainer.match(/<main\b/i);
  if (!mainMatch) return html;

  const between = afterContainer.slice(0, mainMatch.index);
  if (!between.includes("navbar navbar-expand-lg")) return html;

  return html.slice(0, pos) + afterContainer.slice(mainMatch.index);
}

function replaceFooterContainer(html, footerContent) {
  if (/<footer id="footer-container"/i.test(html)) {
    return html.replace(
      /<footer id="footer-container"[^>]*>\s*<\/footer>/i,
      footerContent
    );
  }
  return replaceDivById(html, "footer-container", footerContent);
}

function removeInlineGA4(html) {
  return html.replace(
    /\s*(?:<!-- Google tag \(gtag\.js\) -->\s*)?<script[\s\S]*?googletagmanager\.com\/gtag\/js[\s\S]*?<\/script>\s*<script>[\s\S]*?gtag\("config", "G-9FMNRLMTK3"\);\s*<\/script>/g,
    ""
  );
}

function updateHeadAssets() {
  const deferBootstrapRe =
    /<link[\s\S]*?bootstrap@5\.3\.3\/dist\/css\/bootstrap\.min\.css[\s\S]*?media="print"[\s\S]*?onload="this\.media='all'"[\s\S]*?\/>[\s\n]*(?:<!--[\s\S]*?-->\s*)?<noscript>[\s\S]*?bootstrap@5\.3\.3\/dist\/css\/bootstrap[\s\S]*?<\/noscript>/g;

  fs.readdirSync(ROOT)
    .filter((f) => f.endsWith(".html"))
    .forEach((file) => {
      let content = fs.readFileSync(path.join(ROOT, file), "utf8");
      const original = content;

      content = removeInlineGA4(content);

      content = content.replace(
        /bootstrap-icons@1\.11\.3\/font\/bootstrap-icons\.woff2/g,
        "bootstrap-icons@1.11.3/font/fonts/bootstrap-icons.woff2"
      );

      if (
        content.includes('media="print"') &&
        content.includes("bootstrap@5.3.3/dist/css/bootstrap")
      ) {
        content = content.replace(deferBootstrapRe, BOOTSTRAP_CSS_SYNC);
      }

      if (
        content.includes("bootstrap-icons") &&
        !content.includes("bootstrap-icons.woff2")
      ) {
        content = content.replace(
          /(<link[^>]*bootstrap-icons[^>]*font\/bootstrap-icons\.min\.css)/,
          `${ICON_FONT_PRELOAD}\n    $1`
        );
      }

      if (content !== original) {
        fs.writeFileSync(path.join(ROOT, file), content, "utf8");
        console.log(`Updated head assets in ${file}`);
      }
    });
}

function verifyCls() {
  const warnings = [];

  fs.readdirSync(ROOT)
    .filter((f) => f.endsWith(".html"))
    .forEach((file) => {
      const content = fs.readFileSync(path.join(ROOT, file), "utf8");
      const navbars = (content.match(/navbar navbar-expand-lg/g) || []).length;
      if (navbars !== 1) {
        warnings.push(`${file}: expected 1 navbar, found ${navbars}`);
      }

      if (/<picture><source[^>]+><picture>/i.test(content)) {
        warnings.push(`${file}: double-nested picture tags`);
      }

      const imgs = [...content.matchAll(/<img[\s\S]*?>/gi)];
      imgs.forEach((match) => {
        const tag = match[0].replace(/\s+/g, " ");
        if (/\bwidth\s*=/.test(tag) && /\bheight\s*=/.test(tag)) return;
        if (/class="[^"]*card-img-top/.test(tag)) {
          warnings.push(`${file}: card image missing width/height`);
        }
        if (/class="[^"]*img-fluid rounded shadow mb-4/.test(tag)) {
          warnings.push(`${file}: blog hero image missing width/height`);
        }
      });

      if (HUB_PAGES.has(file) && content.includes('id="contact-container"')) {
        if (!content.includes('id="contact"')) {
          warnings.push(`${file}: hub page missing pre-rendered contact section`);
        }
      }
    });

  if (warnings.length) {
    console.warn("CLS verification warnings:");
    warnings.forEach((w) => console.warn(`  - ${w}`));
  } else {
    console.log("CLS verification passed.");
  }
}

function injectPartials() {
  const header = readPartial("header.html");
  const footer = readPartial("footer.html");
  const contactSection = readPartial("contact-section.html");

  const htmlFiles = fs.readdirSync(ROOT).filter((f) => f.endsWith(".html"));

  htmlFiles.forEach((file) => {
    let content = fs.readFileSync(path.join(ROOT, file), "utf8");
    const original = content;

    content = stripOrphanedHeaderFragments(content);
    content = replaceDivById(content, "header-container", header);
    content = replaceFooterContainer(content, footer);

    if (content.includes('id="contact-container"')) {
      content = replaceDivById(content, "contact-container", contactSection);
    }

    if (content !== original) {
      fs.writeFileSync(path.join(ROOT, file), content, "utf8");
      console.log(`Injected partials into ${file}`);
    }
  });
}

const LLMS_BASE = "https://transportpokojnika.com";
const LLMS_COUNTRY_SLUGS = new Set([
  "nemacka", "austrija", "svajcarska", "italija", "spanija", "svedska", "danska",
]);
const LLMS_CITY_SLUGS = new Set([
  "berlin", "munchen", "hamburg", "frankfurt", "cirih", "zeneva", "bec", "graz",
  "linz", "rim", "madrid", "dusseldorf", "koln", "stuttgart", "dortmund", "leipzig", "dresden",
]);
const LLMS_SERVICE_SLUGS = new Set([
  "cenovnik", "dokumentacija-za-prevoz-pokojnika", "pogrebni-sanduci",
  "ekshumacija", "repatrijacija-pokojnika",
]);
const LLMS_OPTIONAL_SLUGS = new Set(["testimonials", "contact"]);

const LLMS_DESCRIPTIONS = {
  "/": "Međunarodni prevoz pokojnika iz Evrope u Srbiju. 24/7, kompletna dokumentacija.",
  "/cenovnik": "Cenovnik usluga transporta pokojnika — transparentne cene.",
  "/dokumentacija-za-prevoz-pokojnika": "Kompletan vodič kroz dokumentaciju za međunarodni prevoz.",
  "/pogrebni-sanduci": "Pogrebni sanduci usklađeni sa međunarodnim propisima.",
  "/ekshumacija": "Ekshumacija i prenos umrle osobe sa kompletnom dokumentacijom.",
  "/repatrijacija-pokojnika": "Repatrijacija pokojnika iz inostranstva u domovinu.",
  "/blog": "Blog sa vodičima i savetima o prevozu pokojnika.",
  "/testimonials": "Utisci zadovoljnih klijenata.",
  "/contact": "Kontakt forma i podaci za hitne slučajeve.",
  "/nemacka": "Prevoz pokojnika iz Nemačke — Berlin, Minhen, Hamburg i drugi gradovi.",
  "/austrija": "Prevoz pokojnika iz Austrije — Beč, Graz, Linz.",
  "/svajcarska": "Prevoz pokojnika iz Švajcarske — Cirih, Ženeva.",
  "/italija": "Prevoz pokojnika iz Italije — Rim i ostali gradovi.",
  "/spanija": "Prevoz pokojnika iz Španije — Madrid.",
  "/svedska": "Prevoz pokojnika iz Švedske.",
  "/danska": "Prevoz pokojnika iz Danske.",
};

function slugToTitle(slug) {
  return slug
    .replace(/^blog-/, "")
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function getLlmsDescription(slug, pathname) {
  if (LLMS_DESCRIPTIONS[pathname]) return LLMS_DESCRIPTIONS[pathname];
  if (slug.startsWith("blog-")) {
    return `Blog članak: ${slugToTitle(slug).replace(/_/g, " ")}.`;
  }
  if (LLMS_CITY_SLUGS.has(slug)) {
    return `Prevoz pokojnika iz ${slugToTitle(slug)} za Srbiju.`;
  }
  return `Informacije o prevozu pokojnika — ${slugToTitle(slug)}.`;
}

function generateLlmsTxt() {
  const sitemap = fs.readFileSync(path.join(ROOT, "sitemap.xml"), "utf8");
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

  const sections = {
    Usluge: [],
    Zemlje: [],
    Gradovi: [],
    Blog: [],
    Optional: [],
  };

  urls.forEach((url) => {
    const pathname = new URL(url).pathname.replace(/\/$/, "") || "/";
    const slug = pathname === "/" ? "" : pathname.slice(1);
    const title =
      slug === ""
        ? "Početna stranica"
        : slug.startsWith("blog-")
          ? slugToTitle(slug)
          : slug.charAt(0).toUpperCase() + slug.slice(1);
    const desc = getLlmsDescription(slug, pathname);
    const entry = `- [${title}](${url}): ${desc}`;

    if (pathname === "/" || LLMS_SERVICE_SLUGS.has(slug)) {
      sections.Usluge.push(entry);
    } else if (LLMS_COUNTRY_SLUGS.has(slug)) {
      sections.Zemlje.push(entry);
    } else if (LLMS_CITY_SLUGS.has(slug)) {
      sections.Gradovi.push(entry);
    } else if (slug === "blog" || slug.startsWith("blog-")) {
      sections.Blog.push(entry);
    } else if (LLMS_OPTIONAL_SLUGS.has(slug)) {
      sections.Optional.push(entry);
    }
  });

  let txt = `# Transport pokojnika - Pogrebno preduzeće

> Profesionalno pogrebno preduzeće iz Beograda. Međunarodni prevoz pokojnika iz Nemačke, Austrije, Švajcarske i cele Evrope u Srbiju. Tel: +381 64 249 28 49. Dostupni 24/7. MI ZAVRŠAVAMO SVU DOKUMENTACIJU.

Sajt na srpskom jeziku. Glavne usluge: međunarodni transport pokojnika, repatrijacija, ekshumacija, pribavljanje dokumentacije, pogrebni sanduci.

`;

  for (const [name, items] of Object.entries(sections)) {
    if (items.length === 0) continue;
    txt += `## ${name}\n\n${items.join("\n")}\n\n`;
  }

  fs.writeFileSync(path.join(ROOT, "llms.txt"), txt.trim() + "\n", "utf8");
  console.log("Generated llms.txt");
}

function fixAccessibilityLinks() {
  const replacements = [
    [
      /<a href="#" class="text-white"><i class="bi bi-viber"><\/i><\/a>/g,
      '<a href="viber://chat?number=381642492849" class="text-white" aria-label="Viber kontakt"><i class="bi bi-viber"></i></a>',
    ],
    [
      /<a\s+href="#"\s+class="me-3 text-decoration-none text-white-50 hover-success"\s*>\s*<i class="bi bi-viber fs-4"><\/i>\s*<\/a>/g,
      '<a href="viber://chat?number=381642492849" class="me-3 text-decoration-none text-white-50 hover-success" aria-label="Viber kontakt"><i class="bi bi-viber fs-4"></i></a>',
    ],
    [
      /<a href="tel:\+381642492849" class="contact-link me-3"(?![^>]*aria-label)>/g,
      '<a href="tel:+381642492849" class="contact-link me-3" aria-label="Pozovite nas: +381 64 249 28 49">',
    ],
    [
      /<a href="mailto:kontakt@transportpokojnika\.com" class="contact-link me-3"(?![^>]*aria-label)>/g,
      '<a href="mailto:kontakt@transportpokojnika.com" class="contact-link me-3" aria-label="Pošaljite email: kontakt@transportpokojnika.com">',
    ],
  ];

  fs.readdirSync(ROOT)
    .filter((f) => f.endsWith(".html"))
    .forEach((file) => {
      let content = fs.readFileSync(path.join(ROOT, file), "utf8");
      let modified = false;

      replacements.forEach(([pattern, replacement]) => {
        const updated = content.replace(pattern, replacement);
        if (updated !== content) {
          content = updated;
          modified = true;
        }
      });

      const togglerFixed = content.replace(
        /<button(\s+class="navbar-toggler"[\s\S]*?data-bs-target="#navbarNav")(\s*)>/g,
        (match, attrs, space) => {
          if (/aria-label=/.test(match)) return match;
          return `<button${attrs} aria-controls="navbarNav" aria-expanded="false" aria-label="Otvori meni"${space}>`;
        }
      );
      if (togglerFixed !== content) {
        content = togglerFixed;
        modified = true;
      }

      if (modified) {
        fs.writeFileSync(path.join(ROOT, file), content, "utf8");
        console.log(`Fixed accessibility links in ${file}`);
      }
    });
}

function syncStylesMin() {
  const src = path.join(ROOT, "styles.css");
  const dest = path.join(ROOT, "styles.min.css");
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log("Synced styles.min.css from styles.css");
  }
}

// Main
generateCityPages();
generateServicePages();
generateBlogPosts();
injectPartials();

const newUrls = [
  ...GERMAN_CITIES.map((c) => ({
    loc: `https://transportpokojnika.com/${c.slug}`,
  })),
  { loc: "https://transportpokojnika.com/dokumentacija-za-prevoz-pokojnika", priority: "0.8" },
  { loc: "https://transportpokojnika.com/pogrebni-sanduci", priority: "0.8" },
  { loc: "https://transportpokojnika.com/ekshumacija", priority: "0.8" },
  { loc: "https://transportpokojnika.com/repatrijacija-pokojnika", priority: "0.8" },
  { loc: "https://transportpokojnika.com/blog-sta-raditi-kada-neko-umre-u-inostranstvu", priority: "0.7" },
  { loc: "https://transportpokojnika.com/blog-prevoz-pokojnika-iz-italije-vodic", priority: "0.7" },
];

updateSitemap(newUrls);
generateLlmsTxt();
updateBlogImageDimensions();
updateBlogListingImages();
updateStaticPageImages();
dedupeAllPictureTags();
updateHeadAssets();
fixAccessibilityLinks();
syncStylesMin();
verifyCls();

if (process.argv.includes("--images")) {
  convertImages();
}

console.log("Build complete.");
