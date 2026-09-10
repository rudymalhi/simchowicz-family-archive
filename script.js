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
  yadvashemSaloTestimony: "https://collections.yadvashem.org/en/documents/4115983",
  yadvashemNames: "https://www.yadvashem.org/archive/hall-of-names/database.html",
  jdc: "https://archives.jdc.org/jdc-archives-shares-zbaszyn-refugees-list-with-jri-poland/",
  jdcNames: "https://archives.jdc.org/our-collections/names-index/",
  jdcHelp: "https://archives.jdc.org/our-collections/names-index/names-search-help/",
  addressBook: "https://adressbuecher.genealogy.net/entry/61fe8119-6537-11ef-b615-0242ac104001",
  israelMemorial: "https://laad.btl.gov.il/Web/He/TerrorVictims/Page/Default.aspx?ID=38282",
  paulaDeathPage: "https://laad.btl.gov.il/Web/He/TerrorVictims/Page/Default.aspx?ID=38282",
  oralHistory: "https://www.ravdori.co.il/stories/%D7%90%D7%97%D7%93%D7%95%D7%AA-%D7%94%D7%9E%D7%A9%D7%A4%D7%97%D7%94-%D7%9E%D7%A2%D7%9C-%D7%94%D7%9B%D7%9C-%D7%A1%D7%91%D7%AA%D7%90-%D7%90%D7%A1%D7%AA%D7%99%D7%98%D7%94-%D7%A4%D7%A1%D7%98%D7%A1/",
  polishArchive: "https://www.szukajwarchiwach.gov.pl/en/zespol/-/zespol/54084",
  usHoloZbaszyn: "https://encyclopedia.ushmm.org/content/en/gallery/zbaszyn",
  usHoloTarnow: "https://encyclopedia.ushmm.org/content/en/article/tarnow",
  usHoloSkarzysko: "https://encyclopedia.ushmm.org/content/en/oral-history/abraham-lewent-describes-conditions-in-skarzysko-camp",
  fuBerlin: "https://www.fu-berlin.de/presse/publikationen/tsp/archiv/2008/ts_20080419/ts_200800419_11/index.html",
  jewishMuseum: "https://www.jmberlin.de/berlin-transit/orte/en/talmudtora.php",
  isaacBook: "isaac-eliezer-family-book.pdf",
  familyTreeBook: "simchowicz-family-tree-2021.pdf"
};

