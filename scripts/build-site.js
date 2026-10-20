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
const crypto = require("crypto");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..");
const TODAY = new Date().toISOString().slice(0, 10);
const SITE_URL = "https://transportpokojnika.com";

const PARTIALS_DIR = path.join(ROOT, "templates", "partials");

/**
 * Single source of truth for the business entity (LocalBusiness JSON-LD).
 * Fill the null fields from the Google Business Profile / company registration —
 * null values are left out of the generated markup.
 */
const BUSINESS = {
  name: "Transport pokojnika - Pogrebno preduzeće",
  legalName: null,
  taxID: null, // PIB
  telephone: "+381642492849",
  email: "kontakt@transportpokojnika.com",
  streetAddress: null,
  postalCode: null,
  addressLocality: "Beograd",
  addressCountry: "RS",
  latitude: 44.8154, // TODO: replace with the Google Business Profile pin
  longitude: 20.4612,
  googleBusinessProfileUrl: null,
  logo: `${SITE_URL}/vijenac%20logo.png`,
  sameAs: [
    "https://www.facebook.com/profile.php?id=61584921571392",
    "https://www.instagram.com/transportpokojnika/",
  ],
  areaServed: [
    "Serbia", "Bosnia and Herzegovina", "Montenegro", "North Macedonia",
    "Germany", "Austria", "Switzerland", "Italy", "Spain", "France",
    "Sweden", "Denmark", "Norway", "Croatia", "Greece",
  ],
};
const BUSINESS_ID = `${SITE_URL}/#business`;

/** Drop null/undefined/empty values so optional BUSINESS fields can stay null. */
function compact(obj) {
  return Object.fromEntries(
    Object.entries(obj).filter(
      ([, v]) => v !== null && v !== undefined && !(Array.isArray(v) && v.length === 0)
    )
  );
}

function businessAddress() {
  return compact({
    "@type": "PostalAddress",
    streetAddress: BUSINESS.streetAddress,
    postalCode: BUSINESS.postalCode,
    addressLocality: BUSINESS.addressLocality,
    addressCountry: BUSINESS.addressCountry,
  });
}

/** Full LocalBusiness entity — emitted once, on the homepage. */
function businessJsonLd() {
  return compact({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": BUSINESS_ID,
    additionalType: "https://en.wikipedia.org/wiki/Funeral_home",
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    taxID: BUSINESS.taxID,
    url: `${SITE_URL}/`,
    logo: BUSINESS.logo,
    image: `${SITE_URL}/pogrebni-kombi-sa-sandukom.jpg`,
    description:
      "Pogrebno preduzeće iz Beograda specijalizovano za međunarodni prevoz pokojnika iz cele Evrope u Srbiju, Bosnu i Hercegovinu, Crnu Goru i Severnu Makedoniju. Kompletna dokumentacija, dostupni 24/7.",
    telephone: BUSINESS.telephone,
    email: BUSINESS.email,
    address: businessAddress(),
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.latitude,
      longitude: BUSINESS.longitude,
    },
    hasMap: BUSINESS.googleBusinessProfileUrl,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    priceRange: "€€",
    areaServed: BUSINESS.areaServed.map((name) => ({ "@type": "Country", name })),
    sameAs: [BUSINESS.googleBusinessProfileUrl, ...BUSINESS.sameAs].filter(Boolean),
  });
}

/** Compact, self-contained reference to the business for provider/publisher/author fields. */
function businessRef() {
  return compact({
    "@type": "LocalBusiness",
    "@id": BUSINESS_ID,
    name: BUSINESS.name,
    url: `${SITE_URL}/`,
    telephone: BUSINESS.telephone,
    logo: BUSINESS.logo,
    address: businessAddress(),
  });
}

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
  "francuska.html",
  "hrvatska.html",
  "crna-gora.html",
  "grcka.html",
  "norveska.html",
]);

/** Country hub pages — add entries in scripts/content/countries.js, then run `npm run build`. */
const COUNTRY_HUBS = [
  ...require("./content/countries"),
  ...require("./content/hub-slovenija"),
  ...require("./content/hub-holandija"),
  ...require("./content/hub-belgija"),
];

const { CONSULATES, DESTINATIONS, ROUTE_TABLE, COUNTRY_META } = require("./content/facts");

/** City pages — one entry per city in scripts/content/cities-*.js. */
const CITIES = [
  ...require("./content/cities-de-a"),
  ...require("./content/cities-de-b"),
  ...require("./content/cities-other"),
  ...require("./content/cities-new-a"),
  ...require("./content/cities-new-b"),
  ...require("./content/cities-new-c"),
  ...require("./content/cities-slovenija"),
  ...require("./content/cities-holandija"),
  ...require("./content/cities-belgija"),
];

const PHONE_DISPLAY = "+381 64 249 28 49";
const WHATSAPP_URL =
  "https://wa.me/381642492849?text=Zdravo,%20trebam%20pomo%C4%87%20oko%20prevoza%20pokojnika";

/** 1240 → "1.240" (Serbian thousands separator) */
function formatKm(km) {
  return km.toLocaleString("de-DE");
}

/** Road distance and driving time from one place to every destination in DESTINATIONS. */
function routeTableHtml(routeKey, fromGen) {
  const routes = ROUTE_TABLE[routeKey];
  if (!routes) return "";
  const rows = DESTINATIONS.map((d, i) =>
    routes[i]
      ? `<tr><td>${d.name} <span class="small opacity-75">(${d.country})</span></td><td>oko ${formatKm(routes[i].km)} km</td><td>oko ${routes[i].h} h</td></tr>`
      : ""
  )
    .filter(Boolean)
    .join("\n                ");
  return `<div class="table-responsive">
            <table class="table table-dark table-striped align-middle mb-2">
              <caption class="visually-hidden">Udaljenost i vreme vožnje iz ${fromGen}</caption>
              <thead><tr><th scope="col">Odredište</th><th scope="col">Udaljenost putem</th><th scope="col">Čista vožnja</th></tr></thead>
              <tbody>
                ${rows}
              </tbody>
            </table>
          </div>
          <p class="small opacity-75">Vreme je čista vožnja bez pauza i čekanja na granici. Vozači pogrebnog vozila poštuju propisane odmore, pa je stvarno trajanje puta duže.</p>`;
}

function faqAccordionHtml(faqs, accordionId) {
  return faqs
    .map(
      (faq, i) => `<div class="accordion-item">
            <h3 class="accordion-header" id="${accordionId}-h${i + 1}">
              <button class="accordion-button${i === 0 ? "" : " collapsed"}" type="button" data-bs-toggle="collapse" data-bs-target="#${accordionId}-a${i + 1}" aria-expanded="${i === 0}" aria-controls="${accordionId}-a${i + 1}">
                ${faq.q}
              </button>
            </h3>
            <div id="${accordionId}-a${i + 1}" class="accordion-collapse collapse${i === 0 ? " show" : ""}" aria-labelledby="${accordionId}-h${i + 1}" data-bs-parent="#${accordionId}">
              <div class="accordion-body">${faq.a}</div>
            </div>
          </div>`
    )
    .join("\n          ");
}

