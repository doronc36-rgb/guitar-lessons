"use client";

import Link from "next/link";
import { useI18n } from "@/i18n";

export default function SiteFooter() {
  const { t } = useI18n();
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t bg-neutral-50/50 dark:bg-neutral-900/50">
      <div className="max-w-6xl mx-auto px-4 py-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-sm text-[color:var(--muted)]">
        
        {/* About Section */}
        <div className="text-center sm:text-left">
          <div className="font-medium text-[color:var(--foreground)] mb-3">{t.footer.about.title}</div>
          <p className="text-xs leading-relaxed">{t.footer.about.body}</p>
        </div>

        {/* Main Navigation */}
        <div className="text-center sm:text-left">
          <div className="font-medium text-[color:var(--foreground)] mb-3">{t.footer.links.title}</div>
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                aria-label={t.footer.links.home}
                className="hover:text-[color:var(--foreground)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--foreground)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
              >
                {t.footer.links.home}
              </Link>
            </li>
            <li>
              <Link
                href="/lessons"
                aria-label={t.footer.links.lessons}
                className="hover:text-[color:var(--foreground)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--foreground)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
              >
                {t.footer.links.lessons}
              </Link>
            </li>
            <li>
              <Link
                href="/prices"
                aria-label={t.footer.links.prices}
                className="hover:text-[color:var(--foreground)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--foreground)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
              >
                {t.footer.links.prices}
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                aria-label={t.footer.links.faq}
                className="hover:text-[color:var(--foreground)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--foreground)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
              >
                {t.footer.links.faq}
              </Link>
            </li>
            <li>
              <Link
                href="/booking"
                aria-label={t.footer.links.booking}
                className="hover:text-[color:var(--foreground)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--foreground)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
              >
                {t.footer.links.booking}
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal & Support */}
        <div className="text-center sm:text-left">
          <div className="font-medium text-[color:var(--foreground)] mb-3">Support & Legal</div>
          <ul className="space-y-2">
            <li>
              <Link
                href="/#contact"
                aria-label={t.footer.links.contact}
                className="hover:text-[color:var(--foreground)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--foreground)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
              >
                {t.footer.links.contact}
              </Link>
            </li>
            <li>
              <Link
                href="/#reviews"
                aria-label={t.home?.testimonials?.regionAria || 'Reviews'}
                className="hover:text-[color:var(--foreground)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--foreground)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
              >
                {t.home?.testimonials?.title || 'Reviews'}
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                aria-label={t.terms.title}
                className="hover:text-[color:var(--foreground)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--foreground)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
              >
                {t.terms.title}
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                aria-label={t.privacy.title}
                className="hover:text-[color:var(--foreground)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--foreground)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
              >
                {t.privacy.title}
              </Link>
            </li>
            <li>
              <Link
                href="/accessibility"
                aria-label={t.accessibility.title}
                className="hover:text-[color:var(--foreground)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--foreground)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
              >
                {t.accessibility.title}
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="text-center sm:text-left">
          <div className="font-medium text-[color:var(--foreground)] mb-3">{t.footer.contact.title}</div>
          <ul className="space-y-2">
            <li>
              <a
                href="https://wa.me/972535247393"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.footer.aria.whatsappOpen}
                className="hover:text-[color:var(--foreground)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--foreground)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
              >
                📱 {t.footer.contact.whatsapp}
              </a>
            </li>
            <li>
              <a
                href="tel:+972535247393"
                aria-label={t.footer.aria.phoneDial}
                className="hover:text-[color:var(--foreground)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--foreground)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
              >
                📞 {t.footer.contact.phone}
              </a>
            </li>
            <li>
              <a
                href="mailto:doron.c@live.com"
                aria-label={t.footer.aria.emailSend}
                className="hover:text-[color:var(--foreground)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--foreground)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
              >
                ✉️ Email
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-[color:var(--muted)] pb-8 pt-4 border-t border-[color:var(--border)]/50 mx-4">
        {t.footer.copyright.replace('{year}', String(year))}
      </div>
    </footer>
  );
}


