'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { getStoredUTMParams, trackConversion } from '@/lib/utmTracking';

const inputClasses =
  'w-full px-0 py-3.5 text-base border-b-2 border-[var(--color-ink-200)] bg-transparent text-[var(--color-off-black)] font-serif focus:outline-none focus:border-[var(--color-off-black)] transition-colors duration-300 placeholder:text-[var(--color-ink-400)]';

const textareaClasses =
  'w-full px-0 py-3.5 text-base border-b-2 border-[var(--color-ink-200)] bg-transparent text-[var(--color-off-black)] font-serif focus:outline-none focus:border-[var(--color-off-black)] transition-colors duration-300 placeholder:text-[var(--color-ink-400)] resize-none min-h-[120px]';

const labelClasses = 'block text-xs uppercase tracking-[0.2em] text-[var(--color-off-black)] mb-2 font-serif font-medium';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.01 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Get stored UTM parameters
    const utmParams = getStoredUTMParams();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
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

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      // Success!
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Track conversion
      trackConversion('Lead', { form_type: 'contact' });
      
      // Reset form after showing success message
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      }, 3000);

    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
      // Show error to user
      alert(error instanceof Error ? error.message : 'Failed to send message. Please try again or contact us directly.');
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-32 bg-[var(--surface-base)]"
      >
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
                Thank you.
              </h3>
              <p className="text-[15px] text-[var(--color-ink-300)] leading-relaxed font-serif">
                We received your message and will reply within one business day.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    );
  }

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
            Tell us what you’re building. We’ll make the market notice.
          </h2>
          <p className="mt-5 text-[15px] md:text-base text-[var(--color-ink-300)] max-w-xl leading-[1.65] font-serif">
            Share a few details about your goals and we’ll design a calm, measurable plan around them.
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
              <h3 className="text-xl font-serif font-light text-[var(--color-off-black)]">
                Contact
              </h3>
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
            initial={{ opacity: 1, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 20 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="border border-[var(--color-ink-200)] bg-white p-8 md:p-10 relative z-10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className={labelClasses}>
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label htmlFor="email" className={labelClasses}>
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className={labelClasses}>
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="(920) 555-0123"
                />
              </div>

              <div>
                <label htmlFor="message" className={labelClasses}>
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={textareaClasses}
                  placeholder="Tell us about your goals and how we can help..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[var(--color-trust)] text-white uppercase tracking-[0.15em] text-xs font-serif hover:opacity-90 transition-opacity duration-300 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer relative z-10"
              >
                {isSubmitting ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
