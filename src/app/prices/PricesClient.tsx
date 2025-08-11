"use client";

import { useI18n } from "@/i18n";
import Button from "../components/ui/Button";

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
        <Button href="/booking">{t.common.bookLesson}</Button>
        <Button href="https://wa.me/972535247393" target="_blank" rel="noopener noreferrer" variant="secondary">
          {t.common.whatsapp}
        </Button>
      </div>
    </div>
  );
}


