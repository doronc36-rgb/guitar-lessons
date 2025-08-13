"use client";

import { useI18n } from "@/i18n";

export default function FAQClient() {
  const { t } = useI18n();
  return (
    <div className="min-h-screen p-6 md:p-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-semibold mb-6 text-center">{t.faq.title}</h1>
      <div className="space-y-3">
          {t.faq.items.map((item) => (
            <details key={item.q} className="group border rounded-lg p-4">
              <summary className="cursor-pointer font-medium text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]">
                {item.q}
              </summary>
              <p className="mt-2 text-neutral-800">{item.a}</p>
            </details>
          ))}
      </div>
    </div>
  );
}


