/** Destination pages (prevoz pokojnika u BiH / Crnu Goru / Severnu Makedoniju) — same fields as services.js, rendered by renderServicePage(). */
const a = (href, text) => `<a href="${href}" class="text-primary">${text}</a>`;

module.exports = [
  {
    slug: "prevoz-pokojnika-u-bih",
    title: "Prevoz pokojnika u BiH i Republiku Srpsku",
    description:
      "Prevoz pokojnika u BiH iz Nemačke, Austrije, Švajcarske i cele Evrope: dozvola ambasade BiH, entitetski obrazac i rute do Banje Luke i Sarajeva.",
    h1: "Prevoz pokojnika u Bosnu i Hercegovinu",
    lead: "Pokojnike iz Nemačke, Austrije, Švajcarske i ostalih evropskih zemalja dovozimo do mesta sahrane bilo gde u Bosni i Hercegovini — u Republici Srpskoj, Federaciji BiH i Brčko distriktu. Pribavljamo dozvolu predstavništva BiH, popunjavamo obrazac za entitet u kome je groblje i planiramo put do samog mesta ukopa. Porodica ima jednu kontakt osobu, dostupnu 24/7.",
    sections: [
      {
        h: "Kome je namenjena ova stranica",
        p: [
          "Ljudi iz Bosne i Hercegovine decenijama žive i rade širom Evrope — od radnika koji su u Nemačku i Austriju otišli šezdesetih i sedamdesetih godina, do porodica koje su devedesetih utočište našle u Švajcarskoj, Švedskoj ili Danskoj. Mnogi od njih žele da budu sahranjeni u rodnom selu ili gradu, pored roditelja, pa porodica posle smrti traži nekoga ko će organizovati prevoz umrlih iz inostranstva u BiH od početka do kraja.",
          "U Bosni i Hercegovini se uobičajeno kaže „prijevoz pokojnika“, a u Srbiji „prevoz pokojnika“ — reč je o istoj usluzi. Bez obzira na to kako je tražite, postupak je isti: dokumenta zemlje u kojoj je osoba preminula, dozvola Bosne i Hercegovine za unos posmrtnih ostataka i prevoz specijalizovanim pogrebnim vozilom, u hermetički zatvorenom sanduku propisanom za međunarodni prevoz.",
        ],
      },
      {
        h: "Dozvola za unos posmrtnih ostataka u BiH (sprovodnica BiH)",
        p: [
          "Srpska sprovodnica za sahranu u BiH ne važi. Dozvolu za unos — propusnicu (laissez-passer) za prenos posmrtnih ostataka u Bosnu i Hercegovinu — izdaje diplomatsko-konzularno predstavništvo BiH u zemlji u kojoj je nastupila smrt. U Nemačkoj su to Ambasada BiH u Berlinu (za Berlin, Brandenburg, Hamburg, Meklenburg-Prednju Pomeraniju, Saksoniju-Anhalt i Šlezvig-Holštajn) i generalni konzulati u Frankfurtu (Hesen, Bremen, Donja Saksonija i Severna Rajna-Vestfalija), Minhenu (Bavarska, Saksonija i Tiringija) i Štutgartu (Baden-Virtemberg, Rajnland-Palatinat i Sarland), prema spisku nemačkog Ministarstva spoljnih poslova.",
          "Jedinstven javno objavljen spisak priloga za sva predstavništva ne postoji, a praksa se razlikuje od misije do misije. Kao primer može da posluži uputstvo Generalnog konzulata BiH u Čikagu, koje među ostalim traži:",
        ],
        list: [
          "zahtev pogrebnog preduzeća koje obavlja prevoz i zahtev najbližeg srodnika;",
          "popunjen obrazac zdravstvenog organa — jedan od tri, prema mestu sahrane;",
          "izvod iz matične knjige umrlih i potvrdu da pokojnik nije bolovao od zarazne bolesti;",
          "potvrdu o pripremi pokojnika, odnosno potvrdu o kremaciji kada se prenosi urna;",
          "potvrdu pogrebne službe u BiH da prihvata pokojnika;",
          "pasoš pokojnika, a ako ga nema, izvod iz matične knjige rođenih i dokaz o državljanstvu;",
          "potvrdu da je sanduk ili urna pripremljen po međunarodnim pravilima i da sadrži samo posmrtne ostatke pokojnika.",
        ],
      },
      {
        h: "Obrazac za Federaciju BiH, Republiku Srpsku ili Brčko distrikt",
        p: [
          "Ono što prevoz u BiH razlikuje od prevoza u Srbiju jeste entitetski obrazac. Zahtev za prenos posmrtnih ostataka iz inostranstva upućuje se zdravstvenim organima entiteta u kome je groblje: za Federaciju BiH Ministarstvu zdravstva i Ministarstvu unutrašnjih poslova Federacije u Sarajevu, za Republiku Srpsku Ministarstvu zdravlja i socijalne zaštite u Banjoj Luci, a za Brčko distrikt Odeljenju za zdravstvo i ostale usluge Vlade Brčko distrikta. Obrasci se predaju preko predstavništva BiH, zajedno sa ostalim prilozima.",
          "Merodavno je mesto groblja, a ne mesto rođenja ili prebivališta pokojnika. To je važno tamo gde se entiteti dodiruju: groblje u Istočnom Sarajevu pripada Republici Srpskoj, a groblje u gradu Sarajevu Federaciji BiH. Zato pre podnošenja zahteva sa porodicom tačno utvrđujemo naziv groblja i opštinu.",
          "U obrazac se upisuju podaci o pokojniku, prevozno sredstvo, pratnja, granični prelaz na kome vozilo ulazi u BiH i groblje na kome će biti ukop, a obrasci za Federaciju i Brčko distrikt traže i registarsku oznaku vozila i ime vozača. Prilaže se nalaz lekara o uzroku smrti sa overenim prevodom ako nije ispisan na latinskom ili engleskom jeziku (obrazac Federacije prihvata i nemački), izvod iz matične knjige umrlih i, u Federaciji i Brčko distriktu, dokaz o rezervaciji grobnog mesta. Ruta i vozilo moraju, dakle, biti poznati pre nego što se zahtev preda.",
        ],
      },
      {
        h: "Prevoz pokojnika u Republiku Srpsku",
        p: [
          "Veliki deo porodica sa kojima radimo sahranjuje svoje najbliže u Republici Srpskoj — u Banjoj Luci, Prijedoru, Doboju, Bijeljini, Trebinju ili u nekom od sela oko tih gradova. Za sahranu u Republici Srpskoj uz zahtev ide obrazac upućen Ministarstvu zdravlja i socijalne zaštite u Banjoj Luci, dok je dozvola za unos ista kao za ostatak BiH i izdaje je predstavništvo Bosne i Hercegovine.",
          "Iz Nemačke, Austrije i Švajcarske put do Banje Luke i Prijedora najčešće vodi kroz Sloveniju i Hrvatsku, autoputem do Okučana i dalje ka Gradiški. Stari most na Savi kod Gradiške delimično se srušio u maju 2026, a novi prelaz radi privremeno, pa uslove prelaska proveravamo pred svaki polazak i po potrebi biramo drugi prelaz. Za Semberiju i Bijeljinu, kao i za Doboj i Zvornik, ponekad je kraći put preko Srbije, a za Trebinje i istočnu Hercegovinu dolazi u obzir i ruta duž hrvatske obale.",
        ],
      },
      {
        h: "Rute i udaljenosti do Banje Luke i Sarajeva",
        p: [
          "Udaljenosti su izračunate drumom, bez pauza. Stvarno putovanje traje duže, jer su odmori vozača propisani i obavezni. Najčešće relacije izgledaju ovako:",
        ],
        list: [
          `${a("/munchen", "Minhen")}: do Banje Luke oko 730 km, do Sarajeva oko 950 km`,
          `${a("/stuttgart", "Štutgart")}: do Banje Luke oko 970 km, do Sarajeva oko 1.180 km`,
          `${a("/frankfurt", "Frankfurt")}: do Banje Luke oko 1.080 km, do Sarajeva oko 1.300 km`,
          `${a("/berlin", "Berlin")}: do Banje Luke oko 1.170 km, do Sarajeva oko 1.370 km`,
          `${a("/bec", "Beč")}: do Banje Luke oko 550 km, do Sarajeva oko 740 km`,
          `${a("/graz", "Grac")}: do Banje Luke oko 370 km, do Sarajeva oko 590 km`,
          `${a("/cirih", "Cirih")}: do Banje Luke oko 1.040 km, do Sarajeva oko 1.260 km`,
          `${a("/zagreb", "Zagreb")}: do Banje Luke oko 180 km, do Sarajeva oko 400 km`,
        ],
      },
      {
        h: "Granica, tranzit i carina na putu u BiH",
        p: [
          "Bosna i Hercegovina nije članica EU, pa se na ulasku obavljaju pasoška i carinska kontrola, a službenicima se pokazuju dozvola predstavništva BiH i dokumenta zemlje smrti. Kada put vodi kroz Hrvatsku, posebna hrvatska dozvola za tranzit nije potrebna — prema uputstvu hrvatskog Ministarstva spoljnih poslova dovoljna je dozvola zemlje odredišta. Za Mostar, Ljubuški i zapadnu Hercegovinu put često ide autoputem kroz Dalmaciju, ka prelazu Bijača.",
          "Drugačije je kada pokojnik do BiH putuje preko Srbije, na primer do Bijeljine preko prelaza Sremska Rača ili do Zvornika preko Malog Zvornika. Tada je, prema pravilima Ministarstva spoljnih poslova Srbije, potrebna i srpska tranzitna sprovodnica, koja se izdaje na osnovu svih dokumenata i dozvole zemlje sahrane. Zbog toga rutu biramo pre podnošenja zahteva: utiče i na obrazac za BiH, u kome se navodi granični prelaz, i na to da li je potrebna tranzitna dozvola Srbije.",
        ],
      },
      {
        h: "Sarajevo, Tuzla, Zenica, Mostar i ostala mesta u Federaciji BiH",
        p: [
          "Za sahranu u Federaciji BiH obrazac se upućuje federalnim ministarstvima u Sarajevu, a ukop se dogovara sa grobljem ili verskom zajednicom u mestu sahrane. Kod muslimanskih porodica obredno kupanje i umotavanje pokojnika najčešće se obavljaju još u zemlji smrti, pre zatvaranja sanduka, a dženaza se zakazuje kada je poznato kada vozilo stiže. Katoličke porodice iz Hercegovine i Posavine misu i sahranu dogovaraju sa svojom župom.",
          "Sarajevo i Zenica su sa severa najdostupniji preko Doboja, Mostar i Hercegovina preko dalmatinske obale, a Tuzla i Brčko preko Posavine. Pokojnika dovozimo i u manja mesta i sela, sve do kuće ili mrtvačnice na groblju, kako porodica želi.",
        ],
      },
      {
        h: "Dokumenta iz zemlje smrti, prevodi i CIEC",
        p: [
          `Prva grupa papira uvek nastaje u zemlji u kojoj je osoba preminula: lekarska potvrda o smrti, izvod iz matične knjige umrlih i dozvola za prevoz u inostranstvo — u Nemačkoj i Austriji Leichenpass, u Italiji passaporto mortuario. Bosna i Hercegovina je, kao i Nemačka, Austrija, Švajcarska, Italija, Španija, Francuska i Hrvatska, potpisnica konvencije CIEC br. 16, pa se višejezični izvod o smrti iz tih zemalja po pravilu prihvata bez legalizacije.`,
          `Dokumenta iz Švedske, Danske i Norveške overavaju se apostilom i prevode. Postupak u pojedinim zemljama opisan je na stranicama ${a("/nemacka", "prevoz pokojnika iz Nemačke")}, ${a("/austrija", "iz Austrije")}, ${a("/svajcarska", "iz Švajcarske")} i ${a("/svedska", "iz Švedske")}, a opšti pregled papira na stranici ${a("/dokumentacija-za-prevoz-pokojnika", "dokumentacija za prevoz pokojnika")}. Dozvolu BiH tražimo paralelno sa dokumentima zemlje smrti, da ne bi produžila postupak.`,
        ],
      },
    ],
    faqs: [
      {
        q: "Ko izdaje dozvolu za prevoz pokojnika u BiH?",
        a: "Ambasada ili generalni konzulat Bosne i Hercegovine u zemlji u kojoj je nastupila smrt. Srpsko predstavništvo tu dozvolu ne izdaje. Uz zahtev se prilaže obrazac za Federaciju BiH, Republiku Srpsku ili Brčko distrikt, zavisno od toga gde je groblje.",
      },
      {
        q: "Prevoz pokojnika iz Nemačke u Bosnu — koliko je to kilometara?",
        a: "Zavisi od grada. Iz Minhena do Banje Luke ima oko 730 km, iz Frankfurta oko 1.080 km, a iz Berlina oko 1.170 km, dok je do Sarajeva iz istih gradova oko 950, 1.300 i 1.370 km. U Nemačkoj su za dozvolu BiH nadležni ambasada u Berlinu i konzulati u Frankfurtu, Minhenu i Štutgartu, prema pokrajini.",
      },
      {
        q: "Organizujete li prevoz pokojnika iz Austrije u BiH?",
        a: "Da, to je jedna od najkraćih relacija: iz Graca do Banje Luke ima oko 370 km, iz Beča oko 550 km, a iz Beča do Sarajeva oko 740 km. Austrijski Leichenpass, dozvolu BiH i entitetski obrazac pribavljamo mi.",
      },
      {
        q: "Šta je posebno kod prevoza pokojnika iz Švajcarske u Bosnu?",
        a: "Švajcarska nije u EU, pa se na izlasku obavljaju i carinske formalnosti, a Leichenpass izdaje kantonalni organ. Iz Ciriha do Banje Luke ima oko 1.040 km, a do Sarajeva oko 1.260 km. Ostatak postupka isti je kao iz Nemačke ili Austrije.",
      },
      {
        q: "Da li je za sahranu u BiH potrebna i srpska sprovodnica?",
        a: "Samo ako put vodi preko Srbije — tada se traži srpska tranzitna sprovodnica. Kada vozilo ulazi u BiH direktno iz Hrvatske, dovoljna je dozvola predstavništva BiH sa dokumentima zemlje smrti.",
      },
      {
        q: "Groblje je u Istočnom Sarajevu — koji se obrazac popunjava?",
        a: "Obrazac za Republiku Srpsku, jer Istočno Sarajevo pripada tom entitetu. Za groblja u gradu Sarajevu popunjava se obrazac za Federaciju BiH. Ako niste sigurni, pošaljite nam naziv groblja i proverićemo.",
      },
      {
        q: "Može li pokojnik u BiH da se preveze avionom?",
        a: "Može, kada je relacija vrlo duga, na primer iz Skandinavije ili Španije. U obzir dolaze aerodromi u Sarajevu, Banjoj Luci, Tuzli i Mostaru, zavisno od letova i mesta sahrane, a od aerodroma do groblja pokojnika vozimo mi.",
      },
    ],
    relatedLinks: [
      { href: "/nemacka", title: "Prevoz pokojnika iz Nemačke" },
      { href: "/austrija", title: "Prevoz pokojnika iz Austrije" },
      { href: "/svajcarska", title: "Prevoz pokojnika iz Švajcarske" },
      { href: "/blog-sprovodnica-za-prenos-posmrtnih-ostataka", title: "Sprovodnica za prenos posmrtnih ostataka" },
      { href: "/dokumentacija-za-prevoz-pokojnika", title: "Dokumentacija za prevoz pokojnika" },
      { href: "/prevoz-pokojnika-u-crnu-goru", title: "Prevoz pokojnika u Crnu Goru" },
    ],
    areaServed: "Bosnia and Herzegovina",
  },

  {
    slug: "prevoz-pokojnika-u-crnu-goru",
    title: "Prevoz pokojnika u Crnu Goru iz inostranstva",
    description:
      "Prevoz pokojnika u Crnu Goru iz Nemačke, Austrije i Švajcarske: dozvola predstavništva Crne Gore, rute preko Srbije ili Hrvatske i BiH do Podgorice.",
    h1: "Prevoz pokojnika u Crnu Goru",
    lead: "Kada neko iz Crne Gore premine u Nemačkoj, Austriji, Švajcarskoj ili drugoj evropskoj zemlji, dovozimo ga do mesta sahrane — u Podgoricu, Nikšić, na primorje ili na sever zemlje. Pribavljamo dokumenta zemlje smrti i dozvolu predstavništva Crne Gore, biramo rutu i obavljamo granične formalnosti. Porodica sve dogovara sa jednom osobom, u bilo koje doba.",
    sections: [
      {
        h: "Prevoz pokojnika iz inostranstva u Crnu Goru",
        p: [
          "Mnoge porodice iz Crne Gore imaju članove koji godinama žive u Nemačkoj, Austriji i Švajcarskoj — ljude sa severa, iz Bijelog Polja, Berana, Rožaja i Pljevalja, ali i iz Podgorice, Nikšića i sa primorja. Kada neko od njih premine daleko od kuće, želja porodice gotovo uvek je ista: da bude sahranjen u svom mestu, pored svojih.",
          `Ova stranica govori o prevozu u Crnu Goru, iz zemalja zapadne i severne Evrope. Ako je osoba preminula u Crnoj Gori, a sahrana je u Srbiji, BiH ili Severnoj Makedoniji, postupak je drugačiji i opisan je na stranici ${a("/crna-gora", "prevoz pokojnika iz Crne Gore")}.`,
        ],
      },
      {
        h: "Dozvola predstavništva Crne Gore",
        p: [
          "Za sahranu u Crnoj Gori dozvolu za unos posmrtnih ostataka izdaje ambasada ili konzulat Crne Gore u zemlji u kojoj je nastupila smrt. U Nemačkoj su to Ambasada Crne Gore u Berlinu i Generalni konzulat u Frankfurtu na Majni, čija nadležnost, prema spisku nemačkog Ministarstva spoljnih poslova, obuhvata Bavarsku, Baden-Virtemberg, Bremen, Hamburg, Hesen, Donju Saksoniju, Severnu Rajnu-Vestfaliju, Rajnland-Palatinat, Sarland i Tiringiju.",
          "Crnogorsko Ministarstvo spoljnih poslova nema javno objavljen jedinstven spisak priloga, pa tačne zahteve za svaki slučaj proveravamo sa nadležnim predstavništvom. Osnova je ista kao kod drugih zemalja regiona: pasoš ili lična karta pokojnika, izvod iz matične knjige umrlih, lekarska potvrda o uzroku smrti, dozvola zemlje smrti za prevoz u inostranstvo i podaci o mestu sahrane. Crna Gora je potpisnica konvencije CIEC br. 16, pa se višejezični izvod iz Nemačke, Austrije ili Švajcarske po pravilu prihvata bez legalizacije.",
        ],
      },
      {
        h: "Rute: preko Srbije ili preko Hrvatske i BiH",
        p: [
          "Do Crne Gore iz srednje Evrope vode dva osnovna pravca, a izbor zavisi od polazišta, mesta sahrane i doba godine. Kroz Srbiju se vozi autoputem do Beograda, pa preko Čačka i Zlatibora ka Prijepolju i prelazu Gostun–Dobrakovo, koji radi non-stop i vodi direktno ka Bijelom Polju. Za Rožaje i Berane koristi se i prelaz Špiljani–Dračenovac na putu od Novog Pazara, a za Pljevlja prelaz Jabuka–Ranče.",
          "Drugi pravac vodi kroz Hrvatsku. Za Herceg Novi, Kotor, Tivat i Budvu put se nastavlja duž obale, do prelaza Karasovići–Debeli Brijeg kod Igala. Za Nikšić i unutrašnjost koristi se i ruta kroz Hercegovinu, preko Trebinja i prelaza Klobuk–Ilino Brdo. Zimi, kada su planinski prevoji na severu teško prohodni, ponekad biramo duži, ali sigurniji put.",
          "Udaljenosti do Podgorice (drumom, bez pauza):",
        ],
        list: [
          `${a("/bec", "Beč")} — oko 1.060 km`,
          `${a("/salcburg", "Salcburg")} — oko 1.040 km`,
          `${a("/graz", "Grac")} — oko 880 km`,
          `${a("/munchen", "Minhen")} — oko 1.170 km`,
          `${a("/stuttgart", "Štutgart")} — oko 1.410 km`,
          `${a("/frankfurt", "Frankfurt")} — oko 1.570 km`,
          `${a("/cirih", "Cirih")} — oko 1.480 km`,
          `${a("/zagreb", "Zagreb")} — oko 710 km`,
        ],
      },
      {
        h: "Tranzit kroz Srbiju ili BiH",
        p: [
          "Na putu do Crne Gore pokojnik gotovo uvek prolazi kroz bar jednu zemlju koja nije zemlja smrti ni zemlja sahrane. Kada ruta vodi preko Srbije, Ministarstvo spoljnih poslova Srbije traži tranzitnu sprovodnicu, koja se izdaje tek kada su pribavljena sva dokumenta i dozvola zemlje sahrane — dakle, posle crnogorske dozvole. To je dodatni korak, ali kod pokojnika iz Beča ili Graca ruta preko Srbije često je najpraktičnija.",
          "Ako put vodi kroz Bosnu i Hercegovinu, pravila tranzita proveravamo sa predstavništvom BiH pre polaska. Kroz Hrvatsku posebna tranzitna dozvola nije potrebna, ali je granica Hrvatske sa Crnom Gorom i BiH spoljna granica EU, sa carinskom kontrolom. Srbija, BiH i Crna Gora nisu članice EU, pa se carinske formalnosti obavljaju na svakom prelazu između njih. Sve to vodimo mi, a porodica samo dobija obaveštenje kada je vozilo prešlo granicu.",
        ],
      },
      {
        h: "Mesta sahrane: od Podgorice do Pljevalja",
        p: [
          "Crna Gora je mala, ali raznolika zemlja, pa poslednji deo puta zavisi od toga gde je sahrana:",
        ],
        list: [
          "Podgorica i okolina — glavni grad, do koga se stiže i sa severa i sa juga zemlje;",
          "Nikšić — drugi grad po veličini, blizu granice sa istočnom Hercegovinom;",
          "Bar i Budva — primorje, do koga se iz Podgorice stiže za kratko vreme;",
          "Herceg Novi — prvi grad na ulasku iz Hrvatske, odmah posle prelaza Debeli Brijeg;",
          "Bijelo Polje i Berane — sever, najbliži prelazima prema Srbiji;",
          "Pljevlja — krajnji sever, gde se iz Srbije stiže preko Prijepolja.",
        ],
      },
      {
        h: "Avionom do Podgorice ili Tivta",
        p: [
          "Iz Skandinavije, Španije ili Francuske drumski put do Crne Gore je vrlo dug: od Stokholma do Podgorice ima oko 3.070 km, od Kopenhagena oko 2.420 km, a od Pariza oko 2.020 km. Tada razmatramo avio-prevoz do aerodroma u Podgorici ili Tivtu, uz posebnu ambalažu za sanduk i naš prevoz od aerodroma do mesta sahrane.",
          `Avion nije uvek brži, jer traži rezervaciju teretnog prostora i dodatne aerodromske procedure. Za Nemačku, Austriju i Švajcarsku drumski prevoz je najčešće jednako brz i jednostavniji. Prednosti i mane oba načina opisali smo u tekstu ${a("/blog-prevoz-pokojnika-avionom-vs-kombijem", "prevoz pokojnika avionom ili kombijem")}.`,
        ],
      },
      {
        h: "Šta porodica treba da uradi",
        p: [
          "Od vas nam treba ime pokojnika, mesto smrti, mesto sahrane u Crnoj Gori i kopija pasoša ili lične karte. Sa upravom groblja ili verskom zajednicom dogovorite okvirni termin, a konačan datum potvrdite kada vozilo krene. Ako je potrebno, šaljemo vam ovlašćenje na potpis, kako bismo zahteve mogli da podnosimo umesto porodice.",
          `Sve ostalo preuzimamo mi: razgovor sa bolnicom i lokalnim službama — u Nemačkoj, Austriji i Švajcarskoj na nemačkom — dozvolu za prevoz iz zemlje smrti, crnogorsku dozvolu, eventualnu tranzitnu sprovodnicu i sam prevoz. Tačnu cenu saznajete u prvom razgovoru, a od čega zavisi, objašnjeno je na stranici ${a("/cenovnik", "cenovnik")}.`,
        ],
      },
    ],
    faqs: [
      {
        q: "Ko izdaje dozvolu za prevoz pokojnika u Crnu Goru?",
        a: "Ambasada ili konzulat Crne Gore u zemlji u kojoj je nastupila smrt. U Nemačkoj su to ambasada u Berlinu i Generalni konzulat u Frankfurtu. Zahtev podnosimo mi, zajedno sa dokumentima zemlje smrti.",
      },
      {
        q: "Prevoz pokojnika iz Nemačke u Crnu Goru — koliko je daleko?",
        a: "Iz Minhena do Podgorice ima oko 1.170 km, iz Štutgarta oko 1.410 km, a iz Frankfurta oko 1.570 km drumom. Sa obaveznim odmorima vozača put traje duže od čiste vožnje, a rutu biramo prema mestu sahrane.",
      },
      {
        q: "Organizujete li prevoz pokojnika iz Austrije u Crnu Goru?",
        a: "Da. Iz Graca do Podgorice ima oko 880 km, iz Salcburga oko 1.040 km, a iz Beča oko 1.060 km. Austrijski Leichenpass i crnogorsku dozvolu pribavljamo paralelno, da porodica ne bi gubila vreme.",
      },
      {
        q: "Da li je potrebna srpska sprovodnica ako pokojnik ide u Crnu Goru preko Srbije?",
        a: "Da, za prolazak kroz Srbiju potrebna je tranzitna sprovodnica. Izdaje se na osnovu svih dokumenata i dozvole Crne Gore, pa je pribavljamo poslednju, neposredno pre polaska.",
      },
      {
        q: "Preko kog graničnog prelaza se ulazi u Crnu Goru?",
        a: "Zavisi od rute i mesta sahrane. Iz Srbije se najčešće prelazi kod Gostuna i Dobrakova, ka Bijelom Polju, a sa hrvatske obale kod Debelog Brijega, ka Herceg Novom. Iz Hercegovine se koristi prelaz Klobuk–Ilino Brdo ka Nikšiću.",
      },
      {
        q: "Pokojnik je preminuo u Crnoj Gori — da li i tada pomažete?",
        a: `Da, ali to je obrnut smer i drugačiji postupak, jer se dokumenta pribavljaju u Crnoj Gori. Sve o tome piše na stranici ${a("/crna-gora", "prevoz pokojnika iz Crne Gore")}.`,
      },
    ],
    relatedLinks: [
      { href: "/crna-gora", title: "Prevoz pokojnika iz Crne Gore" },
      { href: "/nemacka", title: "Prevoz pokojnika iz Nemačke" },
      { href: "/austrija", title: "Prevoz pokojnika iz Austrije" },
      { href: "/svajcarska", title: "Prevoz pokojnika iz Švajcarske" },
      { href: "/prevoz-pokojnika-u-bih", title: "Prevoz pokojnika u BiH" },
      { href: "/dokumentacija-za-prevoz-pokojnika", title: "Dokumentacija za prevoz pokojnika" },
    ],
    areaServed: "Montenegro",
  },

  {
    slug: "prevoz-pokojnika-u-severnu-makedoniju",
    title: "Prevoz pokojnika u Severnu Makedoniju",
    description:
      "Prevoz pokojnika u Severnu Makedoniju iz Nemačke, Austrije i Švajcarske: dozvola makedonskog predstavništva, tranzitna sprovodnica za Srbiju, Skoplje.",
    h1: "Prevoz pokojnika u Severnu Makedoniju",
    lead: "Pokojnike iz Nemačke, Austrije, Švajcarske i ostatka Evrope dovozimo do mesta sahrane u Severnoj Makedoniji — u Skoplje, Kumanovo, Tetovo, Bitolj, Ohrid ili bilo koje drugo mesto. Drumski put vodi kroz Srbiju, pa pored dozvole makedonskog predstavništva pribavljamo i srpsku tranzitnu sprovodnicu. Sve to vodimo mi, a porodica ima jednu kontakt osobu.",
    sections: [
      {
        h: "Prevoz pokojnika u Makedoniju iz zapadne Evrope",
        p: [
          "Zajednica ljudi iz Severne Makedonije u Nemačkoj, Švajcarskoj, Austriji i Italiji brojna je i stara — mnogi su otišli kao radnici pre nekoliko decenija, a njihova deca i unuci danas žive tamo. Veze sa zavičajem ipak ostaju jake, pa porodice posle smrti bliske osobe gotovo uvek žele sahranu u rodnom mestu.",
          "Prevoz pokojnika u Makedoniju razlikuje se od prevoza u Srbiju po jednoj važnoj stvari: zemlja sahrane i zemlja kroz koju se prolazi nisu iste. Zato su potrebne dve dozvole — makedonska za unos i srpska za tranzit — a redosled kojim se pribavljaju određuje i kada vozilo može da krene.",
        ],
      },
      {
        h: "Dozvola predstavništva Severne Makedonije",
        p: [
          "Za sahranu u Severnoj Makedoniji dozvolu za unos posmrtnih ostataka izdaje ambasada ili konzulat Severne Makedonije u zemlji u kojoj je nastupila smrt. U Nemačkoj to su, prema spisku nemačkog Ministarstva spoljnih poslova, Ambasada u Berlinu, njena ispostava u Bonu (nadležna za Severnu Rajnu-Vestfaliju, Hesen, Donju Saksoniju, Rajnland-Palatinat i Sarland) i Generalni konzulat u Minhenu (Bavarska i Baden-Virtemberg).",
          "Makedonsko Ministarstvo spoljnih poslova nema javno dostupan jedinstven spisak priloga za ovu dozvolu, pa zahteve za konkretan slučaj proveravamo sa nadležnim predstavništvom. Osnovu čine dokumenta zemlje smrti — lekarska potvrda o smrti, izvod iz matične knjige umrlih i dozvola za prevoz u inostranstvo — uz pasoš pokojnika i podatke o mestu sahrane. Severna Makedonija je potpisnica konvencije CIEC br. 16, pa se višejezični izvod iz Nemačke, Austrije ili Švajcarske po pravilu prihvata bez legalizacije.",
        ],
      },
      {
        h: "Zašto je potrebna srpska tranzitna sprovodnica",
        p: [
          "Kada se sahrana obavlja u trećoj zemlji, a posmrtni ostaci se prevoze preko teritorije Srbije, Ministarstvo spoljnih poslova Srbije traži tranzitnu sprovodnicu. Za nju se prilažu sva dokumenta koja se traže i za običnu sprovodnicu, ali i dozvola države u kojoj će biti sahrana. Zato postupak ide ovim redom:",
        ],
        list: [
          "dokumenta zemlje smrti: potvrda o smrti, izvod iz matične knjige umrlih i dozvola za prevoz (na primer Leichenpass);",
          "dozvola ambasade ili konzulata Severne Makedonije za unos posmrtnih ostataka;",
          "tranzitna sprovodnica nadležnog srpskog predstavništva;",
          "polazak vozila, sa svim originalima u pratnji sanduka.",
        ],
        ordered: true,
      },
      {
        h: "Ruta kroz Srbiju i prelaz Tabanovce–Preševo",
        p: [
          "Iz Nemačke, Austrije i Švajcarske vozilo stiže do Srbije preko Hrvatske ili Mađarske, a zatim autoputem ide kroz celu Srbiju — preko Beograda i Niša do Preševa. Granica sa Severnom Makedonijom prelazi se na prelazu Preševo–Tabanovce, odakle je Kumanovo sasvim blizu, a Skoplje na kratkoj vožnji. Ni Srbija ni Severna Makedonija nisu članice EU, pa se carinske formalnosti obavljaju i pri ulasku u Srbiju i pri prelasku u Makedoniju.",
          "Udaljenosti do Skoplja (drumom, bez pauza):",
        ],
        list: [
          `${a("/bec", "Beč")} — oko 1.050 km`,
          `${a("/graz", "Grac")} — oko 1.010 km`,
          `${a("/munchen", "Minhen")} — oko 1.370 km`,
          `${a("/stuttgart", "Štutgart")} — oko 1.610 km`,
          `${a("/frankfurt", "Frankfurt")} — oko 1.720 km`,
          `${a("/berlin", "Berlin")} — oko 1.670 km`,
          `${a("/cirih", "Cirih")} — oko 1.680 km`,
          `${a("/milano", "Milano")} — oko 1.450 km`,
        ],
      },
      {
        h: "Skoplje, Kumanovo, Tetovo, Bitolj, Ohrid, Prilep i Štip",
        p: [
          "Pokojnika dovozimo do svakog mesta u zemlji, a poslednji deo puta zavisi od toga gde je sahrana. Kumanovo je prvi veći grad posle granice, a Skoplje je čvorište iz koga se nastavlja dalje. Tetovo je zapadno od Skoplja, na putu ka Gostivaru, dok se do Štipa ide na istok. Prilep, Bitolj i Ohrid su na jugu i zapadu zemlje, pa je do njih put od granice najduži.",
          "Kod pravoslavnih porodica opelo se dogovara sa parohijom u mestu sahrane, a kod muslimanskih porodica obredno kupanje i umotavanje pokojnika najčešće se obavljaju u zemlji smrti, pre zatvaranja sanduka. Recite nam unapred šta je za vašu porodicu važno, kako bismo pripremu uskladili sa običajima i sa terminom sahrane.",
        ],
      },
      {
        h: "Avionom do Skoplja",
        p: [
          "Za vrlo duge relacije razmatramo i avio-prevoz do aerodroma u Skoplju ili Ohridu. Od Stokholma do Skoplja ima oko 3.090 km drumom, od Madrida oko 3.000 km, a od Kopenhagena oko 2.440 km — tu avion može da skrati put za više dana. Za sanduk je potrebna posebna ambalaža za avio-teret, a od aerodroma do mesta sahrane pokojnika vozimo mi.",
          "Iz Nemačke, Austrije i Švajcarske drumski prevoz je najčešće razumniji izbor. Let je kratak, ali rezervacija teretnog prostora, aerodromske procedure i prevoz do aerodroma i od njega oduzimaju vreme, a vozilo pokojnika vozi od vrata do vrata, bez pretovara.",
        ],
      },
      {
        h: "Iz Grčke i drugih zemalja regiona",
        p: [
          `Kada je osoba preminula u Grčkoj, put do Severne Makedonije ne vodi kroz Srbiju, pa tranzitna sprovodnica nije potrebna. Iz Soluna do Skoplja ima oko 230 km, a iz Atine oko 690 km, uz prelaz Evzoni–Bogorodica. Grčka nije ratifikovala Bečku konvenciju o višejezičnim izvodima, pa se tamošnja dokumenta overavaju apostilom i prevode. Više o grčkom delu postupka piše na stranici ${a("/grcka", "prevoz pokojnika iz Grčke")}.`,
          `Iz Švedske, Danske i Norveške dokumenta se takođe overavaju apostilom i prevode, što produžava pripremu za nekoliko dana. Opšti spisak papira po zemljama nalazi se na stranici ${a("/dokumentacija-za-prevoz-pokojnika", "dokumentacija za prevoz pokojnika")}, a o tome šta porodica radi u prvim satima u tekstu ${a("/blog-sta-raditi-kada-neko-umre-u-inostranstvu", "šta raditi kada neko umre u inostranstvu")}.`,
        ],
      },
    ],
    faqs: [
      {
        q: "Ko izdaje dozvolu za prevoz pokojnika u Severnu Makedoniju?",
        a: "Ambasada ili konzulat Severne Makedonije u zemlji u kojoj je nastupila smrt. U Nemačkoj su to ambasada u Berlinu, njena ispostava u Bonu i Generalni konzulat u Minhenu, zavisno od pokrajine.",
      },
      {
        q: "Zašto je za Makedoniju potrebna i srpska sprovodnica?",
        a: "Zato što drumski put iz zapadne Evrope vodi kroz Srbiju. Za tranzit kroz Srbiju Ministarstvo spoljnih poslova Srbije traži tranzitnu sprovodnicu, koja se izdaje tek kada je pribavljena dozvola Severne Makedonije.",
      },
      {
        q: "Prevoz pokojnika iz Nemačke u Makedoniju — koliko je kilometara?",
        a: "Iz Minhena do Skoplja ima oko 1.370 km, iz Štutgarta oko 1.610 km, a iz Frankfurta oko 1.720 km. Zbog obaveznih odmora vozača putovanje traje duže od čiste vožnje.",
      },
      {
        q: "Organizujete li prevoz pokojnika iz Austrije u Severnu Makedoniju?",
        a: "Da. Iz Graca do Skoplja ima oko 1.010 km, a iz Beča oko 1.050 km. Austrijski Leichenpass, makedonsku dozvolu i srpsku tranzitnu sprovodnicu pribavljamo mi.",
      },
      {
        q: "Preko kog graničnog prelaza pokojnik ulazi u Severnu Makedoniju?",
        a: "Kada se putuje kroz Srbiju, najčešće preko prelaza Preševo–Tabanovce na autoputu ka Kumanovu i Skoplju. Iz Grčke se ulazi preko prelaza Evzoni–Bogorodica.",
      },
      {
        q: "Da li je avion brži za prevoz pokojnika u Skoplje?",
        a: "Kod velikih udaljenosti, na primer iz Skandinavije ili Španije, često jeste. Iz Nemačke i Austrije kombi obično stiže podjednako brzo, bez pretovara i aerodromskih procedura.",
      },
    ],
    relatedLinks: [
      { href: "/nemacka", title: "Prevoz pokojnika iz Nemačke" },
      { href: "/austrija", title: "Prevoz pokojnika iz Austrije" },
      { href: "/svajcarska", title: "Prevoz pokojnika iz Švajcarske" },
      { href: "/blog-sprovodnica-za-prenos-posmrtnih-ostataka", title: "Sprovodnica i tranzitna sprovodnica" },
      { href: "/blog-prevoz-pokojnika-avionom-vs-kombijem", title: "Prevoz avionom ili kombijem" },
      { href: "/repatrijacija-pokojnika", title: "Repatrijacija pokojnika" },
    ],
    areaServed: "North Macedonia",
  },
];
