import type { Metadata } from "next";
import LessonsClient from "./LessonsClient";
import { getSeoByKey, getServerLocale } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const seo = getSeoByKey("lessons", locale);
  return {
    title: seo.title,
    description: seo.description,
    openGraph: {
      title: seo.title,
      description: seo.description,
      locale: locale === "en" ? "en_US" : "he_IL",
      type: "website",
      images: [{ url: `/og?title=${encodeURIComponent(seo.title)}&subtitle=Doron%20Cohen` }],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [`/og?title=${encodeURIComponent(seo.title)}&subtitle=Doron%20Cohen`],
    },
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


