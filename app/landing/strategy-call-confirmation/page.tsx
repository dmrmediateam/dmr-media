'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import CaseStudies from '@/components/CaseStudies';
import Testimonials from '@/components/Testimonials';
import ReviewsAggregate from '@/components/ReviewsAggregate';

export default function StrategyCallConfirmationPage() {
  // Hide header, footer, and AI chatbot for this landing page
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

  return (
    <div className="min-h-screen bg-[var(--color-off-white)]">
      {/* Hero Section with VSL Video - 85vh */}
      <section className="h-[85vh] flex flex-col justify-center bg-gradient-to-br from-white via-white/95 to-[var(--surface-base)] px-4">
        <div className="container-max w-full">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center mb-4 md:mb-6"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-2xl md:text-3xl lg:text-4xl font-serif font-light text-[var(--color-off-black)] mb-2 md:mb-3 tracking-tight"
              >
                Thank You for Booking
                <span className="text-[var(--color-trust)] text-[1.05em]">.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-sm md:text-base text-[var(--color-ink-400)] max-w-xl mx-auto"
              >
                Watch this quick video to learn how to accept your calendar invite
              </motion.p>
            </motion.div>

            {/* VSL Style Video */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full max-w-3xl mx-auto px-2"
            >
              <div className="relative w-full rounded-[16px] shadow-2xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/B0rKdgn2mX8?rel=0&modestbranding=1&autoplay=0"
                  title="How to Accept Calendar Invite"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Important Notice Section - 15vh (Accent) */}
      <section className="h-[15vh] flex items-center bg-red-50/60 border-y border-red-200/40">
        <div className="container-max w-full">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto px-4"
          >
            <div className="flex items-center gap-3">
              <svg className="w-4 h-4 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div className="flex-1">
                <p className="text-sm md:text-base text-[var(--color-ink-400)] leading-tight">
                  <span className="font-semibold text-[var(--color-off-black)]">Important:</span> Due to a high volume of calls, we will cancel your meeting if you do not accept the calendar invite or reply to this email within 48 hours.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We'll Cover Section */}
      <section className="py-20 bg-[var(--color-off-white)]">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <span className="uppercase tracking-[0.4em] text-[11px] text-[var(--color-ink-400)] mb-4 block">
                What to Expect
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] mb-4">
                What We'll Cover
              </h2>
              <p className="text-[var(--color-ink-400)] max-w-2xl mx-auto leading-relaxed">
                Here's a quick overview of what we'll cover so you know exactly what to expect (and can get the most out of our time together):
              </p>
            </motion.div>

            <div className="space-y-6">
              {/* Step 1 */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="bg-white p-8 md:p-10 rounded-[24px] border border-[var(--color-ink-200)] hover:border-[var(--color-trust)] transition-colors duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-[var(--color-off-black)] text-white flex items-center justify-center flex-shrink-0 font-serif text-xl rounded-full">
                    1
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-serif font-light text-[var(--color-off-black)] mb-4">
                      Get to Know Your Goals
                    </h3>
                    <p className="text-[var(--color-ink-400)] leading-relaxed text-base md:text-lg">
                      Let's be honest, giving you advice that works in New York or Cali doesn't always work in every state. We'll start by understanding your exact market, niche, and short-term goals so the recommendations fit you, not some cookie-cutter template.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="bg-white p-8 md:p-10 rounded-[24px] border border-[var(--color-ink-200)] hover:border-[var(--color-trust)] transition-colors duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-[var(--color-off-black)] text-white flex items-center justify-center flex-shrink-0 font-serif text-xl rounded-full">
                    2
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-serif font-light text-[var(--color-off-black)] mb-4">
                      Website & SEO Breakdown
                    </h3>
                    <p className="text-[var(--color-ink-400)] leading-relaxed mb-4 text-base md:text-lg">
                      We'll analyze your website & google business listing using advanced SEO tools like SEMrush to identify what's working and what's holding you back.
                    </p>
                    <div className="bg-[var(--color-off-white)] p-5 rounded-[16px] border-l-4 border-[var(--color-off-black)]">
                      <p className="text-[var(--color-off-black)] font-medium mb-3">You'll see:</p>
                      <ul className="list-disc list-inside space-y-2 text-[var(--color-ink-400)]">
                        <li>Why your site is ranking where it is</li>
                        <li>The specific fixes to boost traffic and conversions</li>
                        <li>Actionable next steps like backlink strategy, blog clusters, and on-page optimizations</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="bg-white p-8 md:p-10 rounded-[24px] border border-[var(--color-ink-200)] hover:border-[var(--color-trust)] transition-colors duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-[var(--color-off-black)] text-white flex items-center justify-center flex-shrink-0 font-serif text-xl rounded-full">
                    3
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-serif font-light text-[var(--color-off-black)] mb-4">
                      Action Plan for Predictable Listings
                    </h3>
                    <p className="text-[var(--color-ink-400)] leading-relaxed text-base md:text-lg">
                      We'll wrap up with a simple 4 month strategy to attract 2-3 more high-quality listings in your market without relying on paid leads or cold outreach.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Preparation Section */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7 }}
              className="bg-[var(--color-off-white)] p-8 md:p-12 rounded-[24px] shadow-lg border border-[var(--color-ink-200)]"
            >
              <h2 className="text-2xl md:text-3xl font-serif font-light text-[var(--color-off-black)] mb-6">
                To Get the Most from the Call, Think About:
              </h2>
              <ul className="space-y-4 text-[var(--color-ink-400)] mb-6">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--color-trust)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-base md:text-lg"><strong className="text-[var(--color-off-black)]">Your niche</strong> (Luxury, waterfront, condos, etc.)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--color-trust)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-base md:text-lg"><strong className="text-[var(--color-off-black)]">Communities or developments</strong> you want to target</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[var(--color-trust)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-base md:text-lg">Whether your market is <strong className="text-[var(--color-off-black)]">buyer-heavy, seller-heavy, or balanced</strong></span>
                </li>
              </ul>
              <p className="mt-6 text-[var(--color-ink-400)] italic text-base md:text-lg">
                No prep is required but having this in mind helps us hit the ground running.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Closing Message */}
      <section className="py-20 bg-[var(--color-off-white)]">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-lg md:text-xl text-[var(--color-ink-400)] leading-relaxed mb-8">
              Looking forward to diving in—this call is designed to give you real insights and a plan you can actually use (even if we never work together).
            </p>
            <div className="bg-white p-6 md:p-8 rounded-[24px] border border-[var(--color-ink-200)] inline-block">
              <p className="text-[var(--color-ink-400)] text-base md:text-lg">
                <strong className="text-[var(--color-off-black)]">P.S.</strong> If you'd like us to send over the full recording and a personalized video breakdown after the call, just reply "vid" to your confirmation email.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <CaseStudies />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Reviews Aggregate Section */}
      <ReviewsAggregate />

      {/* Contact Section */}
      <section className="py-16 bg-[var(--color-off-black)] text-white">
        <div className="container-max text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-serif font-light mb-4"
          >
            Questions?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-300 mb-6"
          >
            Feel free to reach out if you need any assistance.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-8 text-sm"
          >
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>team@dmrmedia.org</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+1 (920) 940-4049</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

