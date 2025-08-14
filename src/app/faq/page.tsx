import type { Metadata } from "next";
import FAQClient from "./FAQClient";
import { getSeoByKey, getServerLocale } from "@/i18n/server";
import { he } from "@/i18n/locales/he";
import { en } from "@/i18n/locales/en";

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
      images: [{ url: `/og?title=${encodeURIComponent(seo.title)}&subtitle=Doron%20Cohen` }],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [`/og?title=${encodeURIComponent(seo.title)}&subtitle=Doron%20Cohen`],
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

export default async function FAQPage() {
  const locale = await getServerLocale();
  const dict = locale === "en" ? en : he;
  const items = Array.isArray(dict.faq?.items) ? dict.faq.items : [];
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: it.a,
      },
    })),
  };
  return (
    <>
      <FAQClient />
      <script id="ld-faq" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </>
  );
}


