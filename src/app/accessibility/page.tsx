import type { Metadata } from "next";
import AccessibilityClient from "./AccessibilityClient";

export const metadata: Metadata = {
  title: "הצהרת נגישות",
  description:
    "מחויבות לנגישות: מבנה כותרות תקין, קישורי דילוג, ניגודיות ופוקוס נראים.",
};

export default function AccessibilityPage() {
  return <AccessibilityClient />;
}


