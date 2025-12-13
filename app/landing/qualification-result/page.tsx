'use client';

import { useEffect, Suspense } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams, useRouter } from 'next/navigation';
import Script from 'next/script';

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
          <p className="text-lg text-[var(--color-ink-400)]">Invalid qualification result.</p>
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
              className="text-center"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-10 h-10 md:w-12 md:h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[var(--color-off-black)] mb-4 tracking-tight">
                Thank You for Your Interest
                <span className="text-[var(--color-trust)] text-[1.05em]">.</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-[var(--color-ink-400)] max-w-2xl mx-auto leading-relaxed mb-8">
                Unfortunately, we're currently focusing on agents who are already closing deals. We recommend building your foundation first, then applying again once you have some closings under your belt.
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
              <p className="text-lg sm:text-xl md:text-2xl text-[var(--color-ink-400)] max-w-2xl mx-auto leading-relaxed mb-8">
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
    return (
      <>
        <Script
          src="https://app.iclosed.io/assets/widget.js"
          strategy="afterInteractive"
        />
        <div className="min-h-screen bg-gradient-to-br from-white via-white/95 to-[var(--surface-base)]">
          <div className="container-max py-12 md:py-16 lg:py-20">
            <div className="max-w-4xl mx-auto">
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
                <p className="text-lg sm:text-xl md:text-2xl text-[var(--color-ink-400)] max-w-2xl mx-auto leading-relaxed mb-8">
                  You've been selected for a complimentary 1:1 Strategy Session. Book your session below to receive your custom roadmap (a <em>$950 value</em>) built specifically for your market.
                </p>
              </motion.div>

              {/* iClosed Widget */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-[32px] border-2 border-[var(--color-trust)] bg-white shadow-[0_24px_64px_rgba(15,15,15,0.12)] p-6 md:p-8 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-trust)]/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-[var(--color-trust)]/5 rounded-full blur-3xl -ml-24 -mb-24"></div>
                
                <div className="relative z-10">
                  <div 
                    className="iclosed-widget" 
                    data-url="https://app.iclosed.io/e/arohm/strategy-session-950-value" 
                    title="Strategy Session ($950 Value)" 
                    style={{ width: '100%', height: '620px' }}
                  ></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </>
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
          <p className="text-lg text-[var(--color-ink-400)]">Loading...</p>
        </div>
      </div>
    }>
      <QualificationResultContent />
    </Suspense>
  );
}

