import type { Metadata } from "next";
import PricesClient from "./PricesClient";

export const metadata: Metadata = {
  title: "מחירים",
  description:
    "מחירי שיעורים: סטודיו 60 דק׳ ₪120, בבית תלמיד באשקלון 60 דק׳ ₪150, שיעור קבוצתי בתיאום. מדיניות ביטולים 24 שעות.",
};

export default function PricesPage() {
  return <PricesClient />;
}


