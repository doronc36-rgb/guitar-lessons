"use client";

import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";
import { he } from "./locales/he";
import { en } from "./locales/en";

export type SupportedLocale = "he" | "en";

type Dictionary = typeof he;

type I18nContextValue = {
  locale: SupportedLocale;
  t: Dictionary;
  setLocale: (l: SupportedLocale) => void;
};

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export function I18nProvider({ children, defaultLocale = "he" as SupportedLocale }: { children: ReactNode; defaultLocale?: SupportedLocale }) {
  const [locale, setLocale] = useState<SupportedLocale>(defaultLocale);

  const value = useMemo<I18nContextValue>(() => {
    const dict = locale === "en" ? en : he;
    return { locale, t: dict, setLocale };
  }, [locale]);

  useEffect(() => {
    const root = document.documentElement;
    root.lang = locale === "en" ? "en" : "he";
    root.dir = locale === "en" ? "ltr" : "rtl";
  }, [locale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}


