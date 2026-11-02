import type { Artikel, Quelle } from "./types";

// Offizielle Quellen – alle am 02.11.2026 geöffnet und geprüft.
const Q_BMG_PFLEGEGRADE: Quelle = {
  title: "Bundesministerium für Gesundheit: Pflegegrade",
  url: "https://www.bundesgesundheitsministerium.de/pflegegrade",
};
const Q_BMG_FRISTEN: Quelle = {
  title: "Bundesministerium für Gesundheit: Begutachtungsfristen",
  url: "https://www.bundesgesundheitsministerium.de/service/begriffe-von-a-z/b/begutachtungsfristen.html",
};
const Q_BMG_PFLEGEBEDUERFTIGKEIT: Quelle = {
  title: "Bundesministerium für Gesundheit: Online-Ratgeber Pflege – Pflegebedürftigkeit",
  url: "https://www.bundesgesundheitsministerium.de/themen/pflege/online-ratgeber-pflege/pflegebeduerftigkeit",
};
const Q_BMG_PG1: Quelle = {
  title: "Bundesministerium für Gesundheit: Leistungen bei Pflegegrad 1",
  url: "https://www.bundesgesundheitsministerium.de/service/begriffe-von-a-z/p/pflegegrad-1",
};
const Q_BMG_BROSCHUERE: Quelle = {
  title: "Bundesministerium für Gesundheit: Pflegeleistungen zum Nachschlagen (Stand 07/2026)",
  url: "https://www.bundesgesundheitsministerium.de/fileadmin/Dateien/5_Publikationen/Pflege/Broschueren/BMG_Pflegeleistungen_zum_Nachschlagen_bf.pdf",
};
const Q_SGB11_15: Quelle = {
  title: "§ 15 SGB XI – Ermittlung des Grades der Pflegebedürftigkeit",
  url: "https://www.gesetze-im-internet.de/sgb_11/__15.html",
};
const Q_SGB11_38: Quelle = {
  title: "§ 38 SGB XI – Kombination von Geldleistung und Sachleistung",
  url: "https://www.gesetze-im-internet.de/sgb%5F11/__38.html",
};
const Q_SGB11_89: Quelle = {
  title: "§ 89 SGB XI – Grundsätze für die Vergütungsregelung",
  url: "https://www.gesetze-im-internet.de/sgb_11/__89.html",
};
const Q_SGB11_120: Quelle = {
  title: "§ 120 SGB XI – Pflegevertrag bei häuslicher Pflege",
  url: "https://www.gesetze-im-internet.de/sgb_11/__120.html",
};
const Q_HH_PFLEGESTUETZPUNKTE: Quelle = {
  title: "hamburg.de: Pflegestützpunkte in Hamburg – Allgemeine Information",
  url: "https://www.hamburg.de/service/info/11279671/n0/",
};
const Q_VZ_ANTRAG: Quelle = {
  title: "Verbraucherzentrale: Pflegegrad beantragen – So geht's",
  url: "https://www.verbraucherzentrale.de/wissen/gesundheit-pflege/pflegeantrag-und-leistungen/pflegegrad-beantragen-so-gehts-13413",
};
const Q_VZ_BEGUTACHTUNG: Quelle = {
  title: "Verbraucherzentrale: Begutachtung durch Medizinischen Dienst – So können Sie sich vorbereiten",
  url: "https://www.verbraucherzentrale.de/wissen/gesundheit-pflege/pflegeantrag-und-leistungen/begutachtung-durch-medizinischen-dienst-so-koennen-sie-sich-vorbereiten-13414",
};
const Q_VZ_LEISTUNGEN: Quelle = {
  title: "Verbraucherzentrale: Pflegegeld, Pflegesachleistung und Co – Welche Leistungen stehen mir zu?",
  url: "https://www.verbraucherzentrale.de/wissen/gesundheit-pflege/pflegeantrag-und-leistungen/pflegegeld-pflegesachleistung-und-co-welche-leistungen-stehen-mir-zu-13424",
};
const Q_VZ_PFLEGEVERTRAG: Quelle = {
  title: "Verbraucherzentrale: Der Pflegevertrag – was muss drin stehen?",
  url: "https://www.verbraucherzentrale.de/wissen/gesundheit-pflege/pflege-zu-hause/der-pflegevertrag-was-muss-drin-stehen-13921",
};
const Q_MD_WEG: Quelle = {
  title: "Medizinischer Dienst Bund: Der Weg zum Pflegegrad",
  url: "https://md-bund.de/fileadmin/dokumente/Publikationen/SPV/PDF_Grafik_Weg_zum_Pflegegrad/Der_Weg_zum_Pflegegrad_04.pdf",
};
const Q_GESUND_WIDERSPRUCH: Quelle = {
  title: "gesund.bund.de (BMG): Vorgehen gegen einen Bescheid der Pflegekasse",
  url: "https://gesund.bund.de/vorgehen-gegen-bescheid-der-pflegekasse",
};

const DATUM = "2026-11-02";

