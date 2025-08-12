import type { Metadata } from "next";
import FAQClient from "./FAQClient";
import { getSeoByKey, getServerLocale } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const seo = getSeoByKey("faq", locale);
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
      canonical: "/faq",
      languages: {
        en: "/faq?hl=en",
        he: "/faq?hl=he",
      },
    },
  } satisfies Metadata;
}

export default function FAQPage() {
  return <FAQClient />;
}


