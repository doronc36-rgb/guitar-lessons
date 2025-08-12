"use client";

import Container from "../ui/Container";
import Section from "../ui/Section";
import { useI18n } from "@/i18n";

export default function MarketingFeatures() {
  const { t } = useI18n();
  return (
    <Container>
      <Section id="features" title={t.marketing.features.title} intro={t.marketing.features.subtitle}>
        <div className="grid gap-4 md:grid-cols-3">
          {t.marketing.features.items.map((f: { title: string; body: string }) => (
            <div key={f.title} className="surface p-6 rounded-md shadow-sm">
              <div className="text-lg font-medium">{f.title}</div>
              <p className="mt-2 text-[color:var(--muted)]">{f.body}</p>
            </div>
          ))}
        </div>
      </Section>
    </Container>
  );
}


