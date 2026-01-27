'use client';

import { useEffect, Suspense } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams, useRouter } from 'next/navigation';

function ThankYouFeb2026Content() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const status = searchParams.get('status');
  const email = searchParams.get('email');
  const name = searchParams.get('name');

  // Hide header, footer, and AI chatbot for this page
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

  if (!status) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-white/95 to-[var(--surface-base)] flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-[var(--color-ink-300)]">Invalid application result.</p>
        </div>
      </div>
    );
  }

  // Disqualified Page - Doesn't meet $350k+ average home price & 12+ listings in 2025
  if (status === 'disqualified') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-white/95 to-[var(--surface-base)]">
        <div className="container-max py-12 md:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[var(--color-trust)]/10 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-10 h-10 md:w-12 md:h-12 text-[var(--color-trust)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[var(--color-off-black)] mb-4 tracking-tight">
                Thank You for Your Application
                <span className="text-[var(--color-trust)] text-[1.05em]">.</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-[var(--color-ink-300)] max-w-2xl mx-auto leading-relaxed mb-4">
                We've received your application for the February 2026 Private Workshop.
              </p>
              <p className="text-base sm:text-lg text-[var(--color-ink-400)] max-w-2xl mx-auto leading-relaxed mb-8">
                This workshop is designed specifically for established agents with a $350k+ average sale price and 12+ homes sold in 2025. We appreciate your interest and will be in touch if opportunities arise that better match your profile.
              </p>
            </motion.div>

            {/* Recommended Resources Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <h2 className="text-2xl sm:text-3xl font-serif font-light text-[var(--color-off-black)] mb-6 text-center">
                Resources That Might Help
                <span className="text-[var(--color-trust)] text-[1.05em]">.</span>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-3xl mx-auto">
                {/* YouTube Video Resource */}
                <motion.a
                  href="https://www.youtube.com/watch?v=RGWKAgFRtuw"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="rounded-[24px] border-2 border-[var(--color-trust)]/20 bg-white shadow-[0_8px_24px_rgba(15,15,15,0.08)] p-6 md:p-8 hover:shadow-[0_12px_32px_rgba(15,15,15,0.12)] transition-all duration-300 block cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-full bg-[var(--color-trust)]/10 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[var(--color-trust)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--color-off-black)] mb-2">
                    Watch Our Training Video
                  </h3>
                  <p className="text-[var(--color-ink-300)] leading-relaxed mb-4">
                    Learn proven strategies and frameworks to help you build your foundation and scale your real estate business.
                  </p>
                  <span className="text-[var(--color-trust)] font-medium text-sm inline-flex items-center gap-1">
                    Watch Now
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </motion.a>

                {/* Blog Post Resource */}
                <motion.a
                  href="https://www.dmrmedia.org/blog/google-ads-for-realtors"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="rounded-[24px] border-2 border-[var(--color-trust)]/20 bg-white shadow-[0_8px_24px_rgba(15,15,15,0.08)] p-6 md:p-8 hover:shadow-[0_12px_32px_rgba(15,15,15,0.12)] transition-all duration-300 block cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-full bg-[var(--color-trust)]/10 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[var(--color-trust)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--color-off-black)] mb-2">
                    Google Ads for Realtors Guide
                  </h3>
                  <p className="text-[var(--color-ink-300)] leading-relaxed mb-4">
                    Discover proven 2025 strategies and frameworks to generate quality leads, boost visibility, and outpace the competition.
                  </p>
                  <span className="text-[var(--color-trust)] font-medium text-sm inline-flex items-center gap-1">
                    Read Article
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push('/landing/feb-2026')}
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 bg-[var(--color-off-black)] text-white uppercase tracking-[0.3em] text-sm font-semibold hover:bg-black transition-colors duration-300"
              >
                Return to Landing Page
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  // Qualified Page - Meets $350k+ average home price & 12+ listings in 2025
  if (status === 'qualified') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-white/95 to-[var(--surface-base)]">
        <div className="container-max py-12 md:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[var(--color-trust)]/10 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-10 h-10 md:w-12 md:h-12 text-[var(--color-trust)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[var(--color-off-black)] mb-4 tracking-tight">
                Congratulations! You're Qualified
                <span className="text-[var(--color-trust)] text-[1.05em]">.</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-[var(--color-ink-300)] max-w-2xl mx-auto leading-relaxed mb-4">
                Thank you for your application, {name ? decodeURIComponent(name) : ''}.
              </p>
              <p className="text-base sm:text-lg text-[var(--color-ink-300)] max-w-2xl mx-auto leading-relaxed mb-8">
                You've been selected for the February 11th, 2026 Private Workshop. We'll send you the workshop details and access information via email to {email ? decodeURIComponent(email) : 'your email'} shortly.
              </p>
            </motion.div>

            {/* Next Steps Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <div className="rounded-[32px] border-2 border-[var(--color-trust)] bg-white/80 backdrop-blur-sm p-8 md:p-12 shadow-[0_8px_24px_rgba(15,15,15,0.08)]">
                <h2 className="text-2xl sm:text-3xl font-serif font-light text-[var(--color-off-black)] mb-6 text-center">
                  What Happens Next
                  <span className="text-[var(--color-trust)] text-[1.05em]">.</span>
                </h2>
                <ul className="space-y-4 text-base sm:text-lg text-[var(--color-ink-300)] max-w-2xl mx-auto">
                  <li className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-[var(--color-trust)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>You'll receive an email confirmation with workshop details and access information</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-[var(--color-trust)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Join us on February 11th, 2026 at 12pm EST / 9am PST for the Private Workshop</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-[var(--color-trust)] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>We'll walk through the exact system step-by-step in a small group environment</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push('/')}
                className="inline-flex items-center gap-2 rounded-full px-8 py-4 bg-[var(--color-off-black)] text-white uppercase tracking-[0.3em] text-sm font-semibold hover:bg-black transition-colors duration-300"
              >
                Return to Home
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default function ThankYouFeb2026Page() {
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
      <ThankYouFeb2026Content />
    </Suspense>
  );
}

