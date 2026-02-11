// Translations for all languages
const translations = {
  en: {
    // Main page
    siteTitle: "goodday4u.com",
    siteSubtitle: "Ultra-small, playful interactions",
    breathe: "Breathe",
    breatheDesc: "A gentle pulsing circle to guide your breath",
    bolt: "Unscrew the Nut",
    boltDesc: "Rotate the nut until it falls off",
    frog: "Squish the Frog",
    frogDesc: "Tap to squish the elastic frog",
    footer: "A quiet, playful corner of the internet",
    donate: "Support",
    share: "Share",
    language: "Language",
    back: "← Back",
    // Breathe page
    breatheTitle: "Breathe",
    breatheInstruction: "Want to calm down?<br>Click the button and breathe",
    breatheHint: "Follow the rhythm",
    breatheStart: "Click to start",
    breatheIn: "Breathe in",
    breatheOut: "Breathe out",
    soundOn: "🔊 Sound: ON",
    soundOff: "🔇 Sound: OFF",
    // Bolt page
    boltTitle: "Unscrew the nut",
    boltHint: "Drag left/right to rotate. The nut will unscrew down the bolt.",
    boltMessage: "You're silly 😄<br>Why did you drop the nut?",
    reset: "↩ Reset",
    // Frog page
    frogTitle: "Squish the frog",
    frogHint: "Tap/click the frog.",
    frogSquishes: "Squishes:",
    frogMessage1: "Well...",
    frogMessage2: "Sure???",
    frogMessage3: "*Stop torturing the animal, animal* 😄",
    boopMode: "boop mode"
    ,
    // Shared content blocks / links
    whatIsThis: "What is this?",
    aboutLink: "About",
    privacyLink: "Privacy",
    contactLink: "Contact",
    homeLink: "Home",

    // Home (index) content
    homeContentTitle: "Micro‑interactions that reset your brain (in under a minute)",
    homeContentP1: "goodday4u.com is a tiny collection of playful, calming micro‑activities you can open when you need a short break: breathe for a few cycles, unscrew a stubborn nut, or “boop” a friendly frog.",
    homeContentP2: "There’s nothing to install and no account to create. Just pick a card, interact for 10–60 seconds, then close the tab and get back to your day a little lighter.",
    homeContentP3: "On mobile, everything important stays at the top (the cards). This extra content is here to make the site more useful, more understandable, and less “empty” for visitors and search engines.",
    faqHowTitle: "How do I use it?",
    faqHowAnswer: "Open any card. Drag or tap — that’s it. Most pages also have sound (you can mute it). Use the language switcher at the bottom.",
    faqFreeTitle: "Is it free?",
    faqFreeAnswer: "Yes. If you want, you can support the project via the Support button.",
    faqTrackTitle: "Do you track me?",
    faqTrackAnswer: "This site keeps simple settings (like language) in your browser. Ads may set cookies. See <a href=\"privacy.html\">Privacy</a> for details.",

    // Game page content blocks
    boltAboutP: "This is a tiny micro‑interaction: drag the nut left/right to rotate it and “unscrew” it down the bolt. It’s meant to be a short, satisfying break — 10–30 seconds, then you’re done.",
    boltAboutTipsHtml: "<li><b>Tip:</b> use small steady drags (works best on mobile).</li><li><b>Sound:</b> tap “Sound” once if your phone blocks audio.</li><li><b>Privacy:</b> see <a href=\"../privacy.html\">Privacy</a>.</li>",
    frogAboutP: "A small, silly micro‑interaction. Tap/press to squish the frog and get a tiny dopamine reset. It’s intentionally simple and quick — no levels, no grind.",
    frogAboutTipsHtml: "<li><b>Sound:</b> mobile browsers enable audio after the first tap.</li><li><b>Reset:</b> clears the counter for this session.</li><li><b>Privacy:</b> see <a href=\"../privacy.html\">Privacy</a>.</li>",
    breatheAboutP: "A simple breathing timer. Tap the circle to start and follow the rhythm: inhale as it grows, exhale as it shrinks. It’s a fast, low-effort way to calm down for 30–60 seconds.",
    breatheAboutTipsHtml: "<li><b>Sound:</b> you can toggle rain noise; phones allow audio after the first tap.</li><li><b>Tip:</b> relax your shoulders and breathe through your nose if comfortable.</li><li><b>Privacy:</b> see <a href=\"../privacy.html\">Privacy</a>.</li>",

    // About page
    aboutTitle: "About this project",
    aboutSubtitle: "goodday4u.com is a small “time killer” in the best sense: a tiny set of micro‑interactions that help you reset, relax, or just smile for a moment.",
    aboutSectionFind: "What you’ll find here",
    aboutBreathe: "Breathe",
    aboutBreatheText: "Tap the circle to start. Follow the rhythm (inhale / exhale). Optional rain sound.",
    aboutBolt: "Unscrew the Nut",
    aboutBoltText: "Drag left/right to rotate and move the nut down the bolt. Sound can be muted.",
    aboutFrog: "Squish the Frog",
    aboutFrogText: "Tap/press the frog to squish it. There’s a counter and a few messages along the way.",
    aboutLanguages: "Languages",
    aboutLanguagesText: "You can switch language on each page. The site stores your choice in your browser.",
    aboutSectionWhy: "Why this exists",
    aboutWhyText: "The goal is simple: provide a gentle, fast distraction that doesn’t demand your attention for long. No feeds, no endless scrolling, no logins — just a few seconds of interaction and you’re done.",
    aboutSectionContact: "Contact",
    aboutContactTextHtml: "Feedback, bug reports, or partnership requests: <a href=\"mailto:support@goodday4u.com\">support@goodday4u.com</a>",

    // Privacy page
    privacyTitle: "Privacy policy",
    privacyUpdated: "Last updated: 2026‑01‑24",
    privacySummaryTitle: "Summary",
    privacySummaryHtml: "<li>We don’t require accounts.</li><li>The site may store small settings (like language) in your browser.</li><li>We may show ads (Google AdSense). Ads can use cookies and similar technologies.</li>",
    privacyLocalTitle: "What we store on your device",
    privacyLocalText: "This website uses localStorage to remember basic preferences (for example, selected language). This data stays in your browser and is not automatically sent to us.",
    privacyAdsTitle: "Advertising (Google AdSense)",
    privacyAdsText: "We may display ads served by Google (AdSense). Google and its partners can use cookies or similar identifiers to serve and measure ads, and to personalize ads depending on your settings and region.",
    privacyAnalyticsTitle: "Analytics",
    privacyAnalyticsText: "At the moment, this site does not intentionally run a dedicated analytics platform. If we add analytics in the future, we will update this page and describe what is collected and why.",
    privacyConsentTitle: "Consent & controls",
    privacyConsentText: "You can control cookies via your browser settings. You can also use private browsing mode or clear site data. If consent banners are required in your region, we may show a consent prompt before loading personalized ads.",
    privacyContactTitle: "Contact",
    privacyContactTextHtml: "Questions about privacy: <a href=\"mailto:support@goodday4u.com\">support@goodday4u.com</a>"
  },
  ru: {
    // Main page
    siteTitle: "goodday4u.com",
    siteSubtitle: "Очень маленькие, игривые взаимодействия",
    breathe: "Дыши",
    breatheDesc: "Мягкий пульсирующий круг для управления дыханием",
    bolt: "Открути Гайку",
    boltDesc: "Вращай гайку, пока она не упадет",
    frog: "Жмякни Лягушку",
    frogDesc: "Нажми, чтобы сжать упругую лягушку",
    footer: "Тихий, игривый уголок интернета",
    donate: "Поддержать",
    share: "Поделиться",
    language: "Язык",
    back: "← Назад",
    // Breathe page
    breatheTitle: "Дыши",
    breatheInstruction: "Хочешь успокоиться?<br>Нажми на кнопку и дыши",
    breatheHint: "Следуй ритму пульсации",
    breatheStart: "Нажми, чтобы начать",
    breatheIn: "Вдох",
    breatheOut: "Выдох",
    soundOn: "🔊 Звук: ВКЛ",
    soundOff: "🔇 Звук: ВЫКЛ",
    // Bolt page
    boltTitle: "Открути гайку",
    boltHint: "Перетаскивай влево/вправо для вращения. Гайка будет откручиваться по болту.",
    boltMessage: "Ты дурак 😄<br>Зачем уронил гайку?",
    reset: "↩ Сброс",
    // Frog page
    frogTitle: "Жмякни лягушку",
    frogHint: "Нажми на лягушку.",
    frogSquishes: "Жмяков:",
    frogMessage1: "Ну и....",
    frogMessage2: "Уверен???",
    frogMessage3: "*Хватит мучать животно, животное* 😄",
    boopMode: "режим буп"
    ,
    // Shared content blocks / links
    whatIsThis: "Что это?",
    aboutLink: "О проекте",
    privacyLink: "Приватность",
    contactLink: "Контакты",
    homeLink: "Главная",

    // Home (index) content
    homeContentTitle: "Микро‑взаимодействия, которые перезагружают голову (меньше чем за минуту)",
    homeContentP1: "goodday4u.com — маленькая коллекция игривых и успокаивающих микродел: подышать несколько циклов, открутить упрямую гайку или «бупнуть» дружелюбную лягушку.",
    homeContentP2: "Ничего не нужно устанавливать и не нужно регистрироваться. Просто выбери карточку, поиграй 10–60 секунд и возвращайся к делам с чуть более лёгкой головой.",
    homeContentP3: "На мобильном всё главное остаётся сверху (карточки). Этот текст — чтобы сайт был понятнее людям и не выглядел «пустым» для поисковиков и рекламы.",
    faqHowTitle: "Как пользоваться?",
    faqHowAnswer: "Открой любую карточку. Тяни или нажимай — вот и всё. На многих страницах есть звук (можно выключить). Язык переключается внизу.",
    faqFreeTitle: "Это бесплатно?",
    faqFreeAnswer: "Да. Если хочешь — можно поддержать проект кнопкой «Поддержать».",
    faqTrackTitle: "Вы меня отслеживаете?",
    faqTrackAnswer: "Сайт хранит простые настройки (например, язык) в браузере. Реклама может ставить cookies. Подробнее в <a href=\"privacy.html\">Приватности</a>.",

    // Game page content blocks
    boltAboutP: "Мини‑взаимодействие: тяни гайку влево/вправо, чтобы крутить и «откручивать» её вниз по болту. Это короткая, приятная пауза — 10–30 секунд и всё.",
    boltAboutTipsHtml: "<li><b>Совет:</b> делай короткие ровные движения (на мобильном так удобнее).</li><li><b>Звук:</b> нажми «Sound» один раз, если телефон блокирует аудио.</li><li><b>Приватность:</b> см. <a href=\"../privacy.html\">Приватность</a>.</li>",
    frogAboutP: "Глупенькое микро‑взаимодействие. Нажимай, чтобы «жмякать» лягушку и немного перезагрузиться. Нарочно просто: без уровней и гринда.",
    frogAboutTipsHtml: "<li><b>Звук:</b> на телефонах звук включается после первого тапа.</li><li><b>Сброс:</b> обнуляет счётчик для этой сессии.</li><li><b>Приватность:</b> см. <a href=\"../privacy.html\">Приватность</a>.</li>",
    breatheAboutP: "Простой таймер дыхания. Нажми на круг: на рост — вдох, на уменьшение — выдох. Быстрый способ успокоиться за 30–60 секунд.",
    breatheAboutTipsHtml: "<li><b>Звук:</b> можно включить дождь; телефоны разрешают аудио после первого тапа.</li><li><b>Совет:</b> расслабь плечи и дыши носом, если комфортно.</li><li><b>Приватность:</b> см. <a href=\"../privacy.html\">Приватность</a>.</li>",

    // About page
    aboutTitle: "О проекте",
    aboutSubtitle: "goodday4u.com — небольшой «time killer» в хорошем смысле: набор микро‑взаимодействий, которые помогают переключиться, успокоиться или просто улыбнуться.",
    aboutSectionFind: "Что здесь есть",
    aboutBreathe: "Дыши",
    aboutBreatheText: "Нажми на круг, следуй ритму (вдох/выдох). Можно включить звук дождя.",
    aboutBolt: "Открути гайку",
    aboutBoltText: "Тяни влево/вправо, чтобы крутить и спускать гайку вниз по болту. Звук можно выключить.",
    aboutFrog: "Жмякни лягушку",
    aboutFrogText: "Нажимай, чтобы «жмякать». Есть счётчик и пару сообщений по пути.",
    aboutLanguages: "Языки",
    aboutLanguagesText: "Язык можно переключать на каждой странице. Выбор сохраняется в браузере.",
    aboutSectionWhy: "Зачем это",
    aboutWhyText: "Идея простая: дать мягкую, короткую паузу без ленты, бесконечного скролла и логинов — несколько секунд взаимодействия и всё.",
    aboutSectionContact: "Контакты",
    aboutContactTextHtml: "Идеи, баги, предложения: <a href=\"mailto:support@goodday4u.com\">support@goodday4u.com</a>",

    // Privacy page
    privacyTitle: "Политика конфиденциальности",
    privacyUpdated: "Обновлено: 2026‑01‑24",
    privacySummaryTitle: "Коротко",
    privacySummaryHtml: "<li>Аккаунты не нужны.</li><li>Сайт может хранить небольшие настройки (например, язык) в вашем браузере.</li><li>Мы можем показывать рекламу (Google AdSense). Реклама может использовать cookies и похожие технологии.</li>",
    privacyLocalTitle: "Что хранится на устройстве",
    privacyLocalText: "Сайт использует localStorage, чтобы помнить базовые настройки (например, язык). Эти данные остаются в вашем браузере и автоматически нам не отправляются.",
    privacyAdsTitle: "Реклама (Google AdSense)",
    privacyAdsText: "Мы можем показывать объявления Google (AdSense). Google и партнёры могут использовать cookies или похожие идентификаторы для показа и измерения рекламы и (в зависимости от настроек/региона) персонализации.",
    privacyAnalyticsTitle: "Аналитика",
    privacyAnalyticsText: "Сейчас мы намеренно не используем отдельную платформу аналитики. Если добавим — обновим эту страницу и опишем, что собирается и зачем.",
    privacyConsentTitle: "Согласие и управление",
    privacyConsentText: "Вы можете управлять cookies в настройках браузера, использовать приватный режим или очистить данные сайта. Если в вашем регионе требуется баннер согласия, мы можем показать его перед загрузкой персонализированной рекламы.",
    privacyContactTitle: "Контакты",
    privacyContactTextHtml: "Вопросы по приватности: <a href=\"mailto:support@goodday4u.com\">support@goodday4u.com</a>"
  },
  he: {
    // Main page
    siteTitle: "goodday4u.com",
    siteSubtitle: "אינטראקציות קטנות ומשחקיות",
    breathe: "נשום",
    breatheDesc: "עיגול פועם עדין להנחיית הנשימה",
    bolt: "פתח את האום",
    boltDesc: "סובב את האום עד שהוא נופל",
    frog: "לחץ על הצפרדע",
    frogDesc: "הקש כדי למחוץ את הצפרדע הגמישה",
    footer: "פינה שקטה ומשחקית באינטרנט",
    donate: "תמיכה",
    share: "שתף",
    language: "שפה",
    back: "← חזרה",
    // Breathe page
    breatheTitle: "נשום",
    breatheInstruction: "רוצה להירגע?<br>לחץ על הכפתור ונשום",
    breatheHint: "עקוב אחר הקצב",
    breatheStart: "לחץ כדי להתחיל",
    breatheIn: "שאיפה",
    breatheOut: "נשיפה",
    soundOn: "🔊 צליל: פעיל",
    soundOff: "🔇 צליל: כבוי",
    // Bolt page
    boltTitle: "פתח את האום",
    boltHint: "גרור שמאלה/ימינה כדי לסובב. האום ייפתח לאורך הבורג.",
    boltMessage: "אתה טיפש 😄<br>למה הפלת את האום?",
    reset: "↩ איפוס",
    // Frog page
    frogTitle: "לחץ על הצפרדע",
    frogHint: "לחץ על הצפרדע.",
    frogSquishes: "לחיצות:",
    frogMessage1: "ובכן...",
    frogMessage2: "בטוח???",
    frogMessage3: "*תפסיק לענות את החיה, חיה* 😄",
    boopMode: "מצב בופ"
    ,
    whatIsThis: "מה זה?",
    aboutLink: "אודות",
    privacyLink: "פרטיות",
    contactLink: "צור קשר",
    homeLink: "דף הבית",

    homeContentTitle: "מיקרו‑אינטראקציות שמאפסות את הראש (בפחות מדקה)",
    homeContentP1: "goodday4u.com הוא אוסף קטן של מיקרו‑פעילויות משחקיות ומרגיעות: לנשום כמה מחזורים, לפתוח אום עקשן, או “לבופ” צפרדע ידידותית.",
    homeContentP2: "אין מה להתקין ואין צורך בחשבון. פשוט בוחרים כרטיס, משחקים 10–60 שניות וחוזרים ליום שלך קצת יותר קל.",
    homeContentP3: "במובייל הדברים החשובים נשארים למעלה (הכרטיסים). הטקסט כאן כדי שהאתר יהיה ברור יותר ולא ייראה “ריק”.",
    faqHowTitle: "איך משתמשים?",
    faqHowAnswer: "פותחים כרטיס. גוררים או מקישים — זה הכול. ברוב העמודים יש גם צליל (אפשר להשתיק). החלפת שפה בתחתית.",
    faqFreeTitle: "זה בחינם?",
    faqFreeAnswer: "כן. אם תרצה/י אפשר לתמוך בפרויקט בכפתור Support.",
    faqTrackTitle: "אתם עוקבים אחריי?",
    faqTrackAnswer: "האתר שומר הגדרות פשוטות (כמו שפה) בדפדפן. פרסומות עשויות להשתמש בעוגיות. ראו <a href=\"privacy.html\">פרטיות</a>.",

    boltAboutP: "מיקרו‑אינטראקציה: גוררים את האום שמאלה/ימינה כדי לסובב ולפתוח אותו לאורך הבורג. הפסקה קצרה ומספקת — 10–30 שניות וזהו.",
    boltAboutTipsHtml: "<li><b>טיפ:</b> גרירות קטנות ויציבות (במובייל זה הכי נוח).</li><li><b>צליל:</b> הקש/י על Sound פעם אחת אם הטלפון חוסם אודיו.</li><li><b>פרטיות:</b> ראו <a href=\"../privacy.html\">פרטיות</a>.</li>",
    frogAboutP: "מיקרו‑אינטראקציה טיפשית וחמודה. מקישים כדי למעוך את הצפרדע ולקבל “ריסט” קטן. בכוונה פשוט — בלי שלבים.",
    frogAboutTipsHtml: "<li><b>צליל:</b> בדפדפנים במובייל האודיו פעיל אחרי ההקשה הראשונה.</li><li><b>איפוס:</b> מאפס את המונה לסשן.</li><li><b>פרטיות:</b> ראו <a href=\"../privacy.html\">פרטיות</a>.</li>",
    breatheAboutP: "טיימר נשימה פשוט. הקש/י על העיגול: שאיפה כשהוא גדל, נשיפה כשהוא קטן. דרך קלה להירגע ל‑30–60 שניות.",
    breatheAboutTipsHtml: "<li><b>צליל:</b> אפשר להדליק רעש גשם; אודיו במובייל פעיל אחרי ההקשה הראשונה.</li><li><b>טיפ:</b> שחרר/י כתפיים ונשום/י דרך האף אם נוח.</li><li><b>פרטיות:</b> ראו <a href=\"../privacy.html\">פרטיות</a>.</li>",

    aboutTitle: "אודות הפרויקט",
    aboutSubtitle: "goodday4u.com הוא “time killer” קטן במובן הטוב: אוסף מיקרו‑אינטראקציות כדי להירגע, להחליף מצב, או פשוט לחייך.",
    aboutSectionFind: "מה יש כאן",
    aboutBreathe: "נשום",
    aboutBreatheText: "הקש/י על העיגול כדי להתחיל. עקוב/י אחרי הקצב. צליל גשם אופציונלי.",
    aboutBolt: "פתח את האום",
    aboutBoltText: "גוררים שמאלה/ימינה כדי לסובב ולהוריד את האום לאורך הבורג. אפשר להשתיק.",
    aboutFrog: "לחץ על הצפרדע",
    aboutFrogText: "הקש/י כדי למעוך. יש מונה וכמה הודעות.",
    aboutLanguages: "שפות",
    aboutLanguagesText: "אפשר להחליף שפה בכל עמוד. הבחירה נשמרת בדפדפן.",
    aboutSectionWhy: "למה זה קיים",
    aboutWhyText: "המטרה פשוטה: הפסקה קצרה ונעימה בלי פיד, בלי גלילה אינסופית ובלי התחברות.",
    aboutSectionContact: "צור קשר",
    aboutContactTextHtml: "פידבק/באגים/שיתופי פעולה: <a href=\"mailto:support@goodday4u.com\">support@goodday4u.com</a>",

    privacyTitle: "מדיניות פרטיות",
    privacyUpdated: "עודכן: 2026‑01‑24",
    privacySummaryTitle: "סיכום",
    privacySummaryHtml: "<li>אין צורך בחשבון.</li><li>האתר עשוי לשמור הגדרות קטנות (כמו שפה) בדפדפן.</li><li>ייתכן שנציג פרסומות (Google AdSense). פרסומות עשויות להשתמש בעוגיות וטכנולוגיות דומות.</li>",
    privacyLocalTitle: "מה נשמר במכשיר",
    privacyLocalText: "האתר משתמש ב‑localStorage כדי לזכור העדפות בסיסיות (למשל שפה). הנתונים נשארים בדפדפן ולא נשלחים אלינו אוטומטית.",
    privacyAdsTitle: "פרסום (Google AdSense)",
    privacyAdsText: "ייתכן שנציג מודעות של Google (AdSense). Google ושותפיה עשויים להשתמש בעוגיות או מזהים דומים להצגה ומדידה של מודעות ולפי הגדרות/אזור גם להתאמה אישית.",
    privacyAnalyticsTitle: "אנליטיקה",
    privacyAnalyticsText: "כרגע אין לאתר פלטפורמת אנליטיקה ייעודית. אם נוסיף בעתיד — נעדכן את הדף ונסביר מה נאסף ולמה.",
    privacyConsentTitle: "הסכמה ושליטה",
    privacyConsentText: "אפשר לשלוט בעוגיות דרך הגדרות הדפדפן, להשתמש בגלישה פרטית או למחוק נתוני אתר. אם נדרש באזור שלך, ייתכן שיוצג חלון הסכמה לפני מודעות מותאמות אישית.",
    privacyContactTitle: "צור קשר",
    privacyContactTextHtml: "שאלות פרטיות: <a href=\"mailto:support@goodday4u.com\">support@goodday4u.com</a>"
  },
  de: {
    // Main page
    siteTitle: "goodday4u.com",
    siteSubtitle: "Ultra-kleine, verspielte Interaktionen",
    breathe: "Atmen",
    breatheDesc: "Ein sanfter pulsierender Kreis zur Atemführung",
    bolt: "Mutter Lösen",
    boltDesc: "Drehe die Mutter, bis sie abfällt",
    frog: "Frosch Quetschen",
    frogDesc: "Tippe, um den elastischen Frosch zu quetschen",
    footer: "Eine ruhige, verspielte Ecke des Internets",
    donate: "Unterstützen",
    share: "Teilen",
    language: "Sprache",
    back: "← Zurück",
    // Breathe page
    breatheTitle: "Atmen",
    breatheInstruction: "Möchtest du dich beruhigen?<br>Klicke auf den Button und atme",
    breatheHint: "Folge dem Rhythmus",
    breatheStart: "Klicken zum Starten",
    breatheIn: "Einatmen",
    breatheOut: "Ausatmen",
    soundOn: "🔊 Ton: AN",
    soundOff: "🔇 Ton: AUS",
    // Bolt page
    boltTitle: "Mutter lösen",
    boltHint: "Ziehe links/rechts zum Drehen. Die Mutter wird sich am Bolzen lösen.",
    boltMessage: "Du bist dumm 😄<br>Warum hast du die Mutter fallen lassen?",
    reset: "↩ Zurücksetzen",
    // Frog page
    frogTitle: "Frosch quetschen",
    frogHint: "Tippe auf den Frosch.",
    frogSquishes: "Quetschungen:",
    frogMessage1: "Nun...",
    frogMessage2: "Sicher???",
    frogMessage3: "*Hör auf, das Tier zu quälen, Tier* 😄",
    boopMode: "Boop-Modus"
    ,
    whatIsThis: "Was ist das?",
    aboutLink: "Über",
    privacyLink: "Datenschutz",
    contactLink: "Kontakt",
    homeLink: "Startseite",

    homeContentTitle: "Mikro‑Interaktionen, die den Kopf resetten (unter einer Minute)",
    homeContentP1: "goodday4u.com ist eine kleine Sammlung verspielter, beruhigender Micro‑Aktivitäten: ein paar Atemzüge, eine Mutter abschrauben oder einen freundlichen Frosch “boopen”.",
    homeContentP2: "Nichts zu installieren, kein Konto. Karte auswählen, 10–60 Sekunden interagieren, Tab schließen — und weiter geht’s.",
    homeContentP3: "Auf dem Handy bleibt das Wichtigste oben (die Karten). Dieser Text macht die Seite verständlicher und weniger „leer“.",
    faqHowTitle: "Wie benutze ich das?",
    faqHowAnswer: "Öffne eine Karte. Ziehen oder tippen — fertig. Viele Seiten haben Sound (stumm schaltbar). Sprache unten umstellen.",
    faqFreeTitle: "Ist es kostenlos?",
    faqFreeAnswer: "Ja. Wenn du möchtest, kannst du das Projekt über „Support“ unterstützen.",
    faqTrackTitle: "Trackt ihr mich?",
    faqTrackAnswer: "Die Seite speichert einfache Einstellungen (z.B. Sprache) im Browser. Werbung kann Cookies setzen. Siehe <a href=\"privacy.html\">Datenschutz</a>.",

    boltAboutP: "Eine kleine Mikro‑Interaktion: Ziehe die Mutter links/rechts, um sie zu drehen und am Bolzen „abzuschrauben“. Kurze, befriedigende Pause — 10–30 Sekunden.",
    boltAboutTipsHtml: "<li><b>Tipp:</b> kleine, gleichmäßige Ziehbewegungen (auf Mobile am besten).</li><li><b>Sound:</b> tippe einmal auf „Sound“, wenn Audio blockiert ist.</li><li><b>Datenschutz:</b> siehe <a href=\"../privacy.html\">Datenschutz</a>.</li>",
    frogAboutP: "Eine kleine, alberne Mikro‑Interaktion. Tippen/drücken zum Quetschen — schneller Dopamin‑Reset. Absichtlich simpel.",
    frogAboutTipsHtml: "<li><b>Sound:</b> Mobile‑Browser aktivieren Audio nach dem ersten Tippen.</li><li><b>Reset:</b> setzt den Zähler für diese Session zurück.</li><li><b>Datenschutz:</b> siehe <a href=\"../privacy.html\">Datenschutz</a>.</li>",
    breatheAboutP: "Ein einfacher Atem‑Timer. Tippe den Kreis: Einatmen beim Wachsen, Ausatmen beim Schrumpfen. 30–60 Sekunden zum Runterkommen.",
    breatheAboutTipsHtml: "<li><b>Sound:</b> Regen optional; Audio auf Mobile nach dem ersten Tippen.</li><li><b>Tipp:</b> Schultern entspannen und wenn möglich durch die Nase atmen.</li><li><b>Datenschutz:</b> siehe <a href=\"../privacy.html\">Datenschutz</a>.</li>",

    aboutTitle: "Über dieses Projekt",
    aboutSubtitle: "goodday4u.com ist ein kleiner „Time Killer“ im besten Sinn: Mikro‑Interaktionen zum Reset, Entspannen oder Lächeln.",
    aboutSectionFind: "Was du hier findest",
    aboutBreathe: "Atmen",
    aboutBreatheText: "Tippe den Kreis zum Start. Folge dem Rhythmus. Optionaler Regensound.",
    aboutBolt: "Mutter lösen",
    aboutBoltText: "Links/rechts ziehen, um zu drehen und die Mutter am Bolzen zu bewegen. Sound kann aus.",
    aboutFrog: "Frosch quetschen",
    aboutFrogText: "Tippen/drücken zum Quetschen. Zähler und ein paar Messages.",
    aboutLanguages: "Sprachen",
    aboutLanguagesText: "Sprache auf jeder Seite umstellbar. Auswahl wird im Browser gespeichert.",
    aboutSectionWhy: "Warum es das gibt",
    aboutWhyText: "Ziel: eine kurze, sanfte Ablenkung ohne Feed, ohne Endlos‑Scrollen, ohne Logins.",
    aboutSectionContact: "Kontakt",
    aboutContactTextHtml: "Feedback/Bugs/Anfragen: <a href=\"mailto:support@goodday4u.com\">support@goodday4u.com</a>",

    privacyTitle: "Datenschutzerklärung",
    privacyUpdated: "Stand: 2026‑01‑24",
    privacySummaryTitle: "Kurzfassung",
    privacySummaryHtml: "<li>Keine Konten nötig.</li><li>Die Seite speichert kleine Einstellungen (z.B. Sprache) im Browser.</li><li>Wir können Werbung anzeigen (Google AdSense). Werbung kann Cookies/ähnliche Techniken nutzen.</li>",
    privacyLocalTitle: "Was wir auf deinem Gerät speichern",
    privacyLocalText: "Diese Website nutzt localStorage, um grundlegende Einstellungen (z.B. Sprache) zu merken. Die Daten bleiben im Browser und werden nicht automatisch an uns gesendet.",
    privacyAdsTitle: "Werbung (Google AdSense)",
    privacyAdsText: "Wir können Google‑Anzeigen (AdSense) ausspielen. Google/Partner können Cookies oder ähnliche Kennungen nutzen, um Anzeigen zu liefern/zu messen und ggf. zu personalisieren.",
    privacyAnalyticsTitle: "Analytics",
    privacyAnalyticsText: "Derzeit läuft hier keine dedizierte Analytics‑Plattform. Falls wir später Analytics hinzufügen, aktualisieren wir diese Seite.",
    privacyConsentTitle: "Einwilligung & Kontrolle",
    privacyConsentText: "Cookies kannst du in den Browser‑Einstellungen steuern, privat browsen oder Site‑Daten löschen. Wenn nötig, zeigen wir ggf. ein Consent‑Prompt vor personalisierten Ads.",
    privacyContactTitle: "Kontakt",
    privacyContactTextHtml: "Fragen zum Datenschutz: <a href=\"mailto:support@goodday4u.com\">support@goodday4u.com</a>"
  },
  cs: {
    // Main page
    siteTitle: "goodday4u.com",
    siteSubtitle: "Ultra malé, hravé interakce",
    breathe: "Dýchej",
    breatheDesc: "Jemný pulzující kruh pro vedení dechu",
    bolt: "Odšroubuj Matku",
    boltDesc: "Otáčej matkou, dokud nespadne",
    frog: "Zmáčkni Žábu",
    frogDesc: "Klepni, aby ses zmáčkl pružnou žábu",
    footer: "Tichý, hravý koutek internetu",
    donate: "Podpořit",
    share: "Sdílet",
    language: "Jazyk",
    back: "← Zpět",
    // Breathe page
    breatheTitle: "Dýchej",
    breatheInstruction: "Chceš se uklidnit?<br>Klikni na tlačítko a dýchej",
    breatheHint: "Sleduj rytmus",
    breatheStart: "Klikni pro start",
    breatheIn: "Nadechni se",
    breatheOut: "Vydechni",
    soundOn: "🔊 Zvuk: ZAPNUTO",
    soundOff: "🔇 Zvuk: VYPNUTO",
    // Bolt page
    boltTitle: "Odšroubuj matku",
    boltHint: "Táhni vlevo/vpravo pro otáčení. Matka se bude odšroubovávat po šroubu.",
    boltMessage: "Jsi hlupák 😄<br>Proč jsi upustil matku?",
    reset: "↩ Reset",
    // Frog page
    frogTitle: "Zmáčkni žábu",
    frogHint: "Klepni na žábu.",
    frogSquishes: "Zmáčknutí:",
    frogMessage1: "No a...",
    frogMessage2: "Jsi si jistý???",
    frogMessage3: "*Přestaň trápit zvíře, zvíře* 😄",
    boopMode: "boop režim"
    ,
    whatIsThis: "Co to je?",
    aboutLink: "O projektu",
    privacyLink: "Soukromí",
    contactLink: "Kontakt",
    homeLink: "Domů",

    homeContentTitle: "Mikro‑interakce, které restartují hlavu (do minuty)",
    homeContentP1: "goodday4u.com je malá sbírka hravých, uklidňujících mini‑aktivit: pár dechů, odšroubovat matici nebo „boopnout“ žábu.",
    homeContentP2: "Není potřeba nic instalovat ani účet. Vyber kartu, 10–60 sekund si pohraj a vrať se zpět do dne.",
    homeContentP3: "Na mobilu zůstává to hlavní nahoře (karty). Tenhle text dělá web užitečnější a méně „prázdný“.",
    faqHowTitle: "Jak to používat?",
    faqHowAnswer: "Otevři kartu. Táhni nebo ťukni — hotovo. Na většině stránek je zvuk (lze vypnout). Jazyk dole.",
    faqFreeTitle: "Je to zdarma?",
    faqFreeAnswer: "Ano. Pokud chceš, můžeš projekt podpořit tlačítkem Support.",
    faqTrackTitle: "Sledujete mě?",
    faqTrackAnswer: "Web si v prohlížeči ukládá jednoduchá nastavení (např. jazyk). Reklamy mohou používat cookies. Viz <a href=\"privacy.html\">Soukromí</a>.",

    boltAboutP: "Malá mikro‑interakce: táhni matici vlevo/vpravo, aby se otáčela a „odšroubovala“ dolů po šroubu. Krátká pauza — 10–30 sekund.",
    boltAboutTipsHtml: "<li><b>Tip:</b> malé plynulé tahy (na mobilu nejlepší).</li><li><b>Zvuk:</b> klepni na „Sound“, pokud telefon blokuje audio.</li><li><b>Soukromí:</b> viz <a href=\"../privacy.html\">Soukromí</a>.</li>",
    frogAboutP: "Hloupá, roztomilá mikro‑interakce. Klepni/stiskni žábu pro malý reset. Záměrně jednoduché.",
    frogAboutTipsHtml: "<li><b>Zvuk:</b> mobilní prohlížeče aktivují audio po prvním klepnutí.</li><li><b>Reset:</b> vynuluje počítadlo pro tuto session.</li><li><b>Soukromí:</b> viz <a href=\"../privacy.html\">Soukromí</a>.</li>",
    breatheAboutP: "Jednoduchý dechový timer. Klepni na kruh: nádech když roste, výdech když klesá. 30–60 sekund na uklidnění.",
    breatheAboutTipsHtml: "<li><b>Zvuk:</b> lze zapnout déšť; audio na mobilu po prvním klepnutí.</li><li><b>Tip:</b> uvolni ramena a dýchej nosem, pokud je to příjemné.</li><li><b>Soukromí:</b> viz <a href=\"../privacy.html\">Soukromí</a>.</li>",

    aboutTitle: "O projektu",
    aboutSubtitle: "goodday4u.com je malý „time killer“ v dobrém smyslu: mikro‑interakce pro reset, klid nebo úsměv.",
    aboutSectionFind: "Co tu najdeš",
    aboutBreathe: "Dýchej",
    aboutBreatheText: "Klepni na kruh pro start. Sleduj rytmus. Volitelný zvuk deště.",
    aboutBolt: "Odšroubuj matku",
    aboutBoltText: "Táhni vlevo/vpravo pro otáčení a posun matice po šroubu. Zvuk lze vypnout.",
    aboutFrog: "Zmáčkni žábu",
    aboutFrogText: "Klepni/stiskni pro zmáčknutí. Počítadlo a pár hlášek.",
    aboutLanguages: "Jazyky",
    aboutLanguagesText: "Jazyk lze změnit na každé stránce. Volba se uloží v prohlížeči.",
    aboutSectionWhy: "Proč to existuje",
    aboutWhyText: "Cíl: krátká, jemná pauza bez feedu, bez nekonečného scrollu a bez loginů.",
    aboutSectionContact: "Kontakt",
    aboutContactTextHtml: "Feedback/bugy/požadavky: <a href=\"mailto:support@goodday4u.com\">support@goodday4u.com</a>",

    privacyTitle: "Zásady soukromí",
    privacyUpdated: "Aktualizováno: 2026‑01‑24",
    privacySummaryTitle: "Shrnutí",
    privacySummaryHtml: "<li>Není potřeba účet.</li><li>Web může ukládat malá nastavení (např. jazyk) v prohlížeči.</li><li>Můžeme zobrazovat reklamy (Google AdSense). Reklamy mohou používat cookies a podobné technologie.</li>",
    privacyLocalTitle: "Co ukládáme do zařízení",
    privacyLocalText: "Web používá localStorage k zapamatování základních preferencí (např. jazyk). Data zůstávají v prohlížeči a automaticky se nám neposílají.",
    privacyAdsTitle: "Reklama (Google AdSense)",
    privacyAdsText: "Můžeme zobrazovat reklamy Google (AdSense). Google a partneři mohou používat cookies nebo podobné identifikátory pro doručení/měření reklam a případnou personalizaci.",
    privacyAnalyticsTitle: "Analytika",
    privacyAnalyticsText: "Momentálně zde neběží dedikovaná analytická platforma. Pokud ji přidáme, tuto stránku aktualizujeme.",
    privacyConsentTitle: "Souhlas a ovládání",
    privacyConsentText: "Cookies lze ovládat v nastavení prohlížeče, použít anonymní režim nebo vymazat data webu. Pokud je to vyžadováno, můžeme zobrazit consent před personalizovanými reklamami.",
    privacyContactTitle: "Kontakt",
    privacyContactTextHtml: "Dotazy k soukromí: <a href=\"mailto:support@goodday4u.com\">support@goodday4u.com</a>"
  }
};

