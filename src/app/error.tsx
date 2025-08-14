"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useI18n } from "@/i18n";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const { t } = useI18n();

  useEffect(() => {
    // Optionally log error to a monitoring service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-8 gap-4">
      <h1 className="text-3xl font-bold">{t.common.errorTitle || "Something went wrong"}</h1>
      <p className="text-neutral-600">{t.common.errorBody || "Please try again or return to the homepage."}</p>
      <div className="flex gap-4">
        <button onClick={reset} className="underline">{t.common.tryAgain || "Try again"}</button>
        <Link href="/" className="underline">{t.common.backHome || "Back to home"}</Link>
      </div>
    </div>
  );
}


