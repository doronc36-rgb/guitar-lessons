import type { Metadata } from "next";
import TermsClient from "./TermsClient";
import { getSeoByKey, getServerLocale } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = getServerLocale();
  const seo = getSeoByKey("terms", locale);
  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: "/terms",
      languages: {
        en: "/terms?hl=en",
        he: "/terms?hl=he",
      },
    },
  } satisfies Metadata;
}

export default function TermsPage() {
  return <TermsClient />;
}


