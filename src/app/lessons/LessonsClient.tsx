"use client";

import { useI18n } from "@/i18n";

export default function LessonsClient() {
  const { t } = useI18n();
  return (
    <div className="min-h-screen p-6 md:p-10 max-w-4xl mx-auto space-y-10">
      <h1 className="text-3xl font-semibold">{t.lessons.title}</h1>

      <section>
        <h2 className="text-2xl font-semibold">{t.lessons.instruments.title}</h2>
        <ul className="list-disc pr-6 mt-3 space-y-1 text-neutral-800">
          {t.lessons.instruments.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">{t.lessons.formats.title}</h2>
        <ul className="list-disc pr-6 mt-3 space-y-1 text-neutral-800">
          {t.lessons.formats.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">{t.lessons.equipment.title}</h2>
        <ul className="list-disc pr-6 mt-3 space-y-1 text-neutral-800">
          {t.lessons.equipment.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}


