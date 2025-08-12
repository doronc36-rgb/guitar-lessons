"use client";

import Link from "next/link";
import { useI18n } from "@/i18n";

export default function MarketingFooter() {
  const { t } = useI18n();
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t">
      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-6 md:grid-cols-3 text-sm text-[color:var(--muted)]">
        <div>
          <div className="font-medium text-[color:var(--foreground)]">{t.footer.about.title}</div>
          <p className="mt-2">{t.footer.about.body}</p>
        </div>
        <div>
          <div className="font-medium text-[color:var(--foreground)]">{t.footer.links.title}</div>
          <ul className="mt-2 space-y-1">
            <li>
              <a href="#features" className="underline underline-offset-4 hover:opacity-80">{t.footer.links.home}</a>
            </li>
            <li>
              <a href="#lessons" className="underline underline-offset-4 hover:opacity-80">{t.footer.links.lessons}</a>
            </li>
            <li>
              <a href="#pricing" className="underline underline-offset-4 hover:opacity-80">{t.footer.links.prices}</a>
            </li>
            <li>
              <a href="#faq" className="underline underline-offset-4 hover:opacity-80">{t.footer.links.faq}</a>
            </li>
            <li>
              <a href="#testimonials" className="underline underline-offset-4 hover:opacity-80">{t.home?.testimonials?.title || "Reviews"}</a>
            </li>
            <li>
              <Link href="/booking" className="underline underline-offset-4 hover:opacity-80">{t.footer.links.booking}</Link>
            </li>
            <li>
              <a href="#contact" className="underline underline-offset-4 hover:opacity-80">{t.footer.links.contact}</a>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-medium text-[color:var(--foreground)]">{t.footer.contact.title}</div>
          <ul className="mt-2 space-y-1">
            <li>
              <a href="https://wa.me/972535247393" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:opacity-80">{t.footer.contact.whatsapp}</a>
            </li>
            <li>
              <a href="tel:+972535247393" className="underline underline-offset-4 hover:opacity-80">{t.footer.contact.phone}</a>
            </li>
            <li>
              <a href="mailto:doron.c@live.com" className="underline underline-offset-4 hover:opacity-80">{t.footer.contact.email}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-[color:var(--muted)] pb-8">{t.footer.copyright.replace("{year}", String(year))}</div>
    </footer>
  );
}


