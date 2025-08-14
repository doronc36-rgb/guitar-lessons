"use client";

import Link from "next/link";
import { useI18n } from "@/i18n";

export default function NotFound() {
  const { t } = useI18n();
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-8 gap-4">
      <h1 className="text-3xl font-bold">{t.common.notFoundTitle || "Page not found"}</h1>
      <p className="text-neutral-600">{t.common.notFoundBody || "The page you’re looking for doesn’t exist."}</p>
      <Link href="/" className="underline">{t.common.backHome || "Back to home"}</Link>
    </div>
  );
}


