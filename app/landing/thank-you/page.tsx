'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function ThankYouPage() {
  const router = useRouter();

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

  // Video for thank you page
  const successVideoId = 'f4Bg8wzkvjM';
  const successEmbedUrl = `https://www.youtube.com/embed/${successVideoId}?autoplay=1&mute=1&loop=1&playlist=${successVideoId}&rel=0&modestbranding=1`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-white/95 to-[var(--surface-base)]">
      <div className="container-max py-12 md:py-16 lg:py-20">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-12"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[var(--color-trust)]/10 flex items-center justify-center mx-auto mb-6 md:mb-8 shadow-lg">
              <svg className="w-8 h-8 md:w-10 md:h-10 text-[var(--color-trust)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light text-[var(--color-off-black)] mb-6 md:mb-8 tracking-tight">
              You're Registered!
              <span className="text-[var(--color-trust)] text-[1.05em]">.</span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-[var(--color-ink-400)] max-w-3xl mx-auto leading-relaxed">
              Watch this quick video, then check your email and accept the invite.
            </p>
          </motion.div>

          {/* Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full rounded-[32px] overflow-hidden border-2 border-[var(--color-ink-200)] bg-white/80 backdrop-blur-sm shadow-2xl mb-8 md:mb-12"
            style={{ paddingBottom: '56.25%' }}
          >
            <iframe
              src={successEmbedUrl}
              title="Thank You - Next Steps"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
              style={{ border: 'none' }}
            />
          </motion.div>

          {/* Reminder Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[var(--color-trust)]/10 rounded-[32px] p-8 md:p-10 lg:p-12 border-2 border-[var(--color-trust)]/30 shadow-xl mb-8 md:mb-12"
          >
            <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
              <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-[var(--color-trust)]/20 flex items-center justify-center shadow-lg mx-auto md:mx-0">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-[var(--color-trust)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] mb-6 md:mb-8">
                  Next Steps
                </h2>
                <ul className="space-y-4 md:space-y-5 text-lg sm:text-xl md:text-2xl text-[var(--color-ink-400)]">
                  <li className="flex items-start gap-4 md:gap-5">
                    <span className="text-[var(--color-trust)] text-2xl md:text-3xl font-bold mt-1 flex-shrink-0">✓</span>
                    <span>Check your email inbox (and spam folder)</span>
                  </li>
                  <li className="flex items-start gap-4 md:gap-5">
                    <span className="text-[var(--color-trust)] text-2xl md:text-3xl font-bold mt-1 flex-shrink-0">✓</span>
                    <span>Look for the training invite email</span>
                  </li>
                  <li className="flex items-start gap-4 md:gap-5">
                    <span className="text-[var(--color-trust)] text-2xl md:text-3xl font-bold mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[var(--color-off-black)]">Click "Accept" on the invite</strong> to get access</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Additional Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <div className="rounded-[32px] border-2 border-[var(--color-ink-200)] bg-white/80 backdrop-blur-sm p-8 md:p-10 shadow-lg mb-8">
              <h3 className="text-2xl sm:text-3xl font-serif font-light text-[var(--color-off-black)] mb-4 md:mb-6">
                Event Details
              </h3>
              <div className="space-y-3 md:space-y-4 text-lg md:text-xl text-[var(--color-ink-400)]">
                <p>
                  <strong className="text-[var(--color-off-black)]">Date:</strong> December 17th, 2025
                </p>
                <p>
                  <strong className="text-[var(--color-off-black)]">Time:</strong> 12pm EST / 9am PST
                </p>
                <p className="pt-4 text-base md:text-lg">
                  We'll send you all the details via email. Make sure to check your inbox and accept the calendar invite!
                </p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push('/landing/addlistings')}
              className="inline-flex items-center gap-3 rounded-full px-10 py-5 bg-[var(--color-off-black)] text-white uppercase tracking-[0.3em] text-base font-semibold hover:bg-black transition-colors duration-300 shadow-lg"
            >
              Back to Landing Page
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

