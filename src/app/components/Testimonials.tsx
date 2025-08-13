"use client";

import Section from "./ui/Section";
import { useEffect, useMemo, useState } from "react";
import { useI18n } from "@/i18n";
import { reviews as reviewsByLocale, type Review } from "@/content/reviews";

export default function Testimonials({ dir }: { dir?: "ltr" | "rtl" }) {
  const { locale, t } = useI18n();
  const [docDir, setDocDir] = useState<"ltr" | "rtl">("rtl");

  useEffect(() => {
    if (!dir) {
      const current =
        typeof document !== "undefined" &&
        document.documentElement?.getAttribute("dir");
      setDocDir(current === "rtl" ? "rtl" : "ltr");
    }
  }, [dir, locale]);

  const effectiveDir: "ltr" | "rtl" = dir ?? docDir;

  const list: Review[] = useMemo(() => {
    const base = (reviewsByLocale[locale] as Review[]) || [];
    if (base.length >= 6) return base;
    const other = (reviewsByLocale[locale === "he" ? "en" : "he"] as Review[]) || [];
    const merged = [...base];
    for (const r of other) {
      if (merged.length >= 6) break;
      merged.push({ ...r, lang: locale });
    }
    return merged;
  }, [locale]);

  const isOdd = list.length % 2 === 1;
  const paddedList = isOdd ? [...list, { name: "", text: "", lang: locale }] : list;

  function Stars({ rating = 5 }: { rating?: number }) {
    const rounded = Math.round(rating);
    return (
      <span aria-hidden className="inline-flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            viewBox="0 0 20 20"
            className={`${i < rounded ? "text-[color:var(--accent)]" : "text-[color:var(--muted)]"} w-4 h-4`}
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.035a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.035a1 1 0 00-1.175 0l-2.802 2.035c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69ל1.07-3.292z" />
          </svg>
        ))}
      </span>
    );
  }

  return (
    <Section title={t.home.testimonials.title} intro={t.marketing.testimonials.subtitle} className="mt-12">
      <div role="region" aria-label={t.home.testimonials.regionAria} dir={effectiveDir}>
        {paddedList.length === 0 ? (
          <div className="surface p-6 text-center text-[color:var(--muted)]">
            {t.home.testimonials.empty}
          </div>
        ) : (
          <ul className="grid gap-4 md:grid-cols-2">
            {paddedList.map((r, i) => {
              const isGhost = !r.name && !r.text;
              if (isGhost)
                return (
                  <li
                    key={`ghost-${i}`}
                    aria-hidden
                    className="p-5 rounded-2xl border border-transparent"
                  />
                );
              return (
                <li
                  key={`${r.name}-${i}`}
                  className="surface rounded-2xl shadow-sm md:shadow p-5 min-h-[180px]"
                >
                  <div className="flex items-center justify-between">
                    <div className="font-medium">{r.name}</div>
                    {typeof r.rating === "number" && (
                      <span className="inline-flex items-center gap-1 text-sm">
                        <span className="sr-only">
                          {t.home.testimonials.ratingSr.replace(
                            "{rating}",
                            String(r.rating)
                          )}
                        </span>
                        <Stars rating={r.rating} />
                      </span>
                    )}
                  </div>
                  {r.dateISO && (
                    <div className="text-xs text-[color:var(--muted)] mt-1">{r.dateISO}</div>
                  )}
                  <p className="mt-2 text-[color:var(--foreground)] leading-7">{r.text}</p>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </Section>
  );
}


