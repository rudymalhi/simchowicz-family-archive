const sheetUrl = "https://docs.google.com/spreadsheets/d/1I38oTVK9kawqEzJdLaSqr29BgB9EcnB2ydfkJBt-JLE/edit?usp=sharing";
const profileUrl = "https://share.google/IoCxnAWEjVG2Uco3Z";

const external = {
  arolsen: "https://collections.arolsen-archives.org/en/document/130624716",
  arolsenRosa: "https://collections.arolsen-archives.org/en/document/12674259",
  arolsenMinni: "https://collections.arolsen-archives.org/en/document/12674260",
  arolsenMinniAlt: "https://collections.arolsen-archives.org/en/document/12674261",
  arolsenSascha: "https://collections.arolsen-archives.org/en/document/12674257",
  arolsenSusi: "https://collections.arolsen-archives.org/en/document/12674258",
  arolsenSala: "https://collections.arolsen-archives.org/en/document/78813850",
  arolsenRoza: "https://collections.arolsen-archives.org/en/document/78827309",
  jdc: "https://archives.jdc.org/jdc-archives-shares-zbaszyn-refugees-list-with-jri-poland/",
  jdcNames: "https://archives.jdc.org/our-collections/names-index/",
  jdcHelp: "https://archives.jdc.org/our-collections/names-index/names-search-help/",
  addressBook: "https://adressbuecher.genealogy.net/entry/61fe8119-6537-11ef-b615-0242ac104001",
  israelMemorial: "https://laad.btl.gov.il/Web/He/TerrorVictims/Page/Default.aspx?ID=38282",
  oralHistory: "https://www.ravdori.co.il/stories/%D7%90%D7%97%D7%93%D7%95%D7%AA-%D7%94%D7%9E%D7%A9%D7%A4%D7%97%D7%94-%D7%9E%D7%A2%D7%9C-%D7%94%D7%9B%D7%9C-%D7%A1%D7%91%D7%AA%D7%90-%D7%90%D7%A1%D7%AA%D7%99%D7%98%D7%94-%D7%A4%D7%A1%D7%98%D7%A1/",
  polishArchive: "https://www.szukajwarchiwach.gov.pl/en/zespol/-/zespol/54084",
  usHoloZbaszyn: "https://encyclopedia.ushmm.org/content/en/gallery/zbaszyn",
  usHoloTarnow: "https://encyclopedia.ushmm.org/content/en/article/tarnow",
  usHoloSkarzysko: "https://encyclopedia.ushmm.org/content/en/oral-history/abraham-lewent-describes-conditions-in-skarzysko-camp",
  fuBerlin: "https://www.fu-berlin.de/presse/publikationen/tsp/archiv/2008/ts_20080419/ts_200800419_11/index.html",
  jewishMuseum: "https://www.jmberlin.de/berlin-transit/orte/en/talmudtora.php"
};

