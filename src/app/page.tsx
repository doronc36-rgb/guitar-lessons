import type { Metadata } from "next";
import HomeClient from "./HomeClient";
import { getSeoByKey, getServerLocale } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = getServerLocale();
  const seo = getSeoByKey("home", locale);
  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: "/",
      languages: {
        en: "/?hl=en",
        he: "/?hl=he",
      },
    },
  } satisfies Metadata;
}

export default function Home() {
  return <HomeClient />;
}