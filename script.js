const sheetUrl = "https://docs.google.com/spreadsheets/d/1I38oTVK9kawqEzJdLaSqr29BgB9EcnB2ydfkJBt-JLE/edit?usp=sharing";
const profileUrl = "https://share.google/IoCxnAWEjVG2Uco3Z";

const external = {
  arolsen: "https://collections.arolsen-archives.org/en/document/130624716",
  jdc: "https://archives.jdc.org/jdc-archives-shares-zbaszyn-refugees-list-with-jri-poland/",
  jdcNames: "https://archives.jdc.org/our-collections/names-index/",
  addressBook: "https://adressbuecher.genealogy.net/entry/61fe8119-6537-11ef-b615-0242ac104001",
  jriMathes: "https://legacy.jri-poland.org/databases/psa_image2.php?urldir=31/15/0/5/406&jpgpage=374",
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
    nav: { family: "Family", timeline: "Timeline", places: "Places", sources: "Sources" },
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
    family: {
      kicker: "The family",
      title: "The Simchowicz household, as currently reconstructed",
      text: "Paula’s official Berlin record names Mates and Ester Simchowicz as her parents. The family spreadsheet adds a probable sibling group. The entries below are not all independently confirmed yet.",
      parents: "Parents",
      parent1: ["Mates / Matityahu Simchowicz", "born 1889 · Nowy Sącz", "family spreadsheet: recorded murdered in 1943"],
      parent2: ["Ester / Esther Simchowicz", "born 1896 · Dąbrowa Górnicza", "name varies across documents"],
      leadTitle: "A new Mathes lead",
      leadText: "JRI-Poland indexes a Mathes Scherer, born 24 September 1889, whose mother was Ides Simchowicz, in records connected with Wiśnicz and Bochnia. He may be the Mathes Sinechowitz listed at Grenadierstraße 17 in Berlin in 1929, but the surname and birthplace differ from the family record. This remains a research lead, not a confirmed identification.",
      leadLinks: `<a href="${external.jriMathes}" target="_blank" rel="noreferrer">View the JRI source image ↗</a> · <a href="${external.addressBook}" target="_blank" rel="noreferrer">View the 1929 Berlin address record ↗</a>`,
      children: "Children named in the family spreadsheet",
      childData: [
        ["Paula Pnina", "22 June 1919 · Berlin", "Direct documents"],
        ["Isaac Eliezer", "birth date not yet found", "Family record"],
        ["Rosa Shoshana", "1 January 1922", "Family record"],
        ["Salo / Shlomo", "24 May 1923", "Family record"],
        ["Mina", "7 September 1924", "Family record"],
        ["Sascha", "1929", "Family record"]
      ],
      direct: "Direct documents",
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
        ["direct", "Paula’s CV", "German Lebenslauf: birth, schools, employment, expulsion, forced labor, camp sequence, and liberation.", "Paula Simchovicz CV · p. 1"],
        ["direct", "1955 sworn statement", "Paula’s first-person account of Zbąszyń, Tarnów, SS-uniform sewing, hunger, confinement, and transfer in 1941.", "Scanned statement · 4 May 1955"],
        ["family", "Family spreadsheet", "The working family table with names, birth years or dates, places, and fate fields for the Simchovitz–Ofen project.", `<a href="${sheetUrl}" target="_blank" rel="noreferrer">Open the family spreadsheet ↗</a>`],
        ["family", "Genealogy profile", "The public profile that connects Paula Pnina Rapaport with the Simchowicz surname and the 1919–1994 dates.", `<a href="${profileUrl}" target="_blank" rel="noreferrer">Open the genealogy profile ↗</a>`],
        ["context", "Zbąszyń records", "Arolsen Archives’ directory of Polish Jews expelled from the German Reich in October 1938, with names, parents, birth data, addresses, and destinations.", `<a href="${external.arolsen}" target="_blank" rel="noreferrer">Arolsen Archives ↗</a>`],
        ["context", "JDC refugee list", "A large list of Zbąszyń refugees and overseas relatives, useful for searching Paula, Mates, and spelling variants.", `<a href="${external.jdc}" target="_blank" rel="noreferrer">JDC Archives ↗</a>`],
        ["context", "Berlin’s Jewish neighborhood", "Grenadierstraße belonged to the Scheunenviertel, a major center of Eastern European Jewish life. This is historical context for Paula’s Berlin years, not proof of a specific school or building link.", `<a href="${external.fuBerlin}" target="_blank" rel="noreferrer">FU Berlin ↗</a> · <a href="${external.jewishMuseum}" target="_blank" rel="noreferrer">Jewish Museum Berlin ↗</a>`],
        ["context", "Tarnów under occupation", "USHMM context on the occupation of Tarnów, forced labor, the ghetto, deportations, and the destruction of the Jewish community.", `<a href="${external.usHoloTarnow}" target="_blank" rel="noreferrer">USHMM ↗</a>`],
        ["context", "Further reading", "Dohrn and Pickhan, Transit and Transformation (2010); Anne-Christin Sass, Berliner Luftmenschen (2012); Karsten Krampitz, Pogrom im Scheunenviertel (2023).", "Bibliography supplied with the family research"],
        ["lead", "Mathes Scherer / Sinechowitz", "JRI-Poland records a Mathes Scherer born 24 September 1889, with mother Ides Simchowicz. This may connect to the Berlin Mathes Sinechowitz, but the identity is not confirmed.", `<a href="${external.jriMathes}" target="_blank" rel="noreferrer">Open the JRI source image ↗</a>`],
        ["lead", "Skarżysko question", "Paula’s CV appears to name a camp as “Skarsicz”. Skarżysko-Kamienna is a plausible reading, but the individual identification still needs confirmation.", `<a href="${external.usHoloSkarzysko}" target="_blank" rel="noreferrer">Camp context ↗</a>`]
      ],
      ledgerHead: ["Source", "Type", "Contribution"],
      ledger: [
        ["Paula Simchovicz CV.pdf", "Direct document", "Berlin birth and education; Paliwoda; 1938 expulsion; wartime camps; liberation."],
        ["Scanned_20260901-1028.pdf", "Direct document", "Sworn testimony dated 4 May 1955; Zbąszyń and Tarnów chronology."],
        ["פאולה מסמכים.pdf", "Direct documents", "Grenadierstraße 17; death certificate; Red Cross records; correspondence from 1939–1940."],
        ["1929 Jewish Berlin address book", "Direct source", "Mathes Sinechowitz at Grenadierstraße 17."],
        ["JRI-Poland search report", "Research lead", "Mathes Scherer, born 24 September 1889; mother Ides Simchowicz; Wiśnicz/Bochnia records."],
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
        ["Salo in Vilnius", "Identify the “S. Simchowicz” receiving postcards at Świętego Nikodema 6 and establish whether he is the Salo listed in the spreadsheet."],
        ["Ester / Esther / Erma / Erna", "Resolve the mother’s spelling variants by locating a birth, marriage, refugee, or Berlin registration record."],
        ["The Ofen connection", "Determine whether “Ofen” is a maiden name, married name, or connected family branch."],
        ["Mathes Scherer / Sinechowitz", "Test whether the JRI Mathes Scherer, born 24 September 1889 to Ides Simchowicz, is the man listed in Berlin at Grenadierstraße 17 in 1929."],
        ["Paula’s camp route", "Verify the unclear camp name in the CV and the exact sequence between Tarnów, Płaszów, Skarżysko, and Częstochowa."]
      ]
    },
    footer: { eyebrow: "A living archive", note: "Built from family documents, a family spreadsheet, and public archival context. Last updated 2 September 2026.", privacy: "Living people are not profiled here; uncertain claims are labelled.", sources: "View sources" }
  },
  he: {
    title: "ארכיון משפחת שמחוביץ",
    brand: { title: "שמחוביץ", subtitle: "ארכיון משפחתי" },
    nav: { family: "המשפחה", timeline: "ציר זמן", places: "מקומות", sources: "מקורות" },
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
    family: {
      kicker: "המשפחה",
      title: "משפחת שמחוביץ כפי שניתן לשחזר כיום",
      text: "ברישום הברלינאי הרשמי של פאולה מופיעים מתי/מתתיהו ואסתר שמחוביץ כהוריה. הגיליון המשפחתי מוסיף קבוצת אחים ואחיות אפשרית. לא כל הרשומות אומתו עדיין באופן עצמאי.",
      parents: "הורים",
      parent1: ["מתי / מתתיהו שמחוביץ", "נולד ב־1889 · נובי סונץ׳", "לפי הגיליון המשפחתי: נרצח ב־1943"],
      parent2: ["אסתר / אסתר שמחוביץ", "נולדה ב־1896 · דומברובה גורניצ׳ה", "האיות משתנה בין המסמכים"],
      leadTitle: "כיוון חדש לגבי מתי",
      leadText: "ב־JRI-Poland מופיע מתֶס שרר, שנולד ב־24 בספטמבר 1889, ואמו אידס שמחוביץ, ברשומות הקשורות לוִישְנִיץ ולבוכניה. ייתכן שזהו מתֶס סינֶכוֹביץ המופיע בגרנָדירשטראסה 17 בברלין בשנת 1929, אך שם המשפחה ומקום הלידה שונים מן הרשומה המשפחתית. זהו כיוון למחקר, לא זיהוי מאומת.",
      leadLinks: `<a href="${external.jriMathes}" target="_blank" rel="noreferrer">לצפייה בתמונת המקור של JRI ↗</a> · <a href="${external.addressBook}" target="_blank" rel="noreferrer">לרשומת ספר הכתובות של ברלין ↗</a>`,
      children: "ילדים המופיעים בגיליון המשפחתי",
      childData: [
        ["פאולה פנינה", "22 ביוני 1919 · ברלין", "מסמכים ישירים"],
        ["יצחק אליעזר", "תאריך לידה טרם נמצא", "רשומה משפחתית"],
        ["רוזה שושנה", "1 בינואר 1922", "רשומה משפחתית"],
        ["סאלו / שלמה", "24 במאי 1923", "רשומה משפחתית"],
        ["מינה", "7 בספטמבר 1924", "רשומה משפחתית"],
        ["סשה", "1929", "רשומה משפחתית"]
      ],
      direct: "מסמכים ישירים", familyRecord: "רשומה משפחתית", lead: "כיוון למחקר",
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
        ["direct", "קורות החיים של פאולה", "קורות חיים בגרמנית: לידה, לימודים, עבודה, הגירוש, עבודת הכפייה, רצף המחנות והשחרור.", "Paula Simchovicz CV · עמ׳ 1"],
        ["direct", "ההצהרה בשבועה מ־1955", "עדות בגוף ראשון על זבונשין, טארנוב, תפירת מדי אס־אס, רעב, כליאה וההעברה ב־1941.", "הצהרה סרוקה · 4 במאי 1955"],
        ["family", "הגיליון המשפחתי", "טבלת העבודה עם שמות, שנות או תאריכי לידה, מקומות ושדות גורל בפרויקט שמחוביץ–אופן.", `<a href="${sheetUrl}" target="_blank" rel="noreferrer">פתיחת הגיליון המשפחתי ↗</a>`],
        ["family", "פרופיל גנאלוגי", "הפרופיל הציבורי המקשר בין פאולה פנינה רפפורט, שם המשפחה שמחוביץ והתאריכים 1919–1994.", `<a href="${profileUrl}" target="_blank" rel="noreferrer">פתיחת הפרופיל ↗</a>`],
        ["context", "רשומות זבונשין", "מדריך ארכיון ארולסן של יהודים בעלי אזרחות פולנית שגורשו מהרייך באוקטובר 1938, עם שמות, הורים, לידה, כתובות ויעדים.", `<a href="${external.arolsen}" target="_blank" rel="noreferrer">ארכיון ארולסן ↗</a>`],
        ["context", "רשימת הפליטים של JDC", "רשימה גדולה של פליטי זבונשין וקרובי משפחה בחו״ל, שימושית לחיפוש פאולה, מתי וגרסאות האיות.", `<a href="${external.jdc}" target="_blank" rel="noreferrer">ארכיון JDC ↗</a>`],
        ["context", "השכונה היהודית של ברלין", "גרנדירשטראסה הייתה חלק מרובע השויננוירטל, מרכז חשוב לחיי יהודי מזרח אירופה. זהו רקע היסטורי לשנותיה של פאולה בברלין, ולא הוכחה לקשר לבית ספר או לבניין מסוים.", `<a href="${external.fuBerlin}" target="_blank" rel="noreferrer">אוניברסיטת פרי בברלין ↗</a> · <a href="${external.jewishMuseum}" target="_blank" rel="noreferrer">המוזיאון היהודי בברלין ↗</a>`],
        ["context", "טארנוב תחת הכיבוש", "רקע של USHMM על כיבוש טארנוב, עבודת הכפייה, הגטו, הגירושים וחורבן הקהילה היהודית.", `<a href="${external.usHoloTarnow}" target="_blank" rel="noreferrer">USHMM ↗</a>`],
        ["context", "לקריאה נוספת", "Dohrn ו־Pickhan, Transit and Transformation (2010); Anne-Christin Sass, Berliner Luftmenschen (2012); Karsten Krampitz, Pogrom im Scheunenviertel (2023).", "ביבליוגרפיה שסופקה במסגרת המחקר המשפחתי"],
        ["lead", "מתֶס שרר / סינֶכוֹביץ", "ב־JRI-Poland מופיע מתֶס שרר, שנולד ב־24 בספטמבר 1889, ואמו אידס שמחוביץ. ייתכן קשר למתֶס סינֶכוֹביץ בברלין, אך הזיהוי אינו מאומת.", `<a href="${external.jriMathes}" target="_blank" rel="noreferrer">לתמונת המקור של JRI ↗</a>`],
        ["lead", "שאלת סקרז׳יסקו", "בקורות החיים מופיע כנראה שם מחנה “Skarsicz”. סקרז׳יסקו־קמיינה היא קריאה אפשרית, אך הזיהוי האישי עדיין טעון אישור.", `<a href="${external.usHoloSkarzysko}" target="_blank" rel="noreferrer">רקע על המחנה ↗</a>`]
      ], ledgerHead: ["מקור", "סוג", "תרומה"], ledger: [["Paula Simchovicz CV.pdf", "מסמך ישיר", "לידה וחינוך בברלין; פאליוודה; הגירוש; המחנות; השחרור."], ["Scanned_20260901-1028.pdf", "מסמך ישיר", "עדות בשבועה מ־4 במאי 1955; ציר זבונשין–טארנוב."], ["פאולה מסמכים.pdf", "מסמכים ישירים", "גרנדירשטראסה 17; תעודת פטירה; הצלב האדום; התכתבויות מ־1939–1940."], ["ספר הכתובות היהודי, ברלין 1929", "מקור ישיר", "מתֶס סינֶכוֹביץ בגרנָדירשטראסה 17."], ["דוח חיפוש JRI-Poland", "כיוון למחקר", "מתֶס שרר, יליד 24 בספטמבר 1889; אם: אידס שמחוביץ; רשומות וישניץ/בוכניה."], ["הגיליון המשפחתי", "מקור משפחתי", "הורים, ילדים, נתוני לידה ורשומות גורל זמניות."], ["ארכיונים ציבוריים", "רקע / כיוונים", "ארולסן, JDC, USHMM, מוזיאון היהדות בברלין ואוניברסיטת פרי." ]]
    },
    questions: {
      kicker: "המחקר נמשך", title: "מה עדיין חסר", text: "היסטוריה משפחתית טובה משאירה את אי־הוודאות גלויה. אלה השאלות הבאות שסביר ביותר שיהפכו את המתווה לגנאלוגיה מתועדת במלואה.", items: [["מתי ואסתר אחרי 1938", "לאתר אותם בחומרי זבונשין של ארולסן ושל JDC, ואז לעקוב אחר רישומי הגטו והגירושים מטארנוב."], ["גורל האחים והאחיות", "לאמת את יצחק אליעזר, רוזה, סאלו, מינה וסשה ברשומות ניצולים, קורבנות, גטו, מחנות או מסמכים שלאחר המלחמה."], ["סאלו בווילנה", "לזהות את “S. Simchowicz” שקיבל גלויות בכתובת ניקודמה 6 ולבדוק אם הוא סאלו המופיע בגיליון."], ["אסתר / Ester / Erma / Erna", "לפתור את גרסאות האיות של שם האם באמצעות רישום לידה, נישואין, פליטים או מרשם ברלינאי."], ["הקשר לאופן", "לקבוע אם „אופן“ הוא שם נעורים, שם לאחר נישואין או ענף משפחתי קשור."], ["מתֶס שרר / סינֶכוֹביץ", "לבדוק אם מתֶס שרר מרשומות JRI, יליד 24 בספטמבר 1889 ובנה של אידס שמחוביץ, הוא האיש שהופיע בברלין בגרנָדירשטראסה 17 בשנת 1929."], ["מסלול המחנות של פאולה", "לאמת את שם המחנה הלא ברור בקורות החיים ואת הרצף המדויק בין טארנוב, פלאשוב, סקרז׳יסקו וצ׳נסטוחובה."]]
    },
    footer: { eyebrow: "ארכיון חי", note: "נבנה ממסמכים משפחתיים, גיליון משפחתי והקשר מארכיונים ציבוריים. עדכון אחרון: 2 בספטמבר 2026.", privacy: "אנשים החיים כיום אינם מתועדים כאן; טענות לא ודאיות מסומנות.", sources: "למקורות" }
  },
  de: {
    title: "Familienarchiv Simchowicz",
    brand: { title: "Simchowicz", subtitle: "Familienarchiv" },
    nav: { family: "Familie", timeline: "Zeitleiste", places: "Orte", sources: "Quellen" },
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
    family: {
      kicker: "Die Familie",
      title: "Der Haushalt Simchowicz, soweit derzeit rekonstruiert",
      text: "Paulas amtlicher Berliner Nachweis nennt Mates und Ester Simchowicz als ihre Eltern. Die Familientabelle ergänzt eine wahrscheinliche Geschwistergruppe. Noch sind nicht alle Einträge unabhängig bestätigt.",
      parents: "Eltern",
      parent1: ["Mates / Matityahu Simchowicz", "geb. 1889 · Nowy Sącz", "Familientabelle: 1943 als ermordet vermerkt"],
      parent2: ["Ester / Esther Simchowicz", "geb. 1896 · Dąbrowa Górnicza", "Schreibweise variiert in den Dokumenten"],
      leadTitle: "Ein neuer Hinweis zu Mates",
      leadText: "JRI-Poland verzeichnet einen Mathes Scherer, geboren am 24. September 1889, dessen Mutter Ides Simchowicz war, in Unterlagen zu Wiśnicz und Bochnia. Er könnte der 1929 in Berlin unter Mathes Sinechowitz an der Grenadierstraße 17 verzeichnete Mann sein; Familienname und Geburtsort weichen jedoch von der Familientabelle ab. Dies ist ein Forschungshinweis, keine bestätigte Identifizierung.",
      leadLinks: `<a href="${external.jriMathes}" target="_blank" rel="noreferrer">JRI-Originalbild ansehen ↗</a> · <a href="${external.addressBook}" target="_blank" rel="noreferrer">Berliner Adressbucheintrag ansehen ↗</a>`,
      children: "Kinder in der Familientabelle",
      childData: [["Paula Pnina", "22. Juni 1919 · Berlin", "Direkte Dokumente"], ["Isaac Eliezer", "Geburtsdatum noch nicht gefunden", "Familienangabe"], ["Rosa Shoshana", "1. Januar 1922", "Familienangabe"], ["Salo / Shlomo", "24. Mai 1923", "Familienangabe"], ["Mina", "7. September 1924", "Familienangabe"], ["Sascha", "1929", "Familienangabe"]],
      direct: "Direkte Dokumente", familyRecord: "Familienangabe", lead: "Forschungshinweis", note: "Der Titel der Tabelle enthält außerdem „Ofen“. Die genaue Verbindung zur Familie Simchowicz ist noch offen."
    },
    timeline: {
      kicker: "Paulas Leben", title: "Ein Leben, nachgezeichnet durch Dokumente", intro: "Lebenslauf, eidesstattliche Erklärung, Berliner Nachweis, Sterbeurkunde und Korrespondenz ergeben eine ungewöhnlich durchgehende Spur von der Kindheit in Berlin bis zum Nachkriegsleben in Israel.",
      events: [["1919", "In Berlin geboren", "Paula wurde am 22. Juni 1919 als Paula Simchowicz geboren, Tochter von Mates und Ester/Esther Simchowicz.", "Lebenslauf · Berliner Nachweis · Sterbeurkunde"], ["ca. 1925", "Jüdische Schulbildung", "Mit etwa sechs Jahren kam sie in die jüdische Schule in der Rykestraße. Vier Jahre später besuchte sie eine Mädchenmittelschule in der Kaiserstraße, später in der Großen Hamburger Straße.", "Lebenslauf"], ["1933", "Beginn der Arbeit", "Sie verließ die Schule vor Abschluss und erlernte bei Paliwoda in der Hufelandstraße den Beruf der Damenschneiderin. Ihr Monatslohn stieg nach eigener Angabe von 80 auf 220 Reichsmark.", "Lebenslauf"], ["Sept. 1938", "Deutschland nach Zbąszyń", "In ihrer eidesstattlichen Erklärung schreibt sie, dass sie Deutschland verließ und nach Zbąszyń in Polen ging. Die Familiensammlung beschreibt dies als Vertreibung polnischer Juden aus Berlin.", "Eidesstattliche Erklärung 1955 · Familienbrief"], ["Jom Kippur 1939", "Zwangsarbeit in Tarnów", "Ein deutscher Soldat verhaftete sie auf der Straße. Sie wurde in ein bewachtes Gebäude außerhalb Tarnóws gebracht und etwa 14 Stunden täglich zum Nähen von SS-Uniformen gezwungen, ohne Lohn.", "Eidesstattliche Erklärung 1955"], ["1939–Juni 1941", "Gefangen in einer Werkstatt", "Sie beschreibt Isolation, SS-Bewachung, ein Todesstrafenverbot zu gehen und 300 Gramm Brot als einzige Nahrung. Im Juni 1941 wurde sie in eine Schneiderei in Tarnów verlegt.", "Eidesstattliche Erklärung 1955"], ["1941–1945", "Lager und Befreiung", "Der Lebenslauf nennt Płaszów und einen Ort, der wie Skarżysko aussieht, danach Częstochowa. Der Ortsname ist im Scan unklar und bleibt ein Forschungshinweis.", "Lebenslauf · historischer Kontext"], ["1955", "Eidesstattliche Aussage", "In Tel Aviv bestätigte Paula ihre Geschichte an Eides statt. Diese Aussage gehört zu den wichtigsten Primärquellen der Sammlung.", "Aussage vom 4. Mai 1955"], ["1994", "Pnina Rapoport", "Die israelische Sterbeurkunde führt sie als Pnina Rapoport, geboren am 22. Juni 1919 und gestorben am 19. Oktober 1994 in Tel Aviv–Jaffa.", "Israelische Sterbeurkunde"]]
    },
    places: {
      kicker: "Eine Geografie von Bruch und Überleben", title: "Die Route, die die Dokumente zeigen", intro: "Jeder Ort ist mehr als ein Punkt auf der Karte: Er markiert eine Veränderung durch Bildung, Arbeit, Verfolgung, Gefangenschaft oder Überleben.", cards: [["01", "Berlin", "Geburt, Schule, Arbeit und die dokumentierte Familienadresse Grenadierstraße 17."], ["02", "Zbąszyń", "Paulas eigener Zielort nach dem Verlassen Deutschlands im September 1938."], ["03", "Tarnów", "Mates und weitere Simchowicz-Familienkorrespondenz erscheinen hier 1939–1940; Paula musste hier arbeiten."], ["04", "Płaszów → Skarżysko → Częstochowa", "Die Kriegsroute im Lebenslauf; „Skarżysko“ ist eine begründete Lesung eines unklaren Scans."], ["05", "Tel Aviv", "Nachkriegsheim, eidesstattliche Aussage 1955 und Paulas Tod 1994."]], route: "Berlin → Zbąszyń → Tarnów → Lager → Israel"
    },
    testimony: {
      kicker: "Paulas Stimme", title: "Was ihre eigene Aussage erzählt", quote: "Wir mussten durchschnittlich vierzehn Stunden täglich arbeiten. Wir erhielten keinen Lohn; unsere einzige Nahrung waren 300 Gramm Brot.", cite: "Paula Rapoport, eidesstattliche Erklärung, Tel Aviv, 4. Mai 1955", heading: "Ein seltenes Zeugnis aus erster Person", text: "Die Erklärung von 1955 präzisiert den Lebenslauf. Sie datiert den Beginn der Zwangsarbeit auf Ende September 1939, Jom Kippur, und hält Isolation, SS-Bewachung, das Verbot zu gehen, lange Schichten, Hunger und unbezahlte Arbeit in Paulas eigenen Worten fest.", facts: [["Identität", "Paula Simchowicz → Pnina Rapoport"], ["Familie", "Tochter von Mates und Ester/Esther"], ["Arbeit", "Damenkleidung in Berlin; Zwangsnähen in Tarnów"], ["Ergebnis", "Sie überlebte und baute sich in Israel ein Leben auf"]]
    },
    sources: {
      kicker: "Belege und Kontext", title: "Eine transparente Quellenkette", intro: "Das Archiv unterscheidet zwischen direkt dokumentierten Fakten, Angaben aus der Familientabelle und historischem Kontext oder Forschungshinweisen.", filters: { all: "Alle", direct: "Direkte Dokumente", family: "Familienquelle", context: "Historischer Kontext", lead: "Forschungshinweis" },
      cards: [["direct", "Paulas Dokumentensammlung", "Berliner Identitätsnachweis, israelische Sterbeurkunde, Rotkreuz-Formulare, Familienkorrespondenz sowie Kopien des Lebenslaufs und der eidesstattlichen Erklärung.", "Paula documents · S. 1–21"], ["direct", "Paulas Lebenslauf", "Deutscher Lebenslauf: Geburt, Schulen, Arbeit, Vertreibung, Zwangsarbeit, Lagerfolge und Befreiung.", "Paula Simchovicz CV · S. 1"], ["direct", "Eidesstattliche Erklärung 1955", "Paulas Bericht aus erster Person über Zbąszyń, Tarnów, SS-Uniformen, Hunger, Gefangenschaft und den Transfer 1941.", "Gescannte Erklärung · 4. Mai 1955"], ["direct", "Jüdisches Berliner Adressbuch 1929", "Das jüdische Adressbuch verzeichnet Mathes Sinechowitz an der Grenadierstraße 17 in Berlin. Dies ist die Grundlage für die korrigierte Familienadresse.", `<a href="${external.addressBook}" target="_blank" rel="noreferrer">Adressbucheintrag öffnen ↗</a>`], ["family", "Familientabelle", "Arbeitsübersicht mit Namen, Geburtsjahren oder -daten, Orten und Schicksalsfeldern im Projekt Simchowicz–Ofen.", `<a href="${sheetUrl}" target="_blank" rel="noreferrer">Familientabelle öffnen ↗</a>`], ["family", "Genealogie-Profil", "Öffentliches Profil, das Paula Pnina Rapoport mit dem Namen Simchowicz und den Daten 1919–1994 verbindet.", `<a href="${profileUrl}" target="_blank" rel="noreferrer">Genealogie-Profil öffnen ↗</a>`], ["context", "Zbąszyń-Unterlagen", "Verzeichnis des Arolsen Archives zu polnischen Juden, die im Oktober 1938 aus dem Deutschen Reich ausgewiesen wurden, mit Namen, Eltern, Geburtsdaten, Adressen und Zielen.", `<a href="${external.arolsen}" target="_blank" rel="noreferrer">Arolsen Archives ↗</a>`], ["context", "JDC-Flüchtlingsliste", "Eine große Liste der Zbąszyń-Flüchtlinge und ihrer Angehörigen im Ausland, nützlich für Paula, Mates und Schreibvarianten.", `<a href="${external.jdc}" target="_blank" rel="noreferrer">JDC Archives ↗</a>`], ["context", "Berlins jüdisches Viertel", "Grenadierstraße lag im Scheunenviertel, einem wichtigen Zentrum osteuropäisch-jüdischen Lebens. Das ist historischer Kontext für Paula in Berlin, kein Beweis für eine bestimmte Schule oder ein bestimmtes Gebäude.", `<a href="${external.fuBerlin}" target="_blank" rel="noreferrer">FU Berlin ↗</a> · <a href="${external.jewishMuseum}" target="_blank" rel="noreferrer">Jüdisches Museum Berlin ↗</a>`], ["context", "Tarnów unter Besatzung", "USHMM-Kontext zu Besatzung, Zwangsarbeit, Ghetto, Deportationen und der Zerstörung der jüdischen Gemeinde Tarnóws.", `<a href="${external.usHoloTarnow}" target="_blank" rel="noreferrer">USHMM ↗</a>`], ["context", "Weiterführende Literatur", "Dohrn und Pickhan, Transit and Transformation (2010); Anne-Christin Sass, Berliner Luftmenschen (2012); Karsten Krampitz, Pogrom im Scheunenviertel (2023).", "Bibliografie aus der Familienforschung"], ["lead", "Mathes Scherer / Sinechowitz", "JRI-Poland verzeichnet einen Mathes Scherer, geboren am 24. September 1889, dessen Mutter Ides Simchowicz war. Dies könnte mit dem Berliner Mathes Sinechowitz zusammenhängen, ist aber nicht bestätigt.", `<a href="${external.jriMathes}" target="_blank" rel="noreferrer">JRI-Originalbild öffnen ↗</a>`], ["lead", "Die Skarżysko-Frage", "Im Lebenslauf steht offenbar „Skarsicz“. Skarżysko-Kamienna ist eine plausible Lesung, aber die individuelle Identifizierung muss noch bestätigt werden.", `<a href="${external.usHoloSkarzysko}" target="_blank" rel="noreferrer">Lagerkontext ↗</a>`]], ledgerHead: ["Quelle", "Typ", "Beitrag"], ledger: [["Paula Simchovicz CV.pdf", "Direktes Dokument", "Geburt und Schule in Berlin; Paliwoda; Vertreibung; Lager; Befreiung."], ["Scanned_20260901-1028.pdf", "Direktes Dokument", "Eidesstattliche Aussage vom 4. Mai 1955; Chronologie Zbąszyń–Tarnów."], ["פאולה מסמכים.pdf", "Direkte Dokumente", "Grenadierstraße 17; Sterbeurkunde; Rotes Kreuz; Korrespondenz 1939–1940."], ["Jüdisches Berliner Adressbuch 1929", "Direkte Quelle", "Mathes Sinechowitz an der Grenadierstraße 17."], ["JRI-Poland-Suchbericht", "Forschungshinweis", "Mathes Scherer, geboren am 24. September 1889; Mutter: Ides Simchowicz; Unterlagen zu Wiśnicz/Bochnia."], ["Familientabelle", "Familienquelle", "Vorläufige Eltern, Kinder, Geburtsdaten und Schicksalsangaben."], ["Öffentliche Archive", "Kontext / Hinweise", "Arolsen, JDC, USHMM, Jüdisches Museum Berlin und FU Berlin."]]
    },
    questions: {
      kicker: "Die Forschung geht weiter", title: "Was noch gefunden werden muss", text: "Eine gute Familiengeschichte macht Unsicherheiten sichtbar. Diese Fragen können aus dem Entwurf eine vollständig belegte Genealogie machen.", items: [["Mates und Ester nach 1938", "In den Zbąszyń-Unterlagen von Arolsen und JDC suchen und anschließend Ghetto- und Deportationsunterlagen aus Tarnów verfolgen."], ["Die Schicksale der Geschwister", "Isaac Eliezer, Rosa, Salo, Mina und Sascha in Überlebenden-, Opfer-, Ghetto-, Lager- oder Nachkriegsunterlagen bestätigen."], ["Salo in Vilnius", "Den „S. Simchowicz“ identifizieren, der Postkarten in der Świętego-Nikodema-Straße 6 erhielt, und prüfen, ob er der Salo der Tabelle ist."], ["Ester / Esther / Erma / Erna", "Die Schreibvarianten des Namens der Mutter durch Geburts-, Heirats-, Flüchtlings- oder Berliner Melderegister klären."], ["Die Verbindung zu Ofen", "Feststellen, ob „Ofen“ ein Mädchenname, ein Ehename oder ein verbundener Familienzweig ist."], ["Mathes Scherer / Sinechowitz", "Prüfen, ob der JRI-Mathes Scherer, geboren am 24. September 1889 und Sohn von Ides Simchowicz, der 1929 an der Grenadierstraße 17 in Berlin verzeichnete Mann ist."], ["Paulas Lagerrute", "Den unklaren Lagernamen im Lebenslauf sowie die genaue Folge Tarnów, Płaszów, Skarżysko und Częstochowa bestätigen."]]
    },
    footer: { eyebrow: "Ein lebendes Archiv", note: "Erstellt aus Familiendokumenten, einer Familientabelle und öffentlichem Archivkontext. Aktualisiert am 2. September 2026.", privacy: "Lebende Personen werden hier nicht profiliert; unsichere Angaben sind gekennzeichnet.", sources: "Quellen ansehen" }
  }
};

