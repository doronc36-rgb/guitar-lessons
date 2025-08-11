import type { Metadata } from "next";
import LessonsClient from "./LessonsClient";
import { getSeoByKey, getServerLocale } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const seo = getSeoByKey("lessons", locale);
  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: "/lessons",
      languages: {
        en: "/lessons?hl=en",
        he: "/lessons?hl=he",
      },
    },
  } satisfies Metadata;
}

export default function LessonsPage() {
  return <LessonsClient />;
}


