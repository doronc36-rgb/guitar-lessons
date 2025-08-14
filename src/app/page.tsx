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
      images: [
        {
          url: "/logo.svg",
          width: 1200,
          height: 630,
          alt: seo.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: ["/logo.svg"],
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