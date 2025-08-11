import type { Metadata } from "next";
import BookingClient from "./BookingClient";
import { getSeoByKey, getServerLocale } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = getServerLocale();
  const seo = getSeoByKey("booking", locale);
  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: "/booking",
      languages: {
        en: "/booking?hl=en",
        he: "/booking?hl=he",
      },
    },
  } satisfies Metadata;
}

export default function BookingPage() {
  return <BookingClient />;
}


