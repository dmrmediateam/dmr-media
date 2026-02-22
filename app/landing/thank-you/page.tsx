'use client';

import { Suspense, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Script from 'next/script';

function ThankYouContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name') || '';
  const email = searchParams.get('email') || '';
  const phone = searchParams.get('phone') || '';

  // Build Aura embed URL with pre-populated fields from URL params
  const buildAuraUrl = () => {
    let url = 'https://app.aura-app.ai/dmr-media/the-strategy-call/embed?theme_preset=light';
    if (name) url += `&name=${encodeURIComponent(name)}`;
    if (email) url += `&email=${encodeURIComponent(email)}`;
    if (phone) url += `&phone=${encodeURIComponent(phone)}`;
    return url;
  };

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

    const observer = new MutationObserver(() => {
      hideElfsightWidgets();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    const intervalId = setInterval(hideElfsightWidgets, 500);

    return () => {
      if (nav) nav.style.display = '';
      if (footer) footer.style.display = '';
      observer.disconnect();
      clearInterval(intervalId);
    };
  }, []);

  // Track conversion when page loads
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        send_to: 'AW-CONVERSION_ID/AW-CONVERSION_LABEL',
        value: 1.0,
        currency: 'USD',
      });
      (window as any).gtag('event', 'ads_conversion_Begin_checkout_1', {});
    }
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead');
    }
  }, []);

  return (
    <>
      {/* Google Ads Conversion Tracking */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-CONVERSION_ID"
        strategy="afterInteractive"
      />
      <Script id="google-ads" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-CONVERSION_ID');
        `}
      </Script>

      {/* Meta Pixel */}
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 'YOUR_PIXEL_ID');
          fbq('track', 'PageView');
        `}
      </Script>

      <div className="min-h-screen bg-[var(--surface-base)]">
        <section className="py-16 md:py-24 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            {/* Step 1: VSL Section */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-14"
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-light text-[var(--color-off-black)] leading-[1.15] tracking-tight mb-4">
                The Exact AI System we built our clients to generate{' '}
                <span className="font-serif font-normal text-[var(--color-trust)]">$353,912 GCI</span> in every 30 days…
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-serif text-[var(--color-ink-300)] mb-6">
                Step 1: Watch the full video below
              </p>
              <div className="relative mx-auto max-w-xl aspect-video rounded-md overflow-hidden border border-[var(--color-ink-200)] bg-black shadow-sm">
                <iframe
                  src="https://www.loom.com/embed/5d4a7e47744d4d86ba14c888e5f0b8cf"
                  title="The Exact AI System - VSL"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </motion.div>

            {/* Step 2: Strategy Call Section */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <p className="text-lg sm:text-xl md:text-2xl font-serif text-[var(--color-ink-300)] mb-6">
                Step 2: See if we can help you below
              </p>
              <div className="mx-auto max-w-xl overflow-hidden rounded-md border border-[var(--color-ink-200)] bg-white shadow-sm min-h-[420px]">
                <Script src="https://app.aura-app.ai/aura-embed.js" strategy="lazyOnload" />
                <iframe
                  data-aura-embed
                  src={buildAuraUrl()}
                  title="The Strategy Call - Booking"
                  loading="lazy"
                  className="w-full border-0 min-h-[420px]"
                />
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[var(--surface-base)] flex items-center justify-center font-serif text-[var(--color-ink-300)]">Loading…</div>}>
      <ThankYouContent />
    </Suspense>
  );
}
