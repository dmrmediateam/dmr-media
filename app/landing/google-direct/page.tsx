'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Script from 'next/script';
import Image from 'next/image';
import ClientLogosSlider from '@/components/ClientLogosSlider';
import LandingCaseStudies from '@/components/landing/LandingCaseStudies';
import { getStoredUTMParams, trackConversion } from '@/lib/utmTracking';

const VSL_VIDEO_ID = 'Cty5rQPwksM';

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
  const heroRef = useRef<HTMLElement>(null);
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

  // Show sticky CTA after scrolling past hero
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        const heroBottom = heroRef.current.offsetTop + heroRef.current.offsetHeight;
        setShowFloatingCTA(scrollY > heroBottom);
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
                  Get More Real Estate Buyers &amp; Sellers with the Same AI System that got our agents{' '}
                  <em className="not-italic font-serif font-normal text-[var(--color-trust)]">$353,912 GCI</em> in under 30 days
                </h2>
                <p className="text-base sm:text-lg md:text-xl font-serif text-[var(--color-ink-300)] leading-relaxed mb-8">
                  Enter your details below to claim your free training. We&apos;ll show you exactly how our system converts traffic into qualified buyer and seller conversations—and where yours might be leaking deals.
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
                    {isSubmitting ? 'Submitting…' : 'Get Free Training'}
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
              Ready for your free training?
            </p>
            <motion.button
              onClick={scrollToBook}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-[48px] px-8 py-3 bg-[var(--color-trust)] text-white uppercase tracking-[0.12em] text-sm font-serif hover:opacity-90 transition-opacity"
              whileTap={{ scale: 0.98 }}
            >
              Get Free Training
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

        {/* ═══════════════════════════════════════════════════════════════
            HERO SECTION - VSL video, trust badge, CTA
            ═══════════════════════════════════════════════════════════════ */}
        <section
          ref={heroRef}
          className="relative bg-white pt-10 sm:pt-14 md:pt-16 pb-10 sm:pb-12"
        >
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 max-w-6xl mx-auto flex flex-col items-center text-center">
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 sm:mb-5 flex justify-center"
            >
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
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[var(--color-off-black)] leading-[1.08] tracking-tight mb-5 sm:mb-6 max-w-3xl"
            >
              Get More Real Estate Buyers &amp; Sellers with the Same AI System that got our agents{' '}
              <em className="not-italic font-serif font-normal text-[var(--color-trust)]">$353,912 GCI</em> in under 30 days
            </motion.h1>

            {/* VSL Video */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full max-w-3xl mx-auto mb-6 sm:mb-7 aspect-video rounded overflow-hidden bg-[var(--color-ink-200)]"
            >
              <iframe
                src={`https://www.youtube.com/embed/${VSL_VIDEO_ID}?rel=0`}
                title="DMR Media - Get More Real Estate Buyers & Sellers"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              />
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-center gap-3"
            >
              <motion.button
                onClick={scrollToBook}
                className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 bg-[var(--color-trust)] text-white uppercase tracking-[0.12em] text-sm font-serif hover:opacity-90 transition-opacity duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Free Training
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
              <p className="text-sm sm:text-base font-serif text-[var(--color-ink-400)]">
                Free training · No obligation · We&apos;ll be in touch
              </p>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            PROBLEM AWARENESS
            ═══════════════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-white">
          <div className="container-max max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-light text-[var(--color-off-black)] mb-6 leading-relaxed">
                Most agents don&apos;t have a lead problem.
              </h2>
              <p className="text-xl sm:text-2xl font-serif font-normal text-[var(--color-off-black)]">
                They have a <em>conversion</em> and <em>follow-up</em> problem.
              </p>
              <p className="mt-6 text-base sm:text-lg font-serif text-[var(--color-ink-300)]">
                Running ads and hoping someone calls back in two hours is not a system.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            SOLUTION CLARITY (How It Works)
            ═══════════════════════════════════════════════════════════════ */}
        <section id="how-it-works" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-[var(--surface-base)]">
          <div className="container-max max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-6"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] leading-tight">
                Google and AI aren&apos;t magic.
              </h2>
              <p className="text-lg sm:text-xl font-serif text-[var(--color-ink-300)] leading-relaxed">
                They&apos;re tools that expand your sphere of influence—<em>if</em> your website is built to capture, qualify, and respond instantly.
              </p>
              <p className="text-lg sm:text-xl font-serif font-light text-[var(--color-off-black)]">
                That&apos;s the difference between &quot;leads&quot; and real conversations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            PROOF - Value prop + formula + screenshots
            ═══════════════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-white">
          <div className="container-max max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-8"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] leading-tight">
                What if instead of hundreds per cold lead, you paid{' '}
                <em className="not-italic font-normal text-[var(--color-trust)]">$70.93</em> for a real conversation?
              </h2>

              <div className="p-6 sm:p-8 bg-[var(--surface-base)] border border-[var(--color-ink-200)]">
                <p className="text-xl sm:text-2xl font-serif text-[var(--color-off-black)]">
                  $9.93 ÷ 14% = <em className="font-normal">$70.93</em>
                </p>
                <p className="mt-2 text-sm sm:text-base font-serif text-[var(--color-ink-400)]">
                  (Lead cost) ÷ (conversion rate) = Cost per conversation
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                <div className="aspect-[4/3] overflow-hidden rounded-sm">
                  <video
                    src="/videos/Google-Ads-Proof.mov"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] overflow-hidden rounded-sm">
                  <video
                    src="/videos/Boldtrail-Proof.mov"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <p className="text-sm sm:text-base font-serif text-[var(--color-ink-400)]">
                KVcore &amp; Google Ads proof
              </p>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            AUTHORITY - Markets
            ═══════════════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-[var(--surface-base)]">
          <div className="container-max max-w-3xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-lg sm:text-xl font-serif text-[var(--color-off-black)]"
            >
              Built and managed in competitive markets:{' '}
              <span className="font-light">Wisconsin · Florida · California · New Jersey</span>
            </motion.p>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            OBJECTION HANDLING - The mistake
            ═══════════════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-white">
          <div className="container-max max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-8"
            >
              <h2 className="text-2xl sm:text-3xl font-serif font-light text-[var(--color-off-black)] leading-tight">
                If you&apos;re not getting these results, you&apos;re making <em>one</em> simple mistake.
              </h2>
              <p className="text-lg sm:text-xl font-serif text-[var(--color-ink-300)]">
                Treating your website like a destination instead of a <em>conversion system</em>.
              </p>
              <p className="text-base sm:text-lg font-serif text-[var(--color-off-black)]">
                That single fix took this ad account from $200+ per conversation to <strong className="text-[var(--color-trust)]">$70.93</strong>.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            PROMISE + URGENCY
            ═══════════════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-[var(--surface-base)]">
          <div className="container-max max-w-3xl mx-auto text-center space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-lg sm:text-xl font-serif text-[var(--color-off-black)]"
            >
              No recycled tactics from 2019. No vanity leads.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg sm:text-xl font-serif font-light text-[var(--color-ink-300)]"
            >
              Just a system that works in today&apos;s market.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg font-serif text-[var(--color-ink-400)]"
            >
              Every month, dozens of buyers and sellers in your market choose an agent. If your website isn&apos;t built to convert, those conversations go elsewhere.
            </motion.p>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            STRONG CTA
            ═══════════════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-[var(--color-off-black)]">
          <div className="container-max max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light !text-white mb-6 leading-tight">
                Get the free training that turns traffic into daily buyer &amp; seller conversations.
              </h2>
              <motion.button
                onClick={scrollToBook}
                className="inline-flex items-center justify-center gap-2 min-h-[56px] px-10 py-4 bg-[var(--color-trust)] text-white uppercase tracking-[0.12em] text-base sm:text-lg font-serif hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Free Training
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Trusted Agencies */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white">
          <div className="container-max max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xl sm:text-2xl font-serif font-light text-[var(--color-off-black)] mb-10 sm:mb-14 text-center"
            >
              Trusted Agencies
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 lg:gap-12">
              {[
                '/images/ClientLogos/Untitled design (71).png',
                '/images/ClientLogos/Untitled design (63).png',
                '/images/ClientLogos/Untitled design (73).png',
                '/images/ClientLogos/Untitled design (65).png',
                '/images/ClientLogos/Untitled design (74).png',
                '/images/ClientLogos/Untitled design (67).png',
                '/images/ClientLogos/Untitled design (72).png',
              ].map((logo, index) => {
                const isSmaller = [
                  '/images/ClientLogos/Untitled design (71).png',
                  '/images/ClientLogos/Untitled design (73).png',
                  '/images/ClientLogos/Untitled design (74).png',
                  '/images/ClientLogos/Untitled design (72).png',
                ].includes(logo);
                return (
                  <motion.div
                    key={logo}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className={`flex items-center justify-center opacity-80 ${isSmaller ? 'h-10 sm:h-12 md:h-14' : 'h-12 sm:h-16 md:h-20'}`}
                  >
                    <Image
                      src={logo}
                      alt={`Trusted agency logo ${index + 1}`}
                      width={200}
                      height={80}
                      className="h-full w-auto object-contain"
                      loading="lazy"
                      sizes="(max-width: 640px) 80px, (max-width: 768px) 100px, 200px"
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-20 sm:py-28 md:py-36 bg-white border-t border-[var(--color-ink-200)] px-4 sm:px-6">
          <div className="container-max max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14 sm:mb-20"
            >
              <span className="uppercase tracking-[0.2em] text-sm sm:text-base text-[var(--color-ink-400)] font-serif block mb-4">
                Trusted by Real Estate Professionals
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] mb-6 tracking-tight">
                What Our Clients Say
              </h2>
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="text-4xl sm:text-5xl md:text-6xl font-serif font-light text-[var(--color-off-black)]">
                  5
                </span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[var(--color-trust)]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-base sm:text-lg font-serif text-[var(--color-ink-400)]">
                Based on Google &amp; Trustpilot
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12">
              {/* Video Testimonial */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="border-b border-[var(--color-ink-200)] pb-8"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-[var(--color-trust)]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="relative w-full mb-4" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src="https://www.youtube.com/embed/ng_7ysEAlkc?rel=0&modestbranding=1"
                    title="DMR Media Client Testimonial"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full rounded-sm"
                    style={{ border: 'none' }}
                  />
                </div>
                <p className="text-base font-serif font-light text-[var(--color-off-black)]">
                  Video Testimonial · Client Success Story
                </p>
              </motion.div>

              {[
                { id: 1, name: 'Linda Farwell', text: 'They make it easy to understand. We interviewed a few different companies and had follow up meetings with scheduled with them. Once we met with Andrew at DMR, it was a done deal. In one meeting he not only presented himself in clear, easy to understand terms, but was very patient with us in explaining how all this works(this stuff is way over my head) He also gave us instant tips without even knowing if we were going to use him. Once we hung up, we cancelled all the other meetings and decided to go with DMR. They have been fantastic.', rating: 5 },
                { id: 2, name: 'Samantha Marquis', text: 'Look No Further. We had been looking into SEO for a bit and interviewed some other companies. After each interview, we walked away feeling like we had to think about it. This was absolutely not the case with DMR. From the start, we knew their company was the right fit.', rating: 5 },
                { id: 3, name: 'William Breaden', text: 'New Real Estate Website coordination. Andrew was great to work with on setting up new Real Estate website and getting everything linked and functional. He was always willing to listen and help guide us through the process to get what we considered to be the best outcome. We highly recommend him.', rating: 5 },
                { id: 4, name: 'Iris Harlow', text: 'I worked with DMR and ranked within the first week! It was awesome!', rating: 5 },
                { id: 5, name: 'Rick Gruebele', company: 'Visions First Realty', text: "Exceptional SEO services. As the Broker/Owner of Visions First Realty, I cannot speak highly enough of DMR Media's exceptional SEO services. Their strategic approach to improving our online presence has yielded remarkable results.", rating: 5 },
                { id: 6, name: 'Jade Goodhue', text: "We started working with Andrew about a month ago. He's articulate, responsive, and provides amazing weekly updates. He's taken the time to really explain what the issues were on why we weren't ranking despite all our blogs and videos.", rating: 5 },
              ].map((review, index) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index + 1) * 0.05 }}
                  className="border-b border-[var(--color-ink-200)] pb-8"
                >
                  <div className="flex gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-[var(--color-trust)]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-base sm:text-lg text-[var(--color-off-black)] leading-relaxed font-serif mb-4">
                    &quot;{review.text}&quot;
                  </blockquote>
                  <div className="pt-3 border-t border-[var(--color-ink-200)]">
                    <p className="text-base font-serif font-light text-[var(--color-off-black)]">{review.name}</p>
                    {review.company && <p className="text-sm font-serif text-[var(--color-ink-400)] mt-0.5">{review.company}</p>}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <LandingCaseStudies />
      </div>
    </>
  );
}
