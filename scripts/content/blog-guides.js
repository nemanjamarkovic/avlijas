/** General guide blog posts — rendered by renderBlogPost() in scripts/build-site.js. */

const link = (href, text) => `<a href="${href}" class="text-primary">${text}</a>`;
const MFA_LINK =
  '<a href="https://mfa.gov.rs/en/citizens/services/transport-human-remains" target="_blank" rel="noopener noreferrer" class="text-primary">Ministarstva spoljnih poslova Republike Srbije</a>';

module.exports = [
  {
    slug: "blog-sta-raditi-kada-neko-umre-u-inostranstvu",
    title: "Šta raditi kada neko umre u inostranstvu | Transport pokojnika",
    description:
      "Prvih 48 sati posle smrti bliske osobe u inostranstvu: koga pozvati, šta ne potpisivati, koja dokumenta sačuvati i kako organizovati prevoz kući.",
    h1: "Šta raditi kada neko umre u inostranstvu — prvih 48 sati",
    lead: "Vest o smrti bliske osobe koja je živela ili boravila u inostranstvu obično stiže telefonom, u najnezgodnijem trenutku, i odmah otvara niz pitanja na koja porodica nema odgovor. Ovaj vodič je napisan za prvih 48 sati: šta uraditi odmah, šta može da sačeka, šta ne treba potpisivati i kako se pokojnik vraća na sahranu u Srbiju, Bosnu i Hercegovinu, Crnu Goru ili Severnu Makedoniju.",
    date: "2026-08-05",
    updated: "2026-10-19",
    readTime: "8 min čitanja",
    sections: [
      {
        h: "Prvi sati: ko konstatuje smrt i gde se pokojnik nalazi",
        p: [
          "Sve dalje radnje počinju od jednog papira — lekarske potvrde o smrti. Ako je smrt nastupila u bolnici ili domu za stare, potvrdu izdaje dežurni lekar, a pokojnik ostaje u bolničkoj mrtvačnici dok ga ne preuzme pogrebno preduzeće. Porodica tada ne mora ništa da preduzima noću; dovoljno je da sazna u kojoj se ustanovi pokojnik nalazi i ko je kontakt osoba na odeljenju.",
          "Ako je osoba preminula kod kuće, pozovite jedinstveni evropski broj za hitne slučajeve 112, koji radi u celoj Evropskoj uniji. Lekar mora da pregleda telo i popuni potvrdu: u Nemačkoj se taj pregled zove Leichenschau, a dokument Todesbescheinigung, dok u Austriji pregled obavlja mrtvozornik (Totenbeschau). Do dolaska lekara pokojnika ne pomerajte i ne presvlačite.",
          "Kod saobraćajne nesreće, nesreće na poslu ili nejasnih okolnosti slučaj preuzima policija. Telo se tada često prevozi na sudsko-medicinski pregled, a pogrebno preduzeće može da ga preuzme tek kada tužilaštvo izda odobrenje. To je uobičajen postupak i ne znači da je porodica nešto propustila.",
        ],
      },
      {
        h: "Koga obavestiti i kojim redom",
        p: [
          "Pre nego što počnete da zovete institucije, odredite jednu osobu u porodici koja će voditi razgovore i čuvati sve informacije na jednom mestu. Kada više rođaka istovremeno zove istu bolnicu i isti konzulat, podaci se brzo pomešaju, a službenici nerado daju informacije osobama čiji identitet ne mogu da provere.",
          "Konzularno predstavništvo države u kojoj će biti sahrana treba obavestiti rano, ali imajte u vidu šta ono radi: ambasada ili konzulat izdaje dozvolu za unos posmrtnih ostataka (za Srbiju je to sprovodnica) i daje informacije, ali ne organizuje i ne plaća prevoz. Nadležna je misija za poslednje mesto prebivališta pokojnika, a ne nužno ona koja je najbliža porodici.",
          "Ako je pokojnik bio na putovanju, odmah potražite polisu putnog osiguranja. Mnoge polise pokrivaju repatrijaciju, ali osiguravač po pravilu traži da bude obavešten pre nego što se bilo kakav trošak ugovori. Isto proverite i za osiguranja vezana za platne kartice ili za posao u inostranstvu.",
          `Poslednji, ali presudan poziv je pogrebnom preduzeću koje se bavi međunarodnim prevozom. Ono preuzima komunikaciju sa bolnicom, matičnom službom i konzulatom, pa porodica ne mora da zna strani jezik niti lokalne propise. Kako da prepoznate ozbiljnu ponudu objasnili smo u tekstu ${link("/blog-kako-izabrati-pogrebno-preduzece", "kako izabrati pogrebno preduzeće")}.`,
        ],
      },
      {
        h: "Šta ne treba potpisivati u prvim satima",
        p: [
          "Bolnice i domovi za stare često sarađuju sa nekim lokalnim pogrebnim preduzećem i porodici odmah predlože da ga pozovu. U tome nema ničeg spornog, ali lokalno preduzeće najčešće obavlja samo preuzimanje i čuvanje, a ne prevoz preko granice. Ako potpišete nalog njemu, a zatim angažujete drugo preduzeće za međunarodni prevoz, plaćate dve usluge i gubite vreme na primopredaju.",
          "Ako ste nešto već potpisali, nema razloga za paniku: pošaljite nam fotografiju dokumenta i zajedno ćemo proveriti šta on znači za dalji tok. Do tada budite oprezni sa sledećim:",
        ],
        list: [
          "ugovor ili nalog lokalnom pogrebnom preduzeću, pre nego što znate ko će obaviti prevoz do mesta sahrane",
          "saglasnost za kremaciju, ako porodica još nije zajednički odlučila — kremacija se ne može poništiti",
          "dokument na jeziku koji ne razumete; tražite prevod ili ga pošaljite nama, pa ćemo ga pročitati sa vama",
          "potvrdu o preuzimanju ličnih stvari bez spiska onoga što ste stvarno dobili",
          "bilo kakvu uplatu u gotovini bez računa ili pisane potvrde",
        ],
      },
      {
        h: "Dokumenta koja treba sačuvati i pripremiti",
        p: [
          "Za upis smrti u inostranstvu i za sam prevoz potrebno je nekoliko ličnih dokumenata. Najvažniji je pasoš pokojnika: sprovodnica se izdaje na osnovu originala, pa ga nemojte slati poštom niti predavati bilo kome bez potvrde. Ako je pasoš istekao ili se ne može pronaći, javite to odmah, kako bi se sa nadležnom misijom na vreme dogovorilo kako dalje.",
          "U Nemačkoj matična služba (Standesamt) za upis smrti obično traži i izvod iz matične knjige rođenih, a za osobe koje su bile u braku i izvod iz matične knjige venčanih. Za osobe rođene u inostranstvu prihvata se višejezični međunarodni izvod bez prevoda ili nacionalni izvod sa prevodom na nemački. Ako se ti izvodi nalaze kod rodbine u Srbiji ili BiH, dobro je da ih odmah pronađete.",
        ],
        list: [
          "pasoš i lična karta pokojnika, u originalu",
          "izvod iz matične knjige rođenih i, ako je osoba bila u braku, venčanih",
          "potvrda o prijavi prebivališta u inostranstvu, ako postoji",
          "medicinska dokumentacija i otpusne liste iz bolnice",
          "polisa putnog ili životnog osiguranja",
          "podaci o groblju i grobnom mestu u zemlji sahrane",
        ],
      },
      {
        h: "Sahrana kod kuće ili kremacija u inostranstvu",
        p: [
          "Mnoge porodice žele da pokojnik počiva u rodnom mestu, pored svojih predaka. U tom slučaju telo se smešta u hermetički zatvoren sanduk propisan za međunarodni prevoz i vozi specijalizovanim pogrebnim vozilom ili, kod velikih udaljenosti, avionom. Potrebna su dokumenta zemlje u kojoj je nastupila smrt i dozvola države u kojoj će biti sahrana.",
          "Druga mogućnost je kremacija u zemlji smrti i prenos urne. I za urnu se traži sprovodnica, uz potvrdu o kremaciji, ali je sam prevoz jednostavniji. U Nemačkoj se pre kremacije u gotovo svim pokrajinama obavlja i druga, službena lekarska provera (zweite Leichenschau), pa ovaj put ne mora biti brži od prevoza tela.",
          "Odluka pripada porodici i treba da poštuje želju pokojnika i veru u kojoj je živeo. Ako niste sigurni, ne žurite sa potpisom: nekoliko sati razmišljanja neće ugroziti organizaciju, a odluka o kremaciji se kasnije ne može promeniti.",
        ],
      },
      {
        h: "Sahrana u Srbiji, BiH, Crnoj Gori ili Severnoj Makedoniji",
        p: [
          `Koju dozvolu treba pribaviti zavisi od toga gde će biti sahrana. Za sahranu u Srbiji sprovodnicu izdaje ambasada ili konzulat Srbije nadležan za poslednje prebivalište pokojnika; šta se sve prilaže objasnili smo u vodiču ${link("/blog-sprovodnica-za-prenos-posmrtnih-ostataka", "sprovodnica za prenos posmrtnih ostataka")}. Ako pokojnik nije bio državljanin Srbije, a sahranjuje se u Srbiji, traži se i potvrda da je obezbeđeno grobno mesto.`,
          "Kada je sahrana u Bosni i Hercegovini, Crnoj Gori ili Severnoj Makedoniji, dozvolu za unos izdaje predstavništvo te države. Za BiH je bitno i da li je mesto sahrane u Federaciji BiH, Republici Srpskoj ili Brčko distriktu, jer se uz zahtev prilažu različiti obrasci namenjeni zdravstvenim organima.",
          "Udaljenosti se mnogo razlikuju i utiču na trajanje: od Beča do Banja Luke ima oko 550 km, od Štutgarta do Sarajeva oko 1180 km, od Minhena do Podgorice oko 1170 km, a od Hamburga do Skoplja oko 1970 km. Obavezni odmori vozača čine da stvarno putovanje traje duže od čiste vožnje.",
        ],
      },
      {
        h: "Kontrolna lista za prvih 48 sati",
        ordered: true,
        p: ["Ako vam je lakše da radite korak po korak, sačuvajte ovaj spisak i obeležavajte ono što je završeno."],
        list: [
          "Saznajte gde se pokojnik nalazi i ko je izdao lekarsku potvrdu o smrti.",
          "Odredite jednu osobu iz porodice za sve razgovore i beleške.",
          "Proverite putno ili drugo osiguranje i obavestite osiguravača pre ugovaranja troškova.",
          "Ne potpisujte nalog lokalnom pogrebnom preduzeću dok ne odlučite ko obavlja prevoz preko granice.",
          "Pronađite pasoš pokojnika i ostala lična dokumenta i držite originale kod sebe.",
          "Dogovorite se u porodici: sahrana ili kremacija, i u kom mestu.",
          "Sa upravom groblja proverite grobno mesto, ali datum sahrane potvrdite tek kada znate kada pokojnik kreće.",
          "Pozovite preduzeće za međunarodni prevoz i pošaljite fotografije dokumenata.",
          "Potpišite punomoćje kako bi preduzeće moglo da podnosi zahteve u ime porodice.",
          "Tražite pisanu ponudu sa spiskom svega što je uključeno.",
        ],
      },
    ],
    faqs: [
      {
        q: "Da li ambasada organizuje i plaća prevoz pokojnika?",
        a: "Ne. Ambasada ili konzulat izdaje dozvolu za unos posmrtnih ostataka i može da pruži informacije o postupku, ali sam prevoz organizuje porodica preko pogrebnog preduzeća. Troškove snosi porodica, osim ako ih ne pokriva osiguranje pokojnika.",
      },
      {
        q: "Da li neko iz porodice mora da otputuje u zemlju u kojoj je osoba preminula?",
        a: "U većini slučajeva ne mora. Zahtev za sprovodnicu može da podnese član porodice ili ovlašćeno pogrebno preduzeće, a dokumenta u inostranstvu preduzeće pribavlja na osnovu punomoćja. Policija ili bolnica ponekad traže prisustvo rodbine radi identifikacije, pa se unapred dogovaramo šta je u vašem slučaju zaista neophodno.",
      },
      {
        q: "Koliko traje dok pokojnik ne stigne kući?",
        a: "Zavisi od zemlje i okolnosti. Orijentaciono, iz Austrije ceo postupak najčešće traje od jednog do tri dana, iz Nemačke i Švajcarske od dva do četiri, a iz Švedske od četiri do sedam dana, jer se tamošnja dokumenta overavaju apostilom i prevode. Obdukcija, vikend ili praznik produžavaju rok.",
      },
      {
        q: "Šta ako je smrt nastupila noću ili za vikend?",
        a: "Lekarski pregled i preuzimanje pokojnika obavljaju se u svako doba, a mi smo dostupni 24/7, pa organizaciju možemo da počnemo odmah. Matične službe i konzulati rade radnim danima, tako da se dokumenta koja oni izdaju pribavljaju prvog sledećeg radnog dana.",
      },
      {
        q: "Možemo li sami da prevezemo pokojnika svojim vozilom?",
        a: "Ne. Srpski pravilnik o postupanju sa posmrtnim ostacima predviđa prevoz pogrebnim vozilom sa posebnom opremom, avionom, brodom ili železničkim vagonom, a za prelazak granice potrebni su sanduk propisan za međunarodni prevoz i dozvole obe države.",
      },
    ],
    relatedLinks: [
      { href: "/blog-sprovodnica-za-prenos-posmrtnih-ostataka", title: "Sprovodnica za prenos posmrtnih ostataka" },
      { href: "/blog-hitni-prevoz-pokojnika-sta-treba-znati", title: "Hitni prevoz pokojnika — šta treba znati" },
      { href: "/dokumentacija-za-prevoz-pokojnika", title: "Dokumentacija za prevoz pokojnika" },
      { href: "/repatrijacija-pokojnika", title: "Repatrijacija pokojnika" },
      { href: "/blog-kako-izabrati-pogrebno-preduzece", title: "Kako izabrati pogrebno preduzeće" },
    ],
  },

  {
    slug: "blog-hitni-prevoz-pokojnika-sta-treba-znati",
    title: "Hitni prevoz pokojnika — šta treba znati | Transport pokojnika",
    description:
      "Hitni prevoz pokojnika iz inostranstva: šta se može ubrzati, šta zavisi od matičnih službi, tužilaštva i konzulata i koji su realni rokovi po zemljama.",
    h1: "Hitni prevoz pokojnika — šta se može ubrzati, a šta ne",
    lead: "Kada porodica želi sahranu što pre, prvo pitanje je obično koliko brzo vozilo može da krene. Vozilo, međutim, retko određuje tempo — rok diktiraju dokumenta koja izdaju lekar, matična služba, nadležni organi i konzulat. Ovde objašnjavamo gde se vreme zaista može uštedeti, gde ne može i kako porodica može da pomogne da pokojnik što pre stigne kući.",
    date: "2025-12-20",
    updated: "2026-10-19",
    readTime: "6 min čitanja",
    sections: [
      {
        h: "Zašto se pokojnik ne može prevesti za nekoliko sati",
        p: [
          "Međunarodni prevoz posmrtnih ostataka je lanac koraka u kome svaki zavisi od prethodnog. Prvo lekar izdaje potvrdu o smrti, zatim matična služba upisuje smrt i izdaje izvod, potom nadležni organ izdaje dozvolu za prevoz preko granice (u Nemačkoj i Austriji to je Leichenpass), a tek na osnovu svih tih originala konzulat izdaje sprovodnicu ili dozvolu za unos.",
          "Paralelno sa papirima pokojnik se oprema i smešta u hermetički zatvoren sanduk propisan za međunarodni prevoz, a vozilo i vozači se raspoređuju. Ti fizički poslovi mogu se završiti brzo. Zato je pravo pitanje u svakom hitnom slučaju: kada će poslednji potreban dokument biti u rukama?",
        ],
      },
      {
        h: "Šta se zaista može ubrzati",
        p: ["Na brzinu najviše utiče to koliko se rano krene i koliko se poslova obavlja istovremeno. U praksi se vreme štedi na sledećim mestima:"],
        list: [
          "<strong>Rano angažovanje:</strong> što pre preduzeće dobije podatke, pre počinje komunikacija sa bolnicom i matičnom službom.",
          "<strong>Skenirana dokumenta:</strong> fotografije pasoša, lične karte i izvoda iz matičnih knjiga šalju se odmah, a originali stižu kasnije.",
          "<strong>Punomoćje:</strong> preduzeće sa punomoćjem samo podnosi zahteve, bez čekanja da član porodice dođe na šalter.",
          "<strong>Odluke porodice:</strong> mesto sahrane, groblje i izbor između sanduka i urne treba da budu poznati od početka.",
          "<strong>Istovremeni rad:</strong> dok se čeka izvod iz matične knjige, priprema se sanduk, a zahtev za sprovodnicu sastavlja se unapred.",
          "<strong>Izbor prevoza:</strong> za veće udaljenosti na vreme se procenjuje da li je avion stvarno brži od kombija.",
        ],
      },
      {
        h: "Šta se ne može ubrzati",
        p: [
          "Matične službe u inostranstvu — Standesamt u Nemačkoj i Austriji, Comune u Italiji, Registro Civil u Španiji — rade radnim danima i u svom radnom vremenu. Ni porodica ni pogrebno preduzeće ne mogu da ih nateraju da dokument izdaju van tog vremena. U Nemačkoj je zakonski rok za prijavu smrti najkasnije treći radni dan posle smrti, ali je za brz prevoz važno da se prijava obavi prvog mogućeg dana.",
          "Konzularna odeljenja takođe imaju radno vreme, a za mnoge usluge traže prethodno zakazivanje. Sprovodnica se izdaje na osnovu originalnih dokumenata, pa zahtev mora biti kompletan; nedostatak jednog papira znači novi odlazak na šalter.",
          "Švajcarska nije članica EU, pa pri izlasku iz te zemlje treba računati i na carinske formalnosti. Dokumenti iz Švedske, Danske i Norveške moraju se overiti apostilom i prevesti na srpski, što takođe traži vreme koje se ne može preskočiti.",
        ],
      },
      {
        h: "Vikendi i praznici: smrt u petak popodne",
        p: [
          "Najčešća situacija u kojoj porodica izgubi nekoliko dana jeste smrt pred vikend. Ako osoba premine u petak posle podne, lekarski pregled i preuzimanje pokojnika obaviće se odmah, ali upis smrti i dozvola za prevoz po pravilu čekaju ponedeljak. Isto važi i za konzulat.",
          "Praznici prave dodatne razlike. U Nemačkoj se državni praznici delimično razlikuju od pokrajine do pokrajine, Veliki petak i Uskršnji ponedeljak su neradni dani, a Uskrs po gregorijanskom kalendaru često ne pada istog dana kao pravoslavni. Kada je sahrana u Srbiji, treba voditi računa i o praznicima u zemlji sahrane, jer i groblje mora da bude spremno da primi pokojnika.",
        ],
      },
      {
        h: "Obdukcija i odobrenje tužilaštva",
        p: [
          "Kada uzrok smrti nije prirodan ili nije jasan — nesreća, nasilje, iznenadna smrt bez poznatog uzroka — lekar to označava na potvrdi o smrti i slučaj prelazi u nadležnost policije i tužilaštva. U Nemačkoj se pokojnik tada ne može preuzeti bez odobrenja tužilaštva (Freigabe), a tužilaštvo može da naloži obdukciju. U Španiji je kod nasilne smrti potrebna i dozvola suda.",
          "Ovaj deo postupka ne može da ubrza niko izvan nadležnih organa, i to treba otvoreno reći porodici od samog početka. Pogrebno preduzeće može da bude u kontaktu sa nadležnima, sazna kada se odobrenje očekuje i pripremi sve ostalo, tako da prevoz krene čim pokojnik bude oslobođen.",
        ],
      },
      {
        h: "Realni rokovi po zemljama",
        p: [
          "Kada nema obdukcije i praznika, okviri za ceo postupak izgledaju ovako: iz Austrije najčešće od jednog do tri dana, iz Nemačke, Švajcarske i Italije od dva do četiri dana, iz Danske od tri do pet, iz Španije od četiri do šest, a iz Švedske od četiri do sedam dana.",
          "Sama vožnja je manji deo tog vremena. Od Beča do Beograda ima oko 620 km, odnosno oko šest sati čiste vožnje, od Minhena oko 940 km i oko deset sati, a od Hamburga oko 1540 km i oko 15 sati. Zakonom propisani odmori vozača dodatno produžavaju put u odnosu na te brojke.",
          `Relacije za pojedine gradove navedene su na stranicama za ${link("/nemacka", "Nemačku")}, ${link("/austrija", "Austriju")} i ${link("/svajcarska", "Švajcarsku")}.`,
        ],
      },
      {
        h: "Kako porodica može da pomogne da prevoz krene ranije",
        ordered: true,
        p: ["Najviše vremena obično se izgubi dok se čeka neki podatak ili potpis iz porodice. Sledeći koraci pomažu da do toga ne dođe:"],
        list: [
          "Odredite jednu osobu koja je dostupna na telefonu i donosi odluke u ime porodice.",
          "Pošaljite fotografiju pasoša pokojnika istog dana, a original pripremite za predaju.",
          "Pronađite izvode iz matičnih knjiga rođenih i venčanih, ako ih matična služba u inostranstvu traži.",
          "Potvrdite mesto sahrane i, za strane državljane, pribavite potvrdu groblja o grobnom mestu.",
          "Potpišite punomoćje čim ga dobijete i vratite ga skenirano.",
          "Ne menjajte odluku usred postupka — prelazak sa sahrane na kremaciju ili promena mesta sahrane vraća deo dokumenata na početak.",
          "Sa sveštenikom i upravom groblja dogovorite okvirni termin, a konačni datum potvrdite kada vozilo krene.",
        ],
      },
    ],
    faqs: [
      {
        q: "Može li pokojnik stići kući za 24 sata?",
        a: "Retko, i samo kada se poklopi više uslova: kratka relacija (na primer iz Beča ili Graca), smrt radnim danom ujutru, prirodan uzrok smrti bez obdukcije i konzulat koji može da primi zahtev istog dana. Posle prvog razgovora reći ćemo vam iskreno da li je to u vašem slučaju realno.",
      },
      {
        q: "Da li je avion brži kada je prevoz hitan?",
        a: `Ne uvek. Za avion su potrebni dodatni dokumenti, rezervacija teretnog prostora i drumski prevoz do aerodroma i od aerodroma, pa je na srednjim relacijama kombi često jednako brz ili brži. Poređenje smo objasnili u tekstu ${link("/blog-prevoz-pokojnika-avionom-vs-kombijem", "prevoz pokojnika avionom ili kombijem")}.`,
      },
      {
        q: "Šta ako je sahrana već zakazana, a dokumenta kasne?",
        a: "Javite to upravi groblja i svešteniku što ranije. Zato i savetujemo da se konačni datum potvrđuje tek kada je poznato kada vozilo polazi: okvirni termin se lako pomeri, a otkazana sahrana dodatno opterećuje porodicu.",
      },
      {
        q: "Da li radite vikendom i praznicima?",
        a: "Da, dostupni smo 24/7, a preuzimanje pokojnika, priprema i sam prevoz organizuju se i vikendom. Ograničenje su institucije koje izdaju dokumenta, jer one u većini zemalja ne rade vikendom i praznicima.",
      },
      {
        q: "Od čega zavisi cena hitnog prevoza?",
        a: `Cena zavisi od udaljenosti, vrste sanduka, dokumenata koje treba pribaviti i načina prevoza. Tačnu cenu dobijate u prvom razgovoru, kada znamo grad, mesto sahrane i okolnosti, a opšti okvir je objašnjen na stranici ${link("/cenovnik", "cenovnik")}.`,
      },
    ],
    relatedLinks: [
      { href: "/blog-sta-raditi-kada-neko-umre-u-inostranstvu", title: "Šta raditi kada neko umre u inostranstvu" },
      { href: "/blog-prevoz-pokojnika-avionom-vs-kombijem", title: "Prevoz pokojnika avionom ili kombijem" },
      { href: "/blog-sprovodnica-za-prenos-posmrtnih-ostataka", title: "Sprovodnica za prenos posmrtnih ostataka" },
      { href: "/bec", title: "Prevoz pokojnika iz Beča" },
      { href: "/contact", title: "Kontakt — dostupni 24/7" },
    ],
  },

  {
    slug: "blog-kako-izabrati-pogrebno-preduzece",
    title: "Kako izabrati pogrebno preduzeće za prevoz | Transport pokojnika",
    description:
      "Kako izabrati pogrebno preduzeće za prevoz pokojnika iz inostranstva: pitanja za prvi razgovor, šta mora da sadrži pisana ponuda i znaci upozorenja.",
    h1: "Kako izabrati pogrebno preduzeće za prevoz pokojnika iz inostranstva",
    lead: "Pogrebno preduzeće se obično bira u roku od nekoliko sati, preko telefona i bez mogućnosti poređenja kakvu inače imamo pri većim odlukama. Ova lista pitanja i znakova upozorenja pomaže da i pod pritiskom prepoznate preduzeće koje će prevoz preko granice zaista završiti onako kako je dogovoreno.",
    date: "2025-12-20",
    updated: "2026-10-19",
    readTime: "6 min čitanja",
    sections: [
      {
        h: "Zašto međunarodni prevoz traži drugačije preduzeće",
        p: [
          "Lokalna sahrana i prevoz iz inostranstva su dva različita posla. Kod međunarodnog prevoza preduzeće mora da poznaje propise zemlje u kojoj je nastupila smrt, da komunicira sa tamošnjom bolnicom i matičnom službom, da pribavi dozvolu za prevoz preko granice i dozvolu države sahrane, i da obezbedi sanduk i vozilo koji ispunjavaju uslove za takav prevoz.",
          "Uz to, relacije su duge: od Frankfurta do Beograda ima oko 1290 km, a od Ciriha oko 1250 km. Preduzeće koje inače radi samo u svom gradu možda nema ni iskustva ni organizaciju za takav put, pa posao prepušta nekom drugom, a porodica za to ne zna.",
        ],
      },
      {
        h: "Pitanja za prvi razgovor",
        p: ["Prvi telefonski razgovor govori mnogo. Ozbiljno preduzeće postavlja pitanja pre nego što izgovori cenu, a na vaša pitanja odgovara konkretno. Zapišite odgovore na sledeća pitanja:"],
        list: [
          "Da li ste već organizovali prevoz iz ove zemlje i ovog grada?",
          "Ko fizički preuzima pokojnika — vaš tim ili lokalni partner, i ko za to odgovara?",
          "Koja dokumenta pribavljate vi, a šta treba da uradi porodica?",
          "Koliko postupak realno traje i šta može da ga produži?",
          "Ko će biti naša kontakt osoba i kako da je dobijemo noću?",
          "Da li pokojnik putuje istim vozilom do mesta sahrane ili se negde pretovara?",
          "Šta je tačno uključeno u cenu, a šta se plaća posebno?",
          "Kada i kako se plaća i da li dobijamo račun?",
        ],
      },
      {
        h: "Pisana ponuda: šta mora da bude navedeno",
        p: [
          "Usmeni dogovor u stresnoj situaciji lako se pogrešno zapamti. Tražite ponudu poslatu porukom ili mejlom, sa punim nazivom preduzeća i spiskom stavki. Ponuda ne mora da bude dugačka, ali mora da bude jasna i da pokriva ceo put, od preuzimanja do mesta sahrane:",
        ],
        list: [
          "preuzimanje pokojnika sa tačne adrese — iz bolnice, doma, stana ili sa sudske medicine",
          "opremanje i smeštanje u hermetički zatvoren sanduk propisan za međunarodni prevoz",
          "pribavljanje stranih dokumenata, dozvole za prevoz i sprovodnice ili dozvole države sahrane",
          "takse, overe i prevode, uključujući apostil kada je potreban",
          "prevoz do mesta sahrane u Srbiji, BiH, Crnoj Gori ili Severnoj Makedoniji",
          "carinske formalnosti kada se pokojnik prevozi iz zemlje van EU, kao što je Švajcarska",
          "šta ponuda ne obuhvata — na primer troškove groblja, opela ili cveća",
        ],
      },
      {
        h: "Znaci upozorenja",
        p: ["Nijedan od ovih znakova sam po sebi ne dokazuje da je preduzeće nepouzdano, ali ako primetite dva ili tri, zastanite i potražite drugo mišljenje:"],
        list: [
          "cena izgovorena odmah, bez pitanja o gradu, mestu sahrane i okolnostima smrti",
          "odbijanje da se ponuda pošalje u pisanom obliku",
          "fraza „sve je uključeno“ bez spiska šta to znači",
          "pritisak da se odluka donese ili ugovor potpiše odmah",
          "zahtev za celu uplatu unapred u gotovini, bez računa",
          "nedostaje pun naziv firme, adresa ili poreski broj",
          "obećan rok koji ne uzima u obzir obdukciju, vikend ili radno vreme konzulata",
          "recenzije bez imena i datuma, koje postoje samo na sajtu preduzeća",
        ],
      },
      {
        h: "Jezik, dostupnost i jedna kontakt osoba",
        p: [
          "Veliki deo posla odvija se na jeziku zemlje u kojoj je nastupila smrt: razgovori sa bolnicom, matičnom službom, gradskim organima i lokalnim pogrebnim službama. Preduzeće koje govori taj jezik dobija informacije neposredno, bez posrednika i nesporazuma. Naš tim govori nemački i sa institucijama na nemačkom govornom području komunicira direktno.",
          "Smrt ne bira radno vreme, pa preduzeće mora da bude dostupno i noću i vikendom — ne samo automatska sekretarica, već osoba koja zna stanje vašeg slučaja. Kod nas porodica ima jednu kontakt osobu od prvog poziva do sahrane, a dostupni smo 24/7.",
        ],
      },
      {
        h: "Kako proveriti preduzeće pre nego što ga angažujete",
        p: [
          "Svako registrovano preduzeće u Srbiji ima pun poslovni naziv, adresu sedišta, matični broj i poreski identifikacioni broj (PIB). Te podatke možete da proverite u javnom registru Agencije za privredne registre, na njenom sajtu. Ako preduzeće ne želi da ih navede, to je dovoljan razlog za oprez.",
          `Recenzije vrede kada se mogu proveriti: ocene na Google mapama sa imenom autora, datumom i odgovorom preduzeća govore više od citata bez potpisa. Iskustva porodica sa kojima smo radili objavljena su na stranici ${link("/testimonials", "utisci klijenata")}. Proverite i da li se broj telefona sa sajta poklapa sa brojem sa kog vas zovu i sa podacima u ponudi.`,
          "Pitajte i za vozilo. Srpski propisi predviđaju da se posmrtni ostaci prevoze pogrebnim vozilom koje ima posebnu opremu za tu namenu, a ne bilo kakvim teretnim kombijem.",
        ],
      },
      {
        h: "Šta se dešava kada izaberete preduzeće",
        p: [
          "Posle dogovora porodica obično potpisuje punomoćje i šalje fotografije dokumenata. Preduzeće tada preuzima komunikaciju sa institucijama, a porodica dobija vest o svakom završenom koraku: kada je smrt upisana, kada je izdata dozvola za prevoz, kada je sprovodnica gotova i kada vozilo kreće.",
          `Ako želite da unapred razumete troškove, pogledajte ${link("/cenovnik", "od čega zavisi cena prevoza")} i primer za Nemačku u tekstu ${link("/blog-koliko-kosta-prevoz-pokojnika-nemacka", "koliko košta prevoz pokojnika iz Nemačke")}.`,
        ],
      },
    ],
    faqs: [
      {
        q: "Da li je jeftinija ponuda lošija?",
        a: "Ne nužno. Ponude se mogu porediti tek kada znate šta svaka obuhvata: ako jedna uključuje dokumenta, takse i sanduk za međunarodni prevoz, a druga samo vožnju, razlika u ceni nije stvarna. Tražite spisak stavki i poredite stavku po stavku.",
      },
      {
        q: "Treba li nam posebno preduzeće u inostranstvu i posebno u Srbiji?",
        a: "Može i tako, ali tada porodica koordinira dva preduzeća, dva računa i primopredaju na granici ili aerodromu. Kada jedno preduzeće vodi ceo put, od preuzimanja do mesta sahrane, ima manje karika u kojima nešto može da zastane.",
      },
      {
        q: "Bolnica je već pozvala lokalno pogrebno preduzeće. Možemo li sada da biramo?",
        a: "Možete. Porodica odlučuje ko organizuje prevoz. Proverite šta je potpisano i koje su usluge već obavljene; preduzeće za međunarodni prevoz može da preuzme pokojnika od lokalnog, a eventualne troškove njihovih usluga treba platiti posebno.",
      },
      {
        q: "Kako da znamo da su recenzije stvarne?",
        a: "Više verujte ocenama na nezavisnim platformama, sa imenom autora i datumom, nego anonimnim citatima. Dobar znak je i kada preduzeće javno odgovara na kritike, jer to pokazuje da ne bira koje će recenzije biti vidljive.",
      },
      {
        q: "Šta znači da cenu dobijamo u prvom razgovoru?",
        a: "Kada nam kažete grad u kome je osoba preminula, mesto sahrane, da li je u pitanju sanduk ili urna i kakve su okolnosti smrti, možemo odmah da vam kažemo tačnu cenu, bez skrivenih stavki kasnije. Ako se tokom postupka pojavi nešto nepredviđeno, na primer zahtev za dodatnim dokumentom, javljamo vam to unapred.",
      },
    ],
    relatedLinks: [
      { href: "/cenovnik", title: "Cenovnik i faktori cene" },
      { href: "/blog-koliko-kosta-prevoz-pokojnika-nemacka", title: "Koliko košta prevoz pokojnika iz Nemačke" },
      { href: "/pogrebni-sanduci", title: "Pogrebni sanduci za međunarodni prevoz" },
      { href: "/testimonials", title: "Utisci klijenata" },
      { href: "/contact", title: "Kontakt" },
    ],
  },

  {
    slug: "blog-prevoz-pokojnika-avionom-vs-kombijem",
    title: "Prevoz pokojnika avionom ili kombijem | Transport pokojnika",
    description:
      "Prevoz pokojnika avionom ili kombijem: kako funkcioniše avio-transport, koji dokumenti su potrebni, od čega zavisi cena i kada je drumski prevoz brži.",
    h1: "Prevoz pokojnika avionom ili kombijem — šta je brže i kada",
    lead: "Mnoge porodice pretpostavljaju da je prevoz pokojnika avionom uvek brži. Za Madrid ili Stokholm to često jeste tačno, ali iz Beča, Minhena ili Graca pogrebno vozilo najčešće stigne do mesta sahrane pre nego što bi se završile pripreme za let. Ovde objašnjavamo kako izgleda transport pokojnika avionom, šta on podrazumeva i kada koji način ima smisla.",
    date: "2025-12-20",
    updated: "2026-10-19",
    readTime: "6 min čitanja",
    sections: [
      {
        h: "Kako funkcioniše prevoz pokojnika avionom",
        p: [
          "Pokojnik ne putuje kao prtljag putnika, već kao avio-teret u prtljažnom prostoru aviona. Srpski Pravilnik o uslovima i načinu postupanja sa posmrtnim ostacima umrlog lica predviđa da se u redovnom vazdušnom saobraćaju posmrtni ostaci prevoze samo u posebno određenom prostoru, na pogodan način odvojenom od prostora za prtljag.",
          "Mesto se rezerviše preko teretnog odeljenja avio-kompanije ili ovlašćenog agenta. Pogrebno vozilo zatim dovozi sanduk do teretnog terminala polaznog aerodroma u roku koji odredi kompanija, pre polaska leta. Po sletanju, na primer na Aerodrom Nikola Tesla u Beogradu, sledi preuzimanje na teretnom terminalu i, kada je potrebno, carinski postupak.",
          "Ono što se često zaboravlja: avion ne vozi do groblja. I na polasku i na dolasku potreban je drumski prevoz pogrebnim vozilom — od bolnice do aerodroma i od aerodroma do mesta sahrane, koje je često u manjem mestu, daleko od aerodroma.",
        ],
      },
      {
        h: "Dodatni dokumenti i pakovanje za avio-transport",
        p: [
          "Za transport pokojnika avionom važe sva dokumenta kao i za drumski prevoz — potvrda o smrti, izvod iz matične knjige umrlih, dozvola za prevoz zemlje smrti i sprovodnica ili dozvola države sahrane. Na to se dodaju zahtevi avio-kompanije, koji se razlikuju od kompanije do kompanije.",
          "Na srpskom obrascu sprovodnice upisuju se i prevozno sredstvo i mesto prelaska granice, pa odluku između aviona i kombija treba doneti pre podnošenja zahteva. Najčešći dodatni zahtevi za avion su:",
        ],
        list: [
          "avionski tovarni list (air waybill), koji izdaje avio-kompanija ili njen agent",
          "potvrda o balsamovanju ili konzervaciji tela, koju mnoge kompanije traže za prevoz sanduka",
          "potvrda da je sanduk hermetički zatvoren i da sadrži samo posmrtne ostatke",
          "kod pojedinih kompanija i potvrda da smrt nije posledica zarazne bolesti",
          "zaštitna spoljna ambalaža za sanduk, prilagođena utovaru u avion",
        ],
      },
      {
        h: "Kada je kombi brži od aviona",
        p: [
          "Za relacije do otprilike jednog dana vožnje drumski prevoz je najčešće jednako brz ili brži, jer nema čekanja na let, predaje tereta i preuzimanja na aerodromu. Od Beča do Beograda ima oko 620 km, što je oko šest sati čiste vožnje; od Minhena oko 940 km i oko deset sati; od Graca do Banja Luke svega oko 370 km.",
          "Kada se sabere sve što avio-transport podrazumeva — vožnja do polaznog aerodroma, rok za predaju tereta, let, eventualno presedanje, carinski postupak i vožnja od aerodroma do mesta sahrane — ukupno vreme za ove gradove je slično ili duže nego kombijem. Pri tome kombi zavisi samo od dokumenata, a avion i od reda letenja.",
          `Drumski prevoz ima još jednu prednost: vozilo ide direktno do kapele ili kuće u kojoj porodica čeka, bez pretovara. Za prevoz iz Austrije i južne Nemačke zato je kombi uobičajen izbor; detalje pogledajte na stranicama za ${link("/bec", "Beč")} i ${link("/munchen", "Minhen")}.`,
        ],
      },
      {
        h: "Kada avion ima smisla",
        p: [
          "Avion postaje ozbiljna opcija kada drumski put traje više dana. Od Madrida do Beograda ima oko 2570 km i oko 27 sati čiste vožnje, a sa obaveznim odmorima vozača put se proteže na više dana. Slično je sa Skandinavijom: od Stokholma do Beograda ima oko 2660 km, a od Osla oko 2610 km.",
          "Za Španiju je važno i to što tamošnji postupak ionako uključuje potvrdu o balsamovanju ili privremenoj konzervaciji, pa je deo onoga što avio-kompanije traže već pripremljen. Iz Velike Britanije, koja nije u EU, prevoz zahteva carinske formalnosti, a drumski put uključuje i prelazak kanala La Manš trajektom ili kroz tunel, pa i tu avion često ima smisla.",
          `Više o pojedinim zemljama: ${link("/spanija", "prevoz pokojnika iz Španije")}, ${link("/svedska", "iz Švedske")} i ${link("/norveska", "iz Norveške")}.`,
        ],
      },
      {
        h: "Prevoz pokojnika avionom — od čega zavisi cena",
        p: [
          "Na pitanje o ceni prevoza pokojnika avionom ne postoji jedan broj, jer se ukupni trošak sastoji iz više delova. Kod kraćih relacija drumski prevoz je po pravilu povoljniji, jer otpadaju avio-tarifa i dva dodatna drumska transfera.",
          "Na konačnu cenu avio-prevoza utiču sledeće stavke:",
        ],
        list: [
          "tarifa avio-kompanije za ovu vrstu tereta, koja se najčešće obračunava prema težini i dimenzijama sanduka sa ambalažom",
          "da li postoji direktan let ili je potrebno presedanje",
          "dodatna priprema: balsamovanje ili konzervacija i ambalaža za avio-transport",
          "aerodromske i agencijske usluge na polasku i dolasku, a kod zemalja van EU i carinski postupak",
          "drumski prevoz do polaznog aerodroma i od odredišnog aerodroma do mesta sahrane",
          "prevodi i overe dokumenata koje traži avio-kompanija",
        ],
      },
      {
        h: "Poređenje: avion i kombi",
        p: ["Ukratko, razlike između dva načina prevoza izgledaju ovako:"],
        list: [
          "<strong>Relacije do jednog dana vožnje:</strong> kombi je obično jednako brz ili brži i ide direktno do mesta sahrane.",
          "<strong>Relacije od više dana vožnje:</strong> avion skraćuje put, ali uz dva drumska transfera i čekanje na let.",
          "<strong>Dokumenta:</strong> kod aviona se dodaju tovarni list i zahtevi avio-kompanije, kao što je potvrda o balsamovanju.",
          "<strong>Pretovar:</strong> kombi nema pretovara; kod aviona pokojnik najmanje dva puta menja prevozno sredstvo.",
          "<strong>Zavisnost od rasporeda:</strong> kombi kreće kada su dokumenta gotova, avion tek kada ima slobodnog teretnog prostora na odgovarajućem letu.",
          "<strong>Troškovi:</strong> kod aviona se plaćaju avio-tarifa, aerodromske usluge i dva drumska transfera; kod kombija trošak zavisi pre svega od udaljenosti.",
          "<strong>Mesto sahrane daleko od aerodroma:</strong> prednost je na strani kombija, jer bi i posle leta usledila duga vožnja.",
        ],
      },
      {
        h: "Kako donosimo preporuku za vaš slučaj",
        p: [
          "Preporuku dajemo posle prvog razgovora, kada znamo grad u kome je osoba preminula, mesto sahrane, stanje dokumenata i da li je naložena obdukcija. Proveravamo i letove: ako na dan kada su dokumenta gotova nema odgovarajuće veze, avion gubi prednost čak i kod udaljenijih gradova.",
          "Kada porodica ima jasnu želju u pogledu načina prevoza, poštujemo je i objašnjavamo šta ona znači za rok i za trošak. Cilj nije da se izabere skuplja ili jeftinija varijanta, već ona koja pokojnika najsigurnije i bez nepotrebnog čekanja dovodi do mesta gde ga porodica ispraća.",
        ],
      },
    ],
    faqs: [
      {
        q: "Koliko košta prevoz pokojnika avionom?",
        a: "Cena zavisi od tarife avio-kompanije, rute, potrebe za balsamovanjem i ambalažom, aerodromskih usluga i drumskih transfera na oba kraja. Zato je ne navodimo unapred kao fiksan iznos, već je izračunavamo za konkretan slučaj i saopštavamo u prvom razgovoru.",
      },
      {
        q: "Može li pokojnik putovati istim letom kao porodica?",
        a: "Ponekad može, ako avio-kompanija na tom letu prima ovu vrstu tereta i ima slobodan kapacitet. To se proverava pri rezervaciji i ne može se garantovati unapred, pa porodica svoje karte treba da kupi tek kada je let za pokojnika potvrđen.",
      },
      {
        q: "Na koji aerodrom stiže pokojnik?",
        a: "Za Srbiju je to najčešće Beograd, a za BiH, Crnu Goru i Severnu Makedoniju u obzir dolaze aerodromi u Sarajevu, Banja Luci, Podgorici, Tivtu i Skoplju. Izbor zavisi od raspoloživih letova i od toga koliko je aerodrom udaljen od mesta sahrane; ostatak puta uvek se prelazi pogrebnim vozilom.",
      },
      {
        q: "Da li se urna može poslati avionom?",
        a: "Može. I za urnu je potrebna sprovodnica uz potvrdu o kremaciji, ali je avio-prevoz urne jednostavniji od prevoza sanduka, jer otpadaju zahtevi u vezi sa balsamovanjem i hermetičkim sandukom. Pravila o pakovanju i prijemu urne ipak određuje svaka avio-kompanija za sebe.",
      },
      {
        q: "Da li je za avion potrebna drugačija sprovodnica?",
        a: "Posebna sprovodnica za avion ne postoji, ali se u zahtevu i na samom obrascu navode prevozno sredstvo i mesto prelaska granice, koje je kod avio-prevoza aerodrom. Ako se plan promeni posle izdavanja, sa konzulatom treba proveriti da li je potrebna izmena.",
      },
    ],
    relatedLinks: [
      { href: "/madrid", title: "Prevoz pokojnika iz Madrida" },
      { href: "/svedska", title: "Prevoz pokojnika iz Švedske" },
      { href: "/bec", title: "Prevoz pokojnika iz Beča" },
      { href: "/cenovnik", title: "Cenovnik i faktori cene" },
      { href: "/blog-sprovodnica-za-prenos-posmrtnih-ostataka", title: "Sprovodnica za prenos posmrtnih ostataka" },
    ],
  },

  {
    slug: "blog-sprovodnica-za-prenos-posmrtnih-ostataka",
    title: "Sprovodnica za prenos posmrtnih ostataka | Transport pokojnika",
    description:
      "Sprovodnica za prenos posmrtnih ostataka: ko je izdaje, ko podnosi zahtev, koja dokumenta su potrebna i šta važi za urnu, tranzit i sahranu u BiH.",
    h1: "Sprovodnica za prenos posmrtnih ostataka — šta je i kako se dobija",
    lead: "Sprovodnica je dozvola na osnovu koje se posmrtni ostaci unose u Srbiju radi sahrane. Bez nje pokojnik ne može preći granicu, koliko god ostala dokumenta bila u redu. U ovom tekstu objašnjavamo ko izdaje sprovodnicu, ko može da podnese zahtev, šta se prilaže i šta važi za urne, strane državljane, tranzit i sahranu u BiH, Crnoj Gori i Severnoj Makedoniji.",
    date: "2026-10-19",
    readTime: "7 min čitanja",
    sections: [
      {
        h: "Šta je sprovodnica",
        p: [
          "Sprovodnica je službeni dokument kojim se potvrđuju podaci o umrlom licu i to da su ispunjeni uslovi za prenos posmrtnih ostataka. Njen izgled i sadržaj propisuje Pravilnik o uslovima i načinu postupanja sa posmrtnim ostacima umrlog lica („Službeni glasnik RS“, br. 96/2016), a izdaje se na osnovu javne isprave kojom se dokazuje identitet pokojnika i potvrde o uzroku smrti.",
          "Na obrascu se upisuju lični podaci pokojnika, vreme i mesto smrti, uzrok smrti na latinskom i srpskom jeziku, način na koji je utvrđen identitet, mesto u koje se pokojnik prenosi, prevozno sredstvo, mesto prelaska granice i ko prati posmrtne ostatke. Sprovodnica ne zamenjuje dokumenta zemlje u kojoj je nastupila smrt — ona se izdaje tek kada su ta dokumenta pribavljena.",
        ],
      },
      {
        h: "Ko izdaje sprovodnicu",
        p: [
          "Za prenos posmrtnih ostataka iz inostranstva u Srbiju sprovodnicu izdaje ambasada ili generalni konzulat Republike Srbije nadležan za poslednje mesto prebivališta pokojnika. Nadležnost je podeljena po oblastima, pa u zemljama sa više predstavništava nije svejedno kome se zahtev predaje.",
          "U Nemačkoj, na primer, Generalni konzulat u Minhenu pokriva Bavarsku, konzulat u Frankfurtu Hesen, Rajnland-Palatinat i Sarland, a konzulat u Diseldorfu Severnu Rajnu-Vestfaliju. U Austriji je ambasada u Beču nadležna za Beč, Donju Austriju, Gradišće, Štajersku i Korušku, a konzulat u Salcburgu za Salcburg, Tirol, Forarlberg i Gornju Austriju. U Švajcarskoj nadležnost dele konzulat u Cirihu i ambasada u Bernu.",
          `Nadležno predstavništvo za pojedine gradove navedeno je na stranicama ${link("/nemacka", "prevoz pokojnika iz Nemačke")}, ${link("/austrija", "iz Austrije")} i ${link("/svajcarska", "iz Švajcarske")}, kao i na stranicama gradova, na primer ${link("/frankfurt", "Frankfurt")} ili ${link("/bec", "Beč")}.`,
          `Sprovodnica prati posmrtne ostatke i pri prevozu unutar Srbije, na primer kada se posle ${link("/ekshumacija", "ekshumacije")} prenose na drugo groblje. Samo iskopavanje obavlja se u prisustvu sanitarnog inspektora.`,
        ],
      },
      {
        h: "Ko podnosi zahtev i koja dokumenta su potrebna",
        ordered: true,
        p: [
          "Zahtev za izdavanje sprovodnice podnosi član porodice ili ovlašćeno pogrebno preduzeće, a u njemu se navode mesto sahrane i putni pravac kojim će se prevoz obaviti. Kada zahtev podnosi preduzeće, porodica mu daje punomoćje, pa niko od rodbine ne mora lično da odlazi u ambasadu.",
          `Dokumenta se predaju u originalu, zato je važno da pasoš i strani dokumenti stignu do onoga ko predaje zahtev, a ne da ostanu raštrkani po porodici ili u bolnici. Prema uputstvu ${MFA_LINK}, uz zahtev se prilaže:`,
        ],
        list: [
          "pasoš pokojnika",
          "zahtev člana porodice ili ovlašćenog pogrebnog preduzeća sa navedenim mestom sahrane i putnim pravcem",
          "izvod iz matične knjige umrlih koji je izdao organ strane države (na primer Sterbeurkunde u Nemačkoj ili Auszug aus dem Todesregister u Švajcarskoj)",
          "lekarski izveštaj o uzroku smrti (u Nemačkoj Todesbescheinigung)",
          "dozvola za prevoz posmrtnih ostataka koju je izdao organ zemlje u kojoj je nastupila smrt (u Nemačkoj i Austriji Leichenpass)",
          "za strane državljane — potvrda da je u Srbiji obezbeđeno grobno mesto",
        ],
      },
      {
        h: "Prevodi, apostil i dodatni zahtevi pojedinih misija",
        p: [
          "Srbija je, zajedno sa Nemačkom, Austrijom, Švajcarskom, Italijom, Španijom, Francuskom i BiH, članica Konvencije CIEC br. 16 o izdavanju višejezičnih izvoda iz matičnih knjiga (Beč, 1976). Višejezični izvod iz matične knjige umrlih iz tih zemalja zato se po pravilu prihvata bez legalizacije. Švedska, Danska i Norveška nisu članice, pa se njihovi dokumenti overavaju apostilom i prevode na srpski kod ovlašćenog prevodioca.",
          "Pojedine misije objavljuju i sopstvene, detaljnije spiskove. Ambasada u Stokholmu, na primer, u svom zahtevu navodi da švedski dokumenti moraju biti overeni apostilom i zvanično prevedeni, a ako smrt nije nastupila prirodnim putem, traži i saglasnost pravosudnih organa Švedske. Pre predaje zato uvek proverite stranicu nadležnog predstavništva ili ga kontaktirajte.",
        ],
      },
      {
        h: "Sprovodnica za urnu",
        p: [
          "Kada je pokojnik kremiran u inostranstvu, sprovodnica je potrebna i za prenos urne. Prilažu se ista dokumenta kao za prenos tela i, dodatno, potvrda o kremaciji. Srpski pravilnik predviđa da se urna sa kremiranim posmrtnim ostacima prenosi na osnovu sprovodnice, ali da za nju ne važe pravila o metalnom i drvenom sanduku.",
          `Neke zemlje za urnu traže manje dokumenata na svojoj strani — u Danskoj je, na primer, propusnica ligpas potrebna samo za kovčeg. To ne menja srpsku stranu postupka. Kako porodica bira između sahrane i kremacije objasnili smo u tekstu ${link("/blog-sta-raditi-kada-neko-umre-u-inostranstvu", "šta raditi kada neko umre u inostranstvu")}.`,
        ],
      },
      {
        h: "Strani državljani, tranzit i zarazne bolesti",
        p: [
          "Sprovodnica se izdaje i kada pokojnik nije bio državljanin Srbije, a sahranjuje se u Srbiji — na primer kada je imao samo nemačko ili austrijsko državljanstvo. Tada se uz ostala dokumenta prilaže potvrda da je obezbeđeno grobno mesto, koju izdaje uprava groblja ili nadležni opštinski organ.",
          "Ako se sahrana obavlja u trećoj zemlji, a prevoz prolazi kroz Srbiju, potrebna je tranzitna sprovodnica. Za nju se prilažu sva navedena dokumenta i dozvola države u kojoj će biti sahrana. To se odnosi, na primer, na drumski prevoz iz Nemačke ili Austrije u Severnu Makedoniju kada ruta vodi preko Srbije.",
          "Posebno pravilo važi ako je smrt prouzrokovana kugom ili velikim boginjama: sprovodnica se tada izdaje tek po odobrenju Ministarstva zdravlja Republike Srbije, koje se pribavlja preko diplomatsko-konzularnog predstavništva. Za lica umrla od drugih zaraznih bolesti pravilnik propisuje zalemljen metalni sanduk smešten u drveni.",
        ],
      },
      {
        h: "Sprovodnica BiH, Crna Gora i Severna Makedonija",
        p: [
          "Srpska sprovodnica odnosi se samo na sahranu u Srbiji i na tranzit kroz Srbiju. Kada je sahrana u Bosni i Hercegovini, Crnoj Gori ili Severnoj Makedoniji, dozvolu za unos posmrtnih ostataka izdaje diplomatsko-konzularno predstavništvo te države, po njenim propisima.",
          "Kada neko traži „sprovodnicu BiH“, zapravo traži dozvolu koju izdaje ambasada ili konzulat Bosne i Hercegovine. Prema uputstvima koja objavljuju predstavništva BiH (na primer Generalni konzulat BiH u Čikagu), uz zahtev se popunjava i obrazac za zdravstvene organe, koji se razlikuje u zavisnosti od toga da li je mesto sahrane u Federaciji BiH, Republici Srpskoj ili Brčko distriktu.",
          "Za Crnu Goru i Severnu Makedoniju logika je ista — dokumenta zemlje smrti i dozvola države sahrane — ali spisak priloga i obrasce određuje svaka država posebno, pa ih za svaki slučaj proveravamo sa nadležnim predstavništvom.",
        ],
      },
      {
        h: "Sprovodnica obrazac — gde ga naći i ko ga popunjava",
        p: [
          "Mnogi traže „sprovodnica obrazac“ u nadi da će ga sami popuniti i poslati. Treba razlikovati dve stvari: samu sprovodnicu popunjava i izdaje predstavništvo, na obrascu propisanom pravilnikom, dok porodica ili pogrebno preduzeće podnosi zahtev za njeno izdavanje.",
          "Pojedine misije objavljuju sopstveni obrazac zahteva na svom sajtu. Ambasada u Stokholmu, na primer, ima „Zahtev za izdavanje sprovodnice“ u kome se navode podaci o podnosiocu i srodstvu sa pokojnikom, lični podaci pokojnika, uzrok smrti, mesto sahrane, način prenosa, mesto prelaska granice i pratnja. Druge misije nemaju objavljen obrazac, pa na njihovom sajtu ili telefonom treba proveriti kako se zahtev podnosi.",
          `Ne preuzimajte obrasce sa neslužbenih sajtova i ne oslanjajte se na stare verzije — proverite stranicu nadležne ambasade ili konzulata na domenu mfa.gov.rs. Kada prevoz organizujemo mi, zahtev sastavljamo i predajemo u ime porodice, a spisak papira za ceo postupak nalazi se na stranici ${link("/dokumentacija-za-prevoz-pokojnika", "dokumentacija za prevoz pokojnika")}.`,
        ],
      },
    ],
    faqs: [
      {
        q: "Ko izdaje sprovodnicu za prenos posmrtnih ostataka u Srbiju?",
        a: "Ambasada ili generalni konzulat Republike Srbije nadležan za poslednje mesto prebivališta pokojnika u inostranstvu. U zemljama sa više predstavništava nadležnost zavisi od pokrajine, kantona ili regiona u kome je pokojnik živeo.",
      },
      {
        q: "Da li je sprovodnica isto što i Leichenpass?",
        a: "Nije. Leichenpass je dozvola nemačkih ili austrijskih organa za prevoz posmrtnih ostataka iz te zemlje, dok je sprovodnica srpska dozvola za njihov unos i sahranu u Srbiji. Leichenpass se prilaže uz zahtev za sprovodnicu, pa se uvek pribavlja prvi.",
      },
      {
        q: "Da li je sprovodnica potrebna za urnu?",
        a: "Jeste. Za prenos urne u Srbiju prilažu se ista dokumenta kao za prenos tela, uz potvrdu o kremaciji, i to važi čak i kada zemlja u kojoj je obavljena kremacija za urnu ne izdaje sopstvenu propusnicu.",
      },
      {
        q: "Šta je sprovodnica BiH i ko je izdaje?",
        a: "Tako se obično naziva dozvola za unos posmrtnih ostataka u Bosnu i Hercegovinu. Izdaje je ambasada ili konzulat BiH, a ne srpsko predstavništvo, po propisima BiH; uz zahtev se popunjava i obrazac koji zavisi od toga da li je sahrana u Federaciji BiH, Republici Srpskoj ili Brčko distriktu.",
      },
      {
        q: "Gde mogu da nađem obrazac zahteva za sprovodnicu?",
        a: "Na sajtu nadležne ambasade ili konzulata Srbije, ako ga ta misija objavljuje. Ako obrasca nema, kontaktirajte konzularno odeljenje i pitajte u kom obliku primaju zahtev i koje priloge očekuju.",
      },
      {
        q: "Može li pogrebno preduzeće da podnese zahtev umesto porodice?",
        a: "Može. Prema uputstvu Ministarstva spoljnih poslova, zahtev podnosi član porodice ili ovlašćeno pogrebno preduzeće. Preduzeće tada radi na osnovu punomoćja i predaje originale dokumenata u ime porodice.",
      },
    ],
    relatedLinks: [
      { href: "/dokumentacija-za-prevoz-pokojnika", title: "Dokumentacija za prevoz pokojnika" },
      { href: "/nemacka", title: "Prevoz pokojnika iz Nemačke" },
      { href: "/austrija", title: "Prevoz pokojnika iz Austrije" },
      { href: "/svajcarska", title: "Prevoz pokojnika iz Švajcarske" },
      { href: "/repatrijacija-pokojnika", title: "Repatrijacija pokojnika" },
    ],
  },
];
