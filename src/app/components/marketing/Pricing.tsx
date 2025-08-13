"use client";

import Container from "../ui/Container";
import Section from "../ui/Section";
import Button from "../ui/Button";
import { useI18n } from "@/i18n";

export default function MarketingPricing() {
  const { t } = useI18n();
  return (
    <Container>
              <Section id="prices" title={t.marketing.pricing.title} intro={t.marketing.pricing.subtitle}>
        <div className="grid gap-4 md:grid-cols-3">
          {t.prices.items.map((p, index) => {
            const colors = [
              "border-l-4 border-purple-500 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20",
              "border-l-4 border-pink-500 bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20", 
              "border-l-4 border-indigo-500 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20"
            ];
            return (
              <div key={p.label} className={`p-6 rounded-md shadow-sm border border-gray-100 dark:border-gray-700 text-center ${colors[index % 3]}`}>
                <div className="font-medium text-[color:var(--foreground)]">{p.label}</div>
                <div className="mt-2 text-2xl font-bold text-[color:var(--foreground)]">{p.price}</div>
              </div>
            );
          })}
        </div>
        <div className="mt-6 flex gap-3">
          <Button href="/contact">{t.marketing.pricing.ctaContact}</Button>
          <Button href="/lessons" variant="secondary">{t.marketing.pricing.ctaLessons}</Button>
        </div>
      </Section>
    </Container>
  );
}


