/** English pages (en-b) — rendered by renderLocalePage() in scripts/build-site.js. Fields: see the i18n brief. */
const a = (href, text) => `<a href="${href}" class="text-primary">${text}</a>`;

module.exports = [
  {
    key: "from-germany",
    slug: "repatriation-from-germany",
    title: "Repatriation of Remains from Germany to Serbia",
    description:
      "Repatriation of remains from Germany to Serbia, Bosnia, Montenegro and North Macedonia: Leichenpass, registry office, Serbian permit and transport, 24/7.",
    h1: "Repatriation from Germany to Serbia, Bosnia, Montenegro and North Macedonia",
    crumb: "From Germany",
    lead: "When someone dies in Germany and the family wants the funeral to take place in Serbia, Bosnia and Herzegovina, Montenegro or North Macedonia, the German paperwork and the permit of the destination country must be ready before the coffin can leave. We collect the deceased anywhere in Germany, obtain every document and drive to the place of burial in a specialised funeral vehicle — day and night, with one contact person for the family.",
    sections: [
      {
        h: "What happens when someone dies in Germany",
        p: [
          "First, a doctor examines the deceased and completes the death certificate (Todesbescheinigung, still often called Totenschein). It records the time and cause of death and states whether the death was natural, unnatural or of unclear cause — and that one box decides how quickly everything else can move. In a hospital or care home the staff call the doctor; after a death at home, the family does.",
          "The death is then registered at the registry office (Standesamt) responsible for the place where the person died, which issues the civil death certificate (Sterbeurkunde). For Serbia and the other destination countries we request the multilingual version, the internationale Sterbeurkunde, which is what English speakers usually mean by an international death certificate for Germany. Germany and Serbia both apply CIEC Convention No. 16, so this extract is generally accepted without legalisation or translation.",
          "If the hospital has already called a German funeral director (Bestatter), nothing is lost. Please speak to us before you sign an order, though, because services provided by a local firm are invoiced by that firm separately.",
        ],
      },
      {
        h: "Leichenpass in Germany: who issues it in each state",
        p: [
          "Translated literally, Leichenpass means “corpse passport”: it is the permit that allows human remains to be taken out of Germany. Burial law is made by the sixteen federal states (Länder), so the issuing office differs. The precondition is the same everywhere: the registry office must first confirm that the death has been registered, usually with a note on the death certificate.",
          "Some examples of how this works in practice:",
        ],
        list: [
          "<strong>Bavaria:</strong> the municipality where the transport begins — in Munich the city's cemetery service (Städtische Friedhöfe München). If a personal document of the deceased is missing, the Standesamt can note a deferred registration (Zurückstellung), so the transport need not wait.",
          "<strong>Baden-Württemberg:</strong> the municipality in which the death occurred.",
          "<strong>Berlin:</strong> the citizens' services office (Amt für Bürgerdienste) of the responsible district authority — not the health office, as many people assume.",
          "<strong>Hamburg:</strong> one central office for the whole city, at the Wandsbek district authority.",
          "<strong>Hesse:</strong> in Frankfurt, the registry office that registers the death also issues the Leichenpass.",
          "<strong>North Rhine-Westphalia:</strong> a second official examination of the body (zweite Leichenschau), arranged by the health office (Gesundheitsamt), must confirm that there are no signs of a violent death before the permit is granted.",
          "<strong>Saxony and Thuringia:</strong> the health office of the place of death.",
          "<strong>Lower Saxony:</strong> the local authority, for example the Region Hannover.",
        ],
      },
      {
        h: "Unnatural or unclear death: prosecutor and autopsy",
        p: [
          "If the doctor marks the death as unnatural or unclear — after a road accident, a fall, a suicide or a sudden death at a young age — the police are informed and the public prosecutor's office (Staatsanwaltschaft) takes charge. The deceased cannot be released and no Leichenpass can be issued until the prosecutor grants a release (Freigabe). The prosecutor may also order a post-mortem examination (Obduktion).",
          "This is the most common reason for a delay of several days. While we wait, we prepare every other document and keep the family informed, so that the journey can start as soon as the release arrives.",
        ],
      },
      {
        h: "The Serbian permit (sprovodnica) and the six Serbian missions in Germany",
        p: [
          "For a burial in Serbia, the remains need Serbia's entry permit, called sprovodnica. It is issued by the Serbian embassy or consulate general responsible for the deceased's last place of residence — not the place of death. A family member or an authorised funeral company may apply, and we do this on the family's behalf. The responsible mission depends on the federal state:",
        ],
        list: [
          "Embassy of the Republic of Serbia in Berlin (consular section): Berlin, Brandenburg, Mecklenburg-Western Pomerania, Saxony, Saxony-Anhalt and Thuringia",
          "Consulate General of the Republic of Serbia in Hamburg: Hamburg, Lower Saxony, Bremen and Schleswig-Holstein",
          "Consulate General of the Republic of Serbia in Düsseldorf: North Rhine-Westphalia",
          "Consulate General of the Republic of Serbia in Frankfurt: Hesse, Rhineland-Palatinate and Saarland",
          "Consulate General of the Republic of Serbia in Munich: Bavaria",
          "Consulate General of the Republic of Serbia in Stuttgart: Baden-Württemberg",
        ],
      },
      {
        h: "Repatriation to Bosnia, Montenegro or North Macedonia from Germany",
        p: [
          `The sprovodnica is valid for Serbia only. For a funeral in ${a("/en/repatriation-to-bosnia", "Bosnia and Herzegovina")} — including Republika Srpska — in ${a("/en/repatriation-to-montenegro", "Montenegro")} or in ${a("/en/repatriation-to-north-macedonia", "North Macedonia")}, that country's own embassy or consulate in Germany issues the entry permit. The German documents are identical, so we apply on both sides at the same time.`,
          "Road transport to North Macedonia normally passes through Serbia, which requires an additional Serbian transit permit. Towards Banja Luka and northern Bosnia the route usually leads through Croatia towards Gradiška; crossing conditions there have changed recently and may change again, so we confirm the crossing shortly before departure.",
        ],
      },
      {
        h: "Distances from German cities",
        p: [
          "Road distances to Belgrade, Banja Luka, Sarajevo, Podgorica and Skopje, in that order:",
        ],
        list: [
          "Munich: about 940 km, 730 km, 950 km, 1,170 km and 1,370 km",
          "Stuttgart: about 1,180 km, 970 km, 1,180 km, 1,410 km and 1,610 km",
          "Frankfurt: about 1,290 km, 1,080 km, 1,300 km, 1,570 km and 1,720 km",
          "Cologne: about 1,470 km, 1,260 km, 1,480 km, 1,750 km and 1,900 km",
          "Düsseldorf: about 1,510 km, 1,300 km, 1,520 km, 1,790 km and 1,940 km",
          "Dortmund: about 1,500 km, 1,290 km, 1,510 km, 1,780 km and 1,940 km",
          "Berlin: about 1,240 km, 1,170 km, 1,370 km, 1,650 km and 1,670 km",
          "Hamburg: about 1,540 km, 1,470 km, 1,660 km, 1,950 km and 1,970 km",
          "Leipzig: about 1,150 km, 1,110 km, 1,280 km, 1,610 km and 1,580 km",
          "Dresden: about 1,050 km, 970 km, 1,170 km, 1,450 km and 1,480 km",
        ],
      },
      {
        h: "Road or air, and how long it takes",
        p: [
          "Most families choose road transport: the same vehicle goes from the place of collection directly to the place of burial, with no transfer between vehicles and no airport procedures. From southern Germany a flight is rarely faster once the transfers at both ends are counted. From the north, or when time is critical, air transport is an option — Frankfurt Airport, for example, has direct flights to Belgrade, and the coffin travels as air cargo with the same documents.",
          "The distances above are pure driving distances; mandatory rest periods for drivers make the real journey longer. The whole process usually takes 2–4 days from the first call to the handover. Doctors and funeral staff work around the clock, but registry offices and consulates work on weekdays only, so a death on a Friday evening usually means the paperwork starts on Monday.",
        ],
      },
      {
        h: "What to do when someone dies in Germany: your part",
        p: ["The family's part is small. This is all we need from you:"],
        list: [
          "Call us on +381 64 249 28 49. Calls and WhatsApp messages are welcome from Germany or any other country, at any hour, and Viber works on the same number. Our team speaks German and deals with German hospitals and offices directly; enquiries in English are answered by e-mail and WhatsApp.",
          "Tell us where the death occurred, where the deceased was registered as resident and where the funeral should take place.",
          "Send a copy of the passport or ID card and, if needed, sign the authorisation we send you.",
          "You receive the exact price in that first call, with no hidden costs, and one contact person keeps you informed until the handover.",
        ],
        ordered: true,
      },
    ],
    faqs: [
      {
        q: "How does repatriation from Munich to Serbia work?",
        a: "The Leichenpass comes from the city's cemetery service, and if the deceased lived in Bavaria, the sprovodnica is issued by the Serbian Consulate General in Munich. The road distance to Belgrade is about 940 km, roughly 10 hours of pure driving, so we usually travel by road and handle the Bavarian paperwork and the Serbian permit together.",
      },
      {
        q: "Can you transport a body from Frankfurt to Bosnia?",
        a: "Yes. From Frankfurt it is about 1,080 km to Banja Luka and about 1,300 km to Sarajevo. In Frankfurt the registry office issues both the death certificate and the Leichenpass, while the entry permit for Bosnia and Herzegovina comes from the Bosnian mission in Germany. We apply for all of it on the family's behalf.",
      },
      {
        q: "What is a Leichenpass in English?",
        a: "It is the German permit for taking human remains abroad — literally a “corpse passport”, in English usually called a transport permit for human remains. It travels with the coffin, is shown at border checks and must be attached to the application for the Serbian sprovodnica.",
      },
      {
        q: "Do German documents need to be translated for Serbia?",
        a: "Usually not. The multilingual death certificate issued by the Standesamt is accepted in Serbia, Bosnia and Herzegovina, Montenegro and North Macedonia without legalisation, because all of these countries apply CIEC Convention No. 16. That saves both the cost and the time of an apostille and translation.",
      },
      {
        q: "How long does repatriation from Germany take?",
        a: "Usually 2–4 days in total. The driving itself is the smaller part: Hamburg to Belgrade, for example, is about 1,540 km or around 15 hours of pure driving. Most of the time goes into the documents; an autopsy, a prosecutor's release or a public holiday can extend it.",
      },
      {
        q: "Do you repatriate from Berlin to North Macedonia?",
        a: "Yes. Berlin to Skopje is about 1,670 km by road. North Macedonia's mission in Germany issues the entry permit, and because the route passes through Serbia we also obtain the Serbian transit permit before departure.",
      },
    ],
    relatedLinks: [
      { href: "/en/repatriation-to-serbia", title: "Repatriation to Serbia" },
      { href: "/en/repatriation-to-bosnia", title: "Repatriation to Bosnia and Herzegovina" },
      { href: "/en/documents-for-repatriation", title: "Documents for repatriation" },
      { href: "/en/repatriation-cost", title: "Repatriation cost" },
      { href: "/en/repatriation-from-austria", title: "Repatriation from Austria" },
    ],
    areaServed: "Germany",
  },

  {
    key: "from-austria",
    slug: "repatriation-from-austria",
    title: "Repatriation from Austria to Serbia and Bosnia",
    description:
      "Repatriation from Austria to Serbia, Bosnia, Montenegro and North Macedonia: Totenbeschau, Leichenpass from the district authority, Serbian permit, 24/7.",
    h1: "Repatriation from Austria to Serbia, Bosnia, Montenegro and North Macedonia",
    crumb: "From Austria",
    lead: "Austria is home to many families from Serbia and Bosnia and Herzegovina, and the roads to the Balkans from there are short. We collect the deceased anywhere from Vienna and Burgenland to Tyrol and Vorarlberg, deal with the Austrian authorities in German and bring the coffin to the place of burial in Serbia, Bosnia and Herzegovina, Montenegro or North Macedonia.",
    sections: [
      {
        h: "What to do when someone dies in Austria",
        p: [
          "In Austria every death is followed by an official inspection of the body, the Totenbeschau. A doctor acting as coroner (Totenbeschauer) confirms the death and its cause in a written report, the Totenbeschaubefund. Hospitals and care homes arrange the inspection themselves; after a death at home, the coroner responsible for that municipality comes out. As a rule, the deceased is not moved before this inspection has taken place.",
          "With the coroner's report, the death is registered at the registry office (Standesamt) of the place where it occurred. We request the death certificate (Sterbeurkunde) in its multilingual form. Austria and Serbia both apply CIEC Convention No. 16, so Serbian and Bosnian authorities accept this extract without legalisation.",
          "In most cases the family does not have to travel to Austria for the paperwork. We work with copies of the documents and, where needed, a signed authorisation.",
        ],
      },
      {
        h: "Leichenpass or Überführungsbewilligung: district authority or Magistrat",
        p: [
          "The permit to take human remains out of Austria is called Leichenpass, and in some regional laws Überführungsbewilligung. It is issued by the district administrative authority (Bezirkshauptmannschaft). Statutory cities (Statutarstädte) run their own district administration, so there the city's Magistrat takes on this role.",
          "In practice: in Vienna the permit comes from the city's Magistrat; Graz, Linz, Wels, Steyr, Salzburg and Innsbruck are statutory cities as well, so their Magistrat is the usual address. Elsewhere — in Upper Austria, for instance, in districts such as Gmunden, Vöcklabruck or Braunau — the Bezirkshauptmannschaft decides. We submit the application with the coroner's report and the Sterbeurkunde and follow it up until the permit is issued.",
        ],
      },
      {
        h: "Death after an accident or of unclear cause",
        p: [
          "When the circumstances are not clear — a road accident, an accident at work, a fall or an unexpected death — the police are involved and the public prosecutor's office (Staatsanwaltschaft) can order a post-mortem examination (Obduktion). Until the prosecutor releases the body, neither the collection nor the Leichenpass is possible.",
          "That is the usual reason why an Austrian case takes longer than the typical 1–3 days. We prepare everything else in parallel, so no time is lost once the release comes.",
        ],
      },
      {
        h: "Serbian embassy in Vienna or consulate general in Salzburg?",
        p: [
          "Two Serbian missions in Austria issue the sprovodnica, Serbia's permit for bringing remains into the country. Which one handles the case depends on the federal state where the deceased last lived:",
        ],
        list: [
          "Embassy of the Republic of Serbia in Vienna (consular section): Vienna, Lower Austria, Burgenland, Styria and Carinthia",
          "Consulate General of the Republic of Serbia in Salzburg: Salzburg, Tyrol, Vorarlberg and Upper Austria",
        ],
      },
      {
        h: "Repatriation from Austria to Bosnia, Montenegro and North Macedonia",
        p: [
          `For a funeral outside Serbia, the entry permit is issued by the embassy or consulate of the destination country in Austria — ${a("/en/repatriation-to-bosnia", "Bosnia and Herzegovina")}, ${a("/en/repatriation-to-montenegro", "Montenegro")} or ${a("/en/repatriation-to-north-macedonia", "North Macedonia")}. If the road to North Macedonia passes through Serbia, we also obtain the Serbian transit permit.`,
          "From eastern Austria the route usually runs through Hungary; from Styria and Carinthia it goes through Slovenia and Croatia, which is the shortest way to Republika Srpska and northern Bosnia. Towards Banja Luka we drive towards Gradiška, where crossing conditions have been changing, so the exact crossing is decided just before departure.",
        ],
      },
      {
        h: "Distances from Austrian cities",
        p: ["Road distances to Belgrade, Banja Luka, Sarajevo, Podgorica and Skopje:"],
        list: [
          "Vienna: about 620 km, 550 km, 740 km, 1,060 km and 1,050 km",
          "Graz: about 580 km, 370 km, 590 km, 880 km and 1,010 km",
          "Linz: about 800 km, 580 km, 800 km, 1,090 km and 1,240 km",
          "Salzburg: about 810 km, 600 km, 820 km, 1,040 km and 1,240 km",
          "Innsbruck: about 980 km, 770 km, 990 km, 1,210 km and 1,410 km",
        ],
      },
      {
        h: "How repatriation from Austria works with us",
        p: [
          "On routes this short, road transport in a funeral vehicle is almost always simpler than a flight, because there is no transfer and no airport procedure. The steps are these:",
        ],
        list: [
          "You call +381 64 249 28 49 from Austria or anywhere else, at any hour; WhatsApp and Viber work on the same number. We speak German with Austrian hospitals, registry offices and authorities, and reply to English enquiries by e-mail and WhatsApp.",
          "We note where the death occurred, where the deceased was registered and where the funeral will be, and give you the exact price in that first call, with no hidden costs.",
          "We collect the deceased and obtain the Sterbeurkunde, the Leichenpass and the sprovodnica or the permit of the destination country.",
          "The deceased is placed in a hermetically sealed coffin approved for international transport and travels in a specialised funeral vehicle. Your contact person tells you about the departure, the border crossing and the expected arrival.",
        ],
        ordered: true,
      },
    ],
    faqs: [
      {
        q: "Repatriation from Vienna to Serbia: how long does it take?",
        a: "Usually 1–3 days in total. Vienna to Belgrade is about 620 km, roughly six hours of pure driving before rest periods and the border. If the deceased lived in Vienna, Lower Austria, Burgenland, Styria or Carinthia, the consular section of the Serbian embassy in Vienna issues the sprovodnica.",
      },
      {
        q: "Do you repatriate from Austria to Bosnia?",
        a: "Yes. From Graz it is about 370 km to Banja Luka and about 590 km to Sarajevo; from Vienna about 550 km and 740 km. The embassy or consulate of Bosnia and Herzegovina in Austria issues the entry permit, and we apply for it together with the Austrian documents.",
      },
      {
        q: "Who issues the Leichenpass in Austria?",
        a: "The Bezirkshauptmannschaft of the district concerned, or the Magistrat in a statutory city such as Vienna, Graz or Linz. The application needs the coroner's report and the Sterbeurkunde, and we submit it for the family.",
      },
      {
        q: "Which Serbian mission handles the permit for someone who lived in Linz?",
        a: "The Consulate General of Serbia in Salzburg, which covers all of Upper Austria — many families assume it is Vienna. We send the application to Salzburg straight away. By road, Linz to Belgrade is about 800 km.",
      },
      {
        q: "Can you arrange repatriation from Salzburg or Innsbruck to Montenegro?",
        a: "Yes. Salzburg to Podgorica is about 1,040 km and Innsbruck to Podgorica about 1,210 km. Montenegro's mission in Austria issues the entry permit; the Austrian documents, the coffin and the transport are arranged by us.",
      },
      {
        q: "Is the Totenbeschau always needed before repatriation?",
        a: "Yes. The coroner's inspection is the basis for registering the death and for every later document, including the Leichenpass. Once the coroner has finished, call us and we take over the contact with the Standesamt and the authorities.",
      },
    ],
    relatedLinks: [
      { href: "/en/repatriation-to-serbia", title: "Repatriation to Serbia" },
      { href: "/en/repatriation-to-bosnia", title: "Repatriation to Bosnia and Herzegovina" },
      { href: "/en/repatriation-to-montenegro", title: "Repatriation to Montenegro" },
      { href: "/en/documents-for-repatriation", title: "Documents for repatriation" },
      { href: "/en/repatriation-from-germany", title: "Repatriation from Germany" },
    ],
    areaServed: "Austria",
  },

  {
    key: "from-switzerland",
    slug: "repatriation-from-switzerland",
    title: "Repatriation from Switzerland to Serbia and Bosnia",
    description:
      "Repatriation from Switzerland to Serbia, Bosnia, Montenegro and North Macedonia: cantonal Leichenpass, customs on exit, Serbian permit from Zurich or Bern.",
    h1: "Repatriation from Switzerland to Serbia, Bosnia, Montenegro and North Macedonia",
    crumb: "From Switzerland",
    lead: "From Zurich, Basel, St. Gallen, Bern, Geneva, Lausanne and every other canton — and from Liechtenstein — we bring the deceased home to Serbia, Bosnia and Herzegovina, Montenegro or North Macedonia. The cantonal permit, the customs formalities on leaving Switzerland and the permit of the destination country are all handled by us.",
    sections: [
      {
        h: "What to do when someone dies in Switzerland",
        p: [
          "The doctor who confirms the death issues a medical death certificate (ärztliche Todesbescheinigung; in French-speaking cantons certificat médical de décès). The death must then be reported to the civil registry — Zivilstandsamt in German, état civil in French. In the canton of Zurich, for example, it is reported within two days to the municipal funeral or civil registry office (Bestattungsamt / Zivilstandsamt), together with the medical certificate.",
          "The civil registry issues an extract from the death register (Todesschein or Auszug aus dem Todesregister; in French acte de décès). Like Serbia, Switzerland applies CIEC Convention No. 16, so Serbian authorities accept the multilingual version of this extract without legalisation.",
        ],
      },
      {
        h: "Leichenpass in Switzerland: the rules differ by canton",
        p: [
          "There is no single Swiss procedure for taking remains abroad. The Leichenpass — laissez-passer mortuaire in the French-speaking cantons — is issued by the competent cantonal authority. Which office that is, and which attachments it asks for, depends on the canton and sometimes on the municipality. It is only issued once the death has been reported.",
          "Our first step is therefore to check the rules of the canton where the death occurred and to assemble the papers to match. A file that is complete the first time saves days, particularly when the death happens just before a weekend.",
          "For Liechtenstein, the death documents come from the Principality's own authorities, while the Serbian Consulate General in Zurich is responsible for the sprovodnica.",
        ],
      },
      {
        h: "Customs: why Switzerland is different",
        p: [
          "Switzerland is not a member of the European Union, and that is the main practical difference from Germany or Austria. When the coffin leaves the country it is declared to customs, and the accompanying documents — the Leichenpass, the death extract and the destination country's permit — are presented at the border. Liechtenstein is in a customs union with Switzerland, so similar formalities apply there.",
          "Every document must therefore be complete before the funeral vehicle sets off. We prepare the customs paperwork in advance, so the border does not cost the family time.",
        ],
      },
      {
        h: "Sudden or violent death in Switzerland",
        p: [
          "After an accident, a suicide or a death of unclear cause, the public prosecutor (Staatsanwaltschaft; ministère public in the French-speaking cantons) decides when the body is released and may order a forensic examination. Until that release, the cantonal permit cannot be issued. We stay in contact with the authorities and complete the remaining documents during the wait, so the journey can begin as soon as the release is given.",
        ],
      },
      {
        h: "Serbian missions in Switzerland: Zurich or Bern",
        p: [
          "The sprovodnica — Serbia's permit for bringing human remains into the country — is issued by the mission responsible for the deceased's last place of residence:",
        ],
        list: [
          "Consulate General of the Republic of Serbia in Zurich: the cantons of Zurich, Lucerne, Uri, Schwyz, Obwalden, Nidwalden, Glarus, Zug, Schaffhausen, both Appenzells, St. Gallen, Graubünden, Aargau and Thurgau, plus Liechtenstein",
          "Embassy of the Republic of Serbia in Bern (consular section): the cantons outside the Zurich consulate's district — among them Bern, Geneva, Vaud, Basel, Fribourg, Neuchâtel, Valais and Ticino",
        ],
      },
      {
        h: "Burial in Bosnia, Montenegro or North Macedonia",
        p: [
          `A family in Geneva or Lausanne therefore deals with Bern, not Zurich, when the funeral is in Serbia. For a burial in ${a("/en/repatriation-to-bosnia", "Bosnia and Herzegovina")}, ${a("/en/repatriation-to-montenegro", "Montenegro")} or ${a("/en/repatriation-to-north-macedonia", "North Macedonia")}, the entry permit is issued instead by that country's embassy or consulate in Switzerland. If the road to North Macedonia runs through Serbia, a Serbian transit permit is added.`,
          "Towards Banja Luka the last stretch leads through Croatia towards Gradiška, where crossing conditions keep changing, so we confirm the crossing shortly before departure.",
        ],
      },
      {
        h: "Routes and distances: road or air from Switzerland",
        p: [
          "By road the journey usually runs through Austria; from the south of the country it can also go through northern Italy. Distances to Belgrade, Banja Luka, Sarajevo, Podgorica and Skopje:",
        ],
        list: [
          "Zurich: about 1,250 km, 1,040 km, 1,260 km, 1,480 km and 1,680 km",
          "Geneva: about 1,330 km, 1,120 km, 1,340 km, 1,500 km and 1,760 km",
          "Bern: about 1,370 km, 1,160 km, 1,380 km, 1,540 km and 1,800 km",
        ],
      },
      {
        h: "How we organise repatriation from Switzerland",
        p: [
          "Zurich to Belgrade is about 13 hours of pure driving, before the drivers' mandatory rest periods and the customs stop. Because Zurich and Geneva have international airports, families can also choose air transport; we then arrange the transfer to the airport, the flight and the collection in the region.",
          "From the first call to the handover, repatriation from Switzerland usually takes 2–4 days. Call or message us on +381 64 249 28 49 — from Switzerland or any other country, day or night, also on WhatsApp and Viber. We speak German with Swiss hospitals and offices, answer English enquiries by e-mail and WhatsApp, and give you the exact price in the first call, with no hidden costs. One contact person stays with you until the coffin reaches the place of burial.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is involved in repatriation from Zurich to Bosnia?",
        a: "From Zurich it is about 1,040 km to Banja Luka and about 1,260 km to Sarajevo, so road transport is the usual choice. The entry permit is issued by the embassy or consulate of Bosnia and Herzegovina in Switzerland, and we prepare the Swiss documents and the customs formalities alongside it.",
      },
      {
        q: "How does repatriation from Geneva to Serbia work?",
        a: "In Geneva the documents are in French: certificat médical de décès, acte de décès and laissez-passer mortuaire. If the deceased lived in Geneva, the sprovodnica comes from the Serbian embassy in Bern. Geneva to Belgrade is about 1,330 km by road.",
      },
      {
        q: "Why is customs needed when repatriating from Switzerland?",
        a: "Because Switzerland is outside the EU, human remains are declared to customs when they leave the country. We prepare the required paperwork beforehand so there is no waiting at the border.",
      },
      {
        q: "Which Serbian mission is responsible for Basel?",
        a: "The consular section of the Serbian embassy in Bern. Basel lies on the border with Germany and France, so by road the route often leads through Germany and Austria.",
      },
      {
        q: "How long does repatriation from Switzerland take?",
        a: "Usually 2–4 days in total. Bern to Belgrade, for instance, is about 1,370 km. The cantonal permit and the customs paperwork take more time than the drive itself, and a prosecutor's release can add a few days.",
      },
      {
        q: "Can you repatriate from Liechtenstein?",
        a: "Yes. Liechtenstein belongs to the district of the Serbian Consulate General in Zurich, and because of the customs union with Switzerland the same kind of customs formalities apply on exit.",
      },
    ],
    relatedLinks: [
      { href: "/en/repatriation-to-serbia", title: "Repatriation to Serbia" },
      { href: "/en/repatriation-to-bosnia", title: "Repatriation to Bosnia and Herzegovina" },
      { href: "/en/documents-for-repatriation", title: "Documents for repatriation" },
      { href: "/en/repatriation-cost", title: "Repatriation cost" },
      { href: "/en/repatriation-from-austria", title: "Repatriation from Austria" },
    ],
    areaServed: "Switzerland",
  },

  {
    key: "documents",
    slug: "documents-for-repatriation",
    title: "Documents for Repatriation of a Body to Serbia",
    description:
      "Documents for repatriation to Serbia, Bosnia, Montenegro and North Macedonia: death certificates in 15 countries, apostille or CIEC, sprovodnica, urns.",
    h1: "Documents for repatriation to Serbia, Bosnia, Montenegro and North Macedonia",
    crumb: "Documents",
    lead: "Moving human remains across a border always takes two kinds of paperwork: documents from the country where the person died and a permit from the country where the funeral will be. Below you will find what each of 15 European countries requires, when a multilingual certificate is enough and when an apostille is needed, and what the Serbian permit (sprovodnica) involves. We obtain all of it for the family.",
    sections: [
      {
        h: "How the documents fit together",
        p: [
          "The first group proves the death and allows the remains to leave the country of death: a medical certificate of death and its cause, the civil death certificate from the local registry, and a permit to take the remains abroad. The second group is the destination country's permit to let the remains in — for Serbia, the sprovodnica.",
          "On top of that, the original passport or ID card of the deceased is required. All papers travel with the coffin and are shown at the border, so they must be complete before departure. Names and issuing authorities change from country to country; the structure does not.",
        ],
      },
      {
        h: "International death certificate or apostille and translation",
        p: [
          "What is an international death certificate? It is the multilingual extract from the death register defined by CIEC Convention No. 16 (Vienna, 1976). When both the issuing country and Serbia apply the convention, the extract is generally accepted without legalisation and without translation.",
          "The convention is in force for Serbia, Bosnia and Herzegovina, Montenegro and North Macedonia and, among the countries on this page, for Germany, Austria, Switzerland, Italy, Spain, France, Croatia, Slovenia, the Netherlands and Belgium.",
          "Greece signed the convention but never ratified it, and Sweden, Denmark and Norway are not parties. Documents from these four countries need an apostille in the country of issue and a translation into Serbian by an authorised translator. Since this adds time, we start on both as soon as the document is issued.",
        ],
      },
      {
        h: "Germany, Austria and Switzerland",
        list: [
          `${a("/en/repatriation-from-germany", "Germany")}: medical death certificate (Todesbescheinigung, also Totenschein), civil death certificate (Sterbeurkunde) from the registry office (Standesamt) and the Leichenpass. The office issuing the Leichenpass depends on the federal state — in Bavaria the municipality where the transport begins, in Thuringia the health office of the place of death. An unnatural death first needs the prosecutor's release (Freigabe).`,
          `${a("/en/repatriation-from-austria", "Austria")}: coroner's report (Totenbeschaubefund), Sterbeurkunde from the Standesamt and the Leichenpass or Überführungsbewilligung, issued by the district authority (Bezirkshauptmannschaft) or, in statutory cities, by the Magistrat.`,
          `${a("/en/repatriation-from-switzerland", "Switzerland")}: medical death certificate (ärztliche Todesbescheinigung / certificat médical de décès), extract from the death register (Auszug aus dem Todesregister / acte de décès) from the Zivilstandsamt or état civil, and the cantonal Leichenpass (laissez-passer mortuaire). As Switzerland is outside the EU, customs formalities apply on exit.`,
        ],
        p: [
          "In the three German-speaking countries the documents have similar names, but the offices that issue them differ — and in Germany even the rules for urns depend on the state. Berlin, for instance, requires a Leichenpass for a coffin but not for an urn, and the crematorium releases an urn for abroad only once it has confirmation of the intended burial.",
        ],
      },
      {
        h: "Italy, Spain, France, the Netherlands and Belgium",
        p: ["All five apply CIEC Convention No. 16, so their multilingual extracts need no apostille for Serbia."],
        list: [
          "<strong>Italy:</strong> certificato necroscopico (medical death certificate) and estratto dell'atto di morte from the Comune, which also authorises the transport; crossing the border requires the passaporto mortuario, issued as a rule by the prefettura and in some regions by the Comune.",
          "<strong>Spain:</strong> certificado médico de causa de la muerte, certificado de defunción from the Registro Civil, certificado de embalsamamiento (embalming or temporary conservation) and the salvoconducto mortuorio. The application goes to the local health authority, and exit is authorised by Sanidad Exterior in the province of death; a violent death also needs a court's permission.",
          "<strong>France:</strong> certificat de décès, acte de décès from the mairie, the mayor's authorisation to close the coffin (autorisation de fermeture du cercueil) and the prefecture's authorisation to transport the body abroad, granted in the département where the coffin is closed, plus the passport of the deceased. A violent or unclear death first needs the prosecutor's consent.",
          "<strong>Netherlands:</strong> verklaring van overlijden (doctor's statement), akte van overlijden from the municipal civil registry (Burgerlijke Stand), the verlof tot begraven of cremeren and the laissez-passer for transport abroad, both from the municipality of death. The municipality needs a doctor's confirmation of natural death or the prosecutor's consent first.",
          "<strong>Belgium:</strong> certificat de décès / overlijdensattest, acte de décès / akte van overlijden from the municipality, as a rule a certificat de non-contagion confirming the death was not caused by an infectious disease, and the laissez-passer mortuaire from the competent Belgian authority. A violent or unclear death requires the prosecutor's consent before the body is released.",
        ],
      },
      {
        h: "Sweden, Denmark and Norway",
        p: ["None of the three applies CIEC Convention No. 16, so every document intended for Serbian authorities is apostilled and translated."],
        list: [
          "<strong>Sweden:</strong> dödsbevis (death certificate), intyg om dödsorsak (cause-of-death certificate) and an extract from the population register kept by the Swedish Tax Agency (Skatteverket).",
          "<strong>Denmark:</strong> dødsattest, an extract from the civil register (CPR) and the ligpas, the permit to take a coffin across the border. An urn needs no ligpas, but the Serbian documents remain the same.",
          "<strong>Norway:</strong> legeerklæring om dødsfall (doctor's declaration of death), dødsattest, a smitteattest confirming that the death was not caused by an infectious disease, and police permission (tillatelse fra politiet) to take the coffin out of the country. Norway is outside the EU, so customs formalities apply on exit.",
        ],
      },
      {
        h: "Croatia, Slovenia, Montenegro and Greece",
        list: [
          "<strong>Croatia:</strong> potvrda o smrti (coroner's certificate), izvadak iz matice umrlih on the international form, accepted in Serbia without legalisation, and the Croatian sprovodnica (posmrtni putni list) — Croatia's own exit permit, issued by the sanitary inspector responsible for the place of death. The application names the border crossing and the registration number of the funeral vehicle.",
          "<strong>Slovenia:</strong> the coroner's certificate (potrdilo mrliškega oglednika), the extract from the civil register on the multilingual form and the posmrtni potni list, which the Health Inspectorate of the Republic of Slovenia issues at the funeral company's request. The cause of death is given in Slovene with its international disease classification code.",
          "<strong>Montenegro:</strong> medical death certificate, the multilingual extract from the register of deaths, the transport permit of the competent Montenegrin authorities and the passport or ID card. Montenegro is not in the EU, so there are customs formalities at the border with Serbia.",
          "<strong>Greece:</strong> medical certificate of death (ιατρικό πιστοποιητικό θανάτου), the death record from the municipal registry (ληξιαρχική πράξη θανάτου), a permit to transport the remains abroad and the passport or ID card. Because Greece never ratified CIEC Convention No. 16, the documents need an apostille and translation.",
        ],
        p: [
          "Of these four countries, only Greece needs an apostille; Croatia, Slovenia and Montenegro apply the CIEC convention. Note also that Croatia calls its own exit permit (posmrtni putni list) a sprovodnica too — it lets the remains leave Croatia, while the Serbian sprovodnica lets them enter Serbia.",
        ],
      },
      {
        h: "The Serbian permit (sprovodnica): what the mission asks for",
        p: [
          "The sprovodnica is Serbia's permit to bring human remains into the country. It is issued by the Serbian embassy or consulate responsible for the deceased's last place of residence, on application by a family member or an authorised funeral company. The missions generally ask for the following, in the original:",
        ],
        list: [
          "the passport of the deceased",
          "a request stating the place of burial and the transport route",
          "the death certificate issued by the foreign authority (for example a Sterbeurkunde or Auszug aus dem Todesregister)",
          "the medical report on the cause of death (for example a Todesbescheinigung)",
          "the transport permit of the country of death (for example a Leichenpass)",
          "for foreign nationals, confirmation that a grave site in Serbia has been secured",
        ],
        ordered: true,
      },
      {
        h: "Bosnia, Montenegro, North Macedonia, transit and urns",
        p: [
          `The sprovodnica covers Serbia only. For a funeral in ${a("/en/repatriation-to-bosnia", "Bosnia and Herzegovina")}, the embassy or consulate of Bosnia and Herzegovina issues a laissez-passer for the transfer of remains — what families often call the “sprovodnica for BiH” — and the form attached depends on whether the burial is in the Federation of BiH, Republika Srpska or Brčko District. ${a("/en/repatriation-to-montenegro", "Montenegro")} and ${a("/en/repatriation-to-north-macedonia", "North Macedonia")} work in a similar way, through their own missions. When the route to the place of burial crosses Serbia, a Serbian transit permit is needed as well.`,
          "Repatriation of ashes follows the same principle: an urn brought into Serbia also needs a sprovodnica, with the cremation certificate added to the usual documents, and the urn must be sealed and protected for the journey. Some missions ask for further confirmations, so we always check the list with the one responsible for the case.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is a sprovodnica?",
        a: "It is the permit that allows human remains to enter Serbia. The Serbian embassy or consulate responsible for the deceased's last place of residence issues it, at the request of the family or an authorised funeral company. Without it, the deceased cannot be brought into Serbia.",
      },
      {
        q: "Do I have to go to the embassy or consulate in person?",
        a: "In most cases, no. An authorised funeral company can submit the application, so we take care of it. The family sends us the details and copies of the documents and, if needed, signs an authorisation.",
      },
      {
        q: "What documents are needed for the transport of human ashes to Serbia?",
        a: "The same Serbian permit as for a coffin — the sprovodnica — plus the cremation certificate and the documents from the country of death. Some local rules are lighter for urns: in Denmark no ligpas is needed and in Berlin no Leichenpass, but Serbia's requirements stay the same.",
      },
      {
        q: "Do foreign death certificates need to be translated?",
        a: "Not if they come as a multilingual extract from a CIEC Convention No. 16 country such as Germany, Austria, Switzerland or Italy. Documents from Sweden, Denmark, Norway and Greece are apostilled and translated into Serbian.",
      },
      {
        q: "How do I get a death certificate from another country?",
        a: "It is issued by the civil registry of the place of death — the Standesamt, Zivilstandsamt, Comune, mairie or municipality, depending on the country. As part of the repatriation we request it ourselves, together with enough certified copies for later use by insurers, banks and Serbian registry offices.",
      },
      {
        q: "Who issues the permit if the funeral is in North Macedonia?",
        a: "North Macedonia's embassy or consulate in the country of death. If the coffin travels by road through Serbia, a Serbian transit permit is also required, and we obtain both.",
      },
    ],
    relatedLinks: [
      { href: "/en/repatriation-to-serbia", title: "Repatriation to Serbia" },
      { href: "/en/repatriation-to-bosnia", title: "Repatriation to Bosnia and Herzegovina" },
      { href: "/en/repatriation-from-germany", title: "Repatriation from Germany" },
      { href: "/en/repatriation-cost", title: "Repatriation cost" },
      { href: "/en/contact", title: "Contact" },
    ],
  },

  {
    key: "cost",
    slug: "repatriation-cost",
    title: "Body Repatriation Cost to Serbia and the Balkans",
    description:
      "What does repatriation cost? Distance, documents and fees, coffin, road or air, what is included and who may pay: insurers, assistance companies, funds.",
    h1: "Repatriation cost: what the price depends on",
    crumb: "Cost",
    lead: "Cost is one of the first questions a family asks, and it deserves a straight answer. No single figure fits every case, because the price of a repatriation is made up of several parts that vary from case to case. Here we explain each of them, what our price includes and who may cover the costs — and for your own case, you get the exact price in the first call.",
    sections: [
      {
        h: "Why there is no fixed price, and no price per kilometre",
        p: [
          "Many people look for a price per kilometre because it seems the easiest way to compare offers. Distance does matter, but it is only one factor. The same route from Munich to Belgrade can cost different amounts if one case needs a flight, embalming or a long wait for the prosecutor's release and another does not.",
          "That is why we do not publish flat rates that might change later. Once you tell us where the person died, where the funeral will be, whether it is a coffin or an urn and what the circumstances of the death were, we give you the exact price for the whole job, from collection to handover at the place of burial, with no hidden costs. If something outside our control comes up during the process, we tell you before any extra cost arises.",
        ],
      },
      {
        h: "Distance, starting point and place of burial",
        p: [
          "A longer route means more fuel, more tolls and more driver time, and on long journeys the mandatory rest periods add hours. The range is wide: Vienna to Belgrade is about 620 km, Zurich to Belgrade about 1,250 km, Hamburg to Belgrade about 1,540 km and Stockholm to Belgrade about 2,660 km.",
          "The destination counts just as much. From Munich it is about 730 km to Banja Luka but about 1,370 km to Skopje; from Frankfurt about 1,300 km to Sarajevo and about 1,570 km to Podgorica. A village cemetery far from the motorway lengthens the last part of the journey as well.",
        ],
      },
      {
        h: "Documents, fees and translations",
        p: [
          "Every country charges local fees for death certificates and for the permit to take remains abroad, such as the German or Austrian Leichenpass; the amount depends on the country, region or municipality. On the destination side there is the consular fee for the Serbian sprovodnica — the entry permit issued by the Serbian mission responsible for the deceased's last residence — or the fee of the Bosnian, Montenegrin or North Macedonian mission. Road transport to North Macedonia through Serbia also needs a Serbian transit permit.",
          `From countries that apply CIEC Convention No. 16, such as Germany, Austria or Switzerland, the multilingual death certificate usually needs no translation. Documents from Sweden, Denmark, Norway and Greece need an apostille and a translation into Serbian, which adds cost and time. Our page on ${a("/en/documents-for-repatriation", "documents for repatriation")} lists the papers country by country.`,
          "It also pays to order enough certified copies at the start. Besides the one attached to the permit application, families later need copies for insurers, banks, pension funds and for registering the death in Serbia.",
        ],
      },
      {
        h: "Coffin, preparation and embalming",
        p: [
          "International transport requires a hermetically sealed coffin suitable for international transport, typically zinc-lined. A standard model that meets every requirement is included in our price. If the family chooses a different wood, finish or fittings, we quote the difference in advance, before anything is ordered.",
          "Preparing the deceased — hygienic care, dressing and placing in the coffin — is part of the standard service. Embalming is not always needed, but many airlines require it for a coffin, and it can be advisable when the journey is delayed by an autopsy or public holidays. Religious rites before the coffin is closed are arranged according to the family's wishes.",
        ],
      },
      {
        h: "Road or air: why is repatriation so expensive by plane?",
        p: [
          "By road, the cost depends mainly on distance and journey time, and one funeral vehicle goes straight from the place of collection to the place of burial.",
          "Air transport of human remains is made up of more items: the airline's cargo tariff, calculated on the weight and dimensions of the packed coffin; special packaging for air freight; airport handling at both ends; embalming if the airline requires it; and two road transfers — to the departure airport and from the arrival airport to the place of burial. That is why a flight from southern Germany or Austria is rarely cheaper and often not faster. When you compare air offers, ask for the total price rather than the price of the flight.",
        ],
      },
      {
        h: "Circumstances that change the cost",
        list: [
          "<strong>Prosecutor's release and autopsy:</strong> after an accident or an unclear death the deceased cannot be collected until the prosecutor releases the body. The transport price itself does not change, but cold storage may last longer and departure may be later — we name such factors openly in the quote.",
          "<strong>Weekends and public holidays:</strong> collection is possible at any hour, while registry offices and consulates work on weekdays, so documents wait for the next working day.",
          "<strong>A local funeral director already involved:</strong> if a hospital has called a local firm, its services, such as collection or storage, are invoiced by that firm. Please call us before you sign anything.",
          "<strong>Countries outside the EU:</strong> from Switzerland and Norway, customs formalities on exit are part of the preparation; between Montenegro and Serbia there are customs formalities at the border.",
        ],
        p: ["Some factors only become clear once the case is under way:"],
      },
      {
        h: "What our price includes",
        p: ["The price we give you covers the whole job:"],
        list: [
          "obtaining the documents in the country of death",
          "the Serbian sprovodnica or the permit of Bosnia and Herzegovina, Montenegro or North Macedonia, plus a transit permit where needed",
          "collection of the deceased from the hospital, care home or private home",
          "preparation and a standard hermetically sealed coffin for international transport",
          "transport in a specialised funeral vehicle to the place of burial",
          "border and customs formalities",
          "one contact person for the family, available 24/7",
        ],
      },
      {
        h: "Who pays for repatriation: insurance, assistance companies and funds",
        p: [
          "As a rule, the family pays — but it is worth checking who may contribute. If the death happened while travelling, travel insurance often covers repatriation of remains. Insurers usually handle such cases through an assistance company, and many want to approve the transport before it is booked, so contact them before you agree to anything.",
          "Many people from the diaspora in Germany have private funeral insurance (Sterbegeldversicherung) or life insurance. If the death resulted from an accident at work or an occupational disease, the German statutory accident insurance (Berufsgenossenschaft) pays a funeral allowance and, under certain conditions, contributes to the transport costs.",
          "If the deceased received a Serbian pension, the person who paid for the funeral can claim reimbursement of funeral costs from the Serbian Pension and Disability Insurance Fund (PIO Fund) on the basis of the original invoice. For all of these claims we provide the invoice and copies of the documents that insurers and funds usually request. Insurers and assistance companies can reach us at kontakt@transportpokojnika.com or on WhatsApp at +381 64 249 28 49.",
          "Costs that arise at the place of burial are normally not part of the transport price: the grave and cemetery fees, the religious service, flowers, death notices and the memorial meal.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much does it cost to repatriate a body to Serbia?",
        a: "It depends on where the person died, the place of burial, the documents, the coffin and the means of transport. Munich to Belgrade is about 940 km and Düsseldorf to Belgrade about 1,510 km, so the price cannot be the same. Call us from any country on +381 64 249 28 49 and you will have the exact figure for your case in the first call, without obligation.",
      },
      {
        q: "Does travel insurance cover repatriation of a body?",
        a: "Often it does, when the death occurred on a trip abroad, but it depends on the policy. Look for repatriation of remains cover in the terms and contact the insurer or its assistance company before booking, because many require prior approval. We supply the documents they ask for.",
      },
      {
        q: "Is funeral repatriation charged per kilometre?",
        a: "Not only. Mileage affects fuel, tolls and driver time, but documents, fees, the coffin and the preparation of the deceased are part of the price too. That is why we quote one price for the whole repatriation rather than a rate per kilometre.",
      },
      {
        q: "Are the coffin and documents included in the price?",
        a: "Yes. A standard coffin approved for international transport, the documents from the country of death and the sprovodnica or the destination country's permit are all part of our price. Only what the family chooses in addition, such as a different coffin model, is listed separately.",
      },
      {
        q: "Are there hidden costs?",
        a: "No. The price you receive in the first call covers the whole repatriation. If something outside our control, such as an autopsy ordered by the prosecutor, extends the process, we explain the consequences before any additional cost arises.",
      },
      {
        q: "Is repatriation of ashes handled differently?",
        a: "Partly. An urn needs no hermetically sealed coffin, and in Denmark, for example, no ligpas is required for an urn. For Serbia, though, the sprovodnica and the cremation certificate are still needed, so the paperwork remains an essential part of the job.",
      },
    ],
    relatedLinks: [
      { href: "/en/documents-for-repatriation", title: "Documents for repatriation" },
      { href: "/en/repatriation-from-germany", title: "Repatriation from Germany" },
      { href: "/en/repatriation-to-serbia", title: "Repatriation to Serbia" },
      { href: "/en/contact", title: "Contact" },
    ],
  },
];
