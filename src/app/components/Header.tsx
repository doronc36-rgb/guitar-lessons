"use client";

import { useState, useCallback } from "react";
import { useI18n } from "@/i18n";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const { locale, setLocale } = useI18n();
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
        השיעורים
      </Link>
      <Link href="/prices" onClick={close} className={linkClass("/prices")} aria-current={pathname === "/prices" ? "page" : undefined}>
        מחירים
      </Link>
      <Link href="/faq" onClick={close} className={linkClass("/faq")} aria-current={pathname === "/faq" ? "page" : undefined}>
        שאלות
      </Link>
      <Link href="/contact" onClick={close} className={linkClass("/contact")} aria-current={pathname === "/contact" ? "page" : undefined}>
        צור קשר
      </Link>
      <Link
        href="/booking"
        onClick={close}
          className="rounded-lg px-3 py-1.5 bg-black text-white hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--foreground)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
      >
        קבעו שיעור
      </Link>
    </nav>
  );

  return (
    <header
      className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-[color:var(--surface)]/70 border-b"
      aria-label="תפריט עליון"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          {!isHome && (
            <button
              type="button"
              onClick={goBack}
              className="rounded-lg border px-3 py-1.5 hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--foreground)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
              aria-label="חזרה לעמוד הקודם"
            >
              ← חזרה
            </button>
          )}
          <Link href="/" className="font-semibold text-lg inline-flex items-center gap-2">
            <img src="/logo.svg" alt="לוגו" className="w-7 h-7"/>
            דורון — שיעורי גיטרה/פסנתר
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          {NavLinks}
          <button
            type="button"
            onClick={() => setLocale(locale === "he" ? "en" : "he")}
            className="rounded-lg border px-3 py-1.5 hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--foreground)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
            aria-label={locale === "he" ? "Switch language to English" : "החלף שפה לעברית"}
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
          aria-label={open ? "סגירת תפריט" : "פתיחת תפריט"}
        >
          תפריט
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
                aria-label={locale === "he" ? "Switch language to English" : "החלף שפה לעברית"}
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


