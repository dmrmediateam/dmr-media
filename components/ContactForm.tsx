'use client';

import { useRef, useState, type ChangeEvent, type FormEvent } from 'react';
import { motion, useInView } from 'framer-motion';
import { getStoredUTMParams, trackConversion } from '@/lib/utmTracking';
import FormHoneypot, { readHoneypot } from '@/components/FormHoneypot';
import {
  applyFormBtnPrimaryClass,
  applyFormInputClass,
  applyFormLabelClass,
  applyFormPanelClass,
} from '@/components/applyFormPrimitives';

const textareaClass =
  'w-full min-h-[120px] rounded-lg border border-[var(--color-ink-200)] bg-white px-3 py-2.5 font-serif text-base leading-normal text-[var(--color-off-black)] placeholder:text-[var(--color-ink-400)]/80 shadow-[0_1px_0_rgba(15,15,15,0.03)] transition-colors focus:border-[var(--color-off-black)] focus:outline-none focus:ring-1 focus:ring-[var(--color-off-black)]/15 resize-none';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitMessage, setSubmitMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sectionRef = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.01 });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSubmitMessage('');
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (form && !form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // Read honeypot values before the first state change / await.
    const honeypot = readHoneypot(form);

    setIsSubmitting(true);
    setSubmitMessage('');

    const utmParams = getStoredUTMParams();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          ...honeypot,
          utm_source: utmParams.utm_source,
          utm_medium: utmParams.utm_medium,
          utm_campaign: utmParams.utm_campaign,
          utm_term: utmParams.utm_term,
          utm_content: utmParams.utm_content,
          gclid: utmParams.gclid,
          fbclid: utmParams.fbclid,
          landing_page: utmParams.landing_page,
          first_visit: utmParams.first_visit,
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Failed to send message');

      setIsSubmitted(true);
      // Skip the conversion pixel on a spam-filtered submission so it never
      // inflates Google Ads data. The visitor still sees the success state.
      if (!data.filtered) trackConversion('Lead', { form_type: 'contact' });

      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', phone: '', message: '' });
      }, 3000);
    } catch (error) {
      setSubmitMessage(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-[var(--surface-base)]">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <span className="uppercase tracking-[0.2em] text-xs text-[var(--color-ink-400)] mb-4 block font-serif">
            Let's Work Together
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[var(--color-off-black)] leading-[1.1] tracking-tight">
            Tell us what you're building. We'll make the market notice.
          </h2>
          <p className="mt-5 text-[15px] md:text-base text-[var(--color-ink-300)] max-w-xl leading-[1.65] font-serif">
            Share a few details about your goals and we'll design a calm, measurable plan around them.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-serif font-light text-[var(--color-off-black)]">Contact</h3>
              <div className="mt-5 space-y-2 text-[15px] text-[var(--color-ink-300)] font-serif">
                <a href="mailto:team@dmrmedia.org" className="block hover:text-[var(--color-trust)] transition-colors">
                  team@dmrmedia.org
                </a>
                <a href="tel:+19202495210" className="block hover:text-[var(--color-trust)] transition-colors">
                  +1 920-249-5210
                </a>
              </div>
            </div>

            <div className="pt-6 border-t border-[var(--color-ink-200)]">
              <h4 className="text-xs uppercase tracking-[0.2em] text-[var(--color-ink-400)] mb-3 font-serif">
                Specialization
              </h4>
              <p className="text-[15px] text-[var(--color-ink-300)] leading-[1.6] font-serif">
                Google Ads, SEO, and analytics frameworks for luxury real estate teams and developers.
              </p>
            </div>

            <div className="flex gap-3 pt-2">
              {[
                { href: 'https://www.linkedin.com/company/90571937/', label: 'LinkedIn' },
                { href: 'https://www.instagram.com/andrewrohmtcm/', label: 'Instagram' },
                { href: 'https://www.youtube.com/@AndrewRohmcm', label: 'YouTube' },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center border border-[var(--color-ink-200)] text-[var(--color-off-black)] hover:text-[var(--color-trust)] hover:border-[var(--color-trust)] transition-colors font-serif text-xs"
                  aria-label={link.label}
                >
                  {link.label[0]}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.15, duration: 0.5 }}
          >
            {isSubmitted ? (
              <div className={`${applyFormPanelClass} p-8 md:p-10 flex flex-col items-center justify-center text-center min-h-[300px]`}>
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                  <div className="w-12 h-12 rounded-full bg-[var(--color-trust)] flex items-center justify-center mx-auto mb-5">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-serif font-light text-[var(--color-off-black)] mb-2">Thank you.</h3>
                  <p className="text-sm text-[var(--color-ink-300)] leading-relaxed font-serif">
                    We received your message and will reply within one business day.
                  </p>
                </motion.div>
              </div>
            ) : (
              <div className={`${applyFormPanelClass} p-8 md:p-10`}>
                <form ref={formRef} onSubmit={handleSubmit} aria-label="Contact form" className="space-y-5">
                  <FormHoneypot idSuffix="contact" />
                  <div className="h-px w-full bg-[var(--color-ink-200)]" aria-hidden />

                  <div>
                    <label htmlFor="cf-name" className={applyFormLabelClass}>
                      Your name *
                    </label>
                    <input
                      id="cf-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className={applyFormInputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="cf-email" className={applyFormLabelClass}>
                      Email address *
                    </label>
                    <input
                      id="cf-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className={applyFormInputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="cf-phone" className={applyFormLabelClass}>
                      Phone number
                    </label>
                    <input
                      id="cf-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(920) 555-0123"
                      className={applyFormInputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="cf-message" className={applyFormLabelClass}>
                      Your message *
                    </label>
                    <textarea
                      id="cf-message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your goals…"
                      className={textareaClass}
                    />
                  </div>

                  {submitMessage ? (
                    <p role="alert" className="font-serif text-sm text-red-900">
                      {submitMessage}
                    </p>
                  ) : null}

                  <div className="flex flex-col-reverse gap-3 border-t border-[var(--color-ink-200)] pt-5 sm:flex-row sm:items-center sm:justify-end">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`${applyFormBtnPrimaryClass} w-full sm:min-w-[12rem] sm:w-auto`}
                    >
                      {isSubmitting ? 'Sending…' : 'Send Message'}
                    </button>
                  </div>

                  <p className="font-serif text-[11px] uppercase tracking-[0.14em] text-[var(--color-ink-300)] text-center sm:text-left">
                    No spam. We reply within one business day.
                  </p>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
