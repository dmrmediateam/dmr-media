'use client';

import { useEffect, useState, Suspense } from 'react';
import { motion } from 'framer-motion';
import { useRouter, useSearchParams } from 'next/navigation';
import Testimonials from '@/components/Testimonials';
import ReviewsAggregate from '@/components/ReviewsAggregate';
import Image from 'next/image';

function ThankYouContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isVerifying, setIsVerifying] = useState(true);
  const [verificationError, setVerificationError] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null);
  const [userPhone, setUserPhone] = useState<string | null>(null);
  const [showThankYou, setShowThankYou] = useState(true);
  const [formData, setFormData] = useState({
    listingsLast12Months: '',
    tools: [] as string[],
    websiteUrl: '',
    leadResponseTime: '',
    isFullTime: '',
    activeMarket: '',
    listingSituation: '',
    isDecisionMaker: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Hide header, footer, and AI chatbot for this squeeze page
  useEffect(() => {
    const nav = document.querySelector('nav') as HTMLElement | null;
    const footer = document.querySelector('footer') as HTMLElement | null;
    const chatbot = document.querySelector('.elfsight-app-90e5dbc1-4850-470a-b384-914842649785') as HTMLElement | null;
    if (nav) nav.style.display = 'none';
    if (footer) footer.style.display = 'none';
    if (chatbot) chatbot.style.display = 'none';
    return () => {
      if (nav) nav.style.display = '';
      if (footer) footer.style.display = '';
      if (chatbot) chatbot.style.display = '';
    };
  }, []);

  // Get email, name, and phone from URL params (no payment verification needed)
  useEffect(() => {
    const emailParam = searchParams.get('email');
    const nameParam = searchParams.get('name');
    const phoneParam = searchParams.get('phone');
    
    // Get data from URL params
    if (emailParam) {
      setUserEmail(emailParam);
    }
    if (nameParam) {
      setUserName(nameParam);
    }
    if (phoneParam) {
      setUserPhone(phoneParam);
    }
    
    setIsVerifying(false);
  }, [searchParams]);

  // Show thank you message for 2 seconds, then fade to form
  useEffect(() => {
    if (!isVerifying && !verificationError) {
      const timer = setTimeout(() => {
        setShowThankYou(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isVerifying, verificationError]);

  const handleToolChange = (tool: string) => {
    setFormData(prev => ({
      ...prev,
      tools: prev.tools.includes(tool)
        ? prev.tools.filter(t => t !== tool)
        : [...prev.tools, tool],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    
    try {
      // Submit form data to new implementation session API
      const response = await fetch('/api/implementation-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          email: userEmail,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Form submission failed');
      }

      // Determine qualification status based ONLY on the 4 criteria:
      // 1. 18+ listings
      // 2. Full-time
      // 3. Decision Maker
      // 4. Replies within 24 hours, 1 hour or immediately
      
      const listingsCount = parseInt(formData.listingsLast12Months, 10);
      const has18PlusListings = !isNaN(listingsCount) && listingsCount >= 18;
      const isFullTime = formData.isFullTime === 'yes';
      const isDecisionMaker = formData.isDecisionMaker === 'yes';
      const hasGoodResponseTime = formData.leadResponseTime === 'immediately' || 
                                   formData.leadResponseTime === 'within-hour' || 
                                   formData.leadResponseTime === 'within-day';
      
      // Only qualify if ALL 4 criteria are met
      if (has18PlusListings && isFullTime && isDecisionMaker && hasGoodResponseTime) {
        // Qualified - redirect to qualification-result with user data
        const params = new URLSearchParams();
        params.set('status', 'qualified');
        if (userEmail) params.set('email', userEmail);
        if (userName) params.set('name', userName);
        if (userPhone) params.set('phone', userPhone);
        router.push(`/landing/qualification-result?${params.toString()}`);
      } else {
        // Disqualified - doesn't meet all criteria
        const params = new URLSearchParams();
        params.set('status', 'disqualified');
        if (userEmail) params.set('email', userEmail);
        if (userName) params.set('name', userName);
        router.push(`/landing/qualification-result?${params.toString()}`);
      }
    } catch (error: any) {
      console.error('Form submission error:', error);
      alert(error.message || 'Something went wrong. Please try again.');
      setIsSubmitting(false);
    }
  };

  const videoId = 'lMmesya-aXI';
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&rel=0&modestbranding=1`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-white/95 to-[var(--surface-base)]">
      {/* Thank You Message - Shows for 2 seconds */}
      {showThankYou && !isVerifying && !verificationError && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center min-h-[60vh] text-center container-max py-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, type: 'spring', stiffness: 200 }}
            className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[var(--color-trust)]/10 flex items-center justify-center mb-6 shadow-lg"
          >
            <svg className="w-10 h-10 md:w-12 md:h-12 text-[var(--color-trust)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[var(--color-off-black)] mb-4 tracking-tight"
          >
            Thank You for Attending
            <span className="text-[var(--color-trust)] text-[1.05em]">.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl text-[var(--color-ink-300)] max-w-2xl mx-auto"
          >
            Watch the video below to learn about the next step.
          </motion.p>
        </motion.div>
      )}

      {/* Main Content - Shows after thank you message */}
      {!showThankYou && !isVerifying && !verificationError && (
        <>
          {/* Hero Section - Full Viewport Height */}
          <section className="relative min-h-screen flex flex-col justify-between py-6 sm:py-8 lg:py-12">
            <div className="container-max flex-1 flex flex-col justify-center">
              <div className="max-w-4xl mx-auto w-full">
                {/* Title */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-8 sm:mb-12"
                >
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="text-[32px] sm:text-[42px] lg:text-[52px] font-serif font-light text-[var(--color-off-black)] leading-[1.05] tracking-tight mb-6"
                  >
                    Private Implementation Session (~15 Agent Limit)
                    <span className="text-[var(--color-trust)] text-[1.05em] align-baseline">.</span>
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="text-lg sm:text-xl text-[var(--color-ink-300)] leading-[1.6] max-w-2xl mx-auto"
                  >
                    This is a small, invite-only working session where we help a limited number of agents actually set up and improve their Google Business Profile.
                  </motion.p>
                </motion.div>

                {/* Video Container - Smaller */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="relative w-full max-w-2xl mx-auto rounded-[24px] overflow-hidden border border-[var(--color-ink-200)] bg-white/80 backdrop-blur-sm shadow-[0_24px_64px_rgba(15,15,15,0.08)] mb-8"
                >
                  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      src={embedUrl}
                      title="Private Implementation Session - VSL"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full"
                      style={{ border: 'none' }}
                    />
                  </div>
                </motion.div>

                {/* Button at Bottom */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-center"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      const formSection = document.getElementById('application-form');
                      formSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className="inline-flex items-center gap-3 rounded-full px-8 py-4 bg-[var(--color-off-black)] text-white uppercase tracking-[0.3em] text-sm font-semibold hover:bg-black transition-colors duration-300"
                  >
                    Apply Now
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Header Section */}
          <section className="py-12 md:py-16">
            <div className="container-max">
              <div className="max-w-4xl mx-auto text-center mb-12">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-base sm:text-lg text-[var(--color-ink-300)] max-w-2xl mx-auto leading-relaxed mb-4"
                >
                  It's not a presentation. It's not a pitch. It's a working environment.
                </motion.p>
              </div>

              {/* What They Get Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="max-w-3xl mx-auto mb-16"
              >
                <div className="rounded-[32px] border border-[var(--color-ink-200)] bg-white/80 backdrop-blur-sm p-8 md:p-12">
                  <h2 className="text-2xl sm:text-3xl font-serif font-light text-[var(--color-off-black)] mb-6 text-center">
                    What You'll Get
                  </h2>
                  <ul className="space-y-4 text-base sm:text-lg text-[var(--color-ink-300)]">
                    <li className="flex items-start gap-4">
                      <svg className="w-6 h-6 text-[var(--color-trust)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Live setup and optimization guidance with Andrew and the team</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <svg className="w-6 h-6 text-[var(--color-trust)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Direct feedback on what's holding your visibility back</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <svg className="w-6 h-6 text-[var(--color-trust)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Small group environment (no more than ~15 agents)</span>
                    </li>
                    <li className="flex items-start gap-4">
                      <svg className="w-6 h-6 text-[var(--color-trust)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Clear next steps tailored to your market</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Social Proof Section - Before Form */}
          <section className="py-12 md:py-16 bg-white">
            <div className="container-max">
              <div className="max-w-6xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-12"
                >
                  <h2 className="text-3xl sm:text-4xl font-serif font-light text-[var(--color-off-black)] mb-4 tracking-tight">
                    Join Agents Getting Real Results
                    <span className="text-[var(--color-trust)] text-[1.05em]">.</span>
                  </h2>
                  <p className="text-base sm:text-lg text-[var(--color-ink-300)] max-w-2xl mx-auto">
                    See how other agents transformed their visibility and lead generation
                  </p>
                </motion.div>

                {/* Quick Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="rounded-[24px] border border-[var(--color-ink-200)] bg-white/80 p-6 backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-[var(--color-trust)]/10 flex items-center justify-center">
                        <span className="text-[var(--color-trust)] font-serif text-lg">RG</span>
                      </div>
                      <div>
                        <div className="font-serif font-light text-[var(--color-off-black)]">Rick Grueble</div>
                        <div className="text-sm text-[var(--color-ink-300)]">Visions First Realty</div>
                      </div>
                    </div>
                    <p className="text-base text-[var(--color-ink-300)] leading-relaxed italic">
                      "DMR Media delivered top rankings for real estate search terms, a higher volume of qualified leads, and transparent reporting the entire way. I now get 2–3 qualified leads per day."
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="rounded-[24px] border border-[var(--color-ink-200)] bg-white/80 p-6 backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-[var(--color-trust)]/10 flex items-center justify-center">
                        <span className="text-[var(--color-trust)] font-serif text-lg">JG</span>
                      </div>
                      <div>
                        <div className="font-serif font-light text-[var(--color-off-black)]">Jade Goodhue</div>
                        <div className="text-sm text-[var(--color-ink-300)]">Legendary Real Estate</div>
                      </div>
                    </div>
                    <p className="text-base text-[var(--color-ink-300)] leading-relaxed italic">
                      "He works with us like a partner, rather than a vendor. If you have the opportunity to work with him, just DO IT. You'll be grateful you did!"
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* Application Form Section */}
          <section id="application-form" className="py-12 md:py-16">
            <div className="container-max">
              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-12"
                >
                  <div className="text-center mb-8">
                    <h2 className="text-2xl sm:text-3xl font-serif font-light text-[var(--color-off-black)] mb-4 tracking-tight">
                      The Gate
                    </h2>
                    <p className="text-lg sm:text-xl text-[var(--color-ink-300)] max-w-2xl mx-auto leading-relaxed">
                      Because we keep these sessions small, we ask a few questions before inviting anyone in.
                    </p>
                    <p className="text-base sm:text-lg text-[var(--color-ink-300)] max-w-2xl mx-auto leading-relaxed mt-4">
                      This helps us make sure it's useful for you — and that the group is a good fit.
                    </p>
                  </div>

                  {/* Qualification Form */}
                  <div className="rounded-[32px] border-2 border-[var(--color-trust)] bg-white shadow-[0_24px_64px_rgba(15,15,15,0.12)] px-6 py-8 md:px-12 md:py-12 relative overflow-hidden">
                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-trust)]/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-[var(--color-trust)]/5 rounded-full blur-3xl -ml-24 -mb-24"></div>
                    
                    {/* 2 Minutes Fillout Time Bubble */}
                    <div className="absolute top-4 left-4 z-20">
                      <div className="bg-[var(--color-trust)]/10 backdrop-blur-sm border border-[var(--color-trust)]/20 rounded-full px-4 py-2 flex items-center gap-2 shadow-sm">
                        <svg className="w-4 h-4 text-[var(--color-trust)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm font-medium text-[var(--color-off-black)]">2 minutes fillout-time</span>
                      </div>
                    </div>
                    
                    <div className="relative z-10 pt-12 md:pt-16">
                      <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Market Commitment - Full-time agent */}
                        <div className="space-y-3">
                          <label htmlFor="isFullTime" className="block text-lg font-medium text-[var(--color-off-black)] mb-3">
                            Are you a full-time real estate agent?
                          </label>
                          <select
                            id="isFullTime"
                            required
                            value={formData.isFullTime}
                            onChange={(e) => setFormData({ ...formData, isFullTime: e.target.value })}
                            className="w-full px-5 py-4 text-lg rounded-[20px] border-2 border-[var(--color-ink-200)] bg-white text-[var(--color-off-black)] font-serif focus:outline-none focus:border-[var(--color-trust)] focus:ring-2 focus:ring-[var(--color-trust)]/20 transition-all duration-300"
                          >
                            <option value="">Select an option</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                          </select>
                        </div>

                        {/* Active market */}
                        <div className="space-y-3">
                          <label htmlFor="activeMarket" className="block text-lg font-medium text-[var(--color-off-black)] mb-3">
                            What market do you actively serve right now?
                          </label>
                          <input
                            type="text"
                            id="activeMarket"
                            required
                            value={formData.activeMarket}
                            onChange={(e) => setFormData({ ...formData, activeMarket: e.target.value })}
                            className="w-full px-5 py-4 text-lg rounded-[20px] border-2 border-[var(--color-ink-200)] bg-white text-[var(--color-off-black)] font-serif focus:outline-none focus:border-[var(--color-trust)] focus:ring-2 focus:ring-[var(--color-trust)]/20 transition-all duration-300"
                            placeholder="e.g., St. Petersburg, FL"
                          />
                        </div>

                        {/* Listing situation */}
                        <div className="space-y-3">
                          <label htmlFor="listingSituation" className="block text-lg font-medium text-[var(--color-off-black)] mb-3">
                            Which best describes your current listing situation?
                          </label>
                          <select
                            id="listingSituation"
                            required
                            value={formData.listingSituation}
                            onChange={(e) => setFormData({ ...formData, listingSituation: e.target.value })}
                            className="w-full px-5 py-4 text-lg rounded-[20px] border-2 border-[var(--color-ink-200)] bg-white text-[var(--color-off-black)] font-serif focus:outline-none focus:border-[var(--color-trust)] focus:ring-2 focus:ring-[var(--color-trust)]/20 transition-all duration-300"
                          >
                            <option value="">Select an option</option>
                            <option value="rely-referrals">I rely heavily on referrals and want more control</option>
                            <option value="buyer-leads-struggle">I get buyer leads but struggle converting to listings</option>
                            <option value="inconsistent-want-predictability">I take listings inconsistently and want predictability</option>
                            <option value="exploring-options">I'm just exploring options</option>
                          </select>
                        </div>

                        {/* Decision maker */}
                        <div className="space-y-3">
                          <label htmlFor="isDecisionMaker" className="block text-lg font-medium text-[var(--color-off-black)] mb-3">
                            Are you the primary decision-maker for your business?
                          </label>
                          <select
                            id="isDecisionMaker"
                            required
                            value={formData.isDecisionMaker}
                            onChange={(e) => setFormData({ ...formData, isDecisionMaker: e.target.value })}
                            className="w-full px-5 py-4 text-lg rounded-[20px] border-2 border-[var(--color-ink-200)] bg-white text-[var(--color-off-black)] font-serif focus:outline-none focus:border-[var(--color-trust)] focus:ring-2 focus:ring-[var(--color-trust)]/20 transition-all duration-300"
                          >
                            <option value="">Select an option</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                          </select>
                        </div>

                        {/* How many listings in last 12 months */}
                        <div className="space-y-3">
                          <label htmlFor="listingsLast12Months" className="block text-lg font-medium text-[var(--color-off-black)] mb-3">
                            How many listings have you done in the last 12 months?
                          </label>
                          <input
                            type="number"
                            id="listingsLast12Months"
                            required
                            min="0"
                            value={formData.listingsLast12Months}
                            onChange={(e) => setFormData({ ...formData, listingsLast12Months: e.target.value })}
                            className="w-full px-5 py-4 text-lg rounded-[20px] border-2 border-[var(--color-ink-200)] bg-white text-[var(--color-off-black)] font-serif focus:outline-none focus:border-[var(--color-trust)] focus:ring-2 focus:ring-[var(--color-trust)]/20 transition-all duration-300"
                            placeholder="Enter number of listings"
                          />
                        </div>

                        {/* Which tools do you have */}
                        <div className="space-y-3">
                          <label className="block text-lg font-medium text-[var(--color-off-black)] mb-4">
                            Which of the following tools do you have?
                          </label>
                          <div className="space-y-4">
                            {['CRM', 'Ads Account'].map((tool) => (
                              <label
                                key={tool}
                                className="flex items-center gap-4 cursor-pointer group p-4 rounded-[16px] border-2 border-transparent hover:border-[var(--color-trust)]/30 hover:bg-[var(--color-trust)]/5 transition-all duration-300"
                              >
                                <input
                                  type="checkbox"
                                  checked={formData.tools.includes(tool)}
                                  onChange={() => handleToolChange(tool)}
                                  className="w-6 h-6 rounded border-2 border-[var(--color-ink-200)] text-[var(--color-trust)] focus:ring-[var(--color-trust)] focus:ring-2 cursor-pointer"
                                />
                                <span className="text-lg text-[var(--color-off-black)] font-serif group-hover:text-[var(--color-trust)] transition-colors duration-300">
                                  {tool}
                                </span>
                              </label>
                            ))}
                          </div>
                        </div>

                        {/* Lead response time */}
                        <div className="space-y-3">
                          <label htmlFor="leadResponseTime" className="block text-lg font-medium text-[var(--color-off-black)] mb-3">
                            What is your typical time to respond to a lead?
                          </label>
                          <select
                            id="leadResponseTime"
                            required
                            value={formData.leadResponseTime}
                            onChange={(e) => setFormData({ ...formData, leadResponseTime: e.target.value })}
                            className="w-full px-5 py-4 text-lg rounded-[20px] border-2 border-[var(--color-ink-200)] bg-white text-[var(--color-off-black)] font-serif focus:outline-none focus:border-[var(--color-trust)] focus:ring-2 focus:ring-[var(--color-trust)]/20 transition-all duration-300"
                          >
                            <option value="">Select an option</option>
                            <option value="immediately">Immediately (within minutes)</option>
                            <option value="within-hour">Within 1 hour</option>
                            <option value="within-day">Within 24 hours</option>
                            <option value="1-2-days">1-2 days</option>
                            <option value="3+days">3+ days</option>
                          </select>
                        </div>

                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full inline-flex items-center justify-center gap-3 rounded-full px-8 py-5 bg-[var(--color-off-black)] text-white uppercase tracking-[0.3em] text-sm font-semibold hover:bg-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                        >
                          {isSubmitting ? 'Submitting...' : 'Submit Application'}
                        </motion.button>
                      </form>
                    </div>
                  </div>
                </motion.div>

                {/* What Happens Next Section */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-center mt-12"
                >
                  <div className="rounded-[24px] border border-[var(--color-ink-200)] bg-white/80 backdrop-blur-sm p-8 md:p-10">
                    <h3 className="text-xl sm:text-2xl font-serif font-light text-[var(--color-off-black)] mb-4">
                      What Happens Next
                    </h3>
                    <p className="text-base sm:text-lg text-[var(--color-ink-300)] leading-relaxed max-w-2xl mx-auto">
                      If it looks like this would be helpful, we'll send an invite to the next small group session.
                    </p>
                    <p className="text-base sm:text-lg text-[var(--color-ink-300)] leading-relaxed max-w-2xl mx-auto mt-4">
                      If not, we'll point you to the best free resources based on where you're at.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Social Proof - Testimonials */}
          <Testimonials />

          {/* Social Proof - Reviews Aggregate */}
          <ReviewsAggregate />
        </>
      )}
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-white via-white/95 to-[var(--surface-base)] flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 rounded-full bg-[var(--color-trust)]/10 flex items-center justify-center mx-auto mb-4 animate-pulse">
            <svg className="w-6 h-6 text-[var(--color-trust)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-lg text-[var(--color-ink-300)]">Loading...</p>
        </div>
      </div>
    }>
      <ThankYouContent />
    </Suspense>
  );
}
