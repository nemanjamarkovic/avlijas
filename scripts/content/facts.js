/**
 * Verified facts shared by the generated pages.
 *
 * - CONSULATES: Serbian diplomatic/consular missions and their consular districts,
 *   from the missions' own "Nadležnost" pages (*.mfa.gov.rs), checked October 2026.
 *   The sprovodnica (permit to bring remains into Serbia) is issued by the mission
 *   responsible for the deceased's last place of residence.
 * - ROUTES: road distance (rounded to 10 km) and pure driving time without breaks,
 *   from OSRM / OpenStreetMap, October 2026.
 */

const CONSULATES = {
  berlin: {
    name: "Ambasada Republike Srbije u Berlinu (konzularno odeljenje)",
    url: "https://berlin.mfa.gov.rs/",
    area: "Berlin, Brandenburg, Meklenburg-Prednja Pomeranija, Saksonija, Saksonija-Anhalt i Tiringija",
  },
  hamburg: {
    name: "Generalni konzulat Republike Srbije u Hamburgu",
    url: "https://hamburg.mfa.gov.rs/",
    area: "Hamburg, Donja Saksonija, Bremen i Šlezvig-Holštajn",
  },
  duesseldorf: {
    name: "Generalni konzulat Republike Srbije u Diseldorfu",
    url: "https://duesseldorf.mfa.gov.rs/",
    area: "Severna Rajna-Vestfalija",
  },
  frankfurt: {
    name: "Generalni konzulat Republike Srbije u Frankfurtu",
    url: "https://frankfurt.mfa.gov.rs/",
    area: "Hesen, Rajnland-Palatinat i Sarland",
  },
  munich: {
    name: "Generalni konzulat Republike Srbije u Minhenu",
    url: "https://munich.mfa.gov.rs/",
    area: "Bavarska",
  },
  stuttgart: {
    name: "Generalni konzulat Republike Srbije u Štutgartu",
    url: "https://stuttgart.mfa.gov.rs/",
    area: "Baden-Virtemberg",
  },
  vienna: {
    name: "Ambasada Republike Srbije u Beču (konzularno odeljenje)",
    url: "https://vienna.mfa.gov.rs/",
    area: "Beč, Donja Austrija, Gradišće, Štajerska i Koruška",
  },
  salzburg: {
    name: "Generalni konzulat Republike Srbije u Salcburgu",
    url: "https://salzburg.mfa.gov.rs/",
    area: "Salcburg, Tirol, Forarlberg i Gornja Austrija",
  },
  berne: {
    name: "Ambasada Republike Srbije u Bernu (konzularno odeljenje)",
    url: "https://berne.mfa.gov.rs/",
    area: "kantoni van nadležnosti konzulata u Cirihu — između ostalih Bern, Ženeva, Vo, Bazel, Fribur, Nešatel, Vale i Tičino",
  },
  zurich: {
    name: "Generalni konzulat Republike Srbije u Cirihu",
    url: "https://zurich.mfa.gov.rs/",
    area: "Cirih, Lucern, Uri, Švic, Obvalden, Nidvalden, Glarus, Cug, Šafhauzen, oba Apencela, Sankt Galen, Graubinden, Argau, Turgau i Lihtenštajn",
  },
  roma: {
    name: "Ambasada Republike Srbije u Rimu (konzularno odeljenje)",
    url: "https://roma.mfa.gov.rs/",
    area: "regioni centralne i južne Italije (van nadležnosti konzulata u Milanu i Trstu)",
  },
  milano: {
    name: "Generalni konzulat Republike Srbije u Milanu",
    url: "https://milano.mfa.gov.rs/",
    area: "Lombardija, Pijemont, Emilija-Romanja, Ligurija i Valle d'Aosta",
  },
  trieste: {
    name: "Generalni konzulat Republike Srbije u Trstu",
    url: "https://trieste.mfa.gov.rs/",
    area: "Furlanija-Julijska krajina, Veneto i Trentino-Alto Adiđe",
  },
  madrid: { name: "Ambasada Republike Srbije u Madridu", url: "https://madrid.mfa.gov.rs/", area: "cela Španija" },
  stockholm: { name: "Ambasada Republike Srbije u Stokholmu", url: "https://stockholm.mfa.gov.rs/", area: "cela Švedska" },
  copenhagen: { name: "Ambasada Republike Srbije u Kopenhagenu", url: "https://copenhagen.mfa.gov.rs/", area: "cela Danska" },
  oslo: { name: "Ambasada Republike Srbije u Oslu", url: "https://oslo.mfa.gov.rs/", area: "cela Norveška" },
  paris: { name: "Ambasada Republike Srbije u Parizu", url: "https://paris.mfa.gov.rs/", area: "cela Francuska osim departmana u nadležnosti konzulata u Strazburu" },
  strasbourg: {
    name: "Generalni konzulat Republike Srbije u Strazburu",
    url: "https://strasbourg.mfa.gov.rs/",
    area: "departmani Bas-Rhin, Haut-Rhin, Moselle, Meurthe-et-Moselle, Meuse, Vosges, Marne, Haute-Marne, Aube, Doubs, Haute-Saône, Territoire de Belfort, Nièvre i Yonne",
  },
  zagreb: {
    name: "Ambasada Republike Srbije u Zagrebu",
    url: "https://zagreb.mfa.gov.rs/",
    area: "Grad Zagreb i Zagrebačka, Varaždinska, Međimurska, Koprivničko-križevačka, Bjelovarsko-bilogorska, Sisačko-moslavačka, Zadarska, Šibensko-kninska, Splitsko-dalmatinska i Dubrovačko-neretvanska županija",
  },
  rijeka: { name: "Generalni konzulat Republike Srbije u Rijeci", url: "https://rijeka.mfa.gov.rs/" },
  vukovar: { name: "Generalni konzulat Republike Srbije u Vukovaru", url: "https://vukovar.mfa.gov.rs/" },
  podgorica: { name: "Ambasada Republike Srbije u Podgorici", url: "https://podgorica.mfa.gov.rs/" },
  hercegnovi: { name: "Generalni konzulat Republike Srbije u Herceg Novom", url: "https://hercegnovi.mfa.gov.rs/" },
  ljubljana: { name: "Ambasada Republike Srbije u Ljubljani", url: "https://ljubljana.mfa.gov.rs/", area: "cela Slovenija" },
  thehague: { name: "Ambasada Republike Srbije u Hagu", url: "https://thehague.mfa.gov.rs/", area: "cela Holandija" },
  brussels: { name: "Ambasada Republike Srbije u Briselu", url: "https://brussels.mfa.gov.rs/", area: "Belgija i Luksemburg" },
  athens: { name: "Ambasada Republike Srbije u Atini", url: "https://athens.mfa.gov.rs/" },
  thessaloniki: { name: "Generalni konzulat Republike Srbije u Solunu", url: "https://thessaloniki.mfa.gov.rs/" },
};

