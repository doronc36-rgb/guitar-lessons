"use client";

import Container from "../ui/Container";
import Button from "../ui/Button";
import { useI18n } from "@/i18n";

export default function MarketingCTA() {
  const { t } = useI18n();
  return (
    <Container>
      <div id="contact" className="surface p-8 rounded-md shadow-sm text-center">
        <h2 className="text-2xl font-semibold">{t.marketing.cta.title}</h2>
        <p className="mt-2 text-[color:var(--muted)]">{t.marketing.cta.subtitle}</p>
        <div className="mt-6 flex justify-center gap-3">
          <Button href="/contact">{t.marketing.cta.ctaPrimary}</Button>
          <Button href="https://wa.me/972535247393" target="_blank" rel="noopener noreferrer" variant="secondary">
            {t.marketing.cta.ctaSecondary}
          </Button>
        </div>
      </div>
    </Container>
  );
}


