"use client";

import Image from "next/image";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { useI18n } from "@/i18n";

export default function MarketingHero() {
  const { t, locale } = useI18n();
  const dir = typeof document !== "undefined" ? document.documentElement.getAttribute("dir") || (locale === "he" ? "rtl" : "ltr") : (locale === "he" ? "rtl" : "ltr");

  return (
    <div id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Background gradient instead of missing image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <Container className="relative z-10 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            {t.marketing.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            {t.marketing.hero.subtitle}
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button href="/contact?type=trial" aria-label={t.home.hero.ariaBookTrial}>
              {t.marketing.hero.ctaPrimary}
            </Button>
            <Button href="/lessons" variant="secondary" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
              {t.marketing.hero.ctaSecondary}
            </Button>
          </div>
          <div className="flex gap-6 justify-center text-white/80">
            <a href="#contact" className="underline underline-offset-4 hover:text-white transition-colors">
              {t.marketing.hero.quick.contact}
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}


