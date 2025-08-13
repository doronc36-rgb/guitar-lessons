"use client";

import Link from "next/link";
import { useI18n } from "@/i18n";

export default function SiteFooter() {
  const { t } = useI18n();
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t">
      <div className="max-w-6xl mx-auto px-4 py-8 grid gap-6 md:grid-cols-3 text-sm text-[color:var(--muted)]">
        <div>
          <div className="font-medium text-[color:var(--foreground)]">{t.footer.about.title}</div>
          <p className="mt-2">{t.footer.about.body}</p>
        </div>
        <div>
          <div className="font-medium text-[color:var(--foreground)]">{t.footer.links.title}</div>
          <ul className="mt-2 space-y-1">
            <li>
              <Link
                href="/"
                aria-label={t.footer.links.home}
                className="hover:opacity-80 underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--foreground)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
              >
                {t.footer.links.home}
              </Link>
            </li>
            <li>
              <Link
                href="/lessons"
                aria-label={t.footer.links.lessons}
                className="hover:opacity-80 underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--foreground)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
              >
                {t.footer.links.lessons}
              </Link>
            </li>
            <li>
              <Link
                href="/prices"
                aria-label={t.footer.links.prices}
                className="hover:opacity-80 underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--foreground)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
              >
                {t.footer.links.prices}
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                aria-label={t.footer.links.faq}
                className="hover:opacity-80 underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--foreground)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
              >
                {t.footer.links.faq}
              </Link>
            </li>
            <li>
              <Link
                href="/#reviews"
                aria-label={t.home?.testimonials?.regionAria || 'Reviews'}
                className="hover:opacity-80 underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--foreground)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
              >
                {t.home?.testimonials?.title || 'Reviews'}
              </Link>
            </li>
            <li>
              <Link
                href="/booking"
                aria-label={t.footer.links.booking}
                className="hover:opacity-80 underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--foreground)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
              >
                {t.footer.links.booking}
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                aria-label={t.footer.links.contact}
                className="hover:opacity-80 underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--foreground)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
              >
                {t.footer.links.contact}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-medium text-[color:var(--foreground)]">{t.footer.contact.title}</div>
          <ul className="mt-2 space-y-1">
            <li>
              <a
                href="https://wa.me/972535247393"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.footer.aria.whatsappOpen}
                className="hover:opacity-80 underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--foreground)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
              >
                {t.footer.contact.whatsapp}
              </a>
            </li>
            <li>
              <a
                href="tel:+972535247393"
                aria-label={t.footer.aria.phoneDial}
                className="hover:opacity-80 underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--foreground)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
              >
                {t.footer.contact.phone}
              </a>
            </li>
            <li>
              <a
                href="mailto:doron.c@live.com"
                aria-label={t.footer.aria.emailSend}
                className="hover:opacity-80 underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--foreground)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
              >
                {t.footer.contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-[color:var(--muted)] pb-8">{t.footer.copyright.replace('{year}', String(year))}</div>
    </footer>
  );
}


