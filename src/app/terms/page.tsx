import type { Metadata } from "next";
import TermsClient from "./TermsClient";

export const metadata: Metadata = {
  title: "תנאי שימוש",
  description: "תנאי שימוש ושירות מקוצרים לשיעורים.",
};

export default function TermsPage() {
  return <TermsClient />;
}


