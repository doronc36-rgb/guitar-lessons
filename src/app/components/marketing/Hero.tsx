"use client";

import Image from "next/image";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { useI18n } from "@/i18n";

export default function MarketingHero() {
  const { t, locale } = useI18n();
  const dir = typeof document !== "undefined" ? document.documentElement.getAttribute("dir") || (locale === "he" ? "rtl" : "ltr") : (locale === "he" ? "rtl" : "ltr");

  return (
    <div id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt=""
          fill
          className="object-cover"
          priority
          aria-hidden
        />
        <div className="absolute inset-0 hero-overlay"></div>
      </div>
      
      {/* Content */}
      <Container className="relative z-10 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-[color:var(--foreground)] leading-tight mb-6">
            {t.marketing.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-[color:var(--muted)] mb-8 max-w-3xl mx-auto">
            {t.marketing.hero.subtitle}
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button href="/contact?type=trial" aria-label={t.home.hero.ariaBookTrial}>
              {t.marketing.hero.ctaPrimary}
            </Button>
            <Button href="/lessons" variant="secondary" className="bg-[color:var(--surface)] text-[color:var(--foreground)] border-[color:var(--border)] hover:bg-[color:var(--background)]"
              {t.marketing.hero.ctaSecondary}
            </Button>
          </div>
          <div className="flex gap-6 justify-center text-[color:var(--muted)]">
            <a
              href="#features"
              className="underline underline-offset-4 hover:text-[color:var(--foreground)] transition-colors"
            >
              {t.marketing.hero.quick.features}
            </a>
            <a href="#pricing" className="underline underline-offset-4 hover:text-[color:var(--foreground)] transition-colors">
              {t.marketing.hero.quick.pricing}
            </a>
            <a href="#contact" className="underline underline-offset-4 hover:text-[color:var(--foreground)] transition-colors">
              {t.marketing.hero.quick.contact}
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}


