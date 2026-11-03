import type { LeistungSeite } from "./types";

// Gemeinsame Bausteine
const orteListe = (leistung: string): string[] => [
  `[${leistung} in Bergedorf](/pflegedienst/bergedorf/)`,
  `[${leistung} in Lohbrügge](/pflegedienst/lohbruegge/)`,
  `[${leistung} in Billstedt](/pflegedienst/billstedt/)`,
  `[${leistung} in Horn](/pflegedienst/horn/)`,
  `[${leistung} in Jenfeld](/pflegedienst/jenfeld/)`,
  `[${leistung} in Oststeinbek](/pflegedienst/oststeinbek/)`,
  `[${leistung} in Glinde](/pflegedienst/glinde/)`,
  `[${leistung} in Reinbek](/pflegedienst/reinbek/)`,
  `[${leistung} in Wentorf bei Hamburg](/pflegedienst/wentorf/)`,
];

export const leistungsSeiten: LeistungSeite[] = [
  // ---------------------------------------------------------------------------
  // 1. Ambulante Pflege
  // ---------------------------------------------------------------------------
  {
    slug: "ambulante-pflege",
    navTitle: "Ambulante Pflege",
    h1: "Ambulante Pflege in Hamburg-Bergedorf",
    metaTitle: "Ambulante Pflege in Bergedorf | TwinsCare Pflegedienst",
    metaDescription:
      "Ambulante Pflege zu Hause in Bergedorf und Hamburg-Ost: Grundpflege nach SGB XI, bis 2.299 € Sachleistung im Monat. Kostenlose Erstberatung.",
    lead:
      "TwinsCare unterstützt Sie zu Hause bei Körperpflege, Ernährung und Mobilität. Die Kosten übernimmt ab Pflegegrad 2 die Pflegekasse über die Pflegesachleistung.",
    kurz: [
      "Ambulante Pflege ist Hilfe durch einen Pflegedienst in Ihrer eigenen Wohnung.",
      "Ab Pflegegrad 2 zahlt die Pflegekasse monatlich 796 € bis 2.299 € als Pflegesachleistung (§ 36 SGB XI).",
      "Pflegesachleistung und Pflegegeld lassen sich als Kombinationsleistung verbinden (§ 38 SGB XI).",
      "TwinsCare rechnet direkt mit der Pflegekasse ab und erstellt vorab einen schriftlichen Kostenvoranschlag.",
    ],
    kennzahlen: [
      { wert: "ab Pflegegrad 2", label: "Kostenübernahme durch die Pflegekasse" },
      { wert: "bis 2.299 €", label: "Pflegesachleistung pro Monat (PG 5)" },
      { wert: "jederzeit", label: "Pflegevertrag ohne Frist kündbar" },
    ],
    foto: {
      id: "photo-1765896387398-1e1ae8d2eb85",
      alt: "Pflegekraft in grüner Kleidung beugt sich zu einer älteren Person im Sessel",
    },
    sections: [
      {
        h2: "Was gehört zur ambulanten Pflege?",
        blocks: [
          {
            type: "p",
            text: "Zur ambulanten Pflege gehören vor allem Körperpflege, Hilfe beim Essen und Trinken, Unterstützung bei der Mobilität und vorbeugende Maßnahmen. Fachleute nennen das **Grundpflege**; die Grundlage ist das Elfte Sozialgesetzbuch (SGB XI).",
          },
          {
            type: "p",
            text: "Ein Pflegedienst kommt dafür zu festen Zeiten zu Ihnen nach Hause. Sie behalten Ihren Alltag, Ihre Wohnung und Ihre Gewohnheiten. Angehörige werden entlastet, ohne die Pflege ganz abzugeben.",
          },
          {
            type: "p",
            text: "Ziel der Pflege ist, dass Sie so selbstständig wie möglich bleiben. Wir übernehmen deshalb nicht alles, sondern unterstützen dort, wo es nötig ist. Was Sie selbst schaffen, machen Sie weiter selbst.",
          },
          {
            type: "ul",
            items: [
              "**Körperpflege:** Waschen, Duschen, Baden, Zahn- und Mundpflege, Rasieren, Haarpflege, Hilfe beim Toilettengang",
              "**Ernährung:** mundgerechtes Zubereiten von Mahlzeiten, Hilfe beim Essen und Trinken, Achten auf ausreichend Flüssigkeit",
              "**Mobilität:** Aufstehen und Zubettgehen, An- und Auskleiden, Gehen in der Wohnung, Umlagern im Bett",
              "**Prophylaxen:** Vorbeugung gegen Druckgeschwüre (Dekubitus), Stürze, Lungenentzündung und Gelenkversteifung",
            ],
          },
          {
            type: "p",
            text: "Medizinische Aufgaben wie Insulin spritzen oder Wunden versorgen zählen nicht zur Grundpflege. Sie gehören zur [Behandlungspflege](/leistungen/behandlungspflege/), die die Krankenkasse auf ärztliche Verordnung bezahlt.",
          },
        ],
      },
      {
        h2: "Wie viel zahlt die Pflegekasse für einen Pflegedienst?",
        blocks: [
          {
            type: "p",
            text: "Die Pflegekasse zahlt für einen Pflegedienst seit 2025 monatlich 796 € bei Pflegegrad 2 bis 2.299 € bei Pflegegrad 5. Diese Leistung heißt **Pflegesachleistung** (§ 36 SGB XI).",
          },
          {
            type: "table",
            head: ["Pflegegrad", "Pflegesachleistung § 36", "Pflegegeld § 37", "Entlastungsbetrag § 45b"],
            rows: [
              ["Pflegegrad 1", "–", "–", "131 €"],
              ["Pflegegrad 2", "796 €", "347 €", "131 €"],
              ["Pflegegrad 3", "1.497 €", "599 €", "131 €"],
              ["Pflegegrad 4", "1.859 €", "800 €", "131 €"],
              ["Pflegegrad 5", "2.299 €", "990 €", "131 €"],
            ],
            caption: "Monatliche Höchstbeträge der Pflegeversicherung, Stand 2026 (unverändert seit 01.01.2025)",
          },
          {
            type: "p",
            text: "Das Geld wird nicht an Sie ausgezahlt. Der Pflegedienst rechnet seine Leistungen direkt mit der Pflegekasse ab. Kosten über dem Höchstbetrag zahlen Sie selbst, deshalb ist ein genauer Kostenvoranschlag wichtig.",
          },
          {
            type: "p",
            text: "Bei Pflegegrad 1 gibt es keine Pflegesachleistung. Hier können Sie die 131 € [Entlastungsbetrag](/leistungen/entlastungsleistungen/) auch für Hilfe bei der Körperpflege einsetzen. Mehr Beispiele finden Sie im Ratgeber [Was kostet ein Pflegedienst?](/ratgeber/was-kostet-ein-pflegedienst/).",
          },
        ],
      },
      {
        h2: "Was ist die Kombinationsleistung aus Pflegegeld und Sachleistung?",
        blocks: [
          {
            type: "p",
            text: "Bei der Kombinationsleistung nutzen Sie einen Teil der Pflegesachleistung für den Pflegedienst und erhalten für den Rest anteiliges Pflegegeld (§ 38 SGB XI). Das Pflegegeld sinkt um den Prozentsatz der genutzten Sachleistung.",
          },
          {
            type: "p",
            text: "Ein Beispiel bei Pflegegrad 3: Der Pflegedienst rechnet 60 % der Sachleistung ab, also 898,20 €. Dann erhalten Sie zusätzlich 40 % des Pflegegelds, das sind 239,60 €. Dieses Geld steht Ihnen frei zur Verfügung, etwa für die Hilfe von Angehörigen.",
          },
          {
            type: "p",
            text: "An die gewählte Aufteilung sind Sie in der Regel sechs Monate gebunden. Die genaue Abrechnung erfolgt monatlich nach den tatsächlich erbrachten Leistungen. Ob sich die Kombination für Sie lohnt, erklärt der Ratgeber [Pflegesachleistung oder Pflegegeld](/ratgeber/pflegesachleistung-oder-pflegegeld/).",
          },
          { type: "cta", text: "Sie möchten wissen, welche Aufteilung zu Ihrer Situation passt? Wir rechnen es bei der kostenlosen Erstberatung mit Ihnen durch." },
        ],
      },
      {
        h2: "Wer hat Anspruch auf ambulante Pflege durch einen Pflegedienst?",
        blocks: [
          {
            type: "p",
            text: "Anspruch auf Pflegesachleistung haben Pflegebedürftige ab Pflegegrad 2, die zu Hause leben. Den Pflegegrad stellt die Pflegekasse nach einer Begutachtung durch den Medizinischen Dienst (MD) fest.",
          },
          {
            type: "p",
            text: "Der Pflegegrad richtet sich nach Punkten: Pflegegrad 2 beginnt bei 27 Punkten, Pflegegrad 3 bei 47,5 Punkten. Den Bescheid erhalten Sie in der Regel innerhalb von 25 Arbeitstagen nach dem Antrag.",
          },
          {
            type: "p",
            text: "Sie haben noch keinen Pflegegrad? Dann lohnt sich der Antrag meist früh. Eine erste Einschätzung gibt der [Pflegegrad-Rechner](/pflegegrad-rechner/). Wie der Antrag in Hamburg funktioniert, lesen Sie unter [Pflegegrad beantragen in Hamburg](/ratgeber/pflegegrad-beantragen-hamburg/). Bei Fragen hilft unsere [Pflegeberatung](/leistungen/pflegeberatung/).",
          },
        ],
      },
      {
        h2: "Kann ich den Pflegedienst wechseln oder kündigen?",
        blocks: [
          {
            type: "p",
            text: "Ja, als pflegebedürftige Person können Sie den Pflegevertrag mit einem ambulanten Dienst jederzeit ohne Frist kündigen (§ 120 Abs. 2 SGB XI). Sie sind also nicht langfristig gebunden.",
          },
          {
            type: "p",
            text: "Vor dem ersten Einsatz erhalten Sie von TwinsCare einen schriftlichen Kostenvoranschlag. Darin stehen alle vereinbarten Leistungen und Ihr möglicher Eigenanteil. So können Sie in Ruhe vergleichen.",
          },
          {
            type: "p",
            text: "Worauf Sie bei der Wahl eines Pflegedienstes achten sollten, fasst die [Checkliste zur Pflegedienst-Suche](/ratgeber/pflegedienst-finden-checkliste/) zusammen.",
          },
        ],
      },
      {
        h2: "Wie oft kommt der Pflegedienst zu mir nach Hause?",
        blocks: [
          {
            type: "p",
            text: "Wie oft der Pflegedienst kommt, richtet sich nach Ihrem Bedarf und Ihrem Budget. Das kann ein Besuch pro Woche zum Duschen sein oder mehrere Einsätze täglich.",
          },
          {
            type: "p",
            text: "Typisch ist zum Beispiel ein Einsatz am Morgen für Waschen und Anziehen. Manche Menschen brauchen zusätzlich Hilfe am Abend beim Zubettgehen. Andere kommen gut allein zurecht und wünschen nur Unterstützung beim wöchentlichen Duschen.",
          },
          {
            type: "p",
            text: "Gemeinsam legen wir fest, welche Leistungen zu welchen Zeiten erbracht werden. Diese Absprache steht im Pflegeplan. Ändert sich Ihr Bedarf, passen wir den Plan an, zum Beispiel nach einem Sturz oder einer Erkrankung.",
          },
          {
            type: "p",
            text: "Pflegende Angehörige bleiben dabei ein wichtiger Teil der Versorgung. Viele Familien teilen sich die Aufgaben: Der Pflegedienst übernimmt die körperlich anstrengenden Tätigkeiten, die Familie den Alltag. Wenn Angehörige selbst eine Pause brauchen, hilft die [Verhinderungspflege](/leistungen/verhinderungspflege/).",
          },
        ],
      },
      {
        h2: "So läuft es bei TwinsCare ab",
        blocks: [
          {
            type: "p",
            text: "Der Weg zur ambulanten Pflege bei TwinsCare hat vier Schritte, vom ersten Kontakt bis zum ersten Einsatz.",
          },
          {
            type: "ol",
            items: [
              "**Anruf oder Formular:** Sie melden sich telefonisch oder über das [Anfrageformular](/pflege-anfragen/) und schildern kurz Ihre Situation.",
              "**Kostenlose Erstberatung zu Hause:** Wir besuchen Sie, besprechen den Hilfebedarf und klären offene Fragen zu Pflegegrad und Leistungen.",
              "**Kostenvoranschlag und Pflegeplan:** Sie erhalten einen schriftlichen Kostenvoranschlag und einen Pflegeplan mit Zeiten und Leistungen.",
              "**Start der Pflege:** Ein kleines, festes Team übernimmt die Einsätze. Ihre feste Ansprechpartnerin bleibt für Rückfragen erreichbar.",
            ],
          },
          {
            type: "p",
            text: "Wir helfen auch bei Anträgen an die Pflegekasse und rechnen direkt mit ihr ab. Ändert sich später Ihr Pflegegrad, passen wir Pflegeplan und Kostenvoranschlag entsprechend an.",
          },
        ],
      },
      {
        h2: "In welchen Orten bietet TwinsCare ambulante Pflege an?",
        blocks: [
          {
            type: "p",
            text: "TwinsCare bietet ambulante Pflege in neun Orten an: Bergedorf, Lohbrügge, Billstedt, Horn und Jenfeld in Hamburg sowie Oststeinbek, Glinde, Reinbek und Wentorf bei Hamburg.",
          },
          { type: "ul", items: orteListe("Ambulante Pflege") },
          {
            type: "p",
            text: "Unser Büro liegt an der Bergedorfer Straße 85 in 21033 Hamburg-Bergedorf. Auf den Ortsseiten finden Sie weitere Informationen zu Ihrem Stadtteil oder Ihrer Gemeinde.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Was kostet ambulante Pflege, wenn ich Pflegegrad 2 habe?",
        a: "Bei Pflegegrad 2 übernimmt die Pflegekasse bis zu 796 € im Monat für den Pflegedienst. Nur Kosten darüber zahlen Sie selbst. Den genauen Betrag sehen Sie vorab im schriftlichen Kostenvoranschlag.",
      },
      {
        q: "Muss ich Pflegegeld und Pflegesachleistung getrennt beantragen?",
        a: "Nein. Sie beantragen Leistungen der Pflegeversicherung bei Ihrer Pflegekasse und geben an, ob Sie Pflegegeld, Sachleistung oder eine Kombination wünschen. Wir helfen Ihnen gern beim Antrag.",
      },
      {
        q: "Zählt Duschen zur Grundpflege?",
        a: "Ja, Duschen und Baden gehören zur Körperpflege und damit zur Grundpflege nach SGB XI. Was ein Einsatz kostet, erklärt der Ratgeber [Kosten für Duschen durch den Pflegedienst](/ratgeber/kosten-duschen-pflegedienst/).",
      },
      {
        q: "Kann ich ambulante Pflege und Behandlungspflege kombinieren?",
        a: "Ja. Grundpflege zahlt die Pflegekasse, Behandlungspflege die Krankenkasse auf ärztliche Verordnung. Beide Leistungen können beim selben Einsatz erbracht werden.",
      },
      {
        q: "Wie schnell kann die Pflege beginnen?",
        a: "Das hängt von Ihrem Bedarf und unseren freien Kapazitäten ab. Nach der kostenlosen Erstberatung nennen wir Ihnen einen konkreten Starttermin.",
      },
      {
        q: "Was passiert, wenn ich mit dem Pflegedienst nicht zufrieden bin?",
        a: "Sprechen Sie zuerst mit Ihrer festen Ansprechpartnerin. Sie können den Pflegevertrag außerdem jederzeit ohne Frist kündigen (§ 120 Abs. 2 SGB XI).",
      },
    ],
    ratgeber: ["was-kostet-ein-pflegedienst", "pflegesachleistung-oder-pflegegeld", "pflegegrade-leistungen"],
    verwandt: ["behandlungspflege", "entlastungsleistungen"],
    quellen: [
      {
        title: "Bundesministerium für Gesundheit: Ambulante Pflegesachleistungen",
        url: "https://www.bundesgesundheitsministerium.de/pflegedienst-und-pflegesachleistungen",
      },
      {
        title: "§ 38 SGB XI – Kombination von Geldleistung und Sachleistung",
        url: "https://www.gesetze-im-internet.de/sgb_11/__38.html",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 2. Behandlungspflege
  // ---------------------------------------------------------------------------
  {
    slug: "behandlungspflege",
    navTitle: "Behandlungspflege",
    h1: "Behandlungspflege zu Hause in Hamburg-Bergedorf",
    metaTitle: "Behandlungspflege in Bergedorf | TwinsCare",
    metaDescription:
      "Behandlungspflege zu Hause in Bergedorf und Hamburg-Ost: Medikamente, Insulin, Wundversorgung, Kompressionsstrümpfe. Die Krankenkasse zahlt auf Verordnung.",
    lead:
      "Ärztlich verordnete Pflege wie Insulingabe, Wundversorgung oder das Anziehen von Kompressionsstrümpfen übernimmt TwinsCare bei Ihnen zu Hause. Die Kosten trägt die Krankenkasse, ein Pflegegrad ist nicht nötig.",
    kurz: [
      "Behandlungspflege ist medizinische Pflege, die eine Ärztin oder ein Arzt verordnet.",
      "Die Krankenkasse zahlt nach § 37 SGB V, wenn eine Verordnung auf Muster 12 vorliegt.",
      "Für Behandlungspflege brauchen Sie keinen Pflegegrad.",
      "Erwachsene zahlen 10 % der Kosten für höchstens 28 Tage im Jahr plus 10 € je Verordnung.",
    ],
    kennzahlen: [
      { wert: "kein Pflegegrad", label: "nötig für Behandlungspflege" },
      { wert: "Muster 12", label: "ärztliche Verordnung häuslicher Krankenpflege" },
      { wert: "max. 28 Tage", label: "Zuzahlung pro Kalenderjahr" },
    ],
    foto: {
      id: "photo-1631815590058-860e4f83c1e8",
      alt: "Pflegekraft misst den Blutdruck einer Frau",
    },
    sections: [
      {
        h2: "Was ist Behandlungspflege?",
        blocks: [
          {
            type: "p",
            text: "Behandlungspflege ist medizinische Pflege, die eine ärztliche Behandlung zu Hause absichert, etwa Medikamentengabe, Injektionen oder Wundversorgung. Sie ist Teil der **häuslichen Krankenpflege** nach § 37 SGB V und wird von der Krankenkasse bezahlt.",
          },
          {
            type: "p",
            text: "Der Unterschied zur Grundpflege: Grundpflege hilft bei alltäglichen Dingen wie Waschen oder Anziehen. Behandlungspflege setzt eine ärztliche Anordnung voraus und wird von examinierten Pflegefachkräften durchgeführt.",
          },
          {
            type: "p",
            text: "Viele Menschen brauchen beides. Dann kombinieren wir Behandlungspflege mit [ambulanter Pflege](/leistungen/ambulante-pflege/) beim selben Besuch.",
          },
          {
            type: "p",
            text: "Behandlungspflege kann kurzfristig nötig sein, etwa nach einer Operation. Sie kann aber auch dauerhaft laufen, zum Beispiel bei Diabetes oder chronischen Wunden. In beiden Fällen gilt: Ohne ärztliche Verordnung zahlt die Krankenkasse nicht.",
          },
          {
            type: "p",
            text: "Ziel ist, dass die Behandlung zu Hause genauso sicher gelingt wie in der Praxis. Häusliche Krankenpflege kann außerdem helfen, einen Krankenhausaufenthalt zu vermeiden oder zu verkürzen.",
          },
        ],
      },
      {
        h2: "Welche Leistungen gehören zur Behandlungspflege?",
        blocks: [
          {
            type: "p",
            text: "Zur Behandlungspflege gehören alle Maßnahmen, die in der Häusliche-Krankenpflege-Richtlinie des Gemeinsamen Bundesausschusses (G-BA) aufgeführt sind. Häufige Beispiele sind Medikamentengabe, Insulin spritzen, Blutzucker messen und Wunden versorgen.",
          },
          {
            type: "ul",
            items: [
              "**Medikamente:** Richten von Wochendosetten und Gabe von Tabletten, Tropfen oder Salben",
              "**Injektionen:** zum Beispiel Insulin oder Thrombosespritzen unter die Haut",
              "**Blutzuckermessung:** regelmäßige Kontrolle bei Diabetes, oft zusammen mit der Insulingabe",
              "**Wundversorgung und Verbandwechsel:** bei akuten und chronischen Wunden",
              "**Kompressionsstrümpfe:** An- und Ausziehen sowie Anlegen von Kompressionsverbänden",
              "**Blutdruckkontrolle:** wenn die Ärztin oder der Arzt sie anordnet",
            ],
          },
          {
            type: "p",
            text: "Welche Leistung in welcher Häufigkeit verordnet werden kann, regelt die Richtlinie. Was genau bei Ihnen nötig ist, entscheidet Ihre Ärztin oder Ihr Arzt.",
          },
          {
            type: "p",
            text: "Häusliche Krankenpflege ist an vielen Orten möglich: in Ihrer Wohnung, bei Angehörigen oder im betreuten Wohnen. Wichtig ist, dass niemand im Haushalt die Aufgabe übernehmen kann. Das Gesetz sieht diese Bedingung ausdrücklich vor.",
          },
          {
            type: "p",
            text: "Gerade bei Diabetes oder Wunden ist Regelmäßigkeit entscheidend. Insulin muss oft zu festen Zeiten gegeben werden. Verbände sollen nach Plan gewechselt werden. Wir stimmen die Einsatzzeiten deshalb eng mit der Verordnung ab.",
          },
        ],
      },
      {
        h2: "Wie bekomme ich eine Verordnung für Behandlungspflege?",
        blocks: [
          {
            type: "p",
            text: "Die Verordnung stellt Ihre Hausärztin, Ihr Facharzt oder bei der Entlassung das Krankenhaus auf dem Formular **Muster 12** aus. Darauf stehen die Leistungen, ihre Häufigkeit und die Dauer.",
          },
          {
            type: "p",
            text: "Nach Angaben des G-BA umfasst eine Erstverordnung meist bis zu 14 Tage. Krankenhausärzte können im Rahmen des Entlassmanagements für bis zu sieben Tage verordnen. Danach ist eine Folgeverordnung nötig.",
          },
          {
            type: "p",
            text: "Die Verordnung muss die Krankenkasse genehmigen. Wird sie spätestens am vierten Werktag vorgelegt, übernimmt die Kasse die Kosten bis zur Entscheidung. TwinsCare reicht die Verordnung für Sie ein.",
          },
          { type: "cta", text: "Sie haben eine Verordnung erhalten oder erwarten eine? Melden Sie sich, wir kümmern uns um die Abstimmung mit der Krankenkasse." },
        ],
      },
      {
        h2: "Muss ich für Behandlungspflege etwas zuzahlen?",
        blocks: [
          {
            type: "p",
            text: "Ja, Erwachsene zahlen 10 % der Kosten für höchstens 28 Kalendertage im Jahr plus 10 € je Verordnung. Kinder und Jugendliche unter 18 Jahren zahlen nichts zu.",
          },
          {
            type: "table",
            head: ["Posten", "Höhe", "Grundlage"],
            rows: [
              ["Anteil an den Kosten", "10 %", "§ 37 Abs. 5 i. V. m. § 61 SGB V"],
              ["Begrenzung", "erste 28 Kalendertage pro Jahr", "§ 37 Abs. 5 SGB V"],
              ["Pauschale je Verordnung", "10 €", "§ 61 SGB V"],
              ["Pflegegrad", "nicht erforderlich", "§ 37 SGB V"],
            ],
            caption: "Zuzahlung zur häuslichen Krankenpflege für gesetzlich Versicherte ab 18 Jahren",
          },
          {
            type: "p",
            text: "Wer seine persönliche Belastungsgrenze für Zuzahlungen erreicht, kann sich bei der Krankenkasse befreien lassen. Fragen Sie dort nach, sobald sich Quittungen sammeln.",
          },
          {
            type: "p",
            text: "Die Zuzahlung erhalten Sie von uns als eigene Rechnung. Den übrigen Betrag rechnen wir direkt mit der Krankenkasse ab. Bewahren Sie die Belege auf, sie zählen für die Belastungsgrenze mit.",
          },
        ],
      },
      {
        h2: "Brauche ich einen Pflegegrad für Behandlungspflege?",
        blocks: [
          {
            type: "p",
            text: "Nein, für Behandlungspflege brauchen Sie keinen Pflegegrad. Entscheidend ist allein die ärztliche Verordnung.",
          },
          {
            type: "p",
            text: "Das ist zum Beispiel nach einer Operation wichtig. Wer wegen einer Wunde oder neuer Medikamente kurzfristig Hilfe braucht, bekommt sie über die Krankenkasse. Die Pflegeversicherung spielt dabei keine Rolle. Auch jüngere Menschen ohne dauerhaften Hilfebedarf können so versorgt werden.",
          },
          {
            type: "p",
            text: "Haben Sie zusätzlich einen Pflegegrad, laufen beide Leistungen nebeneinander. Die Behandlungspflege mindert Ihre Pflegesachleistung nicht. Mehr dazu im Ratgeber [Behandlungspflege und Krankenkasse](/ratgeber/behandlungspflege-krankenkasse/).",
          },
        ],
      },
      {
        h2: "Was ist der Unterschied zwischen Behandlungspflege und Grundpflege?",
        blocks: [
          {
            type: "p",
            text: "Behandlungspflege ist medizinisch und wird von der Krankenkasse auf ärztliche Verordnung bezahlt. Grundpflege ist Hilfe im Alltag und wird ab Pflegegrad 2 von der Pflegekasse bezahlt.",
          },
          {
            type: "table",
            head: ["", "Behandlungspflege", "Grundpflege"],
            rows: [
              ["Gesetz", "§ 37 SGB V", "§ 36 SGB XI"],
              ["Kostenträger", "Krankenkasse", "Pflegekasse"],
              ["Voraussetzung", "ärztliche Verordnung (Muster 12)", "Pflegegrad 2 bis 5"],
              ["Beispiele", "Insulin, Wundversorgung, Medikamente", "Waschen, Anziehen, Hilfe beim Essen"],
              ["Eigenanteil", "gesetzliche Zuzahlung", "Kosten über dem Höchstbetrag"],
            ],
            caption: "Behandlungspflege und Grundpflege im Vergleich",
          },
          {
            type: "p",
            text: "Im Alltag gehen beide oft ineinander über. Ein Beispiel: Am Morgen helfen wir beim Waschen und Anziehen. Im selben Besuch messen wir den Blutzucker und geben das Insulin. Abgerechnet wird jede Leistung bei der zuständigen Kasse.",
          },
          {
            type: "p",
            text: "Für Sie bedeutet das: Ein Pflegedienst, ein Team, ein Besuch. Die Aufteilung zwischen den Kassen übernehmen wir. Sie erhalten vorab einen schriftlichen Kostenvoranschlag, in dem beide Bereiche getrennt aufgeführt sind.",
          },
        ],
      },
      {
        h2: "So läuft es bei TwinsCare ab",
        blocks: [
          {
            type: "p",
            text: "Von der Anfrage bis zum ersten Einsatz in der Behandlungspflege gibt es vier Schritte.",
          },
          {
            type: "ol",
            items: [
              "**Anruf oder Formular:** Sie melden sich telefonisch oder über das [Anfrageformular](/pflege-anfragen/). Haben Sie schon eine Verordnung, halten Sie sie bereit.",
              "**Kostenlose Erstberatung zu Hause:** Wir besprechen die verordneten Leistungen und passende Einsatzzeiten, zum Beispiel vor dem Frühstück für die Insulingabe.",
              "**Kostenvoranschlag und Pflegeplan:** Sie erhalten einen schriftlichen Überblick über Leistungen, Zeiten und Ihre gesetzliche Zuzahlung.",
              "**Start:** Wir reichen die Verordnung bei der Krankenkasse ein und beginnen mit den Einsätzen.",
            ],
          },
          {
            type: "p",
            text: "Bei Folgeverordnungen erinnern wir rechtzeitig daran, sie bei der Arztpraxis anzufragen. Ändert die Ärztin oder der Arzt die Behandlung, passen wir die Einsätze an. Bei Auffälligkeiten, etwa einer schlecht heilenden Wunde, informieren wir Sie und auf Wunsch die Praxis.",
          },
        ],
      },
      {
        h2: "In welchen Orten bietet TwinsCare Behandlungspflege an?",
        blocks: [
          {
            type: "p",
            text: "TwinsCare bietet Behandlungspflege in Bergedorf, Lohbrügge, Billstedt, Horn und Jenfeld sowie in Oststeinbek, Glinde, Reinbek und Wentorf bei Hamburg an.",
          },
          { type: "ul", items: orteListe("Behandlungspflege") },
        ],
      },
    ],
    faqs: [
      {
        q: "Wer bezahlt Behandlungspflege?",
        a: "Die gesetzliche Krankenkasse nach § 37 SGB V, wenn eine ärztliche Verordnung vorliegt und die Kasse sie genehmigt. Erwachsene leisten die gesetzliche Zuzahlung.",
      },
      {
        q: "Darf der Pflegedienst Insulin spritzen?",
        a: "Ja, wenn die Insulingabe ärztlich verordnet ist. Die Injektion übernimmt dann eine Pflegefachkraft des Pflegedienstes.",
      },
      {
        q: "Wird das An- und Ausziehen von Kompressionsstrümpfen bezahlt?",
        a: "Ja, das An- und Ausziehen von Kompressionsstrümpfen kann als Behandlungspflege verordnet werden. Die Voraussetzungen regelt die Häusliche-Krankenpflege-Richtlinie.",
      },
      {
        q: "Was passiert, wenn die Verordnung abläuft?",
        a: "Dann ist eine Folgeverordnung von Ihrer Ärztin oder Ihrem Arzt nötig. Wir sprechen das rechtzeitig mit Ihnen ab, damit die Versorgung nicht unterbrochen wird.",
      },
      {
        q: "Kann ich Behandlungspflege auch ohne Pflegegrad bekommen?",
        a: "Ja. Für Behandlungspflege ist kein Pflegegrad nötig. Es reicht die ärztliche Verordnung auf Muster 12.",
      },
      {
        q: "Wie hoch ist die Zuzahlung bei häuslicher Krankenpflege?",
        a: "10 % der Kosten für höchstens 28 Tage im Kalenderjahr plus 10 € je Verordnung. Unter 18-Jährige sind befreit, eine Befreiung bei Erreichen der Belastungsgrenze ist möglich.",
      },
    ],
    ratgeber: ["behandlungspflege-krankenkasse", "krankenhaus-entlassung-checkliste"],
    verwandt: ["ambulante-pflege", "pflege-nach-krankenhausaufenthalt"],
    quellen: [
      {
        title: "§ 37 SGB V – Häusliche Krankenpflege",
        url: "https://www.gesetze-im-internet.de/sgb_5/__37.html",
      },
      {
        title: "Gemeinsamer Bundesausschuss: Häusliche Krankenpflege",
        url: "https://www.g-ba.de/themen/veranlasste-leistungen/haeusliche-krankenpflege/",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 3. Verhinderungspflege
  // ---------------------------------------------------------------------------
  {
    slug: "verhinderungspflege",
    navTitle: "Verhinderungspflege",
    h1: "Verhinderungspflege in Hamburg-Bergedorf",
    metaTitle: "Verhinderungspflege in Bergedorf | TwinsCare",
    metaDescription:
      "Verhinderungspflege in Bergedorf und Hamburg-Ost: bis 3.539 € pro Jahr ab Pflegegrad 2, stunden- oder tageweise. TwinsCare vertritt pflegende Angehörige.",
    lead:
      "Wenn pflegende Angehörige Urlaub machen, krank sind oder einfach Zeit für sich brauchen, übernimmt TwinsCare die Pflege zu Hause. Die Pflegekasse zahlt dafür bis zu 3.539 € im Jahr.",
    kurz: [
      "Verhinderungspflege ist eine Vertretung, wenn die private Pflegeperson ausfällt (§ 39 SGB XI).",
      "Ab Pflegegrad 2 stehen bis zu 3.539 € pro Kalenderjahr zur Verfügung, gemeinsam mit der Kurzzeitpflege (§ 42a SGB XI).",
      "Seit 01.07.2025 ist keine Vorpflegezeit mehr nötig.",
      "Bei tageweiser Vertretung wird bis zu acht Wochen lang die Hälfte des Pflegegelds weitergezahlt.",
    ],
    kennzahlen: [
      { wert: "bis 3.539 €", label: "gemeinsamer Jahresbetrag pro Kalenderjahr" },
      { wert: "bis 8 Wochen", label: "Verhinderungspflege pro Jahr" },
      { wert: "ab Pflegegrad 2", label: "Anspruch auf Verhinderungspflege" },
    ],
    foto: {
      id: "photo-1765896387377-e293914d1e69",
      alt: "Zwei Frauen lachen gemeinsam in einer Wohnung",
    },
    sections: [
      {
        h2: "Was ist Verhinderungspflege?",
        blocks: [
          {
            type: "p",
            text: "Verhinderungspflege ist eine Ersatzpflege zu Hause, wenn die private Pflegeperson wegen Urlaub, Krankheit oder anderer Gründe vorübergehend ausfällt. Die Pflegekasse bezahlt sie nach § 39 SGB XI ab Pflegegrad 2.",
          },
          {
            type: "p",
            text: "Private Pflegepersonen sind meist Angehörige, Nachbarn oder Freunde. Sie pflegen oft ohne Pause über Monate und Jahre. Verhinderungspflege gibt ihnen eine Auszeit, ohne dass die pflegebedürftige Person die gewohnte Umgebung verlassen muss.",
          },
          {
            type: "p",
            text: "Einen besonderen Grund müssen Sie nicht nachweisen. Ein Arzttermin, ein Familienfest oder Erholung reichen aus.",
          },
          {
            type: "p",
            text: "Die Vertretung kann ein ambulanter Pflegedienst übernehmen, aber auch Einzelpflegekräfte, Ehrenamtliche oder Angehörige. Mit einem Pflegedienst haben Sie den Vorteil, dass Fachkräfte kommen und die Abrechnung direkt mit der Kasse läuft.",
          },
        ],
      },
      {
        h2: "Wie viel Geld gibt es 2026 für Verhinderungspflege?",
        blocks: [
          {
            type: "p",
            text: "Für Verhinderungspflege stehen 2026 bis zu 3.539 € pro Kalenderjahr zur Verfügung. Diesen **gemeinsamen Jahresbetrag** teilen sich Verhinderungs- und Kurzzeitpflege seit dem 01.07.2025 (§ 42a SGB XI).",
          },
          {
            type: "table",
            head: ["Regel", "Wert"],
            rows: [
              ["Gemeinsamer Jahresbetrag (Verhinderungs- und Kurzzeitpflege)", "bis 3.539 € pro Kalenderjahr"],
              ["Anspruch", "ab Pflegegrad 2"],
              ["Höchstdauer Verhinderungspflege", "bis 8 Wochen pro Jahr"],
              ["Vorpflegezeit", "seit 01.07.2025 nicht mehr nötig"],
              ["Pflegegeld während tageweiser Vertretung", "50 % weiter"],
            ],
            caption: "Verhinderungspflege nach §§ 39 und 42a SGB XI, Stand 2026",
          },
          {
            type: "p",
            text: "Sie entscheiden selbst, wie Sie den Betrag aufteilen. Wer keine Kurzzeitpflege im Heim braucht, kann den ganzen Betrag für die Vertretung zu Hause nutzen.",
          },
          {
            type: "p",
            text: "Der Jahresbetrag gilt immer für ein Kalenderjahr. Was bis zum 31. Dezember nicht genutzt wird, verfällt. Prüfen Sie deshalb im Herbst, ob noch ein Restbetrag offen ist. Viele Familien nutzen ihn dann für Vertretung rund um die Feiertage.",
          },
          {
            type: "p",
            text: "Übernehmen nahe Angehörige die Vertretung nicht erwerbsmäßig, gilt eine niedrigere Grenze. Sie liegt laut Bundesgesundheitsministerium grundsätzlich beim Zweifachen des monatlichen Pflegegelds.",
          },
        ],
      },
      {
        h2: "Kann man Verhinderungspflege stundenweise nutzen?",
        blocks: [
          {
            type: "p",
            text: "Ja, Verhinderungspflege lässt sich stundenweise oder tageweise nutzen. Bei weniger als acht Stunden Vertretung am Tag zahlen die Pflegekassen in der Praxis das volle Pflegegeld weiter.",
          },
          {
            type: "ul",
            items: [
              "**Stundenweise:** zum Beispiel jeden Mittwochnachmittag, damit Sie Termine wahrnehmen oder Sport machen können. Diese Stunden werden nach gängiger Kassenpraxis nicht auf die acht Wochen angerechnet.",
              "**Tageweise:** zum Beispiel zwei Wochen während Ihres Urlaubs. Hier wird die Hälfte des bisherigen Pflegegelds weitergezahlt, für bis zu acht Wochen im Jahr.",
            ],
          },
          {
            type: "p",
            text: "Die stundenweise Nutzung ist für viele Familien besonders praktisch. Sie schafft feste Freiräume im Alltag und verteilt den Jahresbetrag gleichmäßig.",
          },
          {
            type: "p",
            text: "Behalten Sie dabei den Überblick über das Budget. Wer jede Woche einige Stunden nutzt, kann den Jahresbetrag vor dem Sommerurlaub schon teilweise verbraucht haben. Wir zeigen Ihnen im Kostenvoranschlag, wie viel übrig bleibt.",
          },
          { type: "cta", text: "Planen Sie Urlaub oder brauchen Sie regelmäßig ein paar Stunden für sich? Wir besprechen mit Ihnen, wie die Vertretung aussehen kann." },
        ],
      },
      {
        h2: "Wie beantrage ich Verhinderungspflege?",
        blocks: [
          {
            type: "p",
            text: "Sie beantragen Verhinderungspflege formlos oder mit dem Formular Ihrer Pflegekasse. Viele Kassen erstatten die Kosten auch nachträglich gegen Rechnung.",
          },
          {
            type: "ol",
            items: [
              "Antragsformular bei der Pflegekasse anfordern oder online herunterladen",
              "Zeitraum der Vertretung und die vertretende Person oder den Pflegedienst angeben",
              "Rechnungen bzw. Nachweise der Ersatzpflege sammeln",
              "Abrechnung bei der Pflegekasse einreichen oder den Pflegedienst direkt abrechnen lassen",
            ],
          },
          {
            type: "p",
            text: "TwinsCare hilft beim Ausfüllen und rechnet die Verhinderungspflege direkt mit der Pflegekasse ab. Schritt für Schritt erklärt es der Ratgeber [Verhinderungspflege beantragen](/ratgeber/verhinderungspflege-antrag/).",
          },
        ],
      },
      {
        h2: "Was übernimmt TwinsCare während der Verhinderungspflege?",
        blocks: [
          {
            type: "p",
            text: "TwinsCare übernimmt während der Verhinderungspflege die Aufgaben, die sonst die private Pflegeperson erledigt. Dazu gehören Körperpflege, Hilfe beim Essen, Begleitung im Alltag und Gesellschaft.",
          },
          {
            type: "p",
            text: "Vorab lernen wir die Gewohnheiten der pflegebedürftigen Person kennen. Welche Uhrzeiten sind wichtig? Was isst sie gern? Was beruhigt sie? So bleibt der Alltag möglichst vertraut.",
          },
          {
            type: "p",
            text: "Hilfreich ist eine kurze schriftliche Übersicht von Ihnen. Notieren Sie Medikamente, Arztkontakte, Lieblingsgewohnheiten und wichtige Telefonnummern. Diese Übersicht bleibt in der Wohnung und hilft jeder Pflegekraft beim Einstieg.",
          },
          {
            type: "p",
            text: "Die kostenlose Erstberatung bei Ihnen zu Hause dient auch dem Kennenlernen. Durch unsere kleinen, festen Teams ist die Vertretung kein ständig wechselndes Gesicht. Das gibt beiden Seiten Sicherheit, wenn Sie in den Urlaub fahren.",
          },
          {
            type: "p",
            text: "Ist zusätzlich medizinische Pflege nötig, kann sie über die [Behandlungspflege](/leistungen/behandlungspflege/) laufen. Für kleinere Entlastungen im Alltag eignen sich auch die [Entlastungsleistungen](/leistungen/entlastungsleistungen/) mit 131 € im Monat.",
          },
        ],
      },
      {
        h2: "Was ist der Unterschied zwischen Verhinderungspflege und Kurzzeitpflege?",
        blocks: [
          {
            type: "p",
            text: "Verhinderungspflege findet in der Regel zu Hause statt, Kurzzeitpflege in einer stationären Einrichtung. Beide werden seit dem 01.07.2025 aus demselben Jahresbetrag von bis zu 3.539 € bezahlt.",
          },
          {
            type: "table",
            head: ["", "Verhinderungspflege", "Kurzzeitpflege"],
            rows: [
              ["Gesetz", "§ 39 SGB XI", "§ 42 SGB XI"],
              ["Ort", "meist zu Hause", "stationäre Einrichtung"],
              ["Anlass", "Ausfall der privaten Pflegeperson", "Übergang, Krise oder fehlende Versorgung zu Hause"],
              ["Höchstdauer", "bis 8 Wochen pro Jahr", "bis 8 Wochen pro Jahr"],
              ["Budget", "gemeinsamer Jahresbetrag bis 3.539 €", "gemeinsamer Jahresbetrag bis 3.539 €"],
            ],
            caption: "Verhinderungspflege und Kurzzeitpflege im Vergleich, Stand 2026",
          },
          {
            type: "p",
            text: "Für viele Familien ist die Vertretung zu Hause angenehmer. Die pflegebedürftige Person bleibt in ihrer vertrauten Umgebung. Gerade bei Demenz kann ein Ortswechsel sonst Unruhe auslösen. Gewohnte Abläufe, das eigene Bett und bekannte Geräusche geben Halt.",
          },
          {
            type: "p",
            text: "Kurzzeitpflege ist dagegen sinnvoll, wenn rund um die Uhr Betreuung nötig ist. Das kann etwa nach einem Krankenhausaufenthalt der Fall sein. Mehr dazu unter [Pflege nach dem Krankenhaus](/leistungen/pflege-nach-krankenhausaufenthalt/).",
          },
        ],
      },
      {
        h2: "So läuft es bei TwinsCare ab",
        blocks: [
          {
            type: "p",
            text: "Die Vertretung durch TwinsCare organisieren wir in vier Schritten.",
          },
          {
            type: "ol",
            items: [
              "**Anruf oder Formular:** Sie nennen uns den gewünschten Zeitraum über Telefon oder das [Anfrageformular](/pflege-anfragen/).",
              "**Kostenlose Erstberatung zu Hause:** Wir lernen die pflegebedürftige Person kennen und besprechen Abläufe und Wünsche.",
              "**Kostenvoranschlag und Pflegeplan:** Sie erhalten einen schriftlichen Kostenvoranschlag und sehen, wie viel vom Jahresbetrag verbraucht wird.",
              "**Start:** Ein festes, kleines Team übernimmt die Vertretung. Die Abrechnung erledigen wir direkt mit der Pflegekasse.",
            ],
          },
          {
            type: "p",
            text: "Melden Sie sich für Urlaubsvertretungen möglichst früh. Besonders in den Ferienzeiten ist die Nachfrage hoch. Wir helfen außerdem beim Antrag an die Pflegekasse.",
          },
        ],
      },
      {
        h2: "In welchen Orten bietet TwinsCare Verhinderungspflege an?",
        blocks: [
          {
            type: "p",
            text: "TwinsCare bietet Verhinderungspflege in neun Orten an: in den Hamburger Stadtteilen Bergedorf, Lohbrügge, Billstedt, Horn und Jenfeld sowie in Oststeinbek, Glinde, Reinbek und Wentorf bei Hamburg.",
          },
          { type: "ul", items: orteListe("Verhinderungspflege") },
        ],
      },
    ],
    faqs: [
      {
        q: "Ab welchem Pflegegrad gibt es Verhinderungspflege?",
        a: "Verhinderungspflege gibt es ab Pflegegrad 2. Seit dem 01.07.2025 muss die private Pflege vorher nicht mehr eine bestimmte Zeit gedauert haben.",
      },
      {
        q: "Wird das Pflegegeld während der Verhinderungspflege gekürzt?",
        a: "Bei tageweiser Vertretung wird die Hälfte des Pflegegelds weitergezahlt, für bis zu acht Wochen im Jahr. Bei stundenweiser Vertretung unter acht Stunden am Tag zahlen die Kassen in der Praxis das volle Pflegegeld.",
      },
      {
        q: "Kann ich Verhinderungspflege und Kurzzeitpflege kombinieren?",
        a: "Ja. Beide Leistungen teilen sich den gemeinsamen Jahresbetrag von bis zu 3.539 € pro Kalenderjahr. Wie Sie ihn aufteilen, entscheiden Sie selbst.",
      },
      {
        q: "Verfällt der Betrag für Verhinderungspflege am Jahresende?",
        a: "Ja, der gemeinsame Jahresbetrag gilt pro Kalenderjahr. Nicht genutzte Beträge werden nicht ins nächste Jahr übertragen.",
      },
      {
        q: "Muss ich Verhinderungspflege vorher beantragen?",
        a: "Ein vorheriger Antrag ist sinnvoll, viele Pflegekassen erstatten aber auch nachträglich gegen Nachweis. Fragen Sie bei Ihrer Kasse nach dem gewünschten Verfahren.",
      },
      {
        q: "Darf ein Pflegedienst Verhinderungspflege leisten?",
        a: "Ja. Ambulante Pflegedienste wie TwinsCare dürfen Verhinderungspflege übernehmen und direkt mit der Pflegekasse abrechnen.",
      },
    ],
    ratgeber: ["verhinderungspflege-antrag", "pflegegrade-leistungen", "entlastungsbetrag-131-euro"],
    verwandt: ["entlastungsleistungen", "ambulante-pflege"],
    quellen: [
      {
        title: "Bundesministerium für Gesundheit: Verhinderungspflege und häusliche Pflege",
        url: "https://www.bundesgesundheitsministerium.de/verhinderungspflege.html",
      },
      {
        title: "§ 42a SGB XI – Gemeinsamer Jahresbetrag",
        url: "https://www.gesetze-im-internet.de/sgb_11/__42a.html",
      },
      {
        title: "§ 38 SGB XI – Kombination von Geldleistung und Sachleistung (hälftiges Pflegegeld)",
        url: "https://www.gesetze-im-internet.de/sgb_11/__38.html",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 4. Entlastungsleistungen
  // ---------------------------------------------------------------------------
  {
    slug: "entlastungsleistungen",
    navTitle: "Entlastungsleistungen",
    h1: "Entlastungsleistungen in Hamburg-Bergedorf: 131 € im Monat nutzen",
    metaTitle: "Entlastungsbetrag 131 € in Bergedorf | TwinsCare",
    metaDescription:
      "Entlastungsbetrag 131 € im Monat nach § 45b SGB XI: Wofür Sie ihn nutzen, wie lange Sie ansparen können und wie TwinsCare in Bergedorf direkt abrechnet.",
    lead:
      "Jeder Mensch mit Pflegegrad, der zu Hause lebt, hat Anspruch auf 131 € Entlastungsbetrag im Monat. TwinsCare setzt ihn für Hilfe im Alltag ein und rechnet direkt mit der Pflegekasse ab.",
    kurz: [
      "Der Entlastungsbetrag beträgt 131 € im Monat, also bis zu 1.572 € im Jahr (§ 45b SGB XI).",
      "Er steht allen Pflegebedürftigen ab Pflegegrad 1 in häuslicher Pflege zu.",
      "Nicht genutzte Beträge können bis zum 30. Juni des Folgejahres verwendet werden.",
      "Ab Pflegegrad 2 lassen sich zusätzlich bis zu 40 % der Pflegesachleistung umwandeln (§ 45a Abs. 4 SGB XI).",
    ],
    kennzahlen: [
      { wert: "131 €", label: "Entlastungsbetrag pro Monat" },
      { wert: "ab Pflegegrad 1", label: "Anspruch in häuslicher Pflege" },
      { wert: "bis 30.06.", label: "Restbetrag aus dem Vorjahr nutzbar" },
    ],
    foto: {
      id: "photo-1762955913084-96ea3f986468",
      alt: "Betreuerin strickt gemeinsam mit älteren Frauen",
    },
    sections: [
      {
        h2: "Was ist der Entlastungsbetrag?",
        blocks: [
          {
            type: "p",
            text: "Der Entlastungsbetrag ist eine zweckgebundene Leistung der Pflegekasse von 131 € im Monat für alle Pflegebedürftigen in häuslicher Pflege, auch bei Pflegegrad 1. Er ist in § 45b SGB XI geregelt.",
          },
          {
            type: "p",
            text: "Zweckgebunden heißt: Das Geld wird nicht frei ausgezahlt. Es wird für anerkannte Hilfen eingesetzt, die pflegende Angehörige entlasten und die Selbstständigkeit im Alltag fördern. Die Kasse erstattet die Kosten gegen Nachweis.",
          },
          {
            type: "p",
            text: "Viele Familien lassen den Betrag ungenutzt. Dabei summiert er sich auf bis zu 1.572 € im Jahr. Eine ausführliche Erklärung finden Sie im Ratgeber [Entlastungsbetrag 131 Euro](/ratgeber/entlastungsbetrag-131-euro/).",
          },
        ],
      },
      {
        h2: "Wofür kann ich den Entlastungsbetrag von 131 € nutzen?",
        blocks: [
          {
            type: "p",
            text: "Sie können den Entlastungsbetrag für Leistungen zugelassener Pflegedienste, für anerkannte Angebote zur Unterstützung im Alltag sowie für Tages-, Nacht- und Kurzzeitpflege nutzen. Bei einem Pflegedienst wie TwinsCare sind das vor allem Betreuung und Hilfe im Haushalt.",
          },
          {
            type: "ul",
            items: [
              "**Betreuung:** Gespräche, Spaziergänge, gemeinsames Spielen oder Vorlesen",
              "**Hilfe im Haushalt:** Aufräumen, Wäsche, kleine Einkäufe",
              "**Begleitung:** zum Beispiel zu Terminen in der Nachbarschaft",
              "**Körperpflege bei Pflegegrad 1:** Hilfe beim Duschen oder Waschen",
            ],
          },
          {
            type: "hinweis",
            title: "Wichtig bei Pflegegrad 2 bis 5",
            text: "Körperbezogene Pflege wie Duschen oder Baden dürfen Pflegedienste über den Entlastungsbetrag nur bei Pflegegrad 1 abrechnen. Ab Pflegegrad 2 läuft sie über die Pflegesachleistung der [ambulanten Pflege](/leistungen/ambulante-pflege/).",
          },
          {
            type: "p",
            text: "Auch die Eigenanteile für Tages- und Nachtpflege oder Kurzzeitpflege können Sie mit dem Entlastungsbetrag bezahlen. Nach der Praxis der Pflegekassen gilt das zum Teil auch für Unterkunft und Verpflegung. Fragen Sie im Zweifel vorher bei Ihrer Kasse nach.",
          },
          {
            type: "p",
            text: "Nicht erstattet werden in der Regel private Helfer ohne Anerkennung. Achten Sie darauf, dass der Anbieter zugelassen oder nach Landesrecht anerkannt ist.",
          },
        ],
      },
      {
        h2: "Kann man den Entlastungsbetrag ansparen?",
        blocks: [
          {
            type: "p",
            text: "Ja, nicht genutzte Beträge werden in die folgenden Monate übertragen. Was am Jahresende übrig ist, können Sie noch bis zum 30. Juni des Folgejahres verwenden, danach verfällt es.",
          },
          {
            type: "table",
            head: ["Zeitraum", "Monatlicher Betrag", "Jahressumme", "Verwendbar bis"],
            rows: [
              ["Kalenderjahr 2025", "131 €", "1.572 €", "30.06.2026"],
              ["Kalenderjahr 2026", "131 €", "1.572 €", "30.06.2027"],
            ],
            caption: "Entlastungsbetrag nach § 45b SGB XI für alle Pflegegrade 1 bis 5",
          },
          {
            type: "p",
            text: "Ein Beispiel: Sie haben 2026 sechs Monate lang nichts genutzt. Dann stehen Ihnen 786 € zusätzlich zur Verfügung. Diese können Sie bis zum 30.06.2027 einsetzen, etwa für regelmäßige Betreuungsstunden.",
          },
          { type: "cta", text: "Sie wissen nicht, wie viel Entlastungsbetrag Sie noch haben? Wir helfen Ihnen, den Stand bei der Pflegekasse zu klären." },
        ],
      },
      {
        h2: "Was ist der Umwandlungsanspruch von 40 %?",
        blocks: [
          {
            type: "p",
            text: "Mit dem Umwandlungsanspruch können Sie ab Pflegegrad 2 bis zu 40 % Ihrer nicht genutzten Pflegesachleistung für anerkannte Angebote zur Unterstützung im Alltag einsetzen (§ 45a Abs. 4 SGB XI). Er gilt zusätzlich zum Entlastungsbetrag.",
          },
          {
            type: "p",
            text: "Bei Pflegegrad 3 sind das bis zu 598,80 € im Monat. Ein vorheriger Antrag ist nicht nötig, die Erstattung beantragen Sie mit Belegen.",
          },
          {
            type: "p",
            text: "Beachten Sie: Die Umwandlung zählt wie eine genutzte Sachleistung. Wenn Sie Pflegegeld als Kombinationsleistung beziehen, sinkt dieses entsprechend. Wir rechnen Ihnen vorher aus, ob sich die Umwandlung lohnt.",
          },
          {
            type: "table",
            head: ["Pflegegrad", "Pflegesachleistung", "davon bis 40 % umwandelbar"],
            rows: [
              ["Pflegegrad 2", "796 €", "318,40 €"],
              ["Pflegegrad 3", "1.497 €", "598,80 €"],
              ["Pflegegrad 4", "1.859 €", "743,60 €"],
              ["Pflegegrad 5", "2.299 €", "919,60 €"],
            ],
            caption: "Umwandlungsanspruch nach § 45a Abs. 4 SGB XI, monatliche Höchstbeträge 2026",
          },
        ],
      },
      {
        h2: "Wie wird der Entlastungsbetrag abgerechnet?",
        blocks: [
          {
            type: "p",
            text: "Der Entlastungsbetrag wird gegen Nachweis erstattet: entweder rechnet der Pflegedienst direkt mit der Pflegekasse ab, oder Sie reichen die Rechnung selbst ein.",
          },
          {
            type: "p",
            text: "TwinsCare rechnet direkt mit der Pflegekasse ab. Sie müssen dafür nicht in Vorleistung gehen. Sie unterschreiben lediglich die erbrachten Leistungen.",
          },
          {
            type: "p",
            text: "Nutzen Sie mehrere Anbieter, zum Beispiel einen Pflegedienst und eine Tagespflege, teilen sich beide den Betrag. Behalten Sie dann den Überblick, damit nicht zwei Rechnungen auf dasselbe Guthaben zugreifen. Ihre Pflegekasse nennt Ihnen auf Anfrage den aktuellen Stand.",
          },
          {
            type: "p",
            text: "Planen Sie Restbeträge aus dem Vorjahr bewusst ein. Wer im Frühjahr zusätzliche Betreuungsstunden bucht, kann das Guthaben vor dem 30. Juni noch sinnvoll nutzen. Wir helfen Ihnen, die Einsätze passend zu verteilen.",
          },
          {
            type: "p",
            text: "Übersteigen die Kosten Ihren verfügbaren Betrag, zahlen Sie den Rest selbst. Das steht vorab im schriftlichen Kostenvoranschlag, damit es keine Überraschungen gibt.",
          },
        ],
      },
      {
        h2: "Wie kann der Entlastungsbetrag pflegende Angehörige entlasten?",
        blocks: [
          {
            type: "p",
            text: "Der Entlastungsbetrag verschafft pflegenden Angehörigen regelmäßige Freiräume, weil eine Betreuungskraft für einige Stunden übernimmt. 131 € im Monat reichen je nach Preis meist für einige Betreuungsstunden.",
          },
          {
            type: "p",
            text: "Viele Angehörige pflegen neben Beruf und eigener Familie. Schon zwei feste Stunden pro Woche können dann viel verändern. Sie schaffen Zeit für Arzttermine, Einkäufe oder einfach eine Pause.",
          },
          {
            type: "p",
            text: "Für die pflegebedürftige Person bringt die Betreuung Abwechslung. Ein Spaziergang, ein Gespräch oder gemeinsames Kochen fördern Kontakte und Selbstständigkeit. Das ist ausdrücklich Ziel der Leistung. Gerade Menschen, die allein leben, freuen sich über einen festen Besuch in der Woche. Eine vertraute Betreuungsperson schafft Verlässlichkeit.",
          },
          {
            type: "p",
            text: "Reicht der Entlastungsbetrag nicht, lässt er sich mit anderen Leistungen kombinieren. Für längere Auszeiten gibt es die [Verhinderungspflege](/leistungen/verhinderungspflege/) mit bis zu 3.539 € im Jahr. Für dauerhafte Körperpflege ab Pflegegrad 2 ist die [ambulante Pflege](/leistungen/ambulante-pflege/) zuständig.",
          },
        ],
      },
      {
        h2: "So läuft es bei TwinsCare ab",
        blocks: [
          {
            type: "p",
            text: "Bis Sie den Entlastungsbetrag bei TwinsCare nutzen, sind es vier Schritte.",
          },
          {
            type: "ol",
            items: [
              "**Anruf oder Formular:** Sie melden sich telefonisch oder über das [Anfrageformular](/pflege-anfragen/).",
              "**Kostenlose Erstberatung zu Hause:** Wir klären, welche Hilfe Sie brauchen und wie viel Budget verfügbar ist.",
              "**Kostenvoranschlag und Plan:** Sie erhalten einen schriftlichen Kostenvoranschlag mit festen Zeiten und Aufgaben.",
              "**Start:** Eine feste Ansprechpartnerin und ein kleines Team übernehmen die Einsätze. Wir rechnen direkt mit der Pflegekasse ab.",
            ],
          },
          {
            type: "p",
            text: "Auch wenn Sie bisher nur Pflegegeld beziehen, können Sie den Entlastungsbetrag bei uns nutzen. Er kommt zusätzlich und mindert Ihr Pflegegeld nicht. Für viele Familien ist das der einfachste Einstieg in die Zusammenarbeit mit einem Pflegedienst.",
          },
          {
            type: "p",
            text: "Sie haben noch keinen Pflegegrad? Dann besteht noch kein Anspruch. Unsere [Pflegeberatung](/leistungen/pflegeberatung/) hilft Ihnen beim Antrag.",
          },
        ],
      },
      {
        h2: "In welchen Orten bietet TwinsCare Entlastungsleistungen an?",
        blocks: [
          {
            type: "p",
            text: "TwinsCare bietet Entlastungsleistungen in Bergedorf, Lohbrügge, Billstedt, Horn, Jenfeld, Oststeinbek, Glinde, Reinbek und Wentorf bei Hamburg an.",
          },
          { type: "ul", items: orteListe("Entlastungsleistungen") },
        ],
      },
    ],
    faqs: [
      {
        q: "Wer hat Anspruch auf den Entlastungsbetrag?",
        a: "Alle Pflegebedürftigen mit Pflegegrad 1 bis 5, die zu Hause gepflegt werden. Der Betrag ist für alle Pflegegrade gleich hoch: 131 € im Monat.",
      },
      {
        q: "Muss ich den Entlastungsbetrag beantragen?",
        a: "Ein eigener Antrag ist meist nicht nötig, der Anspruch besteht mit dem Pflegegrad. Die Erstattung erfolgt gegen Nachweis, entweder über den Pflegedienst oder über Ihre eingereichte Rechnung.",
      },
      {
        q: "Kann ich mit dem Entlastungsbetrag eine Haushaltshilfe bezahlen?",
        a: "Ja, wenn die Hilfe von einem zugelassenen Pflegedienst oder einem landesrechtlich anerkannten Angebot kommt. Private Helfer ohne Anerkennung werden in der Regel nicht erstattet.",
      },
      {
        q: "Bis wann muss ich den Entlastungsbetrag aus 2026 nutzen?",
        a: "Nicht verbrauchte Beträge aus 2026 können Sie bis zum 30. Juni 2027 verwenden. Danach verfallen sie.",
      },
      {
        q: "Kann ich den Entlastungsbetrag für Duschen nutzen?",
        a: "Nur bei Pflegegrad 1. Ab Pflegegrad 2 wird körperbezogene Pflege über die Pflegesachleistung abgerechnet.",
      },
      {
        q: "Wird der Entlastungsbetrag auf das Pflegegeld angerechnet?",
        a: "Nein. Der Entlastungsbetrag kommt zusätzlich zu Pflegegeld oder Pflegesachleistung. Anders ist es beim Umwandlungsanspruch, der das anteilige Pflegegeld mindern kann.",
      },
    ],
    ratgeber: ["entlastungsbetrag-131-euro", "pflegegrade-leistungen"],
    verwandt: ["verhinderungspflege", "ambulante-pflege"],
    quellen: [
      {
        title: "§ 45b SGB XI – Entlastungsbetrag",
        url: "https://www.gesetze-im-internet.de/sgb_11/__45b.html",
      },
      {
        title: "Bundesministerium für Gesundheit: Weitere Leistungen und Angebote zur Unterstützung im Alltag",
        url: "https://www.bundesgesundheitsministerium.de/entlastungsbetrag",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 5. Pflegeberatung
  // ---------------------------------------------------------------------------
  {
    slug: "pflegeberatung",
    navTitle: "Pflegeberatung",
    h1: "Pflegeberatung und Beratungseinsatz in Hamburg-Bergedorf",
    metaTitle: "Pflegeberatung & Beratungseinsatz Bergedorf | TwinsCare",
    metaDescription:
      "Pflegeberatung in Bergedorf und Hamburg-Ost: Hilfe beim Pflegegrad-Antrag, Vorbereitung auf den MD und Beratungseinsatz nach § 37.3. Die Pflegekasse zahlt.",
    lead:
      "TwinsCare berät Sie zu Hause zu Pflegegrad, Leistungen und Begutachtung. Den Pflicht-Beratungseinsatz für Pflegegeldbeziehende führen wir ebenfalls durch, die Kosten trägt die Pflegekasse.",
    kurz: [
      "Wer Pflegegeld bei Pflegegrad 2 bis 5 bezieht, muss halbjährlich einen Beratungseinsatz abrufen (§ 37 Abs. 3 SGB XI).",
      "Die Kosten des Beratungseinsatzes trägt die Pflegekasse.",
      "Ohne Nachweis kann die Pflegekasse das Pflegegeld kürzen.",
      "TwinsCare hilft auch beim Antrag auf einen Pflegegrad und bei der Vorbereitung auf die MD-Begutachtung.",
    ],
    kennzahlen: [
      { wert: "halbjährlich", label: "Pflicht-Beratung bei Pflegegeld (PG 2–5)" },
      { wert: "0 €", label: "Kosten für Sie – die Pflegekasse zahlt" },
      { wert: "25 Arbeitstage", label: "übliche Frist bis zum Pflegegrad-Bescheid" },
    ],
    foto: {
      id: "photo-1765896387387-0538bc9f997e",
      alt: "Pflegekraft lächelt gemeinsam mit einer älteren Patientin im Zimmer",
    },
    sections: [
      {
        h2: "Was ist ein Beratungseinsatz nach § 37 Abs. 3 SGB XI?",
        blocks: [
          {
            type: "p",
            text: "Der Beratungseinsatz nach § 37 Abs. 3 SGB XI ist ein Pflichtbesuch einer Pflegefachkraft bei Menschen, die Pflegegeld beziehen. Er soll die Pflege zu Hause sichern und pflegende Angehörige praktisch unterstützen.",
          },
          {
            type: "p",
            text: "Fachleute nennen ihn auch „Beratungsbesuch“ oder kurz „37.3-Beratung“. Durchführen darf ihn unter anderem ein zugelassener Pflegedienst wie TwinsCare.",
          },
          {
            type: "p",
            text: "Beim Besuch schauen wir gemeinsam auf die Pflegesituation. Wir geben Tipps zu Hilfsmitteln, rückenschonendem Arbeiten und Entlastungsmöglichkeiten. Anschließend erhält die Pflegekasse einen Nachweis über den Besuch.",
          },
          {
            type: "p",
            text: "Viele pflegende Angehörige empfinden den Termin zunächst als Pflicht. In der Praxis ist er oft eine gute Gelegenheit, Fragen loszuwerden, die sich im Alltag angesammelt haben. Notieren Sie diese am besten vorab.",
          },
          {
            type: "p",
            text: "Neben dem Beratungseinsatz bietet TwinsCare eine allgemeine Pflegeberatung an. Wir erklären Leistungen der Pflegeversicherung, helfen bei Anträgen und zeigen, wie sich Pflege zu Hause organisieren lässt. Die Erstberatung bei Ihnen zu Hause ist kostenlos.",
          },
        ],
      },
      {
        h2: "Wie oft ist der Beratungseinsatz Pflicht?",
        blocks: [
          {
            type: "p",
            text: "Wer Pflegegeld bei Pflegegrad 2 bis 5 bezieht, muss einmal im Halbjahr einen Beratungseinsatz abrufen. Bei Pflegegrad 4 und 5 ist zusätzlich ein Besuch pro Vierteljahr möglich.",
          },
          {
            type: "table",
            head: ["Situation", "Häufigkeit", "Pflicht oder freiwillig"],
            rows: [
              ["Pflegegrad 1", "halbjährlich", "freiwillig"],
              ["Pflegegeld, Pflegegrad 2 und 3", "halbjährlich", "Pflicht"],
              ["Pflegegeld, Pflegegrad 4 und 5", "halbjährlich, auf Wunsch vierteljährlich", "halbjährlich Pflicht"],
              ["Pflegesachleistung durch Pflegedienst", "halbjährlich", "freiwillig"],
            ],
            caption: "Beratungseinsätze nach § 37 Abs. 3 SGB XI in der aktuell geltenden Fassung",
          },
          {
            type: "p",
            text: "Wird die Pflicht-Beratung nicht abgerufen, muss die Pflegekasse das Pflegegeld angemessen kürzen. Im Wiederholungsfall kann sie es ganz entziehen (§ 37 Abs. 6 SGB XI). Bis einschließlich 31.03.2027 kann auf Wunsch jede zweite Beratung per Video stattfinden.",
          },
          { type: "cta", text: "Steht Ihr nächster Beratungseinsatz an? Vereinbaren Sie einen Termin, wir kommen zu Ihnen nach Hause." },
        ],
      },
      {
        h2: "Wer bezahlt die Pflegeberatung?",
        blocks: [
          {
            type: "p",
            text: "Die Kosten des Beratungseinsatzes trägt die Pflegekasse, bei Privatversicherten das private Versicherungsunternehmen. Für Sie ist der Besuch kostenlos.",
          },
          {
            type: "p",
            text: "Auch unsere Erstberatung zu Hause ist kostenlos. Dabei klären wir, welche Leistungen Ihnen zustehen und wie sich Pflege organisieren lässt.",
          },
          {
            type: "p",
            text: "Unabhängig davon haben Sie Anspruch auf eine individuelle Pflegeberatung durch die Pflegekasse nach § 7a SGB XI. Auch die Pflegestützpunkte in Hamburg und Schleswig-Holstein beraten neutral und kostenfrei.",
          },
          {
            type: "p",
            text: "Der Unterschied: Die Pflegeberatung der Kasse ist umfassend und neutral. Der Beratungseinsatz durch einen Pflegedienst ist praxisnah und findet in Ihrer Wohnung statt. Beides ergänzt sich gut. Sie können beide Angebote nutzen, ohne sich für eines entscheiden zu müssen.",
          },
        ],
      },
      {
        h2: "Wie hilft TwinsCare beim Antrag auf einen Pflegegrad?",
        blocks: [
          {
            type: "p",
            text: "TwinsCare hilft beim Ausfüllen des Antrags, erklärt den Ablauf der Begutachtung und bereitet Sie auf den Besuch des Medizinischen Dienstes (MD) vor. Den Antrag selbst stellen Sie bei Ihrer Pflegekasse.",
          },
          {
            type: "ol",
            items: [
              "Antrag bei der Pflegekasse stellen, ein Anruf oder formloses Schreiben genügt zunächst",
              "Pflegetagebuch führen: Wobei wird Hilfe gebraucht, wie oft und wie lange?",
              "Arztberichte, Medikamentenplan und Hilfsmittelliste bereitlegen",
              "Beim MD-Termin eine vertraute Person dabeihaben",
              "Bescheid prüfen, er kommt in der Regel innerhalb von 25 Arbeitstagen",
            ],
          },
          {
            type: "p",
            text: "Mehr Details finden Sie in den Ratgebern [Pflegegrad beantragen in Hamburg](/ratgeber/pflegegrad-beantragen-hamburg/) und [MD-Begutachtung vorbereiten](/ratgeber/md-begutachtung-vorbereiten/).",
          },
          {
            type: "p",
            text: "Beim MD-Termin neigen viele Menschen dazu, ihre Einschränkungen herunterzuspielen. Schildern Sie den Alltag ehrlich, auch an schlechten Tagen. Ein vorbereitetes Pflegetagebuch hilft, nichts Wichtiges zu vergessen.",
          },
          {
            type: "p",
            text: "Hat sich der Zustand verschlechtert, kann ein Antrag auf Höherstufung sinnvoll sein. Auch dabei unterstützen wir Sie. Der Ablauf ist derselbe wie beim Erstantrag.",
          },
        ],
      },
      {
        h2: "Ab wie vielen Punkten gibt es welchen Pflegegrad?",
        blocks: [
          {
            type: "p",
            text: "Pflegegrad 1 gibt es ab 12,5 Punkten, Pflegegrad 5 ab 90 Punkten. Die Punkte vergibt der Medizinische Dienst bei der Begutachtung nach festen Modulen wie Mobilität und Selbstversorgung.",
          },
          {
            type: "table",
            head: ["Pflegegrad", "Punkte", "Pflegesachleistung pro Monat"],
            rows: [
              ["Pflegegrad 1", "ab 12,5", "–"],
              ["Pflegegrad 2", "ab 27", "796 €"],
              ["Pflegegrad 3", "ab 47,5", "1.497 €"],
              ["Pflegegrad 4", "ab 70", "1.859 €"],
              ["Pflegegrad 5", "ab 90", "2.299 €"],
            ],
            caption: "Schwellenwerte der Pflegegrade und Pflegesachleistung, Stand 2026",
          },
          {
            type: "p",
            text: "Eine unverbindliche Einschätzung bietet unser [Pflegegrad-Rechner](/pflegegrad-rechner/). Sie ersetzt nicht die Begutachtung, hilft aber bei der Vorbereitung.",
          },
          {
            type: "p",
            text: "Bewertet werden sechs Lebensbereiche, zum Beispiel Mobilität, Selbstversorgung und der Umgang mit Krankheit. Entscheidend ist, wie selbstständig jemand im Alltag ist, nicht die Diagnose allein.",
          },
        ],
      },
      {
        h2: "Was passiert beim Beratungsbesuch zu Hause?",
        blocks: [
          {
            type: "p",
            text: "Beim Beratungsbesuch spricht eine Pflegefachkraft mit Ihnen und Ihren Angehörigen über die Pflegesituation und gibt praktische Hinweise. Der erste Besuch findet immer in der Wohnung statt.",
          },
          {
            type: "ul",
            items: [
              "Wie geht es der pflegebedürftigen Person, hat sich etwas verändert?",
              "Kommen die pflegenden Angehörigen zurecht, wo fehlt Entlastung?",
              "Passen die Hilfsmittel, fehlt zum Beispiel ein Pflegebett oder Haltegriff?",
              "Stimmt der Pflegegrad noch, oder ist ein Antrag auf Höherstufung sinnvoll?",
              "Welche Leistungen werden noch nicht genutzt, etwa Entlastungsbetrag oder Verhinderungspflege?",
            ],
          },
          {
            type: "p",
            text: "Der Besuch ist keine Kontrolle, sondern Unterstützung. Viele Familien erfahren dabei erstmals, dass sie Anspruch auf [Entlastungsleistungen](/leistungen/entlastungsleistungen/) oder Pflegehilfsmittel zum Verbrauch bis 42 € im Monat haben.",
          },
          {
            type: "p",
            text: "Die Pflegekasse erhält anschließend einen Nachweis über den Besuch. So ist die Pflicht erfüllt und das Pflegegeld gesichert.",
          },
        ],
      },
      {
        h2: "So läuft es bei TwinsCare ab",
        blocks: [
          {
            type: "p",
            text: "Eine Beratung bei TwinsCare läuft in vier Schritten ab.",
          },
          {
            type: "ol",
            items: [
              "**Anruf oder Formular:** Sie melden sich telefonisch oder über das [Anfrageformular](/pflege-anfragen/) und nennen Ihr Anliegen.",
              "**Kostenlose Erstberatung zu Hause:** Wir kommen zu Ihnen und besprechen Pflegesituation, Pflegegrad und mögliche Leistungen.",
              "**Plan und Kostenvoranschlag:** Brauchen Sie danach Unterstützung durch uns, erhalten Sie einen schriftlichen Kostenvoranschlag und einen Pflegeplan.",
              "**Start:** Beratungseinsätze planen wir verlässlich im passenden Rhythmus, auf Wunsch beginnt auch die Pflege.",
            ],
          },
          {
            type: "p",
            text: "Für den Beratungseinsatz brauchen Sie keinen Vertrag über weitere Leistungen. Sie können ihn bei uns abrufen, auch wenn Sie die Pflege weiterhin selbst oder mit Angehörigen organisieren. Halten Sie zum Termin Ihre Versichertenkarte und den Pflegegrad-Bescheid bereit.",
          },
          {
            type: "p",
            text: "Möchten Sie später Unterstützung bei der Pflege, ist der Übergang einfach. Viele Familien starten mit [ambulanter Pflege](/leistungen/ambulante-pflege/) für einzelne Aufgaben wie das Duschen.",
          },
        ],
      },
      {
        h2: "In welchen Orten bietet TwinsCare Pflegeberatung an?",
        blocks: [
          {
            type: "p",
            text: "TwinsCare bietet Pflegeberatung und Beratungseinsätze in Bergedorf, Lohbrügge, Billstedt, Horn und Jenfeld sowie in Oststeinbek, Glinde, Reinbek und Wentorf bei Hamburg an.",
          },
          { type: "ul", items: orteListe("Pflegeberatung") },
        ],
      },
    ],
    faqs: [
      {
        q: "Muss ich den Beratungseinsatz selbst bezahlen?",
        a: "Nein. Die Kosten trägt die Pflegekasse, bei Privatversicherten das private Versicherungsunternehmen.",
      },
      {
        q: "Was passiert, wenn ich den Beratungseinsatz vergesse?",
        a: "Die Pflegekasse muss das Pflegegeld dann angemessen kürzen und kann es im Wiederholungsfall entziehen (§ 37 Abs. 6 SGB XI). Holen Sie den Termin daher möglichst rasch nach.",
      },
      {
        q: "Brauche ich einen Beratungseinsatz, wenn ein Pflegedienst kommt?",
        a: "Wer nur Pflegesachleistung bezieht, ist nicht verpflichtet. Sie können aber freiwillig halbjährlich einen Beratungseinsatz abrufen. Ob bei einer Kombinationsleistung eine Pflicht besteht, klären wir im Einzelfall mit Ihnen und Ihrer Pflegekasse.",
      },
      {
        q: "Kann der Beratungseinsatz per Video stattfinden?",
        a: "Ja, auf Wunsch kann bis einschließlich 31.03.2027 jede zweite Beratung per Videokonferenz erfolgen. Die erste Beratung findet zu Hause statt.",
      },
      {
        q: "Hilft TwinsCare auch bei einem Widerspruch gegen den Pflegegrad?",
        a: "Wir erklären Ihnen den Bescheid und zeigen, worauf es bei einem Widerspruch ankommt. Eine Rechtsberatung können wir nicht leisten.",
      },
      {
        q: "Wo bekomme ich sonst noch kostenlose Pflegeberatung?",
        a: "Bei Ihrer Pflegekasse (Pflegeberatung nach § 7a SGB XI) und bei den Pflegestützpunkten in Hamburg und Schleswig-Holstein.",
      },
    ],
    ratgeber: ["pflegegrad-beantragen-hamburg", "md-begutachtung-vorbereiten", "pflegegrade-leistungen"],
    verwandt: ["ambulante-pflege", "entlastungsleistungen"],
    quellen: [
      {
        title: "§ 37 SGB XI – Pflegegeld für selbst beschaffte Pflegehilfen (Beratungseinsatz Abs. 3)",
        url: "https://www.gesetze-im-internet.de/sgb_11/__37.html",
      },
      {
        title: "§ 7a SGB XI – Pflegeberatung",
        url: "https://www.gesetze-im-internet.de/sgb_11/__7a.html",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 6. Pflege nach Krankenhausaufenthalt
  // ---------------------------------------------------------------------------
  {
    slug: "pflege-nach-krankenhausaufenthalt",
    navTitle: "Pflege nach dem Krankenhaus",
    h1: "Pflege nach dem Krankenhausaufenthalt in Hamburg-Bergedorf",
    metaTitle: "Pflege nach dem Krankenhaus in Bergedorf | TwinsCare",
    metaDescription:
      "Pflege nach dem Krankenhaus in Bergedorf und Hamburg-Ost: Entlassmanagement, Behandlungs- und Grundpflege zu Hause – wir planen den Übergang.",
    lead:
      "Nach einem Krankenhausaufenthalt ist der Weg nach Hause oft der schwierigste Teil. TwinsCare übernimmt Behandlungspflege und Grundpflege, damit Sie oder Ihr Angehöriger sicher zu Hause ankommen.",
    kurz: [
      "Krankenhäuser müssen die Versorgung nach der Entlassung über das Entlassmanagement planen (§ 39 Abs. 1a SGB V).",
      "Das Krankenhaus kann häusliche Krankenpflege für bis zu sieben Tage verordnen.",
      "Behandlungspflege zahlt die Krankenkasse, Grundpflege ab Pflegegrad 2 die Pflegekasse.",
      "Ist die Versorgung zu Hause noch nicht möglich, kann Kurzzeitpflege eine Alternative sein.",
    ],
    kennzahlen: [
      { wert: "§ 39 Abs. 1a SGB V", label: "Anspruch auf Entlassmanagement" },
      { wert: "bis 7 Tage", label: "Verordnung durch das Krankenhaus" },
      { wert: "kein Pflegegrad", label: "nötig für Behandlungspflege" },
    ],
    foto: {
      id: "photo-1676281050264-178eff38874a",
      alt: "Frau im Pflegebett wird von einer Pflegekraft unterstützt",
    },
    sections: [
      {
        h2: "Was ist das Entlassmanagement im Krankenhaus?",
        blocks: [
          {
            type: "p",
            text: "Das Entlassmanagement ist die Pflicht des Krankenhauses, die Versorgung nach der Entlassung vorzubereiten (§ 39 Abs. 1a SGB V). Dazu gehören zum Beispiel Verordnungen für Pflege, Medikamente und Hilfsmittel.",
          },
          {
            type: "p",
            text: "Meist kümmert sich der Sozialdienst oder ein Entlassteam des Krankenhauses darum. Sie müssen dem Entlassmanagement schriftlich oder elektronisch zustimmen. Auch Ihre Krankenkasse muss Sie dabei unterstützen.",
          },
          {
            type: "p",
            text: "Krankenhausärzte dürfen für die Zeit direkt nach der Entlassung bestimmte Leistungen verordnen. Häusliche Krankenpflege ist laut G-BA für bis zu sieben Tage möglich. Danach übernimmt die Hausarztpraxis.",
          },
          {
            type: "p",
            text: "Sie haben das Recht, den Pflegedienst selbst zu wählen. Nennen Sie dem Sozialdienst Ihren Wunsch möglichst früh. Dann kann das Krankenhaus die Verordnung und die Informationen rechtzeitig weitergeben.",
          },
        ],
      },
      {
        h2: "Welche Pflege brauche ich nach dem Krankenhaus zu Hause?",
        blocks: [
          {
            type: "p",
            text: "Nach dem Krankenhaus brauchen viele Menschen eine Kombination aus Behandlungspflege und Grundpflege. Behandlungspflege bezahlt die Krankenkasse, Grundpflege ab Pflegegrad 2 die Pflegekasse.",
          },
          {
            type: "table",
            head: ["Pflegeart", "Beispiele", "Wer zahlt", "Voraussetzung"],
            rows: [
              ["Behandlungspflege", "Wundversorgung, Medikamente, Injektionen, Kompressionsstrümpfe", "Krankenkasse (§ 37 SGB V)", "ärztliche Verordnung"],
              ["Grundpflege", "Waschen, Anziehen, Hilfe beim Essen, Mobilität", "Pflegekasse (§ 36 SGB XI)", "ab Pflegegrad 2"],
              ["Entlastung im Alltag", "Haushaltshilfe, Betreuung", "Pflegekasse (§ 45b SGB XI)", "ab Pflegegrad 1, 131 € im Monat"],
            ],
            caption: "Kostenträger der häufigsten Leistungen nach einem Krankenhausaufenthalt",
          },
          {
            type: "p",
            text: "TwinsCare verbindet beides in einem Einsatz. Mehr zu den einzelnen Leistungen lesen Sie unter [Behandlungspflege](/leistungen/behandlungspflege/) und [ambulante Pflege](/leistungen/ambulante-pflege/).",
          },
        ],
      },
      {
        h2: "Wer zahlt die Pflege nach dem Krankenhaus, wenn noch kein Pflegegrad vorliegt?",
        blocks: [
          {
            type: "p",
            text: "Ohne Pflegegrad zahlt die Krankenkasse die ärztlich verordnete Behandlungspflege. Unter bestimmten Voraussetzungen übernimmt sie nach § 37 SGB V für eine begrenzte Zeit auch Grundpflege und Hilfe im Haushalt.",
          },
          {
            type: "p",
            text: "Das gilt vor allem nach einer schweren Erkrankung oder Operation, wenn noch kein Pflegegrad 2 vorliegt. Auch diese Leistung muss ärztlich verordnet werden.",
          },
          {
            type: "p",
            text: "Ist absehbar, dass dauerhaft Hilfe nötig ist, sollten Sie den Pflegegrad früh beantragen. Das geht schon während des Krankenhausaufenthalts. Unsere [Pflegeberatung](/leistungen/pflegeberatung/) hilft beim Antrag.",
          },
          { type: "cta", text: "Steht eine Entlassung bevor? Sprechen Sie uns frühzeitig an, dann planen wir den Übergang gemeinsam." },
        ],
      },
      {
        h2: "Was sollten Angehörige vor der Entlassung klären?",
        blocks: [
          {
            type: "p",
            text: "Vor der Entlassung sollten Angehörige klären, welche Pflege und welche Hilfsmittel nötig sind und wer die Versorgung zu Hause übernimmt. Am besten sprechen Sie dafür einige Tage vorher mit dem Sozialdienst.",
          },
          {
            type: "ul",
            items: [
              "Entlassdatum und Uhrzeit, Transport nach Hause",
              "Verordnung für häusliche Krankenpflege (Muster 12) und Medikamentenplan",
              "Medikamente für die ersten Tage, bis die Hausarztpraxis übernimmt",
              "Hilfsmittel wie Pflegebett, Rollator oder Toilettenstuhl",
              "Entlassbrief für die Hausärztin oder den Hausarzt",
              "Pflegedienst, der ab dem ersten Tag kommt",
              "Antrag auf Pflegegrad, falls dauerhaft Hilfe nötig ist",
            ],
          },
          {
            type: "p",
            text: "Eine ausführliche Liste zum Abhaken finden Sie in der [Checkliste zur Krankenhaus-Entlassung](/ratgeber/krankenhaus-entlassung-checkliste/).",
          },
          {
            type: "p",
            text: "Fragen Sie im Krankenhaus ruhig mehrmals nach, wenn etwas unklar ist. Lassen Sie sich Medikamentenänderungen erklären und schriftlich geben. Klären Sie auch, wer Ansprechpartner für Rückfragen nach der Entlassung ist.",
          },
          {
            type: "p",
            text: "Wohnt die pflegebedürftige Person allein, ist die Planung besonders wichtig. Überlegen Sie, wer in den ersten Tagen nach dem Rechten sieht. Ein Pflegedienst kann feste Besuche übernehmen, Angehörige ergänzen sie.",
          },
        ],
      },
      {
        h2: "Wann ist Kurzzeitpflege nach dem Krankenhaus die bessere Wahl?",
        blocks: [
          {
            type: "p",
            text: "Kurzzeitpflege ist sinnvoll, wenn die Versorgung zu Hause direkt nach der Entlassung noch nicht möglich ist. Sie findet vorübergehend in einer stationären Einrichtung statt.",
          },
          {
            type: "p",
            text: "Ab Pflegegrad 2 zahlt die Pflegekasse dafür aus dem gemeinsamen Jahresbetrag von bis zu 3.539 € pro Kalenderjahr, den sich Kurzzeit- und [Verhinderungspflege](/leistungen/verhinderungspflege/) teilen. Ohne Pflegegrad kann in bestimmten Fällen die Krankenkasse Kurzzeitpflege übernehmen.",
          },
          {
            type: "p",
            text: "Oft ist der Weg zweistufig: erst einige Wochen Kurzzeitpflege, danach Pflege zu Hause mit einem Pflegedienst. Wir beraten Sie gern, welcher Weg zu Ihrer Situation passt.",
          },
        ],
      },
      {
        h2: "Wie gelingen die ersten Tage zu Hause nach dem Krankenhaus?",
        blocks: [
          {
            type: "p",
            text: "Die ersten Tage gelingen am besten, wenn Pflege, Medikamente und Hilfsmittel schon am Entlasstag bereitstehen. Lücken entstehen oft am Wochenende oder wenn Verordnungen fehlen.",
          },
          {
            type: "ul",
            items: [
              "**Wohnung vorbereiten:** Stolperfallen wie Teppichkanten entfernen, Wege zu Bad und Bett freiräumen",
              "**Licht:** Nachtlicht im Flur und neben dem Bett, damit nächtliche Wege sicher sind",
              "**Vorräte:** Getränke und einfache Mahlzeiten für die ersten Tage",
              "**Telefonliste:** Hausarztpraxis, Pflegedienst und Angehörige gut sichtbar notieren",
              "**Termine:** Den ersten Termin in der Hausarztpraxis zeitnah vereinbaren",
            ],
          },
          {
            type: "p",
            text: "Nach einem Krankenhausaufenthalt sind viele Menschen geschwächt. Das Sturzrisiko ist in dieser Zeit erhöht. Wir achten deshalb bei jedem Einsatz auf sichere Bewegungsabläufe und geben Angehörigen Hinweise. Auch ausreichendes Trinken und regelmäßiges Essen haben wir im Blick, denn beides hilft bei der Erholung.",
          },
          {
            type: "p",
            text: "Sind dauerhafte Umbauten nötig, etwa eine bodengleiche Dusche, kann die Pflegekasse ab Pflegegrad 1 bis zu 4.180 € je Maßnahme zuschießen. Wir besprechen das gern bei der Erstberatung.",
          },
        ],
      },
      {
        h2: "So läuft es bei TwinsCare ab",
        blocks: [
          {
            type: "p",
            text: "Den Übergang vom Krankenhaus nach Hause organisieren wir in vier Schritten.",
          },
          {
            type: "ol",
            items: [
              "**Anruf oder Formular:** Melden Sie sich möglichst vor der Entlassung, telefonisch oder über das [Anfrageformular](/pflege-anfragen/).",
              "**Kostenlose Erstberatung zu Hause:** Wir besprechen den Bedarf, die vorhandenen Verordnungen und Hilfsmittel. Bei Bedarf beraten wir Angehörige schon vor dem Entlasstag.",
              "**Kostenvoranschlag und Pflegeplan:** Sie erhalten einen schriftlichen Kostenvoranschlag. Darin sehen Sie, was Krankenkasse und Pflegekasse übernehmen.",
              "**Start:** Wir reichen die Verordnung bei der Krankenkasse ein und beginnen mit den Einsätzen, idealerweise ab dem ersten Tag zu Hause.",
            ],
          },
          {
            type: "p",
            text: "Je früher Sie sich melden, desto besser lässt sich der Übergang planen. Ideal ist ein Anruf, sobald das Entlassdatum feststeht. Dann können wir Einsatzzeiten, Verordnung und Hilfsmittel rechtzeitig abstimmen.",
          },
          {
            type: "p",
            text: "In den Wochen nach der Entlassung ändert sich der Bedarf oft. Manche Menschen erholen sich schnell und brauchen bald weniger Hilfe. Andere benötigen dauerhaft Unterstützung. Wir passen den Pflegeplan an und helfen bei Bedarf beim Antrag auf einen Pflegegrad.",
          },
        ],
      },
      {
        h2: "In welchen Orten bietet TwinsCare Pflege nach dem Krankenhaus an?",
        blocks: [
          {
            type: "p",
            text: "TwinsCare bietet Pflege nach dem Krankenhausaufenthalt in Bergedorf, Lohbrügge, Billstedt, Horn und Jenfeld sowie in Oststeinbek, Glinde, Reinbek und Wentorf bei Hamburg an.",
          },
          { type: "ul", items: orteListe("Pflege nach dem Krankenhaus") },
        ],
      },
    ],
    faqs: [
      {
        q: "Wer organisiert die Pflege nach dem Krankenhaus?",
        a: "Das Krankenhaus plant die Anschlussversorgung im Rahmen des Entlassmanagements (§ 39 Abs. 1a SGB V). Den Pflegedienst können Sie selbst wählen und dem Sozialdienst nennen.",
      },
      {
        q: "Wie lange gilt eine Verordnung vom Krankenhaus?",
        a: "Krankenhausärzte können häusliche Krankenpflege für bis zu sieben Tage verordnen. Danach stellt die Hausarztpraxis bei Bedarf eine Folgeverordnung aus.",
      },
      {
        q: "Kann ich während des Krankenhausaufenthalts einen Pflegegrad beantragen?",
        a: "Ja. Der Antrag kann schon im Krankenhaus gestellt werden, oft hilft der Sozialdienst dabei. In bestimmten Fällen wird die Begutachtung dann beschleunigt.",
      },
      {
        q: "Was kostet Pflege nach dem Krankenhaus?",
        a: "Behandlungspflege zahlt die Krankenkasse, Erwachsene leisten die gesetzliche Zuzahlung. Grundpflege übernimmt ab Pflegegrad 2 die Pflegekasse bis zum monatlichen Höchstbetrag. Ihren Anteil sehen Sie vorab im Kostenvoranschlag.",
      },
      {
        q: "Was ist, wenn die Pflege zu Hause noch nicht klappt?",
        a: "Dann kann Kurzzeitpflege in einer Einrichtung eine Übergangslösung sein. Ab Pflegegrad 2 wird sie aus dem gemeinsamen Jahresbetrag von bis zu 3.539 € bezahlt.",
      },
      {
        q: "Arbeitet TwinsCare mit bestimmten Krankenhäusern zusammen?",
        a: "Sie können TwinsCare unabhängig vom Krankenhaus wählen. Nennen Sie uns dem Sozialdienst als gewünschten Pflegedienst, wir stimmen uns dann ab.",
      },
    ],
    ratgeber: ["krankenhaus-entlassung-checkliste", "behandlungspflege-krankenkasse", "pflegegrad-beantragen-hamburg"],
    verwandt: ["behandlungspflege", "ambulante-pflege"],
    quellen: [
      {
        title: "§ 39 SGB V – Krankenhausbehandlung (Entlassmanagement, Abs. 1a)",
        url: "https://www.gesetze-im-internet.de/sgb_5/__39.html",
      },
      {
        title: "Gemeinsamer Bundesausschuss: Häusliche Krankenpflege",
        url: "https://www.g-ba.de/themen/veranlasste-leistungen/haeusliche-krankenpflege/",
      },
      {
        title: "§ 37 SGB V – Häusliche Krankenpflege",
        url: "https://www.gesetze-im-internet.de/sgb_5/__37.html",
      },
    ],
  },
];
