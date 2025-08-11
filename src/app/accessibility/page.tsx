import type { Metadata } from "next";
import AccessibilityClient from "./AccessibilityClient";
import { getSeoByKey, getServerLocale } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = getServerLocale();
  const seo = getSeoByKey("accessibility", locale);
  return {
    title: seo.title,
    description: seo.description,
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


