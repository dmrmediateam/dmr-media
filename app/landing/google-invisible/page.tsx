'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Script from 'next/script';
import Image from 'next/image';
import ClientLogosSlider from '@/components/ClientLogosSlider';
import LandingCaseStudies from '@/components/landing/LandingCaseStudies';

const HERO_VIDEOS = [
  '/videos/entry-of-a-luxury-home-2026-01-21-18-28-02-utc (1).mp4',
  '/videos/interior-of-a-luxury-home-fountain-2026-01-21-18-30-07-utc (1).mp4',
  '/videos/rich-lifestyle-expensive-luxury-home-in-south-flor-2026-01-20-16-10-30-utc (1).mp4',
];

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
    name: 'Rick Gruebele',
    text: "Exceptional SEO services. As the Broker/Owner of Visions First Realty, I cannot speak highly enough of DMR Media's exceptional SEO services.",
    rating: 5,
  },
  {
    name: 'Jade Goodhue',
    text: "We started working with Andrew about a month ago. He's articulate, responsive, and provides amazing weekly updates.",
    rating: 5,
  },
];

export default function GoogleInvisibleLandingPage() {
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const embedRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentVideoIndex((prev) => (prev + 1) % HERO_VIDEOS.length),
      8000
    );
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentVideoIndex) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      }
    });
  }, [currentVideoIndex]);

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
      <div
        className={`min-h-screen bg-white transition-[padding] duration-300 ${
          showFloatingCTA ? 'pb-24 sm:pb-20' : ''
        }`}
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {/* ═══════════════════════════════════════════════════════════════
            HERO - Headline
            ═══════════════════════════════════════════════════════════════ */}
        <section
          ref={heroRef}
          className="relative min-h-[100dvh] flex items-center overflow-hidden"
        >
          <div className="absolute inset-0 z-0">
            {HERO_VIDEOS.map((src, index) => (
              <video
                key={src}
                ref={(el) => { videoRefs.current[index] = el; }}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  index === currentVideoIndex ? 'opacity-100 z-[1]' : 'opacity-0 z-0'
                }`}
                muted
                loop
                playsInline
                preload={index === 0 ? 'metadata' : 'none'}
              >
                <source src={src} type="video/mp4" />
              </video>
            ))}
            <div
              className="absolute inset-0 z-[2]"
              style={{
                background:
                  'linear-gradient(180deg, rgba(15,15,15,0.5) 0%, rgba(15,15,15,0.35) 30%, rgba(15,15,15,0.25) 60%, rgba(15,15,15,0.6) 100%)',
              }}
            />
          </div>

          <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto pt-20 sm:pt-24">
            <div className="max-w-2xl lg:max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-6 sm:mb-8"
              >
                <div className="inline-flex items-center gap-2 sm:gap-3 px-4 py-2 bg-white/90 backdrop-blur-sm border border-white/20 rounded-full">
                  <span className="text-base sm:text-lg font-serif text-[var(--color-off-black)] whitespace-nowrap">
                    5 stars since 2022
                  </span>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/Untitled design (81).png"
                      alt="Trustpilot"
                      width={72}
                      height={24}
                      className="h-4 sm:h-5 w-auto object-contain"
                    />
                    <Image
                      src="/images/Google__G__logo.svg.png"
                      alt="Google"
                      width={58}
                      height={19}
                      className="h-3 sm:h-4 w-auto object-contain"
                    />
                  </div>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light !text-white leading-[1.08] tracking-tight mb-4 sm:mb-6 [text-shadow:0_2px_20px_rgba(0,0,0,0.4)]"
              >
                Your Visibility Is About to{' '}
                <em className="not-italic font-normal">Disappear</em>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg sm:text-xl md:text-2xl font-serif text-white/95 mb-8 sm:mb-10 max-w-xl [text-shadow:0_1px_12px_rgba(0,0,0,0.5)]"
              >
                AI answers are replacing the search results that send you calls. Agents who adapt now will be recommended. The rest will fade out.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              >
                <motion.button
                  onClick={scrollToBook}
                  className="inline-flex items-center justify-center gap-2 min-h-[52px] px-8 py-4 bg-[var(--color-trust)] text-white uppercase tracking-[0.12em] text-sm sm:text-base font-serif hover:opacity-90 transition-opacity duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Claim Your Visibility Audit
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
                <motion.a
                  href="#whats-changing"
                  className="inline-flex items-center justify-center min-h-[52px] px-8 py-4 border border-white/60 bg-white/10 backdrop-blur-sm text-[#FAFAF9] uppercase tracking-[0.12em] text-sm sm:text-base font-serif hover:bg-white/20 transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  See What&apos;s Changing
                </motion.a>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="mt-6 sm:mt-8 text-sm sm:text-base font-serif text-white/80"
              >
                15 minutes · Free diagnostic · No obligation
              </motion.p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          >
            <motion.button
              onClick={() => document.getElementById('whats-changing')?.scrollIntoView({ behavior: 'smooth' })}
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="p-2 text-white/80 hover:text-white transition-colors"
              aria-label="Scroll to content"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.button>
          </motion.div>
        </section>

        {/* STICKY CTA */}
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
              Ready to see where you stand with AI visibility?
            </p>
            <motion.button
              onClick={scrollToBook}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 min-h-[48px] px-8 py-3 bg-[var(--color-trust)] text-white uppercase tracking-[0.12em] text-sm font-serif hover:opacity-90 transition-opacity"
              whileTap={{ scale: 0.98 }}
            >
              Book Your Free Audit
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </motion.div>

        {/* AUTHORITY - Client logos */}
        <section>
          <ClientLogosSlider />
        </section>

        {/* SOCIAL PROOF - Scrolling reviews */}
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
            OPENING - What is changing
            ═══════════════════════════════════════════════════════════════ */}
        <section id="whats-changing" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-[var(--surface-base)]">
          <div className="container-max max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <span className="uppercase tracking-[0.2em] text-xs sm:text-sm text-[var(--color-ink-400)] font-serif block">
                The Shift
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] leading-[1.15] tracking-tight">
                Search behavior is changing. Your website may stop getting clicks.
              </h2>
              <p className="text-base sm:text-lg font-serif text-[var(--color-ink-300)] leading-relaxed">
                For years, buyers and sellers typed a query, saw a list of links, and chose where to click. Your SEO and Google Ads worked because they put you on that list.
              </p>
              <p className="text-base sm:text-lg font-serif text-[var(--color-ink-300)] leading-relaxed">
                Now Google SGE and ChatGPT answer the question <em>before</em> the user picks a link. The answer includes names, numbers, and recommendations. No click required. The agents and brokerages that appear in those answers gain authority. Everyone else fades.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            AGITATION
            ═══════════════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-white">
          <div className="container-max max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-light text-[var(--color-off-black)] leading-tight">
                The calls will slow. Then they&apos;ll stop.
              </h2>
              <p className="text-base sm:text-lg font-serif text-[var(--color-ink-300)] leading-relaxed">
                You won&apos;t lose your audience overnight. It happens gradually. A few fewer inquiries this quarter. Fewer next year. Meanwhile, agents in your market who are structured for AI search start getting recommended—in ChatGPT, in Google&apos;s AI overviews, in the tools people use before they ever hit &quot;search.&quot;
              </p>
              <p className="text-base sm:text-lg font-serif text-[var(--color-ink-300)] leading-relaxed">
                The agents who adapt early gain a compounding advantage. The ones who wait discover, too late, that their traffic has already been reallocated.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            UNIQUE MECHANISM - AI Authority Layer
            ═══════════════════════════════════════════════════════════════ */}
        <section id="ai-authority" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-[var(--surface-base)]">
          <div className="container-max max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <span className="uppercase tracking-[0.2em] text-xs sm:text-sm text-[var(--color-ink-400)] font-serif block">
                The Response
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] leading-tight">
                The <em className="not-italic font-normal text-[var(--color-trust)]">AI Authority Layer</em>
              </h2>
              <p className="text-base sm:text-lg font-serif text-[var(--color-ink-300)] leading-relaxed">
                Your website can be structured so that Google and ChatGPT recommend you automatically. Not through black-hat tricks. Through clear, authoritative signals that AI models are trained to recognize and cite.
              </p>
              <p className="text-base sm:text-lg font-serif text-[var(--color-ink-300)] leading-relaxed">
                An AI Authority Layer is the underlying architecture that makes you citable. It answers the questions buyers and sellers ask—before they ask them. It presents your expertise in a format AI tools can parse, trust, and surface.
              </p>
              <p className="text-base sm:text-lg font-serif text-[var(--color-off-black)] font-light">
                This isn&apos;t about ranking for more keywords. It&apos;s about being <em>chosen</em>—by the systems that are increasingly deciding who gets seen.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            PROOF
            ═══════════════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-white">
          <div className="container-max max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-light text-[var(--color-off-black)] leading-tight">
                AI answers are already replacing website clicks.
              </h2>
              <p className="text-base sm:text-lg font-serif text-[var(--color-ink-300)] leading-relaxed">
                Ask ChatGPT or Google&apos;s AI &quot;Who are the best real estate agents in [your city]?&quot; The answer doesn&apos;t send you to a search results page. It names names. It gives recommendations. It cites sources—or it doesn&apos;t cite you at all.
              </p>
              <p className="text-base sm:text-lg font-serif text-[var(--color-ink-300)] leading-relaxed">
                In some markets, agents are being chosen before a single search click happens. The buyer gets a list of three agents from an AI tool. Your website never enters the equation.
              </p>
              <p className="text-base sm:text-lg font-serif text-[var(--color-off-black)] font-light">
                The agents who appear in those answers didn&apos;t get there by accident. They built for it.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            FUTURE PACING
            ═══════════════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-[var(--surface-base)]">
          <div className="container-max max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-10"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-light text-[var(--color-off-black)] text-center leading-tight">
                Two futures. One outcome.
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
                <div className="p-6 sm:p-8 bg-white border border-[var(--color-ink-200)]">
                  <h3 className="text-lg sm:text-xl font-serif font-normal text-[var(--color-off-black)] mb-4">
                    Agents who adapt
                  </h3>
                  <p className="text-sm sm:text-base font-serif text-[var(--color-ink-300)] leading-relaxed">
                    They structure their online presence for AI recommendation. They appear when buyers and sellers ask the tools. Their authority compounds. Their pipeline stays full.
                  </p>
                </div>
                <div className="p-6 sm:p-8 bg-[var(--color-off-black)] border border-[var(--color-off-black)]">
                  <h3 className="text-lg sm:text-xl font-serif font-normal !text-white mb-4">
                    Agents who wait
                  </h3>
                  <p className="text-sm sm:text-base font-serif text-white/80 leading-relaxed">
                    They keep doing what worked in 2022. Traffic slips. Inquiries thin. One day they notice they&apos;re no longer in the conversation—they just didn&apos;t hear it stop.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            OFFER + BOOKING - Visibility Audit
            ═══════════════════════════════════════════════════════════════ */}
        <section
          ref={embedRef}
          className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-white"
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
                <span className="uppercase tracking-[0.2em] text-xs sm:text-sm text-[var(--color-ink-400)] font-serif mb-4 block">
                  Free Visibility Audit
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-light text-[var(--color-off-black)] leading-[1.08] tracking-tight mb-6">
                  See Where You Stand Before It&apos;s Too Late
                </h2>
                <p className="text-base sm:text-lg md:text-xl font-serif text-[var(--color-ink-300)] leading-relaxed mb-8">
                  Book a 15-minute visibility audit. We&apos;ll analyze your current online presence against how AI search and recommendation systems are evolving. You&apos;ll leave with a clear picture: where you stand today, where you&apos;re exposed, and what early movers in your market are doing differently.
                </p>
                <p className="text-sm sm:text-base font-serif text-[var(--color-ink-400)] mb-6">
                  This is a diagnostic. Not a sales pitch. No obligation to move forward.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.button
                    onClick={scrollToBook}
                    className="inline-flex items-center justify-center gap-2 min-h-[52px] px-8 py-4 bg-[var(--color-trust)] text-white uppercase tracking-[0.12em] text-sm sm:text-base font-serif hover:opacity-90 transition-opacity"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Book Your Audit
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                  <span className="text-sm font-serif text-[var(--color-ink-400)] self-center">
                    15 minutes · Free · No commitment
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                id="visibility-audit-embed"
                className="w-full"
              >
                <Script src="https://app.aura-app.ai/aura-embed.js" strategy="lazyOnload" />
                <iframe
                  data-aura-embed
                  src="https://app.aura-app.ai/dmr-media/the-strategy-call/embed?theme_preset=light"
                  title="Visibility Audit - Booking"
                  loading="lazy"
                  className="w-full border border-[var(--color-ink-200)] rounded-sm bg-white"
                  style={{ minHeight: '420px' }}
                />
              </motion.div>
            </div>
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
              Built and audited in competitive markets:{' '}
              <span className="font-light">Wisconsin · Florida · California · New Jersey</span>
            </motion.p>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            CTA - Soft but urgent
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
                The shift is already happening. A 15-minute audit costs you nothing. Waiting may cost you everything.
              </h2>
              <motion.button
                onClick={scrollToBook}
                className="inline-flex items-center justify-center gap-2 min-h-[56px] px-10 py-4 bg-[var(--color-trust)] text-white uppercase tracking-[0.12em] text-base sm:text-lg font-serif hover:opacity-90 transition-opacity"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Claim Your Visibility Audit
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
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="border-b border-[var(--color-ink-200)] pb-8"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[var(--color-trust)]" fill="currentColor" viewBox="0 0 20 20">
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
                { id: 1, name: 'Linda Farwell', text: 'They make it easy to understand. We interviewed a few different companies and had follow up meetings with scheduled with them. Once we met with Andrew at DMR, it was a done deal.', rating: 5 },
                { id: 2, name: 'Samantha Marquis', text: 'Look No Further. We had been looking into SEO for a bit and interviewed some other companies. After each interview, we walked away feeling like we had to think about it. This was absolutely not the case with DMR.', rating: 5 },
                { id: 3, name: 'William Breaden', text: 'New Real Estate Website coordination. Andrew was great to work with on setting up new Real Estate website and getting everything linked and functional. He was always willing to listen and help guide us through the process.', rating: 5 },
                { id: 4, name: 'Rick Gruebele', company: 'Visions First Realty', text: "Exceptional SEO services. As the Broker/Owner of Visions First Realty, I cannot speak highly enough of DMR Media's exceptional SEO services. Their strategic approach to improving our online presence has yielded remarkable results.", rating: 5 },
                { id: 5, name: 'Jade Goodhue', text: "We started working with Andrew about a month ago. He's articulate, responsive, and provides amazing weekly updates. He's taken the time to really explain what the issues were on why we weren't ranking despite all our blogs and videos.", rating: 5 },
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
