/** Country and legal guide blog posts — rendered by renderBlogPost() in scripts/build-site.js. */

/** In-body link to a page on this site. */
const L = (href, text) => `<a href="${href}" class="text-primary">${text}</a>`;
/** In-body link to an official external page. */
const X = (href, text) => `<a href="${href}" class="text-primary" target="_blank" rel="noopener noreferrer">${text}</a>`;

const MFA_REMAINS = "https://www.mfa.gov.rs/lat/gradjani/usluge/prenos-posmrtnih-ostataka";
const AT_LEICHENPASS = "https://www.oesterreich.gv.at/de/themen/notfaelle_unfaelle_und_kriminalitaet/todesfall/3/Seite.190520";

module.exports = [
  // ─────────────────────────────────────────────────────────────── Italija
  {
    slug: "blog-prevoz-pokojnika-iz-italije-vodic",
    title: "Prevoz pokojnika iz Italije u Srbiju i BiH — vodič",
    description: "Vodič za prevoz pokojnika iz Italije: atto di morte, passaporto mortuario, srpski konzulati u Rimu, Milanu i Trstu i rute do Srbije, BiH i Crne Gore.",
    h1: "Prevoz pokojnika iz Italije — vodič za porodicu",
    lead: "Kada bliska osoba premine u Italiji, porodica se istovremeno suočava sa italijanskom opštinskom administracijom, srpskim konzulatom i dugim putem kući. Ovaj vodič objašnjava redosled: od upisa smrti u opštini (Comune), preko propusnice passaporto mortuario, do sprovodnice i prevoza u Srbiju, BiH, Crnu Goru ili Severnu Makedoniju.",
    date: "2026-08-05",
    updated: "2026-10-19",
    readTime: "7 min čitanja",
    sections: [
      {
        h: "Prvi koraci posle smrti u Italiji",
        p: [
          "Smrt u Italiji najpre konstatuje lekar. Ako je osoba preminula u bolnici, to čini bolnički lekar, a telo se do preuzimanja čuva u bolničkoj mrtvačnici (camera mortuaria). Kada smrt nastupi kod kuće, porodica poziva lekara opšte prakse ili hitnu službu, a lekar mrtvozornik (medico necroscopo) zatim izdaje certificato necroscopico, potvrdu da je smrt utvrđena.",
          "U ovoj fazi porodica ne mora da poznaje propise. Dovoljno je da nas pozove, da pripremi pasoš ili ličnu kartu pokojnika i da odluči gde će biti sahrana — u kom mestu i na kom groblju. Ti podaci ulaze u svaki sledeći dokument, jer se odredište i ruta upisuju i u zahtev srpskom konzulatu.",
          "Pripremu tela i zatvaranje sanduka na licu mesta obavlja lokalna pogrebna služba (impresa funebre). Tu saradnju koordiniramo mi, tako da porodica ima jednu kontakt osobu umesto nekoliko sagovornika na dva jezika.",
        ],
      },
      {
        h: "Comune i atto di morte: upis smrti u matičnu knjigu",
        p: [
          "Smrt se prijavljuje matičnoj službi (ufficio di stato civile) opštine u kojoj je nastupila, a ne opštine u kojoj je pokojnik živeo. Na osnovu lekarske prijave sastavlja se atto di morte — upis u italijansku matičnu knjigu umrlih — iz kog se kasnije izdaje izvod (estratto dell'atto di morte).",
          "Za srpske organe važno je da se zatraži višejezični izvod (estratto plurilingue). Italija i Srbija primenjuju CIEC konvenciju br. 16 o višejezičnim izvodima iz matičnih knjiga, pa se takav izvod u Srbiji po pravilu prihvata bez legalizacije. Ako opština izda samo izvod na italijanskom jeziku, potreban je prevod ovlašćenog sudskog tumača.",
          "Opština izdaje i dozvolu za prevoz tela iz mesta smrti (autorizzazione al trasporto). Ta dozvola pokriva italijanski deo puta, dok je za prelazak granice potreban poseban dokument, opisan u sledećem odeljku.",
        ],
      },
      {
        h: "Passaporto mortuario i Berlinski sporazum iz 1937.",
        p: [
          "Passaporto mortuario je međunarodna propusnica za posmrtne ostatke. Njen obrazac potiče iz Berlinskog sporazuma o prevozu umrlih iz 1937. godine, koji Italija i danas primenjuje u odnosima sa drugim državama članicama. Izdaje je nadležni organ, po pravilu prefektura (prefettura) provincije u kojoj je nastupila smrt, a u pojedinim regionima tu nadležnost ima opština.",
          "Pre izdavanja propusnice zdravstvena služba potvrđuje da je sanduk pripremljen po propisima: telo se polaže u hermetički zatvoren sanduk propisan za međunarodni prevoz, sa metalnim ulošcem koji se zalemljuje. Srpski pravilnik o postupanju sa posmrtnim ostacima za prevoz preko granice traži isto — zalemljen metalni sanduk smešten u drveni.",
          "Kada država u koju se pokojnik prevozi nije strana Berlinskog sporazuma, italijanski propisi pre izdavanja dozvole traže i saglasnost konzulata te države. Za sahranu u Srbiji to se rešava preko srpskog konzulata koji izdaje sprovodnicu, a za BiH, Crnu Goru i Severnu Makedoniju preko njihovih predstavništava u Italiji. Zato italijanska i balkanska dokumenta pripremamo paralelno, a ne jedno za drugim.",
        ],
      },
      {
        h: "Nadležni srpski konzulat: Rim, Milano ili Trst",
        p: [
          "Sprovodnicu izdaje srpsko diplomatsko-konzularno predstavništvo nadležno za mesto poslednjeg prebivališta pokojnika. U Italiji postoje tri takva predstavništva, a granice njihove nadležnosti prate italijanske regione.",
          "Ako je pokojnik živeo u Bolonji, nadležan je Milano, iako je Bolonja bliža Firenci; za Veronu, Padovu ili Udine zahtev ide u Trst. Kada je pokojnik u Italiji bio samo u poseti, a živeo je u Srbiji ili nekoj trećoj zemlji, nadležnost unapred proveravamo sa predstavništvom.",
          `Podela po regionima, prema podacima samih predstavništava (${X("https://milano.mfa.gov.rs/", "Milano")}, ${X("https://trieste.mfa.gov.rs/", "Trst")}, ${X("https://roma.mfa.gov.rs/", "Rim")}):`,
        ],
        list: [
          "<strong>Generalni konzulat u Milanu</strong> — Lombardija, Pijemont, Emilija-Romanja, Ligurija i Valle d'Aosta",
          "<strong>Generalni konzulat u Trstu</strong> — Furlanija-Julijska krajina, Veneto i Trentino-Alto Adiđe",
          "<strong>Ambasada u Rimu (konzularno odeljenje)</strong> — svi ostali regioni centralne i južne Italije, od Toskane i Lacija do Sicilije i Sardinije",
        ],
      },
      {
        h: "Severna Italija: Lombardija, Veneto i Furlanija",
        p: [
          "Najveći deo naše dijaspore u Italiji živi i radi na severu — u Lombardiji, Venetu i Furlaniji-Julijskoj krajini, u industrijskim gradovima i manjim mestima oko njih. Trst ima i dugu istoriju srpske zajednice, čiji je simbol pravoslavna crkva Svetog Spiridona u centru grada.",
          "Iz Milana do Beograda ima oko 1.020 km, odnosno oko 11 sati čiste vožnje. Put vodi auto-putem kroz Veneto i Furlaniju, zatim preko Slovenije i Hrvatske do graničnog prelaza Batrovci. Iz Veneta i Furlanije, koji su na istoj trasi, put je osetno kraći.",
          "Za porodicu to znači da pokojnik sa severa Italije u Srbiju po pravilu stiže za jedan dan putovanja od polaska, uz pauze vozača koje propisi nalažu. Pre polaska se moraju završiti sva dokumenta, što u Italiji obično traje dva do četiri dana.",
        ],
      },
      {
        h: "Rim, centralna i južna Italija",
        p: [
          "Iz Rima do Beograda ima oko 1.280 km, ili oko 13 sati čiste vožnje. Sa obaveznim odmorima vozača stvarno trajanje puta je duže, pa porodice iz Rima, Napulja ili sa juga Italije često pitaju da li je avion brža opcija.",
          `Avionski prevoz ima smisla kada je mesto sahrane daleko od Beograda ili kada je rok za sahranu kratak, ali uključuje i prevoz do aerodroma, kargo postupak na oba aerodroma i preuzimanje po sletanju. Pogrebno vozilo kreće direktno od mrtvačnice do groblja. Razlike smo opisali u tekstu ${L("/blog-prevoz-pokojnika-avionom-vs-kombijem", "prevoz pokojnika avionom ili kombijem")}.`,
          `Za pokojnike iz Rima i okoline nadležna je Ambasada u Rimu, pa se sprovodnica i italijanska dokumenta pribavljaju u istom gradu. Lokalne specifičnosti opisane su na stranici ${L("/rim", "prevoz pokojnika iz Rima")}.`,
        ],
      },
      {
        h: "Sahrana u BiH, Crnoj Gori ili Severnoj Makedoniji",
        p: [
          "Kada je sahrana u Bosni i Hercegovini, Crnoj Gori ili Severnoj Makedoniji, umesto srpske sprovodnice potrebna je dozvola za unos posmrtnih ostataka koju izdaje ambasada ili konzulat te države. Italijanski deo postupka je isti, a razlikuju se samo predstavništvo i ruta.",
          "Orijentacione udaljenosti iz Milana: do Banje Luke oko 810 km, do Sarajeva oko 1.030 km, do Podgorice oko 1.190 km i do Skoplja oko 1.450 km. Iz Rima je do Banje Luke oko 1.070 km, do Sarajeva oko 1.290 km, do Podgorice oko 1.450 km, a do Skoplja oko 1.710 km.",
          "Za porodice iz Republike Srpske i severne Bosne put iz severne Italije kraći je nego do Beograda. Za Crnu Goru i Makedoniju rutu biramo prema mestu sahrane i graničnim prelazima, i o tome porodicu obaveštavamo pre polaska.",
        ],
      },
      {
        h: "Rokovi i od čega zavisi cena",
        p: [
          "Dokumentacija u Italiji najčešće je gotova za dva do četiri dana. Vikendi i praznici produžavaju rok, jer opštinske matične službe i prefekture tada rade ograničeno ili ne rade, a kod iznenadne smrti sve čeka odobrenje pravosudnih organa.",
          `Cena prevoza iz Italije zavisi od udaljenosti do mesta sahrane, vrste sanduka, usluga lokalne pogrebne službe, administrativnih taksi (na italijanske zahteve lepe se taksene marke, marche da bollo) i od izbora između vozila i aviona. Tačnu cenu dajemo u prvom razgovoru, a okvir je objašnjen na stranici ${L("/cenovnik", "cenovnik")}.`,
          `Pregled gradova iz kojih organizujemo prevoz nalazi se na stranici ${L("/italija", "prevoz pokojnika iz Italije")}.`,
        ],
      },
    ],
    faqs: [
      {
        q: "Koji konzulat izdaje sprovodnicu ako je pokojnik živeo u Venetu?",
        a: "Za Veneto, Furlaniju-Julijsku krajinu i Trentino-Alto Adiđe nadležan je Generalni konzulat Republike Srbije u Trstu. Lombardija, Pijemont, Emilija-Romanja, Ligurija i Valle d'Aosta spadaju pod Milano, a ostatak zemlje pod Ambasadu u Rimu.",
      },
      {
        q: "Da li italijanski izvod iz matične knjige umrlih treba prevoditi?",
        a: "Višejezični izvod (estratto plurilingue) izdat po CIEC konvenciji br. 16 u Srbiji se po pravilu prihvata bez legalizacije. Izvod samo na italijanskom jeziku prevodi sudski tumač, zato od opštine odmah tražimo višejezični obrazac.",
      },
      {
        q: "Koliko traje prevoz pokojnika iz Italije u Srbiju?",
        a: "Prikupljanje italijanskih i srpskih dokumenata obično traje dva do četiri dana. Sama vožnja iz Milana traje oko 11 sati, a iz Rima oko 13 sati čiste vožnje, uz pauze vozača.",
      },
      {
        q: "Može li se pokojnik iz Italije prevesti u Bosnu ili Crnu Goru?",
        a: "Može. Italijanska dokumenta su ista kao za Srbiju, a dozvolu za unos izdaje predstavništvo BiH odnosno Crne Gore. Iz Milana je do Sarajeva oko 1.030 km, a do Podgorice oko 1.190 km.",
      },
      {
        q: "Šta ako je smrt nastupila u saobraćajnoj nesreći ili iznenada?",
        a: "Tada je telo na raspolaganju pravosudnim organima (Procura della Repubblica), koji mogu naložiti obdukciju. Opština i prefektura izdaju svoja dokumenta tek kada tužilaštvo da odobrenje, pa rok zavisi od toga kada ono završi svoj deo.",
      },
      {
        q: "Da li se iz Italije može preneti urna?",
        a: "Može. Berlinski sporazum se ne odnosi na pepeo, ali Srbija i za urnu traži sprovodnicu, uz potvrdu o kremaciji i ostala dokumenta o smrti. Prevoz urne je jednostavniji jer ne zahteva metalni sanduk.",
      },
    ],
    relatedLinks: [
      { href: "/italija", title: "Prevoz pokojnika iz Italije" },
      { href: "/rim", title: "Prevoz pokojnika iz Rima" },
      { href: "/dokumentacija-za-prevoz-pokojnika", title: "Dokumentacija za prevoz pokojnika" },
      { href: "/blog-prevoz-pokojnika-avionom-vs-kombijem", title: "Prevoz avionom ili kombijem" },
      { href: "/blog-repatrijacija-pokojnika-pravni-aspekti", title: "Repatrijacija pokojnika — pravni aspekti" },
    ],
  },

  // ─────────────────────────────────────────────────────────────── Austrija
  {
    slug: "blog-prevoz-pokojnika-iz-austrije-korak-po-korak",
    title: "Prevoz pokojnika iz Austrije korak po korak | Vodič",
    description: "Prevoz pokojnika iz Austrije korak po korak: Totenbeschau, Standesamt, Leichenpass, konzulat u Beču ili Salcburgu i rute do Srbije, BiH i Crne Gore.",
    h1: "Prevoz pokojnika iz Austrije — korak po korak",
    lead: "Austrija ima jasan, ali strogo uređen postupak: bez nalaza mrtvozornika, upisa u matičnu knjigu i propusnice Leichenpass pokojnik ne može da pređe granicu. U nastavku su svi koraci redom, sa razlikama između Beča, Graca, Linca, Salcburga i Insbruka i sa uputstvima za sahranu u Srbiji, BiH ili Crnoj Gori.",
    date: "2025-12-20",
    updated: "2026-10-19",
    readTime: "6 min čitanja",
    sections: [
      {
        h: "Pregled postupka u osam koraka",
        p: [
          "Redosled je isti u svih devet austrijskih saveznih pokrajina, iako se nadležni organi ponegde razlikuju. Porodica ne mora sama da obilazi šaltere: zahtev za dozvolu za prevoz može da podnese i pogrebno preduzeće, pa je dovoljno da nam porodica da ovlašćenje i osnovne podatke. Postupak vodimo na nemačkom jeziku i javljamo šta je završeno.",
        ],
        ordered: true,
        list: [
          "<strong>Totenbeschau</strong> — lekar mrtvozornik utvrđuje smrt i izdaje nalaz (Totenbeschaubefund) i prateći list (Leichenbegleitschein).",
          "<strong>Preuzimanje tela</strong> — ovlašćena pogrebna služba prenosi pokojnika iz bolnice ili stana u rashladne prostorije.",
          "<strong>Standesamt</strong> — matična služba mesta smrti upisuje smrt i izdaje izvod (Sterbeurkunde), po mogućstvu višejezični.",
          "<strong>Freigabe zur Bestattung</strong> — telo se oslobađa za sahranu; kod neprirodne smrti tek posle odobrenja tužilaštva.",
          "<strong>Leichenpass / Überführungsbewilligung</strong> — dozvola za prevoz u inostranstvo od okružne uprave ili magistrata.",
          "<strong>Sprovodnica</strong> — srpska dozvola za unos posmrtnih ostataka, od Ambasade u Beču ili Generalnog konzulata u Salcburgu.",
          "<strong>Zatvaranje sanduka</strong> — pokojnik se polaže u hermetički zatvoren sanduk propisan za međunarodni prevoz.",
          "<strong>Prevoz i predaja</strong> — specijalizovanim pogrebnim vozilom do mrtvačnice ili groblja u mestu sahrane.",
        ],
      },
      {
        h: "Korak 1 i 2: Totenbeschau i preuzimanje pokojnika",
        p: [
          "U Austriji svaka smrt mora da prođe Totenbeschau — pregled koji obavlja ovlašćeni lekar mrtvozornik. U bolnici to radi bolnički lekar, a kada osoba premine kod kuće, porodica zove lekara ili hitnu pomoć, koji obaveštavaju nadležnog mrtvozornika. Pre tog pregleda telo se po pravilu ne pomera.",
          "Na Totenbeschau se izdaje i Leichenbegleitschein, prateći list koji ide uz pokojnika pri svakom premeštanju. Prema austrijskim propisima pokojnika smeju da prevoze samo ovlašćena pogrebna preduzeća, pa porodica ne može sama da organizuje prevoz, čak ni do granice.",
        ],
      },
      {
        h: "Korak 3 i 4: Standesamt i oslobađanje tela za sahranu",
        p: [
          "Smrt se upisuje u matičnoj službi (Standesamt) mesta u kom je nastupila. Za upis su potrebni lični dokumenti pokojnika — pasoš, a po potrebi i izvodi iz matičnih knjiga rođenih i venčanih — pa je korisno da ih porodica pronađe odmah.",
          "Od Standesamt-a tražimo višejezični izvod iz matične knjige umrlih. Austrija i Srbija primenjuju CIEC konvenciju br. 16, pa srpski konzulat i srpske matične službe takav izvod po pravilu prihvataju bez legalizacije.",
          "Telo je slobodno za sahranu kada postoji potvrda o smrti bez sumnje u neprirodan uzrok. Ako je smrt nastupila u nesreći, nasilno ili pod nejasnim okolnostima, tužilaštvo (Staatsanwaltschaft) može da naloži sudsku obdukciju, i tada ceo postupak čeka njegovo odobrenje.",
        ],
      },
      {
        h: "Korak 5: Leichenpass — Bezirkshauptmannschaft ili magistrat",
        p: [
          "Za prevoz preko granice Austrija izdaje višejezični Leichenpass, poznat i kao Überführungsbewilligung. Nadležnost uređuje svaka pokrajina posebno: u većini njih zahtev se podnosi okružnoj upravi (Bezirkshauptmannschaft) mesta smrti, a u statutarnim gradovima magistratu.",
          "Beč, Grac, Linc, Salcburg i Insbruk su statutarni gradovi, pa se za pokojnike preminule u tim gradovima Leichenpass dobija u gradskom magistratu. Za smrt u manjem mestu, recimo u okolini Linca ili u tirolskim dolinama, nadležna je Bezirkshauptmannschaft tog okruga. Preduslovi su svuda isti: obavljen Totenbeschau, smrt upisana u Standesamt i telo oslobođeno za sahranu.",
          `Zvanično objašnjenje postupka na nemačkom jeziku objavljeno je na državnom portalu ${X(AT_LEICHENPASS, "oesterreich.gv.at")}.`,
        ],
      },
      {
        h: "Korak 6: sprovodnica — Ambasada u Beču ili Generalni konzulat u Salcburgu",
        p: [
          "Sprovodnicu izdaje srpsko predstavništvo nadležno za mesto poslednjeg prebivališta pokojnika, a ne za mesto smrti. U Austriji su to dva predstavništva sa jasno podeljenom teritorijom.",
          `${X("https://vienna.mfa.gov.rs/", "Ambasada Republike Srbije u Beču")} (konzularno odeljenje) pokriva Beč, Donju Austriju, Gradišće, Štajersku i Korušku. ${X("https://salzburg.mfa.gov.rs/", "Generalni konzulat u Salcburgu")} pokriva Salcburg, Tirol, Forarlberg i Gornju Austriju.`,
          "Česta zabuna nastaje kod Linca: mnogi pretpostavljaju da sve ide preko Beča, ali Gornja Austrija spada pod Salcburg. Grac i Klagenfurt, s druge strane, pripadaju Beču. Uz zahtev se predaju originali — pasoš pokojnika, izvod iz matične knjige umrlih, lekarski nalaz o uzroku smrti i Leichenpass — a u zahtevu se navode mesto sahrane i ruta.",
        ],
      },
      {
        h: "Korak 7 i 8: sanduk, polazak i rute iz austrijskih gradova",
        p: [
          "Pre polaska pokojnik se polaže u hermetički zatvoren sanduk propisan za međunarodni prevoz, a uz sanduk putuju Leichenpass, sprovodnica i kopije ostalih dokumenata. Kada su dokumenti kompletni, iz većine austrijskih gradova pokojnik u Srbiju stiže istog ili sledećeg dana.",
          "Orijentacione udaljenosti do Beograda: iz Beča oko 620 km (oko 6 sati čiste vožnje), iz Graca oko 580 km, iz Linca oko 800 km, iz Salcburga oko 810 km i iz Insbruka oko 980 km. Stvarno vreme putovanja je duže zbog granice i obaveznih odmora vozača.",
          `Lokalne detalje opisali smo posebno za ${L("/bec", "Beč")}, ${L("/graz", "Grac")} i ${L("/linz", "Linc")}.`,
        ],
      },
      {
        h: "Prevoz pokojnika iz Austrije u BiH, Crnu Goru ili Srbiju",
        p: [
          "Mnoge porodice iz Austrije sahranjuju svoje najbliže u Bosni i Hercegovini. Kod prevoza pokojnika iz Austrije u BiH austrijski deo postupka je isti kao za Srbiju; razlika je u dozvoli za unos, koju ne izdaje srpski konzulat, nego ambasada ili konzulat Bosne i Hercegovine.",
          "Iz Graca je do Banje Luke oko 370 km, a iz Beča oko 550 km. Do Sarajeva ima oko 740 km iz Beča i oko 590 km iz Graca. Ko organizuje prevoz u Bosnu iz Salcburga, treba da računa sa oko 600 km do Banje Luke i oko 820 km do Sarajeva.",
          "Za prevoz pokojnika iz Austrije u Crnu Goru dozvolu izdaje crnogorsko predstavništvo, a put je duži: iz Beča do Podgorice ima oko 1.060 km, iz Graca oko 880 km. Za Severnu Makedoniju važi isti princip, uz oko 1.050 km od Beča do Skoplja.",
          "Kod prevoza u Srbiju sve ide preko srpske sprovodnice, a pokojnik se predaje porodici ili lokalnoj pogrebnoj službi u mestu sahrane, bilo da je to Beograd ili selo na jugu Srbije.",
        ],
      },
    ],
    faqs: [
      {
        q: "Koliko traje prevoz pokojnika iz Austrije?",
        a: "Austrijska dokumenta obično su gotova za jedan do tri dana, ako nije naložena obdukcija. Vožnja od Beča do Beograda traje oko šest sati, ne računajući pauze i granicu.",
      },
      {
        q: "Pokojnik je živeo u Lincu — gde se predaje zahtev za sprovodnicu?",
        a: "U Generalnom konzulatu Republike Srbije u Salcburgu, koji je nadležan za Gornju Austriju, Salcburg, Tirol i Forarlberg. Ambasada u Beču pokriva Beč, Donju Austriju, Gradišće, Štajersku i Korušku.",
      },
      {
        q: "Može li porodica sama da preveze pokojnika iz Austrije?",
        a: "Ne. Austrijski propisi dozvoljavaju prevoz pokojnika samo ovlašćenim pogrebnim preduzećima. Porodica može da prati prevoz, ali vozilo, sanduk i dokumenta moraju da budu u skladu sa pravilima za međunarodni prevoz.",
      },
      {
        q: "Da li austrijsku Sterbeurkunde treba prevoditi na srpski?",
        a: "Ako Standesamt izda višejezični izvod po CIEC konvenciji br. 16, prevod po pravilu nije potreban. Taj obrazac tražimo odmah pri upisu smrti, kako bi se izbegao dodatni korak kod sudskog tumača.",
      },
      {
        q: "Ko izdaje Leichenpass za pokojnika preminulog u Beču?",
        a: "Beč je istovremeno savezna pokrajina i statutarni grad, pa Leichenpass izdaje nadležna služba bečkog magistrata. U Gracu, Lincu, Salcburgu i Insbruku to je takođe gradski magistrat, a u ostalim mestima okružna uprava.",
      },
    ],
    relatedLinks: [
      { href: "/austrija", title: "Prevoz pokojnika iz Austrije" },
      { href: "/bec", title: "Prevoz pokojnika iz Beča" },
      { href: "/graz", title: "Prevoz pokojnika iz Graca" },
      { href: "/linz", title: "Prevoz pokojnika iz Linca" },
      { href: "/dokumentacija-za-prevoz-pokojnika", title: "Dokumentacija za prevoz pokojnika" },
    ],
  },

  // ─────────────────────────────────────────────────────────────── Švajcarska
  {
    slug: "blog-prevoz-pokojnika-iz-svajcarske-vodic",
    title: "Prevoz pokojnika iz Švajcarske u Srbiju i BiH — vodič",
    description: "Prevoz pokojnika iz Švajcarske: Zivilstandsamt, kantonalni Leichenpass, carina, konzulat u Cirihu ili ambasada u Bernu i rute do Srbije i Bosne.",
    h1: "Prevoz pokojnika iz Švajcarske — sve što treba znati",
    lead: "Švajcarska nije članica Evropske unije, ima četiri službena jezika i 26 kantona sa sopstvenim pravilima. Za porodicu to znači da dokumenta iz Ciriha i Ženeve ne izgledaju isto i da se na izlasku iz zemlje obavljaju carinske formalnosti. Ovaj vodič objašnjava kako postupak teče i šta se menja od kantona do kantona.",
    date: "2025-12-20",
    updated: "2026-10-19",
    readTime: "6 min čitanja",
    sections: [
      {
        h: "Šta Švajcarsku razlikuje od zemalja EU",
        p: [
          "Švajcarska je deo šengenskog prostora, pa na njenim granicama nema redovne pasoške kontrole, ali nije u carinskoj uniji EU. Zato se pri izlasku pokojnika iz zemlje obavljaju carinske formalnosti, a dokumenti koji prate sanduk moraju biti potpuni i međusobno usklađeni.",
          "Drugi izvor razlika je federalno uređenje. Smrt upisuje matična služba, ali ko izdaje dozvolu za prevoz u inostranstvo, kojim redom i uz koje priloge, određuje svaki kanton za sebe. Postupak u Cirihu ili kantonu Argau nije identičan postupku u Ženevi ili Tičinu.",
          "Švajcarska je strana oba međunarodna sporazuma o prevozu umrlih — berlinskog i strazburškog, koji je doneo Savet Evrope. Leichenpass izdat na osnovu njih omogućava da zapečaćen sanduk prođe kroz tranzitne države članice bez graničnih pregleda.",
        ],
      },
      {
        h: "Zivilstandsamt ili état civil: nazivi dokumenata na nemačkom i francuskom",
        p: [
          "Smrt se prijavljuje matičnoj službi mesta smrti. U nemačkom delu zemlje to je Zivilstandsamt, u francuskom office de l'état civil, a u Tičinu ufficio dello stato civile. Dokumenti nose nazive na jeziku kantona, što porodice često zbunjuje kada isti papir iz Ženeve i Ciriha izgleda potpuno drugačije.",
          "Švajcarska primenjuje CIEC konvenciju br. 16, pa matična služba može izdati višejezični izvod koji srpski organi po pravilu prihvataju bez legalizacije. To štedi vreme, naročito kod isprava na francuskom ili italijanskom. Najvažniji dokumenti i njihovi nazivi su sledeći:",
        ],
        list: [
          "<strong>Ärztliche Todesbescheinigung</strong> / <strong>certificat médical de décès</strong> — lekarska potvrda o smrti",
          "<strong>Todesschein</strong> ili <strong>Auszug aus dem Todesregister</strong> / <strong>acte de décès</strong> — izvod iz registra umrlih",
          "<strong>Leichenpass</strong> / <strong>laissez-passer mortuaire</strong> — propusnica za prevoz preko granice",
          "<strong>Einsargungs- und Versiegelungsprotokoll</strong> — zapisnik o polaganju u sanduk i pečaćenju, koji pojedini kantoni traže pre izdavanja propusnice",
        ],
      },
      {
        h: "Leichenpass po kantonima: isti dokument, različit put",
        p: [
          "Ko izdaje Leichenpass zavisi od kantona. U većini kantona to su matične službe okruga ili opština, u nekima kantonalni ili okružni lekar, a ponegde drugi organi. Kanton Cug je, na primer, ovu nadležnost od 1. januara 2025. preneo sa kantonalnog lekara na matičnu službu.",
          "Razlikuju se i preduslovi. U kantonu Argau Leichenpass izdaje matična služba okruga u kom je osoba preminula, i to tek kada ovlašćeni pogrebnik dostavi zapisnik da je telo propisno položeno u sanduk i da je sanduk zapečaćen. Sličan zahtev postoji i u kantonu Bazel-grad, dok drugi kantoni traže potvrdu pogrebnika u drugačijem obliku.",
          "Kod nejasnog ili neprirodnog uzroka smrti kantoni traže i da istražni organi oslobode telo za sahranu, što produžava rok. O takvom zastoju porodicu obaveštavamo čim dobijemo informaciju, kako bi termin sahrane mogao da se pomeri na vreme.",
        ],
      },
      {
        h: "Carinske formalnosti na izlasku iz Švajcarske",
        p: [
          "Pošto Švajcarska nije u carinskoj uniji EU, prevoz posmrtnih ostataka prolazi carinski postupak pri izlasku, a zatim se nastavlja kroz zemlje EU do Srbije, koja takođe ima svoju carinsku kontrolu. U praksi to znači dva prelaska spoljne carinske granice: iz Švajcarske u EU i iz EU u Srbiju.",
          "Za porodicu je važno da se unapred zna šta putuje uz sanduk — odeća, lični predmeti ili verska obeležja. Carinske papire pripremamo zajedno sa ostalom dokumentacijom, tako da vozilo na granici ne čeka zbog nepotpunih podataka.",
        ],
      },
      {
        h: "Generalni konzulat u Cirihu ili Ambasada u Bernu",
        p: [
          `Sprovodnicu izdaje srpsko predstavništvo nadležno za poslednje prebivalište pokojnika. ${X("https://zurich.mfa.gov.rs/", "Generalni konzulat Republike Srbije u Cirihu")} pokriva kantone Cirih, Lucern, Uri, Švic, Obvalden, Nidvalden, Glarus, Cug, Šafhauzen, oba Apencela, Sankt Galen, Graubinden, Argau i Turgau, kao i Kneževinu Lihtenštajn.`,
          `Svi ostali kantoni spadaju pod konzularno odeljenje ${X("https://berne.mfa.gov.rs/", "Ambasade u Bernu")} — između ostalih Bern, Ženeva, Vo (Lozana), oba Bazela, Soloturn, Fribur, Nešatel, Vale, Jura i Tičino. Ako je pokojnik živeo u Bazelu ili Lozani, zahtev ide u Bern, iako bi mnogi očekivali Cirih.`,
        ],
      },
      {
        h: "Rute iz Ciriha, Berna i Ženeve",
        p: [
          "Švajcarska je od Srbije udaljenija od Austrije, pa vreme na putu treba realno planirati. Iz Ciriha do Beograda ima oko 1.250 km (oko 13 sati čiste vožnje), iz Berna oko 1.370 km, a iz Ženeve oko 1.330 km. Sa obaveznim pauzama vozača i carinskim postupkom na dve granice putovanje traje osetno duže od same vožnje.",
          `Za porodice iz francuskog dela zemlje, oko Ženeve i Lozane, dokumenta se pribavljaju na francuskom, a sprovodnica u Bernu. Za Cirih i istok zemlje sve se završava na nemačkom i u konzulatu u Cirihu. Lokalne detalje opisali smo na stranicama ${L("/cirih", "prevoz pokojnika iz Ciriha")} i ${L("/zeneva", "prevoz pokojnika iz Ženeve")}.`,
          "Kada je mesto sahrane daleko na jugu, u Crnoj Gori ili Makedoniji, razmatra se i avionski prevoz. Odluku donosimo zajedno sa porodicom, prema roku sahrane i ukupnim troškovima.",
        ],
      },
      {
        h: "Prevoz pokojnika iz Švajcarske u Bosnu i ostale zemlje regiona",
        p: [
          "Za sahranu u Bosni i Hercegovini švajcarska dokumenta ostaju ista, a dozvolu za unos umesto srpske sprovodnice izdaje predstavništvo BiH. Iz Ciriha do Banje Luke ima oko 1.040 km, a do Sarajeva oko 1.260 km; iz Ženeve do Sarajeva oko 1.340 km.",
          "Za Crnu Goru i Severnu Makedoniju udaljenosti su veće: iz Ciriha do Podgorice oko 1.480 km, a do Skoplja oko 1.680 km. Iz Berna je do Skoplja oko 1.800 km, pa kod tako dugih ruta sa porodicom poredimo kopneni i avionski prevoz.",
          `Bez obzira na odredište, porodica ima jednu kontakt osobu koja prati i švajcarski i balkanski deo postupka. Pregled gradova i lokalnih procedura nalazi se na stranici ${L("/svajcarska", "prevoz pokojnika iz Švajcarske")}.`,
        ],
      },
    ],
    faqs: [
      {
        q: "Koji konzulat izdaje sprovodnicu ako je pokojnik živeo u Bazelu ili Ženevi?",
        a: "Konzularno odeljenje Ambasade Republike Srbije u Bernu. Konzulat u Cirihu pokriva Cirih, centralnu i istočnu Švajcarsku, Argau i Lihtenštajn, dok Bern pokriva sve ostale kantone, uključujući Ženevu, Vo, Bazel i Tičino.",
      },
      {
        q: "Da li je za prevoz pokojnika iz Švajcarske potreban carinski postupak?",
        a: "Da. Švajcarska nije u carinskoj uniji EU, pa se na izlasku obavljaju carinske formalnosti, a na ulasku u Srbiju još jednom. Te papire pripremamo zajedno sa Leichenpass-om i sprovodnicom.",
      },
      {
        q: "Ko izdaje Leichenpass u Švajcarskoj?",
        a: "Zavisi od kantona. Najčešće je to matična služba (Zivilstandsamt), ali u nekim kantonima i kantonalni ili okružni lekar. Pojedini kantoni pre izdavanja traže zapisnik pogrebnika o zatvaranju i pečaćenju sanduka.",
      },
      {
        q: "Da li dokumenta iz Ženeve na francuskom treba prevoditi?",
        a: "Ako matična služba izda višejezični izvod po CIEC konvenciji br. 16, prevod po pravilu nije potreban. Ostale isprave koje srpski organi traže na srpskom jeziku prevodi sudski tumač.",
      },
      {
        q: "Koliko traje prevoz pokojnika iz Švajcarske u Srbiju?",
        a: "Švajcarska i srpska dokumenta obično se prikupe za dva do četiri dana. Vožnja iz Ciriha do Beograda traje oko 13 sati, bez pauza vozača i zadržavanja na carini.",
      },
      {
        q: "Pokojnik je živeo u Lihtenštajnu — šta tada važi?",
        a: "Dokumenta o smrti i dozvolu za prevoz izdaju organi Lihtenštajna, a sprovodnicu Generalni konzulat Republike Srbije u Cirihu, koji je nadležan i za Kneževinu Lihtenštajn.",
      },
    ],
    relatedLinks: [
      { href: "/svajcarska", title: "Prevoz pokojnika iz Švajcarske" },
      { href: "/cirih", title: "Prevoz pokojnika iz Ciriha" },
      { href: "/zeneva", title: "Prevoz pokojnika iz Ženeve" },
      { href: "/blog-prevoz-pokojnika-avionom-vs-kombijem", title: "Prevoz avionom ili kombijem" },
    ],
  },

  // ─────────────────────────────────────────────────────────────── Pravni aspekti
  {
    slug: "blog-repatrijacija-pokojnika-pravni-aspekti",
    title: "Repatrijacija pokojnika: pravni okvir i potrebne dozvole",
    description: "Pravni aspekti repatrijacije pokojnika: sprovodnica, međunarodni sporazumi, CIEC izvodi, apostil, tranzit, neprirodna smrt i troškovi, jasno objašnjeno.",
    h1: "Repatrijacija pokojnika — pravni aspekti za porodicu",
    lead: "Prevoz pokojnika iz inostranstva nije samo logistika: istovremeno se primenjuju propisi zemlje u kojoj je nastupila smrt, zemalja kroz koje se prolazi i zemlje u kojoj će biti sahrana. Ovde je pravni okvir objašnjen bez stručnog žargona — šta koji dokument potvrđuje, ko ga izdaje i kada postupak može da zastane.",
    date: "2025-12-20",
    updated: "2026-10-19",
    readTime: "7 min čitanja",
    sections: [
      {
        h: "Tri pravna sistema u jednom prevozu",
        p: [
          "Svaki međunarodni prevoz pokojnika ima tri tačke. Zemlja smrti utvrđuje i upisuje smrt i odobrava da telo napusti njenu teritoriju. Zemlje kroz koje se prolazi uglavnom prihvataju tuđu propusnicu, ali samo ako je izdata po pravilima koja one priznaju. Zemlja sahrane, na kraju, odlučuje da li pokojnik može da uđe.",
          "Zato nijedan dokument sam po sebi nije dovoljan. Nemački ili austrijski Leichenpass ne zamenjuje srpsku sprovodnicu, a sprovodnica se ne može izdati dok strani organi ne završe svoj deo. Redosled je važan, i mnoga kašnjenja nastaju upravo kada se on ne ispoštuje.",
          "U Srbiji ovu oblast uređuju Zakon o sahranjivanju i grobljima i Pravilnik o uslovima i načinu postupanja sa posmrtnim ostacima umrlog lica (Službeni glasnik RS, broj 96/2016), koji propisuje i obrazac sprovodnice.",
        ],
      },
      {
        h: "Sprovodnica: dozvola za unos posmrtnih ostataka u Srbiju",
        p: [
          "Sprovodnica je isprava kojom se potvrđuju podaci o umrlom i ispunjenost uslova za prenošenje posmrtnih ostataka. Za prevoz iz inostranstva izdaje je srpska ambasada ili konzulat nadležan za poslednje prebivalište pokojnika. Zahtev može da podnese član porodice ili pogrebno preduzeće koje porodica ovlasti.",
          `Pravilnik predviđa i da službenik predstavništva koje izdaje sprovodnicu prisustvuje zatvaranju i lemljenju sanduka. Kompletno uputstvo objavljeno je na sajtu ${X(MFA_REMAINS, "Ministarstva spoljnih poslova Republike Srbije")}.`,
          "Prema tom uputstvu, uz zahtev se predaju originali sledećih dokumenata:",
        ],
        list: [
          "pasoš pokojnika;",
          "zahtev porodice ili ovlašćenog pogrebnog preduzeća sa mestom sahrane i rutom prevoza;",
          "izvod iz matične knjige umrlih koji je izdao strani organ;",
          "lekarski izveštaj o uzroku smrti;",
          "dozvola za prevoz zemlje u kojoj je nastupila smrt, na primer Leichenpass;",
          "za strane državljane — potvrda da je u Srbiji obezbeđeno grobno mesto.",
        ],
      },
      {
        h: "Međunarodni sporazumi: Berlin 1937. i Strazbur 1973.",
        p: [
          "Dva međunarodna sporazuma uređuju sam prevoz tela preko granica. Berlinski sporazum o prevozu umrlih iz 1937. uveo je jedinstvenu propusnicu za posmrtne ostatke i osnovna pravila o sanduku. Sporazum Saveta Evrope o prenosu posmrtnih ostataka, potpisan u Strazburu 1973, osavremenio je ta pravila: telo putuje u nepropusnom sanduku u kome su samo pokojnik i predmeti koji se sahranjuju s njim, a propusnicu izdaje država iz koje prevoz počinje.",
          "Za države koje su prihvatile oba sporazuma, strazburški zamenjuje berlinski. Nemačka i Italija primenjuju berlinska pravila, dok su Austrija, Švajcarska, Švedska, Norveška, Španija, Francuska i Grčka članice Strazburškog sporazuma. Oba sporazuma odnose se samo na telo — prevoz urne sa pepelom njima nije obuhvaćen.",
          "Za porodicu je dovoljno da zna ovo: propusnica izdata po tim sporazumima olakšava tranzit kroz države članice, ali ne odlučuje o ulasku u zemlju sahrane. Srbija, Bosna i Hercegovina, Crna Gora i Severna Makedonija za unos posmrtnih ostataka traže svoju dozvolu, bez obzira na to koja je propusnica izdata u zemlji smrti.",
        ],
      },
      {
        h: "Izvodi iz matičnih knjiga: CIEC konvencija, apostil i prevod",
        p: [
          "Strana isprava o smrti mora biti upotrebljiva pred srpskim organima — najpre pred konzulatom, a kasnije i u postupcima koje porodica vodi u Srbiji, na primer u ostavinskom postupku. Najjednostavnije je kada zemlja smrti i Srbija primenjuju Konvenciju CIEC br. 16 (Beč, 1976) o izdavanju višejezičnih izvoda iz matičnih knjiga.",
          "Tu konvenciju primenjuju, između ostalih, Srbija, Nemačka, Austrija, Švajcarska, Italija, Španija, Francuska i Bosna i Hercegovina. Višejezični izvod iz tih zemalja po pravilu se prihvata bez legalizacije, jer su rubrike standardizovane i čitljive na više jezika.",
          "Švedska, Danska i Norveška nisu članice te konvencije. Njihove isprave se overavaju apostilom po Haškoj konvenciji, a zatim prevode na srpski kod ovlašćenog sudskog tumača. Taj korak zahteva dodatno vreme, pa ga uključujemo u plan od prvog razgovora.",
        ],
      },
      {
        h: "Strani državljani i dvojno državljanstvo",
        p: [
          "Kada pokojnik nije bio državljanin Srbije, a porodica želi sahranu u Srbiji, uz ostala dokumenta prilaže se potvrda da je grobno mesto u Srbiji obezbeđeno. Tu potvrdu izdaje upravljač groblja na kom će biti sahrana, i pribavljamo je u dogovoru sa porodicom.",
          "Kod dvojnih državljana, na primer osoba sa srpskim i nemačkim ili austrijskim pasošem, predaje se i srpski pasoš ako ga je pokojnik imao, a podaci u stranom izvodu i srpskim ispravama moraju da se poklapaju. Razlike u pisanju imena — recimo slova ć ili đ koja strane matične službe pišu bez dijakritika — česte su i rešavaju se pre podnošenja zahteva, a ne na granici.",
          "Ako pokojnik nije imao važeći pasoš, traži se druga javna isprava kojom se dokazuje identitet, jer se sprovodnica po pravilniku izdaje na osnovu javne isprave o identitetu i potvrde o uzroku smrti.",
        ],
      },
      {
        h: "Tranzit kroz Srbiju i sahrana u zemljama regiona",
        p: [
          "Kada je mesto sahrane u Bosni i Hercegovini, Crnoj Gori ili Severnoj Makedoniji, dozvolu za unos izdaje predstavništvo te države. Ako ruta pri tome prolazi kroz Srbiju, potrebna je i srpska tranzitna sprovodnica. Za nju se prilažu ista dokumenta kao za običnu sprovodnicu, uz dozvolu države u kojoj će biti sahrana.",
          "Primer: pokojnik iz Nemačke sahranjuje se u Severnoj Makedoniji, a put po pravilu vodi kroz Srbiju. Tada se pribavljaju makedonska dozvola i srpska tranzitna sprovodnica, a ista ruta upisuje se u oba zahteva. Na sličan način planira se i prevoz u Crnu Goru ili BiH kada je trasa preko Srbije kraća.",
        ],
      },
      {
        h: "Neprirodna smrt, obdukcija i zarazne bolesti",
        p: [
          "Kada je smrt posledica nesreće, nasilja ili samoubistva, ili nastupi pod nejasnim okolnostima, telo je najpre na raspolaganju istražnim organima zemlje smrti — tužilaštvu, policiji ili sudu, zavisno od države. Oni mogu naložiti obdukciju, a pogrebna dokumenta izdaju se tek kada telo bude oslobođeno za sahranu.",
          "Porodica tu ne može mnogo da ubrza, ali može da izbegne dodatna kašnjenja: da odmah dostavi podatke o identitetu i da ne zakazuje sahranu dok istražni organi ne daju saglasnost. Neke zemlje za dozvolu za prevoz posle neprirodne smrti traže i posebnu potvrdu pravosudnih organa.",
          "Srpski Zakon o sahranjivanju i grobljima sadrži sličnu zaštitu: posmrtni ostaci osobe koja nije umrla prirodnom smrću mogu se kremirati samo uz odobrenje organa nadležnog za krivični postupak. Kod smrti od kuge ili velikih boginja sprovodnica se izdaje tek uz saglasnost Ministarstva zdravlja Srbije, koju pribavlja predstavništvo.",
        ],
      },
      {
        h: "Ko snosi troškove i šta može da pokrije osiguranje",
        p: [
          "Srpski zakon polazi od toga da sahranjivanje obezbeđuju srodnici i lica koja su bila dužna da se o pokojniku staraju, pa oni po pravilu snose i troškove. Kod repatrijacije to u praksi znači da porodica ugovara i plaća prevoz, osim ako troškove ne preuzme osiguranje ili druga ustanova.",
          "Pre odluke vredi proveriti putno zdravstveno osiguranje, osiguranje vezano za platnu karticu, polisu životnog osiguranja i eventualna prava preko poslodavca ili sindikata u zemlji u kojoj je pokojnik radio. Uslovi se jako razlikuju: neke polise pokrivaju repatrijaciju do određenog iznosa, neke samo uz prethodno odobrenje osiguravača, a neke je ne pokrivaju uopšte.",
          `Ako osiguranje učestvuje, osiguravača treba obavestiti pre ugovaranja prevoza i sačuvati sve originalne račune i dokumente. Transparentnu specifikaciju cene porodica od nas dobija već u prvom razgovoru, a okvir je opisan na stranici ${L("/cenovnik", "cenovnik")}.`,
        ],
      },
    ],
    faqs: [
      {
        q: "Ko može da podnese zahtev za sprovodnicu?",
        a: "Član porodice ili pogrebno preduzeće koje porodica ovlasti. Zahtev se predaje srpskom predstavništvu nadležnom za poslednje prebivalište pokojnika, uz originale dokumenata o smrti, pasoš i dozvolu za prevoz zemlje smrti.",
      },
      {
        q: "Da li Leichenpass ili passaporto mortuario zamenjuju sprovodnicu?",
        a: "Ne. Propusnica zemlje smrti dozvoljava da telo napusti tu zemlju i prođe tranzit, a sprovodnica je srpska dozvola za unos. Za sahranu u Srbiji potrebna su oba dokumenta.",
      },
      {
        q: "Da li je za urnu potrebna sprovodnica?",
        a: "Jeste. Međunarodni sporazumi o prevozu tela ne odnose se na pepeo, ali srpska pravila i za urnu traže sprovodnicu. Uz uobičajena dokumenta o smrti prilaže se i potvrda o kremaciji.",
      },
      {
        q: "Da li je za repatrijaciju potrebna odluka suda?",
        a: "U uobičajenom slučaju nije. Sud ili tužilaštvo uključuju se samo kod neprirodne ili nerazjašnjene smrti, kada telo mora biti oslobođeno za sahranu pre izdavanja dozvola za prevoz.",
      },
      {
        q: "Šta je tranzitna sprovodnica?",
        a: "To je srpska dozvola za prolazak posmrtnih ostataka kroz Srbiju kada je sahrana u trećoj zemlji, na primer u Severnoj Makedoniji. Prilažu se ista dokumenta kao za sprovodnicu, uz dozvolu države sahrane.",
      },
      {
        q: "Koja dokumenta iz Švedske ili Danske moraju da se prevedu?",
        a: "Pošto te zemlje nisu članice CIEC konvencije br. 16, izvod o smrti i ostale isprave overavaju se apostilom i prevode na srpski kod ovlašćenog sudskog tumača.",
      },
    ],
    relatedLinks: [
      { href: "/repatrijacija-pokojnika", title: "Repatrijacija pokojnika" },
      { href: "/dokumentacija-za-prevoz-pokojnika", title: "Dokumentacija za prevoz pokojnika" },
      { href: "/blog-sta-raditi-kada-neko-umre-u-inostranstvu", title: "Šta raditi kada neko umre u inostranstvu" },
      { href: "/blog-ekshumacija-i-prenos-umrle-osobe", title: "Ekshumacija i prenos posmrtnih ostataka" },
    ],
  },

  // ─────────────────────────────────────────────────────────────── Ekshumacija
  {
    slug: "blog-ekshumacija-i-prenos-umrle-osobe",
    title: "Ekshumacija: procedura, zakon, cena i prenos ostataka",
    description: "Ekshumacija u Srbiji: ko izdaje rešenje, uloga sanitarnog inspektora, potrebna dokumenta, od čega zavisi cena i prenos posmrtnih ostataka iz inostranstva.",
    h1: "Ekshumacija i prenos posmrtnih ostataka — procedura i zakon",
    lead: "Odluka o ekshumaciji retko je laka: najčešće je donose porodice koje žele da najbliže okupe u porodičnoj grobnici ili da posmrtne ostatke vrate u rodni kraj. Postupak u Srbiji je upravni, a ne sudski — u nastavku objašnjavamo ko ga odobrava, kako izgleda dan ekshumacije, od čega zavisi cena i kako se ostaci prenose iz inostranstva.",
    date: "2025-12-20",
    updated: "2026-10-19",
    readTime: "7 min čitanja",
    sections: [
      {
        h: "Kada se porodica odlučuje na ekshumaciju",
        p: [
          "Ekshumacija je iskopavanje posmrtnih ostataka iz groba radi prenosa na drugo grobno mesto. Razlozi su uglavnom porodični: prenos u novu porodičnu grobnicu, spajanje supružnika na istom groblju, povratak u rodno mesto ili prenos ostataka osobe koja je pre mnogo godina sahranjena u inostranstvu.",
          "Postoje i slučajevi u kojima postupak ne pokreće porodica. Kada se groblje ili njegov deo stavlja van upotrebe, opština može da naloži prenos posmrtnih ostataka, a zakon za takve slučajeve propisuje da troškove iskopavanja i prenosa snosi opština čiji je organ to naredio. Poseban slučaj je ekshumacija u krivičnom postupku, o kojoj je reč u nastavku.",
        ],
      },
      {
        h: "Ekshumacija i zakon: ko izdaje odobrenje",
        p: [
          "Osnovna pravila su u Zakonu o sahranjivanju i grobljima. On propisuje da se posmrtni ostaci mogu iskopati i preneti na drugo groblje uz prethodno odobrenje nadležnog opštinskog organa i organa sanitarne inspekcije, i to ako je na drugom groblju obezbeđeno grobno mesto.",
          "Postupak detaljnije uređuje Pravilnik o uslovima i načinu postupanja sa posmrtnim ostacima umrlog lica (Službeni glasnik RS, broj 96/2016). Prema njemu, odobrenje za iskopavanje izdaje opštinski organ uprave nadležan za komunalne poslove, u obliku rešenja, a samo iskopavanje se obavlja u prisustvu sanitarnog inspektora, koji proverava da li se sve radi na propisan način.",
          "Detalje — termine, takse i način zakazivanja — uređuju odluke skupština opština o sahranjivanju i grobljima i pravila upravljača groblja. Zato se postupak u Beogradu, Novom Sadu ili manjoj opštini može razlikovati u koracima, ali ne i u suštini.",
        ],
      },
      {
        h: "Da li je za ekshumaciju potrebna odluka suda?",
        p: [
          "Ne, kada ekshumaciju traži porodica. Na internetu se često može pročitati da je za ekshumaciju potrebno rešenje suda, ali to za redovan porodični prenos nije tačno: nadležni su opštinska uprava i sanitarna inspekcija.",
          "Sud ili javno tužilaštvo pojavljuju se samo kada je ekshumacija deo krivičnog ili drugog sudskog postupka — na primer kada je potrebno veštačenje radi utvrđivanja uzroka smrti ili identiteta. Takvu ekshumaciju nalaže organ koji vodi postupak, a porodica tada ne odlučuje o terminu i načinu.",
          "Upravni postupak ne služi za rešavanje porodičnih nesuglasica, pa je dobro da se oko prenosa dogovore svi bliski srodnici pre podnošenja zahteva, a naročito osoba koja je upisana kao korisnik grobnog mesta.",
        ],
      },
      {
        h: "Ekshumacija procedura korak po korak",
        p: ["Redosled koraka u Srbiji izgleda ovako, uz manje razlike od opštine do opštine:"],
        ordered: true,
        list: [
          "<strong>Potvrda upravljača groblja</strong> — javno komunalno preduzeće ili drugi upravljač izdaje potvrdu o korisniku grobnog mesta, lokaciji groba i datumu sahrane.",
          "<strong>Novo grobno mesto</strong> — obezbeđuje se grob ili grobnica u koju će ostaci biti preneti, jer je to zakonski uslov za odobrenje.",
          "<strong>Zahtev opštinskoj upravi</strong> — podnosi se organu nadležnom za komunalne poslove, uz potvrdu upravljača groblja i podatke o novom grobnom mestu.",
          "<strong>Rešenje o odobrenju</strong> — kada je rešenje izdato, termin se dogovara sa grobljem i sanitarnim inspektorom.",
          "<strong>Iskopavanje</strong> — obavlja se u prisustvu sanitarnog inspektora, uz zaštitnu opremu i dezinfekciju sanduka, ostataka, groba i neposredne okoline.",
          "<strong>Polaganje u novi sanduk</strong> — iskopani ostaci smeštaju se u metalni sanduk koji se zalemljuje i stavlja u drveni; ako su ostale samo kosti, one se u zatvorenoj vreći polažu u metalni sanduk odgovarajuće veličine.",
          "<strong>Prevoz i ponovna sahrana</strong> — uz sprovodnicu, do novog groblja u Srbiji ili u inostranstvu.",
        ],
      },
      {
        h: "Rokovi, godišnje doba i stanje groba",
        p: [
          "Zakon propisuje i minimalni rok počivanja u grobnom mestu od deset godina od sahrane, koji je važan pre svega za ponovno korišćenje istog groba. Da li se i pod kojim uslovima odobrava ranija ekshumacija radi prenosa, odlučuju opštinski organ i sanitarna inspekcija u konkretnom slučaju.",
          "Da li lokalna pravila ograničavaju ekshumacije u određenom delu godine, zavisi od opštine i groblja, pa to proveravamo pre zakazivanja termina. Na sam dan utiču i vremenski uslovi, naročito kod zemljanih grobova.",
          "Na tok posla utiče i stanje groba: da li je u pitanju zemljani grob ili grobnica, da li treba ukloniti spomenik ili ploču i koliko je vremena prošlo od sahrane. Od toga zavisi i vrsta sanduka u koji se ostaci polažu.",
        ],
      },
      {
        h: "Ekshumacija u inostranstvu i prenos u Srbiju",
        p: [
          "Mnoge porodice iz dijaspore žele da vrate posmrtne ostatke roditelja ili dede koji su pre više decenija sahranjeni u Nemačkoj, Austriji, Švajcarskoj ili drugoj zemlji. U tim zemljama grobno mesto se često koristi na ograničen broj godina, pa je istek tog roka čest povod da se porodica odluči na prenos.",
          "Za ekshumaciju u inostranstvu važe propisi te zemlje: odobrenje izdaju lokalni organi ili uprava groblja, ponekad uz saglasnost zdravstvene službe, a uslovi i rokovi razlikuju se od države do države i od grada do grada. Ekshumirani ostaci zatim putuju sa dozvolom za prevoz te zemlje i srpskom sprovodnicom, u kojoj se navodi da je pokojnik bio sahranjen i koji organ je odobrio iskopavanje.",
          `U Srbiji se pre toga obezbeđuje novo grobno mesto i dogovara sahrana. Ceo postupak vodimo kao jedan zadatak — od komunikacije sa upravom groblja u inostranstvu, na nemačkom kada je to potrebno, do predaje ostataka na groblju u Srbiji. Više o tome na stranici ${L("/ekshumacija", "ekshumacija i prenos posmrtnih ostataka")}.`,
        ],
      },
      {
        h: "Ekshumacija cena: od čega zavisi",
        p: [
          "Na pitanje koliko košta ekshumacija odgovor uvek zavisi od konkretnog groba i odredišta. Tačnu cenu dajemo kada znamo osnovne podatke, a na nju najviše utiču sledeće stavke:",
        ],
        list: [
          "takse za rešenje i usluge upravljača groblja na kom se vrši iskopavanje;",
          "vrsta groba — zemljani grob ili grobnica — i potreba da se ukloni i vrati spomenik ili ploča;",
          "novi sanduk propisan za iskopane ostatke ili manji metalni sanduk kada su ostale samo kosti;",
          "udaljenost do novog groblja i to da li se prelazi državna granica;",
          "dozvole i prevodi kada se ekshumacija obavlja u inostranstvu;",
          "troškovi novog grobnog mesta i ponovne sahrane.",
        ],
      },
      {
        h: "Prenos posmrtnih ostataka posle ekshumacije",
        p: [
          "Posle iskopavanja ostaci se prevoze specijalizovanim pogrebnim vozilom do novog groblja. Na teritoriji Srbije prevoz se obavlja u sanduku koji propisuje pravilnik, a za prenos van granica Srbije sanduk mora biti zalemljen metalni, smešten u drveni.",
          "Uz ostatke ide sprovodnica, čiji je obrazac propisan pravilnikom i na kojoj se nalazi potpis sanitarnog inspektora. Kada je novo groblje u Bosni i Hercegovini, Crnoj Gori ili Severnoj Makedoniji, potrebna je i dozvola zemlje odredišta, a kod ostataka koji iz inostranstva dolaze u Srbiju sprovodnicu izdaje srpsko predstavništvo.",
          `Za opšti pregled međunarodnog prevoza pogledajte i stranicu ${L("/repatrijacija-pokojnika", "repatrijacija pokojnika")}, a za pravni okvir tekst ${L("/blog-repatrijacija-pokojnika-pravni-aspekti", "pravni aspekti repatrijacije")}.`,
        ],
      },
    ],
    faqs: [
      {
        q: "Da li je za ekshumaciju potrebna odluka suda?",
        a: "Za porodični prenos nije. Odobrenje izdaje opštinski organ uprave nadležan za komunalne poslove, a iskopavanje prati sanitarni inspektor. Sud ili tužilaštvo nalažu ekshumaciju samo u krivičnom ili drugom sudskom postupku.",
      },
      {
        q: "Ko izdaje rešenje o ekshumaciji?",
        a: "Organ uprave nadležan za komunalne poslove u opštini ili gradu na čijoj se teritoriji nalazi groblje. Uz zahtev se prilaže potvrda upravljača groblja o korisniku groba, lokaciji groba i datumu sahrane.",
      },
      {
        q: "Koja dokumenta su potrebna za zahtev za ekshumaciju?",
        a: "Osnova je potvrda upravljača groblja i dokaz da je obezbeđeno novo grobno mesto. Tačan spisak, obrazac zahteva i takse određuje opština, pa ih proveravamo za svako groblje posebno.",
      },
      {
        q: "Mora li sanitarni inspektor da prisustvuje ekshumaciji?",
        a: "Mora. Prema pravilniku, iskopavanje se obavlja u prisustvu sanitarnog inspektora, koji utvrđuje da li se iskopavanje i prenošenje ostataka obavljaju na propisan način.",
      },
      {
        q: "Koliko košta ekshumacija?",
        a: "Cena zavisi od opštinskih taksi i usluga groblja, vrste groba, potrebnog sanduka, udaljenosti do novog groblja i od toga da li se prelazi granica. Tačan iznos dajemo kada dobijemo podatke o grobu i odredištu.",
      },
      {
        q: "Mogu li se posmrtni ostaci iz groba u Nemačkoj preneti u Srbiju?",
        a: "Mogu. Potrebna su odobrenja nemačkih organa i uprave groblja za iskopavanje, nemačka dozvola za prevoz, srpska sprovodnica i obezbeđeno grobno mesto u Srbiji. Te korake usklađujemo istovremeno, kako ostaci ne bi čekali između dve države.",
      },
    ],
    relatedLinks: [
      { href: "/ekshumacija", title: "Ekshumacija i prenos posmrtnih ostataka" },
      { href: "/repatrijacija-pokojnika", title: "Repatrijacija pokojnika" },
      { href: "/blog-repatrijacija-pokojnika-pravni-aspekti", title: "Repatrijacija pokojnika — pravni aspekti" },
      { href: "/pogrebni-sanduci", title: "Pogrebni sanduci" },
    ],
  },
];
