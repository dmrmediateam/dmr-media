'use client';

import { useEffect, Suspense } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams, useRouter } from 'next/navigation';
import Testimonials from '@/components/Testimonials';
import ReviewsAggregate from '@/components/ReviewsAggregate';

function QualificationResultContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const status = searchParams.get('status');

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
          <p className="text-lg text-[var(--color-ink-300)]">Invalid qualification result.</p>
        </div>
      </div>
    );
  }

  // Disqualified Page
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
                Thank You for Your Interest
                <span className="text-[var(--color-trust)] text-[1.05em]">.</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-[var(--color-ink-300)] max-w-2xl mx-auto leading-relaxed mb-8">
                I don't think it's a good fit at this time.
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
                Here are a few resources I'd recommend
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
                onClick={() => router.push('/landing/addlistings')}
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

  // Maybe Page
  if (status === 'maybe') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-white/95 to-[var(--surface-base)]">
        <div className="container-max py-12 md:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-yellow-100 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-10 h-10 md:w-12 md:h-12 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[var(--color-off-black)] mb-4 tracking-tight">
                We'll Be In Touch
                <span className="text-[var(--color-trust)] text-[1.05em]">.</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-[var(--color-ink-300)] max-w-2xl mx-auto leading-relaxed mb-8">
                Thank you for your application. We're reviewing your information and will reach out if we think there's a good fit. In the meantime, make sure to check your email for the webinar details.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push('/landing/addlistings')}
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

  // Qualified Page
  if (status === 'qualified') {
    const email = searchParams.get('email');
    const name = searchParams.get('name');
    const phone = searchParams.get('phone');

    // Format US phone number to E.164 format (+1XXXXXXXXXX)
    const formatUSPhone = (phoneNumber: string | null): string | null => {
      if (!phoneNumber) return null;
      
      // Remove all non-digit characters
      const digitsOnly = phoneNumber.replace(/\D/g, '');
      
      // If already starts with 1 and has 11 digits, add +
      if (digitsOnly.length === 11 && digitsOnly.startsWith('1')) {
        return `+${digitsOnly}`;
      }
      
      // If has 10 digits, assume US and add +1
      if (digitsOnly.length === 10) {
        return `+1${digitsOnly}`;
      }
      
      // If already in E.164 format, return as-is
      if (phoneNumber.startsWith('+1')) {
        return phoneNumber;
      }
      
      // Otherwise, try to format it
      return phoneNumber;
    };

    // Build Aura embed URL with pre-populated fields
    const buildAuraUrl = () => {
      // Use embed URL with query parameters for pre-population
      let url = 'https://app.aura-app.ai/dmr-media/exclusive-webinar-11/embed?theme=light';
      if (name) url += `&name=${encodeURIComponent(name)}`;
      if (email) url += `&email=${encodeURIComponent(email)}`;
      const formattedPhone = formatUSPhone(phone);
      if (formattedPhone) url += `&phone=${encodeURIComponent(formattedPhone)}`;
      return url;
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-white via-white/95 to-[var(--surface-base)]">
          <div className="container-max py-12 md:py-16 lg:py-20">
          <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-8 md:mb-12"
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
                <p className="text-lg sm:text-xl md:text-2xl text-[var(--color-ink-300)] max-w-2xl mx-auto leading-relaxed mb-8">
                You've been selected for the Private Implementation Session. After the small group session, if you'd like to explore this one-on-one, you can book a 1:1 Strategy Session below to receive your custom roadmap (a <em>$3,500 value</em>) built specifically for your market.
                </p>
              </motion.div>

            {/* Aura Booking Embed */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-16"
              >
              <div className="max-w-6xl mx-auto">
                <div 
                  style={{ 
                    width: '100%', 
                    minHeight: '600px',
                    height: 'auto',
                    overflow: 'hidden', 
                    borderRadius: '10px',
                    border: '1px solid rgba(0,0,0,0.1)'
                  }}
                >
                  <iframe
                    key={`aura-embed-${email}-${name}`}
                    src={buildAuraUrl()}
                    title="Strategy Call [Webinar Exclusive] - Booking"
                    style={{ 
                      width: '100%', 
                      minHeight: '600px',
                      height: '100%',
                      border: 0,
                      display: 'block'
                    }}
                    allowFullScreen
                    loading="eager"
                    referrerPolicy="no-referrer-when-downgrade"
                    onLoad={() => {
                      // Force resize after load
                      if (window.parent) {
                        window.parent.postMessage({ type: 'iframe-resize' }, '*');
                      }
                    }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Testimonials Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-16"
            >
              <Testimonials />
            </motion.div>

            {/* Reviews Aggregate Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <ReviewsAggregate />
              </motion.div>
            </div>
          </div>
        </div>
    );
  }

  return null;
}

export default function QualificationResultPage() {
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
      <QualificationResultContent />
    </Suspense>
  );
}