function faqSchemaJson(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: stripTags(f.q),
      acceptedAnswer: { "@type": "Answer", text: stripTags(f.a) },
    })),
  };
}

function renderCityPage(city) {
  const country = COUNTRY_META[city.country];
  const consulate = CONSULATES[city.consulate];
  const route = (ROUTE_TABLE[city.slug] || [])[0];
  const url = `${SITE_URL}/${city.slug}`;
  const title = city.title || `Prevoz pokojnika iz ${city.nameGen} u Srbiju i BiH | 24/7`;
  const ogTitle = `Prevoz pokojnika iz ${city.nameGen} u Srbiju, BiH i region`;
  const accordionId = `faq-${city.slug}`;
  const duration = city.duration || country.duration;
  const siblings = CITIES.filter((c) => c.country === city.country && c.slug !== city.slug);
  const docNames = country.documents.map(([local]) => local.split(" (")[0].split(" / ")[0]);

  const paragraphs = (list) => list.map((p) => `<p>${p}</p>`).join("\n            ");
  const documentsHtml = country.documents
    .map(([local, sr]) => `<li class="mb-2"><i class="bi bi-file-text me-2"></i><strong>${local}</strong> — ${sr}</li>`)
    .join("\n                ");
  const extractNote = country.multilingualExtract
    ? `${country.name} i Srbija su potpisnice Bečke konvencije o višejezičnim izvodima iz matičnih knjiga (1976), pa se višejezični (internacionalni) izvod o smrti u Srbiji u pravilu prihvata bez dodatne overe i prevoda.`
    : `Dokumenta izdata u ${country.nameLoc} za srpske organe overavaju se apostilom i prevode na srpski jezik — i to je deo naše usluge.`;
  const siblingLinks = siblings
    .map((c) => `<a href="/${c.slug}" class="text-primary">${c.nameNom}</a>`)
    .join(", ");
  const relatedHtml = [
    ...(city.relatedBlog || []),
    { href: "/dokumentacija-za-prevoz-pokojnika", title: "Dokumentacija za prevoz pokojnika — kompletan vodič" },
    { href: "/blog-sta-raditi-kada-neko-umre-u-inostranstvu", title: "Šta raditi kada neko umre u inostranstvu" },
  ]
    .map((b) => `<li><a href="${b.href}" class="text-primary">${b.title}</a></li>`)
    .join("\n            ");

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Prevoz pokojnika iz ${city.nameGen}`,
    serviceType: "Međunarodni prevoz pokojnika",
    description: city.description,
    url,
    provider: businessRef(),
    areaServed: {
      "@type": "City",
      name: city.name,
      containedInPlace: { "@type": "Country", name: country.schemaCountry },
    },
  };

  return `<!DOCTYPE html>
<html lang="sr-Latn">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>

    <meta name="description" content="${city.description}" />
    <meta name="author" content="${BUSINESS.name}" />

    <meta property="og:type" content="website" />
    <meta property="og:locale" content="sr_RS" />
    <meta property="og:site_name" content="Transport pokojnika" />
    <meta property="og:url" content="${url}" />
    <meta property="og:title" content="${ogTitle}" />
    <meta property="og:description" content="${city.description}" />
    <meta property="og:image" content="${SITE_URL}/pogrebni-kombi-sa-sandukom.jpg" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="${url}" />
    <meta name="twitter:title" content="${ogTitle}" />
    <meta name="twitter:description" content="${city.description}" />
    <meta name="twitter:image" content="${SITE_URL}/pogrebni-kombi-sa-sandukom.jpg" />

    <link rel="canonical" href="${url}" />

    <link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin />
    ${GENERATED_HEAD_ASSETS}
    ${jsonLdScript(serviceSchema)}
    ${jsonLdScript(faqSchemaJson(city.faqs))}

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
          <li class="breadcrumb-item"><a href="/${city.country}">${country.name}</a></li>
          <li class="breadcrumb-item active" aria-current="page">${city.nameNom}</li>
        </ol>
      </nav>

      <section class="container-fluid bg-light py-5">
        <div class="container">
          <div class="row align-items-center g-4">
            <div class="col-lg-6">
              <span class="hero-subtitle text-primary mb-2 d-block">${city.name} → Srbija · BiH · Crna Gora · Severna Makedonija</span>
              <h1 class="display-4 mb-4">Prevoz pokojnika iz ${city.nameGen}</h1>
              <p class="lead mb-4">${city.lead}</p>
              <a href="tel:+381642492849" class="btn btn-primary btn-lg me-2 mb-2"><i class="bi bi-telephone-fill me-2"></i>Pozovite 24/7</a>
              <a href="${WHATSAPP_URL}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-primary btn-lg mb-2"><i class="bi bi-whatsapp me-2"></i>WhatsApp</a>
            </div>
            <div class="col-lg-6">
              <picture>
                <source srcset="pogrebni-kombi-sa-sandukom.webp" type="image/webp" />
                <img loading="lazy" decoding="async" src="pogrebni-kombi-sa-sandukom.jpg" alt="Pogrebno vozilo za međunarodni prevoz pokojnika iz ${city.nameGen}" class="img-fluid rounded shadow" width="600" height="400" />
              </picture>
            </div>
          </div>
        </div>
      </section>

      <section class="container my-5">
        <div class="row g-4">
          <div class="col-lg-8">
            <h2 class="mb-3">Prevoz pokojnika iz ${city.nameGen} u Srbiju, BiH, Crnu Goru i Severnu Makedoniju</h2>
            ${paragraphs(city.intro)}

            <h2 class="mt-5 mb-3">Kako izgleda postupak u ${city.nameLoc}</h2>
            ${paragraphs(city.process)}
            <ol class="mt-3">
              <li class="mb-2"><strong>Poziv</strong> — javite nam se u bilo koje doba. Potrebni su nam ime pokojnika, mesto smrti u ${city.nameLoc} i mesto gde želite sahranu.</li>
              <li class="mb-2"><strong>Preuzimanje</strong> — dogovaramo preuzimanje iz bolnice, doma za stare ili stana i preuzimamo kontakt sa lokalnim organima.</li>
              <li class="mb-2"><strong>Dokumentacija</strong> — pribavljamo ${docNames.join(", ")} i sprovodnicu nadležnog srpskog predstavništva.</li>
              <li class="mb-2"><strong>Priprema</strong> — pokojnik se priprema i polaže u hermetički zatvoren sanduk propisan za međunarodni prevoz.</li>
              <li class="mb-2"><strong>Prevoz</strong> — specijalizovanim pogrebnim vozilom${route ? `, oko ${formatKm(route.km)} km do Beograda` : ""}, uz sve granične i carinske formalnosti.</li>
              <li><strong>Predaja</strong> — pokojnika predajemo porodici ili pogrebnoj službi u mestu sahrane.</li>
            </ol>
          </div>
          <aside class="col-lg-4">
            <div class="service-card">
              <h2 class="h5 mb-3">Ukratko: prevoz iz ${city.nameGen}</h2>
              <ul class="list-unstyled mb-4">
                ${route ? `<li class="mb-2"><i class="bi bi-signpost-2 me-2 text-primary"></i>Do Beograda: oko ${formatKm(route.km)} km</li>` : ""}
                <li class="mb-2"><i class="bi bi-hourglass-split me-2 text-primary"></i>Ceo postupak: najčešće ${duration}</li>
                <li class="mb-2"><i class="bi bi-bank me-2 text-primary"></i>Sprovodnica: ${consulate.name}</li>
                <li class="mb-2"><i class="bi bi-file-earmark-check me-2 text-primary"></i>Svu dokumentaciju završavamo mi</li>
                <li><i class="bi bi-clock me-2 text-primary"></i>Dostupni 24/7, na srpskom jeziku</li>
              </ul>
              <a href="tel:+381642492849" class="btn btn-primary w-100 mb-2"><i class="bi bi-telephone-fill me-2"></i>${PHONE_DISPLAY}</a>
              <a href="/contact" class="btn btn-outline-primary w-100">Pošaljite upit</a>
            </div>
          </aside>
        </div>
      </section>

      <section class="container-fluid bg-light py-5">
        <div class="container">
          <h2 class="mb-4">Dokumenta potrebna za prevoz pokojnika iz ${city.nameGen}</h2>
          <div class="row g-4">
            <div class="col-lg-6">
              <h3 class="h5 mb-3">Dokumenta iz ${country.nameGen}</h3>
              <ul class="list-unstyled">
                ${documentsHtml}
                <li class="mb-2"><i class="bi bi-file-text me-2"></i><strong>Pasoš ili lična karta pokojnika</strong> — u originalu</li>
              </ul>
              <p class="mb-0">${country.authorityNote}</p>
            </div>
            <div class="col-lg-6">
              <h3 class="h5 mb-3">Sprovodnica — nadležno srpsko predstavništvo</h3>
              <p>Dozvolu za unos posmrtnih ostataka u Srbiju (sprovodnicu) za ${city.nameNom} izdaje <a href="${consulate.url}" target="_blank" rel="noopener noreferrer" class="text-primary">${consulate.name}</a>${consulate.area ? `, nadležan za: ${consulate.area}` : ""}. Zahtev podnosi porodica ili ovlašćeno pogrebno preduzeće — taj korak preuzimamo mi.</p>
              <p>${extractNote}</p>
              <p class="mb-0">Ako je sahrana u Bosni i Hercegovini, Crnoj Gori ili Severnoj Makedoniji, dozvolu izdaje predstavništvo te zemlje, a pribavljamo je na isti način. Detaljno: <a href="/dokumentacija-za-prevoz-pokojnika" class="text-primary">dokumentacija za prevoz pokojnika</a>.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="container my-5">
        <h2 class="mb-3">Udaljenost i trajanje prevoza iz ${city.nameGen}</h2>
        <p>Ceo postupak — od poziva do predaje porodici — iz ${city.nameGen} najčešće traje ${duration}. Najviše vremena odlazi na dokumenta, dok sama vožnja do odredišta izgleda ovako:</p>
          ${routeTableHtml(city.slug, city.nameGen)}
      </section>

      <section class="container my-5">
        <div class="row g-4">
          <div class="col-md-6">
            <h2 class="h3 mb-3">Šta je uključeno u uslugu</h2>
            <ul class="list-unstyled">
              <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i>Kompletna dokumentacija u ${country.nameLoc} i za zemlju sahrane</li>
              <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i>Preuzimanje pokojnika iz bolnice, doma ili stana u ${city.nameLoc} i okolini</li>
              <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i>Priprema pokojnika i sanduk propisan za međunarodni prevoz</li>
              <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i>Prevoz specijalizovanim pogrebnim vozilom do mesta sahrane</li>
              <li class="mb-2"><i class="bi bi-check-circle-fill text-success me-2"></i>Granične i carinske formalnosti${country.eu ? "" : " (izlazak iz zemlje van EU)"}</li>
              <li><i class="bi bi-check-circle-fill text-success me-2"></i>Jedna kontakt osoba za porodicu tokom celog postupka</li>
            </ul>
          </div>
          <div class="col-md-6">
            <h2 class="h3 mb-3">Od čega zavisi cena prevoza pokojnika iz ${city.nameGen}</h2>
            <ul>
              <li class="mb-2"><strong>Udaljenost</strong>${route ? ` — iz ${city.nameGen} do Beograda je oko ${formatKm(route.km)} km` : ""}, a cena zavisi i od tačnog mesta sahrane.</li>
              <li class="mb-2"><strong>Dokumentacija</strong> — lokalne takse u ${country.nameLoc} i konzularne takse.</li>
              <li class="mb-2"><strong>Sanduk i oprema</strong> — standardni ili po izboru porodice.</li>
              <li class="mb-2"><strong>Priprema pokojnika</strong> — npr. balsamovanje, kada ga propisi ili dužina puta zahtevaju.</li>
              <li><strong>Okolnosti slučaja</strong> — npr. čekanje na obdukciju ili dozvolu tužilaštva.</li>
            </ul>
            <p class="mb-0">Tačnu cenu dobijate već u prvom razgovoru, bez obaveze. Više u <a href="/cenovnik" class="text-primary">cenovniku</a>.</p>
          </div>
        </div>
      </section>

      <section class="container my-5">
        <h2 class="mb-3">Prevoz pokojnika iz okoline ${city.nameGen}</h2>
        <p>Pored samog grada, preuzimamo pokojnike iz celog područja: ${city.nearby.join(", ")} i ostalih mesta u ${city.regionLoc}.${siblingLinks ? ` Organizujemo i prevoz iz drugih gradova ${country.nameGen}: ${siblingLinks} — ili pogledajte stranicu <a href="/${city.country}" class="text-primary">prevoz pokojnika iz ${country.nameGen}</a>.` : ` Više o celoj zemlji: <a href="/${city.country}" class="text-primary">prevoz pokojnika iz ${country.nameGen}</a>.`}</p>
      </section>

      <section class="container my-5">
        <h2 class="mb-4 text-center">Najčešća pitanja o prevozu pokojnika iz ${city.nameGen}</h2>
        <div class="accordion" id="${accordionId}">
          ${faqAccordionHtml(city.faqs, accordionId)}
        </div>
        <div class="mt-4">
          <h3 class="h5">Korisni vodiči</h3>
          <ul>
            ${relatedHtml}
          </ul>
        </div>
      </section>

      <section class="py-5 bg-primary text-white">
        <div class="container text-center">
          <h2 class="mb-3">Potrebna vam je pomoć oko prevoza iz ${city.nameGen}?</h2>
          <p class="lead mb-4">Pozovite nas u bilo koje doba — preuzimamo kompletnu organizaciju, a vi dobijate jednu osobu za sva pitanja.</p>
          <a href="tel:+381642492849" class="btn btn-light btn-lg me-2 mb-2"><i class="bi bi-telephone-fill me-2"></i>Pozovite odmah</a>
          <a href="${WHATSAPP_URL}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-light btn-lg mb-2"><i class="bi bi-whatsapp me-2"></i>WhatsApp</a>
        </div>
      </section>
    </main>

    <div id="contact-container"></div>
    <div id="footer-container"></div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" defer></script>
    <script src="includes.js?v=3" defer></script>
  </body>
</html>
`;
}

function generateCityPages() {
  CITIES.forEach((city) => {
    const filePath = path.join(ROOT, `${city.slug}.html`);
    fs.writeFileSync(filePath, renderCityPage(city), "utf8");
    console.log(`Generated ${city.slug}.html`);
  });
}

function renderCountryPage(country) {
  const url = `https://transportpokojnika.com/${country.slug}`;
  const faqSchema = country.faqSchema
    .map(
      (f) => `{
            "@type": "Question",
            "name": ${JSON.stringify(f.q)},
            "acceptedAnswer": {
              "@type": "Answer",
              "text": ${JSON.stringify(f.a.replace(/<[^>]+>/g, ""))}
            }
          }`
    )
    .join(",\n          ");

  const servicePointsHtml = country.servicePoints
    .map(
      (s) => `<li class="mb-3">
                <i class="bi bi-check-circle-fill text-success me-2"></i>${s}
              </li>`
    )
    .join("\n              ");

  const meta = COUNTRY_META[country.slug] || {};
  const documentsHtml = (country.documents || meta.documents)
    .map(
      ([foreign, sr]) => `<li class="mb-3">
                    <i class="bi bi-file-text me-2"></i>${foreign}
                    (${sr})
                  </li>`
    )
    .join("\n                  ");

  const introHtml = (country.intro || []).map((p) => `<p>${p}</p>`).join("\n          ");
  const consulatesHtml = (meta.consulates || [])
    .map((key) => {
      const c = CONSULATES[key];
      return `<li class="mb-2"><a href="${c.url}" target="_blank" rel="noopener noreferrer" class="text-primary">${c.name}</a>${c.area ? ` — ${c.area}` : ""}</li>`;
    })
    .join("\n              ");

  const relatedLinksHtml = country.relatedLinks
    .map(
      (l, i, arr) =>
        `<a href="${l.href}" class="text-primary">${l.label}</a>${i < arr.length - 1 ? " i " : ""}`
    )
    .join("");

  const howItWorksHtml = country.howItWorks
    .map((p) => `<p class="mb-3">${p}</p>`)
    .join("\n            ");

  const citiesCardsHtml = country.cities
    .map(
      (c) => `<div class="col-6 col-md-3">
            <div class="card h-100 text-center">
              <div class="card-body d-flex flex-column justify-content-between">
                <h3 class="h5 mb-2">${c.href ? `<a href="${c.href}" class="text-primary">${c.name}</a>` : c.name}</h3>
                <p class="small text-muted mb-0">${c.note}</p>
              </div>
            </div>
          </div>`
    )
    .join("\n          ");

  const accordionId = `faqAccordion${country.slug.replace(/-/g, "")}`;
  // Every question in the FAQPage schema must also be visible on the page.
  const faqItems = [
    ...country.cityFaqs,
    ...country.faqSchema.map((f, i) => ({ id: `Pitanje${i + 1}`, title: f.q, body: f.a })),
  ];
  const faqHtml = faqItems
    .map(
      (f, i) => `<div class="accordion-item">
            <h3 class="accordion-header" id="heading${f.id}">
              <button
                class="accordion-button${i === 0 ? "" : " collapsed"}"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse${f.id}"
                aria-expanded="${i === 0 ? "true" : "false"}"
                aria-controls="collapse${f.id}"
              >
                ${f.title}
              </button>
            </h3>
            <div
              id="collapse${f.id}"
              class="accordion-collapse collapse${i === 0 ? " show" : ""}"
              aria-labelledby="heading${f.id}"
              data-bs-parent="#${accordionId}"
            >
              <div class="accordion-body">${f.body}</div>
            </div>
          </div>`
    )
    .join("\n          ");

  return `<!DOCTYPE html>
<html lang="sr-Latn">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${country.title || `Prevoz pokojnika iz ${country.nameGenitive} u Srbiju i BiH | 24/7`}</title>

    <meta name="description" content="${country.metaDescription}" />
    <meta name="author" content="Transport pokojnika - Pogrebno preduzeće" />

    <meta property="og:type" content="website" />
    <meta property="og:locale" content="sr_RS" />
    <meta property="og:site_name" content="Transport pokojnika" />
    <meta property="og:url" content="${url}" />
    <meta property="og:title" content="Prevoz pokojnika iz ${country.nameGenitive} | Profesionalan Transport" />
    <meta property="og:description" content="Organizujemo prevoz pokojnika iz svih gradova ${country.nameGenitive}. Kompletna dokumentacija i podrška 24/7." />
    <meta property="og:image" content="https://transportpokojnika.com/pogrebni-kombi-sa-sandukom.jpg" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="${url}" />
    <meta name="twitter:title" content="Prevoz pokojnika iz ${country.nameGenitive} | Profesionalan Transport" />
    <meta name="twitter:description" content="Organizujemo prevoz pokojnika iz svih gradova ${country.nameGenitive}. Kompletna dokumentacija i podrška 24/7." />
    <meta name="twitter:image" content="https://transportpokojnika.com/pogrebni-kombi-sa-sandukom.jpg" />

    <link rel="canonical" href="${url}" />

    <link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin />
    ${GENERATED_HEAD_ASSETS}

    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Prevoz pokojnika iz ${country.nameGenitive}",
        "description": "Profesionalan prevoz pokojnika iz svih gradova ${country.nameGenitive} sa kompletnom dokumentacijom i 24/7 podrškom",
        "url": "${url}",
        "provider": ${JSON.stringify(businessRef())},
        "areaServed": {
          "@type": "Country",
          "name": "${country.schemaCountry}"
        },
        "serviceType": [
          "Transport pokojnika iz ${country.nameGenitive}",
          "Dokumentacija za transport",
          "Međunarodni transport umrlih"
        ]
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
          <li class="breadcrumb-item active" aria-current="page">${country.name}</li>
        </ol>
      </nav>

      <section class="container-fluid bg-light py-5">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <h1 class="display-4 mb-4">Hitni prevoz pokojnika iz ${country.nameGenitive}</h1>
              <p class="lead mb-4">${country.heroLead}</p>
              <a href="tel:+381642492849" class="btn btn-primary btn-lg">Pozovite nas odmah</a>
            </div>
            <div class="col-lg-6">
              <picture>
                <source srcset="pogrebni-sanduk.webp" type="image/webp" />
                <img loading="lazy" decoding="async" src="pogrebni-sanduk.png" alt="Pogrebni sanduk za transport pokojnika iz ${country.nameGenitive} u Srbiju" class="img-fluid rounded shadow mb-3" width="500" height="300" />
              </picture>
              <picture>
                <source srcset="pogrebni-kombi-sa-sandukom.webp" type="image/webp" />
                <img loading="lazy" decoding="async" src="pogrebni-kombi-sa-sandukom.jpg" alt="Specijalizovano vozilo za međunarodni transport pokojnika iz ${country.nameGenitive}" class="img-fluid rounded shadow mb-3" width="500" height="300" />
              </picture>
              <picture>
                <source srcset="pogrebni-sanduci.webp" type="image/webp" />
                <img loading="lazy" decoding="async" src="pogrebni-sanduci.jpg" alt="Pogrebni sanduci usklađeni sa propisima za prevoz iz ${country.nameGenitive}" class="img-fluid rounded shadow" width="500" height="300" />
              </picture>
            </div>
          </div>
        </div>
      </section>
${introHtml ? `
      <section class="container my-5">
        <h2 class="mb-3">Prevoz pokojnika iz ${country.nameGenitive} u ${country.slug === "crna-gora" ? "Srbiju, BiH i Severnu Makedoniju" : "Srbiju, BiH, Crnu Goru i Severnu Makedoniju"}</h2>
          ${introHtml}
      </section>
` : ""}
      <section class="container my-5">
        <div class="row">
          <div class="col-md-6">
            <h2 class="mb-4">Usluge prevoza iz ${country.nameGenitive}</h2>
            <ul class="list-unstyled">
              ${servicePointsHtml}
            </ul>
          </div>
          <div class="col-md-6">
            <h2 class="mb-4">Potrebna dokumentacija</h2>
            <div class="card">
              <div class="card-body">
                <ul class="list-unstyled">
                  ${documentsHtml}
                </ul>
                <p class="mb-0 text-muted">
                  Mi se brinemo o kompletnoj dokumentaciji za vas. Takođe nudimo
                  ${relatedLinksHtml}. Za informacije o cenama pogledajte naš
                  <a href="/cenovnik" class="text-primary">cenovnik</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="container my-5">
        <h2 class="mb-4">Kako funkcioniše prevoz pokojnika iz ${country.nameGenitive}?</h2>
        <div class="row">
          <div class="col-lg-10 mx-auto">
            ${howItWorksHtml}
            <p class="mb-0">
              <strong>Procenjeno trajanje celog procesa:</strong> ${country.transportDuration} (dokumentacija + transport).
              Svu dokumentaciju završavamo mi — pozovite
              <a href="tel:+381642492849" class="text-primary">+381 64 249 28 49</a>
              u bilo koje doba.
            </p>
          </div>
        </div>
      </section>
${consulatesHtml || country.routeFrom ? `
      <section class="container my-5">
        <div class="row g-4">
          ${consulatesHtml ? `<div class="col-lg-6">
            <h2 class="h3 mb-3">Sprovodnica: srpska predstavništva u ${meta.nameLoc}</h2>
            <p>Dozvolu za unos posmrtnih ostataka u Srbiju (sprovodnicu) izdaje predstavništvo nadležno za poslednje prebivalište pokojnika:</p>
            <ul class="list-unstyled">
              ${consulatesHtml}
            </ul>
            <p class="mb-0">Za sahranu u Bosni i Hercegovini, Crnoj Gori ili Severnoj Makedoniji dozvolu izdaje predstavništvo te zemlje. Zahtev u ime porodice podnosimo mi.</p>
          </div>` : ""}
          ${country.routeFrom ? `<div class="col-lg-6">
            <h2 class="h3 mb-3">Udaljenost iz ${country.routeFromGen} do odredišta</h2>
            ${routeTableHtml(country.routeFrom, country.routeFromGen)}
          </div>` : ""}
        </div>
      </section>
` : ""}
      <section class="container-fluid bg-light py-5">
        <div class="container">
          <h2 class="text-center mb-5">Proces organizacije prevoza</h2>
          <div class="row g-4">
            <div class="col-md-3">
              <div class="card h-100 border-0 shadow-sm">
                <div class="card-body text-center">
                  <div class="display-4 mb-3 text-primary">1</div>
                  <h3 class="h5">Kontakt</h3>
                  <p class="mb-0">Pozovite nas u bilo koje doba dana ili noći</p>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card h-100 border-0 shadow-sm">
                <div class="card-body text-center">
                  <div class="display-4 mb-3 text-primary">2</div>
                  <h3 class="h5">Dokumentacija</h3>
                  <p class="mb-0">Pripremamo svu potrebnu dokumentaciju za prevoz iz ${country.nameGenitive}</p>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card h-100 border-0 shadow-sm">
                <div class="card-body text-center">
                  <div class="display-4 mb-3 text-primary">3</div>
                  <h3 class="h5">Transport</h3>
                  <p class="mb-0">Organizujemo prevoz specijalizovanim vozilom</p>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card h-100 border-0 shadow-sm">
                <div class="card-body text-center">
                  <div class="display-4 mb-3 text-primary">4</div>
                  <h3 class="h5">Primopredaja</h3>
                  <p class="mb-0">Dostava na željenu lokaciju u Srbiji ili regionu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="container my-5">
        <div class="row">
          <div class="col-12 text-center mb-4">
            <h2>Gradovi ${country.nameGenitive}</h2>
            <p class="text-muted mb-0">Organizujemo prevoz iz svih navedenih i drugih gradova</p>
          </div>
        </div>
        <div class="row g-3 g-md-4">
          ${citiesCardsHtml}
        </div>
      </section>

      <section class="container my-5" id="faq-${country.slug}">
        <h2 class="mb-4 text-center">
          Najčešća pitanja o prevozu pokojnika iz ${country.nameGenitive}
        </h2>
        <div class="accordion" id="${accordionId}">
          ${faqHtml}
        </div>
      </section>
    </main>

    <div id="contact-container"></div>
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
          { "@type": "ListItem", "position": 3, "name": "${country.name}", "item": "${url}" }
        ]
      }
    </script>
  </body>
</html>
`;
}

