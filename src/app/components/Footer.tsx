"use client";

import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/i18n";

export default function SiteFooter() {
  const { t } = useI18n();
  const year = new Date().getFullYear();
  return (
    <footer className="mt-4 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-950 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-5xl mx-auto px-6 py-4">
        
        {/* Main Footer Content */}
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-sm">
          
          {/* About & Contact Combined */}
          <div className="space-y-3">
            <div className="flex justify-center md:justify-start">
              <Image src="/images/music_logo_3_optimized.png" alt="Doron Cohen logo" width={72} height={72} priority />
            </div>
            {/* Removed footer about heading per request */}
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-bold text-xl text-[color:var(--foreground)] mb-3">{t.footer.links.title}</h3>
            <div className="space-y-2">
              <Link
                href="/"
                className="block text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors py-1.5 px-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 font-medium"
              >
                {t.footer.links.home}
              </Link>
              <Link
                href="/lessons"
                className="block text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors py-1.5 px-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 font-medium"
              >
                {t.footer.links.lessons}
              </Link>
              <Link
                href="/prices"
                className="block text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors py-1.5 px-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 font-medium"
              >
                {t.footer.links.prices}
              </Link>
              <Link
                href="/faq"
                className="block text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors py-1.5 px-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 font-medium"
              >
                {t.footer.links.faq}
              </Link>
              <Link
                href="/booking"
                className="block text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors py-1.5 px-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 font-medium"
              >
                {t.footer.links.booking}
              </Link>
            </div>
          </div>

          {/* Legal & Support */}
          <div>
            <h3 className="font-bold text-xl text-[color:var(--foreground)] mb-3">{t.footer.links.legal}</h3>
            <div className="space-y-2">
              <Link
                href="/#contact"
                className="block text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors py-1.5 px-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 font-medium"
              >
                {t.footer.links.contact}
              </Link>
              <Link
                href="/#reviews"
                className="block text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors py-1.5 px-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 font-medium"
              >
                {t.home?.testimonials?.title || 'Reviews'}
              </Link>
              <Link
                href="/terms"
                className="block text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors py-1.5 px-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 font-medium"
              >
                {t.terms.title}
              </Link>
              <Link
                href="/privacy"
                className="block text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors py-1.5 px-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 font-medium"
              >
                {t.privacy.title}
              </Link>
              <Link
                href="/accessibility"
                className="block text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors py-1.5 px-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 font-medium"
              >
                {t.accessibility.title}
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Compact stylized contact line centered across the footer */}
      <div className="w-full border-t border-[color:var(--border)]/70 py-3">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex items-center justify-between gap-3 rounded-full border border-[color:var(--border)] bg-white/70 dark:bg-neutral-800/60 px-4 py-2 shadow-sm">
            <a href="mailto:doron.c@live.com" className="flex items-center gap-2 hover:text-[color:var(--foreground)] font-medium break-all" aria-label="Email">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="1.5"/><path d="m3 7 9 6 9-6" stroke="currentColor" strokeWidth="1.5"/></svg>
              doron.c@live.com
            </a>
            <span className="opacity-30">|</span>
            <a href="tel:+972535247393" className="flex items-center gap-2 hover:text-[color:var(--foreground)] font-medium whitespace-nowrap" aria-label="Phone">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 5c0-1.1.9-2 2-2h2l2 4-1.5 1.5a12 12 0 0 0 6 6L15 13l4 2v2a2 2 0 0 1-2 2c-8.284 0-15-6.716-15-15z" stroke="currentColor" strokeWidth="1.5"/></svg>
              053-524-7393
            </a>
            <span className="opacity-30">|</span>
            <a href="https://wa.me/972535247393" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[color:var(--foreground)] font-medium whitespace-nowrap" aria-label="WhatsApp">
              <svg width="18" height="18" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M19.11 17.62a4.89 4.89 0 0 1-2.16-.59a10.9 10.9 0 0 1-1.88-1.21a10.93 10.93 0 0 1-1.74-1.6a5.28 5.28 0 0 1-1.13-1.86a3.3 3.3 0 0 1 .13-2.72a1.18 1.18 0 0 1 .9-.57h.77a.62.62 0 0 1 .57.39l.86 2.01a.7.7 0 0 1-.04.6l-.53.9a.36.36 0 0 0 0 .33a7.88 7.88 0 0 0 1.92 2.27a7.91 7.91 0 0 0 2.42 1.43a.36.36 0 0 0 .34-.05l.86-.64a.7.7 0 0 1 .6-.08l2.08.69a.62.62 0 0 1 .41.57v.77a1.18 1.18 0 0 1-.48.95a3.31 3.31 0 0 1-1.82.58Z"/></svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-[color:var(--muted)] py-2 px-4">
        {t.footer.copyright.replace('{year}', String(year))}
      </div>
    </footer>
  );
}


