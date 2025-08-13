export type Testimonial = {
  name: string;
  text: string;
  rating?: number;
  date?: string; // ISO YYYY-MM-DD or human-readable
  source?: "google" | "limudnaim" | "other";
};

// Complete testimonials collection from all sources
export const testimonials = {
  he: [
    {
      name: "שיר",
      text: "מקצועי, סבלני, ממליצה בחום",
      rating: 5,
      date: "2024-07-02",
      source: "limudnaim",
    },
    {
      name: "Elya",
      text: "מורה סבלני, מקצועי, משיב תשובות מהר. שיעור ראשון וכבר מרגיש התקדמות.",
      rating: 5,
      date: "2024-08-06",
      source: "limudnaim",
    },
    {
      name: "אמיר",
      text: "אלוף מסביר הכל, סבלני, מקצועי בחום",
      rating: 5,
      date: "2024-06-14",
      source: "limudnaim",
    },
    {
      name: "Michel",
      text: "מורה מאוד סבלני, הולך עם קצב התלמיד. ביתי נהנתה מאוד מהשיעורים עם דורון. ממליץ בחום.",
      rating: 5,
      date: "2024-06-17",
      source: "limudnaim",
    },
    {
      name: "דבורה",
      text: "מורה מעולה!!!!",
      rating: 5,
      date: "2024-04-26",
      source: "limudnaim",
    },
    {
      name: "ענבל",
      text: "דורון מורה מקצועי, אדיב ונבול ידע רחב. יחסי אנוש מצוינים. נחון את המטרה, ממולץ, מכניסן.",
      rating: 5,
      date: "2024-04-26",
      source: "limudnaim",
    },
    {
      name: "אלכסנדרה",
      text: "דורון הוא בן אדם מאוד מקצועי וכרוזמטי! תמיד עם פוזיטיביות וסבלנות! הוא יודע איך ללמד ואפשר לראות כל סוג שיעורים והוא מדבר ונלמד גם באנגלית! מאוד מרוצה!",
      rating: 5,
      date: "2024-02-12",
      source: "limudnaim",
    },
    {
      name: "glowup",
      text: "דורון מורה מצויין קשוב ומקצועי יש לו ידע נרחב והוא מעביר אותו בצורה קלילה ונעימה",
      rating: 5,
      date: "2024-03-25",
      source: "limudnaim",
    },
    {
      name: "Elya Abarjel",
      text: "מורה מעולה, מסביר באופן הכי יסודי שאפשר. עד שלא הבנתי לא הפסיק לעזור. חווית למידה כיפית וקלילה וטובה מאוד. ממליץ!",
      rating: 5,
      date: "2024-11-01",
      source: "google",
    },
    {
      name: "Yoed Levy",
      text: "מורה ממש טוב, סבלני ומקצועי. אני למדתי אצלו גיטרה ואני מרגיש שיפור משמעותי משיעור לשיעור",
      rating: 5,
      date: "2024-09-15",
      source: "google",
    },
    {
      name: "tami van",
      text: "דורון מורה מדהים שלא רק מלמד אלא יש לו גישה ממש לתלמידים. ממליץ בחום!!!",
      rating: 5,
      date: "2024-12-25",
      source: "google",
    },
    {
      name: "kaktusik",
      text: "מורה נפלא, מסביר הכל בסבלנות עם טיפים שווים כדי לנגן טוב יותר. כאשר באתי אליו הבנתי שלא הייתי יודע כלום, התוצאות למידה כיפית וקלילה וטובה מאוד. ממליץ! לתלמידים או מתחילים במוזיקה בכלי כלשהו, מורה סבלני, מעודד, ממולץ!",
      rating: 5,
      date: "2024-12-25",
      source: "google",
    },
  ],
  en: [
    {
      name: "Shir",
      text: "Professional, patient, highly recommend.",
      rating: 5,
      date: "2024-07-02",
      source: "limudnaim",
    },
    {
      name: "Elya",
      text: "Patient teacher, professional, answers quickly. First lesson and already feeling progress.",
      rating: 5,
      date: "2024-08-06",
      source: "limudnaim",
    },
    {
      name: "Amir",
      text: "Champion explains everything, patient, professionally warm.",
      rating: 5,
      date: "2024-06-14",
      source: "limudnaim",
    },
    {
      name: "Michel",
      text: "Very patient teacher, goes with the student's pace. My daughter really enjoyed the lessons with Doron. Highly recommend.",
      rating: 5,
      date: "2024-06-17",
      source: "limudnaim",
    },
    {
      name: "Dvorah",
      text: "Excellent teacher!!!!",
      rating: 5,
      date: "2024-04-26",
      source: "limudnaim",
    },
    {
      name: "Inbal",
      text: "Doron is a professional teacher, kind and knowledgeable with broad knowledge. Excellent human relations. Hits the target, recommended, welcoming.",
      rating: 5,
      date: "2024-04-26",
      source: "limudnaim",
    },
    {
      name: "Alexandra",
      text: "Doron is a very professional and charismatic person! Always with positivity and patience! He knows how to teach and you can see all types of lessons and he speaks and teaches in English too! Very satisfied!",
      rating: 5,
      date: "2024-02-12",
      source: "limudnaim",
    },
    {
      name: "Glowup",
      text: "Doron is an excellent teacher, attentive and professional. He has broad knowledge and conveys it in a light and pleasant way.",
      rating: 5,
      date: "2024-03-25",
      source: "limudnaim",
    },
    {
      name: "Elya Abarjel",
      text: "Excellent teacher, explains in the most thorough way possible. Until I didn't understand he didn't stop helping. A fun and light and very good learning experience. Recommend!",
      rating: 5,
      date: "2024-11-01",
      source: "google",
    },
    {
      name: "Yoed Levy",
      text: "Really good teacher, patient and professional. I learned guitar with him and I feel significant improvement from lesson to lesson.",
      rating: 5,
      date: "2024-09-15",
      source: "google",
    },
    {
      name: "Tami Van",
      text: "Doron is an amazing teacher who not only teaches but really has an approach to students. Highly recommend!!!",
      rating: 5,
      date: "2024-12-25",
      source: "google",
    },
    {
      name: "Kaktusik",
      text: "Wonderful teacher, explains everything patiently with valuable tips to play better. When I came to him I understood that I didn't know anything. The results are enjoyable and light learning and very good. Recommend! For students or beginners in music with any instrument, patient teacher, encouraging, recommended!",
      rating: 5,
      date: "2024-12-25",
      source: "google",
    },
    {
      name: "Coco Baby",
      text: "Patient and clear, amazing teacher.",
      rating: 5,
      date: "2024-12-25",
      source: "google",
    },
    {
      name: "Alex",
      text: "Patient and clear. Highly recommended!",
      rating: 5,
      source: "other",
    },
    {
      name: "Sarah",
      text: "My daughter enjoys the lessons and is progressing fast.",
      rating: 5,
      source: "other",
    },
  ],
} as const;


