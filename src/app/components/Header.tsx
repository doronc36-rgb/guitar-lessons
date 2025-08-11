"use client";

import { useState, useCallback } from "react";
import { useI18n } from "@/i18n";
import { t as tf } from "@/i18n";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const { locale, setLocale, t } = useI18n();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const isHome = pathname === "/";

  const close = useCallback(() => setOpen(false), []);
  const toggle = useCallback(() => setOpen((v) => !v), []);
  const goBack = useCallback(() => router.back(), [router]);

  const linkClass = (href: string) =>
    `hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--foreground)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)] ${pathname === href ? "underline underline-offset-4" : ""}`;

  const NavLinks = (
    <nav className="flex flex-col md:flex-row gap-4 items-start md:items-center text-sm">
      <Link href="/lessons" onClick={close} className={linkClass("/lessons")} aria-current={pathname === "/lessons" ? "page" : undefined}>
        {t.header.nav.lessons}
      </Link>
      <Link href="/prices" onClick={close} className={linkClass("/prices")} aria-current={pathname === "/prices" ? "page" : undefined}>
        {t.header.nav.prices}
      </Link>
      <Link href="/faq" onClick={close} className={linkClass("/faq")} aria-current={pathname === "/faq" ? "page" : undefined}>
        {t.header.nav.faq}
      </Link>
      <Link href="/contact" onClick={close} className={linkClass("/contact")} aria-current={pathname === "/contact" ? "page" : undefined}>
        {t.header.nav.contact}
      </Link>
      <Link
        href="/booking"
        onClick={close}
          className="rounded-lg px-3 py-1.5 bg-black text-white hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--foreground)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
      >
        {t.common.bookLesson}
      </Link>
    </nav>
  );

  return (
    <header
      className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-[color:var(--surface)]/70 border-b"
      aria-label={t.header.topNavAria}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          {!isHome && (
            <button
              type="button"
              onClick={goBack}
              className="rounded-lg border px-3 py-1.5 hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--foreground)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
              aria-label={t.header.backAria}
            >
              {t.header.back}
            </button>
          )}
          <Link href="/" className="font-semibold text-lg inline-flex items-center gap-2">
            <img src="/logo.svg" alt={t.header.logoAlt} className="w-7 h-7"/>
            {t.header.brand}
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          {NavLinks}
          <button
            type="button"
            onClick={() => setLocale(locale === "he" ? "en" : "he")}
            className="rounded-lg border px-3 py-1.5 hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--foreground)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
            aria-label={locale === "he" ? t.header.language.switchToEn : t.header.language.switchToHe}
          >
            {locale === "he" ? "EN" : "HE"}
          </button>
        </div>

        <button
          type="button"
          onClick={toggle}
          className="md:hidden rounded-lg border px-3 py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? t.header.menu.close : t.header.menu.open}
        >
          {t.header.menu.label}
        </button>
      </div>

      {open && (
        <div id="site-menu" className="md:hidden border-t">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex flex-col gap-4">
              {NavLinks}
              <button
                type="button"
                onClick={() => { setLocale(locale === "he" ? "en" : "he"); close(); }}
                className="self-start rounded-lg border px-3 py-1.5 hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--foreground)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
                aria-label={locale === "he" ? t.header.language.switchToEn : t.header.language.switchToHe}
              >
                {locale === "he" ? "EN" : "HE"}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}