// Language switcher
let currentLang = localStorage.getItem('language') || 'en';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('language', lang);
  document.documentElement.lang = lang;
  applyTranslations();
  // Trigger custom event for other scripts
  window.dispatchEvent(new CustomEvent('languagechange', { detail: lang }));
}

function getTranslation(key) {
  const t = translations[currentLang];
  return t && t[key] ? t[key] : (translations['en'][key] || key);
}

function applyTranslations() {
  const t = translations[currentLang];
  if (!t) return;
  
  // Apply to all elements with data-translate attribute
  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.getAttribute('data-translate');
    if (t[key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = t[key];
      } else {
        el.textContent = t[key];
      }
    }
  });
  
  // Apply to innerHTML for elements with HTML content
  document.querySelectorAll('[data-translate-html]').forEach(el => {
    const key = el.getAttribute('data-translate-html');
    if (t[key]) {
      el.innerHTML = t[key];
    }
  });
  
  // Apply to title attributes
  document.querySelectorAll('[data-translate-title]').forEach(el => {
    const key = el.getAttribute('data-translate-title');
    if (t[key]) {
      el.title = t[key];
    }
  });
}

// Initialize on load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    currentLang = localStorage.getItem('language') || 'en';
    document.documentElement.lang = currentLang;
    applyTranslations();
  });
} else {
  currentLang = localStorage.getItem('language') || 'en';
  document.documentElement.lang = currentLang;
  applyTranslations();
}

