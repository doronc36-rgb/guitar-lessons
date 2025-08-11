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
    // Merge HE -> EN so missing English keys safely fall back to Hebrew
    const dict = ((): Dictionary => {
      if (locale === "en") {
        return deepMerge(he, en) as Dictionary;
      }
      return he;
    })();
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

// Tiny helper with safe fallback: prefer EN, fallback to HE if missing
function getByPath(obj: unknown, path: string): unknown {
  if (!obj) return undefined;
  return path.split(".").reduce<unknown>((acc: unknown, key: string) => {
    if (acc && typeof acc === "object" && key in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
}

function formatTemplate(template: string, vars?: Record<string, string | number>): string {
  if (!vars) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => (k in vars ? String(vars[k]) : `{${k}}`));
}

export function t(key: string, locale: SupportedLocale, vars?: Record<string, string | number>): string {
  // Try requested locale first
  const primary = locale === "en" ? en : he;
  const fallback = locale === "en" ? he : he; // for now both fallback to HE

  let value = getByPath(primary, key);
  if (value === undefined && locale === "en") {
    value = getByPath(fallback, key);
  }

  if (typeof value === "string") return formatTemplate(value, vars);
  if (value == null) return "";
  return String(value);
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return !!value && typeof value === "object" && !Array.isArray(value);
}

function deepMerge<T extends Record<string, unknown>>(base: T, override: Partial<T>): T {
  const result: Record<string, unknown> = { ...base };
  for (const key of Object.keys(override)) {
    const baseVal = (base as Record<string, unknown>)[key];
    const overVal = (override as Record<string, unknown>)[key];
    if (isPlainObject(baseVal) && isPlainObject(overVal)) {
      result[key] = deepMerge(baseVal as Record<string, unknown>, overVal as Record<string, unknown>);
    } else if (overVal !== undefined) {
      result[key] = overVal;
    }
  }
  return result as T;
}


