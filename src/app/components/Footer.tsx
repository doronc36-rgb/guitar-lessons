"use client";

import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/i18n";

export default function SiteFooter() {
  const { t } = useI18n();
  const year = new Date().getFullYear();
  return (
    <footer className="mt-4 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-950 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-4xl mx-auto px-6 py-4">
        
        {/* Main Footer Content */}
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-xs text-center">
          
          {/* About & Contact Combined */}
          <div className="space-y-3">
            <div className="flex justify-center md:justify-start">
              <Image src="/images/music_logo_3_optimized.png" alt="Doron Cohen logo" width={96} height={96} priority />
            </div>
            {/* Removed footer about heading per request */}
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-bold text-lg text-[color:var(--foreground)] mb-2">{t.footer.links.title}</h3>
            <div className="space-y-1.5">
              <Link
                href="/"
                className="block text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors py-1 px-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 font-medium"
              >
                {t.footer.links.home}
              </Link>
              <Link
                href="/lessons"
                className="block text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors py-1 px-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 font-medium"
              >
                {t.footer.links.lessons}
              </Link>
              <Link
                href="/prices"
                className="block text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors py-1 px-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 font-medium"
              >
                {t.footer.links.prices}
              </Link>
              <Link
                href="/faq"
                className="block text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors py-1 px-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 font-medium"
              >
                {t.footer.links.faq}
              </Link>
              <Link
                href="/booking"
                className="block text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors py-1 px-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 font-medium"
              >
                {t.footer.links.booking}
              </Link>
            </div>
          </div>

          {/* Legal & Support */}
          <div>
            <h3 className="font-bold text-lg text-[color:var(--foreground)] mb-2">{t.footer.links.legal}</h3>
            <div className="space-y-1.5">
              <Link
                href="/#contact"
                className="block text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors py-1 px-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 font-medium"
              >
                {t.footer.links.contact}
              </Link>
              <Link
                href="/#reviews"
                className="block text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors py-1 px-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 font-medium"
              >
                {t.home?.testimonials?.title || 'Reviews'}
              </Link>
              <Link
                href="/terms"
                className="block text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors py-1 px-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 font-medium"
              >
                {t.terms.title}
              </Link>
              <Link
                href="/privacy"
                className="block text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors py-1 px-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 font-medium"
              >
                {t.privacy.title}
              </Link>
              <Link
                href="/accessibility"
                className="block text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors py-1 px-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 font-medium"
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
              <img src="/images/email.png" width="18" height="18" alt="email" />
              doron.c@live.com
            </a>
            <span className="opacity-30">|</span>
            <a href="tel:+972535247393" className="flex items-center gap-2 hover:text-[color:var(--foreground)] font-medium whitespace-nowrap" aria-label="Phone">
              <img src="/images/phone.png" width="18" height="18" alt="phone" />
              053-524-7393
            </a>
            <span className="opacity-30">|</span>
            <a href="https://wa.me/972535247393" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[color:var(--foreground)] font-medium whitespace-nowrap" aria-label="WhatsApp">
              <img src="/images/whatsapp.png" width="18" height="18" alt="whatsapp" />
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


