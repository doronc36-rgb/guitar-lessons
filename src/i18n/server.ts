import { cookies as nextCookies } from "next/headers";
import type { SupportedLocale } from ".";
import { en } from "./locales/en";
import { he } from "./locales/he";

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
    const cookieStore = await nextCookies();
    const locale = cookieStore.get("locale")?.value as SupportedLocale | undefined;
    if (locale === "en" || locale === "he") return locale;
  } catch {}
  return "he";
}

export function getSeoByKey(
  key: SeoKey,
  locale: SupportedLocale
): { title: string; description: string } {
  const dict = locale === "en" ? en : he;
  const node = dict.seo[key] as { title?: string; description?: string } | undefined;
  return {
    title: node?.title ?? "",
    description: node?.description ?? "",
  };
}
