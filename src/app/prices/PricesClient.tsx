"use client";

import Link from "next/link";
import { useI18n } from "@/i18n";

export default function PricesClient() {
  const { t } = useI18n();
  return (
    <div className="min-h-screen p-6 md:p-10 max-w-3xl mx-auto space-y-8">
      <h1 className="text-3xl font-semibold">{t.prices.title}</h1>

      <ul className="divide-y border rounded-lg">
        {t.prices.items.map((row) => (
          <li key={row.label} className="flex justify-between p-4">
            <span>{row.label}</span>
            <strong>{row.price}</strong>
          </li>
        ))}
      </ul>

      <p className="text-neutral-700">{t.prices.cancellation}</p>

      <div className="flex gap-3">
        <Link
          href="/booking"
          className="rounded-xl px-4 py-2 bg-black text-white hover:bg-neutral-800 focus-visible:ring-2 focus-visible:ring-black"
        >
          {t.common.bookLesson}
        </Link>
        <a
          href="https://wa.me/972535247393"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl px-4 py-2 border hover:bg-gray-50 focus-visible:ring-2 focus-visible:ring-black"
        >
          {t.common.whatsapp}
        </a>
      </div>
    </div>
  );
}


