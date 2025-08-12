export type Testimonial = {
  name: string;
  text: string;
  rating?: number;
  date?: string; // ISO YYYY-MM-DD or human-readable
  source?: "google" | "limudnaim" | "other";
};

// Centralized testimonials in both locales.
// NOTE: Please complete the Hebrew list to include ALL 11 reviews previously provided.
export const testimonials = {
  he: [
    // From src/data/reviews.ts (normalized)
    {
      name: "Elya",
      text: "מורה סבלני, מקצועי, משיב לשובות מהר, שיעור ראשון וכבר מרגישים התקדמות.",
      rating: 5,
      date: "2024-08-06",
      source: "limudnaim",
    },
    {
      name: "Michel",
      text: "מורה מאוד סבלני, הולך עם קצב התלמיד. ביתי נהנתה מאוד מהשיעורים עם דורון. ממליץ בחום.",
      rating: 5,
      date: "2024-06-17",
      source: "limudnaim",
    },

    // From src/content/reviews.he.json (normalized)
    {
      name: "איליה",
      text: "מורה סבלני, מקצועי, משיב לשאלות מהר. שיעור ראשון וכבר מרגישים התקדמות.",
      rating: 5,
      source: "other",
    },
    {
      name: "מישל",
      text: "מורה מאוד סבלני, הולך עם קצב התלמיד. בתי נהנתה מאוד מהשיעורים עם דורון.",
      rating: 5,
      source: "other",
    },
    {
      name: "דבורה",
      text: "מורה מעולה!",
      rating: 5,
      source: "other",
    },
    {
      name: "אלכסנדרה",
      text: "תמיד עם פוזיטיביות וסבלנות! יודע איך ללמד ולדבר על שירים אהובים. מומלץ!",
      rating: 5,
      source: "other",
    },
    // TODO: Add the remaining Hebrew reviews to reach all 11 provided.
  ],
  en: [
    // From src/data/reviews.ts
    {
      name: "Coco Baby",
      text: "Patient and clear, amazing teacher.",
      rating: 5,
      date: "2025-08-08",
      source: "google",
    },
    // From src/content/reviews.en.json
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


