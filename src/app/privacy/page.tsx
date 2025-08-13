import type { Metadata } from "next";
import PrivacyClient from "./PrivacyClient";
import { getSeoByKey, getServerLocale } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const seo = getSeoByKey("privacy", locale);
  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: "/privacy",
      languages: {
        en: "/privacy?hl=en",
        he: "/privacy?hl=he",
      },
    },
  } satisfies Metadata;
}

export default function PrivacyPage() {
  return <PrivacyClient />;
}
