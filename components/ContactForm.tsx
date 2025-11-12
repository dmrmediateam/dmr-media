'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

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
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      // Success!
      setIsSubmitting(false);
      setIsSubmitted(true);
      
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
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="py-32 bg-[var(--surface-base)]"
      >
        <div className="container-max flex justify-center">
          <div className="rounded-[24px] border border-[var(--color-ink-200)] bg-white/80 backdrop-blur-sm px-10 py-14 text-center max-w-md">
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-trust)]/10 text-[var(--color-trust)] mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <h3 className="text-2xl font-serif font-light text-[var(--color-off-black)] mb-2">
                Thank you.
              </h3>
              <p className="text-sm text-[var(--color-ink-400)] leading-relaxed">
                We received your message and will reply within one business day.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <section ref={sectionRef} className="py-24 bg-[var(--surface-base)]">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="uppercase tracking-[0.35em] text-[10px] text-[var(--color-ink-400)] mb-4 block">
            Let's Work Together
          </span>
          <h2 className="text-[38px] sm:text-[46px] font-serif font-light text-[var(--color-off-black)] leading-[1.08] tracking-tight">
            Tell us what you’re building. We’ll make the market notice.
          </h2>
          <p className="mt-5 text-sm sm:text-base text-[var(--color-ink-400)] max-w-xl leading-relaxed">
            Share a few details about your goals and we’ll design a calm, measurable plan around them.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-[1.1fr_1.3fr] gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="rounded-[24px] border border-[var(--color-ink-200)] bg-white/70 backdrop-blur-sm p-8 sm:p-10 space-y-8"
          >
            <div>
              <h3 className="text-xl font-serif font-light text-[var(--color-off-black)]">
                Contact
              </h3>
              <div className="mt-4 space-y-2 text-sm text-[var(--color-ink-400)]">
                <a href="mailto:team@dmrmedia.org" className="block hover:text-[var(--color-trust)] transition-colors">
                  team@dmrmedia.org
                </a>
                <a href="tel:+19209404049" className="block hover:text-[var(--color-trust)] transition-colors">
                  +1 (920) 940-4049
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-[var(--color-ink-200)]">
              <h4 className="text-xs uppercase tracking-[0.3em] text-[var(--color-ink-400)] mb-3">
                Specialization
              </h4>
              <p className="text-sm text-[var(--color-ink-400)] leading-relaxed">
                Google Ads, SEO, and analytics frameworks for luxury real estate teams and developers.
              </p>
            </div>

            <div className="flex gap-3">
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
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-ink-200)] text-[var(--color-off-black)] hover:text-[var(--color-trust)] hover:border-[var(--color-trust)] transition-colors"
                  aria-label={link.label}
                >
                  <span className="text-xs uppercase tracking-[0.3em]">{link.label[0]}</span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="rounded-[24px] border border-[var(--color-ink-200)] bg-white/80 backdrop-blur-sm p-8 sm:p-10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <label htmlFor="name" className="block text-xs uppercase tracking-[0.3em] text-[var(--color-ink-400)] mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-full border border-[var(--color-ink-200)] bg-white px-5 py-4 text-sm focus:outline-none focus:border-[var(--color-off-black)] transition-colors"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.35, duration: 0.6 }}
              >
                <label htmlFor="email" className="block text-xs uppercase tracking-[0.3em] text-[var(--color-ink-400)] mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-full border border-[var(--color-ink-200)] bg-white px-5 py-4 text-sm focus:outline-none focus:border-[var(--color-off-black)] transition-colors"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <label htmlFor="phone" className="block text-xs uppercase tracking-[0.3em] text-[var(--color-ink-400)] mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-full border border-[var(--color-ink-200)] bg-white px-5 py-4 text-sm focus:outline-none focus:border-[var(--color-off-black)] transition-colors"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.45, duration: 0.6 }}
              >
                <label htmlFor="message" className="block text-xs uppercase tracking-[0.3em] text-[var(--color-ink-400)] mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-3xl border border-[var(--color-ink-200)] bg-white px-5 py-4 text-sm focus:outline-none focus:border-[var(--color-off-black)] transition-colors"
                />
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[var(--color-off-black)] px-6 py-3 text-[11px] uppercase tracking-[0.3em] text-white transition-colors hover:bg-black disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? 'Sending…' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
