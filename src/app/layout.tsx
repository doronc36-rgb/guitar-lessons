import type { Metadata } from "next";
import { Poppins, Open_Sans, Pacifico } from "next/font/google";
import Script from "next/script";
// import Link from "next/link";
import "./globals.css";
import Providers from "./Providers";
import ClientMeta from "./ClientMeta";
import LocaleFromQuery from "./LocaleFromQuery";
import { cookies } from "next/headers";
import type { SupportedLocale } from "@/i18n";
import Header from "./components/Header";
import SiteFooter from "./components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
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
      <body className={`${poppins.variable} ${openSans.variable} ${pacifico.variable} antialiased`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 bg-white text-black px-3 py-2 rounded"
        >
          Skip to content
        </a>
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
        {/* Google Analytics 4 */}
        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" 
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
        <Script id="ld-local-business" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "דורון כהן — שיעורי גיטרה ופסנתר",
            areaServed: "Ashkelon",
            telephone: "+972-53-524-7393",
            availableLanguage: ["he", "en"],
            priceRange: "₪120–₪150",
            email: "mailto:doron.c@live.com",
            url: "https://guitar-lessons.vercel.app",
            sameAs: ["https://wa.me/972535247393"],
            address: {
              "@type": "PostalAddress",
              addressLocality: "אשקלון",
              addressCountry: "IL",
            },
            makesOffer: [
              { 
                "@type": "Offer", 
                name: "שיעורי גיטרה פרטיים",
                description: "שיעורים פרטיים לגיטרה לכל הרמות",
                priceCurrency: "ILS", 
                price: "120-150",
                availability: "https://schema.org/InStock"
              },
              { 
                "@type": "Offer", 
                name: "שיעורי פסנתר פרטיים",
                description: "הוראת פסנתר אישית למתחילים ומתקדמים", 
                priceCurrency: "ILS", 
                price: "120-150",
                availability: "https://schema.org/InStock"
              },
              { 
                "@type": "Offer", 
                name: "שיעורים קבוצתיים 2–4",
                description: "שיעורים בקבוצות קטנות",
                priceCurrency: "ILS"
              },
            ],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "15",
              bestRating: "5"
            },
            openingHours: "Mo-Su 09:00-21:00",
            paymentAccepted: "Cash, Bank Transfer",
          })}
        </Script>
      </body>
    </html>
  );
}
