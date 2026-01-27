'use client';

import { useEffect, useState, Suspense } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import ReviewsAggregate from '@/components/ReviewsAggregate';
import { getStoredUTMParams, trackConversion } from '@/lib/utmTracking';

function ApplyContent() {
  const router = useRouter();
  const [showThankYou, setShowThankYou] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    closingsPerMonth: '',
    currentMarketing: '',
    tools: [] as string[],
    leadResponseTime: '',
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

  // Show thank you message for 2 seconds, then fade to form
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowThankYou(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

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
    
    // Get stored UTM parameters
    const utmParams = getStoredUTMParams();
    
    try {
      // Submit form data to API with email
      const response = await fetch('/api/strategy-call-apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
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

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Form submission failed');
      }

      // Determine qualification status and redirect
      // DQ if response time is longer than 1 hour
      if (formData.leadResponseTime === 'within-day' || formData.leadResponseTime === '1-2-days' || formData.leadResponseTime === '3+days') {
        // Disqualified - response time too long
        router.push('/landing/qualification-result?status=disqualified');
        return;
      }
      
      const hasWebsite = formData.tools.includes('Website');
      const hasAds = formData.tools.includes('Ads Account');
      
      if (formData.closingsPerMonth === '0') {
        // Disqualified - 0 closings
        router.push('/landing/qualification-result?status=disqualified');
      } else if (formData.closingsPerMonth === '1-2' && (!hasWebsite || !hasAds)) {
        // Maybe - 1-2 closings but missing website or ads
        router.push('/landing/qualification-result?status=maybe');
      } else {
        // Track conversion
        trackConversion('Lead', { form_type: 'strategy_call_apply' });
        
        // Qualified
        router.push('/landing/qualification-result?status=qualified');
      }
    } catch (error: any) {
      console.error('Form submission error:', error);
      alert(error.message || 'Something went wrong. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-white/95 to-[var(--surface-base)]">
      <div className="container-max py-12 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Thank You Message - Shows for 2 seconds */}
          {showThankYou && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center min-h-[60vh] text-center"
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
                Apply for Your Strategy Call
                <span className="text-[var(--color-trust)] text-[1.05em]">.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg sm:text-xl text-[var(--color-ink-300)] max-w-2xl mx-auto"
              >
                Complete the form below to apply for your strategy call.
              </motion.p>
            </motion.div>
          )}

          {/* Application Form - Shows after thank you message */}
          {!showThankYou && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12 md:mb-16"
            >
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[var(--color-off-black)] mb-6 md:mb-8 tracking-tight">
                  Apply for a 1:1 Strategy Session
                  <span className="text-[var(--color-trust)] text-[1.05em]">.</span>
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl text-[var(--color-ink-300)] max-w-3xl mx-auto leading-relaxed">
                  We only bring on <em>5 new clients</em> per month. We only accept agents who already have deal flow and want to add <em>2–3 closings</em> per month using a <em>predictable system</em>. If selected, you'll receive a custom roadmap (a <em>$950 value</em>) built specifically for your market.
                </p>
              </div>

            {/* Application Form */}
            <div className="rounded-[32px] border-2 border-[var(--color-trust)] bg-white shadow-[0_24px_64px_rgba(15,15,15,0.12)] px-6 py-8 md:px-12 md:py-12 relative overflow-hidden">
              {/* Decorative Background Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-trust)]/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[var(--color-trust)]/5 rounded-full blur-3xl -ml-24 -mb-24"></div>
              
              <div className="relative z-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-base uppercase tracking-[0.3em] text-[var(--color-ink-300)] mb-2">
                      Email Address
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

                  {/* How many closings per month */}
                  <div>
                    <label htmlFor="closingsPerMonth" className="block text-base uppercase tracking-[0.3em] text-[var(--color-ink-300)] mb-2">
                      How many closings are you doing each month?
                    </label>
                    <select
                      id="closingsPerMonth"
                      required
                      value={formData.closingsPerMonth}
                      onChange={(e) => setFormData({ ...formData, closingsPerMonth: e.target.value })}
                      className="w-full px-4 py-3 rounded-[20px] border border-[var(--color-ink-200)] bg-white/90 text-[var(--color-off-black)] font-serif focus:outline-none focus:border-[var(--color-trust)] transition-colors duration-300"
                    >
                      <option value="">Select an option</option>
                      <option value="0">0 closings</option>
                      <option value="1-2">1-2 closings</option>
                      <option value="3-5">3-5 closings</option>
                      <option value="6-10">6-10 closings</option>
                      <option value="11-15">11-15 closings</option>
                      <option value="16+">16+ closings</option>
                    </select>
                  </div>

                  {/* What are you currently doing for marketing */}
                  <div>
                    <label htmlFor="currentMarketing" className="block text-base uppercase tracking-[0.3em] text-[var(--color-ink-300)] mb-2">
                      What are you currently doing for marketing?
                    </label>
                    <textarea
                      id="currentMarketing"
                      required
                      value={formData.currentMarketing}
                      onChange={(e) => setFormData({ ...formData, currentMarketing: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 rounded-[20px] border border-[var(--color-ink-200)] bg-white/90 text-[var(--color-off-black)] font-serif focus:outline-none focus:border-[var(--color-trust)] transition-colors duration-300 resize-none"
                      placeholder="Describe your current marketing efforts..."
                    />
                  </div>

                  {/* Which tools do you have */}
                  <div>
                    <label className="block text-base uppercase tracking-[0.3em] text-[var(--color-ink-300)] mb-3">
                      Which of the following tools do you have?
                    </label>
                    <div className="space-y-3">
                      {['CRM', 'Website', 'Ads Account'].map((tool) => (
                        <label
                          key={tool}
                          className="flex items-center gap-3 cursor-pointer group"
                        >
                          <input
                            type="checkbox"
                            checked={formData.tools.includes(tool)}
                            onChange={() => handleToolChange(tool)}
                            className="w-5 h-5 rounded border-[var(--color-ink-200)] text-[var(--color-trust)] focus:ring-[var(--color-trust)] focus:ring-2"
                          />
                          <span className="text-base text-[var(--color-off-black)] font-serif group-hover:text-[var(--color-trust)] transition-colors duration-300">
                            {tool}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Lead response time */}
                  <div>
                    <label htmlFor="leadResponseTime" className="block text-base uppercase tracking-[0.3em] text-[var(--color-ink-300)] mb-2">
                      What is your typical time to respond to a lead?
                    </label>
                    <select
                      id="leadResponseTime"
                      required
                      value={formData.leadResponseTime}
                      onChange={(e) => setFormData({ ...formData, leadResponseTime: e.target.value })}
                      className="w-full px-4 py-3 rounded-[20px] border border-[var(--color-ink-200)] bg-white/90 text-[var(--color-off-black)] font-serif focus:outline-none focus:border-[var(--color-trust)] transition-colors duration-300"
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
          )}

        </div>
      </div>

      {/* Testimonials Section - Only show after thank you message */}
      {!showThankYou && (
        <ReviewsAggregate />
      )}
    </div>
  );
}

export default function ApplyPage() {
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
      <ApplyContent />
    </Suspense>
  );
}