/** Destination cities shown in every route table. */
const DESTINATIONS = [
  { key: "beograd", name: "Beograd", country: "Srbija" },
  { key: "banjaLuka", name: "Banja Luka", country: "BiH (Republika Srpska)" },
  { key: "sarajevo", name: "Sarajevo", country: "BiH" },
  { key: "podgorica", name: "Podgorica", country: "Crna Gora" },
  { key: "skopje", name: "Skoplje", country: "Severna Makedonija" },
];

const r = (km, h) => ({ km, h });
// [Beograd, Banja Luka, Sarajevo, Podgorica, Skoplje]
const ROUTE_TABLE = {
  berlin: [r(1240, 13), r(1170, 13), r(1370, 15), r(1650, 20), r(1670, 17)],
  munchen: [r(940, 10), r(730, 8), r(950, 11), r(1170, 15), r(1370, 14)],
  hamburg: [r(1540, 15), r(1470, 15), r(1660, 18), r(1950, 22), r(1970, 20)],
  frankfurt: [r(1290, 13), r(1080, 11), r(1300, 14), r(1570, 18), r(1720, 18)],
  dusseldorf: [r(1510, 15), r(1300, 13), r(1520, 16), r(1790, 20), r(1940, 20)],
  koln: [r(1470, 15), r(1260, 13), r(1480, 16), r(1750, 20), r(1900, 19)],
  stuttgart: [r(1180, 12), r(970, 10), r(1180, 13), r(1410, 17), r(1610, 16)],
  dortmund: [r(1500, 15), r(1290, 13), r(1510, 16), r(1780, 20), r(1940, 20)],
  leipzig: [r(1150, 12), r(1110, 12), r(1280, 14), r(1610, 19), r(1580, 16)],
  dresden: [r(1050, 11), r(970, 11), r(1170, 13), r(1450, 18), r(1480, 15)],
  bec: [r(620, 6), r(550, 6), r(740, 9), r(1060, 13), r(1050, 11)],
  graz: [r(580, 6), r(370, 4), r(590, 7), r(880, 11), r(1010, 11)],
  linz: [r(800, 8), r(580, 7), r(800, 9), r(1090, 14), r(1240, 13)],
  salcburg: [r(810, 9), r(600, 7), r(820, 10), r(1040, 13), r(1240, 13)],
  insbruk: [r(980, 10), r(770, 8), r(990, 11), r(1210, 15), r(1410, 15)],
  cirih: [r(1250, 13), r(1040, 11), r(1260, 14), r(1480, 18), r(1680, 18)],
  zeneva: [r(1330, 14), r(1120, 12), r(1340, 15), r(1500, 18), r(1760, 18)],
  bern: [r(1370, 14), r(1160, 13), r(1380, 15), r(1540, 19), r(1800, 19)],
  rim: [r(1280, 13), r(1070, 11), r(1290, 14), r(1450, 17), r(1710, 17)],
  milano: [r(1020, 11), r(810, 9), r(1030, 12), r(1190, 15), r(1450, 15)],
  madrid: [r(2570, 27), r(2360, 25), r(2580, 28), r(2740, 31), r(3000, 31)],
  barselona: [r(1990, 21), r(1780, 19), r(2000, 22), r(2160, 25), r(2420, 25)],
  pariz: [r(1790, 18), r(1580, 16), r(1790, 19), r(2020, 23), r(2220, 23)],
  zagreb: [r(390, 4), r(180, 2), r(400, 5), r(710, 9), r(820, 9)],
  atina: [r(1090, 12), r(1420, 16), r(1280, 16), r(820, 12), r(690, 8)],
  solun: [r(620, 7), r(950, 10), r(820, 11), r(560, 8), r(230, 3)],
  oslo: [r(2610, 27), r(2530, 27), r(2730, 30), r(3020, 34), r(3040, 32)],
  stokholm: [r(2660, 28), r(2590, 27), r(2780, 30), r(3070, 34), r(3090, 32)],
  geteborg: [r(2310, 24), r(2240, 23), r(2440, 26), r(2730, 30), r(2740, 28)],
  kopenhagen: [r(2010, 20), r(1940, 20), r(2130, 23), r(2420, 27), r(2440, 25)],
  ljubljana: [r(530, 6), r(320, 4), r(540, 6), r(760, 10), r(960, 10)],
  maribor: [r(510, 5), r(300, 3), r(520, 6), r(800, 10), r(940, 10)],
  amsterdam: [r(1720, 18), r(1510, 16), r(1730, 19), r(2000, 23), r(2150, 22)],
  rotterdam: [r(1740, 18), r(1530, 16), r(1750, 19), r(2010, 23), r(2170, 22)],
  brisel: [r(1680, 17), r(1470, 15), r(1690, 18), r(1960, 22), r(2110, 22)],
  antverpen: [r(1680, 17), r(1470, 15), r(1690, 18), r(1950, 22), r(2110, 22)],
  podgorica: [r(430, 7), r(460, 8), r(270, 5), null, r(330, 6)],
};

