'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Testimonials from '@/components/Testimonials';

export default function ThankYouBookingPage() {
  // Hide header, footer, and AI chatbot for this landing page
  useEffect(() => {
    const nav = document.querySelector('nav') as HTMLElement | null;
    const footer = document.querySelector('footer') as HTMLElement | null;

    const hideElfsightWidgets = () => {
      const selectors = [
        '.elfsight-app-90e5dbc1-4850-470a-b384-914842649785',
        '[class*="elfsight"]',
        '[id*="elfsight"]',
        '[data-elfsight]',
        'iframe[src*="elfsight"]',
      ];

      selectors.forEach((selector) => {
        try {
          const elements = document.querySelectorAll(selector) as NodeListOf<HTMLElement>;
          elements.forEach((el) => {
            if (el) el.style.display = 'none';
          });
        } catch (e) {
          // Ignore selector errors
        }
      });
    };

    if (nav) nav.style.display = 'none';
    if (footer) footer.style.display = 'none';
    hideElfsightWidgets();

    const observer = new MutationObserver(() => hideElfsightWidgets());
    observer.observe(document.body, { childList: true, subtree: true });
    const intervalId = setInterval(hideElfsightWidgets, 500);

    return () => {
      if (nav) nav.style.display = '';
      if (footer) footer.style.display = '';
      observer.disconnect();
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[var(--surface-base)]">
      <section className="py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          {/* Social proof pill */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex justify-center mb-10"
          >
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white rounded-full border border-[var(--color-ink-200)] shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
              <span className="text-sm font-serif text-[var(--color-off-black)] whitespace-nowrap">
                5 stars since 2022
              </span>
              <div className="flex items-center gap-2">
                <Image src="/images/Untitled design (81).png" alt="Trustpilot" width={72} height={24} className="h-4 w-auto object-contain" />
                <Image src="/images/Google__G__logo.svg.png" alt="Google" width={58} height={19} className="h-3.5 w-auto object-contain" />
              </div>
            </div>
          </motion.div>

          {/* Main card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="bg-white rounded-xl border border-[var(--color-ink-200)] shadow-[0_4px_24px_rgba(0,0,0,0.06)] p-8 sm:p-10 md:p-12 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-[var(--color-trust)]/15 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-[var(--color-trust)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] leading-[1.15] tracking-tight mb-2">
              You&apos;re all set.
            </h1>

            <p className="text-base sm:text-lg font-serif text-[var(--color-ink-300)] mb-10">
              Thank you for booking your strategy call.
            </p>

            <div className="space-y-6 max-w-lg mx-auto text-left">
              <div className="flex gap-5 items-start">
                <span className="flex-shrink-0 w-11 h-11 rounded-full border-2 border-[var(--color-trust)] flex items-center justify-center text-lg font-serif font-medium text-[var(--color-trust)]">
                  1
                </span>
                <p className="text-lg sm:text-xl md:text-2xl font-serif text-[var(--color-off-black)] leading-snug pt-1.5">
                  <strong className="font-medium">Check your email.</strong> We&apos;ve sent you the meeting details.
                </p>
              </div>
              <div className="flex gap-5 items-start">
                <span className="flex-shrink-0 w-11 h-11 rounded-full border-2 border-[var(--color-trust)] flex items-center justify-center text-lg font-serif font-medium text-[var(--color-trust)]">
                  2
                </span>
                <p className="text-lg sm:text-xl md:text-2xl font-serif text-[var(--color-off-black)] leading-snug pt-1.5">
                  <strong className="font-medium">Accept the calendar invite</strong> to confirm your spot.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Testimonials />
    </div>
  );
}
