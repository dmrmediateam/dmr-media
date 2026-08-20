'use client';

import { Suspense, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { ELFSIGHT_LANDING_HIDE_SELECTORS } from '@/lib/elfsight-widgets';

const STEPS = [
  {
    title: 'Check your email',
    body:
      'We just sent your confirmation with everything you need — including how to add the webinar to your calendar. If it isn’t in your inbox within 15 minutes, check spam or promotions.',
  },
  {
    title: 'Add it to your calendar',
    body:
      'Use the add-to-calendar link in that email so September 16th at 12pm ET / 9am PT is locked in before your day fills up.',
  },
  {
    title: 'Show up live',
    body:
      'The session is taught live, with real client accounts on screen and your questions answered on air. Bring your numbers — you’ll leave knowing exactly where your ads leak money.',
  },
] as const;

function WebinarDqContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name') || '';
  const email = searchParams.get('email') || '';
  const firstName = name.trim().split(/\s+/)[0] || '';

  // Hide header, footer, and AI chatbot for this landing page
  useEffect(() => {
    const nav = document.querySelector('nav') as HTMLElement | null;
    const footer = document.querySelector('footer') as HTMLElement | null;

    const hideElfsightWidgets = () => {
      ELFSIGHT_LANDING_HIDE_SELECTORS.forEach((selector) => {
        try {
          document.querySelectorAll(selector).forEach((el) => {
            (el as HTMLElement).style.display = 'none';
          });
        } catch (e) {}
      });
    };

    if (nav) nav.style.display = 'none';
    if (footer) footer.style.display = 'none';
    hideElfsightWidgets();

    const observer = new MutationObserver(hideElfsightWidgets);
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
      <section className="px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            {/* Confirmation mark */}
            <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[var(--color-trust)]/30 bg-[var(--color-trust)]/10">
              <svg className="h-8 w-8 text-[var(--color-trust)]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <p className="mb-5 inline-flex items-center gap-3 rounded-full border border-[var(--color-ink-200)] bg-white px-5 py-2.5 font-serif text-[10px] uppercase tracking-[0.24em] text-[var(--color-ink-400)] sm:text-[11px]">
              Live webinar · September 16th · 12pm ET / 9am PT
            </p>

            <h1 className="mb-5 font-serif text-3xl font-light leading-[1.1] tracking-tight text-[var(--color-off-black)] sm:text-4xl md:text-5xl">
              {firstName ? `${firstName}, you're` : "You're"} registered
              <span className="text-[var(--color-trust)]">.</span>
            </h1>

            <p className="mx-auto mb-3 max-w-xl font-serif text-lg leading-relaxed text-[var(--color-ink-300)]">
              <strong className="font-medium text-[var(--color-off-black)]">Check your email</strong>
              {email ? (
                <>
                  {' '}at <strong className="font-medium text-[var(--color-off-black)]">{email}</strong>
                </>
              ) : null}{' '}
              — your confirmation includes how to add the webinar to your calendar.
            </p>
          </motion.div>

          {/* Next steps */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-10 space-y-4 text-left"
          >
            {STEPS.map((step, i) => (
              <div
                key={step.title}
                className="flex gap-5 rounded-[20px] border border-[var(--color-ink-200)] bg-white p-6 shadow-[0_1px_0_rgba(15,15,15,0.04)]"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-[var(--color-trust)]/30 bg-[var(--color-trust)]/10">
                  <span className="font-serif text-lg font-light text-[var(--color-trust)]">{i + 1}</span>
                </div>
                <div>
                  <h2 className="font-serif text-xl font-light text-[var(--color-off-black)]">{step.title}</h2>
                  <p className="mt-2 font-serif text-sm leading-relaxed text-[var(--color-ink-300)]">{step.body}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10"
          >
            <p className="font-serif text-sm leading-relaxed text-[var(--color-ink-400)]">
              Didn&apos;t get the email? Check spam, then write us at{' '}
              <a href="mailto:team@dmrmedia.org" className="text-[var(--color-off-black)] underline underline-offset-2 hover:opacity-70">
                team@dmrmedia.org
              </a>{' '}
              and we&apos;ll resend your invite.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default function WebinarDqPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-[var(--surface-base)] font-serif text-[var(--color-ink-300)]">
          Loading…
        </div>
      }
    >
      <WebinarDqContent />
    </Suspense>
  );
}
