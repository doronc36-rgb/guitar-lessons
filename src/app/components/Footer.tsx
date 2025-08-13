"use client";

import Link from "next/link";
import { useI18n } from "@/i18n";

export default function SiteFooter() {
  const { t } = useI18n();
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950">
      <div className="max-w-6xl mx-auto px-4 py-10">
        
        {/* Main Footer Content */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-sm">
          
          {/* About & Contact Combined */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg text-[color:var(--foreground)] mb-3">{t.footer.about.title}</h3>
              <p className="text-[color:var(--muted)] leading-relaxed mb-4">{t.footer.about.body}</p>
            </div>
            
            <div>
              <h4 className="font-medium text-[color:var(--foreground)] mb-3">{t.footer.contact.title}</h4>
              <div className="space-y-2 text-[color:var(--muted)]">
                <div className="flex items-center gap-2">
                  <span className="text-green-600">📱</span>
                  <a
                    href="https://wa.me/972535247393"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t.footer.aria.whatsappOpen}
                    className="hover:text-[color:var(--foreground)] transition-colors"
                  >
                    053-524-7393
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-600">📞</span>
                  <a
                    href="tel:+972535247393"
                    aria-label={t.footer.aria.phoneDial}
                    className="hover:text-[color:var(--foreground)] transition-colors"
                  >
                    053-524-7393
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-600">✉️</span>
                  <a
                    href="mailto:doron.c@live.com"
                    aria-label={t.footer.aria.emailSend}
                    className="hover:text-[color:var(--foreground)] transition-colors"
                  >
                    doron.c@live.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold text-lg text-[color:var(--foreground)] mb-4">{t.footer.links.title}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-2">
                <Link
                  href="/"
                  className="block text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors py-1"
                >
                  {t.footer.links.home}
                </Link>
                <Link
                  href="/lessons"
                  className="block text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors py-1"
                >
                  {t.footer.links.lessons}
                </Link>
                <Link
                  href="/prices"
                  className="block text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors py-1"
                >
                  {t.footer.links.prices}
                </Link>
              </div>
              <div className="space-y-2">
                <Link
                  href="/faq"
                  className="block text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors py-1"
                >
                  {t.footer.links.faq}
                </Link>
                <Link
                  href="/booking"
                  className="block text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors py-1"
                >
                  {t.footer.links.booking}
                </Link>
                <Link
                  href="/#reviews"
                  className="block text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors py-1"
                >
                  {t.home?.testimonials?.title || 'Reviews'}
                </Link>
              </div>
            </div>
          </div>

          {/* Legal & Support */}
          <div>
            <h3 className="font-semibold text-lg text-[color:var(--foreground)] mb-4">{t.footer.links.legal}</h3>
            <div className="space-y-2">
              <Link
                href="/#contact"
                className="block text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors py-1"
              >
                {t.footer.links.contact}
              </Link>
              <Link
                href="/terms"
                className="block text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors py-1"
              >
                {t.terms.title}
              </Link>
              <Link
                href="/privacy"
                className="block text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors py-1"
              >
                {t.privacy.title}
              </Link>
              <Link
                href="/accessibility"
                className="block text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors py-1"
              >
                {t.accessibility.title}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-[color:var(--muted)] pb-8 pt-4 border-t border-[color:var(--border)]/50 mx-4">
        {t.footer.copyright.replace('{year}', String(year))}
      </div>
    </footer>
  );
}


