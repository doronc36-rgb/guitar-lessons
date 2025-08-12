import type { Metadata } from "next";
import PricesClient from "./PricesClient";
import { getSeoByKey, getServerLocale } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const seo = getSeoByKey("prices", locale);
  return {
    title: seo.title,
    description: seo.description,
    openGraph: {
      title: seo.title,
      description: seo.description,
      locale: locale === "en" ? "en_US" : "he_IL",
      type: "website",
    },
    alternates: {
      canonical: "/prices",
      languages: {
        en: "/prices?hl=en",
        he: "/prices?hl=he",
      },
    },
  } satisfies Metadata;
}

export default function PricesPage() {
  return <PricesClient />;
}


