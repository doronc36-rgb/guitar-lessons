import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      {/* Top area */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 py-16 md:grid-cols-3 md:justify-items-center text-center">
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
          <div className="space-y-4 md:justify-self-center flex flex-col items-center text-center">
            <h3 className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
              צור קשר
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/972535247393"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-300 hover:text-white"
              >
                <div className="grid grid-cols-[auto,auto] items-center justify-center gap-3">
                  <Image src="/images/whatsapp icon new.jpg" alt="WhatsApp" width={32} height={32} className="block" />
                  <span>WhatsApp</span>
                </div>
              </a>

              <a href="tel:0535247393" className="text-sm text-neutral-300 hover:text-white">
                <div className="grid grid-cols-[auto,auto] items-center justify-center gap-3">
                  <Image src="/images/phone.png" alt="Phone" width={32} height={32} className="block" />
                  <span>053-524-7393</span>
                </div>
              </a>

              <a href="mailto:doron.c@live.com" className="text-sm text-neutral-300 hover:text-white">
                <div className="grid grid-cols-[auto,auto] items-center justify-center gap-3">
                  <Image src="/images/email.png" alt="Email" width={32} height={32} className="block" />
                  <span>doron.c@live.com</span>
                </div>
              </a>
            </div>
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
    </footer>
  );
}
