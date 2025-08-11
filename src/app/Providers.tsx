"use client";

import { ReactNode } from "react";
import { I18nProvider, SupportedLocale } from "@/i18n";

export default function Providers({ children, defaultLocale = "he" as SupportedLocale }: { children: ReactNode; defaultLocale?: SupportedLocale }) {
  return <I18nProvider defaultLocale={defaultLocale}>{children}</I18nProvider>;
}


