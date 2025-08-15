"use client";

import { useI18n } from "@/i18n";

export default function AccessibilityClient() {
  const { t } = useI18n();
  return (
    <div className="min-h-screen p-6 md:p-10 max-w-3xl mx-auto space-y-4">
      <h1 className="text-3xl font-semibold text-center">{t.accessibility.title}</h1>
      <p className="text-[color:var(--foreground)]/90">{t.accessibility.body}</p>
    </div>
  );
}


