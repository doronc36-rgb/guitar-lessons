"use client";

import Image from "next/image";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { useI18n } from "@/i18n";

export default function MarketingHero() {
  const { t, locale } = useI18n();
  const dir = typeof document !== "undefined" ? document.documentElement.getAttribute("dir") || (locale === "he" ? "rtl" : "ltr") : (locale === "he" ? "rtl" : "ltr");

  return (
    <div id="top" className="relative overflow-hidden bg-[color:var(--background)]">
      <Container className="py-14 md:py-20">
        <div className="grid md:grid-cols-2 items-center gap-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold text-[color:var(--foreground)] leading-tight">
              {t.marketing.hero.title}
            </h1>
            <p className="mt-4 text-lg text-[color:var(--muted)]">
              {t.marketing.hero.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact?type=trial" aria-label={t.home.hero.ariaBookTrial}>
                {t.marketing.hero.ctaPrimary}
              </Button>
              <Button href="/lessons" variant="secondary">
                {t.marketing.hero.ctaSecondary}
              </Button>
            </div>
            <div className="mt-6 flex gap-4 text-sm">
              <a
                href="#features"
                className="underline underline-offset-4 hover:opacity-80"
              >
                {t.marketing.hero.quick.features}
              </a>
              <a href="#pricing" className="underline underline-offset-4 hover:opacity-80">
                {t.marketing.hero.quick.pricing}
              </a>
              <a href="#contact" className="underline underline-offset-4 hover:opacity-80">
                {t.marketing.hero.quick.contact}
              </a>
            </div>
          </div>
          <div className="relative h-56 md:h-80 surface rounded-md shadow-sm flex items-center justify-center">
            <Image
              src="/window.svg"
              alt=""
              aria-hidden
              width={320}
              height={320}
              className="w-48 h-48 md:w-64 md:h-64"
              priority
            />
            <span className="sr-only">{dir === "rtl" ? "אלמנט קישוטי" : "Decorative element"}</span>
          </div>
        </div>
      </Container>
    </div>
  );
}