const t = {
  en: {
    title: "Simchowicz Family Archive",
    brand: { title: "Simchowicz", subtitle: "family archive" },
    nav: { family: "Family", updates: "New findings", timeline: "Timeline", places: "Places", sources: "Sources" },
    hero: {
      eyebrow: "A family memory, still being researched",
      title: "From Berlin to Tarnów — and through the wreckage of Europe",
      lede: "The documented story of Paula Pnina Simchowicz / Rapoport and the Simchowicz family: Jewish life in interwar Berlin, expulsion to Poland, forced labor under Nazi occupation, and the work of remembering.",
      primary: "Read the family story",
      secondary: "See the evidence",
      cardKicker: "The clearest thread",
      cardTitle: "Paula survived — and left a record",
      stats: [["1919", "born in Berlin"], ["1938", "forced to Poland"], ["1994", "died in Israel"]]
    },
    about: {
      kicker: "About this archive",
      title: "A careful reconstruction",
      text: "This is an evolving memorial and research record. Direct documents are separated from information supplied in the family spreadsheet and from historical context. Names are kept in the forms found in the sources, because spelling changes often carry clues.",
      chips: ["Berlin", "Zbąszyń", "Tarnów", "Vilnius", "Tel Aviv"]
    },
    updates: {
      kicker: "Research update · 3 September 2026",
      title: "The archival picture has sharpened",
      intro: "A fresh review of Arolsen, the Berlin address record, the new JRI material, and Israeli family sources clarifies Paula’s identity and reconstructs a probable prewar household. Open questions remain visible.",
      labels: { confirmed: "Confirmed record", likely: "Strong identification", family: "Family testimony", open: "Open question" },
      cards: [
        ["confirmed", "Paula and Pnina are the same person", "Israel’s official memorial record names פנינה פאולה רפפורט שמחוביץ, born in Berlin on 22 June 1919, daughter of Esther and Matityahu. It also records her August 1947 immigration, marriage to Shmuel Rapoport, Tel Aviv printing business, two children, and death in the 1994 Route 5 bombing.", `<a href="${external.israelMemorial}" target="_blank" rel="noreferrer">Open the official memorial record ↗</a>`],
        ["confirmed", "Arolsen now shows a wider record group", "Arolsen cards identify Rosa (1 January 1922), Minni (7 September 1924), and Sascha/Susi (18 December 1929), all Berlin-born Polish citizens with father Mates and mother Erna/Ester née Offen. Records 12674257 and 12674258 are two records for the same Susi. Record 12674261 is an additional Minni record. Sala and Roza are linked as unresolved records and are not merged with Salo/Shlomo or Rosa/Rosa Shoshana.", `<a href="${external.arolsenRosa}" target="_blank" rel="noreferrer">Rosa ↗</a> · <a href="${external.arolsenMinni}" target="_blank" rel="noreferrer">Minni ↗</a> · <a href="${external.arolsenMinniAlt}" target="_blank" rel="noreferrer">Minni, additional record ↗</a> · <a href="${external.arolsenSascha}" target="_blank" rel="noreferrer">Susi, record 12674257 ↗</a> · <a href="${external.arolsenSusi}" target="_blank" rel="noreferrer">Susi, record 12674258 ↗</a> · <a href="${external.arolsenSala}" target="_blank" rel="noreferrer">Sala ↗</a> · <a href="${external.arolsenRoza}" target="_blank" rel="noreferrer">Roza ↗</a>`],
        ["confirmed", "Grenadierstraße 17 remains the primary address", "Mathes Sinechowitz is listed at Grenadierstraße 17 in the 1929 Berlin address book, and the Rosa and Minni Arolsen cards also give No. 17. No. 14 appears on the Sascha/Susi cards and is retained as an unresolved second address or record discrepancy.", `<a href="${external.addressBook}" target="_blank" rel="noreferrer">Open the 1929 address record ↗</a>`],
        ["family", "The postwar bridge is clearer", "The official memorial confirms Israel in 1947 and marriage to Shmuel Rapoport. A family oral-history account adds that Paula and Semek/Shmuel met through UNRRA, lived in Italy for about a year, and then came to Israel. These additional route details are family testimony, not independent archival proof.", `<a href="${external.oralHistory}" target="_blank" rel="noreferrer">Read the family oral history ↗</a>`],
        ["likely", "The 1938 expulsion is historically plausible", "The Arolsen Zbąszyń directory covers Polish citizens expelled from Germany in October 1938 and includes parents, birthplaces, former German addresses, relatives, and post-expulsion destinations. The family’s Polish citizenship and Berlin residence fit this history, but no person-level Paula or Mates match has yet been verified.", `<a href="${external.arolsen}" target="_blank" rel="noreferrer">Arolsen Zbąszyń collection ↗</a> · <a href="${external.jdc}" target="_blank" rel="noreferrer">JDC description ↗</a>`],
        ["open", "Two archival links still need closing", "The new JRI report raises a possible connection between the Berlin Mates/Mathes and an older Polish record, but its detailed index output is kept off this public site because the report restricts publication without permission. The JDC person-level search was also blocked by a security challenge; that is not evidence that the family is absent from the list.", `<a href="${external.polishArchive}" target="_blank" rel="noreferrer">Search the Nowy Sącz archive collection ↗</a> · <a href="${external.jdcHelp}" target="_blank" rel="noreferrer">JDC search guidance ↗</a>`]
      ],
      note: "Editorial note: the JRI report remains a private research lead until JRI-Poland publication permission is obtained."
    },
    family: {
      kicker: "The family",
      title: "The Simchowicz household, as currently reconstructed",
      text: "Paula’s Israeli memorial record names Matityahu and Esther as her parents. The Berlin address book and Arolsen cards now add strong independent evidence for a prewar household, while the family spreadsheet preserves additional names that still need confirmation.",
      parents: "Parents",
      parent1: ["Mates / Matityahu Simchowicz", "c. 1889 · Nowy Sącz", "birthplace and 1943 fate: family source; name supported by Arolsen"],
      parent2: ["Ester / Esther / Erna Simchowicz", "c. 1896 · Poland", "née Offen in Arolsen; birthplace from family source"],
      leadTitle: "Arolsen adds a probable household",
      leadText: "Arolsen cards now identify Rosa, Minni, and Sascha/Susi as Berlin-born Polish citizens with father Mates and mother Erna/Ester née Offen. Records 12674257 and 12674258 are two records for the same Susi, while 12674261 is an additional Minni record. Sala and Roza remain separate unresolved records and are not merged with Salo/Shlomo or Rosa/Rosa Shoshana.",
      leadLinks: `<a href="${external.arolsenRosa}" target="_blank" rel="noreferrer">Rosa’s card ↗</a> · <a href="${external.arolsenMinni}" target="_blank" rel="noreferrer">Minni’s card ↗</a> · <a href="${external.arolsenMinniAlt}" target="_blank" rel="noreferrer">Additional Minni card ↗</a> · <a href="${external.arolsenSascha}" target="_blank" rel="noreferrer">Susi, record 12674257 ↗</a> · <a href="${external.arolsenSusi}" target="_blank" rel="noreferrer">Susi, record 12674258 ↗</a> · <a href="${external.arolsenSala}" target="_blank" rel="noreferrer">Sala ↗</a> · <a href="${external.arolsenRoza}" target="_blank" rel="noreferrer">Roza ↗</a> · <a href="${external.addressBook}" target="_blank" rel="noreferrer">1929 address record ↗</a>`,
      children: "Children and likely siblings in the records",
      childData: [
        ["Paula Pnina", "22 June 1919 · Berlin", "direct"],
        ["Isaac Eliezer", "birth date not yet found", "family"],
        ["Rosa Shoshana", "1 January 1922 · Berlin", "arolsen"],
        ["Salo / Shlomo", "24 May 1923", "family"],
        ["Mina / Minni", "7 September 1924 · Berlin", "arolsen"],
        ["Sascha / Susi", "18 December 1929 · Berlin", "arolsen"]
      ],
      direct: "Direct documents",
      childStatus: { direct: "Direct documents", arolsen: "Arolsen record", family: "Family record" },
      familyRecord: "Family record",
      lead: "Research lead",
      note: "The title of the spreadsheet includes “Ofen”. Its exact relationship to the Simchowicz family remains an open question."
    },
    timeline: {
      kicker: "Paula’s life",
      title: "A life traced through documents",
      intro: "The CV, sworn statement, Berlin record, death certificate, and correspondence create an unusually continuous thread from childhood in Berlin to postwar Israel.",
      events: [
        ["1919", "Born in Berlin", "Paula was born on 22 June 1919 as Paula Simchowicz, daughter of Mates and Ester/Esther Simchowicz.", "CV · official Berlin record · death certificate"],
        ["c. 1925", "Jewish schooling", "At about six, she entered the Jewish school on Rykestraße. Four years later she continued at a girls’ middle school on Kaiserstraße, later moved to Große Hamburger Straße.", "CV"],
        ["1933", "Work begins", "She left school before completing it and learned women’s clothing work at Paliwoda on Hufelandstraße. Her stated monthly pay rose from 80 to 220 Reichsmarks.", "CV"],
        ["Sept. 1938", "Germany to Zbąszyń", "Her sworn statement says she left Germany for Zbąszyń, Poland. The family dossier describes the move as an expulsion of Polish Jews from Berlin.", "1955 sworn statement · family letter"],
        ["Yom Kippur 1939", "Forced labor in Tarnów", "A German soldier arrested her in the street. She was taken to a guarded building outside Tarnów and forced to sew SS uniforms for about 14 hours a day, without wages.", "1955 sworn statement"],
        ["1939–June 1941", "Locked workshop", "She describes isolation, SS guards, a death penalty for leaving, and 300 grams of bread as her only food. In June 1941 she was transferred to a sewing workshop in Tarnów.", "1955 sworn statement"],
        ["1941–1945", "Camps and liberation", "The CV names Płaszów and a place that appears to be Skarżysko, followed by Częstochowa. The final place-name is unclear in the scan and is marked here as a research lead.", "CV · camp context"],
        ["Aug. 1947", "A new life in Israel", "The official Israeli memorial record says Paula arrived in Israel in August 1947, married Shmuel Rapoport, and opened a printing press with him in Tel Aviv. Family oral history adds a meeting through UNRRA and about a year in Italy before immigration.", "Official memorial record · family oral history"],
        ["1955", "A sworn testimony", "In Tel Aviv, Paula confirmed the account under oath. Her testimony is one of the strongest primary records in the collection.", "Sworn statement dated 4 May 1955"],
        ["1994", "Pnina Rapoport", "The Israeli death certificate records her as Pnina Rapoport, born 22 June 1919 and deceased 19 October 1994 in Tel Aviv–Yafo.", "Israeli death certificate"]
      ]
    },
    places: {
      kicker: "A geography of rupture and survival",
      title: "The route the documents reveal",
      intro: "Each place is more than a point on a map: it marks a change in education, work, persecution, captivity, or survival.",
      cards: [
        ["01", "Berlin", "Birth, schooling, work, and the family home documented at Grenadierstraße 17."],
        ["02", "Zbąszyń", "Paula’s stated destination after leaving Germany in September 1938."],
        ["03", "Tarnów", "Mates and other Simchowicz family correspondence appears here in 1939–1940; Paula was forced to work here."],
        ["04", "Płaszów → Skarżysko → Częstochowa", "The CV’s wartime sequence; “Skarżysko” is an informed reading of an unclear scan."],
        ["05", "Tel Aviv", "Postwar home, sworn testimony in 1955, and Paula’s death in 1994."]
      ],
      route: "Berlin → Zbąszyń → Tarnów → camps → Israel"
    },
    testimony: {
      kicker: "Paula’s voice",
      title: "What her own testimony tells us",
      quote: "We had to work an average of fourteen hours a day. We received no wages; our only food was 300 grams of bread.",
      cite: "Paula Rapoport, sworn statement, Tel Aviv, 4 May 1955",
      heading: "A rare first-person record",
      text: "The 1955 statement corrects and sharpens the CV. It places the beginning of forced labor at the end of September 1939, on Yom Kippur, and records the conditions in her own words: isolation, constant SS guard, punishment for leaving, long shifts, hunger, and unpaid labor.",
      facts: [["Identity", "Paula Simchowicz → Pnina Rapoport"], ["Family", "Daughter of Mates and Ester/Esther"], ["Work", "Women’s clothing in Berlin; forced sewing in Tarnów"], ["Outcome", "Survived and rebuilt a life in Israel"]]
    },
    sources: {
      kicker: "Evidence and context",
      title: "A transparent source trail",
      intro: "The archive distinguishes what is directly documented, what comes from the family spreadsheet, and what is offered only as historical context or a research lead.",
      filters: { all: "All", direct: "Direct documents", family: "Family source", context: "Historical context", lead: "Research lead" },
      cards: [
        ["direct", "Paula’s document bundle", "Official Berlin identification, the Israeli death certificate, Red Cross forms, family correspondence, and duplicates of the CV and sworn statement.", "Paula documents · pp. 1–21"],
        ["direct", "1929 Berlin address book", "The Jewish address book lists Mathes Sinechowitz at Grenadierstraße 17, Berlin. This is the basis for the corrected family address.", `<a href="${external.addressBook}" target="_blank" rel="noreferrer">Open the address-book record ↗</a>`],
        ["direct", "Israeli memorial record", "The official memorial page confirms Paula/Pnina’s parents, Berlin birth, 1947 immigration, marriage to Shmuel Rapoport, two children, and death in 1994.", `<a href="${external.israelMemorial}" target="_blank" rel="noreferrer">Open the memorial record ↗</a>`],
        ["direct", "Arolsen family cards", "Public Arolsen records identify Rosa, Minni, and Sascha/Susi with father Mates, mother Erna/Ester née Offen, Berlin birthplaces, and Polish citizenship.", `<a href="${external.arolsenRosa}" target="_blank" rel="noreferrer">Rosa ↗</a> · <a href="${external.arolsenMinni}" target="_blank" rel="noreferrer">Minni ↗</a> · <a href="${external.arolsenSascha}" target="_blank" rel="noreferrer">Sascha ↗</a>`],
        ["direct", "Paula’s CV", "German Lebenslauf: birth, schools, employment, expulsion, forced labor, camp sequence, and liberation.", "Paula Simchovicz CV · p. 1"],
        ["direct", "1955 sworn statement", "Paula’s first-person account of Zbąszyń, Tarnów, SS-uniform sewing, hunger, confinement, and transfer in 1941.", "Scanned statement · 4 May 1955"],
        ["family", "Family spreadsheet", "The working family table with names, birth years or dates, places, and fate fields for the Simchovitz–Ofen project.", `<a href="${sheetUrl}" target="_blank" rel="noreferrer">Open the family spreadsheet ↗</a>`],
        ["family", "Genealogy profile", "The public profile that connects Paula Pnina Rapaport with the Simchowicz surname and the 1919–1994 dates.", `<a href="${profileUrl}" target="_blank" rel="noreferrer">Open the genealogy profile ↗</a>`],
        ["family", "Postwar family oral history", "A 2023 family interview says Paula and Semek/Shmuel met through UNRRA, lived in Italy for about a year, and then came to Israel. These details are family testimony.", `<a href="${external.oralHistory}" target="_blank" rel="noreferrer">Read the oral history ↗</a>`],
        ["context", "Zbąszyń records", "Arolsen Archives’ directory of Polish Jews expelled from the German Reich in October 1938, with names, parents, birth data, addresses, and destinations.", `<a href="${external.arolsen}" target="_blank" rel="noreferrer">Arolsen Archives ↗</a>`],
        ["context", "JDC refugee list", "A large list of Zbąszyń refugees and overseas relatives, useful for searching Paula, Mates, and spelling variants.", `<a href="${external.jdc}" target="_blank" rel="noreferrer">JDC Archives ↗</a>`],
        ["context", "Berlin’s Jewish neighborhood", "Grenadierstraße belonged to the Scheunenviertel, a major center of Eastern European Jewish life. This is historical context for Paula’s Berlin years, not proof of a specific school or building link.", `<a href="${external.fuBerlin}" target="_blank" rel="noreferrer">FU Berlin ↗</a> · <a href="${external.jewishMuseum}" target="_blank" rel="noreferrer">Jewish Museum Berlin ↗</a>`],
        ["context", "Tarnów under occupation", "USHMM context on the occupation of Tarnów, forced labor, the ghetto, deportations, and the destruction of the Jewish community.", `<a href="${external.usHoloTarnow}" target="_blank" rel="noreferrer">USHMM ↗</a>`],
        ["context", "Further reading", "Dohrn and Pickhan, Transit and Transformation (2010); Anne-Christin Sass, Berliner Luftmenschen (2012); Karsten Krampitz, Pogrom im Scheunenviertel (2023).", "Bibliography supplied with the family research"],
        ["lead", "JRI-Poland material", "The new JRI report contains a possible Polish-record connection for the Berlin family. Its detailed index output is kept private because the report restricts publication without permission; the primary record still needs verification.", `<a href="${external.polishArchive}" target="_blank" rel="noreferrer">Search the Nowy Sącz archive collection ↗</a>`],
        ["lead", "Skarżysko question", "Paula’s CV appears to name a camp as “Skarsicz”. Skarżysko-Kamienna is a plausible reading, but the individual identification still needs confirmation.", `<a href="${external.usHoloSkarzysko}" target="_blank" rel="noreferrer">Camp context ↗</a>`]
      ],
      ledgerHead: ["Source", "Type", "Contribution"],
      ledger: [
        ["Paula Simchovicz CV.pdf", "Direct document", "Berlin birth and education; Paliwoda; 1938 expulsion; wartime camps; liberation."],
        ["Scanned_20260901-1028.pdf", "Direct document", "Sworn testimony dated 4 May 1955; Zbąszyń and Tarnów chronology."],
        ["פאולה מסמכים.pdf", "Direct documents", "Grenadierstraße 17; death certificate; Red Cross records; correspondence from 1939–1940."],
        ["1929 Jewish Berlin address book", "Direct source", "Mathes Sinechowitz at Grenadierstraße 17."],
        ["JRI-Poland material", "Private research note", "Detailed index findings are withheld from this public site pending permission; the corresponding primary record remains to be checked."],
        ["Family spreadsheet", "Family source", "Provisional parents, children, birth data, and fate entries."],
        ["Public archives", "Context / leads", "Arolsen, JDC, USHMM, Jewish Museum Berlin, and FU Berlin." ]
      ]
    },
    questions: {
      kicker: "The work continues",
      title: "What remains to be found",
      text: "A good family history keeps its uncertainties visible. These are the next questions most likely to turn the outline into a fully documented genealogy.",
      items: [
        ["Mates and Ester after 1938", "Find their entries in the Arolsen and JDC Zbąszyń materials, then trace Tarnów ghetto and deportation records."],
        ["The siblings’ individual fates", "Confirm Isaac Eliezer, Rosa, Salo, Mina, and Sascha in survivor, victim, ghetto, camp, or postwar records."],
        ["Salo / Sala", "Identify the “S. Simchowicz” receiving postcards at Świętego Nikodema 6 and compare that evidence with Arolsen record 78813850. Sala is not confirmed as Salo/Shlomo and must remain separate."],
        ["Roza / Rosa", "Compare Arolsen record 78827309 with Rosa Shoshana. Roza is not confirmed as Rosa and must remain a separate unresolved identity."],
        ["Ester / Esther / Erma / Erna", "Resolve the mother’s spelling variants by locating a birth, marriage, refugee, or Berlin registration record."],
        ["The Ofen connection", "Determine whether “Ofen” is a maiden name, married name, or connected family branch."],
        ["JRI primary record", "Obtain permission to use the JRI report publicly and verify its possible Polish-record connection against the original civil record."],
        ["Grenadierstraße 14 or 17", "Use Berlin registration or community records to determine whether No. 14 reflects a later move, a related card, or a record discrepancy; No. 17 remains the primary address."],
        ["JDC person-level match", "Search the JDC names list for Paula, Mates, and spelling variants; the earlier blocked search does not establish absence."],
        ["Paula’s camp route", "Verify the unclear camp name in the CV and the exact sequence between Tarnów, Płaszów, Skarżysko, and Częstochowa."]
      ]
    },
    footer: { eyebrow: "A living archive", note: "Built from family documents, a family spreadsheet, and public archival context. Last updated 3 September 2026.", privacy: "Living people are not profiled here; uncertain claims are labelled.", sources: "View sources" }
  },
  he: {
    title: "ארכיון משפחת שמחוביץ",
    brand: { title: "שמחוביץ", subtitle: "ארכיון משפחתי" },
    nav: { family: "המשפחה", updates: "ממצאים חדשים", timeline: "ציר זמן", places: "מקומות", sources: "מקורות" },
    hero: {
      eyebrow: "זיכרון משפחתי הנמצא עדיין במחקר",
      title: "מברלין לטארנוב — דרך חורבן אירופה",
      lede: "הסיפור המתועד של פאולה פנינה שמחוביץ / רפפורט ושל משפחת שמחוביץ: החיים היהודיים בברלין שבין שתי מלחמות העולם, הגירוש לפולין, עבודת הכפייה תחת הכיבוש הנאצי, ומלאכת הזיכרון.",
      primary: "לקרוא את הסיפור המשפחתי",
      secondary: "לעיין בראיות",
      cardKicker: "החוט הברור ביותר",
      cardTitle: "פאולה שרדה — והשאירָה עדות",
      stats: [["1919", "נולדה בברלין"], ["1938", "נאלצה לעבור לפולין"], ["1994", "נפטרה בישראל"]]
    },
    about: {
      kicker: "על הארכיון",
      title: "שחזור זהיר",
      text: "זהו ארכיון זיכרון ומחקר המתפתח בהדרגה. מסמכים ישירים מופרדים ממידע שהוזן בגיליון המשפחתי ומרקע היסטורי. השמות נשמרים בצורותיהם המקוריות, מפני ששינויים באיות עשויים להיות רמזים חשובים.",
      chips: ["ברלין", "זבונשין", "טארנוב", "וילנה", "תל אביב"]
    },
    updates: {
      kicker: "עדכון מחקר · 3 בספטמבר 2026",
      title: "התמונה הארכיונית התחדדה",
      intro: "בדיקה חדשה של ארכיון ארולסן, ספר הכתובות של ברלין, החומרים החדשים של JRI ומקורות משפחתיים בישראל מבהירה את זהותה של פאולה ומשחזרת משק בית משפחתי אפשרי לפני המלחמה. השאלות הפתוחות נשארות מסומנות.",
      labels: { confirmed: "רשומה מאומתת", likely: "זיהוי חזק", family: "עדות משפחתית", open: "שאלה פתוחה" },
      cards: [
        ["confirmed", "פאולה ופנינה הן אותה אישה", "באתר ההנצחה הרשמי מופיעה פנינה פאולה רפפורט שמחוביץ, ילידת ברלין ב־22 ביוני 1919, בתם של אסתר ומתתיהו. האתר מתעד גם עלייה לארץ באוגוסט 1947, נישואין לשמואל רפפורט, בית דפוס בתל אביב, שני ילדים ומותה בפיגוע באוטובוס קו 5 בשנת 1994.", `<a href="${external.israelMemorial}" target="_blank" rel="noreferrer">לרשומת ההנצחה הרשמית ↗</a>`],
        ["confirmed", "קבוצת רשומות רחבה יותר בארולסן", "כרטיסי ארולסן מזהים את רוזה (1 בינואר 1922), מיני (7 בספטמבר 1924) וסשה/סוזי (18 בדצמבר 1929), ילידי ברלין ובעלי אזרחות פולנית, עם האב מתי והאם ארנה/אסתר לבית אופן. רשומות 12674257 ו־12674258 הן שתי רשומות של אותה סוזי. רשומה 12674261 היא רשומה נוספת של מיני. סאלה ורוזה מקושרות כאן כרשומות שטרם זוהו: אין למזג את סאלה עם סאלו/שלמה או את רוזה עם רוזה שושנה.", `<a href="${external.arolsenRosa}" target="_blank" rel="noreferrer">רוזה ↗</a> · <a href="${external.arolsenMinni}" target="_blank" rel="noreferrer">מיני ↗</a> · <a href="${external.arolsenMinniAlt}" target="_blank" rel="noreferrer">מיני, רשומה נוספת ↗</a> · <a href="${external.arolsenSascha}" target="_blank" rel="noreferrer">סוזי, רשומה 12674257 ↗</a> · <a href="${external.arolsenSusi}" target="_blank" rel="noreferrer">סוזי, רשומה 12674258 ↗</a> · <a href="${external.arolsenSala}" target="_blank" rel="noreferrer">סאלה ↗</a> · <a href="${external.arolsenRoza}" target="_blank" rel="noreferrer">רוזה, רשומה נוספת ↗</a>`],
        ["confirmed", "גרנָדירשטראסה 17 נותרה הכתובת המרכזית", "מתֶס סינֶכוֹביץ מופיע בגרנָדירשטראסה 17 בספר הכתובות היהודי של ברלין משנת 1929, וגם בכרטיסים של רוזה ומיני בארולסן. גרנָדירשטראסה 14 מופיעה בכרטיסים של סשה/סוזי, ולכן היא נשמרת ככתובת שנייה אפשרית או כסתירה ברישום.", `<a href="${external.addressBook}" target="_blank" rel="noreferrer">לרשומת הכתובת משנת 1929 ↗</a>`],
        ["family", "החיבור שלאחר המלחמה ברור יותר", "אתר ההנצחה הרשמי מאשר את הגעתה של פאולה לישראל בשנת 1947 ואת נישואיה לשמואל רפפורט. עדות משפחתית מוסיפה שפאולה וסמק/שמואל נפגשו דרך אונר״א, חיו באיטליה כשנה ולאחר מכן עלו לישראל. פרטים אלה הם עדות משפחתית ולא הוכחה ארכיונית עצמאית.", `<a href="${external.oralHistory}" target="_blank" rel="noreferrer">לעדות המשפחתית ↗</a>`],
        ["likely", "הגירוש לזבונשין מתקבל על הדעת מבחינה היסטורית", "מדריך זבונשין של ארולסן כולל יהודים בעלי אזרחות פולנית שגורשו מגרמניה באוקטובר 1938, וכן הורים, מקומות לידה, כתובות קודמות ויעדים לאחר הגירוש. האזרחות הפולנית והכתובת בברלין מתאימות לתרחיש הזה, אך טרם אומתה התאמה אישית של פאולה או מתי.", `<a href="${external.arolsen}" target="_blank" rel="noreferrer">אוסף זבונשין בארולסן ↗</a> · <a href="${external.jdc}" target="_blank" rel="noreferrer">תיאור רשימת JDC ↗</a>`],
        ["open", "שני קשרים ארכיוניים עדיין דורשים השלמה", "הדוח החדש של JRI העלה קשר אפשרי בין מתי/מתֶס מברלין לבין רשומה פולנית ישנה יותר, אך פרטי האינדקס נשמרים מחוץ לאתר הציבורי משום שהדוח מגביל פרסום ללא אישור. החיפוש האישי ב־JDC נחסם על ידי בדיקת אבטחה; אין להסיק מכך שהמשפחה אינה ברשימה.", `<a href="${external.polishArchive}" target="_blank" rel="noreferrer">לאוסף ארכיון נובי סונץ׳ ↗</a> · <a href="${external.jdcHelp}" target="_blank" rel="noreferrer">הנחיות החיפוש של JDC ↗</a>`]
      ],
      note: "הערת עריכה: דוח JRI נשאר ככיוון מחקר פרטי עד לקבלת אישור פרסום מ־JRI-Poland."
    },
    family: {
      kicker: "המשפחה",
      title: "משפחת שמחוביץ כפי שניתן לשחזר כיום",
      text: "ברשומת ההנצחה הישראלית של פאולה מופיעים מתתיהו ואסתר כהוריה. ספר הכתובות של ברלין וכרטיסי ארולסן מוסיפים כעת ראיות עצמאיות חזקות למשק בית מלפני המלחמה, בעוד שהגיליון המשפחתי משמר שמות נוספים שעדיין דורשים אימות.",
      parents: "הורים",
      parent1: ["מתי / מתתיהו שמחוביץ", "בערך 1889 · נובי סונץ׳", "מקום הלידה והגורל ב־1943: מקור משפחתי; השם נתמך בארולסן"],
      parent2: ["אסתר / אסתר / ארנה שמחוביץ", "בערך 1896 · פולין", "לבית אופן בכרטיסי ארולסן; מקום הלידה ממקור משפחתי"],
      leadTitle: "ארולסן מוסיף משק בית אפשרי",
      leadText: "כרטיסי ארולסן מזהים את רוזה, מיני וסשה/סוזי כילידי ברלין בעלי אזרחות פולנית, עם האב מתי והאם ארנה/אסתר לבית אופן. רשומות 12674257 ו־12674258 הן שתי רשומות של אותה סוזי, ורשומה 12674261 היא רשומה נוספת של מיני. סאלה ורוזה נשארות רשומות נפרדות שטרם זוהו, ואין למזג אותן עם סאלו/שלמה או רוזה שושנה.",
      leadLinks: `<a href="${external.arolsenRosa}" target="_blank" rel="noreferrer">כרטיס רוזה ↗</a> · <a href="${external.arolsenMinni}" target="_blank" rel="noreferrer">כרטיס מיני ↗</a> · <a href="${external.arolsenMinniAlt}" target="_blank" rel="noreferrer">רשומת מיני נוספת ↗</a> · <a href="${external.arolsenSascha}" target="_blank" rel="noreferrer">סוזי, רשומה 12674257 ↗</a> · <a href="${external.arolsenSusi}" target="_blank" rel="noreferrer">סוזי, רשומה 12674258 ↗</a> · <a href="${external.arolsenSala}" target="_blank" rel="noreferrer">סאלה ↗</a> · <a href="${external.arolsenRoza}" target="_blank" rel="noreferrer">רוזה, רשומה נוספת ↗</a> · <a href="${external.addressBook}" target="_blank" rel="noreferrer">רשומת הכתובת משנת 1929 ↗</a>`,
      children: "ילדים ואחים אפשריים ברשומות",
      childData: [
        ["פאולה פנינה", "22 ביוני 1919 · ברלין", "direct"],
        ["יצחק אליעזר", "תאריך לידה טרם נמצא", "family"],
        ["רוזה שושנה", "1 בינואר 1922 · ברלין", "arolsen"],
        ["סאלו / שלמה", "24 במאי 1923", "family"],
        ["מינה / מיני", "7 בספטמבר 1924 · ברלין", "arolsen"],
        ["סשה / סוזי", "18 בדצמבר 1929 · ברלין", "arolsen"]
      ],
      direct: "מסמכים ישירים", childStatus: { direct: "מסמכים ישירים", arolsen: "רשומת ארולסן", family: "רשומה משפחתית" }, familyRecord: "רשומה משפחתית", lead: "כיוון למחקר",
      note: "בכותרת הגיליון מופיע גם השם „אופן“. הקשר המדויק שלו למשפחת שמחוביץ עדיין פתוח למחקר."
    },
    timeline: {
      kicker: "חייה של פאולה", title: "חיים הנפרשים דרך המסמכים", intro: "קורות החיים, ההצהרה בשבועה, הרישום הברלינאי, תעודת הפטירה וההתכתבויות יוצרים רצף נדיר יחסית מילדות בברלין ועד ישראל שלאחר המלחמה.",
      events: [
        ["1919", "לידה בברלין", "פאולה נולדה ב־22 ביוני 1919 בשם פאולה שמחוביץ, בתם של מתי ואסתר/אסתר שמחוביץ.", "קורות חיים · רישום ברלינאי · תעודת פטירה"],
        ["בערך 1925", "חינוך יהודי", "בסביבות גיל שש נכנסה לבית הספר היהודי ברחוב ריקֶה. כעבור ארבע שנים למדה בבית ספר תיכון לבנות ברחוב קייזר, שעבר מאוחר יותר לרחוב גרוֹסה המבורגר.", "קורות חיים"],
        ["1933", "תחילת העבודה", "היא עזבה את בית הספר לפני סיום לימודיה ולמדה את מקצוע תפירת בגדי הנשים בחברת פאליוודה ברחוב הוּפֶלנד. לדבריה, שכרה עלה מ־80 ל־220 רייכסמארק.", "קורות חיים"],
        ["ספט׳ 1938", "מגרמניה לזבונשין", "בהצהרתה בשבועה כתבה שעזבה את גרמניה והגיעה לזבונשין שבפולין. התיק המשפחתי מתאר את המעבר כגירוש של יהודים פולנים מברלין.", "הצהרה בשבועה מ־1955 · מכתב משפחתי"],
        ["יום כיפור 1939", "עבודת כפייה בטארנוב", "חייל גרמני עצר אותה ברחוב. היא הובאה לבניין שמור מחוץ לטארנוב ואולצה לתפור מדי אס־אס כ־14 שעות ביום, ללא שכר.", "הצהרה בשבועה מ־1955"],
        ["1939–יוני 1941", "בית מלאכה כלוא", "היא מתארת בידוד, שמירה של האס־אס, איסור יציאה שעונשו מוות, ו־300 גרם לחם כמזון היחיד. ביוני 1941 הועברה למתפרה בטארנוב.", "הצהרה בשבועה מ־1955"],
        ["1941–1945", "מחנות ושחרור", "בקורות החיים מופיעים פלאשוב ומקום שנראה כמו סקרז׳יסקו, ולאחר מכן צ׳נסטוחובה. שם המחנה אינו ברור בסריקה ומסומן כאן ככיוון למחקר.", "קורות חיים · הקשר היסטורי"],
        ["אוג׳ 1947", "חיים חדשים בישראל", "אתר ההנצחה הרשמי מציין שפאולה הגיעה לישראל באוגוסט 1947, נישאה לשמואל רפפורט ופתחה איתו בית דפוס בתל אביב. עדות משפחתית מוסיפה מפגש דרך אונר״א וכשנה באיטליה לפני העלייה.", "אתר ההנצחה הרשמי · עדות משפחתית"],
        ["1955", "עדות בשבועה", "בתל אביב אישרה פאולה את הסיפור בשבועה. זוהי אחת העדויות הראשוניות החשובות ביותר בתיק.", "הצהרה בשבועה, 4 במאי 1955"],
        ["1994", "פנינה רפפורט", "תעודת הפטירה הישראלית רושמת אותה כפנינה רפפורט, ילידת 22 ביוני 1919, שנפטרה ב־19 באוקטובר 1994 בתל אביב–יפו.", "תעודת פטירה ישראלית"]
      ]
    },
    places: {
      kicker: "גאוגרפיה של קרע והישרדות", title: "המסלול שהמסמכים מגלים", intro: "כל מקום הוא יותר מנקודה במפה: הוא מציין שינוי בחינוך, בעבודה, ברדיפה, בשבי או בהישרדות.",
      cards: [
        ["01", "ברלין", "לידה, לימודים, עבודה, ובית המשפחה המתועד בגרנָדירשטראסה 17."],
        ["02", "זבונשין", "היעד שפאולה מציינת לאחר יציאתה מגרמניה בספטמבר 1938."],
        ["03", "טארנוב", "התכתבויות של מתי ושל בני שמחוביץ מופיעות כאן בשנים 1939–1940; פאולה עבדה כאן בעבודת כפייה."],
        ["04", "פלאשוב → סקרז׳יסקו → צ׳נסטוחובה", "הרצף המופיע בקורות החיים; „סקרז׳יסקו“ הוא פענוח מושכל של סריקה לא ברורה."],
        ["05", "תל אביב", "הבית שלאחר המלחמה, העדות בשבועה ב־1955, ומותה של פאולה ב־1994."]
      ], route: "ברלין ← זבונשין ← טארנוב ← מחנות ← ישראל"
    },
    testimony: {
      kicker: "קולה של פאולה", title: "מה עדותה מספרת לנו", quote: "נאלצנו לעבוד בממוצע ארבע־עשרה שעות ביום. לא קיבלנו שכר; המזון היחיד שלנו היה 300 גרם לחם.", cite: "פאולה רפפורט, הצהרה בשבועה, תל אביב, 4 במאי 1955", heading: "עדות נדירה בגוף ראשון", text: "ההצהרה משנת 1955 מתקנת ומחדדת את קורות החיים. היא ממקמת את תחילת עבודת הכפייה בסוף ספטמבר 1939, ביום כיפור, ומתעדת בגוף ראשון את הבידוד, שמירת האס־אס, האיסור לצאת, המשמרות הארוכות, הרעב והעבודה ללא תשלום.", facts: [["זהות", "פאולה שמחוביץ → פנינה רפפורט"], ["משפחה", "בתם של מתי ואסתר/אסתר"], ["עבודה", "בגדי נשים בברלין; תפירת כפייה בטארנוב"], ["תוצאה", "שרדה ובנתה חיים בישראל"]]
    },
    sources: {
      kicker: "ראיות והקשר", title: "שביל מקורות שקוף", intro: "הארכיון מבדיל בין מה שמתועד ישירות, מה שמגיע מהגיליון המשפחתי, ומה שמוצג כרקע היסטורי או ככיוון למחקר.", filters: { all: "הכול", direct: "מסמכים ישירים", family: "מקור משפחתי", context: "רקע היסטורי", lead: "כיוון למחקר" },
      cards: [
        ["direct", "תיק המסמכים של פאולה", "רישום זיהוי ברלינאי, תעודת הפטירה הישראלית, טפסי הצלב האדום, התכתבויות משפחתיות, והעתקים של קורות החיים וההצהרה.", "פאולה מסמכים · עמ׳ 1–21"],
        ["direct", "ספר הכתובות היהודי של ברלין, 1929", "בספר הכתובות היהודי מופיע מתֶס סינֶכוֹביץ בגרנָדירשטראסה 17, ברלין. זו אסמכתת הכתובת המשפחתית המתוקנת.", `<a href="${external.addressBook}" target="_blank" rel="noreferrer">לרשומת ספר הכתובות ↗</a>`],
        ["direct", "רשומת ההנצחה הישראלית", "רשומת ההנצחה הרשמית מאשרת את זהות פאולה/פנינה, את הוריה, לידתה בברלין, העלייה ב־1947, הנישואין לשמואל רפפורט, שני הילדים ומותה ב־1994.", `<a href="${external.israelMemorial}" target="_blank" rel="noreferrer">לרשומת ההנצחה ↗</a>`],
        ["direct", "כרטיסי המשפחה בארולסן", "רשומות ארולסן הפומביות מזהות את רוזה, מיני וסשה/סוזי עם האב מתי, האם ארנה/אסתר לבית אופן, לידתן/לידתם בברלין ואזרחות פולנית.", `<a href="${external.arolsenRosa}" target="_blank" rel="noreferrer">רוזה ↗</a> · <a href="${external.arolsenMinni}" target="_blank" rel="noreferrer">מיני ↗</a> · <a href="${external.arolsenSascha}" target="_blank" rel="noreferrer">סשה ↗</a>`],
        ["direct", "קורות החיים של פאולה", "קורות חיים בגרמנית: לידה, לימודים, עבודה, הגירוש, עבודת הכפייה, רצף המחנות והשחרור.", "Paula Simchovicz CV · עמ׳ 1"],
        ["direct", "ההצהרה בשבועה מ־1955", "עדות בגוף ראשון על זבונשין, טארנוב, תפירת מדי אס־אס, רעב, כליאה וההעברה ב־1941.", "הצהרה סרוקה · 4 במאי 1955"],
        ["family", "הגיליון המשפחתי", "טבלת העבודה עם שמות, שנות או תאריכי לידה, מקומות ושדות גורל בפרויקט שמחוביץ–אופן.", `<a href="${sheetUrl}" target="_blank" rel="noreferrer">פתיחת הגיליון המשפחתי ↗</a>`],
        ["family", "פרופיל גנאלוגי", "הפרופיל הציבורי המקשר בין פאולה פנינה רפפורט, שם המשפחה שמחוביץ והתאריכים 1919–1994.", `<a href="${profileUrl}" target="_blank" rel="noreferrer">פתיחת הפרופיל ↗</a>`],
        ["family", "עדות משפחתית על התקופה שלאחר המלחמה", "ראיון משפחתי משנת 2023 מספר שפאולה וסמק/שמואל נפגשו דרך אונר״א, חיו באיטליה כשנה ולאחר מכן עלו לישראל. אלה פרטים משפחתיים.", `<a href="${external.oralHistory}" target="_blank" rel="noreferrer">לקריאת העדות ↗</a>`],
        ["context", "רשומות זבונשין", "מדריך ארכיון ארולסן של יהודים בעלי אזרחות פולנית שגורשו מהרייך באוקטובר 1938, עם שמות, הורים, לידה, כתובות ויעדים.", `<a href="${external.arolsen}" target="_blank" rel="noreferrer">ארכיון ארולסן ↗</a>`],
        ["context", "רשימת הפליטים של JDC", "רשימה גדולה של פליטי זבונשין וקרובי משפחה בחו״ל, שימושית לחיפוש פאולה, מתי וגרסאות האיות.", `<a href="${external.jdc}" target="_blank" rel="noreferrer">ארכיון JDC ↗</a>`],
        ["context", "השכונה היהודית של ברלין", "גרנדירשטראסה הייתה חלק מרובע השויננוירטל, מרכז חשוב לחיי יהודי מזרח אירופה. זהו רקע היסטורי לשנותיה של פאולה בברלין, ולא הוכחה לקשר לבית ספר או לבניין מסוים.", `<a href="${external.fuBerlin}" target="_blank" rel="noreferrer">אוניברסיטת פרי בברלין ↗</a> · <a href="${external.jewishMuseum}" target="_blank" rel="noreferrer">המוזיאון היהודי בברלין ↗</a>`],
        ["context", "טארנוב תחת הכיבוש", "רקע של USHMM על כיבוש טארנוב, עבודת הכפייה, הגטו, הגירושים וחורבן הקהילה היהודית.", `<a href="${external.usHoloTarnow}" target="_blank" rel="noreferrer">USHMM ↗</a>`],
        ["context", "לקריאה נוספת", "Dohrn ו־Pickhan, Transit and Transformation (2010); Anne-Christin Sass, Berliner Luftmenschen (2012); Karsten Krampitz, Pogrom im Scheunenviertel (2023).", "ביבליוגרפיה שסופקה במסגרת המחקר המשפחתי"],
        ["lead", "חומר JRI-Poland", "הדוח החדש של JRI כולל קשר אפשרי לרשומה פולנית עבור המשפחה. פרטי האינדקס נשמרים באופן פרטי משום שהדוח מגביל פרסום ללא אישור; הרשומה המקורית עדיין דורשת אימות.", `<a href="${external.polishArchive}" target="_blank" rel="noreferrer">לחיפוש באוסף ארכיון נובי סונץ׳ ↗</a>`],
        ["lead", "שאלת סקרז׳יסקו", "בקורות החיים מופיע כנראה שם מחנה “Skarsicz”. סקרז׳יסקו־קמיינה היא קריאה אפשרית, אך הזיהוי האישי עדיין טעון אישור.", `<a href="${external.usHoloSkarzysko}" target="_blank" rel="noreferrer">רקע על המחנה ↗</a>`]
      ], ledgerHead: ["מקור", "סוג", "תרומה"], ledger: [["Paula Simchovicz CV.pdf", "מסמך ישיר", "לידה וחינוך בברלין; פאליוודה; הגירוש; המחנות; השחרור."], ["Scanned_20260901-1028.pdf", "מסמך ישיר", "עדות בשבועה מ־4 במאי 1955; ציר זבונשין–טארנוב."], ["פאולה מסמכים.pdf", "מסמכים ישירים", "גרנדירשטראסה 17; תעודת פטירה; הצלב האדום; התכתבויות מ־1939–1940."], ["ספר הכתובות היהודי, ברלין 1929", "מקור ישיר", "מתֶס סינֶכוֹביץ בגרנָדירשטראסה 17."], ["חומר JRI-Poland", "הערת מחקר פרטית", "פרטי האינדקס אינם מוצגים באתר הציבורי עד לקבלת אישור; הרשומה המקורית עדיין דורשת בדיקה."], ["הגיליון המשפחתי", "מקור משפחתי", "הורים, ילדים, נתוני לידה ורשומות גורל זמניות."], ["ארכיונים ציבוריים", "רקע / כיוונים", "ארולסן, JDC, USHMM, מוזיאון היהדות בברלין ואוניברסיטת פרי." ]]
    },
    questions: {
      kicker: "המחקר נמשך", title: "מה עדיין חסר", text: "היסטוריה משפחתית טובה משאירה את אי־הוודאות גלויה. אלה השאלות הבאות שסביר ביותר שיהפכו את המתווה לגנאלוגיה מתועדת במלואה.", items: [["מתי ואסתר אחרי 1938", "לאתר אותם בחומרי זבונשין של ארולסן ושל JDC, ואז לעקוב אחר רישומי הגטו והגירושים מטארנוב."], ["גורל האחים והאחיות", "לאמת את יצחק אליעזר, רוזה, סאלו, מינה וסשה ברשומות ניצולים, קורבנות, גטו, מחנות או מסמכים שלאחר המלחמה."], ["סאלו / סאלה", "להשוות את רשומת ארולסן 78813850 להתכתבות המשפחתית; אין אישור שסאלה הוא סאלו/שלמה ולכן אין למזג אותם."], ["רוזה / Roza", "להשוות את רשומת ארולסן 78827309 לרוזה שושנה; אין אישור שמדובר באותה אישה ולכן אין למזג את הרשומות."], ["אסתר / Ester / Erma / Erna", "לפתור את גרסאות האיות של שם האם באמצעות רישום לידה, נישואין, פליטים או מרשם ברלינאי."], ["הקשר לאופן", "לקבוע אם „אופן“ הוא שם נעורים, שם לאחר נישואין או ענף משפחתי קשור."], ["הרשומה האזרחית המקורית", "לקבל אישור לפרסום חומר JRI, ואז לבדוק את כיוון המחקר מול רשומת הלידה המקורית בארכיון נובי סונץ׳."], ["גרנָדירשטראסה 14 או 17", "להשתמש ברשומות ברלינאיות כדי לקבוע אם מספר 14 משקף מעבר מאוחר יותר, כרטיס קשור או טעות; מספר 17 נותר הכתובת המרכזית."], ["התאמה אישית ברשימת JDC", "לחפש ברשימת השמות של JDC את פאולה, מתי וגרסאות האיות; החיפוש שנחסם אינו מוכיח היעדרות."], ["מסלול המחנות של פאולה", "לאמת את שם המחנה הלא ברור בקורות החיים ואת הרצף המדויק בין טארנוב, פלאשוב, סקרז׳יסקו וצ׳נסטוחובה."]]
    },
    footer: { eyebrow: "ארכיון חי", note: "נבנה ממסמכים משפחתיים, גיליון משפחתי והקשר מארכיונים ציבוריים. עדכון אחרון: 3 בספטמבר 2026.", privacy: "אנשים החיים כיום אינם מתועדים כאן; טענות לא ודאיות מסומנות.", sources: "למקורות" }
  },
  de: {
    title: "Familienarchiv Simchowicz",
    brand: { title: "Simchowicz", subtitle: "Familienarchiv" },
    nav: { family: "Familie", updates: "Neue Befunde", timeline: "Zeitleiste", places: "Orte", sources: "Quellen" },
    hero: {
      eyebrow: "Eine Familienerinnerung, noch in Forschung",
      title: "Von Berlin nach Tarnów — durch die Zerstörung Europas",
      lede: "Die dokumentierte Geschichte von Paula Pnina Simchowicz / Rapoport und der Familie Simchowicz: jüdisches Leben im Berlin der Zwischenkriegszeit, die Vertreibung nach Polen, Zwangsarbeit unter der NS-Besatzung und die Arbeit des Erinnerns.",
      primary: "Die Familiengeschichte lesen",
      secondary: "Die Belege ansehen",
      cardKicker: "Der klarste Faden",
      cardTitle: "Paula überlebte — und hinterließ eine Spur",
      stats: [["1919", "in Berlin geboren"], ["1938", "nach Polen gezwungen"], ["1994", "in Israel gestorben"]]
    },
    about: {
      kicker: "Über dieses Archiv",
      title: "Eine vorsichtige Rekonstruktion",
      text: "Dies ist ein wachsendes Gedenk- und Forschungsarchiv. Direkte Dokumente werden von Angaben aus der Familien-Tabelle und von historischem Kontext getrennt. Die Namen bleiben in den Formen der Quellen erhalten, weil Schreibvarianten wichtige Hinweise geben können.",
      chips: ["Berlin", "Zbąszyń", "Tarnów", "Vilnius", "Tel Aviv"]
    },
    updates: {
      kicker: "Forschungsupdate · 3. September 2026",
      title: "Das Archivbild ist jetzt klarer",
      intro: "Eine neue Prüfung des Arolsen Archives, des Berliner Adressbuchs, der neuen JRI-Unterlagen und israelischer Familienquellen klärt Paulas Identität und rekonstruiert einen wahrscheinlichen Haushalt vor dem Krieg. Offene Fragen bleiben sichtbar.",
      labels: { confirmed: "Bestätigte Quelle", likely: "Starke Identifizierung", family: "Familienzeugnis", open: "Offene Frage" },
      cards: [
        ["confirmed", "Paula und Pnina sind dieselbe Person", "Das offizielle israelische Gedenkregister nennt פנינה פאולה רפפורט שמחוביץ, am 22. Juni 1919 in Berlin geboren, Tochter von Esther und Matityahu. Es verzeichnet außerdem die Einwanderung im August 1947, die Ehe mit Shmuel Rapoport, eine Druckerei in Tel Aviv, zwei Kinder und ihren Tod beim Anschlag auf Buslinie 5 im Jahr 1994.", `<a href="${external.israelMemorial}" target="_blank" rel="noreferrer">Offiziellen Gedenkeintrag öffnen ↗</a>`],
        ["confirmed", "Eine größere Arolsen-Gruppe wird sichtbar", "Arolsen-Karten identifizieren Rosa (1. Januar 1922), Minni (7. September 1924) und Sascha/Susi (18. Dezember 1929), alle in Berlin geboren und polnische Staatsangehörige, mit dem Vater Mates und der Mutter Erna/Ester geborene Offen. Die Datensätze 12674257 und 12674258 gehören zur selben Person, Susi. 12674261 ist ein zusätzlicher Minni-Datensatz. Sala und Roza werden als ungeklärte Datensätze verlinkt und nicht mit Salo/Shlomo oder Rosa/Rosa Shoshana zusammengeführt.", `<a href="${external.arolsenRosa}" target="_blank" rel="noreferrer">Rosa ↗</a> · <a href="${external.arolsenMinni}" target="_blank" rel="noreferrer">Minni ↗</a> · <a href="${external.arolsenMinniAlt}" target="_blank" rel="noreferrer">Minni, zusätzlicher Datensatz ↗</a> · <a href="${external.arolsenSascha}" target="_blank" rel="noreferrer">Susi, Datensatz 12674257 ↗</a> · <a href="${external.arolsenSusi}" target="_blank" rel="noreferrer">Susi, Datensatz 12674258 ↗</a> · <a href="${external.arolsenSala}" target="_blank" rel="noreferrer">Sala ↗</a> · <a href="${external.arolsenRoza}" target="_blank" rel="noreferrer">Roza ↗</a>`],
        ["confirmed", "Grenadierstraße 17 bleibt die zentrale Adresse", "Mathes Sinechowitz ist im jüdischen Berliner Adressbuch von 1929 an der Grenadierstraße 17 verzeichnet; auch die Arolsen-Karten von Rosa und Minni nennen Nr. 17. Nr. 14 erscheint auf den Karten von Sascha/Susi und bleibt als zweite mögliche Adresse oder als Abweichung der Karte vermerkt.", `<a href="${external.addressBook}" target="_blank" rel="noreferrer">Adressbucheintrag von 1929 öffnen ↗</a>`],
        ["family", "Die Nachkriegsgeschichte wird greifbarer", "Das offizielle Gedenkregister bestätigt Israel ab 1947 und die Ehe mit Shmuel Rapoport. Eine Familienerinnerung ergänzt, dass Paula und Semek/Shmuel sich über die UNRRA kennenlernten, etwa ein Jahr in Italien lebten und anschließend nach Israel kamen. Diese zusätzlichen Reisedetails sind Familienzeugnis, kein unabhängiger Archivbeleg.", `<a href="${external.oralHistory}" target="_blank" rel="noreferrer">Familienerinnerung lesen ↗</a>`],
        ["likely", "Die Vertreibung nach Zbąszyń ist historisch plausibel", "Das Zbąszyń-Verzeichnis des Arolsen Archives umfasst polnische Staatsangehörige, die im Oktober 1938 aus Deutschland vertrieben wurden, sowie Eltern, Geburtsorte, frühere deutsche Adressen und Ziele nach der Vertreibung. Polnische Staatsangehörigkeit und Berliner Wohnsitz passen zu diesem Szenario; ein persönlicher Treffer für Paula oder Mates ist aber noch nicht bestätigt.", `<a href="${external.arolsen}" target="_blank" rel="noreferrer">Arolsen-Zbąszyń-Sammlung ↗</a> · <a href="${external.jdc}" target="_blank" rel="noreferrer">JDC-Beschreibung ↗</a>`],
        ["open", "Zwei Archivverbindungen müssen noch geschlossen werden", "Der neue JRI-Bericht weist auf eine mögliche Verbindung zwischen dem Berliner Mates/Mathes und einem älteren polnischen Eintrag hin. Die genauen Indexdaten werden wegen der Veröffentlichungsbeschränkung des Berichts nicht auf dieser öffentlichen Seite wiedergegeben. Die persönliche JDC-Suche wurde außerdem durch eine Sicherheitsprüfung blockiert; daraus folgt nicht, dass die Familie in der Liste fehlt.", `<a href="${external.polishArchive}" target="_blank" rel="noreferrer">Bestände des Archivs Nowy Sącz durchsuchen ↗</a> · <a href="${external.jdcHelp}" target="_blank" rel="noreferrer">JDC-Suchhilfe ↗</a>`]
      ],
      note: "Redaktioneller Hinweis: Der JRI-Bericht bleibt bis zu einer Veröffentlichungsgenehmigung von JRI-Poland ein privater Forschungshinweis."
    },
    family: {
      kicker: "Die Familie",
      title: "Der Haushalt Simchowicz, soweit derzeit rekonstruiert",
      text: "Paulas israelischer Gedenkeintrag nennt Matityahu und Esther als ihre Eltern. Berliner Adressbuch und Arolsen-Karten liefern nun starke unabhängige Hinweise auf einen Haushalt vor dem Krieg, während die Familientabelle weitere, noch zu bestätigende Namen bewahrt.",
      parents: "Eltern",
      parent1: ["Mates / Matityahu Simchowicz", "ca. 1889 · Nowy Sącz", "Geburtsort und Schicksal 1943: Familienquelle; Name durch Arolsen gestützt"],
      parent2: ["Ester / Esther / Erna Simchowicz", "ca. 1896 · Polen", "geborene Offen auf Arolsen-Karten; Geburtsort aus Familienquelle"],
      leadTitle: "Arolsen ergänzt einen wahrscheinlichen Haushalt",
      leadText: "Arolsen-Karten identifizieren Rosa, Minni und Sascha/Susi als in Berlin geborene polnische Staatsangehörige mit dem Vater Mates und der Mutter Erna/Ester geborene Offen. Die Datensätze 12674257 und 12674258 gehören zur selben Person, Susi; 12674261 ist ein zusätzlicher Minni-Datensatz. Sala und Roza bleiben getrennte, ungeklärte Datensätze und werden nicht mit Salo/Shlomo oder Rosa/Rosa Shoshana zusammengeführt.",
      leadLinks: `<a href="${external.arolsenRosa}" target="_blank" rel="noreferrer">Rosas Karte ↗</a> · <a href="${external.arolsenMinni}" target="_blank" rel="noreferrer">Minnis Karte ↗</a> · <a href="${external.arolsenMinniAlt}" target="_blank" rel="noreferrer">Zusätzlicher Minni-Datensatz ↗</a> · <a href="${external.arolsenSascha}" target="_blank" rel="noreferrer">Susi, Datensatz 12674257 ↗</a> · <a href="${external.arolsenSusi}" target="_blank" rel="noreferrer">Susi, Datensatz 12674258 ↗</a> · <a href="${external.arolsenSala}" target="_blank" rel="noreferrer">Sala ↗</a> · <a href="${external.arolsenRoza}" target="_blank" rel="noreferrer">Roza ↗</a> · <a href="${external.addressBook}" target="_blank" rel="noreferrer">Adressbucheintrag von 1929 ↗</a>`,
      children: "Kinder und wahrscheinliche Geschwister in den Quellen",
      childData: [["Paula Pnina", "22. Juni 1919 · Berlin", "direct"], ["Isaac Eliezer", "Geburtsdatum noch nicht gefunden", "family"], ["Rosa Shoshana", "1. Januar 1922 · Berlin", "arolsen"], ["Salo / Shlomo", "24. Mai 1923", "family"], ["Mina / Minni", "7. September 1924 · Berlin", "arolsen"], ["Sascha / Susi", "18. Dezember 1929 · Berlin", "arolsen"]],
      direct: "Direkte Dokumente", childStatus: { direct: "Direkte Dokumente", arolsen: "Arolsen-Eintrag", family: "Familienangabe" }, familyRecord: "Familienangabe", lead: "Forschungshinweis", note: "Der Titel der Tabelle enthält außerdem „Ofen“. Die genaue Verbindung zur Familie Simchowicz ist noch offen."
    },
    timeline: {
      kicker: "Paulas Leben", title: "Ein Leben, nachgezeichnet durch Dokumente", intro: "Lebenslauf, eidesstattliche Erklärung, Berliner Nachweis, Sterbeurkunde und Korrespondenz ergeben eine ungewöhnlich durchgehende Spur von der Kindheit in Berlin bis zum Nachkriegsleben in Israel.",
      events: [["1919", "In Berlin geboren", "Paula wurde am 22. Juni 1919 als Paula Simchowicz geboren, Tochter von Mates und Ester/Esther Simchowicz.", "Lebenslauf · Berliner Nachweis · Sterbeurkunde"], ["ca. 1925", "Jüdische Schulbildung", "Mit etwa sechs Jahren kam sie in die jüdische Schule in der Rykestraße. Vier Jahre später besuchte sie eine Mädchenmittelschule in der Kaiserstraße, später in der Großen Hamburger Straße.", "Lebenslauf"], ["1933", "Beginn der Arbeit", "Sie verließ die Schule vor Abschluss und erlernte bei Paliwoda in der Hufelandstraße den Beruf der Damenschneiderin. Ihr Monatslohn stieg nach eigener Angabe von 80 auf 220 Reichsmark.", "Lebenslauf"], ["Sept. 1938", "Deutschland nach Zbąszyń", "In ihrer eidesstattlichen Erklärung schreibt sie, dass sie Deutschland verließ und nach Zbąszyń in Polen ging. Die Familiensammlung beschreibt dies als Vertreibung polnischer Juden aus Berlin.", "Eidesstattliche Erklärung 1955 · Familienbrief"], ["Jom Kippur 1939", "Zwangsarbeit in Tarnów", "Ein deutscher Soldat verhaftete sie auf der Straße. Sie wurde in ein bewachtes Gebäude außerhalb Tarnóws gebracht und etwa 14 Stunden täglich zum Nähen von SS-Uniformen gezwungen, ohne Lohn.", "Eidesstattliche Erklärung 1955"], ["1939–Juni 1941", "Gefangen in einer Werkstatt", "Sie beschreibt Isolation, SS-Bewachung, ein Todesstrafenverbot zu gehen und 300 Gramm Brot als einzige Nahrung. Im Juni 1941 wurde sie in eine Schneiderei in Tarnów verlegt.", "Eidesstattliche Erklärung 1955"], ["1941–1945", "Lager und Befreiung", "Der Lebenslauf nennt Płaszów und einen Ort, der wie Skarżysko aussieht, danach Częstochowa. Der Ortsname ist im Scan unklar und bleibt ein Forschungshinweis.", "Lebenslauf · historischer Kontext"], ["Aug. 1947", "Ein neues Leben in Israel", "Das offizielle israelische Gedenkregister nennt die Ankunft in Israel im August 1947, die Ehe mit Shmuel Rapoport und eine gemeinsame Druckerei in Tel Aviv. Die Familienerinnerung ergänzt ein Treffen über die UNRRA und etwa ein Jahr in Italien vor der Einwanderung.", "Offizieller Gedenkeintrag · Familienerinnerung"], ["1955", "Eidesstattliche Aussage", "In Tel Aviv bestätigte Paula ihre Geschichte an Eides statt. Diese Aussage gehört zu den wichtigsten Primärquellen der Sammlung.", "Aussage vom 4. Mai 1955"], ["1994", "Pnina Rapoport", "Die israelische Sterbeurkunde führt sie als Pnina Rapoport, geboren am 22. Juni 1919 und gestorben am 19. Oktober 1994 in Tel Aviv–Jaffa.", "Israelische Sterbeurkunde"]]
    },
    places: {
      kicker: "Eine Geografie von Bruch und Überleben", title: "Die Route, die die Dokumente zeigen", intro: "Jeder Ort ist mehr als ein Punkt auf der Karte: Er markiert eine Veränderung durch Bildung, Arbeit, Verfolgung, Gefangenschaft oder Überleben.", cards: [["01", "Berlin", "Geburt, Schule, Arbeit und die dokumentierte Familienadresse Grenadierstraße 17."], ["02", "Zbąszyń", "Paulas eigener Zielort nach dem Verlassen Deutschlands im September 1938."], ["03", "Tarnów", "Mates und weitere Simchowicz-Familienkorrespondenz erscheinen hier 1939–1940; Paula musste hier arbeiten."], ["04", "Płaszów → Skarżysko → Częstochowa", "Die Kriegsroute im Lebenslauf; „Skarżysko“ ist eine begründete Lesung eines unklaren Scans."], ["05", "Tel Aviv", "Nachkriegsheim, eidesstattliche Aussage 1955 und Paulas Tod 1994."]], route: "Berlin → Zbąszyń → Tarnów → Lager → Israel"
    },
    testimony: {
      kicker: "Paulas Stimme", title: "Was ihre eigene Aussage erzählt", quote: "Wir mussten durchschnittlich vierzehn Stunden täglich arbeiten. Wir erhielten keinen Lohn; unsere einzige Nahrung waren 300 Gramm Brot.", cite: "Paula Rapoport, eidesstattliche Erklärung, Tel Aviv, 4. Mai 1955", heading: "Ein seltenes Zeugnis aus erster Person", text: "Die Erklärung von 1955 präzisiert den Lebenslauf. Sie datiert den Beginn der Zwangsarbeit auf Ende September 1939, Jom Kippur, und hält Isolation, SS-Bewachung, das Verbot zu gehen, lange Schichten, Hunger und unbezahlte Arbeit in Paulas eigenen Worten fest.", facts: [["Identität", "Paula Simchowicz → Pnina Rapoport"], ["Familie", "Tochter von Mates und Ester/Esther"], ["Arbeit", "Damenkleidung in Berlin; Zwangsnähen in Tarnów"], ["Ergebnis", "Sie überlebte und baute sich in Israel ein Leben auf"]]
    },
    sources: {
      kicker: "Belege und Kontext", title: "Eine transparente Quellenkette", intro: "Das Archiv unterscheidet zwischen direkt dokumentierten Fakten, Angaben aus der Familientabelle und historischem Kontext oder Forschungshinweisen.", filters: { all: "Alle", direct: "Direkte Dokumente", family: "Familienquelle", context: "Historischer Kontext", lead: "Forschungshinweis" },
      cards: [["direct", "Paulas Dokumentensammlung", "Berliner Identitätsnachweis, israelische Sterbeurkunde, Rotkreuz-Formulare, Familienkorrespondenz sowie Kopien des Lebenslaufs und der eidesstattlichen Erklärung.", "Paula documents · S. 1–21"], ["direct", "Paulas Lebenslauf", "Deutscher Lebenslauf: Geburt, Schulen, Arbeit, Vertreibung, Zwangsarbeit, Lagerfolge und Befreiung.", "Paula Simchovicz CV · S. 1"], ["direct", "Eidesstattliche Erklärung 1955", "Paulas Bericht aus erster Person über Zbąszyń, Tarnów, SS-Uniformen, Hunger, Gefangenschaft und den Transfer 1941.", "Gescannte Erklärung · 4. Mai 1955"], ["direct", "Jüdisches Berliner Adressbuch 1929", "Das jüdische Adressbuch verzeichnet Mathes Sinechowitz an der Grenadierstraße 17 in Berlin. Dies ist die Grundlage für die korrigierte Familienadresse.", `<a href="${external.addressBook}" target="_blank" rel="noreferrer">Adressbucheintrag öffnen ↗</a>`], ["direct", "Israelischer Gedenkeintrag", "Der offizielle Gedenkeintrag führt Pnina Paula Rapoport Simchowicz als Tochter von Esther und Matityahu, mit Einwanderung nach Israel im August 1947 und einem Nachkriegsleben in Tel Aviv.", `<a href="${external.israelMemorial}" target="_blank" rel="noreferrer">Gedenkeintrag öffnen ↗</a>`], ["direct", "Arolsen-Karten der Geschwister", "Rosa, Minni und Sascha/Susi erscheinen als in Berlin geborene polnische Staatsangehörige mit dem Vater Mates und der Mutter Erna/Ester geborene Offen. Das stützt den wahrscheinlichen Haushalt, nennt Paula aber nicht.", `<a href="${external.arolsenRosa}" target="_blank" rel="noreferrer">Rosa</a> · <a href="${external.arolsenMinni}" target="_blank" rel="noreferrer">Minni</a> · <a href="${external.arolsenSascha}" target="_blank" rel="noreferrer">Sascha</a>`], ["family", "Familientabelle", "Arbeitsübersicht mit Namen, Geburtsjahren oder -daten, Orten und Schicksalsfeldern im Projekt Simchowicz–Ofen.", `<a href="${sheetUrl}" target="_blank" rel="noreferrer">Familientabelle öffnen ↗</a>`], ["family", "Familienerinnerung", "Ein veröffentlichtes Familieninterview ergänzt Paulas Nachkriegsweg: Treffen mit Shmuel über die UNRRA, etwa ein Jahr in Italien und danach Israel. Diese Angaben bleiben als mündliche Familienquelle gekennzeichnet.", `<a href="${external.oralHistory}" target="_blank" rel="noreferrer">Interview lesen ↗</a>`], ["family", "Genealogie-Profil", "Öffentliches Profil, das Paula Pnina Rapoport mit dem Namen Simchowicz und den Daten 1919–1994 verbindet.", `<a href="${profileUrl}" target="_blank" rel="noreferrer">Genealogie-Profil öffnen ↗</a>`], ["context", "Zbąszyń-Unterlagen", "Verzeichnis des Arolsen Archives zu polnischen Juden, die im Oktober 1938 aus dem Deutschen Reich ausgewiesen wurden, mit Namen, Eltern, Geburtsdaten, Adressen und Zielen.", `<a href="${external.arolsen}" target="_blank" rel="noreferrer">Arolsen Archives ↗</a>`], ["context", "JDC-Flüchtlingsliste", "Die JDC-Liste enthält Flüchtlinge aus Zbąszyń und Angehörige im Ausland. Eine personenscharfe Übereinstimmung der Familie wurde in diesem Durchgang noch nicht bestätigt.", `<a href="${external.jdc}" target="_blank" rel="noreferrer">JDC Archives ↗</a> · <a href="${external.jdcHelp}" target="_blank" rel="noreferrer">Suchhilfe ↗</a>`], ["context", "Berlins jüdisches Viertel", "Grenadierstraße lag im Scheunenviertel, einem wichtigen Zentrum osteuropäisch-jüdischen Lebens. Das ist historischer Kontext für Paula in Berlin, kein Beweis für eine bestimmte Schule oder ein bestimmtes Gebäude.", `<a href="${external.fuBerlin}" target="_blank" rel="noreferrer">FU Berlin ↗</a> · <a href="${external.jewishMuseum}" target="_blank" rel="noreferrer">Jüdisches Museum Berlin ↗</a>`], ["context", "Tarnów unter Besatzung", "USHMM-Kontext zu Besatzung, Zwangsarbeit, Ghetto, Deportationen und der Zerstörung der jüdischen Gemeinde Tarnóws.", `<a href="${external.usHoloTarnow}" target="_blank" rel="noreferrer">USHMM ↗</a>`], ["context", "Weiterführende Literatur", "Dohrn und Pickhan, Transit and Transformation (2010); Anne-Christin Sass, Berliner Luftmenschen (2012); Karsten Krampitz, Pogrom im Scheunenviertel (2023).", "Bibliografie aus der Familienforschung"], ["lead", "JRI-Poland-Material", "Der neue JRI-Bericht enthält einen möglichen Bezug zu einem älteren polnischen Zivilstandsdatensatz. Die genauen Indexdaten werden wegen der Veröffentlichungsbeschränkung des Berichts nicht auf dieser öffentlichen Seite wiedergegeben; der Primärdatensatz muss noch geprüft werden.", `<a href="${external.polishArchive}" target="_blank" rel="noreferrer">Bestände in Nowy Sącz durchsuchen ↗</a>`], ["lead", "Die Skarżysko-Frage", "Im Lebenslauf steht offenbar „Skarsicz“. Skarżysko-Kamienna ist eine plausible Lesung, aber die individuelle Identifizierung muss noch bestätigt werden.", `<a href="${external.usHoloSkarzysko}" target="_blank" rel="noreferrer">Lagerkontext ↗</a>`]], ledgerHead: ["Quelle", "Typ", "Beitrag"], ledger: [["Paula Simchovicz CV.pdf", "Direktes Dokument", "Geburt und Schule in Berlin; Paliwoda; Vertreibung; Lager; Befreiung."], ["Scanned_20260901-1028.pdf", "Direktes Dokument", "Eidesstattliche Aussage vom 4. Mai 1955; Chronologie Zbąszyń–Tarnów."], ["פאולה מסמכים.pdf", "Direkte Dokumente", "Grenadierstraße 17; Sterbeurkunde; Rotes Kreuz; Korrespondenz 1939–1940."], ["Jüdisches Berliner Adressbuch 1929", "Direkte Quelle", "Mathes Sinechowitz an der Grenadierstraße 17."], ["Israelischer Gedenkeintrag", "Direkte Quelle", "Pnina Paula Rapoport Simchowicz; Tochter von Esther und Matityahu; Einwanderung nach Israel im August 1947."], ["Arolsen Archives", "Direkte Quelle", "Karten zu Rosa, Minni und Sascha/Susi: Berlin, polnische Staatsangehörigkeit, Vater Mates, Mutter Erna/Ester née Offen."], ["JRI-Poland-Material", "Private Forschungsnotiz", "Die detaillierten Indexdaten werden bis zur Klärung der Veröffentlichungsrechte nicht öffentlich wiedergegeben; der Primärdatensatz muss noch geprüft werden."], ["Familientabelle", "Familienquelle", "Vorläufige Eltern, Kinder, Geburtsdaten und Schicksalsangaben."], ["Öffentliche Archive", "Kontext / Hinweise", "Arolsen, JDC, USHMM, Jüdisches Museum Berlin und FU Berlin."]]
    },
    questions: {
      kicker: "Die Forschung geht weiter", title: "Was noch gefunden werden muss", text: "Eine gute Familiengeschichte macht Unsicherheiten sichtbar. Diese Fragen können aus dem Entwurf eine vollständig belegte Genealogie machen.", items: [["Mates und Ester nach 1938", "In den Zbąszyń-Unterlagen von Arolsen und JDC suchen und anschließend Ghetto- und Deportationsunterlagen aus Tarnów verfolgen."], ["Die Schicksale der Geschwister", "Isaac Eliezer, Rosa, Salo, Mina und Sascha in Überlebenden-, Opfer-, Ghetto-, Lager- oder Nachkriegsunterlagen bestätigen."], ["Salo / Sala", "Den „S. Simchowicz“ identifizieren, der Postkarten in der Świętego-Nikodema-Straße 6 erhielt, und mit dem Arolsen-Datensatz 78813850 vergleichen. Sala ist nicht als Salo/Shlomo bestätigt und bleibt getrennt."], ["Roza / Rosa", "Den Arolsen-Datensatz 78827309 mit Rosa Shoshana vergleichen. Roza ist nicht als Rosa bestätigt und bleibt eine getrennte, ungeklärte Identität."], ["Ester / Esther / Erma / Erna", "Die Schreibvarianten des Namens der Mutter durch Geburts-, Heirats-, Flüchtlings- oder Berliner Melderegister klären."], ["Die Verbindung zu Ofen", "Feststellen, ob „Ofen“ ein Mädchenname, ein Ehename oder ein verbundener Familienzweig ist."], ["Der ursprüngliche Zivilstandsdatensatz", "Für die Veröffentlichung des JRI-Materials eine Genehmigung einholen und den Forschungshinweis anschließend mit dem ursprünglichen Zivilstandsdatensatz aus Nowy Sącz prüfen."], ["Grenadierstraße 14 oder 17", "Mit Berliner Unterlagen klären, ob Nr. 14 einen späteren Umzug, eine verbundene Karte oder eine Abweichung bezeichnet; Nr. 17 bleibt die zentrale Adresse."], ["Personenabgleich in der JDC-Liste", "Paula, Mates und Schreibvarianten im JDC-Namensindex suchen; die blockierte Suche beweist keine Abwesenheit."], ["Paulas Lagerrute", "Den unklaren Lagernamen im Lebenslauf sowie die genaue Folge Tarnów, Płaszów, Skarżysko und Częstochowa bestätigen."]]
    },
    footer: { eyebrow: "Ein lebendes Archiv", note: "Erstellt aus Familiendokumenten, einer Familientabelle und öffentlichem Archivkontext. Aktualisiert am 3. September 2026.", privacy: "Lebende Personen werden hier nicht profiliert; unsichere Angaben sind gekennzeichnet.", sources: "Quellen ansehen" }
  }
};

