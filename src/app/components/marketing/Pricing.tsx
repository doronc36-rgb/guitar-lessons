"use client";

import Container from "../ui/Container";
import Section from "../ui/Section";
import Button from "../ui/Button";
import { useI18n } from "@/i18n";

export default function MarketingPricing() {
  const { t } = useI18n();
  return (
    <Container>
      <Section id="pricing" title={t.marketing.pricing.title} intro={t.marketing.pricing.subtitle}>
        <div className="grid gap-4 md:grid-cols-3">
          {t.prices.items.map((p) => (
            <div key={p.label} className="surface p-6 rounded-md shadow-sm">
              <div className="font-medium">{p.label}</div>
              <div className="mt-2 text-2xl">{p.price}</div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex gap-3">
          <Button href="/contact">{t.marketing.pricing.ctaContact}</Button>
          <Button href="/lessons" variant="secondary">{t.marketing.pricing.ctaLessons}</Button>
        </div>
      </Section>
    </Container>
  );
}


