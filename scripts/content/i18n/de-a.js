/** German pages (de-a) — rendered by renderLocalePage() in scripts/build-site.js. Fields: see the i18n brief. */
const a = (href, text) => `<a href="${href}" class="text-primary">${text}</a>`;

module.exports = [
  // ───────────────────────────── Startseite ─────────────────────────────
  {
    key: "home",
    slug: "",
    title: "Überführung Verstorbener nach Serbien und Bosnien",
    description:
      "Überführung Verstorbener aus Deutschland, Österreich und der Schweiz nach Serbien, Bosnien, Montenegro und Nordmazedonien. Alle Dokumente, rund um die Uhr.",
    h1: "Überführung Verstorbener in den Balkan – nach Serbien, Bosnien, Montenegro und Nordmazedonien",
    crumb: "Startseite",
    lead: "Wir sind ein Bestattungsunternehmen aus Belgrad und überführen Verstorbene aus ganz Europa in ihre Heimat: nach Serbien, Bosnien und Herzegowina mit der Republika Srpska, Montenegro und Nordmazedonien. Wir kümmern uns um alle Dokumente und sind rund um die Uhr für Sie erreichbar – auf Deutsch.",
    cards: [
      { href: "/de/ueberfuehrung-nach-serbien", title: "Überführung nach Serbien", text: "Ablauf, serbische Genehmigung (sprovodnica), Strecken und Dauer bis zur Beerdigung in Serbien." },
      { href: "/de/ueberfuehrung-nach-bosnien", title: "Überführung nach Bosnien", text: "Genehmigung der Vertretung von Bosnien und Herzegowina, Formular nach Entität, Wege nach Banja Luka und Sarajevo." },
      { href: "/de/ueberfuehrung-nach-montenegro", title: "Überführung nach Montenegro", text: "Einreisegenehmigung Montenegros, Route über Serbien oder entlang der Adria bis Podgorica." },
      { href: "/de/ueberfuehrung-nach-nordmazedonien", title: "Überführung nach Nordmazedonien", text: "Genehmigung Nordmazedoniens und serbische Transitgenehmigung für die Fahrt nach Skopje." },
      { href: "/de/ueberfuehrung-aus-deutschland", title: "Überführung aus Deutschland", text: "Totenschein, Sterbeurkunde, Leichenpass je nach Bundesland und die zuständigen serbischen Konsulate." },
      { href: "/de/ueberfuehrung-aus-oesterreich", title: "Überführung aus Österreich", text: "Totenbeschau, Standesamt und Leichenpass von Bezirkshauptmannschaft oder Magistrat." },
      { href: "/de/ueberfuehrung-aus-der-schweiz", title: "Überführung aus der Schweiz", text: "Zivilstandsamt, kantonaler Leichenpass und Zollformalitäten beim Verlassen der Schweiz." },
      { href: "/de/dokumente-leichenpass", title: "Dokumente und Leichenpass", text: "Welche Papiere für eine Überführung ins Ausland nötig sind und wer sie ausstellt." },
      { href: "/de/kosten-ueberfuehrung", title: "Kosten einer Überführung", text: "Wovon der Preis abhängt, was enthalten ist und warum Sie ihn schon im ersten Gespräch erfahren." },
      { href: "/de/kontakt", title: "Kontakt", text: "Telefon, WhatsApp, Viber und E-Mail – rund um die Uhr, aus jedem Land." },
    ],
    sections: [
      {
        h: "Wenn ein Angehöriger fern der Heimat stirbt",
        p: [
          "Viele Familien aus Serbien, Bosnien und Herzegowina, Montenegro und Nordmazedonien leben seit Jahrzehnten in Deutschland, Österreich oder der Schweiz. Stirbt ein Vater, eine Großmutter oder ein Ehepartner dort, wünschen sich die Angehörigen oft eine Beerdigung im Heimatort, neben den Eltern und Großeltern. Gleichzeitig müssen sie Entscheidungen treffen, Behörden anrufen und Formulare verstehen – und das in einer Zeit, in der eigentlich Raum für Trauer sein sollte.",
          "Genau hier setzen wir an. Wir übernehmen die Leichenüberführung ins Ausland von der ersten Minute an: vom Krankenhaus, Pflegeheim oder der Wohnung bis zum Friedhof in der Heimat. Die Familie spricht dabei immer mit derselben Ansprechperson, die jeden Schritt erklärt und Sie auf dem Laufenden hält.",
        ],
      },
      {
        h: "Was wir für Sie übernehmen",
        p: ["Eine Überführung von Verstorbenen aus dem Ausland besteht aus vielen kleinen Schritten. Wir kümmern uns um alle:"],
        list: [
          "Abholung des Verstorbenen und Gespräche mit Klinik, Heim, Standesamt oder Zivilstandsamt – auf Deutsch",
          "Totenschein, Sterbeurkunde (bevorzugt die mehrsprachige, sogenannte internationale Sterbeurkunde) und Leichenpass",
          "die Überführungsgenehmigung der serbischen Botschaft bzw. des Generalkonsulats (serbisch: sprovodnica) oder die Genehmigung von Bosnien und Herzegowina, Montenegro oder Nordmazedonien",
          "Einsargung in einen hermetisch verschlossenen Sarg, wie er für internationale Überführungen vorgeschrieben ist",
          "Fahrt in einem speziellen Bestattungsfahrzeug, Grenz- und Zollformalitäten",
          "Übergabe an die Familie oder an den örtlichen Bestattungsdienst am Ort der Beerdigung",
        ],
      },
      {
        h: "So läuft eine Überführung ab",
        p: [
          "Im ersten Telefonat klären wir, wo der Tod eingetreten ist, wo der Verstorbene zuletzt gemeldet war und wo die Beerdigung stattfinden soll. Daraus ergibt sich, welche Behörde den Leichenpass ausstellt und welche Vertretung die Einreise genehmigt. Noch im selben Gespräch nennen wir Ihnen den genauen Preis – ohne versteckte Kosten.",
          "Danach beantragen wir die Dokumente parallel, damit keine Zeit verloren geht. Sobald alle Originale vorliegen, wird der Sarg verschlossen und das Fahrzeug fährt los. Sie erfahren von uns, wann die Grenze passiert ist und wann der Verstorbene ankommt.",
        ],
      },
      {
        h: "Strecken und Dauer",
        p: [
          `Von München bis Belgrad sind es ca. 940 km, von Wien ca. 620 km und von Zürich ca. 1.250 km. Nach Banja Luka fährt man von Graz nur ca. 370 km, nach Skopje von Frankfurt dagegen ca. 1.720 km. Die reine Fahrzeit ist dabei nur ein Teil: Vorgeschriebene Lenk- und Ruhezeiten verlängern jede Fahrt.`,
          `Vom ersten Anruf bis zur Übergabe vergehen bei einer Überführung aus Österreich meist 1–3 Tage, aus Deutschland und der Schweiz meist 2–4 Tage. Die meiste Zeit beanspruchen die Dokumente. Einzelheiten finden Sie auf den Seiten ${a("/de/ueberfuehrung-aus-deutschland", "Überführung aus Deutschland")}, ${a("/de/ueberfuehrung-aus-oesterreich", "aus Österreich")} und ${a("/de/ueberfuehrung-aus-der-schweiz", "aus der Schweiz")}.`,
        ],
      },
      {
        h: "Auch für Bestatter, Kliniken und Versicherungen",
        p: [
          `Nicht nur Familien rufen uns an. Bestattungsinstitute in Deutschland, Österreich und der Schweiz, Sozialdienste von Krankenhäusern, Pflegeheime und Versicherungen brauchen oft einen Partner, der die Überführung in den Balkan zuverlässig übernimmt und die Vorschriften der Zielländer kennt. Wir stimmen uns gern direkt mit Ihnen ab. Welche Unterlagen wir dafür brauchen, steht auf der Seite ${a("/de/dokumente-leichenpass", "Dokumente und Leichenpass")}.`,
        ],
      },
    ],
    faqs: [
      {
        q: "Todesfall im Ausland – was tun als Erstes?",
        a: `Bewahren Sie Ruhe und rufen Sie uns an, am besten bevor Sie weitere Aufträge vergeben. Halten Sie, wenn möglich, den Reisepass des Verstorbenen bereit und nennen Sie uns den Ort der Beerdigung. Alles Weitere erklären wir Ihnen Schritt für Schritt. Wie Sie uns erreichen, steht auf der Seite ${a("/de/kontakt", "Kontakt")}.`,
      },
      {
        q: "Was kostet eine Überführung eines Toten aus dem Ausland?",
        a: `Das hängt vor allem von der Entfernung, dem Zielland und den nötigen Dokumenten ab. Den genauen Preis nennen wir Ihnen im ersten Gespräch, ohne versteckte Kosten. Die einzelnen Faktoren erklären wir auf der Seite ${a("/de/kosten-ueberfuehrung", "Kosten einer Überführung")}.`,
      },
      {
        q: "Wie lange dauert eine Überführung eines Toten aus dem Ausland?",
        a: "Aus Österreich meist 1–3 Tage, aus Deutschland und der Schweiz meist 2–4 Tage, gerechnet vom ersten Anruf bis zur Übergabe. Wochenenden, Feiertage oder eine Obduktion können den Ablauf verlängern.",
      },
      {
        q: "Muss ich selbst zum Konsulat gehen?",
        a: "In der Regel nicht. Den Antrag auf die serbische Genehmigung und die Genehmigungen der anderen Zielländer stellen wir als beauftragtes Bestattungsunternehmen. Falls nötig, schicken wir Ihnen eine Vollmacht zur Unterschrift.",
      },
      {
        q: "Überführen Sie auch Urnen?",
        a: "Ja. Auch für eine Urne braucht es eine Einreisegenehmigung des Ziellandes, für Serbien zusätzlich die Bescheinigung über die Einäscherung. Die Urne muss fest verschlossen und für die Reise geschützt sein.",
      },
    ],
    relatedLinks: [
      { href: "/de/ueberfuehrung-nach-serbien", title: "Überführung nach Serbien" },
      { href: "/de/ueberfuehrung-nach-bosnien", title: "Überführung nach Bosnien" },
      { href: "/de/dokumente-leichenpass", title: "Dokumente und Leichenpass" },
      { href: "/de/kontakt", title: "Kontakt" },
    ],
  },

  // ───────────────────────────── Serbien ─────────────────────────────
  {
    key: "dest-serbia",
    slug: "ueberfuehrung-nach-serbien",
    title: "Überführung nach Serbien – Ablauf und Dokumente",
    description:
      "Überführung Verstorbener nach Serbien aus Deutschland, Österreich und der Schweiz: serbische Genehmigung (sprovodnica), Leichenpass, Strecken und Dauer.",
    h1: "Überführung nach Serbien",
    crumb: "Überführung nach Serbien",
    lead: "Wir überführen Verstorbene aus Deutschland, Österreich, der Schweiz und allen anderen europäischen Ländern an jeden Ort in Serbien – nach Belgrad ebenso wie in ein Dorf im Süden des Landes. Die Dokumente des Sterbelandes und die serbische Genehmigung besorgen wir, Sie haben während der ganzen Zeit eine feste Ansprechperson.",
    sections: [
      {
        h: "Überführung Verstorbener nach Serbien: worum es geht",
        p: [
          "Für viele Menschen aus Serbien, die seit Jahrzehnten in Deutschland, Österreich oder der Schweiz leben, ist klar: Begraben werden möchten sie zu Hause. Wenn es so weit ist, stehen die Angehörigen vor zwei Aufgaben zugleich. Die Behörden des Sterbelandes müssen den Tod beurkunden und die Ausfuhr erlauben, und Serbien muss der Einreise des Verstorbenen zustimmen.",
          "Eine Leichenüberführung nach Serbien ist deshalb immer ein Zusammenspiel aus deutschen, österreichischen oder Schweizer Dokumenten und einer serbischen Genehmigung. Wir kennen beide Seiten, sprechen mit den Ämtern im Sterbeland Deutsch und reichen die Anträge bei der zuständigen serbischen Vertretung ein.",
        ],
      },
      {
        h: "Die serbische Genehmigung (sprovodnica)",
        p: [
          "Ohne sie darf kein Verstorbener nach Serbien gebracht werden: Gemeint ist die Überführungsgenehmigung der serbischen Botschaft bzw. des Generalkonsulats, auf Serbisch sprovodnica. Zuständig ist die serbische Vertretung, in deren Bezirk der Verstorbene zuletzt gewohnt hat – nicht unbedingt die nächstgelegene. Den Antrag stellt ein Familienmitglied oder ein bevollmächtigtes Bestattungsunternehmen.",
          "Nach den Angaben des serbischen Außenministeriums werden in der Regel folgende Unterlagen im Original vorgelegt:",
        ],
        list: [
          "Reisepass des Verstorbenen",
          "Antrag mit Angabe des Beerdigungsortes und der Fahrtroute",
          "Sterbeurkunde der ausländischen Behörde, z. B. Sterbeurkunde des Standesamts oder Auszug aus dem Todesregister",
          "ärztliche Bescheinigung über die Todesursache, z. B. Todesbescheinigung (Totenschein)",
          "Überführungsgenehmigung des Sterbelandes, in Deutschland, Österreich und der Schweiz der Leichenpass",
          "bei ausländischen Staatsangehörigen eine Bestätigung, dass in Serbien eine Grabstelle gesichert ist",
        ],
      },
      {
        h: "Welche serbische Vertretung zuständig ist",
        p: ["Maßgeblich ist der letzte Wohnsitz. In Deutschland, Österreich und der Schweiz sind die Bezirke laut den Seiten der Vertretungen so aufgeteilt:"],
        list: [
          "Botschaft der Republik Serbien in Berlin (Konsularabteilung): Berlin, Brandenburg, Mecklenburg-Vorpommern, Sachsen, Sachsen-Anhalt und Thüringen",
          "Generalkonsulat der Republik Serbien in Hamburg: Hamburg, Niedersachsen, Bremen und Schleswig-Holstein",
          "Generalkonsulat der Republik Serbien in Düsseldorf: Nordrhein-Westfalen",
          "Generalkonsulat der Republik Serbien in Frankfurt: Hessen, Rheinland-Pfalz und Saarland",
          "Generalkonsulat der Republik Serbien in München: Bayern",
          "Generalkonsulat der Republik Serbien in Stuttgart: Baden-Württemberg",
          "Botschaft der Republik Serbien in Wien (Konsularabteilung): Wien, Niederösterreich, Burgenland, Steiermark und Kärnten",
          "Generalkonsulat der Republik Serbien in Salzburg: Salzburg, Tirol, Vorarlberg und Oberösterreich",
          "Generalkonsulat der Republik Serbien in Zürich: Zürich, Luzern, Uri, Schwyz, Obwalden, Nidwalden, Glarus, Zug, Schaffhausen, beide Appenzell, St. Gallen, Graubünden, Aargau, Thurgau sowie Liechtenstein",
          "Botschaft der Republik Serbien in Bern (Konsularabteilung): die übrigen Kantone, darunter Bern, Genf, Waadt, Basel, Freiburg, Neuenburg, Wallis und Tessin",
        ],
      },
      {
        h: "Dokumente aus dem Sterbeland und die internationale Sterbeurkunde",
        p: [
          "Die erste Gruppe von Papieren entsteht dort, wo der Tod eingetreten ist. In Deutschland stellt der Arzt die Todesbescheinigung aus, das Standesamt beurkundet den Sterbefall, und eine je nach Bundesland unterschiedliche Behörde erteilt den Leichenpass – in Bayern etwa die Gemeinde, in der die Überführung beginnt. In Österreich steht am Anfang die Totenbeschau, den Leichenpass erteilt die Bezirkshauptmannschaft oder in Statutarstädten der Magistrat. In der Schweiz beurkundet das Zivilstandsamt den Tod, und der Leichenpass kommt von einer kantonalen Stelle.",
          `Serbien, Deutschland, Österreich und die Schweiz gehören dem CIEC-Übereinkommen Nr. 16 (Wien, 1976) über mehrsprachige Auszüge aus Personenstandsbüchern an. Die mehrsprachige, oft „internationale Sterbeurkunde“ genannte Fassung wird in Serbien deshalb in der Regel ohne Legalisation und ohne Übersetzung anerkannt. Unterlagen aus Schweden, Dänemark, Norwegen oder Griechenland brauchen dagegen eine Apostille und eine Übersetzung ins Serbische. Eine Übersicht aller Papiere finden Sie unter ${a("/de/dokumente-leichenpass", "Dokumente und Leichenpass")}.`,
        ],
      },
      {
        h: "Sarg, Urne und Vorbereitung des Verstorbenen",
        p: [
          "Für eine Überführung über die Grenze ist ein hermetisch verschlossener Sarg vorgeschrieben, in der Praxis meist ein Holzsarg mit Zinkeinsatz, der nach der Einsargung verlötet wird. Bei der Zinksarg-Überführung bleibt der Sarg bis zum Bestimmungsort geschlossen. Wünsche zur Kleidung, zu religiösen Beigaben oder zur rituellen Waschung besprechen wir deshalb, bevor der Sarg verschlossen wird.",
          "Wurde der Verstorbene im Sterbeland eingeäschert, wird eine Urne überführt. Auch dafür ist die serbische Genehmigung nötig, zusätzlich die Bescheinigung über die Einäscherung.",
        ],
      },
      {
        h: "Strecken und Fahrzeiten bis Belgrad",
        p: [
          "Die folgenden Entfernungen gelten für die Straße bis Belgrad; in Klammern steht die reine Fahrzeit ohne Pausen. Mit den vorgeschriebenen Ruhezeiten des Fahrers dauert die Fahrt länger. Orte in Mittel- und Südserbien liegen entsprechend weiter.",
        ],
        list: [
          "Wien: ca. 620 km (ca. 6 Std.)",
          "Graz: ca. 580 km (ca. 6 Std.)",
          "Salzburg: ca. 810 km (ca. 9 Std.)",
          "München: ca. 940 km (ca. 10 Std.)",
          "Stuttgart: ca. 1.180 km (ca. 12 Std.)",
          "Berlin: ca. 1.240 km (ca. 13 Std.)",
          "Frankfurt am Main: ca. 1.290 km (ca. 13 Std.)",
          "Köln: ca. 1.470 km (ca. 15 Std.)",
          "Hamburg: ca. 1.540 km (ca. 15 Std.)",
          "Zürich: ca. 1.250 km (ca. 13 Std.)",
        ],
      },
      {
        h: "Dauer und Grenze",
        p: [
          "Vom ersten Anruf bis zur Übergabe in Serbien vergehen bei einer Überführung aus Österreich meist 1–3 Tage, aus Deutschland und der Schweiz meist 2–4 Tage. Länger wird es, wenn die Staatsanwaltschaft den Leichnam wegen eines nicht natürlichen Todes erst freigeben muss oder eine Obduktion anordnet, und auch Wochenenden und Feiertage verzögern die Ämter.",
          "Serbien ist kein Mitglied der EU, daher finden bei der Einreise Pass- und Zollkontrollen statt. Aus Österreich und dem Osten Deutschlands führt der Weg meist über Ungarn, aus Süddeutschland und der Schweiz häufig über Slowenien und Kroatien. Die Originaldokumente reisen mit dem Sarg und werden an der Grenze vorgelegt.",
        ],
      },
      {
        h: "Bestattung in Serbien: was die Familie vorbereitet",
        p: [
          `Während wir die Überführung organisieren, kann die Familie in Serbien den Termin mit der Friedhofsverwaltung und der Kirchengemeinde vorläufig absprechen. Bei einer serbisch-orthodoxen Beerdigung hält der Priester den Trauergottesdienst (opelo); den festen Termin bestätigen Sie, sobald das Fahrzeug unterwegs ist. Am Ziel übergeben wir den Verstorbenen der Familie oder dem örtlichen Bestattungsdienst. Den Preis nennen wir Ihnen im ersten Gespräch; wovon er abhängt, steht unter ${a("/de/kosten-ueberfuehrung", "Kosten einer Überführung")}.`,
        ],
      },
    ],
    faqs: [
      {
        q: "Wer stellt die Genehmigung für eine Überführung nach Serbien aus?",
        a: "Die serbische Botschaft oder das Generalkonsulat, das für den letzten Wohnsitz des Verstorbenen zuständig ist. In Deutschland gibt es sechs solche Vertretungen, in Österreich zwei und in der Schweiz zwei. Den Antrag stellen wir für Sie.",
      },
      {
        q: "Überführung von München nach Serbien – wie weit ist das?",
        a: "Bis Belgrad sind es ca. 940 km auf der Straße, die reine Fahrzeit liegt bei rund 10 Stunden. Zuständig für die serbische Genehmigung ist bei einem letzten Wohnsitz in Bayern das Generalkonsulat in München.",
      },
      {
        q: "Wie lange dauert eine Leichenüberführung nach Serbien?",
        a: "Aus Österreich meist 1–3 Tage, aus Deutschland und der Schweiz meist 2–4 Tage, gerechnet vom ersten Anruf bis zur Übergabe. Am längsten dauern die Dokumente, nicht die Fahrt.",
      },
      {
        q: "Der Verstorbene hatte nur die deutsche Staatsangehörigkeit – geht das trotzdem?",
        a: "Ja. Die serbische Vertretung verlangt dann zusätzlich eine Bestätigung, dass in Serbien eine Grabstelle gesichert ist. Diese Bestätigung besorgt die Familie beim Friedhof, wir sagen Ihnen genau, was darin stehen muss.",
      },
      {
        q: "Muss die Sterbeurkunde übersetzt werden?",
        a: "Aus Deutschland, Österreich und der Schweiz in der Regel nicht, wenn die mehrsprachige Sterbeurkunde nach dem CIEC-Übereinkommen Nr. 16 vorliegt. Dokumente aus Ländern außerhalb dieses Übereinkommens brauchen Apostille und Übersetzung.",
      },
      {
        q: "Wie läuft eine Beerdigung in Serbien ab, wenn der Verstorbene aus dem Ausland kommt?",
        a: "Nach der Ankunft übernimmt die Familie oder der örtliche Bestattungsdienst den Sarg, der Trauergottesdienst und die Beisetzung folgen wie bei jeder Beerdigung im Ort. Den Termin stimmen wir mit Ihnen so ab, dass er zur Ankunft des Fahrzeugs passt.",
      },
    ],
    relatedLinks: [
      { href: "/de/ueberfuehrung-aus-deutschland", title: "Überführung aus Deutschland" },
      { href: "/de/ueberfuehrung-aus-oesterreich", title: "Überführung aus Österreich" },
      { href: "/de/ueberfuehrung-aus-der-schweiz", title: "Überführung aus der Schweiz" },
      { href: "/de/dokumente-leichenpass", title: "Dokumente und Leichenpass" },
      { href: "/de/ueberfuehrung-nach-bosnien", title: "Überführung nach Bosnien" },
    ],
    areaServed: "Serbia",
  },

  // ───────────────────────────── Bosnien und Herzegowina ─────────────────────────────
  {
    key: "dest-bih",
    slug: "ueberfuehrung-nach-bosnien",
    title: "Überführung nach Bosnien und Herzegowina",
    description:
      "Überführung nach Bosnien aus Deutschland, Österreich und der Schweiz: Genehmigung der BiH-Vertretung, Formular je Entität, Wege nach Banja Luka und Sarajevo.",
    h1: "Überführung nach Bosnien und Herzegowina",
    crumb: "Überführung nach Bosnien",
    lead: "Wir bringen Verstorbene aus Deutschland, Österreich, der Schweiz und dem übrigen Europa an jeden Ort in Bosnien und Herzegowina – in die Republika Srpska, die Föderation BiH und den Distrikt Brčko. Die Genehmigung der bosnisch-herzegowinischen Vertretung, das passende Formular und die Route plant unser Team, Sie haben eine feste Ansprechperson.",
    sections: [
      {
        h: "Überführung nach Bosnien: für wen diese Seite ist",
        p: [
          "Menschen aus Bosnien und Herzegowina leben in ganz Europa – manche kamen in den 1960er- und 1970er-Jahren als Arbeitskräfte nach Deutschland und Österreich, andere fanden in den 1990er-Jahren Zuflucht in der Schweiz oder in Skandinavien. Viele möchten im Heimatdorf oder in der Heimatstadt begraben werden. Für die Familie bedeutet das eine Überführung von Verstorbenen nach Bosnien mit Papieren aus zwei Ländern.",
          "Ob Sie nach „Leichenüberführung nach Bosnien“ oder „Überführung Leichnam Bosnien“ gesucht haben: Der Ablauf ist derselbe. Die Behörden des Sterbelandes stellen die Ausfuhrpapiere aus, Bosnien und Herzegowina genehmigt die Einreise, und der Verstorbene reist in einem hermetisch verschlossenen Sarg in einem speziellen Bestattungsfahrzeug.",
        ],
      },
      {
        h: "Die Einreisegenehmigung von Bosnien und Herzegowina",
        p: [
          "Eine serbische Genehmigung gilt für eine Beerdigung in Bosnien und Herzegowina nicht. Die Einreise genehmigt die Botschaft oder ein Generalkonsulat von Bosnien und Herzegowina in dem Land, in dem der Tod eingetreten ist; ausgestellt wird ein Passierschein (laissez-passer) für die sterblichen Überreste. In Deutschland sind laut Auswärtigem Amt zuständig:",
        ],
        list: [
          "Botschaft in Berlin: Berlin, Brandenburg, Hamburg, Mecklenburg-Vorpommern, Sachsen-Anhalt und Schleswig-Holstein",
          "Generalkonsulat in Frankfurt am Main: Hessen, Bremen, Niedersachsen und Nordrhein-Westfalen",
          "Generalkonsulat in München: Bayern, Sachsen und Thüringen",
          "Generalkonsulat in Stuttgart: Baden-Württemberg, Rheinland-Pfalz und Saarland",
        ],
      },
      {
        h: "Formular je nach Entität und benötigte Unterlagen",
        p: [
          "Eine Besonderheit von Bosnien und Herzegowina ist das Formular der Gesundheitsbehörden. Je nachdem, wo der Friedhof liegt, wird es für die Föderation BiH, die Republika Srpska oder den Distrikt Brčko ausgefüllt und über die Vertretung eingereicht. Entscheidend ist der Ort des Grabes, nicht der Geburtsort: Ein Friedhof in Istočno Sarajevo gehört zur Republika Srpska, einer in der Stadt Sarajevo zur Föderation.",
          "Im Formular werden unter anderem der Grenzübergang und der Friedhof angegeben, teilweise auch Kennzeichen und Fahrer. Route und Fahrzeug müssen also feststehen, bevor der Antrag gestellt wird. Eine für alle Vertretungen einheitliche Liste gibt es nicht; typischerweise werden verlangt:",
        ],
        list: [
          "Antrag des Bestattungsunternehmens und der nächsten Angehörigen",
          "Sterbeurkunde und ärztliche Bescheinigung über die Todesursache",
          "Bestätigung, dass keine ansteckende Krankheit vorlag",
          "Leichenpass bzw. Überführungsgenehmigung des Sterbelandes",
          "Reisepass des Verstorbenen",
          "Nachweis, dass der Sarg nach internationalen Vorgaben verschlossen ist – bei einer Urne die Bescheinigung über die Einäscherung",
        ],
      },
      {
        h: "Strecken nach Banja Luka und Sarajevo",
        p: [
          "Aus Deutschland, Österreich und der Schweiz führt der Weg meist über Slowenien und Kroatien, auf der Autobahn bis Okučani und weiter in Richtung Gradiška. Die Bedingungen an diesem Grenzübergang ändern sich derzeit, deshalb prüfen wir sie vor jeder Abfahrt und wählen bei Bedarf einen anderen Übergang. Nach Mostar und in die Herzegowina geht es oft entlang der dalmatinischen Küste. Straßenentfernungen ohne Pausen:",
        ],
        list: [
          "Graz: Banja Luka ca. 370 km, Sarajevo ca. 590 km",
          "Wien: Banja Luka ca. 550 km, Sarajevo ca. 740 km",
          "Linz: Banja Luka ca. 580 km, Sarajevo ca. 800 km",
          "München: Banja Luka ca. 730 km, Sarajevo ca. 950 km",
          "Stuttgart: Banja Luka ca. 970 km, Sarajevo ca. 1.180 km",
          "Frankfurt am Main: Banja Luka ca. 1.080 km, Sarajevo ca. 1.300 km",
          "Berlin: Banja Luka ca. 1.170 km, Sarajevo ca. 1.370 km",
          "Dortmund: Banja Luka ca. 1.290 km, Sarajevo ca. 1.510 km",
          "Zürich: Banja Luka ca. 1.040 km, Sarajevo ca. 1.260 km",
        ],
      },
      {
        h: "Grenze, Zoll und Transit über Serbien",
        p: [
          "Bosnien und Herzegowina gehört nicht zur EU. An der Grenze werden deshalb Pass und Zoll kontrolliert, und die Beamten sehen die Genehmigung der Vertretung sowie die Dokumente des Sterbelandes ein.",
          `Für Bijeljina, Zvornik oder andere Orte im Osten des Landes ist der Weg über Serbien manchmal kürzer. Dann braucht es zusätzlich eine serbische Transitgenehmigung, also die Überführungsgenehmigung der serbischen Botschaft bzw. des Generalkonsulats (serbisch: sprovodnica) für die Durchfahrt. Sie wird erst erteilt, wenn die Genehmigung von Bosnien und Herzegowina vorliegt. Mehr zur serbischen Genehmigung lesen Sie unter ${a("/de/ueberfuehrung-nach-serbien", "Überführung nach Serbien")}.`,
        ],
      },
      {
        h: "Dauer, mehrsprachige Sterbeurkunde und Sarg",
        p: [
          "Wie lange die Überführung dauert, hängt vor allem vom Sterbeland ab: aus Österreich meist 1–3 Tage, aus Deutschland und der Schweiz meist 2–4 Tage. Bosnien und Herzegowina ist wie Deutschland, Österreich und die Schweiz Vertragsstaat des CIEC-Übereinkommens Nr. 16, daher wird die mehrsprachige Sterbeurkunde in der Regel ohne Legalisation anerkannt.",
          "Vorgeschrieben ist ein hermetisch verschlossener Sarg mit Metalleinsatz. Bei muslimischen Familien werden die rituelle Waschung und das Einhüllen des Verstorbenen meist noch im Sterbeland vorgenommen, bevor der Sarg verschlossen wird; die Dženaza wird angesetzt, sobald die Ankunft feststeht.",
        ],
      },
      {
        h: "Beerdigung in Bosnien: was die Familie tun kann",
        p: [
          `Von Ihnen brauchen wir den Namen des Verstorbenen, den Sterbeort, den genauen Friedhof samt Gemeinde und eine Kopie des Passes. Sprechen Sie mit dem Friedhof, der Pfarrei oder der islamischen Gemeinde einen vorläufigen Termin ab. Alles andere übernehmen wir, vom Leichenpass bis zur Grenze. Den Preis erfahren Sie im ersten Gespräch – die Faktoren erklären wir unter ${a("/de/kosten-ueberfuehrung", "Kosten einer Überführung")}.`,
        ],
      },
    ],
    faqs: [
      {
        q: "Wer genehmigt eine Überführung nach Bosnien?",
        a: "Die Botschaft oder das Generalkonsulat von Bosnien und Herzegowina im Sterbeland. In Deutschland sind das je nach Bundesland die Botschaft in Berlin oder die Generalkonsulate in Frankfurt am Main, München und Stuttgart. Dazu kommt das Formular für die Entität, in der das Grab liegt.",
      },
      {
        q: "Überführung von Frankfurt nach Bosnien – wie viele Kilometer?",
        a: "Bis Banja Luka sind es ca. 1.080 km, bis Sarajevo ca. 1.300 km. Mit den vorgeschriebenen Ruhezeiten des Fahrers dauert die Fahrt länger als die reine Fahrzeit.",
      },
      {
        q: "Überführen Sie auch aus Österreich nach Bosnien?",
        a: "Ja, das sind die kürzesten Strecken: von Graz bis Banja Luka ca. 370 km, von Wien ca. 550 km. Den österreichischen Leichenpass, die Genehmigung von Bosnien und Herzegowina und das Formular besorgen wir.",
      },
      {
        q: "Braucht man für Bosnien auch die serbische sprovodnica?",
        a: "Nur wenn die Route durch Serbien führt – dann ist eine serbische Transitgenehmigung nötig. Bei einer Einreise direkt aus Kroatien genügt die Genehmigung von Bosnien und Herzegowina mit den Dokumenten des Sterbelandes.",
      },
      {
        q: "Der Friedhof liegt in Istočno Sarajevo – welches Formular gilt?",
        a: "Das Formular für die Republika Srpska, weil Istočno Sarajevo zu dieser Entität gehört. Für Friedhöfe in der Stadt Sarajevo gilt das Formular der Föderation BiH. Schicken Sie uns im Zweifel einfach den Namen des Friedhofs.",
      },
    ],
    relatedLinks: [
      { href: "/de/ueberfuehrung-aus-deutschland", title: "Überführung aus Deutschland" },
      { href: "/de/ueberfuehrung-aus-oesterreich", title: "Überführung aus Österreich" },
      { href: "/de/ueberfuehrung-nach-montenegro", title: "Überführung nach Montenegro" },
      { href: "/de/dokumente-leichenpass", title: "Dokumente und Leichenpass" },
    ],
    areaServed: "Bosnia and Herzegovina",
  },

  // ───────────────────────────── Montenegro ─────────────────────────────
  {
    key: "dest-montenegro",
    slug: "ueberfuehrung-nach-montenegro",
    title: "Überführung nach Montenegro – Genehmigung und Route",
    description:
      "Überführung nach Montenegro aus Deutschland, Österreich und der Schweiz: Genehmigung der montenegrinischen Vertretung, Route über Serbien oder Kroatien.",
    h1: "Überführung nach Montenegro",
    crumb: "Überführung nach Montenegro",
    lead: "Stirbt ein Mensch aus Montenegro in Deutschland, Österreich, der Schweiz oder einem anderen Land Europas, bringen wir ihn an seinen Heimatort – nach Podgorica, Nikšić, an die Küste oder in den Norden. Wir besorgen die Papiere des Sterbelandes und die Genehmigung Montenegros, planen die Route und übernehmen die Formalitäten an den Grenzen.",
    sections: [
      {
        h: "Überführung nach Montenegro aus Mitteleuropa",
        p: [
          "Viele montenegrinische Familien haben Angehörige, die seit Jahren in Deutschland, Österreich oder der Schweiz leben – aus Bijelo Polje, Berane, Rožaje und Pljevlja im Norden ebenso wie aus Podgorica, Nikšić oder von der Küste. Stirbt einer von ihnen weit weg von zu Hause, ist der Wunsch fast immer derselbe: eine Beerdigung in Montenegro, im eigenen Ort.",
          "Montenegro liegt aus deutscher Sicht nicht gerade um die Ecke. Zwischen Sterbeort und Grab liegen meist mehrere Länder, und auf dem Weg wird mindestens eine EU-Außengrenze überquert. Umso wichtiger ist es, dass die Dokumente vollständig sind, bevor das Fahrzeug losfährt.",
        ],
      },
      {
        h: "Genehmigung der montenegrinischen Vertretung",
        p: [
          "Für eine Beerdigung in Montenegro erteilt die Botschaft oder das Konsulat Montenegros in dem Land, in dem der Tod eingetreten ist, die Einreisegenehmigung. In Deutschland sind das laut Auswärtigem Amt die Botschaft in Berlin und das Generalkonsulat in Frankfurt am Main. Dessen Bezirk umfasst Bayern, Baden-Württemberg, Bremen, Hamburg, Hessen, Niedersachsen, Nordrhein-Westfalen, Rheinland-Pfalz, das Saarland und Thüringen.",
          "Eine öffentlich zugängliche, einheitliche Liste der Unterlagen gibt es nicht, deshalb klären wir die Anforderungen für jeden Fall mit der zuständigen Vertretung. Die Grundlage ist dieselbe wie bei den Nachbarländern:",
        ],
        list: [
          "Reisepass oder Personalausweis des Verstorbenen",
          "Sterbeurkunde, möglichst als mehrsprachiger Auszug",
          "ärztliche Bescheinigung über die Todesursache",
          "Leichenpass bzw. Überführungsgenehmigung des Sterbelandes",
          "Angaben zum Beerdigungsort in Montenegro",
        ],
      },
      {
        h: "Zwei Wege: über Serbien oder entlang der Adria",
        p: [
          "Von Mitteleuropa führen zwei Hauptrouten nach Montenegro. Über Serbien geht es auf der Autobahn bis Belgrad und weiter über Čačak und Zlatibor nach Prijepolje und zum Grenzübergang Gostun–Dobrakovo in Richtung Bijelo Polje. Diese Route bietet sich für den Norden und für Podgorica an; von Belgrad bis Podgorica sind es ca. 430 km.",
          "Die zweite Route führt durch Kroatien, entlang der Küste bis zum Übergang Karasovići–Debeli Brijeg bei Herceg Novi. Sie eignet sich für Herceg Novi, Kotor, Tivat, Budva und Bar. Im Winter, wenn Pässe im Norden schwer befahrbar sind, wählen wir manchmal die längere, aber sicherere Strecke.",
        ],
      },
      {
        h: "Serbische Transitgenehmigung bei der Route über Serbien",
        p: [
          "Führt der Weg durch Serbien, verlangt das serbische Außenministerium eine Transitgenehmigung: die Überführungsgenehmigung der serbischen Botschaft bzw. des Generalkonsulats, serbisch sprovodnica, ausgestellt für die Durchreise. Zuständig ist die serbische Vertretung für den letzten Wohnsitz des Verstorbenen, und sie erteilt die Genehmigung erst, wenn alle Unterlagen und die Genehmigung Montenegros vorliegen.",
          "Das ist ein zusätzlicher Schritt, aber gerade aus Wien oder Graz ist die Route über Serbien oft die praktischste. Serbien und Montenegro sind beide keine EU-Mitglieder, an jeder Grenze dazwischen finden also Zollformalitäten statt. All das übernehmen wir; Sie erfahren von uns, wann das Fahrzeug die Grenze passiert hat.",
        ],
      },
      {
        h: "Entfernungen bis Podgorica",
        p: ["Straßenkilometer bis Podgorica, ohne Pausen gerechnet. Die tatsächliche Fahrt dauert wegen der vorgeschriebenen Ruhezeiten länger:"],
        list: [
          "Graz: ca. 880 km",
          "Salzburg: ca. 1.040 km",
          "Wien: ca. 1.060 km",
          "Linz: ca. 1.090 km",
          "München: ca. 1.170 km",
          "Stuttgart: ca. 1.410 km",
          "Zürich: ca. 1.480 km",
          "Frankfurt am Main: ca. 1.570 km",
          "Berlin: ca. 1.650 km",
          "Hamburg: ca. 1.950 km",
        ],
      },
      {
        h: "Dauer, Sterbeurkunde und Sarg",
        p: [
          "Gerechnet vom ersten Anruf bis zur Übergabe dauert eine Überführung aus Österreich meist 1–3 Tage, aus Deutschland und der Schweiz meist 2–4 Tage – bei den weiten Strecken nach Montenegro kann die Fahrt selbst einen Teil davon ausmachen. Eine Obduktion oder die Freigabe durch die Staatsanwaltschaft verlängern den Ablauf.",
          "Montenegro ist Vertragsstaat des CIEC-Übereinkommens Nr. 16, sodass die mehrsprachige Sterbeurkunde aus Deutschland, Österreich oder der Schweiz in der Regel ohne Legalisation anerkannt wird. Der Verstorbene reist in einem hermetisch verschlossenen Sarg, wie ihn internationale Überführungen erfordern; bei einer Urne genügt ein fest verschlossenes, gut geschütztes Gefäß mit der Bescheinigung über die Einäscherung.",
        ],
      },
      {
        h: "Beerdigung in Montenegro: was die Familie vorbereitet",
        p: [
          `Für den Antrag brauchen wir den Namen des Verstorbenen, den Sterbeort, den Beerdigungsort in Montenegro und eine Kopie von Pass oder Ausweis. Vereinbaren Sie mit dem Friedhof oder der Religionsgemeinschaft einen vorläufigen Termin und bestätigen Sie ihn, sobald das Fahrzeug unterwegs ist. Falls nötig, schicken wir Ihnen eine Vollmacht zur Unterschrift. Wie Sie uns erreichen, steht unter ${a("/de/kontakt", "Kontakt")}.`,
        ],
      },
    ],
    faqs: [
      {
        q: "Wer stellt die Genehmigung für eine Überführung nach Montenegro aus?",
        a: "Die Botschaft oder das Konsulat Montenegros im Sterbeland. In Deutschland sind das die Botschaft in Berlin und das Generalkonsulat in Frankfurt am Main. Den Antrag reichen wir mit den Dokumenten des Sterbelandes ein.",
      },
      {
        q: "Überführung von München nach Montenegro – wie weit ist das?",
        a: "Bis Podgorica sind es ca. 1.170 km auf der Straße. Welche Route wir wählen, hängt vom Beerdigungsort ab: für den Norden meist über Serbien, für die Küste meist über Kroatien.",
      },
      {
        q: "Überführen Sie auch aus Österreich nach Montenegro?",
        a: "Ja. Von Graz bis Podgorica sind es ca. 880 km, von Salzburg ca. 1.040 km und von Wien ca. 1.060 km. Den Leichenpass und die montenegrinische Genehmigung beantragen wir parallel.",
      },
      {
        q: "Brauche ich die serbische sprovodnica für Montenegro?",
        a: "Nur bei der Route über Serbien, dann als Transitgenehmigung. Sie wird zuletzt erteilt, weil die serbische Vertretung zuvor die Genehmigung Montenegros sehen will.",
      },
      {
        q: "Über welchen Grenzübergang kommt der Verstorbene nach Montenegro?",
        a: "Aus Serbien meist über Gostun–Dobrakovo in Richtung Bijelo Polje, von der kroatischen Küste über Karasovići–Debeli Brijeg in Richtung Herceg Novi. Welcher Übergang passt, entscheiden wir nach Beerdigungsort und Jahreszeit.",
      },
    ],
    relatedLinks: [
      { href: "/de/ueberfuehrung-nach-serbien", title: "Überführung nach Serbien" },
      { href: "/de/ueberfuehrung-nach-bosnien", title: "Überführung nach Bosnien" },
      { href: "/de/ueberfuehrung-aus-deutschland", title: "Überführung aus Deutschland" },
      { href: "/de/kosten-ueberfuehrung", title: "Kosten einer Überführung" },
    ],
    areaServed: "Montenegro",
  },

  // ───────────────────────────── Nordmazedonien ─────────────────────────────
  {
    key: "dest-macedonia",
    slug: "ueberfuehrung-nach-nordmazedonien",
    title: "Überführung nach Mazedonien (Nordmazedonien)",
    description:
      "Überführung nach Mazedonien aus Deutschland, Österreich und der Schweiz: Genehmigung Nordmazedoniens, serbische Transitgenehmigung und Strecken nach Skopje.",
    h1: "Überführung nach Nordmazedonien",
    crumb: "Überführung nach Nordmazedonien",
    lead: "Wir überführen Verstorbene aus Deutschland, Österreich, der Schweiz und dem übrigen Europa an jeden Ort in Nordmazedonien – nach Skopje, Kumanovo, Tetovo, Bitola, Ohrid oder in jedes Dorf. Da die Straße durch Serbien führt, besorgen wir neben der Genehmigung Nordmazedoniens auch die serbische Transitgenehmigung.",
    sections: [
      {
        h: "Leichenüberführung nach Mazedonien: das Besondere",
        p: [
          "Die Gemeinschaft aus Nordmazedonien in Deutschland, der Schweiz, Österreich und Italien ist groß und gewachsen. Viele kamen vor Jahrzehnten zum Arbeiten, ihre Kinder und Enkel leben heute dort. Die Bindung an die Heimat bleibt trotzdem stark, und nach einem Todesfall wünschen sich die meisten Familien eine Beerdigung im Herkunftsort.",
          "Eine Überführung nach Mazedonien unterscheidet sich in einem wichtigen Punkt von einer Überführung nach Serbien: Bestimmungsland und Durchfahrtsland sind nicht dasselbe. Es braucht deshalb zwei Genehmigungen, die nordmazedonische für die Einreise und die serbische für die Durchfahrt. Die Reihenfolge, in der sie erteilt werden, bestimmt auch, wann das Fahrzeug abfahren kann.",
        ],
      },
      {
        h: "Genehmigung der Vertretung Nordmazedoniens",
        p: [
          "Für eine Beerdigung in Nordmazedonien erteilt die Botschaft oder das Konsulat Nordmazedoniens im Sterbeland die Einreisegenehmigung. In Deutschland sind laut Auswärtigem Amt die Botschaft in Berlin, ihre Außenstelle in Bonn (zuständig für Nordrhein-Westfalen, Hessen, Niedersachsen, Rheinland-Pfalz und das Saarland) und das Generalkonsulat in München (Bayern und Baden-Württemberg) zuständig.",
          "Eine öffentlich einsehbare, einheitliche Unterlagenliste veröffentlicht das nordmazedonische Außenministerium nicht; wir klären die Anforderungen deshalb im konkreten Fall mit der Vertretung. Die Basis bilden die Dokumente des Sterbelandes – ärztliche Todesbescheinigung, Sterbeurkunde und Leichenpass – zusammen mit dem Reisepass des Verstorbenen und den Angaben zum Beerdigungsort.",
        ],
      },
      {
        h: "Warum die serbische Transitgenehmigung nötig ist",
        p: [
          "Wird ein Verstorbener durch Serbien in ein Drittland gebracht, verlangt das serbische Außenministerium eine Transitgenehmigung. Gemeint ist die Überführungsgenehmigung der serbischen Botschaft bzw. des Generalkonsulats (serbisch: sprovodnica) für die Durchreise, beantragt bei der Vertretung, die für den letzten Wohnsitz zuständig ist. Dafür werden dieselben Unterlagen vorgelegt wie für eine Beerdigung in Serbien, zusätzlich die Genehmigung des Bestimmungslandes. Daraus ergibt sich diese Reihenfolge:",
        ],
        list: [
          "Dokumente des Sterbelandes: Todesbescheinigung, Sterbeurkunde und Leichenpass",
          "Einreisegenehmigung der Botschaft oder des Konsulats Nordmazedoniens",
          "serbische Transitgenehmigung der zuständigen serbischen Vertretung",
          "Abfahrt des Fahrzeugs, alle Originale reisen mit dem Sarg",
        ],
        ordered: true,
      },
      {
        h: "Route durch Serbien und Grenzübergang Preševo–Tabanovce",
        p: [
          "Aus Deutschland, Österreich und der Schweiz erreicht das Fahrzeug Serbien über Ungarn oder Kroatien und fährt dann auf der Autobahn durch das ganze Land, über Belgrad und Niš bis Preševo. Die Grenze zu Nordmazedonien wird am Übergang Preševo–Tabanovce überquert; Kumanovo liegt gleich dahinter, Skopje ist nicht mehr weit. Weder Serbien noch Nordmazedonien gehören zur EU, Zollformalitäten fallen also bei der Einreise nach Serbien und beim Übertritt nach Nordmazedonien an.",
          "Straßenentfernungen bis Skopje, ohne Pausen:",
        ],
        list: [
          "Graz: ca. 1.010 km",
          "Wien: ca. 1.050 km",
          "Salzburg: ca. 1.240 km",
          "München: ca. 1.370 km",
          "Stuttgart: ca. 1.610 km",
          "Berlin: ca. 1.670 km",
          "Zürich: ca. 1.680 km",
          "Frankfurt am Main: ca. 1.720 km",
          "Köln: ca. 1.900 km",
          "Hamburg: ca. 1.970 km",
        ],
      },
      {
        h: "Dauer, Dokumente und Sarg",
        p: [
          "Vom ersten Anruf bis zur Übergabe rechnen Sie bei einer Überführung aus Österreich meist mit 1–3 Tagen, aus Deutschland und der Schweiz meist mit 2–4 Tagen. Weil zwei Genehmigungen nacheinander erteilt werden und die Strecke lang ist, beginnen wir mit allen Anträgen sofort. Wochenenden, Feiertage oder eine Obduktion können den Ablauf verlängern.",
          `Nordmazedonien ist Vertragsstaat des CIEC-Übereinkommens Nr. 16. Die mehrsprachige Sterbeurkunde aus Deutschland, Österreich oder der Schweiz wird deshalb in der Regel ohne Legalisation anerkannt. Für die Fahrt ist ein hermetisch verschlossener Sarg vorgeschrieben, meist mit verlötetem Zinkeinsatz. Welche Unterlagen das Sterbeland ausstellt, erklären wir unter ${a("/de/dokumente-leichenpass", "Dokumente und Leichenpass")}.`,
        ],
      },
      {
        h: "Beerdigung in Mazedonien: Skopje, Kumanovo, Tetovo, Bitola, Ohrid",
        p: [
          "Wir bringen den Verstorbenen an jeden Ort im Land. Kumanovo ist die erste größere Stadt nach der Grenze, Skopje der Knotenpunkt für die Weiterfahrt. Tetovo und Gostivar liegen westlich von Skopje, Štip im Osten, Prilep, Bitola und Ohrid im Süden und Westen – dorthin ist der Weg von der Grenze am längsten.",
          "Bei orthodoxen Familien wird der Trauergottesdienst mit der Kirchengemeinde am Beerdigungsort vereinbart. Bei muslimischen Familien finden die rituelle Waschung und das Einhüllen meist noch im Sterbeland statt, bevor der Sarg verschlossen wird. Sagen Sie uns frühzeitig, was Ihrer Familie wichtig ist, damit wir die Vorbereitung darauf abstimmen.",
        ],
      },
    ],
    faqs: [
      {
        q: "Wer genehmigt eine Überführung nach Mazedonien?",
        a: "Die Botschaft oder das Konsulat Nordmazedoniens im Sterbeland. In Deutschland sind das je nach Bundesland die Botschaft in Berlin, ihre Außenstelle in Bonn oder das Generalkonsulat in München.",
      },
      {
        q: "Warum braucht man für Nordmazedonien eine serbische Genehmigung?",
        a: "Weil die Straße aus Mitteleuropa durch Serbien führt. Für die Durchfahrt verlangt das serbische Außenministerium eine Transitgenehmigung, die erst erteilt wird, wenn die Genehmigung Nordmazedoniens vorliegt.",
      },
      {
        q: "Überführung von Stuttgart nach Mazedonien – wie viele Kilometer?",
        a: "Bis Skopje sind es ca. 1.610 km auf der Straße. Mit den vorgeschriebenen Ruhezeiten dauert die Fahrt deutlich länger als die reine Fahrzeit, die bei rund 16 Stunden liegt.",
      },
      {
        q: "Überführen Sie auch aus der Schweiz nach Nordmazedonien?",
        a: "Ja. Von Zürich bis Skopje sind es ca. 1.680 km. Da die Schweiz nicht zur EU gehört, kommen beim Verlassen des Landes Zollformalitäten hinzu; den kantonalen Leichenpass und beide Genehmigungen besorgen wir.",
      },
      {
        q: "Über welchen Grenzübergang geht es nach Nordmazedonien?",
        a: "Bei der Fahrt durch Serbien in der Regel über Preševo–Tabanovce, an der Autobahn in Richtung Kumanovo und Skopje.",
      },
    ],
    relatedLinks: [
      { href: "/de/ueberfuehrung-nach-serbien", title: "Überführung nach Serbien" },
      { href: "/de/ueberfuehrung-aus-der-schweiz", title: "Überführung aus der Schweiz" },
      { href: "/de/ueberfuehrung-aus-deutschland", title: "Überführung aus Deutschland" },
      { href: "/de/kosten-ueberfuehrung", title: "Kosten einer Überführung" },
    ],
    areaServed: "North Macedonia",
  },

  // ───────────────────────────── Kontakt ─────────────────────────────
  {
    key: "contact",
    slug: "kontakt",
    title: "Kontakt – Überführung Verstorbener, 24/7 erreichbar",
    description:
      "So erreichen Sie uns rund um die Uhr: Telefon, WhatsApp und Viber unter +381 64 249 28 49 oder per E-Mail. Was Sie für das erste Gespräch bereithalten sollten.",
    h1: "Kontakt",
    crumb: "Kontakt",
    lead: "Sie erreichen uns rund um die Uhr, an jedem Tag des Jahres. Rufen Sie an oder schreiben Sie uns per WhatsApp oder Viber – aus Deutschland, Österreich, der Schweiz oder jedem anderen Land. Wir sprechen Deutsch und nehmen uns Zeit für Ihre Fragen.",
    sections: [
      {
        h: "So erreichen Sie uns",
        p: [
          "Unser Unternehmen hat seinen Sitz in Belgrad, deshalb ist unsere Telefonnummer eine serbische. Anrufe und WhatsApp-Nachrichten sind aus jedem Land willkommen, auch nachts und am Wochenende.",
        ],
        list: [
          `Telefon: ${a("tel:+381642492849", "+381 64 249 28 49")}`,
          "WhatsApp und Viber: +381 64 249 28 49",
          `E-Mail: ${a("mailto:kontakt@transportpokojnika.com", "kontakt@transportpokojnika.com")}`,
        ],
      },
      {
        h: "Was Sie für das erste Gespräch bereithalten sollten",
        p: [
          "Sie müssen nicht alles wissen, wenn Sie anrufen. Je mehr der folgenden Angaben Sie haben, desto schneller können wir Ihnen sagen, welche Behörden zuständig sind und wie lange es dauern wird:",
        ],
        list: [
          "vollständiger Name und Geburtsdatum des Verstorbenen",
          "Ort des Todes: Krankenhaus, Pflegeheim oder Wohnung, mit Stadt und Land",
          "letzter Wohnsitz – davon hängt ab, welche serbische Vertretung zuständig ist",
          "gewünschter Beerdigungsort, möglichst mit Friedhof und Gemeinde",
          "Staatsangehörigkeit und, wenn vorhanden, eine Kopie von Reisepass oder Personalausweis",
          "ob Polizei oder Staatsanwaltschaft eingeschaltet sind, etwa nach einem Unfall",
          "ob eine Erdbestattung im Sarg oder eine Urne gewünscht ist",
        ],
      },
      {
        h: "Wenn der Tod gerade erst eingetreten ist",
        p: [
          "Stirbt jemand im Krankenhaus oder Pflegeheim, kümmert sich die Einrichtung um die ärztliche Feststellung des Todes, und der Verstorbene bleibt dort, bis er abgeholt wird. Ist der Tod zu Hause eingetreten, muss zuerst ein Arzt kommen – in Deutschland für die Leichenschau, in Österreich für die Totenbeschau. Bei einem Unfall oder einem unklaren Tod schalten sich Polizei und Staatsanwaltschaft ein; dann darf der Leichnam erst nach deren Freigabe überführt werden.",
          "Sie müssen in diesen ersten Stunden keine Formulare ausfüllen und nichts unterschreiben, was Sie nicht verstehen. Rufen Sie uns an, auch mitten in der Nacht. Wir erklären Ihnen in Ruhe, was jetzt wichtig ist und was warten kann.",
        ],
      },
      {
        h: "Was nach Ihrem Anruf passiert",
        p: [
          "Noch im ersten Gespräch nennen wir Ihnen den genauen Preis, ohne versteckte Kosten. Sind Sie einverstanden, übernehmen wir sofort: Wir nehmen Kontakt mit dem Krankenhaus oder Heim auf, kümmern uns um Sterbeurkunde und Leichenpass und stellen den Antrag bei der zuständigen Vertretung. Für eine Beerdigung in Serbien ist das die Überführungsgenehmigung der serbischen Botschaft bzw. des Generalkonsulats (serbisch: sprovodnica), für Bosnien und Herzegowina, Montenegro oder Nordmazedonien die Genehmigung des jeweiligen Landes.",
          "Falls nötig, schicken wir Ihnen eine Vollmacht, die Sie unterschreiben und als Foto oder Scan zurückschicken. Ab dann haben Sie eine feste Ansprechperson, die Sie über jeden Schritt informiert: wann die Dokumente vorliegen, wann das Fahrzeug abfährt, wann es die Grenze passiert und wann es ankommt.",
        ],
      },
      {
        h: "Was die Familie selbst tun kann",
        p: [
          "Während wir uns um die Papiere kümmern, können Sie in der Heimat einen vorläufigen Termin mit dem Friedhof und der Kirchengemeinde, der Pfarrei oder der islamischen Gemeinde vereinbaren. Bestätigen Sie ihn endgültig, sobald wir Ihnen die Abfahrt melden. Wenn Sie Kleidung für den Verstorbenen haben, die er tragen soll, sagen Sie uns Bescheid – das klären wir vor der Einsargung.",
          `Einen Überblick über den Ablauf je nach Zielland finden Sie unter ${a("/de/ueberfuehrung-nach-serbien", "Überführung nach Serbien")}, ${a("/de/ueberfuehrung-nach-bosnien", "nach Bosnien")}, ${a("/de/ueberfuehrung-nach-montenegro", "nach Montenegro")} und ${a("/de/ueberfuehrung-nach-nordmazedonien", "nach Nordmazedonien")}.`,
        ],
      },
      {
        h: "Für Bestatter, Kliniken, Sozialdienste und Versicherungen",
        p: [
          `Sie betreuen als Bestattungsinstitut, Sozialdienst oder Versicherung einen Sterbefall und suchen einen Partner für die Überführung in den Balkan? Rufen Sie uns an oder schreiben Sie uns eine E-Mail mit den wichtigsten Angaben zum Fall. Wir stimmen uns direkt mit Ihnen ab, auf Deutsch, und sagen Ihnen, welche Unterlagen wir von Ihrer Seite brauchen. Wovon der Preis abhängt, erklärt die Seite ${a("/de/kosten-ueberfuehrung", "Kosten einer Überführung")}.`,
        ],
      },
    ],
    faqs: [
      {
        q: "Kann ich aus Deutschland eine serbische Nummer anrufen?",
        a: "Ja. Wählen Sie +381 64 249 28 49 wie jede andere Auslandsnummer. Wenn Ihnen das lieber ist, schreiben Sie uns über WhatsApp oder Viber unter derselben Nummer – wir antworten auch nachts.",
      },
      {
        q: "Sind Sie wirklich rund um die Uhr erreichbar?",
        a: "Ja, an jedem Tag des Jahres, auch an Wochenenden und Feiertagen. Ein Todesfall richtet sich nicht nach Bürozeiten.",
      },
      {
        q: "Gibt es ein Kontaktformular?",
        a: "Nein. Am schnellsten geht es telefonisch, über WhatsApp oder Viber. Ausführliche Unterlagen oder Fragen können Sie uns per E-Mail an kontakt@transportpokojnika.com schicken.",
      },
      {
        q: "Wann erfahre ich den Preis?",
        a: "Im ersten Gespräch. Wir nennen Ihnen den genauen Betrag für Ihren Fall, ohne versteckte Kosten, bevor Sie uns beauftragen.",
      },
      {
        q: "Was ist, wenn ich noch nicht alle Angaben habe?",
        a: "Rufen Sie trotzdem an. Wir sagen Ihnen, was wir als Nächstes brauchen und wo Sie es bekommen, und vieles besorgen wir ohnehin selbst bei den Behörden.",
      },
    ],
    relatedLinks: [
      { href: "/de/", title: "Startseite" },
      { href: "/de/dokumente-leichenpass", title: "Dokumente und Leichenpass" },
      { href: "/de/kosten-ueberfuehrung", title: "Kosten einer Überführung" },
      { href: "/de/ueberfuehrung-aus-deutschland", title: "Überführung aus Deutschland" },
    ],
  },
];
