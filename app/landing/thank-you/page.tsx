'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Script from 'next/script';

export default function ThankYouPage() {
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
      
      selectors.forEach(selector => {
        try {
          const elements = document.querySelectorAll(selector) as NodeListOf<HTMLElement>;
          elements.forEach(el => {
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
    // Google Ads conversion tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-CONVERSION_ID/AW-CONVERSION_LABEL',
        'value': 1.0,
        'currency': 'USD'
      });
    }

    // Facebook Pixel conversion
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

      <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-4 md:px-6 min-h-screen flex items-center justify-center">
        {/* Gray fade overlay from top */}
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-gray-900/20 via-gray-900/10 to-transparent pointer-events-none z-0" />
        
        <div className="container-max max-w-4xl mx-auto relative z-10 text-center">
          {/* Reviews Pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center mb-8"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/90 backdrop-blur-sm border border-[var(--color-ink-200)] rounded-full">
              <span className="text-[22px] text-[var(--color-off-black)] font-serif whitespace-nowrap">5 stars since 2022</span>
              <div className="flex items-center gap-2">
                <Image
                  src="/images/Untitled design (81).png"
                  alt="Trustpilot"
                  width={72}
                  height={24}
                  className="h-5 md:h-6 w-auto object-contain"
                />
                <Image
                  src="/images/Google__G__logo.svg.png"
                  alt="Google"
                  width={58}
                  height={19}
                  className="h-4 md:h-5 w-auto object-contain"
                />
              </div>
            </div>
          </motion.div>

          {/* Checkmark Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, type: 'spring', stiffness: 200 }}
            className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[var(--color-trust)]/10 flex items-center justify-center mx-auto mb-8 shadow-lg"
          >
            <svg className="w-10 h-10 md:w-12 md:h-12 text-[var(--color-trust)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </motion.div>

          {/* Thank You Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-serif font-light text-[var(--color-off-black)] leading-[1.1] tracking-tight mb-6"
          >
            Thank You
          </motion.h1>

          {/* Main Message */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[22px] md:text-[28px] text-[var(--color-off-black)] font-serif mb-6 leading-relaxed max-w-2xl mx-auto"
          >
            Our team will be in touch shortly.
          </motion.p>

          {/* Email Check Message */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-[22px] text-[var(--color-ink-300)] font-serif leading-relaxed max-w-2xl mx-auto"
          >
            In the meantime, please check your email for additional information.
          </motion.p>
        </div>
      </section>
    </div>
    </>
  );
}
