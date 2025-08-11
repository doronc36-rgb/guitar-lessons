"use client";

import Section from "./ui/Section";
import { useEffect, useMemo, useRef, useState } from "react";
import { useI18n } from "@/i18n";
import { t as tf } from "@/i18n";
import { reviews as allReviews, type Review } from "@/data/reviews";

export default function Testimonials({ dir }: { dir?: "ltr" | "rtl" }) {
  const { locale, t } = useI18n();
  const listRef = useRef<HTMLUListElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [expandedMap, setExpandedMap] = useState<Record<string, boolean>>({});
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [docDir, setDocDir] = useState<"ltr" | "rtl">("rtl");

  useEffect(() => {
    // Prefer explicit prop, else read from document to stay in sync with <html dir>
    if (!dir) {
      const current = typeof document !== "undefined" && document.documentElement?.getAttribute("dir");
      setDocDir(current === "rtl" ? "rtl" : "ltr");
    }
  }, [dir, locale]);

  const effectiveDir: "ltr" | "rtl" = dir ?? docDir;
  const isRtl = effectiveDir === "rtl";

  const baseReviews: Review[] = useMemo(() => {
    const primary = allReviews.filter((r) => r.lang === locale);
    const secondary = allReviews.filter((r) => r.lang !== locale);
    if (primary.length >= 3) return primary;
    // If fewer than 3, pad with up to 3 random from the other locale (no duplicates by id)
    const needed = 3 - primary.length;
    const shuffled = [...secondary].sort(() => Math.random() - 0.5);
    return [...primary, ...shuffled.slice(0, needed)];
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
  const maxIndex = Math.max(0, reviews.length - 1);

  // Auto-advance
  useEffect(() => {
    if (!isCarousel) return;
    const id = setInterval(() => {
      setIndex((i) => {
        const next = i >= maxIndex ? 0 : i + 1;
        const scroller = scrollerRef.current;
        const item = scroller?.querySelectorAll<HTMLLIElement>("li[data-slide]")[next];
        item?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
        return next;
      });
    }, 5000);
    return () => clearInterval(id);
  }, [isCarousel, maxIndex]);

  useEffect(() => {
    if (!isCarousel) return;
    setIsTransitioning(true);
    const t = setTimeout(() => setIsTransitioning(false), 300);
    return () => clearTimeout(t);
  }, [index, isCarousel]);

  // Warn if empty dataset
  useEffect(() => {
    if (baseReviews.length === 0) {
      // eslint-disable-next-line no-console
      console.warn("Testimonials: reviews array is empty");
    }
  }, [baseReviews.length]);

  function toggleExpand(key: string) {
    setExpandedMap((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  function trimText(text: string, limit = 280): { short: string; isTrimmed: boolean } {
    if (text.length <= limit) return { short: text, isTrimmed: false };
    return { short: text.slice(0, limit - 1) + "…", isTrimmed: true };
  }

  function formatDate(iso: string): string {
    try {
      const d = new Date(iso);
      return new Intl.DateTimeFormat(locale, { year: "numeric", month: "short", day: "2-digit" }).format(d);
    } catch {
      return iso;
    }
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
      <div role="region" aria-label={t.home.testimonials.regionAria} dir={effectiveDir}>
        {baseReviews.length === 0 ? (
          <div className="surface p-6 text-center text-neutral-700">{t.home.testimonials.empty}</div>
        ) : !isCarousel ? (
          <ul className="grid gap-4 md:grid-cols-2">
            {baseReviews.map((r, i) => {
              const key = `${r.id}-${i}`;
              const isExpanded = !!expandedMap[key];
              const { short, isTrimmed } = trimText(r.text);
              return (
                <li
                  key={key}
                  className="surface rounded-2xl shadow-sm md:shadow p-5 min-h-[180px]"
                  aria-roledescription="slide"
                  aria-label={tf('home.testimonials.slideAria', locale, { index: i + 1, total: baseReviews.length })}
                >
                  <div className="flex items-center justify-between">
                    <div className="font-medium">{r.author}</div>
                    <span className="inline-flex items-center gap-1 text-sm">
                      <span className="sr-only">{tf('home.testimonials.ratingSr', locale, { rating: r.rating })}</span>
                      <Stars rating={r.rating} />
                    </span>
                  </div>
                  <div className="text-xs text-neutral-600 mt-1">{formatDate(r.dateISO)}</div>
                  <div className={!isExpanded ? 'h-[8.75rem] sm:h-auto' : ''}>
                    <p className={`mt-2 text-neutral-800 leading-7 ${!isExpanded ? 'line-clamp-5' : ''}`}>{isExpanded ? r.text : short}</p>
                  </div>
                  {(isTrimmed || isExpanded) && (
                  <button
                    type="button"
                    className="mt-2 text-sm font-medium text-[color:var(--accent)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
                    aria-expanded={isExpanded}
                    onClick={() => toggleExpand(key)}
                  >
                    {isExpanded ? t.home.testimonials.readLess : t.home.testimonials.readMore}
                  </button>
                  )}
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="relative">
            <div
              ref={scrollerRef}
              dir={effectiveDir}
              className={`flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2
              [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`}
              aria-roledescription="carousel"
              aria-label={t.home.testimonials.regionAria}
            >
              <ul ref={listRef} className="flex gap-4">
              {reviews.map((r, i) => {
                const key = `${r.id}-${i}`;
                const isExpanded = !!expandedMap[key];
                const { short, isTrimmed } = trimText(r.text);
                return (
                  <li
                    key={key}
                    data-slide
                    className="surface rounded-2xl shadow-sm md:shadow p-5 min-h-[200px] w-[280px] sm:w-[320px] snap-start shrink-0"
                    aria-roledescription="slide"
                    aria-label={tf('home.testimonials.slideAria', locale, { index: i + 1, total: reviews.length })}
                  >
                    <div className="flex items-center justify-between">
                      <div className="font-medium">{r.author}</div>
                      <span className="inline-flex items-center gap-1 text-sm">
                        <span className="sr-only">{tf('home.testimonials.ratingSr', locale, { rating: r.rating })}</span>
                        <Stars rating={r.rating} />
                      </span>
                    </div>
                    <div className="text-xs text-neutral-600 mt-1">{formatDate(r.dateISO)}</div>
                    <div className={!isExpanded ? 'h-[8.75rem] sm:h-auto' : ''}>
                      <p className={`mt-2 text-neutral-800 leading-7 ${!isExpanded ? 'line-clamp-5' : ''}`}>{isExpanded ? r.text : short}</p>
                    </div>
                    {(isTrimmed || isExpanded) && (
                    <button
                      type="button"
                      className="mt-2 text-sm font-medium text-[color:var(--accent)] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
                      aria-expanded={isExpanded}
                      onClick={() => toggleExpand(key)}
                    >
                      {isExpanded ? t.home.testimonials.readLess : t.home.testimonials.readMore}
                    </button>
                    )}
                  </li>
                );
              })}
              </ul>
            </div>

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
                    onClick={() => {
                      setIndex(i);
                      const scroller = scrollerRef.current;
                      const item = scroller?.querySelectorAll<HTMLLIElement>('li[data-slide]')[i];
                      item?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
                    }}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="surface px-3 py-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
                  onClick={() => {
                    setIndex((i) => {
                      const next = i <= 0 ? maxIndex : i - 1;
                      const scroller = scrollerRef.current;
                      const item = scroller?.querySelectorAll<HTMLLIElement>('li[data-slide]')[next];
                      item?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
                      return next;
                    });
                  }}
                  aria-label={t.home.testimonials.prev}
                >
                  ◀
                </button>
                <button
                  type="button"
                  className="surface px-3 py-1 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
                  onClick={() => {
                    setIndex((i) => {
                      const next = i >= maxIndex ? 0 : i + 1;
                      const scroller = scrollerRef.current;
                      const item = scroller?.querySelectorAll<HTMLLIElement>('li[data-slide]')[next];
                      item?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
                      return next;
                    });
                  }}
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


