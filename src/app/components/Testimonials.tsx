"use client";

import Section from "./ui/Section";
import { useEffect, useMemo, useRef, useState } from "react";
import { useI18n } from "@/i18n";
import heReviewsJson from "@/content/reviews.he.json";
import enReviewsJson from "@/content/reviews.en.json";

type Review = {
  name: string;
  role: string;
  text: string;
  rating: number;
};

export default function Testimonials() {
  const { locale } = useI18n();
  const listRef = useRef<HTMLUListElement>(null);
  const [index, setIndex] = useState(0);

  const isRtl = locale === "he";

  const baseReviews: Review[] = useMemo(() => {
    const source = (locale === "en" ? (enReviewsJson as Review[]) : (heReviewsJson as Review[])) || [];
    return Array.isArray(source) ? source : [];
  }, [locale]);

  const reviews: Review[] = useMemo(() => {
    if (baseReviews.length === 0) return [];
    // Duplicate to ensure at least 3 items for the carousel
    const targetMin = 3;
    let expanded = [...baseReviews];
    while (expanded.length < targetMin) {
      expanded = [...expanded, ...baseReviews];
    }
    return expanded;
  }, [baseReviews]);

  // Show carousel only if there are more than the visible count
  const visible = 3;
  const isCarousel = reviews.length > visible;
  const maxIndex = Math.max(0, reviews.length - visible);

  useEffect(() => {
    if (!isCarousel) return;
    const id = setInterval(() => setIndex((i) => (i >= maxIndex ? 0 : i + 1)), 4000);
    return () => clearInterval(id);
  }, [isCarousel, maxIndex]);

  return (
    <Section title="מה אומרים התלמידים" className="mt-12">
      <div role="region" aria-label="ביקורות">
        {baseReviews.length === 0 ? (
          <div className="surface p-6 text-center text-neutral-700">אין עדיין ביקורות להצגה</div>
        ) : !isCarousel ? (
          <ul className="grid gap-4 md:grid-cols-2">
            {baseReviews.map((r, i) => (
              <li
                key={`${r.name}-${i}`}
                className="surface p-4 min-h-[160px]"
                aria-roledescription="slide"
                aria-label={`ביקורת ${i + 1} מתוך ${baseReviews.length}`}
              >
                <div className="flex items-center justify-between">
                  <div className="font-medium">{r.name}</div>
                  <span className="inline-flex items-center gap-1 text-sm" aria-label={`דירוג ${r.rating} מתוך 5`}>
                    <span className="inline-block w-2 h-2 rounded-full bg-[color:var(--accent)]" />
                    {r.rating}
                  </span>
                </div>
                <div className="text-xs text-neutral-600 mt-1">{r.role}</div>
                <p className="mt-2 text-neutral-800 leading-7">{r.text}</p>
              </li>
            ))}
          </ul>
        ) : (
          <div className="relative">
            <ul
              ref={listRef}
              className="grid grid-flow-col auto-cols-[minmax(260px,1fr)] gap-4 overflow-hidden"
            >
              {reviews.map((r, i) => (
                <li
                  key={`${r.name}-${i}`}
                  className="surface p-4 transition-transform duration-500 min-h-[160px]"
                  style={{ transform: `translateX(${(isRtl ? 1 : -1) * index * 100}%)` }}
                  aria-roledescription="slide"
                  aria-label={`ביקורת ${i + 1} מתוך ${reviews.length}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="font-medium">{r.name}</div>
                    <span className="inline-flex items-center gap-1 text-sm" aria-label={`דירוג ${r.rating} מתוך 5`}>
                      <span className="inline-block w-2 h-2 rounded-full bg-[color:var(--accent)]" />
                      {r.rating}
                    </span>
                  </div>
                  <div className="text-xs text-neutral-600 mt-1">{r.role}</div>
                  <p className="mt-2 text-neutral-800 leading-7">{r.text}</p>
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-between mt-4">
              <div className="flex gap-2" role="tablist" aria-label="בקרת שקופיות ביקורות">
                {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`שקופית ${i + 1}`}
                    role="tab"
                    aria-selected={i === index}
                    className={`w-2.5 h-2.5 rounded-full ${i === index ? 'bg-[color:var(--accent)]' : 'bg-neutral-300'} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]`}
                    onClick={() => setIndex(i)}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="surface px-3 py-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
                  onClick={() => setIndex((i) => (i <= 0 ? maxIndex : i - 1))}
                  aria-label="שקופית קודמת"
                >
                  ◀
                </button>
                <button
                  type="button"
                  className="surface px-3 py-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
                  onClick={() => setIndex((i) => (i >= maxIndex ? 0 : i + 1))}
                  aria-label="שקופית הבאה"
                >
                  ▶
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Section>
  );
}


