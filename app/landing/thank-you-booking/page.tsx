'use client';

import { useEffect } from 'react';
import { ELFSIGHT_LANDING_HIDE_SELECTORS } from '@/lib/elfsight-widgets';
import { motion } from 'framer-motion';

export default function ThankYouBookingPage() {
  // Hide header, footer, and AI chatbot for this landing page
  useEffect(() => {
    const nav = document.querySelector('nav') as HTMLElement | null;
    const footer = document.querySelector('footer') as HTMLElement | null;

    const hideElfsightWidgets = () => {
      ELFSIGHT_LANDING_HIDE_SELECTORS.forEach((selector) => {
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-8 sm:p-10 md:p-12 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-[var(--color-trust)]/15 flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-[var(--color-trust)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] leading-[1.15] tracking-tight mb-6">
              Confirm your booking…
            </h1>

            <div className="relative mx-auto max-w-xl aspect-video rounded-md overflow-hidden border border-[var(--color-ink-200)] bg-black shadow-sm mb-8">
              <iframe
                src="https://www.youtube.com/embed/7b9Km1b1Lq4?rel=0&autoplay=1&mute=1"
                title="Confirm your booking"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>

            <div className="space-y-4 max-w-lg mx-auto text-center">
              <p className="text-base sm:text-lg font-serif text-[var(--color-off-black)] leading-relaxed">
                <strong className="font-medium">Accept the calendar invite</strong> or reply to the email saying &quot;received&quot; to confirm your spot.
              </p>
              <p className="text-base font-serif text-[var(--color-ink-300)] leading-relaxed">
                Without confirmation, we may cancel your booking.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
