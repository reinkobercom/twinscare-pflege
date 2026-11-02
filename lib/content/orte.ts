import type { OrtSeite } from "./types";

// Ortsseiten für das Einsatzgebiet von TwinsCare.
// Lokale Angaben wurden im November 2026 aus den unter `quellen` genannten Seiten übernommen.
// Alles in `pruefen` muss vor dem Livegang noch einmal vor Ort bzw. telefonisch bestätigt werden.

export const ortSeiten: OrtSeite[] = [
  // ───────────────────────────── Bergedorf ─────────────────────────────
  {
    slug: "bergedorf",
    name: "Bergedorf",
    h1: "Ambulanter Pflegedienst in Bergedorf",
    metaTitle: "Pflegedienst Bergedorf – ambulante Pflege | TwinsCare",
    metaDescription:
      "Ambulante Pflege in Hamburg-Bergedorf: TwinsCare pflegt zu Hause in 21029 bis 21039. Infos zu Pflegestützpunkt, Bethesda-Krankenhaus und Kosten 2026.",
    lead:
      "TwinsCare hat sein Büro an der Bergedorfer Straße 85 und pflegt Menschen in ganz Bergedorf zu Hause – von der Altstadt am Serrahn bis nach Nettelnburg. Hier lesen Sie, wer im Bezirk kostenlos berät, was die Pflegekasse zahlt und wie der Start mit uns abläuft.",
    plz: ["21029", "21031", "21033", "21035", "21039"],
    verwaltung: "Bezirk Bergedorf, Freie und Hansestadt Hamburg",
    anfahrt:
      "Unser Büro an der Bergedorfer Straße 85 liegt im Bezirk Bergedorf, die Wege zu Ihnen nach Hause sind kurz.",
    kurz: [
      "TwinsCare sitzt an der Bergedorfer Straße 85 (21033) und versorgt alle Bergedorfer Postleitzahlen von 21029 bis 21039.",
      "Der Pflegestützpunkt Bergedorf und die bezirkliche Seniorenberatung beraten kostenlos im selben Haus am Weidenbaumsweg 21.",
      "Das Agaplesion Bethesda Krankenhaus Bergedorf am Glindersweg hat eine eigene Klinik für Geriatrie (Altersmedizin).",
      "Bei Pflegegrad 2 zahlt die Pflegekasse 2026 bis zu 796 € im Monat für einen Pflegedienst.",
      "Die Erstberatung bei Ihnen zu Hause und der schriftliche Kostenvoranschlag sind kostenlos.",
    ],
    foto: {
      id: "photo-1773227055624-07b515ba87c5",
      alt: "Pflegekraft begleitet eine ältere Frau mit Rollator auf einem Spaziergang",
    },
    sections: [
      {
        h2: "Welcher Pflegedienst versorgt Bergedorf?",
        blocks: [
          {
            type: "p",
            text: "TwinsCare ist ein ambulanter Pflegedienst mit Büro an der Bergedorfer Straße 85 und versorgt den Stadtteil Bergedorf in allen Postleitzahlen von 21029 bis 21039. Wir pflegen Sie dort, wo Sie leben – in der Mietwohnung, im Reihenhaus oder in der Seniorenwohnung.",
          },
          {
            type: "p",
            text: "Bergedorf hat laut Stadt Hamburg rund 37.600 Einwohnerinnen und Einwohner (Stand Ende 2023). Der Stadtteil reicht vom historischen Kern um Sachsentor, Serrahn und Schloss bis zu Wohngebieten wie Bergedorf-West und Nettelnburg. Neben Gründerzeitvillen und Fachwerkhäusern stehen viele Bauten aus den 1970er-Jahren.",
          },
          {
            type: "p",
            text: "Für die Pflege heißt das: Jede Wohnung ist anders. Im Altbau ohne Aufzug planen wir Einsätze anders als in einer barrierefreien Neubauwohnung. Deshalb schauen wir uns Ihre Situation beim ersten Besuch genau an. Sie bekommen eine feste Ansprechpartnerin und ein kleines, festes Team.",
          },
        ],
      },
      {
        h2: "Wo bekommen Angehörige in Bergedorf kostenlose Pflegeberatung?",
        blocks: [
          {
            type: "p",
            text: "Erste neutrale Anlaufstelle ist der Pflegestützpunkt Bergedorf am Weidenbaumsweg 21 (Eingang D) in 21029 Hamburg. Er berät unabhängig von Ihrer Krankenkasse und kommt auf Wunsch auch zu Ihnen nach Hause.",
          },
          {
            type: "p",
            text: "Im selben Gebäude sitzt die bezirkliche Seniorenberatung des Bezirksamts Bergedorf. Sie hilft bei Fragen rund ums Älterwerden, etwa zu Haushaltshilfen, Wohnen oder Treffpunkten. Laut Sozialbehörde arbeiten Pflegestützpunkte und Seniorenberatung eng zusammen. Offene Sprechzeiten ohne Termin gibt es nach Angaben der Stadt montags von 8 bis 12 Uhr und donnerstags von 14 bis 18 Uhr.",
          },
          {
            type: "hinweis",
            title: "Hamburger Hausbesuch ab 80",
            text: "Wer in Hamburg 80 Jahre alt wird, bekommt von der Sozialbehörde das Angebot eines kostenlosen Informationsbesuchs zu Hause. Inzwischen können auch Jüngere und Ältere einen solchen Besuch anfragen. Er ersetzt keine Pflegeberatung, gibt aber einen guten Überblick über Hilfen im Stadtteil.",
          },
          {
            type: "p",
            text: "Bei TwinsCare beraten wir Sie zusätzlich ganz konkret zu Ihrer eigenen Versorgung. Mehr dazu auf unserer Seite [Pflegeberatung zu Hause](/leistungen/pflegeberatung/).",
          },
        ],
      },
      {
        h2: "Welche Leistungen bietet TwinsCare in Bergedorf an?",
        blocks: [
          {
            type: "p",
            text: "In Bergedorf bieten wir Grundpflege, Behandlungspflege, Verhinderungspflege, Entlastungsleistungen, Pflegeberatung und die Versorgung nach einem Krankenhausaufenthalt an. Abgerechnet wird direkt mit Ihrer Pflege- oder Krankenkasse.",
          },
          {
            type: "ul",
            items: [
              "[Ambulante Pflege](/leistungen/ambulante-pflege/): Hilfe beim Waschen, Anziehen, Essen und bei der Bewegung (Grundpflege nach SGB XI).",
              "[Behandlungspflege](/leistungen/behandlungspflege/): Medikamente, Wundversorgung, Injektionen oder Kompressionsstrümpfe auf ärztliche Verordnung (§ 37 SGB V).",
              "[Verhinderungspflege](/leistungen/verhinderungspflege/): Wir springen ein, wenn pflegende Angehörige Urlaub machen oder krank sind (§ 39 SGB XI).",
              "[Entlastungsleistungen](/leistungen/entlastungsleistungen/): Unterstützung im Alltag, bezahlt aus dem Entlastungsbetrag von 131 € im Monat (§ 45b SGB XI).",
              "[Pflegeberatung](/leistungen/pflegeberatung/): auch der vorgeschriebene Beratungseinsatz für Pflegegeldbezieher nach § 37 Abs. 3 SGB XI.",
              "[Pflege nach dem Krankenhaus](/leistungen/pflege-nach-krankenhausaufenthalt/): Versorgung ab dem ersten Tag wieder zu Hause.",
            ],
          },
        ],
      },
      {
        h2: "Was passiert nach der Entlassung aus dem Bethesda Krankenhaus Bergedorf?",
        blocks: [
          {
            type: "p",
            text: "Vor der Entlassung aus dem Agaplesion Bethesda Krankenhaus Bergedorf am Glindersweg 80 plant das Entlassmanagement der Klinik mit Ihnen die Versorgung zu Hause; ein Pflegedienst wie TwinsCare kann ab dem ersten Tag daheim übernehmen. Zu diesem Entlassmanagement sind Krankenhäuser nach § 39 Abs. 1a SGB V verpflichtet.",
          },
          {
            type: "p",
            text: "Das Bethesda hat eine eigene Klinik für Geriatrie, also für Altersmedizin. Wer nach einem Sturz oder einer schweren Erkrankung von dort nach Hause kommt, braucht oft Wundversorgung, Hilfe bei Medikamenten oder beim Waschen. Je früher das geklärt ist, desto ruhiger wird der erste Tag zu Hause.",
          },
          {
            type: "ol",
            items: [
              "Sprechen Sie den Sozialdienst auf der Station früh an, möglichst einige Tage vor der Entlassung.",
              "Bitten Sie um eine Verordnung für häusliche Krankenpflege, falls Behandlungspflege nötig ist.",
              "Rufen Sie uns an, damit wir den ersten Einsatz für den Entlasstag planen können.",
              "Klären Sie mit uns, ob ein Pflegegrad beantragt oder erhöht werden sollte.",
            ],
          },
          {
            type: "p",
            text: "Unsere [Checkliste zur Krankenhausentlassung](/ratgeber/krankenhaus-entlassung-checkliste/) hilft bei der Vorbereitung. Was wir übernehmen, lesen Sie unter [Pflege nach dem Krankenhausaufenthalt](/leistungen/pflege-nach-krankenhausaufenthalt/).",
          },
          { type: "cta", text: "Entlassung steht bevor? Wir beraten Sie kostenlos bei Ihnen zu Hause in Bergedorf." },
        ],
      },
      {
        h2: "Was zahlt die Pflegekasse für Pflege in Bergedorf?",
        blocks: [
          {
            type: "p",
            text: "Für einen ambulanten Pflegedienst zahlt die Pflegekasse 2026 bis zu 796 € im Monat bei Pflegegrad 2 und bis zu 1.497 € bei Pflegegrad 3. Dazu kommt ab Pflegegrad 1 der Entlastungsbetrag von 131 € im Monat.",
          },
          {
            type: "p",
            text: "Diese Beträge sind bundesweit gleich, in Bergedorf also genauso wie in Kiel oder München. Wir rechnen direkt mit Ihrer Kasse ab und geben Ihnen vorher einen schriftlichen Kostenvoranschlag. Alle Beträge finden Sie unter [Kosten und Finanzierung](/kosten/). Noch kein Pflegegrad? So können Sie einen [Pflegegrad in Hamburg beantragen](/ratgeber/pflegegrad-beantragen-hamburg/).",
          },
        ],
      },
      {
        h2: "Wo treffen sich ältere Menschen in Bergedorf?",
        blocks: [
          {
            type: "p",
            text: "Bergedorf hat mehrere offene Treffpunkte für Seniorinnen und Senioren, zum Beispiel das Haus im Park der Körber-Stiftung am Gräpelweg für Menschen ab 50 und den AWO-Seniorentreff im Lichtwarkhaus. Weitere Angebote nennt der Seniorenwegweiser des Bezirks.",
          },
          {
            type: "p",
            text: "Solche Treffpunkte halten Kontakte lebendig, gerade wenn zu Hause die Pflege beginnt. Für die Interessen älterer Menschen im Bezirk setzt sich außerdem der Seniorenbeirat Bergedorf ein. Er ist Ansprechpartner für Politik und Verwaltung.",
          },
          {
            type: "p",
            text: "Fällt der Weg zum Treffpunkt allein schwer, lässt sich eine Begleitung oft über den Entlastungsbetrag finanzieren. Wie das geht, erklären wir unter [Entlastungsbetrag von 131 Euro](/ratgeber/entlastungsbetrag-131-euro/).",
          },
        ],
      },
      {
        h2: "Wie startet die Pflege mit TwinsCare in Bergedorf?",
        blocks: [
          {
            type: "p",
            text: "Am Anfang steht eine kostenlose Erstberatung bei Ihnen zu Hause in Bergedorf. Danach erhalten Sie einen schriftlichen Kostenvoranschlag, und erst dann beginnt der erste Einsatz.",
          },
          {
            type: "ol",
            items: [
              "Sie rufen uns an oder schicken uns eine [Pflegeanfrage](/pflege-anfragen/).",
              "Wir besuchen Sie und besprechen, welche Hilfe Sie brauchen.",
              "Sie bekommen einen schriftlichen Kostenvoranschlag.",
              "Wir helfen bei Anträgen an Pflege- oder Krankenkasse.",
              "Ihr festes Team beginnt mit der Pflege.",
            ],
          },
          {
            type: "p",
            text: "Den Pflegevertrag können Sie nach § 120 Abs. 2 SGB XI jederzeit ohne Frist kündigen. Sie gehen also kein langfristiges Risiko ein.",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Welcher Pflegestützpunkt ist für Bergedorf zuständig?",
        a: "Zuständig ist der Pflegestützpunkt Bergedorf am Weidenbaumsweg 21 (Eingang D), 21029 Hamburg. Er berät kostenlos und kommt bei Bedarf auch zu Ihnen nach Hause. Die bezirkliche Seniorenberatung sitzt im selben Haus.",
      },
      {
        q: "Versorgt TwinsCare auch Nettelnburg und Bergedorf-West?",
        a: "Ja. Beide Wohngebiete gehören zu unserem Einsatzgebiet in Bergedorf. Ob eine bestimmte Adresse in den Vier- und Marschlanden dazugehört, klären wir gern kurz am Telefon.",
      },
      {
        q: "Was sollte ich vor der Entlassung aus dem Bethesda Krankenhaus klären?",
        a: "Sprechen Sie früh mit dem Sozialdienst der Station, lassen Sie sich nötige Verordnungen mitgeben und melden Sie sich bei uns. Dann können wir den ersten Einsatz für den Entlasstag planen.",
      },
      {
        q: "Was kostet die Erstberatung bei TwinsCare?",
        a: "Nichts. Die Erstberatung bei Ihnen zu Hause und der schriftliche Kostenvoranschlag sind kostenlos und unverbindlich.",
      },
      {
        q: "Hilft TwinsCare beim Antrag auf einen Pflegegrad?",
        a: "Ja. Wir helfen beim Antrag an die Pflegekasse und bei der Vorbereitung auf die Begutachtung durch den Medizinischen Dienst. Tipps dazu finden Sie unter [MD-Begutachtung vorbereiten](/ratgeber/md-begutachtung-vorbereiten/).",
      },
    ],
    nachbarn: ["lohbruegge", "wentorf", "reinbek"],
    quellen: [
      {
        title: "hamburg.de – Stadtteil Bergedorf",
        url: "https://www.hamburg.de/leben-in-hamburg/bezirke-hamburg/stadtteile-bezirk-bergedorf/bergedorf-371382",
      },
      {
        title: "hamburg.de (Sozialbehörde) – Pflegestützpunkte in Hamburg",
        url: "https://www.hamburg.de/politik-und-verwaltung/behoerden/sozialbehoerde/themen/pflege/beratung/pflegestuetzpunkte",
      },
      {
        title: "hamburg.de (Sozialbehörde) – Hamburger Hausbesuch für Seniorinnen und Senioren",
        url: "https://www.hamburg.de/politik-und-verwaltung/behoerden/sozialbehoerde/themen/pflege/hausbesuch-86112",
      },
      {
        title: "Bezirksamt Bergedorf – Seniorenwegweiser Bergedorf 2021 (Staats- und Universitätsbibliothek Hamburg)",
        url: "https://epub.sub.uni-hamburg.de/epub/volltexte/2021/129055/pdf/seniorenwegweiser_bergedorf_2021.pdf",
      },
      {
        title: "AOK – Übersicht Pflegestützpunkte Hamburg (Adressen)",
        url: "https://www.aok.de/pk/fileadmin/user_upload/AOK-Rheinland-Hamburg/05-Content-PDF/Pflegestuetzpunkte_Hamburg.pdf",
      },
      {
        title: "Deutsches Krankenhausverzeichnis – Agaplesion Bethesda Krankenhaus Bergedorf",
        url: "https://www.deutsches-krankenhaus-verzeichnis.de/app/portrait/04242933803e8bd0/pdf",
      },
    ],
    pruefen: [
      "Pflegestützpunkt Bergedorf: Adresse Weidenbaumsweg 21, Eingang D, 21029 (Quelle AOK-PDF ohne Datum und Seniorenwegweiser 2021) – aktuell bestätigen; hamburg.de-Kontaktseite (…/bergedorf/themen/soziales/pflegestuetzpunkt-56364) konnte nicht geöffnet werden.",
      "Bezirkliche Seniorenberatung Bergedorf im selben Haus (Stand Seniorenwegweiser 2021).",
      "Offene Sprechzeiten Mo 8–12 und Do 14–18 Uhr (hamburg.de, stadtweit angegeben) für Bergedorf bestätigen.",
      "Einwohnerzahl Stadtteil Bergedorf rund 37.600 (hamburg.de-Tabelle, Stand 31.12.2023; Seite nennt an anderer Stelle ca. 34.000).",
      "Treffpunkte Haus im Park (Körber-Stiftung, Gräpelweg) und AWO-Seniorentreff Lichtwarkhaus – bestehen sie noch (Stand 2021)?",
      "Seniorenbeirat Bergedorf – weiterhin aktiv.",
      "Bethesda: Name „Agaplesion Bethesda Krankenhaus Bergedorf“, Glindersweg 80, Klinik für Geriatrie.",
      "Welche Teile von PLZ 21039 (Vier- und Marschlande) TwinsCare tatsächlich anfährt.",
    ],
  },

  // ───────────────────────────── Lohbrügge ─────────────────────────────
  {
    slug: "lohbruegge",
    name: "Lohbrügge",
    h1: "Pflegedienst für Lohbrügge – Pflege zu Hause von nebenan",
    metaTitle: "Pflegedienst Lohbrügge – ambulante Pflege | TwinsCare",
    metaDescription:
      "TwinsCare pflegt in Lohbrügge, Boberg und Sande zu Hause. Büro an der Bergedorfer Straße, kostenlose Erstberatung, Abrechnung direkt mit der Pflegekasse.",
    lead:
      "Lohbrügge ist für TwinsCare Nachbarschaft: Unser Büro liegt an der Bergedorfer Straße, an der auch das BG Klinikum Hamburg seinen Sitz hat. Wir pflegen in Lohbrügge-Nord, in Sande und in Boberg – in der Hochhauswohnung genauso wie im Einfamilienhaus.",
    plz: ["21031", "21033", "22115"],
    verwaltung: "Bezirk Bergedorf, Freie und Hansestadt Hamburg",
    anfahrt:
      "Unser Büro an der Bergedorfer Straße 85 hat die Postleitzahl 21033 – dieselbe wie große Teile von Lohbrügge.",
    kurz: [
      "Lohbrügge hat rund 41.300 Einwohnerinnen und Einwohner und gehört zum Bezirk Bergedorf.",
      "Für Pflegeberatung ist der Pflegestützpunkt Bergedorf zuständig, auch für Adressen mit der Postleitzahl 22115.",
      "Das BG Klinikum Hamburg an der Bergedorfer Straße 10 ist auf Unfallchirurgie, Querschnittlähmung und Rehabilitation spezialisiert.",
      "Behandlungspflege nach einer Klinik zahlt die Krankenkasse, wenn ein Arzt sie verordnet (§ 37 SGB V).",
    ],
    foto: {
      id: "photo-1631815590058-860e4f83c1e8",
      alt: "Pflegekraft misst einer Frau zu Hause den Blutdruck",
    },
    sections: [
      {
        h2: "Wer pflegt in Lohbrügge zu Hause?",
        blocks: [
          {
            type: "p",
            text: "TwinsCare pflegt Menschen in ganz Lohbrügge zu Hause, in den Postleitzahlen 21031, 21033 und 22115. Unser Büro liegt an der Bergedorfer Straße 85, also nur wenige Minuten von den meisten Lohbrügger Adressen entfernt.",
          },
          {
            type: "p",
            text: "Lohbrügge ist mit rund 41.300 Einwohnerinnen und Einwohnern auf 13 Quadratkilometern (Stand Ende 2023) größer als der Stadtteil Bergedorf selbst. Zu Lohbrügge gehören Lohbrügge-Nord, Sande mit den Sander Tannen und Boberg am Rand der Boberger Niederung. Mittelpunkt ist der Lohbrügger Markt mit Wochenmarkt am Mittwoch und Samstag.",
          },
          {
            type: "p",
            text: "Bei uns haben Sie eine feste Ansprechpartnerin und ein kleines, festes Team. Wer morgens zu Ihnen kommt, kennt Ihre Gewohnheiten.",
          },
        ],
      },
      {
        h2: "Was ist bei Pflege in den Lohbrügger Wohnsiedlungen wichtig?",
        blocks: [
          {
            type: "p",
            text: "In Lohbrügge wohnen viele ältere Menschen in großen Siedlungen der 1960er- und 1970er-Jahre, etwa im „Lindwurm“ am Röpraredder mit 258 Wohnungen. Dort zählen funktionierende Aufzüge, kurze Wege im Haus und eine gute Absprache mit Nachbarn und Hausverwaltung.",
          },
          {
            type: "p",
            text: "Andere wohnen seit Jahrzehnten im eigenen Haus in Sande oder Boberg. Dort sind Treppen, Badewannen und lange Gartenwege oft das größere Thema. Beim Erstbesuch sehen wir uns die Wohnung mit Ihnen an und sagen Ihnen ehrlich, was sich ändern sollte.",
          },
          {
            type: "p",
            text: "Für Umbauten wie ein bodengleiches Duschbad zahlt die Pflegekasse bis zu 4.180 € je Maßnahme. Den Antrag stellen Sie vor dem Umbau, wir helfen Ihnen dabei.",
          },
        ],
      },
      {
        h2: "Welche Leistungen bekommen Sie von TwinsCare in Lohbrügge?",
        blocks: [
          {
            type: "p",
            text: "Wir bieten in Lohbrügge die vollständige ambulante Versorgung an: Grund- und Behandlungspflege, Verhinderungspflege, Entlastung im Alltag, Pflegeberatung und Pflege nach dem Krankenhaus.",
          },
          {
            type: "ul",
            items: [
              "[Grundpflege zu Hause](/leistungen/ambulante-pflege/) – Körperpflege, Anziehen, Mobilisation.",
              "[Behandlungspflege](/leistungen/behandlungspflege/) – etwa Insulin, Wundverbände, Kompressionsstrümpfe auf Verordnung.",
              "[Verhinderungspflege](/leistungen/verhinderungspflege/) – Vertretung, wenn Angehörige eine Pause brauchen.",
              "[Entlastungsleistungen](/leistungen/entlastungsleistungen/) – Unterstützung im Alltag aus dem Entlastungsbetrag.",
              "[Pflegeberatung und Beratungseinsatz](/leistungen/pflegeberatung/) – auch der Pflichtbesuch für Pflegegeldbezieher.",
              "[Pflege nach dem Krankenhausaufenthalt](/leistungen/pflege-nach-krankenhausaufenthalt/) – Übergang von der Klinik nach Hause.",
            ],
          },
        ],
      },
      {
        h2: "Welche Kliniken liegen in der Nähe von Lohbrügge?",
        blocks: [
          {
            type: "p",
            text: "In Lohbrügge selbst liegt das BG Klinikum Hamburg an der Bergedorfer Straße 10. Für Patientinnen und Patienten aus dem Süden des Stadtteils ist außerdem das Agaplesion Bethesda Krankenhaus Bergedorf am Glindersweg nicht weit.",
          },
          {
            type: "p",
            text: "Das BG Klinikum ist unter anderem auf Unfallchirurgie, Handchirurgie, Querschnittlähmung und Rehabilitation spezialisiert. Wer von dort nach Hause kommt, braucht oft für einige Wochen Hilfe bei der Körperpflege oder Behandlungspflege. Das Bethesda hat eine Klinik für Geriatrie.",
          },
          {
            type: "p",
            text: "Krankenhäuser müssen nach § 39 Abs. 1a SGB V ein Entlassmanagement anbieten. Fragen Sie auf Station nach dem Sozialdienst und melden Sie sich bei uns, sobald der Entlasstermin feststeht. Eine Übersicht bietet unsere [Checkliste zur Krankenhausentlassung](/ratgeber/krankenhaus-entlassung-checkliste/).",
          },
          { type: "cta", text: "Pflege in Lohbrügge anfragen – wir kommen zur kostenlosen Erstberatung zu Ihnen." },
        ],
      },
      {
        h2: "Wo gibt es Pflegeberatung für Lohbrügge?",
        blocks: [
          {
            type: "p",
            text: "Für Lohbrügge ist der Pflegestützpunkt Bergedorf am Weidenbaumsweg 21 in 21029 Hamburg zuständig. Er berät kostenlos und auf Wunsch auch bei Ihnen zu Hause.",
          },
          {
            type: "p",
            text: "Achtung bei der Postleitzahl 22115: Sie gilt für Teile von Lohbrügge und für Teile von Billstedt. Entscheidend ist der Bezirk. Lohbrügge gehört zu Bergedorf, Billstedt zu Hamburg-Mitte mit eigenem Pflegestützpunkt.",
          },
          {
            type: "p",
            text: "Die bezirkliche Seniorenberatung im selben Haus hat laut Seniorenwegweiser eine eigene Zuständigkeit für Lohbrügge. Offene Treffpunkte im Stadtteil sind zum Beispiel „brügge – ein Haus für Alle“ an der Leuschnerstraße, der DRK-Seniorentreff und das Begegnungszentrum am Harders Kamp.",
          },
        ],
      },
      {
        h2: "Was übernimmt die Pflegekasse in Lohbrügge?",
        blocks: [
          {
            type: "p",
            text: "Die Pflegekasse zahlt 2026 für einen Pflegedienst bis zu 796 € (Pflegegrad 2), 1.497 € (Pflegegrad 3), 1.859 € (Pflegegrad 4) oder 2.299 € (Pflegegrad 5) im Monat. Behandlungspflege rechnen wir getrennt mit der Krankenkasse ab.",
          },
          {
            type: "p",
            text: "Sie erhalten vor dem ersten Einsatz einen schriftlichen Kostenvoranschlag. Beispiele und alle weiteren Beträge stehen unter [Kosten und Finanzierung](/kosten/). Ob Geld- oder Sachleistung besser passt, erklärt der Ratgeber [Pflegesachleistung oder Pflegegeld](/ratgeber/pflegesachleistung-oder-pflegegeld/).",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Ich wohne in 22115 – bin ich in Lohbrügge oder in Billstedt?",
        a: "Die Postleitzahl 22115 gilt für Teile beider Stadtteile. Für den Pflegestützpunkt zählt der Bezirk: Lohbrügger Adressen gehören zu Bergedorf, Billstedter zu Hamburg-Mitte. TwinsCare versorgt beide Gebiete.",
      },
      {
        q: "Kommt TwinsCare auch nach Boberg?",
        a: "Ja. Boberg gehört zu Lohbrügge und liegt in unserem Einsatzgebiet.",
      },
      {
        q: "Brauche ich nach dem BG Klinikum eine Verordnung für die Pflege zu Hause?",
        a: "Für Behandlungspflege wie Wundversorgung oder Medikamentengabe brauchen Sie eine ärztliche Verordnung für häusliche Krankenpflege. Für Grundpflege über die Pflegekasse ist dagegen ein Pflegegrad nötig.",
      },
      {
        q: "Kann ich den Pflegevertrag wieder kündigen?",
        a: "Ja, jederzeit und ohne Frist (§ 120 Abs. 2 SGB XI).",
      },
      {
        q: "Wie finde ich den passenden Pflegedienst?",
        a: "Achten Sie auf feste Ansprechpartner, einen schriftlichen Kostenvoranschlag und eine Beratung vor Ort. Unsere [Checkliste zur Pflegedienstsuche](/ratgeber/pflegedienst-finden-checkliste/) hilft beim Vergleich.",
      },
    ],
    nachbarn: ["bergedorf", "billstedt", "glinde"],
    quellen: [
      {
        title: "hamburg.de – Stadtteil Lohbrügge",
        url: "https://www.hamburg.de/leben-in-hamburg/bezirke-hamburg/stadtteile-bezirk-bergedorf/lohbruegge-371664",
      },
      {
        title: "Bezirksamt Bergedorf – Seniorenwegweiser Bergedorf 2021 (Staats- und Universitätsbibliothek Hamburg)",
        url: "https://epub.sub.uni-hamburg.de/epub/volltexte/2021/129055/pdf/seniorenwegweiser_bergedorf_2021.pdf",
      },
      {
        title: "AOK – Übersicht Pflegestützpunkte Hamburg (Adressen)",
        url: "https://www.aok.de/pk/fileadmin/user_upload/AOK-Rheinland-Hamburg/05-Content-PDF/Pflegestuetzpunkte_Hamburg.pdf",
      },
      {
        title: "hamburg.de (Sozialbehörde) – Pflegestützpunkte in Hamburg",
        url: "https://www.hamburg.de/politik-und-verwaltung/behoerden/sozialbehoerde/themen/pflege/beratung/pflegestuetzpunkte",
      },
      {
        title: "Deutsches Krankenhausverzeichnis – BG Klinikum Hamburg",
        url: "https://www.deutsches-krankenhaus-verzeichnis.de/app/portrait/a5f57d6845fafc09/pdf",
      },
      {
        title: "Deutsches Krankenhausverzeichnis – Agaplesion Bethesda Krankenhaus Bergedorf",
        url: "https://www.deutsches-krankenhaus-verzeichnis.de/app/portrait/04242933803e8bd0/pdf",
      },
    ],
    pruefen: [
      "Liegt das Büro Bergedorfer Straße 85 tatsächlich im Stadtteil Lohbrügge oder in Bergedorf? (PLZ 21033 deckt v. a. Lohbrügge ab; Text vermeidet eine Festlegung.)",
      "Einwohnerzahl Lohbrügge rund 41.300 auf 13 km² (hamburg.de-Tabelle, Stand 31.12.2023; Seite nennt an anderer Stelle „mehr als 39.000“).",
      "Wochenmarkt Lohbrügger Markt mittwochs und samstags.",
      "„Lindwurm“ am Röpraredder mit 258 Wohnungen (hamburg.de).",
      "PLZ 22115 teils Lohbrügge, teils Billstedt – Zuordnung bestätigen.",
      "Eigene Zuständigkeit der Seniorenberatung für Lohbrügge (Stand Seniorenwegweiser 2021).",
      "Treffpunkte „brügge – ein Haus für Alle“ (Leuschnerstraße), DRK-Seniorentreff, Begegnungszentrum Harders Kamp – noch aktiv?",
      "BG Klinikum: Fachgebiete laut Krankenhausverzeichnis; liegt Bergedorfer Straße 10 im Stadtteil Lohbrügge (Boberg)?",
      "Pflegestützpunkt Bergedorf Weidenbaumsweg 21 aktuell bestätigen.",
    ],
  },

  // ───────────────────────────── Billstedt ─────────────────────────────
  {
    slug: "billstedt",
    name: "Billstedt",
    h1: "Ambulante Pflege in Billstedt",
    metaTitle: "Pflegedienst Billstedt – ambulante Pflege | TwinsCare",
    metaDescription:
      "Ambulanter Pflegedienst für Billstedt und Mümmelmannsberg: Pflege zu Hause, Beratung, Verhinderungspflege. Mit Infos zu Pflegestützpunkt und Seniorentreffs.",
    lead:
      "In Billstedt leben mehr als 13.000 Menschen, die 65 Jahre oder älter sind. TwinsCare pflegt sie zu Hause – in Mümmelmannsberg, in Schiffbek, am Öjendorfer Park und in allen anderen Teilen des Stadtteils.",
    plz: ["22111", "22113", "22115", "22117", "22119"],
    verwaltung: "Bezirk Hamburg-Mitte, Freie und Hansestadt Hamburg",
    anfahrt:
      "Billstedt liegt einige Kilometer nordwestlich unseres Büros an der Bergedorfer Straße 85.",
    kurz: [
      "Billstedt hat rund 72.600 Einwohnerinnen und Einwohner, davon 18,2 % im Alter ab 65 Jahren (Hamburg: 17,8 %, Stand 2023).",
      "Zuständig ist der Pflegestützpunkt Hamburg-Mitte am Besenbinderhof 41, der auch Hausbesuche macht.",
      "Im Stadtteil gibt es mehrere Seniorentreffs, darunter den AWO-Seniorentreff Billstedt und den interkulturellen Seniorentreff Liman.",
      "TwinsCare versorgt alle Billstedter Postleitzahlen von 22111 bis 22119.",
    ],
    foto: {
      id: "photo-1762955913084-96ea3f986468",
      alt: "Betreuerin strickt gemeinsam mit älteren Frauen",
    },
    sections: [
      {
        h2: "Welcher Pflegedienst versorgt Billstedt?",
        blocks: [
          {
            type: "p",
            text: "TwinsCare versorgt als ambulanter Pflegedienst ganz Billstedt in den Postleitzahlen 22111, 22113, 22115, 22117 und 22119. Wir kommen zu Ihnen nach Hause, ob in Mümmelmannsberg, Schiffbek oder Öjendorf.",
          },
          {
            type: "p",
            text: "Billstedt ist mit rund 72.600 Einwohnerinnen und Einwohnern einer der größten Stadtteile Hamburgs. Laut Statistikamt Nord waren 2023 gut 13.200 von ihnen 65 Jahre oder älter. Das sind 18,2 % – etwas mehr als im Hamburger Durchschnitt von 17,8 %.",
          },
          {
            type: "p",
            text: "Der Stadtteil ist vielfältig. Neben Hochhaussiedlungen wie Mümmelmannsberg und Dringsheide gibt es Einfamilienhäuser und ruhige Wohnanlagen. Diese Unterschiede berücksichtigen wir bei der Einsatzplanung. Sie haben bei uns eine feste Ansprechpartnerin und ein kleines, festes Team.",
          },
        ],
      },
      {
        h2: "Wo bekommen Angehörige in Billstedt Pflegeberatung?",
        blocks: [
          {
            type: "p",
            text: "Billstedt gehört zum Bezirk Hamburg-Mitte, deshalb ist der Pflegestützpunkt Hamburg-Mitte am Besenbinderhof 41 (20097 Hamburg) zuständig. Er liegt nicht im Stadtteil, kommt auf Wunsch aber zu Ihnen nach Hause.",
          },
          {
            type: "p",
            text: "Die Beratung dort ist unabhängig von Ihrer Krankenkasse. Sie bekommen Hilfe bei Anträgen, Informationen zu Pflege zu Hause und zu Heimplätzen. Privatversicherte wenden sich an die Compass Pflegeberatung.",
          },
          {
            type: "hinweis",
            title: "Hamburger Hausbesuch",
            text: "Wer in Hamburg 80 wird, erhält von der Sozialbehörde das Angebot eines kostenlosen Informationsbesuchs. Auch Jüngere und Ältere können einen Besuch anfragen. Die Besucherinnen informieren über Hilfen im Stadtteil und vermitteln bei Bedarf an den Pflegestützpunkt.",
          },
          {
            type: "p",
            text: "Bei TwinsCare bekommen Sie eine kostenlose Erstberatung bei Ihnen zu Hause. Was wir außerdem anbieten, steht unter [Pflegeberatung](/leistungen/pflegeberatung/).",
          },
        ],
      },
      {
        h2: "Wo treffen sich Seniorinnen und Senioren in Billstedt?",
        blocks: [
          {
            type: "p",
            text: "Das Bezirksamt Hamburg-Mitte nennt für Billstedt vier offene Seniorentreffs: den AWO-Seniorentreff Billstedt an der Möllner Landstraße, den interkulturellen Seniorentreff Liman, den LAB-Treffpunkt Mümmelmannsberg und den Seniorentreff der Kirchengemeinde Steinbek.",
          },
          {
            type: "p",
            text: "Größtes Stadtteilzentrum ist der Kulturpalast nahe der U-Bahn-Haltestelle Billstedt. Für Spaziergänge bietet sich der Öjendorfer Park an. Er ist laut Umweltbehörde der drittgrößte Park Hamburgs und hat einen großen See.",
          },
          {
            type: "p",
            text: "Wenn der Weg zum Treff oder in den Park allein nicht mehr klappt, kann eine Begleitung über [Entlastungsleistungen](/leistungen/entlastungsleistungen/) finanziert werden. Dafür gibt es ab Pflegegrad 1 den Entlastungsbetrag von 131 € im Monat.",
          },
        ],
      },
      {
        h2: "Welche Leistungen bietet TwinsCare in Billstedt an?",
        blocks: [
          {
            type: "p",
            text: "In Billstedt übernehmen wir Grundpflege, Behandlungspflege, Verhinderungspflege, Entlastungsleistungen, Pflegeberatung und die Pflege nach einem Klinikaufenthalt.",
          },
          {
            type: "ul",
            items: [
              "[Ambulante Pflege](/leistungen/ambulante-pflege/): Unterstützung bei Körperpflege, Anziehen und Bewegung.",
              "[Behandlungspflege](/leistungen/behandlungspflege/): medizinische Pflege auf ärztliche Verordnung, bezahlt von der Krankenkasse.",
              "[Verhinderungspflege](/leistungen/verhinderungspflege/): bis zu acht Wochen im Jahr Vertretung für pflegende Angehörige.",
              "[Entlastungsleistungen](/leistungen/entlastungsleistungen/): Hilfe im Alltag, Begleitung, Betreuung.",
              "[Pflegeberatung](/leistungen/pflegeberatung/): inklusive Beratungseinsatz nach § 37 Abs. 3 SGB XI.",
              "[Pflege nach dem Krankenhaus](/leistungen/pflege-nach-krankenhausaufenthalt/): Versorgung direkt nach der Entlassung.",
            ],
          },
          { type: "cta", text: "Pflege in Billstedt gesucht? Wir beraten Sie kostenlos bei Ihnen zu Hause." },
        ],
      },
      {
        h2: "Was zahlt die Pflegekasse für Pflege in Billstedt?",
        blocks: [
          {
            type: "p",
            text: "Die Pflegekasse übernimmt 2026 für einen ambulanten Pflegedienst bis zu 796 € im Monat bei Pflegegrad 2 und bis zu 1.497 € bei Pflegegrad 3. Hinzu kommt der Entlastungsbetrag von 131 € monatlich.",
          },
          {
            type: "p",
            text: "Wir rechnen direkt mit Ihrer Kasse ab. Sie bekommen vorher einen schriftlichen Kostenvoranschlag, damit Sie wissen, ob ein Eigenanteil entsteht. Mehr unter [Kosten und Finanzierung](/kosten/) und im Ratgeber [Was kostet ein Pflegedienst?](/ratgeber/was-kostet-ein-pflegedienst/).",
          },
        ],
      },
      {
        h2: "Wie kommt die Pflege nach einem Krankenhausaufenthalt nach Billstedt?",
        blocks: [
          {
            type: "p",
            text: "Nach einem Krankenhausaufenthalt organisiert das Entlassmanagement der Klinik die Versorgung zu Hause mit Ihnen, und wir übernehmen ab dem ersten Tag in Ihrer Wohnung in Billstedt. Dazu sind Krankenhäuser nach § 39 Abs. 1a SGB V verpflichtet.",
          },
          {
            type: "p",
            text: "Billstedter Patientinnen und Patienten kommen aus ganz unterschiedlichen Häusern, etwa aus der Innenstadt, aus Wandsbek oder aus dem BG Klinikum in Lohbrügge. Für uns macht das keinen Unterschied. Wichtig ist, dass Sie rechtzeitig Bescheid geben und die nötigen Verordnungen mitbringen.",
          },
          {
            type: "ol",
            items: [
              "Fragen Sie auf Station nach dem Sozialdienst.",
              "Lassen Sie sich häusliche Krankenpflege verordnen, wenn medizinische Pflege nötig ist.",
              "Melden Sie sich bei uns mit dem Entlasstermin.",
              "Wir klären mit Ihnen, ob ein Pflegegrad beantragt werden sollte – siehe [Pflegegrad in Hamburg beantragen](/ratgeber/pflegegrad-beantragen-hamburg/).",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Welcher Pflegestützpunkt ist für Billstedt zuständig?",
        a: "Der Pflegestützpunkt Hamburg-Mitte am Besenbinderhof 41, 20097 Hamburg. Er berät kostenlos und macht auf Wunsch Hausbesuche in Billstedt.",
      },
      {
        q: "Versorgt TwinsCare auch Mümmelmannsberg?",
        a: "Ja. Mümmelmannsberg gehört zu Billstedt und liegt in unserem Einsatzgebiet, ebenso Schiffbek und Öjendorf.",
      },
      {
        q: "Gibt es in Billstedt Seniorentreffs für Menschen mit Migrationsgeschichte?",
        a: "Ja. Das Bezirksamt Hamburg-Mitte führt den interkulturellen Seniorentreff Liman in Billstedt. Weitere Treffs gibt es bei der AWO, beim LAB in Mümmelmannsberg und in der Kirchengemeinde Steinbek.",
      },
      {
        q: "Was kostet ein Pflegedienst, wenn ich Pflegegrad 2 habe?",
        a: "Die Pflegekasse zahlt bis zu 796 € im Monat. Ob ein Eigenanteil bleibt, hängt von den gewählten Leistungen ab. Sie erhalten vorab einen schriftlichen Kostenvoranschlag.",
      },
      {
        q: "Muss ich einen langen Vertrag abschließen?",
        a: "Nein. Pflegebedürftige können den Pflegevertrag jederzeit ohne Frist kündigen (§ 120 Abs. 2 SGB XI).",
      },
    ],
    nachbarn: ["horn", "jenfeld", "oststeinbek"],
    quellen: [
      {
        title: "Statistikamt Nord – Hamburger Stadtteil-Profile, Berichtsjahr 2023",
        url: "https://epub.sub.uni-hamburg.de/epub/volltexte/2025/183770/pdf/Stadtteil_Profile_HH_BJ_2023.pdf",
      },
      {
        title: "hamburg.de (Bezirksamt Hamburg-Mitte) – Stadtteilporträt",
        url: "https://www.hamburg.de/politik-und-verwaltung/bezirke/mitte/themen/freizeit/stadtteilportrait-67464",
      },
      {
        title: "hamburg.de (Bezirksamt Hamburg-Mitte) – Offene Seniorenarbeit",
        url: "https://www.hamburg.de/politik-und-verwaltung/bezirke/mitte/themen/familie-senioren/offene-seniorenarbeit-67316",
      },
      {
        title: "hamburg.de (Umweltbehörde) – Landschaftsachse Horner Geest",
        url: "https://www.hamburg.de/politik-und-verwaltung/behoerden/bukea/themen/hamburgs-gruen/gruenes-netz/horner-geest-279914",
      },
      {
        title: "AOK – Übersicht Pflegestützpunkte Hamburg (Adressen)",
        url: "https://www.aok.de/pk/fileadmin/user_upload/AOK-Rheinland-Hamburg/05-Content-PDF/Pflegestuetzpunkte_Hamburg.pdf",
      },
      {
        title: "hamburg.de (Sozialbehörde) – Hamburger Hausbesuch",
        url: "https://www.hamburg.de/politik-und-verwaltung/behoerden/sozialbehoerde/themen/pflege/hausbesuch-86112",
      },
    ],
    pruefen: [
      "Pflegestützpunkt Hamburg-Mitte: Besenbinderhof 41, 20097 (AOK-PDF ohne Datum); hamburg.de-Kontaktseite (…/mitte/themen/gesundheit/pflegestuetzpunkt-67526) konnte nicht geöffnet werden.",
      "Einwohnerzahl 72.623, davon 13.230 (18,2 %) ab 65; Hamburg 17,8 % (Stadtteil-Profile BJ 2023).",
      "Seniorentreffs (AWO Billstedt Möllner Landstraße, Liman, LAB-Treffpunkt Mümmelmannsberg, Kirchengemeinde Steinbek) – Stand der Bezirksseite prüfen.",
      "Kulturpalast als größtes Stadtteilzentrum nahe U Billstedt (Stadtteilporträt).",
      "Öjendorfer Park als drittgrößter Park Hamburgs (Umweltbehörde).",
      "Zuordnung der Quartiere Mümmelmannsberg, Dringsheide, Schiffbek, Öjendorf zu Billstedt.",
      "Anfahrt „einige Kilometer nordwestlich“ des Büros (geschätzt, nicht gemessen).",
      "Haltestelle Billstedt: U2 und U4 (laut Hochbahn-Pressemitteilungen) – aktuellen Linienverlauf prüfen, falls ergänzt wird.",
    ],
  },
  // ───────────────────────────── Horn ─────────────────────────────
  {
    slug: "horn",
    name: "Horn",
    h1: "Pflegedienst in Hamburg-Horn",
    metaTitle: "Pflegedienst Horn – ambulante Pflege | TwinsCare",
    metaDescription:
      "Pflege zu Hause in Hamburg-Horn (22111, 22113, 22119): Grund- und Behandlungspflege, Beratung, Entlastung. Mit Pflegestützpunkt und Seniorentreffs in Horn.",
    lead:
      "Horn gilt als junger Stadtteil, doch auch hier leben rund 5.600 Menschen ab 65 Jahren. TwinsCare unterstützt sie und ihre Familien mit Pflege zu Hause – zwischen Horner Rennbahn, Washingtonallee und Horner Marsch.",
    plz: ["22111", "22113", "22119"],
    verwaltung: "Bezirk Hamburg-Mitte, Freie und Hansestadt Hamburg",
    anfahrt: "Horn erreichen wir von unserem Büro an der Bergedorfer Straße 85 über Billstedt.",
    kurz: [
      "In Horn leben rund 38.900 Menschen; 14,5 % sind 65 Jahre oder älter, weniger als im Hamburger Schnitt von 17,8 % (Stand 2023).",
      "Für Pflegeberatung ist der Pflegestützpunkt Hamburg-Mitte am Besenbinderhof 41 zuständig.",
      "Seniorentreffs gibt es unter anderem bei der AWO in Horn und in den Kirchengemeinden Timotheus sowie Philippus und Rimbert.",
      "Die U4 soll laut Hochbahn bis zur Horner Geest verlängert werden; erste Fahrgäste waren für Ende 2026 angekündigt.",
    ],
    sections: [
      {
        h2: "Wer bietet ambulante Pflege in Horn an?",
        blocks: [
          {
            type: "p",
            text: "TwinsCare bietet ambulante Pflege in ganz Horn an, in den Postleitzahlen 22111, 22113 und 22119. Wir pflegen Sie in Ihrer Wohnung und richten uns nach Ihrem Tagesablauf.",
          },
          {
            type: "p",
            text: "Horn war früher ein gehobenes Villengebiet. Heute prägen Reihenhäuser, Rotklinkerbauten, Gewerbeflächen und Kleingärten wie die Horner Marsch den Stadtteil. Wegen der vergleichsweise günstigen Mieten ziehen viele Studierende und junge Familien her.",
          },
          {
            type: "p",
            text: "Gerade deshalb übersieht man leicht die älteren Nachbarn. Laut Statistikamt Nord waren 2023 rund 5.600 Hornerinnen und Horner 65 Jahre oder älter. Sie haben bei uns eine feste Ansprechpartnerin und ein kleines, festes Team.",
          },
        ],
      },
      {
        h2: "Welche Pflegeleistungen gibt es von TwinsCare in Horn?",
        blocks: [
          {
            type: "p",
            text: "In Horn bekommen Sie bei uns Grundpflege, Behandlungspflege, Verhinderungspflege, Entlastungsleistungen, Pflegeberatung und Pflege nach dem Krankenhaus aus einer Hand.",
          },
          {
            type: "ul",
            items: [
              "[Ambulante Pflege](/leistungen/ambulante-pflege/) – Grundpflege nach SGB XI, bezahlt aus der Pflegesachleistung.",
              "[Behandlungspflege](/leistungen/behandlungspflege/) – medizinische Pflege auf Verordnung, Kostenträger ist die Krankenkasse.",
              "[Verhinderungspflege](/leistungen/verhinderungspflege/) – aus dem gemeinsamen Jahresbetrag von bis zu 3.539 €.",
              "[Entlastungsleistungen](/leistungen/entlastungsleistungen/) – Alltagshilfe aus dem Entlastungsbetrag von 131 € im Monat.",
              "[Pflegeberatung](/leistungen/pflegeberatung/) – einschließlich Beratungseinsatz nach § 37 Abs. 3 SGB XI.",
              "[Pflege nach einem Krankenhausaufenthalt](/leistungen/pflege-nach-krankenhausaufenthalt/) – lückenloser Übergang nach Hause.",
            ],
          },
        ],
      },
      {
        h2: "Wo finden pflegende Angehörige in Horn Beratung?",
        blocks: [
          {
            type: "p",
            text: "Horn gehört zum Bezirk Hamburg-Mitte; zuständig ist daher der Pflegestützpunkt Hamburg-Mitte am Besenbinderhof 41 in 20097 Hamburg. Die Beratung ist unabhängig von Ihrer Kasse, und auf Wunsch kommen die Beraterinnen zu Ihnen nach Hause.",
          },
          {
            type: "p",
            text: "Laut Sozialbehörde gibt es dort offene Sprechstunden ohne Termin am Montagvormittag und Donnerstagnachmittag sowie Telefonberatung am Dienstag und Freitag. Privat Versicherte erhalten Pflegeberatung über die Compass Pflegeberatung.",
          },
          {
            type: "p",
            text: "Ein zusätzliches Angebot der Stadt ist der Hamburger Hausbesuch: Zum 80. Geburtstag schreibt die Sozialbehörde an und bietet einen kostenlosen Informationsbesuch an. Bei TwinsCare können Sie jederzeit eine kostenlose [Erstberatung zu Hause](/leistungen/pflegeberatung/) vereinbaren.",
          },
        ],
      },
      {
        h2: "Welche Seniorentreffs gibt es in Horn?",
        blocks: [
          {
            type: "p",
            text: "Das Bezirksamt Hamburg-Mitte nennt für Horn drei Seniorentreffs: den AWO-Seniorentreff Horn am Gojenboom, den Seniorentreff der Timotheus-Gemeinde an der Washingtonallee und den Treff der Philippus- und Rimbert-Gemeinde.",
          },
          {
            type: "p",
            text: "Grün ist Horn auch: Blohms Park und das Horner Moor liegen an der Landschaftsachse Horner Geest. Diesen rund zehn Kilometer langen Grünzug vom Hauptbahnhof bis zum Öjendorfer See nennt die Umweltbehörde „Hamburgs längsten Park“.",
          },
          {
            type: "p",
            text: "Wer nicht mehr allein spazieren gehen kann, muss darauf nicht verzichten. Begleitung im Alltag lässt sich häufig über den Entlastungsbetrag bezahlen. Details im Ratgeber [Entlastungsbetrag 131 Euro](/ratgeber/entlastungsbetrag-131-euro/).",
          },
          { type: "cta", text: "Sie suchen Pflege in Horn? Wir kommen zur kostenlosen Erstberatung zu Ihnen." },
        ],
      },
      {
        h2: "Wie verändert die U4-Verlängerung den Alltag in Horn?",
        blocks: [
          {
            type: "p",
            text: "Die Hochbahn verlängert die U4 von der Horner Rennbahn um zwei Haltestellen, Stoltenstraße und Horner Geest. Erste Fahrgäste waren für Ende 2026 angekündigt.",
          },
          {
            type: "p",
            text: "Bereits seit Mai 2024 gibt es an der Horner Rennbahn einen zusätzlichen Bahnsteig. Für ältere Menschen auf der Horner Geest kann die neue Strecke den Weg zu Arztpraxen und in die Innenstadt verkürzen. Unsere Pflegekräfte kommen ohnehin zu Ihnen nach Hause.",
          },
        ],
      },
      {
        h2: "Was übernimmt die Pflegekasse für Pflege in Horn?",
        blocks: [
          {
            type: "p",
            text: "Die Pflegekasse zahlt 2026 für einen Pflegedienst bis zu 796 € im Monat bei Pflegegrad 2, bis zu 1.497 € bei Pflegegrad 3 und mehr bei höheren Pflegegraden. Behandlungspflege trägt nach ärztlicher Verordnung die Krankenkasse.",
          },
          {
            type: "p",
            text: "Wir rechnen direkt mit den Kassen ab und erstellen vor dem ersten Einsatz einen schriftlichen Kostenvoranschlag. Alle Beträge im Überblick: [Kosten und Finanzierung](/kosten/). Welcher Pflegegrad in Frage kommt, zeigt unser [Pflegegrad-Rechner](/pflegegrad-rechner/).",
          },
        ],
      },
      {
        h2: "Wie läuft der Start mit TwinsCare in Horn ab?",
        blocks: [
          {
            type: "p",
            text: "Sie melden sich, wir kommen zur kostenlosen Erstberatung nach Horn, und nach Ihrem Einverständnis mit dem schriftlichen Kostenvoranschlag beginnt die Pflege.",
          },
          {
            type: "ol",
            items: [
              "Anruf oder [Pflegeanfrage online](/pflege-anfragen/).",
              "Erstberatung bei Ihnen zu Hause.",
              "Schriftlicher Kostenvoranschlag.",
              "Hilfe bei Anträgen, zum Beispiel für einen Pflegegrad.",
              "Erster Einsatz durch Ihr festes Team.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Welcher Pflegestützpunkt berät Menschen aus Horn?",
        a: "Der Pflegestützpunkt Hamburg-Mitte am Besenbinderhof 41, 20097 Hamburg. Die Beratung ist kostenlos, Hausbesuche in Horn sind möglich.",
      },
      {
        q: "Gibt es in Horn Treffpunkte für ältere Menschen?",
        a: "Ja, zum Beispiel den AWO-Seniorentreff Horn und die Seniorentreffs der Timotheus-Gemeinde und der Philippus- und Rimbert-Gemeinde.",
      },
      {
        q: "Versorgt TwinsCare auch die Horner Geest?",
        a: "Ja. Die Horner Geest gehört zu unserem Einsatzgebiet in Horn.",
      },
      {
        q: "Kann ich Pflegegeld und Pflegedienst kombinieren?",
        a: "Ja. Nutzen Sie die Pflegesachleistung nicht voll, bekommen Sie anteilig Pflegegeld (Kombinationsleistung). Mehr im Ratgeber [Pflegesachleistung oder Pflegegeld](/ratgeber/pflegesachleistung-oder-pflegegeld/).",
      },
    ],
    nachbarn: ["billstedt", "jenfeld"],
    quellen: [
      {
        title: "Statistikamt Nord – Hamburger Stadtteil-Profile, Berichtsjahr 2023",
        url: "https://epub.sub.uni-hamburg.de/epub/volltexte/2025/183770/pdf/Stadtteil_Profile_HH_BJ_2023.pdf",
      },
      {
        title: "hamburg.de (Bezirksamt Hamburg-Mitte) – Stadtteilporträt",
        url: "https://www.hamburg.de/politik-und-verwaltung/bezirke/mitte/themen/freizeit/stadtteilportrait-67464",
      },
      {
        title: "hamburg.de (Bezirksamt Hamburg-Mitte) – Offene Seniorenarbeit",
        url: "https://www.hamburg.de/politik-und-verwaltung/bezirke/mitte/themen/familie-senioren/offene-seniorenarbeit-67316",
      },
      {
        title: "hamburg.de (Umweltbehörde) – Landschaftsachse Horner Geest",
        url: "https://www.hamburg.de/politik-und-verwaltung/behoerden/bukea/themen/hamburgs-gruen/gruenes-netz/horner-geest-279914",
      },
      {
        title: "Hochbahn – U4 Horner Geest",
        url: "https://www.hochbahn.de/en/u4-horner-geest--10470",
      },
      {
        title: "Hochbahn – Neue Haltestelle U4 Horner Rennbahn eröffnet",
        url: "https://www.hochbahn.de/resource/blob/78550/9286a07c440b3281c3b9949af1b3e79d/download-neue-haltestelle-u4-horner-rennbahn-eroeffnet-data.pdf",
      },
      {
        title: "hamburg.de (Sozialbehörde) – Pflegestützpunkte in Hamburg",
        url: "https://www.hamburg.de/politik-und-verwaltung/behoerden/sozialbehoerde/themen/pflege/beratung/pflegestuetzpunkte",
      },
      {
        title: "AOK – Übersicht Pflegestützpunkte Hamburg (Adressen)",
        url: "https://www.aok.de/pk/fileadmin/user_upload/AOK-Rheinland-Hamburg/05-Content-PDF/Pflegestuetzpunkte_Hamburg.pdf",
      },
    ],
    pruefen: [
      "U4 Horner Geest: Ist die Strecke (Stoltenstraße, Horner Geest) inzwischen eröffnet? Hochbahn nannte „Ende 2026“ – Text vor Livegang aktualisieren.",
      "Zusätzlicher Bahnsteig Horner Rennbahn seit 3. Mai 2024 (Hochbahn-PM).",
      "Einwohner 38.857, davon 5.621 (14,5 %) ab 65; Hamburg 17,8 % (Stadtteil-Profile BJ 2023).",
      "Seniorentreffs AWO Horn (Am Gojenboom), Timotheus-Gemeinde (Washingtonallee), Philippus und Rimbert – Bezirksseite prüfen.",
      "Pflegestützpunkt Hamburg-Mitte Besenbinderhof 41 bestätigen; Sprechzeiten laut Sozialbehörde stadtweit angegeben.",
      "Landschaftsachse Horner Geest ca. 10 km, Blohms Park, Horner Moor (Umweltbehörde).",
      "Gehört die Horner Geest vollständig zum Stadtteil Horn?",
    ],
  },

  // ───────────────────────────── Jenfeld ─────────────────────────────
  {
    slug: "jenfeld",
    name: "Jenfeld",
    h1: "Ambulanter Pflegedienst für Jenfeld",
    metaTitle: "Pflegedienst Jenfeld – ambulante Pflege | TwinsCare",
    metaDescription:
      "TwinsCare pflegt in Hamburg-Jenfeld (22043, 22045) zu Hause: vom Jenfeld-Zentrum bis zur Jenfelder Au. Mit Infos zu Pflegestützpunkt Wandsbek und Kosten.",
    lead:
      "Jenfeld liegt am östlichen Rand Hamburgs, direkt an der Grenze zu Schleswig-Holstein. TwinsCare pflegt hier zu Hause – in den Hochhäusern rund um das Einkaufszentrum genauso wie in den Einfamilienhausstraßen im Westen des Stadtteils.",
    plz: ["22043", "22045"],
    verwaltung: "Bezirk Wandsbek, Freie und Hansestadt Hamburg",
    anfahrt: "Jenfeld liegt nördlich von Billstedt und gehört zu den etwas weiter entfernten Orten unseres Einsatzgebiets.",
    kurz: [
      "Jenfeld hat rund 29.400 Einwohnerinnen und Einwohner und gehört zum Bezirk Wandsbek.",
      "Pflegeberatung gibt es beim Pflegestützpunkt Wandsbek an der Wandsbeker Allee 62.",
      "Im Jenfeld-Haus an der Charlottenburger Straße gibt es ein Seniorenfrühstück.",
      "Die Asklepios Klinik Wandsbek liegt an der Alphonsstraße in derselben Postleitzahl 22043.",
      "Mit Pflegegrad 3 zahlt die Pflegekasse 2026 bis zu 1.497 € im Monat für einen Pflegedienst.",
    ],
    foto: {
      id: "photo-1761839257513-a921710a4291",
      alt: "Zwei Frauen betrachten gemeinsam Blumen im Garten",
    },
    sections: [
      {
        h2: "Gibt es einen Pflegedienst für Jenfeld?",
        blocks: [
          {
            type: "p",
            text: "Ja, TwinsCare versorgt Jenfeld in den Postleitzahlen 22043 und 22045 mit ambulanter Pflege zu Hause. Wir kommen in alle Teile des Stadtteils, auch in das Neubauquartier Jenfelder Au.",
          },
          {
            type: "p",
            text: "Jenfeld hat laut Stadt Hamburg rund 29.400 Einwohnerinnen und Einwohner (Stand Ende 2023). Der Stadtteil hat zwei Gesichter. Im Osten stehen große Wohnblocks aus den 1970er-Jahren, im Westen ist es grün, mit vielen Einfamilienhäusern.",
          },
          {
            type: "p",
            text: "Diese Unterschiede spüren wir in der Pflege. Im zwölften Stock ist ein verlässlicher Aufzug entscheidend, im Einfamilienhaus eher die Treppe ins Schlafzimmer. Sie haben bei uns eine feste Ansprechpartnerin und ein kleines, festes Team.",
          },
        ],
      },
      {
        h2: "Was ist bei Pflege im Jenfeld-Zentrum zu beachten?",
        blocks: [
          {
            type: "p",
            text: "Das Jenfeld-Zentrum ist ein städtisches Fördergebiet mit knapp 13.000 Bewohnerinnen und Bewohnern, geprägt von Wohnhäusern mit bis zu zwölf Geschossen. In der Mitte liegt das Einkaufszentrum Jenfeld an der Rodigallee.",
          },
          {
            type: "p",
            text: "Der Senat hat das Gebiet 2019 in das Förderprogramm RISE aufgenommen, die Förderung läuft bis Ende 2026. Seit September 2025 wird der Quartiersplatz am Nordausgang des Einkaufszentrums umgestaltet, unter anderem mit neuen Sitzgelegenheiten.",
          },
          {
            type: "p",
            text: "Für Pflegebedürftige im Hochhaus raten wir zu ein paar Vorkehrungen: einen Notfallplan, falls der Aufzug ausfällt, einen Schlüsselsafe oder hinterlegten Schlüssel und gut erreichbare Medikamente. Das besprechen wir beim Erstbesuch mit Ihnen.",
          },
        ],
      },
      {
        h2: "Wo bekommen Jenfelder Familien Pflegeberatung?",
        blocks: [
          {
            type: "p",
            text: "Für Jenfeld ist der Bezirk Wandsbek zuständig; sein Pflegestützpunkt sitzt an der Wandsbeker Allee 62 in 22041 Hamburg. Dort beraten Fachleute kostenlos und unabhängig von Ihrer Krankenkasse, bei Bedarf auch bei Ihnen zu Hause.",
          },
          {
            type: "p",
            text: "Im Bezirk Wandsbek gibt es außerdem einen zweiten Pflegestützpunkt in Rahlstedt. Welcher für Ihre Straße zuständig ist, erfahren Sie am Telefon. Wer in Hamburg 80 wird, bekommt zusätzlich das Angebot des kostenlosen Hamburger Hausbesuchs.",
          },
          {
            type: "hinweis",
            title: "Wohnen Sie schon in Schleswig-Holstein?",
            text: "Jenfeld grenzt direkt an Schleswig-Holstein. Liegt Ihre Wohnung bereits jenseits der Landesgrenze, sind nicht die Hamburger Pflegestützpunkte zuständig, sondern der Pflegestützpunkt Ihres Kreises – für Oststeinbek zum Beispiel der des Kreises Stormarn.",
          },
        ],
      },
      {
        h2: "Was bietet TwinsCare in Jenfeld an?",
        blocks: [
          {
            type: "p",
            text: "In Jenfeld bieten wir alle Leistungen eines ambulanten Pflegedienstes an, von der Grundpflege bis zur Versorgung nach der Klinik.",
          },
          {
            type: "ul",
            items: [
              "[Ambulante Pflege](/leistungen/ambulante-pflege/) – Hilfe bei Körperpflege, Ernährung und Bewegung.",
              "[Behandlungspflege](/leistungen/behandlungspflege/) – Wundversorgung, Medikamentengabe und mehr auf ärztliche Verordnung.",
              "[Verhinderungspflege](/leistungen/verhinderungspflege/) – Vertretung bei Urlaub oder Krankheit der Pflegeperson.",
              "[Entlastungsleistungen](/leistungen/entlastungsleistungen/) – Alltagsunterstützung aus dem Entlastungsbetrag.",
              "[Pflegeberatung](/leistungen/pflegeberatung/) – auch der Beratungseinsatz nach § 37 Abs. 3 SGB XI.",
              "[Pflege nach dem Krankenhausaufenthalt](/leistungen/pflege-nach-krankenhausaufenthalt/) – sicherer Start zu Hause.",
            ],
          },
        ],
      },
      {
        h2: "Wie gelingt der Übergang von der Asklepios Klinik Wandsbek nach Hause?",
        blocks: [
          {
            type: "p",
            text: "Vor der Entlassung aus der Asklepios Klinik Wandsbek an der Alphonsstraße plant das Entlassmanagement mit Ihnen die Versorgung zu Hause; wir können die Pflege in Jenfeld ab dem ersten Tag übernehmen. Krankenhäuser sind dazu nach § 39 Abs. 1a SGB V verpflichtet.",
          },
          {
            type: "p",
            text: "Die Klinik liegt in derselben Postleitzahl 22043 wie ein Teil Jenfelds. Sprechen Sie den Sozialdienst früh an, lassen Sie sich häusliche Krankenpflege verordnen und melden Sie sich mit dem Entlasstermin bei uns. Einen Überblick gibt die [Checkliste zur Krankenhausentlassung](/ratgeber/krankenhaus-entlassung-checkliste/).",
          },
          { type: "cta", text: "Pflege in Jenfeld anfragen – kostenlose Erstberatung bei Ihnen zu Hause." },
        ],
      },
      {
        h2: "Wo können ältere Menschen in Jenfeld Kontakte pflegen?",
        blocks: [
          {
            type: "p",
            text: "Ein wichtiger Treffpunkt ist das Jenfeld-Haus an der Charlottenburger Straße, das Kulturzentrum des Stadtteils mit Seniorenfrühstück. Zum Spazierengehen eignet sich der Jenfelder Moorpark mit barrierefreiem Rundweg um den Moorsee.",
          },
          {
            type: "p",
            text: "Kontakte sind für die Gesundheit im Alter wichtig. Wenn der Weg dorthin allein zu beschwerlich wird, kann eine Begleitung über [Entlastungsleistungen](/leistungen/entlastungsleistungen/) helfen.",
          },
        ],
      },
      {
        h2: "Was zahlt die Pflegekasse für Pflege in Jenfeld?",
        blocks: [
          {
            type: "p",
            text: "Die Pflegekasse zahlt 2026 bis zu 796 € (Pflegegrad 2) oder 1.497 € (Pflegegrad 3) im Monat für einen ambulanten Pflegedienst, dazu den Entlastungsbetrag von 131 € monatlich.",
          },
          {
            type: "p",
            text: "Sie bekommen vor dem ersten Einsatz einen schriftlichen Kostenvoranschlag, und wir rechnen direkt mit der Kasse ab. Mehr unter [Kosten und Finanzierung](/kosten/). Noch ohne Pflegegrad? Hier steht, wie Sie einen [Pflegegrad in Hamburg beantragen](/ratgeber/pflegegrad-beantragen-hamburg/).",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Welcher Pflegestützpunkt ist für Jenfeld zuständig?",
        a: "Jenfeld gehört zum Bezirk Wandsbek. Der Pflegestützpunkt Wandsbek sitzt an der Wandsbeker Allee 62; ein weiterer Standort ist in Rahlstedt. Welcher für Ihre Adresse zuständig ist, klären Sie am besten telefonisch.",
      },
      {
        q: "Versorgt TwinsCare auch die Jenfelder Au?",
        a: "Ja. Das Neubauquartier auf dem früheren Kasernengelände im Norden Jenfelds liegt in unserem Einsatzgebiet.",
      },
      {
        q: "Was passiert, wenn im Hochhaus der Aufzug ausfällt?",
        a: "Für diesen Fall lohnt sich ein Notfallplan mit Nachbarn, Angehörigen und Hausverwaltung. Wie unsere Einsätze dann ablaufen, besprechen wir beim Erstbesuch mit Ihnen.",
      },
      {
        q: "Was kostet die Beratung bei TwinsCare?",
        a: "Die Erstberatung bei Ihnen zu Hause und der Kostenvoranschlag sind kostenlos.",
      },
      {
        q: "Kann ich den Pflegedienst wechseln?",
        a: "Ja. Der Pflegevertrag kann jederzeit ohne Frist gekündigt werden (§ 120 Abs. 2 SGB XI).",
      },
    ],
    nachbarn: ["billstedt", "horn", "oststeinbek"],
    quellen: [
      {
        title: "hamburg.de – Stadtteil Jenfeld",
        url: "https://www.hamburg.de/leben-in-hamburg/bezirke-hamburg/stadtteile-bezirk-wandsbek/jenfeld-376636",
      },
      {
        title: "hamburg.de (Bezirksamt Wandsbek) – Fördergebiet Jenfeld-Zentrum",
        url: "https://www.hamburg.de/politik-und-verwaltung/bezirke/wandsbek/themen/soziales/integrierte-stadtteilentwicklung/jenfeld-zentrum-77448",
      },
      {
        title: "hamburg.de (Bezirksamt Wandsbek) – Pflegestützpunkt Wandsbek",
        url: "https://www.hamburg.de/politik-und-verwaltung/bezirke/wandsbek/themen/soziales/pflegestuetzpunkt-77634",
      },
      {
        title: "vdek Hamburg – Pflegestützpunkte",
        url: "https://www.vdek.com/LVen/HAM/Vertragspartner/Pflegeversicherung/pflegestuetzpunkte.html",
      },
      {
        title: "hamburg.de (Sozialbehörde) – Hamburger Hausbesuch",
        url: "https://www.hamburg.de/politik-und-verwaltung/behoerden/sozialbehoerde/themen/pflege/hausbesuch-86112",
      },
      {
        title: "Deutsches Krankenhausverzeichnis – Asklepios Klinik Wandsbek (Standort Alphonsstraße)",
        url: "https://www.deutsches-krankenhaus-verzeichnis.de/app/portrait/163dbafc0f3d9f5e/pdf",
      },
    ],
    pruefen: [
      "Welcher der beiden Wandsbeker Pflegestützpunkte (Wandsbeker Allee 62 oder Rahlstedt, Rahlstedter Straße 151–157) ist für Jenfeld zuständig?",
      "Einwohnerzahl 29.443 (hamburg.de-Tabelle, Stand 31.12.2023; Seite nennt an anderer Stelle „mehr als 24.700“).",
      "Jenfeld-Zentrum: knapp 13.000 Bewohner, Häuser bis 12 Geschosse, RISE bis Ende 2026, Umgestaltung Quartiersplatz seit 15.09.2025.",
      "Seniorenfrühstück im Jenfeld-Haus (Charlottenburger Straße) – findet es noch statt?",
      "Jenfelder Moorpark mit barrierefreiem Rundweg um den Moorsee.",
      "Asklepios Klinik Wandsbek, Alphonsstraße 14, 22043 – Krankenhausverzeichnis-Eintrag betrifft die Neonatologie am Standort; Adresse des Gesamtklinikums bestätigen.",
      "Jenfelder Au: früheres Kasernengelände im Norden, ca. 770 Wohnungen.",
      "Anfahrt „nördlich von Billstedt“ (Lage geschätzt).",
    ],
  },

  // ───────────────────────────── Oststeinbek ─────────────────────────────
  {
    slug: "oststeinbek",
    name: "Oststeinbek",
    h1: "Pflegedienst für Oststeinbek und Havighorst",
    metaTitle: "Pflegedienst Oststeinbek – Pflege zu Hause | TwinsCare",
    metaDescription:
      "Ambulante Pflege in Oststeinbek und Havighorst (22113): TwinsCare pflegt zu Hause. Warum der Pflegestützpunkt Kreis Stormarn zuständig ist und was Pflege kostet.",
    lead:
      "Oststeinbek hat eine Hamburger Postleitzahl, gehört aber zu Schleswig-Holstein. Das spielt bei der Pflegeberatung eine Rolle. TwinsCare pflegt in beiden Ortsteilen, Oststeinbek und Havighorst, und hilft Ihnen, die richtigen Stellen zu finden.",
    plz: ["22113"],
    verwaltung: "Gemeinde Oststeinbek, Kreis Stormarn, Schleswig-Holstein",
    anfahrt: "Oststeinbek liegt einige Kilometer nördlich unseres Büros an der Bergedorfer Straße 85.",
    kurz: [
      "Oststeinbek ist eine Gemeinde im Kreis Stormarn mit 8.961 Einwohnerinnen und Einwohnern (Stand Ende 2024).",
      "Trotz Hamburger Postleitzahl 22113 sind die Hamburger Pflegestützpunkte nicht zuständig, sondern der Pflegestützpunkt des Kreises Stormarn.",
      "Die nächste Außensprechstunde des Pflegestützpunkts ist im Gutshaus Glinde, jeden ersten Mittwoch im Monat.",
      "Die Gemeinde besteht aus den Ortsteilen Oststeinbek und Havighorst.",
    ],
    foto: {
      id: "photo-1559234938-b60fff04894d",
      alt: "Ein Mann und eine Frau gehen gemeinsam spazieren",
    },
    sections: [
      {
        h2: "Welcher Pflegedienst kommt nach Oststeinbek?",
        blocks: [
          {
            type: "p",
            text: "TwinsCare pflegt in der Gemeinde Oststeinbek zu Hause, in beiden Ortsteilen Oststeinbek und Havighorst. Wir sind ein ambulanter Pflegedienst aus dem Hamburger Osten und rechnen direkt mit Ihrer Pflege- und Krankenkasse ab.",
          },
          {
            type: "p",
            text: "Oststeinbek hatte Ende 2024 laut Kreis Stormarn 8.961 Einwohnerinnen und Einwohner. Havighorst beschreibt die Gemeinde selbst als ländlich und dörflich, mit Höfen neben Ein- und Mehrfamilienhäusern. Der Ortsteil Oststeinbek ist dichter bebaut und grenzt an Hamburg.",
          },
          {
            type: "p",
            text: "Ob Dorflage oder Siedlung: Bei uns haben Sie eine feste Ansprechpartnerin und ein kleines, festes Team, das Ihre Wege und Gewohnheiten kennt.",
          },
        ],
      },
      {
        h2: "Warum ist für Oststeinbek nicht der Hamburger Pflegestützpunkt zuständig?",
        blocks: [
          {
            type: "p",
            text: "Oststeinbek gehört zum Kreis Stormarn in Schleswig-Holstein, deshalb ist der Pflegestützpunkt im Kreis Stormarn zuständig – auch wenn die Postleitzahl 22113 nach Hamburg klingt. Die Pflegestützpunkte der Hamburger Bezirke beraten Menschen aus Hamburg.",
          },
          {
            type: "p",
            text: "Die Hauptstelle des Pflegestützpunkts Stormarn ist in der Mommsenstraße 13 in Bad Oldesloe. Näher liegt die Außensprechstunde im Gutshaus Glinde an der Möllner Landstraße 53, jeden ersten Mittwoch im Monat von 10 bis 13 Uhr. Dafür ist eine Anmeldung nötig.",
          },
          {
            type: "p",
            text: "Die Beratung ist kostenlos und unabhängig. Sie wird von Pflege- und Krankenkassen, dem Kreis Stormarn und dem Land Schleswig-Holstein finanziert. Privat Versicherte können sich an die Compass Pflegeberatung wenden.",
          },
          {
            type: "hinweis",
            title: "Auch der Hamburger Hausbesuch gilt nicht",
            text: "Den kostenlosen Hamburger Hausbesuch zum 80. Geburtstag bietet die Hamburger Sozialbehörde nur Menschen in Hamburg an. In Oststeinbek ist der Pflegestützpunkt Stormarn die richtige Adresse.",
          },
        ],
      },
      {
        h2: "Welche Leistungen bietet TwinsCare in Oststeinbek?",
        blocks: [
          {
            type: "p",
            text: "In Oststeinbek und Havighorst übernehmen wir Grund- und Behandlungspflege, Verhinderungspflege, Entlastungsleistungen, Pflegeberatung und die Pflege nach einem Krankenhausaufenthalt.",
          },
          {
            type: "ul",
            items: [
              "[Ambulante Pflege](/leistungen/ambulante-pflege/) – Hilfe bei Körperpflege, Anziehen und Bewegung.",
              "[Behandlungspflege](/leistungen/behandlungspflege/) – medizinische Pflege nach ärztlicher Verordnung.",
              "[Verhinderungspflege](/leistungen/verhinderungspflege/) – wenn pflegende Angehörige eine Auszeit brauchen.",
              "[Entlastungsleistungen](/leistungen/entlastungsleistungen/) – Unterstützung im Alltag, 131 € im Monat von der Pflegekasse.",
              "[Pflegeberatung](/leistungen/pflegeberatung/) – inklusive Beratungseinsatz nach § 37 Abs. 3 SGB XI.",
              "[Pflege nach dem Krankenhaus](/leistungen/pflege-nach-krankenhausaufenthalt/) – Versorgung ab dem Entlasstag.",
            ],
          },
          { type: "cta", text: "Pflege in Oststeinbek oder Havighorst? Wir beraten Sie kostenlos zu Hause." },
        ],
      },
      {
        h2: "Was bedeutet Pflege im dörflichen Havighorst?",
        blocks: [
          {
            type: "p",
            text: "In Havighorst wohnen viele Menschen in Häusern mit Garten und längeren Wegen zum nächsten Geschäft. Die Gemeinde nennt den demografischen Wandel ausdrücklich als Thema für den Ortsteil und hat 2021 ein Entwicklungskonzept für Havighorst beschlossen.",
          },
          {
            type: "p",
            text: "Für die Pflege heißt das: Hilfe beim Einkaufen, Begleitung zu Arztterminen und ein sicheres Bad werden wichtiger. Viele dieser Hilfen lassen sich über den Entlastungsbetrag oder die Zuschüsse für Wohnungsanpassungen von bis zu 4.180 € je Maßnahme finanzieren.",
          },
          {
            type: "p",
            text: "Seniorengerechtes Wohnen führt die Gemeinde zudem als künftiges Planungsthema. Bis neue Angebote entstehen, ist Pflege zu Hause für viele der Weg, im vertrauten Ort zu bleiben.",
          },
        ],
      },
      {
        h2: "Was zahlt die Pflegekasse für Pflege in Oststeinbek?",
        blocks: [
          {
            type: "p",
            text: "In Schleswig-Holstein gelten dieselben Beträge wie in Hamburg: Die Pflegekasse zahlt 2026 bis zu 796 € (Pflegegrad 2) oder 1.497 € (Pflegegrad 3) im Monat für einen Pflegedienst. Der Entlastungsbetrag beträgt 131 € im Monat.",
          },
          {
            type: "p",
            text: "Wir erstellen vorab einen schriftlichen Kostenvoranschlag und rechnen direkt ab. Alle Beträge finden Sie unter [Kosten und Finanzierung](/kosten/). Wie Sie sich auf die Begutachtung vorbereiten, steht im Ratgeber [MD-Begutachtung vorbereiten](/ratgeber/md-begutachtung-vorbereiten/).",
          },
        ],
      },
      {
        h2: "Wie beginnt die Pflege mit TwinsCare in Oststeinbek?",
        blocks: [
          {
            type: "p",
            text: "Der erste Schritt ist ein Anruf oder eine Anfrage, danach kommen wir zur kostenlosen Erstberatung zu Ihnen nach Oststeinbek oder Havighorst.",
          },
          {
            type: "ol",
            items: [
              "Kontakt per Telefon oder über die [Pflegeanfrage](/pflege-anfragen/).",
              "Erstbesuch bei Ihnen zu Hause.",
              "Schriftlicher Kostenvoranschlag.",
              "Unterstützung bei Anträgen an die Pflegekasse.",
              "Start der Pflege mit festem Team.",
            ],
          },
          {
            type: "p",
            text: "Sie können den Pflegevertrag jederzeit ohne Frist kündigen (§ 120 Abs. 2 SGB XI).",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Oststeinbek hat eine Hamburger Postleitzahl – kann ich zum Hamburger Pflegestützpunkt gehen?",
        a: "Nein. Oststeinbek gehört zum Kreis Stormarn. Zuständig ist der Pflegestützpunkt im Kreis Stormarn mit Hauptstelle in Bad Oldesloe und einer monatlichen Außensprechstunde im Gutshaus Glinde.",
      },
      {
        q: "Versorgt TwinsCare auch Havighorst?",
        a: "Ja. Beide Ortsteile der Gemeinde, Oststeinbek und Havighorst, liegen in unserem Einsatzgebiet.",
      },
      {
        q: "Gelten in Schleswig-Holstein andere Pflegeleistungen als in Hamburg?",
        a: "Nein. Die Leistungen der Pflegeversicherung sind bundesweit gleich. Unterschiedlich sind nur die Beratungsstellen.",
      },
      {
        q: "Hilft TwinsCare beim Pflegegrad-Antrag?",
        a: "Ja. Wir unterstützen Sie beim Antrag und bei der Vorbereitung auf den Besuch des Medizinischen Dienstes.",
      },
    ],
    nachbarn: ["glinde", "billstedt", "jenfeld"],
    quellen: [
      {
        title: "Gemeinde Oststeinbek – Vorbericht zum Haushaltsplan 2023",
        url: "https://Oststeinbek.de/fileadmin/Gemeinde/Dateien/Finanzen/Haushaltsplaene/2023/2._Vorbericht.pdf",
      },
      {
        title: "Kreis Stormarn – Bevölkerungszahlen vom 31.12.2024",
        url: "https://www.kreis-stormarn.de/files/kreis/staedte-und-gemeinden/bevoelkerung31122024.pdf",
      },
      {
        title: "Kreis Stormarn – Flyer PflegeStützpunkt Stormarn",
        url: "https://www.kreis-stormarn.de/files/kreis/fachbereiche/pflegestuetzpunkt/FlyerPSPStormarn.pdf",
      },
      {
        title: "Land Schleswig-Holstein – Pflegestützpunkte",
        url: "https://www.schleswig-holstein.de/DE/fachinhalte/P/pflege/beratung/Pflegestuetzpunkte.html",
      },
      {
        title: "hamburg.de (Sozialbehörde) – Hamburger Hausbesuch",
        url: "https://www.hamburg.de/politik-und-verwaltung/behoerden/sozialbehoerde/themen/pflege/hausbesuch-86112",
      },
    ],
    pruefen: [
      "Außensprechstunde Pflegestützpunkt Stormarn im Gutshaus Glinde (Möllner Landstraße 53), 1. Mittwoch, 10–13 Uhr, nur mit Anmeldung – Flyer undatiert.",
      "Hauptstelle Mommsenstraße 13, Bad Oldesloe.",
      "Gibt es inzwischen eine Sprechstunde direkt in Oststeinbek?",
      "Einwohnerzahl 8.961 (Kreis Stormarn, 31.12.2024).",
      "Havighorst: Ortsteilentwicklungskonzept 2021, „Seniorengerechtes Wohnen“ als Planungsthema (Haushaltsvorbericht 2023).",
      "Ortsteil Oststeinbek grenzt an Hamburg (Lage, nicht aus Quelle).",
      "Ob die Hamburger Pflegestützpunkte Nicht-Hamburger tatsächlich abweisen – Text formuliert nur Zuständigkeit.",
    ],
  },
  // ───────────────────────────── Glinde ─────────────────────────────
  {
    slug: "glinde",
    name: "Glinde",
    h1: "Ambulante Pflege in Glinde",
    metaTitle: "Pflegedienst Glinde – ambulante Pflege | TwinsCare",
    metaDescription:
      "TwinsCare pflegt in Glinde (21509) zu Hause. Pflegeberatung im Gutshaus, Seniorenbeirat, Kosten 2026 und Leistungen – alles für Angehörige in Glinde erklärt.",
    lead:
      "Glinde ist eine Stadt im Kreis Stormarn und grenzt an Hamburg. Für Pflegeberatung ist deshalb der Kreis zuständig, nicht Hamburg. Praktisch: Der Pflegestützpunkt Stormarn berät einmal im Monat direkt im Gutshaus Glinde – und TwinsCare kommt zu Ihnen nach Hause.",
    plz: ["21509"],
    verwaltung: "Stadt Glinde, Kreis Stormarn, Schleswig-Holstein",
    anfahrt: "Glinde liegt nur wenige Kilometer nördlich unseres Büros an der Bergedorfer Straße 85.",
    kurz: [
      "Glinde hat 18.681 Einwohnerinnen und Einwohner (Stand Ende 2024) und gehört zum Kreis Stormarn.",
      "Der Pflegestützpunkt Stormarn bietet jeden ersten Mittwoch im Monat eine Sprechstunde im Gutshaus Glinde an, nur mit Anmeldung.",
      "Seit April 2024 hat Glinde wieder einen Seniorenbeirat, der sich unter anderem um Gehwege und Busanbindung kümmert.",
      "TwinsCare rechnet direkt mit Pflege- und Krankenkasse ab und erstellt vorab einen schriftlichen Kostenvoranschlag.",
    ],
    foto: {
      id: "photo-1762955911431-4c44c7c3f408",
      alt: "Betreuerin malt gemeinsam mit einem älteren Ehepaar",
    },
    sections: [
      {
        h2: "Wo gibt es in Glinde kostenlose Pflegeberatung?",
        blocks: [
          {
            type: "p",
            text: "Der Pflegestützpunkt im Kreis Stormarn berät jeden ersten Mittwoch im Monat von 10 bis 13 Uhr im Gutshaus Glinde an der Möllner Landstraße 53. Die Sprechstunde ist kostenlos, eine vorherige Anmeldung ist nötig.",
          },
          {
            type: "p",
            text: "Die Hauptstelle des Pflegestützpunkts liegt in Bad Oldesloe, Mommsenstraße 13. Dort erreichen Sie die Beraterinnen auch telefonisch. Themen sind zum Beispiel Haushaltshilfen, Essen auf Rädern, Hausnotruf, Hilfsmittel, Tagespflege und Anträge bei der Pflegekasse.",
          },
          {
            type: "hinweis",
            title: "Hamburger Stellen sind nicht zuständig",
            text: "Glinde gehört zu Schleswig-Holstein. Die Pflegestützpunkte der Hamburger Bezirke und der Hamburger Hausbesuch sind für Glinderinnen und Glinder deshalb nicht die richtige Adresse. Ihr Ansprechpartner ist der Pflegestützpunkt des Kreises Stormarn.",
          },
          {
            type: "p",
            text: "Bei TwinsCare bekommen Sie zusätzlich eine kostenlose Erstberatung bei Ihnen zu Hause. Mehr dazu unter [Pflegeberatung](/leistungen/pflegeberatung/).",
          },
        ],
      },
      {
        h2: "Welcher Pflegedienst versorgt Glinde?",
        blocks: [
          {
            type: "p",
            text: "TwinsCare versorgt die ganze Stadt Glinde in der Postleitzahl 21509 mit ambulanter Pflege. Unser Büro liegt im benachbarten Hamburg-Bergedorf, nur wenige Kilometer entfernt.",
          },
          {
            type: "p",
            text: "Glinde ist mit 18.681 Einwohnerinnen und Einwohnern (Stand Ende 2024) eine der größeren Städte im Kreis Stormarn. Es gibt Reihenhausgebiete, Mehrfamilienhäuser und ein lebendiges Zentrum rund um Marktplatz und Rathaus. Samstags findet dort der Wochenmarkt statt.",
          },
          {
            type: "p",
            text: "Bei uns betreut Sie eine feste Ansprechpartnerin mit einem kleinen, festen Team. Das schafft Vertrauen, gerade wenn Pflege neu für Sie ist.",
          },
        ],
      },
      {
        h2: "Wofür setzt sich der Seniorenbeirat Glinde ein?",
        blocks: [
          {
            type: "p",
            text: "Der Seniorenbeirat Glinde vertritt seit seiner Neugründung im April 2024 die Interessen älterer Menschen gegenüber der Stadt. Er lädt monatlich zum Frühstück ins Gutshaus ein und bietet Sprechstunden an.",
          },
          {
            type: "p",
            text: "Laut Stadtchronik 2024 hat sich der Beirat unter anderem für bessere Gehwege und seniorengerechte Bänke stark gemacht. Ein weiteres Thema ist die Busanbindung, weil die Wege zur Haltestelle zum Beispiel im nördlichen Reihenhausgebiet lang sind.",
          },
          {
            type: "p",
            text: "Diese Themen kennen wir aus der Pflege. Wenn der Weg zum Bus zu weit wird, helfen eine Alltagsbegleitung oder Einkaufshilfe. Dafür können Sie den Entlastungsbetrag von 131 € im Monat nutzen – mehr unter [Entlastungsleistungen](/leistungen/entlastungsleistungen/).",
          },
        ],
      },
      {
        h2: "Welche Leistungen bietet TwinsCare in Glinde an?",
        blocks: [
          {
            type: "p",
            text: "In Glinde übernehmen wir Grundpflege, Behandlungspflege, Verhinderungspflege, Entlastungsleistungen, Pflegeberatung und die Versorgung nach dem Krankenhaus.",
          },
          {
            type: "ul",
            items: [
              "[Ambulante Pflege](/leistungen/ambulante-pflege/) – Körperpflege, Anziehen, Lagerung und Mobilisation.",
              "[Behandlungspflege](/leistungen/behandlungspflege/) – zum Beispiel Wundversorgung oder Insulingabe auf Verordnung.",
              "[Verhinderungspflege](/leistungen/verhinderungspflege/) – bis zu acht Wochen im Jahr, wenn Angehörige verhindert sind.",
              "[Entlastungsleistungen](/leistungen/entlastungsleistungen/) – Hilfe im Alltag für Pflegebedürftige ab Pflegegrad 1.",
              "[Pflegeberatung](/leistungen/pflegeberatung/) – auch der Beratungsbesuch nach § 37 Abs. 3 SGB XI.",
              "[Pflege nach dem Krankenhausaufenthalt](/leistungen/pflege-nach-krankenhausaufenthalt/) – damit zu Hause nichts fehlt.",
            ],
          },
          { type: "cta", text: "Pflege in Glinde anfragen – wir kommen zur kostenlosen Erstberatung." },
        ],
      },
      {
        h2: "Wer hilft nach einem Krankenhausaufenthalt in Glinde?",
        blocks: [
          {
            type: "p",
            text: "Nach einem Krankenhausaufenthalt plant das Entlassmanagement der Klinik die weitere Versorgung mit Ihnen, und TwinsCare übernimmt die Pflege zu Hause in Glinde. Krankenhäuser sind dazu nach § 39 Abs. 1a SGB V verpflichtet.",
          },
          {
            type: "p",
            text: "Viele Glinderinnen und Glinder werden im Krankenhaus Reinbek St. Adolf-Stift oder in Hamburger Kliniken wie dem Bethesda Krankenhaus Bergedorf behandelt. Fragen Sie dort früh nach dem Sozialdienst und lassen Sie sich nötige Verordnungen mitgeben.",
          },
          {
            type: "p",
            text: "Melden Sie sich bei uns, sobald der Entlasstermin feststeht. Unsere [Checkliste zur Krankenhausentlassung](/ratgeber/krankenhaus-entlassung-checkliste/) hilft Ihnen, nichts zu vergessen.",
          },
        ],
      },
      {
        h2: "Was zahlt die Pflegekasse für Pflege in Glinde?",
        blocks: [
          {
            type: "p",
            text: "Die Pflegekasse zahlt 2026 für einen Pflegedienst bis zu 796 € bei Pflegegrad 2 und bis zu 1.497 € bei Pflegegrad 3 im Monat – in Schleswig-Holstein genauso wie in Hamburg. Dazu kommen 131 € Entlastungsbetrag.",
          },
          {
            type: "p",
            text: "Vor dem ersten Einsatz erhalten Sie einen schriftlichen Kostenvoranschlag. Die Abrechnung erledigen wir direkt mit der Kasse. Alle Beträge im Detail: [Kosten und Finanzierung](/kosten/).",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Wann berät der Pflegestützpunkt in Glinde?",
        a: "Laut Kreis Stormarn jeden ersten Mittwoch im Monat von 10 bis 13 Uhr im Gutshaus Glinde, Möllner Landstraße 53. Eine Anmeldung bei der Hauptstelle in Bad Oldesloe ist nötig.",
      },
      {
        q: "Kann ich als Glinderin den Hamburger Pflegestützpunkt in Bergedorf nutzen?",
        a: "Zuständig für Glinde ist der Pflegestützpunkt im Kreis Stormarn, nicht die Hamburger Pflegestützpunkte. TwinsCare dagegen versorgt Glinde und Hamburg gleichermaßen.",
      },
      {
        q: "Gibt es in Glinde einen Seniorenbeirat?",
        a: "Ja. Er wurde im April 2024 neu gegründet, lädt monatlich zum Frühstück ins Gutshaus ein und bietet Sprechstunden an.",
      },
      {
        q: "Was kostet die Erstberatung bei TwinsCare?",
        a: "Sie ist kostenlos und findet bei Ihnen zu Hause in Glinde statt.",
      },
      {
        q: "Wie viel Verhinderungspflege steht mir zu?",
        a: "Ab Pflegegrad 2 gibt es einen gemeinsamen Jahresbetrag für Verhinderungs- und Kurzzeitpflege von bis zu 3.539 €. Details im Ratgeber [Verhinderungspflege beantragen](/ratgeber/verhinderungspflege-antrag/).",
      },
    ],
    nachbarn: ["oststeinbek", "reinbek", "lohbruegge"],
    quellen: [
      {
        title: "Kreis Stormarn – Flyer PflegeStützpunkt Stormarn",
        url: "https://www.kreis-stormarn.de/files/kreis/fachbereiche/pflegestuetzpunkt/FlyerPSPStormarn.pdf",
      },
      {
        title: "Kreis Stormarn – Bevölkerungszahlen vom 31.12.2024",
        url: "https://www.kreis-stormarn.de/files/kreis/staedte-und-gemeinden/bevoelkerung31122024.pdf",
      },
      {
        title: "Stadt Glinde – Chronik für das Jahr 2024",
        url: "https://www.glinde.de/fileadmin/Glinde/Dateien/UEber_Uns/Stadt_Glinde_Chronik_f%C3%BCr_das_Jahr_2024.pdf",
      },
      {
        title: "Land Schleswig-Holstein – Pflegestützpunkte",
        url: "https://www.schleswig-holstein.de/DE/fachinhalte/P/pflege/beratung/Pflegestuetzpunkte.html",
      },
      {
        title: "Deutsches Krankenhausverzeichnis – Krankenhaus Reinbek St. Adolf-Stift",
        url: "https://dkgev-en.deutsches-krankenhaus-verzeichnis.de/app/portrait/59df80d65ce3f3eb/start",
      },
    ],
    pruefen: [
      "Außensprechstunde Pflegestützpunkt im Gutshaus Glinde (Möllner Landstraße 53), 1. Mittwoch, 10–13 Uhr – Flyer undatiert.",
      "Einwohnerzahl 18.681 (Kreis Stormarn, 31.12.2024).",
      "Seniorenbeirat: Neugründung 9. April 2024, monatliches Frühstück im Gutshaus, Sprechstunden, Themen Gehwege/Bänke/Busanbindung (Stadtchronik 2024).",
      "Wochenmarkt samstags auf dem Marktplatz.",
      "Behandlung von Glindern im Krankenhaus Reinbek bzw. Bethesda Bergedorf ist eine plausible Annahme, keine Statistik – ggf. allgemeiner formulieren.",
      "Lage „wenige Kilometer nördlich“ des Büros (geschätzt).",
    ],
  },

  // ───────────────────────────── Reinbek ─────────────────────────────
  {
    slug: "reinbek",
    name: "Reinbek",
    h1: "Pflegedienst in Reinbek – Pflege zu Hause",
    metaTitle: "Pflegedienst Reinbek – ambulante Pflege | TwinsCare",
    metaDescription:
      "Ambulante Pflege in Reinbek (21465): TwinsCare pflegt zu Hause, auch nach dem Krankenhaus Reinbek St. Adolf-Stift. Beratung, Seniorenbeirat, Kosten 2026.",
    lead:
      "Reinbek hat ein eigenes Krankenhaus, einen aktiven Seniorenbeirat und eine monatliche Sprechstunde des Pflegestützpunkts Stormarn. TwinsCare ergänzt das mit Pflege zu Hause – in der Innenstadt, in Neuschönningstedt und in den anderen Ortsteilen.",
    plz: ["21465"],
    verwaltung: "Stadt Reinbek, Kreis Stormarn, Schleswig-Holstein",
    anfahrt: "Reinbek grenzt an den Bezirk Bergedorf; von unserem Büro an der Bergedorfer Straße 85 sind es nur wenige Kilometer.",
    kurz: [
      "Reinbek ist mit 28.274 Einwohnerinnen und Einwohnern (Stand Ende 2024) eine der größten Städte im Kreis Stormarn.",
      "Das Krankenhaus Reinbek St. Adolf-Stift liegt an der Hamburger Straße 41 mitten in der Stadt.",
      "Der Pflegestützpunkt Stormarn bietet jeden dritten Mittwoch im Monat eine Außensprechstunde in Reinbek an, nur mit Anmeldung.",
      "Der Seniorenbeirat lädt jeden zweiten Mittwoch im Monat zum Themen-Frühstück ins Jürgen-Rickertsen-Haus ein.",
    ],
    foto: {
      id: "photo-1765896387387-0538bc9f997e",
      alt: "Pflegekraft lächelt gemeinsam mit einer älteren Patientin in deren Zimmer",
    },
    sections: [
      {
        h2: "Wie geht es nach dem Krankenhaus Reinbek zu Hause weiter?",
        blocks: [
          {
            type: "p",
            text: "Vor der Entlassung aus dem Krankenhaus Reinbek St. Adolf-Stift plant das Entlassmanagement der Klinik mit Ihnen die Versorgung zu Hause; TwinsCare kann die Pflege ab dem ersten Tag übernehmen. Zum Entlassmanagement sind Krankenhäuser nach § 39 Abs. 1a SGB V verpflichtet.",
          },
          {
            type: "p",
            text: "Das Krankenhaus an der Hamburger Straße 41 hat unter anderem eine Notaufnahme, eine Klinik für Orthopädie und Unfallchirurgie, Innere Medizin, Kardiologie sowie Onkologie und Palliativmedizin. Nach einer Hüftoperation oder einem Herzproblem brauchen viele Patientinnen und Patienten für einige Zeit Hilfe zu Hause.",
          },
          {
            type: "ol",
            items: [
              "Sprechen Sie den Sozialdienst des Krankenhauses früh an.",
              "Lassen Sie sich häusliche Krankenpflege verordnen, wenn Wundversorgung oder Medikamentengabe nötig ist.",
              "Rufen Sie uns mit dem Entlasstermin an.",
              "Wir prüfen mit Ihnen, ob ein Pflegegrad beantragt werden sollte.",
            ],
          },
          {
            type: "p",
            text: "Mehr dazu unter [Pflege nach dem Krankenhausaufenthalt](/leistungen/pflege-nach-krankenhausaufenthalt/) und in der [Checkliste zur Krankenhausentlassung](/ratgeber/krankenhaus-entlassung-checkliste/).",
          },
        ],
      },
      {
        h2: "Welcher Pflegedienst ist in Reinbek unterwegs?",
        blocks: [
          {
            type: "p",
            text: "TwinsCare pflegt in ganz Reinbek mit der Postleitzahl 21465 zu Hause. Unser Büro liegt gleich nebenan im Hamburger Bezirk Bergedorf.",
          },
          {
            type: "p",
            text: "Reinbek hatte Ende 2024 laut Kreis Stormarn 28.274 Einwohnerinnen und Einwohner. Zur Stadt gehören neben der Innenstadt mehrere Ortsteile, etwa Neuschönningstedt. Ob Sie in einer Wohnung nahe dem Bahnhof wohnen oder im Einfamilienhaus am Stadtrand: Wir richten die Pflege nach Ihrem Alltag aus.",
          },
          {
            type: "p",
            text: "Sie haben eine feste Ansprechpartnerin und ein kleines, festes Team. So wissen Sie, wer zu Ihnen kommt.",
          },
        ],
      },
      {
        h2: "Wo bekommen Reinbeker Familien Pflegeberatung?",
        blocks: [
          {
            type: "p",
            text: "Zuständig ist der Pflegestützpunkt im Kreis Stormarn, der jeden dritten Mittwoch im Monat von 9:30 bis 12:30 Uhr eine Außensprechstunde in Reinbek anbietet. Eine Anmeldung bei der Hauptstelle in Bad Oldesloe ist nötig.",
          },
          {
            type: "p",
            text: "Die Beratung ist kostenlos und unabhängig. Sie hilft bei Anträgen, Hilfsmitteln, Tagespflege oder der Suche nach Entlastung. Die Hamburger Pflegestützpunkte sind für Reinbek nicht zuständig, auch wenn Hamburg nur wenige Minuten entfernt ist.",
          },
          {
            type: "p",
            text: "Bei TwinsCare kommen wir zusätzlich zur kostenlosen Erstberatung zu Ihnen nach Hause. Details unter [Pflegeberatung](/leistungen/pflegeberatung/).",
          },
        ],
      },
      {
        h2: "Was macht der Seniorenbeirat Reinbek?",
        blocks: [
          {
            type: "p",
            text: "Der Seniorenbeirat Reinbek vertritt die Interessen der Menschen ab 60 in den Ausschüssen der Stadt. Er ist unabhängig, parteipolitisch neutral und überkonfessionell.",
          },
          {
            type: "p",
            text: "Seine Schwerpunkte sind Wohnen im Alter, Barrierefreiheit, sichere Fuß- und Radwege und eine seniorenfreundliche Stadt. Beim Themen-Frühstück am zweiten Mittwoch im Monat im Jürgen-Rickertsen-Haus, Schulstraße 7, gibt es auch eine Sprechstunde. Die öffentlichen Sitzungen finden am dritten Mittwoch um 14:30 Uhr statt.",
          },
          {
            type: "p",
            text: "Wer nicht mehr allein zu solchen Treffen kommt, kann Begleitung über den [Entlastungsbetrag von 131 Euro](/ratgeber/entlastungsbetrag-131-euro/) finanzieren.",
          },
          { type: "cta", text: "Pflege in Reinbek gesucht? Vereinbaren Sie eine kostenlose Erstberatung." },
        ],
      },
      {
        h2: "Welche Leistungen bietet TwinsCare in Reinbek?",
        blocks: [
          {
            type: "p",
            text: "In Reinbek bekommen Sie bei uns Grundpflege, Behandlungspflege, Verhinderungspflege, Entlastungsleistungen und Pflegeberatung.",
          },
          {
            type: "ul",
            items: [
              "[Ambulante Pflege](/leistungen/ambulante-pflege/) – Grundpflege nach SGB XI.",
              "[Behandlungspflege](/leistungen/behandlungspflege/) – medizinische Pflege auf Verordnung, Kostenträger Krankenkasse.",
              "[Verhinderungspflege](/leistungen/verhinderungspflege/) – Vertretung für pflegende Angehörige.",
              "[Entlastungsleistungen](/leistungen/entlastungsleistungen/) – Unterstützung im Alltag.",
              "[Pflegeberatung](/leistungen/pflegeberatung/) – inklusive Beratungseinsatz nach § 37 Abs. 3 SGB XI.",
            ],
          },
        ],
      },
      {
        h2: "Was zahlt die Pflegekasse für Pflege in Reinbek?",
        blocks: [
          {
            type: "p",
            text: "Für einen ambulanten Pflegedienst zahlt die Pflegekasse 2026 bis zu 796 € im Monat bei Pflegegrad 2, 1.497 € bei Pflegegrad 3, 1.859 € bei Pflegegrad 4 und 2.299 € bei Pflegegrad 5.",
          },
          {
            type: "p",
            text: "Wir rechnen direkt mit Ihrer Kasse ab. Einen schriftlichen Kostenvoranschlag bekommen Sie vorher. Alles Weitere unter [Kosten und Finanzierung](/kosten/) und im Ratgeber [Pflegegrade und Leistungen](/ratgeber/pflegegrade-leistungen/).",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Wann ist die Sprechstunde des Pflegestützpunkts in Reinbek?",
        a: "Laut Kreis Stormarn jeden dritten Mittwoch im Monat von 9:30 bis 12:30 Uhr. Den genauen Ort und einen Termin erhalten Sie bei der Anmeldung über die Hauptstelle in Bad Oldesloe.",
      },
      {
        q: "Übernimmt TwinsCare die Pflege nach dem Krankenhaus Reinbek?",
        a: "Ja. Melden Sie sich mit dem Entlasstermin bei uns, dann planen wir den ersten Einsatz. Ihren Pflegedienst wählen Sie dabei frei.",
      },
      {
        q: "Wo trifft sich der Seniorenbeirat Reinbek?",
        a: "Im Jürgen-Rickertsen-Haus, Schulstraße 7. Dort gibt es am zweiten Mittwoch im Monat ein Themen-Frühstück mit Sprechstunde.",
      },
      {
        q: "Versorgt TwinsCare auch Neuschönningstedt?",
        a: "Ja. Wir pflegen in allen Reinbeker Ortsteilen mit der Postleitzahl 21465.",
      },
      {
        q: "Kann ich den Pflegevertrag kündigen?",
        a: "Ja, jederzeit ohne Frist (§ 120 Abs. 2 SGB XI).",
      },
    ],
    nachbarn: ["wentorf", "glinde", "bergedorf"],
    quellen: [
      {
        title: "Deutsches Krankenhausverzeichnis – Krankenhaus Reinbek St. Adolf-Stift",
        url: "https://dkgev-en.deutsches-krankenhaus-verzeichnis.de/app/portrait/59df80d65ce3f3eb/start",
      },
      {
        title: "Kreis Stormarn – Flyer PflegeStützpunkt Stormarn",
        url: "https://www.kreis-stormarn.de/files/kreis/fachbereiche/pflegestuetzpunkt/FlyerPSPStormarn.pdf",
      },
      {
        title: "Stadt Reinbek – Flyer Seniorenbeirat 2024",
        url: "https://reinbek.de/fileadmin/Gemeinde/Dateien/Leben_und_Erleben/Seniorenbeirat/Stadt_Reinbek_Flyer_Seniorenbeirat_2024_02_26_Flyer_2024.pdf",
      },
      {
        title: "Kreis Stormarn – Bevölkerungszahlen vom 31.12.2024",
        url: "https://www.kreis-stormarn.de/files/kreis/staedte-und-gemeinden/bevoelkerung31122024.pdf",
      },
      {
        title: "Land Schleswig-Holstein – Pflegestützpunkte",
        url: "https://www.schleswig-holstein.de/DE/fachinhalte/P/pflege/beratung/Pflegestuetzpunkte.html",
      },
    ],
    pruefen: [
      "Ort der Außensprechstunde des Pflegestützpunkts in Reinbek: Kreis-Flyer nennt Jürgen-Rickertsen-Haus (Schulstraße 7), Seniorenbeirats-Flyer 2024 nennt Liebigstraße 2 („über FAMILA“) – Text nennt bewusst keinen Ort.",
      "Termin 3. Mittwoch, 9:30–12:30 Uhr (beide Flyer übereinstimmend).",
      "Seniorenbeirat: Themen-Frühstück 2. Mittwoch 9–11 Uhr, öffentliche Sitzung 3. Mittwoch 14:30 Uhr, außer Juli (Flyer 2024).",
      "Einwohnerzahl 28.274 (Kreis Stormarn, 31.12.2024).",
      "Fachabteilungen Krankenhaus Reinbek laut Krankenhausverzeichnis.",
      "Neuschönningstedt als Ortsteil (nur über Begegnungsstätte im Flyer belegt); vollständige Ortsteilliste nicht verifiziert.",
      "„Reinbek grenzt an den Bezirk Bergedorf“ und „wenige Kilometer“ (Lage, nicht aus Quelle).",
    ],
  },

  // ───────────────────────────── Wentorf bei Hamburg ─────────────────────────────
  {
    slug: "wentorf",
    name: "Wentorf bei Hamburg",
    h1: "Pflegedienst für Wentorf bei Hamburg",
    metaTitle: "Pflegedienst Wentorf – ambulante Pflege | TwinsCare",
    metaDescription:
      "Pflege zu Hause in Wentorf bei Hamburg (21465): TwinsCare aus dem benachbarten Bergedorf. Welche Pflegeberatung im Kreis Herzogtum Lauenburg zuständig ist.",
    lead:
      "Wentorf und Reinbek teilen sich die Postleitzahl 21465, gehören aber zu verschiedenen Kreisen. Für Pflegeberatung ist das wichtig. TwinsCare pflegt in Wentorf zu Hause und kennt die Zuständigkeiten auf beiden Seiten der Kreisgrenze.",
    plz: ["21465"],
    verwaltung: "Gemeinde Wentorf bei Hamburg, Kreis Herzogtum Lauenburg, Schleswig-Holstein",
    anfahrt: "Wentorf liegt direkt neben Bergedorf; von unserem Büro an der Bergedorfer Straße 85 sind es nur wenige Kilometer.",
    kurz: [
      "Wentorf bei Hamburg hat rund 13.500 Einwohnerinnen und Einwohner (Stand Mitte 2024) und gehört zum Kreis Herzogtum Lauenburg.",
      "Trotz gleicher Postleitzahl wie Reinbek ist nicht der Pflegestützpunkt Stormarn zuständig, sondern der Pflegestützpunkt im Kreis Herzogtum Lauenburg.",
      "Die Geschäftsstelle des Pflegestützpunkts Herzogtum Lauenburg liegt in Mölln; Termine werden telefonisch vereinbart.",
      "Für Fragen rund um Demenz gibt es im Kreis zusätzlich die kostenlose Koordinierungsstelle Demenz.",
    ],
    foto: {
      id: "photo-1508963493744-76fce69379c0",
      alt: "Älteres Paar sitzt auf einer Bank am Wasser",
    },
    sections: [
      {
        h2: "Welcher Pflegedienst versorgt Wentorf bei Hamburg?",
        blocks: [
          {
            type: "p",
            text: "TwinsCare versorgt Wentorf bei Hamburg mit ambulanter Pflege zu Hause. Unser Büro liegt im benachbarten Bergedorf, nur wenige Kilometer entfernt.",
          },
          {
            type: "p",
            text: "Wentorf ist eine Gemeinde im Kreis Herzogtum Lauenburg mit rund 13.500 Einwohnerinnen und Einwohnern (Statistikamt Nord, Stand 30.06.2024). Sie liegt am westlichen Rand des Kreises, direkt an der Grenze zu Hamburg und zu Reinbek. Viele Wentorferinnen und Wentorfer haben deshalb Arzt, Klinik oder Familie in Bergedorf.",
          },
          {
            type: "p",
            text: "Bei uns betreut Sie eine feste Ansprechpartnerin mit einem kleinen, festen Team. Wir rechnen direkt mit Ihrer Pflege- und Krankenkasse ab.",
          },
        ],
      },
      {
        h2: "Welche Pflegeberatung ist für Wentorf zuständig?",
        blocks: [
          {
            type: "p",
            text: "Für Wentorf ist der Pflegestützpunkt im Kreis Herzogtum Lauenburg zuständig, mit Geschäftsstelle in Mölln. Die Beratung ist kostenlos und unabhängig, auf Wunsch auch bei Ihnen zu Hause.",
          },
          {
            type: "p",
            text: "Das ist ein häufiger Stolperstein: Reinbek hat dieselbe Postleitzahl 21465, gehört aber zum Kreis Stormarn. Die Sprechstunden des Pflegestützpunkts Stormarn in Reinbek und Glinde sind daher nicht für Wentorf gedacht. Auch die Hamburger Pflegestützpunkte und der Hamburger Hausbesuch gelten nur für Menschen mit Wohnsitz in Hamburg.",
          },
          {
            type: "p",
            text: "Der Pflegestützpunkt Herzogtum Lauenburg berät an mehreren Orten im Kreis, zum Beispiel in Ratzeburg. Termine vereinbaren Sie über die Geschäftsstelle in Mölln oder per E-Mail. Eine Anmeldung wird empfohlen, damit Sie nicht warten müssen.",
          },
          {
            type: "hinweis",
            title: "Hilfe bei Demenz",
            text: "Im Kreis Herzogtum Lauenburg berät zusätzlich die Koordinierungsstelle Demenz mit Geschäftsstelle in Mölln. Die Beratung für Erkrankte und Angehörige ist kostenlos und unverbindlich, Termine gibt es auch an Außenstandorten wie Schwarzenbek.",
          },
        ],
      },
      {
        h2: "Welche Leistungen bekommen Sie von TwinsCare in Wentorf?",
        blocks: [
          {
            type: "p",
            text: "In Wentorf übernehmen wir Grundpflege, Behandlungspflege, Verhinderungspflege, Entlastungsleistungen, Pflegeberatung und die Pflege nach dem Krankenhaus.",
          },
          {
            type: "ul",
            items: [
              "[Ambulante Pflege](/leistungen/ambulante-pflege/) – Hilfe bei Körperpflege und Bewegung im Alltag.",
              "[Behandlungspflege](/leistungen/behandlungspflege/) – medizinische Pflege nach ärztlicher Verordnung.",
              "[Verhinderungspflege](/leistungen/verhinderungspflege/) – wenn Angehörige Urlaub machen oder selbst krank sind.",
              "[Entlastungsleistungen](/leistungen/entlastungsleistungen/) – Unterstützung im Alltag aus dem Entlastungsbetrag.",
              "[Pflegeberatung](/leistungen/pflegeberatung/) – auch der Pflicht-Beratungsbesuch für Pflegegeldbezieher.",
              "[Pflege nach einem Krankenhausaufenthalt](/leistungen/pflege-nach-krankenhausaufenthalt/) – ab dem ersten Tag zu Hause.",
            ],
          },
        ],
      },
      {
        h2: "Welche Krankenhäuser liegen in der Nähe von Wentorf?",
        blocks: [
          {
            type: "p",
            text: "Die nächstgelegenen Krankenhäuser sind das Agaplesion Bethesda Krankenhaus Bergedorf am Glindersweg und das Krankenhaus Reinbek St. Adolf-Stift an der Hamburger Straße. Beide liegen nur wenige Kilometer von Wentorf entfernt.",
          },
          {
            type: "p",
            text: "Das Bethesda hat eine Klinik für Geriatrie, das Krankenhaus Reinbek unter anderem Orthopädie, Unfallchirurgie und Innere Medizin. Nach der Entlassung plant das Entlassmanagement der Klinik die weitere Versorgung mit Ihnen (§ 39 Abs. 1a SGB V). Wir übernehmen dann die Pflege in Wentorf.",
          },
          {
            type: "p",
            text: "Sprechen Sie früh mit dem Sozialdienst und melden Sie sich mit dem Entlasstermin bei uns. Die [Checkliste zur Krankenhausentlassung](/ratgeber/krankenhaus-entlassung-checkliste/) hilft bei der Vorbereitung.",
          },
          { type: "cta", text: "Pflege in Wentorf anfragen – kostenlose Erstberatung bei Ihnen zu Hause." },
        ],
      },
      {
        h2: "Was zahlt die Pflegekasse für Pflege in Wentorf?",
        blocks: [
          {
            type: "p",
            text: "Die Pflegekasse zahlt 2026 für einen ambulanten Pflegedienst bis zu 796 € (Pflegegrad 2) oder 1.497 € (Pflegegrad 3) im Monat. Ab Pflegegrad 1 kommt der Entlastungsbetrag von 131 € monatlich hinzu.",
          },
          {
            type: "p",
            text: "Diese Beträge gelten bundesweit, im Kreis Herzogtum Lauenburg also genauso wie in Hamburg. Sie bekommen vorab einen schriftlichen Kostenvoranschlag. Mehr unter [Kosten und Finanzierung](/kosten/) und im Ratgeber [Was kostet ein Pflegedienst?](/ratgeber/was-kostet-ein-pflegedienst/).",
          },
        ],
      },
      {
        h2: "Wie startet die Pflege mit TwinsCare in Wentorf?",
        blocks: [
          {
            type: "p",
            text: "Nach Ihrem Anruf kommen wir zur kostenlosen Erstberatung nach Wentorf, Sie erhalten einen schriftlichen Kostenvoranschlag, und dann beginnt die Pflege.",
          },
          {
            type: "ol",
            items: [
              "Anruf oder [Pflegeanfrage](/pflege-anfragen/).",
              "Erstbesuch bei Ihnen zu Hause.",
              "Schriftlicher Kostenvoranschlag.",
              "Hilfe bei Anträgen an die Pflegekasse – Tipps im Ratgeber [MD-Begutachtung vorbereiten](/ratgeber/md-begutachtung-vorbereiten/).",
              "Erster Einsatz durch Ihr festes Team.",
            ],
          },
          {
            type: "p",
            text: "Der Pflegevertrag ist jederzeit ohne Frist kündbar (§ 120 Abs. 2 SGB XI).",
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Wentorf und Reinbek haben beide die Postleitzahl 21465 – welcher Pflegestützpunkt ist für mich zuständig?",
        a: "Entscheidend ist der Kreis, nicht die Postleitzahl. Wentorf gehört zum Kreis Herzogtum Lauenburg, zuständig ist der Pflegestützpunkt im Kreis Herzogtum Lauenburg. Reinbek gehört zum Kreis Stormarn.",
      },
      {
        q: "Gibt es in Wentorf eine Sprechstunde des Pflegestützpunkts?",
        a: "Ob und wann es eine Sprechstunde in Wentorf oder in der Nähe gibt, erfahren Sie bei der Geschäftsstelle in Mölln. Auf Wunsch kommt die Beratung auch zu Ihnen nach Hause.",
      },
      {
        q: "Kann ich als Wentorferin den Hamburger Hausbesuch nutzen?",
        a: "Nein. Der Hamburger Hausbesuch ist ein Angebot der Hamburger Sozialbehörde für Menschen mit Wohnsitz in Hamburg.",
      },
      {
        q: "Was kostet die Erstberatung bei TwinsCare?",
        a: "Nichts. Erstberatung und Kostenvoranschlag sind kostenlos und unverbindlich.",
      },
      {
        q: "Wo gibt es in der Nähe Beratung bei Demenz?",
        a: "Im Kreis Herzogtum Lauenburg berät die Koordinierungsstelle Demenz kostenlos. Ihre Geschäftsstelle ist in Mölln, Termine gibt es auch an Außenstandorten.",
      },
    ],
    nachbarn: ["bergedorf", "reinbek", "lohbruegge"],
    quellen: [
      {
        title: "Statistikamt Nord – Bevölkerung der Gemeinden in Schleswig-Holstein, 2. Quartal 2024",
        url: "https://epub.sub.uni-hamburg.de/epub/volltexte/2025/184063/pdf/A_I_1_vj_24_2_Zensus_SH.pdf",
      },
      {
        title: "Land Schleswig-Holstein – Pflegestützpunkte",
        url: "https://www.schleswig-holstein.de/DE/fachinhalte/P/pflege/beratung/Pflegestuetzpunkte.html",
      },
      {
        title: "Amt Lauenburgische Seen – Beratungsstandorte Pflegestützpunkt Herzogtum Lauenburg",
        url: "https://amt-lauenburgische-seen.de/files/pdf_sonstige/19_Pflegeberatung_Beratungsstandorte%20%C3%9Cbersicht%20NEU_2024.pdf",
      },
      {
        title: "Amt Lauenburgische Seen – Pflegeberatung Ratzeburg 2026",
        url: "https://amt-lauenburgische-seen.de/files/pdf_sonstige/19_Beratungsstandorte%20NK%202026%20Pflegest%C3%BCtzpunkt.pdf",
      },
      {
        title: "Amt Schwarzenbek-Land – Koordinierungsstelle Demenz",
        url: "https://www.amt-schwarzenbek-land.de/media/custom/1879_3106_1.PDF",
      },
      {
        title: "Deutsches Krankenhausverzeichnis – Agaplesion Bethesda Krankenhaus Bergedorf",
        url: "https://www.deutsches-krankenhaus-verzeichnis.de/app/portrait/04242933803e8bd0/pdf",
      },
      {
        title: "Deutsches Krankenhausverzeichnis – Krankenhaus Reinbek St. Adolf-Stift",
        url: "https://dkgev-en.deutsches-krankenhaus-verzeichnis.de/app/portrait/59df80d65ce3f3eb/start",
      },
    ],
    pruefen: [
      "Pflegestützpunkt Herzogtum Lauenburg: Adresse der Geschäftsstelle in Mölln nicht verifiziert (nur Telefon 04542 826549); pflegestuetzpunkt-herzogtum-lauenburg.de und die Landesseite …/Pflegestuetzpunkte/herzogtumlauenburg konnten nicht geöffnet werden.",
      "Gibt es eine Sprechstunde des Pflegestützpunkts in Wentorf, Geesthacht oder Schwarzenbek? (Belegt sind nur Ratzeburg, Groß Grönau, Sandesneben, Berkenthin.)",
      "Hausbesuche durch den Pflegestützpunkt Herzogtum Lauenburg (Landesseite: Beratung zu Hause in SH generell möglich).",
      "Koordinierungsstelle Demenz: Geschäftsstelle Wasserkrüger Weg 7, Mölln; Außenstandorte Schwarzenbek, Lauenburg, Sandesneben – Aktualität prüfen.",
      "Einwohnerzahl 13.513 (Statistikamt Nord, 30.06.2024).",
      "Wentorf grenzt an Hamburg-Bergedorf und Reinbek (Lage, nicht aus Quelle).",
      "Nicht verwendet: Anteil 65+ von 25,9 % (2024) – stammt aus einer studentischen Präsentation auf wentorf.de, keine amtliche Quelle; ggf. Statistikamt-Nord-Wert nachrecherchieren.",
      "wentorf.de (Seniorenangebote, Seniorenbeirat) konnte nicht geöffnet werden – lokale Treffpunkte in Wentorf fehlen deshalb.",
    ],
  },
];
