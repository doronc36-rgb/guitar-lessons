"use client";

import { useI18n } from "@/i18n";

export default function PrivacyClient() {
  const { t } = useI18n();
  return (
    <div className="min-h-screen p-6 md:p-10 max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-semibold text-center">{t.privacy.title}</h1>
      <div className="prose prose-neutral max-w-none dark:prose-invert">
        <div dangerouslySetInnerHTML={{ __html: t.privacy.content }} />
      </div>
    </div>
  );
}