const additionalArolsenEvidence = {
  en: {
    card: ["direct", "Additional Arolsen records", "Records 12674257 and 12674258 are two records for the same person, Susi. Record 12674261 is an additional Minni record. Records 78813850 (Sala) and 78827309 (Roza) remain unresolved and are not merged with Salo/Shlomo or Rosa/Rosa Shoshana.", `<a href="${external.arolsenSascha}" target="_blank" rel="noreferrer">Susi 12674257 ↗</a> · <a href="${external.arolsenSusi}" target="_blank" rel="noreferrer">Susi 12674258 ↗</a> · <a href="${external.arolsenMinniAlt}" target="_blank" rel="noreferrer">Minni 12674261 ↗</a> · <a href="${external.arolsenSala}" target="_blank" rel="noreferrer">Sala 78813850 ↗</a> · <a href="${external.arolsenRoza}" target="_blank" rel="noreferrer">Roza 78827309 ↗</a>`],
    ledger: ["Additional Arolsen records", "Direct source", "12674257 and 12674258: same Susi; 12674261: additional Minni; 78813850: Sala unresolved; 78827309: Roza unresolved."]
  },
  he: {
    card: ["direct", "רשומות ארולסן נוספות", "רשומות 12674257 ו־12674258 הן שתי רשומות של אותה סוזי. רשומה 12674261 היא רשומה נוספת של מיני. רשומות 78813850 (סאלה) ו־78827309 (רוזה) נותרות בלתי מזוהות, ואין למזג אותן עם סאלו/שלמה או רוזה/רוזה שושנה.", `<a href="${external.arolsenSascha}" target="_blank" rel="noreferrer">סוזי 12674257 ↗</a> · <a href="${external.arolsenSusi}" target="_blank" rel="noreferrer">סוזי 12674258 ↗</a> · <a href="${external.arolsenMinniAlt}" target="_blank" rel="noreferrer">מיני 12674261 ↗</a> · <a href="${external.arolsenSala}" target="_blank" rel="noreferrer">סאלה 78813850 ↗</a> · <a href="${external.arolsenRoza}" target="_blank" rel="noreferrer">רוזה 78827309 ↗</a>`],
    ledger: ["רשומות ארולסן נוספות", "מקור ישיר", "12674257 ו־12674258: אותה סוזי; 12674261: רשומת מיני נוספת; 78813850: סאלה לא מזוהה; 78827309: רוזה לא מזוהה."]
  },
  de: {
    card: ["direct", "Zusätzliche Arolsen-Datensätze", "Die Datensätze 12674257 und 12674258 gehören zur selben Person, Susi. 12674261 ist ein zusätzlicher Minni-Datensatz. 78813850 (Sala) und 78827309 (Roza) bleiben ungeklärt und werden nicht mit Salo/Shlomo oder Rosa/Rosa Shoshana zusammengeführt.", `<a href="${external.arolsenSascha}" target="_blank" rel="noreferrer">Susi 12674257 ↗</a> · <a href="${external.arolsenSusi}" target="_blank" rel="noreferrer">Susi 12674258 ↗</a> · <a href="${external.arolsenMinniAlt}" target="_blank" rel="noreferrer">Minni 12674261 ↗</a> · <a href="${external.arolsenSala}" target="_blank" rel="noreferrer">Sala 78813850 ↗</a> · <a href="${external.arolsenRoza}" target="_blank" rel="noreferrer">Roza 78827309 ↗</a>`],
    ledger: ["Zusätzliche Arolsen-Datensätze", "Direkte Quelle", "12674257 und 12674258: dieselbe Susi; 12674261: zusätzlicher Minni-Datensatz; 78813850: Sala ungeklärt; 78827309: Roza ungeklärt."]
  }
};

