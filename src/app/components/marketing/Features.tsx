"use client";

import Container from "../ui/Container";
import Section from "../ui/Section";
import { useI18n } from "@/i18n";

export default function MarketingFeatures() {
  const { t } = useI18n();
  return (
    <Container className="py-16">
      <Section id="features" title={t.marketing.features.title} intro={t.marketing.features.subtitle}>
        <div className="grid gap-6 md:grid-cols-3">
          {t.marketing.features.items.map((f: { title: string; body: string }) => (
            <div key={f.title} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="text-xl font-semibold text-[color:var(--text-primary)] mb-3">{f.title}</div>
              <p className="text-[color:var(--text-secondary)] leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </Section>
    </Container>
  );
}


