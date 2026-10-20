/**
 * Country hub pages — rendered by renderCountryPage() in scripts/build-site.js.
 *
 * Fields: slug, name, nameGenitive, schemaCountry, metaDescription (140–155 chars), heroLead,
 * intro[] (unique paragraphs), servicePoints[5], documents (optional — falls back to
 * facts.COUNTRY_META), relatedLinks[{ href, label }], howItWorks[], transportDuration,
 * routeFrom (key in facts.ROUTE_TABLE) + routeFromGen, cities[{ name, note, href? }],
 * cityFaqs[{ id, title, body }], faqSchema[{ q, a }]; optional: title (≤ 60 chars).
 * Distances come from facts.ROUTE_TABLE only.
 */
module.exports = [
  {
    slug: "austrija",
    name: "Austrija",
    nameGenitive: "Austrije",
    schemaCountry: "Austria",
    metaDescription:
      "Prevoz pokojnika iz Austrije u Srbiju, BiH i Crnu Goru: Leichenpass, sprovodnica i sva dokumenta na jednom mestu. Govorimo nemački, dostupni smo 24/7.",
    heroLead:
      "Preuzimamo pokojnike iz Beča, Graca, Linca, Salcburga, Insbruka i svih drugih mesta u Austriji i prevozimo ih do mesta sahrane u Srbiji, Bosni i Hercegovini, Crnoj Gori ili Severnoj Makedoniji. Sa austrijskim službama razgovaramo na nemačkom, a porodica ima jednu osobu za sva pitanja.",
    intro: [
      "Austrija je za mnoge porodice iz Srbije i Bosne i Hercegovine drugi dom. Zajednica naših ljudi u Beču i drugim austrijskim gradovima jedna je od najvećih u dijaspori, a mnogi su i u penziji ostali blizu dece i unuka. Zato se prevoz pokojnika iz Austrije najčešće traži za osobe koje su ovde živele decenijama, ali i za one koji su bili u poseti ili na lečenju. Sahrana se ipak često želi u rodnom mestu, pored predaka — u Srbiji, Republici Srpskoj, Federaciji BiH ili Crnoj Gori.",
      "Austrija je najbliža zemlja zapadne Evrope sa velikom našom zajednicom, pa su i rute kratke: od Beča do Beograda ima oko 620 km, a od Graca do Banje Luke svega oko 370 km. Iz istočne Austrije put najčešće vodi preko Mađarske, a iz Štajerske i Koruške preko Slovenije i Hrvatske. Na ovakvim relacijama drumski prevoz pogrebnim vozilom gotovo je uvek jednostavniji od avionskog, jer nema pretovara ni aerodromskih procedura.",
      "Specifičnost austrijskog postupka je mrtvozornički pregled (Totenbeschau): nalaz mrtvozornika je osnova za sva dalja dokumenta, a pre njega se pokojnik po pravilu ne prevozi. Dozvolu za prevoz u inostranstvo izdaje okružna uprava (Bezirkshauptmannschaft), a u statutarnim gradovima kao što su Grac, Linc, Salcburg ili Insbruk gradski magistrat. Za srpsku sprovodnicu u Austriji postoje dva nadležna predstavništva — Ambasada u Beču i Generalni konzulat u Salcburgu — a koje je nadležno, zavisi od pokrajine u kojoj je pokojnik imao poslednje prebivalište.",
    ],
    servicePoints: [
      "Preuzimanje iz bolnice, doma za stare ili stana bilo gde u Austriji, od Gradišća do Tirola i Forarlberga",
      "Izvod iz matične knjige umrlih na višejezičnom obrascu i dozvola za prevoz (Leichenpass)",
      "Zahtev za sprovodnicu u Ambasadi u Beču ili Generalnom konzulatu u Salcburgu, prema prebivalištu pokojnika",
      "Dozvole za sahranu u BiH, Crnoj Gori ili Severnoj Makedoniji preko predstavništava tih zemalja u Austriji",
      "Razgovori sa austrijskim bolnicama, matičnim službama i magistratima na nemačkom jeziku",
    ],
    relatedLinks: [
      { href: "/nemacka", label: "prevoz pokojnika iz Nemačke" },
      { href: "/svajcarska", label: "prevoz pokojnika iz Švajcarske" },
    ],
    howItWorks: [
      "Prvi korak je vaš poziv: zapisujemo gde je smrt nastupila, gde je pokojnik bio prijavljen i gde porodica želi sahranu. Ako je osoba preminula u bolnici ili domu za stare, ustanova sama poziva mrtvozornika; ako je preminula kod kuće, pregled obavlja lekar mrtvozornik (Totenbeschauer) nadležan za to mesto. Kada okolnosti smrti nisu jasne, uključuje se policija, a tužilaštvo može da naloži obdukciju — to je najčešći razlog da se postupak produži za nekoliko dana.",
      "Sa nalazom mrtvozornika smrt se upisuje u matičnu službu (Standesamt) mesta smrti. Tražimo izvod iz matične knjige umrlih na višejezičnom obrascu: Austrija i Srbija su članice konvencije CIEC br. 16 (Beč, 1976), pa se taj izvod u Srbiji i Bosni i Hercegovini prihvata bez legalizacije. Zatim kod okružne uprave ili magistrata podnosimo zahtev za Leichenpass, koji se u austrijskim propisima zove i Überführungsbewilligung.",
      "Paralelno pripremamo zahtev za sprovodnicu. Za pokojnike sa poslednjim prebivalištem u Beču, Donjoj Austriji, Gradišću, Štajerskoj ili Koruškoj nadležno je konzularno odeljenje Ambasade Srbije u Beču, a za Gornju Austriju, Salcburg, Tirol i Forarlberg Generalni konzulat u Salcburgu. Ako je sahrana u BiH, Crnoj Gori ili Severnoj Makedoniji, dozvolu za unos posmrtnih ostataka tražimo od predstavništva te zemlje u Austriji.",
      "Kada su dokumenta spremna, pokojnika polažemo u hermetički zatvoren sanduk propisan za međunarodni prevoz i krećemo specijalizovanim pogrebnim vozilom. Porodicu obaveštavamo o polasku, prelasku granice i očekivanom dolasku, a na odredištu pokojnika predajemo porodici ili lokalnoj pogrebnoj službi koja organizuje sahranu. Sve korake detaljno smo opisali u tekstu <a href=\"/blog-prevoz-pokojnika-iz-austrije-korak-po-korak\" class=\"text-primary\">prevoz pokojnika iz Austrije — korak po korak</a>.",
    ],
    transportDuration: "1–3 dana",
    routeFrom: "bec",
    routeFromGen: "Beča",
    cities: [
      { name: "Beč", href: "/bec", note: "Najveća naša zajednica u Austriji; sprovodnicu izdaje Ambasada u Beču, a do Beograda je oko 620 km." },
      { name: "Grac", href: "/graz", note: "Štajerska; najkraći put prema Banjoj Luci, oko 370 km preko Slovenije i Hrvatske." },
      { name: "Linc", href: "/linz", note: "Gornja Austrija; za sprovodnicu je nadležan Generalni konzulat u Salcburgu." },
      { name: "Salcburg", href: "/salcburg", note: "Sedište generalnog konzulata za zapad zemlje; do Beograda oko 810 km." },
      { name: "Insbruk", href: "/insbruk", note: "Tirol; jedna od dužih austrijskih relacija, oko 980 km do Beograda." },
      { name: "Klagenfurt", note: "Koruška; sprovodnicu izdaje Ambasada u Beču, a put vodi preko Slovenije." },
    ],
    cityFaqs: [
      {
        id: "Bec",
        title: "Prevoz pokojnika iz Beča",
        body:
          "Beč je naša najčešća polazna tačka u Austriji. Kada smrt nastupi u bečkoj bolnici ili domu za stare, preuzimamo pokojnika direktno od ustanove, a dozvolu za prevoz u Beču izdaje gradski magistrat. O bečkim institucijama i rokovima više piše na stranici <a href=\"/bec\" class=\"text-primary\">prevoz pokojnika iz Beča</a>.",
      },
      {
        id: "Grac",
        title: "Prevoz pokojnika iz Graca",
        body:
          "Iz Graca i ostatka Štajerske put vodi preko Slovenije i Hrvatske, što je posebno zgodno kada je sahrana u Republici Srpskoj ili severnoj Bosni. Grac je statutarni grad, pa dozvolu za prevoz izdaje magistrat, a sprovodnicu konzularno odeljenje Ambasade u Beču. Više: <a href=\"/graz\" class=\"text-primary\">prevoz pokojnika iz Graca</a>.",
      },
      {
        id: "Linc",
        title: "Prevoz pokojnika iz Linca",
        body:
          "Linc i Gornja Austrija spadaju u konzularnu oblast Generalnog konzulata u Salcburgu, što porodice često ne znaju pa se bespotrebno obraćaju Beču. Mi zahtev odmah podnosimo na pravo mesto. Do Beograda je oko 800 km, a postupak je opisan na stranici <a href=\"/linz\" class=\"text-primary\">prevoz pokojnika iz Linca</a>.",
      },
      {
        id: "SalcburgTirol",
        title: "Prevoz pokojnika iz Salcburga, Tirola i Forarlberga",
        body:
          "Zapadna Austrija je od Srbije udaljenija — iz Salcburga je do Beograda oko 810 km, a iz Insbruka oko 980 km — ali je postupak isti: mrtvozornički pregled, upis u Standesamt, Leichenpass i sprovodnica iz Generalnog konzulata u Salcburgu. Iz Forarlberga, uz samu granicu sa Švajcarskom, računajte na nešto dužu vožnju.",
      },
    ],
    faqSchema: [
      {
        q: "Da li prevozite pokojnike iz Austrije u Bosnu i Hercegovinu?",
        a: "Da, prevoz iz Austrije u BiH je jedan od najčešćih. Iz Beča do Banje Luke ima oko 550 km, do Sarajeva oko 740 km, a iz Graca do Banje Luke svega oko 370 km. Za sahranu u BiH dozvolu za unos posmrtnih ostataka izdaje ambasada ili konzulat Bosne i Hercegovine u Austriji, a zahtev podnosimo mi.",
      },
      {
        q: "Koliko traje prevoz pokojnika iz Austrije u Srbiju?",
        a: "Ceo postupak najčešće traje 1–3 dana. Vožnja iz Beča do Beograda je oko 620 km, odnosno oko 6 sati bez pauza, a iz Linca oko 800 km. Najviše vremena odlazi na austrijska dokumenta i sprovodnicu; duže se čeka samo ako tužilaštvo naloži obdukciju.",
      },
      {
        q: "Da li organizujete prevoz pokojnika iz Austrije u Crnu Goru?",
        a: "Da. Iz Beča do Podgorice ima oko 1.060 km, a iz Graca oko 880 km. Za sahranu u Crnoj Gori dozvolu izdaje predstavništvo Crne Gore u Austriji, a austrijska dokumenta, sanduk i prevoz do mesta sahrane preuzimamo mi.",
      },
      {
        q: "Ko izdaje Leichenpass u Austriji?",
        a: "Dozvolu za prevoz pokojnika u inostranstvo (Leichenpass ili Überführungsbewilligung) izdaje nadležna okružna uprava — Bezirkshauptmannschaft — a u statutarnim gradovima magistrat. Zahtev podnosimo mi, uz nalaz mrtvozornika i izvod iz matične knjige umrlih.",
      },
    ],
  },
  {
    slug: "svajcarska",
    name: "Švajcarska",
    nameGenitive: "Švajcarske",
    schemaCountry: "Switzerland",
    metaDescription:
      "Prevoz pokojnika iz Švajcarske u Srbiju i BiH: kantonalni Leichenpass, carina i sprovodnica iz Ciriha ili Berna. Preuzimamo iz svih kantona, 24/7.",
    heroLead:
      "Organizujemo prevoz pokojnika iz Ciriha, Ženeve, Bazela, Berna, Lozane i svih ostalih kantona, kao i iz Lihtenštajna, do mesta sahrane u Srbiji, Bosni i Hercegovini, Crnoj Gori ili Severnoj Makedoniji. Kantonalne dozvole, carinske formalnosti i sprovodnicu preuzimamo mi.",
    intro: [
      "U Švajcarskoj živi brojna zajednica ljudi iz Srbije, Bosne i Hercegovine i Crne Gore, najviše u nemačkom govornom području — oko Ciriha, Bazela, Sankt Galena i u Argauu — ali i u Ženevi i kantonu Vo. Mnogi su došli kao sezonski radnici i ostali generacijama. I kada je ceo radni vek proveden u Švajcarskoj, porodice često žele da bliska osoba počiva u zavičaju, pored roditelja i predaka.",
      "Švajcarska nije članica Evropske unije, i to je najvažnija razlika u odnosu na Nemačku ili Austriju: pri izlasku iz zemlje obavljaju se carinske formalnosti, a dokumenta moraju biti potpuna pre nego što pogrebno vozilo krene. Iz Ciriha do Beograda ima oko 1.250 km, a iz Ženeve oko 1.330 km, pa porodicama predstavljamo i drumski prevoz i prevoz avionom sa aerodroma u Cirihu ili Ženevi.",
      "Drugo što porodice iznenadi jeste da ne postoji jedinstven švajcarski postupak. Smrt upisuje matična služba (Zivilstandsamt, u francuskim kantonima état civil), a Leichenpass izdaje kantonalni organ — koji je to organ i koja dokumenta traži, zavisi od kantona. Zato na samom početku proveravamo pravila kantona u kom je nastupila smrt i prema njima slažemo papire, kako ne bi bilo vraćanja zahteva.",
    ],
    servicePoints: [
      "Preuzimanje pokojnika iz svih švajcarskih kantona i iz Lihtenštajna",
      "Kantonalni Leichenpass i izvod iz registra umrlih (Zivilstandsamt / état civil)",
      "Carinske formalnosti pri izlasku iz Švajcarske, koja nije članica EU",
      "Sprovodnica iz Generalnog konzulata u Cirihu ili Ambasade u Bernu, prema prebivalištu pokojnika",
      "Drumski prevoz ili prevoz avionom iz Ciriha i Ženeve, prema željama porodice",
    ],
    relatedLinks: [
      { href: "/austrija", label: "prevoz pokojnika iz Austrije" },
      { href: "/nemacka", label: "prevoz pokojnika iz Nemačke" },
    ],
    howItWorks: [
      "Kada nas pozovete, prvo utvrđujemo kanton u kom je smrt nastupila i kanton poslednjeg prebivališta pokojnika — od toga zavisi ko izdaje dozvolu za prevoz i koje srpsko predstavništvo izdaje sprovodnicu. Lekar koji je utvrdio smrt izdaje lekarsku potvrdu o smrti (ärztliche Todesbescheinigung, odnosno certificat médical de décès), a kod nasilne ili nejasne smrti telo se predaje tek kada to odobri tužilaštvo.",
      "Smrt se prijavljuje matičnoj službi, koja izdaje izvod iz registra umrlih (Auszug aus dem Todesregister, acte de décès). Švajcarska je, kao i Srbija, članica konvencije CIEC br. 16, pa izvod na višejezičnom obrascu srpski organi prihvataju bez legalizacije. Sa tim dokumentima tražimo Leichenpass od nadležnog kantonalnog organa.",
      "Za sprovodnicu se obraćamo Generalnom konzulatu u Cirihu, nadležnom za Cirih i niz centralnih i istočnih kantona — između ostalih Lucern, Cug, Argau, Sankt Galen i Graubinden — kao i za Lihtenštajn. Za ostale kantone, uključujući Bern, Ženevu, Vo, Bazel i Tičino, nadležno je konzularno odeljenje Ambasade u Bernu. Ako je sahrana u BiH, Crnoj Gori ili Severnoj Makedoniji, dozvolu izdaje predstavništvo te zemlje u Švajcarskoj.",
      "Pre polaska pokojnika polažemo u hermetički zatvoren sanduk propisan za međunarodni prevoz i pripremamo carinsku dokumentaciju za izlazak iz zemlje. Drumom se najčešće vozi kroz Austriju, a sa juga zemlje kroz severnu Italiju; ako porodica izabere avion, organizujemo prevoz do aerodroma, let i preuzimanje u regionu. Više o razlikama pročitajte u tekstu <a href=\"/blog-prevoz-pokojnika-avionom-vs-kombijem\" class=\"text-primary\">prevoz pokojnika avionom ili kombijem</a>, a o švajcarskim specifičnostima u <a href=\"/blog-prevoz-pokojnika-iz-svajcarske-vodic\" class=\"text-primary\">vodiču za Švajcarsku</a>.",
    ],
    transportDuration: "2–4 dana",
    routeFrom: "cirih",
    routeFromGen: "Ciriha",
    cities: [
      { name: "Cirih", href: "/cirih", note: "Najveći grad i sedište generalnog konzulata; do Beograda oko 1.250 km." },
      { name: "Ženeva", href: "/zeneva", note: "Francuski deo zemlje; sprovodnicu izdaje Ambasada u Bernu, a do Beograda je oko 1.330 km." },
      { name: "Bazel", note: "Grad na granici sa Nemačkom i Francuskom; nadležna je Ambasada u Bernu." },
      { name: "Bern", href: "/bern", note: "Glavni grad i sedište ambasade; do Beograda oko 1.370 km." },
      { name: "Lozana", note: "Kanton Vo; dokumenta na francuskom, sprovodnica iz Berna." },
      { name: "Sankt Galen", note: "Istočna Švajcarska; nadležan je Generalni konzulat u Cirihu." },
    ],
    cityFaqs: [
      {
        id: "Cirih",
        title: "Prevoz pokojnika iz Ciriha",
        body:
          "Iz Ciriha i okolnih kantona pokojnike preuzimamo iz bolnica, staračkih domova i stanova, a sprovodnicu tražimo od Generalnog konzulata Srbije u Cirihu. Pošto je međunarodni aerodrom u blizini, porodica može da bira između drumskog i avionskog prevoza. Detalji: <a href=\"/cirih\" class=\"text-primary\">prevoz pokojnika iz Ciriha</a>.",
      },
      {
        id: "Zeneva",
        title: "Prevoz pokojnika iz Ženeve",
        body:
          "U Ženevi se dokumenta izdaju na francuskom, a izvod iz registra umrlih zove se acte de décès. Sprovodnicu za pokojnike iz Ženeve izdaje Ambasada Srbije u Bernu, a ne konzulat u Cirihu. Više na stranici <a href=\"/zeneva\" class=\"text-primary\">prevoz pokojnika iz Ženeve</a>.",
      },
      {
        id: "BazelBern",
        title: "Prevoz pokojnika iz Bazela i Berna",
        body:
          "Bazel i Bern spadaju u nadležnost Ambasade Srbije u Bernu. Iz Bazela, koji se graniči sa Nemačkom, drumski put često vodi kroz Nemačku i Austriju. Iz Berna do Beograda ima oko 1.370 km, a do Banje Luke oko 1.160 km.",
      },
      {
        id: "Lihtenstajn",
        title: "Prevoz pokojnika iz Lihtenštajna",
        body:
          "Lihtenštajn je u carinskoj uniji sa Švajcarskom, pa se pri izlasku pokojnika iz zemlje primenjuju slične carinske formalnosti. Za sprovodnicu je nadležan Generalni konzulat Srbije u Cirihu, a dokumenta o smrti pribavljamo kod nadležnih organa Kneževine.",
      },
    ],
    faqSchema: [
      {
        q: "Da li prevozite pokojnike iz Švajcarske u Bosnu i Hercegovinu?",
        a: "Da. Iz Ciriha do Banje Luke ima oko 1.040 km, a do Sarajeva oko 1.260 km, pa je drumski prevoz uobičajen izbor. Za sahranu u BiH dozvolu izdaje ambasada ili konzulat Bosne i Hercegovine u Švajcarskoj, a mi pripremamo i švajcarska dokumenta i carinske formalnosti.",
      },
      {
        q: "Koliko traje prevoz pokojnika iz Švajcarske u Srbiju?",
        a: "Ceo postupak najčešće traje 2–4 dana. Vožnja od Ciriha do Beograda je oko 1.250 km, odnosno oko 13 sati čiste vožnje, kojoj treba dodati propisane odmore vozača i carinsku kontrolu pri izlasku iz Švajcarske.",
      },
      {
        q: "Zašto je kod prevoza iz Švajcarske potrebna carina?",
        a: "Švajcarska nije članica Evropske unije, pa se posmrtni ostaci pri izlasku iz zemlje prijavljuju carini. Potrebnu dokumentaciju pripremamo unapred, kako se na granici ne bi gubilo vreme.",
      },
      {
        q: "Koliko košta prevoz pokojnika iz Švajcarske?",
        a: "Cena zavisi od kantona iz kog se pokojnik preuzima, mesta sahrane, izbora između drumskog i avionskog prevoza i kantonalnih taksi. Tačan iznos dobijate već u prvom razgovoru, a stavke od kojih se cena sastoji opisane su u <a href=\"/cenovnik\" class=\"text-primary\">cenovniku</a>.",
      },
    ],
  },
  {
    slug: "italija",
    name: "Italija",
    nameGenitive: "Italije",
    schemaCountry: "Italy",
    metaDescription:
      "Prevoz pokojnika iz Italije u Srbiju, BiH i Crnu Goru: passaporto mortuario i sprovodnica iz Rima, Milana ili Trsta. Preuzimamo iz cele Italije, 24/7.",
    heroLead:
      "Preuzimamo pokojnike iz Milana, Trsta, Venecije, Torina, Rima i svih drugih mesta u Italiji i prevozimo ih do mesta sahrane u Srbiji, Bosni i Hercegovini, Crnoj Gori ili Severnoj Makedoniji. Italijansku dokumentaciju i sprovodnicu pribavljamo mi, a porodica dobija jednu kontakt osobu.",
    intro: [
      "Najveći deo naše zajednice u Italiji živi na severu zemlje — u Lombardiji, Venetu, Furlaniji-Julijskoj krajini i Emiliji-Romanji — gde su mnogi decenijama radili u fabrikama, na gradilištima i u ugostiteljstvu. Trst ima i staru srpsku zajednicu sa pravoslavnom crkvom Svetog Spiridona, a porodice iz Srbije i BiH žive i u Rimu i drugim gradovima centralne Italije. Kada neko premine daleko od kuće, želja da počiva u rodnom mestu sasvim je razumljiva, a naš posao je da je pretvorimo u jasan plan.",
      "Sever Italije je relativno blizu: od Milana do Beograda ima oko 1.020 km, a do Banje Luke oko 810 km, uglavnom autoputem preko Slovenije i Hrvatske. Iz Rima je put duži — oko 1.280 km do Beograda — ali se i tada najčešće bira drumski prevoz, jer ne zahteva pretovar i dodatnu avio-dokumentaciju. Za udaljeni jug zemlje i ostrva razmatramo i avion, ako porodici tako više odgovara.",
      "Italija ima i posebnost koju porodice retko znaju: srpska predstavništva su tri. Za Lombardiju, Pijemont, Emiliju-Romanju, Liguriju i Dolinu Aoste sprovodnicu izdaje Generalni konzulat u Milanu, za Furlaniju-Julijsku krajinu, Veneto i Trentino-Južni Tirol Generalni konzulat u Trstu, a za centralnu i južnu Italiju konzularno odeljenje Ambasade u Rimu. Predstavništvo se određuje prema poslednjem prebivalištu pokojnika, a ne prema mestu smrti.",
    ],
    servicePoints: [
      "Preuzimanje iz bolnice, mrtvačnice (obitorio) ili doma bilo gde u Italiji, od Alpa do Sicilije",
      "Izvod iz matične knjige umrlih iz opštine (Comune) na višejezičnom obrascu",
      "Dozvola opštine za prevoz i međunarodna propusnica passaporto mortuario",
      "Sprovodnica iz Milana, Trsta ili Rima, prema poslednjem prebivalištu pokojnika",
      "Drumski prevoz preko Slovenije i Hrvatske, a za jug i ostrva i avionom po dogovoru",
    ],
    relatedLinks: [
      { href: "/austrija", label: "prevoz pokojnika iz Austrije" },
      { href: "/svajcarska", label: "prevoz pokojnika iz Švajcarske" },
    ],
    howItWorks: [
      "Posle vašeg poziva preuzimamo kontakt sa bolnicom ili ustanovom u kojoj se pokojnik nalazi. U Italiji smrt potvrđuje lekar mrtvozornik (medico necroscopo), koji izdaje certificato necroscopico. Kod saobraćajne nesreće ili nejasnih okolnosti o daljem postupku odlučuje tužilaštvo (Procura della Repubblica), što može da produži čekanje na predaju tela.",
      "Smrt se zatim prijavljuje matičnoj službi opštine (Comune) u kojoj je nastupila, koja sastavlja atto di morte. Tražimo izvod na višejezičnom obrascu, koji srpski organi zbog konvencije CIEC br. 16 prihvataju bez legalizacije. Opština izdaje i dozvolu za prevoz posmrtnih ostataka, a za prelazak granice pribavljamo passaporto mortuario, za koji je nadležna prefektura.",
      "Istovremeno podnosimo zahtev za sprovodnicu u Milanu, Trstu ili Rimu, odnosno kod predstavništva BiH, Crne Gore ili Severne Makedonije ako je sahrana tamo. Za pokojnike koji su bili strani državljani uz zahtev se prilaže i potvrda da je obezbeđeno grobno mesto u Srbiji, pa porodici pomažemo da je pribavi od uprave groblja u mestu sahrane.",
      "Pokojnik se polaže u hermetički zatvoren sanduk propisan za međunarodni prevoz, a vožnja sa severa Italije vodi preko Slovenije i Hrvatske do Srbije ili BiH. Porodicu obaveštavamo o svakom koraku, sve do predaje u mestu sahrane. Iskustva i savete za ovu zemlju sabrali smo u <a href=\"/blog-prevoz-pokojnika-iz-italije-vodic\" class=\"text-primary\">vodiču za prevoz pokojnika iz Italije</a>.",
    ],
    transportDuration: "2–4 dana",
    routeFrom: "milano",
    routeFromGen: "Milana",
    cities: [
      { name: "Milano", href: "/milano", note: "Lombardija; sedište generalnog konzulata, do Beograda oko 1.020 km." },
      { name: "Trst", note: "Na samoj granici sa Slovenijom; sprovodnicu izdaje Generalni konzulat u Trstu." },
      { name: "Rim", href: "/rim", note: "Centralna Italija; nadležna je Ambasada u Rimu, a do Beograda je oko 1.280 km." },
      { name: "Venecija", note: "Veneto; za sprovodnicu je nadležan Generalni konzulat u Trstu." },
      { name: "Torino", note: "Pijemont; spada u konzularnu oblast Milana." },
      { name: "Bolonja", note: "Emilija-Romanja; sprovodnicu izdaje Generalni konzulat u Milanu." },
    ],
    cityFaqs: [
      {
        id: "Milano",
        title: "Prevoz pokojnika iz Milana",
        body:
          "Milano je jedna od najčešćih polaznih tačaka u Italiji. Opština izdaje dozvolu za prevoz, a sprovodnicu Generalni konzulat Srbije u Milanu, nadležan i za ostatak Lombardije, Pijemont, Emiliju-Romanju, Liguriju i Dolinu Aoste. Iz Milana do Banje Luke ima oko 810 km, a do Sarajeva oko 1.030 km.",
      },
      {
        id: "Trst",
        title: "Prevoz pokojnika iz Trsta",
        body:
          "Trst leži uz granicu sa Slovenijom, pa je prevoz odavde jedna od kraćih italijanskih relacija ka Balkanu. U gradu deluje i Generalni konzulat Srbije, nadležan za Furlaniju-Julijsku krajinu, Veneto i Trentino-Južni Tirol, tako da se italijanska dokumenta i sprovodnica rešavaju u istom gradu.",
      },
      {
        id: "Rim",
        title: "Prevoz pokojnika iz Rima",
        body:
          "Za Rim i ceo centar i jug Italije sprovodnicu izdaje konzularno odeljenje Ambasade Srbije u Rimu. Iz Rima je do Beograda oko 1.280 km, a do Podgorice oko 1.450 km drumom. Više informacija: <a href=\"/rim\" class=\"text-primary\">prevoz pokojnika iz Rima</a>.",
      },
      {
        id: "Veneto",
        title: "Prevoz pokojnika iz Veneta i Furlanije",
        body:
          "U Venetu — oko Venecije, Verone, Vičence, Padove i Trevisa — kao i u Furlaniji živi dosta porodica iz Srbije i BiH. Za ove pokrajine nije nadležan konzulat u Milanu, kako mnogi pretpostavljaju, već Generalni konzulat u Trstu. Tu zabunu rešavamo odmah, pre nego što se izgubi dan na pogrešnom šalteru.",
      },
    ],
    faqSchema: [
      {
        q: "Da li prevozite pokojnike iz Italije u Bosnu i Hercegovinu?",
        a: "Da. Iz Milana do Banje Luke ima oko 810 km, a iz Rima oko 1.070 km. Za sahranu u BiH dozvolu za unos posmrtnih ostataka izdaje predstavništvo Bosne i Hercegovine u Italiji, a zahtev podnosimo mi zajedno sa italijanskim dokumentima.",
      },
      {
        q: "Koliko traje prevoz pokojnika iz Italije u Srbiju?",
        a: "Ceo postupak najčešće traje 2–4 dana. Vožnja od Milana do Beograda je oko 1.020 km, odnosno oko 11 sati bez pauza, a od Rima oko 1.280 km. Rokove najviše određuju opština, prefektura i, ako je smrt nastupila nasilno ili iznenada, tužilaštvo.",
      },
      {
        q: "Šta je passaporto mortuario?",
        a: "To je međunarodna propusnica za posmrtne ostatke koja prati pokojnika pri prelasku granice, predviđena Berlinskim sporazumom iz 1937. godine. Izdaje je po pravilu prefektura (u pojedinim regionima opština), a mi je pribavljamo zajedno sa ostalim italijanskim dokumentima.",
      },
      {
        q: "Da li organizujete prevoz pokojnika iz Italije u Crnu Goru?",
        a: "Da. Iz Milana do Podgorice ima oko 1.190 km, a iz Rima oko 1.450 km drumom. Za sahranu u Crnoj Gori dozvolu izdaje predstavništvo Crne Gore u Italiji, a italijanska dokumenta i prevoz do mesta sahrane preuzimamo mi.",
      },
    ],
  },
  {
    slug: "spanija",
    name: "Španija",
    nameGenitive: "Španije",
    schemaCountry: "Spain",
    metaDescription:
      "Prevoz pokojnika iz Španije u Srbiju, BiH i Crnu Goru, avionom ili drumom. Dokumenta, odobrenje Sanidad Exterior i sprovodnicu završavamo mi, 24/7.",
    heroLead:
      "Organizujemo prevoz pokojnika iz Madrida, Barselone, Valensije, Malage i svih drugih mesta u Španiji do sahrane u Srbiji, Bosni i Hercegovini, Crnoj Gori ili Severnoj Makedoniji. Pomažemo porodici da izabere između avionskog i drumskog prevoza i preuzimamo svu dokumentaciju.",
    intro: [
      "Naša zajednica u Španiji manja je nego u Nemačkoj ili Austriji, ali je raštrkana po celoj zemlji: od Madrida i Barselone do Valensije, Alikantea i obale Andaluzije. Pored onih koji tu žive i rade, u Španiji borave i turisti i penzioneri iz Srbije i regiona, pa nas porodice zovu i zbog iznenadne smrti na putovanju. U oba slučaja prvi razgovor je isti: šta se desilo, gde se pokojnik nalazi i gde porodica želi sahranu.",
      "Španija je jedna od najudaljenijih zemalja iz kojih organizujemo prevoz: od Madrida do Beograda ima oko 2.570 km, što je oko 27 sati čiste vožnje bez odmora vozača, a iz Barselone oko 1.990 km. Zato je kod Španije prevoz avionom često razuman izbor — pokojnik putuje u teretnom delu aviona do Beograda ili drugog aerodroma u regionu, a odatle pogrebnim vozilom do mesta sahrane. Drumski prevoz ostaje opcija kada porodica tako želi ili kada se prevozi urna.",
      "Španski postupak ima i svoje posebnosti. Osim lekarske potvrde o uzroku smrti i izvoda iz matičnog registra (Registro Civil), za međunarodni prevoz traži se potvrda o balsamovanju ili privremenoj konzervaciji, a izlazak posmrtnih ostataka iz zemlje odobrava služba Sanidad Exterior pokrajine u kojoj je nastupila smrt. Kada je smrt nasilna, potrebna je i dozvola suda, pa je dobro da porodica to zna od početka i ne zakazuje sahranu prerano.",
    ],
    servicePoints: [
      "Preuzimanje iz bolnice, mrtvačnice (tanatorio) ili stana bilo gde u Španiji, uključujući ostrva",
      "Izvod iz Registro Civil na višejezičnom obrascu i lekarska potvrda o uzroku smrti",
      "Balsamovanje i potvrda o konzervaciji koju traže španski propisi",
      "Odobrenje službe Sanidad Exterior i sprovodnica iz Ambasade Srbije u Madridu",
      "Prevoz avionom do Beograda, Sarajeva, Banje Luke, Podgorice ili Skoplja, ili drumom po želji porodice",
    ],
    relatedLinks: [
      { href: "/francuska", label: "prevoz pokojnika iz Francuske" },
      { href: "/italija", label: "prevoz pokojnika iz Italije" },
    ],
    howItWorks: [
      "Na početku zapisujemo gde je smrt nastupila, gde je pokojnik bio prijavljen i da li porodica želi avionski ili drumski prevoz. Lekar izdaje potvrdu o uzroku smrti (certificado médico de causa de la muerte), a smrt se upisuje u Registro Civil, koji izdaje izvod (certificado de defunción). Španija je članica konvencije CIEC br. 16, pa višejezični izvod u Srbiji važi bez legalizacije.",
      "Pre međunarodnog prevoza pokojnik se balsamuje ili privremeno konzervira, o čemu se izdaje posebna potvrda. Zatim se lokalnom zdravstvenom organu podnosi zahtev za prevoz, a izlazak iz zemlje odobrava Sanidad Exterior u pokrajini smrti. Kod nesreće ili nasilne smrti sud mora da dozvoli predaju tela, pa ovaj korak može da potraje nekoliko dana duže.",
      "Sprovodnicu za celu Španiju izdaje Ambasada Republike Srbije u Madridu. Zahtev podnosimo mi, a ako je sahrana u BiH, Crnoj Gori ili Severnoj Makedoniji, dozvolu tražimo od predstavništva te zemlje nadležnog za Španiju. Za avionski prevoz rezervišemo prostor u teretnom delu aviona i pripremamo dokumenta koja traži avio-prevoznik.",
      "Pokojnik putuje u hermetički zatvorenom sanduku propisanom za međunarodni prevoz. Na aerodromu u regionu preuzima ga naše pogrebno vozilo i prevozi do mesta sahrane; kod drumskog prevoza vozimo kroz južnu Francusku, severnu Italiju i Sloveniju, uz propisane odmore vozača. Razlike između ova dva načina objasnili smo u tekstu <a href=\"/blog-prevoz-pokojnika-avionom-vs-kombijem\" class=\"text-primary\">avionom ili kombijem</a>.",
    ],
    transportDuration: "4–6 dana",
    routeFrom: "madrid",
    routeFromGen: "Madrida",
    cities: [
      { name: "Madrid", href: "/madrid", note: "Glavni grad i sedište Ambasade Srbije; do Beograda drumom oko 2.570 km." },
      { name: "Barselona", href: "/barselona", note: "Katalonija; drumom do Beograda oko 1.990 km, kraće nego iz Madrida." },
      { name: "Valensija", note: "Istočna obala; pokojnik najčešće putuje avionom." },
      { name: "Malaga", note: "Andaluzija i Kosta del Sol, gde borave mnogi turisti i penzioneri iz regiona." },
      { name: "Sevilja", note: "Jug Andaluzije; zbog udaljenosti se gotovo uvek bira avion." },
    ],
    cityFaqs: [
      {
        id: "Madrid",
        title: "Prevoz pokojnika iz Madrida",
        body:
          "U Madridu se nalazi Ambasada Srbije, nadležna za sprovodnice iz cele Španije, kao i najveći aerodrom u zemlji. Zbog toga se prevoz iz Madrida najčešće organizuje avionom, uz preuzimanje pokojnika na aerodromu u regionu. Više: <a href=\"/madrid\" class=\"text-primary\">prevoz pokojnika iz Madrida</a>.",
      },
      {
        id: "Barselona",
        title: "Prevoz pokojnika iz Barselone",
        body:
          "Iz Barselone je drumski put do Beograda oko 1.990 km, preko južne Francuske i severne Italije, pa porodice ovde češće biraju i prevoz pogrebnim vozilom. Izlazak pokojnika iz zemlje i ovde odobrava Sanidad Exterior, a za sprovodnicu se obraćamo ambasadi u Madridu, bez potrebe da porodica putuje.",
      },
      {
        id: "Valensija",
        title: "Prevoz pokojnika iz Valensije",
        body:
          "Iz Valensije i sa istočne obale pokojnik najčešće putuje avionom. Mi koordiniramo balsamovanje, termin leta, dokumenta i prevoz do aerodroma, tako da porodica ne mora da bude na licu mesta.",
      },
      {
        id: "Andaluzija",
        title: "Prevoz pokojnika iz Malage i Andaluzije",
        body:
          "Kada turista ili penzioner premine na jugu Španije, porodica je često hiljadama kilometara daleko. Iz Malage i Sevilje drumski prevoz traje predugo, pa gotovo uvek predlažemo avion, a porodicama koje razmišljaju o kremaciji objašnjavamo i kako izgleda prevoz urne.",
      },
    ],
    faqSchema: [
      {
        q: "Da li prevozite pokojnike iz Španije u Srbiju?",
        a: "Da. Iz Madrida do Beograda drumom ima oko 2.570 km, pa najčešće predlažemo prevoz avionom do beogradskog aerodroma, a zatim pogrebnim vozilom do mesta sahrane. Ceo postupak obično traje 4–6 dana, najviše zbog španskih dozvola.",
      },
      {
        q: "Da li je moguć prevoz pokojnika iz Španije u Bosnu i Hercegovinu?",
        a: "Jeste. Pokojnika možemo dovesti avionom do Sarajeva ili Banje Luke, ili drumom — iz Madrida do Banje Luke ima oko 2.360 km. Dozvolu za sahranu u BiH izdaje predstavništvo Bosne i Hercegovine, a sva dokumenta pripremamo mi.",
      },
      {
        q: "Zašto je u Španiji potrebno balsamovanje?",
        a: "Španski propisi za međunarodni prevoz posmrtnih ostataka traže potvrdu o balsamovanju ili privremenoj konzervaciji. To je i praktična potreba, jer kod ovako dugih relacija od smrti do sahrane prođe nekoliko dana.",
      },
      {
        q: "Da li je iz Španije bolji prevoz avionom ili drumom?",
        a: "Zavisi od mesta smrti, mesta sahrane i želja porodice. Avion je kod ovako duge relacije obično brži, dok drumski prevoz izbegava pretovar i aerodromske procedure. U prvom razgovoru uporedimo obe opcije i kažemo vam tačnu cenu za svaku.",
      },
    ],
  },
  {
    slug: "svedska",
    name: "Švedska",
    nameGenitive: "Švedske",
    schemaCountry: "Sweden",
    metaDescription:
      "Prevoz pokojnika iz Švedske u Srbiju, BiH i Crnu Goru. Izvod od Skatteverketa, apostil, prevod i sprovodnicu iz Stokholma pribavljamo mi. Pozovite 24/7.",
    heroLead:
      "Organizujemo prevoz pokojnika iz Stokholma, Geteborga, Malmea, Upsale i svih drugih mesta u Švedskoj do sahrane u Srbiji, Bosni i Hercegovini, Crnoj Gori ili Severnoj Makedoniji. Švedska dokumenta overavamo apostilom i prevodimo, a porodica sve dogovara sa jednom osobom.",
    intro: [
      "Ljudi iz bivše Jugoslavije u Švedsku su dolazili u dva velika talasa: kao radnici šezdesetih i sedamdesetih godina i kao izbeglice iz Bosne i Hercegovine devedesetih. Danas njihove porodice žive širom zemlje, najviše u Stokholmu, Geteborgu, Malmeu i gradovima južne Švedske. Mnogi stariji žele da budu sahranjeni u zavičaju, pa porodice prevoz iz Švedske u Srbiju, Bosnu i Hercegovinu ili Crnu Goru traže često, i to po pravilu iznenada.",
      "Ovo je jedna od najdužih relacija koje radimo: od Stokholma do Beograda ima oko 2.660 km, odnosno oko 28 sati čiste vožnje, a iz Geteborga oko 2.310 km. Drumom se iz južne Švedske najčešće ide preko mosta Øresund u Dansku, a zatim kroz Nemačku i srednju Evropu; alternativa su trajekti ka nemačkim lukama. Zbog udaljenosti, za Stokholm i sever zemlje porodicama često predlažemo i prevoz avionom.",
      "Švedska se od većine zemalja iz kojih prevozimo razlikuje po tome što nije članica konvencije CIEC br. 16 o višejezičnim izvodima. To znači da se švedski izvod o smrti za srpske organe mora overiti apostilom i prevesti na srpski kod sudskog tumača. Matične podatke u Švedskoj vodi poreska uprava Skatteverket, kojoj lekar prijavljuje smrt, a ne posebna matična služba kao u Nemačkoj ili Austriji.",
    ],
    servicePoints: [
      "Preuzimanje iz bolnice, doma za stare ili stana bilo gde u Švedskoj, od juga do severa zemlje",
      "Izvod o smrti od poreske uprave Skatteverket, overen apostilom",
      "Prevod švedskih dokumenata na srpski kod ovlašćenog sudskog tumača",
      "Sprovodnica iz Ambasade Srbije u Stokholmu ili dozvola predstavništva BiH, Crne Gore ili Severne Makedonije",
      "Drumski prevoz preko Danske i Nemačke ili prevoz avionom do aerodroma u regionu",
    ],
    relatedLinks: [
      { href: "/danska", label: "prevoz pokojnika iz Danske" },
      { href: "/norveska", label: "prevoz pokojnika iz Norveške" },
    ],
    howItWorks: [
      "Kada nas pozovete, zapisujemo gde se pokojnik nalazi i gde je bio prijavljen, a zatim stupamo u vezu sa bolnicom ili ustanovom na licu mesta. Lekar koji utvrdi smrt izdaje potvrdu o smrti (dödsbevis), koja se šalje poreskoj upravi Skatteverket, i lekarski izveštaj o uzroku smrti (intyg om dödsorsak). Ako je potrebna sudskomedicinska obdukcija, o njoj odlučuje policija, i tada se postupak produžava.",
      "Kada je smrt upisana, tražimo od Skatteverketa izvod iz registra (personbevis) sa podacima o smrti. Pošto Švedska nije u sistemu višejezičnih izvoda, dokument overava javni beležnik (notarius publicus) apostilom, a zatim ga prevodi ovlašćeni sudski tumač za srpski jezik. Švedska je potpisnica evropskog Sporazuma o prevozu posmrtnih ostataka (Strazbur, 1973), pa za prelazak granice pribavljamo i propusnicu koja prati pokojnika.",
      "Sprovodnicu za celu Švedsku izdaje Ambasada Republike Srbije u Stokholmu; za sahranu u BiH, Crnoj Gori ili Severnoj Makedoniji obraćamo se predstavništvu te zemlje. Uz zahtev idu pasoš pokojnika, overen i preveden izvod o smrti, lekarski izveštaj o uzroku smrti i podaci o mestu sahrane i ruti prevoza.",
      "Pokojnik putuje u hermetički zatvorenom sanduku propisanom za međunarodni prevoz. Ako porodica bira drum, vozimo preko Danske ili trajektom do Nemačke i dalje kroz srednju Evropu, uz propisane odmore vozača; ako bira avion, pokojnika dočekujemo na aerodromu u regionu. Opšte informacije o papirima naći ćete na stranici <a href=\"/dokumentacija-za-prevoz-pokojnika\" class=\"text-primary\">dokumentacija za prevoz pokojnika</a>.",
    ],
    transportDuration: "4–7 dana",
    routeFrom: "stokholm",
    routeFromGen: "Stokholma",
    cities: [
      { name: "Stokholm", href: "/stokholm", note: "Glavni grad i sedište Ambasade Srbije; do Beograda drumom oko 2.660 km." },
      { name: "Geteborg", href: "/geteborg", note: "Zapadna obala; do Beograda oko 2.310 km, uz trajektne veze sa Nemačkom." },
      { name: "Malme", note: "Grad na mostu Øresund ka Kopenhagenu; najbliži izlaz ka kontinentu." },
      { name: "Upsala", note: "Univerzitetski grad severno od Stokholma; postupak je isti kao u prestonici." },
      { name: "Helsingborg", note: "Jug Švedske; trajektna linija ka danskom Helsingøru." },
    ],
    cityFaqs: [
      {
        id: "Stokholm",
        title: "Prevoz pokojnika iz Stokholma",
        body:
          "Iz Stokholma pokojnike preuzimamo iz bolnica i domova u celom regionu, uključujući Upsalu i Sedertelje. Ambasada Srbije nalazi se u gradu, pa se sprovodnica pribavlja na licu mesta. Zbog razdaljine od oko 2.660 km do Beograda, iz Stokholma se često bira avion.",
      },
      {
        id: "Geteborg",
        title: "Prevoz pokojnika iz Geteborga",
        body:
          "Geteborg je bliži Balkanu nego Stokholm: do Beograda ima oko 2.310 km, a do Banje Luke oko 2.240 km. Drumski prevoz odavde može da ide preko Danske ili trajektom do Nemačke, zavisno od toga šta je u datom trenutku brže.",
      },
      {
        id: "Malme",
        title: "Prevoz pokojnika iz Malmea",
        body:
          "Malme i pokrajina Skone su najbliži delovi Švedske kontinentu: odmah preko mosta je Kopenhagen, a dalje Nemačka. Zbog toga je prevoz iz južne Švedske drumom realna opcija i kada je mesto sahrane duboko u Srbiji ili Crnoj Gori.",
      },
      {
        id: "SeverSvedske",
        title: "Prevoz pokojnika sa severa Švedske",
        body:
          "Iz gradova kao što su Umeå, Sundsval ili Luleå razdaljine do Balkana su ogromne, pa predlažemo kombinaciju: pogrebnim vozilom do najbližeg aerodroma, avionom do regiona i ponovo vozilom do mesta sahrane.",
      },
    ],
    faqSchema: [
      {
        q: "Da li prevozite pokojnike iz Švedske u Bosnu i Hercegovinu?",
        a: "Da. Iz Stokholma do Sarajeva ima oko 2.780 km, a do Banje Luke oko 2.590 km, pa porodice biraju između drumskog prevoza i aviona do Sarajeva ili Banje Luke. Dozvolu za sahranu u BiH izdaje predstavništvo Bosne i Hercegovine u Švedskoj, a mi pripremamo zahtev i sve prateće papire.",
      },
      {
        q: "Koliko traje prevoz pokojnika iz Švedske u Srbiju?",
        a: "Ceo postupak obično traje 4–7 dana. Najduže traju apostil, prevod i sprovodnica, a sama vožnja od Stokholma do Beograda je oko 28 sati bez pauza, na koje se dodaju odmori vozača i prelazak mosta ili trajekta.",
      },
      {
        q: "Da li organizujete prevoz pokojnika iz Švedske u Crnu Goru?",
        a: "Da. Iz Stokholma do Podgorice ima oko 3.070 km drumom, pa se za Crnu Goru najčešće bira avion do Podgorice, uz naš prevoz od aerodroma do mesta sahrane. Dozvolu za sahranu izdaje predstavništvo Crne Gore.",
      },
      {
        q: "Zašto švedska dokumenta moraju da se prevode?",
        a: "Švedska nije članica konvencije o višejezičnim izvodima iz matičnih knjiga, pa srpski organi traže izvod overen apostilom i preveden na srpski. Overu i prevod organizujemo mi, kako porodica ne bi morala da obilazi beležnike i tumače.",
      },
    ],
  },
  {
    slug: "danska",
    name: "Danska",
    nameGenitive: "Danske",
    schemaCountry: "Denmark",
    metaDescription:
      "Prevoz pokojnika iz Danske u Srbiju i BiH: ligpas, apostil, prevod i sprovodnica iz Kopenhagena. Preuzimamo iz cele Danske i dostupni smo 24/7.",
    heroLead:
      "Preuzimamo pokojnike iz Kopenhagena, Orhusa, Odensea, Olborga i svih drugih mesta u Danskoj i prevozimo ih do sahrane u Srbiji, Bosni i Hercegovini, Crnoj Gori ili Severnoj Makedoniji. Dansku propusnicu ligpas, overu i prevod dokumenata preuzimamo mi.",
    intro: [
      "U Danskoj živi zajednica ljudi iz Srbije i Bosne i Hercegovine koja se formirala od kraja šezdesetih, kada su stizali prvi radnici iz Jugoslavije, a posebno se uvećala devedesetih, kada je Danska primila izbeglice iz BiH. Porodice danas žive u Kopenhagenu i okolini, ali i u Orhusu, Odenseu, Olborgu i manjim mestima Jutlanda. Kada neko od starijih premine, želja da počiva u zavičaju i dalje je česta.",
      "Od Kopenhagena do Beograda ima oko 2.010 km, oko 20 sati čiste vožnje, a do Banje Luke oko 1.940 km. Do Nemačke se iz Kopenhagena najbrže stiže trajektom Rødby–Puttgarden, a sa Jutlanda kopnom preko granice kod Flensburga; dalje se vozi kroz Nemačku i Austriju ka Balkanu. Drumski prevoz je iz Danske sasvim uobičajen, a avion je alternativa kada je mesto sahrane daleko od beogradskog pravca, na primer u Crnoj Gori ili Severnoj Makedoniji.",
      "Danska ima i dokument o kome porodice retko čuju: ligpas, propusnicu bez koje kovčeg ne može da pređe dansku granicu. Izdaje ga danska Uprava za bezbednost pacijenata (Styrelsen for Patientsikkerhed) na zahtev pogrebnog preduzeća ili rodbine, a za urnu nije potreban. Pored toga, Danska nije članica konvencije CIEC br. 16, pa se dokumenta za srpske organe overavaju apostilom i prevode.",
    ],
    servicePoints: [
      "Preuzimanje iz bolnice, doma ili stana u celoj Danskoj, sa ostrva i sa Jutlanda",
      "Zahtev za ligpas kod danske Uprave za bezbednost pacijenata",
      "Apostil i prevod danske potvrde o smrti i izvoda na srpski jezik",
      "Sprovodnica iz Ambasade Srbije u Kopenhagenu ili dozvola za sahranu u BiH, Crnoj Gori ili Severnoj Makedoniji",
      "Hermetički sanduk sa zalemljenim cinkanim uloškom i potvrdom o lemljenju, koju traži danski postupak",
    ],
    relatedLinks: [
      { href: "/svedska", label: "prevoz pokojnika iz Švedske" },
      { href: "/nemacka", label: "prevoz pokojnika iz Nemačke" },
    ],
    howItWorks: [
      "Posle vašeg poziva kontaktiramo bolnicu ili dom u kom se pokojnik nalazi. Lekar koji je utvrdio smrt izdaje potvrdu o smrti (dødsattest) i u njoj navodi da li je pokojnik bolovao od zarazne bolesti — taj podatak je kasnije potreban za ligpas. Ako je potreban sudskomedicinski pregled, o tome odlučuje policija, i postupak tada traje duže.",
      "Smrt se prijavljuje nadležnom organu za sahrane, koji odlučuje o zahtevu za sahranu ili kremaciju; kopija te odluke ide uz zahtev za ligpas. Danskoj Upravi za bezbednost pacijenata podnosimo potpisan zahtev za prevoz u inostranstvo sa podacima o sanduku, a za cinkani uložak prilažemo i potvrdu o lemljenju. Kod prevoza avionom traži se i potvrda o balsamovanju.",
      "Za srpske organe pribavljamo izvod o smrti iz danskog registra stanovništva (CPR), overavamo ga apostilom danskog Ministarstva spoljnih poslova i prevodimo na srpski. Sprovodnicu za celu Dansku izdaje Ambasada Republike Srbije u Kopenhagenu; ako je sahrana u BiH, Crnoj Gori ili Severnoj Makedoniji, zahtev podnosimo predstavništvu te zemlje.",
      "Kada su ligpas i sprovodnica izdati, pokojnik kreće u hermetički zatvorenom sanduku propisanom za međunarodni prevoz, trajektom ili preko kopnene granice ka Nemačkoj. Ako se porodica odluči za kremaciju u Danskoj, urna se prevozi bez ligpasa, ali i dalje uz sprovodnicu i potvrdu o kremaciji. Više o izboru sanduka: <a href=\"/pogrebni-sanduci\" class=\"text-primary\">pogrebni sanduci</a>.",
    ],
    transportDuration: "3–5 dana",
    routeFrom: "kopenhagen",
    routeFromGen: "Kopenhagena",
    cities: [
      { name: "Kopenhagen", href: "/kopenhagen", note: "Glavni grad i sedište Ambasade Srbije; do Beograda oko 2.010 km." },
      { name: "Orhus", note: "Najveći grad Jutlanda; drumom ka Nemačkoj preko granice kod Flensburga." },
      { name: "Odense", note: "Ostrvo Fin (Fyn), mostovima povezano sa Jutlandom i Zelandom." },
      { name: "Olborg", note: "Sever Jutlanda; jedna od dužih danskih relacija ka Balkanu." },
      { name: "Esbjerg", note: "Zapadna obala Jutlanda, relativno blizu nemačke granice." },
    ],
    cityFaqs: [
      {
        id: "Kopenhagen",
        title: "Prevoz pokojnika iz Kopenhagena",
        body:
          "U Kopenhagenu se nalazi Ambasada Srbije, nadležna za sprovodnice iz cele Danske. Iz glavnog grada drumski prevoz najčešće počinje trajektom ka Nemačkoj, a za avionski prevoz koristi se aerodrom Kastrup, najveći u nordijskim zemljama.",
      },
      {
        id: "Orhus",
        title: "Prevoz pokojnika iz Orhusa",
        body:
          "Iz Orhusa i istočnog Jutlanda put vodi kopnom na jug, preko dansko-nemačke granice kod Flensburga, pa trajekt nije potreban. Dokumenta se pripremaju isto kao u Kopenhagenu, a porodica ne mora da putuje u prestonicu — zahteve za ligpas i sprovodnicu podnosimo mi.",
      },
      {
        id: "Odense",
        title: "Prevoz pokojnika iz Odensea",
        body:
          "Odense leži na ostrvu Fin, koje je mostovima povezano i sa Jutlandom i sa Zelandom, pa se ruta bira prema stanju na putevima i trajektima. Postupak oko ligpasa, apostila i prevoda isti je kao u ostatku zemlje.",
      },
      {
        id: "Olborg",
        title: "Prevoz pokojnika iz Olborga",
        body:
          "Sa severa Jutlanda put do Balkana je duži, pa porodicama predstavljamo i opciju aviona preko aerodroma u Olborgu ili Kopenhagenu. Ako porodica bira kremaciju, prevoz urne je znatno jednostavniji, jer ligpas nije potreban.",
      },
    ],
    faqSchema: [
      {
        q: "Da li prevozite pokojnike iz Danske u Srbiju?",
        a: "Da. Iz Kopenhagena do Beograda ima oko 2.010 km, što je oko 20 sati čiste vožnje. Ceo postupak sa ligpasom, apostilom, prevodom i sprovodnicom obično traje 3–5 dana, a porodica sve vreme ima jednu kontakt osobu.",
      },
      {
        q: "Šta je ligpas i ko ga izdaje?",
        a: "Ligpas je danska propusnica za prevoz kovčega preko granice. Izdaje ga Uprava za bezbednost pacijenata (Styrelsen for Patientsikkerhed) na zahtev pogrebnog preduzeća ili rodbine, uz podatke iz potvrde o smrti i odluku o sahrani. Za prevoz urne ligpas nije potreban.",
      },
      {
        q: "Da li organizujete prevoz pokojnika iz Danske u Bosnu i Hercegovinu?",
        a: "Da. Iz Kopenhagena do Banje Luke ima oko 1.940 km, a do Sarajeva oko 2.130 km. Za sahranu u BiH dozvolu izdaje predstavništvo Bosne i Hercegovine, a mi pripremamo i danska dokumenta i zahtev za unos posmrtnih ostataka u BiH.",
      },
    ],
  },
  {
    slug: "francuska",
    name: "Francuska",
    nameGenitive: "Francuske",
    schemaCountry: "France",
    metaDescription:
      "Prevoz pokojnika iz Francuske u Srbiju, BiH i Crnu Goru. Dozvolu prefekture, izvod iz opštine i sprovodnicu završavamo mi. Pariz, Strazbur, Lion, 24/7.",
    heroLead:
      "Organizujemo prevoz pokojnika iz Pariza, Strazbura, Liona, Marseja, Tuluza i svih drugih mesta u Francuskoj do sahrane u Srbiji, Bosni i Hercegovini, Crnoj Gori ili Severnoj Makedoniji. Francuske dozvole i sprovodnicu pribavljamo mi, a vi imate jednu osobu za sva pitanja.",
    intro: [
      "Srpska zajednica u Francuskoj ima dugu tradiciju, a veliki deo današnjih porodica potiče od radnika koji su došli šezdesetih i sedamdesetih godina. Najviše naših ljudi živi u Parizu i okolnim departmanima, ali ih ima i na istoku zemlje, gde Srbija ima generalni konzulat u Strazburu, kao i u većim gradovima na jugu. Mnogi stariji i posle decenija u Francuskoj žele da budu sahranjeni u zavičaju.",
      "Iz Pariza do Beograda ima oko 1.790 km, a do Banje Luke oko 1.580 km, što je oko 18, odnosno 16 sati čiste vožnje. Drumski prevoz je i dalje najčešći izbor, ali kod tako duge relacije, naročito sa juga Francuske, porodicama nudimo i prevoz avionom do aerodroma u regionu, uz preuzimanje i prevoz do mesta sahrane.",
      "Francuski postupak ima tri ključne tačke: smrt se prijavljuje u opštini (mairie), koja sastavlja acte de décès; gradonačelnik odobrava zatvaranje kovčega; a za prevoz van Francuske potrebno je odobrenje prefekta departmana u kom se kovčeg zatvara. Pošto su i Francuska i Srbija članice konvencije CIEC br. 16, višejezični izvod o smrti srpski organi prihvataju bez legalizacije.",
    ],
    servicePoints: [
      "Preuzimanje iz bolnice, doma ili stana u celoj kontinentalnoj Francuskoj",
      "Acte de décès na višejezičnom obrascu iz opštine (mairie) mesta smrti",
      "Odobrenje za zatvaranje kovčega i odobrenje prefekture za prevoz van Francuske",
      "Sprovodnica iz Ambasade Srbije u Parizu ili Generalnog konzulata u Strazburu",
      "Drumski prevoz specijalizovanim vozilom ili prevoz avionom, prema dogovoru sa porodicom",
    ],
    documents: [
      ["Certificat de décès", "lekarska potvrda o smrti"],
      ["Acte de décès", "izvod iz matične knjige umrlih — izdaje opština (mairie) mesta smrti"],
      ["Autorisation de fermeture du cercueil", "odobrenje gradonačelnika za zatvaranje kovčega"],
      ["Autorisation préfectorale de transport de corps", "odobrenje prefekta za prevoz posmrtnih ostataka van Francuske"],
      ["Passeport du défunt", "pasoš pokojnika"],
    ],
    relatedLinks: [
      { href: "/italija", label: "prevoz pokojnika iz Italije" },
      { href: "/spanija", label: "prevoz pokojnika iz Španije" },
    ],
    howItWorks: [
      "Kada nas pozovete, prvo utvrđujemo gde je smrt nastupila i u kojoj opštini treba da se prijavi. Lekar izdaje potvrdu o smrti (certificat de décès), a smrt se prijavljuje matičnoj službi opštine, koja sastavlja acte de décès. Ako je osoba preminula u bolnici, ustanova često sama obavlja prijavu, a mi preuzimamo dalju komunikaciju.",
      "Kada je kovčeg spreman, opština izdaje odobrenje za njegovo zatvaranje, a mi prefekturi departmana u kom se kovčeg zatvara podnosimo zahtev za prevoz van Francuske. Uz zahtev idu acte de décès, potvrda o smrti, odobrenje za zatvaranje i potvrda da smrt nije posledica zarazne bolesti. Ako postoji sudskomedicinska prepreka (obstacle médico-légal), prefektura čeka saglasnost tužilaštva.",
      "Istovremeno pripremamo sprovodnicu. Srbija u Francuskoj ima Ambasadu u Parizu i Generalni konzulat u Strazburu, a nadležno predstavništvo zavisi od poslednjeg prebivališta pokojnika. Ako je sahrana u Bosni i Hercegovini, Crnoj Gori ili Severnoj Makedoniji, dozvolu tražimo od njihovih predstavništava u Francuskoj.",
      "Pokojnik putuje u hermetički zatvorenom sanduku propisanom za međunarodni prevoz. Francuski propisi ne dozvoljavaju ponovno otvaranje kovčega posle zatvaranja, pa se oproštaj porodice planira pre toga. Po dolasku pokojnika predajemo porodici ili lokalnoj pogrebnoj službi. Spisak dokumenata i objašnjenja naći ćete na stranici <a href=\"/dokumentacija-za-prevoz-pokojnika\" class=\"text-primary\">dokumentacija za prevoz pokojnika</a>.",
    ],
    transportDuration: "2–4 dana",
    routeFrom: "pariz",
    routeFromGen: "Pariza",
    cities: [
      { name: "Pariz", href: "/pariz", note: "Île-de-France; najveća naša zajednica u Francuskoj, do Beograda oko 1.790 km." },
      { name: "Strazbur", note: "Alzas i istok Francuske; sedište Generalnog konzulata Srbije." },
      { name: "Lion", note: "Oblast Overnja-Rona-Alpi; drumom preko Alpa i severne Italije." },
      { name: "Marsej", note: "Jug Francuske; za ovako duge relacije nudimo i prevoz avionom." },
      { name: "Nica", note: "Azurna obala, blizu italijanske granice; drumom kroz severnu Italiju." },
      { name: "Tuluz", note: "Oksitanija; jedna od najdužih francuskih relacija, pa se često bira avion." },
    ],
    cityFaqs: [
      {
        id: "Pariz",
        title: "Prevoz pokojnika iz Pariza",
        body:
          "Iz Pariza i okolnih departmana pokojnike preuzimamo iz bolnica, domova i stanova. Zahtev za prevoz van Francuske podnosi se prefekturi departmana u kom se kovčeg zatvara, što u regionu Île-de-France ne mora biti sam Pariz. Sprovodnicu za pokojnike sa prebivalištem u ovom delu zemlje izdaje Ambasada Srbije u Parizu.",
      },
      {
        id: "Strazbur",
        title: "Prevoz pokojnika iz Strazbura",
        body:
          "Za porodice sa istoka Francuske važno je da Srbija u Strazburu ima generalni konzulat, pa sprovodnicu ne treba tražiti u Parizu ako je pokojnik živeo u oblasti za koju je nadležan Strazbur. Iz Alzasa je i drumski put kraći, jer se brzo izlazi na nemačke autoputeve.",
      },
      {
        id: "Lion",
        title: "Prevoz pokojnika iz Liona",
        body:
          "Lion i oblast Rona-Alpi imaju isti postupak kao ostatak Francuske: acte de décès iz opštine, odobrenje za zatvaranje kovčega i dozvola prefekture. Drumski prevoz odavde najčešće ide preko Alpa i severne Italije ka Sloveniji i Hrvatskoj.",
      },
      {
        id: "JugFrancuske",
        title: "Prevoz pokojnika iz Marseja, Nice i Tuluza",
        body:
          "Sa juga Francuske razdaljine do Balkana su velike, pa porodicama predstavljamo i drumski i avionski prevoz, sa jasnim rokovima za oba. Kod iznenadne smrti tokom odmora porodica nas može pozvati u bilo koje doba, a mi preuzimamo komunikaciju sa bolnicom, opštinom i prefekturom.",
      },
    ],
    faqSchema: [
      {
        q: "Da li prevozite pokojnike iz Francuske u Srbiju?",
        a: "Da. Iz Pariza do Beograda ima oko 1.790 km drumom, a ceo postupak sa francuskim dozvolama i sprovodnicom najčešće traje 2–4 dana. Porodica može da bira drumski prevoz ili avion, a mi pokojnika dovozimo do mesta sahrane bilo gde u Srbiji.",
      },
      {
        q: "Da li organizujete prevoz pokojnika iz Francuske u Bosnu i Hercegovinu?",
        a: "Da. Iz Pariza do Banje Luke ima oko 1.580 km, a do Sarajeva oko 1.790 km. Dozvolu za sahranu u BiH izdaje predstavništvo Bosne i Hercegovine u Francuskoj, a zahtev podnosimo mi, zajedno sa francuskim dokumentima.",
      },
      {
        q: "Ko u Francuskoj odobrava prevoz pokojnika u inostranstvo?",
        a: "Prevoz van Francuske odobrava prefekt departmana u kom se kovčeg zatvara, na osnovu izvoda iz matične knjige umrlih, potvrde o smrti i odobrenja opštine za zatvaranje kovčega. Ove dozvole pribavljamo mi, bez odlaska porodice u prefekturu.",
      },
      {
        q: "Od čega zavisi cena prevoza pokojnika iz Francuske?",
        a: "Najviše od grada iz kog se pokojnik preuzima, mesta sahrane, izbora između drumskog i avionskog prevoza i lokalnih taksi. Tačnu cenu kažemo u prvom razgovoru, a pojedine stavke objašnjene su u <a href=\"/cenovnik\" class=\"text-primary\">cenovniku</a>.",
      },
    ],
  },
  {
    slug: "hrvatska",
    name: "Hrvatska",
    nameGenitive: "Hrvatske",
    schemaCountry: "Croatia",
    metaDescription:
      "Prevoz pokojnika iz Hrvatske u Srbiju i BiH: hrvatska i srpska sprovodnica, izvod i granica na jednom mestu. Zagreb, Split, Rijeka, Osijek, 24/7.",
    heroLead:
      "Preuzimamo pokojnike iz Zagreba, Splita, Rijeke, Osijeka, Vukovara i svih drugih mesta u Hrvatskoj i prevozimo ih do sahrane u Srbiji, Bosni i Hercegovini, Crnoj Gori ili Severnoj Makedoniji. Relacije su kratke, pa ceo postupak najčešće traje od jednog do tri dana.",
    intro: [
      "Porodične veze između Hrvatske, Srbije i Bosne i Hercegovine veoma su bliske: u Hrvatskoj žive Srbi, posebno u istočnoj Slavoniji i oko Vukovara, a mnoge porodice imaju rođake i grobove sa obe strane granice. Pored toga, ljudi iz Srbije i BiH u Hrvatskoj rade, leče se ili letuju na Jadranu. Zato se prevoz pokojnika iz Hrvatske traži i za stalne stanovnike i za one koje je smrt zatekla na putu.",
      "Udaljenosti su male: od Zagreba do Beograda ima oko 390 km, a do Banje Luke svega oko 180 km, odnosno oko dva sata vožnje. Ka Srbiji se najčešće prelazi na graničnom prelazu Bajakovo–Batrovci na autoputu, a iz Slavonije i preko prelaza kao što su Tovarnik–Šid ili Erdut–Bogojevo. Granica Hrvatske i Srbije je spoljna granica Evropske unije, pa se na njoj obavlja pasoška i carinska kontrola.",
      "Hrvatski postupak se razlikuje od zapadnoevropskog po tome što i Hrvatska izdaje svoju sprovodnicu: posmrtni putni list za prevoz umrle osobe preko granice izdaje sanitarni inspektor nadležan prema mestu smrti. U zahtevu se navode podaci o pokojniku, uzrok smrti, pogrebno vozilo sa registarskim brojem i granični prelaz na kom vozilo izlazi iz zemlje. Hrvatska je, kao i Srbija, članica konvencije CIEC br. 16, pa međunarodni izvod iz matice umrlih u Srbiji važi bez legalizacije.",
    ],
    servicePoints: [
      "Preuzimanje iz bolnice, doma za stare ili stana bilo gde u Hrvatskoj, od Istre do Slavonije",
      "Hrvatska sprovodnica (posmrtni putni list) od nadležnog sanitarnog inspektora",
      "Međunarodni izvod iz matice umrlih, koji u Srbiji važi bez legalizacije",
      "Srpska sprovodnica iz Zagreba, Rijeke ili Vukovara, odnosno dozvola za sahranu u BiH",
      "Pasoška i carinska kontrola na spoljnoj granici EU, na prelazu koji najbolje odgovara ruti",
    ],
    documents: [
      ["Potvrda o smrti", "potvrda mrtvozornika o smrti i uzroku smrti"],
      ["Izvadak iz matice umrlih", "izvod iz matične knjige umrlih — izdaje matični ured; međunarodni obrazac važi u Srbiji bez legalizacije"],
      ["Sprovodnica (posmrtni putni list)", "hrvatska dozvola za prevoz umrle osobe preko granice — izdaje sanitarni inspektor nadležan prema mestu smrti"],
      ["Osobna iskaznica ili putovnica", "lična karta ili pasoš pokojnika"],
    ],
    relatedLinks: [
      { href: "/austrija", label: "prevoz pokojnika iz Austrije" },
      { href: "/italija", label: "prevoz pokojnika iz Italije" },
    ],
    howItWorks: [
      "Posle vašeg poziva stupamo u kontakt sa bolnicom, domom za stare ili porodicom u stanu u kom je osoba preminula. Smrt utvrđuje mrtvozornik, koji izdaje potvrdu o smrti; ako okolnosti nisu jasne, o obdukciji odlučuju nadležni organi, i tada predaja tela kasni.",
      "Smrt se upisuje u maticu umrlih u matičnom uredu, iz koga tražimo međunarodni izvod. Zatim sanitarnom inspektoru nadležnom prema mestu smrti podnosimo zahtev za hrvatsku sprovodnicu: uz kopiju potvrde o smrti navode se lični podaci pokojnika, vreme, mesto i uzrok smrti, registarski broj pogrebnog vozila i granični prelaz na kom vozilo izlazi iz Hrvatske.",
      "Za sahranu u Srbiji istovremeno tražimo srpsku sprovodnicu. Srbija u Hrvatskoj ima Ambasadu u Zagrebu i generalne konzulate u Rijeci i Vukovaru, a koje je predstavništvo nadležno, zavisi od mesta gde je pokojnik živeo. Ako je sahrana u Republici Srpskoj ili Federaciji BiH, dozvolu za unos izdaje predstavništvo Bosne i Hercegovine u Hrvatskoj.",
      "Prevoz obavljamo specijalizovanim pogrebnim vozilom, najčešće autoputem do prelaza Bajakovo–Batrovci, a za Banju Luku preko Stare Gradiške i Gradiške. Na granici obavljamo sve formalnosti, a porodica zna kada vozilo kreće i kada stiže. Kako izgleda ceo postupak, pročitajte u tekstu <a href=\"/blog-kako-organizovati-prevoz-pokojnika\" class=\"text-primary\">kako organizovati prevoz pokojnika</a>, a o pravnoj strani u tekstu <a href=\"/blog-repatrijacija-pokojnika-pravni-aspekti\" class=\"text-primary\">repatrijacija pokojnika — pravni aspekti</a>.",
    ],
    transportDuration: "1–3 dana",
    routeFrom: "zagreb",
    routeFromGen: "Zagreba",
    cities: [
      { name: "Zagreb", href: "/zagreb", note: "Glavni grad i sedište Ambasade Srbije; do Beograda oko 390 km." },
      { name: "Split", note: "Dalmacija; za Srbiju se vozi autoputem preko Zagreba." },
      { name: "Rijeka", note: "Primorje i Istra; sedište Generalnog konzulata Srbije." },
      { name: "Osijek", note: "Slavonija; blizu prelaza Erdut–Bogojevo ka Vojvodini." },
      { name: "Vukovar", note: "Istočna Slavonija, na Dunavu uz granicu; sedište Generalnog konzulata Srbije." },
      { name: "Dubrovnik", note: "Južna Dalmacija; do Crne Gore i istočne Hercegovine put je kratak." },
    ],
    cityFaqs: [
      {
        id: "Zagreb",
        title: "Prevoz pokojnika iz Zagreba",
        body:
          "Iz Zagreba je do Banje Luke oko 180 km, do Beograda oko 390 km, a do Sarajeva oko 400 km, pa pokojnik u većinu mesta sahrane stiže istog dana kada vozilo krene. Ambasada Srbije je u Zagrebu, a matični ured i sanitarna inspekcija su u istom gradu, što postupak čini jednostavnim.",
      },
      {
        id: "Split",
        title: "Prevoz pokojnika iz Splita i Dalmacije",
        body:
          "Leti se dešava da smrt zatekne turistu iz Srbije ili BiH na dalmatinskoj obali. U tom slučaju preuzimamo komunikaciju sa bolnicom i nadležnim službama, a za sahranu u Hercegovini ili centralnoj Bosni relacija iz Splita je kraća nego do Beograda.",
      },
      {
        id: "Rijeka",
        title: "Prevoz pokojnika iz Rijeke",
        body:
          "Iz Rijeke, Istre i Kvarnera prevoz ide preko Zagreba ka Srbiji ili BiH. U Rijeci deluje i Generalni konzulat Srbije, pa se sprovodnica za pokojnike iz ovog dela Hrvatske može rešiti na licu mesta.",
      },
      {
        id: "Slavonija",
        title: "Prevoz pokojnika iz Osijeka, Vukovara i Slavonije",
        body:
          "Istočna Slavonija je od Srbije udaljena svega nekoliko desetina kilometara, a u Vukovaru postoji Generalni konzulat Srbije. Pokojnik se iz Vukovara, Iloka ili Osijeka često prevozi preko prelaza na Dunavu, direktno u Vojvodinu.",
      },
    ],
    faqSchema: [
      {
        q: "Da li prevozite pokojnike iz Hrvatske u Bosnu i Hercegovinu?",
        a: "Da. Iz Zagreba do Banje Luke ima oko 180 km, a do Sarajeva oko 400 km. Za sahranu u BiH, bilo u Republici Srpskoj ili Federaciji, dozvolu za unos izdaje predstavništvo Bosne i Hercegovine, a hrvatsku sprovodnicu i ostale papire pribavljamo mi.",
      },
      {
        q: "Koliko traje prevoz pokojnika iz Hrvatske u Srbiju?",
        a: "Ceo postupak najčešće traje 1–3 dana, uključujući dokumenta. Sama vožnja iz Zagreba do Beograda je oko 390 km, odnosno oko 4 sata bez pauza, a iz Slavonije je znatno kraća.",
      },
      {
        q: "Koja dokumenta su potrebna za prevoz pokojnika iz Hrvatske?",
        a: "Potrebni su potvrda mrtvozornika o smrti, izvod iz matice umrlih, hrvatska sprovodnica koju izdaje sanitarni inspektor i lična dokumenta pokojnika, a za Srbiju i srpska sprovodnica. Sve to pribavljamo mi, pa porodica ne mora da obilazi urede.",
      },
      {
        q: "Da li radite noću i vikendom za prevoz iz Hrvatske?",
        a: "Da, dostupni smo 24 sata dnevno, svakog dana, na broju +381 64 249 28 49. Ako je smrt nastupila noću, odmah dogovaramo preuzimanje pokojnika, a dokumenta pripremamo čim nadležne službe počnu sa radom.",
      },
    ],
  },
  {
    slug: "crna-gora",
    name: "Crna Gora",
    nameGenitive: "Crne Gore",
    schemaCountry: "Montenegro",
    metaDescription:
      "Prevoz pokojnika iz Crne Gore u Srbiju, BiH i Severnu Makedoniju. Dokumenta i sprovodnicu iz Podgorice ili Herceg Novog završavamo mi. Dostupni 24/7.",
    heroLead:
      "Preuzimamo pokojnike iz Podgorice, Nikšića, Bara, Budve, Herceg Novog, Bijelog Polja i svih drugih mesta u Crnoj Gori i prevozimo ih do sahrane u Srbiji, Bosni i Hercegovini ili Severnoj Makedoniji. Dokumentaciju sa obe strane granice preuzimamo mi.",
    intro: [
      "Crna Gora i Srbija dele dugu zajedničku istoriju, pa mnoge porodice imaju članove i grobove u obe zemlje: neko je rođen u Nikšiću ili Pljevljima, a živeo u Beogradu, ili obrnuto. Pored stalnih stanovnika, na crnogorskom primorju svakog leta boravi mnogo turista iz Srbije i BiH, pa nas porodice zovu i kada smrt nastupi iznenada, na odmoru u Budvi, Herceg Novom ili Ulcinju.",
      "Relacije su ovde među najkraćima: od Podgorice do Beograda ima oko 430 km, do Sarajeva oko 270 km, a do Skoplja oko 330 km. Ipak, put kroz planine i kanjone traje duže nego što kilometri govore — do Beograda je oko 7 sati čiste vožnje. Ka Srbiji se najčešće prelazi na graničnom prelazu Dobrakovo–Gostun, između Bijelog Polja i Prijepolja.",
      "Iako su procedure dve zemlje slične, a dokumenta se izdaju na jeziku koji obe strane razumeju, granica između Crne Gore i Srbije je državna granica sa carinskom kontrolom. Za sahranu u Srbiji potrebna je sprovodnica, koju izdaje Ambasada Republike Srbije u Podgorici ili Generalni konzulat u Herceg Novom. Crna Gora je članica konvencije CIEC br. 16, pa izvod iz matičnog registra umrlih na međunarodnom obrascu u Srbiji važi bez legalizacije.",
    ],
    servicePoints: [
      "Preuzimanje iz bolnice, doma zdravlja ili stana u svim crnogorskim opštinama, od primorja do severa",
      "Izvod iz matičnog registra umrlih na međunarodnom obrascu i lekarska potvrda o smrti",
      "Sprovodnica iz Ambasade Srbije u Podgorici ili Generalnog konzulata u Herceg Novom",
      "Granične i carinske formalnosti na prelazu ka Srbiji, BiH ili Severnoj Makedoniji",
      "Prevoz i u suprotnom smeru — iz zapadne Evrope do mesta sahrane u Crnoj Gori",
    ],
    documents: [
      ["Potvrda o smrti", "lekarska potvrda o smrti i uzroku smrti"],
      ["Izvod iz matičnog registra umrlih", "na međunarodnom (višejezičnom) obrascu važi u Srbiji bez legalizacije"],
      ["Dozvola za prevoz posmrtnih ostataka", "izdaju je nadležni crnogorski organi"],
      ["Lična dokumenta pokojnika", "pasoš ili lična karta"],
    ],
    relatedLinks: [
      { href: "/nemacka", label: "prevoz pokojnika iz Nemačke" },
      { href: "/hrvatska", label: "prevoz pokojnika iz Hrvatske" },
    ],
    howItWorks: [
      "Posle vašeg poziva dogovaramo preuzimanje pokojnika iz bolnice, mrtvačnice ili stana i proveravamo da li je smrt utvrdio lekar i da li je potrebna obdukcija. Kod nasilne ili iznenadne smrti o daljem postupku odlučuje tužilaštvo, dok se kod prirodne smrti dokumenta pribavljaju brzo.",
      "Smrt se upisuje u matični registar umrlih, iz koga tražimo izvod na međunarodnom obrascu. Uz lekarsku potvrdu o smrti pribavljamo i dozvolu crnogorskih organa za prevoz posmrtnih ostataka iz zemlje, a za sahranu u Srbiji podnosimo zahtev za sprovodnicu nadležnom srpskom predstavništvu u Podgorici ili Herceg Novom.",
      "Ako je sahrana u Bosni i Hercegovini — na primer u Trebinju, Foči ili Sarajevu — ili u Severnoj Makedoniji, dozvolu za unos posmrtnih ostataka tražimo od predstavništva te zemlje u Crnoj Gori. Za prevoz u BiH koriste se prelazi prema istočnoj Hercegovini, pa je relacija često kraća nego do Beograda.",
      "Pokojnika prevozimo specijalizovanim pogrebnim vozilom, u sanduku propisanom za međunarodni prevoz, a na graničnom prelazu sami obavljamo carinske i pasoške formalnosti. Porodica zna u kom trenutku vozilo kreće i kada stiže, a po dolasku pokojnika predajemo porodici ili lokalnoj pogrebnoj službi. Pročitajte i <a href=\"/blog-hitni-prevoz-pokojnika-sta-treba-znati\" class=\"text-primary\">šta treba znati kod hitnog prevoza</a>.",
    ],
    transportDuration: "1–2 dana",
    routeFrom: "podgorica",
    routeFromGen: "Podgorice",
    cities: [
      { name: "Podgorica", note: "Glavni grad i sedište Ambasade Srbije; do Beograda oko 430 km." },
      { name: "Nikšić", note: "Drugi grad po veličini; kratka veza prema istočnoj Hercegovini." },
      { name: "Herceg Novi", note: "Sedište Generalnog konzulata Srbije, blizu granice sa BiH." },
      { name: "Budva", note: "Centar primorskog turizma, gde leti boravi mnogo gostiju iz Srbije." },
      { name: "Bar", note: "Južno primorje; ka Srbiji se vozi preko Podgorice." },
      { name: "Bijelo Polje", note: "Sever zemlje, blizu prelaza Dobrakovo–Gostun." },
    ],
    cityFaqs: [
      {
        id: "Podgorica",
        title: "Prevoz pokojnika iz Podgorice",
        body:
          "Iz Podgorice i okoline pokojnike preuzimamo iz Kliničkog centra Crne Gore, mrtvačnica i stanova. U glavnom gradu je i Ambasada Srbije, pa se sprovodnica pribavlja na licu mesta. Iz Podgorice do Banje Luke ima oko 460 km, a do Skoplja oko 330 km.",
      },
      {
        id: "Niksic",
        title: "Prevoz pokojnika iz Nikšića",
        body:
          "Iz Nikšića je istočna Hercegovina sasvim blizu, pa je prevoz u BiH odavde posebno jednostavan. Kada je sahrana u Srbiji, rutu biramo prema stanju puteva kroz planinske prevoje, naročito zimi.",
      },
      {
        id: "Primorje",
        title: "Prevoz pokojnika sa crnogorskog primorja",
        body:
          "Kada smrt nastupi tokom letovanja u Budvi, Baru, Ulcinju ili Herceg Novom, porodica je često u šoku i daleko od kuće. Preuzimamo komunikaciju sa domom zdravlja ili bolnicom, a sprovodnicu tražimo od Generalnog konzulata u Herceg Novom ili Ambasade u Podgorici, zavisno od slučaja.",
      },
      {
        id: "BijeloPolje",
        title: "Prevoz pokojnika iz Bijelog Polja, Berana i Pljevalja",
        body:
          "Sever Crne Gore je najbliži Srbiji, pa pokojnik odavde u Prijepolje, Novi Pazar ili Užice stiže za nekoliko sati. Iz Bijelog Polja se ide preko prelaza Dobrakovo–Gostun, a iz drugih mesta na severu biramo prelaz koji je za datu rutu najpogodniji.",
      },
    ],
    faqSchema: [
      {
        q: "Da li prevozite pokojnike iz Crne Gore u Srbiju?",
        a: "Da. Iz Podgorice do Beograda ima oko 430 km, odnosno oko 7 sati čiste vožnje, a ceo postupak sa dokumentima najčešće traje 1–2 dana. Pokojnika dovozimo do mesta sahrane bilo gde u Srbiji.",
      },
      {
        q: "Da li organizujete prevoz pokojnika iz Crne Gore u Bosnu i Hercegovinu?",
        a: "Da. Iz Podgorice do Sarajeva ima oko 270 km, a do Banje Luke oko 460 km. Dozvolu za sahranu u BiH izdaje predstavništvo Bosne i Hercegovine u Crnoj Gori, a sve papire pripremamo mi.",
      },
      {
        q: "Da li prevozite pokojnike iz inostranstva u Crnu Goru?",
        a: "Da. Prevozimo pokojnike i u Crnu Goru, na primer iz Austrije ili Nemačke — iz Beča do Podgorice ima oko 1.060 km, a iz Minhena oko 1.170 km. Dozvolu za unos izdaje predstavništvo Crne Gore u zemlji smrti. Više: <a href=\"/nemacka\" class=\"text-primary\">prevoz pokojnika iz Nemačke</a> i <a href=\"/austrija\" class=\"text-primary\">prevoz pokojnika iz Austrije</a>.",
      },
      {
        q: "Koliko košta prevoz pokojnika iz Crne Gore?",
        a: "Zbog kratkih relacija prevoz iz Crne Gore spada u jednostavnije, a cena zavisi od mesta preuzimanja, mesta sahrane i izabranog sanduka. Iznos vam kažemo u prvom razgovoru, a više o stavkama piše u <a href=\"/cenovnik\" class=\"text-primary\">cenovniku</a>.",
      },
    ],
  },
  {
    slug: "grcka",
    name: "Grčka",
    nameGenitive: "Grčke",
    schemaCountry: "Greece",
    metaDescription:
      "Prevoz pokojnika iz Grčke u Srbiju, BiH i Severnu Makedoniju. Grčka dokumenta, apostil, prevod i sprovodnicu završavamo mi. Solun, Atina, ostrva, 24/7.",
    heroLead:
      "Organizujemo prevoz pokojnika iz Soluna, Atine, sa Halkidikija, iz Katerinija, Kavale i ostatka Grčke do sahrane u Srbiji, Bosni i Hercegovini, Crnoj Gori ili Severnoj Makedoniji. Kod iznenadne smrti na letovanju preuzimamo komunikaciju sa grčkim bolnicama i službama.",
    intro: [
      "Grčka je za mnoge iz Srbije, Bosne i Hercegovine i Severne Makedonije omiljeno letovalište, a ima i onih koji tamo žive stalno. Zbog toga prevoz pokojnika iz Grčke najčešće nije planiran: smrt zatekne nekoga na odmoru na Halkidikiju, u Paraliji, na Tasosu ili Krfu, a porodica je stotinama kilometara daleko i ne zna jezik. Naš posao je da u tom trenutku preuzmemo sve razgovore i papire.",
      "Severna Grčka je blizu: od Soluna do Beograda ima oko 620 km, a do Skoplja svega oko 230 km. Put najčešće vodi preko Severne Makedonije — kroz granične prelaze Evzoni–Bogorodica i Tabanovce–Preševo — a po potrebi i preko Bugarske. Iz Atine je razdaljina do Beograda oko 1.090 km, a sa ostrva pokojnik najpre putuje trajektom ili avionom do kopna.",
      "Grčka nije ratifikovala konvenciju CIEC br. 16, pa se grčki akt o smrti za srpske organe overava apostilom i prevodi na srpski. Smrt se upisuje u matičnu službu opštine u kojoj je nastupila, koja izdaje zvanični akt o smrti. Srbija u Grčkoj ima Ambasadu u Atini i Generalni konzulat u Solunu, a koje je predstavništvo nadležno, utvrđujemo odmah na početku.",
    ],
    servicePoints: [
      "Preuzimanje iz bolnica i domova zdravlja na kopnu, a uz trajekt ili avion i sa ostrva",
      "Akt o smrti iz grčke matične službe, overen apostilom i preveden na srpski",
      "Grčka dozvola za prevoz posmrtnih ostataka i dokumenta za tranzit kroz Severnu Makedoniju",
      "Sprovodnica iz Ambasade Srbije u Atini ili Generalnog konzulata u Solunu",
      "Podrška porodici zatečenoj na letovanju, na srpskom jeziku i bez posrednika",
    ],
    documents: [
      ["Ιατρικό πιστοποιητικό θανάτου", "lekarska potvrda o smrti i uzroku smrti"],
      ["Ληξιαρχική πράξη θανάτου", "akt o smrti iz matične službe opštine — za Srbiju se overava apostilom i prevodi"],
      ["Άδεια μεταφοράς", "dozvola za prevoz posmrtnih ostataka u inostranstvo"],
      ["Ταυτότητα / διαβατήριο", "lična karta ili pasoš pokojnika"],
    ],
    relatedLinks: [
      { href: "/crna-gora", label: "prevoz pokojnika iz Crne Gore" },
      { href: "/italija", label: "prevoz pokojnika iz Italije" },
    ],
    howItWorks: [
      "Kada nas pozovete, prvo saznajemo gde se pokojnik nalazi — u bolnici, domu zdravlja ili hotelu — i da li je smrt prirodna. Lekar izdaje potvrdu o smrti, a kod nesreće, utapanja ili nejasnih okolnosti uključuju se policija i tužilaštvo, što može da odloži predaju tela. Komunikaciju sa grčkim službama u tom periodu preuzimamo mi.",
      "Na osnovu lekarske potvrde smrt se upisuje u matičnu službu opštine, koja izdaje akt o smrti. Pošto Grčka nije u sistemu višejezičnih izvoda, na akt se stavlja apostil, a zatim ga prevodi ovlašćeni sudski tumač. Paralelno se pribavlja grčka dozvola za prevoz posmrtnih ostataka i priprema hermetički zatvoren sanduk propisan za međunarodni prevoz.",
      "Sprovodnicu tražimo od Ambasade Srbije u Atini ili Generalnog konzulata u Solunu, a za sahranu u Severnoj Makedoniji, Bosni i Hercegovini ili Crnoj Gori od predstavništva te zemlje u Grčkoj. Pošto ruta ka Srbiji prolazi kroz Severnu Makedoniju, proveravamo i dokumenta potrebna za tranzit, kako na granici ne bi bilo zastoja.",
      "Pogrebnim vozilom vozimo preko Evzonija i Severne Makedonije do Preševa i dalje do mesta sahrane; iz Atine je čista vožnja do Beograda oko 12 sati. Porodicu obaveštavamo o polasku i prelasku svake granice. Ako ne znate odakle da počnete, pročitajte <a href=\"/blog-sta-raditi-kada-neko-umre-u-inostranstvu\" class=\"text-primary\">šta raditi kada neko umre u inostranstvu</a>.",
    ],
    transportDuration: "3–5 dana",
    routeFrom: "solun",
    routeFromGen: "Soluna",
    cities: [
      { name: "Solun", href: "/solun", note: "Centralna Makedonija; sedište Generalnog konzulata, do Beograda oko 620 km." },
      { name: "Atina", href: "/atina", note: "Atika i glavni grad; sedište Ambasade Srbije, do Beograda oko 1.090 km." },
      { name: "Katerini", note: "Pijerija i Paralija, letovališta koja posećuju mnogi turisti iz regiona." },
      { name: "Kavala", note: "Istočna Makedonija; trajektna veza sa ostrvom Tasos." },
      { name: "Larisa", note: "Tesalija i centralna Grčka, na autoputu ka Solunu." },
      { name: "Patra", note: "Peloponez i zapadna Grčka; jedna od dužih grčkih relacija." },
    ],
    cityFaqs: [
      {
        id: "Solun",
        title: "Prevoz pokojnika iz Soluna",
        body:
          "Solun je najbliži veći grad u Grčkoj: do Beograda je oko 620 km, do Skoplja oko 230 km, a do Podgorice oko 560 km. U Solunu je i Generalni konzulat Srbije, pa se sprovodnica može pribaviti u istom gradu u kome se završavaju i grčka dokumenta.",
      },
      {
        id: "Atina",
        title: "Prevoz pokojnika iz Atine",
        body:
          "Iz Atine je do Beograda oko 1.090 km, a do Skoplja oko 690 km. U Atini se nalazi Ambasada Srbije, a zbog dužine puta porodicama predstavljamo i mogućnost prevoza avionom do Beograda.",
      },
      {
        id: "Halkidiki",
        title: "Prevoz pokojnika sa Halkidikija i iz Paralije",
        body:
          "Halkidiki, Paralija i Olimpska rivijera su među najposećenijim letovalištima ljudi iz Srbije i BiH. Kada smrt nastupi tokom odmora, pokojnik se obično prenosi u najbližu bolnicu ili mrtvačnicu, a mi odatle preuzimamo dalju organizaciju.",
      },
      {
        id: "Ostrva",
        title: "Prevoz pokojnika sa grčkih ostrva",
        body:
          "Sa Tasosa, Krfa ili Krita pokojnik najpre mora do kopna — trajektom ili avionom, zavisno od ostrva i pravila prevoznika. Lefkada je sa kopnom povezana mostom, pa je odatle drumski prevoz direktan. Ovaj deo puta organizujemo zajedno sa ostalim dokumentima.",
      },
    ],
    faqSchema: [
      {
        q: "Da li prevozite pokojnike iz Grčke u Srbiju?",
        a: "Da. Iz Soluna do Beograda ima oko 620 km, a iz Atine oko 1.090 km. Ceo postupak sa grčkim dokumentima, apostilom, prevodom i sprovodnicom najčešće traje 3–5 dana.",
      },
      {
        q: "Da li organizujete prevoz pokojnika iz Grčke u Severnu Makedoniju?",
        a: "Da. Iz Soluna do Skoplja ima oko 230 km, što je oko 3 sata čiste vožnje, pa je ovo jedna od najkraćih relacija koje radimo. Dozvolu za sahranu izdaje predstavništvo Severne Makedonije u Grčkoj.",
      },
      {
        q: "Da li prevozite pokojnike iz Grčke u Bosnu i Hercegovinu?",
        a: "Da. Iz Soluna do Sarajeva ima oko 820 km, a do Banje Luke oko 950 km. Dozvolu za sahranu u BiH izdaje predstavništvo Bosne i Hercegovine, a mi pripremamo i grčka dokumenta i prevode.",
      },
      {
        q: "Zašto grčka dokumenta moraju da se overe apostilom?",
        a: "Grčka nije ratifikovala konvenciju o višejezičnim izvodima iz matičnih knjiga, pa srpski organi prihvataju grčki akt o smrti tek sa apostilom i prevodom na srpski. Oba koraka organizujemo mi.",
      },
    ],
  },
  {
    slug: "norveska",
    name: "Norveška",
    nameGenitive: "Norveške",
    schemaCountry: "Norway",
    metaDescription:
      "Prevoz pokojnika iz Norveške u Srbiju, BiH i Crnu Goru. Dozvolu policije, apostil, prevod i sprovodnicu iz Osla završavamo mi. Dostupni smo 24/7.",
    heroLead:
      "Organizujemo prevoz pokojnika iz Osla, Bergena, Trondhajma, Stavangera i svih drugih mesta u Norveškoj do sahrane u Srbiji, Bosni i Hercegovini, Crnoj Gori ili Severnoj Makedoniji. Norveške dozvole, apostil, prevode i sprovodnicu preuzimamo mi.",
    intro: [
      "Zajednica ljudi iz Srbije i Bosne i Hercegovine u Norveškoj manja je nego u Švedskoj, ali je čvrsto povezana: mnogi su došli kao izbeglice iz BiH devedesetih, a drugi kasnije, zbog posla. Žive u Oslu i okolini, ali i u Bergenu, Stavangeru, Trondhajmu i manjim mestima duž obale. Kada neko premine, porodica se često odlučuje za sahranu u zavičaju, uprkos velikoj udaljenosti.",
      "Norveška je jedna od najudaljenijih zemalja iz kojih organizujemo prevoz: od Osla do Beograda ima oko 2.610 km, odnosno oko 27 sati čiste vožnje, a do Sarajeva oko 2.730 km. Drumom se ide kroz Švedsku i preko Danske ili trajektom do Nemačke, a zatim kroz srednju Evropu; iz Bergena, Trondhajma i sa severa zemlje porodicama po pravilu predlažemo prevoz avionom.",
      "Dve stvari razlikuju Norvešku od zemalja Evropske unije. Prva je carina: Norveška nije u EU, pa se pri izlasku iz zemlje obavljaju carinske formalnosti. Druga su dokumenta: Norveška nije članica konvencije CIEC br. 16, pa se potvrda o smrti za srpske organe overava apostilom i prevodi, a za iznošenje kovčega iz zemlje potrebna je dozvola norveške policije.",
    ],
    servicePoints: [
      "Preuzimanje iz bolnice, doma za stare (sykehjem) ili stana bilo gde u Norveškoj",
      "Dozvola policije za prevoz kovčega i potvrda da smrt nije posledica zarazne bolesti",
      "Apostil na norveškoj potvrdi o smrti i prevod na srpski kod sudskog tumača",
      "Sprovodnica iz Ambasade Srbije u Oslu ili dozvola predstavništva BiH, Crne Gore ili Severne Makedonije",
      "Carinske formalnosti pri izlasku iz Norveške i izbor između drumskog i avionskog prevoza",
    ],
    documents: [
      ["Legeerklæring om dødsfall", "lekarska potvrda o smrti i uzroku smrti"],
      ["Dødsattest", "potvrda o smrti — za srpske organe overava se apostilom i prevodi na srpski"],
      ["Smitteattest", "potvrda da smrt nije posledica zarazne bolesti — traži se za prevoz kovčega"],
      ["Tillatelse fra politiet", "dozvola norveške policije za prevoz kovčega iz zemlje"],
      ["Pass / identifikasjon", "pasoš ili lična dokumenta pokojnika"],
    ],
    relatedLinks: [
      { href: "/svedska", label: "prevoz pokojnika iz Švedske" },
      { href: "/danska", label: "prevoz pokojnika iz Danske" },
    ],
    howItWorks: [
      "Posle vašeg poziva preuzimamo komunikaciju sa bolnicom ili domom u kom se pokojnik nalazi. Lekar koji je utvrdio smrt izdaje lekarsku potvrdu o smrti (legeerklæring om dødsfall) i prijavljuje smrt norveškom registru stanovništva (Folkeregisteret), koji vodi poreska uprava Skatteetaten. Kod nasilne ili nejasne smrti uključuje se policija, i tada se čeka njeno odobrenje pre preuzimanja tela.",
      "Za prevoz kovčega iz Norveške bolnica izdaje potvrdu da smrt nije posledica zarazne bolesti (smitteattest), a mi od policije tražimo dozvolu za iznošenje posmrtnih ostataka iz zemlje. Potvrdu o smrti overavamo apostilom i dajemo na prevod ovlašćenom sudskom tumaču, jer srpski organi norveški dokument bez toga ne prihvataju.",
      "Sprovodnicu za celu Norvešku izdaje Ambasada Republike Srbije u Oslu, na osnovu pasoša pokojnika, overene i prevedene potvrde o smrti, lekarskog izveštaja i podataka o mestu sahrane. Za sahranu u Bosni i Hercegovini, Crnoj Gori ili Severnoj Makedoniji zahtev podnosimo predstavništvu te zemlje nadležnom za Norvešku.",
      "Pokojnik putuje u hermetički zatvorenom sanduku propisanom za međunarodni prevoz. Pre polaska pripremamo carinska dokumenta za izlazak iz Norveške, a zatim vozimo kroz Švedsku ili trajektom do Nemačke, uz propisane odmore vozača — ili organizujemo avionski prevoz do aerodroma u regionu. Opširnije o ovom izboru: <a href=\"/blog-prevoz-pokojnika-avionom-vs-kombijem\" class=\"text-primary\">prevoz avionom ili kombijem</a>.",
    ],
    transportDuration: "4–7 dana",
    routeFrom: "oslo",
    routeFromGen: "Osla",
    cities: [
      { name: "Oslo", href: "/oslo", note: "Glavni grad i sedište Ambasade Srbije; do Beograda drumom oko 2.610 km." },
      { name: "Bergen", note: "Zapadna obala; zbog udaljenosti se najčešće bira avion." },
      { name: "Trondhajm", note: "Centralna Norveška; drumom kroz Švedsku ili avionom." },
      { name: "Stavanger", note: "Rogaland i jugozapad zemlje; dokumenta se pribavljaju lokalno." },
      { name: "Kristijansand", note: "Jug Norveške; trajektna linija ka danskom Hirtshalsu." },
    ],
    cityFaqs: [
      {
        id: "Oslo",
        title: "Prevoz pokojnika iz Osla",
        body:
          "U Oslu se nalazi Ambasada Srbije, nadležna za sprovodnice iz cele Norveške. Iz glavnog grada drumski prevoz ide kroz Švedsku ka Danskoj ili trajektom do Kila u Nemačkoj, a aerodrom Gardermoen nudi i avionsku opciju.",
      },
      {
        id: "Bergen",
        title: "Prevoz pokojnika iz Bergena",
        body:
          "Od Bergena do Osla je još nekoliko sati vožnje preko planina, pa se iz Bergena i sa zapadne obale porodicama obično predlaže prevoz avionom. Policijska dozvola i smitteattest pribavljaju se lokalno, a sprovodnicu tražimo od ambasade u Oslu.",
      },
      {
        id: "Trondhajm",
        title: "Prevoz pokojnika iz Trondhajma",
        body:
          "Iz Trondhajma i centralne Norveške put do Balkana je duži nego iz Osla, pa je avion najčešće praktičniji izbor. Drumom se može i direktno kroz Švedsku, što biramo kada porodica želi da pokojnik ceo put putuje istim vozilom.",
      },
      {
        id: "Stavanger",
        title: "Prevoz pokojnika iz Stavangera i Kristijansanda",
        body:
          "Sa juga i jugozapada Norveške postoje trajektne linije ka Danskoj, na primer iz Kristijansanda za Hirtshals, pa drumski prevoz ne mora da ide preko Osla. Postupak sa policijskom dozvolom i apostilom isti je kao u ostatku zemlje.",
      },
    ],
    faqSchema: [
      {
        q: "Da li prevozite pokojnike iz Norveške u Bosnu i Hercegovinu?",
        a: "Da. Iz Osla do Banje Luke ima oko 2.530 km, a do Sarajeva oko 2.730 km. Porodice biraju između drumskog prevoza i aviona do Sarajeva ili Banje Luke, a dozvolu za sahranu u BiH izdaje predstavništvo Bosne i Hercegovine.",
      },
      {
        q: "Koliko traje prevoz pokojnika iz Norveške u Srbiju?",
        a: "Ceo postupak obično traje 4–7 dana. Najviše vremena traže policijska dozvola, apostil, prevod i sprovodnica; vožnja od Osla do Beograda je oko 27 sati bez pauza, uz odmore vozača i carinu.",
      },
      {
        q: "Koja dokumenta su potrebna za prevoz pokojnika iz Norveške?",
        a: "Potrebni su lekarska potvrda o smrti, potvrda da smrt nije posledica zarazne bolesti, dozvola policije za prevoz kovčega, pasoš pokojnika i potvrda o smrti sa apostilom i prevodom. Za srpske organe tome se dodaje sprovodnica Ambasade u Oslu, a sve to pribavljamo mi.",
      },
      {
        q: "Da li organizujete prevoz pokojnika iz Norveške u Crnu Goru?",
        a: "Da. Iz Osla do Podgorice ima oko 3.020 km drumom, pa se za Crnu Goru gotovo uvek bira avion do Podgorice, uz preuzimanje na aerodromu i prevoz do mesta sahrane. Dozvolu izdaje predstavništvo Crne Gore.",
      },
    ],
  },
];
