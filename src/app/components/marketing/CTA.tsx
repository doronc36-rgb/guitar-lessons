"use client";

import Container from "../ui/Container";
import Button from "../ui/Button";
import { useI18n } from "@/i18n";

export default function MarketingCTA() {
  const { t } = useI18n();
  return (
    <Container className="py-6">
      <div id="contact" className="surface p-6 rounded-md shadow-sm text-center">
        <h2 className="text-2xl font-semibold">{t.marketing.cta.title}</h2>
        <p className="mt-1.5 text-[color:var(--muted)]">{t.marketing.cta.subtitle}</p>
        <div className="mt-4 flex justify-center gap-2.5">
          <Button href="/contact">{t.marketing.cta.ctaPrimary}</Button>
          <Button href="https://wa.me/972535247393" target="_blank" rel="noopener noreferrer" variant="secondary">
            {t.marketing.cta.ctaSecondary}
          </Button>
        </div>
      </div>
    </Container>
  );
}


