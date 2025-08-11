import type { Metadata } from 'next';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'צרו קשר',
  description:
    'טופס יצירת קשר לשיעורי גיטרה ופסנתר באשקלון. שלחו הודעה, חייגו או כתבו בוואטסאפ.',
  keywords: [
    'שיעורי גיטרה באשקלון',
    'מורה לגיטרה אשקלון',
    'שיעורי פסנתר אשקלון',
  ],
};

export default function Contact() {
  return <ContactForm />;
}
