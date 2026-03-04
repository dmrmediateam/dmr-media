'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Script from 'next/script';
import Image from 'next/image';
import ClientLogosSlider from '@/components/ClientLogosSlider';
import { getStoredUTMParams, trackConversion } from '@/lib/utmTracking';

const SCROLL_REVIEWS = [
  {
    name: 'Linda Farwell',
    text: 'They make it easy to understand. We interviewed a few different companies and had follow up meetings with scheduled with them. Once we met with Andrew at DMR, it was a done deal.',
    rating: 5,
  },
  {
    name: 'Samantha Marquis',
    text: 'Look No Further. We had been looking into SEO for a bit and interviewed some other companies. After each interview, we walked away feeling like we had to think about it.',
    rating: 5,
  },
  {
    name: 'William Breaden',
    text: 'New Real Estate Website coordination. Andrew was great to work with on setting up new Real Estate website and getting everything linked and functional.',
    rating: 5,
  },
  {
    name: 'Jade Goodhue',
    text: "We started working with Andrew about a month ago. He's articulate, responsive, and provides amazing weekly updates.",
    rating: 5,
  },
  {
    name: 'Rick Gruebele',
    text: "Exceptional SEO services. As the Broker/Owner of Visions First Realty, I cannot speak highly enough of DMR Media's exceptional SEO services.",
    rating: 5,
  },
];

const inputClasses =
  'w-full px-0 py-3.5 text-base border-b-2 border-[var(--color-ink-200)] bg-transparent text-[var(--color-off-black)] font-serif focus:outline-none focus:border-[var(--color-off-black)] transition-colors duration-300 placeholder:text-[var(--color-ink-400)]';

