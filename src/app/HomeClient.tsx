"use client";

import Link from "next/link";
import { useI18n } from "@/i18n";

export default function HomeClient() {
  const { t } = useI18n();
  return (
    <div className="min-h-screen p-6 md:p-10">
      <section className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-semibold">{t.home.hero.title}</h1>
        <p className="text-lg text-neutral-700">{t.home.hero.subtitle}</p>
        <div className="mt-6 flex gap-3 justify-center flex-wrap">
          <Link
            href="/booking"
            className="rounded-xl px-4 py-2 bg-black text-white hover:bg-neutral-800 focus-visible:ring-2 focus-visible:ring-black"
            aria-label="קביעת שיעור ניסיון"
          >
            {t.home.hero.ctaBooking}
          </Link>
          <a
            href="https://wa.me/972535247393"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl px-4 py-2 border hover:bg-gray-50 focus-visible:ring-2 focus-visible:ring-black"
            aria-label="שליחת הודעת וואטסאפ"
          >
            {t.home.hero.ctaWhatsapp}
          </a>
          <Link
            href="/lessons"
            className="rounded-xl px-4 py-2 border hover:bg-gray-50 focus-visible:ring-2 focus-visible:ring-black"
          >
            {t.home.hero.ctaLessons}
          </Link>
        </div>
      </section>

      <section className="max-w-5xl mx-auto mt-16 grid gap-10">
        <div>
          <h2 className="text-2xl font-semibold">{t.home.fitFor.title}</h2>
          <ul className="list-disc pr-6 mt-3 text-neutral-800 space-y-1">
            {t.home.fitFor.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">{t.home.whatYouGet.title}</h2>
          <ul className="list-disc pr-6 mt-3 text-neutral-800 space-y-1">
            {t.home.whatYouGet.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">{t.home.howItWorks.title}</h2>
          <ol className="list-decimal pr-6 mt-3 text-neutral-800 space-y-1">
            {t.home.howItWorks.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}


