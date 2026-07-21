'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import ClientLogosSlider from '@/components/ClientLogosSlider';
import { getStoredUTMParams, trackConversion } from '@/lib/utmTracking';
import { ELFSIGHT_LANDING_HIDE_SELECTORS } from '@/lib/elfsight-widgets';

type WebsiteSample = {
  id: string;
  subheading: string;
  name: string;
  description: string;
  image: string;
  imageRight: boolean;
};

const WEBSITE_SAMPLES: WebsiteSample[] = [
  {
    id: 'legendary-real-estate',
    subheading: 'Wisconsin Realtor of the Year 2025',
    name: 'Legendary Real Estate Services',
    description:
      'A boutique Lake Geneva team that strives to be the Ritz-Carlton of real estate. We built them an upscale, fast, conversion-focused site serving the Geneva Lakes area — from Fontana to Elkhorn and beyond.',
    image: '/images/ClientWebsites/screencapture-legendaryrealestateservices-2026-03-04-03_34_49.png',
    imageRight: true,
  },
  {
    id: 'eagan-luxury',
    subheading: 'Top 5 Individual Agent · Northern Florida (KW)',
    name: 'Eagan Luxury',
    description:
      "Representing the coast's most luxurious residences from St. Petersburg to the Gulf Beaches. Gallery-grade marketing, waterfront collections, and bespoke property presentation — $252M in sales since 2013.",
    image: '/images/screencapture-eaganluxury-2025-12-17-21_25_49.png',
    imageRight: false,
  },
  {
    id: 'florio-team',
    subheading: 'Ranked #35 of 20,000+ Central Florida Realtors',
    name: 'The Florio Team | RE/MAX Town & Country',
    description:
      'An award-winning home team with 600+ closings and 200+ sales annually across five Central Florida counties. A DesignRush Design Awards nominee — built to convert serious buyers and sellers.',
    image: '/images/ClientWebsiteImages/screencapture-florio-team-vercel-app-2026-05-16-15_01_22.png',
    imageRight: true,
  },
  {
    id: 'valoria-homes',
    subheading: 'New-Age Home Builder & Realtors',
    name: 'Valoria Homes',
    description:
      'Custom modular homes for Midwestern families who value durability, efficiency, and craftsmanship. A clean, trust-building site that makes the build process feel effortless.',
    image: '/images/ClientWebsites/screencapture-valoriahomes-2026-03-04-03_34_12.png',
    imageRight: false,
  },
];

const PROPERTY_WEBSITES: WebsiteSample[] = [
  {
    id: 'ocean-breeze',
    subheading: 'Luxury Waterfront Villa · Turks & Caicos',
    name: 'Ocean Breeze',
    description:
      'A $6.5M newly built waterfront estate in Chalk Sound. 6,000 sq ft of cinematic indoor-outdoor living — private dock, rooftop infinity pool, and uninterrupted turquoise views. A single-property site built to match the caliber of the listing.',
    image: '/images/ClientWebsiteImages/screencapture-ocean-breeze-one-vercel-app-2026-03-29-19_49_50.png',
    imageRight: false,
  },
  {
    id: 'obsidian-denver',
    subheading: "Modern Urban Home · Sloan's Lake, Denver CO",
    name: 'Obsidian Denver',
    description:
      "A $1.05M modern half-duplex in Denver's Sloan's Lake neighborhood. Three levels of considered design with rooftop city views. A dedicated property site that puts the architecture front and center.",
    image: '/images/ClientWebsiteImages/screencapture-obsidiandenver-3227-w-20th-ave-denver-co-80211-2026-03-29-19_50_09.png',
    imageRight: true,
  },
];

const FEATURES = [
  {
    title: 'Custom Design, Not a Template',
    description:
      'Every site is designed from scratch around your brand, your market, and your listings — never a recycled theme.',
  },
  {
    title: 'Built to Convert',
    description:
      'Lead capture, IDX/MLS-ready layouts, and clear calls to action engineered to turn visitors into inquiries.',
  },
  {
    title: 'Fast & Found on Google',
    description:
      'Blazing-fast performance and SEO best practices baked in from day one, so buyers and sellers actually find you.',
  },
  {
    title: 'Fully Managed',
    description:
      'We handle design, build, launch, and ongoing updates. You focus on selling homes; we keep your site sharp.',
  },
];

const inputClasses =
  'w-full px-0 py-3.5 text-base border-b-2 border-[var(--color-ink-200)] bg-transparent text-[var(--color-off-black)] font-serif focus:outline-none focus:border-[var(--color-off-black)] transition-colors duration-300 placeholder:text-[var(--color-ink-400)]';

export default function WebsiteDevelopmentLandingPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', website: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const formRef = useRef<HTMLDivElement>(null);

  // Hide header (nav) and AI chatbot for this landing page — KEEP the footer.
  useEffect(() => {
    const nav = document.querySelector('nav') as HTMLElement | null;

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
    hideElfsightWidgets();

    const observer = new MutationObserver(hideElfsightWidgets);
    observer.observe(document.body, { childList: true, subtree: true });
    const intervalId = setInterval(hideElfsightWidgets, 500);

    return () => {
      if (nav) nav.style.display = '';
      observer.disconnect();
      clearInterval(intervalId);
      ELFSIGHT_LANDING_HIDE_SELECTORS.forEach((selector) => {
        try {
          document.querySelectorAll(selector).forEach((el) => {
            (el as HTMLElement).style.display = '';
          });
        } catch (e) {}
      });
    };
  }, []);

  // Scroll progress indicator (top of page to the form)
  useEffect(() => {
    const handleScroll = () => {
      if (!formRef.current) return;
      const formTop = formRef.current.offsetTop;
      const scrolled = window.scrollY;
      const progress = Math.min((scrolled / formTop) * 100, 100);
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.website) return; // Honeypot
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
          source: 'website-development-landing',
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
      trackConversion('Lead', { form_type: 'website_development_landing' });
      router.push(
        `/landing/thank-you?session_id=free_registration&email=${encodeURIComponent(
          formData.email
        )}&name=${encodeURIComponent(formData.name)}&phone=${encodeURIComponent(formData.phone)}`
      );
    } catch (err) {
      setIsSubmitting(false);
      alert(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-white relative">
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-[var(--color-ink-200)] z-50">
        <div
          className="h-full bg-[var(--color-trust)] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            src="/videos/aerial-view-of-luxury-california-home-2026-01-21-12-58-30-utc.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 z-[1]"
            style={{
              background:
                'linear-gradient(180deg, rgba(15,15,15,0.55) 0%, rgba(15,15,15,0.35) 40%, rgba(250,250,249,0.25) 72%, rgba(255,255,255,1) 100%)',
            }}
          />
        </div>

        <div className="relative z-10 w-full pt-24 pb-20">
          <div className="container-max">
            <div className="max-w-4xl mx-auto text-center">
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="uppercase tracking-[0.25em] text-sm text-white font-serif block mb-6 [text-shadow:0_2px_8px_rgba(0,0,0,0.9)]"
              >
                Real Estate Website Development
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light !text-white leading-[1.08] tracking-tight mb-6 [text-shadow:0_2px_8px_rgba(0,0,0,0.9),0_4px_24px_rgba(0,0,0,0.8)]"
              >
                Websites That Make Agents Look Like the Only Choice
                <span className="text-[var(--color-trust)]">.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-xl sm:text-2xl font-serif text-white leading-relaxed max-w-2xl mx-auto mb-10 [text-shadow:0_2px_8px_rgba(0,0,0,0.9)]"
              >
                Custom-designed, conversion-focused websites for agents, teams, and brokers — earning 5-stars from top producers since 2022.
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={scrollToForm}
                className="inline-flex items-center gap-3 rounded-full px-8 py-4 bg-[var(--color-off-black)] text-white uppercase tracking-[0.3em] text-sm font-semibold hover:bg-black transition-colors duration-300"
              >
                Request a Quote
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      <ClientLogosSlider />

      {/* Why DMR / Features */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-max">
          <div className="max-w-3xl mb-14 px-6 sm:px-10 md:px-0">
            <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-ink-400)] font-serif mb-2">
              Why DMR Media
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.15]">
              A website built to win listings, not just look good.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 sm:px-10 md:px-0">
            {FEATURES.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-[24px] border border-[var(--color-ink-200)] bg-white p-8 hover:border-[var(--color-trust)] transition-colors duration-300"
              >
                <h3 className="text-xl font-serif font-light text-[var(--color-off-black)] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[15px] text-[var(--color-ink-300)] font-serif leading-[1.7]">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Agent & Team Website Portfolio */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-max">
          <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-ink-400)] font-serif mb-2 px-6 sm:px-10 md:px-0">
            Agent &amp; Team Websites
          </p>
          <h2 className="text-2xl sm:text-3xl font-serif font-light text-[var(--color-off-black)] tracking-tight mb-16 px-6 sm:px-10 md:px-0">
            Custom websites for agents, teams &amp; brokers.
          </h2>
        </div>
        <div className="container-max space-y-0">
          {WEBSITE_SAMPLES.map((sample) => (
            <article
              key={sample.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch overflow-visible mb-24 md:mb-32 last:mb-0"
            >
              <div
                className={`flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 py-12 lg:py-24 order-2 ${
                  sample.imageRight ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-ink-400)] font-serif mb-4">
                  {sample.subheading}
                </p>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] mb-6 tracking-tight leading-[1.15]">
                  {sample.name}
                </h3>
                <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7] max-w-xl">
                  {sample.description}
                </p>
                <button
                  onClick={scrollToForm}
                  className="mt-8 text-[11px] uppercase tracking-[0.25em] text-[var(--color-off-black)] font-serif hover:opacity-60 transition-opacity border-b border-[var(--color-off-black)] pb-1 w-fit"
                >
                  Get a site like this
                </button>
              </div>
              <div
                className={`relative order-1 m-6 sm:m-10 lg:m-12 ${
                  sample.imageRight ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <div className="relative block min-h-[320px] sm:min-h-[400px] lg:min-h-[480px] overflow-hidden bg-[var(--color-ink-200)]">
                  <Image
                    src={sample.image}
                    alt={`${sample.name} — real estate agent website example`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Single-property Websites */}
      <section className="py-16 md:py-24 bg-[var(--color-ink-100)]">
        <div className="container-max">
          <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-ink-400)] font-serif mb-2 px-6 sm:px-10 md:px-0">
            Single-property Websites
          </p>
          <h2 className="text-2xl sm:text-3xl font-serif font-light text-[var(--color-off-black)] tracking-tight mb-16 px-6 sm:px-10 md:px-0">
            Dedicated sites built for individual listings.
          </h2>
        </div>
        <div className="container-max space-y-0">
          {PROPERTY_WEBSITES.map((sample) => (
            <article
              key={sample.id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch overflow-visible mb-24 md:mb-32 last:mb-0"
            >
              <div
                className={`flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 py-12 lg:py-24 order-2 ${
                  sample.imageRight ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-ink-400)] font-serif mb-4">
                  {sample.subheading}
                </p>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] mb-6 tracking-tight leading-[1.15]">
                  {sample.name}
                </h3>
                <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7] max-w-xl">
                  {sample.description}
                </p>
                <button
                  onClick={scrollToForm}
                  className="mt-8 text-[11px] uppercase tracking-[0.25em] text-[var(--color-off-black)] font-serif hover:opacity-60 transition-opacity border-b border-[var(--color-off-black)] pb-1 w-fit"
                >
                  Get a site like this
                </button>
              </div>
              <div
                className={`relative order-1 m-6 sm:m-10 lg:m-12 ${
                  sample.imageRight ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <div className="relative block min-h-[320px] sm:min-h-[400px] lg:min-h-[480px] overflow-hidden bg-[var(--color-ink-200)]">
                  <Image
                    src={sample.image}
                    alt={`${sample.name} — single-property website example`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Lead Form */}
      <section
        id="quote-form"
        ref={formRef}
        className="py-20 md:py-28 bg-gradient-to-br from-white via-white to-[var(--color-ink-100)]"
      >
        <div className="container-max">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[var(--color-trust)] font-semibold mb-4">
                Request a Quote
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[var(--color-off-black)] mb-5 tracking-tight">
                Let&apos;s build your website
                <span className="text-[var(--color-trust)]">.</span>
              </h2>
              <p className="text-lg text-[var(--color-ink-300)] font-serif leading-relaxed">
                Tell us where to reach you and we&apos;ll send over pricing, timelines, and examples tailored to your market.
              </p>
            </div>

            <div className="rounded-[32px] border-2 border-[var(--color-trust)] bg-white shadow-[0_24px_64px_rgba(15,15,15,0.10)] px-8 py-12 md:px-12 md:py-14">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Honeypot */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  className="hidden"
                  aria-hidden="true"
                />

                <div>
                  <label
                    htmlFor="name"
                    className="block text-[11px] uppercase tracking-[0.3em] text-[var(--color-ink-400)] font-serif mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={inputClasses}
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-[11px] uppercase tracking-[0.3em] text-[var(--color-ink-400)] font-serif mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={inputClasses}
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-[11px] uppercase tracking-[0.3em] text-[var(--color-ink-400)] font-serif mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={inputClasses}
                    placeholder="(555) 123-4567"
                  />
                </div>

                <p className="text-xs text-[var(--color-ink-400)] leading-relaxed text-center">
                  By submitting, you agree to receive communications from DMR Media, including phone calls, text
                  messages (SMS), and emails. You may opt out at any time. See our{' '}
                  <a
                    href="/privacy-policy"
                    className="text-[var(--color-trust)] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </a>
                  .
                </p>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-3 rounded-full px-8 py-5 bg-[var(--color-off-black)] text-white uppercase tracking-[0.3em] text-sm font-semibold hover:bg-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                >
                  {isSubmitting ? 'Submitting…' : 'Request My Quote'}
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
