import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      {/* Top area */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 py-12 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <Image
              src="/images/music_logo_3_optimized.png"
              alt="Doron Music Lessons"
              width={70}
              height={70}
              className="rounded-full"
            />
            <p className="text-sm text-neutral-400 leading-6 text-center md:text-left">
              Guitar & piano lessons for all ages. Practical, fun, and structured
              so you see real progress every week.
            </p>
          </div>

          {/* Quick links */}
          <div className="grid grid-cols-2 gap-6 md:justify-items-center">
            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-neutral-400">
                קישורים מהירים
              </h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/">דף הבית</Link></li>
                <li><Link href="/lessons">שיעורים</Link></li>
                <li><Link href="/prices">מחירים</Link></li>
                <li><Link href="/faq">שאלות נפוצות</Link></li>
                <li><Link href="/booking">קביעת שיעור</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-neutral-400">
                תמיכה ומידע משפטי
              </h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/contact">צור קשר</Link></li>
                <li><Link href="/#reviews">מה אומרים התלמידים</Link></li>
                <li><Link href="/terms">תנאי שימוש</Link></li>
                <li><Link href="/privacy">מדיניות פרטיות</Link></li>
                <li><Link href="/accessibility">הצהרת נגישות</Link></li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
              צור קשר
            </h3>
            <div className="flex flex-col gap-4">
              <a
                href="https://wa.me/972535247393"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-sm hover:text-white"
              >
                <Image src="/images/whatsapp.png" alt="WhatsApp" width={32} height={32} />
                WhatsApp
              </a>

              <a href="tel:+972535247393" className="inline-flex items-center gap-3 text-sm hover:text-white">
                <Image src="/images/phone.png" alt="Phone" width={32} height={32} />
                053-524-7393
              </a>

              <a href="mailto:doron.c@live.com" className="inline-flex items-center gap-3 text-sm hover:text-white">
                <Image src="/images/email.png" alt="Email" width={32} height={32} />
                doron.c@live.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-700">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex flex-col items-center md:flex-row md:justify-between text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Doron Music Lessons</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy">Privacy</Link>
            <span>•</span>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

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