function generateCountryPages() {
  COUNTRY_HUBS.forEach((country) => {
    const filePath = path.join(ROOT, `${country.slug}.html`);
    fs.writeFileSync(filePath, renderCountryPage(country), "utf8");
    console.log(`Generated ${country.slug}.html`);
  });
}

const LASTMOD_MANIFEST = path.join(__dirname, "page-lastmod.json");

function htmlFiles() {
  return fs.readdirSync(ROOT).filter((f) => f.endsWith(".html"));
}

function isIndexable(html) {
  return !/<meta\s+name="robots"\s+content="[^"]*noindex/i.test(html);
}

function pageUrl(file) {
  const slug = file.replace(/\.html$/, "");
  return slug === "index" ? `${SITE_URL}/` : `${SITE_URL}/${slug}`;
}

/** Hash of what a visitor reads (title, description, <main>) — ignores header/footer/asset churn. */
function pageContentHash(html) {
  const pick = (re) => (html.match(re) || [""])[0];
  const content = [
    pick(/<title>[\s\S]*?<\/title>/i),
    pick(/<meta\s+name="description"[\s\S]*?>/i),
    pick(/<main[\s\S]*?<\/main>/i) || html,
  ]
    .join("\n")
    .replace(/\s+/g, " ");
  return crypto.createHash("sha1").update(content).digest("hex");
}

