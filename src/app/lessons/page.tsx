import type { Metadata } from "next";
import LessonsClient from "./LessonsClient";

export const metadata: Metadata = {
  title: "השיעורים",
  description:
    "שיעורי גיטרה (אקוסטית/חשמלית/קלאסית) ופסנתר. שיעורים פרטיים 1:1, קבוצות 2–4, וחוגים בבתי ספר/פנימיות.",
  keywords: [
    "שיעורי גיטרה באשקלון",
    "שיעורי פסנתר אשקלון",
    "חוגי גיטרה אשקלון",
  ],
};

export default function LessonsPage() {
  return <LessonsClient />;
}


