"use client";

import { useI18n } from "@/i18n";

export default function TermsClient() {
  const { t } = useI18n();
  return (
    <div className="min-h-screen p-6 md:p-10 max-w-3xl mx-auto space-y-4">
      <h1 className="text-3xl font-semibold text-center">{t.terms.title}</h1>
      <div className="prose prose-neutral max-w-none dark:prose-invert">
        <div dangerouslySetInnerHTML={{ __html: t.terms.body }} />
      </div>
    </div>
  );
}


