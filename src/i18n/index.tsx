"use client";

import { createContext, useContext, useMemo, useState, ReactNode } from "react";
import { he, type HebrewDictionary } from "./locales/he";

type SupportedLocale = "he";

type I18nContextValue = {
  locale: SupportedLocale;
  t: HebrewDictionary;
  setLocale: (l: SupportedLocale) => void;
};

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export function I18nProvider({ children, defaultLocale = "he" as SupportedLocale }: { children: ReactNode; defaultLocale?: SupportedLocale }) {
  const [locale, setLocale] = useState<SupportedLocale>(defaultLocale);

  const value = useMemo<I18nContextValue>(() => {
    // Only Hebrew currently. Extend here for more locales.
    const dict = he;
    return { locale, t: dict, setLocale };
  }, [locale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}


