"use client";

import Section from "./ui/Section";

type Testimonial = {
  name: string;
  date: string;
  text: string;
  score?: number;
};

export default function Testimonials({ items }: { items: Testimonial[] }) {
  return (
    <Section title="מה אומרים התלמידים" className="mt-12">
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
    </Section>
  );
}


