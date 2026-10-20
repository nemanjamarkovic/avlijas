/** English pages (en-a) — rendered by renderLocalePage() in scripts/build-site.js. Fields: see the i18n brief. */
const a = (href, text) => `<a href="${href}" class="text-primary">${text}</a>`;

module.exports = [
  // ───────────────────────────── HOME ─────────────────────────────
  {
    key: "home",
    slug: "",
    title: "Funeral Repatriation to Serbia and the Balkans",
    description:
      "Repatriation of remains from anywhere in Europe to Serbia, Bosnia and Herzegovina, Montenegro and North Macedonia. All permits handled, available 24/7.",
    h1: "Repatriation of remains to Serbia, Bosnia, Montenegro and North Macedonia",
    crumb: "Home",
    lead: "We are a funeral company in Belgrade that brings the deceased home from anywhere in Europe for burial in Serbia, Bosnia and Herzegovina, Montenegro or North Macedonia. We deal with the hospital, the local authorities and every permit, and the family speaks to one contact person from the first call until the coffin arrives.",
    cards: [
      { href: "/en/repatriation-to-serbia", title: "Repatriation to Serbia", text: "The sprovodnica, routes to Belgrade and typical timings from each country." },
      { href: "/en/repatriation-to-bosnia", title: "Repatriation to Bosnia and Herzegovina", text: "The BiH permit, the entity form and routes to Banja Luka and Sarajevo." },
      { href: "/en/repatriation-to-montenegro", title: "Repatriation to Montenegro", text: "The Montenegrin permit, road routes, transit and flights to Podgorica." },
      { href: "/en/repatriation-to-north-macedonia", title: "Repatriation to North Macedonia", text: "Entry permit, Serbian transit permit and the road to Skopje." },
      { href: "/en/repatriation-from-germany", title: "Repatriation from Germany", text: "Leichenpass, Standesamt and the six Serbian missions in Germany." },
      { href: "/en/repatriation-from-austria", title: "Repatriation from Austria", text: "Totenbeschau, Bezirkshauptmannschaft and the shortest routes home." },
      { href: "/en/repatriation-from-switzerland", title: "Repatriation from Switzerland", text: "Cantonal Leichenpass, Zivilstandsamt and customs on leaving the country." },
      { href: "/en/documents-for-repatriation", title: "Documents for repatriation", text: "Which papers are needed, who issues them and when an apostille applies." },
      { href: "/en/repatriation-cost", title: "Repatriation cost", text: "What the price depends on and what is included, explained openly." },
      { href: "/en/contact", title: "Contact", text: "Phone, WhatsApp, Viber and e-mail, day and night, from any country." },
    ],
    sections: [
      {
        h: "Funeral repatriation services from all of Europe",
        p: [
          "Losing someone far from home is hard enough without having to work out foreign rules, forms and offices. Many of the families who contact us live in Germany, Austria, Switzerland, Sweden, Norway, Denmark, the Netherlands, Belgium or the UK, while their parents and grandparents are buried in a village in Serbia or Bosnia. Others are relatives in the Balkans who have just received the news that someone has died abroad.",
          "Whatever the starting point, the task is the same: the deceased has to be released by the authorities of the country of death, the country of burial has to allow the remains in, and the coffin has to travel safely and with dignity. We organise all of it. We are available 24/7, we work with specialised funeral vehicles, and our team speaks German, which helps with hospitals and offices in Germany, Austria and Switzerland. We answer enquiries in English by e-mail and WhatsApp.",
        ],
      },
      {
        h: "Where we bring the deceased",
        p: ["We repatriate to four countries, each with its own entry permit and its own practical details:"],
        list: [
          `${a("/en/repatriation-to-serbia", "Serbia")}: entry permit from the Serbian embassy or consulate (the sprovodnica), delivery to any cemetery in the country.`,
          `${a("/en/repatriation-to-bosnia", "Bosnia and Herzegovina")}: permit from the BiH mission plus a form for Republika Srpska, the Federation of BiH or Brčko District.`,
          `${a("/en/repatriation-to-montenegro", "Montenegro")}: permit from the Montenegrin mission, by road through Serbia or along the Croatian coast, or by air.`,
          `${a("/en/repatriation-to-north-macedonia", "North Macedonia")}: permit from the Macedonian mission and, by road, a Serbian transit permit.`,
        ],
      },
      {
        h: "How it works, step by step",
        p: ["Most repatriations follow the same sequence, although the names of the documents change from country to country:"],
        list: [
          "You call or send a WhatsApp message and tell us where the deceased is and where the burial will be.",
          "We give you the exact price in that first conversation, with no hidden costs.",
          "We contact the hospital, care home or local funeral director and arrange collection and preparation.",
          "We obtain the death certificate, the export permit of the country of death and the entry permit of the country of burial.",
          "The coffin travels by road or air, and we keep you informed until it is handed over at the cemetery or the family home.",
        ],
        ordered: true,
      },
      {
        h: "What the family needs to do",
        p: [
          `Very little. We need the name of the deceased, where they died, where they are to be buried and a copy of their passport or identity card. Where an authority requires it, we send you a short authorisation to sign so that we can apply on the family's behalf. Everything else — the Serbian permit (sprovodnica) or the permit of Bosnia and Herzegovina, Montenegro or North Macedonia, translations, apostilles and border formalities — is our job. The page on ${a("/en/documents-for-repatriation", "documents for repatriation")} explains each paper in detail.`,
        ],
      },
      {
        h: "By road or by air",
        p: [
          "From Germany, Austria, Switzerland and most of Central Europe we usually recommend road transport: the funeral vehicle drives from the place of death to the cemetery without any transfer, and it is often just as quick as a flight once cargo booking and airport procedures are counted. From Scandinavia, Spain or other very distant places, air freight to Belgrade, Sarajevo, Podgorica or Skopje can save several days, and we meet the coffin at the airport.",
        ],
      },
      {
        h: "For insurers, assistance companies and funeral directors abroad",
        p: [
          "If a travel or repatriation insurance policy covers the costs, the insurer or assistance company can contact us directly by e-mail with the case details. Funeral directors, hospitals and social workers in Germany, Austria and Switzerland can also reach us by phone in German. Each case has one contact person, so you always know whom to ask about the status of the documents or the expected arrival time.",
        ],
      },
    ],
    faqs: [
      {
        q: "What should I do when someone dies abroad?",
        a: "First contact the hospital, care home or police on site to find out where the deceased is, then call us. We take over the conversation with the local services and explain which documents will be needed for the burial at home. You do not need to travel or visit any embassy yourself.",
      },
      {
        q: "How much does it cost to repatriate a body?",
        a: `It depends mainly on the distance, the country of death, the documents involved and whether the coffin travels by road or air. We cannot give a meaningful figure without these details, but we give you the exact price in the first call. The ${a("/en/repatriation-cost", "repatriation cost")} page explains every factor.`,
      },
      {
        q: "Do you speak English?",
        a: "We answer enquiries in English by e-mail and WhatsApp, and our team speaks German on the phone. Calls are welcome from any country, and a written message in English is often the quickest way to start if you are unsure.",
      },
      {
        q: "Which countries do you repatriate from?",
        a: "From all of Europe — most often Germany, Austria and Switzerland, but also Scandinavia, the Netherlands, Belgium, France, Italy, Spain, Slovenia, Croatia, Greece and the UK. The destination is always Serbia, Bosnia and Herzegovina, Montenegro or North Macedonia.",
      },
      {
        q: "Can you also bring ashes home?",
        a: "Yes. When the deceased has been cremated abroad, the urn needs the same kind of entry permit as a coffin, together with the cremation certificate. The urn must be closed and protected for the journey.",
      },
    ],
    relatedLinks: [
      { href: "/en/repatriation-to-serbia", title: "Repatriation to Serbia" },
      { href: "/en/repatriation-to-bosnia", title: "Repatriation to Bosnia and Herzegovina" },
      { href: "/en/documents-for-repatriation", title: "Documents for repatriation" },
      { href: "/en/contact", title: "Contact us 24/7" },
    ],
  },

  // ───────────────────────────── SERBIA ─────────────────────────────
  {
    key: "dest-serbia",
    slug: "repatriation-to-serbia",
    title: "Repatriation of a Body to Serbia from Europe",
    description:
      "Repatriation of a body to Serbia from Germany, Austria, Scandinavia, the Netherlands or the UK: the sprovodnica, documents, routes to Belgrade and timings.",
    h1: "Repatriation to Serbia",
    crumb: "Repatriation to Serbia",
    lead: "When someone from Serbia dies in Germany, Austria, Switzerland, Scandinavia, the Netherlands, Belgium, the UK or elsewhere in Europe, we bring them home for burial. We obtain the documents of the country of death and the Serbian entry permit, plan the route and drive the coffin to the cemetery, with one contact person for the family throughout.",
    sections: [
      {
        h: "How to repatriate a body to Serbia",
        p: [
          "Every repatriation rests on two sets of papers. The first comes from the country where the person died: a medical certificate of death, the civil death record and a permit that allows the remains to leave the country. The second is Serbia's permission for the remains to enter, called the sprovodnica. Only when both are complete can the coffin set off, and the originals travel with it to be shown at the border.",
          "The deceased travels in a hermetically sealed coffin approved for international transport, by road in a specialised funeral vehicle or by air freight to Belgrade. In practice the process looks like this:",
        ],
        list: [
          "the family calls or messages us with the place of death and the place of burial;",
          "we contact the hospital, care home or local funeral director and arrange collection;",
          "the death is registered locally and the export permit is issued;",
          "we apply for the sprovodnica at the responsible Serbian mission;",
          "the coffin travels to Serbia and is handed over at the cemetery, chapel or family home.",
        ],
        ordered: true,
      },
      {
        h: "The sprovodnica: Serbia's entry permit for human remains",
        p: [
          "The sprovodnica — sometimes translated as a burial-transit docket — is issued by the Serbian embassy or consulate general responsible for the deceased's last place of residence. That is not always the mission nearest to the place of death. The application can be made by a family member or by a funeral company the family has authorised, so in most cases nobody from the family has to go to the embassy in person.",
          "Serbian missions generally ask for these documents in the original:",
        ],
        list: [
          "the passport of the deceased;",
          "a written request stating the place of burial and the transport route;",
          "the death certificate issued by the foreign authority (for example a Sterbeurkunde or akte van overlijden);",
          "a medical report on the cause of death;",
          "the transport permit of the country of death (for example a Leichenpass or laissez-passer);",
          "for foreign nationals, confirmation that a grave has been secured in Serbia.",
        ],
      },
      {
        h: "Which Serbian embassy or consulate is responsible",
        p: [
          "In countries with more than one Serbian mission, responsibility is divided by region. We confirm it for every case, but as a guide:",
        ],
        list: [
          "Germany: the Embassy in Berlin (Berlin, Brandenburg, Mecklenburg-Western Pomerania, Saxony, Saxony-Anhalt and Thuringia) and the Consulates General in Hamburg (Hamburg, Lower Saxony, Bremen, Schleswig-Holstein), Düsseldorf (North Rhine-Westphalia), Frankfurt (Hesse, Rhineland-Palatinate, Saarland), Munich (Bavaria) and Stuttgart (Baden-Württemberg).",
          "Austria: the Embassy in Vienna (Vienna, Lower Austria, Burgenland, Styria, Carinthia) and the Consulate General in Salzburg (Salzburg, Tyrol, Vorarlberg, Upper Austria).",
          "Switzerland: the Consulate General in Zurich for Zurich, Lucerne, Uri, Schwyz, Obwalden, Nidwalden, Glarus, Zug, Schaffhausen, both Appenzells, St. Gallen, Graubünden, Aargau, Thurgau and Liechtenstein; the Embassy in Bern for the other cantons, among them Bern, Geneva, Vaud, Basel, Fribourg, Neuchâtel, Valais and Ticino.",
          "Scandinavia: one embassy per country, in Stockholm, Copenhagen and Oslo.",
          "Benelux: the Embassy in The Hague for the Netherlands and the Embassy in Brussels for Belgium and Luxembourg.",
          "UK and Ireland: the Embassy of Serbia in London.",
        ],
      },
      {
        h: "Routes and distances to Belgrade",
        p: [
          `The figures below are road distances to Belgrade, rounded and without breaks. Drivers must take statutory rest periods, so the real journey is always longer than the driving time alone. For burials elsewhere in Serbia — Novi Sad, Kragujevac, Niš or a village in the south — we drive on to the cemetery itself. More on the German side of the journey is on the page ${a("/en/repatriation-from-germany", "repatriation from Germany")}.`,
        ],
        list: [
          "Germany: Munich about 940 km, Stuttgart about 1,180 km, Berlin about 1,240 km, Frankfurt about 1,290 km, Düsseldorf about 1,510 km, Hamburg about 1,540 km",
          "Austria and Switzerland: Graz about 580 km, Vienna about 620 km, Salzburg about 810 km, Zurich about 1,250 km, Geneva about 1,330 km, Bern about 1,370 km",
          "Netherlands and Belgium: Brussels and Antwerp about 1,680 km each, Amsterdam about 1,720 km, Rotterdam about 1,740 km",
          "Scandinavia: Copenhagen about 2,010 km, Gothenburg about 2,310 km, Oslo about 2,610 km, Stockholm about 2,660 km (around 28 hours of pure driving)",
          "Elsewhere: Zagreb about 390 km, Ljubljana about 530 km, Milan about 1,020 km, Paris about 1,790 km",
        ],
      },
      {
        h: "Crossing into Serbia: border and customs",
        p: [
          "Serbia is not a member of the EU, so a funeral vehicle entering the country goes through passport and customs control. Coming from Germany, Austria or Switzerland, the usual entry points are Batrovci, on the motorway from Zagreb, or Horgoš, on the route through Hungary. Border officers check the sprovodnica together with the documents of the country of death, which is why nothing can be missing when the vehicle leaves.",
          "From Scandinavia, the road route crosses the Øresund Bridge into Denmark or takes a ferry to a German port, then continues through Central Europe. Norway and Switzerland are outside the EU as well, so there are customs formalities on leaving those countries in addition to those on arrival in Serbia.",
        ],
      },
      {
        h: "Multilingual death certificate or apostille",
        p: [
          "Whether a foreign death certificate needs a translation depends on where it was issued. Serbia, Germany, Austria, Switzerland, the Netherlands, Belgium, France, Italy, Spain, Croatia and Slovenia are parties to CIEC Convention No. 16 (Vienna, 1976) on multilingual extracts from civil-status records. A multilingual death certificate from one of these countries is generally accepted in Serbia without legalisation and without translation.",
          `Sweden, Denmark, Norway and Greece are not part of that system, so their documents are legalised with an apostille and translated into Serbian by a sworn translator. For deaths in the UK or Ireland, the Serbian Embassy in London asks for the death certificate with an apostille. We start this step as soon as the certificate is issued, because it adds time. The full list per country is on the page ${a("/en/documents-for-repatriation", "documents for repatriation")}.`,
        ],
      },
      {
        h: "Coffin, road or air, and how long it takes",
        p: [
          "For international transport the deceased must lie in a hermetically sealed coffin, usually a wooden coffin with a zinc lining that is soldered shut once the body is inside. It is not opened during the journey, so clothing, religious items and any other wishes are agreed with us before it is closed. Serbian Orthodox families usually arrange the funeral service with their parish priest once the arrival time is confirmed.",
          "From most of Central Europe the road is as quick as flying and avoids any transfer of the coffin. For Stockholm, Oslo, Madrid or similar distances, air freight to Belgrade Nikola Tesla Airport can save days; the coffin then needs extra air-cargo packaging and we collect it at the airport.",
          `From the first call to handover, the process usually takes 1–3 days from Austria, Croatia or Slovenia, 2–4 days from Germany, Switzerland, Italy or France, 3–5 days from the Netherlands, Belgium or Denmark, 4–6 days from Spain and 4–7 days from Sweden or Norway. Weekends, public holidays, a post-mortem or waiting for a prosecutor's release can extend this. What the price depends on is explained on the ${a("/en/repatriation-cost", "repatriation cost")} page.`,
        ],
      },
    ],
    faqs: [
      {
        q: "How long does it take to repatriate a body to Serbia?",
        a: "Usually between one and seven days from the first call, depending on the country of death. Austria is the quickest at 1–3 days; Sweden and Norway take longest at 4–7 days, mainly because of the apostille and translation. The drive itself is only part of that time.",
      },
      {
        q: "What happens when someone dies in Germany and is to be buried in Serbia?",
        a: "A doctor issues the Todesbescheinigung, the Standesamt registers the death and issues the Sterbeurkunde, and the local authority issues the Leichenpass. We then apply for the sprovodnica at the Serbian mission responsible for the last place of residence, for example the Consulate General in Munich for Bavaria. From Munich to Belgrade it is about 940 km by road.",
      },
      {
        q: "Does the family have to go to the Serbian embassy?",
        a: "In most cases, no. An authorised funeral company can submit the application for the sprovodnica, so we take care of it. The family sends us copies of the documents and, if needed, signs an authorisation.",
      },
      {
        q: "Is a sprovodnica also needed to bring ashes to Serbia?",
        a: "Yes. An urn needs a sprovodnica too, and the cremation certificate is added to the usual documents. The urn must be sealed and protected for the journey.",
      },
      {
        q: "The deceased was not a Serbian citizen. Can they still be buried in Serbia?",
        a: "Yes. For foreign nationals the Serbian mission also asks for confirmation that a grave has been secured in Serbia. We tell you exactly what the cemetery needs to provide.",
      },
      {
        q: "Can you repatriate a body from Sweden or Norway to Serbia by road?",
        a: "Yes, although the distances are long: about 2,660 km from Stockholm and about 2,610 km from Oslo to Belgrade. Many families from Scandinavia choose air freight to Belgrade instead, and we collect the coffin at the airport.",
      },
    ],
    relatedLinks: [
      { href: "/en/documents-for-repatriation", title: "Documents for repatriation" },
      { href: "/en/repatriation-from-germany", title: "Repatriation from Germany" },
      { href: "/en/repatriation-from-austria", title: "Repatriation from Austria" },
      { href: "/en/repatriation-cost", title: "Repatriation cost" },
      { href: "/en/contact", title: "Contact" },
    ],
    areaServed: "Serbia",
  },

  // ───────────────────────────── BOSNIA AND HERZEGOVINA ─────────────────────────────
  {
    key: "dest-bih",
    slug: "repatriation-to-bosnia",
    title: "Repatriation of a Body to Bosnia and Herzegovina",
    description:
      "Repatriation to Bosnia and Herzegovina from Germany, Austria, Scandinavia and the Netherlands: BiH permit, entity form, routes to Banja Luka and Sarajevo.",
    h1: "Repatriation to Bosnia and Herzegovina",
    crumb: "Repatriation to Bosnia",
    lead: "We repatriate the deceased from Germany, Austria, Switzerland, Scandinavia, the Netherlands, Belgium and the rest of Europe to any place of burial in Bosnia and Herzegovina — in Republika Srpska, the Federation of BiH or Brčko District. We obtain the permit from the BiH mission, prepare the entity form for the cemetery and drive the coffin all the way to the place of burial.",
    sections: [
      {
        h: "Who this page is for",
        p: [
          "People from Bosnia and Herzegovina have lived across Europe for decades: some went to Germany and Austria as workers in the 1960s and 1970s, others found refuge in Switzerland, Sweden, Denmark, Norway or the Netherlands in the 1990s. Many of them wish to be buried in their home town or village, next to their parents. When that moment comes, the family needs someone who can organise the whole repatriation from start to finish.",
          "The process always combines three elements: the documents of the country where the person died, the permit of Bosnia and Herzegovina for the remains to enter, and transport in a specialised funeral vehicle, in a hermetically sealed coffin approved for international transport.",
        ],
      },
      {
        h: "The BiH entry permit (laissez-passer)",
        p: [
          "A Serbian sprovodnica is not valid for a burial in Bosnia and Herzegovina. The entry permit — a laissez-passer for the transfer of human remains — is issued by the BiH embassy or consulate in the country where the death occurred. In Germany, according to the German Federal Foreign Office, these are the Embassy in Berlin (Berlin, Brandenburg, Hamburg, Mecklenburg-Western Pomerania, Saxony-Anhalt, Schleswig-Holstein) and the Consulates General in Frankfurt (Hesse, Bremen, Lower Saxony, North Rhine-Westphalia), Munich (Bavaria, Saxony, Thuringia) and Stuttgart (Baden-Württemberg, Rhineland-Palatinate, Saarland).",
          "There is no single published list of attachments for all BiH missions, and practice differs. A typical set, based on published consular instructions, includes:",
        ],
        list: [
          "a request from the funeral company carrying out the transport and from the next of kin;",
          "the completed health-authority form for the entity where the cemetery is located;",
          "the death certificate and a statement that the deceased did not have an infectious disease;",
          "a certificate that the body has been prepared, or a cremation certificate for an urn;",
          "confirmation from a funeral service in BiH that it will receive the deceased;",
          "the passport of the deceased or, failing that, a birth certificate and proof of citizenship;",
          "confirmation that the coffin or urn meets international rules and contains only the remains of the deceased.",
        ],
      },
      {
        h: "Federation, Republika Srpska or Brčko District: the entity form",
        p: [
          "What sets Bosnia apart from Serbia is the entity form. The request goes to the health authorities of the entity where the cemetery lies: for the Federation of BiH, the Federal Ministry of Health and the Federal Ministry of the Interior in Sarajevo; for Republika Srpska, the Ministry of Health and Social Welfare in Banja Luka; for Brčko District, the Department of Health and Other Services of the District Government. The forms are submitted through the BiH mission together with the other documents.",
          "The location of the cemetery decides, not the place of birth or residence. This matters where the entities meet: a cemetery in East Sarajevo (Istočno Sarajevo) belongs to Republika Srpska, while one in the city of Sarajevo falls under the Federation. We therefore confirm the exact cemetery and municipality with the family before anything is submitted.",
          "The form records the deceased's details, the vehicle, any escort, the border crossing into BiH and the cemetery; the Federation and Brčko forms also ask for the vehicle registration and the driver's name. A medical report on the cause of death is attached, with a certified translation unless it is written in Latin script or English (the Federation form also accepts German), and in the Federation and Brčko District proof that a grave has been reserved. Route and vehicle must therefore be fixed before the request goes in.",
        ],
      },
      {
        h: "Routes and distances to Banja Luka and Sarajevo",
        p: [
          "From Germany, Austria and Switzerland the road to Banja Luka and Prijedor usually runs through Slovenia and Croatia, along the motorway to Okučani and on towards Gradiška. The old bridge over the Sava at Gradiška partly collapsed in May 2026 and the new crossing operates only provisionally, so crossing conditions change; we check them before every departure and choose another crossing if necessary. For Mostar and western Herzegovina the route often follows the Dalmatian motorway towards Bijača. Road distances without breaks:",
        ],
        list: [
          "Munich: Banja Luka about 730 km, Sarajevo about 950 km",
          "Stuttgart: Banja Luka about 970 km, Sarajevo about 1,180 km",
          "Frankfurt: Banja Luka about 1,080 km, Sarajevo about 1,300 km",
          "Hamburg: Banja Luka about 1,470 km, Sarajevo about 1,660 km",
          "Vienna: Banja Luka about 550 km, Sarajevo about 740 km; Graz: about 370 km and 590 km",
          "Zurich: Banja Luka about 1,040 km, Sarajevo about 1,260 km",
          "Amsterdam: Banja Luka about 1,510 km, Sarajevo about 1,730 km; Brussels: about 1,470 km and 1,690 km",
          "Copenhagen: Banja Luka about 1,940 km, Sarajevo about 2,130 km; Stockholm: about 2,590 km and 2,780 km; Oslo: about 2,530 km and 2,730 km",
        ],
      },
      {
        h: "Border, transit and customs on the way to Bosnia",
        p: [
          "Bosnia and Herzegovina is not in the EU, so there are passport and customs checks on entry, where the BiH permit and the documents of the country of death are presented. When the route runs through Croatia, no separate Croatian transit permit is needed: according to the guidance of the Croatian Ministry of Foreign Affairs, the permit of the destination country is sufficient.",
          "It is different when the deceased reaches Bosnia via Serbia — for example to Bijeljina through the Sremska Rača crossing, or to Zvornik through Mali Zvornik. Serbia then requires a transit sprovodnica, issued on the basis of all the documents plus the BiH permit. Because the route affects both the entity form and the need for a Serbian transit permit, we decide on it before any application is made.",
        ],
      },
      {
        h: "Documents from the country of death: multilingual extract or apostille",
        p: [
          "The first set of papers always comes from the country where the person died: a medical certificate of death, the death certificate and an export permit — a Leichenpass in Germany, Austria and Switzerland, a laissez-passer in the Netherlands and Belgium. Like Germany, Austria, Switzerland, the Netherlands and Belgium, Bosnia and Herzegovina is party to CIEC Convention No. 16, so a multilingual death certificate from those countries is generally accepted without legalisation.",
          `Documents from Sweden, Denmark and Norway are legalised with an apostille and translated. In Sweden the death record is held by the tax agency Skatteverket; in Denmark a ligpas is needed to take a coffin across the border; in Norway the police must permit the coffin to leave the country and a certificate that the death was not caused by an infectious disease (smitteattest) is required. We request the BiH permit in parallel with these documents so that it does not add days. Each paper is explained on the page ${a("/en/documents-for-repatriation", "documents for repatriation")}.`,
        ],
      },
      {
        h: "Bosnian funeral traditions, air transport and timing",
        p: [
          "For Muslim families, the ritual washing (ghusl) and shrouding are usually carried out in the country of death, before the coffin is closed, and the janazah is arranged once the arrival time is known. Catholic families from Herzegovina and Posavina arrange Mass and burial with their parish, and Orthodox families with their parish priest. Tell us what matters to your family and we will plan the preparation around it.",
          "For very long journeys, for example from Scandinavia or Spain, air freight is an option, with the airports of Sarajevo, Banja Luka, Tuzla and Mostar depending on flights and the place of burial; we drive the coffin from the airport to the cemetery. From the first call to handover, expect roughly 1–3 days from Austria, 2–4 days from Germany or Switzerland, 3–5 days from the Netherlands, Belgium or Denmark, and 4–7 days from Sweden or Norway.",
        ],
      },
    ],
    faqs: [
      {
        q: "Who issues the permit for repatriation of a body to Bosnia?",
        a: "The embassy or consulate of Bosnia and Herzegovina in the country where the death occurred. The Serbian mission does not issue it. The application includes the form for the Federation of BiH, Republika Srpska or Brčko District, depending on where the cemetery is.",
      },
      {
        q: "How far is it from Germany to Bosnia?",
        a: "It depends on the city. From Munich to Banja Luka it is about 730 km, from Frankfurt about 1,080 km and from Hamburg about 1,470 km; to Sarajevo the same cities are about 950, 1,300 and 1,660 km away. In Germany, the BiH Embassy in Berlin and the Consulates General in Frankfurt, Munich and Stuttgart are responsible, according to the federal state.",
      },
      {
        q: "Is a Serbian sprovodnica needed for burial in Bosnia?",
        a: "Only if the route passes through Serbia, in which case a Serbian transit sprovodnica is required. When the vehicle enters BiH directly from Croatia, the permit of the BiH mission and the documents of the country of death are enough.",
      },
      {
        q: "The cemetery is in East Sarajevo. Which form applies?",
        a: "The Republika Srpska form, because East Sarajevo belongs to that entity. For cemeteries in the city of Sarajevo the Federation form is used. If you are unsure, send us the name of the cemetery and we will check.",
      },
      {
        q: "Do you repatriate from Sweden, Norway or the Netherlands to Bosnia?",
        a: "Yes. From Stockholm to Sarajevo it is about 2,780 km by road and from Oslo about 2,730 km, so families often choose air freight to Sarajevo or Banja Luka. From Amsterdam the road distance to Banja Luka is about 1,510 km, and road transport is common.",
      },
      {
        q: "Can the ghusl be performed before the repatriation?",
        a: "Yes. The ritual washing and shrouding are usually done in the country of death before the coffin is sealed. Let us know in the first call and we will include it in the plan.",
      },
    ],
    relatedLinks: [
      { href: "/en/repatriation-from-germany", title: "Repatriation from Germany" },
      { href: "/en/repatriation-from-austria", title: "Repatriation from Austria" },
      { href: "/en/documents-for-repatriation", title: "Documents for repatriation" },
      { href: "/en/repatriation-to-montenegro", title: "Repatriation to Montenegro" },
      { href: "/en/contact", title: "Contact" },
    ],
    areaServed: "Bosnia and Herzegovina",
  },

  // ───────────────────────────── MONTENEGRO ─────────────────────────────
  {
    key: "dest-montenegro",
    slug: "repatriation-to-montenegro",
    title: "Repatriation of a Body to Montenegro from Europe",
    description:
      "Repatriation of a body to Montenegro from Germany, Austria, Switzerland, Scandinavia or Benelux: Montenegrin permit, road routes, transit and flights.",
    h1: "Repatriation to Montenegro",
    crumb: "Repatriation to Montenegro",
    lead: "When someone from Montenegro dies in Germany, Austria, Switzerland, Scandinavia, the Netherlands or another European country, we bring them home to Podgorica, Nikšić, the coast or the north. We obtain the documents of the country of death and the permit of Montenegro's mission, choose the route and handle the border formalities. The family deals with one person, at any hour.",
    sections: [
      {
        h: "Bringing someone home to Montenegro",
        p: [
          "Many Montenegrin families have relatives who have lived for years in Germany, Austria, Switzerland or further north — people from Bijelo Polje, Berane, Rožaje and Pljevlja, as well as from Podgorica, Nikšić and the coast. When one of them dies far from home, the family's wish is almost always the same: a burial in their own town or village, among their own people.",
          "This page covers repatriation into Montenegro from western and northern Europe. If the death occurred in Montenegro and the burial is to take place elsewhere, the procedure runs the other way round; call us and we will explain it.",
        ],
      },
      {
        h: "The permit from Montenegro's embassy or consulate",
        p: [
          "For a burial in Montenegro, the permit for the remains to enter the country is issued by Montenegro's embassy or consulate in the country where the death occurred. In Germany these are the Embassy in Berlin and the Consulate General in Frankfurt am Main, whose district, according to the German Federal Foreign Office, covers Bavaria, Baden-Württemberg, Bremen, Hamburg, Hesse, Lower Saxony, North Rhine-Westphalia, Rhineland-Palatinate, Saarland and Thuringia.",
          "Montenegro has no single published list of attachments, so we confirm the exact requirements with the responsible mission for each case. The basis is the same as elsewhere in the region: the passport or identity card of the deceased, the death certificate, a medical certificate of the cause of death, the export permit of the country of death and details of the place of burial. Montenegro is party to CIEC Convention No. 16, so a multilingual death certificate from Germany, Austria, Switzerland, the Netherlands or Belgium is generally accepted without legalisation.",
        ],
      },
      {
        h: "Two road routes: through Serbia or along the Croatian coast",
        p: [
          "From Central Europe there are two main directions, and the choice depends on the starting point, the place of burial and the season. Through Serbia, the vehicle takes the motorway to Belgrade, then continues via Čačak and Zlatibor towards Prijepolje and the Gostun–Dobrakovo crossing, which leads straight to Bijelo Polje. For Rožaje and Berane the Špiljani–Dračenovac crossing on the road from Novi Pazar is also used, and for Pljevlja the Jabuka–Ranče crossing.",
          "The other direction runs through Croatia. For Herceg Novi, Kotor, Tivat and Budva the route follows the coast to the Karasovići–Debeli Brijeg crossing near Igalo. For Nikšić and the interior a route through Herzegovina, via Trebinje and the Klobuk–Ilino Brdo crossing, is also possible. In winter, when the mountain passes in the north are difficult, we sometimes choose a longer but safer road.",
        ],
      },
      {
        h: "Distances to Podgorica",
        p: ["Road distances to Podgorica, rounded and without breaks; mandatory rest periods for drivers come on top:"],
        list: [
          "Germany: Munich about 1,170 km, Stuttgart about 1,410 km, Frankfurt about 1,570 km, Berlin about 1,650 km, Hamburg about 1,950 km",
          "Austria and Switzerland: Graz about 880 km, Salzburg about 1,040 km, Vienna about 1,060 km, Zurich about 1,480 km",
          "Netherlands and Belgium: Brussels about 1,960 km, Amsterdam about 2,000 km, Rotterdam about 2,010 km",
          "Scandinavia: Copenhagen about 2,420 km, Gothenburg about 2,730 km, Oslo about 3,020 km, Stockholm about 3,070 km",
          "Closer to home: Zagreb about 710 km, Ljubljana about 760 km, Milan about 1,190 km",
        ],
      },
      {
        h: "Transit through Serbia or Bosnia, and customs",
        p: [
          "On the way to Montenegro the deceased almost always crosses at least one country that is neither the country of death nor the country of burial. When the route runs through Serbia, the Serbian Ministry of Foreign Affairs requires a transit sprovodnica, which is issued only once all documents and the permit of the country of burial are in hand — in other words, after the Montenegrin permit. It is an extra step, but for someone coming from Vienna or Graz the road through Serbia is often the most practical.",
          "If the route passes through Bosnia and Herzegovina, we check the transit rules with the BiH mission before departure. Croatia requires no separate transit permit, but its border with Montenegro and with Bosnia is an external EU border with customs control. Serbia, Bosnia and Montenegro are not EU members, so customs formalities take place at every crossing between them. We deal with all of this; the family simply hears from us when the vehicle has crossed the border.",
        ],
      },
      {
        h: "Flying to Podgorica or Tivat",
        p: [
          "From Scandinavia, the Netherlands, Belgium or France the road to Montenegro is very long: about 3,070 km from Stockholm, 2,420 km from Copenhagen and 2,020 km from Paris to Podgorica. In those cases we consider air freight to Podgorica or Tivat airport, with special air-cargo packaging for the coffin and our own transport from the airport to the place of burial.",
          "Flying is not always quicker. It requires cargo space to be booked and adds airport procedures at both ends, so from Germany, Austria and Switzerland road transport is usually just as fast and simpler. We explain both options in the first call and recommend the one that fits the date of the funeral.",
        ],
      },
      {
        h: "Place of burial and what the family needs to do",
        p: [
          "The last part of the journey depends on where the burial takes place: Podgorica, reachable from both north and south; Nikšić, close to eastern Herzegovina; Bar and Budva on the coast; Herceg Novi, the first town after the Debeli Brijeg crossing; Bijelo Polje and Berane in the north, nearest to the crossings from Serbia; and Pljevlja in the far north, reached from Serbia via Prijepolje.",
          `From you we need the name of the deceased, the place of death, the place of burial in Montenegro and a copy of the passport or identity card. Agree a provisional date with the cemetery or religious community, and confirm it once the vehicle has set off. The whole process usually takes 1–3 days from Austria, 2–4 days from Germany or Switzerland, 3–5 days from the Netherlands or Belgium and 4–7 days from Sweden or Norway. What affects the price is explained on the ${a("/en/repatriation-cost", "repatriation cost")} page.`,
        ],
      },
    ],
    faqs: [
      {
        q: "Who issues the permit for repatriation to Montenegro?",
        a: "Montenegro's embassy or consulate in the country where the death occurred. In Germany, that is the Embassy in Berlin or the Consulate General in Frankfurt. We submit the application together with the documents of the country of death.",
      },
      {
        q: "How far is it to transport a body from Germany to Montenegro?",
        a: "From Munich to Podgorica it is about 1,170 km by road, from Stuttgart about 1,410 km and from Frankfurt about 1,570 km. With the compulsory rest periods for drivers the journey takes longer than the driving time, and we choose the route according to the place of burial.",
      },
      {
        q: "Is a Serbian sprovodnica needed if the coffin travels to Montenegro through Serbia?",
        a: "Yes, a transit sprovodnica is required for passing through Serbia. It is issued on the basis of all documents and the Montenegrin permit, so we obtain it last, shortly before departure.",
      },
      {
        q: "Which border crossing does the coffin use to enter Montenegro?",
        a: "That depends on the route and the place of burial. From Serbia it is usually Gostun–Dobrakovo towards Bijelo Polje, from the Croatian coast Debeli Brijeg towards Herceg Novi, and from Herzegovina Klobuk–Ilino Brdo towards Nikšić.",
      },
      {
        q: "Can you repatriate from the Netherlands or Sweden to Montenegro?",
        a: "Yes. From Amsterdam to Podgorica it is about 2,000 km by road and from Stockholm about 3,070 km, so for Scandinavia air freight to Podgorica or Tivat is usually the better choice. The Dutch multilingual death certificate is accepted without legalisation; Swedish documents need an apostille and translation.",
      },
      {
        q: "Do we also need a funeral home in Montenegro?",
        a: "We deliver the coffin to the cemetery, chapel or family home. The grave and the burial itself are arranged by the family with the cemetery or religious community as usual; if a local funeral home is to take over at that point, we coordinate the handover with them.",
      },
    ],
    relatedLinks: [
      { href: "/en/repatriation-to-serbia", title: "Repatriation to Serbia" },
      { href: "/en/repatriation-to-bosnia", title: "Repatriation to Bosnia and Herzegovina" },
      { href: "/en/repatriation-from-switzerland", title: "Repatriation from Switzerland" },
      { href: "/en/documents-for-repatriation", title: "Documents for repatriation" },
      { href: "/en/contact", title: "Contact" },
    ],
    areaServed: "Montenegro",
  },

  // ───────────────────────────── NORTH MACEDONIA ─────────────────────────────
  {
    key: "dest-macedonia",
    slug: "repatriation-to-north-macedonia",
    title: "Repatriation of a Body to North Macedonia",
    description:
      "Repatriation of remains to North Macedonia from Germany, Switzerland, Austria and Scandinavia: Macedonian permit, Serbian transit permit, routes to Skopje.",
    h1: "Repatriation to North Macedonia",
    crumb: "Repatriation to North Macedonia",
    lead: "We bring the deceased from Germany, Switzerland, Austria, Italy, Scandinavia and the rest of Europe to any place of burial in North Macedonia — Skopje, Kumanovo, Tetovo, Bitola, Ohrid or elsewhere. Because the road runs through Serbia, we obtain a Serbian transit permit in addition to the permit of North Macedonia's mission, and the family has one contact person throughout.",
    sections: [
      {
        h: "Repatriation to North Macedonia from Western Europe",
        p: [
          "The community from North Macedonia in Germany, Switzerland, Austria and Italy is large and long-established: many left as workers several decades ago, and their children and grandchildren live there today. Ties to the home region remain strong, and after a death the family almost always wishes for a burial in the place the deceased came from.",
          "Repatriation to North Macedonia differs from repatriation to Serbia in one important respect: the country of burial and the country of transit are not the same. Two permits are therefore needed — North Macedonia's for entry and Serbia's for transit — and the order in which they are obtained determines when the vehicle can leave.",
        ],
      },
      {
        h: "The permit from North Macedonia's embassy or consulate",
        p: [
          "For a burial in North Macedonia, the permit for the remains to enter is issued by North Macedonia's embassy or consulate in the country where the death occurred. In Germany, according to the German Federal Foreign Office, these are the Embassy in Berlin, its branch office in Bonn (responsible for North Rhine-Westphalia, Hesse, Lower Saxony, Rhineland-Palatinate and Saarland) and the Consulate General in Munich (Bavaria and Baden-Württemberg).",
          "The Macedonian Ministry of Foreign Affairs does not publish a single list of attachments for this permit, so we confirm the requirements with the responsible mission in each case. The core is formed by the documents of the country of death — a medical certificate of death, the death certificate and the export permit — together with the passport of the deceased and the place of burial. North Macedonia is party to CIEC Convention No. 16, so a multilingual death certificate from Germany, Austria, Switzerland, the Netherlands or Belgium is generally accepted without legalisation.",
        ],
      },
      {
        h: "Why a Serbian transit permit is needed",
        p: [
          "When the burial takes place in a third country and the remains are carried across Serbian territory, the Serbian Ministry of Foreign Affairs requires a transit sprovodnica. It needs all the documents required for an ordinary sprovodnica plus the permit of the country of burial. The procedure therefore runs in this order:",
        ],
        list: [
          "documents of the country of death: certificate of death, death certificate and transport permit (for example a Leichenpass or laissez-passer);",
          "the permit of North Macedonia's embassy or consulate for the remains to enter;",
          "the transit sprovodnica from the responsible Serbian mission;",
          "departure of the vehicle, with all originals travelling with the coffin.",
        ],
        ordered: true,
      },
      {
        h: "The route through Serbia and the Preševo–Tabanovce crossing",
        p: [
          "From Germany, Austria and Switzerland the vehicle reaches Serbia via Croatia or Hungary and then follows the motorway across the whole country — past Belgrade and Niš to Preševo. The border with North Macedonia is crossed at Preševo–Tabanovce, from where Kumanovo is very close and Skopje a short drive away. Neither Serbia nor North Macedonia is in the EU, so customs formalities apply both on entering Serbia and on crossing into North Macedonia. Road distances to Skopje, without breaks:",
        ],
        list: [
          "Germany: Munich about 1,370 km, Stuttgart about 1,610 km, Berlin about 1,670 km, Frankfurt about 1,720 km, Hamburg about 1,970 km",
          "Austria, Switzerland and Italy: Graz about 1,010 km, Vienna about 1,050 km, Milan about 1,450 km, Zurich about 1,680 km",
          "Netherlands and Belgium: Brussels about 2,110 km, Amsterdam about 2,150 km, Rotterdam about 2,170 km",
          "Scandinavia: Copenhagen about 2,440 km, Gothenburg about 2,740 km, Oslo about 3,040 km, Stockholm about 3,090 km",
        ],
      },
      {
        h: "Skopje, Kumanovo, Tetovo, Bitola, Ohrid, Prilep and Štip",
        p: [
          "We deliver to any place in the country, and the final stretch depends on where the burial takes place. Kumanovo is the first larger town after the border, and Skopje is the hub from which the journey continues. Tetovo lies west of Skopje on the road to Gostivar, while Štip is to the east. Prilep, Bitola and Ohrid are in the south and west, so the drive from the border is longest there.",
          "Macedonian funeral traditions vary by family and faith. Orthodox families arrange the funeral service with the parish in the place of burial, while for Muslim families the ritual washing and shrouding are usually carried out in the country of death, before the coffin is closed. Tell us in advance what is important to you so that we can match the preparation to your customs and the date of the funeral.",
        ],
      },
      {
        h: "Flying to Skopje or Ohrid",
        p: [
          "For very long journeys we also consider air freight to Skopje or Ohrid airport. From Stockholm to Skopje it is about 3,090 km by road, from Oslo about 3,040 km and from Copenhagen about 2,440 km — distances where a flight can shorten the journey by several days. The coffin needs special packaging for air cargo, and we drive it from the airport to the place of burial.",
          "From Germany, Austria and Switzerland, road transport is usually the more sensible choice. The flight itself is short, but cargo booking, airport procedures and the transfers to and from the airport all take time, whereas the funeral vehicle travels door to door without the coffin being moved.",
        ],
      },
      {
        h: "From Greece, Scandinavia and other special cases",
        p: [
          "When the death occurred in Greece, the road to North Macedonia does not pass through Serbia, so no transit sprovodnica is needed. From Thessaloniki to Skopje it is about 230 km and from Athens about 690 km, via the Evzoni–Bogorodica crossing. Greece signed but never ratified the CIEC convention on multilingual extracts, so Greek documents are legalised with an apostille and translated.",
          `Documents from Sweden, Denmark and Norway also need an apostille and translation, which adds a few days to the preparation. In total, expect roughly 1–3 days from Austria, 2–4 days from Germany, Switzerland or Italy, 3–5 days from Greece, the Netherlands or Belgium and 4–7 days from Sweden or Norway. The complete list of papers is on the page ${a("/en/documents-for-repatriation", "documents for repatriation")}.`,
        ],
      },
    ],
    faqs: [
      {
        q: "Who issues the permit for repatriation to North Macedonia?",
        a: "North Macedonia's embassy or consulate in the country where the death occurred. In Germany these are the Embassy in Berlin, its branch office in Bonn and the Consulate General in Munich, depending on the federal state.",
      },
      {
        q: "Why is a Serbian permit needed for a burial in North Macedonia?",
        a: "Because the road from Western Europe runs through Serbia. For transit through Serbia the Serbian Ministry of Foreign Affairs requires a transit sprovodnica, which is issued only after the Macedonian permit has been obtained.",
      },
      {
        q: "How many kilometres is it from Germany to North Macedonia?",
        a: "From Munich to Skopje it is about 1,370 km, from Stuttgart about 1,610 km and from Frankfurt about 1,720 km. Because of compulsory driver rest periods the journey takes longer than the pure driving time.",
      },
      {
        q: "Do you repatriate from Switzerland to North Macedonia?",
        a: "Yes. From Zurich to Skopje it is about 1,680 km by road. Switzerland is outside the EU, so there are customs formalities on leaving the country, and the Leichenpass is issued by the cantonal authority; we take care of both, as well as the two permits.",
      },
      {
        q: "Which border crossing is used to enter North Macedonia?",
        a: "Travelling through Serbia, usually Preševo–Tabanovce on the motorway towards Kumanovo and Skopje. From Greece the coffin enters via Evzoni–Bogorodica.",
      },
      {
        q: "Is flying faster for repatriation to Skopje?",
        a: "Over long distances, for example from Scandinavia or Spain, it often is. From Germany and Austria a funeral vehicle usually arrives just as quickly, without transfers or airport procedures.",
      },
    ],
    relatedLinks: [
      { href: "/en/repatriation-to-serbia", title: "Repatriation to Serbia" },
      { href: "/en/repatriation-from-germany", title: "Repatriation from Germany" },
      { href: "/en/repatriation-from-switzerland", title: "Repatriation from Switzerland" },
      { href: "/en/documents-for-repatriation", title: "Documents for repatriation" },
      { href: "/en/contact", title: "Contact" },
    ],
    areaServed: "North Macedonia",
  },

  // ───────────────────────────── CONTACT ─────────────────────────────
  {
    key: "contact",
    slug: "contact",
    title: "Contact Us 24/7 – Funeral Repatriation from Europe",
    description:
      "Contact us 24/7 by phone, WhatsApp, Viber or e-mail about repatriation to Serbia, Bosnia, Montenegro or North Macedonia. Calls from any country welcome.",
    h1: "Contact us — day and night",
    crumb: "Contact",
    lead: "You can reach us at any hour, every day of the year, by phone, WhatsApp, Viber or e-mail. Calls and messages are welcome from any country. Below you will find what to have ready for the first conversation and what happens once you have called.",
    sections: [
      {
        h: "How to reach us",
        p: [
          "We are a funeral company based in Belgrade, Serbia, so our phone number is a Serbian one. Dial it with the international prefix +381 from wherever you are:",
        ],
        list: [
          `Phone: <a href="tel:+381642492849" class="text-primary">+381 64 249 28 49</a> — available 24/7`,
          "WhatsApp and Viber: the same number, +381 64 249 28 49",
          `E-mail: <a href="mailto:kontakt@transportpokojnika.com" class="text-primary">kontakt@transportpokojnika.com</a>`,
        ],
      },
      {
        h: "A 24 hour funeral service, in English and German",
        p: [
          "Deaths do not keep office hours, and neither do we. If you call at night or at the weekend, you will still reach someone who can start the process. Belgrade is on Central European Time, the same as Germany, Austria, Switzerland, Scandinavia and the Benelux countries, and one hour ahead of the UK.",
          "We answer enquiries in English by e-mail and WhatsApp, and our team speaks German, so hospitals, registry offices and funeral directors in German-speaking countries can also talk to us directly by phone. If you are not sure how to begin, simply send a short WhatsApp message in English with your name and the place of death, and we will reply.",
        ],
      },
      {
        h: "What to have ready for the first call",
        p: [
          "You do not need every detail before you contact us, and nothing has to be perfect. The following helps us give you an exact price and a realistic timetable straight away:",
        ],
        list: [
          "the full name and date of birth of the deceased;",
          "where the deceased is now — the hospital, care home, mortuary or address — and the town where the death occurred;",
          "the last place of residence, which determines the responsible embassy or consulate;",
          "nationality, and a photo or copy of the passport or identity card;",
          "the place of burial: town or village, and the cemetery if already known;",
          "whether the death is being investigated by the police or a prosecutor;",
          "burial or cremation, and any religious wishes;",
          "if applicable, the name of the insurer or assistance company and the case number.",
        ],
      },
      {
        h: "What happens after the call",
        p: ["Once we have the basic details, the work begins straight away, usually in this order:"],
        list: [
          "We give you the exact price during that first conversation, with no hidden costs.",
          "If an authority requires it, we send you a short authorisation to sign so that we can act on the family's behalf.",
          "We contact the hospital, local authorities and any local funeral director, and arrange collection and preparation of the deceased.",
          "We obtain the documents of the country of death and the entry permit — the Serbian sprovodnica or the permit of Bosnia and Herzegovina, Montenegro or North Macedonia — plus a transit permit where the route requires one.",
          "We agree the departure and arrival times with you, and your contact person keeps you informed until the coffin is handed over.",
        ],
        ordered: true,
      },
      {
        h: "Sending documents and staying in touch from abroad",
        p: [
          "Photos of documents sent by WhatsApp or e-mail are enough for us to start; originals are needed later for the applications, and we tell you exactly which ones and where they should go. If several relatives are involved, choose one person to be our main point of contact, so that information does not get lost between family members in different countries.",
          `WhatsApp and Viber calls work over the internet, which is often the simplest option from the UK, Scandinavia or the Netherlands. Before the call, you may find it helpful to read the pages on ${a("/en/documents-for-repatriation", "documents for repatriation")} and ${a("/en/repatriation-cost", "repatriation cost")}.`,
        ],
      },
      {
        h: "For insurers, assistance companies, hospitals and funeral directors",
        p: [
          "Case handlers at insurers and assistance companies are welcome to send the case details by e-mail; we confirm receipt and name the contact person for the case. Hospitals, social workers and funeral directors abroad can call us at any hour. If you are a funeral director handling the first part of the procedure locally, tell us which documents you have already obtained, and we will take over from there.",
          "If the death was sudden or is under investigation, contact us anyway. A prosecutor's release or a post-mortem can delay the documents, but we prepare everything else in parallel so that no time is lost once the deceased is released.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I call you from the UK, Sweden or the Netherlands?",
        a: "Yes. Calls and messages are welcome from any country. Dial +381 64 249 28 49, or use WhatsApp or Viber on the same number if you prefer to call over the internet.",
      },
      {
        q: "Do you answer in English?",
        a: "Yes, we answer enquiries in English by e-mail and WhatsApp. On the phone our team speaks German. A short written message in English is a good way to begin, and we will reply as soon as possible, at any hour.",
      },
      {
        q: "Will I get a price during the first call?",
        a: "Yes. Once we know where the deceased is and where the burial will take place, we give you the exact price in the first conversation, with no hidden costs added later.",
      },
      {
        q: "Is there a contact form?",
        a: "No. We prefer to speak to you directly, so please call, write on WhatsApp or Viber, or send an e-mail to kontakt@transportpokojnika.com. That way the process can start immediately.",
      },
      {
        q: "It is the middle of the night. Should I wait until morning?",
        a: "There is no need to wait. We are available 24/7, and calling early gives us time to contact the hospital and the authorities as soon as their offices open.",
      },
    ],
    relatedLinks: [
      { href: "/en/", title: "Funeral repatriation to the Balkans" },
      { href: "/en/repatriation-to-serbia", title: "Repatriation to Serbia" },
      { href: "/en/documents-for-repatriation", title: "Documents for repatriation" },
      { href: "/en/repatriation-cost", title: "Repatriation cost" },
    ],
  },
];
