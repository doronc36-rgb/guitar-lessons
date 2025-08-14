'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useI18n } from '@/i18n';

export default function ContactForm() {
  const { t } = useI18n();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = t.contact.form.nameRequired;
    }

    if (!formData.email.trim()) {
      newErrors.email = t.contact.form.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t.contact.form.emailInvalid;
    }

    // Message is optional

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div id="contact" className="min-h-screen flex items-center justify-center p-8 scroll-mt-28">
      <div className="max-w-md w-full space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-semibold">{t.contact.title}</h1>
          <p className="text-[color:var(--muted)] mt-2">{t.contact.subtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">{t.contact.form.nameLabel}</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              autoComplete="name"
              className={`w-full px-3 py-2 border rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)] transition-colors ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder={t.contact.form.namePlaceholder}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">{t.contact.form.emailLabel}</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              autoComplete="email"
              className={`w-full px-3 py-2 border rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)] transition-colors ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder={t.contact.form.emailPlaceholder}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">{t.contact.form.messageLabel}</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              autoComplete="off"
              className={`w-full px-3 py-2 border rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)] transition-colors resize-none ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder={t.contact.form.messagePlaceholder}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[color:var(--accent)] text-[color:var(--accent-contrast)] py-2 px-4 rounded-lg hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
          >
            {isSubmitting ? t.contact.form.sending : t.contact.form.submit}
          </button>
        </form>

        {submitStatus === 'success' && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center" role="status" aria-live="polite">
            <p className="text-green-800 font-medium">{t.contact.successTitle}</p>
            <p className="text-green-600 text-sm mt-1">{t.contact.successBody}</p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center" role="status" aria-live="polite">
            <p className="text-red-800 font-medium">{t.contact.errorTitle}</p>
            <p className="text-red-600 text-sm mt-1">{t.contact.errorBody}</p>
          </div>
        )}

        <div className="text-center">
          <div className="space-y-2">
            <a
              href="tel:+972535247393"
              className="text-neutral-700 hover:text-black transition-colors underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--foreground)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
              aria-label={t.contact.aria.call}
            >
              {t.contact.phoneLabel}
            </a>
            <br />
            <a
              href="https://wa.me/972535247393"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-700 hover:text-black transition-colors underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--foreground)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
              aria-label={t.contact.aria.whatsapp}
            >
              {t.contact.whatsappLabel}
            </a>
            <br />
            <a
              href="mailto:doron.c@live.com"
              className="text-neutral-700 hover:text-black transition-colors underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--foreground)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
              aria-label={t.contact.aria.email}
            >
              {t.contact.emailLabel}
            </a>
          </div>
          <div className="mt-4">
            <Link href="/" className="text-neutral-600 hover:text-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--foreground)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]">{t.contact.backHome}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}