export default function GoogleDirectLandingPage() {
  const router = useRouter();
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', website: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const embedRef = useRef<HTMLDivElement>(null);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.website) return;
    setIsSubmitting(true);
    const utmParams = getStoredUTMParams();
    try {
      const res = await fetch('/api/landing-registration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          website: formData.website,
          source: 'google-direct-landing',
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
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to submit');
      trackConversion('Lead', { form_type: 'google_direct_landing' });
      router.push(
        `/landing/thank-you?session_id=free_registration&email=${encodeURIComponent(formData.email)}&name=${encodeURIComponent(formData.name)}&phone=${encodeURIComponent(formData.phone)}`
      );
    } catch (err) {
      setIsSubmitting(false);
      alert(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
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

  // Show sticky CTA after scrolling past opt-in form
  useEffect(() => {
    const handleScroll = () => {
      if (embedRef.current) {
        const scrollY = window.scrollY;
        const formBottom = embedRef.current.offsetTop + embedRef.current.offsetHeight;
        setShowFloatingCTA(scrollY > formBottom);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToBook = () => {
    embedRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-CONVERSION_ID"
        strategy="afterInteractive"
      />
      <Script id="google-ads" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-CONVERSION_ID');
        `}
      </Script>

      <div
        className={`min-h-screen bg-white transition-[padding] duration-300 ${
          showFloatingCTA ? 'pb-24 sm:pb-20' : ''
        }`}
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {/* ═══════════════════════════════════════════════════════════════
            AUTHORITY - Client logos (above fold)
            ═══════════════════════════════════════════════════════════════ */}
        <section id="authority">
          <ClientLogosSlider />
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            OPT-IN FORM - Primary conversion block
            ═══════════════════════════════════════════════════════════════ */}
        <section
          ref={embedRef}
          className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-[var(--surface-base)]"
        >
          <div className="container-max max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:sticky lg:top-32"
              >
                <div className="mb-4 sm:mb-5">
                  <div className="inline-flex items-center gap-2 sm:gap-3 px-3 py-1.5 border border-[var(--color-ink-200)] rounded-full bg-[var(--surface-base)]">
                    <span className="text-sm sm:text-base font-serif text-[var(--color-off-black)] whitespace-nowrap">
                      5 stars since 2022
                    </span>
                    <div className="flex items-center gap-2">
                      <Image
                        src="/images/Untitled design (81).png"
                        alt="Trustpilot"
                        width={72}
                        height={24}
                        className="h-3.5 sm:h-4 w-auto object-contain"
                      />
                      <Image
                        src="/images/Google__G__logo.svg.png"
                        alt="Google"
                        width={58}
                        height={19}
                        className="h-2.5 sm:h-3 w-auto object-contain"
                      />
                    </div>
                  </div>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-serif font-light text-[var(--color-off-black)] leading-[1.08] tracking-tight mb-6">
                  80% of Realtors will fail within the few years. Instead, get the Free AI System That Generated <em className="not-italic font-serif font-normal text-[var(--color-trust)]">$353,912 GCI</em> For Agents In Under 30 Days.
                </h2>
                <p className="text-base sm:text-lg md:text-xl font-serif text-[var(--color-ink-300)] leading-relaxed mb-8">
                  Enter your email &amp; phone below to get the free video case study that reveals the entire system. We&apos;ll show you exactly how it turns cold traffic into qualified buyer and seller conversations.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="w-full"
              >
                <form onSubmit={handleFormSubmit} className="relative bg-white p-8 md:p-10 space-y-6 rounded-lg border-2 border-[var(--color-trust)] shadow-[0_8px_32px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.04)] ring-4 ring-[var(--color-trust)]/20">
                  <div className="absolute -left-[9999px] w-1 h-1 overflow-hidden" aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      tabIndex={-1}
                      autoComplete="nope"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="name" className="block text-xs uppercase tracking-[0.2em] text-[var(--color-off-black)] mb-2 font-serif font-medium">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={inputClasses}
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs uppercase tracking-[0.2em] text-[var(--color-off-black)] mb-2 font-serif font-medium">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={inputClasses}
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs uppercase tracking-[0.2em] text-[var(--color-off-black)] mb-2 font-serif font-medium">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={inputClasses}
                      placeholder="(920) 555-0123"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[var(--color-trust)] text-white uppercase tracking-[0.15em] text-xs font-serif hover:opacity-90 transition-opacity duration-300 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? 'Submitting…' : 'GET THE FREE VIDEO CASE STUDY'}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            STICKY CTA - Appears after hero scroll
            ═══════════════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: showFloatingCTA ? 1 : 0,
            y: showFloatingCTA ? 0 : 20,
          }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className={`fixed bottom-0 left-0 right-0 z-40 p-4 bg-white/95 backdrop-blur-md border-t border-[var(--color-ink-200)] shadow-[0_-4px_24px_rgba(15,15,15,0.08)] ${
            showFloatingCTA ? 'pointer-events-auto' : 'pointer-events-none'
          }`}
        >
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-base sm:text-lg font-serif text-[var(--color-off-black)] text-center sm:text-left">
              Ready for your free video case study?
            </p>
            <motion.button
              onClick={scrollToBook}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-[48px] px-8 py-3 bg-[var(--color-trust)] text-white uppercase tracking-[0.12em] text-sm font-serif hover:opacity-90 transition-opacity"
              whileTap={{ scale: 0.98 }}
            >
              GET THE FREE VIDEO CASE STUDY
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </motion.div>

        {/* ═══════════════════════════════════════════════════════════════
            SOCIAL PROOF - Scrolling reviews
            ═══════════════════════════════════════════════════════════════ */}
        <section className="relative py-10 sm:py-14 md:py-20 bg-white overflow-hidden border-y border-[var(--color-ink-200)]">
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div
            className="flex items-center gap-4 sm:gap-6 md:gap-8"
            style={{ animation: 'scroll-horizontal 40s linear infinite', width: 'fit-content' }}
          >
            {[...SCROLL_REVIEWS, ...SCROLL_REVIEWS].map((review, index) => (
              <div
                key={`${review.name}-${index}`}
                className="flex-shrink-0 w-[280px] sm:w-80 md:w-96 p-5 sm:p-6 border border-[var(--color-ink-200)] bg-[var(--surface-base)]"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-trust)]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-base sm:text-lg md:text-xl text-[var(--color-off-black)] leading-relaxed font-serif mb-3">
                  &quot;{review.text}&quot;
                </blockquote>
                <p className="text-sm sm:text-base font-serif font-light text-[var(--color-off-black)]">
                  — {review.name}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
