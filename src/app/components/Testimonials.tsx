"use client";

import Section from "./ui/Section";
import { useEffect, useRef, useState } from "react";

type Testimonial = {
  name: string;
  date: string;
  text: string;
  score?: number;
};

export default function Testimonials({ items }: { items: Testimonial[] }) {
  const isCarousel = items.length > 6;
  const [index, setIndex] = useState(0);
  const visible = 4;
  const maxIndex = Math.max(0, items.length - visible);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!isCarousel) return;
    const id = setInterval(() => setIndex((i) => (i >= maxIndex ? 0 : i + 1)), 4000);
    return () => clearInterval(id);
  }, [isCarousel, maxIndex]);

  return (
    <Section title="מה אומרים התלמידים" className="mt-12">
      {!isCarousel ? (
        <ul className="grid gap-4 md:grid-cols-2">
          {items.map((t) => (
            <li key={t.name + t.date} className="surface p-4">
              <div className="flex items-center justify-between">
                <div className="font-medium">{t.name}</div>
                {typeof t.score === "number" && (
                  <span className="inline-flex items-center gap-1 text-sm">
                    <span className="inline-block w-2 h-2 rounded-full bg-[color:var(--accent)]" />
                    {t.score}
                  </span>
                )}
              </div>
              <div className="text-xs text-neutral-600 mt-1">{t.date}</div>
              <p className="mt-2 text-neutral-800 leading-7">{t.text}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div className="relative">
          <ul ref={listRef} className="grid grid-flow-col auto-cols-[minmax(260px,1fr)] gap-4 overflow-hidden">
            {items.map((t, i) => (
              <li
                key={t.name + t.date}
                className="surface p-4 transition-transform duration-500"
                style={{ transform: `translateX(${-index * 100}%)` }}
              >
                <div className="flex items-center justify-between">
                  <div className="font-medium">{t.name}</div>
                  {typeof t.score === "number" && (
                    <span className="inline-flex items-center gap-1 text-sm">
                      <span className="inline-block w-2 h-2 rounded-full bg-[color:var(--accent)]" />
                      {t.score}
                    </span>
                  )}
                </div>
                <div className="text-xs text-neutral-600 mt-1">{t.date}</div>
                <p className="mt-2 text-neutral-800 leading-7">{t.text}</p>
              </li>
            ))}
          </ul>
          <div className="flex justify-center gap-2 mt-4" role="tablist" aria-label="בקרת שקופיות המלצות">
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
        </div>
      )}
    </Section>
  );
}


