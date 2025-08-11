import type { Metadata } from "next";
import FAQClient from "./FAQClient";

export const metadata: Metadata = {
  title: "שאלות נפוצות",
  description: "תשובות לשאלות נפוצות על שיעורים, ציוד, אונליין ועוד.",
};

export default function FAQPage() {
  return <FAQClient />;
}


