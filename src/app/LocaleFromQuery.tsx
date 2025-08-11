"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useI18n } from "@/i18n";

function setLocaleCookie(value: "he" | "en") {
  try {
    if (typeof document !== "undefined") {
      const oneYear = 60 * 60 * 24 * 365;
      document.cookie = `locale=${value}; Max-Age=${oneYear}; Path=/`;
    }
  } catch {}
}

export default function LocaleFromQuery() {
  const search = useSearchParams();
  const { locale, setLocale } = useI18n();

  useEffect(() => {
    const hl = search.get("hl");
    if (hl === "he" || hl === "en") {
      if (hl !== locale) {
        setLocale(hl);
        setLocaleCookie(hl);
      }
    }
  }, [search, locale, setLocale]);

  return null;
}