/**
 * Per-country facts used by city pages and country hubs.
 * documents: [local name, explanation in Serbian]
 * multilingualExtract: party to the CIEC Convention No. 16 (Vienna, 1976) together with Serbia —
 *   the multilingual death-certificate extract is accepted without legalisation.
 */
const COUNTRY_META = {
  nemacka: {
    name: "Nemačka",
    nameGen: "Nemačke",
    nameLoc: "Nemačkoj",
    schemaCountry: "Germany",
    eu: true,
    multilingualExtract: true,
    duration: "2–4 dana",
    consulates: ["berlin", "hamburg", "duesseldorf", "frankfurt", "munich", "stuttgart"],
    documents: [
      ["Todesbescheinigung (Totenschein)", "lekarska potvrda o smrti i uzroku smrti"],
      ["Sterbeurkunde", "izvod iz matične knjige umrlih — izdaje Standesamt (matična služba) mesta smrti"],
      ["Leichenpass", "dozvola za prevoz posmrtnih ostataka u inostranstvo"],
    ],
    authorityNote:
      "Nadležnost za Leichenpass u Nemačkoj zavisi od pokrajine: negde ga izdaje opština u kojoj prevoz počinje, negde Gesundheitsamt ili Ordnungsamt mesta smrti. Preduslov je da Standesamt na potvrdi o smrti zabeleži da je smrt upisana.",
  },
  austrija: {
    name: "Austrija",
    nameGen: "Austrije",
    nameLoc: "Austriji",
    schemaCountry: "Austria",
    eu: true,
    multilingualExtract: true,
    duration: "1–3 dana",
    consulates: ["vienna", "salzburg"],
    documents: [
      ["Totenbeschaubefund", "nalaz mrtvozornika (Totenbeschau) o smrti"],
      ["Sterbeurkunde", "izvod iz matične knjige umrlih — izdaje Standesamt mesta smrti"],
      ["Leichenpass (Überführungsbewilligung)", "dozvola za prevoz u inostranstvo — izdaje okružna uprava (Bezirkshauptmannschaft) ili magistrat"],
    ],
    authorityNote:
      "U Austriji dozvolu za prevoz posmrtnih ostataka u inostranstvo (Leichenpass, Überführungsbewilligung) izdaje okružni upravni organ — Bezirkshauptmannschaft, a u statutarnim gradovima magistrat.",
  },
  svajcarska: {
    name: "Švajcarska",
    nameGen: "Švajcarske",
    nameLoc: "Švajcarskoj",
    schemaCountry: "Switzerland",
    eu: false,
    multilingualExtract: true,
    duration: "2–4 dana",
    consulates: ["zurich", "berne"],
    documents: [
      ["Ärztliche Todesbescheinigung / certificat médical de décès", "lekarska potvrda o smrti"],
      ["Todesschein / Auszug aus dem Todesregister (acte de décès)", "izvod iz registra umrlih — izdaje matična služba (Zivilstandsamt / état civil)"],
      ["Leichenpass (laissez-passer mortuaire)", "dozvola za prevoz u inostranstvo — izdaje kantonalni organ"],
    ],
    authorityNote:
      "Švajcarska nije članica EU, pa se pri izlasku iz zemlje obavljaju i carinske formalnosti. Leichenpass izdaje nadležni kantonalni organ, a postupak se razlikuje od kantona do kantona.",
  },
  italija: {
    name: "Italija",
    nameGen: "Italije",
    nameLoc: "Italiji",
    schemaCountry: "Italy",
    eu: true,
    multilingualExtract: true,
    duration: "2–4 dana",
    consulates: ["roma", "milano", "trieste"],
    documents: [
      ["Certificato necroscopico", "lekarska potvrda o smrti"],
      ["Estratto dell'atto di morte", "izvod iz matične knjige umrlih — izdaje Comune (opština) mesta smrti"],
      ["Passaporto mortuario", "međunarodna propusnica za posmrtne ostatke (po Berlinskom sporazumu iz 1937)"],
    ],
    authorityNote:
      "U Italiji opština (Comune) mesta smrti izdaje izvod iz matične knjige umrlih i dozvolu za prevoz, a za prelazak granice potreban je passaporto mortuario koji izdaje prefektura ili, u pojedinim regionima, opština.",
  },
  spanija: {
    name: "Španija",
    nameGen: "Španije",
    nameLoc: "Španiji",
    schemaCountry: "Spain",
    eu: true,
    multilingualExtract: true,
    duration: "4–6 dana",
    consulates: ["madrid"],
    documents: [
      ["Certificado médico de causa de la muerte", "lekarska potvrda o uzroku smrti"],
      ["Certificado de defunción (Registro Civil)", "izvod iz matične knjige umrlih"],
      ["Certificado de embalsamamiento", "potvrda o balsamovanju ili privremenoj konzervaciji"],
      ["Salvoconducto mortuorio", "propusnica za međunarodni prevoz posmrtnih ostataka"],
    ],
    authorityNote:
      "U Španiji smrt se upisuje u Registro Civil, zahtev za prevoz podnosi se lokalnom zdravstvenom organu, a izlazak iz zemlje odobrava služba Sanidad Exterior pokrajine u kojoj je nastupila smrt. Kod nasilne smrti potrebna je i dozvola suda.",
  },
  svedska: {
    name: "Švedska",
    nameGen: "Švedske",
    nameLoc: "Švedskoj",
    schemaCountry: "Sweden",
    eu: true,
    multilingualExtract: false,
    duration: "4–7 dana",
    consulates: ["stockholm"],
    documents: [
      ["Dödsbevis", "potvrda o smrti"],
      ["Intyg om dödsorsak", "lekarski izveštaj o uzroku smrti"],
      ["Personbevis / utdrag (Skatteverket)", "izvod iz registra o smrti — izdaje poreska uprava Skatteverket"],
    ],
    authorityNote:
      "U Švedskoj smrt se upisuje kod poreske uprave Skatteverket, koja vodi matične podatke. Za upotrebu u Srbiji izvod je potrebno overiti apostilom i prevesti na srpski.",
  },
  danska: {
    name: "Danska",
    nameGen: "Danske",
    nameLoc: "Danskoj",
    schemaCountry: "Denmark",
    eu: true,
    multilingualExtract: false,
    duration: "3–5 dana",
    consulates: ["copenhagen"],
    documents: [
      ["Dødsattest", "potvrda o smrti"],
      ["Ligpas", "propusnica za prevoz kovčega preko granice (za urnu nije potrebna)"],
      ["Udskrift (CPR)", "izvod iz registra o smrti"],
    ],
    authorityNote:
      "U Danskoj je za prevoz kovčega preko granice potrebna propusnica ligpas, dok se za urnu ne traži. Dokumenti namenjeni srpskim organima overavaju se apostilom i prevode na srpski.",
  },
  francuska: {
    name: "Francuska",
    nameGen: "Francuske",
    nameLoc: "Francuskoj",
    schemaCountry: "France",
    eu: true,
    multilingualExtract: true,
    duration: "2–4 dana",
    consulates: ["paris", "strasbourg"],
    documents: [
      ["Certificat de décès", "lekarska potvrda o smrti"],
      ["Acte de décès", "izvod iz matične knjige umrlih — izdaje opština (mairie) mesta smrti"],
      ["Autorisation de fermeture du cercueil", "odobrenje gradonačelnika za zatvaranje kovčega"],
      ["Autorisation préfectorale de transport de corps", "odobrenje prefekta za prevoz posmrtnih ostataka van Francuske"],
      ["Passeport du défunt", "pasoš pokojnika"],
    ],
    authorityNote:
      "U Francuskoj smrt upisuje opština (mairie) mesta smrti, gradonačelnik odobrava zatvaranje kovčega, a dozvolu za prevoz van zemlje izdaje prefektura departmana u kome se kovčeg zatvara. Kod nasilne ili nejasne smrti prethodno je potrebna saglasnost tužilaštva.",
  },
  hrvatska: {
    name: "Hrvatska",
    nameGen: "Hrvatske",
    nameLoc: "Hrvatskoj",
    schemaCountry: "Croatia",
    eu: true,
    multilingualExtract: true,
    duration: "1–3 dana",
    consulates: ["zagreb", "rijeka", "vukovar"],
    documents: [
      ["Potvrda o smrti", "potvrda mrtvozornika o smrti i uzroku smrti"],
      ["Izvadak iz matice umrlih", "izvod iz matične knjige umrlih — izdaje matični ured; međunarodni obrazac važi u Srbiji bez legalizacije"],
      ["Sprovodnica (posmrtni putni list)", "hrvatska dozvola za prevoz umrle osobe preko granice — izdaje sanitarni inspektor nadležan prema mestu smrti"],
      ["Osobna iskaznica ili putovnica", "lična karta ili pasoš pokojnika"],
    ],
    authorityNote:
      "U Hrvatskoj smrt upisuje matični ured, a hrvatsku dozvolu za prevoz preko granice (posmrtni putni list, sprovodnica) izdaje sanitarni inspektor nadležan prema mestu smrti. U zahtevu se navode granični prelaz i registarska oznaka pogrebnog vozila.",
  },
  "crna-gora": {
    name: "Crna Gora",
    nameGen: "Crne Gore",
    nameLoc: "Crnoj Gori",
    schemaCountry: "Montenegro",
    eu: false,
    multilingualExtract: true,
    duration: "1–2 dana",
    consulates: ["podgorica", "hercegnovi"],
    documents: [
      ["Potvrda o smrti", "lekarska potvrda o smrti i uzroku smrti"],
      ["Izvod iz matičnog registra umrlih", "na međunarodnom (višejezičnom) obrascu važi u Srbiji bez legalizacije"],
      ["Dozvola za prevoz posmrtnih ostataka", "izdaju je nadležni crnogorski organi"],
      ["Lična dokumenta pokojnika", "pasoš ili lična karta"],
    ],
    authorityNote:
      "U Crnoj Gori smrt upisuje matični registar, a dozvolu za prevoz posmrtnih ostataka izdaju nadležni crnogorski organi. Crna Gora nije članica EU, pa se na granici sa Srbijom obavljaju carinske formalnosti.",
  },
  grcka: {
    name: "Grčka",
    nameGen: "Grčke",
    nameLoc: "Grčkoj",
    schemaCountry: "Greece",
    eu: true,
    multilingualExtract: false,
    duration: "3–5 dana",
    consulates: ["athens", "thessaloniki"],
    documents: [
      ["Ιατρικό πιστοποιητικό θανάτου", "lekarska potvrda o smrti i uzroku smrti"],
      ["Ληξιαρχική πράξη θανάτου", "akt o smrti iz matične službe opštine — za Srbiju se overava apostilom i prevodi"],
      ["Άδεια μεταφοράς", "dozvola za prevoz posmrtnih ostataka u inostranstvo"],
      ["Ταυτότητα / διαβατήριο", "lična karta ili pasoš pokojnika"],
    ],
    authorityNote:
      "U Grčkoj smrt upisuje matična služba opštine, a za prevoz u inostranstvo potrebna je posebna dozvola nadležnih organa. Grčka nije ratifikovala Bečku konvenciju o višejezičnim izvodima, pa se dokumenta za Srbiju overavaju apostilom i prevode.",
  },
  norveska: {
    name: "Norveška",
    nameGen: "Norveške",
    nameLoc: "Norveškoj",
    schemaCountry: "Norway",
    eu: false,
    multilingualExtract: false,
    duration: "4–7 dana",
    consulates: ["oslo"],
    documents: [
      ["Legeerklæring om dødsfall", "lekarska potvrda o smrti i uzroku smrti"],
      ["Dødsattest", "potvrda o smrti — za srpske organe overava se apostilom i prevodi na srpski"],
      ["Smitteattest", "potvrda da smrt nije posledica zarazne bolesti — traži se za prevoz kovčega"],
      ["Tillatelse fra politiet", "dozvola norveške policije za prevoz kovčega iz zemlje"],
      ["Pass / identifikasjon", "pasoš ili lična dokumenta pokojnika"],
    ],
    authorityNote:
      "U Norveškoj lekar prijavljuje smrt Folkeregisteru, a za iznošenje kovčega iz zemlje potrebna je dozvola policije i potvrda da smrt nije posledica zarazne bolesti (smitteattest). Norveška nije članica EU, pa se na izlasku obavljaju carinske formalnosti.",
  },
  slovenija: {
    name: "Slovenija",
    nameGen: "Slovenije",
    nameLoc: "Sloveniji",
    schemaCountry: "Slovenia",
    eu: true,
    multilingualExtract: true,
    duration: "1–3 dana",
    consulates: ["ljubljana"],
    documents: [
      ["Prijava smrti / potrdilo mrliškega oglednika", "potvrda lekara mrtvozornika o smrti i uzroku smrti"],
      ["Izpisek iz matičnega registra (smrt)", "izvod iz matične knjige umrlih — na višejezičnom obrascu važi u Srbiji bez legalizacije"],
      ["Posmrtni potni list", "slovenačka dozvola za prevoz posmrtnih ostataka u inostranstvo — izdaje Zdravstveni inšpektorat Republike Slovenije"],
    ],
    authorityNote:
      "U Sloveniji smrt utvrđuje lekar mrtvozornik (mrliški oglednik), a za prevoz posmrtnih ostataka u inostranstvo Zdravstveni inšpektorat Republike Slovenije izdaje posmrtni potni list, na zahtev pogrebnog preduzeća. Uzrok smrti navodi se na slovenačkom jeziku i sa šifrom međunarodne klasifikacije bolesti.",
  },
  holandija: {
    name: "Holandija",
    nameGen: "Holandije",
    nameLoc: "Holandiji",
    schemaCountry: "Netherlands",
    eu: true,
    multilingualExtract: true,
    duration: "3–5 dana",
    consulates: ["thehague"],
    documents: [
      ["Verklaring van overlijden", "lekarska potvrda o smrti"],
      ["Akte van overlijden", "izvod iz matične knjige umrlih — izdaje opština (Burgerlijke Stand); višejezični izvod važi u Srbiji bez legalizacije"],
      ["Verlof tot begraven of cremeren", "dozvola opštine za sahranu ili kremaciju"],
      ["Laissez-passer", "dozvola za prevoz posmrtnih ostataka u inostranstvo — izdaje opština mesta smrti"],
    ],
    authorityNote:
      "U Holandiji smrt prijavljuje se opštini mesta smrti, koja upisuje smrt (akte van overlijden), izdaje dozvolu za sahranu ili kremaciju i, za prevoz van zemlje, laissez-passer. Pre izdavanja dozvole opština mora da ima lekarsku potvrdu o prirodnoj smrti ili saglasnost tužilaštva.",
  },
  belgija: {
    name: "Belgija",
    nameGen: "Belgije",
    nameLoc: "Belgiji",
    schemaCountry: "Belgium",
    eu: true,
    multilingualExtract: true,
    duration: "3–5 dana",
    consulates: ["brussels"],
    documents: [
      ["Certificat de décès / overlijdensattest", "lekarska potvrda o smrti"],
      ["Acte de décès / akte van overlijden", "izvod iz matične knjige umrlih — izdaje opština; višejezični izvod važi u Srbiji bez legalizacije"],
      ["Certificat de non-contagion", "lekarska potvrda da smrt nije posledica zarazne bolesti — traži se po pravilu"],
      ["Laissez-passer mortuaire", "dozvola za prevoz posmrtnih ostataka u inostranstvo — izdaje nadležni belgijski organ"],
    ],
    authorityNote:
      "U Belgiji smrt prijavljuje pogrebno preduzeće ili dve punoletne osobe matičnoj službi opštine mesta smrti (na francuskom ili holandskom, zavisno od regiona), a za prevoz van zemlje potreban je laissez-passer mortuaire nadležnog organa. Kod nasilne ili nejasne smrti telo se izdaje tek uz saglasnost tužilaštva.",
  },
};

module.exports = { CONSULATES, DESTINATIONS, ROUTE_TABLE, COUNTRY_META };
