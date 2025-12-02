'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Testimonials from '@/components/Testimonials';

export default function AddListingsLandingPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Hide header and footer for this landing page
  useEffect(() => {
    const nav = document.querySelector('nav');
    const footer = document.querySelector('footer');
    if (nav) nav.style.display = 'none';
    if (footer) footer.style.display = 'none';
    return () => {
      if (nav) nav.style.display = '';
      if (footer) footer.style.display = '';
    };
  }, []);

  const videoId = 'xO8zNVewNOA';
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&rel=0&modestbranding=1`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Replace with actual form submission endpoint
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: 'add-listings-landing',
          message: 'Registration from Add Listings Landing Page',
        }),
      });
      
      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ name: '', phone: '', email: '' });
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToForm = () => {
    const form = document.getElementById('registration-form');
    form?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const topics = [
    {
      title: 'Google Business Profile',
      subtitle: 'Organic Leads',
      description: 'The exact optimization strategies that get you found by motivated sellers in your market—without spending a dime on ads.',
    },
    {
      title: 'Local Service Ads',
      subtitle: 'Paid Leads',
      description: 'How to dominate Google\'s Local Service Ads without breaking the bank or needing a website.',
    },
    {
      title: 'Long-term Nurture Systems',
      subtitle: 'Automated Follow-up',
      description: 'Build relationships with prospects over time using automated sequences that feel personal, not robotic.',
    },
    {
      title: 'Our Exact Follow Up Systems',
      subtitle: 'Conversion Playbook',
      description: 'The step-by-step process that converts local searches into listing appointments and closed deals.',
    },
  ];

  const caseStudies = [
    {
      id: 'jade-legendary-real-estate',
      title: "Jade's Success Story",
      client: 'Jade Goodhue',
      company: 'Legendary Real Estate Services',
      result: '3x Lead Generation',
      description: 'From frustrated content creator to lead generation powerhouse—how we transformed Jade\'s digital strategy and tripled her inbound leads in one quarter.',
      image: '/images/JadeCRM.png',
    },
    {
      id: 'michael-seo-transformation',
      title: "Michael's SEO Transformation",
      client: 'Michael',
      company: 'Real Estate Professional',
      result: '21x Impressions',
      description: 'From abandoned SEO to 21x impressions growth—how we turned Michael\'s website into a lead machine in just 7.5 weeks.',
      image: '/images/MichealTraffic.png',
    },
    {
      id: 'rick-visions-first-realty',
      title: "Rick's SEO Transformation",
      client: 'Rick Grueble',
      company: 'Visions First Realty',
      result: '2-3 Leads / Day',
      description: 'From misaligned keywords to daily qualified leads—how we fixed Rick\'s SEO strategy and unlocked consistent deal flow.',
      image: '/images/RickAfter.png',
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--surface-base)]">
      {/* Hero Section with VSL */}
      <section className="relative py-12 sm:py-16 lg:py-20">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <div className="text-center mb-8 sm:mb-12">
              <span className="uppercase tracking-[0.35em] text-[10px] text-[var(--color-ink-400)] mb-4 block">
                Free Training
              </span>
              <h1 className="text-[32px] sm:text-[42px] lg:text-[52px] font-serif font-light text-[var(--color-off-black)] leading-[1.05] tracking-tight mb-6">
                How to Add 1–2 Listings Every Month Using ONLY Google Business Profile & LSAs
                <span className="text-[var(--color-trust)] text-[1.05em] align-baseline">.</span>
              </h1>
              <p className="text-base sm:text-lg text-[var(--color-ink-400)] leading-[1.55] max-w-2xl mx-auto mb-8">
                No website needed. Discover the proven system that's helping real estate agents dominate their local markets.
              </p>
              <button
                onClick={scrollToForm}
                className="inline-flex items-center gap-3 rounded-full px-8 py-4 bg-[var(--color-off-black)] text-white uppercase tracking-[0.3em] text-[11px] hover:bg-black transition-colors duration-300"
              >
                Register Now
              </button>
            </div>

            {/* Video Container */}
            <div className="relative w-full rounded-[24px] overflow-hidden border border-[var(--color-ink-200)] bg-white/80 backdrop-blur-sm shadow-[0_24px_64px_rgba(15,15,15,0.08)] mb-12">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src={embedUrl}
                  title="How to Add 1–2 Listings Every Month Using ONLY Google Business Profile & LSAs"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                  style={{ border: 'none' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We'll Cover - Animated */}
      <section className="py-16 bg-white">
        <div className="container-max">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-light text-[var(--color-off-black)] mb-4 tracking-tight">
                What We'll Cover
              </h2>
              <div className="w-24 h-px bg-[var(--color-ink-200)] mx-auto mb-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {topics.map((topic, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="rounded-[24px] border border-[var(--color-ink-200)] bg-white/80 backdrop-blur-sm p-8 hover:border-[var(--color-trust)] transition-colors duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-trust)]/10 flex items-center justify-center">
                      <span className="text-[var(--color-trust)] text-xl font-serif">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-serif font-light text-[var(--color-off-black)] mb-1">
                        {topic.title}
                      </h3>
                      <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-trust)] mb-3">
                        {topic.subtitle}
                      </p>
                      <p className="text-sm text-[var(--color-ink-400)] leading-relaxed">
                        {topic.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button
                onClick={scrollToForm}
                className="inline-flex items-center gap-3 rounded-full px-8 py-4 bg-[var(--color-off-black)] text-white uppercase tracking-[0.3em] text-[11px] hover:bg-black transition-colors duration-300"
              >
                Reserve Your Spot
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Legendary Real Estate Case Study */}
      <section className="py-20 bg-[var(--surface-base)]">
        <div className="container-max">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="uppercase tracking-[0.35em] text-[11px] text-[var(--color-ink-400)] mb-4 block">
                Case Study
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-light text-[var(--color-off-black)] mb-4 tracking-tight">
                Jade · Legendary Real Estate
                <span className="text-[var(--color-trust)] text-[1.05em]">.</span>
              </h2>
              <p className="text-base text-[var(--color-ink-400)] max-w-2xl mx-auto leading-relaxed">
                From frustrated content creator to lead generation powerhouse—how we transformed Jade's digital strategy and tripled her inbound leads.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
              <div className="rounded-[32px] border border-[var(--color-ink-200)] bg-white/80 px-6 py-8 backdrop-blur-xl text-center">
                <div className="text-[36px] font-serif font-light text-[var(--color-off-black)]">3x</div>
                <p className="mt-2 text-sm text-[var(--color-ink-400)] uppercase tracking-[0.3em]">Qualified Leads</p>
                <p className="mt-4 text-sm text-[var(--color-ink-400)]">Inbound pipeline inside 90 days</p>
              </div>
              <div className="rounded-[32px] border border-[var(--color-ink-200)] bg-white/80 px-6 py-8 backdrop-blur-xl text-center">
                <div className="text-[36px] font-serif font-light text-[var(--color-off-black)]">42</div>
                <p className="mt-2 text-sm text-[var(--color-ink-400)] uppercase tracking-[0.3em]">Content Assets</p>
                <p className="mt-4 text-sm text-[var(--color-ink-400)]">Blogs, landing pages, nurture flows</p>
              </div>
              <div className="rounded-[32px] border border-[var(--color-ink-200)] bg-white/80 px-6 py-8 backdrop-blur-xl text-center">
                <div className="text-[36px] font-serif font-light text-[var(--color-off-black)]">12 hrs</div>
                <p className="mt-2 text-sm text-[var(--color-ink-400)] uppercase tracking-[0.3em]">Automation</p>
                <p className="mt-4 text-sm text-[var(--color-ink-400)]">From lead to curated follow-up</p>
              </div>
            </div>

            {/* Screenshots */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              <div className="rounded-[32px] border border-[var(--color-ink-200)] bg-white/80 p-6 backdrop-blur-xl">
                <Image
                  src="/images/JadeCRM.png"
                  alt="Jade's CRM showing lead growth"
                  width={720}
                  height={520}
                  className="w-full rounded-[24px]"
                />
              </div>
              <div className="rounded-[32px] border border-[var(--color-ink-200)] bg-white/80 p-6 backdrop-blur-xl">
                <Image
                  src="/images/JadeReview.jpeg"
                  alt="Jade's testimonial review"
                  width={480}
                  height={320}
                  className="w-full rounded-[24px]"
                />
                <blockquote className="mt-6 text-lg font-serif font-light text-[var(--color-off-black)] leading-relaxed italic">
                  "He's articulate, responsive, and tells us exactly why things are ranking—or not—every week. It feels like an in-house team that communicates like luxury service should."
                </blockquote>
                <div className="mt-4 text-sm text-[var(--color-ink-400)]">
                  <p className="uppercase tracking-[0.3em]">Jade Goodhue</p>
                  <p className="uppercase tracking-[0.3em] mt-1">Legendary Real Estate</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={scrollToForm}
                className="inline-flex items-center gap-3 rounded-full px-8 py-4 bg-[var(--color-off-black)] text-white uppercase tracking-[0.3em] text-[11px] hover:bg-black transition-colors duration-300"
              >
                Get Similar Results
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="registration-form" className="py-20 bg-white">
        <div className="container-max">
          <div className="max-w-2xl mx-auto">
            <div className="rounded-[28px] border border-[var(--color-ink-200)] bg-white/85 backdrop-blur-sm px-10 py-16 md:px-16 md:py-20">
              <div className="text-center mb-10">
                <h2 className="text-3xl sm:text-4xl font-serif font-light text-[var(--color-off-black)] mb-4 tracking-tight">
                  Reserve Your Spot
                </h2>
                <p className="text-sm sm:text-base text-[var(--color-ink-400)] leading-relaxed">
                  Register now to access the full training and start adding 1–2 listings every month.
                </p>
              </div>

              {submitSuccess ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-[var(--color-trust)]/10 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-[var(--color-trust)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-serif font-light text-[var(--color-off-black)] mb-2">
                    Thank You!
                  </h3>
                  <p className="text-sm text-[var(--color-ink-400)]">
                    We'll send you the training details shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm uppercase tracking-[0.3em] text-[var(--color-ink-400)] mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-[20px] border border-[var(--color-ink-200)] bg-white/90 text-[var(--color-off-black)] font-serif focus:outline-none focus:border-[var(--color-trust)] transition-colors duration-300"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm uppercase tracking-[0.3em] text-[var(--color-ink-400)] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-[20px] border border-[var(--color-ink-200)] bg-white/90 text-[var(--color-off-black)] font-serif focus:outline-none focus:border-[var(--color-trust)] transition-colors duration-300"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm uppercase tracking-[0.3em] text-[var(--color-ink-400)] mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-[20px] border border-[var(--color-ink-200)] bg-white/90 text-[var(--color-off-black)] font-serif focus:outline-none focus:border-[var(--color-trust)] transition-colors duration-300"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 bg-[var(--color-off-black)] text-white uppercase tracking-[0.3em] text-[11px] hover:bg-black transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Register Now'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Other Case Studies */}
      <section className="py-20 bg-[var(--surface-base)]">
        <div className="container-max">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="uppercase tracking-[0.4em] text-[11px] text-[var(--color-ink-400)] mb-4 block">
                More Success Stories
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-light text-[var(--color-off-black)] tracking-tight mb-4">
                Real Results from Real Agents
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {caseStudies.map((study) => (
                <div
                  key={study.id}
                  className="group rounded-[24px] border border-[var(--color-ink-200)] bg-white/85 backdrop-blur-sm overflow-hidden hover:border-[var(--color-trust)] transition-colors duration-300 flex flex-col"
                >
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <Image
                      src={study.image}
                      alt={`${study.client} case study results`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-white/20" />
                    <div className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-[var(--color-off-black)]">
                      Case Study
                    </div>
                  </div>

                  <div className="p-8 flex-1 flex flex-col gap-4">
                    <div className="flex items-center gap-2 text-[13px] uppercase tracking-[0.24em] text-[var(--color-trust)]">
                      {study.result}
                      <span className="inline-block h-px w-8 bg-[var(--color-trust)] group-hover:w-12 transition-all duration-300" />
                    </div>

                    <h3 className="text-2xl font-serif font-light text-[var(--color-off-black)] group-hover:text-[var(--color-trust)] transition-colors duration-300 leading-snug">
                      {study.title}
                    </h3>

                    <div className="text-sm text-[var(--color-ink-400)]">
                      <span className="font-semibold text-[var(--color-off-black)]">{study.client}</span>
                      {study.company && <span className="block">{study.company}</span>}
                    </div>

                    <p className="text-sm text-[var(--color-ink-400)] leading-relaxed flex-1">
                      {study.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button
                onClick={scrollToForm}
                className="inline-flex items-center gap-3 rounded-full px-8 py-4 bg-[var(--color-off-black)] text-white uppercase tracking-[0.3em] text-[11px] hover:bg-black transition-colors duration-300"
              >
                Join These Success Stories
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
