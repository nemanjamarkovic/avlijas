/** Service pages — rendered by renderServicePage() in scripts/build-site.js. */
const a = (href, text) => `<a href="${href}" class="text-primary">${text}</a>`;

module.exports = [
  {
    slug: "dokumentacija-za-prevoz-pokojnika",
    title: "Dokumentacija za prevoz pokojnika i sprovodnica",
    description:
      "Dokumentacija za prevoz pokojnika iz inostranstva: sprovodnica, Leichenpass, izvod o smrti i prevodi. Pregled po zemljama i ko koji dokument izdaje.",
    h1: "Dokumentacija za prevoz pokojnika",
    lead: "Za prevoz pokojnika preko granice potrebne su dve vrste papira: dokumenta zemlje u kojoj je nastupila smrt i dozvola zemlje u kojoj će biti sahrana — za Srbiju je to sprovodnica. Ovde objašnjavamo šta se traži, ko šta izdaje i koliko to traje. Sve korake preuzimamo mi, a od porodice nam treba vrlo malo.",
    sections: [
      {
        h: "Kako je dokumentacija organizovana",
        p: [
          "Bez obzira na to iz koje zemlje se pokojnik prevozi, papiri se uvek dele u dve grupe. Prva grupa dokazuje smrt i dozvoljava da posmrtni ostaci napuste zemlju u kojoj je osoba preminula: lekarska potvrda o smrti i uzroku smrti, izvod iz matične knjige umrlih i dozvola za prevoz u inostranstvo. Druga grupa je dozvola zemlje odredišta da posmrtni ostaci uđu na njenu teritoriju — u Srbiji se taj dokument zove sprovodnica.",
          "Uz to je potreban pasoš ili lična karta pokojnika, u originalu. Dokumenti putuju zajedno sa sandukom i pokazuju se na granici, pa moraju biti potpuni pre polaska. Nazivi i nadležni organi se razlikuju od zemlje do zemlje, ali je logika ista svuda u Evropi.",
        ],
      },
      {
        h: "Dokumenta iz zemlje u kojoj je nastupila smrt",
        p: [
          "Sledi kratak pregled za zemlje iz kojih najčešće organizujemo prevoz. Na stranici svake zemlje nalaze se detalji, nadležna predstavništva, gradovi i udaljenosti.",
        ],
        list: [
          `${a("/nemacka", "Nemačka")}: Todesbescheinigung (lekarska potvrda o smrti), Sterbeurkunde iz matične službe (Standesamt) i Leichenpass. Ko izdaje Leichenpass zavisi od pokrajine — u Bavarskoj opština u kojoj prevoz počinje, u Tiringiji Gesundheitsamt mesta smrti. Kod nasilne ili neprirodne smrti prvo je potrebno odobrenje tužilaštva (Freigabe), a ponekad i obdukcija.`,
          `${a("/austrija", "Austrija")}: nalaz mrtvozornika (Totenbeschau), Sterbeurkunde i Leichenpass, odnosno Überführungsbewilligung, koji izdaje okružna uprava (Bezirkshauptmannschaft), a u statutarnim gradovima magistrat.`,
          `${a("/svajcarska", "Švajcarska")}: smrt upisuje matična služba (Zivilstandsamt, état civil), a Leichenpass izdaje kantonalni organ, po postupku koji se razlikuje od kantona do kantona. Pošto Švajcarska nije u EU, na izlasku se obavljaju i carinske formalnosti.`,
          `${a("/italija", "Italija")}: opština (Comune) upisuje smrt i izdaje dozvolu za prevoz, a za prelazak granice potreban je passaporto mortuario koji izdaje prefektura ili, u pojedinim regionima, opština.`,
          `${a("/spanija", "Španija")}: lekarska potvrda o uzroku smrti, izvod iz Registro Civil, potvrda o balsamovanju ili privremenoj konzervaciji i zahtev lokalnom zdravstvenom organu, dok izlazak iz zemlje odobrava služba Sanidad Exterior. Kod nasilne smrti traži se i dozvola suda.`,
          `${a("/francuska", "Francuska")}: lekarska potvrda o smrti, izvod o smrti (acte de décès) iz opštine i dozvola prefekture departmana u kome se sanduk zatvara — laissez-passer mortuaire ili odluka prefekta, zavisno od zemlje odredišta.`,
          `${a("/svedska", "Švedska")}: potvrda o smrti, lekarski izveštaj o uzroku smrti i izvod iz registra koji vodi poreska uprava Skatteverket.`,
          `${a("/danska", "Danska")}: potvrda o smrti, izvod iz registra i ligpas — propusnica za prevoz kovčega preko granice, koja se za urnu ne traži.`,
          `${a("/norveska", "Norveška")}: izvod o smrti koji izdaje okružni sud, propusnica lokalne policije i potvrda zdravstvene ustanove da pokojnik nije bolovao od zarazne bolesti — ovu potvrdu izričito traži srpska ambasada u Oslu.`,
          `${a("/hrvatska", "Hrvatska")} i ${a("/crna-gora", "Crna Gora")}: izvod iz matične knjige umrlih i dozvola nadležnog organa za prevoz. Put je kratak — od Zagreba do Beograda ima oko 390 km, a od Podgorice oko 430 km.`,
          `${a("/grcka", "Grčka")}: izvod o smrti iz matične službe i dozvola za prevoz, a dokumenta namenjena srpskim organima overavaju se apostilom i prevode.`,
        ],
      },
      {
        h: "Sprovodnica za prenos posmrtnih ostataka u Srbiju",
        p: [
          "Sprovodnica je dozvola za unos posmrtnih ostataka u Srbiju. Izdaje je ambasada ili konzulat Srbije nadležan za poslednje mesto prebivališta pokojnika — u Nemačkoj, na primer, postoji šest predstavništava, a nadležnost je podeljena po pokrajinama. Zahtev podnosi član porodice ili ovlašćeno pogrebno preduzeće.",
          `Ako pokojnik samo prolazi kroz Srbiju na putu do treće zemlje, potrebna je tranzitna sprovodnica. Pojedina predstavništva traže i dodatne potvrde, pa spisak uvek proveravamo sa onim koje je nadležno u konkretnom slučaju. Obrazac i ceo postupak korak po korak opisani su u vodiču ${a("/blog-sprovodnica-za-prenos-posmrtnih-ostataka", "sprovodnica za prenos posmrtnih ostataka")}.`,
          "Dokumenta se predaju u originalu, a predstavništva u pravilu traže sledeće:",
        ],
        list: [
          "pasoš pokojnika;",
          "zahtev u kome se navode mesto sahrane i pravac prevoza;",
          "izvod iz matične knjige umrlih koji je izdao strani organ (npr. Sterbeurkunde ili Auszug aus dem Todesregister);",
          "lekarski izveštaj o uzroku smrti (npr. Todesbescheinigung);",
          "dozvolu za prevoz koju je izdala zemlja u kojoj je nastupila smrt (npr. Leichenpass);",
          "za strane državljane — potvrdu da je u Srbiji obezbeđeno grobno mesto.",
        ],
        ordered: true,
      },
      {
        h: "Sahrana u Bosni i Hercegovini, Crnoj Gori ili Severnoj Makedoniji",
        p: [
          "Sprovodnica važi samo za Srbiju. Kada je sahrana u drugoj zemlji regiona, dozvolu za unos izdaje ambasada ili konzulat te zemlje, a merodavno je mesto sahrane. Osnovna dokumenta iz zemlje smrti su ista, pa se sve pribavlja paralelno i bez gubljenja vremena.",
          "Za Bosnu i Hercegovinu predstavništvo izdaje propusnicu (laissez-passer) za prenos posmrtnih ostataka — to je ono što porodice često traže kao „sprovodnicu za BiH“. Uz zahtev se prilaže i obrazac koji zavisi od toga gde je sahrana: u Federaciji BiH, Republici Srpskoj ili Brčko distriktu. Za Crnu Goru i Severnu Makedoniju postupak je sličan, uz dozvolu njihovog predstavništva. Kada put do mesta sahrane vodi preko Srbije, pribavljamo i tranzitnu sprovodnicu.",
        ],
      },
      {
        h: "Višejezični izvod ili apostil i prevod",
        p: [
          "Porodice se često pitaju da li strani izvod o smrti mora da se prevodi. Odgovor zavisi od zemlje. Srbija, Nemačka, Austrija, Švajcarska, Italija, Španija, Francuska, Hrvatska, Crna Gora, Bosna i Hercegovina i Severna Makedonija potpisnice su Bečke konvencije o izdavanju višejezičnih izvoda iz matičnih knjiga (CIEC br. 16, 1976). Višejezični izvod o smrti iz tih zemalja u Srbiji se u pravilu prihvata bez legalizacije i bez prevoda.",
          "Švedska, Danska, Norveška i Grčka nisu deo tog sistema. Njihova dokumenta za srpske organe overavaju se apostilom i prevode na srpski jezik kod ovlašćenog prevodioca. Taj korak traži dodatno vreme, pa sa overom i prevodom počinjemo čim dokument bude izdat.",
        ],
      },
      {
        h: "Urna, strani državljani i drugi posebni slučajevi",
        p: [
          "Ako je pokojnik kremiran u inostranstvu, i za urnu je potrebna sprovodnica, a uz ostala dokumenta prilaže se potvrda o kremaciji. Urna mora biti zatvorena i zaštićena za put. U Danskoj se za urnu ne traži ligpas, ali srpska dokumentacija ostaje ista.",
          `Kada pokojnik nije bio državljanin Srbije — na primer, imao je samo nemačko ili austrijsko državljanstvo — predstavništvo traži i potvrdu da je u Srbiji obezbeđeno grobno mesto. Kod nasilne ili neprirodne smrti dokumenta se izdaju tek kada tužilaštvo ili sud odobri preuzimanje tela, što može da odloži prevoz. Za prenos posmrtnih ostataka iz groba u inostranstvu važe posebna pravila, opisana na stranici ${a("/ekshumacija", "ekshumacija i prenos")}.`,
        ],
      },
      {
        h: "Kako vodimo dokumentaciju i koliko to traje",
        p: [
          "Od porodice nam je potrebno samo nekoliko podataka: ime pokojnika, gde je preminuo, gde želite sahranu i kopija pasoša ili lične karte. Kada je potrebno, šaljemo vam ovlašćenje na potpis. Sve ostalo radimo mi — od bolnice ili doma, preko matične službe i lokalnih organa, do srpskog ili drugog nadležnog predstavništva. O svakom koraku vas obaveštava ista kontakt osoba.",
          `Ceo postupak, od prvog poziva do predaje pokojnika porodici, najčešće traje: iz Austrije 1–3 dana, iz Nemačke, Švajcarske i Italije 2–4 dana, iz Danske 3–5, iz Španije 4–6 i iz Švedske 4–7 dana. Najviše vremena odlazi upravo na dokumenta, a vikendi, praznici, obdukcija ili čekanje na odobrenje tužilaštva mogu sve da produže. Više praktičnih saveta ima u članku ${a("/blog-dokumentacija-za-prevoz-pokojnika", "dokumentacija za prevoz pokojnika")}, a o troškovima na stranici ${a("/cenovnik", "cenovnik")}.`,
        ],
      },
    ],
    faqs: [
      {
        q: "Šta je sprovodnica i ko je izdaje?",
        a: "Sprovodnica je dozvola za unos posmrtnih ostataka u Srbiju. Izdaje je ambasada ili konzulat Srbije nadležan za poslednje mesto prebivališta pokojnika, na zahtev porodice ili ovlašćenog pogrebnog preduzeća. Bez nje pokojnik ne može biti prevezen u Srbiju.",
      },
      {
        q: "Da li moram lično da idem u ambasadu ili konzulat?",
        a: "U većini slučajeva ne. Zahtev za sprovodnicu može da podnese ovlašćeno pogrebno preduzeće, pa taj odlazak preuzimamo mi. Porodica nam šalje podatke i kopije dokumenata, a po potrebi potpisuje ovlašćenje.",
      },
      {
        q: "Šta je Leichenpass?",
        a: "Leichenpass je dozvola za prevoz posmrtnih ostataka u inostranstvo koja se izdaje u Nemačkoj, Austriji i Švajcarskoj. Izdaje je lokalni organ — zavisno od zemlje opština, Gesundheitsamt, okružna uprava ili kanton — i prilaže se uz zahtev za sprovodnicu.",
      },
      {
        q: "Da li je i za urnu potrebna sprovodnica?",
        a: "Da. Za prenos urne u Srbiju takođe se izdaje sprovodnica, a uz uobičajena dokumenta prilaže se i potvrda o kremaciji.",
      },
      {
        q: "Da li strani izvod o smrti mora da se prevodi?",
        a: "Iz zemalja potpisnica Bečke konvencije (CIEC br. 16), kao što su Nemačka, Austrija, Švajcarska ili Italija, višejezični izvod se u pravilu prihvata bez prevoda. Dokumenta iz Švedske, Danske, Norveške ili Grčke overavaju se apostilom i prevode na srpski.",
      },
    ],
    relatedLinks: [
      { href: "/blog-sprovodnica-za-prenos-posmrtnih-ostataka", title: "Vodič: sprovodnica za prenos posmrtnih ostataka" },
      { href: "/blog-dokumentacija-za-prevoz-pokojnika", title: "Blog: dokumentacija za prevoz pokojnika" },
      { href: "/repatrijacija-pokojnika", title: "Repatrijacija pokojnika" },
      { href: "/ekshumacija", title: "Ekshumacija i prenos posmrtnih ostataka" },
      { href: "/cenovnik", title: "Cenovnik" },
    ],
  },
  {
    slug: "pogrebni-sanduci",
    title: "Pogrebni sanduci za međunarodni prevoz pokojnika",
    description:
      "Pogrebni sanduk za međunarodni prevoz pokojnika: zašto mora biti hermetički zatvoren, šta je uključeno u cenu, izbor modela, urne i verski običaji.",
    h1: "Pogrebni sanduci za međunarodni prevoz",
    lead: "Pokojnik koji se prevozi preko granice mora biti položen u hermetički zatvoren sanduk propisan za međunarodni prevoz. Standardni sanduk koji ispunjava te uslove uključen je u cenu prevoza, a porodica može da izabere i drugi model. Ovde objašnjavamo zašto su pravila takva i šta možete da birate.",
    sections: [
      {
        h: "Zašto je za prevoz preko granice potreban poseban sanduk",
        p: [
          "Običan drveni sanduk nije dovoljan za put od nekoliko stotina ili hiljada kilometara. Međunarodni sporazumi o prevozu posmrtnih ostataka — Berlinski sporazum iz 1937. i Sporazum Saveta Evrope o prenosu posmrtnih ostataka iz 1973. — kao i propisi pojedinih zemalja traže da sanduk bude potpuno nepropustan i da u njemu bude upijajući materijal.",
          "U praksi to znači drveni sanduk sa limenim, najčešće cinčanim umetkom koji se posle polaganja pokojnika zalemi, ili drveni sanduk obložen cinkom. Tako zatvoren sanduk čuva dostojanstvo pokojnika i otklanja svaki rizik po zdravlje tokom dugog puta — od Hamburga do Beograda, na primer, ima oko 1.540 km. Kada se pokojnik prevozi avionom, sanduk se dodatno smešta u posebnu ambalažu za avio-teret.",
        ],
      },
      {
        h: "Standardni sanduk je uključen u cenu prevoza",
        p: [
          "U cenu međunarodnog prevoza uključen je standardni sanduk koji ispunjava sve navedene uslove. Za većinu porodica to je sasvim dovoljno, jer je izrađen upravo za ovu namenu i dostojanstvenog je izgleda.",
          "Ako želite drugačiji izgled — drugu vrstu drveta, drugačiju obradu, ukrase ili verska obeležja — možete da izaberete i drugi model. Nudimo samo modele koji ispunjavaju uslove za prevoz preko granice, a cenu izabranog modela dobijate unapred, pre nego što se bilo šta naruči.",
        ],
      },
      {
        h: "Od čega zavisi cena pogrebnog sanduka",
        p: [
          "Na pitanje koliko košta pogrebni sanduk ne postoji jedan odgovor, jer cena zavisi od modela i opreme. Kada porodica bira sanduk po svojoj želji, tačan iznos dobija u prvom razgovoru, zajedno sa cenom prevoza. Na cenu najviše utiču:",
        ],
        list: [
          "vrsta drveta i način obrade površine;",
          "oblik i dimenzije — za krupnije osobe potreban je sanduk većih dimenzija;",
          "unutrašnja oprema, kao što su obloga, jastuk i pokrov;",
          "ručke, okovi, ukrasi i verska obeležja;",
          "posebna ambalaža kada se pokojnik prevozi avionom.",
        ],
      },
      {
        h: "Urna umesto sanduka",
        p: [
          "Kada je pokojnik kremiran u zemlji u kojoj je preminuo, prevozi se urna. Prevoz urne je jednostavniji, ali dokumentacija ostaje obavezna: za unos urne u Srbiju potrebni su sprovodnica i potvrda o kremaciji, a za Bosnu i Hercegovinu, Crnu Goru i Severnu Makedoniju dozvola njihovog predstavništva.",
          `Urna mora biti dobro zatvorena i zaštićena od oštećenja tokom puta. Porodica može da izabere urnu po svom ukusu ili da zadrži onu iz krematorijuma, ako je pogodna za prevoz. Više o papirima za urnu na stranici ${a("/dokumentacija-za-prevoz-pokojnika", "dokumentacija za prevoz pokojnika")}.`,
        ],
      },
      {
        h: "Verski običaji i želje porodice",
        p: [
          "Sanduk i priprema pokojnika treba da odgovaraju veri i običajima porodice. Sve želje dogovaramo pre nego što se sanduk zatvori, jer se on tokom puta ne otvara.",
          "U pravoslavnim porodicama pokojnik se najčešće oblači u odeću koju odabere porodica, uz krstić ili ikonicu, a opelo se služi u mestu sahrane. Kod muslimanskih porodica obredno kupanje (gasul) i umotavanje u ćefin najčešće obavljaju verska lica još u zemlji smrti, pre zatvaranja sanduka, a dženaza se dogovara sa verskom zajednicom u mestu ukopa. Katoličke porodice često žele krunicu ili krst uz pokojnika i misu za pokojnika u svojoj župi.",
          "Ovo su samo opšti običaji — svaka porodica ima svoje. Recite nam šta je za vas važno, bilo da je reč o odeći, predmetima koje želite uz pokojnika ili redosledu obreda, pa ćemo pripremu i izbor sanduka prilagoditi tome.",
        ],
      },
      {
        h: "Priprema pokojnika i zatvaranje sanduka",
        p: [
          "Pre polaganja u sanduk pokojnik se priprema u ovlašćenoj ustanovi u zemlji smrti: higijenska obrada, oblačenje i, kada to propisi ili dužina puta zahtevaju, balsamovanje. U Španiji je, na primer, potvrda o balsamovanju ili privremenoj konzervaciji deo obavezne dokumentacije.",
          "Porodica može da pošalje odeću u kojoj želi da pokojnik bude sahranjen. Posle polaganja hermetički umetak se zatvara, a sanduk putuje zatvoren do mesta sahrane, gde ga preuzima porodica ili lokalna pogrebna služba. Ako imate posebne želje za ispraćaj, recite nam ih unapred, kako bismo ih uskladili sa propisima i sa pogrebnom službom u mestu sahrane.",
        ],
      },
    ],
    faqs: [
      {
        q: "Da li je sanduk uključen u cenu prevoza?",
        a: "Da. Standardni sanduk propisan za međunarodni prevoz uključen je u cenu prevoza pokojnika. Ako porodica izabere drugi model, cenu tog modela saopštavamo unapred.",
      },
      {
        q: "Zašto sanduk mora biti hermetički zatvoren?",
        a: "Zato što to traže međunarodni sporazumi i propisi zemalja kroz koje pokojnik putuje. Hermetički zatvoren sanduk sa metalnim umetkom otklanja rizik po zdravlje i čuva dostojanstvo pokojnika na dugom putu.",
      },
      {
        q: "Mogu li da izaberem drugačiji sanduk?",
        a: "Možete. Nudimo različite modele i svi ispunjavaju uslove za međunarodni prevoz. U izboru vam pomažemo telefonom ili porukom, bez žurbe i bez pritiska.",
      },
      {
        q: "Koliko košta pogrebni sanduk?",
        a: "Cena zavisi od vrste drveta, obrade, dimenzija, unutrašnje opreme i ukrasa. Standardni sanduk za međunarodni prevoz već je uračunat u cenu prevoza, a za drugi model tačan iznos dobijate u prvom razgovoru.",
      },
      {
        q: "Šta ako je pokojnik kremiran?",
        a: "Tada se umesto sanduka prevozi urna, zatvorena i zaštićena za put. I za urnu je potrebna sprovodnica, uz potvrdu o kremaciji.",
      },
    ],
    relatedLinks: [
      { href: "/dokumentacija-za-prevoz-pokojnika", title: "Dokumentacija za prevoz pokojnika" },
      { href: "/cenovnik", title: "Cenovnik usluga" },
      { href: "/blog-prevoz-pokojnika-avionom-vs-kombijem", title: "Prevoz avionom ili kombijem" },
      { href: "/repatrijacija-pokojnika", title: "Repatrijacija pokojnika" },
    ],
  },
  {
    slug: "ekshumacija",
    title: "Ekshumacija i prenos posmrtnih ostataka",
    description:
      "Ekshumacija i prenos posmrtnih ostataka u Srbiji i iz inostranstva: šta propisuje zakon, ko izdaje odobrenje, kako teče postupak i od čega zavisi cena.",
    h1: "Ekshumacija i prenos posmrtnih ostataka",
    lead: "Ekshumacija je iskopavanje posmrtnih ostataka radi prenosa na drugo groblje, u drugi grad ili drugu zemlju. Za nju nije potrebna sudska odluka, već odobrenje lokalnih organa uz učešće sanitarne inspekcije. Organizujemo ceo postupak — od dozvola do ponovne sahrane.",
    sections: [
      {
        h: "Kada porodice odlučuju o ekshumaciji",
        p: [
          "Najčešći razlog je želja da preminuli počiva pored svojih najbližih — u porodičnoj grobnici, u rodnom mestu ili tamo gde porodica danas živi. Često se radi o ljudima koji su sahranjeni u inostranstvu, a porodica posle nekoliko godina želi da ih prenese u Srbiju, Bosnu i Hercegovinu ili Crnu Goru. Dešava se i da se posmrtni ostaci prenose unutar zemlje, iz jednog grada u drugi, kada se porodica preseli.",
          "Ekshumacija može biti potrebna i kada se groblje ili njegov deo stavlja van upotrebe, kada porodica želi kremaciju posle ranije sahrane ili kada je naredi sud ili tužilaštvo u nekom postupku. Ovaj poslednji slučaj je izuzetak i porodica ga ne pokreće sama.",
        ],
      },
      {
        h: "Ekshumacija i zakon: šta važi u Srbiji",
        p: [
          "Zakon o sahranjivanju i grobljima predviđa da se posmrtni ostaci mogu iskopati i preneti na drugo groblje uz prethodno odobrenje nadležnog opštinskog organa i organa sanitarne inspekcije, pod uslovom da je na drugom groblju obezbeđeno grobno mesto. U praksi odobrenje (rešenje) izdaje opštinski ili gradski organ uprave nadležan za komunalne poslove, a sama ekshumacija se obavlja u prisustvu sanitarnog inspektora.",
          "Zahtev se podnosi uz potvrdu upravljača groblja na kome je pokojnik sahranjen — u njoj se navode korisnik grobnog mesta, lokacija groba i datum sahrane. Bliža pravila, na primer u kom delu godine i u koje doba dana se ekshumacije obavljaju, propisuje lokalna odluka o grobljima, pa se razlikuju od grada do grada.",
          "Sud ili javno tužilaštvo nalažu ekshumaciju samo u sudskom ili krivičnom postupku, na primer radi veštačenja. Za uobičajen prenos na zahtev porodice sudska odluka nije potrebna — to je česta zabluda.",
        ],
      },
      {
        h: "Postupak ekshumacije korak po korak",
        p: [
          "Procedura je u većini opština slična. Zahtev obično podnosi korisnik grobnog mesta ili bliski srodnik, a mi ga pripremamo i vodimo uz njegovo ovlašćenje. Redosled koraka izgleda ovako:",
        ],
        list: [
          "obezbeđivanje novog grobnog mesta i potvrde groblja na kome će biti ponovna sahrana;",
          "potvrda upravljača sadašnjeg groblja o korisniku grobnog mesta, lokaciji groba i datumu sahrane;",
          "zahtev organu uprave za komunalne poslove i dobijanje rešenja o odobrenju ekshumacije;",
          "dogovor termina sa grobljem i sanitarnim inspektorom;",
          "ekshumacija u prisustvu sanitarnog inspektora i polaganje posmrtnih ostataka u nov sanduk;",
          "prevoz do novog groblja i ponovna sahrana, ili kremacija ako je porodica tako odlučila.",
        ],
        ordered: true,
      },
      {
        h: "Ekshumacija u inostranstvu i prenos u Srbiju ili region",
        p: [
          "Kada je pokojnik sahranjen u inostranstvu, ekshumacija se obavlja po propisima te zemlje. U Nemačkoj se, na primer, takav prenos naziva Umbettung: dozvolu izdaje, zavisno od pokrajine, Gesundheitsamt, opština ili Ordnungsamt, i to samo kada postoji opravdan razlog. Svaka zemlja ima svoja pravila o tome ko podnosi zahtev i ko mora da prisustvuje.",
          `Posle ekshumacije prevoz izgleda kao i svaki drugi međunarodni prevoz: potrebna je dozvola zemlje iz koje se ostaci iznose i dozvola zemlje sahrane — za Srbiju sprovodnica, a za Bosnu i Hercegovinu, Crnu Goru ili Severnu Makedoniju dozvola njihovog predstavništva. U zahtevu za sprovodnicu navodi se i da su posmrtni ostaci prethodno bili sahranjeni. Ostaci se prenose u hermetički zatvorenom sanduku propisanom za međunarodni prevoz, o čemu više piše na stranici ${a("/pogrebni-sanduci", "pogrebni sanduci")}.`,
        ],
      },
      {
        h: "Od čega zavisi cena ekshumacije",
        p: [
          "Cena ekshumacije se ne može odrediti bez osnovnih podataka, jer svaki slučaj izgleda drugačije. Kada nam opišete situaciju, dobijate tačnu cenu za ceo posao, od dozvola do ponovne sahrane. Na ukupan iznos najviše utiču:",
        ],
        list: [
          "lokacija — ekshumacija i ponovna sahrana u istom mestu, u drugom gradu ili u drugoj zemlji;",
          "vrsta groba — zemljani grob ili grobnica, kao i potreba da se ukloni i vrati spomenik ili ploča;",
          "takse opštine i naknade groblja na oba kraja;",
          "nov sanduk ili manji kovčeg, zavisno od stanja posmrtnih ostataka;",
          "dokumenta za inostranstvo, overe i prevodi;",
          "udaljenost i način prevoza do novog groba.",
        ],
      },
      {
        h: "Šta preuzimamo mi",
        p: [
          "Porodica ne mora da obilazi šaltere niti da sama dogovara termine. Pripremamo zahtev i potrebne potvrde, pribavljamo rešenje, usklađujemo termin sa grobljem i sanitarnim inspektorom, obezbeđujemo sanduk i prevoz i dogovaramo ponovnu sahranu u novom mestu. Kod prenosa iz inostranstva pribavljamo i sva strana dokumenta i sprovodnicu.",
          `Ekshumacija je za porodicu emotivno težak trenutak, zato je obavljamo diskretno i sa punim poštovanjem prema pokojniku. Ako neko iz porodice želi da prisustvuje, to dogovaramo unapred. Opšte informacije o ovoj temi možete pročitati i u članku ${a("/blog-ekshumacija-i-prenos-umrle-osobe", "ekshumacija i prenos umrle osobe")}.`,
        ],
      },
    ],
    faqs: [
      {
        q: "Da li je za ekshumaciju potrebna sudska odluka?",
        a: "Ne, kada ekshumaciju traži porodica. Odobrenje izdaje opštinski ili gradski organ nadležan za komunalne poslove, a ekshumacija se obavlja u prisustvu sanitarnog inspektora. Sud ili tužilaštvo je nalažu samo kada je to potrebno u nekom postupku.",
      },
      {
        q: "Ko izdaje dozvolu za ekshumaciju u Srbiji?",
        a: "Rešenje izdaje organ uprave opštine ili grada nadležan za komunalne poslove. Uz zahtev se prilaže potvrda upravljača groblja o korisniku grobnog mesta, lokaciji groba i datumu sahrane, kao i dokaz da je obezbeđeno novo grobno mesto.",
      },
      {
        q: "Može li se ekshumacija obaviti u bilo koje doba godine?",
        a: "Ne uvek. Lokalne odluke o grobljima često ograničavaju ekshumacije na određeni deo godine i određeno doba dana. Pravila u konkretnom gradu proveravamo pre nego što predložimo termin.",
      },
      {
        q: "Koliko košta ekshumacija?",
        a: "Cena zavisi od lokacije groba i novog mesta sahrane, vrste groba, taksi opštine i groblja, sanduka i prevoza. Kada nam opišete slučaj, dobijate tačnu cenu za ceo postupak.",
      },
      {
        q: "Može li se pokojnik sahranjen u inostranstvu preneti u Srbiju?",
        a: "Može. Ekshumacija se obavlja po propisima zemlje u kojoj je grob, a za unos u Srbiju potrebna je sprovodnica. Za Bosnu i Hercegovinu, Crnu Goru i Severnu Makedoniju dozvolu izdaje predstavništvo te zemlje.",
      },
    ],
    relatedLinks: [
      { href: "/blog-ekshumacija-i-prenos-umrle-osobe", title: "Blog: ekshumacija i prenos umrle osobe" },
      { href: "/dokumentacija-za-prevoz-pokojnika", title: "Dokumentacija i sprovodnica" },
      { href: "/pogrebni-sanduci", title: "Pogrebni sanduci za međunarodni prevoz" },
      { href: "/repatrijacija-pokojnika", title: "Repatrijacija pokojnika" },
    ],
  },
  {
    slug: "repatrijacija-pokojnika",
    title: "Repatrijacija pokojnika iz inostranstva",
    description:
      "Repatrijacija pokojnika iz cele Evrope u Srbiju, BiH, Crnu Goru i Severnu Makedoniju: dokumenta, prevoz kombijem ili avionom i šta porodica treba da uradi.",
    h1: "Repatrijacija pokojnika",
    lead: "Repatrijacija je prevoz pokojnika iz inostranstva u zemlju porekla, radi sahrane među svojima. Organizujemo prevoz pokojnika iz inostranstva u Srbiju, Bosnu i Hercegovinu, Crnu Goru i Severnu Makedoniju — sa svim dokumentima, pripremom i prevozom, a porodica sve vreme ima jednu kontakt osobu.",
    sections: [
      {
        h: "Šta obuhvata repatrijacija pokojnika",
        p: [
          "Kada neko premine daleko od kuće, porodica se suočava sa nepoznatim jezikom, ustanovama i propisima. Repatrijacija spaja sve što je potrebno da se pokojnik dostojanstveno vrati: preuzimanje iz bolnice, doma ili stana, pripremu i polaganje u sanduk, dokumenta zemlje u kojoj je nastupila smrt, dozvolu zemlje sahrane, sam prevoz i predaju porodici ili pogrebnoj službi u mestu sahrane.",
          "Najčešće je reč o ljudima koji su godinama živeli i radili u inostranstvu, ali i o onima koji su preminuli na putovanju, u poseti rodbini ili na lečenju. Postupak je isti i kada je pokojnik kremiran — tada se prevozi urna, uz sopstvenu dozvolu.",
        ],
      },
      {
        h: "Odredišta: Srbija, BiH, Crna Gora i Severna Makedonija",
        p: [
          "Pokojnika dovozimo do bilo kog mesta u Srbiji, u Bosni i Hercegovini — i u Republici Srpskoj i u Federaciji BiH — u Crnoj Gori i u Severnoj Makedoniji. Za svaku od ovih zemalja važi posebna dozvola za unos: u Srbiji sprovodnica, a u ostalim zemljama dozvola njihove ambasade ili konzulata. Za BiH se uz zahtev prilaže i obrazac koji zavisi od toga da li je sahrana u Federaciji BiH, Republici Srpskoj ili Brčko distriktu.",
          "Udaljenosti su različite, pa se i put planira drugačije: iz Minhena do Banje Luke ima oko 730 km, iz Beča do Sarajeva oko 740 km, iz Frankfurta do Podgorice oko 1.570 km, a iz Štutgarta do Skoplja oko 1.610 km. Kada put do treće zemlje vodi preko Srbije, kao što je čest slučaj kod prevoza u Severnu Makedoniju, pribavljamo i tranzitnu sprovodnicu.",
        ],
      },
      {
        h: "Zemlje iz kojih organizujemo prevoz pokojnika iz inostranstva",
        p: [
          `Prevoz organizujemo iz cele Evrope. Za sledeće zemlje imamo posebne stranice sa dokumentima, nadležnim predstavništvima i udaljenostima: ${a("/nemacka", "Nemačka")}, ${a("/austrija", "Austrija")}, ${a("/svajcarska", "Švajcarska")}, ${a("/italija", "Italija")}, ${a("/francuska", "Francuska")}, ${a("/spanija", "Španija")}, ${a("/svedska", "Švedska")}, ${a("/danska", "Danska")}, ${a("/norveska", "Norveška")}, ${a("/hrvatska", "Hrvatska")}, ${a("/crna-gora", "Crna Gora")} i ${a("/grcka", "Grčka")}.`,
          `Za veće gradove postoje i zasebne stranice, na primer ${a("/bec", "Beč")}, ${a("/munchen", "Minhen")}, ${a("/frankfurt", "Frankfurt")}, ${a("/berlin", "Berlin")}, ${a("/cirih", "Cirih")} i ${a("/rim", "Rim")}. Ako zemlje iz koje vam je potreban prevoz nema na spisku — na primer Holandija, Belgija ili Slovenija — pozovite nas, jer je postupak u suštini isti.`,
        ],
      },
      {
        h: "Prevoz kombijem ili avionom",
        p: [
          "Iz većine evropskih zemalja prevoz se obavlja drumom, specijalizovanim pogrebnim vozilom. Prednost je prevoz od vrata do vrata: pokojnika preuzimamo u mestu smrti i dovozimo direktno do mesta sahrane, bez pretovara i bez čekanja na aerodromu. Stvarno vreme puta duže je od čiste vožnje, jer su propisani odmori vozača obavezni.",
          `Avion dolazi u obzir kod velikih udaljenosti — od Madrida do Beograda ima oko 2.570 km, odnosno oko 27 sati čiste vožnje — ili kada je sahrana hitna. Tada su potrebni rezervacija avio-tereta, posebna ambalaža za sanduk i prevoz do aerodroma i od njega, pa ukupna ušteda vremena nije uvek velika. Oba načina detaljno smo uporedili u članku ${a("/blog-prevoz-pokojnika-avionom-vs-kombijem", "prevoz pokojnika avionom ili kombijem")}.`,
        ],
      },
      {
        h: "Pravni okvir repatrijacije",
        p: [
          "Svaki međunarodni prevoz posmrtnih ostataka mora da ispuni propise dve zemlje. Zemlja u kojoj je nastupila smrt izdaje dozvolu za izlazak — u Nemačkoj i Austriji Leichenpass, u Italiji passaporto mortuario, u Francuskoj dozvola prefekture — a zemlja sahrane dozvolu za unos. Međunarodni sporazumi pritom propisuju kakav sanduk mora biti i koja dokumenta prate pokojnika.",
          `Pri izlasku iz Švajcarske obavljaju se i carinske formalnosti, jer ona nije članica EU, a na granici zemlje sahrane pokazuje se dozvola za unos. Kod nasilne ili neprirodne smrti dozvole se izdaju tek kada tužilaštvo odobri preuzimanje. Detaljnije o zakonskoj strani piše u članku ${a("/blog-repatrijacija-pokojnika-pravni-aspekti", "repatrijacija pokojnika — pravni aspekti")}, a spisak papira po zemljama nalazi se na stranici ${a("/dokumentacija-za-prevoz-pokojnika", "dokumentacija za prevoz pokojnika")}.`,
        ],
      },
      {
        h: "Šta porodica treba da uradi",
        p: [
          "Vrlo malo, i upravo je to smisao naše usluge. Dovoljan je jedan poziv, u bilo koje doba dana ili noći. Treba nam ime pokojnika, mesto smrti i ustanova u kojoj se nalazi, mesto gde želite sahranu i kopija pasoša ili lične karte, ako je imate. Kada je potrebno, šaljemo vam i ovlašćenje na potpis.",
          `Sve ostalo radimo mi: razgovaramo sa bolnicom, matičnom službom i lokalnim organima — u nemačkom govornom području na nemačkom — pribavljamo sprovodnicu ili dozvolu druge zemlje, pripremamo pokojnika i organizujemo prevoz. Porodica za to vreme može da se posveti pripremi sahrane kod kuće. Iz Austrije ceo postupak najčešće traje 1–3 dana, iz Nemačke 2–4, a iz Švedske 4–7 dana. Tačnu cenu dobijate već u prvom razgovoru, a od čega ona zavisi, objašnjeno je na stranici ${a("/cenovnik", "cenovnik")}.`,
        ],
      },
    ],
    faqs: [
      {
        q: "Koliko traje repatrijacija pokojnika?",
        a: "Zavisi od zemlje i od toga koliko brzo lokalni organi izdaju dokumenta. Za Austriju najčešće računamo 1–3 dana, za Nemačku, Švajcarsku i Italiju 2–4, za Španiju 4–6, a za Švedsku 4–7 dana. Obdukcija, praznici ili čekanje na dozvolu tužilaštva mogu taj rok produžiti.",
      },
      {
        q: "Da li prevozite pokojnike u Republiku Srpsku i Federaciju BiH?",
        a: "Da, u sva mesta u Bosni i Hercegovini. Dozvolu za unos izdaje ambasada ili konzulat BiH, a obrazac koji se prilaže zavisi od toga da li je sahrana u Republici Srpskoj, Federaciji BiH ili Brčko distriktu. Sve to pribavljamo mi.",
      },
      {
        q: "Šta ako pokojnik nije imao srpsko državljanstvo?",
        a: "Repatrijacija je i tada moguća. Za sahranu u Srbiji predstavništvo, pored uobičajenih dokumenata, traži potvrdu da je obezbeđeno grobno mesto u Srbiji. Za druge zemlje regiona važe pravila njihovih predstavništava.",
      },
      {
        q: "Da li je prevoz avionom brži?",
        a: "Ne uvek. Let je kratak, ali avion zahteva rezervaciju avio-tereta, aerodromske procedure i prevoz do aerodroma i od njega. Iz susednih i srednjoevropskih zemalja kombi često stiže podjednako brzo, dok se avion više isplati kod velikih udaljenosti.",
      },
      {
        q: "Možete li da organizujete prevoz iz zemlje koje nema na sajtu?",
        a: "Možemo. Prevoz organizujemo iz cele Evrope, a dokumenta su u svakoj zemlji slična: potvrda o smrti, izvod, dozvola za prevoz i dozvola zemlje sahrane. Pozovite nas i već u prvom razgovoru saznaćete šta je potrebno.",
      },
    ],
    relatedLinks: [
      { href: "/blog-repatrijacija-pokojnika-pravni-aspekti", title: "Blog: pravni aspekti repatrijacije" },
      { href: "/dokumentacija-za-prevoz-pokojnika", title: "Dokumentacija za prevoz pokojnika" },
      { href: "/blog-sta-raditi-kada-neko-umre-u-inostranstvu", title: "Šta raditi kada neko umre u inostranstvu" },
      { href: "/blog-prevoz-pokojnika-avionom-vs-kombijem", title: "Prevoz avionom ili kombijem" },
      { href: "/cenovnik", title: "Cenovnik" },
    ],
  },
];
