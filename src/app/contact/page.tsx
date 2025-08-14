import type { Metadata } from 'next';
import ContactForm from './ContactForm';
import { getSeoByKey, getServerLocale } from '@/i18n/server';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getServerLocale();
  const seo = getSeoByKey('contact', locale);
  return {
    title: seo.title,
    description: seo.description,
    openGraph: {
      title: seo.title,
      description: seo.description,
      locale: locale === "en" ? "en_US" : "he_IL",
      type: 'website',
      images: [
        {
          url: '/logo.svg',
          width: 1200,
          height: 630,
          alt: seo.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: ['/logo.svg'],
    },
    alternates: {
      canonical: '/contact',
      languages: {
        en: '/contact?hl=en',
        he: '/contact?hl=he',
      },
    },
  } satisfies Metadata;
}

export default function Contact() {
  return <ContactForm />;
}
