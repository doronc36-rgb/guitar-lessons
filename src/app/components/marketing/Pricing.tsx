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
              "border-l-4 border-blue-500 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20",
              "border-l-4 border-green-500 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20", 
              "border-l-4 border-orange-500 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20"
            ];
            return (
              <div key={p.label} className={`p-6 rounded-md shadow-sm border border-gray-100 dark:border-gray-700 text-center ${colors[index % 3]}`}>
                <div className="font-medium text-[color:var(--foreground)]">{p.label}</div>
                <div className="mt-2 text-2xl font-bold text-[color:var(--foreground)]">{p.price}</div>
              </div>
            );
          })}
        </div>
        {/* Removed extra buttons to reduce repetition */}
      </Section>
    </Container>
  );
}


