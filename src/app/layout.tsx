import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import Link from "next/link";
import "./globals.css";
import Providers from "./Providers";
import Header from "./components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://guitar-lessons.vercel.app"),
  title: {
    default: "שיעורי גיטרה ופסנתר באשקלון והסביבה | דורון",
    template: "%s | שיעורי מוזיקה באשקלון",
  },
  description:
    "שיעורי גיטרה ופסנתר באשקלון והסביבה. שיעורים פרטיים 1:1, קבוצות קטנות, וחוגים בבתי ספר. מתאים לכל הרמות. קבעו שיעור ניסיון היום.",
  keywords: [
    "שיעורי גיטרה באשקלון",
    "מורה לגיטרה אשקלון",
    "שיעורי פסנתר אשקלון",
    "שיעור גיטרה למתחילים",
    "מורה למוזיקה אשקלון",
    "חוגי גיטרה אשקלון",
    "שיעורים קבוצתיים גיטרה",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "שיעורי גיטרה ופסנתר באשקלון והסביבה | דורון",
    description:
      "שיעורי גיטרה ופסנתר באשקלון והסביבה. שיעורים פרטיים וקבוצות קטנות. קבעו שיעור ניסיון היום.",
    url: "https://guitar-lessons.vercel.app",
    siteName: "Guitar & Piano Lessons Ashkelon",
    locale: "he_IL",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only fixed top-2 left-2 z-50 bg-black text-white px-3 py-2 rounded"
        >
          דלג לתוכן
        </a>
        <Providers>
          <Header />
          <main id="main" role="main" tabIndex={-1} className="outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--foreground)]">
            {children}
          </main>
          <footer className="mt-16 border-t">
            <div className="max-w-6xl mx-auto px-4 py-8 grid gap-6 md:grid-cols-3 text-sm text-[color:var(--muted)]">
              <div>
                <div className="font-medium text-[color:var(--foreground)]">על השיעורים</div>
                <p className="mt-2">שיעורים אישיים וקבוצתיים באשקלון והסביבה. גיטרה ופסנתר לכל הרמות.</p>
              </div>
              <div>
                <div className="font-medium text-[color:var(--foreground)]">קישורים מהירים</div>
                <ul className="mt-2 space-y-1">
                  <li>
                    <Link
                      href="/"
                      aria-label="דף הבית"
                      className="hover:opacity-80 underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--foreground)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
                    >
                      דף הבית
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/lessons"
                      aria-label="שיעורים"
                      className="hover:opacity-80 underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--foreground)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
                    >
                      שיעורים
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/prices"
                      aria-label="מחירים"
                      className="hover:opacity-80 underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--foreground)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
                    >
                      מחירים
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/faq"
                      aria-label="שאלות נפוצות"
                      className="hover:opacity-80 underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--foreground)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
                    >
                      שאלות נפוצות
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/booking"
                      aria-label="קביעת שיעור"
                      className="hover:opacity-80 underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--foreground)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
                    >
                      קביעת שיעור
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      aria-label="צור קשר"
                      className="hover:opacity-80 underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--foreground)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
                    >
                      צור קשר
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <div className="font-medium text-[color:var(--foreground)]">יצירת קשר</div>
                <ul className="mt-2 space-y-1">
                  <li>
                    <a
                      href="https://wa.me/972535247393"
                      target="_blank"
                      rel="noopener"
                      aria-label="פתיחת וואטסאפ"
                      className="hover:opacity-80 underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--foreground)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
                    >
                      וואטסאפ
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+972535247393"
                      aria-label="חיוג טלפון"
                      className="hover:opacity-80 underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--foreground)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
                    >
                      טלפון: 053-524-7393
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:doron.c@live.com"
                      aria-label="שליחת אימייל"
                      className="hover:opacity-80 underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--foreground)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
                    >
                      אימייל: doron.c@live.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center text-xs text-[color:var(--muted)] pb-8">© {new Date().getFullYear()} Doron Music Lessons</div>
          </footer>
        </Providers>
        <Script id="ld-local-business" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "שיעורי גיטרה ופסנתר באשקלון - דורון",
            areaServed: "אשקלון והסביבה",
            telephone: "+972535247393",
            email: "mailto:doron.c@live.com",
            url: "https://guitar-lessons.vercel.app",
            sameAs: ["https://wa.me/972535247393"],
            address: {
              "@type": "PostalAddress",
              addressLocality: "אשקלון",
              addressCountry: "IL",
            },
            makesOffer: [
              { "@type": "Offer", name: "שיעורי גיטרה פרטיים" },
              { "@type": "Offer", name: "שיעורי פסנתר פרטיים" },
              { "@type": "Offer", name: "שיעורים קבוצתיים 2–4" },
            ],
          })}
        </Script>
      </body>
    </html>
  );
}
