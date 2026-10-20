/** Rewrites of the three older hand-written posts — same fields as blog-guides.js, rendered by renderBlogPost(). */

const link = (href, text) => `<a href="${href}" class="text-primary">${text}</a>`;

module.exports = [
  {
    slug: "blog-kako-organizovati-prevoz-pokojnika",
    title: "Kako organizovati prevoz pokojnika iz inostranstva",
    description:
      "Prevoz pokojnika iz inostranstva korak po korak: odluke porodice, prvi razgovor, punomoćje, dokumenta, izbor prevoza i dogovor sa grobljem kod kuće.",
    h1: "Kako organizovati prevoz pokojnika iz inostranstva — korak po korak",
    lead: "Organizacija prevoza pokojnika iz inostranstva deluje kao planina posla: strane ustanove, nepoznat jezik, dozvole dve države i sahrana koju treba pripremiti kod kuće. Kada se posao podeli na korake i kada se zna šta radi porodica, a šta pogrebno preduzeće, sve postaje mnogo preglednije. Ovaj vodič prati redosled kojim se prevoz zaista organizuje, od prvih odluka u porodici do papira koje treba sačuvati posle sahrane.",
    date: "2025-01-15",
    updated: "2026-10-20",
    readTime: "9 min čitanja",
    sections: [
      {
        h: "Pre prvog poziva: tri odluke koje donosi porodica",
        p: [
          "Pogrebno preduzeće može da preuzme gotovo sve, ali neke odluke pripadaju samo porodici. Što su one ranije donete, to se manje vremena gubi kasnije, jer od njih zavise i dokumenta i način prevoza.",
          "Prva odluka je mesto sahrane: grad ili selo, groblje i, ako je moguće, grobno mesto. Za Bosnu i Hercegovinu važno je i da li se mesto nalazi u Republici Srpskoj, Federaciji BiH ili Brčko distriktu, jer od toga zavisi obrazac koji se prilaže uz zahtev za dozvolu.",
          "Druga odluka je da li se pokojnik sahranjuje u sanduku ili se kremira u zemlji smrti, pa se prenosi urna. Treća je praktična: ko u porodici vodi razgovore i potpisuje. To ne mora biti najstariji član porodice, već osoba koja je dostupna na telefonu, snalazi se sa porukama i mejlom i može da donosi odluke bez dugog dogovaranja sa ostalima.",
        ],
      },
      {
        h: "Prvi razgovor: podaci koje treba imati pri ruci",
        p: [
          "U prvom razgovoru ne morate imati nijedan dokument u rukama. Dovoljno je da znate osnovne podatke, a ostalo se dopunjuje usput. Ako nešto od navedenog ne znate, recite to slobodno — i to je informacija koja nam pomaže da procenimo tok postupka.",
        ],
        list: [
          "ime i prezime pokojnika tačno onako kako piše u pasošu, datum rođenja i državljanstvo (i da li je imao dvojno)",
          "gde se pokojnik sada nalazi: bolnica, dom za stare, stan ili institut za sudsku medicinu, sa adresom i nazivom odeljenja",
          "poslednje mesto prebivališta u inostranstvu — po njemu se određuje koje predstavništvo izdaje dozvolu",
          "mesto sahrane i da li je u pitanju sanduk ili urna",
          "da li su uključeni policija ili tužilaštvo, na primer posle nesreće",
          "da li je neko iz porodice već potpisao nalog nekom lokalnom pogrebnom preduzeću",
          "da li postoji putno ili drugo osiguranje koje bi moglo da učestvuje u troškovima",
          "ime i broj telefona osobe koja će biti naša stalna veza sa porodicom",
        ],
      },
      {
        h: "Punomoćje i podela posla između porodice i preduzeća",
        p: [
          "Kada se dogovorite sa preduzećem, porodica obično potpisuje punomoćje. Na osnovu njega preduzeće u ime porodice razgovara sa bolnicom i matičnom službom, podnosi zahteve za dozvole i preuzima dokumenta. Punomoćje najčešće potpisuje bliski srodnik, a skenirana ili fotografisana verzija dovoljna je da se posao odmah pokrene.",
          "Posle toga porodici ostaje mali, ali važan deo posla: da pronađe pasoš i lična dokumenta pokojnika, da potvrdi mesto sahrane i da odgovara na pitanja koja se usput pojave. Sve ostalo — dopisivanje sa ustanovama na stranom jeziku, termini, takse i prevodi — vodi preduzeće. Kod nas porodica ima jednu kontakt osobu od prvog razgovora do sahrane i dobija vest posle svakog završenog koraka.",
        ],
      },
      {
        h: "Dokumenta teku u dva paralelna toka",
        p: [
          "Papiri za međunarodni prevoz dolaze sa dve strane. Država u kojoj je osoba preminula izdaje lekarsku potvrdu o smrti, izvod iz matične knjige umrlih i dozvolu da posmrtni ostaci pređu njenu granicu. Država sahrane izdaje dozvolu za unos — za Srbiju je to sprovodnica, a za ostale zemlje regiona dozvola njihovog predstavništva.",
          "Ova dva toka nisu potpuno nezavisna: zahtev za sprovodnicu predaje se tek kada su strana dokumenta gotova, jer se ona prilažu u originalu. Ipak, zahtev se može sastaviti unapred, groblje se može obavestiti, a sanduk pripremiti dok se čeka matična služba. Upravo na tom istovremenom radu štedi se najviše vremena.",
          `Spisak papira po zemljama nalazi se na stranici ${link("/dokumentacija-za-prevoz-pokojnika", "dokumentacija za prevoz pokojnika")}, a srpska dozvola za unos objašnjena je u vodiču ${link("/blog-sprovodnica-za-prenos-posmrtnih-ostataka", "sprovodnica za prenos posmrtnih ostataka")}. Kada je sahrana u Bosni i Hercegovini, postupak sa predstavništvom BiH opisan je na stranici ${link("/prevoz-pokojnika-u-bih", "prevoz pokojnika u BiH")}.`,
        ],
      },
      {
        h: "Preuzimanje, priprema i sanduk",
        p: [
          "Pokojnika preuzimamo tamo gde se nalazi, čim to ustanova dozvoli. Iz bolnice ili doma za stare preuzimanje je obično moguće odmah posle lekarskog pregleda, a sa instituta za sudsku medicinu tek kada nadležni organi oslobode telo. Do polaska pokojnik se čuva u rashladnim uslovima.",
          "Priprema obuhvata higijensku obradu i oblačenje, a porodica može da pošalje odeću u kojoj želi da pokojnik bude sahranjen. Verske obrede koji se obavljaju pre zatvaranja sanduka, kao što je obredno kupanje kod muslimanskih porodica, dogovaramo sa porodicom i verskom zajednicom u zemlji smrti.",
          `Za prelazak granice pokojnik se polaže u hermetički zatvoren sanduk propisan za međunarodni prevoz, koji se tokom puta ne otvara. Standardni model je deo usluge, a porodica može da izabere i drugi, ako ispunjava uslove za prelazak granice.`,
        ],
      },
      {
        h: "Način i pravac prevoza",
        p: [
          "Iz većine evropskih zemalja pokojnik putuje drumom, pogrebnim vozilom, direktno do mesta sahrane. Na kraćim i srednjim relacijama to je najjednostavnije rešenje: od Beča do Beograda ima oko 620 km, od Graca do Banja Luke oko 370 km, a od Minhena do Sarajeva oko 950 km. Stvarno putovanje traje duže od čiste vožnje, jer vozači moraju da poštuju propisane odmore.",
          "Avion dolazi u obzir kod velikih udaljenosti, na primer iz Španije ili Skandinavije, ali i tada pokojnik do polaznog aerodroma i od odredišnog aerodroma putuje pogrebnim vozilom. Odluku između aviona i vozila treba doneti pre podnošenja zahteva za sprovodnicu, jer se na obrascu upisuju prevozno sredstvo i mesto prelaska granice.",
          `Pravac je važan i zbog dozvola. Kada drumski put do Severne Makedonije vodi preko Srbije, potrebna je tranzitna sprovodnica, a na ulasku u svaku od zemalja regiona obavljaju se granične formalnosti, jer nijedna od njih nije članica EU. Prednosti i mane oba načina uporedili smo u tekstu ${link("/blog-prevoz-pokojnika-avionom-vs-kombijem", "prevoz pokojnika avionom ili kombijem")}.`,
        ],
      },
      {
        h: "Usklađivanje sa sahranom kod kuće",
        p: [
          "Dok se u inostranstvu završavaju papiri, porodica kod kuće priprema ispraćaj. Sa upravom groblja treba dogovoriti grobno mesto, a za pokojnika koji nije bio državljanin Srbije, a sahranjuje se u Srbiji, pribaviti i potvrdu da je grobno mesto obezbeđeno, jer je traži predstavništvo koje izdaje sprovodnicu.",
          "Sa sveštenikom, imamom ili drugim verskim licem dobro je dogovoriti okvirni termin, ali konačan datum sahrane i osmrtnice objavite tek kada znate kada vozilo polazi. Najteže situacije nastaju kada je sahrana zakazana, a matična služba ili tužilaštvo u inostranstvu još nisu završili svoj deo.",
          "Unapred se dogovara i gde se pokojnik predaje: u kapelu na groblju, u kuću porodice ili lokalnoj pogrebnoj službi koja organizuje sam ispraćaj. Javljamo vam okvirno vreme dolaska tokom puta, tako da porodica i pogrebna služba u mestu sahrane mogu da se pripreme.",
        ],
      },
      {
        h: "Posle sahrane: papiri koje treba sačuvati",
        p: [
          "Sa sahranom se administracija ne završava sasvim. Smrt državljanina Srbije koja je nastupila u inostranstvu upisuje se i u matičnu knjigu umrlih koja se vodi u Srbiji — preko diplomatsko-konzularnog predstavništva ili neposredno kod matične službe u Srbiji, na osnovu stranog izvoda. Taj upis je potreban za ostavinski postupak i za mnoge druge poslove koji slede.",
          `Sačuvajte primerke stranog izvoda o smrti, račune i kopije dokumenata o prevozu. Traže ih osiguravači, banke i penzioni fondovi u zemlji u kojoj je pokojnik radio, a lice koje je platilo sahranu korisnika penzije iz Srbije može da proveri pravo na naknadu pogrebnih troškova, o čemu piše tekst ${link("/blog-naknada-pogrebnih-troskova-pio-fond", "naknada pogrebnih troškova kod Fonda PIO")}.`,
        ],
      },
    ],
    faqs: [
      {
        q: "Koliko traje organizacija prevoza pokojnika iz inostranstva?",
        a: "Najviše zavisi od zemlje u kojoj je nastupila smrt. Orijentaciono, iz Austrije ceo postupak najčešće traje jedan do tri dana, iz Nemačke, Švajcarske i Italije dva do četiri, iz Španije četiri do šest, a iz Švedske i Norveške četiri do sedam dana. Obdukcija, vikend ili praznik mogu da produže rok.",
      },
      {
        q: "Može li neko iz porodice da prati pokojnika na putu?",
        a: "Porodica najčešće putuje odvojeno, kolima ili avionom, i dočekuje pokojnika u mestu sahrane. Ako neko želi da prati prevoz, recite nam to na početku, jer se pratnja navodi i u zahtevu za sprovodnicu, pa se ta mogućnost proverava pre podnošenja.",
      },
      {
        q: "Prevoz pokojnika iz inostranstva u Bosnu — šta je drugačije?",
        a: "Dokumenta iz zemlje smrti ista su kao za Srbiju, ali dozvolu za unos izdaje ambasada ili konzulat Bosne i Hercegovine, a ne srpsko predstavništvo. Uz zahtev se prilaže obrazac koji zavisi od toga da li je sahrana u Republici Srpskoj, Federaciji BiH ili Brčko distriktu.",
      },
      {
        q: "Možemo li sami da organizujemo prevoz, bez pogrebnog preduzeća?",
        a: "Deo papira porodica može da pribavi sama, ali posmrtni ostaci se preko granice prevoze pogrebnim vozilom sa posebnom opremom ili kao avio-teret, u sanduku propisanom za međunarodni prevoz. Zato se za sam prevoz uvek angažuje pogrebno preduzeće, a porodica bira da li će mu prepustiti i dokumenta.",
      },
      {
        q: "Šta ako ne znamo gde je pokojnik imao prijavljeno prebivalište?",
        a: "To je čest slučaj kada je osoba živela sama ili se nedavno selila. Podatak se obično može utvrditi iz dokumenata koje izdaje matična služba u inostranstvu ili iz lične karte, a mi ga proveravamo pre nego što se zahtev preda, jer od prebivališta zavisi koje je predstavništvo nadležno.",
      },
      {
        q: "Koliko košta prevoz pokojnika iz inostranstva?",
        a: `Cena zavisi od udaljenosti, zemlje smrti, dokumenata, sanduka i načina prevoza, pa je dajemo za konkretan slučaj, već u prvom razgovoru. Sve činioce smo objasnili u tekstu ${link("/blog-koliko-kosta-prevoz-pokojnika-nemacka", "koliko košta prevoz pokojnika iz Nemačke")}.`,
      },
    ],
    relatedLinks: [
      { href: "/blog-sta-raditi-kada-neko-umre-u-inostranstvu", title: "Šta raditi kada neko umre u inostranstvu" },
      { href: "/blog-dokumentacija-za-prevoz-pokojnika", title: "Dokumentacija za prevoz pokojnika: kompletan spisak" },
      { href: "/blog-koliko-kosta-prevoz-pokojnika-nemacka", title: "Koliko košta prevoz pokojnika iz Nemačke" },
      { href: "/repatrijacija-pokojnika", title: "Repatrijacija pokojnika" },
      { href: "/contact", title: "Kontakt — dostupni 24/7" },
    ],
  },

  {
    slug: "blog-koliko-kosta-prevoz-pokojnika-nemacka",
    title: "Koliko košta prevoz pokojnika iz Nemačke — faktori cene",
    description:
      "Koliko košta prevoz pokojnika iz Nemačke: udaljenost, dokumenta i takse, sanduk, avion ili vozilo, šta je uključeno u cenu i ko može da pokrije troškove.",
    h1: "Koliko košta prevoz pokojnika iz Nemačke i od čega zavisi cena",
    lead: "Pitanje o ceni je među prvima koje porodica postavi, i potpuno je opravdano. Na njega ipak ne postoji jedan broj koji važi za svakoga, jer se cena prevoza pokojnika sastoji iz više delova koji se razlikuju od slučaja do slučaja. Ovde objašnjavamo svaki od tih delova na primeru Nemačke, šta je uobičajeno uključeno, ko može da učestvuje u troškovima i kako da uporedite ponude — a tačnu cenu za vaš slučaj dajemo već u prvom razgovoru.",
    date: "2025-01-15",
    updated: "2026-10-20",
    readTime: "8 min čitanja",
    sections: [
      {
        h: "Zašto ne postoji jedna cena, pa ni cena po kilometru",
        p: [
          "Mnogi traže „prevoz pokojnika cena po km“, jer je kilometraža najlakši način da se uporede ponude. Udaljenost jeste važna, ali je samo jedan od činilaca. Isti put od Minhena do Beograda može da košta različito ako je u jednom slučaju potreban avion, balsamovanje ili duže čekanje na odobrenje tužilaštva, a u drugom ne.",
          "Zato ne objavljujemo paušalne iznose koji bi kasnije mogli da se promene. Kada nam kažete gde je osoba preminula, gde je sahrana, da li je u pitanju sanduk ili urna i kakve su okolnosti smrti, saopštavamo vam tačnu cenu za ceo prevoz, od preuzimanja do predaje u mestu sahrane. Ako se tokom postupka pojavi nešto što ne zavisi od nas, javljamo vam to pre nego što nastane bilo kakav dodatni trošak.",
        ],
      },
      {
        h: "Udaljenost, grad polaska i zemlja sahrane",
        p: [
          "Nemačka je velika zemlja, pa razlika između juga i severa nije zanemarljiva. Od Minhena do Beograda ima oko 940 km, odnosno oko deset sati čiste vožnje, od Štutgarta oko 1.180 km, od Frankfurta oko 1.290 km, a od Hamburga oko 1.540 km i oko 15 sati vožnje. Uz udaljenost raste potrošnja goriva, putarine i vreme vozača, a na dužim relacijama i broj obaveznih odmora.",
          "Jednako je važno odredište. Iz Minhena do Banja Luke ima oko 730 km, iz Frankfurta do Sarajeva oko 1.300 km, iz Berlina do Podgorice oko 1.650 km, a iz Hamburga do Skoplja oko 1.970 km. Mesto sahrane u planinskom selu, daleko od autoputa, takođe produžava poslednji deo puta.",
          "Zemlja sahrane utiče i na papire: za Srbiju se plaća taksa za sprovodnicu, za Bosnu i Hercegovinu, Crnu Goru i Severnu Makedoniju takse njihovih predstavništava, a kod drumskog prevoza u Severnu Makedoniju preko Srbije potrebna je i tranzitna sprovodnica.",
        ],
      },
      {
        h: "Dokumenta, takse i prevodi u Nemačkoj",
        p: [
          "U Nemačkoj se za prevoz u inostranstvo pribavljaju tri ključna dokumenta: lekarska potvrda o smrti (Todesbescheinigung), izvod iz matične knjige umrlih (Sterbeurkunde) koji izdaje Standesamt i dozvola za prevoz posmrtnih ostataka (Leichenpass). Za izvode i za Leichenpass plaćaju se lokalne takse, čija visina zavisi od pokrajine i opštine.",
          "Dobra vest za porodice je da su Nemačka i Srbija, kao i BiH, Crna Gora i Severna Makedonija, članice Konvencije CIEC br. 16, pa se višejezični izvod o smrti po pravilu prihvata bez legalizacije. To znači da kod prevoza iz Nemačke obično nema troškova apostila i prevoda izvoda, kakvi postoje kod dokumenata iz Švedske, Danske ili Norveške.",
          "Na trošak utiče i broj overenih primeraka. Pored onog koji se prilaže uz zahtev za sprovodnicu, porodici su izvodi kasnije potrebni za osiguranje, banku, penzioni fond i upis smrti u srpske matične knjige, pa je jeftinije i brže kada se odmah zatraži dovoljan broj primeraka.",
        ],
      },
      {
        h: "Sanduk, priprema pokojnika i balsamovanje",
        p: [
          "Za međunarodni prevoz pokojnik mora biti položen u hermetički zatvoren sanduk propisan za takav prevoz. Standardni model koji ispunjava sve uslove uključen je u našu cenu. Ako porodica izabere drugu vrstu drveta, drugačiju obradu ili dodatnu opremu, razliku saopštavamo unapred, pre nego što se išta naruči.",
          "Priprema pokojnika — higijenska obrada, oblačenje i polaganje u sanduk — deo je standardne usluge. Balsamovanje nije uvek potrebno, ali ga mnoge avio-kompanije traže za prevoz sanduka, a može biti preporučljivo i kada se zbog obdukcije ili praznika prevoz odlaže. Verski obredi koje obavlja verska zajednica pre zatvaranja sanduka dogovaraju se posebno, u skladu sa željama porodice.",
          `Više o modelima i o tome šta određuje cenu sanduka pročitajte na stranici ${link("/pogrebni-sanduci", "pogrebni sanduci za međunarodni prevoz")}.`,
        ],
      },
      {
        h: "Avion ili pogrebno vozilo: dve različite računice",
        p: [
          "Iz Nemačke se pokojnik najčešće prevozi drumom, jer vozilo ide od mesta preuzimanja direktno do mesta sahrane, bez pretovara. Trošak drumskog prevoza zavisi pre svega od udaljenosti i trajanja puta.",
          "Kod aviona se računica sastoji iz više stavki: tarife avio-kompanije za ovu vrstu tereta, koja se obračunava prema težini i dimenzijama sanduka sa ambalažom, posebne ambalaže, aerodromskih usluga na oba kraja, balsamovanja ako ga kompanija traži, kao i dva drumska transfera — do aerodroma u Nemačkoj i od aerodroma do mesta sahrane. Zbog toga je za južnu Nemačku avion retko isplativiji, a ni brži.",
          `Kada razmatrate avion iz Hamburga ili Berlina, pitajte za ukupnu cenu, a ne samo za cenu leta. Kako se donosi odluka između ova dva načina objasnili smo u tekstu ${link("/blog-prevoz-pokojnika-avionom-vs-kombijem", "prevoz pokojnika avionom ili kombijem")}.`,
        ],
      },
      {
        h: "Okolnosti koje menjaju trošak: obdukcija, čekanje i vikend",
        p: [
          "Kod nesreće ili nejasnog uzroka smrti pokojnik se ne može preuzeti dok tužilaštvo ne izda odobrenje (Freigabe), a ponekad se nalaže i obdukcija. To ne povećava cenu samog prevoza, ali može da produži čuvanje pokojnika u rashladnim uslovima i da odloži polazak. Takve okolnosti navodimo otvoreno u ponudi, kako porodica ne bi bila iznenađena.",
          "Slično je sa vikendima i praznicima: lekarski pregled i preuzimanje obavljaju se u svako doba, ali Standesamt i konzulati rade radnim danima, pa dokumenta čekaju prvi sledeći radni dan. Duže čekanje na papire može da znači i duže čuvanje pokojnika, što je jedna od stavki o kojima vas obaveštavamo unapred.",
          `Ako je bolnica ili dom već angažovao lokalno nemačko pogrebno preduzeće (Bestatter), njegove usluge — na primer preuzimanje ili čuvanje — plaćaju se posebno. Zato je dobro da nas pozovete pre nego što bilo šta potpišete. Šta uraditi u prvim satima opisano je u tekstu ${link("/blog-sta-raditi-kada-neko-umre-u-inostranstvu", "šta raditi kada neko umre u inostranstvu")}.`,
        ],
      },
      {
        h: "Šta je uključeno u cenu i kako uporediti ponude",
        p: [
          "Cena koju vam dajemo odnosi se na ceo posao. U nju su uključeni pribavljanje nemačkih dokumenata i sprovodnice, odnosno dozvole zemlje sahrane, preuzimanje pokojnika, priprema i standardni sanduk za međunarodni prevoz, prevoz specijalizovanim pogrebnim vozilom do mesta sahrane, granične i carinske formalnosti i jedna kontakt osoba za porodicu, dostupna 24/7.",
          "U cenu prevoza po pravilu ne ulaze troškovi koji nastaju u mestu sahrane: grobno mesto i usluge groblja, opelo ili dženaza, cveće, osmrtnice i daća. Ako ih porodica želi da poveri nama, dogovaramo ih posebno.",
          "Kada poredite ponude, tražite ih u pisanom obliku i proverite stavku po stavku:",
        ],
        list: [
          "da li cena važi do mesta sahrane ili samo do granice, odnosno do aerodroma",
          "da li su uključene takse za nemačke izvode, Leichenpass i sprovodnicu",
          "da li je uključen sanduk propisan za međunarodni prevoz ili se plaća posebno",
          "da li isto vozilo vozi ceo put ili se pokojnik negde pretovara",
          "šta se dešava sa cenom ako se čeka obdukcija ili odobrenje tužilaštva",
          "da li dobijate račun sa punim nazivom i podacima preduzeća",
        ],
      },
      {
        h: "Ko može da pokrije troškove",
        p: [
          "Troškove prevoza po pravilu snosi porodica, ali vredi proveriti ko može da učestvuje u njima. Putno zdravstveno osiguranje često pokriva repatrijaciju kada je smrt nastupila na putovanju, a mnogi ljudi iz dijaspore u Nemačkoj imaju i privatno osiguranje za slučaj smrti (Sterbegeldversicherung) ili životno osiguranje. Osiguravača obavestite pre ugovaranja prevoza, jer neki traže prethodno odobrenje.",
          "Kada je smrt posledica nesreće na radu ili profesionalne bolesti, nemačko zakonsko osiguranje od nesreće na radu (Berufsgenossenschaft) isplaćuje pogrebnu pomoć, a u određenim uslovima nadoknađuje i troškove prevoza — na primer kada je osoba zbog posla boravila van mesta u kome živi porodica. O tome odlučuje sama Berufsgenossenschaft, pa zahtev treba podneti uz originalne račune.",
          `Ako je pokojnik primao penziju iz Srbije, lice koje je platilo sahranu može od Fonda PIO da traži naknadu pogrebnih troškova, na osnovu originalnog računa. Uslove i postupak objasnili smo u tekstu ${link("/blog-naknada-pogrebnih-troskova-pio-fond", "naknada pogrebnih troškova kod Fonda PIO")}. Za sve ove zahteve izdajemo račun i kopije dokumenata koje osiguravači i fondovi obično traže.`,
        ],
      },
    ],
    faqs: [
      {
        q: "Koliko košta prevoz pokojnika iz Nemačke u Srbiju?",
        a: "Zavisi od grada u kome je osoba preminula, mesta sahrane, dokumenata, izbora sanduka i načina prevoza. Od Minhena do Beograda ima oko 940 km, a od Diseldorfa oko 1.510 km, pa ni cena ne može biti ista. Tačan iznos za vaš slučaj saopštavamo u prvom razgovoru, bez obaveze.",
      },
      {
        q: "Da li se prevoz pokojnika naplaćuje po kilometru?",
        a: "Ne isključivo. Kilometraža utiče na trošak goriva, putarina i vremena vozača, ali su u cenu uključeni i dokumenta, takse, sanduk i priprema pokojnika. Zato dajemo cenu za ceo prevoz, a ne cenu po pređenom kilometru.",
      },
      {
        q: "Koliko košta prevoz pokojnika iz Nemačke u Bosnu?",
        a: "Princip je isti kao za Srbiju, uz takse predstavništva BiH umesto sprovodnice. Od Minhena do Banja Luke ima oko 730 km, a od Štutgarta do Sarajeva oko 1.180 km. Kada znamo grad polaska i mesto sahrane, dobijate tačnu cenu.",
      },
      {
        q: "Da li su sanduk i dokumenta uključeni u cenu?",
        a: "Jesu. Standardni sanduk propisan za međunarodni prevoz, pribavljanje nemačkih dokumenata i sprovodnice ili dozvole zemlje sahrane deo su cene koju dajemo. Posebno se navodi samo ono što porodica izabere dodatno, na primer drugi model sanduka.",
      },
      {
        q: "Da li je prevoz avionom iz Nemačke mnogo skuplji?",
        a: "Najčešće jeste skuplji, jer se pored leta plaćaju ambalaža, aerodromske usluge, eventualno balsamovanje i dva drumska transfera. Za južnu i srednju Nemačku avion retko donosi uštedu vremena, dok se iz severnih gradova isplativost proverava od slučaja do slučaja.",
      },
      {
        q: "Može li osiguranje ili Fond PIO da pokrije deo troškova?",
        a: `Može, zavisno od polise i statusa pokojnika. Putno osiguranje, privatno osiguranje za slučaj smrti ili Berufsgenossenschaft kod nesreće na radu mogu da pokriju deo troškova, a za korisnike penzije iz Srbije postoji naknada pogrebnih troškova kod Fonda PIO. Okvir cene opisan je i na stranici ${link("/cenovnik", "cenovnik")}.`,
      },
    ],
    relatedLinks: [
      { href: "/cenovnik", title: "Cenovnik i faktori cene" },
      { href: "/nemacka", title: "Prevoz pokojnika iz Nemačke" },
      { href: "/blog-naknada-pogrebnih-troskova-pio-fond", title: "Naknada pogrebnih troškova kod Fonda PIO" },
      { href: "/blog-kako-izabrati-pogrebno-preduzece", title: "Kako izabrati pogrebno preduzeće" },
      { href: "/munchen", title: "Prevoz pokojnika iz Minhena" },
    ],
  },

  {
    slug: "blog-dokumentacija-za-prevoz-pokojnika",
    title: "Dokumentacija za prevoz pokojnika: kompletan spisak",
    description:
      "Kompletan spisak dokumentacije za prevoz pokojnika: šta porodica priprema, originali ili kopije, šta pribavljamo mi, nazivi po zemljama i česte greške.",
    h1: "Dokumentacija za prevoz pokojnika — kompletan spisak za porodicu",
    lead: "Ovaj tekst je zamišljen kao kontrolna lista. Ne objašnjava ponovo ceo pravni postupak, već odgovara na praktična pitanja koja porodice postavljaju: šta tačno treba pronaći i poslati, šta mora biti original, šta pribavlja pogrebno preduzeće, kako se dokumenti zovu u pojedinim zemljama i koje greške najčešće usporavaju prevoz pokojnika.",
    date: "2025-01-15",
    updated: "2026-10-20",
    readTime: "8 min čitanja",
    sections: [
      {
        h: "Kako koristiti ovaj spisak",
        p: [
          "Svi papiri za prevoz pokojnika iz inostranstva mogu se podeliti u tri grupe. Prvu čine lična dokumenta pokojnika i podaci koje ima samo porodica. Drugu čine dokumenta koja izdaju ustanove u zemlji smrti — lekar, matična služba i organ koji odobrava prevoz. Treću čini dozvola zemlje sahrane, za Srbiju sprovodnica.",
          `Od porodice se očekuje samo prva grupa, a drugu i treću pribavljamo mi, na osnovu punomoćja. Ako želite da razumete ko izdaje koji dokument i zašto, to je objašnjeno na stranici ${link("/dokumentacija-za-prevoz-pokojnika", "dokumentacija za prevoz pokojnika")}, a srpska dozvola za unos u vodiču ${link("/blog-sprovodnica-za-prenos-posmrtnih-ostataka", "sprovodnica za prenos posmrtnih ostataka")}. Ovde se bavimo onim što treba da uradite vi.`,
        ],
      },
      {
        h: "Šta porodica treba da pronađe i pošalje",
        ordered: true,
        p: [
          "Prođite kroz spisak redom i obeležite šta imate. Ne čekajte da sve bude kompletno — pošaljite fotografije onoga što ste pronašli, a ostalo dopunite kasnije.",
        ],
        list: [
          "pasoš pokojnika, a ako ga nema ili je istekao, lična karta ili drugi lični dokument",
          "izvod iz matične knjige rođenih, a za osobe koje su bile u braku i izvod iz matične knjige venčanih — matična služba u inostranstvu ih često traži za upis smrti",
          "potvrda o prijavi prebivališta u inostranstvu (u Nemačkoj Meldebescheinigung), ako je imate",
          "tačan naziv mesta i groblja na kome će biti sahrana, sa imenom korisnika grobnog mesta",
          "za pokojnika koji nije bio državljanin Srbije, a sahranjuje se u Srbiji — potvrda groblja da je grobno mesto obezbeđeno",
          "potpisano punomoćje i kopija lične karte ili pasoša osobe koja ga potpisuje",
          "polisa putnog, životnog ili drugog osiguranja, ako postoji",
          "kod kremacije — pisana saglasnost porodice u obliku koji traže propisi zemlje u kojoj se kremacija obavlja",
        ],
      },
      {
        h: "Originali ili kopije: šta, kada i kako poslati",
        p: [
          "Za početak su dovoljne jasne fotografije ili skenirane kopije, poslate porukom ili mejlom. Na osnovu njih proveravamo podatke, popunjavamo zahteve i javljamo vam ako nešto nedostaje. Fotografišite celu stranu dokumenta, na dnevnom svetlu i bez odsjaja, tako da se vide svi brojevi.",
          "Pasoš pokojnika je dokument koji se gotovo uvek traži u originalu, jer se zahtev za sprovodnicu predaje uz originalna dokumenta. Original nikada ne šaljite običnom poštom. Dogovorite se sa nama kako će stići do onoga ko predaje zahtev: lično, preko rođaka koji putuje ili kurirskom službom koja omogućava praćenje pošiljke.",
          "Strani izvod o smrti zatražite u više primeraka. Jedan odlazi uz zahtev za dozvolu, a ostali su porodici potrebni kasnije — za osiguranje, banku, penzioni fond u zemlji u kojoj je pokojnik radio, upis smrti u srpske matične knjige i ostavinski postupak. Naknadno izdavanje iz inostranstva traje i košta više nego kada se primerci zatraže odmah.",
        ],
      },
      {
        h: "Šta pribavljamo mi",
        p: [
          "Kada nam porodica da punomoćje, preuzimamo sva dokumenta koja izdaju ustanove. Porodica ne mora da zna strani jezik, da zakazuje termine niti da odlazi na šaltere. Konkretno, pribavljamo:",
        ],
        list: [
          "lekarsku potvrdu o smrti i uzroku smrti od bolnice ili lekara koji je konstatovao smrt",
          "izvod iz matične knjige umrlih od matične službe u mestu smrti, u višejezičnom obliku kada ga ta zemlja izdaje",
          "dozvolu za prevoz posmrtnih ostataka preko granice od nadležnog lokalnog organa",
          "odobrenje tužilaštva za preuzimanje tela, kada je ono potrebno",
          "apostil i prevod na srpski kod ovlašćenog prevodioca za dokumenta iz zemalja koje nisu članice Konvencije CIEC br. 16",
          "sprovodnicu, tranzitnu sprovodnicu ili dozvolu predstavništva BiH, Crne Gore ili Severne Makedonije",
          "dokumenta koja traži avio-kompanija, kada se pokojnik prevozi avionom, i carinske papire za izlazak iz Švajcarske ili Norveške",
        ],
      },
      {
        h: "Nazivi dokumenata po zemljama",
        p: [
          "Porodice često dobiju papir na stranom jeziku i ne znaju šta je to. Ispod su nazivi koje ćete najčešće videti. Pazite na jednu staru zabunu: nemački Sterbeurkunde nije „smrtna dozvola“, već izvod iz matične knjige umrlih, a dozvola za prevoz u Nemačkoj se zove Leichenpass.",
        ],
        list: [
          "<strong>Nemačka:</strong> Todesbescheinigung (lekarska potvrda o smrti), Sterbeurkunde (izvod iz matične knjige umrlih), Leichenpass (dozvola za prevoz)",
          "<strong>Austrija:</strong> Totenbeschaubefund (nalaz mrtvozornika), Sterbeurkunde, Leichenpass ili Überführungsbewilligung",
          "<strong>Švajcarska:</strong> ärztliche Todesbescheinigung ili certificat médical de décès, Todesschein ili Auszug aus dem Todesregister, Leichenpass ili laissez-passer mortuaire",
          "<strong>Italija:</strong> certificato necroscopico, estratto dell'atto di morte, passaporto mortuario",
          "<strong>Španija:</strong> certificado médico de causa de la muerte, certificado de defunción, certificado de embalsamamiento",
          "<strong>Francuska:</strong> certificat de décès, acte de décès, odobrenje prefekture za prevoz van zemlje",
          "<strong>Švedska:</strong> dödsbevis i intyg om dödsorsak, uz apostil i prevod",
          "<strong>Danska:</strong> dødsattest i ligpas, koji se traži samo za kovčeg, ne i za urnu",
          "<strong>Norveška:</strong> legeerklæring om dødsfall, smitteattest i dozvola policije za iznošenje kovčega",
          "<strong>Hrvatska:</strong> izvadak iz matice umrlih i hrvatska sprovodnica (posmrtni putni list), koju ne treba mešati sa srpskom",
        ],
      },
      {
        h: "Najčešće greške koje usporavaju prevoz",
        p: [
          "Većina zastoja ne nastaje zbog teških pravnih pitanja, već zbog sitnica koje se mogu izbeći. Ovo su greške koje se ponavljaju:",
        ],
        list: [
          "<strong>Pogrešno napisano ime:</strong> ime i prezime moraju biti isti u svim dokumentima i u pasošu, uključujući slova č, ć, š, ž i đ. Ako strani izvod glasi na „Djordjevic“, a pasoš na „Đorđević“, ili su zamenjeni ime i prezime, razliku treba ispraviti pre podnošenja zahteva za dozvolu.",
          "<strong>Različit datum ili mesto rođenja</strong> u stranim i domaćim dokumentima, što kasnije pravi probleme i pri upisu u srpske matične knjige.",
          "<strong>Pogrešno predstavništvo:</strong> nadležno je ono koje pokriva poslednje prebivalište pokojnika, a ne mesto smrti ili mesto gde živi porodica.",
          "<strong>Original poslat poštom</strong> bez praćenja, pa se čeka da pasoš negde stigne.",
          "<strong>Promena odluke usred postupka:</strong> prelazak sa sahrane na kremaciju ili promena mesta sahrane znači da se deo papira ponovo izdaje.",
          "<strong>Nepoznato groblje:</strong> zahtev za dozvolu ne može se predati dok mesto sahrane nije tačno određeno.",
          "<strong>Potpis bez čitanja:</strong> nalog lokalnom pogrebnom preduzeću ili dokument na nepoznatom jeziku potpisan u žurbi.",
        ],
      },
      {
        h: "Rokovi koje treba imati na umu",
        p: [
          "Smrt se u većini zemalja mora prijaviti matičnoj službi u kratkom zakonskom roku — u Nemačkoj najkasnije trećeg radnog dana posle smrti. Matične službe, organi koji izdaju dozvolu za prevoz i konzulati rade radnim danima, pa se papiri koji su započeti u petak po pravilu završavaju u ponedeljak ili kasnije.",
          "Dodatno vreme treba računati za dokumenta iz Švedske, Danske, Norveške i Grčke, koja se overavaju apostilom i prevode. Ako je naložena obdukcija, ništa se ne može predati dok tužilaštvo ne oslobodi telo. Koliko se realno može ubrzati, a šta ne, opisali smo u tekstu " + link("/blog-hitni-prevoz-pokojnika-sta-treba-znati", "hitni prevoz pokojnika") + ".",
        ],
      },
      {
        h: "Posle sahrane: dokumenta koja ostaju porodici",
        p: [
          "Kada se pokojnik sahrani, porodici ostaju papiri koji su joj potrebni za dalje poslove. Smrt državljanina Srbije u inostranstvu treba upisati i u matičnu knjigu umrlih koja se vodi u Srbiji, preko konzulata ili kod matične službe u Srbiji, uz strani izvod o smrti i pasoš pokojnika.",
          `Sačuvajte na jednom mestu primerke izvoda, sprovodnicu ili njenu kopiju, račune za prevoz i sahranu i dokumenta o osiguranju. Lice koje je platilo sahranu korisnika penzije iz Srbije može uz originalni račun da traži naknadu pogrebnih troškova, o čemu više piše u tekstu ${link("/blog-naknada-pogrebnih-troskova-pio-fond", "naknada pogrebnih troškova kod Fonda PIO")}.`,
        ],
      },
    ],
    faqs: [
      {
        q: "Šta je Sterbeurkunde i da li je to smrtna dozvola?",
        a: "Nije. Sterbeurkunde je izvod iz matične knjige umrlih koji u Nemačkoj i Austriji izdaje matična služba (Standesamt). Dozvola za prevoz posmrtnih ostataka u inostranstvo je poseban dokument i zove se Leichenpass.",
      },
      {
        q: "Koliko primeraka stranog izvoda o smrti treba zatražiti?",
        a: "Više nego što vam se u prvom trenutku čini. Jedan primerak ide uz zahtev za sprovodnicu ili drugu dozvolu, a ostali su potrebni za osiguranje, banku, penzioni fond, upis u srpske matične knjige i ostavinu. Broj prilagođavamo vašoj situaciji kada podnosimo zahtev matičnoj službi.",
      },
      {
        q: "Šta ako je pasoš pokojnika istekao ili izgubljen?",
        a: "Javite nam to odmah. Sprovodnica se izdaje na osnovu javne isprave kojom se dokazuje identitet pokojnika, pa se sa nadležnim predstavništvom dogovara koja se isprava može priložiti umesto važećeg pasoša, na primer lična karta.",
      },
      {
        q: "Da li porodica mora nešto da prevodi?",
        a: "Najčešće ne. Višejezični izvodi iz zemalja članica Konvencije CIEC br. 16, kao što su Nemačka, Austrija, Švajcarska ili Italija, po pravilu se prihvataju bez prevoda. Za dokumenta iz Švedske, Danske, Norveške ili Grčke apostil i prevod pribavljamo mi.",
      },
      {
        q: "Šta ako je ime u stranom dokumentu napisano drugačije nego u pasošu?",
        a: "Pošaljite nam fotografije oba dokumenta. Razliku treba ispraviti kod ustanove koja je izdala strani dokument pre nego što se preda zahtev za dozvolu, jer se ime na svim papirima mora poklapati sa pasošem. Što se to ranije uoči, ispravka manje usporava prevoz.",
      },
      {
        q: "Koja dokumenta su potrebna za urnu?",
        a: `Ista kao za prevoz tela, uz potvrdu o kremaciji, a za unos u Srbiju i tada je potrebna sprovodnica. Posebnosti prevoza urne objasnili smo u tekstu ${link("/blog-prevoz-urne-iz-inostranstva", "prevoz urne iz inostranstva")}.`,
      },
    ],
    relatedLinks: [
      { href: "/dokumentacija-za-prevoz-pokojnika", title: "Dokumentacija za prevoz pokojnika — pregled po zemljama" },
      { href: "/blog-sprovodnica-za-prenos-posmrtnih-ostataka", title: "Sprovodnica za prenos posmrtnih ostataka" },
      { href: "/blog-kako-organizovati-prevoz-pokojnika", title: "Kako organizovati prevoz pokojnika iz inostranstva" },
      { href: "/blog-hitni-prevoz-pokojnika-sta-treba-znati", title: "Hitni prevoz pokojnika — šta treba znati" },
      { href: "/contact", title: "Kontakt — dostupni 24/7" },
    ],
  },
];
