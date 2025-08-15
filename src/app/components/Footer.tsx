import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 relative">
      {/* Top area */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 py-16 md:grid-cols-3 md:justify-items-center text-center">
          {/* Brand */}
          <div className="flex items-center justify-center md:justify-center">
            <div className="p-2 rounded-full bg-neutral-800/60 border border-neutral-700">
              <Image
                src="/images/music_logo_3_optimized.png"
                alt="Doron Music Lessons"
                width={128}
                height={128}
                className="rounded-full block"
              />
            </div>
          </div>

          {/* Mobile contact row directly under logo */}
          <div className="md:hidden col-span-full mt-6">
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 w-full px-4 overflow-hidden">
              <a href="https://wa.me/972535247393" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white max-w-full">
                <Image src="/images/whatsapp icon new.jpg" alt="WhatsApp" width={24} height={24} />
                <span>WhatsApp</span>
              </a>
              <a href="tel:0535247393" className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white max-w-full">
                <Image src="/images/phone.png" alt="Phone" width={24} height={24} />
                <span>053-524-7393</span>
              </a>
              <a href="mailto:doron.c@live.com" className="inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white max-w-full">
                <Image src="/images/email.png" alt="Email" width={24} height={24} />
                <span className="break-all">doron.c@live.com</span>
              </a>
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

          {/* (Removed) mobile stacked contact column - replaced by mobile row above */}
        </div>
      </div>

      {/* Desktop-only contact line across bottom of footer (do not affect mobile) */}
      <div className="hidden md:block w-full border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-center justify-between text-sm text-neutral-300">
            <a href="https://wa.me/972535247393" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white">
              <Image src="/images/whatsapp icon new.jpg" alt="WhatsApp" width={24} height={24} />
              <span>WhatsApp</span>
            </a>
            <a href="tel:0535247393" className="inline-flex items-center gap-2 hover:text-white">
              <Image src="/images/phone.png" alt="Phone" width={24} height={24} />
              <span>053-524-7393</span>
            </a>
            <a href="mailto:doron.c@live.com" className="inline-flex items-center gap-2 hover:text-white">
              <Image src="/images/email.png" alt="Email" width={24} height={24} />
              <span>doron.c@live.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-700">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-3 flex flex-col items-center gap-2 md:flex-row md:justify-center text-[12px] text-neutral-500">
          <p className="text-center">© Doron Music Lessons 2025</p>
          <div className="flex items-center gap-3 text-center">
            <Link className="hover:text-white" href="/privacy">Privacy</Link>
            <span>•</span>
            <Link className="hover:text-white" href="/terms">Terms</Link>
          </div>
        </div>
      </div>

      {/* Desktop-only decorative left logo to mirror right side */}
      <div className="hidden md:block absolute left-[calc(50%-36rem)] top-1/2 -translate-y-1/2">
        <div className="p-2 rounded-full bg-neutral-800/60 border border-neutral-700">
          <Image src="/images/music_logo_3_optimized.png" alt="Logo" width={128} height={128} />
        </div>
      </div>
    </footer>
  );
}
