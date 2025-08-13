export type Review = {
  name: string;
  text: string;
  rating?: number;
  dateISO?: string;
  lang: "he" | "en";
  source?: string;
};

export const reviews: Record<"he" | "en", Review[]> = {
  he: [
    {
      name: "שיר",
      text: "מקצועי, סבלני, ממליצה בחום",
      rating: 5,
      dateISO: "2024-07-02",
      lang: "he",
      source: "limudnaim",
    },
    {
      name: "Elya",
      text: "מורה סבלני, מקצועי, משיב תשובות מהר. שיעור ראשון וכבר מרגיש התקדמות.",
      rating: 5,
      dateISO: "2024-08-06",
      lang: "he",
      source: "limudnaim",
    },
    {
      name: "אמיר",
      text: "אלוף מסביר הכל, סבלני, מקצועי בחום",
      rating: 5,
      dateISO: "2024-06-14",
      lang: "he",
      source: "limudnaim",
    },
    {
      name: "Michel",
      text: "מורה מאוד סבלני, הולך עם קצב התלמיד. ביתי נהנתה מאוד מהשיעורים עם דורון. ממליץ בחום.",
      rating: 5,
      dateISO: "2024-06-17",
      lang: "he",
      source: "limudnaim",
    },
    {
      name: "דבורה",
      text: "מורה מעולה!!!!",
      rating: 5,
      dateISO: "2024-04-26",
      lang: "he",
      source: "limudnaim",
    },
    {
      name: "ענבל",
      text: "דורון מורה מקצועי, אדיב ונבול ידע רחב. יחסי אנוש מצוינים. נחון את המטרה, ממולץ, מכניסן.",
      rating: 5,
      dateISO: "2024-04-26",
      lang: "he",
      source: "limudnaim",
    },
    {
      name: "אלכסנדרה",
      text: "דורון הוא בן אדם מאוד מקצועי וכרוזמטי! תמיד עם פוזיטיביות וסבלנות! הוא יודע איך ללמד ואפשר לראות כל סוג שיעורים והוא מדבר ונלמד גם באנגלית! מאוד מרוצה!",
      rating: 5,
      dateISO: "2024-02-12",
      lang: "he",
      source: "limudnaim",
    },
    {
      name: "glowup",
      text: "דורון מורה מצויין קשוב ומקצועי יש לו ידע נרחב והוא מעביר אותו בצורה קלילה ונעימה",
      rating: 5,
      dateISO: "2024-03-25",
      lang: "he",
      source: "limudnaim",
    },
    {
      name: "Elya Abarjel",
      text: "מורה מעולה, מסביר באופן הכי יסודי שאפשר. עד שלא הבנתי לא הפסיק לעזור. חווית למידה כיפית וקלילה וטובה מאוד. ממליץ!",
      rating: 5,
      dateISO: "2024-11-01",
      lang: "he",
      source: "google",
    },
    {
      name: "Yoed Levy",
      text: "מורה ממש טוב, סבלני ומקצועי. אני למדתי אצלו גיטרה ואני מרגיש שיפור משמעותי משיעור לשיעור",
      rating: 5,
      dateISO: "2024-09-15",
      lang: "he",
      source: "google",
    },
    {
      name: "tami van",
      text: "דורון מורה מדהים שלא רק מלמד אלא יש לו גישה ממש לתלמידים. ממליץ בחום!!!",
      rating: 5,
      dateISO: "2024-12-25",
      lang: "he",
      source: "google",
    },
    {
      name: "kaktusik",
      text: "מורה נפלא, מסביר הכל בסבלנות עם טיפים שווים כדי לנגן טוב יותר. כאשר באתי אליו הבנתי שלא הייתי יודע כלום, התוצאות למידה כיפית וקלילה וטובה מאוד. ממליץ! לתלמידים או מתחילים במוזיקה בכלי כלשהו, מורה סבלני, מעודד, ממולץ!",
      rating: 5,
      dateISO: "2024-12-25",
      lang: "he",
      source: "google",
    },
  ],
  en: [
    {
      name: "Coco Baby",
      text: "Patient and clear, amazing teacher.",
      rating: 5,
      dateISO: "2024-12-25",
      lang: "en",
      source: "google",
    },
    {
      name: "Alex",
      text: "Patient and clear. Highly recommended!",
      rating: 5,
      lang: "en",
    },
    {
      name: "Sarah",
      text: "My daughter enjoys the lessons and is progressing fast.",
      rating: 5,
      lang: "en",
    },
  ],
};


