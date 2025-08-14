"use client";

import Link from "next/link";
import { useI18n } from "@/i18n";

export default function SiteFooter() {
  const { t } = useI18n();
  const year = new Date().getFullYear();
  return (
    <footer className="mt-20 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-900 dark:to-neutral-950 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-5xl mx-auto px-6 py-12">
        
        {/* Main Footer Content */}
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-sm">
          
          {/* About & Contact Combined */}
          <div className="space-y-8">
            <div>
              <h3 className="font-bold text-xl text-[color:var(--foreground)] mb-4">{t.footer.about.title}</h3>
              <p className="text-[color:var(--muted)] leading-relaxed text-base">{t.footer.about.body}</p>
            </div>
            
            <div className="bg-white dark:bg-neutral-800 rounded-lg p-5 shadow-sm border border-neutral-200 dark:border-neutral-700">
              <h4 className="font-semibold text-[color:var(--foreground)] mb-4 text-lg">{t.footer.contact.title}</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 group">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-sm">📱</span>
                  </div>
                  <a
                    href="https://wa.me/972535247393"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t.footer.aria.whatsappOpen}
                    className="text-[color:var(--foreground)] hover:text-green-600 transition-colors font-medium"
                  >
                    WhatsApp: 053-524-7393
                  </a>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-sm">📞</span>
                  </div>
                  <a
                    href="tel:+972535247393"
                    aria-label={t.footer.aria.phoneDial}
                    className="text-[color:var(--foreground)] hover:text-blue-600 transition-colors font-medium"
                  >
                    053-524-7393
                  </a>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-8 h-8 bg-gray-100 dark:bg-gray-900/30 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 text-sm">✉️</span>
                  </div>
                  <a
                    href="mailto:doron.c@live.com"
                    aria-label={t.footer.aria.emailSend}
                    className="text-[color:var(--foreground)] hover:text-gray-600 transition-colors font-medium"
                  >
                    doron.c@live.com
                  </a>
                </div>
                {/* View on Google */}
                {process.env.NEXT_PUBLIC_GBP_URL ? (
                  <div className="flex items-center gap-3 group">
                    <div className="w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                      <span className="text-red-600 text-sm">📍</span>
                    </div>
                    <a
                      href={process.env.NEXT_PUBLIC_GBP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[color:var(--foreground)] hover:text-red-600 transition-colors font-medium"
                    >
                      Google Profile
                    </a>
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-bold text-xl text-[color:var(--foreground)] mb-5">{t.footer.links.title}</h3>
            <div className="space-y-3">
              <Link
                href="/"
                className="block text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors py-2 px-3 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 font-medium"
              >
                {t.footer.links.home}
              </Link>
              <Link
                href="/lessons"
                className="block text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors py-2 px-3 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 font-medium"
              >
                {t.footer.links.lessons}
              </Link>
              <Link
                href="/prices"
                className="block text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors py-2 px-3 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 font-medium"
              >
                {t.footer.links.prices}
              </Link>
              <Link
                href="/faq"
                className="block text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors py-2 px-3 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 font-medium"
              >
                {t.footer.links.faq}
              </Link>
              <Link
                href="/booking"
                className="block text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors py-2 px-3 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 font-medium"
              >
                {t.footer.links.booking}
              </Link>
            </div>
          </div>

          {/* Legal & Support */}
          <div>
            <h3 className="font-bold text-xl text-[color:var(--foreground)] mb-5">{t.footer.links.legal}</h3>
            <div className="space-y-3">
              <Link
                href="/#contact"
                className="block text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors py-2 px-3 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 font-medium"
              >
                {t.footer.links.contact}
              </Link>
              <Link
                href="/#reviews"
                className="block text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors py-2 px-3 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 font-medium"
              >
                {t.home?.testimonials?.title || 'Reviews'}
              </Link>
              <Link
                href="/terms"
                className="block text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors py-2 px-3 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 font-medium"
              >
                {t.terms.title}
              </Link>
              <Link
                href="/privacy"
                className="block text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors py-2 px-3 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 font-medium"
              >
                {t.privacy.title}
              </Link>
              <Link
                href="/accessibility"
                className="block text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors py-2 px-3 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 font-medium"
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


