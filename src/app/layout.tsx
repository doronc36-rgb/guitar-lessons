import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import Link from "next/link";
import "./globals.css";
import Providers from "./Providers";
import ClientMeta from "./ClientMeta";
import LocaleFromQuery from "./LocaleFromQuery";
import { cookies } from "next/headers";
import type { SupportedLocale } from "@/i18n";
import Header from "./components/Header";
import SiteFooter from "./components/Footer";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Determine locale from cookie; default to 'he'
  const store = await cookies();
  const cookieLocale =
    (store.get("locale")?.value as SupportedLocale) ?? ("he" as SupportedLocale);
  const dir = cookieLocale === "he" ? "rtl" : "ltr";
  return (
    <html lang={cookieLocale} dir={dir}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Skip link now localized in Header via i18n if needed; keeping static anchor is fine */}
        <Providers defaultLocale={cookieLocale}>
          <Header />
          <main id="main" role="main" tabIndex={-1} className="outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--foreground)]">
            {children}
          </main>
          <SiteFooter />
          {/* Keep client-side meta in sync with language toggles */}
          <ClientMeta />
          {/* Allow switching locale by hl=en|he in URL */}
          <LocaleFromQuery />
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
