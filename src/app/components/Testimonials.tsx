"use client";

import Section from "./ui/Section";
import { useEffect, useMemo, useRef, useState } from "react";
import { useI18n } from "@/i18n";
import { t as tf } from "@/i18n";
import heReviewsJson from "@/content/reviews.he.json";
import enReviewsJson from "@/content/reviews.en.json";

type Review = {
  name: string;
  role: string;
  text: string;
  rating: number;
};

export default function Testimonials() {
  const { locale, t } = useI18n();
  const listRef = useRef<HTMLUListElement>(null);
  const [index, setIndex] = useState(0);
  const [expandedMap, setExpandedMap] = useState<Record<string, boolean>>({});
  const [isTransitioning, setIsTransitioning] = useState(false);

  const isRtl = locale === "he";

  const baseReviews: Review[] = useMemo(() => {
    const heSource = (heReviewsJson as Review[]) || [];
    const enSource = (enReviewsJson as Review[]) || [];
    const byLocale = locale === "en" ? enSource : heSource;
    const chosen = Array.isArray(byLocale) ? byLocale : [];
    // Fallback: if EN is empty, use HE
    if (locale === "en" && chosen.length === 0) {
      return Array.isArray(heSource) ? heSource : [];
    }
    return chosen;
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

  useEffect(() => {
    if (!isCarousel) return;
    setIsTransitioning(true);
    const t = setTimeout(() => setIsTransitioning(false), 500);
    return () => clearTimeout(t);
  }, [index, isCarousel]);

  function toggleExpand(key: string) {
    setExpandedMap((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  function Stars({ rating }: { rating: number }) {
    const rounded = Math.round(rating);
    return (
      <span aria-hidden="true" className="inline-flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            viewBox="0 0 20 20"
            className={`${i < rounded ? 'text-[color:var(--accent)]' : 'text-neutral-300'} w-4 h-4`}
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.035a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.035a1 1 0 00-1.175 0l-2.802 2.035c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </span>
    );
  }

  return (
    <Section title={t.home.testimonials.title} className="mt-12">
      <div role="region" aria-label={t.home.testimonials.regionAria}>
        {baseReviews.length === 0 ? (
          <div className="surface p-6 text-center text-neutral-700">{t.home.testimonials.empty}</div>
        ) : !isCarousel ? (
          <ul className="grid gap-4 md:grid-cols-2">
            {baseReviews.map((r, i) => {
              const key = `${r.name}-${i}`;
              const isExpanded = !!expandedMap[key];
              return (
                <li
                  key={key}
                  className="surface rounded-2xl shadow-sm md:shadow p-5 min-h-[180px]"
                  aria-roledescription="slide"
                  aria-label={tf('home.testimonials.slideAria', locale, { index: i + 1, total: baseReviews.length })}
                >
                  <div className="flex items-center justify-between">
                    <div className="font-medium">{r.name}</div>
                    <span className="inline-flex items-center gap-1 text-sm">
                      <span className="sr-only">{tf('home.testimonials.ratingSr', locale, { rating: r.rating })}</span>
                      <Stars rating={r.rating} />
                    </span>
                  </div>
                  <div className="text-xs text-neutral-600 mt-1">{r.role}</div>
                  <div className={!isExpanded ? 'h-[8.75rem] sm:h-auto' : ''}>
                    <p className={`mt-2 text-neutral-800 leading-7 ${!isExpanded ? 'line-clamp-5' : ''}`}>{r.text}</p>
                  </div>
                  <button
                    type="button"
                    className="mt-2 text-sm font-medium text-[color:var(--accent)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
                    aria-expanded={isExpanded}
                    onClick={() => toggleExpand(key)}
                  >
                    {isExpanded ? t.home.testimonials.readLess : t.home.testimonials.readMore}
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="relative">
            <ul
              ref={listRef}
              className={`grid grid-flow-col auto-cols-[minmax(260px,1fr)] gap-4 overflow-hidden motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-out motion-safe:will-change-transform motion-safe:transition-opacity ${isTransitioning ? 'motion-safe:opacity-95' : ''} motion-reduce:transition-none`}
              style={{ transform: `translateX(${(isRtl ? 1 : -1) * index * 100}%)` }}
            >
              {reviews.map((r, i) => {
                const key = `${r.name}-${i}`;
                const isExpanded = !!expandedMap[key];
                return (
                  <li
                    key={key}
                    className="surface rounded-2xl shadow-sm md:shadow p-5 min-h-[180px]"
                    aria-roledescription="slide"
                    aria-label={tf('home.testimonials.slideAria', locale, { index: i + 1, total: reviews.length })}
                  >
                    <div className="flex items-center justify-between">
                      <div className="font-medium">{r.name}</div>
                      <span className="inline-flex items-center gap-1 text-sm">
                        <span className="sr-only">{tf('home.testimonials.ratingSr', locale, { rating: r.rating })}</span>
                        <Stars rating={r.rating} />
                      </span>
                    </div>
                    <div className="text-xs text-neutral-600 mt-1">{r.role}</div>
                    <div className={!isExpanded ? 'h-[8.75rem] sm:h-auto' : ''}>
                      <p className={`mt-2 text-neutral-800 leading-7 ${!isExpanded ? 'line-clamp-5' : ''}`}>{r.text}</p>
                    </div>
                    <button
                      type="button"
                      className="mt-2 text-sm font-medium text-[color:var(--accent)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
                      aria-expanded={isExpanded}
                      onClick={() => toggleExpand(key)}
                    >
                      {isExpanded ? t.home.testimonials.readLess : t.home.testimonials.readMore}
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center justify-between mt-4">
              <div className="flex gap-2" role="tablist" aria-label={t.home.testimonials.dotsAria}>
                {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`${i + 1}`}
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
                  aria-label={t.home.testimonials.prev}
                >
                  ◀
                </button>
                <button
                  type="button"
                  className="surface px-3 py-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
                  onClick={() => setIndex((i) => (i >= maxIndex ? 0 : i + 1))}
                  aria-label={t.home.testimonials.next}
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


