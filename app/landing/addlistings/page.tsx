'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
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
  const [scrollProgress, setScrollProgress] = useState(0);
  const formRef = useRef<HTMLDivElement>(null);

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

  // Scroll progress indicator
  useEffect(() => {
    const handleScroll = () => {
      if (!formRef.current) return;
      const formTop = formRef.current.offsetTop;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Calculate progress from top of page to form
      const totalDistance = formTop;
      const scrolled = scrollY;
      const progress = Math.min((scrolled / totalDistance) * 100, 100);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const videoId = 'xO8zNVewNOA';
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&rel=0&modestbranding=1`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
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
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

  return (
    <div className="min-h-screen bg-[var(--surface-base)] relative">
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-[var(--color-ink-200)] z-50">
        <div
          className="h-full bg-[var(--color-trust)] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero Section - Full Viewport Height */}
      <section className="relative min-h-screen flex flex-col justify-between py-6 sm:py-8 lg:py-12">
        <div className="container-max flex-1 flex flex-col justify-center">
          <div className="max-w-4xl mx-auto w-full">
            {/* Title */}
            <div className="text-center mb-8 sm:mb-12">
              <span className="uppercase tracking-[0.35em] text-[10px] text-[var(--color-ink-400)] mb-4 block">
                Free Training
              </span>
              <h1 className="text-[32px] sm:text-[42px] lg:text-[52px] font-serif font-light text-[var(--color-off-black)] leading-[1.05] tracking-tight mb-6">
                How to Add 1–2 Listings Every Month Using ONLY Google Business Profile & LSAs
                <span className="text-[var(--color-trust)] text-[1.05em] align-baseline">.</span>
              </h1>
              <p className="text-lg sm:text-xl text-[var(--color-ink-400)] leading-[1.6] max-w-2xl mx-auto">
                No website needed. Discover the proven system that's helping real estate agents dominate their local markets.
              </p>
            </div>

            {/* Video Container - Smaller */}
            <div className="relative w-full max-w-2xl mx-auto rounded-[24px] overflow-hidden border border-[var(--color-ink-200)] bg-white/80 backdrop-blur-sm shadow-[0_24px_64px_rgba(15,15,15,0.08)] mb-8">
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

            {/* Button at Bottom */}
            <div className="text-center">
              <button
                onClick={scrollToForm}
                className="inline-flex items-center gap-3 rounded-full px-8 py-4 bg-[var(--color-off-black)] text-white uppercase tracking-[0.3em] text-sm font-semibold hover:bg-black transition-colors duration-300"
              >
                Register Now
              </button>
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
                      <p className="text-base uppercase tracking-[0.3em] text-[var(--color-trust)] mb-3">
                        {topic.subtitle}
                      </p>
                      <p className="text-base text-[var(--color-ink-400)] leading-relaxed">
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
                className="inline-flex items-center gap-3 rounded-full px-8 py-4 bg-[var(--color-off-black)] text-white uppercase tracking-[0.3em] text-sm font-semibold hover:bg-black transition-colors duration-300"
              >
                Reserve Your Spot
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Who is this for */}
      <section className="py-20 bg-[var(--surface-base)]">
        <div className="container-max">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-light text-[var(--color-off-black)] mb-4 tracking-tight">
                Is This Training For You?
              </h2>
              <p className="text-lg text-[var(--color-ink-400)] max-w-2xl mx-auto leading-relaxed">
                If you say yes to any of these, I've got you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6 }}
                className="rounded-[24px] border border-[var(--color-ink-200)] bg-white/80 backdrop-blur-sm p-8 hover:border-[var(--color-trust)] transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-trust)]/10 flex items-center justify-center mt-1">
                    <svg className="w-5 h-5 text-[var(--color-trust)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-light text-[var(--color-off-black)] mb-3">
                      You're struggling to get consistent listings
                    </h3>
                    <p className="text-base text-[var(--color-ink-400)] leading-relaxed">
                      You're not getting enough seller leads, or the leads you're getting aren't qualified. You need a system that brings in 1–2 listings every month without relying on referrals or cold calling.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="rounded-[24px] border border-[var(--color-ink-200)] bg-white/80 backdrop-blur-sm p-8 hover:border-[var(--color-trust)] transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-trust)]/10 flex items-center justify-center mt-1">
                    <svg className="w-5 h-5 text-[var(--color-trust)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-light text-[var(--color-off-black)] mb-3">
                      You don't have a website or want to avoid expensive ads
                    </h3>
                    <p className="text-base text-[var(--color-ink-400)] leading-relaxed">
                      You want to generate listings using free and low-cost tools like Google Business Profile and Local Service Ads—no website required, no massive ad budgets.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-[24px] border border-[var(--color-ink-200)] bg-white/80 backdrop-blur-sm p-8 hover:border-[var(--color-trust)] transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-trust)]/10 flex items-center justify-center mt-1">
                    <svg className="w-5 h-5 text-[var(--color-trust)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-light text-[var(--color-off-black)] mb-3">
                      You're overwhelmed by marketing advice
                    </h3>
                    <p className="text-base text-[var(--color-ink-400)] leading-relaxed">
                      There's too much conflicting information out there. You need a proven, step-by-step system that actually works for real estate agents—not generic marketing advice.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="rounded-[24px] border border-[var(--color-ink-200)] bg-white/80 backdrop-blur-sm p-8 hover:border-[var(--color-trust)] transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-trust)]/10 flex items-center justify-center mt-1">
                    <svg className="w-5 h-5 text-[var(--color-trust)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-light text-[var(--color-off-black)] mb-3">
                      You want to dominate your local market
                    </h3>
                    <p className="text-base text-[var(--color-ink-400)] leading-relaxed">
                      You're ready to become the go-to agent in your area. You want to show up first when sellers search for real estate services, and you're willing to implement a proven system.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="text-center mt-12">
              <button
                onClick={scrollToForm}
                className="inline-flex items-center gap-3 rounded-full px-8 py-4 bg-[var(--color-off-black)] text-white uppercase tracking-[0.3em] text-sm font-semibold hover:bg-black transition-colors duration-300"
              >
                If This Sounds Like You, Register Now
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
              <p className="text-lg text-[var(--color-ink-400)] max-w-2xl mx-auto leading-relaxed">
                From frustrated content creator to lead generation powerhouse—how we transformed Jade's digital strategy and tripled her inbound leads.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
              <div className="rounded-[32px] border border-[var(--color-ink-200)] bg-white/80 px-6 py-8 backdrop-blur-xl text-center">
                <div className="text-[36px] font-serif font-light text-[var(--color-off-black)]">3x</div>
                <p className="mt-2 text-base text-[var(--color-ink-400)] uppercase tracking-[0.3em]">Qualified Leads</p>
                <p className="mt-4 text-base text-[var(--color-ink-400)]">Inbound pipeline inside 90 days</p>
              </div>
              <div className="rounded-[32px] border border-[var(--color-ink-200)] bg-white/80 px-6 py-8 backdrop-blur-xl text-center">
                <div className="text-[36px] font-serif font-light text-[var(--color-off-black)]">42</div>
                <p className="mt-2 text-base text-[var(--color-ink-400)] uppercase tracking-[0.3em]">Content Assets</p>
                <p className="mt-4 text-base text-[var(--color-ink-400)]">Blogs, landing pages, nurture flows</p>
              </div>
              <div className="rounded-[32px] border border-[var(--color-ink-200)] bg-white/80 px-6 py-8 backdrop-blur-xl text-center">
                <div className="text-[36px] font-serif font-light text-[var(--color-off-black)]">12 hrs</div>
                <p className="mt-2 text-base text-[var(--color-ink-400)] uppercase tracking-[0.3em]">Automation</p>
                <p className="mt-4 text-base text-[var(--color-ink-400)]">From lead to curated follow-up</p>
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
                  className="w-full rounded-[24px] mb-6"
                />
                <blockquote className="text-lg font-serif font-light text-[var(--color-off-black)] leading-relaxed italic">
                  "He's articulate, responsive, and provides amazing weekly updates. He works with us like a partner, rather than a vendor. If you have the opportunity to work with him, just DO IT. You'll be grateful you did!"
                </blockquote>
                <div className="mt-4 text-base text-[var(--color-ink-400)]">
                  <p className="uppercase tracking-[0.3em]">Jade Goodhue</p>
                  <p className="uppercase tracking-[0.3em] mt-1">Legendary Real Estate</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={scrollToForm}
                className="inline-flex items-center gap-3 rounded-full px-8 py-4 bg-[var(--color-off-black)] text-white uppercase tracking-[0.3em] text-sm font-semibold hover:bg-black transition-colors duration-300"
              >
                Get Similar Results
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Social Proof Section - Before Form */}
      <section className="py-16 bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-serif font-light text-[var(--color-off-black)] mb-8 tracking-tight">
              Join 100+ Real Estate Agents Getting More Listings
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="rounded-[24px] border border-[var(--color-ink-200)] bg-white/80 p-6">
                <div className="text-4xl font-serif font-light text-[var(--color-trust)] mb-2">1–2</div>
                <div className="text-base uppercase tracking-[0.3em] text-[var(--color-ink-400)]">Listings Per Month</div>
                <div className="text-sm text-[var(--color-ink-400)] mt-2">Using only GBP & LSAs</div>
              </div>
              <div className="rounded-[24px] border border-[var(--color-ink-200)] bg-white/80 p-6">
                <div className="text-4xl font-serif font-light text-[var(--color-trust)] mb-2">$11K</div>
                <div className="text-base uppercase tracking-[0.3em] text-[var(--color-ink-400)]">Avg Monthly GCI</div>
                <div className="text-sm text-[var(--color-ink-400)] mt-2">From our marketing systems</div>
              </div>
              <div className="rounded-[24px] border border-[var(--color-ink-200)] bg-white/80 p-6">
                <div className="text-4xl font-serif font-light text-[var(--color-trust)] mb-2">500+</div>
                <div className="text-base uppercase tracking-[0.3em] text-[var(--color-ink-400)]">Success Stories</div>
                <div className="text-sm text-[var(--color-ink-400)] mt-2">And counting nationwide</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Testimonials - Before Form */}
      <section className="py-12 bg-[var(--surface-base)]">
        <div className="container-max">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-serif font-light text-[var(--color-off-black)] mb-4">
                Real Results from Real Agents
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-[24px] border border-[var(--color-ink-200)] bg-white/80 p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-trust)]/10 flex items-center justify-center">
                    <span className="text-[var(--color-trust)] font-serif text-lg">RG</span>
                  </div>
                  <div>
                    <div className="font-serif font-light text-[var(--color-off-black)]">Rick Grueble</div>
                    <div className="text-sm text-[var(--color-ink-400)]">Visions First Realty</div>
                  </div>
                </div>
                <p className="text-base text-[var(--color-ink-400)] leading-relaxed italic">
                  "DMR Media delivered top rankings for real estate search terms, a higher volume of qualified leads, and transparent reporting the entire way. I now get 2–3 qualified leads per day."
                </p>
              </div>
              <div className="rounded-[24px] border border-[var(--color-ink-200)] bg-white/80 p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-trust)]/10 flex items-center justify-center">
                    <span className="text-[var(--color-trust)] font-serif text-lg">JG</span>
                  </div>
                  <div>
                    <div className="font-serif font-light text-[var(--color-off-black)]">Jade Goodhue</div>
                    <div className="text-sm text-[var(--color-ink-400)]">Legendary Real Estate</div>
                  </div>
                </div>
                <p className="text-base text-[var(--color-ink-400)] leading-relaxed italic">
                  "He works with us like a partner, rather than a vendor. If you have the opportunity to work with him, just DO IT. You'll be grateful you did!"
                </p>
              </div>
              <div className="rounded-[24px] border border-[var(--color-ink-200)] bg-white/80 p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-trust)]/10 flex items-center justify-center">
                    <span className="text-[var(--color-trust)] font-serif text-lg">JA</span>
                  </div>
                  <div>
                    <div className="font-serif font-light text-[var(--color-off-black)]">Justin Armbruster</div>
                    <div className="text-sm text-[var(--color-ink-400)]">The Armbruster Team</div>
                  </div>
                </div>
                <p className="text-base text-[var(--color-ink-400)] leading-relaxed italic">
                  "Andrew & his team are great communicators and definitely know their stuff. True professionals!"
                </p>
              </div>
              <div className="rounded-[24px] border border-[var(--color-ink-200)] bg-white/80 p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-trust)]/10 flex items-center justify-center">
                    <span className="text-[var(--color-trust)] font-serif text-lg">AP</span>
                  </div>
                  <div>
                    <div className="font-serif font-light text-[var(--color-off-black)]">Andy Peterson</div>
                    <div className="text-sm text-[var(--color-ink-400)]">Keller Williams Luxury</div>
                  </div>
                </div>
                <p className="text-base text-[var(--color-ink-400)] leading-relaxed italic">
                  "Andrew worked with me personally to completely change my presence online - with a perfect mix of personal and professional."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form - Prominent */}
      <section id="registration-form" ref={formRef} className="py-20 bg-gradient-to-br from-white via-white/95 to-[var(--surface-base)]">
        <div className="container-max">
          <div className="max-w-3xl mx-auto">
            {/* Large Prominent Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-trust)]/10 px-4 py-2 mb-6">
                <span className="text-[11px] uppercase tracking-[0.35em] text-[var(--color-trust)] font-semibold">
                  🔑 Unlock Free Training
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-[var(--color-off-black)] mb-6 tracking-tight">
                Reserve Your Spot
                <span className="text-[var(--color-trust)] text-[1.05em]">.</span>
              </h2>
              <p className="text-lg sm:text-xl text-[var(--color-ink-400)] leading-relaxed max-w-2xl mx-auto mb-8">
                Register now to access the full training and start adding 1–2 listings every month using only Google Business Profile & Local Service Ads.
              </p>
            </div>

            {/* Large Form Card */}
            <div className="rounded-[32px] border-2 border-[var(--color-trust)] bg-white shadow-[0_24px_64px_rgba(15,15,15,0.12)] px-8 py-12 md:px-12 md:py-16 relative overflow-hidden">
              {/* Decorative Background Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-trust)]/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[var(--color-trust)]/5 rounded-full blur-3xl -ml-24 -mb-24"></div>
              
              <div className="relative z-10">

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
                  <p className="text-base text-[var(--color-ink-400)]">
                    We'll send you the training details shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-base uppercase tracking-[0.3em] text-[var(--color-ink-400)] mb-2">
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
                    <label htmlFor="email" className="block text-base uppercase tracking-[0.3em] text-[var(--color-ink-400)] mb-2">
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
                    <label htmlFor="phone" className="block text-base uppercase tracking-[0.3em] text-[var(--color-ink-400)] mb-2">
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
                    className="w-full inline-flex items-center justify-center gap-3 rounded-full px-8 py-5 bg-[var(--color-off-black)] text-white uppercase tracking-[0.3em] text-sm font-semibold hover:bg-black hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                  >
                    {isSubmitting ? 'Submitting...' : '🔑 Register Now - Free Training'}
                  </button>
                </form>
              )}
              
              {/* Trust Badges */}
              <div className="mt-8 pt-8 border-t border-[var(--color-ink-200)]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="flex flex-col items-center">
                    <svg className="w-8 h-8 text-[var(--color-trust)] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <div className="text-sm uppercase tracking-[0.2em] text-[var(--color-ink-400)]">100% Free</div>
                    <div className="text-sm text-[var(--color-ink-400)] mt-1">No credit card required</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <svg className="w-8 h-8 text-[var(--color-trust)] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <div className="text-sm uppercase tracking-[0.2em] text-[var(--color-ink-400)]">Instant Access</div>
                    <div className="text-sm text-[var(--color-ink-400)] mt-1">Watch training immediately</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <svg className="w-8 h-8 text-[var(--color-trust)] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 0v8m0 0v-1m0 1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className="text-sm uppercase tracking-[0.2em] text-[var(--color-ink-400)]">Proven System</div>
                    <div className="text-sm text-[var(--color-ink-400)] mt-1">Used by 100+ agents</div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Case Studies - Full Content */}
      <section className="py-20 bg-[var(--surface-base)]">
        <div className="container-max">
          <div className="max-w-6xl mx-auto space-y-20">
            {/* Michael's Case Study */}
            <div>
              <div className="text-center mb-12">
                <span className="uppercase tracking-[0.35em] text-[11px] text-[var(--color-ink-400)] mb-4 block">
                  Case Study
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-light text-[var(--color-off-black)] mb-4 tracking-tight">
                  Michael · SEO Transformation
                  <span className="text-[var(--color-trust)] text-[1.05em]">.</span>
                </h2>
                <p className="text-lg text-[var(--color-ink-400)] max-w-2xl mx-auto leading-relaxed">
                  From a silent IDX template to a site that behaves like a modern magazine. We rebuilt his presence, piped data into every decision, and let the numbers roll on camera—even though he's camera shy.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
                <div className="rounded-[32px] border border-[var(--color-ink-200)] bg-white/80 px-6 py-8 backdrop-blur-xl text-center">
                  <div className="text-[36px] font-serif font-light text-[var(--color-off-black)]">21x</div>
                  <p className="mt-2 text-base text-[var(--color-ink-400)] uppercase tracking-[0.3em]">Search Impressions</p>
                  <p className="mt-4 text-base text-[var(--color-ink-400)]">7.5 weeks after relaunch</p>
                </div>
                <div className="rounded-[32px] border border-[var(--color-ink-200)] bg-white/80 px-6 py-8 backdrop-blur-xl text-center">
                  <div className="text-[36px] font-serif font-light text-[var(--color-off-black)]">+312%</div>
                  <p className="mt-2 text-base text-[var(--color-ink-400)] uppercase tracking-[0.3em]">Organic Sessions</p>
                  <p className="mt-4 text-base text-[var(--color-ink-400)]">Year-over-year swing vs. template site</p>
                </div>
                <div className="rounded-[32px] border border-[var(--color-ink-200)] bg-white/80 px-6 py-8 backdrop-blur-xl text-center">
                  <div className="text-[36px] font-serif font-light text-[var(--color-off-black)]">6 weeks</div>
                  <p className="mt-2 text-base text-[var(--color-ink-400)] uppercase tracking-[0.3em]">Build Timeline</p>
                  <p className="mt-4 text-base text-[var(--color-ink-400)]">From discovery to launch-ready WordPress</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <div className="rounded-[32px] border border-[var(--color-ink-200)] bg-white/80 p-6 backdrop-blur-xl">
                  <Image
                    src="/images/MichealTraffic.png"
                    alt="Michael's traffic analytics"
                    width={720}
                    height={520}
                    className="w-full rounded-[24px]"
                  />
                </div>
                <div className="rounded-[32px] border border-[var(--color-ink-200)] bg-white/80 p-8 backdrop-blur-xl">
                  <h3 className="text-2xl font-serif font-light text-[var(--color-off-black)] mb-4">The Results</h3>
                  <p className="text-base text-[var(--color-ink-400)] leading-relaxed mb-6">
                    21x more visibility and leads that stay on-brand. Every dashboard, every call, every follow-up is now scripted to feel premium. His team knows what to publish each week and what data proves it's working.
                  </p>
                  <blockquote className="text-lg font-serif font-light text-[var(--color-off-black)] leading-relaxed italic">
                    "Despite being camera shy, I recorded a testimonial because the lead flow spoke for itself. The weekly updates made it impossible to ignore the progress."
                  </blockquote>
                  <div className="mt-4 text-sm text-[var(--color-ink-400)]">
                    <p className="uppercase tracking-[0.3em]">Michael</p>
                    <p className="uppercase tracking-[0.3em] mt-1">Real Estate Professional</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Rick's Case Study */}
            <div>
              <div className="text-center mb-12">
                <span className="uppercase tracking-[0.35em] text-[11px] text-[var(--color-ink-400)] mb-4 block">
                  Case Study
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-light text-[var(--color-off-black)] mb-4 tracking-tight">
                  Rick · Visions First Realty
                  <span className="text-[var(--color-trust)] text-[1.05em]">.</span>
                </h2>
                <p className="text-lg text-[var(--color-ink-400)] max-w-2xl mx-auto leading-relaxed">
                  Traffic wasn't the issue—positioning was. We reoriented every keyword, every page, every follow-up so the right buyers found him first and felt compelled to reach out.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
                <div className="rounded-[32px] border border-[var(--color-ink-200)] bg-white/80 px-6 py-8 backdrop-blur-xl text-center">
                  <div className="text-[36px] font-serif font-light text-[var(--color-off-black)]">2–3 /day</div>
                  <p className="mt-2 text-base text-[var(--color-ink-400)] uppercase tracking-[0.3em]">Qualified Leads</p>
                  <p className="mt-4 text-base text-[var(--color-ink-400)]">Organic only, no ads</p>
                </div>
                <div className="rounded-[32px] border border-[var(--color-ink-200)] bg-white/80 px-6 py-8 backdrop-blur-xl text-center">
                  <div className="text-[36px] font-serif font-light text-[var(--color-off-black)]">118</div>
                  <p className="mt-2 text-base text-[var(--color-ink-400)] uppercase tracking-[0.3em]">Keywords</p>
                  <p className="mt-4 text-base text-[var(--color-ink-400)]">Rewritten within 60 days</p>
                </div>
                <div className="rounded-[32px] border border-[var(--color-ink-200)] bg-white/80 px-6 py-8 backdrop-blur-xl text-center">
                  <div className="text-[36px] font-serif font-light text-[var(--color-off-black)]">8 weeks</div>
                  <p className="mt-2 text-base text-[var(--color-ink-400)] uppercase tracking-[0.3em]">Time to Clarity</p>
                  <p className="mt-4 text-base text-[var(--color-ink-400)]">From audit to predictable calls</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <div className="rounded-[32px] border border-[var(--color-ink-200)] bg-white/80 p-6 backdrop-blur-xl">
                  <Image
                    src="/images/RickAfter.png"
                    alt="Rick's keyword rankings"
                    width={720}
                    height={520}
                    className="w-full rounded-[24px]"
                  />
                </div>
                <div className="rounded-[32px] border border-[var(--color-ink-200)] bg-white/80 p-8 backdrop-blur-xl">
                  <h3 className="text-2xl font-serif font-light text-[var(--color-off-black)] mb-4">Daily Deal Flow</h3>
                  <p className="text-base text-[var(--color-ink-400)] leading-relaxed mb-6">
                    Rick now fields two to three qualified inquiries every day. The team knows which keywords, reviews, and pieces of content triggered each call.
                  </p>
                  <blockquote className="text-lg font-serif font-light text-[var(--color-off-black)] leading-relaxed italic">
                    "DMR Media delivered top rankings for real estate search terms, a higher volume of qualified leads, and transparent reporting the entire way."
                  </blockquote>
                  <div className="mt-4 text-base text-[var(--color-ink-400)]">
                    <p className="uppercase tracking-[0.3em]">Rick Grueble</p>
                    <p className="uppercase tracking-[0.3em] mt-1">Visions First Realty</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[32px] border border-[var(--color-ink-200)] bg-white/80 p-6 backdrop-blur-xl">
                <Image
                  src="/images/RickReview.jpeg"
                  alt="Rick's review"
                  width={480}
                  height={320}
                  className="w-full max-w-xl mx-auto rounded-[24px]"
                />
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={scrollToForm}
                className="inline-flex items-center gap-3 rounded-full px-8 py-4 bg-[var(--color-off-black)] text-white uppercase tracking-[0.3em] text-sm font-semibold hover:bg-black transition-colors duration-300"
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

