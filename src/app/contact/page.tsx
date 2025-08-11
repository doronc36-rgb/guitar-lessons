import type { Metadata } from 'next';
import ContactForm from './ContactForm';
import { getSeoByKey, getServerLocale } from '@/i18n/server';

export async function generateMetadata(): Promise<Metadata> {
  const locale = getServerLocale();
  const seo = getSeoByKey('contact', locale);
  return {
    title: seo.title,
    description: seo.description,
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