const statusClass = { direct: "direct", family: "family", context: "family", lead: "lead" };

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

    <section id="family" class="section" aria-labelledby="family-title"><div class="section-heading"><div><p class="kicker">${d.family.kicker}</p><h2 id="family-title">${d.family.title}</h2></div><p>${d.family.text}</p></div><div class="family-tree"><h3>${d.family.parents}</h3><div class="parents"><div class="tree-card"><strong>${d.family.parent1[0]}</strong><small>${d.family.parent1[1]}</small><span class="status family">${d.family.familyRecord}</span><small>${d.family.parent1[2]}</small></div><div class="tree-card"><strong>${d.family.parent2[0]}</strong><small>${d.family.parent2[1]}</small><span class="status family">${d.family.familyRecord}</span><small>${d.family.parent2[2]}</small></div></div><div class="tree-connector"></div><h3>${d.family.children}</h3><div class="children">${d.family.childData.map(([name, meta, kind], i) => `<div class="tree-card"><strong>${name}</strong><small>${meta}</small><span class="status ${i === 0 ? "direct" : "family"}">${i === 0 ? d.family.direct : d.family.familyRecord}</span></div>`).join("")}</div></div><div class="family-lead"><p class="kicker">${d.family.leadTitle}</p><p>${d.family.leadText}</p><p class="note">${d.family.leadLinks}</p></div><p class="note">${d.family.note}</p></section>

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
