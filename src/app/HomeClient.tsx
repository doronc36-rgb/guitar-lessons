"use client";

import { useI18n } from "@/i18n";
import Container from "./components/ui/Container";
import Button from "./components/ui/Button";
import Section from "./components/ui/Section";
import Testimonials from "./components/Testimonials";

export default function HomeClient() {
  const { t } = useI18n();
  return (
    <div className="min-h-screen">
      <div className="relative isolate overflow-hidden">
        <Container className="py-12 md:py-16">
          <div className="surface px-6 md:px-10 py-10 text-center space-y-5">
        <h1 className="text-4xl md:text-5xl font-semibold">{t.home.hero.title}</h1>
        <p className="text-lg text-[color:var(--muted)]">{t.home.hero.subtitle}</p>
            <div className="mt-6 flex gap-3 justify-center flex-wrap">
              <Button href="/contact?type=trial" aria-label={t.home.hero.ariaBookTrial}>
                {t.home.hero.ctaBooking}
              </Button>
              <Button href="https://wa.me/972535247393" target="_blank" rel="noopener noreferrer" variant="secondary" aria-label={t.home.hero.ariaWhatsapp}>
                {t.home.hero.ctaWhatsapp}
              </Button>
              <Button href="/lessons" variant="secondary">
                {t.home.hero.ctaLessons}
              </Button>
            </div>
          </div>
        </Container>
      </div>

      {/* Anchor targets for quick links */}
      {/* 'about' anchored on the actual section below */}
      <div id="lessons" className="scroll-mt-28" />
      <div id="prices" className="scroll-mt-28" />
      <div id="faq" className="scroll-mt-28" />
      <div id="contact" className="scroll-mt-28" />

      <Container className="mt-12">
        <div className="grid gap-8 md:grid-cols-3">
          <Section id="about" title={t.home.fitFor.title} className="border-l-4 border-blue-500 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
            <ul className="list-disc pr-6 mt-1 text-[color:var(--foreground)] space-y-1">
              {t.home.fitFor.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Section>
          <Section title={t.home.whatYouGet.title} intro={t.marketing.features.subtitle} className="border-l-4 border-green-500 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20">
            <ul className="list-disc pr-6 mt-1 text-[color:var(--foreground)] space-y-1">
              {t.home.whatYouGet.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Section>
          <Section title={t.home.howItWorks.title} className="border-l-4 border-orange-500 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20">
            <ol className="list-decimal pr-6 mt-1 text-[color:var(--foreground)] space-y-1">
              {t.home.howItWorks.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </Section>
        </div>
      </Container>

      <Container>
        <div id="reviews" className="scroll-mt-28">
          <Testimonials />
        </div>
      </Container>

      {/* Mobile CTA bar */}
      <div className="fixed bottom-4 inset-x-0 md:hidden">
        <Container>
          <div className="surface px-3 py-3 flex justify-between items-center">
            <span className="font-medium">{t.home.mobileCta.ready}</span>
            <Button href="/contact?type=trial">{t.home.hero.ctaBooking}</Button>
          </div>
        </Container>
      </div>
    </div>
  );
}


