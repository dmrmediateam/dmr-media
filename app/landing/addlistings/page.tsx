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
      <section className="relative min-h-screen flex flex-col justify-between py-12 sm:py-16 lg:py-20">
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
              <p className="text-base sm:text-lg text-[var(--color-ink-400)] leading-[1.55] max-w-2xl mx-auto">
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
                className="inline-flex items-center gap-3 rounded-full px-8 py-4 bg-[var(--color-off-black)] text-white uppercase tracking-[0.3em] text-[11px] hover:bg-black transition-colors duration-300"
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
                  className="w-full rounded-[24px] mb-6"
                />
                <blockquote className="text-lg font-serif font-light text-[var(--color-off-black)] leading-relaxed italic">
                  "He's articulate, responsive, and provides amazing weekly updates. He works with us like a partner, rather than a vendor. If you have the opportunity to work with him, just DO IT. You'll be grateful you did!"
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

      {/* Testimonials Section */}
      <Testimonials />

      {/* Registration Form */}
      <section id="registration-form" ref={formRef} className="py-20 bg-white">
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
                <p className="text-base text-[var(--color-ink-400)] max-w-2xl mx-auto leading-relaxed">
                  From a silent IDX template to a site that behaves like a modern magazine. We rebuilt his presence, piped data into every decision, and let the numbers roll on camera—even though he's camera shy.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
                <div className="rounded-[32px] border border-[var(--color-ink-200)] bg-white/80 px-6 py-8 backdrop-blur-xl text-center">
                  <div className="text-[36px] font-serif font-light text-[var(--color-off-black)]">21x</div>
                  <p className="mt-2 text-sm text-[var(--color-ink-400)] uppercase tracking-[0.3em]">Search Impressions</p>
                  <p className="mt-4 text-sm text-[var(--color-ink-400)]">7.5 weeks after relaunch</p>
                </div>
                <div className="rounded-[32px] border border-[var(--color-ink-200)] bg-white/80 px-6 py-8 backdrop-blur-xl text-center">
                  <div className="text-[36px] font-serif font-light text-[var(--color-off-black)]">+312%</div>
                  <p className="mt-2 text-sm text-[var(--color-ink-400)] uppercase tracking-[0.3em]">Organic Sessions</p>
                  <p className="mt-4 text-sm text-[var(--color-ink-400)]">Year-over-year swing vs. template site</p>
                </div>
                <div className="rounded-[32px] border border-[var(--color-ink-200)] bg-white/80 px-6 py-8 backdrop-blur-xl text-center">
                  <div className="text-[36px] font-serif font-light text-[var(--color-off-black)]">6 weeks</div>
                  <p className="mt-2 text-sm text-[var(--color-ink-400)] uppercase tracking-[0.3em]">Build Timeline</p>
                  <p className="mt-4 text-sm text-[var(--color-ink-400)]">From discovery to launch-ready WordPress</p>
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
                <p className="text-base text-[var(--color-ink-400)] max-w-2xl mx-auto leading-relaxed">
                  Traffic wasn't the issue—positioning was. We reoriented every keyword, every page, every follow-up so the right buyers found him first and felt compelled to reach out.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
                <div className="rounded-[32px] border border-[var(--color-ink-200)] bg-white/80 px-6 py-8 backdrop-blur-xl text-center">
                  <div className="text-[36px] font-serif font-light text-[var(--color-off-black)]">2–3 /day</div>
                  <p className="mt-2 text-sm text-[var(--color-ink-400)] uppercase tracking-[0.3em]">Qualified Leads</p>
                  <p className="mt-4 text-sm text-[var(--color-ink-400)]">Organic only, no ads</p>
                </div>
                <div className="rounded-[32px] border border-[var(--color-ink-200)] bg-white/80 px-6 py-8 backdrop-blur-xl text-center">
                  <div className="text-[36px] font-serif font-light text-[var(--color-off-black)]">118</div>
                  <p className="mt-2 text-sm text-[var(--color-ink-400)] uppercase tracking-[0.3em]">Keywords</p>
                  <p className="mt-4 text-sm text-[var(--color-ink-400)]">Rewritten within 60 days</p>
                </div>
                <div className="rounded-[32px] border border-[var(--color-ink-200)] bg-white/80 px-6 py-8 backdrop-blur-xl text-center">
                  <div className="text-[36px] font-serif font-light text-[var(--color-off-black)]">8 weeks</div>
                  <p className="mt-2 text-sm text-[var(--color-ink-400)] uppercase tracking-[0.3em]">Time to Clarity</p>
                  <p className="mt-4 text-sm text-[var(--color-ink-400)]">From audit to predictable calls</p>
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
                  <div className="mt-4 text-sm text-[var(--color-ink-400)]">
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

