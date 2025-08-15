import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      {/* Top area */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 py-16 md:grid-cols-3">
          {/* Brand */}
          <div className="flex items-center justify-center md:justify-start">
            <div className="p-2 rounded-full bg-neutral-800/60 border border-neutral-700 relative md:left-[-8px]">
              <Image
                src="/images/music_logo_3_optimized.png"
                alt="Doron Music Lessons"
                width={104}
                height={104}
                className="rounded-full block"
              />
            </div>
          </div>

          {/* Quick links */}
          <div className="grid grid-cols-2 gap-6 md:justify-items-center">
            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-neutral-400">
                קישורים מהירים
              </h3>
              <ul className="space-y-2 text-sm">
                <li><Link className="text-neutral-300 hover:text-white transition-colors" href="/">דף הבית</Link></li>
                <li><Link className="text-neutral-300 hover:text-white transition-colors" href="/lessons">שיעורים</Link></li>
                <li><Link className="text-neutral-300 hover:text-white transition-colors" href="/prices">מחירים</Link></li>
                <li><Link className="text-neutral-300 hover:text-white transition-colors" href="/faq">שאלות נפוצות</Link></li>
                <li><Link className="text-neutral-300 hover:text-white transition-colors" href="/booking">קביעת שיעור</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-neutral-400">
                תמיכה ומידע משפטי
              </h3>
              <ul className="space-y-2 text-sm">
                <li><Link className="text-neutral-300 hover:text-white transition-colors" href="/contact">צור קשר</Link></li>
                <li><Link className="text-neutral-300 hover:text-white transition-colors" href="/#reviews">מה אומרים התלמידים</Link></li>
                <li><Link className="text-neutral-300 hover:text-white transition-colors" href="/terms">תנאי שימוש</Link></li>
                <li><Link className="text-neutral-300 hover:text-white transition-colors" href="/privacy">מדיניות פרטיות</Link></li>
                <li><Link className="text-neutral-300 hover:text-white transition-colors" href="/accessibility">הצהרת נגישות</Link></li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
              צור קשר
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/972535247393"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 text-sm text-neutral-300 hover:text-white"
              >
                <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <circle cx="16" cy="16" r="14" fill="#25D366" />
                  <path fill="#ffffff" d="M21.3 20.4c-.3.5-1.8 1.1-2.5 1.2-3.4-.1-7.5-4.2-7.6-7.6.1-.7.7-2.2 1.2-2.5.3-.2.7-.2 1 0l1.6 1.1c.3.2.4.6.2.9l-.7 1.2c.9 1.8 2.2 3.1 4 4l1.2-.7c.3-.2.7-.1.9.2l1.1 1.6c.2.3.2.7-.1 1z"/>
                </svg>
                WhatsApp
              </a>

              <a href="tel:0535247393" className="inline-flex items-center gap-4 text-sm text-neutral-300 hover:text-white">
                <Image src="/images/phone.png" alt="Phone" width={32} height={32} />
                053-524-7393
              </a>

              <a href="mailto:doron.c@live.com" className="inline-flex items-center gap-4 text-sm text-neutral-300 hover:text-white">
                <Image src="/images/email.png" alt="Email" width={32} height={32} />
                doron.c@live.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-700">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex flex-col items-center md:flex-row md:justify-between text-[12px] text-neutral-500">
          <p>© Doron Music Lessons 2025</p>
          <div className="flex items-center gap-3">
            <Link className="hover:text-white" href="/privacy">Privacy</Link>
            <span>•</span>
            <Link className="hover:text-white" href="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
