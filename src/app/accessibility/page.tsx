import type { Metadata } from "next";
import AccessibilityClient from "./AccessibilityClient";
import { getSeoByKey, getServerLocale } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const seo = getSeoByKey("accessibility", locale);
  return {
    title: seo.title,
    description: seo.description,
    openGraph: {
      title: seo.title,
      description: seo.description,
      images: [{ url: `/og?title=${encodeURIComponent(seo.title)}&subtitle=Doron%20Cohen` }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [`/og?title=${encodeURIComponent(seo.title)}&subtitle=Doron%20Cohen`],
    },
    alternates: {
      canonical: "/accessibility",
      languages: {
        en: "/accessibility?hl=en",
        he: "/accessibility?hl=he",
      },
    },
  } satisfies Metadata;
}

export default function AccessibilityPage() {
  return <AccessibilityClient />;
}


