import type { Metadata } from "next";
import { getSeoByKey, getServerLocale } from "@/i18n/server";
import MarketingHero from "./components/marketing/Hero";
import MarketingFeatures from "./components/marketing/Features";
import MarketingPricing from "./components/marketing/Pricing";
import MarketingTestimonials from "./components/marketing/Testimonials";
import MarketingCTA from "./components/marketing/CTA";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const seo = getSeoByKey("home", locale);
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
      canonical: "/",
      languages: {
        en: "/?hl=en",
        he: "/?hl=he",
      },
    },
  } satisfies Metadata;
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <MarketingHero />
      <div id="lessons" className="scroll-mt-28" />
      <MarketingFeatures />
      <MarketingPricing />
      <div id="faq" className="scroll-mt-28" />
      <MarketingTestimonials />
      <MarketingCTA />
    </div>
  );
}