'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Script from 'next/script';
import Image from 'next/image';
import ClientLogosSlider from '@/components/ClientLogosSlider';
import ReviewsAggregate from '@/components/ReviewsAggregate';
import LandingCaseStudies from '@/components/landing/LandingCaseStudies';

const HERO_VIDEOS = [
  '/videos/entry-of-a-luxury-home-2026-01-21-18-28-02-utc (1).mp4',
  '/videos/interior-of-a-luxury-home-fountain-2026-01-21-18-30-07-utc (1).mp4',
  '/videos/rich-lifestyle-expensive-luxury-home-in-south-flor-2026-01-20-16-10-30-utc (1).mp4',
];

export default function GoogleDirectLandingPage() {
  const [showFloatingReviews, setShowFloatingReviews] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

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

  // Hero video cycle - same as home page
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % HERO_VIDEOS.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        index === currentVideoIndex ? video.play().catch(() => {}) : video.pause();
      }
    });
  }, [currentVideoIndex]);

  // Detect hero scroll past
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        const heroBottom = heroRef.current.offsetTop + heroRef.current.offsetHeight;
        setShowFloatingReviews(scrollY > heroBottom);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
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
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-CONVERSION_ID');
        `}
      </Script>

      <div className="min-h-screen bg-[var(--surface-base)]" style={{ WebkitOverflowScrolling: 'touch' }}>
        {/* Hero Section - Full Viewport Video Background (Sotheby's luxury style) */}
        <section ref={heroRef} className="gd-hero-section">
          {/* Video Backgrounds - Same 3 videos as home page */}
          <div className="hero-video-container">
            {HERO_VIDEOS.map((videoSrc, index) => (
              <video
                key={videoSrc}
                ref={(el) => { videoRefs.current[index] = el; }}
                className={`hero-video ${index === currentVideoIndex ? 'hero-video-active' : 'hero-video-hidden'}`}
                muted
                loop
                playsInline
                preload={index === 0 ? 'metadata' : 'none'}
              >
                <source src={videoSrc} type="video/mp4" />
              </video>
            ))}
            <div className="hero-overlay gd-hero-overlay" />
          </div>

          {/* Hero Content - Text hooks */}
          <div className="gd-hero-content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex items-center justify-center mb-6 sm:mb-8"
            >
              <div className="inline-flex items-center gap-2 sm:gap-3 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/30 rounded-full">
                <span className="text-sm sm:text-base text-white/95 font-serif tracking-[0.15em] uppercase">5 stars since 2022</span>
                <div className="flex items-center gap-2">
                  <Image
                    src="/images/Untitled design (81).png"
                    alt="Trustpilot"
                    width={72}
                    height={24}
                    className="h-4 sm:h-5 w-auto object-contain brightness-0 invert opacity-90"
                  />
                  <Image
                    src="/images/Google__G__logo.svg.png"
                    alt="Google"
                    width={58}
                    height={19}
                    className="h-3 sm:h-4 w-auto object-contain brightness-0 invert opacity-90"
                  />
                </div>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="gd-hero-title"
            >
              Finally The <em>Boring System Top Agents</em> Use to Turn Website Traffic Into <em>Daily Buyer &amp; Seller Conversations!</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="gd-hero-subtitle"
            >
              Your website is a brochure. Your competitors built a machine.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 sm:mt-14"
            >
              <motion.button
                onClick={() => {
                  const embedSection = document.getElementById('aura-embed-section');
                  embedSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="gd-cta-primary"
              >
                Book Your Strategy Call
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button>
              <motion.button
                onClick={() => document.getElementById('aura-embed-section')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ opacity: 0.9 }}
                whileTap={{ scale: 0.98 }}
                className="gd-cta-outline"
              >
                See How It Works
              </motion.button>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="cursor-pointer"
                onClick={() => document.querySelector('section:nth-of-type(2)')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <svg className="w-6 h-6 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Floating CTA & Reviews - Bottom Left (Sotheby's refined) */}
        <motion.div
          initial={{ opacity: 0, x: -60, y: 40 }}
          animate={{
            opacity: showFloatingReviews ? 1 : 0,
            x: showFloatingReviews ? 0 : -60,
            y: showFloatingReviews ? 0 : 40,
          }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className={`fixed bottom-6 left-6 z-40 ${showFloatingReviews ? 'pointer-events-auto' : 'pointer-events-none'}`}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-[var(--color-off-black)] backdrop-blur-md border border-white/10 shadow-xl">
              <span className="text-sm text-white/95 font-serif tracking-[0.12em] uppercase">5 stars since 2022</span>
              <div className="flex items-center gap-2">
                <Image src="/images/Untitled design (81).png" alt="Trustpilot" width={72} height={24} className="h-4 w-auto object-contain brightness-0 invert opacity-90" />
                <Image src="/images/Google__G__logo.svg.png" alt="Google" width={58} height={19} className="h-3 w-auto object-contain brightness-0 invert opacity-90" />
              </div>
            </div>
            <motion.button
              onClick={() => document.getElementById('aura-embed-section')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-5 py-3 bg-[var(--color-trust)] text-white font-serif text-sm uppercase tracking-[0.12em] border-0 cursor-pointer"
            >
              Book Now
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </div>
        </motion.div>

        {/* Scrolling Agencies */}
        <ClientLogosSlider />

        {/* Horizontal Scrolling Reviews - Refined luxury */}
        <section className="relative py-10 sm:py-14 md:py-20 bg-[var(--surface-base)] overflow-hidden border-y border-[var(--color-ink-200)]">
          {/* Left fade gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 md:w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          {/* Right fade gradient */}
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 md:w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div 
            className="flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12"
            style={{
              animation: 'scroll-horizontal 40s linear infinite',
              width: 'fit-content',
            }}
          >
            {[
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
                text: 'We started working with Andrew about a month ago. He\'s articulate, responsive, and provides amazing weekly updates.',
                rating: 5,
              },
              {
                name: 'Rick Gruebele',
                text: 'Exceptional SEO services. As the Broker/Owner of Visions First Realty, I cannot speak highly enough of DMR Media\'s exceptional SEO services.',
                rating: 5,
              },
            ].map((review, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[280px] sm:w-80 md:w-96 p-4 sm:p-6 border border-[var(--color-ink-200)] bg-[var(--surface-base)]"
              >
                <div className="flex gap-1 mb-2 sm:mb-3">
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
                <blockquote className="text-[18px] sm:text-[20px] md:text-[22px] text-[var(--color-off-black)] leading-relaxed font-serif mb-3 sm:mb-4">
                  &quot;{review.text}&quot;
                </blockquote>
                <p className="text-[16px] sm:text-[18px] md:text-[22px] font-serif font-light text-[var(--color-off-black)]">
                  - {review.name}
                </p>
              </div>
            ))}
            {/* Duplicate for seamless scroll */}
            {[
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
                text: 'We started working with Andrew about a month ago. He\'s articulate, responsive, and provides amazing weekly updates.',
                rating: 5,
              },
              {
                name: 'Rick Gruebele',
                text: 'Exceptional SEO services. As the Broker/Owner of Visions First Realty, I cannot speak highly enough of DMR Media\'s exceptional SEO services.',
                rating: 5,
              },
            ].map((review, index) => (
              <div
                key={`dup-${index}`}
                className="flex-shrink-0 w-[280px] sm:w-80 md:w-96 p-4 sm:p-6 border border-[var(--color-ink-200)] bg-[var(--surface-base)]"
              >
                <div className="flex gap-1 mb-2 sm:mb-3">
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
                <blockquote className="text-[18px] sm:text-[20px] md:text-[22px] text-[var(--color-off-black)] leading-relaxed font-serif mb-3 sm:mb-4">
                  &quot;{review.text}&quot;
                </blockquote>
                <p className="text-[16px] sm:text-[18px] md:text-[22px] font-serif font-light text-[var(--color-off-black)]">
                  - {review.name}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Booking Embed Section - Dark luxury block (visual hook) */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-[var(--color-off-black)]">
          <div className="container-max max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
              {/* Left Side - Copy */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="order-2 lg:order-1"
              >
                <span className="inline-block text-xs sm:text-sm text-white/60 font-serif uppercase tracking-[0.2em] mb-4">
                  Strategy Call
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-light leading-[1.12] tracking-tight mb-6 !text-white">
                  Our agents are getting Buyer &amp; Seller Leads for less than $10.
                </h2>
                <p className="text-[17px] sm:text-[19px] text-white/80 font-serif mb-8 leading-relaxed">
                  Book your 1-to-1 demo to see how we get you Daily Buyer &amp; Seller Conversions.
                </p>
                <motion.button
                  onClick={() => document.getElementById('aura-embed-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--color-trust)] text-white font-serif text-base uppercase tracking-[0.12em] border-0 cursor-pointer"
                >
                  Schedule Your Call
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.button>
              </motion.div>

              {/* Right Side - Embed */}
              <motion.div
                id="aura-embed-section"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="w-full order-1 lg:order-2"
              >
                <div className="bg-white/5 border border-white/10 p-4 sm:p-6">
                  <Script src="https://app.aura-app.ai/aura-embed.js" strategy="lazyOnload" />
                  <iframe
                    data-aura-embed
                    src="https://app.aura-app.ai/dmr-media/the-strategy-call/embed?theme_preset=light"
                    title="The Strategy Call - Booking"
                    loading="lazy"
                    className="w-full border-0 rounded"
                    style={{ minHeight: '420px' }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Problem Statement - Dramatic typography */}
        <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-[var(--surface-base)]">
          <div className="container-max max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-xl sm:text-2xl md:text-3xl font-serif font-light text-[var(--color-off-black)] leading-[1.35]">
                Most agents don&apos;t have a lead problem.<br />
                <em>They have a conversion and follow-up problem.</em>
              </p>
              <p className="text-[18px] sm:text-[20px] text-[var(--color-ink-300)] font-serif">
                Running ads and hoping someone calls you back in two hours is not a system.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Solution Section - Black block */}
        <section id="solution" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-[var(--color-off-black)]">
          <div className="container-max max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-xl sm:text-2xl md:text-3xl font-serif font-light text-white leading-[1.35]">
                Google and AI aren&apos;t magic.<br />
                They&apos;re simply tools that expand your sphere of influence if your website is built to capture, qualify, and respond instantly.
              </p>
              <p className="text-[18px] sm:text-[20px] text-white/75 font-serif">
                That&apos;s the difference between &quot;leads&quot; and real conversations.
              </p>
              <motion.a
                href="#aura-embed-section"
                onClick={(e) => { e.preventDefault(); document.getElementById('aura-embed-section')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="inline-block mt-8 px-6 py-3 border border-white/4 text-white font-serif text-sm uppercase tracking-[0.12em] hover:bg-white/10 transition-colors"
              >
                Book Your Demo
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* Value Proposition - Numbers that hook */}
        <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-[var(--surface-base)]">
          <div className="container-max max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-8"
            >
              <p className="text-xl sm:text-2xl md:text-3xl font-serif font-light text-[var(--color-off-black)] leading-[1.35]">
                What if instead of paying hundreds for cold, unresponsive leads, you could reliably pay <em className="text-[var(--color-trust)]">$70.93</em> for a real buyer or seller conversation?
              </p>
              
              {/* Formula - Sotheby's card */}
              <div className="mt-8 p-6 sm:p-8 bg-[var(--color-off-black)] border border-[var(--color-ink-200)]">
                <div className="text-center space-y-3">
                  <p className="text-xl sm:text-2xl font-serif text-white">
                    $9.93 ÷ 14% = <em className="text-[var(--color-trust)]">$70.93</em>
                  </p>
                  <p className="text-sm sm:text-base font-serif text-white/65 tracking-[0.05em] uppercase">
                    (Lead) ÷ (Conversation Rate) = Cost per Conversation
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-12">
                <div className="aspect-[4/3] overflow-hidden rounded">
                  <video
                    src="/videos/Google-Ads-Proof.mov"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] overflow-hidden rounded">
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
              <p className="text-[18px] sm:text-[20px] md:text-[22px] text-[var(--color-off-black)] font-serif mt-4">
                KVcore &amp; Google Ads Screenshots
              </p>
            </motion.div>
          </div>
        </section>

        {/* Markets Section */}
        <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6">
          <div className="container-max max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-4 sm:space-y-6"
            >
              <p className="text-[18px] sm:text-[20px] md:text-[22px] font-serif text-[var(--color-off-black)]">
                We&apos;ve built and managed these systems in competitive markets like:
              </p>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-8">
                {['Wisconsin', 'Florida', 'California', 'New Jersey'].map((state) => (
                  <span
                    key={state}
                    className="text-[18px] sm:text-[20px] md:text-[22px] font-serif font-light text-[var(--color-off-black)]"
                  >
                    {state}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section - Full-width hook */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-[var(--color-off-black)]">
          <div className="container-max max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg sm:text-xl text-white/75 font-serif mb-6 uppercase tracking-[0.15em]">
                15 minutes
              </p>
              <p className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-white leading-tight mb-10">
                See exactly where your website is leaking deals
              </p>
              <motion.button
                onClick={() => document.getElementById('aura-embed-section')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-10 py-4 bg-[var(--color-trust)] text-white font-serif text-base uppercase tracking-[0.12em] border-0 cursor-pointer"
              >
                Book Your Strategy Call
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button>
            </motion.div>
          </div>
        </section>


        {/* Problem Statement 2 */}
        <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6">
          <div className="container-max max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4 sm:space-y-6 text-center"
            >
              <p className="text-[18px] sm:text-[20px] md:text-[22px] font-serif text-[var(--color-off-black)]">
                Every month, millions of buyers and sellers search for a real estate agent online.
              </p>
              <p className="text-[18px] sm:text-[20px] md:text-[22px] font-serif text-[var(--color-off-black)]">
                In your market alone, dozens of them are choosing an agent this month.
              </p>
              <p className="text-[18px] sm:text-[20px] md:text-[22px] font-serif font-light text-[var(--color-off-black)]">
                If your website isn&apos;t built to convert and respond instantly, those conversations are going to someone else.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mistake Section - White block contrast */}
        <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-[var(--surface-base)]">
          <div className="container-max max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 sm:space-y-8 text-center"
            >
              <p className="text-xl sm:text-2xl md:text-3xl font-serif font-light text-[var(--color-off-black)] leading-relaxed">
                But if you&apos;re not getting any of these leads you&apos;re making ONE simple mistake.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-12">
                <div className="aspect-[4/3] overflow-hidden rounded">
                  <video
                    src="/videos/Google-Ads-Proof.mov"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] overflow-hidden rounded">
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
              <p className="text-[18px] sm:text-[20px] md:text-[22px] font-serif font-light text-[var(--color-off-black)] mt-6 sm:mt-8">
                This ONE fixed changed this ad account from $200+ per conversation to <em>$70.93</em>.
              </p>
              <p className="text-[18px] sm:text-[20px] md:text-[22px] font-serif text-[var(--color-off-black)]">
                The mistake: treating your website like a destination instead of a conversion system.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Promise Section - Black block */}
        <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-[var(--color-off-black)]">
          <div className="container-max max-w-3xl mx-auto text-center space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xl sm:text-2xl font-serif text-white leading-relaxed"
            >
              No recycled tactics from 2019.<br />
              No vanity leads.<br />
              Just a system that works in today&apos;s market.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[18px] sm:text-[20px] font-serif font-light text-white/75"
            >
              &quot;See why your ads aren&apos;t converting in 2026.&quot;
            </motion.p>
            <motion.a
              href="#aura-embed-section"
              onClick={(e) => { e.preventDefault(); document.getElementById('aura-embed-section')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-block mt-6 px-6 py-3 bg-[var(--color-trust)] text-white font-serif text-sm uppercase tracking-[0.12em] hover:opacity-90 transition-opacity"
            >
              Book Your Call
            </motion.a>
          </div>
        </section>


        {/* Trusted Agencies */}
        <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6">
          <div className="container-max max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xl sm:text-2xl md:text-3xl font-serif font-light text-[var(--color-off-black)] mb-8 sm:mb-12 text-center"
            >
              Trusted Agencies
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
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
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`flex items-center justify-center ${isSmaller ? 'h-10 sm:h-12 md:h-16' : 'h-12 sm:h-16 md:h-20'}`}
                    style={{ opacity: 0.8 }}
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

        {/* Reviews Section - Bottom */}
        <section className="py-16 sm:py-24 md:py-32 bg-white border-t border-[var(--color-ink-200)] px-4 sm:px-6">
          <div className="container-max max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16 md:mb-20"
            >
              <div className="border-b border-[var(--color-ink-200)] pb-6 sm:pb-8 mb-6 sm:mb-8">
                <span className="uppercase tracking-[0.2em] text-[16px] sm:text-[18px] md:text-[22px] text-[var(--color-off-black)] font-serif mb-4 sm:mb-6 block">
                  Trusted by Real Estate Professionals
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] mb-6 sm:mb-8 tracking-tight">
                  What Our Clients Say.
                </h2>
                
                <div className="flex items-center justify-center gap-3 sm:gap-4">
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
                <p className="text-[18px] sm:text-[20px] md:text-[22px] text-[var(--color-off-black)] font-serif mt-4 sm:mt-6">
                  Based on Google &amp; Trustpilot
                </p>
              </div>
            </motion.div>

            {/* Reviews Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
              {/* Video Testimonial */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0 }}
                className="border-b border-[var(--color-ink-200)] pb-6 sm:pb-8"
              >
                <div className="flex gap-1 mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--color-trust)]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="relative w-full mb-4 sm:mb-6" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src="https://www.youtube.com/embed/ng_7ysEAlkc?rel=0&modestbranding=1"
                    title="DMR Media Client Testimonial"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                    style={{ border: 'none' }}
                  />
                </div>
                <div className="pt-4 border-t border-[var(--color-ink-200)]">
                  <p className="text-[18px] sm:text-[20px] md:text-[22px] font-serif font-light text-[var(--color-off-black)]">
                    Video Testimonial
                  </p>
                  <p className="text-[18px] sm:text-[20px] md:text-[22px] text-[var(--color-off-black)] font-serif mt-1">
                    Client Success Story
                  </p>
                </div>
              </motion.div>

              {/* All Reviews */}
              {[
                {
                  id: 1,
                  name: 'Linda Farwell',
                  text: 'They make it easy to understand. We interviewed a few different companies and had follow up meetings with scheduled with them. Once we met with Andrew at DMR, it was a done deal. In one meeting he not only presented himself in clear, easy to understand terms, but was very patient with us in explaining how all this works(this stuff is way over my head) He also gave us instant tips without even knowing if we were going to use him. Once we hung up, we cancelled all the other meetings and decided to go with DMR. They have been fantastic.',
                  rating: 5,
                },
                {
                  id: 2,
                  name: 'Samantha Marquis',
                  text: 'Look No Further. We had been looking into SEO for a bit and interviewed some other companies. After each interview, we walked away feeling like we had to think about it. This was absolutely not the case with DMR. From the start, we knew their company was the right fit. We were thoroughly impressed with their knowledge, their willingness to give us tips immediately, and their easy communication style. SEO can be intimidating and daunting, but DMR holds your hand, answers your questions, and has great follow through. We never feel uncomfortable asking questions and they never make us feel less-then. Every bit of the process we have been through with them thus far has been exceptional. We highly recommend them',
                  rating: 5,
                },
                {
                  id: 3,
                  name: 'William Breaden',
                  text: 'New Real Estate Website coordination. Andrew was great to work with on setting up new Real Estate website and getting everything linked and functional. He was always willing to listen and help guide us through the process to get what we considered to be the best outcome. We highly recommend him.',
                  rating: 5,
                },
                {
                  id: 4,
                  name: 'Iris Harlow',
                  text: 'I worked with DMR and ranked within the first week! It was awesome!',
                  rating: 5,
                },
                {
                  id: 5,
                  name: 'Max De Leonardis',
                  text: 'Built me a great website for my real estate business.',
                  rating: 5,
                },
                {
                  id: 6,
                  name: 'Justin',
                  text: 'Great Communication, True Professionals! Andrew & his team are great communicators and definitely know their stuff. True professionals!',
                  rating: 5,
                },
                {
                  id: 7,
                  name: 'Rick Gruebele',
                  company: 'Visions First Realty',
                  text: 'Exceptional SEO services. As the Broker/Owner of Visions First Realty, I cannot speak highly enough of DMR Media\'s exceptional SEO services. Their strategic approach to improving our online presence has yielded remarkable results, consistently pushing our website to top rankings for key real estate search terms in our market.',
                  rating: 5,
                },
                {
                  id: 8,
                  name: 'Jade Goodhue',
                  text: 'We started working with Andrew about a month ago. He\'s articulate, responsive, and provides amazing weekly updates. He\'s taken the time to really explain what the issues were on why we weren\'t ranking despite all our blogs and videos.',
                  rating: 5,
                },
                {
                  id: 9,
                  name: 'Andy Peterson',
                  text: 'Andrew worked with me personally to completely change my presence online - with a perfect mix of personal and professional. He was always on time, asking the right questions and got it done fast. Highly recommend and will be working with him consistently.',
                  rating: 5,
                },
                {
                  id: 10,
                  name: 'W. John Coletta',
                  text: 'DMR Media Specialists is a top-notch business! They brilliantly transformed my website! They are fast; they are great communicators; and they contacted me every step of the way, making sure that I was satisfied. Not only are they on the ball, but they deliver exceptional results.',
                  rating: 5,
                },
                {
                  id: 11,
                  name: 'Tara Parks',
                  text: 'Andrew is very knowledgeable about building websites and SEO best practices and he completes changes very quickly. I highly recommend DMR Media Specialists for your next project or website build.',
                  rating: 5,
                },
                {
                  id: 12,
                  name: 'Marsha VanArk',
                  text: 'Andrew was so helpful! I asked him to see why my website was coming up in unrelated searches. He went above and beyond to investigate the problems. He provided me with valuable insight and feedback that helped me move forward and solve the problems. Thank you so much, Andrew!!!',
                  rating: 5,
                },
                {
                  id: 13,
                  name: 'Tony Jordan',
                  text: 'I\'ve been working with Andrew for years! Simply put, he\'s an SEO genius!',
                  rating: 5,
                },
                {
                  id: 14,
                  name: 'Jason Rohm',
                  text: 'I hired DMR Media to recreate and update my web presence. I was very happy with the outcome. They have continued to follow up with support and updates after the project was complete.',
                  rating: 5,
                },
                {
                  id: 15,
                  name: 'Allison Shuler',
                  text: 'DMR built a website for the coffee shop that I manage. I worked directly with the owner who was very helpful and provided excellent service! Would definitely recommend DMR to anyone looking for a personalized website to help grow their business!',
                  rating: 5,
                },
              ].map((review, index) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: (index + 1) * 0.05 }}
                  className="border-b border-[var(--color-ink-200)] pb-6 sm:pb-8"
                >
                  <div className="flex gap-1 mb-3 sm:mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--color-trust)]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-[18px] sm:text-[20px] md:text-[22px] text-[var(--color-off-black)] leading-relaxed font-serif mb-4 sm:mb-6">
                    &quot;{review.text}&quot;
                  </blockquote>
                  <div className="pt-3 sm:pt-4 border-t border-[var(--color-ink-200)]">
                    <p className="text-[18px] sm:text-[20px] md:text-[22px] font-serif font-light text-[var(--color-off-black)]">
                      {review.name}
                    </p>
                    {review.company && (
                      <p className="text-[18px] sm:text-[20px] md:text-[22px] text-[var(--color-off-black)] font-serif mt-1">
                        {review.company}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section - Moved to End */}
        <LandingCaseStudies />

      </div>
    </>
  );
}
