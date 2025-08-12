import { cookies } from "next/headers";
import type { SupportedLocale } from ".";
import { he } from "./locales/he";
import { en } from "./locales/en";

export async function getServerLocale(): Promise<SupportedLocale> {
  const store = await cookies();
  const cookieLocale = store.get("locale")?.value;
  if (cookieLocale === "en" || cookieLocale === "he") return cookieLocale;
  return "he";
}

export function getSeoByKey<T extends keyof typeof he.seo>(key: T, locale: SupportedLocale) {
  const dict = locale === "en" ? en : he;
  return dict.seo[key];
}

import { cookies } from "next/headers";
import { en } from "./locales/en";
import { he } from "./locales/he";
import type { SupportedLocale } from ".";

export type SeoKey =
  | "home"
  | "lessons"
  | "prices"
  | "faq"
  | "booking"
  | "contact"
  | "terms"
  | "accessibility";

export async function getServerLocale(): Promise<SupportedLocale> {
  try {
    const c = await cookies();
    const v = c.get("locale")?.value as SupportedLocale | undefined;
    if (v === "en" || v === "he") return v;
  } catch {}
  return "he";
}

export function getSeoByKey(key: SeoKey, locale: SupportedLocale): { title: string; description: string } {
  const dict = locale === "en" ? en : he;
  const node = dict.seo[key] as { title?: string; description?: string } | undefined;
  return {
    title: node?.title ?? "",
    description: node?.description ?? "",
  };
}