Object.entries(additionalArolsenEvidence).forEach(([lang, evidence]) => {
  t[lang].sources.cards.splice(4, 0, evidence.card);
  t[lang].sources.ledger.splice(4, 0, evidence.ledger);
});

const statusClass = { direct: "direct", family: "family", context: "family", lead: "lead", confirmed: "direct", likely: "family", open: "lead" };

function render(lang) {
  const d = t[lang] || t.en;
  const isHebrew = lang === "he";
  document.documentElement.lang = lang;
  document.documentElement.dir = isHebrew ? "rtl" : "ltr";
  document.title = d.title;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const path = el.dataset.i18n.split(".");
    let value = d;
    path.forEach((key) => { value = value?.[key]; });
    if (typeof value === "string") el.textContent = value;
  });
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.setAttribute("aria-pressed", button.dataset.lang === lang ? "true" : "false");
  });

  const app = document.getElementById("app");
  app.innerHTML = `
    <section id="top" class="hero">
      <div>
        <p class="eyebrow">${d.hero.eyebrow}</p>
        <h1>${d.hero.title}</h1>
        <p class="hero-lede">${d.hero.lede}</p>
        <div class="hero-actions"><a class="button primary" href="#family">${d.hero.primary}</a><a class="button secondary" href="#sources">${d.hero.secondary}</a></div>
      </div>
      <aside class="hero-card"><div class="hero-card-content"><span class="hero-card-kicker">${d.hero.cardKicker}</span><h2>${d.hero.cardTitle}</h2><div class="stat-row">${d.hero.stats.map(([big, small]) => `<div class="stat"><strong>${big}</strong><span>${small}</span></div>`).join("")}</div></div></aside>
    </section>

    <section class="section" aria-labelledby="about-title"><div class="section-heading"><div><p class="kicker">${d.about.kicker}</p><h2 id="about-title">${d.about.title}</h2></div><p>${d.about.text}</p></div><div class="chip-row">${d.about.chips.map((chip) => `<span class="chip">${chip}</span>`).join("")}</div></section>

    <section id="research-update" class="section" aria-labelledby="research-update-title"><div class="section-heading"><div><p class="kicker">${d.updates.kicker}</p><h2 id="research-update-title">${d.updates.title}</h2></div><p>${d.updates.intro}</p></div><div class="findings-grid">${d.updates.cards.map(([kind, title, text, link]) => `<article class="finding-card ${kind === "open" ? "restricted" : ""}"><span class="status ${statusClass[kind]}">${d.updates.labels[kind]}</span><h3>${title}</h3><p>${text}</p><div>${link}</div></article>`).join("")}</div><p class="note finding-note">${d.updates.note}</p></section>

    <section id="family" class="section" aria-labelledby="family-title"><div class="section-heading"><div><p class="kicker">${d.family.kicker}</p><h2 id="family-title">${d.family.title}</h2></div><p>${d.family.text}</p></div><div class="family-tree"><h3>${d.family.parents}</h3><div class="parents"><div class="tree-card"><strong>${d.family.parent1[0]}</strong><small>${d.family.parent1[1]}</small><span class="status family">${d.family.familyRecord}</span><small>${d.family.parent1[2]}</small></div><div class="tree-card"><strong>${d.family.parent2[0]}</strong><small>${d.family.parent2[1]}</small><span class="status family">${d.family.familyRecord}</span><small>${d.family.parent2[2]}</small></div></div><div class="tree-connector"></div><h3>${d.family.children}</h3><div class="children">${d.family.childData.map(([name, meta, kind], i) => { const childKind = kind || (i === 0 ? "direct" : "family"); const visualKind = childKind === "arolsen" ? "direct" : childKind; return `<div class="tree-card"><strong>${name}</strong><small>${meta}</small><span class="status ${visualKind}">${d.family.childStatus[childKind]}</span></div>`; }).join("")}</div></div><div class="family-lead"><p class="kicker">${d.family.leadTitle}</p><p>${d.family.leadText}</p><p class="note">${d.family.leadLinks}</p></div><p class="note">${d.family.note}</p></section>

    <section id="timeline" class="section" aria-labelledby="timeline-title"><div class="section-heading"><div><p class="kicker">${d.timeline.kicker}</p><h2 id="timeline-title">${d.timeline.title}</h2></div><p>${d.timeline.intro}</p></div><div class="timeline">${d.timeline.events.map(([year, title, text, source]) => `<article class="timeline-item"><div class="timeline-year">${year}</div><span class="timeline-dot" aria-hidden="true"></span><div class="timeline-copy"><h3>${title}</h3><p>${text}</p><p class="note">${source}</p></div></article>`).join("")}</div></section>

    <section id="places" class="section" aria-labelledby="places-title"><div class="section-heading"><div><p class="kicker">${d.places.kicker}</p><h2 id="places-title">${d.places.title}</h2></div><p>${d.places.intro}</p></div><div class="places-grid">${d.places.cards.map(([num, name, text]) => `<article class="place-card"><span class="place-num">${num}</span><h3>${name}</h3><p>${text}</p></article>`).join("")}</div><div class="route-line" aria-label="${d.places.route}"><span></span><i></i><strong>${d.places.route}</strong><i></i><span></span></div></section>

    <section class="section" aria-labelledby="testimony-title"><div class="section-heading"><div><p class="kicker">${d.testimony.kicker}</p><h2 id="testimony-title">${d.testimony.title}</h2></div></div><div class="testimony"><div class="quote-card"><span class="quote-mark" aria-hidden="true">“</span><blockquote>${d.testimony.quote}</blockquote><cite>${d.testimony.cite}</cite></div><div class="testimony-copy"><h3>${d.testimony.heading}</h3><p>${d.testimony.text}</p><div class="fact-list">${d.testimony.facts.map(([label, value]) => `<div class="fact"><strong>${label}</strong>${value}</div>`).join("")}</div></div></div></section>

    <section id="sources" class="section" aria-labelledby="sources-title"><div class="section-heading"><div><p class="kicker">${d.sources.kicker}</p><h2 id="sources-title">${d.sources.title}</h2></div><p>${d.sources.intro}</p></div><div class="evidence-tabs" role="group" aria-label="${d.sources.title}">${Object.entries(d.sources.filters).map(([key, label], i) => `<button class="filter-btn ${i === 0 ? "active" : ""}" type="button" data-filter="${key}">${label}</button>`).join("")}</div><div class="source-grid">${d.sources.cards.map(([kind, title, text, link]) => `<article class="source-card" data-kind="${kind}"><span class="source-type">${d.sources.filters[kind]}</span><h3>${title}</h3><p>${text}</p>${link.includes("<a") ? link : `<span class="note">${link}</span>`}</article>`).join("")}</div><div class="source-ledger"><div class="ledger-row ledger-head">${d.sources.ledgerHead.map((cell) => `<div>${cell}</div>`).join("")}</div>${d.sources.ledger.map((row) => `<div class="ledger-row">${row.map((cell) => `<div>${cell}</div>`).join("")}</div>`).join("")}</div></section>

    <section class="section" aria-labelledby="questions-title"><div class="questions"><div class="questions-intro"><p class="eyebrow">${d.questions.kicker}</p><h2 id="questions-title">${d.questions.title}</h2><p>${d.questions.text}</p></div><div class="question-list">${d.questions.items.map(([title, text]) => `<article class="question"><strong>${title}</strong><p>${text}</p></article>`).join("")}</div></div></section>
  `;

  document.querySelectorAll(".filter-btn").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      button.classList.add("active");
      const filter = button.dataset.filter;
      document.querySelectorAll(".source-card").forEach((card) => card.classList.toggle("hidden", filter !== "all" && card.dataset.kind !== filter));
    });
  });
}

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => {
    const lang = button.dataset.lang;
    localStorage.setItem("simchowicz-language", lang);
    render(lang);
  });
});

render(localStorage.getItem("simchowicz-language") || "en");
