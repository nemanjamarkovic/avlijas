/** German pages (de-b) — rendered by renderLocalePage() in scripts/build-site.js. Fields: see the i18n brief. */
const a = (href, text) => `<a href="${href}" class="text-primary">${text}</a>`;

module.exports = [
  // ───────────────────────────── from-germany ─────────────────────────────
  {
    key: "from-germany",
    slug: "ueberfuehrung-aus-deutschland",
    title: "Überführung aus Deutschland nach Serbien und Bosnien",
    description:
      "Überführung Verstorbener aus Deutschland nach Serbien, Bosnien, Montenegro und Nordmazedonien: Leichenpass je Bundesland, Sterbeurkunde, Konsulat – 24/7.",
    h1: "Überführung aus Deutschland nach Serbien, Bosnien und in die Region",
    crumb: "Aus Deutschland",
    lead:
      "Wir holen Verstorbene in ganz Deutschland ab – aus der Klinik, dem Pflegeheim oder der Wohnung – und bringen sie zum Ort der Beisetzung in Serbien, Bosnien und Herzegowina, Montenegro oder Nordmazedonien. Todesbescheinigung, Sterbeurkunde, Leichenpass und die Genehmigung der serbischen Vertretung besorgen wir. Sie haben dabei einen festen Ansprechpartner, der Deutsch spricht.",
    sections: [
      {
        h: "Die ersten Stunden nach einem Todesfall in Deutschland",
        p: [
          "Am Anfang steht immer die ärztliche Leichenschau. Stirbt jemand im Krankenhaus oder im Pflegeheim, veranlasst die Einrichtung sie selbst. Bei einem Todesfall zu Hause rufen Sie den Hausarzt oder nachts und am Wochenende den ärztlichen Bereitschaftsdienst unter 116 117. Der Arzt stellt die Todesbescheinigung aus, umgangssprachlich Totenschein genannt. Darin hält er fest, ob der Tod natürlich, nicht natürlich oder ungeklärt ist – diese Angabe entscheidet über den weiteren Ablauf.",
          "Rufen Sie uns an, sobald die Leichenschau erfolgt ist, gern auch mitten in der Nacht. Hat die Klinik bereits ein örtliches Bestattungsunternehmen eingeschaltet, sprechen Sie mit uns, bevor Sie dort etwas unterschreiben: Wir stimmen die Abholung direkt ab, damit keine doppelten Leistungen entstehen.",
        ],
      },
      {
        h: "Standesamt und internationale Sterbeurkunde",
        p: [
          "Der Sterbefall wird beim Standesamt des Sterbeorts beurkundet. Dafür braucht das Amt die Todesbescheinigung und die Personenstandsunterlagen des Verstorbenen, etwa Pass oder Personalausweis, Geburts- oder Heiratsurkunde. Wir beantragen dabei gleich die internationale Sterbeurkunde, also den mehrsprachigen Auszug nach dem CIEC-Übereinkommen Nr. 16. Deutschland, Serbien, Bosnien und Herzegowina, Montenegro und Nordmazedonien sind Vertragsstaaten, deshalb wird dieser Auszug dort in der Regel ohne Legalisation und ohne Übersetzung anerkannt.",
          "Fehlt eine Urkunde für die Beurkundung, muss die Überführung nicht warten: Das Standesamt kann auf der Todesbescheinigung vermerken, dass die Beurkundung zurückgestellt ist. Dieser Vermerk – oder der Vermerk über die erfolgte Beurkundung – ist die Voraussetzung für den Leichenpass.",
        ],
      },
      {
        h: "Leichenpass beantragen: zuständig ist je nach Bundesland eine andere Stelle",
        p: [
          "Bestattungsrecht ist Ländersache. Wer den Leichenpass für die Überführung ins Ausland ausstellt, ist daher nicht bundesweit einheitlich geregelt. Einige Beispiele aus unserer Praxis:",
        ],
        list: [
          "<strong>Leichenpass Bayern:</strong> die Gemeinde, in der die Überführung beginnt – in München die Städtischen Friedhöfe München.",
          "<strong>Baden-Württemberg:</strong> die Gemeinde; solange der Standesamtsvermerk fehlt, ist zusätzlich die Genehmigung der Gemeinde des Sterbeorts nötig.",
          "<strong>Leichenpass NRW:</strong> die Zuständigkeit regelt jede Stadt selbst – in Düsseldorf das Standesamt, in Dortmund die Friedhofsverwaltung.",
          "<strong>Hessen:</strong> in Frankfurt am Main das Standesamt, das auch den Sterbefall beurkundet.",
          "<strong>Berlin:</strong> das Amt für Bürgerdienste des zuständigen Bezirksamts; <strong>Hamburg:</strong> zentral das Bezirksamt Wandsbek.",
          "<strong>Sachsen und Thüringen:</strong> das Gesundheitsamt des Sterbeorts; <strong>Niedersachsen:</strong> je nach Ort, etwa die Region Hannover.",
          "<strong>Mecklenburg-Vorpommern:</strong> das Gesundheitsamt, vor der Überführung ins Ausland ist dort eine zweite, amtliche Leichenschau vorgeschrieben.",
        ],
      },
      {
        h: "Nicht natürlicher oder ungeklärter Tod: Freigabe durch die Staatsanwaltschaft",
        p: [
          "Ist auf der Todesbescheinigung ein nicht natürlicher oder ungeklärter Tod angekreuzt – etwa nach einem Unfall, einem Sturz oder einem plötzlichen Tod ohne bekannte Vorerkrankung –, werden Polizei und Staatsanwaltschaft eingeschaltet. Bis die Staatsanwaltschaft den Leichnam zur Bestattung freigibt, darf weder ein Leichenpass ausgestellt noch eine Überführung begonnen werden. Häufig wird eine Obduktion in der Rechtsmedizin angeordnet.",
          "Das verlängert den Ablauf meist um einige Tage. Wir halten in dieser Zeit Kontakt mit den Behörden, bereiten alle übrigen Unterlagen vor und informieren Sie, sobald die Freigabe vorliegt. So kann das Fahrzeug unmittelbar danach starten.",
        ],
      },
      {
        h: "Sprovodnica: die sechs zuständigen serbischen Vertretungen in Deutschland",
        p: [
          "Für die Einfuhr nach Serbien braucht es die Überführungsgenehmigung der serbischen Botschaft bzw. des Generalkonsulats, auf Serbisch sprovodnica. Zuständig ist die Vertretung für den letzten Wohnsitz des Verstorbenen. Den Antrag stellen wir als beauftragtes Bestattungsunternehmen:",
        ],
        list: [
          "Botschaft der Republik Serbien in Berlin (Konsularabteilung): Berlin, Brandenburg, Mecklenburg-Vorpommern, Sachsen, Sachsen-Anhalt und Thüringen",
          "Generalkonsulat der Republik Serbien in Hamburg: Hamburg, Niedersachsen, Bremen und Schleswig-Holstein",
          "Generalkonsulat der Republik Serbien in Düsseldorf: Nordrhein-Westfalen",
          "Generalkonsulat der Republik Serbien in Frankfurt am Main: Hessen, Rheinland-Pfalz und Saarland",
          "Generalkonsulat der Republik Serbien in München: Bayern",
          "Generalkonsulat der Republik Serbien in Stuttgart: Baden-Württemberg",
        ],
      },
      {
        h: "Strecken: von München, Frankfurt oder Hamburg bis zum Bestattungsort",
        p: [
          "Fast immer überführen wir auf der Straße, im Bestattungsfahrzeug direkt vom Abholort bis zum Friedhof, ohne Umladen. Die Entfernungen (in der Reihenfolge Belgrad / Banja Luka / Sarajevo / Podgorica / Skopje):",
        ],
        list: [
          "München: ca. 940 / 730 / 950 / 1.170 / 1.370 km",
          "Stuttgart: ca. 1.180 / 970 / 1.180 / 1.410 / 1.610 km",
          "Frankfurt am Main: ca. 1.290 / 1.080 / 1.300 / 1.570 / 1.720 km",
          "Köln: ca. 1.470 / 1.260 / 1.480 / 1.750 / 1.900 km",
          "Düsseldorf: ca. 1.510 / 1.300 / 1.520 / 1.790 / 1.940 km",
          "Dresden: ca. 1.050 / 970 / 1.170 / 1.450 / 1.480 km",
          "Berlin: ca. 1.240 / 1.170 / 1.370 / 1.650 / 1.670 km",
          "Hamburg: ca. 1.540 / 1.470 / 1.660 / 1.950 / 1.970 km",
        ],
      },
      {
        h: "Bosnien, Montenegro und Nordmazedonien als Ziel",
        p: [
          `Soll die Beisetzung nicht in Serbien stattfinden, stellt die Vertretung des Ziellandes in Deutschland die Einfuhrgenehmigung aus; die deutschen Unterlagen bleiben dieselben. Führt der Landweg nach Nordmazedonien durch Serbien, beantragen wir zusätzlich die serbische Transitgenehmigung. Für Bosnien und Herzegowina fahren wir je nach Ziel zum Beispiel in Richtung Gradiška – die Bedingungen an den Grenzübergängen ändern sich derzeit, deshalb planen wir die Route jeweils aktuell. Mehr dazu auf den Seiten ${a("/de/ueberfuehrung-nach-bosnien", "Überführung nach Bosnien")}, ${a("/de/ueberfuehrung-nach-montenegro", "Überführung nach Montenegro")} und ${a("/de/ueberfuehrung-nach-nordmazedonien", "Überführung nach Nordmazedonien")}.`,
          `Sie erreichen uns aus Deutschland unter +381 64 249 28 49 – per Anruf, WhatsApp oder Viber. Alle Papiere im Überblick finden Sie unter ${a("/de/dokumente-leichenpass", "Dokumente und Leichenpass")}.`,
        ],
      },
    ],
    faqs: [
      {
        q: "Überführung von München nach Serbien – wie lange dauert das?",
        a: "Die Überführung von München nach Belgrad umfasst ca. 940 km, das sind rund zehn Stunden reine Fahrzeit; hinzu kommen die vorgeschriebenen Ruhezeiten des Fahrers. Vom Anruf bis zur Übergabe an die Familie vergehen bei einer Überführung aus Deutschland meist 2–4 Tage. Am längsten dauern die Behördengänge, besonders über Wochenenden und Feiertage.",
      },
      {
        q: "Leichenüberführung nach Bosnien: was ist anders als bei Serbien?",
        a: "Statt der serbischen Sprovodnica brauchen wir die Genehmigung der bosnisch-herzegowinischen Vertretung in Deutschland, die wir parallel zu den deutschen Papieren beantragen. Von Stuttgart nach Banja Luka sind es ca. 970 km, von Frankfurt nach Sarajevo ca. 1.300 km.",
      },
      {
        q: "Wer stellt den Leichenpass in NRW oder Bayern aus?",
        a: "In Bayern die Gemeinde, in der die Überführung beginnt. In Nordrhein-Westfalen legt jede Stadt die Stelle selbst fest, in Düsseldorf etwa das Standesamt. Sie müssen sich darum nicht kümmern – den Antrag stellen wir, sobald die Beurkundung beim Standesamt vermerkt ist.",
      },
      {
        q: "Muss ich persönlich zum serbischen Konsulat?",
        a: "In der Regel nicht. Die Sprovodnica kann ein bevollmächtigtes Bestattungsunternehmen beantragen. Wir brauchen von Ihnen nur einige Angaben, Kopien der Ausweise und gegebenenfalls eine unterschriebene Vollmacht.",
      },
      {
        q: "Ist eine Überführung nach Mazedonien aus Deutschland möglich?",
        a: "Ja. Von Berlin nach Skopje sind es ca. 1.670 km, von München ca. 1.370 km. Die Einfuhrgenehmigung erteilt die nordmazedonische Vertretung, und für die Fahrt durch Serbien beantragen wir die serbische Transitgenehmigung.",
      },
      {
        q: "Was kostet eine Überführung aus Deutschland?",
        a: `Das hängt vom Abholort, vom Bestattungsort, von den örtlichen Gebühren und von der Art der Überführung ab. Einen verbindlichen Gesamtpreis erhalten Sie schon beim ersten Telefonat – versteckte Kosten gibt es bei uns nicht. Welche Faktoren eine Rolle spielen, erklären wir unter ${a("/de/kosten-ueberfuehrung", "Kosten einer Überführung")}.`,
      },
    ],
    relatedLinks: [
      { href: "/de/ueberfuehrung-nach-serbien", title: "Überführung nach Serbien" },
      { href: "/de/ueberfuehrung-nach-bosnien", title: "Überführung nach Bosnien" },
      { href: "/de/dokumente-leichenpass", title: "Dokumente und Leichenpass" },
      { href: "/de/kosten-ueberfuehrung", title: "Kosten einer Überführung" },
      { href: "/de/kontakt", title: "Kontakt" },
    ],
    areaServed: "Germany",
  },

  // ───────────────────────────── from-austria ─────────────────────────────
  {
    key: "from-austria",
    slug: "ueberfuehrung-aus-oesterreich",
    title: "Überführung aus Österreich nach Serbien und Bosnien",
    description:
      "Überführung aus Österreich nach Serbien, Bosnien, Montenegro und Nordmazedonien: Totenbeschau, Leichenpass von Bezirkshauptmannschaft oder Magistrat.",
    h1: "Überführung aus Österreich nach Serbien, Bosnien und in die Region",
    crumb: "Aus Österreich",
    lead:
      "Ob Wien, Graz, Linz, Salzburg oder Innsbruck: Wir übernehmen Verstorbene in ganz Österreich und überführen sie zum Bestattungsort in Serbien, Bosnien und Herzegowina, Montenegro oder Nordmazedonien. Mit Ärzten, Standesämtern und Magistraten sprechen wir Deutsch, und Ihre Familie hat eine einzige Ansprechperson für alle Fragen.",
    sections: [
      {
        h: "Totenbeschau: der erste Schritt in Österreich",
        p: [
          "In Österreich muss jeder Todesfall durch einen Totenbeschauarzt bestätigt werden. Im Spital oder Pflegeheim veranlasst das die Einrichtung. Stirbt jemand zu Hause, verständigen Sie den Hausarzt oder den Ärztenotdienst unter 141; die Totenbeschau übernimmt dann der für den Ort zuständige Arzt. Erst mit dem Totenbeschaubefund und dem dabei ausgestellten Leichenbegleitschein darf der Verstorbene überhaupt bewegt werden.",
          "Melden Sie sich bei uns, sobald der Arzt dagewesen ist. Wir sagen Ihnen, welche Dokumente des Verstorbenen wir brauchen, und holen ihn ab, sobald die Totenbeschau abgeschlossen ist.",
        ],
      },
      {
        h: "Standesamt und internationale Sterbeurkunde in Österreich",
        p: [
          "Der Todesfall wird beim Standesamt des Sterbeorts angezeigt, das die Sterbeurkunde ausstellt. Für die Überführung beantragen wir zusätzlich die internationale Sterbeurkunde. Österreich und Serbien sind – wie Bosnien und Herzegowina, Montenegro und Nordmazedonien – Vertragsstaaten des CIEC-Übereinkommens Nr. 16 über mehrsprachige Auszüge aus Personenstandsbüchern. Die internationale Sterbeurkunde aus Wien oder Graz wird in Belgrad oder Banja Luka daher in der Regel ohne Beglaubigung und ohne Übersetzung akzeptiert.",
          "Wir empfehlen, gleich mehrere Ausfertigungen zu bestellen. Neben der Sprovodnica brauchen Sie Sterbeurkunden später für Versicherungen, Banken, die Pensionsversicherung und die Eintragung des Todesfalls in die serbischen Personenstandsbücher.",
        ],
      },
      {
        h: "Leichenpass Österreich: Bezirkshauptmannschaft oder Magistrat",
        p: [
          "Für die Überführung ins Ausland ist eine Überführungsbewilligung samt mehrsprachigem Leichenpass nötig, oft auch internationaler Leichenpass genannt. Ausgestellt wird er in den meisten Bundesländern von der Bezirksverwaltungsbehörde des Sterbeorts: von der Bezirkshauptmannschaft oder, in Statutarstädten wie Wien, Graz, Linz, Salzburg, Innsbruck oder Klagenfurt, vom Magistrat. Die Details regelt jedes Bundesland selbst.",
          "Voraussetzung sind die abgeschlossene Totenbeschau, die Anzeige beim Standesamt und die Freigabe zur Bestattung. Überführen dürfen ausschließlich befugte Bestattungsunternehmen; die Antragstellung kann an das Bestattungsunternehmen übertragen werden. Das übernehmen wir für Sie, einschließlich der Gebühren, die je nach Bundesland unterschiedlich ausfallen.",
        ],
      },
      {
        h: "Unklare Todesursache: Polizei, Staatsanwaltschaft, Obduktion",
        p: [
          "Bei einem Unfall, einem Gewaltverdacht oder einer unklaren Todesursache wird die Polizei verständigt, und die Staatsanwaltschaft kann eine gerichtliche Obduktion anordnen. Auch die Gesundheitsbehörde kann eine Obduktion veranlassen, wenn die Todesursache bei der Totenbeschau nicht geklärt werden kann. Solange der Leichnam nicht freigegeben ist, wird kein Leichenpass ausgestellt.",
          "Für Familien ist diese Wartezeit oft schwer. Wir erklären Ihnen, wo der Fall steht, und bereiten in der Zwischenzeit alles Übrige vor, damit die Überführung gleich nach der Freigabe beginnen kann.",
        ],
      },
      {
        h: "Zwei serbische Vertretungen in Österreich: Wien und Salzburg",
        p: [
          "Für die Einfuhr nach Serbien benötigen wir die Überführungsgenehmigung der serbischen Vertretung (serbisch: sprovodnica). Welche Vertretung zuständig ist, hängt vom Bundesland des letzten Wohnsitzes ab, nicht vom Sterbeort:",
        ],
        list: [
          "Botschaft der Republik Serbien in Wien (Konsularabteilung): Wien, Niederösterreich, Burgenland, Steiermark und Kärnten",
          "Generalkonsulat der Republik Serbien in Salzburg: Salzburg, Tirol, Vorarlberg und Oberösterreich",
        ],
      },
      {
        h: "Entfernungen: von Wien, Graz, Linz, Salzburg und Innsbruck",
        p: [
          "Österreich liegt der Region am nächsten, deshalb überführen wir praktisch immer auf der Straße. Aus dem Osten führt die Strecke meist über Ungarn, aus der Steiermark und Kärnten über Slowenien und Kroatien. Die Werte gelten jeweils für Belgrad / Banja Luka / Sarajevo / Podgorica / Skopje:",
        ],
        list: [
          "Wien: ca. 620 / 550 / 740 / 1.060 / 1.050 km",
          "Graz: ca. 580 / 370 / 590 / 880 / 1.010 km",
          "Linz: ca. 800 / 580 / 800 / 1.090 / 1.240 km",
          "Salzburg: ca. 810 / 600 / 820 / 1.040 / 1.240 km",
          "Innsbruck: ca. 980 / 770 / 990 / 1.210 / 1.410 km",
        ],
      },
      {
        h: "Bestattung in Bosnien, Montenegro oder Nordmazedonien",
        p: [
          `Für eine Beisetzung außerhalb Serbiens erteilt die Vertretung des jeweiligen Landes in Österreich die Einfuhrgenehmigung. Nach Bosnien und Herzegowina führt der kürzeste Weg aus der Steiermark in Richtung Gradiška; weil sich die Bedingungen an den Grenzübergängen ändern, legen wir die Route erst kurz vor der Abfahrt fest. Für Nordmazedonien kommt auf dem Landweg die serbische Transitgenehmigung dazu. Details finden Sie unter ${a("/de/ueberfuehrung-nach-bosnien", "Überführung nach Bosnien")} und ${a("/de/ueberfuehrung-nach-serbien", "Überführung nach Serbien")}.`,
          `Rufen Sie uns aus Österreich jederzeit an oder schreiben Sie per WhatsApp oder Viber: +381 64 249 28 49. Wie der erste Anruf abläuft, steht auf der Seite ${a("/de/kontakt", "Kontakt")}.`,
        ],
      },
    ],
    faqs: [
      {
        q: "Wie lange dauert eine Überführung von Wien nach Belgrad?",
        a: "Die reine Fahrstrecke von Wien nach Belgrad beträgt ca. 620 km, also etwa sechs Stunden ohne Pausen. Insgesamt dauert eine Überführung aus Österreich meist 1–3 Tage, wobei der größte Teil auf Totenbeschau, Standesamt, Leichenpass und Sprovodnica entfällt.",
      },
      {
        q: "Überführung von Graz nach Bosnien – wie weit ist das?",
        a: "Von Graz nach Banja Luka sind es ca. 370 km, nach Sarajevo ca. 590 km. Die Genehmigung für die Einfuhr nach Bosnien und Herzegowina beantragen wir bei der bosnisch-herzegowinischen Vertretung in Österreich.",
      },
      {
        q: "Welches Konsulat ist zuständig, wenn der Verstorbene in Linz gelebt hat?",
        a: "Oberösterreich gehört zum Amtsbezirk des Generalkonsulats in Salzburg, nicht zur Botschaft in Wien. Das wissen viele Familien nicht – wir reichen den Antrag direkt an der richtigen Stelle ein.",
      },
      {
        q: "Was kostet der Leichenpass in Österreich?",
        a: `Die Gebühren legt jedes Bundesland selbst fest. In unserem Angebot sind sie bereits enthalten, ebenso die Kosten für Sterbeurkunden und Sprovodnica. Mehr dazu unter ${a("/de/kosten-ueberfuehrung", "Kosten einer Überführung")}.`,
      },
      {
        q: "Kann auch eine Urne aus Österreich nach Serbien überführt werden?",
        a: "Ja. Auch für eine Urne stellt die serbische Vertretung eine Sprovodnica aus; zusätzlich zu den üblichen Unterlagen wird die Bescheinigung über die Einäscherung vorgelegt. Die Urne muss verschlossen und für den Transport geschützt sein.",
      },
    ],
    relatedLinks: [
      { href: "/de/ueberfuehrung-nach-serbien", title: "Überführung nach Serbien" },
      { href: "/de/ueberfuehrung-nach-bosnien", title: "Überführung nach Bosnien" },
      { href: "/de/dokumente-leichenpass", title: "Dokumente und Leichenpass" },
      { href: "/de/ueberfuehrung-aus-deutschland", title: "Überführung aus Deutschland" },
      { href: "/de/kontakt", title: "Kontakt" },
    ],
    areaServed: "Austria",
  },

  // ───────────────────────────── from-switzerland ─────────────────────────────
  {
    key: "from-switzerland",
    slug: "ueberfuehrung-aus-der-schweiz",
    title: "Überführung aus der Schweiz nach Serbien und Bosnien",
    description:
      "Überführung aus der Schweiz nach Serbien, Bosnien, Montenegro und Nordmazedonien: kantonaler Leichenpass, Zivilstandsamt, Zoll, Konsulat Zürich oder Bern.",
    h1: "Überführung aus der Schweiz nach Serbien, Bosnien und in die Region",
    crumb: "Aus der Schweiz",
    lead:
      "Wir überführen Verstorbene aus allen Kantonen und aus Liechtenstein zum Bestattungsort in Serbien, Bosnien und Herzegowina, Montenegro oder Nordmazedonien. Kantonale Bewilligungen, Zollformalitäten und die Genehmigung der serbischen Vertretung erledigen wir für Sie, und Sie sprechen dabei immer mit derselben Person.",
    sections: [
      {
        h: "Ärztliche Todesbescheinigung und Meldung an das Zivilstandsamt",
        p: [
          "Nach dem Tod stellt der Arzt die ärztliche Todesbescheinigung aus, in der Westschweiz certificat médical de décès genannt. Der Todesfall muss danach in der Regel innerhalb von zwei Tagen gemeldet werden – je nach Gemeinde beim Zivilstandsamt oder beim Bestattungsamt, das die Meldung weiterleitet. In Genf und in der Waadt ist das office de l'état civil zuständig.",
          "Viele Familien wissen nicht, dass es kein einheitliches Schweizer Verfahren gibt. Deshalb klären wir gleich beim ersten Anruf, in welchem Kanton der Tod eingetreten ist und wo der Verstorbene zuletzt gewohnt hat. Davon hängen sowohl die Schweizer Zuständigkeiten als auch die serbische Vertretung ab.",
        ],
      },
      {
        h: "Todesschein und internationaler Todesschein in der Schweiz",
        p: [
          "Das Zivilstandsamt beurkundet den Tod und stellt den Todesschein bzw. den Auszug aus dem Todesregister aus; französisch heißt das Dokument acte de décès, im Tessin atto di morte. Für Serbien bestellen wir den internationalen Todesschein, den mehrsprachigen Auszug nach dem CIEC-Übereinkommen Nr. 16. Die Schweiz ist wie Serbien Vertragsstaat, weshalb serbische Behörden diesen Auszug in der Regel ohne Apostille und ohne Übersetzung annehmen. Dasselbe gilt für Bosnien und Herzegowina, Montenegro und Nordmazedonien.",
        ],
      },
      {
        h: "Leichenpass Zürich, Bern, Aargau: jeder Kanton regelt es anders",
        p: [
          "Für die Überführung ins Ausland braucht es einen Leichenpass, in der Romandie laissez-passer mortuaire. Welche Stelle ihn ausstellt, bestimmt das kantonale Recht. Im Aargau und in Solothurn ist es das Zivilstandsamt, in der Stadt Bern das städtische Bestattungsamt, das auch die Einsargung bestätigt. Im Kanton Zürich prüfen wir für jede Gemeinde, welche Stelle zuständig ist und welche Beilagen sie verlangt.",
          "In mehreren Kantonen muss ein bewilligter Bestatter vorher protokollieren, dass der Sarg ordnungsgemäß verschlossen und versiegelt ist und nur die verstorbene Person mit ihren persönlichen Gegenständen enthält. Wir verwenden dafür einen hermetisch verschlossenen Sarg, wie er für internationale Überführungen vorgeschrieben ist.",
        ],
      },
      {
        h: "Zoll: Die Schweiz gehört nicht zur EU",
        p: [
          "Das ist der wichtigste Unterschied zu Deutschland oder Österreich: Weil die Schweiz kein EU-Mitglied ist, fallen beim Verlassen des Landes Zollformalitäten an. Leichenpass, Todesschein und die Einfuhrgenehmigung des Ziellandes müssen daher vollständig vorliegen, bevor das Fahrzeug losfährt. Wir bereiten die Begleitpapiere so vor, dass an der Grenze keine Zeit verloren geht.",
          "Liechtenstein bildet mit der Schweiz eine Zollunion; für eine Überführung aus Vaduz oder Schaan gelten deshalb vergleichbare Formalitäten.",
        ],
      },
      {
        h: "Aussergewöhnlicher Todesfall: Freigabe durch die Staatsanwaltschaft",
        p: [
          "Bei einem Unfall, einem Suizid oder einer unklaren Todesursache spricht man in der Schweiz von einem aussergewöhnlichen Todesfall. Dann ermittelt die Polizei, und die Staatsanwaltschaft – in der Westschweiz das Ministère public – entscheidet, ob eine Untersuchung im Institut für Rechtsmedizin nötig ist. Ohne ihre Bestattungsfreigabe stellt kein Kanton einen Leichenpass aus, und die Überführung verschiebt sich entsprechend.",
        ],
      },
      {
        h: "Sprovodnica: Generalkonsulat Zürich oder Botschaft Bern",
        p: [
          "Für die Einfuhr nach Serbien stellt die serbische Vertretung die Überführungsgenehmigung aus (serbisch: sprovodnica). Massgeblich ist der Kanton des letzten Wohnsitzes:",
        ],
        list: [
          "Generalkonsulat der Republik Serbien in Zürich: Zürich, Luzern, Uri, Schwyz, Obwalden, Nidwalden, Glarus, Zug, Schaffhausen, beide Appenzell, St. Gallen, Graubünden, Aargau und Thurgau sowie Liechtenstein",
          "Botschaft der Republik Serbien in Bern (Konsularabteilung): alle übrigen Kantone, darunter Bern, Genf, Waadt, Basel, Freiburg, Neuenburg, Wallis und Tessin",
        ],
      },
      {
        h: "Strecken und Dauer: von Zürich, Bern und Genf",
        p: [
          "Auf der Straße führt der Weg meist durch Österreich, aus dem Süden der Schweiz auch durch Norditalien. Die Distanzen nach Belgrad / Banja Luka / Sarajevo / Podgorica / Skopje:",
        ],
        list: [
          "Zürich: ca. 1.250 / 1.040 / 1.260 / 1.480 / 1.680 km",
          "Bern: ca. 1.370 / 1.160 / 1.380 / 1.540 / 1.800 km",
          "Genf: ca. 1.330 / 1.120 / 1.340 / 1.500 / 1.760 km",
        ],
      },
      {
        h: "Ziel Bosnien, Montenegro oder Nordmazedonien",
        p: [
          `Liegt der Bestattungsort ausserhalb Serbiens, beantragen wir die Einfuhrgenehmigung bei der Vertretung des Ziellandes in der Schweiz. Nach Bosnien und Herzegowina planen wir die Route je nach Ort zum Beispiel in Richtung Gradiška und prüfen vor der Abfahrt die aktuellen Bedingungen am Grenzübergang. Für Nordmazedonien gehört auf dem Landweg die serbische Transitgenehmigung dazu. Statt der Strasse ist auch eine Überführung per Flugzeug ab Zürich oder Genf möglich – die Unterschiede erklären wir unter ${a("/de/kosten-ueberfuehrung", "Kosten einer Überführung")}.`,
          `Anrufe und WhatsApp-Nachrichten aus der Schweiz sind jederzeit willkommen: +381 64 249 28 49, auch über Viber. Eine Übersicht aller Papiere bietet die Seite ${a("/de/dokumente-leichenpass", "Dokumente und Leichenpass")}.`,
        ],
      },
    ],
    faqs: [
      {
        q: "Wie lange dauert eine Überführung von Zürich nach Belgrad?",
        a: "Die Strecke beträgt ca. 1.250 km, das sind etwa 13 Stunden reine Fahrzeit, dazu kommen Ruhezeiten des Fahrers und die Zollabfertigung. Vom ersten Anruf bis zur Übergabe dauert eine Überführung aus der Schweiz meist 2–4 Tage.",
      },
      {
        q: "Warum braucht es bei einer Überführung aus der Schweiz den Zoll?",
        a: "Die Schweiz ist nicht Mitglied der Europäischen Union. Deshalb wird die Überführung beim Verlassen des Landes beim Zoll angemeldet, und die Begleitdokumente werden vorgezeigt. Wir bereiten diese Unterlagen im Voraus vor.",
      },
      {
        q: "Welche Vertretung ist für Verstorbene aus Basel zuständig?",
        a: "Basel gehört, wie Genf, die Waadt und das Tessin, zum Amtsbezirk der Botschaft der Republik Serbien in Bern. Für Zürich, St. Gallen oder den Aargau ist dagegen das Generalkonsulat in Zürich zuständig.",
      },
      {
        q: "Überführung aus der Schweiz nach Bosnien – was ist zu beachten?",
        a: "Von Zürich nach Banja Luka sind es ca. 1.040 km, nach Sarajevo ca. 1.260 km. Neben den Schweizer Papieren und der Zollabfertigung braucht es die Einfuhrgenehmigung der bosnisch-herzegowinischen Vertretung in der Schweiz, die wir für Sie beantragen.",
      },
      {
        q: "Wo bekomme ich einen internationalen Todesschein in der Schweiz?",
        a: "Beim Zivilstandsamt, das den Tod beurkundet hat. Als beauftragtes Bestattungsunternehmen bestellen wir ihn gleich mit, zusammen mit weiteren Ausfertigungen für Versicherungen und Behörden.",
      },
    ],
    relatedLinks: [
      { href: "/de/ueberfuehrung-nach-serbien", title: "Überführung nach Serbien" },
      { href: "/de/ueberfuehrung-nach-bosnien", title: "Überführung nach Bosnien" },
      { href: "/de/dokumente-leichenpass", title: "Dokumente und Leichenpass" },
      { href: "/de/ueberfuehrung-aus-oesterreich", title: "Überführung aus Österreich" },
      { href: "/de/kontakt", title: "Kontakt" },
    ],
    areaServed: "Switzerland",
  },

  // ───────────────────────────── documents ─────────────────────────────
  {
    key: "documents",
    slug: "dokumente-leichenpass",
    title: "Leichenpass und Dokumente für die Überführung",
    description:
      "Welche Dokumente braucht eine Überführung nach Serbien? Leichenpass, internationale Sterbeurkunde, Todesbescheinigung, Sprovodnica, Urne und Apostille.",
    h1: "Leichenpass, Sterbeurkunde und Sprovodnica: die Dokumente für die Überführung",
    crumb: "Dokumente",
    lead:
      "Für eine Überführung über die Grenze braucht es zwei Arten von Papieren: die Dokumente aus dem Land, in dem der Tod eingetreten ist, und die Genehmigung des Landes, in dem die Beisetzung stattfindet. Hier erklären wir, was verlangt wird, wer was ausstellt und worauf Sie achten sollten. Die Beschaffung übernehmen wir vollständig.",
    sections: [
      {
        h: "Wie die Unterlagen zusammenhängen",
        p: [
          "Die erste Gruppe belegt den Tod und erlaubt, dass der Verstorbene das Sterbeland verlässt: die ärztliche Todesbescheinigung, die Sterbeurkunde und die Erlaubnis zur Überführung ins Ausland – in Deutschland, Österreich und der Schweiz der Leichenpass. Die zweite Gruppe ist die Einfuhrgenehmigung des Ziellandes; für Serbien ist das die Sprovodnica.",
          "Dazu kommt der Reisepass oder Personalausweis des Verstorbenen im Original. Alle Dokumente reisen mit dem Sarg und werden an der Grenze vorgezeigt. Sie müssen also vollständig sein, bevor das Fahrzeug abfährt.",
        ],
      },
      {
        h: "Todesbescheinigung (Totenschein)",
        p: [
          "Die Todesbescheinigung stellt der Arzt nach der Leichenschau aus. Sie enthält die Todesursache und die Angabe, ob der Tod natürlich, nicht natürlich oder ungeklärt ist. In Österreich entspricht ihr der Totenbeschaubefund, in der Schweiz die ärztliche Todesbescheinigung. Bei einem nicht natürlichen oder ungeklärten Tod geht ohne die Freigabe der Staatsanwaltschaft nichts weiter, oft nach einer Obduktion.",
          "Für die Sprovodnica gilt die Todesbescheinigung als medizinischer Bericht über die Todesursache und wird im Original vorgelegt.",
        ],
      },
      {
        h: "Internationale Sterbeurkunde beantragen: mehrsprachig nach CIEC",
        p: [
          "Die Sterbeurkunde stellt das Standesamt des Sterbeorts aus, in der Schweiz das Zivilstandsamt. Für das Ausland gibt es die internationale Sterbeurkunde (in der Schweiz: internationaler Todesschein), den mehrsprachigen Auszug nach dem Wiener CIEC-Übereinkommen Nr. 16 von 1976, auch als Formular C bekannt. Die Feldbezeichnungen sind mehrsprachig und mit Codes versehen, damit Behörden den Inhalt ohne Übersetzung lesen können.",
          "Das Übereinkommen gilt unter anderem für Serbien, Deutschland, Österreich, die Schweiz, Bosnien und Herzegowina, Montenegro, Nordmazedonien, Kroatien, Italien, Spanien und Frankreich. Zwischen diesen Staaten wird der mehrsprachige Auszug in der Regel ohne Legalisation anerkannt. Bestellen Sie ruhig mehrere Exemplare: Versicherungen, Banken, Rentenkassen und das serbische Standesamt brauchen später ebenfalls eines.",
        ],
      },
      {
        h: "Leichenpass: wer stellt ihn aus?",
        p: [
          `Der Leichenpass – häufig auch internationaler Leichenpass genannt – erlaubt die Überführung des Sarges ins Ausland. In Deutschland legt jedes Bundesland die zuständige Stelle fest: in Bayern die Gemeinde, in der die Überführung beginnt, in Sachsen und Thüringen das Gesundheitsamt des Sterbeorts, in Frankfurt das Standesamt. In Österreich ist es die Bezirkshauptmannschaft oder in Statutarstädten der Magistrat, in der Schweiz eine kantonale Stelle, oft das Zivilstandsamt. Einzelheiten pro Land finden Sie auf den Seiten ${a("/de/ueberfuehrung-aus-deutschland", "Überführung aus Deutschland")}, ${a("/de/ueberfuehrung-aus-oesterreich", "aus Österreich")} und ${a("/de/ueberfuehrung-aus-der-schweiz", "aus der Schweiz")}.`,
          "Voraussetzung ist fast überall, dass der Tod beim Standesamt beurkundet oder die Beurkundung vermerkt ist und der Verstorbene in einem hermetisch verschlossenen Sarg liegt, wie er für internationale Überführungen vorgeschrieben ist – in der Praxis mit Metall- bzw. Zinkeinsatz.",
        ],
      },
      {
        h: "Sprovodnica: die Einfuhrgenehmigung für Serbien",
        p: [
          "Die Sprovodnica ist die Überführungsgenehmigung der serbischen Botschaft bzw. des Generalkonsulats. Ausgestellt wird sie von der Vertretung, die für den letzten Wohnsitz des Verstorbenen zuständig ist; beantragen können sie Angehörige oder ein bevollmächtigtes Bestattungsunternehmen. Nach der Liste des serbischen Außenministeriums werden in der Regel folgende Originale verlangt:",
        ],
        list: [
          "Reisepass des Verstorbenen",
          "Antrag mit Angabe des Bestattungsorts und der Fahrtroute",
          "Sterbeurkunde der ausländischen Behörde, z. B. Sterbeurkunde oder Auszug aus dem Todesregister",
          "ärztlicher Bericht über die Todesursache, z. B. Todesbescheinigung",
          "Überführungsgenehmigung des Sterbelandes, z. B. Leichenpass",
          "bei ausländischen Staatsangehörigen: Nachweis, dass in Serbien eine Grabstelle gesichert ist",
        ],
        ordered: true,
      },
      {
        h: "Bosnien, Montenegro, Nordmazedonien und Transit durch Serbien",
        p: [
          "Die Sprovodnica gilt nur für Serbien. Für eine Beisetzung in Bosnien und Herzegowina, Montenegro oder Nordmazedonien stellt die Vertretung des jeweiligen Landes die Einfuhrgenehmigung aus. Die Unterlagen aus dem Sterbeland sind dieselben, deshalb beantragen wir alles parallel.",
          "Führt die Strecke nur durch Serbien in ein Drittland – typisch bei einer Überführung nach Nordmazedonien auf der Straße –, ist eine serbische Transitgenehmigung erforderlich. Auch die besorgen wir.",
        ],
      },
      {
        h: "Urne ins Ausland überführen",
        p: [
          "Wurde der Verstorbene im Ausland eingeäschert, verlangt die serbische Vertretung auch für die Urne eine Sprovodnica. Zu den übrigen Unterlagen kommt die Bescheinigung über die Einäscherung. Die Urne muss fest verschlossen und für den Transport geschützt sein. In manchen Ländern entfällt für Urnen ein Leichenpass – in Dänemark etwa wird der dortige Ligpas nur für Särge verlangt –, an den serbischen Anforderungen ändert das aber nichts.",
        ],
      },
      {
        h: "Apostille und Übersetzung für Nicht-Vertragsstaaten",
        p: [
          `Stammen die Urkunden aus einem Staat, für den das CIEC-Übereinkommen Nr. 16 nicht gilt, reicht der mehrsprachige Auszug nicht. Das betrifft vor allem Schweden, Dänemark und Norwegen sowie Griechenland, das das Übereinkommen unterzeichnet, aber nie ratifiziert hat. Dort braucht die Sterbeurkunde eine Apostille und eine beglaubigte Übersetzung ins Serbische. Das kostet zusätzliche Zeit, deshalb beginnen wir damit, sobald die Urkunde ausgestellt ist. Mehr über die Kosten lesen Sie unter ${a("/de/kosten-ueberfuehrung", "Kosten einer Überführung")}.`,
        ],
      },
    ],
    faqs: [
      {
        q: "Was ist ein Leichenpass?",
        a: "Ein amtliches, mehrsprachiges Begleitdokument, das die Überführung eines Verstorbenen im verschlossenen Sarg über Landesgrenzen erlaubt. Er wird im Sterbeland ausgestellt und ist zugleich eine der Unterlagen für die serbische Sprovodnica.",
      },
      {
        q: "Wer stellt einen internationalen Leichenpass aus?",
        a: "Das hängt vom Land ab: in Deutschland je nach Bundesland Gemeinde, Standesamt oder Gesundheitsamt, in Österreich die Bezirkshauptmannschaft oder der Magistrat, in der Schweiz eine kantonale Stelle. Den Antrag stellen wir für Sie.",
      },
      {
        q: "Wo kann ich die internationale Sterbeurkunde beantragen?",
        a: "Beim Standesamt bzw. Zivilstandsamt, das den Tod beurkundet hat. Sie können das selbst tun, müssen es aber nicht – als beauftragtes Bestattungsunternehmen bestellen wir die benötigten Exemplare mit.",
      },
      {
        q: "Brauche ich eine Apostille für die Sterbeurkunde?",
        a: "Aus Deutschland, Österreich und der Schweiz in der Regel nicht, wenn die internationale Sterbeurkunde vorliegt. Aus Schweden, Dänemark, Norwegen oder Griechenland dagegen schon, zusammen mit einer Übersetzung ins Serbische.",
      },
      {
        q: "Muss ich für die Sprovodnica selbst zur Botschaft?",
        a: "Meist nicht. Ein bevollmächtigtes Bestattungsunternehmen kann den Antrag stellen. Wir brauchen von Ihnen nur die wichtigsten Angaben, Ausweiskopien und bei Bedarf eine unterschriebene Vollmacht.",
      },
      {
        q: "Welche Papiere braucht eine Urne für Serbien?",
        a: "Die Sprovodnica der zuständigen serbischen Vertretung, die Sterbeurkunde, die ärztliche Todesbescheinigung, den Pass des Verstorbenen und die Bescheinigung über die Einäscherung.",
      },
    ],
    relatedLinks: [
      { href: "/de/ueberfuehrung-nach-serbien", title: "Überführung nach Serbien" },
      { href: "/de/ueberfuehrung-aus-deutschland", title: "Überführung aus Deutschland" },
      { href: "/de/ueberfuehrung-aus-der-schweiz", title: "Überführung aus der Schweiz" },
      { href: "/de/kosten-ueberfuehrung", title: "Kosten einer Überführung" },
      { href: "/de/kontakt", title: "Kontakt" },
    ],
  },

  // ───────────────────────────── cost ─────────────────────────────
  {
    key: "cost",
    slug: "kosten-ueberfuehrung",
    title: "Kosten einer Überführung nach Serbien und Bosnien",
    description:
      "Was kostet eine Leichenüberführung nach Serbien oder Bosnien? Alle Kostenfaktoren, was im Preis enthalten ist und wer zahlt. Den Preis nennen wir sofort.",
    h1: "Was kostet eine Überführung nach Serbien, Bosnien und in die Region?",
    crumb: "Kosten",
    lead:
      "Die Frage nach den Kosten gehört zu den ersten, die Familien stellen, und das zu Recht. Eine Zahl, die für alle gilt, gibt es trotzdem nicht: Der Preis einer Überführung setzt sich aus mehreren Teilen zusammen, die von Fall zu Fall verschieden sind. Hier erklären wir jeden dieser Faktoren. Den genauen Preis für Ihren Fall nennen wir Ihnen im ersten Gespräch, ohne versteckte Kosten.",
    sections: [
      {
        h: "Warum es keinen Pauschalpreis und keinen Preis pro Kilometer gibt",
        p: [
          "Wer nach Leichenüberführung Kosten sucht, hofft oft auf einen Kilometerpreis. Die Entfernung ist wichtig, aber nur ein Faktor unter mehreren. Dieselbe Strecke von München nach Belgrad kann unterschiedlich ausfallen, je nachdem, ob ein Flug nötig ist, ob einbalsamiert werden muss oder ob auf die Freigabe der Staatsanwaltschaft gewartet wird.",
          "Deshalb veröffentlichen wir keine Pauschalbeträge, die sich später ändern könnten. Sagen Sie uns, wo der Tod eingetreten ist, wo die Beisetzung stattfinden soll, ob es um einen Sarg oder eine Urne geht und unter welchen Umständen der Tod eingetreten ist – dann nennen wir Ihnen einen festen Preis für die gesamte Überführung.",
        ],
      },
      {
        h: "Entfernung, Abholort und Bestattungsort",
        p: [
          "Mit der Strecke steigen Kraftstoff, Maut und Arbeitszeit der Fahrer; auf langen Strecken kommen vorgeschriebene Ruhezeiten hinzu. Zum Vergleich: Von Wien nach Belgrad sind es ca. 620 km, von München ca. 940 km, von Zürich ca. 1.250 km und von Hamburg ca. 1.540 km.",
          "Genauso wichtig ist das Ziel. Von Graz nach Banja Luka sind es ca. 370 km, von Frankfurt nach Sarajevo ca. 1.300 km, von Berlin nach Podgorica ca. 1.650 km. Ein Friedhof in einem Bergdorf abseits der Autobahn verlängert zudem das letzte Stück der Fahrt.",
        ],
      },
      {
        h: "Dokumente, Gebühren und Übersetzungen",
        p: [
          "Für Sterbeurkunden und den Leichenpass erheben Standesämter, Gemeinden, Bezirkshauptmannschaften oder Kantone Gebühren, deren Höhe je nach Ort verschieden ist. Hinzu kommt die Konsulargebühr für die Sprovodnica – bei einer Bestattung in Bosnien und Herzegowina, Montenegro oder Nordmazedonien die Gebühr der jeweiligen Vertretung. Führt die Strecke nach Nordmazedonien durch Serbien, fällt außerdem die serbische Transitgenehmigung an.",
          `Aus Deutschland, Österreich und der Schweiz entstehen in der Regel keine Kosten für Apostille und Übersetzung, weil die internationale Sterbeurkunde in Serbien ohne Legalisation anerkannt wird. Bei Urkunden etwa aus Schweden, Dänemark oder Norwegen ist das anders. Welche Papiere genau gebraucht werden, steht unter ${a("/de/dokumente-leichenpass", "Dokumente und Leichenpass")}.`,
        ],
      },
      {
        h: "Sarg, Versorgung und Einbalsamierung",
        p: [
          "Für eine internationale Überführung muss der Verstorbene in einem hermetisch verschlossenen Sarg liegen, wie er dafür vorgeschrieben ist – in der Regel mit Zinkeinsatz. Ein Standardmodell, das alle Anforderungen erfüllt, ist in unserem Preis enthalten. Wünschen Sie ein anderes Holz, eine andere Ausführung oder zusätzliche Ausstattung, nennen wir den Unterschied, bevor etwas bestellt wird.",
          "Die hygienische Versorgung, das Ankleiden und die Einsargung gehören zur Standardleistung. Eine Einbalsamierung ist nicht immer nötig; viele Fluggesellschaften verlangen sie aber für den Transport eines Sarges, und sie kann sinnvoll sein, wenn sich die Überführung wegen einer Obduktion oder wegen Feiertagen verzögert.",
        ],
      },
      {
        h: "Überführung im Bestattungsfahrzeug oder per Flugzeug",
        p: [
          "Auf der Straße fährt das Fahrzeug ohne Umladen vom Abholort direkt zum Friedhof, und die Kosten hängen vor allem von Strecke und Fahrzeit ab. Beim Sarg im Flugzeug setzt sich der Preis aus mehreren Posten zusammen: dem Frachttarif der Fluggesellschaft nach Gewicht und Maßen, der Spezialverpackung, den Flughafenleistungen an beiden Enden, gegebenenfalls der Einbalsamierung sowie zwei Fahrten auf der Straße – zum Abflughafen und vom Zielflughafen zum Bestattungsort.",
          "Aus Österreich und Süddeutschland lohnt sich der Flug deshalb selten, und schneller ist er oft auch nicht. Bei weiten Strecken prüfen wir beide Varianten und vergleichen den Gesamtpreis, nicht nur den Flugpreis.",
        ],
      },
      {
        h: "Umstände, die die Kosten beeinflussen",
        p: [
          "Nach einem Unfall oder bei unklarer Todesursache darf der Verstorbene erst nach der Freigabe durch die Staatsanwaltschaft übernommen werden, manchmal nach einer Obduktion. Der Transport selbst wird dadurch nicht teurer, die Kühlung kann sich aber verlängern. Ähnlich wirken Wochenenden und Feiertage, weil Standesämter und Konsulate nur werktags arbeiten.",
          "Hat die Klinik oder das Heim bereits ein örtliches Bestattungsunternehmen beauftragt, werden dessen Leistungen – etwa Abholung oder Aufbewahrung – gesondert berechnet. Am besten rufen Sie uns an, bevor Sie etwas unterschreiben.",
        ],
      },
      {
        h: "Was im Preis enthalten ist – und was nicht",
        p: [
          "Unser Preis bezieht sich auf die gesamte Leistung bis zum Bestattungsort. Nicht enthalten sind Kosten, die am Ort der Beerdigung in Serbien oder in der Region entstehen, etwa Grabstelle und Friedhofsleistungen, die kirchliche oder religiöse Zeremonie, Blumen, Traueranzeigen und das Totenmahl. Diese Leistungen können Sie uns auf Wunsch gesondert übertragen.",
        ],
        list: [
          "Beschaffung aller Dokumente im Sterbeland, einschließlich Leichenpass",
          "Sprovodnica bzw. Einfuhrgenehmigung des Ziellandes und, falls nötig, Transitgenehmigung",
          "Abholung, Versorgung und Standardsarg für die internationale Überführung",
          "Überführung im speziellen Bestattungsfahrzeug bis zum Bestattungsort",
          "Grenz- und Zollformalitäten",
          "ein fester Ansprechpartner für die Familie, rund um die Uhr erreichbar",
        ],
      },
      {
        h: "Wer die Kosten übernehmen kann",
        p: [
          "In der Regel trägt die Familie die Kosten, es lohnt sich aber zu prüfen, wer sich beteiligt. Eine Reisekrankenversicherung übernimmt häufig die Rückführung Verstorbener aus dem Ausland, wenn der Tod auf einer Reise eintrat. Viele Familien haben außerdem eine Sterbegeldversicherung mit Leistungen für die Überführung ins Ausland oder eine Lebensversicherung. Informieren Sie den Versicherer vor der Beauftragung, weil manche eine vorherige Zusage verlangen.",
          "Bei einem Arbeitsunfall in Deutschland zahlt die Berufsgenossenschaft Sterbegeld und erstattet unter bestimmten Voraussetzungen auch Überführungskosten. Bezog der Verstorbene eine serbische Rente, kann die Person, die die Bestattung bezahlt hat, beim serbischen Rentenversicherungsfonds (Fond PIO) eine Erstattung der Bestattungskosten beantragen. Für diese Anträge erhalten Sie von uns eine Rechnung und Kopien der Unterlagen.",
        ],
      },
    ],
    faqs: [
      {
        q: "Was kostet eine Überführung eines Toten aus dem Ausland nach Serbien?",
        a: "Das hängt vom Sterbeort, vom Bestattungsort, von den örtlichen Gebühren, vom Sarg und von der Art der Überführung ab. Von Wien nach Belgrad sind es ca. 620 km, von Düsseldorf ca. 1.510 km – schon deshalb kann der Preis nicht gleich sein. Den genauen Betrag nennen wir Ihnen im ersten Gespräch, unverbindlich.",
      },
      {
        q: "Wird eine Leichenüberführung nach Kilometern abgerechnet?",
        a: "Nicht ausschließlich. Die Kilometer bestimmen Kraftstoff, Maut und Fahrerzeit, im Preis stecken aber auch Dokumente, Gebühren, Sarg und Versorgung. Deshalb nennen wir einen Gesamtpreis für die Überführung, keinen Kilometerpreis.",
      },
      {
        q: "Was kostet eine Überführung einer Urne?",
        a: "Eine Urne braucht keinen Sarg für den internationalen Transport, die Dokumente bleiben aber nötig: Sterbeurkunde, Bescheinigung über die Einäscherung und Sprovodnica. Den Preis nennen wir Ihnen, sobald wir Abholort und Ziel kennen.",
      },
      {
        q: "Ist die Überführung eines Sarges im Flugzeug teurer?",
        a: "Meist ja, weil neben dem Frachttarif Verpackung, Flughafenleistungen, gegebenenfalls die Einbalsamierung und zwei Fahrten auf der Straße anfallen. Aus Österreich, Süddeutschland und der Schweiz bringt der Flug selten einen Zeitgewinn.",
      },
      {
        q: "Zahlt die Sterbegeldversicherung die Überführung ins Ausland?",
        a: "Das hängt vom Vertrag ab. Viele Policen sehen Leistungen für eine Überführung vor oder zahlen einen festen Betrag aus, den die Familie dafür verwenden kann. Sprechen Sie vor der Beauftragung mit dem Versicherer; Rechnung und Unterlagen erhalten Sie von uns.",
      },
      {
        q: "Sind Leichenpass und Sprovodnica im Preis enthalten?",
        a: `Ja. Die Gebühren für Sterbeurkunden, Leichenpass und Sprovodnica bzw. die Genehmigung des Ziellandes sind Teil unseres Angebots. Fragen zu Ihrem Fall beantworten wir gern über ${a("/de/kontakt", "Kontakt")} oder direkt am Telefon unter +381 64 249 28 49.`,
      },
    ],
    relatedLinks: [
      { href: "/de/dokumente-leichenpass", title: "Dokumente und Leichenpass" },
      { href: "/de/ueberfuehrung-nach-serbien", title: "Überführung nach Serbien" },
      { href: "/de/ueberfuehrung-aus-deutschland", title: "Überführung aus Deutschland" },
      { href: "/de/ueberfuehrung-aus-oesterreich", title: "Überführung aus Österreich" },
      { href: "/de/kontakt", title: "Kontakt" },
    ],
  },
];
