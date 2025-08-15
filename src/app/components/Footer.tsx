"use client";

import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/i18n";

export default function SiteFooter() {
  const { t } = useI18n();
  const year = new Date().getFullYear();
  return (
    <footer className="mt-8 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-950 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-5xl mx-auto px-6 py-6">
        
        {/* Main Footer Content */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-sm">
          
          {/* About & Contact Combined */}
          <div className="space-y-4">
            <div>
              <div className="mb-4">
                <Image src="/logo.svg" alt="Doron Cohen logo" width={40} height={40} priority />
              </div>
              <h3 className="font-bold text-xl text-[color:var(--foreground)] mb-3">{t.footer.about.title}</h3>
              <p className="text-[color:var(--muted)] leading-relaxed text-base">{t.footer.about.body}</p>
            </div>
            <div className="text-[color:var(--muted)]">
              <h4 className="font-semibold text-[color:var(--foreground)] mb-2 text-base">{t.footer.contact.title}</h4>
              <div className="flex flex-wrap items-center gap-2">
                <a href="https://wa.me/972535247393" target="_blank" rel="noopener noreferrer" aria-label={t.footer.aria.whatsappOpen} className="hover:text-[color:var(--foreground)] transition-colors font-medium">WhatsApp 053-524-7393</a>
                <span className="opacity-40">•</span>
                <a href="tel:+972535247393" aria-label={t.footer.aria.phoneDial} className="hover:text-[color:var(--foreground)] transition-colors font-medium">053-524-7393</a>
                <span className="opacity-40">•</span>
                <a href="mailto:doron.c@live.com" aria-label={t.footer.aria.emailSend} className="hover:text-[color:var(--foreground)] transition-colors font-medium">doron.c@live.com</a>
              </div>
            </div>
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
      <div className="text-center text-xs text-[color:var(--muted)] pb-4 pt-3 border-t border-[color:var(--border)]/50 mx-4">
        {t.footer.copyright.replace('{year}', String(year))}
      </div>
    </footer>
  );
}