const t = {
  en: {
    title: "Simchowicz Family Archive",
    brand: { title: "Simchowicz", subtitle: "family archive" },
    nav: { family: "Family", photo: "Family photo", updates: "New findings", timeline: "Timeline", places: "Places", sources: "Sources" },
    hero: {
      eyebrow: "A family memory, still being researched",
      title: "From Berlin to Tarnów — and through the wreckage of Europe",
      lede: "The documented story of Paula Pnina Simchowicz / Rapoport and the Simchowicz family: Jewish life in interwar Berlin, expulsion to Poland, forced labor under Nazi occupation, and the work of remembering. Her life ended tragically on 19 October 1994 in the Tel Aviv Route 5 bombing.",
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
    photo: {
      kicker: "Family photograph",
      title: "A portrait carried through the family archive",
      text: "The adults are identified from left to right as Paula, Shlomo, Mathes, Esther, Rosa, and Isaac. The two children below are Mina and Sascha; which child is which remains unconfirmed. This identification is supplied by the family.",
      alt: "Family photograph: Paula, Shlomo, Mathes, Esther, Rosa, and Isaac from left to right; Mina and Sascha below, order uncertain",
      caption: "Family-supplied identification · adults left to right: Paula, Shlomo, Mathes, Esther, Rosa, Isaac · children below: Mina and Sascha, order uncertain"
    },
    updates: {
      kicker: "Research update · 7 September 2026",
      title: "The archival picture has sharpened",
      intro: "A fresh review of Arolsen, Yad Vashem, the Berlin address record, the new JRI material, and Israeli family sources clarifies Paula’s identity and reconstructs a probable prewar household. Open questions remain visible.",
      labels: { confirmed: "Confirmed record", likely: "Strong identification", family: "Family testimony", open: "Open question" },
      cards: [
        ["confirmed", "Paula and Pnina are the same person", "Israel’s official memorial record names פנינה פאולה רפפורט שמחוביץ, born in Berlin on 22 June 1919, daughter of Esther and Matityahu. It also records her August 1947 immigration, marriage to Shmuel Rapoport, Tel Aviv printing business, two children, and death in the 1994 Route 5 bombing.", `<a href="${external.paulaDeathPage}" target="_blank" rel="noreferrer">Open Paula’s death memorial page ↗</a>`],
        ["confirmed", "Arolsen now shows a wider record group", "Arolsen cards identify Rosa (1 January 1922), Minni (7 September 1924), and Sascha/Susi (18 December 1929), all Berlin-born Polish citizens with father Mates and mother Erna/Ester née Offen. Records 12674257 and 12674258 are two records for the same Susi. Record 12674261 is an additional Minni record. Sala and Roza are linked as unresolved records and are not merged with Salo/Shlomo or Rosa/Rosa Shoshana.", `<a href="${external.arolsenRosa}" target="_blank" rel="noreferrer">Rosa ↗</a> · <a href="${external.arolsenMinni}" target="_blank" rel="noreferrer">Minni ↗</a> · <a href="${external.arolsenMinniAlt}" target="_blank" rel="noreferrer">Minni, additional record ↗</a> · <a href="${external.arolsenSascha}" target="_blank" rel="noreferrer">Susi, record 12674257 ↗</a> · <a href="${external.arolsenSusi}" target="_blank" rel="noreferrer">Susi, record 12674258 ↗</a> · <a href="${external.arolsenSala}" target="_blank" rel="noreferrer">Sala ↗</a> · <a href="${external.arolsenRoza}" target="_blank" rel="noreferrer">Roza ↗</a>`],
        ["confirmed", "Salo’s testimony confirms the family home and escape route", "The Yad Vashem testimony identifies Shlomo Salo Simchowicz, born in Berlin in 1923. He says all the children were born at Grenadierstraße 17, names the siblings in order, identifies his father as Matityahu (called Mates/Mathes) and his mother as Esther née Offen, and recounts his deportation to Zbąszyń on 29 October 1938, escape through Tarnów, Białystok, Vilna, Kaunas, Sweden, Amsterdam, Brussels, Paris, Marseille and Beirut, and arrival in Palestine on 1 April 1940. The testimony also records family postcards from Tarnów through 1942.", `<a href="${external.yadvashemSaloTestimony}" target="_blank" rel="noreferrer">Read Salo’s testimony ↗</a>`],
        ["confirmed", "Three 1943 Tarnów fates are now documented", "The newly supplied Yad Vashem Pages of Testimony record Mathes/Mates Simchowicz, Mina Simchowicz, and Sascha Simchowicz as having died in Tarnów in 1943. This strengthens the family’s wartime fate reconstruction, while Salo/Sala and Roza/Rosa remain unresolved.", `<a href="${external.yadvashemNames}" target="_blank" rel="noreferrer">Yad Vashem Names database ↗</a>`],
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
      text: "Paula’s Israeli memorial record names Matityahu and Esther as her parents. The Berlin address book, Arolsen cards, and newly supplied Yad Vashem Pages of Testimony now add strong independent evidence for the prewar household and the 1943 Tarnów deaths of Mathes/Mates, Mina, and Sascha. The family spreadsheet preserves additional names that still need confirmation.",
      parents: "Parents",
      parent1: ["Mates / Matityahu Simchowicz", "c. 1889 · Nowy Sącz · died Tarnów, 1943", "birthplace from family source; Salo remembers a warm religious household and describes his father as a Kaufmann with a milk-and-eggs shop on Grenadierstraße; 1943 Tarnów death recorded in a Yad Vashem Page of Testimony"],
      parent2: ["Ester / Esther / Erna Simchowicz", "c. 1896 · Poland", "née Offen; Salo’s testimony places her family in Dąbrowa near Oświęcim; exact town still needs verification"],
      leadTitle: "Arolsen adds a probable household",
      leadText: "Arolsen cards now identify Rosa, Minni, and Sascha/Susi as Berlin-born Polish citizens with father Mates and mother Erna/Ester née Offen. Salo’s Yad Vashem testimony confirms Grenadierstraße 17 as the family home, says all the children were born there, names the siblings, and traces his route from the 1938 Zbąszyń deportation through Tarnów, Białystok and Vilna to Palestine in 1940. Yad Vashem Pages of Testimony add 1943 Tarnów death records for Mathes/Mates, Mina, and Sascha. Records 12674257 and 12674258 are two records for the same Susi, while 12674261 is an additional Minni record. Sala and Roza remain separate unresolved records and are not merged with Salo/Shlomo or Rosa/Rosa Shoshana.",
      leadLinks: `<a href="${external.arolsenRosa}" target="_blank" rel="noreferrer">Rosa’s card ↗</a> · <a href="${external.arolsenMinni}" target="_blank" rel="noreferrer">Minni’s card ↗</a> · <a href="${external.arolsenMinniAlt}" target="_blank" rel="noreferrer">Additional Minni card ↗</a> · <a href="${external.arolsenSascha}" target="_blank" rel="noreferrer">Susi, record 12674257 ↗</a> · <a href="${external.arolsenSusi}" target="_blank" rel="noreferrer">Susi, record 12674258 ↗</a> · <a href="${external.arolsenSala}" target="_blank" rel="noreferrer">Sala ↗</a> · <a href="${external.arolsenRoza}" target="_blank" rel="noreferrer">Roza ↗</a> · <a href="${external.addressBook}" target="_blank" rel="noreferrer">1929 address record ↗</a>`,
      children: "Children and likely siblings in the records",
      childData: [
        ["Paula Pnina", "22 June 1919 · Berlin", "direct"],
        ["Isaac Eliezer", "birth date not yet found", "family"],
        ["Rosa Shoshana", "1 January 1922 · Berlin", "arolsen"],
        ["Salo / Shlomo", "24 May 1923 · Berlin · arrived in Palestine 1 April 1940", "direct"],
        ["Mina / Minni", "7 September 1924 · Berlin · died Tarnów, 1943", "direct"],
        ["Sascha / Susi", "18 December 1929 · Berlin · died Tarnów, 1943", "direct"]
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
        ["1994", "Pnina Rapoport", "The Israeli death certificate records her as Pnina Rapoport, born 22 June 1919 and deceased 19 October 1994 in Tel Aviv–Yafo.", `<a href="${external.paulaDeathPage}" target="_blank" rel="noreferrer">LAAD memorial page documenting her death ↗</a>`]
      ]
    },
    places: {
      kicker: "A geography of rupture and survival",
      title: "The route the documents reveal",
      intro: "Each place is more than a point on a map: it marks a change in education, work, persecution, captivity, or survival.",
      cards: [
        ["01", "Berlin", "Birth, schooling, work, and the family home documented at Grenadierstraße 17."],
        ["02", "Zbąszyń", "Paula’s stated destination after leaving Germany in September 1938."],
        ["03", "Tarnów", "Salo reunited there with his father and Paula, learned electrical work, and received family correspondence through 1942; Paula was forced to work there. The Yad Vashem Pages of Testimony record Mathes/Mates, Mina, and Sascha as dying there in 1943."],
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
        ["direct", "Israeli memorial record and Paula’s death page", "The official LAAD memorial page confirms Paula/Pnina’s parents, Berlin birth, 1947 immigration, marriage to Shmuel Rapoport, two children, and death on 19 October 1994 in the Tel Aviv Route 5 attack.", `<a href="${external.paulaDeathPage}" target="_blank" rel="noreferrer">Open Paula’s death memorial page ↗</a>`],
        ["direct", "Arolsen family cards", "Public Arolsen records identify Rosa, Minni, and Sascha/Susi with father Mates, mother Erna/Ester née Offen, Berlin birthplaces, and Polish citizenship.", `<a href="${external.arolsenRosa}" target="_blank" rel="noreferrer">Rosa ↗</a> · <a href="${external.arolsenMinni}" target="_blank" rel="noreferrer">Minni ↗</a> · <a href="${external.arolsenSascha}" target="_blank" rel="noreferrer">Sascha ↗</a>`],
        ["direct", "Yad Vashem testimony: Shlomo Salo Simchowicz", "The 19 November 2001 testimony identifies Shlomo Salo Simchowicz, born in Berlin in 1923. He describes the Grenadierstraße 17 household, his siblings and parents, the 1938 Zbąszyń deportation, his escape route through Tarnów, Białystok and Vilna, arrival in Palestine on 1 April 1940, and postcards from his parents and sisters in Tarnów through 1942. It is kept separate from Arolsen record 78813850 (Sala).", `<a href="${external.yadvashemSaloTestimony}" target="_blank" rel="noreferrer">Open the full testimony ↗</a>`],
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
        ["Yad Vashem testimony 4115983", "Direct source", "Interview of Shlomo Salo Simchowicz, born Berlin 1923: Grenadierstraße 17 household, siblings and parents, Zbąszyń deportation, escape route, arrival in Palestine on 1 April 1940, and family correspondence from Tarnów through 1942; kept separate from Arolsen Sala 78813850."],
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
        ["The siblings’ individual fates", "Yad Vashem now records Mathes/Mates, Mina, and Sascha as dying in Tarnów in 1943. Confirm the remaining siblings and reconcile the name variants across the records."],
        ["Salo / Sala", "The testimony identifies Shlomo Salo Simchowicz, born in Berlin in 1923, and describes his family at Grenadierstraße 17 and his 1938–1940 escape route. Compare those details and the Tarnów correspondence with Arolsen record 78813850. Sala is not confirmed as Salo/Shlomo and must remain separate."],
        ["Roza / Rosa", "Compare Arolsen record 78827309 with Rosa Shoshana. Roza is not confirmed as Rosa and must remain a separate unresolved identity."],
        ["Ester / Esther / Erma / Erna", "Resolve the mother’s spelling variants by locating a birth, marriage, refugee, or Berlin registration record."],
        ["The Ofen connection", "Determine whether “Ofen” is a maiden name, married name, or connected family branch."],
        ["JRI primary record", "Obtain permission to use the JRI report publicly and verify its possible Polish-record connection against the original civil record."],
        ["Grenadierstraße 14 or 17", "Use Berlin registration or community records to determine whether No. 14 reflects a later move, a related card, or a record discrepancy; No. 17 remains the primary address."],
        ["JDC person-level match", "Search the JDC names list for Paula, Mates, and spelling variants; the earlier blocked search does not establish absence."],
        ["Paula’s camp route", "Verify the unclear camp name in the CV and the exact sequence between Tarnów, Płaszów, Skarżysko, and Częstochowa."]
      ]
    },
    footer: { eyebrow: "A living archive", note: "Built from family documents, a family spreadsheet, and public archival context. Last updated 10 September 2026.", privacy: "Living people are not profiled here; uncertain claims are labelled.", sources: "View sources" }
  },
  he: {
    title: "ארכיון משפחת שמחוביץ",
    brand: { title: "שמחוביץ", subtitle: "ארכיון משפחתי" },
    nav: { family: "המשפחה", photo: "תצלום המשפחה", updates: "ממצאים חדשים", timeline: "ציר זמן", places: "מקומות", sources: "מקורות" },
    hero: {
      eyebrow: "זיכרון משפחתי הנמצא עדיין במחקר",
      title: "מברלין לטארנוב — דרך חורבן אירופה",
      lede: "הסיפור המתועד של פאולה פנינה שמחוביץ / רפפורט ושל משפחת שמחוביץ: החיים היהודיים בברלין שבין שתי מלחמות העולם, הגירוש לפולין, עבודת הכפייה תחת הכיבוש הנאצי, ומלאכת הזיכרון. חייה הסתיימו באופן טרגי ב־19 באוקטובר 1994 בפיגוע בקו 5 בתל אביב.",
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
    photo: {
      kicker: "תצלום משפחתי",
      title: "דיוקן שנשמר בארכיון המשפחה",
      text: "המבוגרים מזוהים משמאל לימין: פאולה, שלמה, מתֶס, אסתר, רוזה ויצחק. שני הילדים למטה הם מינה וסשה, אך עדיין לא ידוע מי מהם הוא מי. הזיהוי נמסר על ידי המשפחה.",
      alt: "תצלום משפחתי: פאולה, שלמה, מתֶס, אסתר, רוזה ויצחק משמאל לימין; מינה וסשה למטה, הסדר ביניהם אינו ודאי",
      caption: "זיהוי שנמסר על ידי המשפחה · המבוגרים משמאל לימין: פאולה, שלמה, מתֶס, אסתר, רוזה, יצחק · הילדים למטה: מינה וסשה, הסדר אינו ודאי"
    },
    updates: {
      kicker: "עדכון מחקר · 7 בספטמבר 2026",
      title: "התמונה הארכיונית התחדדה",
      intro: "בדיקה חדשה של ארכיון ארולסן, יד ושם, ספר הכתובות של ברלין, החומרים החדשים של JRI ומקורות משפחתיים בישראל מבהירה את זהותה של פאולה ומשחזרת משק בית משפחתי אפשרי לפני המלחמה. השאלות הפתוחות נשארות מסומנות.",
      labels: { confirmed: "רשומה מאומתת", likely: "זיהוי חזק", family: "עדות משפחתית", open: "שאלה פתוחה" },
      cards: [
        ["confirmed", "פאולה ופנינה הן אותה אישה", "באתר ההנצחה הרשמי מופיעה פנינה פאולה רפפורט שמחוביץ, ילידת ברלין ב־22 ביוני 1919, בתם של אסתר ומתתיהו. האתר מתעד גם עלייה לארץ באוגוסט 1947, נישואין לשמואל רפפורט, בית דפוס בתל אביב, שני ילדים ומותה בפיגוע באוטובוס קו 5 בשנת 1994.", `<a href="${external.paulaDeathPage}" target="_blank" rel="noreferrer">לדף ההנצחה המתעד את מותה ↗</a>`],
        ["confirmed", "קבוצת רשומות רחבה יותר בארולסן", "כרטיסי ארולסן מזהים את רוזה (1 בינואר 1922), מיני (7 בספטמבר 1924) וסשה/סוזי (18 בדצמבר 1929), ילידי ברלין ובעלי אזרחות פולנית, עם האב מתי והאם ארנה/אסתר לבית אופן. רשומות 12674257 ו־12674258 הן שתי רשומות של אותה סוזי. רשומה 12674261 היא רשומה נוספת של מיני. סאלה ורוזה מקושרות כאן כרשומות שטרם זוהו: אין למזג את סאלה עם סאלו/שלמה או את רוזה עם רוזה שושנה.", `<a href="${external.arolsenRosa}" target="_blank" rel="noreferrer">רוזה ↗</a> · <a href="${external.arolsenMinni}" target="_blank" rel="noreferrer">מיני ↗</a> · <a href="${external.arolsenMinniAlt}" target="_blank" rel="noreferrer">מיני, רשומה נוספת ↗</a> · <a href="${external.arolsenSascha}" target="_blank" rel="noreferrer">סוזי, רשומה 12674257 ↗</a> · <a href="${external.arolsenSusi}" target="_blank" rel="noreferrer">סוזי, רשומה 12674258 ↗</a> · <a href="${external.arolsenSala}" target="_blank" rel="noreferrer">סאלה ↗</a> · <a href="${external.arolsenRoza}" target="_blank" rel="noreferrer">רוזה, רשומה נוספת ↗</a>`],
        ["confirmed", "עדותו של סאלו מאשרת את בית המשפחה ואת מסלול הבריחה", "העדות ביד ושם מזהה את שלמה סאלו שמחוביץ, יליד ברלין בשנת 1923. הוא מספר שכל הילדים נולדו בגרנָדירשטראסה 17, מונה את האחים והאחיות לפי הסדר, מזהה את אביו כמתתיהו שנקרא מתֶס ואת אמו כאסתר לבית אופן, ומתאר את גירושו לזבונשין ב־29 באוקטובר 1938, את בריחתו דרך טארנוב, ביאליסטוק, וילנה, קובנה, שוודיה, אמסטרדם, בריסל, פריז, מרסיי וביירות ואת הגעתו לארץ ישראל ב־1 באפריל 1940. הוא מתאר גם גלויות מהמשפחה בטארנוב עד 1942.", `<a href="${external.yadvashemSaloTestimony}" target="_blank" rel="noreferrer">לקריאת עדותו של סאלו ↗</a>`],
        ["confirmed", "שלושה גורלות בטארנוב בשנת 1943 מתועדים כעת", "דפי העדות החדשים של יד ושם מתעדים את מתֶס/מתתיהו שמחוביץ, את מינה ואת סשה כמי שמתו בטארנוב בשנת 1943. הדבר מחזק את שחזור גורל המשפחה בזמן המלחמה, אך סאלו/סאלה ורוזה/Roza עדיין אינם מזוהים בוודאות.", `<a href="${external.yadvashemNames}" target="_blank" rel="noreferrer">מאגר השמות של יד ושם ↗</a>`],
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
      text: "ברשומת ההנצחה הישראלית של פאולה מופיעים מתתיהו ואסתר כהוריה. ספר הכתובות של ברלין, כרטיסי ארולסן ודפי העדות החדשים של יד ושם מוסיפים כעת ראיות עצמאיות חזקות למשק הבית שלפני המלחמה ולמותם של מתֶס/מתי, מינה וסשה בטארנוב בשנת 1943. הגיליון המשפחתי משמר שמות נוספים שעדיין דורשים אימות.",
      parents: "הורים",
      parent1: ["מתי / מתתיהו שמחוביץ", "בערך 1889 · נובי סונץ׳ · מת בטארנוב, 1943", "מקום הלידה ממקור משפחתי; סאלו זוכר בית חם ודתי ומתאר את אביו כסוחר עם חנות חלב וביצים בגרנָדירשטראסה; מותו בטארנוב בשנת 1943 מתועד בדף עדות של יד ושם"],
      parent2: ["אסתר / אסתר / ארנה שמחוביץ", "בערך 1896 · פולין", "לבית אופן; עדותו של סאלו ממקמת את משפחתה בדומברובה ליד אושוויינצ׳ים; העיר המדויקת עדיין דורשת אימות"],
      leadTitle: "ארולסן מוסיף משק בית אפשרי",
      leadText: "כרטיסי ארולסן מזהים את רוזה, מיני וסשה/סוזי כילידי ברלין בעלי אזרחות פולנית, עם האב מתי והאם ארנה/אסתר לבית אופן. עדותו של סאלו ביד ושם מאשרת את גרנָדירשטראסה 17 כבית המשפחה, מספרת שכל הילדים נולדו שם, מונה את האחים ומתארת את מסלולו מגירוש זבונשין ב־1938 דרך טארנוב, ביאליסטוק ווילנה ועד לארץ ישראל ב־1940. דפי העדות של יד ושם מוסיפים תיעוד למותם של מתֶס/מתי, מינה וסשה בטארנוב בשנת 1943. רשומות 12674257 ו־12674258 הן שתי רשומות של אותה סוזי, ורשומה 12674261 היא רשומה נוספת של מיני. סאלה ורוזה נשארות רשומות נפרדות שטרם זוהו, ואין למזג אותן עם סאלו/שלמה או רוזה שושנה.",
      leadLinks: `<a href="${external.arolsenRosa}" target="_blank" rel="noreferrer">כרטיס רוזה ↗</a> · <a href="${external.arolsenMinni}" target="_blank" rel="noreferrer">כרטיס מיני ↗</a> · <a href="${external.arolsenMinniAlt}" target="_blank" rel="noreferrer">רשומת מיני נוספת ↗</a> · <a href="${external.arolsenSascha}" target="_blank" rel="noreferrer">סוזי, רשומה 12674257 ↗</a> · <a href="${external.arolsenSusi}" target="_blank" rel="noreferrer">סוזי, רשומה 12674258 ↗</a> · <a href="${external.arolsenSala}" target="_blank" rel="noreferrer">סאלה ↗</a> · <a href="${external.arolsenRoza}" target="_blank" rel="noreferrer">רוזה, רשומה נוספת ↗</a> · <a href="${external.addressBook}" target="_blank" rel="noreferrer">רשומת הכתובת משנת 1929 ↗</a>`,
      children: "ילדים ואחים אפשריים ברשומות",
      childData: [
        ["פאולה פנינה", "22 ביוני 1919 · ברלין", "direct"],
        ["יצחק אליעזר", "תאריך לידה טרם נמצא", "family"],
        ["רוזה שושנה", "1 בינואר 1922 · ברלין", "arolsen"],
        ["סאלו / שלמה", "24 במאי 1923 · ברלין · הגיע לארץ ישראל ב־1 באפריל 1940", "direct"],
        ["מינה / מיני", "7 בספטמבר 1924 · ברלין · מתה בטארנוב, 1943", "direct"],
        ["סשה / סוזי", "18 בדצמבר 1929 · ברלין · מת בטארנוב, 1943", "direct"]
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
        ["1994", "פנינה רפפורט", "תעודת הפטירה הישראלית רושמת אותה כפנינה רפפורט, ילידת 22 ביוני 1919, שנפטרה ב־19 באוקטובר 1994 בתל אביב–יפו.", `<a href="${external.paulaDeathPage}" target="_blank" rel="noreferrer">דף ההנצחה המתעד את מותה ↗</a>`]
      ]
    },
    places: {
      kicker: "גאוגרפיה של קרע והישרדות", title: "המסלול שהמסמכים מגלים", intro: "כל מקום הוא יותר מנקודה במפה: הוא מציין שינוי בחינוך, בעבודה, ברדיפה, בשבי או בהישרדות.",
      cards: [
        ["01", "ברלין", "לידה, לימודים, עבודה, ובית המשפחה המתועד בגרנָדירשטראסה 17."],
        ["02", "זבונשין", "היעד שפאולה מציינת לאחר יציאתה מגרמניה בספטמבר 1938."],
        ["03", "טארנוב", "סאלו התאחד שם עם אביו ועם פאולה, למד חשמלאות וקיבל התכתבויות מהמשפחה עד 1942; פאולה עבדה שם בעבודת כפייה. דפי העדות של יד ושם מתעדים את מותם של מתֶס/מתי, מינה וסשה שם בשנת 1943."],
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
        ["direct", "רשומת ההנצחה ודף מותה של פאולה", "דף ההנצחה הרשמי של הביטוח הלאומי מאשר את זהות פאולה/פנינה, את הוריה, לידתה בברלין, העלייה ב־1947, הנישואין לשמואל רפפורט, שני הילדים ומותה ב־19 באוקטובר 1994 בפיגוע בקו 5 בתל אביב.", `<a href="${external.paulaDeathPage}" target="_blank" rel="noreferrer">לדף ההנצחה המתעד את מותה ↗</a>`],
        ["direct", "כרטיסי המשפחה בארולסן", "רשומות ארולסן הפומביות מזהות את רוזה, מיני וסשה/סוזי עם האב מתי, האם ארנה/אסתר לבית אופן, לידתן/לידתם בברלין ואזרחות פולנית.", `<a href="${external.arolsenRosa}" target="_blank" rel="noreferrer">רוזה ↗</a> · <a href="${external.arolsenMinni}" target="_blank" rel="noreferrer">מיני ↗</a> · <a href="${external.arolsenSascha}" target="_blank" rel="noreferrer">סשה ↗</a>`],
        ["direct", "עדות ביד ושם: שלמה סאלו שמחוביץ", "העדות מ־19 בנובמבר 2001 מזהה את שלמה סאלו שמחוביץ, יליד ברלין בשנת 1923. הוא מתאר את משק הבית בגרנָדירשטראסה 17, את הוריו ואחיו, את הגירוש לזבונשין ב־1938, את מסלול הבריחה דרך טארנוב, ביאליסטוק ווילנה, את הגעתו לארץ ישראל ב־1 באפריל 1940 ואת הגלויות מהוריו ומאחיותיו בטארנוב עד 1942. הרשומה נשמרת בנפרד מרשומת סאלה 78813850 בארולסן.", `<a href="${external.yadvashemSaloTestimony}" target="_blank" rel="noreferrer">לפתיחת העדות המלאה ↗</a>`],
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
      ], ledgerHead: ["מקור", "סוג", "תרומה"], ledger: [["Paula Simchovicz CV.pdf", "מסמך ישיר", "לידה וחינוך בברלין; פאליוודה; הגירוש; המחנות; השחרור."], ["Scanned_20260901-1028.pdf", "מסמך ישיר", "עדות בשבועה מ־4 במאי 1955; ציר זבונשין–טארנוב."], ["פאולה מסמכים.pdf", "מסמכים ישירים", "גרנדירשטראסה 17; תעודת פטירה; הצלב האדום; התכתבויות מ־1939–1940."], ["ספר הכתובות היהודי, ברלין 1929", "מקור ישיר", "מתֶס סינֶכוֹביץ בגרנָדירשטראסה 17."], ["עדות ביד ושם 4115983", "מקור ישיר", "ראיון עם שלמה סאלו שמחוביץ, יליד ברלין 1923: בית המשפחה בגרנָדירשטראסה 17, האחים וההורים, הגירוש לזבונשין, מסלול הבריחה, הגעה לארץ ישראל ב־1 באפריל 1940 והתכתבויות מהמשפחה בטארנוב עד 1942; בנפרד מרשומת סאלה 78813850 בארולסן."], ["חומר JRI-Poland", "הערת מחקר פרטית", "פרטי האינדקס אינם מוצגים באתר הציבורי עד לקבלת אישור; הרשומה המקורית עדיין דורשת בדיקה."], ["הגיליון המשפחתי", "מקור משפחתי", "הורים, ילדים, נתוני לידה ורשומות גורל זמניות."], ["ארכיונים ציבוריים", "רקע / כיוונים", "ארולסן, JDC, USHMM, מוזיאון היהדות בברלין ואוניברסיטת פרי." ]]
    },
    questions: {
      kicker: "המחקר נמשך", title: "מה עדיין חסר", text: "היסטוריה משפחתית טובה משאירה את אי־הוודאות גלויה. אלה השאלות הבאות שסביר ביותר שיהפכו את המתווה לגנאלוגיה מתועדת במלואה.", items: [["מתי ואסתר אחרי 1938", "לאתר אותם בחומרי זבונשין של ארולסן ושל JDC, ואז לעקוב אחר רישומי הגטו והגירושים מטארנוב."], ["גורל האחים והאחיות", "יד ושם מתעד כעת את מותם של מתֶס/מתי, מינה וסשה בטארנוב בשנת 1943. יש לאמת את האחים הנותרים וליישב את גרסאות השמות בין הרשומות."], ["סאלו / סאלה", "להשתמש במסמך יד ושם 4115983, שכותרתו Shlomo Simkhovich, לצד עדויות הגלויות המשפחתיות, ואז להשוות לרשומת ארולסן 78813850. אין אישור שסאלה הוא סאלו/שלמה ולכן אין למזג אותם."], ["רוזה / Roza", "להשוות את רשומת ארולסן 78827309 לרוזה שושנה; אין אישור שמדובר באותה אישה ולכן אין למזג את הרשומות."], ["אסתר / Ester / Erma / Erna", "לפתור את גרסאות האיות של שם האם באמצעות רישום לידה, נישואין, פליטים או מרשם ברלינאי."], ["הקשר לאופן", "לקבוע אם „אופן“ הוא שם נעורים, שם לאחר נישואין או ענף משפחתי קשור."], ["הרשומה האזרחית המקורית", "לקבל אישור לפרסום חומר JRI, ואז לבדוק את כיוון המחקר מול רשומת הלידה המקורית בארכיון נובי סונץ׳."], ["גרנָדירשטראסה 14 או 17", "להשתמש ברשומות ברלינאיות כדי לקבוע אם מספר 14 משקף מעבר מאוחר יותר, כרטיס קשור או טעות; מספר 17 נותר הכתובת המרכזית."], ["התאמה אישית ברשימת JDC", "לחפש ברשימת השמות של JDC את פאולה, מתי וגרסאות האיות; החיפוש שנחסם אינו מוכיח היעדרות."], ["מסלול המחנות של פאולה", "לאמת את שם המחנה הלא ברור בקורות החיים ואת הרצף המדויק בין טארנוב, פלאשוב, סקרז׳יסקו וצ׳נסטוחובה."]]
    },
    footer: { eyebrow: "ארכיון חי", note: "נבנה ממסמכים משפחתיים, גיליון משפחתי והקשר מארכיונים ציבוריים. עדכון אחרון: 10 בספטמבר 2026.", privacy: "אנשים החיים כיום אינם מתועדים כאן; טענות לא ודאיות מסומנות.", sources: "למקורות" }
  },
  de: {
    title: "Familienarchiv Simchowicz",
    brand: { title: "Simchowicz", subtitle: "Familienarchiv" },
    nav: { family: "Familie", photo: "Familienfoto", updates: "Neue Befunde", timeline: "Zeitleiste", places: "Orte", sources: "Quellen" },
    hero: {
      eyebrow: "Eine Familienerinnerung, noch in Forschung",
      title: "Von Berlin nach Tarnów — durch die Zerstörung Europas",
      lede: "Die dokumentierte Geschichte von Paula Pnina Simchowicz / Rapoport und der Familie Simchowicz: jüdisches Leben im Berlin der Zwischenkriegszeit, die Vertreibung nach Polen, Zwangsarbeit unter der NS-Besatzung und die Arbeit des Erinnerns. Ihr Leben endete tragisch am 19. Oktober 1994 beim Anschlag auf die Buslinie 5 in Tel Aviv.",
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
    photo: {
      kicker: "Familienfoto",
      title: "Ein Porträt im Familienarchiv",
      text: "Die Erwachsenen sind von links nach rechts als Paula, Shlomo, Mathes, Esther, Rosa und Isaac identifiziert. Die beiden Kinder unten sind Mina und Sascha; welches Kind welches ist, bleibt unbestätigt. Diese Identifizierung stammt aus der Familie.",
      alt: "Familienfoto: Paula, Shlomo, Mathes, Esther, Rosa und Isaac von links nach rechts; Mina und Sascha unten, Reihenfolge unklar",
      caption: "Familienangabe · Erwachsene von links nach rechts: Paula, Shlomo, Mathes, Esther, Rosa, Isaac · Kinder unten: Mina und Sascha, Reihenfolge unklar"
    },
    updates: {
      kicker: "Forschungsupdate · 7. September 2026",
      title: "Das Archivbild ist jetzt klarer",
      intro: "Eine neue Prüfung des Arolsen Archives, von Yad Vashem, des Berliner Adressbuchs, der neuen JRI-Unterlagen und israelischer Familienquellen klärt Paulas Identität und rekonstruiert einen wahrscheinlichen Haushalt vor dem Krieg. Offene Fragen bleiben sichtbar.",
      labels: { confirmed: "Bestätigte Quelle", likely: "Starke Identifizierung", family: "Familienzeugnis", open: "Offene Frage" },
      cards: [
        ["confirmed", "Paula und Pnina sind dieselbe Person", "Das offizielle israelische Gedenkregister nennt פנינה פאולה רפפורט שמחוביץ, am 22. Juni 1919 in Berlin geboren, Tochter von Esther und Matityahu. Es verzeichnet außerdem die Einwanderung im August 1947, die Ehe mit Shmuel Rapoport, eine Druckerei in Tel Aviv, zwei Kinder und ihren Tod beim Anschlag auf Buslinie 5 im Jahr 1994.", `<a href="${external.paulaDeathPage}" target="_blank" rel="noreferrer">Paulas Gedenkseite zum Tod öffnen ↗</a>`],
        ["confirmed", "Eine größere Arolsen-Gruppe wird sichtbar", "Arolsen-Karten identifizieren Rosa (1. Januar 1922), Minni (7. September 1924) und Sascha/Susi (18. Dezember 1929), alle in Berlin geboren und polnische Staatsangehörige, mit dem Vater Mates und der Mutter Erna/Ester geborene Offen. Die Datensätze 12674257 und 12674258 gehören zur selben Person, Susi. 12674261 ist ein zusätzlicher Minni-Datensatz. Sala und Roza werden als ungeklärte Datensätze verlinkt und nicht mit Salo/Shlomo oder Rosa/Rosa Shoshana zusammengeführt.", `<a href="${external.arolsenRosa}" target="_blank" rel="noreferrer">Rosa ↗</a> · <a href="${external.arolsenMinni}" target="_blank" rel="noreferrer">Minni ↗</a> · <a href="${external.arolsenMinniAlt}" target="_blank" rel="noreferrer">Minni, zusätzlicher Datensatz ↗</a> · <a href="${external.arolsenSascha}" target="_blank" rel="noreferrer">Susi, Datensatz 12674257 ↗</a> · <a href="${external.arolsenSusi}" target="_blank" rel="noreferrer">Susi, Datensatz 12674258 ↗</a> · <a href="${external.arolsenSala}" target="_blank" rel="noreferrer">Sala ↗</a> · <a href="${external.arolsenRoza}" target="_blank" rel="noreferrer">Roza ↗</a>`],
        ["confirmed", "Salos Zeugnis bestätigt das Familienhaus und die Fluchtroute", "Das Yad-Vashem-Zeugnis identifiziert Shlomo Salo Simchowicz, 1923 in Berlin geboren. Er sagt, dass alle Kinder in der Grenadierstraße 17 geboren wurden, nennt die Geschwister in ihrer Reihenfolge, identifiziert seinen Vater als Matityahu (genannt Mates/Mathes) und seine Mutter als Esther geborene Offen und schildert seine Deportation nach Zbąszyń am 29. Oktober 1938, die Flucht über Tarnów, Białystok, Wilna, Kaunas, Schweden, Amsterdam, Brüssel, Paris, Marseille und Beirut sowie die Ankunft in Palästina am 1. April 1940. Außerdem beschreibt er Familienpost aus Tarnów bis 1942.", `<a href="${external.yadvashemSaloTestimony}" target="_blank" rel="noreferrer">Salos Zeugnis lesen ↗</a>`],
        ["confirmed", "Drei Schicksale in Tarnów 1943 sind jetzt dokumentiert", "Die neu bereitgestellten Pages of Testimony von Yad Vashem verzeichnen Mathes/Mates Simchowicz, Mina Simchowicz und Sascha Simchowicz als 1943 in Tarnów verstorben. Das stärkt die Rekonstruktion des Kriegsschicksals; Salo/Sala und Roza/Rosa bleiben ungeklärt.", `<a href="${external.yadvashemNames}" target="_blank" rel="noreferrer">Yad-Vashem-Namensdatenbank ↗</a>`],
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
      text: "Paulas israelischer Gedenkeintrag nennt Matityahu und Esther als ihre Eltern. Berliner Adressbuch, Arolsen-Karten und die neu bereitgestellten Pages of Testimony von Yad Vashem liefern nun starke unabhängige Hinweise auf den Haushalt vor dem Krieg und die Todesfälle von Mathes/Mates, Mina und Sascha in Tarnów 1943. Die Familientabelle bewahrt weitere, noch zu bestätigende Namen.",
      parents: "Eltern",
      parent1: ["Mates / Matityahu Simchowicz", "ca. 1889 · Nowy Sącz · in Tarnów 1943 gestorben", "Geburtsort aus Familienquelle; Salo erinnert sich an einen warmen religiösen Haushalt und beschreibt seinen Vater als Kaufmann mit einem Milch- und Eiergeschäft in der Grenadierstraße; Tod in Tarnów 1943 auf einer Yad-Vashem-Page-of-Testimony verzeichnet"],
      parent2: ["Ester / Esther / Erna Simchowicz", "ca. 1896 · Polen", "geborene Offen; Salos Zeugnis verortet ihre Familie in Dąbrowa bei Oświęcim; genauer Ort muss noch geprüft werden"],
      leadTitle: "Arolsen ergänzt einen wahrscheinlichen Haushalt",
      leadText: "Arolsen-Karten identifizieren Rosa, Minni und Sascha/Susi als in Berlin geborene polnische Staatsangehörige mit dem Vater Mates und der Mutter Erna/Ester geborene Offen. Salos Yad-Vashem-Zeugnis bestätigt die Grenadierstraße 17 als Familienhaus, sagt, dass alle Kinder dort geboren wurden, nennt die Geschwister und verfolgt seinen Weg von der Zbąszyń-Deportation 1938 über Tarnów, Białystok und Wilna bis nach Palästina 1940. Yad-Vashem-Pages-of-Testimony ergänzen die Einträge um den Tod von Mathes/Mates, Mina und Sascha in Tarnów 1943. Die Datensätze 12674257 und 12674258 gehören zur selben Person, Susi; 12674261 ist ein zusätzlicher Minni-Datensatz. Sala und Roza bleiben getrennte, ungeklärte Datensätze und werden nicht mit Salo/Shlomo oder Rosa/Rosa Shoshana zusammengeführt.",
      leadLinks: `<a href="${external.arolsenRosa}" target="_blank" rel="noreferrer">Rosas Karte ↗</a> · <a href="${external.arolsenMinni}" target="_blank" rel="noreferrer">Minnis Karte ↗</a> · <a href="${external.arolsenMinniAlt}" target="_blank" rel="noreferrer">Zusätzlicher Minni-Datensatz ↗</a> · <a href="${external.arolsenSascha}" target="_blank" rel="noreferrer">Susi, Datensatz 12674257 ↗</a> · <a href="${external.arolsenSusi}" target="_blank" rel="noreferrer">Susi, Datensatz 12674258 ↗</a> · <a href="${external.arolsenSala}" target="_blank" rel="noreferrer">Sala ↗</a> · <a href="${external.arolsenRoza}" target="_blank" rel="noreferrer">Roza ↗</a> · <a href="${external.addressBook}" target="_blank" rel="noreferrer">Adressbucheintrag von 1929 ↗</a>`,
      children: "Kinder und wahrscheinliche Geschwister in den Quellen",
      childData: [["Paula Pnina", "22. Juni 1919 · Berlin", "direct"], ["Isaac Eliezer", "Geburtsdatum noch nicht gefunden", "family"], ["Rosa Shoshana", "1. Januar 1922 · Berlin", "arolsen"], ["Salo / Shlomo", "24. Mai 1923 · Berlin · am 1. April 1940 in Palästina angekommen", "direct"], ["Mina / Minni", "7. September 1924 · Berlin · in Tarnów 1943 gestorben", "direct"], ["Sascha / Susi", "18. Dezember 1929 · Berlin · in Tarnów 1943 gestorben", "direct"]],
      direct: "Direkte Dokumente", childStatus: { direct: "Direkte Dokumente", arolsen: "Arolsen-Eintrag", family: "Familienangabe" }, familyRecord: "Familienangabe", lead: "Forschungshinweis", note: "Der Titel der Tabelle enthält außerdem „Ofen“. Die genaue Verbindung zur Familie Simchowicz ist noch offen."
    },
    timeline: {
      kicker: "Paulas Leben", title: "Ein Leben, nachgezeichnet durch Dokumente", intro: "Lebenslauf, eidesstattliche Erklärung, Berliner Nachweis, Sterbeurkunde und Korrespondenz ergeben eine ungewöhnlich durchgehende Spur von der Kindheit in Berlin bis zum Nachkriegsleben in Israel.",
      events: [["1919", "In Berlin geboren", "Paula wurde am 22. Juni 1919 als Paula Simchowicz geboren, Tochter von Mates und Ester/Esther Simchowicz.", "Lebenslauf · Berliner Nachweis · Sterbeurkunde"], ["ca. 1925", "Jüdische Schulbildung", "Mit etwa sechs Jahren kam sie in die jüdische Schule in der Rykestraße. Vier Jahre später besuchte sie eine Mädchenmittelschule in der Kaiserstraße, später in der Großen Hamburger Straße.", "Lebenslauf"], ["1933", "Beginn der Arbeit", "Sie verließ die Schule vor Abschluss und erlernte bei Paliwoda in der Hufelandstraße den Beruf der Damenschneiderin. Ihr Monatslohn stieg nach eigener Angabe von 80 auf 220 Reichsmark.", "Lebenslauf"], ["Sept. 1938", "Deutschland nach Zbąszyń", "In ihrer eidesstattlichen Erklärung schreibt sie, dass sie Deutschland verließ und nach Zbąszyń in Polen ging. Die Familiensammlung beschreibt dies als Vertreibung polnischer Juden aus Berlin.", "Eidesstattliche Erklärung 1955 · Familienbrief"], ["Jom Kippur 1939", "Zwangsarbeit in Tarnów", "Ein deutscher Soldat verhaftete sie auf der Straße. Sie wurde in ein bewachtes Gebäude außerhalb Tarnóws gebracht und etwa 14 Stunden täglich zum Nähen von SS-Uniformen gezwungen, ohne Lohn.", "Eidesstattliche Erklärung 1955"], ["1939–Juni 1941", "Gefangen in einer Werkstatt", "Sie beschreibt Isolation, SS-Bewachung, ein Todesstrafenverbot zu gehen und 300 Gramm Brot als einzige Nahrung. Im Juni 1941 wurde sie in eine Schneiderei in Tarnów verlegt.", "Eidesstattliche Erklärung 1955"], ["1941–1945", "Lager und Befreiung", "Der Lebenslauf nennt Płaszów und einen Ort, der wie Skarżysko aussieht, danach Częstochowa. Der Ortsname ist im Scan unklar und bleibt ein Forschungshinweis.", "Lebenslauf · historischer Kontext"], ["Aug. 1947", "Ein neues Leben in Israel", "Das offizielle israelische Gedenkregister nennt die Ankunft in Israel im August 1947, die Ehe mit Shmuel Rapoport und eine gemeinsame Druckerei in Tel Aviv. Die Familienerinnerung ergänzt ein Treffen über die UNRRA und etwa ein Jahr in Italien vor der Einwanderung.", "Offizieller Gedenkeintrag · Familienerinnerung"], ["1955", "Eidesstattliche Aussage", "In Tel Aviv bestätigte Paula ihre Geschichte an Eides statt. Diese Aussage gehört zu den wichtigsten Primärquellen der Sammlung.", "Aussage vom 4. Mai 1955"], ["1994", "Pnina Rapoport", "Die israelische Sterbeurkunde führt sie als Pnina Rapoport, geboren am 22. Juni 1919 und gestorben am 19. Oktober 1994 in Tel Aviv–Jaffa.", `<a href="${external.paulaDeathPage}" target="_blank" rel="noreferrer">LAAD-Gedenkseite zu ihrem Tod ↗</a>`]]
    },
    places: {
      kicker: "Eine Geografie von Bruch und Überleben", title: "Die Route, die die Dokumente zeigen", intro: "Jeder Ort ist mehr als ein Punkt auf der Karte: Er markiert eine Veränderung durch Bildung, Arbeit, Verfolgung, Gefangenschaft oder Überleben.", cards: [["01", "Berlin", "Geburt, Schule, Arbeit und die dokumentierte Familienadresse Grenadierstraße 17."], ["02", "Zbąszyń", "Paulas eigener Zielort nach dem Verlassen Deutschlands im September 1938."], ["03", "Tarnów", "Salo traf dort seinen Vater und Paula wieder, lernte Elektrotechnik und erhielt bis 1942 Familienpost; Paula musste dort arbeiten. Die Yad-Vashem-Pages-of-Testimony verzeichnen den Tod von Mathes/Mates, Mina und Sascha dort im Jahr 1943."], ["04", "Płaszów → Skarżysko → Częstochowa", "Die Kriegsroute im Lebenslauf; „Skarżysko“ ist eine begründete Lesung eines unklaren Scans."], ["05", "Tel Aviv", "Nachkriegsheim, eidesstattliche Aussage 1955 und Paulas Tod 1994."]], route: "Berlin → Zbąszyń → Tarnów → Lager → Israel"
    },
    testimony: {
      kicker: "Paulas Stimme", title: "Was ihre eigene Aussage erzählt", quote: "Wir mussten durchschnittlich vierzehn Stunden täglich arbeiten. Wir erhielten keinen Lohn; unsere einzige Nahrung waren 300 Gramm Brot.", cite: "Paula Rapoport, eidesstattliche Erklärung, Tel Aviv, 4. Mai 1955", heading: "Ein seltenes Zeugnis aus erster Person", text: "Die Erklärung von 1955 präzisiert den Lebenslauf. Sie datiert den Beginn der Zwangsarbeit auf Ende September 1939, Jom Kippur, und hält Isolation, SS-Bewachung, das Verbot zu gehen, lange Schichten, Hunger und unbezahlte Arbeit in Paulas eigenen Worten fest.", facts: [["Identität", "Paula Simchowicz → Pnina Rapoport"], ["Familie", "Tochter von Mates und Ester/Esther"], ["Arbeit", "Damenkleidung in Berlin; Zwangsnähen in Tarnów"], ["Ergebnis", "Sie überlebte und baute sich in Israel ein Leben auf"]]
    },
    sources: {
      kicker: "Belege und Kontext", title: "Eine transparente Quellenkette", intro: "Das Archiv unterscheidet zwischen direkt dokumentierten Fakten, Angaben aus der Familientabelle und historischem Kontext oder Forschungshinweisen.", filters: { all: "Alle", direct: "Direkte Dokumente", family: "Familienquelle", context: "Historischer Kontext", lead: "Forschungshinweis" },
      cards: [["direct", "Paulas Dokumentensammlung", "Berliner Identitätsnachweis, israelische Sterbeurkunde, Rotkreuz-Formulare, Familienkorrespondenz sowie Kopien des Lebenslaufs und der eidesstattlichen Erklärung.", "Paula documents · S. 1–21"], ["direct", "Paulas Lebenslauf", "Deutscher Lebenslauf: Geburt, Schulen, Arbeit, Vertreibung, Zwangsarbeit, Lagerfolge und Befreiung.", "Paula Simchovicz CV · S. 1"], ["direct", "Eidesstattliche Erklärung 1955", "Paulas Bericht aus erster Person über Zbąszyń, Tarnów, SS-Uniformen, Hunger, Gefangenschaft und den Transfer 1941.", "Gescannte Erklärung · 4. Mai 1955"], ["direct", "Jüdisches Berliner Adressbuch 1929", "Das jüdische Adressbuch verzeichnet Mathes Sinechowitz an der Grenadierstraße 17 in Berlin. Dies ist die Grundlage für die korrigierte Familienadresse.", `<a href="${external.addressBook}" target="_blank" rel="noreferrer">Adressbucheintrag öffnen ↗</a>`], ["direct", "Israelischer Gedenkeintrag und Todesseite", "Die offizielle LAAD-Gedenkseite führt Pnina Paula Rapoport Simchowicz als Tochter von Esther und Matityahu, mit Einwanderung nach Israel im August 1947, und dokumentiert ihren Tod am 19. Oktober 1994 beim Anschlag auf die Buslinie 5 in Tel Aviv.", `<a href="${external.paulaDeathPage}" target="_blank" rel="noreferrer">Paulas Gedenkseite zum Tod öffnen ↗</a>`], ["direct", "Arolsen-Karten der Geschwister", "Rosa, Minni und Sascha/Susi erscheinen als in Berlin geborene polnische Staatsangehörige mit dem Vater Mates und der Mutter Erna/Ester geborene Offen. Das stützt den wahrscheinlichen Haushalt, nennt Paula aber nicht.", `<a href="${external.arolsenRosa}" target="_blank" rel="noreferrer">Rosa</a> · <a href="${external.arolsenMinni}" target="_blank" rel="noreferrer">Minni</a> · <a href="${external.arolsenSascha}" target="_blank" rel="noreferrer">Sascha</a>`], ["family", "Familientabelle", "Arbeitsübersicht mit Namen, Geburtsjahren oder -daten, Orten und Schicksalsfeldern im Projekt Simchowicz–Ofen.", `<a href="${sheetUrl}" target="_blank" rel="noreferrer">Familientabelle öffnen ↗</a>`], ["family", "Familienerinnerung", "Ein veröffentlichtes Familieninterview ergänzt Paulas Nachkriegsweg: Treffen mit Shmuel über die UNRRA, etwa ein Jahr in Italien und danach Israel. Diese Angaben bleiben als mündliche Familienquelle gekennzeichnet.", `<a href="${external.oralHistory}" target="_blank" rel="noreferrer">Interview lesen ↗</a>`], ["family", "Genealogie-Profil", "Öffentliches Profil, das Paula Pnina Rapoport mit dem Namen Simchowicz und den Daten 1919–1994 verbindet.", `<a href="${profileUrl}" target="_blank" rel="noreferrer">Genealogie-Profil öffnen ↗</a>`], ["context", "Zbąszyń-Unterlagen", "Verzeichnis des Arolsen Archives zu polnischen Juden, die im Oktober 1938 aus dem Deutschen Reich ausgewiesen wurden, mit Namen, Eltern, Geburtsdaten, Adressen und Zielen.", `<a href="${external.arolsen}" target="_blank" rel="noreferrer">Arolsen Archives ↗</a>`], ["context", "JDC-Flüchtlingsliste", "Die JDC-Liste enthält Flüchtlinge aus Zbąszyń und Angehörige im Ausland. Eine personenscharfe Übereinstimmung der Familie wurde in diesem Durchgang noch nicht bestätigt.", `<a href="${external.jdc}" target="_blank" rel="noreferrer">JDC Archives ↗</a> · <a href="${external.jdcHelp}" target="_blank" rel="noreferrer">Suchhilfe ↗</a>`], ["context", "Berlins jüdisches Viertel", "Grenadierstraße lag im Scheunenviertel, einem wichtigen Zentrum osteuropäisch-jüdischen Lebens. Das ist historischer Kontext für Paula in Berlin, kein Beweis für eine bestimmte Schule oder ein bestimmtes Gebäude.", `<a href="${external.fuBerlin}" target="_blank" rel="noreferrer">FU Berlin ↗</a> · <a href="${external.jewishMuseum}" target="_blank" rel="noreferrer">Jüdisches Museum Berlin ↗</a>`], ["context", "Tarnów unter Besatzung", "USHMM-Kontext zu Besatzung, Zwangsarbeit, Ghetto, Deportationen und der Zerstörung der jüdischen Gemeinde Tarnóws.", `<a href="${external.usHoloTarnow}" target="_blank" rel="noreferrer">USHMM ↗</a>`], ["context", "Weiterführende Literatur", "Dohrn und Pickhan, Transit and Transformation (2010); Anne-Christin Sass, Berliner Luftmenschen (2012); Karsten Krampitz, Pogrom im Scheunenviertel (2023).", "Bibliografie aus der Familienforschung"], ["lead", "JRI-Poland-Material", "Der neue JRI-Bericht enthält einen möglichen Bezug zu einem älteren polnischen Zivilstandsdatensatz. Die genauen Indexdaten werden wegen der Veröffentlichungsbeschränkung des Berichts nicht auf dieser öffentlichen Seite wiedergegeben; der Primärdatensatz muss noch geprüft werden.", `<a href="${external.polishArchive}" target="_blank" rel="noreferrer">Bestände in Nowy Sącz durchsuchen ↗</a>`], ["lead", "Die Skarżysko-Frage", "Im Lebenslauf steht offenbar „Skarsicz“. Skarżysko-Kamienna ist eine plausible Lesung, aber die individuelle Identifizierung muss noch bestätigt werden.", `<a href="${external.usHoloSkarzysko}" target="_blank" rel="noreferrer">Lagerkontext ↗</a>`]], ledgerHead: ["Quelle", "Typ", "Beitrag"], ledger: [["Paula Simchovicz CV.pdf", "Direktes Dokument", "Geburt und Schule in Berlin; Paliwoda; Vertreibung; Lager; Befreiung."], ["Scanned_20260901-1028.pdf", "Direktes Dokument", "Eidesstattliche Aussage vom 4. Mai 1955; Chronologie Zbąszyń–Tarnów."], ["פאולה מסמכים.pdf", "Direkte Dokumente", "Grenadierstraße 17; Sterbeurkunde; Rotes Kreuz; Korrespondenz 1939–1940."], ["Jüdisches Berliner Adressbuch 1929", "Direkte Quelle", "Mathes Sinechowitz an der Grenadierstraße 17."], ["Israelischer Gedenkeintrag", "Direkte Quelle", "Pnina Paula Rapoport Simchowicz; Tochter von Esther und Matityahu; Einwanderung nach Israel im August 1947."], ["Arolsen Archives", "Direkte Quelle", "Karten zu Rosa, Minni und Sascha/Susi: Berlin, polnische Staatsangehörigkeit, Vater Mates, Mutter Erna/Ester née Offen."], ["JRI-Poland-Material", "Private Forschungsnotiz", "Die detaillierten Indexdaten werden bis zur Klärung der Veröffentlichungsrechte nicht öffentlich wiedergegeben; der Primärdatensatz muss noch geprüft werden."], ["Familientabelle", "Familienquelle", "Vorläufige Eltern, Kinder, Geburtsdaten und Schicksalsangaben."], ["Öffentliche Archive", "Kontext / Hinweise", "Arolsen, JDC, USHMM, Jüdisches Museum Berlin und FU Berlin."]]
    },
    questions: {
      kicker: "Die Forschung geht weiter", title: "Was noch gefunden werden muss", text: "Eine gute Familiengeschichte macht Unsicherheiten sichtbar. Diese Fragen können aus dem Entwurf eine vollständig belegte Genealogie machen.", items: [["Mates und Ester nach 1938", "In den Zbąszyń-Unterlagen von Arolsen und JDC suchen und anschließend Ghetto- und Deportationsunterlagen aus Tarnów verfolgen."], ["Die Schicksale der Geschwister", "Isaac Eliezer, Rosa, Salo, Mina und Sascha in Überlebenden-, Opfer-, Ghetto-, Lager- oder Nachkriegsunterlagen bestätigen."], ["Salo / Sala", "Das Yad-Vashem-Dokument 4115983 mit dem Titel Shlomo Simkhovich gemeinsam mit dem Postkartenbeleg „S. Simchowicz“ verwenden und anschließend mit dem Arolsen-Datensatz 78813850 vergleichen. Sala ist nicht als Salo/Shlomo bestätigt und bleibt getrennt."], ["Roza / Rosa", "Den Arolsen-Datensatz 78827309 mit Rosa Shoshana vergleichen. Roza ist nicht als Rosa bestätigt und bleibt eine getrennte, ungeklärte Identität."], ["Ester / Esther / Erma / Erna", "Die Schreibvarianten des Namens der Mutter durch Geburts-, Heirats-, Flüchtlings- oder Berliner Melderegister klären."], ["Die Verbindung zu Ofen", "Feststellen, ob „Ofen“ ein Mädchenname, ein Ehename oder ein verbundener Familienzweig ist."], ["Der ursprüngliche Zivilstandsdatensatz", "Für die Veröffentlichung des JRI-Materials eine Genehmigung einholen und den Forschungshinweis anschließend mit dem ursprünglichen Zivilstandsdatensatz aus Nowy Sącz prüfen."], ["Grenadierstraße 14 oder 17", "Mit Berliner Unterlagen klären, ob Nr. 14 einen späteren Umzug, eine verbundene Karte oder eine Abweichung bezeichnet; Nr. 17 bleibt die zentrale Adresse."], ["Personenabgleich in der JDC-Liste", "Paula, Mates und Schreibvarianten im JDC-Namensindex suchen; die blockierte Suche beweist keine Abwesenheit."], ["Paulas Lagerrute", "Den unklaren Lagernamen im Lebenslauf sowie die genaue Folge Tarnów, Płaszów, Skarżysko und Częstochowa bestätigen."]]
    },
    footer: { eyebrow: "Ein lebendes Archiv", note: "Erstellt aus Familiendokumenten, einer Familientabelle und öffentlichem Archivkontext. Aktualisiert am 10. September 2026.", privacy: "Lebende Personen werden hier nicht profiliert; unsichere Angaben sind gekennzeichnet.", sources: "Quellen ansehen" }
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

const additionalSaloEvidence = {
  de: {
    card: ["direct", "Yad-Vashem-Zeugnis: Shlomo Salo Simchowicz", "Das Interview vom 19. November 2001 identifiziert Shlomo Salo Simchowicz, 1923 in Berlin geboren. Er beschreibt das Familienhaus in der Grenadierstraße 17, seine Geschwister und Eltern, die Deportation nach Zbąszyń 1938, die Fluchtroute über Tarnów, Białystok und Wilna, die Ankunft in Palästina am 1. April 1940 sowie Familienpost aus Tarnów bis 1942. Es bleibt vom Arolsen-Datensatz 78813850 (Sala) getrennt.", `<a href="${external.yadvashemSaloTestimony}" target="_blank" rel="noreferrer">Das vollständige Zeugnis öffnen ↗</a>`],
    ledger: ["Yad-Vashem-Zeugnis 4115983", "Direkte Quelle", "Interview mit Shlomo Salo Simchowicz, Berlin 1923: Familienhaus, Geschwister und Eltern, Zbąszyń-Deportation, Fluchtweg, Ankunft in Palästina am 1. April 1940 und Familienkorrespondenz aus Tarnów bis 1942; getrennt vom Arolsen-Datensatz Sala 78813850."]
  }
};

Object.entries(additionalSaloEvidence).forEach(([lang, evidence]) => {
  t[lang].sources.cards.splice(5, 0, evidence.card);
  t[lang].sources.ledger.splice(5, 0, evidence.ledger);
});

const additionalYadVashemFates = {
  en: {
    card: ["direct", "Yad Vashem Pages of Testimony: three 1943 Tarnów deaths", "The newly supplied Pages of Testimony record Mathes/Mates Simchowicz, Mina Simchowicz, and Sascha Simchowicz as having died in Tarnów in 1943. The scans strengthen the wartime reconstruction but do not resolve Salo/Sala or Roza/Rosa.", `<a href="${external.yadvashemNames}" target="_blank" rel="noreferrer">Yad Vashem Names database ↗</a>`],
    ledger: ["Yad Vashem Pages of Testimony", "Direct source", "Family-supplied scans record Mathes/Mates, Mina, and Sascha Simchowicz as dying in Tarnów in 1943; spelling and individual-record links remain to be reconciled."]
  },
  he: {
    card: ["direct", "דפי עדות של יד ושם: שלושה מקרי מוות בטארנוב ב־1943", "דפי העדות החדשים שהועברו מתעדים את מתֶס/מתתיהו שמחוביץ, את מינה ואת סשה כמי שמתו בטארנוב בשנת 1943. הסריקות מחזקות את שחזור גורל המשפחה בזמן המלחמה, אך אינן פותרות את שאלת סאלו/סאלה או רוזה/Roza.", `<a href="${external.yadvashemNames}" target="_blank" rel="noreferrer">מאגר השמות של יד ושם ↗</a>`],
    ledger: ["דפי עדות של יד ושם", "מקור ישיר", "סריקות שהועברו על ידי המשפחה מתעדות את מתֶס/מתי, מינה וסשה שמחוביץ כמי שמתו בטארנוב בשנת 1943; גרסאות האיות וקישורי הרשומות האישיים עדיין דורשים יישוב."]
  },
  de: {
    card: ["direct", "Yad Vashem Pages of Testimony: drei Todesfälle in Tarnów 1943", "Die neu bereitgestellten Pages of Testimony verzeichnen Mathes/Mates Simchowicz, Mina Simchowicz und Sascha Simchowicz als 1943 in Tarnów verstorben. Die Scans stärken die Rekonstruktion des Kriegsschicksals, klären aber Salo/Sala oder Roza/Rosa noch nicht.", `<a href="${external.yadvashemNames}" target="_blank" rel="noreferrer">Yad-Vashem-Namensdatenbank ↗</a>`],
    ledger: ["Yad Vashem Pages of Testimony", "Direkte Quelle", "Von der Familie bereitgestellte Scans verzeichnen Mathes/Mates, Mina und Sascha Simchowicz als 1943 in Tarnów gestorben; Schreibweisen und direkte Datensatzlinks müssen noch abgeglichen werden."]
  }
};

Object.entries(additionalYadVashemFates).forEach(([lang, evidence]) => {
  t[lang].sources.cards.splice(6, 0, evidence.card);
  t[lang].sources.ledger.splice(6, 0, evidence.ledger);
});

t.de.questions.items[1][1] = "Yad Vashem verzeichnet nun Mathes/Mates, Mina und Sascha als 1943 in Tarnów gestorben. Die übrigen Geschwister müssen noch bestätigt und die Namensvarianten in den Quellen abgeglichen werden.";
t.he.questions.items[2][1] = "עדותו של שלמה סאלו שמחוביץ, יליד ברלין 1923, מתארת את בית המשפחה בגרנָדירשטראסה 17 ואת מסלולו בשנים 1938–1940. יש להשוות את הפרטים ואת ההתכתבויות מטארנוב לרשומת ארולסן 78813850. סאלה עדיין אינו מזוהה כסאלו/שלמה ולכן יש להשאיר את הרשומות נפרדות.";
t.de.questions.items[2][1] = "Das Zeugnis identifiziert Shlomo Salo Simchowicz, 1923 in Berlin geboren, und beschreibt seine Familie in der Grenadierstraße 17 sowie den Fluchtweg 1938–1940. Diese Angaben und die Tarnów-Korrespondenz müssen mit dem Arolsen-Datensatz 78813850 verglichen werden. Sala ist weiterhin nicht als Salo/Shlomo bestätigt und bleibt getrennt.";

const testimonyChronologyQuestion = {
  en: ["The 1942/1943 deportation chronology", "Salo recalled that Paula returned from work in 1942 to an empty family home and was told that the family had been taken to Auschwitz. This second-hand recollection must be reconciled with the Yad Vashem Pages of Testimony recording Mathes/Mates, Mina, and Sascha as dying in Tarnów in 1943."],
  he: ["ציר הגירוש 1942/1943", "סאלו נזכר שפאולה חזרה מהעבודה בשנת 1942 לבית משפחה ריק ונאמר לה שהמשפחה נלקחה לאושוויץ. זו עדות מכלי שני שיש ליישב עם דפי העדות של יד ושם, המתעדים את מתֶס/מתי, מינה וסשה כמי שמתו בטארנוב בשנת 1943."],
  de: ["Die Deportationschronologie 1942/1943", "Salo erinnerte sich, dass Paula 1942 von der Arbeit in ein leeres Familienhaus zurückkehrte und erfuhr, die Familie sei nach Auschwitz gebracht worden. Diese Erinnerung aus zweiter Hand muss mit den Yad-Vashem-Pages-of-Testimony abgeglichen werden, die Mathes/Mates, Mina und Sascha als 1943 in Tarnów gestorben verzeichnen."]
};

Object.entries(testimonyChronologyQuestion).forEach(([lang, item]) => {
  t[lang].questions.items.splice(3, 0, item);
});

const isaacBookEvidence = {
  en: {
    update: ["family", "A family book fills in Isaac Eliezer’s life", "A book written by Isaac’s daughter, Esther Abraham, reconstructs his life from family interviews, personal papers, and archival material. It identifies him as Isaac Eliezer (Leizer) Simchowicz, born in Berlin in 1920; describes his education at Große Hamburger Straße, Etz Israel, a commercial school, the Baranowicz and Kamenets yeshivot, and the Berlin Rabbinical Seminary; records his move to Riga in November 1938 and arrival in Haifa at the end of August 1939; and follows his postwar work among displaced-persons camps and immigration transports in Europe from 1946 to 1949. It also records his marriage in 1951, three children born in 1953, 1955, and 1967, and his sudden death on 2 December 1982 while arranging early retirement at Mizrahi Bank. The author cautions that the narrative was assembled from other people’s memories and documents, so it remains a family source requiring further verification.", `<a href="${external.isaacBook}" target="_blank" rel="noreferrer">Read the family book ↗</a>`],
    source: ["family", "Isaac Eliezer family book", "A Hebrew family history written by his daughter, Esther Abraham. It adds Isaac’s 1920 Berlin birth, nickname Leizer, schooling and yeshiva years, escape to Riga and Palestine in 1938–39, postwar work with displaced-persons and immigration transports, marriage and children, and death on 2 December 1982. The author explicitly notes that the biography was reconstructed from relatives and documents rather than from Isaac’s own memoir.", `<a href="${external.isaacBook}" target="_blank" rel="noreferrer">Open the Hebrew book ↗</a>`],
    ledger: ["אבני דרך – יצחק אליעזר שמחוביץ / Isaac Eliezer family book", "Family source", "Daughter Esther Abraham’s Hebrew biography: Isaac’s Berlin childhood, religious education, Riga and Palestine route, 1946–49 displaced-persons work, Israeli family life, and death in 1982; dates and interpretations remain source-labeled."],
    question: ["Isaac’s documentary trail", "The family book supplies a detailed narrative, but the underlying certificates, school records, yeshiva records, immigration file, UNRRA/Jewish Agency personnel files, and Mizrahi Bank employment records should still be located to verify the chronology."],
    familyMeta: "1920 · Berlin · died 2 December 1982 · married 1951; three children (family book)",
    familyNote: "The family book adds Isaac’s nickname Leizer, his Berlin and yeshiva education, Riga–Palestine escape, postwar work with displaced-persons and immigration transports, marriage in 1951, three children, and death in 1982. It is a family reconstruction, not an independent civil-register proof.",
    leadAddition: " The family book independently confirms No. 17 as the remembered family home; a 29 March 1938 Rabbinical Seminary certificate gives Isaac’s address as No. 14, so that second address remains a document-level discrepancy rather than a replacement."
  },
  he: {
    update: ["family", "ספר משפחתי משלים את סיפור חייו של יצחק אליעזר", "ספר שכתבה בתו של יצחק, אסתר אברהם, משחזר את חייו מתוך ראיונות משפחתיים, מסמכים אישיים וחומר ארכיוני. הספר מזהה אותו כיצחק אליעזר (לייזר) שמחוביץ, יליד ברלין 1920; מתאר את לימודיו בגרוסה המבורגר שטראסה, בעדת ישראל, בבית ספר מסחרי, בישיבות ברנוביץ׳ וקמניץ׳ ובבית המדרש לרבנים בברלין; מתעד את נסיעתו לריגה בנובמבר 1938 ואת הגעתו לחיפה בסוף אוגוסט 1939; ומתאר את עבודתו לאחר המלחמה במחנות עקורים ובארגון הובלות עלייה באירופה בשנים 1946–1949. הספר מוסיף כי נישא ב־1951, נולדו לו שלושה ילדים בשנים 1953, 1955 ו־1967, והוא נפטר בפתאומיות ב־2 בדצמבר 1982 בעת שסידר פרישה מוקדמת בבנק המזרחי. המחברת מזהירה שהסיפור נאסף מזיכרונות וממסמכים של אחרים, ולכן זהו מקור משפחתי שדורש אימות נוסף.", `<a href="${external.isaacBook}" target="_blank" rel="noreferrer">לקריאת הספר המשפחתי ↗</a>`],
    source: ["family", "הספר המשפחתי על יצחק אליעזר", "היסטוריה משפחתית בעברית שכתבה בתו, אסתר אברהם. הספר מוסיף את לידתו של יצחק בברלין ב־1920, הכינוי לייזר, לימודיו, הבריחה לריגה ולארץ ישראל בשנים 1938–1939, עבודתו במחנות העקורים ובהעפלה בשנים 1946–1949, חיי המשפחה בישראל ומותו ב־2 בדצמבר 1982. המחברת מציינת במפורש שהביוגרפיה נבנתה מזיכרונות וממסמכים של אחרים ולא מאוטוביוגרפיה של יצחק.", `<a href="${external.isaacBook}" target="_blank" rel="noreferrer">פתיחת הספר בעברית ↗</a>`],
    ledger: ["אבני דרך – יצחק אליעזר שמחוביץ", "מקור משפחתי", "ביוגרפיה עברית מאת הבת אסתר אברהם: ילדות בברלין, לימודי קודש, מסלול ריגה–ארץ ישראל, פעילות במחנות עקורים בשנים 1946–1949, חיי משפחה ומותו ב־1982; התאריכים והפרשנות מסומנים כמקור משפחתי."],
    question: ["התיעוד הארכיוני של יצחק", "הספר המשפחתי מספק סיפור חיים מפורט, אך עדיין יש לאתר תעודות, רישומי בתי ספר וישיבות, תיק עלייה, תיקי אונר״א/הסוכנות היהודית ורישומי העבודה בבנק המזרחי כדי לאמת את הרצף."],
    familyMeta: "1920 · ברלין · נפטר ב־2 בדצמבר 1982 · נישא ב־1951; שלושה ילדים (הספר המשפחתי)",
    familyNote: "הספר המשפחתי מוסיף את הכינוי לייזר, את לימודיו בברלין ובישיבות, את מסלול הבריחה לריגה ולארץ ישראל, את עבודתו במחנות עקורים ובהובלות עלייה, את נישואיו ב־1951, שלושת ילדיו ומותו ב־1982. זהו שחזור משפחתי, ולא הוכחה עצמאית מרישום אזרחי.",
    leadAddition: " הספר המשפחתי מאשר אף הוא את זיכרון הבית במספר 17; תעודה מבית המדרש לרבנים מ־29 במרץ 1938 מציינת את כתובתו של יצחק במספר 14, ולכן הכתובת השנייה נשארת פער בין מסמכים ולא תחליף למספר 17."
  },
  de: {
    update: ["family", "Ein Familienbuch ergänzt Isaac Eliezers Lebensweg", "Ein von Isaacs Tochter Esther Abraham verfasstes Buch rekonstruiert sein Leben aus Familieninterviews, persönlichen Papieren und Archivmaterial. Es identifiziert ihn als Isaac Eliezer (Leizer) Simchowicz, 1920 in Berlin geboren; beschreibt seine Ausbildung an der Großen Hamburger Straße, in der orthodoxen Etz-Israel-Schule, an einer Handelsschule, in den Jeschiwot Baranowicz und Kamenets sowie am Berliner Rabbinerseminar; dokumentiert seine Übersiedlung nach Riga im November 1938 und seine Ankunft in Haifa Ende August 1939; und verfolgt seine Nachkriegsarbeit in DP-Lagern und bei der Organisation von Einwanderungstransporten in Europa von 1946 bis 1949. Hinzu kommen seine Heirat 1951, drei Kinder aus den Jahren 1953, 1955 und 1967 sowie sein plötzlicher Tod am 2. Dezember 1982, als er bei der Mizrahi Bank den Vorruhestand regeln wollte. Die Autorin weist darauf hin, dass die Darstellung aus Erinnerungen und Dokumenten anderer rekonstruiert wurde; sie bleibt daher eine Familienquelle, die weiter überprüft werden muss.", `<a href="${external.isaacBook}" target="_blank" rel="noreferrer">Das Familienbuch lesen ↗</a>`],
    source: ["family", "Familienbuch über Isaac Eliezer", "Eine hebräische Familiengeschichte seiner Tochter Esther Abraham. Sie ergänzt Isaacs Geburt 1920 in Berlin, den Rufnamen Leizer, Schul- und Jeschiwa-Jahre, die Flucht nach Riga und Palästina 1938–39, die Arbeit mit Displaced Persons und Einwanderungstransporten 1946–49, sein Familienleben in Israel und seinen Tod am 2. Dezember 1982. Die Autorin erklärt ausdrücklich, dass die Biografie aus Erinnerungen und Dokumenten anderer und nicht aus Isaacs eigener Autobiografie entstand.", `<a href="${external.isaacBook}" target="_blank" rel="noreferrer">Das hebräische Buch öffnen ↗</a>`],
    ledger: ["אבני דרך – יצחק אליעזר שמחוביץ / Isaac Eliezer family book", "Familienquelle", "Hebräische Biografie von Tochter Esther Abraham: Berliner Kindheit, religiöse Ausbildung, Weg über Riga nach Palästina, Arbeit mit Displaced Persons 1946–49, Familienleben in Israel und Tod 1982; Datierung und Deutung bleiben als Familienquelle gekennzeichnet."],
    question: ["Isaacs dokumentarische Spur", "Das Familienbuch liefert eine ausführliche Erzählung. Für die Überprüfung sollten jedoch noch Geburts-, Schul-, Jeschiwa- und Einwanderungsunterlagen, UNRRA-/Jewish-Agency-Akten sowie Beschäftigungsunterlagen der Mizrahi Bank gefunden werden."],
    familyMeta: "1920 · Berlin · gestorben am 2. Dezember 1982 · verheiratet 1951; drei Kinder (Familienbuch)",
    familyNote: "Das Familienbuch ergänzt Isaacs Rufnamen Leizer, seine Berliner und jeschiwische Ausbildung, den Weg über Riga nach Palästina, die Nachkriegsarbeit mit Displaced Persons und Einwanderungstransporten, die Heirat 1951, drei Kinder und seinen Tod 1982. Es ist eine familiäre Rekonstruktion, kein unabhängiger Zivilregisterbeleg.",
    leadAddition: " Das Familienbuch bestätigt ebenfalls die überlieferte Wohnung Nr. 17; eine Bescheinigung des Berliner Rabbinerseminars vom 29. März 1938 nennt für Isaac jedoch Nr. 14. Diese zweite Adresse bleibt daher eine Dokumentabweichung und ersetzt Nr. 17 nicht."
  }
};

Object.entries(isaacBookEvidence).forEach(([lang, evidence]) => {
  t[lang].updates.cards.splice(5, 0, evidence.update);
  t[lang].sources.cards.splice(7, 0, evidence.source);
  t[lang].sources.ledger.splice(7, 0, evidence.ledger);
  t[lang].questions.items.splice(1, 0, evidence.question);
  t[lang].family.childData[1][1] = evidence.familyMeta;
  t[lang].family.note = evidence.familyNote;
  t[lang].family.leadText += evidence.leadAddition;
});

const familyPerspective = {
  en: {
    nav: { family: "The family", photo: "Family photograph", people: "People", updates: "Research findings", timeline: "Paula’s records", places: "Family journey", sources: "Sources" },
    hero: {
      eyebrow: "A family memory, still being researched",
      title: "One family, many paths through a broken century",
      lede: "The Simchowicz family story begins with Jewish life in Poland and Berlin, follows six children through education, persecution, flight, forced labor, survival and loss, and continues with the rebuilding of family life in Palestine and Israel. Paula, Isaac and Salo leave especially detailed records, but they are threads in a larger family history.",
      primary: "Meet the family",
      secondary: "Follow the journey",
      cardKicker: "The family at a glance",
      cardTitle: "Six children, one Berlin household, many destinies",
      stats: [["6", "children in the household"], ["17", "Grenadierstraße address"], ["3", "siblings documented after the war"]]
    },
    about: {
      kicker: "How to read this archive",
      title: "A family history, not a single biography",
      text: "This archive follows the family as a network of people, places and surviving traces. The family tree establishes the household; the people cards show what is known about each member; the journey connects Poland, Berlin, Tarnów, Riga and Israel; and the individual records then deepen Paula’s, Isaac’s and Salo’s stories. Direct records, family testimony and unresolved leads remain visibly separate.",
      chips: ["Nowy Sącz", "Dąbrowa", "Berlin", "Tarnów", "Riga", "Israel"]
    },
    people: {
      kicker: "The people",
      title: "A household of eight, remembered one person at a time",
      intro: "The six children were born in Berlin. Their parents’ Polish origins, the family home at Grenadierstraße 17, and the different paths taken after 1938 form the central frame of the archive.",
      labels: { direct: "Direct records", family: "Family source", open: "Open identification" },
      cards: [
        ["family", "Mates / Matityahu Simchowicz", "c. 1889 · Nowy Sącz · father", "A religious father and Kaufmann who ran a milk-and-eggs shop in Berlin. Family and wartime sources place him in Tarnów; a Yad Vashem Page of Testimony records his death there in 1943.", "Family book · Salo testimony · Yad Vashem"],
        ["open", "Ester / Esther / Erna Simchowicz", "c. 1896 · Poland · mother", "Née Offen. Salo places her family in Dąbrowa near Oświęcim, while Arolsen uses Erna/Ester. The exact birthplace and wartime fate still need reconciliation.", "Salo testimony · Arolsen · family sources"],
        ["direct", "Paula Pnina Simchowicz / Rapoport", "22 June 1919 · Berlin · survivor", "The eldest child’s CV, sworn testimony and Israeli memorial record document Berlin, Zbąszyń, Tarnów, forced labor, survival and postwar life in Israel. She died in Tel Aviv in 1994.", "CV · 1955 testimony · LAAD memorial"],
        ["family", "Isaac Eliezer “Leizer” Simchowicz", "1920 · Berlin · survivor", "He studied in Berlin and in Lithuanian yeshivot, escaped through Riga to Palestine in 1939, worked with displaced persons and immigration transports after the war, and died in 1982. His daughter’s book gives the fullest account.", "Isaac Eliezer family book"],
        ["open", "Rosa Shoshana Simchowicz", "1 January 1922 · Berlin · sibling", "Arolsen supports her place in the Berlin household, with father Mates and mother Erna/Ester née Offen. Her identification with the separate Arolsen record named Roza remains unconfirmed.", "Arolsen · family tree · open question"],
        ["direct", "Salo / Shlomo Simchowicz", "24 May 1923 · Berlin · survivor", "His 2001 testimony describes the family home, the 1938 expulsion to Zbąszyń, the escape route through Eastern and Western Europe, and arrival in Palestine on 1 April 1940.", "Yad Vashem testimony 4115983"],
        ["direct", "Mina / Minni Simchowicz", "1924/1925 · Berlin · wartime fate", "Arolsen gives 7 September 1924; the family book gives 1925. Yad Vashem records Mina as having died in Tarnów in 1943. The date discrepancy remains visible.", "Arolsen · family book · Yad Vashem"],
        ["direct", "Sascha / Susi Simchowicz", "18 December 1929 · Berlin · wartime fate", "Arolsen records 12674257 and 12674258 are treated as two records for the same Susi. Yad Vashem records Sascha as having died in Tarnów in 1943.", "Arolsen · Yad Vashem"]
      ]
    },
    places: {
      kicker: "The family journey",
      title: "From Polish roots to Berlin, dispersal and rebuilding",
      intro: "The places are shared stages in the family story. Some routes belong to one person; together they show how one household was scattered and how surviving branches rebuilt their lives.",
      cards: [
        ["01", "Nowy Sącz & Dąbrowa", "The family book places Mates’ origins in Nowy Sącz and Esther’s family near Dąbrowa by Oświęcim. Exact civil records remain to be found."],
        ["02", "Berlin", "The six children were born in Berlin. The family lived first around Joachimstraße and later at Grenadierstraße 17, where religion, work, schooling and neighborhood life shaped the household."],
        ["03", "Zbąszyń & Tarnów", "The 1938 expulsions and the family’s move into occupied Poland began the wartime separation. Salo escaped through Tarnów; Paula was forced to work there; Mates, Mina and Sascha are recorded as dying there in 1943."],
        ["04", "Riga & Palestine", "Isaac left for Riga in November 1938 and reached Haifa in 1939. Salo followed a different escape route and arrived in Palestine on 1 April 1940."],
        ["05", "DP camps & Israel", "Isaac worked among displaced persons and immigration transports in Europe from 1946 to 1949. Paula, Isaac and Salo represent three documented survivor branches that rebuilt family life in Israel."]
      ],
      route: "Polish roots → Berlin → Zbąszyń / Tarnów → Riga / Palestine → Israel"
    }
  },
  he: {
    nav: { family: "המשפחה", photo: "תצלום המשפחה", people: "בני המשפחה", updates: "ממצאי המחקר", timeline: "הרשומות של פאולה", places: "מסע המשפחה", sources: "מקורות" },
    hero: {
      eyebrow: "זיכרון משפחתי שעדיין נחקר",
      title: "משפחה אחת, מסלולים רבים במאה שנשברה",
      lede: "סיפור משפחת שמחוביץ מתחיל בחיים יהודיים בפולין ובברלין, עובר דרך ששת הילדים — לימודים, רדיפות, בריחה, עבודת כפייה, הישרדות ואובדן — וממשיך בבניית חיי משפחה בארץ ישראל ובישראל. פאולה, יצחק ושלמה הותירו תיעוד מפורט במיוחד, אך הם חוטים בתוך היסטוריה משפחתית רחבה יותר.",
      primary: "להכיר את המשפחה",
      secondary: "לעקוב אחר המסע",
      cardKicker: "המשפחה במבט אחד",
      cardTitle: "שישה ילדים, בית אחד בברלין, גורלות רבים",
      stats: [["6", "ילדים בבית המשפחה"], ["17", "כתובת בגרנָדירשטראסה"], ["3", "אחים מתועדים אחרי המלחמה"]]
    },
    about: {
      kicker: "כיצד לקרוא את הארכיון",
      title: "היסטוריה משפחתית, לא ביוגרפיה יחידה",
      text: "הארכיון עוקב אחר המשפחה כרשת של אנשים, מקומות ועקבות ששרדו. אילן המשפחה מציג את משק הבית; כרטיסי בני המשפחה מראים מה ידוע על כל אחד; המסע מחבר בין פולין, ברלין, טארנוב, ריגה וישראל; והרשומות האישיות מעמיקות אחר כך את סיפוריהם של פאולה, יצחק ושלמה. מסמכים ישירים, עדות משפחתית וכיווני מחקר בלתי פתורים נשמרים בנפרד.",
      chips: ["צאנז / נובי סונץ׳", "דומברובה", "ברלין", "טארנוב", "ריגה", "ישראל"]
    },
    people: {
      kicker: "בני המשפחה",
      title: "בית של שמונה, שנזכר אדם אחר אדם",
      intro: "ששת הילדים נולדו בברלין. שורשי ההורים בפולין, הבית בגרנָדירשטראסה 17 והמסלולים השונים לאחר 1938 הם המסגרת המרכזית של הארכיון.",
      labels: { direct: "מסמכים ישירים", family: "מקור משפחתי", open: "זיהוי פתוח" },
      cards: [
        ["family", "מתתיהו / מתֶס שמחוביץ", "בערך 1889 · צאנז / נובי סונץ׳ · האב", "אב דתי וסוחר שניהל בברלין חנות לחלב וביצים. מקורות משפחתיים ומקורות מתקופת המלחמה מציבים אותו בטארנוב; דף עדות של יד ושם מתעד את מותו שם בשנת 1943.", "הספר המשפחתי · עדות שלמה · יד ושם"],
        ["open", "אסתר / אסתר / ארנה שמחוביץ", "בערך 1896 · פולין · האם", "לבית אופן. שלמה ממקם את משפחתה בדומברובה ליד אושוויץ, ואילו ארולסן משתמש בגרסה Erna/Ester. מקום הלידה המדויק וגורלה במלחמה עדיין דורשים יישוב.", "עדות שלמה · ארולסן · מקורות משפחתיים"],
        ["direct", "פאולה פנינה שמחוביץ / רפפורט", "22 ביוני 1919 · ברלין · שורדת", "קורות החיים, העדות בשבועה והרישום הישראלי מתעדים את ברלין, זבונשין, טארנוב, עבודת הכפייה, ההישרדות והחיים בישראל. היא נהרגה בתל אביב בשנת 1994.", "קורות חיים · עדות 1955 · דף הנצחה"],
        ["family", "יצחק אליעזר “לייזר” שמחוביץ", "1920 · ברלין · שורד", "למד בברלין ובישיבות ליטאיות, נמלט דרך ריגה לארץ ישראל ב־1939, עבד עם עקורים ועם הובלות עלייה לאחר המלחמה ונפטר ב־1982. ספר בתו מציג את הסיפור המלא ביותר.", "הספר המשפחתי על יצחק אליעזר"],
        ["open", "רוזה שושנה שמחוביץ", "1 בינואר 1922 · ברלין · אחות", "ארולסן תומך בשייכותה לבית בברלין, עם אב בשם מתֶס ואם ארנה/אסתר לבית אופן. הזיהוי שלה עם הרשומה הנפרדת בשם Roza עדיין אינו מאומת.", "ארולסן · אילן המשפחה · שאלה פתוחה"],
        ["direct", "סאלו / שלמה שמחוביץ", "24 במאי 1923 · ברלין · שורד", "העדות שלו משנת 2001 מתארת את הבית, את הגירוש לזבונשין ב־1938, את מסלול הבריחה דרך מזרח ומערב אירופה ואת הגעתו לארץ ישראל ב־1 באפריל 1940.", "עדות יד ושם 4115983"],
        ["direct", "מינה / מיני שמחוביץ", "1924/1925 · ברלין · גורל במלחמה", "ארולסן מציין 7 בספטמבר 1924; הספר המשפחתי מציין 1925. יד ושם מתעד את מינה כמי שמתה בטארנוב בשנת 1943. הפער בתאריך נשמר.", "ארולסן · הספר המשפחתי · יד ושם"],
        ["direct", "סשה / סוזי שמחוביץ", "18 בדצמבר 1929 · ברלין · גורל במלחמה", "רשומות ארולסן 12674257 ו־12674258 נחשבות לשתי רשומות של אותה סוזי. יד ושם מתעד את סשה כמי שמתה בטארנוב בשנת 1943.", "ארולסן · יד ושם"]
      ]
    },
    places: {
      kicker: "מסע המשפחה",
      title: "משורשים פולניים לברלין, פיזור ובנייה מחדש",
      intro: "המקומות הם תחנות משותפות בסיפור המשפחה. חלק מן המסלולים שייכים לאדם אחד; יחד הם מראים כיצד בית אחד התפזר וכיצד הענפים ששרדו בנו את חייהם מחדש.",
      cards: [
        ["01", "צאנז / נובי סונץ׳ ודומברובה", "הספר המשפחתי מציב את שורשי מתתיהו בצאנז / נובי סונץ׳ ואת משפחת אסתר בדומברובה ליד אושוויץ. עדיין חסרים רישומי יסוד אזרחיים."],
        ["02", "ברלין", "ששת הילדים נולדו בברלין. המשפחה גרה תחילה באזור יואכים־שטראסה ואחר כך בגרנָדירשטראסה 17, שם עיצבו הדת, העבודה, הלימודים וחיי השכונה את הבית."],
        ["03", "זבונשין וטארנוב", "הגירושים ב־1938 והמעבר לפולין הכבושה פתחו את תקופת הפירוד. סאלו ברח דרך טארנוב; פאולה עבדה שם בכפייה; ומתתיהו, מינה וסשה מתועדים כמי שמתו שם ב־1943."],
        ["04", "ריגה וארץ ישראל", "יצחק נסע לריגה בנובמבר 1938 והגיע לחיפה ב־1939. סאלו עבר מסלול בריחה אחר והגיע לארץ ישראל ב־1 באפריל 1940."],
        ["05", "מחנות עקורים וישראל", "יצחק עבד עם עקורים ועם הובלות עלייה באירופה בשנים 1946–1949. פאולה, יצחק וסאלו מייצגים שלושה ענפים מתועדים שבנו מחדש חיי משפחה בישראל."]
      ],
      route: "שורשים בפולין → ברלין → זבונשין / טארנוב → ריגה / ארץ ישראל → ישראל"
    }
  },
  de: {
    nav: { family: "Die Familie", photo: "Familienfoto", people: "Personen", updates: "Forschungsergebnisse", timeline: "Paulas Unterlagen", places: "Familienweg", sources: "Quellen" },
    hero: {
      eyebrow: "Eine Familienerinnerung, die weiter erforscht wird",
      title: "Eine Familie, viele Wege durch ein zerbrochenes Jahrhundert",
      lede: "Die Geschichte der Familie Simchowicz beginnt mit jüdischem Leben in Polen und Berlin, verfolgt sechs Kinder durch Ausbildung, Verfolgung, Flucht, Zwangsarbeit, Überleben und Verlust und setzt sich mit dem Wiederaufbau des Familienlebens in Palästina und Israel fort. Paula, Isaac und Salo hinterließen besonders ausführliche Spuren, sind aber Fäden einer größeren Familiengeschichte.",
      primary: "Die Familie kennenlernen",
      secondary: "Den Weg verfolgen",
      cardKicker: "Die Familie im Überblick",
      cardTitle: "Sechs Kinder, ein Berliner Haushalt, viele Schicksale",
      stats: [["6", "Kinder im Haushalt"], ["17", "Grenadierstraße"], ["3", "nach dem Krieg dokumentierte Geschwister"]]
    },
    about: {
      kicker: "Wie dieses Archiv zu lesen ist",
      title: "Eine Familiengeschichte, keine Einzelbiografie",
      text: "Dieses Archiv verfolgt die Familie als Netz aus Menschen, Orten und erhaltenen Spuren. Der Stammbaum zeigt den Haushalt; die Personenkarten machen sichtbar, was über jedes Mitglied bekannt ist; der Familienweg verbindet Polen, Berlin, Tarnów, Riga und Israel; und die Einzelunterlagen vertiefen anschließend die Geschichten von Paula, Isaac und Salo. Direkte Quellen, Familienzeugnisse und offene Forschungshinweise bleiben klar getrennt.",
      chips: ["Nowy Sącz", "Dąbrowa", "Berlin", "Tarnów", "Riga", "Israel"]
    },
    people: {
      kicker: "Die Menschen",
      title: "Ein Haushalt von acht, erinnert Person für Person",
      intro: "Die sechs Kinder wurden in Berlin geboren. Die polnischen Wurzeln der Eltern, das Haus in der Grenadierstraße 17 und die verschiedenen Wege nach 1938 bilden den Mittelpunkt des Archivs.",
      labels: { direct: "Direkte Quellen", family: "Familienquelle", open: "Offene Identifizierung" },
      cards: [
        ["family", "Mates / Matityahu Simchowicz", "ca. 1889 · Nowy Sącz · Vater", "Ein religiöser Vater und Kaufmann, der in Berlin ein Milch- und Eiergeschäft führte. Familien- und Kriegsquellen verorten ihn in Tarnów; ein Yad-Vashem-Page-of-Testimony verzeichnet dort seinen Tod 1943.", "Familienbuch · Salos Zeugnis · Yad Vashem"],
        ["open", "Ester / Esther / Erna Simchowicz", "ca. 1896 · Polen · Mutter", "Geborene Offen. Salo verortet ihre Familie in Dąbrowa bei Oświęcim, während Arolsen Erna/Ester verwendet. Geburtsort und Kriegsschicksal müssen noch abgeglichen werden.", "Salos Zeugnis · Arolsen · Familienquellen"],
        ["direct", "Paula Pnina Simchowicz / Rapoport", "22. Juni 1919 · Berlin · Überlebende", "Lebenslauf, eidesstattliche Erklärung und israelischer Gedenkeintrag dokumentieren Berlin, Zbąszyń, Tarnów, Zwangsarbeit, Überleben und das Leben in Israel. Sie starb 1994 in Tel Aviv.", "Lebenslauf · Zeugnis 1955 · LAAD-Gedenkseite"],
        ["family", "Isaac Eliezer „Leizer“ Simchowicz", "1920 · Berlin · Überlebender", "Er studierte in Berlin und litauischen Jeschiwot, floh 1939 über Riga nach Palästina, arbeitete nach dem Krieg mit Displaced Persons und Einwanderungstransporten und starb 1982. Das Buch seiner Tochter bietet die ausführlichste Darstellung.", "Isaac-Eliezer-Familienbuch"],
        ["open", "Rosa Shoshana Simchowicz", "1. Januar 1922 · Berlin · Schwester", "Arolsen stützt ihre Zugehörigkeit zum Berliner Haushalt mit Vater Mates und Mutter Erna/Ester geborene Offen. Die Gleichsetzung mit dem separaten Arolsen-Eintrag Roza ist nicht bestätigt.", "Arolsen · Stammbaum · offene Frage"],
        ["direct", "Salo / Shlomo Simchowicz", "24. Mai 1923 · Berlin · Überlebender", "Sein Zeugnis von 2001 beschreibt das Familienhaus, die Ausweisung nach Zbąszyń 1938, die Flucht durch Ost- und Westeuropa und die Ankunft in Palästina am 1. April 1940.", "Yad-Vashem-Zeugnis 4115983"],
        ["direct", "Mina / Minni Simchowicz", "1924/1925 · Berlin · Kriegsschicksal", "Arolsen nennt den 7. September 1924; das Familienbuch nennt 1925. Yad Vashem verzeichnet Mina als 1943 in Tarnów gestorben. Die Abweichung bleibt sichtbar.", "Arolsen · Familienbuch · Yad Vashem"],
        ["direct", "Sascha / Susi Simchowicz", "18. Dezember 1929 · Berlin · Kriegsschicksal", "Die Arolsen-Datensätze 12674257 und 12674258 werden als zwei Einträge derselben Susi behandelt. Yad Vashem verzeichnet Sascha als 1943 in Tarnów gestorben.", "Arolsen · Yad Vashem"]
      ]
    },
    places: {
      kicker: "Der Familienweg",
      title: "Von polnischen Wurzeln über Berlin zu Zerstreuung und Neubeginn",
      intro: "Die Orte sind gemeinsame Bühnen der Familiengeschichte. Manche Wege gehören einer einzelnen Person; zusammen zeigen sie, wie ein Haushalt zerstreut wurde und wie die überlebenden Zweige ihr Leben neu aufbauten.",
      cards: [
        ["01", "Nowy Sącz & Dąbrowa", "Das Familienbuch verortet Mates’ Herkunft in Nowy Sącz und Esthers Familie bei Dąbrowa nahe Oświęcim. Die genauen Zivilregister fehlen noch."],
        ["02", "Berlin", "Die sechs Kinder wurden in Berlin geboren. Die Familie lebte zunächst im Raum Joachimstraße und später in der Grenadierstraße 17, wo Religion, Arbeit, Schule und Nachbarschaft den Haushalt prägten."],
        ["03", "Zbąszyń & Tarnów", "Die Ausweisungen von 1938 und der Weg ins besetzte Polen leiteten die Trennung ein. Salo floh über Tarnów; Paula musste dort arbeiten; Mates, Mina und Sascha sind dort für 1943 als verstorben belegt."],
        ["04", "Riga & Palästina", "Isaac reiste im November 1938 nach Riga und kam 1939 nach Haifa. Salo nahm einen anderen Fluchtweg und erreichte Palästina am 1. April 1940."],
        ["05", "DP-Lager & Israel", "Isaac arbeitete 1946–49 mit Displaced Persons und Einwanderungstransporten in Europa. Paula, Isaac und Salo stehen für drei dokumentierte Überlebenszweige, die in Israel Familienleben neu aufbauten."]
      ],
      route: "Polnische Wurzeln → Berlin → Zbąszyń / Tarnów → Riga / Palästina → Israel"
    }
  }
};

Object.entries(familyPerspective).forEach(([lang, perspective]) => {
  t[lang].nav = perspective.nav;
  t[lang].hero = perspective.hero;
  t[lang].about = perspective.about;
  t[lang].people = perspective.people;
  t[lang].places = perspective.places;
});

const familyTreeBookEvidence = {
  en: {
    updates: [
      ["family", "The family booklet reaches one generation earlier", "The Hebrew booklet, prepared for the 11 August 2021 family gathering, traces the known line to Yitzhak Scherer and Yehudit Simchowicz. It names ten children, including Mates/Matityahu, Abraham-Yehiel, Malka, Rosa-Shoshana, Karolina-Kreindel, Esther and Hannah, with two children still unidentified. It says Yitzhak died in 1907 at about forty from tuberculosis; Yehudit later moved with the children to Berlin, supported the family through a restaurant, and died in 1935. The booklet explains that the Simchowicz surname continued although Yitzhak was born Scherer, possibly because the marriage was religious rather than civil. These are family claims awaiting civil and cemetery-record verification.", `<a href="${external.familyTreeBook}" target="_blank" rel="noreferrer">Read the 2021 family booklet ↗</a>`],
      ["family", "The booklet preserves a different Tarnów chronology", "The Paula chapter says that after the liquidation of the Tarnów ghetto in late September 1942, Mates, Esther, Rosa, Mina and Sascha were sent to Bełżec while Paula was away at forced labor. It says she continued through Płaszów and Częstochowa until liberation in January 1945 and reached Israel from Italy in August 1947. This family account conflicts in date and place with the Yad Vashem Pages of Testimony that record Mates, Mina and Sascha as dying in Tarnów in 1943, so it is presented as testimony rather than a replacement for the direct records.", `<a href="${external.familyTreeBook}" target="_blank" rel="noreferrer">See the Paula chapter in the booklet ↗</a>`],
      ["family", "Isaac’s and Salo’s escape routes gain detail", "The booklet says Isaac received an immigration certificate from Yishuv Hadash in July 1939 and reached Palestine in August 1939. After May 1945 it places him with the Jewish Agency and UNRRA among displaced-persons camps, including the Hof camp, and says he met Paula in Rome. It also describes Salo being moved into Poland hidden in a truck on 1 January 1939, then traveling through Białystok and Vilna before reaching Palestine on 1 April 1940. These details complement, but do not replace, the independent records and Salo’s testimony.", `<a href="${external.familyTreeBook}" target="_blank" rel="noreferrer">Open the route accounts ↗</a>`]
    ],
    source: ["family", "The Simchowicz family tree booklet, 2021", "A Hebrew family compilation prepared for a gathering on 11 August 2021. It adds an older generation before Mates, photographs and family trees, and family accounts of the Berlin household, Tarnów, postwar Europe and Israel. It contains many living-family names, so this site uses it selectively and does not reproduce private details.", `<a href="${external.familyTreeBook}" target="_blank" rel="noreferrer">Open the family booklet ↗</a>`],
    ledger: ["The Simchowicz family tree.pdf", "Family source", "2021 Hebrew family compilation: Yitzhak Scherer and Yehudit Simchowicz as the generation before Mates; ten-child family tradition; Berlin, Tarnów, Isaac, Salo and Paula accounts; chronology and identifications require verification."],
    questions: [
      ["The generation before Mates", "Verify the booklet’s account of Yitzhak Scherer, Yehudit Simchowicz, their ten children, Yitzhak’s 1907 death and Yehudit’s 1935 Berlin burial through civil, synagogue and cemetery records."],
      ["Tarnów, Bełżec and the 1943 records", "Reconcile the booklet’s late-September-1942 Bełżec account with the Yad Vashem records naming Tarnów and 1943 for Mates, Mina and Sascha, and with Paula’s sworn testimony and the camp chronology."]
    ],
    familyAddition: " The 2021 family booklet extends the family tradition one generation earlier to Yitzhak Scherer and Yehudit Simchowicz. It names ten children, including Mates/Matityahu, and says Yitzhak died in 1907 from tuberculosis before Yehudit moved with the children to Berlin and died there in 1935. Because this is a family compilation, the older line remains a research lead until civil, synagogue and cemetery records are found.",
    isaacAddition: " The 2021 family booklet adds a July 1939 Yishuv Hadash immigration certificate, arrival in Palestine in August 1939, postwar work with the Jewish Agency and UNRRA at DP camps including Hof, and a meeting with Paula in Rome. These details are family-source evidence.",
    saloAddition: " The booklet’s family account says Salo was moved into Poland hidden in a truck on 1 January 1939 and later traveled via Białystok and Vilna before reaching Palestine on 1 April 1940. This complements but does not replace his Yad Vashem testimony."
  },
  he: {
    updates: [
      ["family", "חוברת המשפחה מגיעה דור אחד מוקדם יותר", "החוברת העברית, שהוכנה לקראת המפגש המשפחתי ב־11 באוגוסט 2021, עוקבת אחר השושלת הידועה עד יצחק שרר ויהודית שמחוביץ. היא מונה עשרה ילדים, ובהם מתתיהו, אברהם־יחזקאל, מלכה, רוזה־שושנה, קרולינה־קריינדל, אסתר וחנה, ועוד שני ילדים שזהותם אינה ידועה. לפי החוברת יצחק נפטר בשנת 1907 בערך בגיל ארבעים משחפת; יהודית עברה עם הילדים לברלין, פרנסה את המשפחה באמצעות מסעדה ונפטרה בשנת 1935. החוברת מסבירה שהשם שמחוביץ נשמר אף שיצחק נשא את שם המשפחה שרר, אולי משום שהנישואים היו דתיים ולא אזרחיים. אלה טענות משפחתיות שעדיין דורשות אימות ברישומי לידה, קבורה וקהילה.", `<a href="${external.familyTreeBook}" target="_blank" rel="noreferrer">לקריאת חוברת המשפחה מ־2021 ↗</a>`],
      ["family", "החוברת משמרת כרונולוגיה אחרת של טארנוב", "בפרק על פאולה נכתב כי לאחר חיסול גטו טארנוב בסוף ספטמבר 1942 נשלחו מתי, אסתר, רוזה, מינה וסשה לבלז׳ץ, בזמן שפאולה נעדרה בעבודת כפייה. לפי הפרק היא עבדה בפלאשוב ובצ׳נסטוחובה עד השחרור בינואר 1945 והגיעה לישראל מאיטליה באוגוסט 1947. חשבון משפחתי זה אינו תואם בתאריך ובמקום את דפי העדות של יד ושם, המתעדים את מתי, מינה וסשה כמי שמתו בטארנוב בשנת 1943; לכן הוא מוצג כעדות משפחתית ולא כתחליף לרשומות הישירות.", `<a href="${external.familyTreeBook}" target="_blank" rel="noreferrer">לפרק על פאולה בחוברת ↗</a>`],
      ["family", "מסלולי הבריחה של יצחק וסאלו מתפרטים", "החוברת מספרת שיצחק קיבל ביולי 1939 סרטיפיקט מישיבת היישוב החדש והגיע לארץ ישראל באוגוסט 1939. לאחר מאי 1945 היא מציבה אותו בשליחות הסוכנות היהודית ואונר״א במחנות עקורים, ובהם מחנה הוף, ומספרת שפגש את פאולה ברומא. היא מוסיפה שסאלו הועבר לפולין מוסתר במשאית ב־1 בינואר 1939, עבר דרך ביאליסטוק ווילנה והגיע לארץ ישראל ב־1 באפריל 1940. פרטים אלה משלימים את המקורות העצמאיים אך אינם מחליפים אותם או את עדותו של סאלו.", `<a href="${external.familyTreeBook}" target="_blank" rel="noreferrer">למסלולי הבריחה בחוברת ↗</a>`]
    ],
    source: ["family", "חוברת משפחת שמחוביץ לדורותיה, 2021", "חוברת משפחתית בעברית שהוכנה למפגש ב־11 באוגוסט 2021. היא מוסיפה דור קדום יותר לפני מתתיהו, תמונות ואילנות יוחסין, ועדויות משפחתיות על הבית בברלין, טארנוב, אירופה שלאחר המלחמה וישראל. החוברת כוללת שמות רבים של בני משפחה החיים כיום, ולכן האתר משתמש בה באופן בררני ואינו משחזר פרטים פרטיים.", `<a href="${external.familyTreeBook}" target="_blank" rel="noreferrer">לפתיחת החוברת ↗</a>`],
    ledger: ["The Simchowicz family tree.pdf", "מקור משפחתי", "חוברת משפחתית עברית משנת 2021: יצחק שרר ויהודית שמחוביץ כדור שקדם למתי; מסורת על עשרה ילדים; וחשבונות משפחתיים על ברלין, טארנוב, יצחק, סאלו ופאולה. הכרונולוגיה והזיהויים דורשים אימות."],
    questions: [
      ["הדור שקדם למתי", "לאמת את הסיפור על יצחק שרר, יהודית שמחוביץ, עשרת ילדיהם, מות יצחק בשנת 1907 וקבורת יהודית בברלין בשנת 1935 באמצעות רישומי לידה, קהילה ובתי קברות."],
      ["טארנוב, בלז׳ץ ורשומות 1943", "ליישב את הסיפור בחוברת על בלז׳ץ בסוף ספטמבר 1942 עם דפי העדות של יד ושם המציינים את טארנוב ואת שנת 1943 עבור מתי, מינה וסשה, ועם הצהרת פאולה וציר המחנות."]
    ],
    familyAddition: " חוברת המשפחה משנת 2021 מרחיבה את המסורת המשפחתית דור אחד לאחור, אל יצחק שרר ויהודית שמחוביץ. היא מונה עשרה ילדים, ובהם מתתיהו, ומספרת שיצחק נפטר משחפת בשנת 1907 לפני שיהודית עברה עם הילדים לברלין ונפטרה שם בשנת 1935. מאחר שמדובר בחוברת משפחתית, הדור הקדום נשאר ככיוון מחקר עד לאיתור רישומי לידה, קהילה וקבורה.",
    isaacAddition: " חוברת המשפחה מוסיפה סרטיפיקט מישיבת היישוב החדש מיולי 1939, הגעה לארץ ישראל באוגוסט 1939, עבודה לאחר המלחמה עם הסוכנות היהודית ואונר״א במחנות עקורים ובהם הוף, ומפגש עם פאולה ברומא. אלה פרטים ממקור משפחתי.",
    saloAddition: " לפי החשבון המשפחתי בחוברת, סאלו הועבר לפולין מוסתר במשאית ב־1 בינואר 1939, עבר דרך ביאליסטוק ווילנה והגיע לארץ ישראל ב־1 באפריל 1940. הפרטים משלימים את עדותו ביד ושם אך אינם מחליפים אותה."
  },
  de: {
    updates: [
      ["family", "Das Familienheft reicht eine Generation zurück", "Das hebräische Heft für das Familientreffen vom 11. August 2021 verfolgt die bekannte Linie bis zu Yitzhak Scherer und Yehudit Simchowicz. Es nennt zehn Kinder, darunter Mates/Matityahu, Abraham-Jehiel, Malka, Rosa-Shoshana, Karolina-Kreindel, Esther und Hannah; zwei Kinder bleiben unbekannt. Danach starb Yitzhak 1907 mit etwa vierzig Jahren an Tuberkulose. Yehudit zog mit den Kindern nach Berlin, ernährte die Familie mit einem Restaurant und starb 1935. Das Heft erklärt, der Name Simchowicz habe sich erhalten, obwohl Yitzhak Scherer hieß, möglicherweise weil die Ehe religiös und nicht standesamtlich geschlossen wurde. Diese Angaben stammen aus der Familie und müssen mit Zivil- und Friedhofsunterlagen geprüft werden.", `<a href="${external.familyTreeBook}" target="_blank" rel="noreferrer">Das Familienheft von 2021 lesen ↗</a>`],
      ["family", "Das Heft bewahrt eine andere Tarnów-Chronologie", "Das Paula-Kapitel berichtet, dass Mates, Esther, Rosa, Mina und Sascha nach der Liquidierung des Tarnów-Ghettos Ende September 1942 nach Bełżec deportiert wurden, während Paula bei der Zwangsarbeit war. Danach habe sie bis zur Befreiung im Januar 1945 in Płaszów und Częstochowa gearbeitet und sei im August 1947 aus Italien nach Israel gekommen. Diese Familienüberlieferung widerspricht in Zeit und Ort den Yad-Vashem-Pages-of-Testimony, die Mates, Mina und Sascha als 1943 in Tarnów gestorben verzeichnen. Sie wird deshalb als Familienzeugnis und nicht als Ersatz für die direkten Quellen geführt.", `<a href="${external.familyTreeBook}" target="_blank" rel="noreferrer">Paulas Kapitel im Heft ↗</a>`],
      ["family", "Isaacs und Salos Fluchtwege werden genauer", "Das Heft berichtet, Isaac habe im Juli 1939 ein Einwanderungszertifikat von Yishuv Hadash erhalten und sei im August 1939 nach Palästina gelangt. Nach Mai 1945 habe er als Beauftragter der Jewish Agency und UNRRA in DP-Lagern, darunter Hof, gearbeitet und Paula in Rom getroffen. Salo sei am 1. Januar 1939 versteckt in einem Lastwagen nach Polen gebracht worden, über Białystok und Wilna weitergereist und am 1. April 1940 in Palästina angekommen. Diese Angaben ergänzen die unabhängigen Quellen und Salos Zeugnis, ersetzen sie aber nicht.", `<a href="${external.familyTreeBook}" target="_blank" rel="noreferrer">Die Fluchtwege öffnen ↗</a>`]
    ],
    source: ["family", "Das Simchowicz-Familienheft, 2021", "Eine hebräische Familienzusammenstellung für das Treffen am 11. August 2021. Sie ergänzt eine Generation vor Mates, Fotos und Stammbäume sowie Familienberichte über Berlin, Tarnów, das Nachkriegseuropa und Israel. Da sie viele Namen lebender Angehöriger enthält, verwendet die Website sie selektiv und veröffentlicht keine privaten Details.", `<a href="${external.familyTreeBook}" target="_blank" rel="noreferrer">Das Familienheft öffnen ↗</a>`],
    ledger: ["The Simchowicz family tree.pdf", "Familienquelle", "Hebräische Familienzusammenstellung von 2021: Yitzhak Scherer und Yehudit Simchowicz als Generation vor Mates; Überlieferung von zehn Kindern; Familienberichte zu Berlin, Tarnów, Isaac, Salo und Paula. Chronologie und Identifizierungen müssen geprüft werden."],
    questions: [
      ["Die Generation vor Mates", "Die Angaben zu Yitzhak Scherer, Yehudit Simchowicz, ihren zehn Kindern, Yitzhaks Tod 1907 und Yehudits Berliner Grab 1935 durch Zivil-, Gemeinde- und Friedhofsunterlagen überprüfen."],
      ["Tarnów, Bełżec und die Belege für 1943", "Den Bericht über Bełżec Ende September 1942 mit den Yad-Vashem-Belegen für Tarnów und 1943 bei Mates, Mina und Sascha sowie mit Paulas Aussage und der Lagerchronologie abgleichen."]
    ],
    familyAddition: " Das Familienheft von 2021 führt die Familienüberlieferung eine Generation zurück zu Yitzhak Scherer und Yehudit Simchowicz. Es nennt zehn Kinder, darunter Mates/Matityahu, und berichtet, Yitzhak sei 1907 an Tuberkulose gestorben, bevor Yehudit mit den Kindern nach Berlin zog und dort 1935 starb. Da es sich um eine Familienzusammenstellung handelt, bleibt diese ältere Linie ein Forschungshinweis, bis Zivil-, Gemeinde- und Friedhofsunterlagen gefunden sind.",
    isaacAddition: " Das Familienheft ergänzt ein Einwanderungszertifikat von Yishuv Hadash vom Juli 1939, die Ankunft in Palästina im August 1939, Isaacs Nachkriegsarbeit mit Jewish Agency und UNRRA in DP-Lagern einschließlich Hof sowie sein Treffen mit Paula in Rom. Diese Angaben sind als Familienquelle gekennzeichnet.",
    saloAddition: " Nach dem Familienbericht im Heft wurde Salo am 1. Januar 1939 versteckt in einem Lastwagen nach Polen gebracht und reiste später über Białystok und Wilna, bevor er am 1. April 1940 Palästina erreichte. Dies ergänzt sein Yad-Vashem-Zeugnis, ersetzt es aber nicht."
  }
};

Object.entries(familyTreeBookEvidence).forEach(([lang, evidence]) => {
  t[lang].updates.cards.splice(1, 0, ...evidence.updates);
  t[lang].sources.cards.splice(0, 0, evidence.source);
  t[lang].sources.ledger.splice(0, 0, evidence.ledger);
  evidence.questions.forEach((question, index) => t[lang].questions.items.splice(1 + index, 0, question));
  t[lang].family.text += evidence.familyAddition;
  const isaacIndex = t[lang].people.cards.findIndex((card) => card[1].includes(lang === "he" ? "יצחק אליעזר" : "Isaac Eliezer"));
  if (isaacIndex >= 0) t[lang].people.cards[isaacIndex][3] += evidence.isaacAddition;
  const saloIndex = t[lang].people.cards.findIndex((card) => card[1].includes(lang === "he" ? "סאלו" : lang === "de" ? "Salo" : "Salo"));
  if (saloIndex >= 0) t[lang].people.cards[saloIndex][3] += evidence.saloAddition;
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
        <div class="hero-actions"><a class="button primary" href="#family">${d.hero.primary}</a><a class="button secondary" href="#places">${d.hero.secondary}</a></div>
      </div>
      <aside class="hero-card"><div class="hero-card-content"><span class="hero-card-kicker">${d.hero.cardKicker}</span><h2>${d.hero.cardTitle}</h2><div class="stat-row">${d.hero.stats.map(([big, small]) => `<div class="stat"><strong>${big}</strong><span>${small}</span></div>`).join("")}</div></div></aside>
    </section>

    <section id="about" class="section" aria-labelledby="about-title"><div class="section-heading"><div><p class="kicker">${d.about.kicker}</p><h2 id="about-title">${d.about.title}</h2></div><p>${d.about.text}</p></div><div class="chip-row">${d.about.chips.map((chip) => `<span class="chip">${chip}</span>`).join("")}</div></section>

    <section id="family-photo" class="section family-photo" aria-labelledby="family-photo-title"><div class="section-heading"><div><p class="kicker">${d.photo.kicker}</p><h2 id="family-photo-title">${d.photo.title}</h2></div><p>${d.photo.text}</p></div><figure class="family-photo-figure"><img src="family-photo.jpg" alt="${d.photo.alt}" loading="lazy"><figcaption>${d.photo.caption}</figcaption></figure></section>

    <section id="people" class="section" aria-labelledby="people-title"><div class="section-heading"><div><p class="kicker">${d.people.kicker}</p><h2 id="people-title">${d.people.title}</h2></div><p>${d.people.intro}</p></div><div class="people-grid">${d.people.cards.map(([kind, name, meta, text, source]) => `<article class="person-card"><span class="status ${statusClass[kind]}">${d.people.labels[kind]}</span><h3>${name}</h3><p class="person-meta">${meta}</p><p>${text}</p><p class="note">${source}</p></article>`).join("")}</div></section>

    <section id="research-update" class="section" aria-labelledby="research-update-title"><div class="section-heading"><div><p class="kicker">${d.updates.kicker}</p><h2 id="research-update-title">${d.updates.title}</h2></div><p>${d.updates.intro}</p></div><div class="findings-grid">${d.updates.cards.map(([kind, title, text, link]) => `<article class="finding-card ${kind === "open" ? "restricted" : ""}"><span class="status ${statusClass[kind]}">${d.updates.labels[kind]}</span><h3>${title}</h3><p>${text}</p><div>${link}</div></article>`).join("")}</div><p class="note finding-note">${d.updates.note}</p></section>

    <section id="family" class="section" aria-labelledby="family-title"><div class="section-heading"><div><p class="kicker">${d.family.kicker}</p><h2 id="family-title">${d.family.title}</h2></div><p>${d.family.text}</p></div><div class="family-tree"><h3>${d.family.parents}</h3><div class="parents"><div class="tree-card"><strong>${d.family.parent1[0]}</strong><small>${d.family.parent1[1]}</small><span class="status family">${d.family.familyRecord}</span><small>${d.family.parent1[2]}</small></div><div class="tree-card"><strong>${d.family.parent2[0]}</strong><small>${d.family.parent2[1]}</small><span class="status family">${d.family.familyRecord}</span><small>${d.family.parent2[2]}</small></div></div><div class="tree-connector"></div><h3>${d.family.children}</h3><div class="children">${d.family.childData.map(([name, meta, kind], i) => { const childKind = kind || (i === 0 ? "direct" : "family"); const visualKind = childKind === "arolsen" ? "direct" : childKind; return `<div class="tree-card"><strong>${name}</strong><small>${meta}</small><span class="status ${visualKind}">${d.family.childStatus[childKind]}</span></div>`; }).join("")}</div></div><div class="family-lead"><p class="kicker">${d.family.leadTitle}</p><p>${d.family.leadText}</p><p class="note">${d.family.leadLinks}</p></div><p class="note">${d.family.note}</p></section>

    <section id="timeline" class="section" aria-labelledby="timeline-title"><div class="section-heading"><div><p class="kicker">${d.timeline.kicker}</p><h2 id="timeline-title">${d.timeline.title}</h2></div><p>${d.timeline.intro}</p></div><div class="timeline">${d.timeline.events.map(([year, title, text, source]) => `<article class="timeline-item"><div class="timeline-year">${year}</div><span class="timeline-dot" aria-hidden="true"></span><div class="timeline-copy"><h3>${title}</h3><p>${text}</p><p class="note">${source}</p></div></article>`).join("")}</div></section>

    <section id="places" class="section" aria-labelledby="places-title"><div class="section-heading"><div><p class="kicker">${d.places.kicker}</p><h2 id="places-title">${d.places.title}</h2></div><p>${d.places.intro}</p></div><div class="places-grid">${d.places.cards.map(([num, name, text]) => `<article class="place-card"><span class="place-num">${num}</span><h3>${name}</h3><p>${text}</p></article>`).join("")}</div><div class="route-line" aria-label="${d.places.route}"><span></span><i></i><strong>${d.places.route}</strong><i></i><span></span></div></section>

    <section id="testimony" class="section" aria-labelledby="testimony-title"><div class="section-heading"><div><p class="kicker">${d.testimony.kicker}</p><h2 id="testimony-title">${d.testimony.title}</h2></div></div><div class="testimony"><div class="quote-card"><span class="quote-mark" aria-hidden="true">“</span><blockquote>${d.testimony.quote}</blockquote><cite>${d.testimony.cite}</cite></div><div class="testimony-copy"><h3>${d.testimony.heading}</h3><p>${d.testimony.text}</p><div class="fact-list">${d.testimony.facts.map(([label, value]) => `<div class="fact"><strong>${label}</strong>${value}</div>`).join("")}</div></div></div></section>

    <section id="sources" class="section" aria-labelledby="sources-title"><div class="section-heading"><div><p class="kicker">${d.sources.kicker}</p><h2 id="sources-title">${d.sources.title}</h2></div><p>${d.sources.intro}</p></div><div class="evidence-tabs" role="group" aria-label="${d.sources.title}">${Object.entries(d.sources.filters).map(([key, label], i) => `<button class="filter-btn ${i === 0 ? "active" : ""}" type="button" data-filter="${key}">${label}</button>`).join("")}</div><div class="source-grid">${d.sources.cards.map(([kind, title, text, link]) => `<article class="source-card" data-kind="${kind}"><span class="source-type">${d.sources.filters[kind]}</span><h3>${title}</h3><p>${text}</p>${link.includes("<a") ? link : `<span class="note">${link}</span>`}</article>`).join("")}</div><div class="source-ledger"><div class="ledger-row ledger-head">${d.sources.ledgerHead.map((cell) => `<div>${cell}</div>`).join("")}</div>${d.sources.ledger.map((row) => `<div class="ledger-row">${row.map((cell) => `<div>${cell}</div>`).join("")}</div>`).join("")}</div></section>

    <section id="questions" class="section" aria-labelledby="questions-title"><div class="questions"><div class="questions-intro"><p class="eyebrow">${d.questions.kicker}</p><h2 id="questions-title">${d.questions.title}</h2><p>${d.questions.text}</p></div><div class="question-list">${d.questions.items.map(([title, text]) => `<article class="question"><strong>${title}</strong><p>${text}</p></article>`).join("")}</div></div></section>
  `;

  const desiredOrder = ["top", "about", "family", "family-photo", "people", "places", "research-update", "timeline", "testimony", "sources", "questions"];
  const sections = new Map([...app.querySelectorAll("section[id]")].map((section) => [section.id, section]));
  desiredOrder.forEach((id) => { const section = sections.get(id); if (section) app.appendChild(section); });

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
