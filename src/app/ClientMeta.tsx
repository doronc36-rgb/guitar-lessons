"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useI18n } from "@/i18n";

function getSeoKey(pathname: string):
  | "home"
  | "lessons"
  | "prices"
  | "faq"
  | "booking"
  | "contact"
  | "terms"
  | "accessibility" {
  switch (pathname) {
    case "/":
      return "home";
    case "/lessons":
      return "lessons";
    case "/prices":
      return "prices";
    case "/faq":
      return "faq";
    case "/booking":
      return "booking";
    case "/contact":
      return "contact";
    case "/terms":
      return "terms";
    case "/accessibility":
      return "accessibility";
    default:
      return "home";
  }
}

export default function ClientMeta() {
  const pathname = usePathname();
  const { t } = useI18n();

  useEffect(() => {
    const key = getSeoKey(pathname);
    const title = t.seo[key].title || "";
    const description = t.seo[key].description || "";

    if (title) {
      document.title = title;
    }

    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", description);
    }

    // Open Graph basic tags
    const ensureMeta = (property: string, content: string) => {
      let m = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
      if (!m) {
        m = document.createElement("meta");
        m.setAttribute("property", property);
        document.head.appendChild(m);
      }
      m.setAttribute("content", content);
    };
    if (title) ensureMeta("og:title", title);
    if (description) ensureMeta("og:description", description);
    const htmlLang = document.documentElement.lang;
    const ogLocale = htmlLang === "en" ? "en_US" : "he_IL";
    ensureMeta("og:locale", ogLocale);

    // Update hreflang alternates if present
    const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
    const currentPath = pathname || "/";
    const enHref = `${baseUrl}${currentPath}?hl=en`;
    const heHref = `${baseUrl}${currentPath}?hl=he`;

    const ensureAlt = (hreflang: string, href: string) => {
      let link = document.querySelector<HTMLLinkElement>(`link[rel="alternate"][hreflang="${hreflang}"]`);
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "alternate");
        link.setAttribute("hreflang", hreflang);
        document.head.appendChild(link);
      }
      link.setAttribute("href", href);
    };

    ensureAlt("en", enHref);
    ensureAlt("he", heHref);

    // Canonical URL (production)
    const canonicalHref = `${baseUrl}${currentPath}`;
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalHref);
  }, [pathname, t.seo]);

  return null;
}


