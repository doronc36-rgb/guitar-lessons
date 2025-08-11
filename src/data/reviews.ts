export type Review = {
  id: string;
  author: string;
  rating: 1 | 2 | 3 | 4 | 5;
  dateISO: string; // YYYY-MM-DD
  text: string;
  lang: "he" | "en";
  source: "google" | "limudnaim";
};

// Centralized reviews list. Extend with the rest from screenshots.
export const reviews: Review[] = [
  {
    id: "elya-2024-08-06",
    author: "Elya",
    rating: 5,
    dateISO: "2024-08-06",
    text: "מורה סבלני, מקצועי, משיב לשובות מהר, שיעור ראשון וכבר מרגישים התקדמות.",
    lang: "he",
    source: "limudnaim",
  },
  {
    id: "michel-2024-06-17",
    author: "Michel",
    rating: 5,
    dateISO: "2024-06-17",
    text: "מורה מאוד סבלני, הולך עם קצב התלמיד. ביתי נהנתה מאוד מהשיעורים עם דורון. ממליץ בחום.",
    lang: "he",
    source: "limudnaim",
  },
  {
    id: "coco-2025-08-08",
    author: "Coco Baby",
    rating: 5,
    dateISO: "2025-08-08",
    text: "Patient and clear, amazing teacher.",
    lang: "en",
    source: "google",
  },
  // Add additional entries from screenshots: שי/אמיר/דבורה/ענבל/אלכסנדרה, Yoed Levy, Iral Levy, etc.
];

export function getDedupedReviews(list: Review[]): Review[] {
  const seen = new Set<string>();
  const result: Review[] = [];
  for (const r of list) {
    const key = `${r.author}|${r.dateISO}`;
    if (seen.has(key)) continue;
    seen.add(key);
    result.push(r);
  }
  return result;
}


