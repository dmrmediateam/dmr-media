'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ELFSIGHT_LANDING_HIDE_SELECTORS } from '@/lib/elfsight-widgets';

/* eslint-disable @typescript-eslint/no-explicit-any */

export default function TwoWeekTrialPage() {
  const calInitialized = useRef(false);

  // Hide header, footer, and AI chatbot — this page stands alone.
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

  // Cal.com inline embed — the official snippet, guarded against double-init in dev.
  useEffect(() => {
    if (calInitialized.current) return;
    calInitialized.current = true;

    const w = window as any;
    (function (C: any, A: string, L: string) {
      const p = function (a: any, ar: any) {
        a.q.push(ar);
      };
      const d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          const cal = C.Cal;
          const ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement('script')).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api: any = function () {
              p(api, arguments);
            };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === 'string') {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ['initNamespace', namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
    })(w, 'https://app.cal.com/embed/embed.js', 'init');

    w.Cal('init', '2-week-trial', { origin: 'https://app.cal.com' });
    w.Cal.config = w.Cal.config || {};
    w.Cal.config.forwardQueryParams = true;

    w.Cal.ns['2-week-trial']('inline', {
      elementOrSelector: '#my-cal-inline-2-week-trial',
      config: { layout: 'month_view', useSlotsViewOnSmallScreen: 'true', theme: 'light' },
      calLink: 'andrew-rohm/2-week-trial',
    });

    w.Cal.ns['2-week-trial']('ui', { theme: 'light', hideEventTypeDetails: false, layout: 'month_view' });
  }, []);

  return (
    <div className="min-h-screen bg-[var(--surface-base)]">
      <section className="px-4 pb-20 pt-16 sm:px-6 md:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="mb-5 inline-flex items-center gap-3 rounded-full border border-[var(--color-ink-200)] bg-white px-5 py-2.5 font-serif text-[10px] uppercase tracking-[0.24em] text-[var(--color-ink-400)] sm:text-[11px]">
              Live attendees only · 2 free weeks of Google Advertising
            </p>

            <h1 className="mb-5 font-serif text-3xl font-light leading-[1.1] tracking-tight text-[var(--color-off-black)] sm:text-4xl md:text-5xl">
              Don&apos;t take our word for it.
              <br />
              Let us <em className="italic">prove</em> it works.
            </h1>

            <p className="mx-auto mb-3 max-w-2xl font-serif text-lg leading-relaxed text-[var(--color-ink-300)]">
              We&apos;ll run your Google Advertising for{' '}
              <strong className="font-medium text-[var(--color-off-black)]">two weeks, free</strong> — our team, our
              setup, our targeting, in your account. You watch the leads come in before you pay us a dollar for
              management. Pick a kickoff time below and we&apos;ll take it from there.
            </p>

            <div className="mx-auto mb-2 mt-8 flex max-w-2xl flex-col gap-3 text-left sm:flex-row sm:gap-4">
              {[
                ['1', 'Book your kickoff', 'Grab a time below — 20 minutes, on camera, with our team.'],
                ['2', 'We build & launch', 'Campaigns, landing page review and tracking — done for you.'],
                ['3', 'You judge the leads', 'Two weeks of real results. If it works, we keep going.'],
              ].map(([n, title, body]) => (
                <div
                  key={n}
                  className="flex-1 rounded-[20px] border border-[var(--color-ink-200)] bg-white p-5 shadow-[0_1px_0_rgba(15,15,15,0.04)]"
                >
                  <span className="font-serif text-lg font-light text-[var(--color-trust)]">{n}</span>
                  <h2 className="mt-1 font-serif text-lg font-light text-[var(--color-off-black)]">{title}</h2>
                  <p className="mt-1.5 font-serif text-sm leading-relaxed text-[var(--color-ink-300)]">{body}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Cal.com inline booking */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mx-auto mt-10 max-w-5xl"
        >
          <div className="overflow-hidden rounded-[20px] border border-[var(--color-ink-200)] bg-white shadow-[0_1px_0_rgba(15,15,15,0.04)]">
            <div
              id="my-cal-inline-2-week-trial"
              style={{ width: '100%', height: '100%', overflow: 'scroll' }}
              className="min-h-[720px]"
            />
          </div>
          <p className="mt-4 text-center font-serif text-xs text-[var(--color-ink-400)]/80">
            Two weeks of free Google Ads management. Ad spend is billed separately and stays in your control.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
