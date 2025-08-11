"use client";

import Link from "next/link";
import { useI18n } from "@/i18n";

export default function BookingClient() {
  const { t } = useI18n();
  return (
    <div className="min-h-screen p-6 md:p-10 max-w-3xl mx-auto space-y-8">
      <h1 className="text-3xl font-semibold">{t.booking.title}</h1>
      <ul className="list-disc pr-6 text-neutral-800 space-y-1">
        {t.booking.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>

      <div className="flex gap-3">
        <a
          href="https://wa.me/972535247393"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl px-4 py-2 bg-black text-white hover:bg-neutral-800 focus-visible:ring-2 focus-visible:ring-black"
        >
          {t.common.whatsapp}
        </a>
        <a
          href="tel:+972535247393"
          className="rounded-xl px-4 py-2 border hover:bg-gray-50 focus-visible:ring-2 focus-visible:ring-black"
        >
          {t.common.call}
        </a>
      </div>

      <p className="text-sm text-neutral-600">{t.booking.todo}</p>

      <p className="text-neutral-700">
        רוצים לדעת מחירים?{" "}
        <Link href="/prices" className="underline">
          {t.booking.linkPrices}
        </Link>
        .
      </p>
    </div>
  );
}


