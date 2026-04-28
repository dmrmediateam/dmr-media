'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { getStoredUTMParams, trackConversion } from '@/lib/utmTracking';

const inputClasses =
  'w-full px-0 py-3.5 text-base border-b-2 border-[var(--color-ink-200)] bg-transparent text-[var(--color-off-black)] font-serif focus:outline-none focus:border-[var(--color-off-black)] transition-colors duration-300 placeholder:text-[var(--color-ink-400)]';

const textareaClasses =
  'w-full px-0 py-3.5 text-base border-b-2 border-[var(--color-ink-200)] bg-transparent text-[var(--color-off-black)] font-serif focus:outline-none focus:border-[var(--color-off-black)] transition-colors duration-300 placeholder:text-[var(--color-ink-400)] resize-none min-h-[120px]';

const labelClasses =
  'block text-xs uppercase tracking-[0.2em] text-[var(--color-off-black)] mb-2 font-serif font-medium';

export default function PropertyMarketingContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    brokerage: '',
    listing_address: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.01 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const utmParams = getStoredUTMParams();

    const contextLines = [
      formData.brokerage ? `Brokerage/Team: ${formData.brokerage}` : null,
      formData.listing_address ? `Listing Address: ${formData.listing_address}` : null,
      formData.message ? `Message: ${formData.message}` : null,
    ]
      .filter(Boolean)
      .join('\n');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: contextLines,
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

      setIsSubmitting(false);
      setIsSubmitted(true);
      trackConversion('Lead', { form_type: 'property_marketing' });

      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          brokerage: '',
          listing_address: '',
          message: '',
        });
      }, 4000);
    } catch (error) {
      setIsSubmitting(false);
      alert(
        error instanceof Error ? error.message : 'Failed to send. Please try again or contact us directly.'
      );
    }
  };

  if (isSubmitted) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-32 bg-white">
        <div className="container-max flex justify-center">
          <div className="max-w-md text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="w-14 h-14 bg-[var(--color-trust)] flex items-center justify-center mx-auto mb-5">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif font-light text-[var(--color-off-black)] mb-3">
                Request received.
              </h3>
              <p className="text-[15px] text-[var(--color-ink-300)] leading-relaxed font-serif">
                We&apos;ll review your listing details and be in touch within one business day.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <section id="contact" ref={sectionRef} className="py-20 md:py-28 bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-14"
        >
          <span className="uppercase tracking-[0.2em] text-xs text-[var(--color-ink-400)] mb-4 block font-serif">
            Get Started
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[var(--color-off-black)] leading-[1.1] tracking-tight">
            Ready to accelerate your next luxury listing?
          </h2>
          <p className="mt-5 text-[15px] md:text-base text-[var(--color-ink-300)] max-w-xl leading-[1.65] font-serif">
            Volume Negates Luck. Let&apos;s put your listing in front of the right buyers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-serif font-light text-[var(--color-off-black)]">Contact</h3>
              <div className="mt-5 space-y-2 text-[15px] text-[var(--color-ink-300)] font-serif">
                <a
                  href="mailto:team@dmrmedia.org"
                  className="block hover:text-[var(--color-trust)] transition-colors"
                >
                  team@dmrmedia.org
                </a>
                <a
                  href="tel:+19209404049"
                  className="block hover:text-[var(--color-trust)] transition-colors"
                >
                  +1 (920) 940-4049
                </a>
              </div>
            </div>

            <div className="pt-6 border-t border-[var(--color-ink-200)]">
              <h4 className="text-xs uppercase tracking-[0.2em] text-[var(--color-ink-400)] mb-3 font-serif">
                What happens next
              </h4>
              <ul className="space-y-3 text-[15px] text-[var(--color-ink-300)] leading-[1.6] font-serif">
                <li className="flex gap-3">
                  <span className="text-[var(--color-trust)] font-medium shrink-0">01</span>
                  We review your listing details within 24 hours.
                </li>
                <li className="flex gap-3">
                  <span className="text-[var(--color-trust)] font-medium shrink-0">02</span>
                  We send over a tailored marketing package proposal.
                </li>
                <li className="flex gap-3">
                  <span className="text-[var(--color-trust)] font-medium shrink-0">03</span>
                  Campaign goes live within 5 business days.
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="border border-[var(--color-ink-200)] bg-white p-8 md:p-10 relative z-10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="pm_name" className={labelClasses}>
                    Name *
                  </label>
                  <input
                    type="text"
                    id="pm_name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="Jane Smith"
                  />
                </div>
                <div>
                  <label htmlFor="pm_email" className={labelClasses}>
                    Email *
                  </label>
                  <input
                    type="email"
                    id="pm_email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="you@brokerage.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="pm_phone" className={labelClasses}>
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="pm_phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="(555) 000-1234"
                  />
                </div>
                <div>
                  <label htmlFor="pm_brokerage" className={labelClasses}>
                    Brokerage / Team
                  </label>
                  <input
                    type="text"
                    id="pm_brokerage"
                    name="brokerage"
                    value={formData.brokerage}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="Compass, Sotheby's…"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="pm_listing" className={labelClasses}>
                  Listing Address{' '}
                  <span className="normal-case tracking-normal text-[var(--color-ink-400)]">
                    (Optional)
                  </span>
                </label>
                <input
                  type="text"
                  id="pm_listing"
                  name="listing_address"
                  value={formData.listing_address}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="123 Ocean Drive, Miami, FL 33139"
                />
              </div>

              <div>
                <label htmlFor="pm_message" className={labelClasses}>
                  Message
                </label>
                <textarea
                  id="pm_message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={textareaClasses}
                  placeholder="Tell us about your listing, timeline, or any questions…"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[var(--color-trust)] text-white uppercase tracking-[0.15em] text-xs font-serif hover:opacity-90 transition-opacity duration-300 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? 'Sending…' : 'Request Marketing Package'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
