"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const isHome = pathname === "/";

  const close = useCallback(() => setOpen(false), []);
  const toggle = useCallback(() => setOpen((v) => !v), []);
  const goBack = useCallback(() => router.back(), [router]);

  const NavLinks = (
    <nav className="flex flex-col md:flex-row gap-4 items-start md:items-center text-sm">
      <Link href="/lessons" onClick={close} className="hover:opacity-80">
        השיעורים
      </Link>
      <Link href="/prices" onClick={close} className="hover:opacity-80">
        מחירים
      </Link>
      <Link href="/faq" onClick={close} className="hover:opacity-80">
        שאלות
      </Link>
      <Link href="/contact" onClick={close} className="hover:opacity-80">
        צור קשר
      </Link>
      <Link
        href="/booking"
        onClick={close}
        className="rounded-lg px-3 py-1.5 bg-black text-white hover:bg-neutral-800"
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
        <div className="flex items-center gap-2">
          {!isHome && (
            <button
              type="button"
              onClick={goBack}
              className="rounded-lg border px-3 py-1.5 hover:bg-black/5"
              aria-label="חזרה לעמוד הקודם"
            >
              ← חזרה
            </button>
          )}
          <Link href="/" className="font-semibold text-lg">
            דורון — שיעורי גיטרה/פסנתר
          </Link>
        </div>

        <div className="hidden md:block">{NavLinks}</div>

        <button
          type="button"
          onClick={toggle}
          className="md:hidden rounded-lg border px-3 py-1.5"
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label="פתיחת תפריט"
        >
          תפריט
        </button>
      </div>

      {open && (
        <div id="site-menu" className="md:hidden border-t">
          <div className="max-w-6xl mx-auto px-4 py-4">{NavLinks}</div>
        </div>
      )}
    </header>
  );
}