/**
 * Rebuild sitemap.xml from every indexable page. A page's lastmod only moves to
 * today when its content hash changes (tracked in scripts/page-lastmod.json).
 */
function updateSitemap() {
  const sitemapPath = path.join(ROOT, "sitemap.xml");
  const previous = fs.existsSync(sitemapPath) ? fs.readFileSync(sitemapPath, "utf8") : "";
  const previousOrder = [...previous.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const previousLastmod = Object.fromEntries(
    [...previous.matchAll(/<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>/g)].map((m) => [m[1], m[2]])
  );
  const oldManifest = fs.existsSync(LASTMOD_MANIFEST)
    ? JSON.parse(fs.readFileSync(LASTMOD_MANIFEST, "utf8"))
    : {};
  const manifest = {};

  const pages = htmlFiles()
    .map((file) => ({ file, html: fs.readFileSync(path.join(ROOT, file), "utf8") }))
    .filter(({ html }) => isIndexable(html))
    .map(({ file, html }) => {
      const loc = pageUrl(file);
      const hash = pageContentHash(html);
      const known = oldManifest[loc];
      let lastmod = TODAY;
      if (known && known.hash === hash) lastmod = known.lastmod;
      else if (!known && previousLastmod[loc]) lastmod = previousLastmod[loc];
      manifest[loc] = { hash, lastmod };
      return { loc, lastmod };
    });

  // Keep the existing sitemap order; new pages go at the end.
  const rank = (loc) => {
    const i = previousOrder.indexOf(loc);
    return i === -1 ? previousOrder.length : i;
  };
  pages.sort((a, b) => rank(a.loc) - rank(b.loc));

  const urls = pages
    .map(({ loc, lastmod }) => `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`)
    .join("\n");
  fs.writeFileSync(
    sitemapPath,
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    "utf8"
  );
  fs.writeFileSync(LASTMOD_MANIFEST, JSON.stringify(manifest, null, 2) + "\n", "utf8");
  console.log(`Updated sitemap.xml (${pages.length} URLs)`);
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

/** Close `<picture><source/><img>` wrappers that an earlier version of wrapAsset left open. */
function closeUnclosedPictures(html) {
  return html.replace(
    /(<picture><source srcset="[^"]+" type="image\/webp" \/>\s*<img\b[^>]*>)(?!\s*<\/picture>)/g,
    "$1</picture>"
  );
}

function wrapImagesWithPicture(html) {
  html = closeUnclosedPictures(dedupePictureTags(html));

  const wrapAsset = (filename, webp) => {
    const re = new RegExp(`<img([^>]*?)src="${filename.replace(".", "\\.")}"([^>]*?)>`, "gi");
    html = html.replace(re, (match, before, after, offset, str) => {
      const prefix = str.slice(0, offset);
      const lastOpen = prefix.lastIndexOf("<picture>");
      const lastClose = prefix.lastIndexOf("</picture>");
      if (lastOpen > lastClose) return match;
      return `<picture><source srcset="${webp}" type="image/webp" /><img${before}src="${filename}"${after}></picture>`;
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

function renderServicePage({ slug, title, description, h1, lead, sections, faqs, relatedLinks, areaServed }) {
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

  // sections: [{ h, p[], list?[], ordered? }]
  const sectionsHtml = sections
    .map((s) => {
      const tag = s.ordered ? "ol" : "ul";
      const list = s.list ? `<${tag}>${s.list.map((li) => `<li>${li}</li>`).join("")}</${tag}>` : "";
      return `<h2 class="mt-4">${s.h}</h2>${s.p.map((para) => `<p>${para}</p>`).join("")}${list}`;
    })
    .join("");

  const relatedHtml = (relatedLinks || [])
    .map((l) => `<li><a href="${l.href}" class="text-primary">${l.title}</a></li>`)
    .join("");

  return `<!DOCTYPE html>
<html lang="sr-Latn">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
  <meta name="description" content="${description}" />
  <meta name="author" content="Transport pokojnika - Pogrebno preduzeće" />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="sr_RS" />
  <meta property="og:site_name" content="Transport pokojnika" />
  <meta property="og:url" content="${url}" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:image" content="https://transportpokojnika.com/pogrebni-kombi-sa-sandukom.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
  <link rel="canonical" href="${url}" />
  <link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin />
  ${GENERATED_HEAD_ASSETS}
  ${jsonLdScript({ "@context": "https://schema.org", "@type": "Service", name: h1, description, url, provider: businessRef(), ...(areaServed ? { areaServed: { "@type": "Country", name: areaServed } } : {}) })}
  ${faqs && faqs.length ? jsonLdScript(faqSchemaJson(faqs)) : ""}
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

const SERVICE_PAGES = [...require("./content/services"), ...require("./content/destinations")];

const MONTHS_SR = [
  "januar", "februar", "mart", "april", "maj", "jun",
  "jul", "avgust", "septembar", "oktobar", "novembar", "decembar",
];

/** "2026-08-05" → "5. avgust 2026" */
function formatDateSr(isoDate) {
  const [year, month, day] = isoDate.split("-").map(Number);
  return `${day}. ${MONTHS_SR[month - 1]} ${year}`;
}

/**
 * Blog post. sections: [{ h, p[], list?[], ordered? }]; optional: updated (ISO date of the last
 * substantial edit — becomes dateModified), faqs [{ q, a }] (rendered + FAQPage schema).
 */
function renderBlogPost({ slug, title, description, h1, lead, date, updated, readTime, sections, faqs, relatedLinks }) {
  const url = `https://transportpokojnika.com/${slug}`;
  const modified = updated || date;
  const sectionsHtml = sections
    .map((s) => {
      const tag = s.ordered ? "ol" : "ul";
      const list = s.list ? `<${tag}>${s.list.map((li) => `<li>${li}</li>`).join("")}</${tag}>` : "";
      return `<h2>${s.h}</h2>${s.p.map((para) => `<p>${para}</p>`).join("")}${list}`;
    })
    .join("");

  const relatedHtml = (relatedLinks || [])
    .map((l) => `<li><a href="${l.href}" class="text-primary">${l.title}</a></li>`)
    .join("");

  const faqHtml = faqs && faqs.length
    ? `<h2 class="mt-5">Najčešća pitanja</h2><div class="accordion mb-4" id="faq-${slug}">${faqAccordionHtml(faqs, `faq-${slug}`)}</div>`
    : "";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: h1,
    description,
    image: `${SITE_URL}/pogrebni-kombi-sa-sandukom.jpg`,
    author: businessRef(),
    publisher: businessRef(),
    datePublished: date,
    dateModified: modified,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  return `<!DOCTYPE html>
<html lang="sr-Latn">
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
  <meta property="og:site_name" content="Transport pokojnika" />
  <meta property="og:image" content="https://transportpokojnika.com/pogrebni-kombi-sa-sandukom.jpg" />
  <meta property="article:published_time" content="${date}" />
  <meta property="article:modified_time" content="${modified}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="${url}" />
  <meta name="twitter:title" content="${h1}" />
  <meta name="twitter:description" content="${description}" />
  <meta name="twitter:image" content="https://transportpokojnika.com/pogrebni-kombi-sa-sandukom.jpg" />
  <link rel="canonical" href="${url}" />
  ${GENERATED_HEAD_ASSETS}
  ${jsonLdScript(articleSchema)}
  ${faqs && faqs.length ? jsonLdScript(faqSchemaJson(faqs)) : ""}
  <link rel="icon" type="image/png" href="vijenac logo.png" />
</head>
<body>
  <div id="header-container"></div>
  <main role="main">
    <nav class="container py-3" aria-label="breadcrumb"><ol class="breadcrumb"><li class="breadcrumb-item"><a href="/">Početna</a></li><li class="breadcrumb-item"><a href="/blog">Blog</a></li><li class="breadcrumb-item active">${h1}</li></ol></nav>
    <article class="container py-5"><div class="row"><div class="col-lg-8 mx-auto">
      <header class="mb-4"><h1 class="display-4 mb-3">${h1}</h1><p class="lead text-muted">${lead}</p>
      <div class="d-flex flex-wrap text-muted small mb-4"><i class="bi bi-calendar me-2"></i><time datetime="${date}">${formatDateSr(date)}</time>${updated && updated !== date ? `<span class="mx-2">|</span><span>Ažurirano: <time datetime="${updated}">${formatDateSr(updated)}</time></span>` : ""}<span class="mx-2">|</span><i class="bi bi-clock me-2"></i><span>${readTime}</span></div></header>
      <picture><source srcset="pogrebni-kombi-sa-sandukom.webp" type="image/webp" /><img src="pogrebni-kombi-sa-sandukom.jpg" alt="${h1}" class="img-fluid rounded shadow mb-4" width="800" height="450" loading="eager" /></picture>
      <div class="article-content">${sectionsHtml}
      ${faqHtml}
      ${relatedHtml ? `<h2 class="mt-5">Povezani resursi</h2><ul>${relatedHtml}</ul>` : ""}
      </div>
    </div></div></article>
    <section class="py-5 bg-primary text-white"><div class="container text-center"><h2 class="mb-3">Potrebna vam je pomoć?</h2><p class="lead mb-4">Dostupni smo 24/7 — preuzimamo kompletnu organizaciju i dokumentaciju.</p><a href="tel:+381642492849" class="btn btn-light btn-lg me-2 mb-2">Pozovite nas 24/7</a><a href="${WHATSAPP_URL}" target="_blank" rel="noopener noreferrer" class="btn btn-outline-light btn-lg mb-2">WhatsApp</a></div></section>
  </main>
  <div id="footer-container"></div>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" defer></script>
  <script src="includes.js?v=3" defer></script>
</body>
</html>`;
}

const BLOG_POSTS = [
  ...require("./content/blog-guides"),
  ...require("./content/blog-countries"),
  ...require("./content/blog-legacy"),
  ...require("./content/blog-new"),
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

const LLMS_SERVICE_SLUGS = new Set([
  "cenovnik", "dokumentacija-za-prevoz-pokojnika", "pogrebni-sanduci",
  "ekshumacija", "repatrijacija-pokojnika",
]);
const LLMS_OPTIONAL_SLUGS = new Set(["testimonials", "contact"]);

function decodeEntities(text) {
  return text.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'");
}

/** llms.txt index built from every sitemap page's own H1 and meta description. */
function generateLlmsTxt() {
  const sitemap = fs.readFileSync(path.join(ROOT, "sitemap.xml"), "utf8");
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const countrySlugs = new Set(Object.keys(COUNTRY_META));
  const citySlugs = new Set(CITIES.map((c) => c.slug));

  const sections = {
    Usluge: [],
    "Odredišta (sahrana)": [],
    Zemlje: [],
    Gradovi: [],
    Blog: [],
    Optional: [],
  };

  urls.forEach((url) => {
    const slug = new URL(url).pathname.slice(1);
    const html = fs.readFileSync(path.join(ROOT, `${slug || "index"}.html`), "utf8");
    const h1 = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
    const description = html.match(/<meta\s+name="description"\s+content="([^"]*)"/i);
    const title = slug === "" ? "Početna stranica" : decodeEntities(stripTags(h1 ? h1[1] : slug));
    const entry = `- [${title}](${url}): ${decodeEntities(description ? description[1] : "")}`;

    if (slug === "" || LLMS_SERVICE_SLUGS.has(slug)) {
      sections.Usluge.push(entry);
    } else if (slug.startsWith("prevoz-pokojnika-u-")) {
      sections["Odredišta (sahrana)"].push(entry);
    } else if (countrySlugs.has(slug)) {
      sections.Zemlje.push(entry);
    } else if (citySlugs.has(slug)) {
      sections.Gradovi.push(entry);
    } else if (slug === "blog" || slug.startsWith("blog-")) {
      sections.Blog.push(entry);
    } else if (LLMS_OPTIONAL_SLUGS.has(slug)) {
      sections.Optional.push(entry);
    }
  });

  let txt = `# ${BUSINESS.name}

> Pogrebno preduzeće iz Beograda specijalizovano za međunarodni prevoz pokojnika iz cele Evrope (Nemačka, Austrija, Švajcarska, Italija, Španija, Francuska, Skandinavija i druge zemlje) u Srbiju, Bosnu i Hercegovinu, Crnu Goru i Severnu Makedoniju. Kompletnu dokumentaciju (uključujući sprovodnicu) pribavljamo mi. Tel: +381 64 249 28 49, dostupni 24/7.

Sajt je na srpskom jeziku (latinica). Glavne usluge: međunarodni prevoz pokojnika, repatrijacija, ekshumacija i prenos posmrtnih ostataka, pribavljanje dokumentacije, pogrebni sanduci.

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

function jsonLdScript(data) {
  const json = JSON.stringify(data, null, 2).replace(/\n/g, "\n      ");
  return `<script type="application/ld+json">\n      ${json}\n    </script>`;
}

function stripTags(html) {
  return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

/** Append to the end of <head>; adds the closing tag on pages that omit it. */
function appendToHead(html, snippet) {
  if (/<\/head>/i.test(html)) return html.replace(/<\/head>/i, `  ${snippet}\n  </head>`);
  return html.replace(/(\s*)<body\b/i, `\n    ${snippet}\n  </head>$1<body`);
}

/** Insert `tag` right after the first match of `afterRe` (or at the end of <head> as a fallback). */
function insertHeadTag(html, afterRe, tag) {
  const match = html.match(afterRe);
  if (match) {
    const end = match.index + match[0].length;
    return `${html.slice(0, end)}\n    ${tag}${html.slice(end)}`;
  }
  return appendToHead(html, tag);
}

/** Canonical, og:locale/site_name, lang and stale meta tags — enforced on every page. */
function ensureHeadTags() {
  htmlFiles().forEach((file) => {
    let content = fs.readFileSync(path.join(ROOT, file), "utf8");
    const original = content;

    content = content.replace(/<html lang="sr">/i, '<html lang="sr-Latn">');
    if (!/<\/head>/i.test(content)) {
      content = content.replace(/(\s*)<body\b/i, "\n  </head>$1<body");
    }
    content = content.replace(/\s*<meta\s+name="keywords"[\s\S]*?\/>/i, "");
    content = content.replace(
      /(<meta\s+name="author"\s+content=")Vaše Pogrebno Preduzeće(")/i,
      `$1${BUSINESS.name}$2`
    );

    if (isIndexable(content)) {
      const canonical = `<link rel="canonical" href="${pageUrl(file)}" />`;
      if (/<link\s+rel="canonical"[^>]*>/i.test(content)) {
        content = content.replace(/<link\s+rel="canonical"[^>]*>/i, canonical);
      } else {
        content = insertHeadTag(content, /<meta\s+name="description"[\s\S]*?\/>/i, canonical);
      }
    }

    if (!/property="og:locale"/.test(content)) {
      content = insertHeadTag(
        content,
        /<meta\s+property="og:type"[\s\S]*?\/>/i,
        '<meta property="og:locale" content="sr_RS" />'
      );
    }
    if (!/property="og:site_name"/.test(content)) {
      content = insertHeadTag(
        content,
        /<meta\s+property="og:locale"[\s\S]*?\/>/i,
        '<meta property="og:site_name" content="Transport pokojnika" />'
      );
    }

    if (content !== original) {
      fs.writeFileSync(path.join(ROOT, file), content, "utf8");
      console.log(`Updated head tags in ${file}`);
    }
  });
}

// Not schema.org types — replaced by a reference to the LocalBusiness entity.
const INVALID_BUSINESS_TYPES = new Set(["FuneralService", "FuneralHome"]);

function normalizeJsonLdNode(node) {
  if (Array.isArray(node)) return node.map(normalizeJsonLdNode);
  if (!node || typeof node !== "object") return node;

  const out = {};
  for (const [key, value] of Object.entries(node)) {
    if (value && typeof value === "object" && INVALID_BUSINESS_TYPES.has(value["@type"])) {
      // Service details were attached to the business node — move them to the Service.
      if (node["@type"] === "Service") {
        ["areaServed", "serviceType"].forEach((k) => {
          if (value[k] && !node[k]) out[k] = value[k];
        });
      }
      out[key] = businessRef();
    } else {
      out[key] = normalizeJsonLdNode(value);
    }
  }
  return out;
}

function normalizeText(html) {
  return stripTags(html).replace(/&nbsp;/g, " ").toLowerCase();
}

/** Returns the cleaned JSON-LD object, or null when the whole block should be dropped. */
function normalizeJsonLd(data, file, visibleText) {
  if (file === "index.html" && data["@type"] === "LocalBusiness") return businessJsonLd();

  const out = normalizeJsonLdNode(data);
  if (out["@type"] === "ProfessionalService") out["@type"] = "Service";
  if (out["@type"] === "WebSite") delete out.potentialAction; // no on-site search exists

  // FAQ markup may only contain questions that are visible on the page.
  if (out["@type"] === "FAQPage" && Array.isArray(out.mainEntity)) {
    out.mainEntity = out.mainEntity.filter((q) => visibleText.includes(normalizeText(q.name || "")));
    if (out.mainEntity.length === 0) return null;
  }

  // Self-serving review markup that isn't backed by visible, verifiable reviews.
  if (out.aggregateRating || out.review) {
    delete out.aggregateRating;
    delete out.review;
    const remaining = Object.keys(out).filter((k) => !["@context", "@type", "name"].includes(k));
    if (remaining.length === 0) return null;
  }
  return out;
}

function normalizeStructuredData() {
  const blockRe = /(\s*<!--[^>]*?-->)?(\s*)<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;

  htmlFiles().forEach((file) => {
    const original = fs.readFileSync(path.join(ROOT, file), "utf8");
    const visibleText = normalizeText(
      original.replace(/<head[\s\S]*?<\/head>/i, " ").replace(/<script[\s\S]*?<\/script>/gi, " ")
    );
    const content = original.replace(blockRe, (match, comment = "", space, json) => {
      let data;
      try {
        data = JSON.parse(json);
      } catch (err) {
        console.warn(`  ! ${file}: invalid JSON-LD left untouched (${err.message})`);
        return match;
      }
      const normalized = normalizeJsonLd(data, file, visibleText);
      if (normalized === null) return "";
      if (JSON.stringify(normalized) === JSON.stringify(data)) return match;
      return `${comment}${space}${jsonLdScript(normalized)}`;
    });

    if (content !== original) {
      fs.writeFileSync(path.join(ROOT, file), content, "utf8");
      console.log(`Normalized structured data in ${file}`);
    }
  });
}

/** Add BreadcrumbList JSON-LD derived from the visible breadcrumb when a page lacks it. */
function ensureBreadcrumbSchema() {
  htmlFiles().forEach((file) => {
    const content = fs.readFileSync(path.join(ROOT, file), "utf8");
    if (content.includes('"BreadcrumbList"')) return;
    const list = content.match(/<ol class="breadcrumb[^"]*">([\s\S]*?)<\/ol>/i);
    if (!list) return;

    const items = [...list[1].matchAll(/<li class="breadcrumb-item[^"]*"[^>]*>([\s\S]*?)<\/li>/gi)].map((m) => {
      const link = m[1].match(/<a href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/i);
      return {
        name: stripTags(link ? link[2] : m[1]),
        item: link ? new URL(link[1], `${SITE_URL}/`).href : pageUrl(file),
      };
    });
    if (items.length < 2) return;

    const schema = jsonLdScript({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: it.item })),
    });
    fs.writeFileSync(path.join(ROOT, file), appendToHead(content, schema), "utf8");
    console.log(`Added breadcrumb schema to ${file}`);
  });
}

function gitAddedDate(file) {
  try {
    const out = execSync(`git log --diff-filter=A --follow --format=%cs -- "${file}"`, { cwd: ROOT })
      .toString()
      .trim()
      .split("\n");
    return out[out.length - 1] || TODAY;
  } catch {
    return TODAY;
  }
}

/** Add Article JSON-LD to blog posts that have none. */
function ensureBlogArticleSchema() {
  htmlFiles()
    .filter((f) => f.startsWith("blog-"))
    .forEach((file) => {
      const content = fs.readFileSync(path.join(ROOT, file), "utf8");
      if (/"@type":\s*"(Article|BlogPosting)"/.test(content)) return;

      const h1 = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
      const description = content.match(/<meta\s+name="description"\s+content="([^"]*)"/i);
      const published = gitAddedDate(file);
      const schema = jsonLdScript(
        compact({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: h1 ? stripTags(h1[1]) : null,
          description: description ? description[1] : null,
          image: `${SITE_URL}/pogrebni-kombi-sa-sandukom.jpg`,
          author: businessRef(),
          publisher: businessRef(),
          datePublished: published,
          dateModified: published,
          mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl(file) },
        })
      );
      fs.writeFileSync(path.join(ROOT, file), appendToHead(content, schema), "utf8");
      console.log(`Added article schema to ${file}`);
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

function main() {
  generateCityPages();
  generateCountryPages();
  generateServicePages();
  generateBlogPosts();
  injectPartials();

  updateBlogImageDimensions();
  updateBlogListingImages();
  updateStaticPageImages();
  dedupeAllPictureTags();
  updateHeadAssets();
  fixAccessibilityLinks();
  ensureHeadTags();
  normalizeStructuredData();
  ensureBreadcrumbSchema();
  ensureBlogArticleSchema();

  // Last, so content hashes reflect the final pages.
  updateSitemap();
  generateLlmsTxt();
  syncStylesMin();
  verifyCls();

  if (process.argv.includes("--images")) {
    convertImages();
  }

  console.log("Build complete.");
}

main();
