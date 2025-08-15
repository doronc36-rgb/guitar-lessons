"use client";

import { useState, useCallback } from "react";
import { useI18n } from "@/i18n";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
function setLocaleCookie(value: "he" | "en") {
  try {
    if (typeof document !== "undefined") {
      const oneYear = 60 * 60 * 24 * 365;
      document.cookie = `locale=${value}; Max-Age=${oneYear}; Path=/`;
    }
  } catch {}
}

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
  const switchLocale = useCallback(() => {
    const next = locale === "he" ? "en" : "he";
    setLocale(next);
    // persist in cookie for SSR layout dir/lang
    setLocaleCookie(next);
  }, [locale, setLocale]);

  const NavLinks = (
    <nav className="flex flex-col md:flex-row gap-4 items-start md:items-center text-sm">
      <Link href="/faq" onClick={close} className={linkClass("/faq")}>
        {t.header.nav.faq}
      </Link>
      <Link href="/contact" onClick={close} className={linkClass("/contact")}>
        {t.header.nav.contact}
      </Link>
      <Link
        href="/booking"
        onClick={close}
          className="rounded-lg px-3 py-1.5 bg-[color:var(--accent)] text-[color:var(--accent-contrast)] hover:bg-orange-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--foreground)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
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
              className="rounded-lg border border-[color:var(--border)] px-3 py-1.5 hover:bg-[color:var(--background)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--foreground)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
              aria-label={t.header.backAria}
            >
              {t.header.back}
            </button>
          )}
          <Link href="/" className="font-semibold text-lg inline-flex items-center gap-2">
            <Image src="/logo.svg" alt={t.header.logoAlt} width={28} height={28} priority />
            {t.header.brand}
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          {NavLinks}
          <button
            type="button"
            onClick={switchLocale}
            className="rounded-lg border border-[color:var(--border)] px-3 py-1.5 hover:bg-[color:var(--background)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--foreground)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
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
          <div className="flex flex-col gap-1">
            <span className={`w-4 h-0.5 bg-current transition-all duration-200 ${open ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`w-4 h-0.5 bg-current transition-all duration-200 ${open ? 'opacity-0' : ''}`}></span>
            <span className={`w-4 h-0.5 bg-current transition-all duration-200 ${open ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </button>
      </div>

      {open && (
        <div id="site-menu" className="md:hidden border-t">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex flex-col gap-4">
              {NavLinks}
              <button
                type="button"
                onClick={() => { switchLocale(); close(); }}
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


