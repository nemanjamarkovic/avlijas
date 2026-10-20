/**
 * City pages (Austria, Switzerland, Italy, Spain) — rendered by renderCityPage() in scripts/build-site.js.
 *
 * Fields: slug, country (key in facts.COUNTRY_META), consulate (key in facts.CONSULATES),
 * name (local spelling), nameNom / nameGen / nameLoc (Serbian cases: Beč / Beča / Beču),
 * description (meta, 140–155 chars), lead, intro[] and process[] (unique paragraphs, HTML allowed),
 * nearby[] (towns around the city), regionLoc (locative: "Donjoj Austriji"), faqs[{ q, a }],
 * relatedBlog[{ href, title }]; optional: title (≤ 60 chars), duration.
 */
module.exports = [
  {
    slug: "bec",
    country: "austrija",
    consulate: "vienna",
    name: "Wien",
    nameNom: "Beč",
    nameGen: "Beča",
    nameLoc: "Beču",
    description:
      "Prevoz pokojnika iz Beča u Srbiju, BiH i Crnu Goru. Sprovodnicu, Leichenpass i svu dokumentaciju završavamo mi. Oko 620 km do Beograda. Pozovite 24/7.",
    lead:
      "Organizujemo prevoz pokojnika iz Beča i cele Donje Austrije u Srbiju, Bosnu i Hercegovinu, Crnu Goru i Severnu Makedoniju. Dokumentaciju završavamo mi — vi ostajete uz porodicu.",
    intro: [
      "Beč je dom jedne od najvećih zajednica ljudi iz Srbije i regiona u Evropi. Zato je i prevoz pokojnika iz Beča jedan od najčešćih zahteva sa kojima nam se porodice obraćaju — bilo da je bliska osoba decenijama živela u Austriji, bila tu na lečenju ili u poseti deci. Pokojnika prevozimo do mesta sahrane bilo gde u Srbiji (Beograd, Novi Sad, Niš, Kragujevac, Čačak, Požarevac...), ali i u Bosnu i Hercegovinu, Crnu Goru i Severnu Makedoniju.",
      "Beč je najbliži veliki grad zapadne Evrope: do Beograda ima oko 620 km, najčešće autoputem preko Mađarske i graničnog prelaza Horgoš. Zbog toga je prevoz iz Beča u pravilu brži i povoljniji nego iz Nemačke ili Švajcarske. Porodice često pitaju da li je bolji prevoz avionom — sa ove udaljenosti drumski prevoz je gotovo uvek brži u ukupnom zbiru, jer avionski prevoz traži dodatnu dokumentaciju i dva prevoza do i od aerodroma.",
      "Naš tim govori nemački, pa razgovore sa bečkim bolnicama, matičnom službom i magistratom vodimo direktno, bez posrednika. Porodica dobija jednu kontakt osobu koja govori srpski i javlja svaki korak.",
    ],
    process: [
      "Kada smrt nastupi u bolnici — na primer u AKH Wien, Klinik Ottakring, Klinik Favoriten ili Klinik Floridsdorf — ili u domu za stare, ustanova obavlja mrtvozornički pregled (Totenbeschau) i izdaje nalaz o smrti. Ako je osoba preminula kod kuće, smrt mora da utvrdi lekar mrtvozornik; samo kada okolnosti nisu jasne uključuju se policija i tužilaštvo, a eventualna obdukcija produžava postupak za nekoliko dana.",
      "Smrt se zatim upisuje u matičnoj službi (Standesamt) bečkog okruga u kom je nastupila. Mi pribavljamo izvod iz matične knjige umrlih — najbolje u višejezičnom obliku — i dozvolu za prevoz u inostranstvo (Leichenpass), koju u Beču izdaje gradski magistrat. Istovremeno podnosimo zahtev za sprovodnicu u konzularnom odeljenju Ambasade Srbije u Beču, odnosno kod predstavništva BiH, Crne Gore ili Severne Makedonije ako je sahrana tamo.",
    ],
    nearby: [
      "Sankt Pölten",
      "Baden bei Wien",
      "Wiener Neustadt",
      "Mödling",
      "Klosterneuburg",
      "Schwechat",
      "Tulln",
      "Ajzenštat (Eisenstadt)",
    ],
    regionLoc: "Donjoj Austriji i Gradišću",
    faqs: [
      {
        q: "Koliko traje prevoz pokojnika iz Beča do Beograda?",
        a: "Sama vožnja od Beča do Beograda je oko 620 km, odnosno oko 6 sati bez pauza. Ceo postupak, uključujući austrijsku dokumentaciju i sprovodnicu, najčešće traje 1–3 dana. Duže može da potraje samo ako se čeka obdukcija ili dozvola tužilaštva.",
      },
      {
        q: "Da li organizujete prevoz pokojnika iz Beča u Bosnu i Hercegovinu?",
        a: "Da. Iz Beča redovno prevozimo pokojnike u BiH — do Banje Luke je oko 550 km, a do Sarajeva oko 740 km. Za sahranu u BiH dozvolu za unos posmrtnih ostataka izdaje predstavništvo Bosne i Hercegovine, a taj deo dokumentacije pribavljamo mi.",
      },
      {
        q: "Gde se u Beču dobija sprovodnica za Srbiju?",
        a: "Za pokojnike čije je poslednje prebivalište bilo u Beču, Donjoj Austriji, Gradišću, Štajerskoj ili Koruškoj, sprovodnicu izdaje konzularno odeljenje Ambasade Republike Srbije u Beču. Za Gornju Austriju, Salcburg, Tirol i Forarlberg nadležan je Generalni konzulat u Salcburgu. Zahtev podnosimo mi, u ime porodice.",
      },
      {
        q: "Šta da radim ako je osoba preminula kod kuće u Beču?",
        a: "Prvo pozovite lekara ili hitnu pomoć (144) kako bi se obavio mrtvozornički pregled — bez njega pokojnik ne sme biti pomeren. Odmah zatim pozovite nas: dogovaramo preuzimanje i preuzimamo sav dalji kontakt sa institucijama.",
      },
      {
        q: "Koliko košta prevoz pokojnika iz Beča?",
        a: "Beč je jedna od najkraćih relacija iz zapadne Evrope, pa je i prevoz odavde među povoljnijima. Cena zavisi od mesta sahrane, vrste sanduka i troškova dokumentacije — tačan iznos dobijate već u prvom razgovoru. Pogledajte i <a href=\"/cenovnik\">cenovnik</a>.",
      },
      {
        q: "Da li je moguća kremacija u Beču i prevoz urne?",
        a: "Da. Ako se porodica odluči za kremaciju u Beču, organizujemo je i prevozimo urnu. I za urnu je potrebna sprovodnica, uz potvrdu o kremaciji, ali je sam prevoz jednostavniji i jeftiniji nego prevoz u sanduku.",
      },
    ],
    relatedBlog: [
      { href: "/blog-prevoz-pokojnika-iz-austrije-korak-po-korak", title: "Prevoz pokojnika iz Austrije — korak po korak" },
      { href: "/austrija", title: "Prevoz pokojnika iz Austrije — sve informacije" },
    ],
  },
  {
    slug: "graz",
    country: "austrija",
    consulate: "vienna",
    name: "Graz",
    nameNom: "Grac",
    nameGen: "Graca",
    nameLoc: "Gracu",
    description:
      "Prevoz pokojnika iz Graca u BiH i Srbiju: oko 370 km do Banje Luke i 580 km do Beograda. Leichenpass i sprovodnicu završavamo mi. Pozovite 24/7.",
    lead:
      "Prevozimo pokojnike iz Graca i cele Štajerske do mesta sahrane u Bosni i Hercegovini, Srbiji, Crnoj Gori i Severnoj Makedoniji. Od prvog poziva do predaje porodici brinemo o svakom dokumentu i svakom kilometru puta.",
    intro: [
      "Grac je drugi po veličini grad Austrije i sedište Štajerske. U njemu i okolnim mestima decenijama žive brojne porodice iz Bosne i Hercegovine, Srbije i Hrvatske, a mnogi stariji članovi tih porodica žele da budu sahranjeni u rodnom kraju — u Krajini, Posavini, Semberiji ili negde u Srbiji. Prevoz pokojnika iz Graca organizujemo do bilo kog grada ili sela u BiH, uključujući Republiku Srpsku, kao i u Srbiju, Crnu Goru i Severnu Makedoniju.",
      "Među velikim austrijskim gradovima Grac je najbliži Bosni i Hercegovini: do Banje Luke ima oko 370 km, odnosno oko 4 sata čiste vožnje, a do Beograda oko 580 km. Vozilo kreće autoputem A9 (Pyhrn) do granice kod Špilfelda (Spielfeld), prolazi pored Maribora i preko prelaza Gruškovje–Macelj stiže do Zagreba. Odatle autoput A3 vodi kroz Slavoniju — kod Okučana se skreće ka Gradiški i Banjoj Luci, a za Srbiju se nastavlja do prelaza Bajakovo–Batrovci.",
      "Slovenija i Hrvatska su u Šengenskom prostoru, pa se glavna granična i carinska kontrola obavlja tek na izlasku iz Hrvatske. Režim rada i gužve na prelazima prema BiH i Srbiji često se menjaju, zato stanje proveravamo pre polaska i javljamo porodici kada je vozilo krenulo i kada se očekuje dolazak. Tako sahranu možete da dogovorite mirno, bez nagađanja.",
    ],
    process: [
      "Grac je statutarni grad, pa poslove okružne uprave obavlja gradski magistrat (Magistrat Graz) — kod njega se po pravilu podnosi i zahtev za Leichenpass. Pre toga lekar mrtvozornik mora da pregleda pokojnika i izda nalaz, a matična služba grada (Standesamt Graz) da upiše smrt. Kada osoba premine u univerzitetskoj klinici LKH-Univ. Klinikum Graz, u bolnici Barmherzige Brüder ili u nekom od staračkih domova, pregled i prijavu smrti organizuje sama ustanova; mi preuzimamo razgovore na nemačkom i dogovaramo termin preuzimanja.",
      "Kod iznenadne smrti, nesreće ili smrti kod kuće bez poznatog uzroka, tužilaštvo može da naloži obdukciju na Institutu za sudsku medicinu Medicinskog univerziteta u Gracu. Pokojnik se tada izdaje tek uz pisanu saglasnost, pa se postupak produžava za nekoliko dana — o tome vas obaveštavamo čim saznamo. Za to vreme pripremamo dokumenta za zemlju sahrane: sprovodnicu za Srbiju izdaje konzularno odeljenje Ambasade u Beču, koje pokriva i Štajersku, a dozvolu za sahranu u BiH predstavništvo Bosne i Hercegovine.",
    ],
    nearby: ["Leoben", "Kapfenberg", "Bruck an der Mur", "Leibnitz", "Gleisdorf", "Weiz", "Voitsberg", "Feldbach"],
    regionLoc: "Štajerskoj",
    faqs: [
      {
        q: "Koliko ima od Graca do Banje Luke i Sarajeva?",
        a: "Do Banje Luke je oko 370 km, što je oko 4 sata vožnje bez pauza, a do Sarajeva oko 590 km, odnosno oko 7 sati. Sa austrijskim dokumentima i dozvolom predstavništva BiH, od smrti do sahrane u Bosni i Hercegovini najčešće prođe 1–3 dana. Ulaznu dozvolu za BiH pribavljamo mi, zajedno sa ostalim papirima.",
      },
      {
        q: "Koje predstavništvo izdaje sprovodnicu za pokojnika iz Štajerske?",
        a: "Štajerska je u nadležnosti konzularnog odeljenja Ambasade Republike Srbije u Beču, kao i Beč, Donja Austrija, Gradišće i Koruška. Porodica ne mora lično da putuje u Beč: zahtev sa pasošem pokojnika, izvodom o smrti i austrijskom dozvolom za prevoz podnosimo mi, kao ovlašćeno pogrebno preduzeće.",
      },
      {
        q: "Da li prevozite pokojnike iz Graca u Crnu Goru i Severnu Makedoniju?",
        a: "Da. Do Podgorice je oko 880 km (oko 11 sati vožnje), a do Skoplja oko 1.010 km (takođe oko 11 sati). Vozač na tim relacijama pravi propisane odmore, pa stvarno putovanje traje duže od čiste vožnje. Dozvolu za sahranu izdaje crnogorsko, odnosno severnomakedonsko predstavništvo, a pribavljamo je mi.",
      },
      {
        q: "Osoba je preminula kod kuće u Gracu — koga prvo da pozovem?",
        a: "Pozovite hitnu pomoć (144) ili dežurnu lekarsku službu (141), kako bi lekar utvrdio smrt i izdao nalaz. Do završetka pregleda pokojnika ne treba pomerati. Čim lekar završi, javite nam se: preuzimamo pokojnika i sav dalji kontakt sa magistratom i matičnom službom.",
      },
      {
        q: "Šta ako se u Gracu određuje obdukcija?",
        a: "Kod nasilne ili nejasne smrti tužilaštvo nalaže sudsko-medicinski pregled, a pokojnik se do njegovog završetka ne izdaje. To obično znači nekoliko dana kašnjenja. Mi u međuvremenu pripremamo sve ostale dokumente, tako da vozilo može da krene čim tužilaštvo da saglasnost.",
      },
      {
        q: "Koliko košta prevoz pokojnika iz Graca u BiH?",
        a: "Cena zavisi pre svega od mesta sahrane — put do Bosanske krajine je kraći nego do istočne Srbije ili Severne Makedonije — zatim od sanduka, takse za Leichenpass i konzularne takse. Okvirne cene ne dajemo napamet: tačan iznos čujete u prvom razgovoru, bez obaveze. Kako se cena formira, pogledajte u <a href=\"/cenovnik\" class=\"text-primary\">cenovniku</a>.",
      },
    ],
    relatedBlog: [
      { href: "/blog-prevoz-pokojnika-iz-austrije-korak-po-korak", title: "Prevoz pokojnika iz Austrije — korak po korak" },
      { href: "/austrija", title: "Prevoz pokojnika iz Austrije — sve informacije" },
    ],
  },
  {
    slug: "linz",
    country: "austrija",
    consulate: "salzburg",
    name: "Linz",
    nameNom: "Linc",
    nameGen: "Linca",
    nameLoc: "Lincu",
    description:
      "Prevoz pokojnika iz Linca i Gornje Austrije u Srbiju i BiH. Sprovodnicu izdaje konzulat u Salcburgu, a zahtev i dokumenta preuzimamo mi. Zovite 24/7.",
    lead:
      "Organizujemo prevoz pokojnika iz Linca, Velsa, Štajra i ostatka Gornje Austrije do mesta sahrane u Srbiji, Bosni i Hercegovini, Crnoj Gori i Severnoj Makedoniji, uz jednu kontakt osobu koja vas vodi kroz ceo postupak.",
    intro: [
      "Linc je industrijsko i upravno središte Gornje Austrije, grad na Dunavu u koji su ljudi iz bivše Jugoslavije decenijama dolazili na rad. Danas u Lincu, Velsu, Štajru i Traunu žive i njihova deca i unuci, a stariji članovi porodica često žele da budu sahranjeni u Srbiji ili Bosni i Hercegovini. Tada preuzimamo organizaciju: od preuzimanja u Lincu do predaje porodici u mestu sahrane.",
      "Linc se nalazi između Salcburga i Beča, pa rutu biramo prema mestu sahrane. Za Beograd (oko 800 km, oko 8 sati vožnje) najkraći put vodi zapadnim autoputem A1 pored Beča, zatim kroz Mađarsku do prelaza Horgoš. Za Bosnu i Hercegovinu kraći je pravac na jug — autoputem A9 kroz Alpe ka Gracu, pa preko Slovenije i Hrvatske — i tako do Banje Luke ima oko 580 km. Rutu dogovaramo sa vama unapred, pa znate kuda i kada vozilo putuje.",
      "Razgovore sa bolnicama, magistratom i matičnom službom u Lincu vodimo na nemačkom, bez prevodilaca i posrednika. Sa nama razgovarate na srpskom, a o svakom završenom koraku vas obaveštavamo — od nalaza mrtvozornika do trenutka kada vozilo pređe granicu.",
    ],
    process: [
      "Linc, Vels i Štajr su statutarni gradovi, pa u njima dozvolu za prevoz u inostranstvo po pravilu izdaje magistrat, dok u ostatku Gornje Austrije to radi okružno poglavarstvo (Bezirkshauptmannschaft), na primer u Gmundenu, Vöcklabrucku ili Braunauu. Zahtev može da se podnese tek kada mrtvozornik utvrdi smrt i kada je matična služba mesta smrti upiše. Ako je smrt nastupila u Kepler univerzitetskoj klinici (Kepler Universitätsklinikum), u Ordensklinikumu Linz ili u Klinikumu Wels-Grieskirchen, bolnica obavlja pregled i prijavu, a mi preuzimamo sve dalje korake.",
      "Najvažnija razlika u odnosu na Beč tiče se srpske dokumentacije: Gornja Austrija nije u nadležnosti Ambasade u Beču, već Generalnog konzulata Republike Srbije u Salcburgu, koji pokriva i Salcburg, Tirol i Forarlberg. Zahtev za sprovodnicu zato šaljemo u Salcburg. Ako je pokojnik imao prebivalište u drugoj pokrajini ili državi, pre podnošenja zahteva proveravamo koje je predstavništvo nadležno, kako se ne bi izgubio nijedan dan.",
    ],
    nearby: ["Wels", "Steyr", "Leonding", "Traun", "Enns", "Ansfelden", "Marchtrenk", "Gmunden", "Vöcklabruck"],
    regionLoc: "Gornjoj Austriji",
    faqs: [
      {
        q: "Zašto sprovodnicu za Linc ne izdaje ambasada u Beču?",
        a: "Srpska predstavništva u Austriji podelila su nadležnost po pokrajinama. Za Gornju Austriju, kojoj pripada Linc, nadležan je Generalni konzulat u Salcburgu, a za Beč, Donju Austriju, Gradišće, Štajersku i Korušku — Ambasada u Beču. Presudno je poslednje prebivalište pokojnika, zato ga proveravamo pre nego što predamo zahtev.",
      },
      {
        q: "Koliko ima od Linca do Banje Luke, Sarajeva i Beograda?",
        a: "Do Banje Luke je oko 580 km (oko 7 sati vožnje), do Sarajeva oko 800 km (oko 9 sati), a do Beograda takođe oko 800 km (oko 8 sati). Ceo postupak sa dokumentima najčešće traje 1–3 dana, a sama vožnja do Bosne ili Srbije završava se u toku jednog dana.",
      },
      {
        q: "Da li organizujete prevoz iz Linca u Crnu Goru ili Severnu Makedoniju?",
        a: "Da. Do Podgorice je oko 1.090 km, a do Skoplja oko 1.240 km, što je 13–14 sati čiste vožnje. Na tako dugim relacijama obavezni odmori vozača produžavaju putovanje, o čemu vas unapred obaveštavamo. Ulaznu dozvolu za Crnu Goru, odnosno Severnu Makedoniju, pribavljamo od predstavništva te zemlje.",
      },
      {
        q: "Pokojnik je u bolnici u Lincu — šta porodica treba da uradi?",
        a: "Bolnica obavlja mrtvozornički pregled i prijavljuje smrt matičnoj službi, pa porodica ne mora sama da obilazi urede. Dovoljno je da nam javite ime pokojnika, naziv bolnice i mesto sahrane i da pripremite pasoš ili ličnu kartu pokojnika. Preuzimanje dogovaramo direktno sa bolnicom.",
      },
      {
        q: "Može li kremacija u Lincu, pa prevoz urne?",
        a: "Može. Kremaciju u Gornjoj Austriji organizujemo na zahtev porodice, a urnu potom prevozimo u Srbiju, BiH ili drugu zemlju regiona. Sprovodnica se traži i kada se prenosi urna, a uz zahtev se prilaže potvrda o kremaciji; hermetički metalni sanduk tada nije potreban, pa je ceo prevoz jednostavniji. Neke porodice biraju urnu i zato što sahranu žele kasnije, kada se okupi cela rodbina.",
      },
      {
        q: "Da li je prevoz avionom iz Linca brži?",
        a: "Retko. Linc je dovoljno blizu da drumski prevoz od vrata do vrata stigne pre nego što bi se završile pripreme za avionski teret, prevoz do aerodroma i preuzimanje na odredištu. Avion ima smisla uglavnom za veoma udaljena mesta sahrane. Detaljno poređenje pročitajte u tekstu <a href=\"/blog-prevoz-pokojnika-avionom-vs-kombijem\" class=\"text-primary\">prevoz pokojnika avionom ili kombijem</a>.",
      },
    ],
    relatedBlog: [
      { href: "/austrija", title: "Prevoz pokojnika iz Austrije — sve informacije" },
      { href: "/blog-prevoz-pokojnika-iz-austrije-korak-po-korak", title: "Prevoz pokojnika iz Austrije — korak po korak" },
    ],
  },
  {
    slug: "cirih",
    country: "svajcarska",
    consulate: "zurich",
    name: "Zürich",
    nameNom: "Cirih",
    nameGen: "Ciriha",
    nameLoc: "Cirihu",
    description:
      "Prevoz pokojnika iz Ciriha i Švajcarske u Srbiju i Bosnu. Leichenpass, carinu i sprovodnicu konzulata u Cirihu preuzimamo mi. Pozovite nas 24/7.",
    lead:
      "Prevozimo pokojnike iz Ciriha i istočne i centralne Švajcarske u Srbiju, Bosnu i Hercegovinu, Crnu Goru i Severnu Makedoniju — drumom ili avionom, uz kompletnu švajcarsku i carinsku dokumentaciju.",
    intro: [
      "Cirih i susedni kantoni — Argau, Sankt Galen, Turgau, Cug i Lucern — dom su velikog broja ljudi poreklom iz Srbije, Bosne i Hercegovine i Severne Makedonije. Mnogi su ovde proveli ceo radni vek, a poslednje počivalište žele u zavičaju. Za njihove porodice prevoz pokojnika iz Švajcarske u Srbiju ili Bosnu ima jedan korak više nego prevoz iz Austrije ili Nemačke: carinu.",
      "Švajcarska nije članica Evropske unije ni njene carinske unije, pa se pri izlasku iz zemlje, pored zdravstvenih i matičnih dokumenata, obavljaju i carinske formalnosti. Prateće papire pripremamo unapred, da vozilo na granici ne bi čekalo bez potrebe. Najkraća drumska ruta do Beograda (oko 1.250 km, oko 13 sati vožnje bez pauza) vodi preko Austrije i Bavarske, kroz tunele Tauern i Karavanke u Sloveniju, a zatim kroz Hrvatsku do Srbije; do Banje Luke je oko 1.040 km.",
      "Kada je mesto sahrane daleko ili je porodici važno da sahrana bude što pre, razmatramo i avionski prevoz. Sa aerodroma Cirih (ZRH) postoje redovni direktni letovi za Beograd, a pokojnik putuje kao poseban avionski teret. Prednosti i ograničenja oba načina objašnjavamo otvoreno već u prvom razgovoru, pa odluku donosite sa svim informacijama.",
    ],
    process: [
      "U kantonu Cirih smrt se prijavljuje opštinskoj službi za sahrane, odnosno matičnoj službi (Bestattungsamt / Zivilstandsamt), u roku od dva dana, uz lekarsku potvrdu o smrti (ärztliche Todesbescheinigung). Kada osoba premine u Univerzitetskoj bolnici Cirih (Universitätsspital), u Gradskoj bolnici Cirih (Stadtspital Zürich) ili u Kantonalnoj bolnici Vinterthur, bolnica izdaje potvrdu i obaveštava nadležne. Leichenpass se izdaje tek kada je smrt prijavljena, a koja služba ga izdaje i koje priloge traži, proveravamo za svaku opštinu posebno.",
      "Ako je smrt bila iznenadna, nasilna ili joj uzrok nije jasan, reč je o vanrednom smrtnom slučaju (aussergewöhnlicher Todesfall). Tada se uključuju policija i tužilaštvo, pregled ili obdukciju obavlja sudska medicina, a pokojnik se izdaje tek uz njihovu saglasnost. U međuvremenu podnosimo zahtev za sprovodnicu Generalnom konzulatu Republike Srbije u Cirihu, a za sahranu u BiH, Crnoj Gori ili Severnoj Makedoniji pribavljamo dozvolu predstavništva te zemlje.",
    ],
    nearby: ["Winterthur", "Uster", "Dübendorf", "Dietikon", "Kloten", "Wetzikon", "Baden", "Aarau", "Zug", "St. Gallen"],
    regionLoc: "kantonu Cirih i okolnim kantonima",
    faqs: [
      {
        q: "Koliko traje prevoz pokojnika iz Švajcarske u Bosnu?",
        a: "Iz Ciriha do Banje Luke ima oko 1.040 km (oko 11 sati vožnje), a do Sarajeva oko 1.260 km (oko 14 sati). Sa švajcarskom dokumentacijom, carinom i dozvolom predstavništva BiH ceo postupak najčešće traje 2–4 dana. Računajte da putovanje traje duže od navedenih sati, jer vozač mora da pravi propisane pauze.",
      },
      {
        q: "Koji konzulat izdaje sprovodnicu ako je pokojnik živeo u Bernu ili Bazelu?",
        a: "Generalni konzulat u Cirihu pokriva kantone Cirih, Lucern, Uri, Švic, Obvalden, Nidvalden, Glarus, Cug, Šafhauzen, oba Apencela, Sankt Galen, Graubinden, Argau i Turgau, kao i Lihtenštajn. Za Bern, Bazel, Ženevu, Vo i ostale kantone nadležno je konzularno odeljenje Ambasade u Bernu. Merodavno je poslednje prebivalište pokojnika, a nadležnost proveravamo mi.",
      },
      {
        q: "Kakve carinske formalnosti postoje pri izlasku iz Švajcarske?",
        a: "Pošto Švajcarska nije u EU, prevoz posmrtnih ostataka se pri izlasku prijavljuje carini i pokazuju se prateća dokumenta — Leichenpass, izvod o smrti i dozvola zemlje odredišta. Ovaj korak obavljamo mi, sa unapred pripremljenim papirima, pa porodica ne mora da bude prisutna na granici. Na granici Hrvatske sa Srbijom, odnosno sa BiH, dokumenta se pokazuju još jednom.",
      },
      {
        q: "Da li je iz Ciriha bolji prevoz avionom ili vozilom?",
        a: "Za Srbiju i BiH oba rešenja imaju smisla. Avion skraćuje put, ali traži dodatnu pripremu, prevoz do aerodroma Cirih i od aerodroma u Srbiji ili BiH do mesta sahrane. Drumski prevoz ide direktno do groblja ili kuće, bez pretovara. Preporuku dajemo za svaki slučaj posebno, a više o tome pročitajte u tekstu <a href=\"/blog-prevoz-pokojnika-avionom-vs-kombijem\" class=\"text-primary\">avion ili kombi</a>.",
      },
      {
        q: "Kako se postupa kada smrt nastupi u stanu u Cirihu, a ne u bolnici?",
        a: "Pozovite lekara ili hitnu pomoć (144) da utvrdi smrt i izda potvrdu. Ako lekar ne može da potvrdi prirodnu smrt, obaveštava policiju, pa se slučaj vodi kao vanredan, uz pregled sudske medicine. U oba slučaja javite nam se odmah — preuzimamo kontakt sa službama i dogovaramo dalje korake.",
      },
      {
        q: "Može li se iz Ciriha prevesti urna umesto sanduka?",
        a: "Može. Kremacija je u Švajcarskoj česta, a urnu posle kremacije prevozimo u Srbiju, BiH, Crnu Goru ili Severnu Makedoniju. Za urnu se takođe traži sprovodnica, uz potvrdu o kremaciji. Prevoz urne je jednostavniji jer nije potreban hermetički zatvoren sanduk, pa otpada i deo troškova.",
      },
    ],
    relatedBlog: [
      { href: "/blog-prevoz-pokojnika-iz-svajcarske-vodic", title: "Prevoz pokojnika iz Švajcarske — sve što treba znati" },
      { href: "/svajcarska", title: "Prevoz pokojnika iz Švajcarske — sve informacije" },
    ],
  },
  {
    slug: "zeneva",
    country: "svajcarska",
    consulate: "berne",
    name: "Genève",
    nameNom: "Ženeva",
    nameGen: "Ženeve",
    nameLoc: "Ženevi",
    description:
      "Prevoz pokojnika iz Ženeve i kantona Vo u Srbiju i BiH. Acte de décès, laissez-passer mortuaire i sprovodnicu iz Berna završavamo mi. Pozovite 24/7.",
    lead:
      "Organizujemo prevoz pokojnika iz Ženeve, Lozane i cele francuske Švajcarske u Srbiju, Bosnu i Hercegovinu, Crnu Goru i Severnu Makedoniju. Francuske formulare i lokalne propise preuzimamo mi, a vama sve objašnjavamo na srpskom.",
    intro: [
      "Ženeva je poznata kao grad međunarodnih organizacija, ali u njoj žive i rade i mnoge porodice iz Srbije i regiona — u samom gradu, u opštinama kao što su Vernier, Lancy i Meyrin, i duž Ženevskog jezera prema Lozani. Kada neko od njih premine, porodica se suočava sa postupkom na francuskom jeziku i sa institucijama čija imena ne poznaje. Tada preuzimamo organizaciju i prevoz pokojnika iz Ženeve do mesta sahrane.",
      "Postupak u Ženevi ima svoju terminologiju. Lekar izdaje certificat médical de décès, matična služba (état civil) upisuje smrt i izdaje acte de décès, a za prelazak granice potreban je laissez-passer mortuaire — francuski naziv za dokument koji se u nemačkom delu Švajcarske zove Leichenpass. Uz to dolaze i carinske formalnosti, jer Švajcarska nije u EU, a francuska granica je svega nekoliko kilometara od centra grada.",
      "Najkraći drumski put do Beograda (oko 1.330 km, oko 14 sati vožnje bez pauza) ne vodi kroz ostatak Švajcarske, već kroz Francusku i tunel Mont Blan u Italiju, pa autoputem kroz dolinu Poa ka Trstu, Sloveniji i Hrvatskoj. Kada je tunel zatvoren zbog radova, biramo drugi prelaz preko Alpa. Sa aerodroma Ženeva (GVA) moguć je i avionski prevoz do Beograda, direktnim letom ili sa presedanjem, zavisno od reda letenja.",
    ],
    process: [
      "Smrt u kantonu Ženeva prijavljuje se u roku od dva dana matičnoj službi (office de l'état civil) okruga u kome je nastupila; za sam grad to je gradska služba état civil. Ako je osoba preminula u Univerzitetskim bolnicama Ženeve (Hôpitaux universitaires de Genève), potvrdu izdaje bolnički lekar, a kod smrti u stanu lekar mora odmah da dođe i utvrdi smrt. Njegova potvrda je osnov i za prijavu smrti i za dozvolu za prevoz, pa bez nje nijedan sledeći korak nije moguć.",
      "Za kantone Ženeva i Vo sprovodnicu ne izdaje Generalni konzulat u Cirihu, već konzularno odeljenje Ambasade Republike Srbije u Bernu. Zahtev pripremamo čim dobijemo acte de décès i laissez-passer mortuaire, a kada je sahrana u Bosni i Hercegovini, Crnoj Gori ili Severnoj Makedoniji, istovremeno se obraćamo predstavništvu te zemlje. Kod iznenadne ili nasilne smrti pokojnika pregleda sudska medicina (Centre universitaire romand de médecine légale), a prevoz može da krene tek kada pravosudni organi daju saglasnost.",
    ],
    nearby: ["Carouge", "Vernier", "Lancy", "Meyrin", "Onex", "Nyon", "Morges", "Lozana (Lausanne)", "Montreux"],
    regionLoc: "kantonu Ženeva i Vou",
    faqs: [
      {
        q: "Zašto se sprovodnica za Ženevu traži u Bernu, a ne u Cirihu?",
        a: "Konzularna nadležnost Srbije u Švajcarskoj podeljena je po kantonima. Generalni konzulat u Cirihu pokriva istočnu i centralnu Švajcarsku, dok su Ženeva, Vo, Nešatel, Fribur, Vale i ostali zapadni kantoni u nadležnosti Ambasade u Bernu. Odlučuje poslednje prebivalište pokojnika, a zahtev u Bernu predajemo mi, u ime porodice.",
      },
      {
        q: "Šta su acte de décès i laissez-passer mortuaire?",
        a: "Acte de décès je izvod iz registra umrlih koji izdaje matična služba (état civil), a laissez-passer mortuaire je propusnica za prevoz posmrtnih ostataka preko granice, koju izdaje nadležni kantonalni organ. Oba dokumenta pribavljamo mi. Izvod tražimo u višejezičnom obliku, jer je on najpraktičniji za srpske organe.",
      },
      {
        q: "Koliko traje prevoz pokojnika iz Ženeve u Srbiju?",
        a: "Vožnja do Beograda je oko 1.330 km, odnosno oko 14 sati bez pauza; sa propisanim odmorima vozača i graničnim kontrolama putovanje traje duže. Kada se uračunaju ženevska dokumenta i sprovodnica iz Berna, od smrti do predaje porodici najčešće prođe 2–4 dana.",
      },
      {
        q: "Da li prevozite pokojnike iz Ženeve u Bosnu i Hercegovinu, Crnu Goru i Severnu Makedoniju?",
        a: "Da. Do Banje Luke je oko 1.120 km, do Sarajeva oko 1.340 km, do Podgorice oko 1.500 km, a do Skoplja oko 1.760 km. Ulaznu dozvolu izdaje predstavništvo zemlje u kojoj je sahrana, a pribavljamo je paralelno sa švajcarskim postupkom. Za najudaljenija mesta sa porodicom razmatramo i avionski prevoz.",
      },
      {
        q: "Može li prevoz iz Ženeve da se obavi avionom?",
        a: "Može. Sa aerodroma Ženeva pokojnik putuje kao avionski teret, direktnim letom ili preko nekog evropskog čvorišta, a na odredištu ga preuzimamo i vozimo do mesta sahrane. Avion skraćuje vreme na putu, ali traži usklađivanje sa avio-prevoznikom i dodatne korake na oba aerodroma. Koje je rešenje bolje u vašem slučaju, reći ćemo vam otvoreno.",
      },
      {
        q: "Pokojnik je radio u Ženevi, a živeo u susednoj Francuskoj — šta tada?",
        a: "Ako je smrt nastupila u Ženevi, dokumenta o smrti izdaju švajcarski organi, ali je za sprovodnicu merodavno poslednje prebivalište. Kada je pokojnik živeo u Francuskoj, zahtev se podnosi srpskom predstavništvu u Francuskoj koje je nadležno za to područje. Nadležnost utvrđujemo mi i zahtev podnosimo na pravo mesto; više o tome na stranici <a href=\"/francuska\" class=\"text-primary\">prevoz pokojnika iz Francuske</a>.",
      },
    ],
    relatedBlog: [
      { href: "/svajcarska", title: "Prevoz pokojnika iz Švajcarske — sve informacije" },
      { href: "/blog-prevoz-pokojnika-iz-svajcarske-vodic", title: "Prevoz pokojnika iz Švajcarske — sve što treba znati" },
    ],
  },
  {
    slug: "rim",
    country: "italija",
    consulate: "roma",
    name: "Roma",
    nameNom: "Rim",
    nameGen: "Rima",
    nameLoc: "Rimu",
    description:
      "Prevoz pokojnika iz Rima i centralne Italije u Srbiju i BiH. Atto di morte, passaporto mortuario i sprovodnicu ambasade u Rimu završavamo mi. Zovite 24/7.",
    lead:
      "Prevozimo pokojnike iz Rima, Lacija i ostatka centralne i južne Italije do mesta sahrane u Srbiji, Bosni i Hercegovini, Crnoj Gori i Severnoj Makedoniji — sa italijanskim dokumentima, sprovodnicom i prevozom do samog mesta sahrane.",
    intro: [
      "U Rim ljudi iz Srbije i regiona dolaze iz različitih razloga: neki tu godinama žive i rade, drugi su na lečenju, hodočašću ili turističkom putovanju. Kada smrt nastupi daleko od kuće, porodica se suočava sa italijanskom administracijom, nepoznatim jezikom i velikom udaljenošću. Prevoz pokojnika iz Rima organizujemo kompletno — od preuzimanja u bolnici do sahrane u Srbiji, BiH, Crnoj Gori ili Severnoj Makedoniji.",
      "Od Rima do Beograda ima oko 1.280 km, što je oko 13 sati čiste vožnje. Drumski put vodi autoputem A1 na sever pored Firence i Bolonje, zatim preko Padove i Venecije do Trsta, a odatle kroz Sloveniju i Hrvatsku do prelaza Bajakovo–Batrovci. Sve tri zemlje kroz koje vozilo prolazi pripadaju Šengenu, tako da se jedina spoljna šengenska granica na ovoj trasi prelazi tek između Hrvatske i Srbije.",
      "Iz Rima je avionski prevoz češće razumna opcija nego iz Austrije: sa rimskog aerodroma Fjumičino (FCO) pokojnik može da putuje kao avionski teret ka Beogradu, direktnom linijom ili uz presedanje, zavisno od trenutnog reda letenja. Za Crnu Goru je drumski put posebno dug — do Podgorice oko 1.450 km, jer vodi oko Jadranskog mora — pa tu ozbiljno razmatramo i avion. Obe varijante vam objašnjavamo bez ulepšavanja, sa jasnim razlikama u trajanju i troškovima.",
    ],
    process: [
      "U Italiji je ključna institucija opština (Comune). U Rimu smrt upisuje matična služba grada (Stato Civile di Roma Capitale), koja izdaje izvod — estratto dell'atto di morte — i dozvolu za prevoz posmrtnih ostataka. Pre toga lekar mrtvozornik (medico necroscopo) potvrđuje smrt, a sanduk se po italijanskim propisima ne zatvara pre isteka perioda posmatranja od 24 sata. Kada smrt nastupi u nekoj od velikih rimskih bolnica — Policlinico Umberto I, Policlinico Gemelli ili San Camillo-Forlanini — bolnica šalje prijavu smrti matičnoj službi, a mi preuzimamo sve ostalo.",
      "Za prelazak granice potreban je passaporto mortuario, međunarodna propusnica za posmrtne ostatke predviđena Berlinskim sporazumom iz 1937. godine. Sanduk za prevoz u inostranstvo je u Italiji dvostruk — drveni, sa unutrašnjim cinkanim ulogom koji se hermetički zatvara. Sprovodnicu za pokojnike iz Lacija i ostatka centralne i južne Italije izdaje konzularno odeljenje Ambasade Republike Srbije u Rimu, dok su za sever zemlje nadležni generalni konzulati u Milanu i Trstu.",
    ],
    nearby: ["Fiumicino", "Ostia", "Tivoli", "Guidonia Montecelio", "Pomezia", "Frascati", "Civitavecchia", "Latina", "Viterbo"],
    regionLoc: "Laciju",
    faqs: [
      {
        q: "Koje predstavništvo je nadležno ako je pokojnik živeo u severnoj Italiji?",
        a: "Ambasada u Rimu izdaje sprovodnice za centralnu i južnu Italiju. Ako je poslednje prebivalište bilo u Lombardiji, Pijemontu, Emiliji-Romanji, Liguriji ili Valle d'Aosta, nadležan je Generalni konzulat u Milanu, a za Veneto, Furlaniju-Julijsku krajinu i Trentino-Alto Adiđe — Generalni konzulat u Trstu. Dešava se da osoba premine u Rimu, a živela je u Milanu ili Veroni; tada zahtev ide konzulatu po prebivalištu, o čemu brinemo mi.",
      },
      {
        q: "Zašto se u Italiji čeka 24 sata pre zatvaranja sanduka?",
        a: "Italijanski propisi o mrtvozorstvu predviđaju period posmatranja: sanduk se po pravilu ne zatvara pre isteka 24 sata od smrti, a kod iznenadne smrti taj period može da traje i do 48 sati. Lekar ga može skratiti samo u slučajevima koje propis navodi. Zato prevoz iz Rima retko kreće istog dana, ali to vreme koristimo za pribavljanje dokumenata.",
      },
      {
        q: "Da li prevozite pokojnike iz Rima u Bosnu i Hercegovinu?",
        a: "Da. Do Banje Luke je oko 1.070 km (oko 11 sati vožnje), a do Sarajeva oko 1.290 km (oko 14 sati). Dozvolu za sahranu u BiH izdaje predstavništvo Bosne i Hercegovine u Italiji, a mi je pribavljamo paralelno sa italijanskim dokumentima, pa od smrti do sahrane u BiH najčešće prođu 2–4 dana.",
      },
      {
        q: "Šta je bolje iz Rima — avion ili drumski prevoz?",
        a: "Zavisi od mesta sahrane i od toga koliko je porodici važno vreme. Drumski prevoz ide bez pretovara, direktno do mesta sahrane, ali sa obaveznim pauzama putovanje traje znatno duže od same vožnje. Avion skraćuje put, ali zahteva prevoz do Fjumičina, rezervaciju tereta i preuzimanje na aerodromu odredišta. Za Crnu Goru i Severnu Makedoniju (do Skoplja oko 1.710 km drumom) avion je često praktičniji.",
      },
      {
        q: "Osoba je preminula na putovanju po Italiji — pokriva li putno osiguranje prevoz?",
        a: "Mnoge polise putnog osiguranja pokrivaju troškove repatrijacije, ali se uslovi razlikuju od polise do polise. Javite se osiguravaču što pre, jer neki žele da unapred odobre prevoznika i troškove. Mi osiguravaču dostavljamo ponudu i potrebna dokumenta, a organizaciju prevoza preuzimamo kao i inače.",
      },
      {
        q: "Koliko košta prevoz pokojnika iz Rima?",
        a: "Na cenu najviše utiču udaljenost, izbor između drumskog i avionskog prevoza, italijanske takse i propisani dvostruki sanduk sa cinkanim ulogom. Zato iznos ne navodimo napamet, već ga računamo za vaš slučaj i saopštavamo u prvom razgovoru. Šta sve ulazi u cenu, pročitajte u našem <a href=\"/cenovnik\" class=\"text-primary\">cenovniku</a>.",
      },
    ],
    relatedBlog: [
      { href: "/blog-prevoz-pokojnika-iz-italije-vodic", title: "Prevoz pokojnika iz Italije — vodič" },
      { href: "/italija", title: "Prevoz pokojnika iz Italije — sve informacije" },
    ],
  },
  {
    slug: "madrid",
    country: "spanija",
    consulate: "madrid",
    name: "Madrid",
    nameNom: "Madrid",
    nameGen: "Madrida",
    nameLoc: "Madridu",
    title: "Prevoz pokojnika iz Madrida i Španije u Srbiju | 24/7",
    description:
      "Prevoz pokojnika iz Madrida i Španije u Srbiju i BiH, avionom ili drumom. Registro Civil, Sanidad Exterior i sprovodnicu završavamo mi. Zovite 24/7.",
    lead:
      "Organizujemo prevoz pokojnika iz Madrida i cele Španije u Srbiju, Bosnu i Hercegovinu, Crnu Goru i Severnu Makedoniju. Zbog velike udaljenosti sa porodicom biramo između avionskog i drumskog prevoza, a razlike objašnjavamo pre nego što donesete odluku.",
    intro: [
      "Madrid je jedno od najudaljenijih mesta iz kojih organizujemo prevoz pokojnika. U Španiji žive i rade ljudi iz Srbije i regiona, a mnogi u Madrid dolaze i poslovno ili kao turisti. Kada neko premine ovde, porodica pored tuge mora da se snađe sa španskom administracijom i da odluči kako će pokojnik stići kući. Prevoz pokojnika iz Španije u Srbiju organizujemo kompletno, sa svim dokumentima i jednom kontakt osobom za porodicu.",
      "Drumski put od Madrida do Beograda dug je oko 2.570 km, odnosno oko 27 sati čiste vožnje. Trasa vodi kroz Kataloniju, južnu Francusku i Azurnu obalu, severnu Italiju, Sloveniju i Hrvatsku — kroz šest država i preko pet državnih granica. Uz obavezne odmore vozača putovanje traje znatno duže od jednog dana, pa je za ovu relaciju avionski prevoz često razumnija opcija.",
      "Sa madridskog aerodroma Barahas (Adolfo Suárez Madrid-Barajas) postoje letovi za Beograd, direktni ili sa presedanjem. Pokojnik putuje kao avionski teret, a na aerodromu odredišta ga preuzimamo i prevozimo do mesta sahrane. Avion skraćuje vreme puta, ali ne i vreme potrebno za dokumentaciju; drumski prevoz ima prednost kada je mesto sahrane daleko od aerodroma ili kada porodica želi da pokojnik putuje bez pretovara. Šta je bolje u vašem slučaju, savetujemo vas otvoreno.",
    ],
    process: [
      "U Španiji se pokojnik posle smrti po pravilu prenosi u tanatorijum (tanatorio), gde se obavljaju priprema i oproštaj. Lekar izdaje potvrdu o smrti i njenom uzroku (certificado médico de defunción), a smrt se zatim upisuje u matični registar (Registro Civil), koji izdaje izvod o smrti. Za međunarodni prevoz španski propisi traže balsamovanje ili privremenu konzervaciju tela i sanduk prikladan za međunarodni prevoz, o čemu se izdaje posebna potvrda. Ako je smrt nastupila u nekoj od velikih madridskih bolnica — La Paz, Gregorio Marañón, 12 de Octubre ili Clínico San Carlos — lekarsku potvrdu izdaje bolnica.",
      "Izlazak pokojnika iz zemlje odobrava državna služba Sanidad Exterior, i to jedinica za pokrajinu u kojoj je nastupila smrt ili iz koje pokojnik napušta Španiju. Zahtev se podnosi elektronski, preko sistema SISAEX, uz lekarsku potvrdu, potvrdu o balsamovanju, izvod iz Registro Civil i, gde je potrebno, dozvolu zdravstvenih organa Zajednice Madrid. Kod nasilne smrti potrebna je i dozvola suda, što produžava postupak. Sprovodnicu za celu Španiju izdaje Ambasada Republike Srbije u Madridu.",
    ],
    nearby: ["Alcalá de Henares", "Getafe", "Móstoles", "Leganés", "Fuenlabrada", "Alcorcón", "Torrejón de Ardoz", "Alcobendas", "Aranjuez"],
    regionLoc: "Zajednici Madrid",
    faqs: [
      {
        q: "Da li je iz Madrida bolji prevoz avionom ili kombijem?",
        a: "Za većinu porodica avion je praktičniji, jer je drumski put do Beograda dug oko 2.570 km. Drumski prevoz ipak ima smisla kada je mesto sahrane daleko od aerodroma ili kada porodica želi da pokojnik ne menja vozilo do groblja. Obe varijante računamo za vaš slučaj i predlažemo onu koja je za vas razumnija. Opširnije: <a href=\"/blog-prevoz-pokojnika-avionom-vs-kombijem\" class=\"text-primary\">prevoz pokojnika avionom ili kombijem</a>.",
      },
      {
        q: "Koliko traje prevoz pokojnika iz Španije u Srbiju?",
        a: "Ceo postupak najčešće traje 4–6 dana. Najviše vremena odlazi na španska dokumenta: upis u Registro Civil, balsamovanje i odobrenje službe Sanidad Exterior. Sama vožnja do Beograda traje oko 27 sati bez pauza, dok let traje nekoliko sati, uz pripremu tereta na aerodromu.",
      },
      {
        q: "Može li se pokojnik iz Madrida prevesti u Bosnu i Hercegovinu ili Severnu Makedoniju?",
        a: "Može. Drumom je do Banje Luke oko 2.360 km, do Sarajeva oko 2.580 km, a do Skoplja oko 3.000 km, pa za ove relacije prvo razmatramo avion do najbližeg aerodroma, uz naš prevoz do mesta sahrane. Ulaznu dozvolu za BiH ili Severnu Makedoniju izdaje predstavništvo te zemlje, a pribavljamo je mi.",
      },
      {
        q: "Gde se dobija sprovodnica za pokojnika iz Španije?",
        a: "Za celu Španiju — od Madrida i Barselone do Balearskih i Kanarskih ostrva — nadležna je Ambasada Republike Srbije u Madridu. Zahtev se podnosi sa pasošem pokojnika, španskim izvodom o smrti i lekarskim nalazom o uzroku smrti. Kao ovlašćeno pogrebno preduzeće, to radimo mi, pa porodica ne mora da dolazi u ambasadu.",
      },
      {
        q: "Šta ako je smrt u Madridu bila posledica nesreće?",
        a: "Kod nasilne smrti, na primer u saobraćajnoj nesreći ili na radu, slučaj preuzima sud (juzgado), a obdukciju obavlja sudsko-medicinski institut. Pokojnik se izdaje i prevoz odobrava tek uz dozvolu suda, pa postupak traje duže od uobičajenog. Za to vreme pripremamo sve ostale dokumente, kako bi prevoz krenuo odmah po dobijanju dozvole.",
      },
      {
        q: "Od čega zavisi cena prevoza iz Madrida?",
        a: "Najveći uticaj ima izbor prevoza: avionska tarifa za teret uz prevoz do i od aerodroma, ili troškovi drumskog puta dužeg od 2.500 km. Tu su i balsamovanje ili privremena konzervacija, obavezni za međunarodni prevoz iz Španije, zatim sanduk, takse i konzularni troškovi. Tačan iznos dobijate u prvom razgovoru, a opšte informacije su u <a href=\"/cenovnik\" class=\"text-primary\">cenovniku</a>.",
      },
    ],
    relatedBlog: [
      { href: "/blog-prevoz-pokojnika-avionom-vs-kombijem", title: "Prevoz pokojnika avionom ili kombijem — poređenje" },
      { href: "/spanija", title: "Prevoz pokojnika iz Španije — sve informacije" },
    ],
  },
];
