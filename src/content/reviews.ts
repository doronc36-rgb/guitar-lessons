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
      name: "Elya",
      text: "מורה סבלני, מקצועי, משיב לשובות מהר, שיעור ראשון וכבר מרגישים התקדמות.",
      rating: 5,
      dateISO: "2024-08-06",
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
      name: "איליה",
      text: "מורה סבלני, מקצועי, משיב לשאלות מהר. שיעור ראשון וכבר מרגישים התקדמות.",
      rating: 5,
      lang: "he",
    },
    {
      name: "מישל",
      text: "מורה מאוד סבלני, הולך עם קצב התלמיד. בתי נהנתה מאוד מהשיעורים עם דורון.",
      rating: 5,
      lang: "he",
    },
    {
      name: "דבורה",
      text: "מורה מעולה!",
      rating: 5,
      lang: "he",
    },
    {
      name: "אלכסנדרה",
      text: "תמיד עם פוזיטיביות וסבלנות! יודע איך ללמד ולדבר על שירים אהובים. מומלץ!",
      rating: 5,
      lang: "he",
    },
    // TODO: Add remaining Hebrew reviews to reach all ~11 entries provided earlier
  ],
  en: [
    {
      name: "Coco Baby",
      text: "Patient and clear, amazing teacher.",
      rating: 5,
      dateISO: "2025-08-08",
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


