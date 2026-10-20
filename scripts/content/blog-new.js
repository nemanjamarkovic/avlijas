/** New guide posts — same fields as blog-guides.js, rendered by renderBlogPost(). */

const link = (href, text) => `<a href="${href}" class="text-primary">${text}</a>`;
const ext = (href, text) =>
  `<a href="${href}" target="_blank" rel="noopener noreferrer" class="text-primary">${text}</a>`;

module.exports = [
  {
    slug: "blog-prevoz-urne-iz-inostranstva",
    title: "Prenos urne iz inostranstva u Srbiju | Transport pokojnika",
    description:
      "Prenos urne iz inostranstva: sprovodnica i potvrda o kremaciji, urna u avionu i kolima, ukop urne na groblju u Srbiji i razlike u odnosu na prevoz sanduka.",
    h1: "Prenos urne iz inostranstva — dokumenta, putovanje i ukop",
    lead: "Sve više porodica čiji je član preminuo u Nemačkoj, Austriji, Švajcarskoj ili Skandinaviji odlučuje se za kremaciju u zemlji smrti i prenos urne kući. Taj put je u mnogo čemu jednostavniji od prevoza sanduka, ali nije bez pravila: srpska strana i dalje traži sprovodnicu, zemlja kremacije ima svoje propise o tome ko sme da preuzme urnu, a avio-kompanije postavljaju sopstvene uslove. U ovom vodiču objašnjavamo ceo tok, od odluke o kremaciji do ukopa urne na groblju u Srbiji, BiH ili Crnoj Gori.",
    date: "2026-10-20",
    readTime: "8 min čitanja",
    sections: [
      {
        h: "Kremacija u inostranstvu: zašto porodice biraju urnu",
        p: [
          "U zemljama zapadne i severne Evrope kremacija je uobičajen način sahrane, pa je bolnice, matične službe i lokalna pogrebna preduzeća nude kao nešto sasvim obično. Porodica sa Balkana tada često prvi put mora da razmisli o tome da li pokojnik dolazi kući u sanduku ili u urni. Razlozi za urnu su različiti: velika udaljenost, želja samog pokojnika, porodični grob u kome nema mesta za još jedan sanduk ili plan da se ukop obavi kasnije, kada se okupi cela porodica.",
          "U Srbiji je kremacija moguća u Beogradu, na Novom groblju, ali kada je smrt nastupila daleko od kuće, logičnije je da se kremacija obavi u zemlji smrti i da se preveze samo urna. Pre nego što bilo šta potpišete, imajte na umu da je kremacija nepovratna. Ako neko u porodici sumnja ili očekuje da bi okolnosti smrti mogle biti predmet istrage, sačekajte sa tom odlukom.",
        ],
      },
      {
        h: "Nemačka: druga lekarska provera i ko sme da preuzme urnu",
        p: [
          "U većini nemačkih pokrajina pre kremacije se obavlja još jedan, službeni lekarski pregled pokojnika (zweite Leichenschau ili Krematoriumsleichenschau). Svrha mu je da se pre spaljivanja isključi nasilna ili nerazjašnjena smrt, jer se posle kremacije dokazi više ne mogu obezbediti. Kod nesreće ili sumnjive smrti tužilaštvo mora prethodno da odobri kremaciju, pa ovaj put može trajati duže nego što porodica očekuje.",
          "Druga posebnost Nemačke je obaveza sahranjivanja na groblju (Friedhofszwang). Urna se po pravilu ne predaje porodici u ruke, već pogrebnom preduzeću ili upravi groblja; izuzeci postoje samo u pojedinim pokrajinama, na primer u Bremenu, i to pod određenim uslovima. Berlinski propisi, na primer, predviđaju da krematorijum urnu namenjenu inostranstvu šalje tek kada uprava groblja u mestu ukopa potvrdi da će je primiti, a za samu urnu ne traže Leichenpass.",
          `Druge zemlje imaju blaža pravila. U Danskoj je propusnica ligpas potrebna samo za prevoz kovčega preko granice, ne i za urnu. Kako izgleda postupak za telo iz te dve zemlje opisali smo na stranicama ${link("/nemacka", "prevoz pokojnika iz Nemačke")} i ${link("/danska", "prevoz pokojnika iz Danske")}.`,
        ],
      },
      {
        h: "Sprovodnica za urnu i potvrda o kremaciji",
        p: [
          `Mnoge porodice pretpostavljaju da za pepeo nisu potrebna dokumenta, ali to nije tačno. Prema uputstvu ${ext("https://mfa.gov.rs/en/citizens/services/transport-human-remains", "Ministarstva spoljnih poslova Srbije")}, i za unos urne u Srbiju izdaje se sprovodnica, a uz uobičajena dokumenta prilaže se potvrda o kremaciji. Zahtev se podnosi ambasadi ili konzulatu Srbije nadležnom prema poslednjem prebivalištu pokojnika, u originalima.`,
          `Za sahranu u BiH, Crnoj Gori ili Severnoj Makedoniji dozvolu za unos izdaje predstavništvo te države, pa se spisak dokumenata unapred proverava. Detaljnije o samom obrascu i misijama pišemo u vodiču ${link("/blog-sprovodnica-za-prenos-posmrtnih-ostataka", "sprovodnica za prenos posmrtnih ostataka")}.`,
        ],
        list: [
          "pasoš pokojnika u originalu",
          "zahtev porodice ili ovlašćenog pogrebnog preduzeća sa mestom ukopa i načinom prevoza urne",
          "izvod iz matične knjige umrlih zemlje u kojoj je nastupila smrt",
          "lekarski izveštaj o uzroku smrti",
          "potvrda krematorijuma o kremaciji, sa podacima o pokojniku",
          "za strane državljane — potvrda da je u Srbiji obezbeđeno grobno mesto",
        ],
      },
      {
        h: "Urna u avionu ili u kolima",
        p: [
          "Pravila o prevozu urne avionom nisu jedinstvena. Neke avio-kompanije dozvoljavaju urnu i u kabini i u predatom prtljagu, druge samo u ručnom prtljagu, a ima i onih koje je u kabini ne primaju. Zato se prevoz uvek najavljuje kompaniji pre kupovine karte i traži se pisana potvrda njenih uslova, umesto da se oslanjate na iskustvo nekog poznanika sa drugom kompanijom.",
          "Na aerodromskoj kontroli urna prolazi kroz rendgen, a službenici je po pravilu ne otvaraju. Urne od metala, kamena ili keramike ponekad se ne vide jasno na snimku, pa je za put sigurnija privremena urna od drveta ili čvrste plastike, dok se trajna urna kupuje kod kuće. Uz urnu nosite izvod iz matične knjige umrlih, potvrdu o kremaciji i sprovodnicu, i to originale u ručnom prtljagu.",
          `Kada urnu prevozi pogrebno preduzeće, ona putuje u zapečaćenoj ambalaži, kombijem ili kao avio-teret, i predaje se upravi groblja ili porodici u mestu sahrane. To je obavezan put iz zemalja koje urnu ne predaju privatnim licima. Šta je brže na kojoj relaciji objašnjavamo u tekstu ${link("/blog-prevoz-pokojnika-avionom-vs-kombijem", "prevoz pokojnika avionom ili kombijem")}.`,
        ],
      },
      {
        h: "Sahrana urne na groblju u Srbiji",
        p: [
          "Urna se može položiti u postojeći porodični grob ili grobnicu, pored predaka, što je za mnoge porodice glavni razlog za kremaciju. Na beogradskim grobljima postoje i posebna mesta za urne: kolumbarijum, gde se kaseta za urne nalazi u zidu, i rozarijum, sa samostojećim kasetama na zelenoj površini. Na pojedinim grobljima postoji i Vrt sećanja, gde se pepeo rasipa.",
          "Pravila nisu ista na svim grobljima, pa se sa upravom groblja unapred proverava koja dokumenta traži za ukop urne, da li je potrebna saglasnost korisnika grobnog mesta i kada se ukop može zakazati. Datum ispraćaja potvrdite tek kada znate da je urna stigla ili kada je poznat tačan dan njenog dolaska, jer se kremacija u inostranstvu ponekad zakazuje i nekoliko dana unapred.",
        ],
      },
      {
        h: "Kremacija i pravoslavni običaji",
        p: [
          "Za mnoge porodice pitanje kremacije nije samo praktično. Srpska pravoslavna crkva tradicionalno neguje sahranu tela, a kremaciju ne smatra hrišćanskim običajem; praksa u pogledu opela kremiranih nije svuda ista i zavisi od nadležnog sveštenstva. Ako je porodici važno da ispraćaj prati verski obred, razgovarajte sa svojim parohom pre nego što donesete odluku o kremaciji, a ne posle nje.",
          "Isto važi i za druge verske zajednice: o pravilima ukopa i obredima razgovarajte sa verskim službenikom u mestu sahrane. Mi poštujemo svaku odluku porodice i prilagođavamo joj organizaciju, bilo da je reč o sanduku ili urni.",
        ],
      },
      {
        h: "Urna ili sanduk: od čega zavisi trošak",
        p: [
          `Prenos urne je po pravilu povoljniji od prevoza tela, ali ukupna cena zavisi od više stavki, pa je pogrešno porediti samo cenu prevoza. Tačan iznos za vaš slučaj dobijate u prvom razgovoru, a opšte faktore cene objašnjavamo na stranici ${link("/cenovnik", "cenovnik")}.`,
        ],
        list: [
          "kod urne otpada hermetički zatvoren sanduk propisan za međunarodni prevoz, koji je kod prevoza tela jedna od većih stavki",
          "sa druge strane dodaje se trošak kremacije i, u Nemačkoj, druge lekarske provere",
          "urna se može preneti i avionom bez posebnih zahteva za telo, ali uz pravila avio-kompanije",
          "dokumenta i sprovodnica su potrebni u oba slučaja, pa se taj deo posla ne smanjuje",
          "čekanje na termin kremacije može produžiti ukupan rok u odnosu na direktan prevoz tela",
        ],
      },
    ],
    faqs: [
      {
        q: "Da li se za prenos urne preko granice traži sprovodnica?",
        a: "Da. Srpska strana traži sprovodnicu i za urnu, a uz zahtev se prilaže potvrda krematorijuma o kremaciji. Na granici uz urnu treba imati originale tih dokumenata, bez obzira na to da li urnu nosi član porodice ili je prevozi pogrebno preduzeće.",
      },
      {
        q: "Mogu li sam da preuzmem urnu u Nemačkoj i da je donesem kolima?",
        a: "Po pravilu ne. Zbog obaveze sahranjivanja na groblju nemački krematorijumi urnu ne predaju privatnim licima, već pogrebnom preduzeću ili upravi groblja. U zemljama sa blažim pravilima porodica ponekad može sama da prenese urnu, ali i tada mora da ima sprovodnicu i potvrdu o kremaciji.",
      },
      {
        q: "Može li urna u ručni prtljag u avionu?",
        a: "Kod mnogih avio-kompanija može, ali ne kod svih. Prevoz najavite kompaniji unapred, tražite pisanu potvrdu uslova i izaberite urnu od materijala koji se jasno vidi na rendgenu, na primer drveta ili plastike.",
      },
      {
        q: "Da li se urna može sahraniti u postojeći porodični grob?",
        a: "U većini slučajeva može, uz saglasnost korisnika grobnog mesta i dogovor sa upravom groblja. Urna zauzima malo prostora, pa se ukop često može obaviti i kada u grobnici više nema mesta za sanduk.",
      },
      {
        q: "Da li je prenos urne iz Danske jednostavniji od prevoza tela?",
        a: "Na danskoj strani jeste, jer se propusnica ligpas traži samo za kovčeg. Dokumenta se i dalje overavaju apostilom i prevode, a sprovodnica za Srbiju potrebna je kao i za telo.",
      },
      {
        q: "Šta je brže iz Nemačke — kremacija i urna ili prevoz tela?",
        a: "Ne postoji jedan odgovor. Druga lekarska provera i termin u krematorijumu mogu da traju nekoliko dana, pa prevoz tela specijalizovanim vozilom ponekad stiže ranije. Kada nam kažete grad i okolnosti smrti, procenićemo oba puta.",
      },
    ],
    relatedLinks: [
      { href: "/blog-sprovodnica-za-prenos-posmrtnih-ostataka", title: "Sprovodnica za prenos posmrtnih ostataka" },
      { href: "/blog-prevoz-pokojnika-avionom-vs-kombijem", title: "Prevoz pokojnika avionom ili kombijem" },
      { href: "/nemacka", title: "Prevoz pokojnika iz Nemačke" },
      { href: "/danska", title: "Prevoz pokojnika iz Danske" },
      { href: "/cenovnik", title: "Cenovnik i faktori cene" },
    ],
  },

  {
    slug: "blog-naknada-pogrebnih-troskova-pio-fond",
    title: "Naknada pogrebnih troškova PIO fonda | Transport pokojnika",
    description:
      "Naknada pogrebnih troškova PIO fonda: ko ima pravo, ko podnosi zahtev, koja dokumenta trebaju, šta važi kada je smrt bila u inostranstvu i ko još plaća.",
    h1: "Naknada pogrebnih troškova — PIO fond i drugi izvori pomoći",
    lead: "Sahrana, a naročito prevoz pokojnika iz inostranstva, za porodicu je veliki i iznenadan trošak. Deo tog troška u Srbiji može se vratiti kroz naknadu pogrebnih troškova koju isplaćuje Republički fond za penzijsko i invalidsko osiguranje. U ovom tekstu objašnjavamo ko ima pravo na tu naknadu, ko podnosi zahtev, koja dokumenta su potrebna, šta važi kada je penzioner preminuo u inostranstvu i ko još može da pokrije deo troškova: poslodavac, osiguranje ili strani penzijski fond.",
    date: "2026-10-20",
    readTime: "8 min čitanja",
    sections: [
      {
        h: "Šta je naknada pogrebnih troškova",
        p: [
          "Zakon o penzijskom i invalidskom osiguranju u članu 124b propisuje da Fond licu koje je snosilo troškove sahrane korisnika penzije isplaćuje naknadu pogrebnih troškova, u iznosu koji važi na dan smrti. Iznos se ne određuje prema stvarnoj ceni sahrane, već je jednak za sve, i usklađuje se na isti način kao i penzije.",
          `Prema stranici ${ext("https://www.pio.rs/sr/novchane-naknade", "Novčane naknade na sajtu Fonda PIO")}, naknada od 1. decembra 2025. godine iznosi 85.686 dinara za sve kategorije korisnika penzija. Pošto se iznos usklađuje, pre podnošenja zahteva proverite aktuelni podatak na sajtu Fonda ili u filijali.`,
        ],
      },
      {
        h: "Ko ima pravo, a ko podnosi zahtev",
        p: [
          "Pravo je vezano za smrt korisnika penzije, odnosno osobe koja je u trenutku smrti primala penziju od Fonda PIO Republike Srbije. Kada premine zaposleni koji još nije bio penzioner, ova naknada se ne isplaćuje iz Fonda; tada je obaveza na poslodavcu, o čemu pišemo niže.",
          "Zahtev ne podnosi automatski najbliži srodnik, već onaj ko je stvarno platio sahranu. Na obrascu Fonda navedeno je da to može biti fizičko ili pravno lice, ustanova socijalne zaštite, organ državne uprave ili organizacija. Ako je sahranu platio sin, kum ili komšija, pravo pripada njemu, pod uslovom da račun glasi na njegovo ime.",
          "Zbog toga je važno da se već pri dogovoru sa pogrebnim preduzećem zna ko će plaćati i na koga će glasiti račun. Kada troškove deli više članova porodice, praktičnije je da jedna osoba plati i dobije račun, a da se porodica posle dogovori između sebe.",
        ],
      },
      {
        h: "Dokumenta za zahtev",
        ordered: true,
        p: [
          `Zahtev se podnosi na obrascu Fonda „Zahtev za isplatu naknade pogrebnih troškova“ (OBR-0476), koji se nalazi u meniju ${ext("https://www.pio.rs/sr/obrasci/republicki-fond", "Obrasci na sajtu Fonda PIO")}. Na samom obrascu navedena su dokumenta koja se prilažu:`,
        ],
        list: [
          "račun o troškovima sahrane u originalu, koji glasi na lice koje je snosilo troškove",
          "fiskalni isečak u originalu ili fotokopiji, ili izjava izdavaoca računa da nema obavezu evidentiranja prometa preko fiskalne kase",
          "dokaz o identitetu podnosioca — lična karta na uvid ili uverenje o prebivalištu",
          "izvod iz matične knjige umrlih, ako ga podnosilac poseduje",
          "izveštaj korisniku ili ček od penzije pokojnika, ako ga podnosilac poseduje",
          "kopija kartice tekućeg računa podnosioca sa imenom, prezimenom i brojem računa",
        ],
      },
      {
        h: "Gde se predaje zahtev i kako se isplaćuje",
        p: [
          "Zahtev se predaje Fondu, obično filijali koja je isplaćivala penziju pokojniku; ako niste sigurni koja je to filijala, pozovite Fond pre odlaska na šalter. Fond prema Zakonu o opštem upravnom postupku može sam da pribavi podatke iz službenih evidencija, pa izvod iz matične knjige umrlih i ček od penzije prilažete samo ako ih imate.",
          "Obrazac predviđa i isplatu pravnom licu. Pogrebno preduzeće koje sa Fondom ima zaključen ugovor o poslovnoj saradnji može, uz izjavu porodice o saglasnosti, da naknadu primi direktno i da je odbije od računa. Za to postoji posebna izjava Fonda (OBR-1131), pa pri ugovaranju sahrane pitajte preduzeće da li nudi tu mogućnost.",
          "Član 124b ne navodi poseban rok za podnošenje zahteva, ali to nije razlog za odlaganje. Račune i fiskalne isečke sačuvajte odmah posle sahrane, a zahtev podnesite čim ih prikupite, kako bi se eventualne nejasnoće rešile dok su dokumenta još pri ruci.",
        ],
      },
      {
        h: "Šta ako je penzioner preminuo u inostranstvu",
        p: [
          "Zakon pravo ne vezuje za mesto smrti, već za to da je pokojnik bio korisnik penzije Fonda. Kada srpski penzioner umre na putovanju ili u poseti deci u inostranstvu, a sahranjuje se u Srbiji, porodica zato po pravilu može da podnese zahtev kao i za smrt kod kuće. U praksi se pitanja javljaju oko dokumenata koja nisu izdata u Srbiji.",
          `Strani izvod iz matične knjige umrlih treba da bude na višejezičnom obrascu ili overen i preveden, a smrt je dobro upisati i u srpsku matičnu knjigu umrlih. Račun inostranog pogrebnog preduzeća nema srpski fiskalni isečak, pa unapred pitajte filijalu u kom obliku ga prihvata, da li je potreban prevod i da li se u troškove sahrane računa i prevoz iz inostranstva. Koja dokumenta izdaje zemlja smrti navodimo na stranici ${link("/dokumentacija-za-prevoz-pokojnika", "dokumentacija za prevoz pokojnika")}.`,
          `Ako je pokojnik živeo u inostranstvu i tamo primao srpsku penziju, isplata može zavisiti i od međunarodnog sporazuma o socijalnom osiguranju, pa takav slučaj uvek proverite u Fondu. Kako se organizuje sam prevoz kući opisali smo u tekstu ${link("/blog-sta-raditi-kada-neko-umre-u-inostranstvu", "šta raditi kada neko umre u inostranstvu")}.`,
        ],
      },
      {
        h: "Slična prava u Crnoj Gori i BiH",
        p: [
          `U Crnoj Gori pravo na naknadu pogrebnih troškova pripada licu koje plati sahranu korisnika penzije. Prema ${ext("https://www.fondpio.me/pogrebni-troskovi/", "Fondu PIO Crne Gore")}, naknada iznosi tri prosečne penzije isplaćene u mesecu pre smrti, a zahtev se podnosi u roku od 60 dana od smrti, područnoj jedinici Fonda. Uz zahtev se prilažu izvod iz registra umrlih, račun pogrebnog preduzeća i lična karta podnosioca. Kako se organizuje sam prevoz opisali smo na stranici ${link("/prevoz-pokojnika-u-crnu-goru", "prevoz pokojnika u Crnu Goru")}.`,
          "U Federaciji BiH naknadu za smrt penzionera predviđa federalni zakon o penzijskom i invalidskom osiguranju. Ustavni sud BiH je 2024. godine (predmet U-5/24) utvrdio da je uslov prebivališta u Federaciji ili Brčko distriktu diskriminatoran, pa pravo mogu da ostvare i porodice koje žive u Republici Srpskoj. Za smrt penzionera iz Republike Srpske uslove i rokove proverite direktno u Fondu PIO Republike Srpske.",
        ],
      },
      {
        h: "Ko još može da pokrije troškove: poslodavac, osiguranje, strani fondovi",
        p: [
          "Kada premine zaposleni, Zakon o radu (član 119) obavezuje poslodavca da članovima uže porodice, bračnom drugu i deci, isplati naknadu troškova pogrebnih usluga u skladu sa opštim aktom. Visinu i postupak određuju kolektivni ugovor ili pravilnik o radu, pa se porodica obraća službi ljudskih resursa poslodavca.",
          `Putno zdravstveno osiguranje kod mnogih polisa pokriva organizaciju i troškove prevoza posmrtnih ostataka do zemlje prebivališta, do iznosa iz tabele pokrića, ali ne i sahranu kod kuće. Detaljnije o tome pišemo u tekstu ${link("/blog-smrt-na-odmoru-u-inostranstvu", "smrt na odmoru u inostranstvu")}. Životno osiguranje ili posebno osiguranje troškova sahrane isplaćuje se prema uslovima ugovora, nezavisno od Fonda PIO.`,
          "Mnogi naši ljudi u Nemačkoj pitaju za Sterbegeld. Opšti Sterbegeld iz zakonskog zdravstvenog osiguranja ukinut je 1. januara 2004. godine, pa danas postoji samo u posebnim slučajevima. Prema nemačkoj penzijskoj službi, udovica ili udovac u takozvanom Sterbevierteljahr do kraja trećeg meseca posle meseca smrti primaju punu penziju preminulog supružnika; ako je preminuli već primao penziju, predujam se traži kod službe Renten Service Deutsche Post u roku od 30 dana od smrti, uz redovan zahtev za porodičnu penziju.",
          `Ako je smrt posledica nesreće na poslu, nemačko zakonsko osiguranje od nesreće na radu (Berufsgenossenschaft) isplaćuje Sterbegeld, a kada je osoba preminula daleko od porodičnog doma iz razloga vezanih za posao, nadoknađuje i troškove prevoza do mesta sahrane (${ext("https://www.gesetze-im-internet.de/sgb_7/__64.html", "§ 64 SGB VII")}). Račun za prevoz zato uvek tražite na ime osobe koja ga plaća.`,
        ],
      },
    ],
    faqs: [
      {
        q: "Kolika je naknada pogrebnih troškova PIO fonda u 2026. godini?",
        a: "Prema sajtu Fonda PIO, za smrt korisnika penzije od 1. decembra 2025. naknada iznosi 85.686 dinara, jednako za sve kategorije penzionera. Iznos se usklađuje kao i penzije, pa pre podnošenja zahteva proverite aktuelni podatak.",
      },
      {
        q: "Da li porodica zaposlenog koji nije bio penzioner ima pravo na naknadu od Fonda PIO?",
        a: "Ne, naknada Fonda vezana je za smrt korisnika penzije. Za preminulog zaposlenog naknadu troškova pogrebnih usluga bračnom drugu i deci isplaćuje poslodavac, prema Zakonu o radu i svom opštem aktu.",
      },
      {
        q: "Može li naknadu da dobije neko ko nije rođak pokojnika?",
        a: "Može. Naknada pripada onome ko je snosio troškove sahrane, bez obzira na srodstvo. Presudno je da račun i fiskalni isečak glase na ime podnosioca zahteva.",
      },
      {
        q: "Važi li naknada ako je penzioner umro u inostranstvu?",
        a: "Zakon pravo ne uslovljava mestom smrti, već time da je pokojnik primao penziju Fonda. Kod stranih računa i izvoda unapred proverite u filijali u kom obliku se prihvataju i da li je potreban prevod.",
      },
      {
        q: "Da li Fond PIO plaća prevoz pokojnika iz inostranstva?",
        a: "Ne direktno. Fond ne organizuje prevoz, već licu koje je platilo sahranu isplaćuje propisani iznos naknade. Prevoz plaća porodica, osim ako ga ne pokriva putno ili drugo osiguranje pokojnika.",
      },
      {
        q: "U kom roku se traži naknada pogrebnih troškova u Crnoj Gori?",
        a: "Prema Fondu PIO Crne Gore, zahtev se podnosi u roku od 60 dana od dana smrti korisnika penzije. Rok je kratak, pa račune treba prikupiti odmah posle sahrane.",
      },
    ],
    relatedLinks: [
      { href: "/blog-sta-raditi-kada-neko-umre-u-inostranstvu", title: "Šta raditi kada neko umre u inostranstvu" },
      { href: "/blog-smrt-na-odmoru-u-inostranstvu", title: "Smrt na odmoru u inostranstvu" },
      { href: "/cenovnik", title: "Cenovnik i faktori cene" },
      { href: "/prevoz-pokojnika-u-crnu-goru", title: "Prevoz pokojnika u Crnu Goru" },
      { href: "/prevoz-pokojnika-u-bih", title: "Prevoz pokojnika u BiH" },
    ],
  },

  {
    slug: "blog-smrt-na-odmoru-u-inostranstvu",
    title: "Smrt na odmoru u inostranstvu: prvi koraci | Transport pokojnika",
    description:
      "Smrt turiste na odmoru u Grčkoj, Crnoj Gori, Turskoj ili Egiptu: prvi koraci, konzulat, putno osiguranje, policija i obdukcija, dokumenta i put kući.",
    h1: "Smrt na odmoru u inostranstvu — šta uraditi i kako pokojnika vratiti kući",
    lead: "Letovanje u Grčkoj, na crnogorskom primorju, u Turskoj ili Egiptu trebalo bi da bude najbezbrižniji deo godine, pa smrt saputnika na odmoru zatiče porodicu potpuno nespremnu, u stranoj zemlji i često bez znanja jezika. U ovom vodiču objašnjavamo šta uraditi u prvim satima, kako da vam pomogne putno zdravstveno osiguranje, šta radi konzulat Srbije, zašto se ponekad čeka obdukcija i kojim putem pokojnik stiže kući.",
    date: "2026-10-20",
    readTime: "8 min čitanja",
    sections: [
      {
        h: "Prvi sati: hitna pomoć, policija i hotel",
        p: [
          "Ako je osoba preminula ili joj je pozlilo u hotelu, na plaži ili u apartmanu, prvo pozovite hitnu pomoć. U Grčkoj, kao i u celoj Evropskoj uniji, radi broj 112, a u Crnoj Gori se hitna medicinska pomoć poziva na 124. Lekar mora da utvrdi smrt i da je zabeleži; do njegovog dolaska pokojnika ne pomerajte.",
          "Kod utapanja, saobraćajne nesreće, pada ili iznenadne smrti mlađe osobe gotovo uvek dolazi i policija. U Crnoj Gori je lekar dužan da obavesti policiju kad god sumnja na nasilje, samoubistvo ili nesreću, a sličan postupak važi i u Grčkoj. To je redovna procedura i ne znači da se bilo ko sumnjiči.",
          "Obavestite recepciju hotela i, ako ste putovali preko agencije, njenog predstavnika: oni znaju lokalne službe i mogu da pomognu sa prevodom. Zapišite ime lekara, broj policijskog zapisnika i naziv ustanove u koju je pokojnik prevezen, jer će vam ti podaci trebati u svakom sledećem razgovoru.",
        ],
      },
      {
        h: "Putno zdravstveno osiguranje: prvo pozovite asistenciju",
        p: [
          "Pronađite polisu putnog zdravstvenog osiguranja i pozovite broj asistencije koji je na njoj odštampan, i to pre nego što bilo kome date nalog za prevoz. Mnoge polise srpskih osiguravača obuhvataju organizaciju i troškove prevoza posmrtnih ostataka do zemlje prebivališta, do iznosa navedenog u tabeli pokrića, dok troškove sahrane kod kuće izričito isključuju.",
          "Pročitajte i uslove o osiguranom slučaju. U tipičnim uslovima to je iznenadna bolest ili nezgoda, a bolest koja je u vezi sa ranijim zdravstvenim stanjem može biti isključena; u nekim polisama asistentska kuća bira i način prevoza, po pravilu onaj koji je najekonomičniji. Ako je polisa plaćena platnom karticom ili je deo turističkog aranžmana, proverite i te uslove.",
          `Naši ljudi koji žive u EU često putuju samo sa evropskom karticom zdravstvenog osiguranja. Ona pokriva neophodno lečenje u drugoj državi članici, ali ne i prevoz posmrtnih ostataka, pa taj trošak bez putnog osiguranja snosi porodica. Šta tačno obuhvata međunarodni prevoz pokojnika opisali smo na stranici ${link("/repatrijacija-pokojnika", "repatrijacija pokojnika")}.`,
        ],
      },
      {
        h: "Konzulat Srbije u Grčkoj i Crnoj Gori",
        p: [
          `Konzulat izdaje sprovodnicu za unos posmrtnih ostataka u Srbiju i daje informacije o postupku, ali ne organizuje i ne plaća prevoz. U Grčkoj se, prema stranici ${ext("https://athens.mfa.gov.rs/en/citizens/services/transport-human-remains", "Ambasade Srbije u Atini")}, zahtev predaje Konzularnom odeljenju Ambasade u Atini ili Generalnom konzulatu u Solunu. U Crnoj Gori Srbija ima Ambasadu u Podgorici i Generalni konzulat u Herceg Novom.`,
          "Nadležnost zavisi od prebivališta pokojnika — proveravamo je mi, kako porodica ne bi obilazila pogrešne šaltere. Ambasada u Atini u zahtevu traži i način prevoza, registarsku oznaku pogrebnog vozila ili broj leta, kao i potvrdu o balsamovanju, pa se ti podaci dogovaraju pre predaje.",
          `Kada je mesto sahrane u BiH, Crnoj Gori ili Severnoj Makedoniji, dozvolu za unos izdaje predstavništvo te države. Više o postupku iz Grčke pročitajte na stranicama ${link("/solun", "prevoz pokojnika iz Soluna")} i ${link("/atina", "prevoz pokojnika iz Atine")}.`,
        ],
      },
      {
        h: "Obdukcija i oslobađanje tela",
        p: [
          "U Grčkoj se obdukcija može naložiti kada je uzrok smrti nepoznat, a obavezna je kod iznenadne smrti ili sumnje na nasilnu smrt. Obavlja je sudski lekar (ιατροδικαστής) na zahtev policije. Izveštaj se piše na grčkom, šalje se sudu i može čekati mesecima, a porodici se po pravilu ne dostavlja direktno; kopiju može da zatraži lokalni advokat.",
          "Za porodicu je najvažnije da se pokojnik može preuzeti posle obdukcije, a pre završetka svih analiza. Dozvolu za iznošenje tela izdaje sudski lekar, a smrt se upisuje u matičnu službu opštine u kojoj je nastupila, obično u roku od 30 dana. Kod smrti u Crnoj Gori upis obavlja matični registar u opštini smrti.",
          "Dok traju ovi postupci, korisno je da porodica ne zakazuje datum sahrane. Bolje je da se ispraćaj potvrdi tek kada su poznati dan oslobađanja tela i datum polaska, nego da se pomera više puta.",
        ],
      },
      {
        h: "Dokumenta i overe: Grčka, Crna Gora, Turska, Egipat",
        p: [
          "Pravila o overi zavise od zemlje. Grčka je potpisala, ali nije ratifikovala Konvenciju CIEC br. 16 o višejezičnim izvodima, pa se grčki izvod iz matične knjige umrlih za Srbiju overava apostilom i prevodi na srpski. Crna Gora jeste članica te konvencije, pa se njen višejezični izvod prihvata bez legalizacije; kako nije članica EU, na granici sa Srbijom obavljaju se carinske formalnosti.",
          "Turska je članica Haške konvencije o apostilu, pa se turski dokumenti overavaju apostilom i prevode. Egipat nije članica te konvencije, pa se egipatski dokumenti legalizuju diplomatskim putem, što traži dodatno vreme.",
          `Spisak koji važi za Grčku, uz potvrdu o balsamovanju i dozvolu za prevoz, naveden je na stranici ${link("/grcka", "prevoz pokojnika iz Grčke")}, a za Crnu Goru na stranici ${link("/crna-gora", "prevoz pokojnika iz Crne Gore")}. U svakom slučaju čuvajte pasoš pokojnika: on se predaje uz zahtev za sprovodnicu i vraća porodici poništen.`,
        ],
      },
      {
        h: "Kombijem ili avionom: put kući",
        p: [
          "Iz Grčke i Crne Gore pokojnik se najčešće vraća specijalizovanim pogrebnim vozilom. Od Soluna do Beograda ima oko 620 km, a do Skoplja oko 230 km; od Atine do Beograda oko 1.090 km. Od Podgorice do Beograda ima oko 430 km, a do Sarajeva oko 270 km. Obavezni odmori vozača produžavaju stvarno trajanje puta.",
          `Sa grčkih ostrva pokojnik se prvo prevozi trajektom ili avionom do kopna, pa se tek onda nastavlja putem. Iz Turske i Egipta prevoz je gotovo uvek avionom, uz hermetički zatvoren sanduk propisan za međunarodni prevoz i dokumenta koja traži avio-prevoznik. Kada je koja varijanta brža objašnjavamo u tekstu ${link("/blog-prevoz-pokojnika-avionom-vs-kombijem", "prevoz pokojnika avionom ili kombijem")}.`,
        ],
      },
      {
        h: "Saputnici, lične stvari i povratak porodice",
        p: [
          "Saputnici često ostaju sami u hotelu, sa sopstvenim povratnim kartama i automobilom pokojnika. Ne moraju da ostanu u zemlji dok traje postupak: pogrebno preduzeće može na osnovu punomoćja da preuzme dokumenta i pokojnika, a porodica se vraća kući i priprema sahranu.",
          "Lične stvari koje su bile kod pokojnika, kao što su telefon, novčanik i nakit, policija ili bolnica predaju uz zapisnik. Tražite spisak i proverite ga pre potpisivanja. Ako ste već nekome dali nalog ili potpisali dokument na jeziku koji ne razumete, pošaljite nam fotografiju, pa ćemo zajedno proveriti šta on znači za dalji tok.",
        ],
      },
    ],
    faqs: [
      {
        q: "Da li putno osiguranje pokriva prevoz pokojnika kući?",
        a: "Mnoge polise putnog zdravstvenog osiguranja pokrivaju prevoz posmrtnih ostataka do zemlje prebivališta, ali samo do iznosa iz tabele pokrića i obično bez troškova sahrane. Asistenciju pozovite pre ugovaranja bilo kakvog troška, jer neke polise traže da prevoz organizuje ili odobri osiguravač.",
      },
      {
        q: "Šta ako je smrt posledica hronične bolesti — da li osiguranje i dalje plaća?",
        a: "Zavisi od uslova polise. Osigurani slučaj je obično iznenadna bolest ili nezgoda, a bolest vezana za ranije zdravstveno stanje može biti isključena. Zato pročitajte uslove ili nam pošaljite polisu da je pogledamo zajedno.",
      },
      {
        q: "Ko izdaje sprovodnicu kada srpski turista umre u Grčkoj?",
        a: "Zahtev se predaje Konzularnom odeljenju Ambasade Srbije u Atini ili Generalnom konzulatu u Solunu. Prilažu se grčki izvod iz matične knjige umrlih sa apostilom i prevodom, potvrda o uzroku smrti, dozvola za prevoz, potvrda o balsamovanju i pasoš pokojnika.",
      },
      {
        q: "Da li neko iz porodice mora da ostane u Grčkoj ili Crnoj Gori dok se ne završe dokumenta?",
        a: "Ne mora. Na osnovu punomoćja pogrebno preduzeće preuzima pokojnika i pribavlja dokumenta, a porodica se može vratiti kući. Ponekad policija traži da rodbina potvrdi identitet, pa se unapred dogovaramo šta je zaista potrebno.",
      },
      {
        q: "Da li je obdukcija u Grčkoj obavezna?",
        a: "Kod iznenadne smrti ili sumnje na nasilnu smrt jeste, a može se naložiti i kada uzrok nije jasan. Odluku donose policija i sudski lekar, ne porodica.",
      },
      {
        q: "Prevoz pokojnika iz Crne Gore u BiH ili Srbiju — koliko je daleko?",
        a: "Od Podgorice do Sarajeva ima oko 270 km, do Banja Luke oko 460 km, a do Beograda oko 430 km. Sa primorja se udaljenost razlikuje od mesta do mesta, a na granici se obavljaju carinske formalnosti jer Crna Gora nije članica EU.",
      },
    ],
    relatedLinks: [
      { href: "/grcka", title: "Prevoz pokojnika iz Grčke" },
      { href: "/crna-gora", title: "Prevoz pokojnika iz Crne Gore" },
      { href: "/solun", title: "Prevoz pokojnika iz Soluna" },
      { href: "/atina", title: "Prevoz pokojnika iz Atine" },
      { href: "/blog-sta-raditi-kada-neko-umre-u-inostranstvu", title: "Šta raditi kada neko umre u inostranstvu" },
    ],
  },
];
