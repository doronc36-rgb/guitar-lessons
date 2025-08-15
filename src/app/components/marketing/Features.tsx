"use client";

import Container from "../ui/Container";
import Section from "../ui/Section";
import { useI18n } from "@/i18n";

export default function MarketingFeatures() {
  const { t } = useI18n();
  return (
    <Container className="py-20">
      <Section id="features" title={t.marketing.features.title} intro={t.marketing.features.subtitle}>
        <div className="grid gap-6 md:grid-cols-3">
          {t.marketing.features.items.map((f: { title: string; body: string }, index: number) => {
            const colors = [
              "border-l-4 border-amber-500 bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20",
              "border-l-4 border-red-500 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20", 
              "border-l-4 border-orange-500 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20"
            ];
            return (
              <div key={f.title} className={`p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 text-center ${colors[index % 3]}`}>
                <div className="text-xl font-semibold text-[color:var(--foreground)] mb-3">{f.title}</div>
                <p className="text-[color:var(--muted)] leading-relaxed">{f.body}</p>
              </div>
            );
          })}
        </div>
      </Section>
    </Container>
  );
}