export const ratgeberA: Artikel[] = [
  // ───────────────────────────────────────────── 1
  {
    slug: "was-kostet-ein-pflegedienst",
    cluster: "kosten",
    h1: "Was kostet ein ambulanter Pflegedienst? Kosten, Kassenanteil und Eigenanteil 2026",
    metaTitle: "Was kostet ein Pflegedienst? Kosten 2026 in Hamburg",
    metaDescription:
      "Was kostet ein ambulanter Pflegedienst? So entstehen die Preise, was die Pflegekasse 2026 zahlt und wie hoch Ihr Eigenanteil ist – mit Rechenbeispiel für PG 3.",
    lead:
      "Die Kosten eines Pflegedienstes hängen davon ab, wie oft er kommt und was er tut. Ab Pflegegrad 2 übernimmt die Pflegekasse einen festen Monatsbetrag – wir zeigen, wie die Rechnung entsteht und was für Sie übrig bleibt.",
    veroeffentlicht: DATUM,
    aktualisiert: DATUM,
    lesezeit: 8,
    kurz: [
      "Die Pflegekasse zahlt 2026 für einen Pflegedienst monatlich bis zu 796 € (PG 2), 1.497 € (PG 3), 1.859 € (PG 4) oder 2.299 € (PG 5).",
      "Die Preise je Leistung verhandelt jeder Pflegedienst mit den Pflege- und Sozialhilfeträgern (§ 89 SGB XI) – einen einheitlichen Preis für ganz Hamburg gibt es nicht.",
      "Ihr Eigenanteil ist der Teil der Monatsrechnung, der über dem Sachleistungsbetrag liegt.",
      "Vor dem ersten Einsatz muss der Dienst Sie schriftlich über die voraussichtlichen Kosten informieren (§ 120 SGB XI).",
    ],
    foto: {
      id: "photo-1765896387387-0538bc9f997e",
      alt: "Pflegekraft lächelt mit einer älteren Patientin in deren Zimmer",
    },
    sections: [
      {
        h2: "Was kostet ein ambulanter Pflegedienst pro Monat?",
        blocks: [
          {
            type: "p",
            text: "Was ein Pflegedienst im Monat kostet, richtet sich nach Art und Zahl der Einsätze – von wenigen hundert Euro bis zu mehreren tausend Euro. Ab Pflegegrad 2 zahlt die Pflegekasse davon bis zu 796 € bis 2.299 € im Monat als **Pflegesachleistung** (§ 36 SGB XI).",
          },
          {
            type: "p",
            text: "Pflegesachleistung heißt: Die Kasse bezahlt nicht Sie, sondern den zugelassenen Pflegedienst direkt. Sie bekommen nur dann eine Rechnung, wenn die Leistungen eines Monats teurer sind als Ihr Betrag. Wer zum Beispiel nur zweimal pro Woche Hilfe beim Duschen braucht, liegt meist weit unter dem Höchstbetrag. Wer morgens und abends Unterstützung braucht, kommt schneller an die Grenze.",
          },
          {
            type: "table",
            caption: "Pflegesachleistung pro Monat nach § 36 SGB XI (Stand 2026)",
            head: ["Pflegegrad", "Monatlicher Höchstbetrag für den Pflegedienst"],
            rows: [
              ["Pflegegrad 1", "kein Anspruch – aber Entlastungsbetrag 131 €"],
              ["Pflegegrad 2", "796 €"],
              ["Pflegegrad 3", "1.497 €"],
              ["Pflegegrad 4", "1.859 €"],
              ["Pflegegrad 5", "2.299 €"],
            ],
          },
          {
            type: "p",
            text: "Die Beträge gelten seit dem 1. Januar 2025 unverändert. Die nächste gesetzliche Anpassung ist für den 1. Januar 2028 vorgesehen.",
          },
        ],
      },
      {
        h2: "Wie berechnet ein Pflegedienst seine Preise?",
        blocks: [
          {
            type: "p",
            text: "Ein Pflegedienst rechnet entweder nach **Leistungskomplexen** (feste Pakete wie „große Körperpflege“) oder nach **Zeit** ab. Die Preise dafür verhandelt jeder Dienst einzeln mit den Pflegekassen und Sozialhilfeträgern (§ 89 SGB XI).",
          },
          {
            type: "p",
            text: "Ein Leistungskomplex bündelt Tätigkeiten, die zusammengehören. Bei der großen Körperpflege sind das zum Beispiel An- und Auskleiden, Waschen oder Duschen und Mundpflege. Jeder Komplex ist mit Punkten bewertet. Punkte mal vereinbarter Punktwert ergibt den Preis. Bei der Zeitvergütung zählt dagegen die tatsächlich benötigte Zeit.",
          },
          {
            type: "p",
            text: "Wichtig für Sie: Der Pflegedienst darf nicht je nach Kasse unterschiedliche Preise verlangen. Das Gesetz verbietet eine Unterscheidung der Vergütung nach Kostenträgern. Weil aber jeder Dienst eigene Vereinbarungen hat, können zwei Dienste in Bergedorf für dieselbe Leistung unterschiedlich viel berechnen.",
          },
          {
            type: "ul",
            items: [
              "**Körperpflege:** Waschen, Duschen, Baden, An- und Auskleiden, Mund- und Zahnpflege",
              "**Ernährung:** Mahlzeiten mundgerecht vorbereiten, Hilfe beim Essen und Trinken",
              "**Mobilität:** Aufstehen, Zubettgehen, Lagern, Begleitung innerhalb der Wohnung",
              "**Hauswirtschaft:** Einkaufen, Wäsche, Reinigen des Wohnbereichs",
              "**Pauschalen:** zum Beispiel für die Anfahrt – je nach Vereinbarung des Dienstes",
            ],
          },
          {
            type: "p",
            text: "Inhalt und Zuschnitt der Leistungskomplexe unterscheiden sich zwischen den Bundesländern. Was genau in Hamburg zu einem Komplex gehört und was er kostet, steht im Kostenvoranschlag Ihres Pflegedienstes.",
          },
        ],
      },
      {
        h2: "Was kostet ein einzelner Einsatz des Pflegedienstes?",
        blocks: [
          {
            type: "p",
            text: "Einen festen Preis pro Einsatz gibt es nicht: Er ergibt sich aus den gebuchten Leistungskomplexen oder Minuten plus einer möglichen Anfahrtspauschale. Den genauen Betrag nennt Ihnen der Pflegedienst im schriftlichen Kostenvoranschlag.",
          },
          {
            type: "p",
            text: "Als grobe Orientierung gilt: Ein kurzer Einsatz, etwa für Kompressionsstrümpfe oder eine Medikamentengabe, kostet deutlich weniger als eine umfassende Morgenpflege mit Duschen, Anziehen und Frühstück. Pauschale Euro-Angaben aus dem Internet stammen oft aus anderen Bundesländern und helfen deshalb wenig.",
          },
          {
            type: "p",
            text: "Behandlungspflege nach ärztlicher Verordnung – etwa Verbandswechsel oder Insulingabe – rechnet der Pflegedienst getrennt mit der **Krankenkasse** ab (§ 37 SGB V). Sie belastet Ihr Pflegesachleistungsbudget nicht. Dafür fällt die gesetzliche Zuzahlung an: 10 % der Kosten für höchstens 28 Tage im Jahr plus 10 € je Verordnung, sofern Sie nicht befreit sind. Mehr dazu lesen Sie im Beitrag [Behandlungspflege über die Krankenkasse](/ratgeber/behandlungspflege-krankenkasse/).",
          },
        ],
      },
      {
        h2: "Was zahlt die Pflegekasse für den Pflegedienst?",
        blocks: [
          {
            type: "p",
            text: "Die Pflegekasse zahlt ab Pflegegrad 2 die Rechnung des Pflegedienstes bis zum Höchstbetrag Ihres Pflegegrads direkt an den Dienst. Bei Pflegegrad 1 gibt es keine Pflegesachleistung, aber den Entlastungsbetrag von 131 € im Monat.",
          },
          {
            type: "p",
            text: "Bei Pflegegrad 1 dürfen Sie den Entlastungsbetrag ausnahmsweise auch für Körperpflege durch einen ambulanten Pflegedienst einsetzen, etwa für Hilfe beim Duschen. Ab Pflegegrad 2 ist das nicht möglich: Dann ist der Entlastungsbetrag für anerkannte Angebote wie Hilfe im Haushalt oder Betreuung gedacht.",
          },
          {
            type: "p",
            text: "Daneben gibt es weitere Töpfe, die mit dem Pflegedienst nichts zu tun haben, aber die Haushaltskasse entlasten: Pflegehilfsmittel zum Verbrauch bis 42 € im Monat und Zuschüsse für den Umbau der Wohnung bis 4.180 € je Maßnahme. Eine Übersicht aller Beträge finden Sie unter [Pflegegrad 1 bis 5: alle Leistungen](/ratgeber/pflegegrade-leistungen/).",
          },
          {
            type: "cta",
            text: "Sie wohnen in Bergedorf, Lohbrügge, Billstedt, Horn oder Jenfeld? TwinsCare kommt zur kostenlosen Erstberatung zu Ihnen nach Hause und erstellt vor dem ersten Einsatz einen schriftlichen Kostenvoranschlag – damit Sie wissen, was die Kasse zahlt und was nicht.",
          },
        ],
      },
      {
        h2: "Wie hoch ist der Eigenanteil beim Pflegedienst?",
        blocks: [
          {
            type: "p",
            text: "Ihr Eigenanteil ist die Differenz zwischen der Monatsrechnung des Pflegedienstes und dem Sachleistungsbetrag Ihres Pflegegrads. Bleibt die Rechnung darunter, zahlen Sie für die Pflege nichts dazu.",
          },
          {
            type: "p",
            text: "Ein Rechenbeispiel mit Pflegegrad 3 macht das greifbar. Die Rechnungsbeträge sind frei angenommen und dienen nur zur Veranschaulichung.",
          },
          {
            type: "table",
            caption: "Rechenbeispiel Pflegegrad 3 (Sachleistung 1.497 €) – Rechnungsbeträge angenommen",
            head: ["", "Fall A: viel Hilfe", "Fall B: weniger Hilfe"],
            rows: [
              ["Monatsrechnung Pflegedienst (angenommen)", "1.650,00 €", "1.200,00 €"],
              ["Pflegekasse zahlt", "1.497,00 €", "1.200,00 €"],
              ["Ihr Eigenanteil für die Pflege", "153,00 €", "0,00 €"],
              ["Genutzter Anteil der Sachleistung", "100 %", "rund 80,2 %"],
              ["Anteiliges Pflegegeld zusätzlich", "0,00 €", "rund 119 € (19,8 % von 599 €)"],
            ],
          },
          {
            type: "p",
            text: "Fall B zeigt die **Kombinationsleistung** nach § 38 SGB XI: Nutzen Sie die Sachleistung nicht voll, zahlt die Kasse den Rest anteilig als Pflegegeld aus. Wie das genau funktioniert, erklärt der Beitrag [Pflegesachleistung oder Pflegegeld](/ratgeber/pflegesachleistung-oder-pflegegeld/).",
          },
          {
            type: "p",
            text: "Zusätzliche Wünsche, die über den Pflegebedarf hinausgehen, zahlen Sie immer selbst. Ein guter Kostenvoranschlag trennt deshalb klar zwischen Kassenleistungen und privaten Leistungen.",
          },
        ],
      },
      {
        h2: "Welche Leistungen senken die Kosten zusätzlich?",
        blocks: [
          {
            type: "p",
            text: "Neben der Pflegesachleistung stehen Ihnen vor allem der Entlastungsbetrag (131 € im Monat) und der Gemeinsame Jahresbetrag für Verhinderungs- und Kurzzeitpflege (bis 3.539 € im Jahr) zur Verfügung. Viele Familien nutzen diese Töpfe nicht vollständig.",
          },
          {
            type: "ul",
            items: [
              "**Entlastungsbetrag (§ 45b SGB XI):** 131 € im Monat für anerkannte Angebote. Nicht genutzte Beträge können Sie bis zum 30. Juni des Folgejahres verwenden. Details im Beitrag [Entlastungsbetrag 131 Euro](/ratgeber/entlastungsbetrag-131-euro/).",
              "**Umwandlungsanspruch (§ 45a Abs. 4 SGB XI):** Bis zu 40 % der nicht genutzten Sachleistung können für anerkannte Angebote zur Unterstützung im Alltag verwendet werden.",
              "**Verhinderungspflege (§ 39 SGB XI):** Fällt die private Pflegeperson aus, zahlt die Kasse ab Pflegegrad 2 aus dem Jahresbetrag von bis zu 3.539 €. Mehr unter [Verhinderungspflege](/leistungen/verhinderungspflege/).",
              "**Pflegehilfsmittel:** Einmalhandschuhe, Desinfektionsmittel oder Bettschutzeinlagen bis 42 € im Monat.",
            ],
          },
        ],
      },
      {
        h2: "Was muss im Kostenvoranschlag und Pflegevertrag stehen?",
        blocks: [
          {
            type: "p",
            text: "Im Pflegevertrag müssen Art, Inhalt und Umfang der Leistungen sowie die mit den Kassen vereinbarte Vergütung für jede Leistung oder jeden Leistungskomplex einzeln stehen (§ 120 SGB XI). Über die voraussichtlichen Kosten muss der Dienst Sie vor Vertragsschluss schriftlich informieren.",
          },
          {
            type: "p",
            text: "Die Verbraucherzentrale rät, sich vor dem ersten Einsatz einen schriftlichen Kostenvoranschlag geben zu lassen. Er sollte zeigen, was jede Leistung kostet, wie viel die Pflegekasse übernimmt und welchen Eigenanteil Sie tragen.",
          },
          {
            type: "ul",
            items: [
              "Jede Leistung einzeln mit Preis aufgeführt",
              "Häufigkeit pro Woche und Monat nachvollziehbar",
              "Anfahrts- oder sonstige Pauschalen ausgewiesen",
              "Anteil der Pflegekasse und Ihr Eigenanteil getrennt",
              "Private Zusatzleistungen deutlich gekennzeichnet",
              "Hinweis auf Ihr Kündigungsrecht: jederzeit ohne Frist (§ 120 Abs. 2 SGB XI)",
            ],
          },
          {
            type: "p",
            text: "Ändert sich der Pflegebedarf, muss der Dienst Sie erneut schriftlich über die Kosten informieren. Halten Sie Änderungen immer schriftlich fest. Weitere Prüfpunkte finden Sie in unserer [Checkliste zur Pflegedienst-Suche](/ratgeber/pflegedienst-finden-checkliste/).",
          },
          {
            type: "p",
            text: "Prüfen Sie außerdem jeden Monat den Leistungsnachweis, den Sie oder Ihre Angehörigen unterschreiben. Darauf stehen die erbrachten Einsätze. Stimmen Nachweis und Rechnung nicht überein, sprechen Sie den Pflegedienst direkt an. Bleiben Fragen offen, hilft Ihre Pflegekasse weiter.",
          },
        ],
      },
      {
        h2: "Was tun, wenn der Betrag der Pflegekasse nicht reicht?",
        blocks: [
          {
            type: "p",
            text: "Reicht die Sachleistung nicht, lohnt sich zuerst ein Blick auf die Einsatzplanung und auf ungenutzte Leistungen wie den Entlastungsbetrag. Hat sich der Zustand verschlechtert, können Sie bei der Pflegekasse einen höheren Pflegegrad beantragen.",
          },
          {
            type: "ol",
            items: [
              "Einsatzplan mit dem Pflegedienst durchgehen: Welche Leistungen sind wirklich nötig, welche können Angehörige übernehmen?",
              "Prüfen, ob Entlastungsbetrag, Umwandlungsanspruch und Verhinderungspflege schon genutzt werden.",
              "Bei gestiegenem Hilfebedarf einen Antrag auf Höherstufung stellen – wie das geht, steht unter [Pflegegrad beantragen in Hamburg](/ratgeber/pflegegrad-beantragen-hamburg/).",
              "Kostenlose, neutrale Beratung nutzen, etwa beim Pflegestützpunkt Ihres Bezirks oder über unsere [Pflegeberatung](/leistungen/pflegeberatung/).",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Was kostet ein Pflegedienst, wenn man keinen Pflegegrad hat?",
        a: "Ohne Pflegegrad zahlen Sie die Leistungen der Grundpflege selbst. Stellen Sie deshalb früh einen Antrag bei der Pflegekasse, denn Leistungen gibt es erst ab dem Monat der Antragstellung.",
      },
      {
        q: "Rechnet der Pflegedienst direkt mit der Pflegekasse ab?",
        a: "Ja. Bei der Pflegesachleistung rechnet der Pflegedienst direkt mit der Pflegekasse ab. Sie erhalten nur für den Teil eine Rechnung, der über Ihrem monatlichen Betrag liegt, und für private Zusatzleistungen.",
      },
      {
        q: "Sind die Preise bei allen Pflegediensten in Hamburg gleich?",
        a: "Nein. Jeder Pflegedienst verhandelt seine Vergütung einzeln mit den Kostenträgern (§ 89 SGB XI). Deshalb können Preise für dieselbe Leistung zwischen Diensten abweichen.",
      },
      {
        q: "Zahlt die Pflegekasse auch die Behandlungspflege?",
        a: "Nein, Behandlungspflege wie Verbandswechsel oder Medikamentengabe zahlt die Krankenkasse bei ärztlicher Verordnung (§ 37 SGB V). Dafür fällt eine gesetzliche Zuzahlung an, von der Sie sich befreien lassen können.",
      },
      {
        q: "Kann ich den Vertrag mit dem Pflegedienst kündigen, wenn er zu teuer ist?",
        a: "Ja. Pflegebedürftige können den Pflegevertrag jederzeit ohne Einhaltung einer Frist kündigen (§ 120 Abs. 2 SGB XI).",
      },
    ],
    leistung: "ambulante-pflege",
    verwandt: ["pflegesachleistung-oder-pflegegeld", "kosten-duschen-pflegedienst", "pflegegrade-leistungen"],
    quellen: [Q_SGB11_89, Q_SGB11_120, Q_BMG_BROSCHUERE, Q_VZ_PFLEGEVERTRAG, Q_BMG_PG1],
  },

  // ───────────────────────────────────────────── 2
  {
    slug: "kosten-duschen-pflegedienst",
    cluster: "kosten",
    h1: "Was kostet einmal Duschen vom Pflegedienst?",
    metaTitle: "Duschen vom Pflegedienst: Kosten und Kassenanteil",
    metaDescription:
      "Was kostet einmal Duschen beim Pflegedienst? Wie der Preis entsteht, was die Pflegekasse ab Pflegegrad 1 zahlt und wann Sie selbst zahlen – einfach erklärt.",
    lead:
      "Hilfe beim Duschen ist einer der häufigsten Gründe, einen Pflegedienst zu holen. Was ein Einsatz kostet und wer ihn bezahlt, hängt vor allem von Ihrem Pflegegrad ab.",
    veroeffentlicht: DATUM,
    aktualisiert: DATUM,
    lesezeit: 7,
    kurz: [
      "Einen bundes- oder hamburgweit einheitlichen Preis für einmal Duschen gibt es nicht – er richtet sich nach der Vergütungsvereinbarung des jeweiligen Pflegedienstes.",
      "Ab Pflegegrad 2 zahlt die Pflegekasse das Duschen aus der Pflegesachleistung von 796 € bis 2.299 € im Monat.",
      "Bei Pflegegrad 1 können Sie den Entlastungsbetrag von 131 € im Monat für Hilfe beim Duschen durch einen Pflegedienst nutzen.",
      "Für den Umbau zur bodengleichen Dusche gibt es bis zu 4.180 € Zuschuss je Maßnahme.",
    ],
    foto: {
      id: "photo-1676281050264-178eff38874a",
      alt: "Pflegekraft unterstützt eine Frau im Pflegebett",
    },
    sections: [
      {
        h2: "Was kostet einmal Duschen vom Pflegedienst?",
        blocks: [
          {
            type: "p",
            text: "Der Preis für einmal Duschen ergibt sich aus dem Leistungskomplex „große Körperpflege“ oder der benötigten Zeit, oft zuzüglich einer Anfahrtspauschale. Den genauen Betrag nennt Ihnen der Pflegedienst im schriftlichen Kostenvoranschlag.",
          },
          {
            type: "p",
            text: "Viele Angehörige suchen nach einer festen Zahl. Die gibt es aus gutem Grund nicht. Jeder Pflegedienst verhandelt seine Preise einzeln mit den Pflegekassen und Sozialhilfeträgern (§ 89 SGB XI). Zahlen aus Vergleichsportalen beziehen sich häufig auf andere Bundesländer mit anderen Leistungskomplexen.",
          },
          {
            type: "p",
            text: "Die gute Nachricht: Mit Pflegegrad zahlen Sie in vielen Fällen gar nichts für das Duschen. Die Pflegekasse übernimmt die Kosten im Rahmen Ihres Monatsbetrags.",
          },
          {
            type: "ul",
            items: [
              "Welcher Leistungskomplex oder welche Zeit ist für das Duschen vorgesehen?",
              "Ist das Anziehen, Haare waschen oder Eincremen enthalten?",
              "Wird eine Anfahrtspauschale berechnet?",
              "Wie viel übernimmt die Pflegekasse, und bleibt ein Eigenanteil?",
            ],
          },
        ],
      },
      {
        h2: "Wie rechnet der Pflegedienst das Duschen ab?",
        blocks: [
          {
            type: "p",
            text: "Duschen gehört in der Regel zum Leistungskomplex „große Körperpflege“, der als Paket mit festem Punktwert abgerechnet wird. Alternativ kann nach Zeit abgerechnet werden, wenn der Dienst das anbietet.",
          },
          {
            type: "p",
            text: "Ein Leistungskomplex bündelt Tätigkeiten, die zusammengehören. Wie die Pakete genau zugeschnitten sind, unterscheidet sich zwischen den Bundesländern. Die folgende Tabelle zeigt typische Inhalte – maßgeblich ist der Kostenvoranschlag Ihres Pflegedienstes.",
          },
          {
            type: "table",
            caption: "Typischer Inhalt der „großen Körperpflege“ (Beispiel, je nach Vereinbarung abweichend)",
            head: ["Tätigkeit", "Meist enthalten?"],
            rows: [
              ["An- und Auskleiden", "ja"],
              ["Duschen, Baden oder Ganzkörperwaschung", "ja"],
              ["Mund- und Zahnpflege", "ja"],
              ["Kämmen, Rasieren", "oft, je nach Paket"],
              ["Haare waschen und trocknen", "oft, je nach Paket"],
              ["Hilfe beim Aufstehen und Bettmachen", "teilweise eigener Komplex"],
              ["Anfahrt", "meist eigene Pauschale"],
            ],
          },
          {
            type: "p",
            text: "Fragen Sie im Erstgespräch gezielt nach: Was ist im Paket enthalten, was kostet extra und wie lange plant die Pflegekraft ein?",
          },
          {
            type: "p",
            text: "Bei einem Leistungskomplex zahlen Sie einen festen Betrag, egal ob das Duschen an einem Tag schneller oder langsamer geht. Bei der Zeitvergütung zählen die tatsächlichen Minuten. Welche Variante günstiger ist, hängt vom Einzelfall ab – lassen Sie sich beide Wege erklären, wenn der Dienst sie anbietet.",
          },
        ],
      },
      {
        h2: "Zahlt die Pflegekasse das Duschen durch den Pflegedienst?",
        blocks: [
          {
            type: "p",
            text: "Ja, ab Pflegegrad 2 zahlt die Pflegekasse das Duschen als Pflegesachleistung direkt an den Pflegedienst. Bei Pflegegrad 1 können Sie dafür den Entlastungsbetrag von 131 € im Monat einsetzen.",
          },
          {
            type: "table",
            caption: "Wer zahlt das Duschen durch den Pflegedienst? (Stand 2026)",
            head: ["Pflegegrad", "Budget für Körperpflege durch den Pflegedienst", "Abrechnung"],
            rows: [
              ["ohne Pflegegrad", "kein Budget", "private Rechnung"],
              ["Pflegegrad 1", "Entlastungsbetrag bis 131 € im Monat", "Erstattung oder Abtretung an den Dienst"],
              ["Pflegegrad 2", "Pflegesachleistung bis 796 € im Monat", "direkt mit der Pflegekasse"],
              ["Pflegegrad 3", "Pflegesachleistung bis 1.497 € im Monat", "direkt mit der Pflegekasse"],
              ["Pflegegrad 4", "Pflegesachleistung bis 1.859 € im Monat", "direkt mit der Pflegekasse"],
              ["Pflegegrad 5", "Pflegesachleistung bis 2.299 € im Monat", "direkt mit der Pflegekasse"],
            ],
          },
          {
            type: "p",
            text: "Ab Pflegegrad 2 dürfen Sie den Entlastungsbetrag nicht für Körperpflege verwenden, sondern zum Beispiel für Hilfe im Haushalt. Das Duschen läuft dann über die Sachleistung.",
          },
          {
            type: "p",
            text: "Sie müssen dafür nichts vorstrecken. Der Pflegedienst rechnet monatlich direkt mit der Pflegekasse ab. Sie bestätigen die erbrachten Einsätze auf einem Leistungsnachweis. Eine Rechnung erhalten Sie nur für Beträge, die über Ihrem Monatsbudget liegen.",
          },
        ],
      },
      {
        h2: "Wie oft im Monat ist Duschen mit der Pflegekasse möglich?",
        blocks: [
          {
            type: "p",
            text: "Wie oft Duschen im Kassenbetrag enthalten ist, hängt vom Preis Ihres Pflegedienstes und von den übrigen Leistungen ab. Das folgende Rechenbeispiel zeigt, wie viel Spielraum der Monatsbetrag lässt.",
          },
          {
            type: "p",
            text: "Ein Rechenbeispiel zur Veranschaulichung: Wir nehmen einen Preis von 40 € je Duscheinsatz inklusive Anfahrt an. Das ist eine frei gewählte Rechengröße, kein Hamburger Preis. Ihren tatsächlichen Preis entnehmen Sie dem Kostenvoranschlag.",
          },
          {
            type: "table",
            caption: "Rechenbeispiel mit angenommenen 40 € je Einsatz (rund 4,3 Wochen pro Monat)",
            head: ["Häufigkeit", "Kosten pro Monat (angenommen)", "PG 2: 796 €", "PG 1: 131 €"],
            rows: [
              ["1-mal pro Woche", "rund 172 €", "voll gedeckt", "rund 41 € Eigenanteil"],
              ["2-mal pro Woche", "rund 344 €", "voll gedeckt", "rund 213 € Eigenanteil"],
              ["3-mal pro Woche", "rund 516 €", "voll gedeckt", "rund 385 € Eigenanteil"],
            ],
          },
          {
            type: "p",
            text: "Bleibt bei Pflegegrad 2 bis 5 ein Teil der Sachleistung ungenutzt, zahlt die Pflegekasse den Rest anteilig als Pflegegeld aus. Diese Kombinationsleistung erklären wir im Beitrag [Pflegesachleistung oder Pflegegeld](/ratgeber/pflegesachleistung-oder-pflegegeld/).",
          },
          {
            type: "cta",
            text: "Sie brauchen Unterstützung beim Duschen in Bergedorf, Lohbrügge oder Hamburg-Ost? TwinsCare berät Sie kostenlos zu Hause, nennt Ihnen vorab den genauen Preis im schriftlichen Kostenvoranschlag und rechnet direkt mit der Pflegekasse ab.",
          },
        ],
      },
      {
        h2: "Was kostet Duschen mit Pflegegrad 1?",
        blocks: [
          {
            type: "p",
            text: "Mit Pflegegrad 1 stehen Ihnen 131 € im Monat aus dem Entlastungsbetrag zur Verfügung, die Sie auch für Hilfe beim Duschen durch einen zugelassenen Pflegedienst nutzen dürfen. Was darüber hinausgeht, zahlen Sie selbst.",
          },
          {
            type: "p",
            text: "Diese Ausnahme gilt nur für Pflegegrad 1. Das Bundesgesundheitsministerium weist ausdrücklich darauf hin, dass der Entlastungsbetrag hier auch für Unterstützung bei der Körperpflege eingesetzt werden kann. Einen Anspruch auf Pflegesachleistung haben Sie bei Pflegegrad 1 nicht.",
          },
          {
            type: "ul",
            items: [
              "Nicht genutzte Beträge sammeln sich an und können bis zum 30. Juni des Folgejahres verwendet werden.",
              "So können Sie zum Beispiel in Monaten mit mehr Bedarf auf angesparte Beträge zurückgreifen.",
              "Zusätzlich gibt es bei Pflegegrad 1 Pflegehilfsmittel bis 42 € im Monat und Zuschüsse für Umbauten.",
            ],
          },
          {
            type: "p",
            text: "Mehr zum Entlastungsbetrag lesen Sie im Beitrag [Entlastungsbetrag 131 Euro](/ratgeber/entlastungsbetrag-131-euro/).",
          },
        ],
      },
      {
        h2: "Was kostet Duschen vom Pflegedienst ohne Pflegegrad?",
        blocks: [
          {
            type: "p",
            text: "Ohne Pflegegrad zahlen Sie das Duschen durch den Pflegedienst vollständig selbst. Deshalb sollten Sie so früh wie möglich einen Pflegegrad beantragen, denn Leistungen gibt es erst ab dem Monat der Antragstellung.",
          },
          {
            type: "p",
            text: "Der Antrag ist formlos möglich, auch telefonisch bei Ihrer Pflegekasse. Für einen sicheren Nachweis des Datums empfiehlt die Verbraucherzentrale aber Fax, E-Mail oder Brief. Wie es danach weitergeht, zeigt unser Beitrag [Pflegegrad beantragen in Hamburg](/ratgeber/pflegegrad-beantragen-hamburg/).",
          },
          {
            type: "p",
            text: "Ob die Hilfe beim Duschen schon für einen Pflegegrad reicht, können Sie mit unserem [Pflegegrad-Rechner](/pflegegrad-rechner/) grob einschätzen. Die Entscheidung trifft die Pflegekasse nach der Begutachtung durch den Medizinischen Dienst.",
          },
        ],
      },
      {
        h2: "Welche Hilfen machen das Duschen zu Hause sicherer?",
        blocks: [
          {
            type: "p",
            text: "Haltegriffe, ein Duschhocker und eine bodengleiche Dusche senken das Sturzrisiko deutlich. Für Umbauten wie eine barrierefreie Dusche zahlt die Pflegekasse bis zu 4.180 € je Maßnahme, schon ab Pflegegrad 1.",
          },
          {
            type: "ul",
            items: [
              "Rutschfeste Matte in und vor der Dusche",
              "Haltegriffe an der Wand neben Dusche und WC",
              "Duschhocker oder Duschklappsitz",
              "Bodengleiche Dusche statt Wanne – den Zuschuss vor Beginn des Umbaus mit der Pflegekasse klären",
              "Ausreichend Licht und warme Raumtemperatur",
              "Handtücher, Kleidung und Pflegeprodukte vorher griffbereit legen",
            ],
          },
          {
            type: "p",
            text: "Wohnen mehrere Pflegebedürftige zusammen, kann der Zuschuss für eine gemeinsame Maßnahme bis zu 16.720 € betragen. Bei der Antragstellung hilft Ihnen unsere [Pflegeberatung](/leistungen/pflegeberatung/).",
          },
        ],
      },
      {
        h2: "Wie oft sollte ein Pflegedienst beim Duschen helfen?",
        blocks: [
          {
            type: "p",
            text: "Eine feste Regel gibt es nicht: Wie oft geduscht wird, richtet sich nach Wunsch, Gewohnheit, Hautzustand und Kraft der pflegebedürftigen Person. An den übrigen Tagen reicht oft eine Waschung am Waschbecken.",
          },
          {
            type: "p",
            text: "Viele Familien beginnen mit ein oder zwei Duscheinsätzen pro Woche und passen den Plan später an. Die Pflegekraft achtet dabei auf Hautveränderungen und gibt Hinweise zur Hautpflege. Den Einsatzplan legen Sie gemeinsam mit dem Pflegedienst fest und können ihn jederzeit anpassen. Mehr zu unseren Leistungen finden Sie unter [ambulante Pflege](/leistungen/ambulante-pflege/).",
          },
        ],
      },
      {
        h2: "Wie finde ich in Bergedorf und Hamburg-Ost einen Pflegedienst zum Duschen?",
        blocks: [
          {
            type: "p",
            text: "Fragen Sie bei ambulanten Pflegediensten in Ihrer Nähe nach freien Kapazitäten, einer kostenlosen Erstberatung und einem schriftlichen Kostenvoranschlag. Wichtig ist, dass der Dienst von den Pflegekassen zugelassen ist und direkt abrechnet.",
          },
          {
            type: "p",
            text: "TwinsCare ist in Bergedorf, Lohbrügge, Billstedt, Horn und Jenfeld sowie in Oststeinbek, Glinde, Reinbek und Wentorf unterwegs. Unser Büro liegt an der Bergedorfer Straße 85. Wir kommen zur Erstberatung zu Ihnen, besprechen Wünsche und Gewohnheiten beim Duschen und nennen Ihnen vor dem ersten Einsatz schriftlich die Kosten.",
          },
          {
            type: "p",
            text: "Ein kleines, festes Team sorgt dafür, dass möglichst dieselben Pflegekräfte kommen. Gerade beim Duschen ist Vertrauen wichtig. Passt es trotzdem nicht, können Sie den Pflegevertrag jederzeit ohne Frist kündigen (§ 120 Abs. 2 SGB XI). Weitere Tipps enthält unsere [Checkliste zur Pflegedienst-Suche](/ratgeber/pflegedienst-finden-checkliste/). Ihre Anfrage können Sie direkt über [Pflege anfragen](/pflege-anfragen/) stellen.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Übernimmt die Krankenkasse das Duschen durch den Pflegedienst?",
        a: "In der Regel nicht. Hilfe beim Duschen ist Grundpflege und wird über die Pflegekasse abgerechnet – ab Pflegegrad 2 als Pflegesachleistung, bei Pflegegrad 1 über den Entlastungsbetrag.",
      },
      {
        q: "Kann ich mit Pflegegrad 1 einen Pflegedienst zum Duschen bekommen?",
        a: "Ja. Bei Pflegegrad 1 dürfen Sie den Entlastungsbetrag von 131 € im Monat auch für Körperpflege durch einen zugelassenen Pflegedienst verwenden.",
      },
      {
        q: "Wie lange dauert ein Duscheinsatz des Pflegedienstes?",
        a: "Das hängt vom Hilfebedarf ab und davon, ob Anziehen, Haare waschen oder Hautpflege dazugehören. Die geplante Zeit oder den Leistungsumfang sollte der Kostenvoranschlag nennen.",
      },
      {
        q: "Muss ich für das Duschen eine Rechnung bezahlen?",
        a: "Nur wenn die Kosten eines Monats über Ihrem Kassenbetrag liegen oder Sie keinen Pflegegrad haben. Sonst rechnet der Pflegedienst direkt mit der Pflegekasse ab.",
      },
      {
        q: "Zahlt die Pflegekasse einen Duschstuhl?",
        a: "Hilfsmittel wie Duschhocker oder Haltegriffe können über Pflege- oder Krankenkasse beantragt werden. Für einen größeren Umbau wie eine bodengleiche Dusche gibt es bis zu 4.180 € Zuschuss je Maßnahme.",
      },
    ],
    leistung: "ambulante-pflege",
    verwandt: ["was-kostet-ein-pflegedienst", "entlastungsbetrag-131-euro", "pflegesachleistung-oder-pflegegeld"],
    quellen: [Q_BMG_PG1, Q_BMG_BROSCHUERE, Q_SGB11_89, Q_VZ_ANTRAG],
  },

  // ───────────────────────────────────────────── 3
  {
    slug: "pflegesachleistung-oder-pflegegeld",
    cluster: "kosten",
    h1: "Pflegesachleistung, Pflegegeld oder Kombinationsleistung – was passt zu Ihnen?",
    metaTitle: "Pflegesachleistung oder Pflegegeld? Kombi 2026",
    metaDescription:
      "Pflegesachleistung, Pflegegeld oder beides? Unterschiede, Beträge 2026 und ein Rechenbeispiel zur Kombinationsleistung – so nutzen Sie Ihren Pflegegrad gut.",
    lead:
      "Ab Pflegegrad 2 können Sie wählen: Geld für die Pflege durch Angehörige, Sachleistung für einen Pflegedienst – oder eine Mischung aus beidem. Wir erklären die Unterschiede und rechnen die Kombination Schritt für Schritt vor.",
    veroeffentlicht: DATUM,
    aktualisiert: DATUM,
    lesezeit: 8,
    kurz: [
      "Pflegegeld (§ 37 SGB XI) bekommen Sie aufs Konto, wenn Angehörige pflegen: 347 € bis 990 € im Monat.",
      "Pflegesachleistung (§ 36 SGB XI) zahlt die Kasse direkt an den Pflegedienst: 796 € bis 2.299 € im Monat.",
      "Bei der Kombinationsleistung (§ 38 SGB XI) mindert sich das Pflegegeld um den Prozentsatz der genutzten Sachleistung.",
      "Beispiel Pflegegrad 3: 40 % Sachleistung genutzt, dann gibt es noch 60 % des Pflegegelds, also 359,40 €.",
      "An das gewählte Verhältnis sind Sie sechs Monate gebunden.",
    ],
    foto: {
      id: "photo-1702648156180-25d8be9c9527",
      alt: "Mann und Frau sitzen gemeinsam auf dem Sofa",
    },
    sections: [
      {
        h2: "Was ist der Unterschied zwischen Pflegegeld und Pflegesachleistung?",
        blocks: [
          {
            type: "p",
            text: "Pflegegeld ist Geld für die pflegebedürftige Person, wenn Angehörige oder Bekannte die Pflege übernehmen. Pflegesachleistung ist ein Budget, mit dem die Pflegekasse einen zugelassenen Pflegedienst direkt bezahlt.",
          },
          {
            type: "table",
            caption: "Pflegegeld und Pflegesachleistung im Vergleich",
            head: ["", "Pflegegeld (§ 37 SGB XI)", "Pflegesachleistung (§ 36 SGB XI)"],
            rows: [
              ["Wer pflegt?", "Angehörige, Freunde, Nachbarn", "zugelassener ambulanter Pflegedienst"],
              ["Wohin fließt das Geld?", "auf das Konto der pflegebedürftigen Person", "direkt an den Pflegedienst"],
              ["Höhe", "347 € bis 990 €", "796 € bis 2.299 €"],
              ["Ab Pflegegrad", "2", "2"],
              ["Pflichttermin", "Beratungseinsatz nach § 37 Abs. 3", "keiner"],
              ["Nachweis über Verwendung", "nicht nötig", "Abrechnung des Dienstes"],
            ],
          },
          {
            type: "p",
            text: "Die Sachleistung ist deutlich höher als das Pflegegeld. Der Grund: Mit ihr werden professionelle Fachkräfte bezahlt. Das Pflegegeld ist eine Anerkennung für die private Pflege und frei verwendbar.",
          },
          {
            type: "p",
            text: "Viele Pflegebedürftige geben das Pflegegeld als Anerkennung an die Angehörigen weiter, die sie pflegen. Einen Nachweis, wofür das Geld ausgegeben wird, verlangt die Pflegekasse nicht. Sie muss aber sicher sein, dass die Pflege zu Hause funktioniert – dafür gibt es den Beratungseinsatz.",
          },
        ],
      },
      {
        h2: "Wie hoch sind Pflegegeld und Pflegesachleistung 2026?",
        blocks: [
          {
            type: "p",
            text: "2026 beträgt das Pflegegeld 347 € (PG 2), 599 € (PG 3), 800 € (PG 4) und 990 € (PG 5) im Monat. Die Pflegesachleistung liegt bei 796 €, 1.497 €, 1.859 € und 2.299 €.",
          },
          {
            type: "table",
            caption: "Monatsbeträge 2026 (gültig seit 01.01.2025)",
            head: ["Pflegegrad", "Pflegegeld", "Pflegesachleistung"],
            rows: [
              ["Pflegegrad 1", "–", "–"],
              ["Pflegegrad 2", "347 €", "796 €"],
              ["Pflegegrad 3", "599 €", "1.497 €"],
              ["Pflegegrad 4", "800 €", "1.859 €"],
              ["Pflegegrad 5", "990 €", "2.299 €"],
            ],
          },
          {
            type: "p",
            text: "Bei Pflegegrad 1 gibt es weder Pflegegeld noch Sachleistung. Hier steht der Entlastungsbetrag von 131 € im Monat im Mittelpunkt. Alle Leistungen je Pflegegrad finden Sie unter [Pflegegrad 1 bis 5: alle Leistungen](/ratgeber/pflegegrade-leistungen/).",
          },
        ],
      },
      {
        h2: "Was ist die Kombinationsleistung?",
        blocks: [
          {
            type: "p",
            text: "Die Kombinationsleistung nach § 38 SGB XI verbindet Pflegedienst und Angehörigenpflege: Nutzen Sie die Sachleistung nur teilweise, erhalten Sie daneben ein anteiliges Pflegegeld. Das Pflegegeld wird um den Prozentsatz gemindert, zu dem Sie die Sachleistung genutzt haben.",
          },
          {
            type: "p",
            text: "Das ist in der Praxis das häufigste Modell. Der Pflegedienst übernimmt zum Beispiel morgens die Körperpflege. Den Rest des Tages kümmert sich die Tochter, der Ehemann oder eine Nachbarin. So kommt professionelle Hilfe ins Haus, und die Familie erhält trotzdem einen Teil des Pflegegelds.",
          },
          {
            type: "p",
            text: "Wichtig: An das gewählte Verhältnis von Geld- und Sachleistung sind Sie laut Gesetz sechs Monate gebunden. In der Praxis rechnet die Pflegekasse das anteilige Pflegegeld meist anhand der tatsächlichen Monatsabrechnung des Pflegedienstes aus.",
          },
          {
            type: "p",
            text: "Schwankt der Bedarf von Monat zu Monat, schwankt auch das anteilige Pflegegeld. Braucht Ihr Angehöriger im Winter mehr Hilfe als im Sommer, fällt das Pflegegeld in diesen Monaten entsprechend niedriger aus. Planen Sie deshalb mit etwas Puffer.",
          },
        ],
      },
      {
        h2: "Wie berechnet man die Kombinationsleistung?",
        blocks: [
          {
            type: "p",
            text: "Sie teilen die Rechnung des Pflegedienstes durch den Sachleistungsbetrag und erhalten den genutzten Prozentsatz. Der Rest in Prozent, angewendet auf das volle Pflegegeld, ergibt das anteilige Pflegegeld.",
          },
          {
            type: "ol",
            items: [
              "Pflegegrad 3: Die Sachleistung beträgt 1.497 €, das Pflegegeld 599 €.",
              "Der Pflegedienst rechnet im Monat 598,80 € ab. Das sind 40 % von 1.497 €.",
              "Es bleiben 60 % ungenutzt.",
              "60 % von 599 € Pflegegeld ergeben **359,40 €**.",
              "Ergebnis: Die Kasse zahlt 598,80 € an den Pflegedienst und 359,40 € Pflegegeld an Sie.",
            ],
          },
          {
            type: "table",
            caption: "Kombinationsleistung bei Pflegegrad 3 (Sachleistung 1.497 €, Pflegegeld 599 €)",
            head: ["Genutzte Sachleistung", "Betrag an den Pflegedienst", "Anteiliges Pflegegeld"],
            rows: [
              ["0 %", "0,00 €", "599,00 €"],
              ["20 %", "299,40 €", "479,20 €"],
              ["40 %", "598,80 €", "359,40 €"],
              ["60 %", "898,20 €", "239,60 €"],
              ["80 %", "1.197,60 €", "119,80 €"],
              ["100 %", "1.497,00 €", "0,00 €"],
            ],
          },
          {
            type: "p",
            text: "Ein zweites Beispiel mit Pflegegrad 2: Der Pflegedienst rechnet 398 € ab, also 50 % von 796 €. Dann erhalten Sie zusätzlich 50 % von 347 €, das sind 173,50 € Pflegegeld.",
          },
          {
            type: "cta",
            text: "Sie möchten wissen, welche Mischung für Ihre Familie passt? TwinsCare rechnet Ihnen bei einer kostenlosen Erstberatung zu Hause in Bergedorf und Hamburg-Ost vor, wie viel Sachleistung der Pflegedienst braucht und wie viel Pflegegeld bleibt.",
          },
        ],
      },
      {
        h2: "Wann lohnt sich Pflegegeld und wann ein Pflegedienst?",
        blocks: [
          {
            type: "p",
            text: "Pflegegeld lohnt sich, wenn Angehörige die Pflege verlässlich und dauerhaft leisten können. Ein Pflegedienst oder die Kombination ist sinnvoll, sobald Aufgaben körperlich schwer werden, Fachwissen nötig ist oder die Pflegeperson entlastet werden muss.",
          },
          {
            type: "ul",
            items: [
              "**Eher Pflegegeld:** Angehörige wohnen nah, haben Zeit und fühlen sich der Pflege gewachsen.",
              "**Eher Kombination:** Einzelne Aufgaben wie Duschen oder Anziehen sind schwierig, der Rest klappt in der Familie.",
              "**Eher volle Sachleistung:** Angehörige sind berufstätig, wohnen weit weg oder kommen an ihre Grenzen.",
              "**Immer prüfen:** Wer pflegt, wenn die Hauptpflegeperson krank wird oder Urlaub braucht? Dafür gibt es die [Verhinderungspflege](/leistungen/verhinderungspflege/).",
            ],
          },
          {
            type: "p",
            text: "Rechnen Sie nicht nur in Euro. Die Gesundheit der pflegenden Angehörigen ist ein wichtiger Teil der Entscheidung. Ein Pflegedienst, der zwei- oder dreimal pro Woche kommt, kann viel Druck nehmen.",
          },
          {
            type: "p",
            text: "Unabhängig vom gewählten Modell steht Ihnen der Entlastungsbetrag von 131 € im Monat zu. Ab Pflegegrad 2 können Sie ihn zum Beispiel für Hilfe im Haushalt durch anerkannte Anbieter einsetzen. Er wird nicht mit Pflegegeld oder Sachleistung verrechnet. Mehr dazu unter [Entlastungsleistungen](/leistungen/entlastungsleistungen/).",
          },
        ],
      },
      {
        h2: "Muss man bei Pflegegeld einen Beratungseinsatz machen?",
        blocks: [
          {
            type: "p",
            text: "Ja. Wer Pflegegeld bezieht, muss ab Pflegegrad 2 einmal im Halbjahr einen Beratungseinsatz nach § 37 Abs. 3 SGB XI abrufen. Bei Pflegegrad 4 und 5 ist zusätzlich ein Einsatz pro Quartal möglich. Die Kosten trägt die Pflegekasse.",
          },
          {
            type: "p",
            text: "Bei dem Beratungsbesuch schaut eine Pflegefachkraft, ob die Pflege zu Hause gut funktioniert, und gibt praktische Tipps. Er ist keine Kontrolle mit erhobenem Zeigefinger, sondern eine Hilfe. Den Beratungseinsatz bieten auch ambulante Pflegedienste an – auch TwinsCare. Mehr dazu unter [Pflegeberatung](/leistungen/pflegeberatung/).",
          },
          {
            type: "p",
            text: "Der Beratungseinsatz ist eine Pflicht, keine Kür. Planen Sie die Termine deshalb rechtzeitig ein und heben Sie die Bestätigung auf. Bei Pflegegrad 1 ist der Beratungsbesuch freiwillig und kann halbjährlich abgerufen werden.",
          },
        ],
      },
      {
        h2: "Was ist der Umwandlungsanspruch?",
        blocks: [
          {
            type: "p",
            text: "Mit dem Umwandlungsanspruch nach § 45a Abs. 4 SGB XI können Sie bis zu 40 % der nicht genutzten Pflegesachleistung für anerkannte Angebote zur Unterstützung im Alltag verwenden. Das gilt für Pflegegrad 2 bis 5.",
          },
          {
            type: "p",
            text: "Beispiel: Bei Pflegegrad 3 können bis zu 598,80 € (40 % von 1.497 €) umgewandelt werden, etwa für Alltagsbegleitung oder Hilfe im Haushalt durch anerkannte Anbieter. Der Umwandlungsanspruch besteht unabhängig vom Entlastungsbetrag. Lassen Sie sich vorher beraten, ob sich die Umwandlung in Ihrer Situation lohnt.",
          },
        ],
      },
      {
        h2: "Wie wechselt man zwischen Pflegegeld und Pflegedienst?",
        blocks: [
          {
            type: "p",
            text: "Sie teilen Ihrer Pflegekasse mit, dass Sie künftig einen Pflegedienst oder die Kombinationsleistung nutzen möchten. Der Pflegedienst rechnet dann direkt mit der Kasse ab, und die Kasse berechnet das anteilige Pflegegeld.",
          },
          {
            type: "ol",
            items: [
              "Pflegedienst auswählen und Erstberatung vereinbaren – unsere [Checkliste zur Pflegedienst-Suche](/ratgeber/pflegedienst-finden-checkliste/) hilft.",
              "Schriftlichen Kostenvoranschlag und Pflegevertrag prüfen.",
              "Pflegekasse über den Wechsel informieren.",
              "Nach den ersten Monaten prüfen, ob die Aufteilung passt.",
            ],
          },
          {
            type: "p",
            text: "Sind Sie mit dem Pflegedienst nicht zufrieden, können Sie den Pflegevertrag jederzeit ohne Frist kündigen (§ 120 Abs. 2 SGB XI).",
          },
        ],
      },
      {
        h2: "Was passiert mit dem Pflegegeld bei Verhinderungspflege?",
        blocks: [
          {
            type: "p",
            text: "Während einer Verhinderungs- oder Kurzzeitpflege zahlt die Pflegekasse für bis zu acht Wochen im Kalenderjahr die Hälfte des bisher bezogenen Pflegegelds weiter. Das gilt auch für das anteilige Pflegegeld bei der Kombinationsleistung (§ 38 SGB XI).",
          },
          {
            type: "p",
            text: "Die Kosten für die Ersatzpflege selbst zahlt die Kasse ab Pflegegrad 2 aus dem Gemeinsamen Jahresbetrag von bis zu 3.539 € im Kalenderjahr. Eine Vorpflegezeit ist seit dem 1. Juli 2025 nicht mehr nötig. Übernimmt ein Pflegedienst die Verhinderungspflege, belastet das Ihre monatliche Sachleistung nicht.",
          },
          {
            type: "p",
            text: "Ein Beispiel: Die pflegende Tochter fährt zwei Wochen in den Urlaub. In dieser Zeit kommt der Pflegedienst häufiger. Die zusätzlichen Einsätze rechnet er über die Verhinderungspflege ab, und das halbe Pflegegeld läuft weiter. Wie der Antrag funktioniert, lesen Sie unter [Verhinderungspflege beantragen](/ratgeber/verhinderungspflege-antrag/).",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Kann man Pflegegeld und Pflegesachleistung gleichzeitig bekommen?",
        a: "Ja, über die Kombinationsleistung nach § 38 SGB XI. Das Pflegegeld wird um den Prozentsatz gemindert, zu dem Sie die Sachleistung genutzt haben.",
      },
      {
        q: "Wie viel Pflegegeld bekomme ich, wenn der Pflegedienst kommt?",
        a: "Das hängt davon ab, wie viel Prozent der Sachleistung der Pflegedienst abrechnet. Bei Pflegegrad 3 und 40 % genutzter Sachleistung sind es zum Beispiel noch 359,40 € Pflegegeld.",
      },
      {
        q: "Wird das Pflegegeld während der Verhinderungspflege weitergezahlt?",
        a: "Ja, zur Hälfte. Während der Verhinderungspflege zahlt die Pflegekasse für bis zu acht Wochen im Jahr die Hälfte des bisherigen Pflegegelds weiter.",
      },
      {
        q: "Wie lange bin ich an die Kombinationsleistung gebunden?",
        a: "An das gewählte Verhältnis von Geld- und Sachleistung sind Sie laut § 38 SGB XI für sechs Monate gebunden.",
      },
      {
        q: "Bekomme ich bei Pflegegrad 1 Pflegegeld?",
        a: "Nein. Pflegegeld und Pflegesachleistung gibt es erst ab Pflegegrad 2. Bei Pflegegrad 1 erhalten Sie unter anderem den Entlastungsbetrag von 131 € im Monat.",
      },
    ],
    leistung: "ambulante-pflege",
    verwandt: ["was-kostet-ein-pflegedienst", "pflegegrade-leistungen", "entlastungsbetrag-131-euro"],
    quellen: [Q_SGB11_38, Q_BMG_BROSCHUERE, Q_VZ_LEISTUNGEN, Q_SGB11_120],
  },

  // ───────────────────────────────────────────── 4
  {
    slug: "pflegegrad-beantragen-hamburg",
    cluster: "pflegegrad",
    h1: "Pflegegrad beantragen in Hamburg: Schritt für Schritt zum Bescheid",
    metaTitle: "Pflegegrad beantragen in Hamburg: So geht's 2026",
    metaDescription:
      "Pflegegrad beantragen in Hamburg: Antrag bei der Pflegekasse, MD-Begutachtung, Fristen und Widerspruch – plus kostenlose Hilfe vom Pflegestützpunkt Bergedorf.",
    lead:
      "Ein Pflegegrad ist der Schlüssel zu allen Leistungen der Pflegeversicherung. Der Antrag ist einfacher, als viele denken – ein Anruf bei der Pflegekasse genügt für den Start.",
    veroeffentlicht: DATUM,
    aktualisiert: DATUM,
    lesezeit: 8,
    kurz: [
      "Den Antrag stellen Sie bei der Pflegekasse Ihrer Krankenkasse – formlos, auch telefonisch.",
      "Leistungen gibt es ab dem Monat der Antragstellung, nicht rückwirkend ab Beginn der Pflegebedürftigkeit.",
      "Die Pflegekasse muss in der Regel innerhalb von 25 Arbeitstagen entscheiden, sonst zahlt sie 70 € je angefangene Woche Verspätung.",
      "Gegen den Bescheid können Sie innerhalb eines Monats schriftlich Widerspruch einlegen.",
      "In Hamburg beraten die Pflegestützpunkte – einer je Bezirk, auch in Bergedorf – kostenlos.",
    ],
    foto: {
      id: "photo-1666887360726-f55472d96c34",
      alt: "Mann zeigt einem älteren Mann etwas auf dem Tablet",
    },
    sections: [
      {
        h2: "Wie beantrage ich einen Pflegegrad in Hamburg?",
        blocks: [
          {
            type: "p",
            text: "Sie stellen den Antrag bei der Pflegekasse, die zu Ihrer Krankenkasse gehört – formlos, telefonisch oder schriftlich. Danach beauftragt die Pflegekasse den Medizinischen Dienst mit der Begutachtung und schickt Ihnen einen Bescheid.",
          },
          {
            type: "ol",
            items: [
              "**Antrag stellen:** bei der Pflegekasse anrufen oder schriftlich formulieren: „Ich stelle einen Antrag auf Leistungen der Pflegekasse.“",
              "**Unterlagen erhalten:** Die Kasse schickt Ihnen Formulare zu. Diese füllen Sie aus und senden sie zurück.",
              "**Beratung nutzen:** Sie haben Anspruch auf eine Pflegeberatung innerhalb von zwei Wochen nach Antragstellung.",
              "**Begutachtung:** Der Medizinische Dienst (MD) meldet sich mit einem Termin – meist als Hausbesuch.",
              "**Bescheid:** Die Pflegekasse entscheidet in der Regel innerhalb von 25 Arbeitstagen.",
              "**Prüfen:** Stimmt der Pflegegrad nicht, legen Sie innerhalb eines Monats Widerspruch ein.",
            ],
          },
          {
            type: "p",
            text: "Diese Schritte gelten für alle gesetzlich Versicherten, egal ob Sie in Bergedorf, Billstedt oder Reinbek wohnen. Privat Versicherte wenden sich an ihre private Pflegeversicherung; dort begutachtet Medicproof.",
          },
        ],
      },
      {
        h2: "Kann man einen Pflegegrad telefonisch beantragen?",
        blocks: [
          {
            type: "p",
            text: "Ja, der Antrag auf einen Pflegegrad ist formlos und auch telefonisch möglich. Für einen sicheren Nachweis des Antragsdatums ist ein Fax, eine E-Mail oder ein Brief jedoch besser.",
          },
          {
            type: "p",
            text: "Das Datum ist wichtig, weil davon abhängt, ab wann Leistungen gezahlt werden. Die Verbraucherzentrale rät: Geben Sie den Antrag persönlich ab, lassen Sie sich eine Kopie quittieren. Rufen Sie an, notieren Sie Datum, Uhrzeit und Gesprächspartner.",
          },
          {
            type: "p",
            text: "Angehörige, Nachbarn oder Freunde können den Antrag ebenfalls stellen, wenn die pflegebedürftige Person sie bevollmächtigt. Legen Sie dann eine Kopie der Vollmacht oder des Betreuerausweises bei. Voraussetzung für Leistungen ist außerdem, dass in den letzten zehn Jahren mindestens zwei Jahre Versicherungszeit bestehen.",
          },
        ],
      },
      {
        h2: "Ab wann zahlt die Pflegekasse nach dem Antrag?",
        blocks: [
          {
            type: "p",
            text: "Die Pflegekasse zahlt ab dem Monat, in dem Sie den Antrag gestellt haben. Für die Zeit davor gibt es kein Geld, auch wenn die Pflegebedürftigkeit schon länger bestand.",
          },
          {
            type: "p",
            text: "Deshalb gilt: Stellen Sie den Antrag lieber zu früh als zu spät. Sie müssen nicht warten, bis alle Unterlagen beisammen sind. Ein formloser Antrag am 28. eines Monats sichert Ihnen die Leistungen für den ganzen Monat. Ob der Hilfebedarf für einen Pflegegrad ausreicht, können Sie vorab mit unserem [Pflegegrad-Rechner](/pflegegrad-rechner/) grob einschätzen.",
          },
          {
            type: "p",
            text: "Mit dem Antrag entsteht auch Ihr Anspruch auf Pflegeberatung. Die Pflegekasse muss Ihnen innerhalb von zwei Wochen nach Antragstellung einen Beratungstermin anbieten bzw. eine Ansprechperson nennen. Nutzen Sie dieses Gespräch, um Fragen zu Leistungen und zum weiteren Ablauf zu klären.",
          },
        ],
      },
      {
        h2: "Wie läuft die Begutachtung durch den Medizinischen Dienst ab?",
        blocks: [
          {
            type: "p",
            text: "Ein Gutachter oder eine Gutachterin des Medizinischen Dienstes prüft in sechs Lebensbereichen, wie selbstständig die pflegebedürftige Person ist. Beim Erstantrag findet die Begutachtung in der Regel als Hausbesuch statt.",
          },
          {
            type: "p",
            text: "Der MD kündigt den Termin vorher an, damit Angehörige dabei sein können. Bei Höherstufungs- oder Wiederholungsbegutachtungen ab 14 Jahren ist auch ein Telefon- oder Videointerview möglich. In Ausnahmefällen entscheidet der MD nach Aktenlage.",
          },
          {
            type: "ul",
            items: [
              "Mobilität – etwa Aufstehen, Gehen, Treppensteigen",
              "Kognitive und kommunikative Fähigkeiten – etwa Orientierung und Erinnern",
              "Verhaltensweisen und psychische Problemlagen – etwa Unruhe oder Ängste",
              "Selbstversorgung – etwa Waschen, Anziehen, Essen",
              "Umgang mit krankheits- und therapiebedingten Anforderungen – etwa Medikamente",
              "Gestaltung des Alltagslebens und sozialer Kontakte",
            ],
          },
          {
            type: "p",
            text: "Gute Vorbereitung lohnt sich: Ein Pflegetagebuch, aktuelle Arztberichte und der Medikamentenplan helfen dem Gutachter, den tatsächlichen Hilfebedarf zu erkennen. Alle Tipps finden Sie im Beitrag [MD-Begutachtung vorbereiten](/ratgeber/md-begutachtung-vorbereiten/).",
          },
          {
            type: "cta",
            text: "Sie wohnen in Bergedorf, Lohbrügge oder Hamburg-Ost und wissen nicht, wo Sie anfangen sollen? TwinsCare hilft Ihnen bei Anträgen und bei der Vorbereitung auf den MD-Termin – die Erstberatung bei Ihnen zu Hause ist kostenlos.",
          },
        ],
      },
      {
        h2: "Wie lange dauert es, bis man einen Pflegegrad bekommt?",
        blocks: [
          {
            type: "p",
            text: "Die Pflegekasse muss in der Regel innerhalb von 25 Arbeitstagen nach Antragseingang entscheiden. In bestimmten Situationen, etwa im Krankenhaus oder in der Palliativversorgung, gelten kürzere Fristen.",
          },
          {
            type: "table",
            caption: "Gesetzliche Fristen für die Begutachtung und Entscheidung",
            head: ["Situation", "Frist"],
            rows: [
              ["Regelfall", "Bescheid innerhalb von 25 Arbeitstagen"],
              ["Krankenhaus oder stationäre Reha, wenn für die Weiterversorgung nötig", "Begutachtung innerhalb von 5 Arbeitstagen"],
              ["Hospiz oder ambulante Palliativversorgung", "Begutachtung innerhalb von 5 Arbeitstagen"],
              ["Zu Hause ohne Palliativversorgung, wenn Pflegezeit angekündigt wurde", "Begutachtung innerhalb von 10 Arbeitstagen"],
              ["Kurzzeitpflege nach Krankenhaus oder Reha", "abschließende Begutachtung innerhalb von 10 Arbeitstagen nach Beginn"],
            ],
          },
          {
            type: "p",
            text: "Hält die Pflegekasse die Frist nicht ein, muss sie Ihnen für jede angefangene Woche der Überschreitung 70 € zahlen. Das gilt nicht, wenn die Kasse die Verzögerung nicht zu vertreten hat. Steht eine Entlassung aus dem Krankenhaus bevor, hilft unsere [Checkliste zur Krankenhausentlassung](/ratgeber/krankenhaus-entlassung-checkliste/).",
          },
        ],
      },
      {
        h2: "Wer hilft in Hamburg kostenlos beim Pflegeantrag?",
        blocks: [
          {
            type: "p",
            text: "In Hamburg gibt es in jedem der sieben Bezirke einen Pflegestützpunkt, auch in Bergedorf. Die Beratung dort ist kostenlos und kann auf Wunsch bei Ihnen zu Hause stattfinden.",
          },
          {
            type: "p",
            text: "Die Pflegestützpunkte werden gemeinsam von den gesetzlichen Kranken- und Pflegekassen und der Stadt Hamburg getragen. Sie informieren über Pflege zu Hause, helfen beim Ausfüllen von Anträgen und begleiten auf Wunsch auch längerfristig. Einen Termin vereinbaren Sie telefonisch.",
          },
          {
            type: "p",
            text: "Der Pflegestützpunkt für den Bezirk Bergedorf ist auch für Lohbrügge zuständig. Wer in Billstedt oder Horn wohnt, wendet sich an den Pflegestützpunkt Hamburg-Mitte, für Jenfeld ist der Bezirk Wandsbek zuständig. Die aktuellen Adressen und Telefonnummern finden Sie auf hamburg.de.",
          },
          {
            type: "ul",
            items: [
              "**Pflegestützpunkt im Bezirk:** kostenlose Beratung, auch als Hausbesuch",
              "**Pflegeberatung der Pflegekasse:** Anspruch auf einen Termin innerhalb von zwei Wochen nach Antragstellung",
              "**Ambulanter Pflegedienst:** TwinsCare hilft bei Anträgen und bereitet mit Ihnen die Begutachtung vor – mehr unter [Pflegeberatung](/leistungen/pflegeberatung/)",
            ],
          },
          {
            type: "p",
            text: "Wohnen Sie in Oststeinbek, Glinde, Reinbek oder Wentorf, gehören Sie zu Schleswig-Holstein. Die zuständige Beratungsstelle nennt Ihnen Ihre Pflegekasse.",
          },
        ],
      },
      {
        h2: "Was tun, wenn der Pflegegrad abgelehnt wird oder zu niedrig ist?",
        blocks: [
          {
            type: "p",
            text: "Sie können innerhalb eines Monats nach Erhalt des Bescheids schriftlich Widerspruch bei der Pflegekasse einlegen. Der Medizinische Dienst prüft das Gutachten dann erneut, unter Umständen mit einem neuen Besuch.",
          },
          {
            type: "ul",
            items: [
              "Der Widerspruch muss schriftlich erfolgen: per Brief, Fax oder persönlicher Abgabe. E-Mail und Telefon reichen nicht.",
              "Am besten per Einschreiben mit Rückschein senden.",
              "Die Begründung können Sie nachreichen – wichtig ist, dass die Frist gewahrt ist.",
              "Fordern Sie das MD-Gutachten an, falls es Ihnen noch nicht vorliegt, und prüfen Sie es Punkt für Punkt.",
              "Fehlt im Bescheid die Rechtsbehelfsbelehrung, verlängert sich die Frist auf ein Jahr.",
            ],
          },
          {
            type: "p",
            text: "Hat sich der Zustand nach dem Bescheid verschlechtert, ist oft ein neuer Antrag auf Höherstufung der richtige Weg.",
          },
          {
            type: "p",
            text: "Nach Ihrem Widerspruch prüft der Medizinische Dienst das Gutachten erneut, unter Umständen mit einer neuen Begutachtung vor Ort. Neue ärztliche Unterlagen sollten Sie dem Widerspruch beifügen. Eine Pflegeberatung oder der Pflegestützpunkt hilft Ihnen beim Formulieren.",
          },
        ],
      },
      {
        h2: "Welche Unterlagen brauche ich für den Pflegeantrag?",
        blocks: [
          {
            type: "p",
            text: "Für den Antrag selbst brauchen Sie nur Ihre Versichertendaten. Für die Begutachtung sollten Sie Arztberichte, Medikamentenplan und eine Übersicht über den täglichen Hilfebedarf bereithalten.",
          },
          {
            type: "ul",
            items: [
              "Versichertenkarte bzw. Versichertennummer",
              "Vollmacht oder Betreuerausweis, falls jemand anderes den Antrag stellt",
              "Aktuelle Berichte von Haus- und Fachärzten",
              "Entlassungsberichte aus Krankenhaus oder Reha",
              "Aktueller Medikamentenplan",
              "Liste der Hilfsmittel, zum Beispiel Rollator, Hörgerät, Brille",
              "Schwerbehindertenausweis, falls vorhanden",
              "Pflegetagebuch oder eigene Notizen zum Hilfebedarf",
            ],
          },
        ],
      },
      {
        h2: "Was passiert, wenn der Pflegegrad bewilligt ist?",
        blocks: [
          {
            type: "p",
            text: "Mit dem Bescheid können Sie alle Leistungen Ihres Pflegegrads nutzen – rückwirkend ab dem Antragsmonat. Ab Pflegegrad 2 entscheiden Sie, ob Angehörige pflegen, ein Pflegedienst kommt oder beides kombiniert wird.",
          },
          {
            type: "ul",
            items: [
              "**Pflegegeld oder Pflegesachleistung wählen:** Die Unterschiede erklärt der Beitrag [Pflegesachleistung oder Pflegegeld](/ratgeber/pflegesachleistung-oder-pflegegeld/).",
              "**Entlastungsbetrag nutzen:** 131 € im Monat für alle Pflegegrade bei Pflege zu Hause.",
              "**Pflegedienst auswählen:** Kostenvoranschlag einholen und Vertrag prüfen.",
              "**Beratungseinsatz einplanen:** Bei reinem Pflegegeld ist er ab Pflegegrad 2 Pflicht.",
              "**Hilfsmittel und Umbauten beantragen:** Pflegehilfsmittel bis 42 € im Monat, Umbauten bis 4.180 € je Maßnahme.",
            ],
          },
          {
            type: "p",
            text: "Eine Übersicht aller Beträge finden Sie unter [Pflegegrad 1 bis 5: alle Leistungen](/ratgeber/pflegegrade-leistungen/). Für die Pflege zu Hause in Bergedorf und Umgebung erreichen Sie uns über [Kontakt](/kontakt/).",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Wo beantrage ich einen Pflegegrad?",
        a: "Bei der Pflegekasse, die zu Ihrer Krankenkasse gehört. Privat Versicherte wenden sich an ihre private Pflegeversicherung.",
      },
      {
        q: "Wie lange dauert es, bis der MD nach dem Antrag kommt?",
        a: "Der MD meldet sich nach dem Auftrag der Pflegekasse mit einem Terminvorschlag. Den Bescheid muss die Pflegekasse in der Regel innerhalb von 25 Arbeitstagen nach Antragseingang erlassen.",
      },
      {
        q: "Gibt es Pflegegeld rückwirkend?",
        a: "Nur ab dem Monat der Antragstellung. Für Zeiten vor dem Antrag zahlt die Pflegekasse nicht, auch wenn die Pflegebedürftigkeit schon bestand.",
      },
      {
        q: "Ist die Beratung im Pflegestützpunkt Bergedorf kostenlos?",
        a: "Ja. Die Beratung in den Hamburger Pflegestützpunkten ist kostenlos und auf Wunsch auch als Hausbesuch möglich.",
      },
      {
        q: "Kann ich den Widerspruch per E-Mail einlegen?",
        a: "Nein. Der Widerspruch muss schriftlich per Brief, Fax oder persönlicher Abgabe erfolgen – innerhalb eines Monats nach Erhalt des Bescheids.",
      },
    ],
    leistung: "pflegeberatung",
    verwandt: ["md-begutachtung-vorbereiten", "pflegegrade-leistungen", "krankenhaus-entlassung-checkliste"],
    quellen: [Q_BMG_PFLEGEBEDUERFTIGKEIT, Q_BMG_FRISTEN, Q_VZ_ANTRAG, Q_HH_PFLEGESTUETZPUNKTE, Q_GESUND_WIDERSPRUCH],
  },

  // ───────────────────────────────────────────── 5
  {
    slug: "md-begutachtung-vorbereiten",
    cluster: "pflegegrad",
    h1: "MD-Begutachtung vorbereiten: Module, Pflegetagebuch und Checkliste",
    metaTitle: "MD-Begutachtung vorbereiten: Tipps und Checkliste",
    metaDescription:
      "MD-Begutachtung vorbereiten: die 6 Module mit Gewichtung, Punkte je Pflegegrad, Pflegetagebuch, Unterlagen-Checkliste und warum Angehörige dabei sein sollten.",
    lead:
      "Beim Besuch des Medizinischen Dienstes entscheidet sich, welchen Pflegegrad die Pflegekasse vergibt. Wer weiß, worauf der Gutachter achtet, kann den Alltag realistischer schildern.",
    veroeffentlicht: DATUM,
    aktualisiert: DATUM,
    lesezeit: 8,
    kurz: [
      "Der Medizinische Dienst bewertet die Selbstständigkeit in sechs Modulen, am stärksten zählt die Selbstversorgung mit 40 %.",
      "Von den Modulen 2 und 3 geht nur das mit dem höheren Wert in die Gesamtpunktzahl ein.",
      "Ab 12,5 Punkten gibt es Pflegegrad 1, ab 27 Punkten Pflegegrad 2 und ab 90 Punkten Pflegegrad 5.",
      "Ein Pflegetagebuch und aktuelle Arztberichte helfen, den tatsächlichen Hilfebedarf zu belegen.",
      "Eine Angehörige oder Pflegeperson sollte beim Termin dabei sein.",
    ],
    foto: {
      id: "photo-1765896387398-1e1ae8d2eb85",
      alt: "Pflegekraft in grüner Kleidung beugt sich zu einer älteren Person im Sessel",
    },
    sections: [
      {
        h2: "Wie läuft die Begutachtung durch den Medizinischen Dienst ab?",
        blocks: [
          {
            type: "p",
            text: "Nach Ihrem Antrag beauftragt die Pflegekasse den Medizinischen Dienst (MD). Ein Gutachter oder eine Gutachterin kündigt einen Termin an und prüft – beim Erstantrag meist zu Hause –, wie selbstständig die pflegebedürftige Person im Alltag ist.",
          },
          {
            type: "p",
            text: "Der Gutachter stellt Fragen, lässt sich Abläufe zeigen und schaut sich die Wohnsituation an. Anschließend schreibt er ein Gutachten mit einer Empfehlung für den Pflegegrad und schickt es an die Pflegekasse. Die Kasse entscheidet dann über den Bescheid.",
          },
          {
            type: "table",
            caption: "Formen der Begutachtung laut Medizinischem Dienst",
            head: ["Form", "Wann?"],
            rows: [
              ["Hausbesuch", "wenn noch keine Pflegebedürftigkeit festgestellt wurde, oder bei Hinweisen auf unzureichende Versorgung"],
              ["Telefon- oder Videointerview", "bei Höherstufungs- und Wiederholungsbegutachtungen ab 14 Jahren"],
              ["Nach Aktenlage", "wenn ein Besuch nicht zumutbar ist oder alle Informationen bereits vorliegen"],
            ],
          },
        ],
      },
      {
        h2: "Welche Module prüft der Medizinische Dienst?",
        blocks: [
          {
            type: "p",
            text: "Der MD prüft sechs Module: Mobilität, kognitive und kommunikative Fähigkeiten, Verhaltensweisen und psychische Problemlagen, Selbstversorgung, Umgang mit krankheits- und therapiebedingten Anforderungen sowie Gestaltung des Alltagslebens. Jedes Modul fließt mit einer festen Gewichtung in die Gesamtpunktzahl ein (§ 15 SGB XI).",
          },
          {
            type: "table",
            caption: "Die sechs Module und ihre Gewichtung nach § 15 Abs. 2 SGB XI",
            head: ["Modul", "Was wird geprüft? (Beispiele)", "Gewichtung"],
            rows: [
              ["1 Mobilität", "Positionswechsel im Bett, Aufstehen, Gehen in der Wohnung, Treppensteigen", "10 %"],
              ["2 Kognitive und kommunikative Fähigkeiten", "Orientierung, Erinnern, Entscheidungen treffen, Gespräche führen", "zusammen mit Modul 3: 15 % (höherer Wert zählt)"],
              ["3 Verhaltensweisen und psychische Problemlagen", "nächtliche Unruhe, Ängste, Abwehr von Hilfe, Antriebslosigkeit", "zusammen mit Modul 2: 15 % (höherer Wert zählt)"],
              ["4 Selbstversorgung", "Waschen, Duschen, Anziehen, Essen, Trinken, Toilettengang", "40 %"],
              ["5 Umgang mit krankheits- und therapiebedingten Anforderungen", "Medikamente, Blutzucker, Verbände, Arztbesuche", "20 %"],
              ["6 Gestaltung des Alltagslebens und sozialer Kontakte", "Tagesablauf, Ruhen und Schlafen, sich beschäftigen, Kontakte pflegen", "15 %"],
            ],
          },
          {
            type: "p",
            text: "Bei den Modulen 2 und 3 zählt nur das Modul mit den höheren gewichteten Punkten. Das ist wichtig bei Demenz: Wer kognitiv stark eingeschränkt ist, profitiert, auch wenn das Verhalten unauffällig ist – und umgekehrt.",
          },
          {
            type: "p",
            text: "Unterschätzt wird oft Modul 5. Hier zählt, wie oft Hilfe bei Medikamenten, Blutzuckermessung, Verbandswechsel oder Arztbesuchen nötig ist. Auch regelmäßige Begleitung zu Therapien gehört dazu. Notieren Sie deshalb, wie viele Arzttermine im Monat anfallen und wer die Medikamente stellt.",
          },
        ],
      },
      {
        h2: "Wie viele Punkte braucht man für welchen Pflegegrad?",
        blocks: [
          {
            type: "p",
            text: "Pflegegrad 1 beginnt bei 12,5 Punkten, Pflegegrad 2 bei 27, Pflegegrad 3 bei 47,5, Pflegegrad 4 bei 70 und Pflegegrad 5 bei 90 von 100 möglichen Punkten.",
          },
          {
            type: "table",
            caption: "Punkteschwellen nach § 15 Abs. 3 SGB XI",
            head: ["Pflegegrad", "Gesamtpunkte", "Beeinträchtigung der Selbstständigkeit"],
            rows: [
              ["Pflegegrad 1", "12,5 bis unter 27", "gering"],
              ["Pflegegrad 2", "27 bis unter 47,5", "erheblich"],
              ["Pflegegrad 3", "47,5 bis unter 70", "schwer"],
              ["Pflegegrad 4", "70 bis unter 90", "schwerst"],
              ["Pflegegrad 5", "90 bis 100", "schwerst, mit besonderen Anforderungen an die Versorgung"],
            ],
          },
          {
            type: "p",
            text: "Weil die Selbstversorgung 40 % ausmacht, entscheidet sie oft über den Pflegegrad. Schildern Sie deshalb genau, wobei Hilfe nötig ist: beim Waschen des Rückens, beim Anziehen der Strümpfe, beim Schneiden des Essens. Eine erste Orientierung gibt unser [Pflegegrad-Rechner](/pflegegrad-rechner/).",
          },
        ],
      },
      {
        h2: "Wie führe ich ein Pflegetagebuch für den MD?",
        blocks: [
          {
            type: "p",
            text: "In einem Pflegetagebuch notieren Sie ein bis zwei Wochen lang jeden Tag, wobei die pflegebedürftige Person Hilfe braucht, wie oft und wie lange. So haben Sie beim Termin konkrete Beispiele statt Schätzungen.",
          },
          {
            type: "p",
            text: "Die Verbraucherzentrale empfiehlt eigene Notizen über den Verlauf der Pflege und die Schwierigkeiten im Alltag. Viele Pflegekassen bieten Vorlagen zum Herunterladen an. Ein einfaches Heft reicht aber auch.",
          },
          {
            type: "p",
            text: "Schreiben Sie konkret statt allgemein. „Mutter braucht Hilfe beim Anziehen“ sagt wenig. Besser ist: „Mutter kann Bluse und Hose nicht allein anziehen, Knöpfe schafft sie nicht, Strümpfe ziehe ich ihr jeden Morgen an.“ So kann der Gutachter die Angaben direkt den Modulen zuordnen.",
          },
          {
            type: "ul",
            items: [
              "Datum und Uhrzeit jeder Hilfe",
              "Was genau getan wurde, zum Beispiel „beim Duschen den Rücken gewaschen und beim Abtrocknen geholfen“",
              "Ob die Person es teilweise selbst konnte oder vollständig Hilfe brauchte",
              "Nächtliche Hilfe, Unruhe oder Toilettengänge",
              "Medikamente, Blutzuckermessungen, Arztbesuche",
              "Besondere Vorfälle wie Stürze, Verwirrtheit oder Weglaufen",
            ],
          },
          {
            type: "cta",
            text: "Sie möchten sich mit fachlicher Unterstützung auf den MD-Termin vorbereiten? TwinsCare berät Familien in Bergedorf und Hamburg-Ost kostenlos zu Hause und geht mit Ihnen die Module Schritt für Schritt durch.",
          },
        ],
      },
      {
        h2: "Welche Unterlagen sollte ich für die Begutachtung bereitlegen?",
        blocks: [
          {
            type: "p",
            text: "Legen Sie aktuelle Arzt- und Krankenhausberichte, den Medikamentenplan und eine Liste der Hilfsmittel bereit. Ist schon ein Pflegedienst im Einsatz, gehört auch die Pflegedokumentation dazu.",
          },
          {
            type: "ul",
            items: [
              "Aktuelle Berichte von Haus- und Fachärzten",
              "Entlassungsberichte aus Krankenhaus oder Reha",
              "Aktueller Medikamentenplan",
              "Schwerbehindertenausweis, falls vorhanden",
              "Liste der Hilfsmittel: Brille, Hörgerät, Rollator, Toilettenstuhl",
              "Pflegedokumentation des ambulanten Pflegedienstes",
              "Pflegetagebuch oder eigene Notizen",
              "Selbsteinschätzungsbogen des MD, falls zugeschickt",
              "Vollmacht oder Betreuerausweis",
            ],
          },
          {
            type: "p",
            text: "Machen Sie Kopien, damit Sie die Originale behalten. Legen Sie alles am Vortag in eine Mappe.",
          },
        ],
      },
      {
        h2: "Warum sollten Angehörige bei der Begutachtung dabei sein?",
        blocks: [
          {
            type: "p",
            text: "Angehörige oder die Pflegeperson können den tatsächlichen Hilfebedarf ergänzen, den Betroffene aus Scham oft beschönigen. Sowohl das Bundesgesundheitsministerium als auch die Verbraucherzentrale raten deshalb dazu, dass eine Pflegeperson anwesend ist.",
          },
          {
            type: "p",
            text: "Viele ältere Menschen wollen vor dem Gutachter einen guten Eindruck machen. Sie sagen „Das schaffe ich noch allein“, obwohl es im Alltag nicht klappt. Wer die Pflege kennt, kann freundlich ergänzen. Besprechen Sie das am besten vorher mit Ihrem Angehörigen, damit sich niemand bloßgestellt fühlt.",
          },
          {
            type: "p",
            text: "Vereinbaren Sie vorher, wer was erzählt. Manche Angehörige notieren Ergänzungen und sprechen sie am Ende des Termins an, ohne den Betroffenen zu unterbrechen. Sie können den Gutachter auch bitten, kurz unter vier Augen zu sprechen.",
          },
          {
            type: "p",
            text: "Ist ein Pflegedienst bereits im Einsatz, kann auch eine Pflegefachkraft beim Termin dabei sein. Sie kennt die Abläufe und kann fachlich beschreiben, wobei Unterstützung nötig ist.",
          },
        ],
      },
      {
        h2: "Welche Fehler sollte man bei der MD-Begutachtung vermeiden?",
        blocks: [
          {
            type: "p",
            text: "Der häufigste Fehler ist, den Zustand zu positiv darzustellen. Ebenso schädlich ist Übertreiben: Gutachter sind erfahren und merken das.",
          },
          {
            type: "ul",
            items: [
              "**Beschönigen:** Zeigen Sie den Alltag, wie er an einem normalen oder schlechten Tag ist.",
              "**Übertreiben:** Bleiben Sie glaubwürdig und beschreiben Sie den tatsächlichen Zustand.",
              "**Unvorbereitet sein:** Ohne Notizen fallen wichtige Punkte im Gespräch oft nicht ein.",
              "**Allein bleiben:** Ohne Angehörige fehlt oft die zweite Perspektive.",
              "**Nächte vergessen:** Nächtliche Unruhe und Hilfe beim Toilettengang gehören dazu.",
              "**Psychische Belastungen verschweigen:** Ängste, Rückzug oder Verwirrtheit zählen in den Modulen 2 und 3.",
            ],
          },
        ],
      },
      {
        h2: "Was passiert nach der MD-Begutachtung?",
        blocks: [
          {
            type: "p",
            text: "Der MD schickt sein Gutachten an die Pflegekasse, die in der Regel innerhalb von 25 Arbeitstagen nach dem Antrag einen schriftlichen Bescheid erlässt. Gegen den Bescheid können Sie innerhalb eines Monats Widerspruch einlegen.",
          },
          {
            type: "p",
            text: "Prüfen Sie den Bescheid und fordern Sie das Gutachten an, falls es nicht beiliegt. Vergleichen Sie die Einschätzungen in den Modulen mit Ihrem Pflegetagebuch. Weichen sie deutlich ab, lohnt sich ein Widerspruch. Wie das geht, steht im Beitrag [Pflegegrad beantragen in Hamburg](/ratgeber/pflegegrad-beantragen-hamburg/).",
          },
          {
            type: "p",
            text: "Mit dem Bescheid stehen Ihnen die Leistungen Ihres Pflegegrads zu. Einen Überblick gibt [Pflegegrad 1 bis 5: alle Leistungen](/ratgeber/pflegegrade-leistungen/).",
          },
        ],
      },
      {
        h2: "Was sollte man am Tag der Begutachtung beachten?",
        blocks: [
          {
            type: "p",
            text: "Bestätigen Sie den Termin, sorgen Sie für Ruhe und halten Sie die Unterlagenmappe bereit. Lassen Sie den Alltag so, wie er ist – auch Hilfsmittel wie Rollator oder Toilettenstuhl sollten an ihrem gewohnten Platz stehen.",
          },
          {
            type: "ul",
            items: [
              "Termin rechtzeitig bestätigen und eine Angehörige oder Pflegeperson einplanen",
              "Unterlagenmappe und Pflegetagebuch griffbereit legen",
              "Brille und Hörgerät der pflegebedürftigen Person bereithalten",
              "Hilfsmittel an ihrem üblichen Platz lassen",
              "Fernseher und Radio ausschalten, damit das Gespräch ruhig verläuft",
              "Eigene Fragen notieren und am Ende stellen",
              "Nach dem Termin festhalten, was besprochen wurde",
            ],
          },
          {
            type: "p",
            text: "Fühlt sich die pflegebedürftige Person am Tag des Termins ungewöhnlich gut, sagen Sie das offen. Beschreiben Sie dann, wie ein typischer oder schlechter Tag aussieht. Ist der Termin aus gesundheitlichen Gründen nicht möglich, melden Sie sich frühzeitig beim Medizinischen Dienst.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Wie lange dauert eine MD-Begutachtung?",
        a: "Das hängt vom Einzelfall ab. Planen Sie ausreichend Zeit ein und sorgen Sie dafür, dass die Angehörige oder Pflegeperson den ganzen Termin über dabei sein kann.",
      },
      {
        q: "Was fragt der Gutachter vom Medizinischen Dienst?",
        a: "Er fragt nach der Selbstständigkeit in sechs Bereichen: Mobilität, geistige Fähigkeiten, Verhalten und Psyche, Selbstversorgung, Umgang mit Krankheit und Therapie sowie Alltagsgestaltung.",
      },
      {
        q: "Welches Modul zählt bei der Pflegebegutachtung am meisten?",
        a: "Die Selbstversorgung mit 40 %. Dazu gehören Waschen, Anziehen, Essen, Trinken und der Toilettengang.",
      },
      {
        q: "Kann die Begutachtung auch telefonisch stattfinden?",
        a: "Ja, bei Höherstufungs- und Wiederholungsbegutachtungen ab 14 Jahren ist ein Telefon- oder Videointerview möglich. Beim Erstantrag findet in der Regel ein Hausbesuch statt.",
      },
      {
        q: "Bekomme ich das MD-Gutachten?",
        a: "Der MD schickt das Gutachten an die Pflegekasse. Liegt es Ihnen nicht vor, fordern Sie es bei der Pflegekasse an – besonders, wenn Sie Widerspruch einlegen möchten.",
      },
    ],
    leistung: "pflegeberatung",
    verwandt: ["pflegegrad-beantragen-hamburg", "pflegegrade-leistungen"],
    quellen: [Q_SGB11_15, Q_MD_WEG, Q_VZ_BEGUTACHTUNG, Q_BMG_PFLEGEGRADE],
  },

  // ───────────────────────────────────────────── 6
  {
    slug: "pflegegrade-leistungen",
    cluster: "pflegegrad",
    h1: "Pflegegrad 1 bis 5: alle Leistungen im Überblick (2026)",
    metaTitle: "Pflegegrade 1–5: Alle Leistungen 2026 im Überblick",
    metaDescription:
      "Pflegegrad 1 bis 5: Pflegegeld, Sachleistung, Entlastungsbetrag, Tagespflege und Jahresbetrag 2026 in einer Tabelle – plus Punkte und was Pflegegrad 1 bringt.",
    lead:
      "Welche Leistungen Ihnen zustehen, hängt vom Pflegegrad ab. Hier finden Sie alle wichtigen Beträge 2026 auf einen Blick – und Erklärungen, wie Sie sie sinnvoll nutzen.",
    veroeffentlicht: DATUM,
    aktualisiert: DATUM,
    lesezeit: 8,
    kurz: [
      "Die Leistungsbeträge gelten seit dem 1. Januar 2025 unverändert; die nächste Anpassung ist für den 1. Januar 2028 vorgesehen.",
      "Pflegegeld gibt es ab Pflegegrad 2: 347 € bis 990 € im Monat.",
      "Den Entlastungsbetrag von 131 € im Monat erhalten alle Pflegegrade bei Pflege zu Hause.",
      "Für Verhinderungs- und Kurzzeitpflege gibt es ab Pflegegrad 2 einen gemeinsamen Jahresbetrag von bis zu 3.539 €.",
      "Pflegegrad 1 beginnt bei 12,5 Punkten, Pflegegrad 5 bei 90 Punkten.",
    ],
    foto: {
      id: "photo-1773227055624-07b515ba87c5",
      alt: "Pflegekraft begleitet eine ältere Frau mit Rollator",
    },
    sections: [
      {
        h2: "Welche Leistungen gibt es bei Pflegegrad 1 bis 5?",
        blocks: [
          {
            type: "p",
            text: "Ab Pflegegrad 2 gibt es Pflegegeld (347 € bis 990 €) oder Pflegesachleistung (796 € bis 2.299 €) im Monat, dazu Tagespflege und Verhinderungspflege. Den Entlastungsbetrag von 131 €, Pflegehilfsmittel und Zuschüsse für Umbauten erhalten alle Pflegegrade.",
          },
          {
            type: "table",
            caption: "Leistungen der Pflegeversicherung bei häuslicher Pflege (Stand 2026)",
            head: ["Leistung", "PG 1", "PG 2", "PG 3", "PG 4", "PG 5"],
            rows: [
              ["Pflegegeld pro Monat (§ 37)", "–", "347 €", "599 €", "800 €", "990 €"],
              ["Pflegesachleistung pro Monat (§ 36)", "–", "796 €", "1.497 €", "1.859 €", "2.299 €"],
              ["Entlastungsbetrag pro Monat (§ 45b)", "131 €", "131 €", "131 €", "131 €", "131 €"],
              ["Tages- und Nachtpflege pro Monat (§ 41)", "–", "721 €", "1.357 €", "1.685 €", "2.085 €"],
              ["Verhinderungs- und Kurzzeitpflege pro Jahr (§ 42a)", "–", "3.539 €", "3.539 €", "3.539 €", "3.539 €"],
              ["Pflegehilfsmittel zum Verbrauch pro Monat", "42 €", "42 €", "42 €", "42 €", "42 €"],
              ["Wohnumfeldverbesserung je Maßnahme", "4.180 €", "4.180 €", "4.180 €", "4.180 €", "4.180 €"],
              ["Beratungseinsatz (§ 37 Abs. 3)", "halbjährlich möglich", "halbjährlich", "halbjährlich", "halbjährlich, vierteljährlich möglich", "halbjährlich, vierteljährlich möglich"],
            ],
          },
          {
            type: "p",
            text: "Die Beratungseinsätze sind für Pflegegeldbezieher Pflicht, bei Pflegegrad 1 freiwillig. Die Kosten trägt die Pflegekasse. Bei der Tages- und Nachtpflege handelt es sich um einen eigenen Leistungsanspruch, der neben Pflegegeld oder Sachleistung besteht.",
          },
        ],
      },
      {
        h2: "Wie viele Punkte braucht man für welchen Pflegegrad?",
        blocks: [
          {
            type: "p",
            text: "Der Medizinische Dienst vergibt 0 bis 100 Punkte: Pflegegrad 1 ab 12,5 Punkten, Pflegegrad 2 ab 27, Pflegegrad 3 ab 47,5, Pflegegrad 4 ab 70 und Pflegegrad 5 ab 90 Punkten (§ 15 SGB XI).",
          },
          {
            type: "table",
            caption: "Punkteschwellen und Bedeutung der Pflegegrade",
            head: ["Pflegegrad", "Punkte", "Beeinträchtigung der Selbstständigkeit"],
            rows: [
              ["1", "12,5 bis unter 27", "gering"],
              ["2", "27 bis unter 47,5", "erheblich"],
              ["3", "47,5 bis unter 70", "schwer"],
              ["4", "70 bis unter 90", "schwerst"],
              ["5", "90 bis 100", "schwerst, mit besonderen Anforderungen an die pflegerische Versorgung"],
            ],
          },
          {
            type: "p",
            text: "Die Punkte ergeben sich aus sechs gewichteten Modulen. Am stärksten zählt die Selbstversorgung mit 40 %. Wie die Begutachtung abläuft, lesen Sie unter [MD-Begutachtung vorbereiten](/ratgeber/md-begutachtung-vorbereiten/). Eine erste Einschätzung gibt der [Pflegegrad-Rechner](/pflegegrad-rechner/).",
          },
        ],
      },
      {
        h2: "Was bekommt man bei Pflegegrad 1?",
        blocks: [
          {
            type: "p",
            text: "Bei Pflegegrad 1 gibt es kein Pflegegeld und keine Pflegesachleistung, aber den Entlastungsbetrag von 131 € im Monat. Dazu kommen Pflegehilfsmittel bis 42 € im Monat, bis zu 4.180 € für Umbauten und ein halbjährlicher Beratungsbesuch.",
          },
          {
            type: "ul",
            items: [
              "**Entlastungsbetrag 131 € im Monat:** bei Pflegegrad 1 ausnahmsweise auch für Körperpflege durch einen Pflegedienst nutzbar, etwa für Hilfe beim Duschen",
              "**Pflegehilfsmittel zum Verbrauch:** bis 42 € im Monat, zum Beispiel Einmalhandschuhe oder Bettschutzeinlagen",
              "**Wohnumfeldverbesserung:** bis 4.180 € je Maßnahme, zum Beispiel für eine bodengleiche Dusche",
              "**Pflegeberatung und Beratungsbesuch:** halbjährlich zu Hause möglich",
              "**Pflegekurse:** kostenlos für Angehörige",
              "**Wohngruppenzuschlag:** 224 € im Monat in ambulant betreuten Wohngruppen unter bestimmten Voraussetzungen",
              "**Bei Pflege im Heim:** Zuschuss von 131 € im Monat",
            ],
          },
          {
            type: "p",
            text: "Verhinderungs- und Kurzzeitpflege aus dem Gemeinsamen Jahresbetrag gibt es bei Pflegegrad 1 nicht. Wie Sie die 131 € am besten einsetzen, steht im Beitrag [Entlastungsbetrag 131 Euro](/ratgeber/entlastungsbetrag-131-euro/).",
          },
          {
            type: "p",
            text: "Pflegegrad 1 ist trotzdem wertvoll. Er öffnet die Tür zur Pflegeberatung und zu ersten Hilfen im Alltag. Nimmt der Hilfebedarf zu, stellen Sie einen Antrag auf Höherstufung. Die erneute Begutachtung kann dann ab 14 Jahren auch per Telefon oder Video stattfinden. Halten Sie Veränderungen im Alltag deshalb frühzeitig schriftlich fest.",
          },
        ],
      },
      {
        h2: "Welche Leistungen gibt es bei Pflegegrad 2 und 3?",
        blocks: [
          {
            type: "p",
            text: "Bei Pflegegrad 2 gibt es 347 € Pflegegeld oder 796 € Sachleistung im Monat, bei Pflegegrad 3 sind es 599 € oder 1.497 €. Beide können Sie als Kombinationsleistung mischen.",
          },
          {
            type: "p",
            text: "Oft passt die Kombination: Ein Pflegedienst übernimmt einzelne Einsätze, den Rest leisten Angehörige. Nutzen Sie zum Beispiel bei Pflegegrad 3 40 % der Sachleistung, erhalten Sie noch 60 % des Pflegegelds, also 359,40 €. Das ausführliche Rechenbeispiel finden Sie unter [Pflegesachleistung oder Pflegegeld](/ratgeber/pflegesachleistung-oder-pflegegeld/).",
          },
          {
            type: "p",
            text: "Zusätzlich stehen Ihnen ab Pflegegrad 2 Tages- und Nachtpflege (721 € bzw. 1.357 € im Monat) und der Gemeinsame Jahresbetrag für Verhinderungs- und Kurzzeitpflege zur Verfügung. Bis zu 40 % der nicht genutzten Sachleistung können Sie außerdem für anerkannte Angebote zur Unterstützung im Alltag umwandeln.",
          },
          {
            type: "p",
            text: "Wichtig: Die Sachleistung ist kein Geld auf Ihrem Konto. Sie steht als Budget für den Pflegedienst zur Verfügung. Nicht genutzte Sachleistung verfällt am Monatsende, wird aber über die Kombinationsleistung anteilig als Pflegegeld ausgezahlt.",
          },
          {
            type: "cta",
            text: "Sie möchten wissen, wie Sie die Leistungen Ihres Pflegegrads am besten nutzen? TwinsCare berät Sie in Bergedorf, Lohbrügge und Hamburg-Ost kostenlos zu Hause und rechnet direkt mit Pflege- und Krankenkasse ab.",
          },
        ],
      },
      {
        h2: "Welche Leistungen gibt es bei Pflegegrad 4 und 5?",
        blocks: [
          {
            type: "p",
            text: "Bei Pflegegrad 4 zahlt die Pflegekasse 800 € Pflegegeld oder 1.859 € Sachleistung im Monat, bei Pflegegrad 5 sind es 990 € oder 2.299 €. Pflegegeldbezieher rufen halbjährlich einen Beratungseinsatz ab und können ihn auf Wunsch vierteljährlich nutzen.",
          },
          {
            type: "p",
            text: "Bei diesen Pflegegraden ist der Hilfebedarf hoch, oft rund um die Uhr. Viele Familien kombinieren deshalb mehrere Bausteine: einen Pflegedienst für Körperpflege und Behandlungspflege, Tagespflege an einzelnen Tagen (1.685 € bzw. 2.085 € im Monat) und Verhinderungspflege für Auszeiten der Angehörigen.",
          },
          {
            type: "p",
            text: "Bei Pflegegrad 4 und 5 lohnt sich ein genauer Blick auf die Wohnung. Ein Pflegebett, ein Lifter oder ein Umbau des Badezimmers können die tägliche Pflege deutlich erleichtern. Für Umbauten gibt es bis zu 4.180 € je Maßnahme, technische Hilfsmittel beantragen Sie bei der Kasse.",
          },
          {
            type: "p",
            text: "Behandlungspflege nach ärztlicher Verordnung, etwa Wundversorgung oder Injektionen, zahlt zusätzlich die Krankenkasse nach § 37 SGB V. Sie mindert die Pflegesachleistung nicht. Mehr dazu unter [Behandlungspflege](/leistungen/behandlungspflege/).",
          },
        ],
      },
      {
        h2: "Was ist der Gemeinsame Jahresbetrag für Verhinderungs- und Kurzzeitpflege?",
        blocks: [
          {
            type: "p",
            text: "Seit dem 1. Juli 2025 gibt es ab Pflegegrad 2 einen Gemeinsamen Jahresbetrag von bis zu 3.539 € pro Kalenderjahr, den Sie flexibel für Verhinderungspflege und Kurzzeitpflege nutzen können (§ 42a SGB XI).",
          },
          {
            type: "ul",
            items: [
              "Eine Vorpflegezeit ist nicht mehr nötig.",
              "Verhinderungspflege ist bis zu acht Wochen im Jahr möglich.",
              "Während der Verhinderungspflege wird die Hälfte des bisherigen Pflegegelds weitergezahlt.",
              "Die Verhinderungspflege kann ein Pflegedienst zu Hause übernehmen – stundenweise oder tageweise.",
            ],
          },
          {
            type: "p",
            text: "Wie Sie die Verhinderungspflege beantragen, lesen Sie im Beitrag [Verhinderungspflege beantragen](/ratgeber/verhinderungspflege-antrag/).",
          },
        ],
      },
      {
        h2: "Wie bekommt man einen höheren Pflegegrad?",
        blocks: [
          {
            type: "p",
            text: "Hat sich der Hilfebedarf verschlechtert, stellen Sie bei der Pflegekasse einen Antrag auf Höherstufung. Der Medizinische Dienst begutachtet dann erneut, bei Höherstufungen ab 14 Jahren auch per Telefon oder Video möglich.",
          },
          {
            type: "ol",
            items: [
              "Veränderungen im Alltag einige Tage lang in einem Pflegetagebuch festhalten.",
              "Formlos einen Antrag auf Höherstufung bei der Pflegekasse stellen.",
              "Aktuelle Arztberichte und Krankenhausberichte sammeln.",
              "Den Termin mit dem Medizinischen Dienst gemeinsam mit einer Angehörigen wahrnehmen.",
              "Den Bescheid prüfen und bei Bedarf innerhalb eines Monats Widerspruch einlegen.",
            ],
          },
          {
            type: "p",
            text: "Auch für die Höherstufung gilt: Die höheren Leistungen gibt es ab dem Monat, in dem Sie den Antrag stellen. Warten Sie deshalb nicht zu lange. Den Ablauf für Hamburg erklärt der Beitrag [Pflegegrad beantragen in Hamburg](/ratgeber/pflegegrad-beantragen-hamburg/).",
          },
        ],
      },
      {
        h2: "Welche Leistungen gelten für alle Pflegegrade gleich?",
        blocks: [
          {
            type: "p",
            text: "Für alle Pflegegrade von 1 bis 5 gleich sind der Entlastungsbetrag von 131 € im Monat, Pflegehilfsmittel zum Verbrauch bis 42 € im Monat und Zuschüsse von bis zu 4.180 € je Maßnahme für Umbauten in der Wohnung.",
          },
          {
            type: "ul",
            items: [
              "**Entlastungsbetrag (§ 45b SGB XI):** 131 € im Monat; nicht genutzte Beträge bis zum 30. Juni des Folgejahres verwendbar.",
              "**Pflegehilfsmittel zum Verbrauch:** bis 42 € im Monat, zum Beispiel Handschuhe, Desinfektionsmittel, Bettschutzeinlagen.",
              "**Technische Pflegehilfsmittel:** zum Beispiel ein Pflegebett; Erwachsene zahlen in der Regel 10 % zu, höchstens 25 € je Hilfsmittel.",
              "**Wohnumfeldverbesserung:** bis 4.180 € je Maßnahme, bei mehreren Pflegebedürftigen in einer Wohnung bis 16.720 €.",
              "**Pflegeberatung:** kostenlose Beratung durch die Pflegekasse; Pflegekurse für Angehörige.",
            ],
          },
          {
            type: "p",
            text: "Diese Leistungen werden oft vergessen, weil sie neben Pflegegeld und Sachleistung laufen. Fragen Sie bei der Beratung gezielt danach. Hilfe bekommen Sie bei unserer [Pflegeberatung](/leistungen/pflegeberatung/).",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Wie viel Geld bekommt man bei Pflegegrad 2?",
        a: "Bei Pflegegrad 2 gibt es 347 € Pflegegeld oder bis zu 796 € Pflegesachleistung im Monat, dazu den Entlastungsbetrag von 131 €.",
      },
      {
        q: "Bekommt man bei Pflegegrad 1 Geld?",
        a: "Pflegegeld gibt es bei Pflegegrad 1 nicht. Sie erhalten aber den Entlastungsbetrag von 131 € im Monat als Erstattung für anerkannte Angebote, dazu Pflegehilfsmittel und Zuschüsse für Umbauten.",
      },
      {
        q: "Wann werden die Pflegeleistungen wieder erhöht?",
        a: "Die Beträge gelten seit dem 1. Januar 2025. Die nächste gesetzliche Anpassung ist für den 1. Januar 2028 vorgesehen.",
      },
      {
        q: "Ab wie vielen Punkten bekommt man Pflegegrad 3?",
        a: "Ab 47,5 von 100 Punkten. Bis unter 70 Punkte bleibt es bei Pflegegrad 3, ab 70 Punkten gibt es Pflegegrad 4.",
      },
      {
        q: "Verfällt der Entlastungsbetrag, wenn ich ihn nicht nutze?",
        a: "Nicht sofort. Nicht genutzte Beträge können Sie bis zum 30. Juni des Folgejahres verwenden.",
      },
      {
        q: "Kann man Tagespflege und Pflegedienst gleichzeitig nutzen?",
        a: "Ja. Die Tages- und Nachtpflege ist ein eigener Anspruch ab Pflegegrad 2 und besteht neben Pflegegeld oder Pflegesachleistung.",
      },
    ],
    leistung: "ambulante-pflege",
    verwandt: ["pflegesachleistung-oder-pflegegeld", "md-begutachtung-vorbereiten", "entlastungsbetrag-131-euro"],
    quellen: [Q_BMG_BROSCHUERE, Q_BMG_PG1, Q_SGB11_15, Q_VZ_LEISTUNGEN],
  },
];
