"use client";

import Container from "../ui/Container";
import Section from "../ui/Section";
import { useI18n } from "@/i18n";

export default function MarketingFeatures() {
  const { t } = useI18n();
  return (
    <Container className="py-8">
      <Section id="features" title={t.marketing.features.title} intro={t.marketing.features.subtitle}>
        <div className="grid gap-4 md:grid-cols-3">
          {t.marketing.features.items.map((f: { title: string; body: string }, index: number) => {
            const colors = [
              "border-l-4 border-blue-500 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20",
              "border-l-4 border-indigo-500 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/20 dark:to-indigo-800/20", 
              "border-l-4 border-sky-500 bg-gradient-to-br from-sky-50 to-sky-100 dark:from-sky-900/20 dark:to-sky-800/20"
            ];
            return (
              <div key={f.title} className={`p-5 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 text-center ${colors[index % 3]}`}>
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


