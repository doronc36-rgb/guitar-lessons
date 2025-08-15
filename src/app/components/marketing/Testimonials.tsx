"use client";

import { useEffect, useMemo, useState } from "react";
import Container from "../ui/Container";
import Section from "../ui/Section";
import { useI18n } from "@/i18n";
import { reviews as reviewsByLocale, type Review } from "@/content/reviews";

export default function MarketingTestimonials() {
  const { t, locale } = useI18n();
  const [index, setIndex] = useState(0);

  const list: Review[] = useMemo(() => {
    const base = (reviewsByLocale[locale] as Review[]) || [];
    const out: Review[] = [];
    for (const r of base) {
      if (r.name && r.text) out.push(r);
    }
    if (out.length >= 6) return out;
    const other = (reviewsByLocale[locale === "he" ? "en" : "he"] as Review[]) || [];
    for (const r of other) {
      if (out.length >= 6) break;
      if (r.name && r.text) out.push({ ...r, lang: locale });
    }
    return out;
  }, [locale]);

  useEffect(() => {
    setIndex(0);
  }, [locale]);

  const total = list.length;
  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  if (total === 0) return null;

  return (
    <Container className="py-6">
      <Section id="testimonials" title={t.marketing.testimonials.title} intro={t.marketing.testimonials.subtitle}>
        <div className="p-4 rounded-md shadow-sm border-l-4 border-blue-500 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-gray-100 dark:border-gray-700 text-center">
          <div className="flex items-center justify-between">
            <button type="button" onClick={prev} aria-label={t.home.testimonials.prev} className="px-3 py-1.5 rounded-md border">‹</button>
            <div className="flex-1 px-4">
              <blockquote className="text-lg leading-7 text-[color:var(--foreground)]">
                “{list[index].text}”
              </blockquote>
              <div className="mt-2 text-sm text-[color:var(--muted)]">{list[index].name}</div>
            </div>
            <button type="button" onClick={next} aria-label={t.home.testimonials.next} className="px-3 py-1.5 rounded-md border">›</button>
          </div>
          <div className="mt-4 flex justify-center gap-2" aria-label={t.home.testimonials.dotsAria}>
            {list.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={`w-2.5 h-2.5 rounded-full ${i === index ? "bg-[color:var(--foreground)]" : "bg-[color:var(--muted)]/30"}`}
                aria-label={t.home.testimonials.slideAria.replace("{index}", String(i + 1)).replace("{total}", String(total))}
                aria-current={i === index}
              />
            ))}
          </div>
        </div>
      </Section>
    </Container>
  );
}


