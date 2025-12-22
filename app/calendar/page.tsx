'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function CalendarPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    closingsLast12Months: '',
    tools: [] as string[],
    websiteUrl: '',
    leadResponseTime: '',
    isFullTime: '',
    activeMarket: '',
    listingSituation: '',
    isDecisionMaker: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    
    // Validate website URL if Website is checked
    if (formData.tools.includes('Website') && !formData.websiteUrl.trim()) {
      alert('Please provide your website URL.');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Submit form data to API
      const response = await fetch('/api/qualification-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Form submission failed');
      }

      // Determine qualification status and redirect
      // Auto-disqualify: Not full-time
      if (formData.isFullTime === 'no') {
        router.push('/landing/qualification-result?status=disqualified');
        return;
      }

      // Auto-disqualify: Just exploring options
      if (formData.listingSituation === 'exploring-options') {
        router.push('/landing/qualification-result?status=disqualified');
        return;
      }

      // Auto-disqualify: Not primary decision-maker
      if (formData.isDecisionMaker === 'no') {
        router.push('/landing/qualification-result?status=disqualified');
        return;
      }

      // DQ if response time is longer than 1 hour
      if (formData.leadResponseTime === 'within-day' || formData.leadResponseTime === '1-2-days' || formData.leadResponseTime === '3+days') {
        router.push('/landing/qualification-result?status=disqualified');
        return;
      }
      
      // Auto-disqualify: Less than 18 closings in last 12 months
      const closingsCount = parseInt(formData.closingsLast12Months, 10);
      if (isNaN(closingsCount) || closingsCount < 18) {
        router.push('/landing/qualification-result?status=disqualified');
        return;
      }
      
      // Qualified - redirect to qualification-result
      router.push('/landing/qualification-result?status=qualified');
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 md:mb-16"
          >
            <div className="text-center mb-12 md:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[var(--color-off-black)] mb-6 md:mb-8 tracking-tight">
                Apply for a 1:1 Strategy Session (Limited to Serious Agents)
                <span className="text-[var(--color-trust)] text-[1.05em]">.</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-[var(--color-ink-300)] max-w-3xl mx-auto leading-relaxed">
                We only accept agents who already have deal flow and want to add <em>2–3 closings</em> per month using a <em>predictable system</em>. If selected, you'll receive a custom roadmap (a <em>$3,500 value</em>) built specifically for your market.
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

                  {/* How many closings in last 12 months */}
                  <div className="space-y-3">
                    <label htmlFor="closingsLast12Months" className="block text-lg font-medium text-[var(--color-off-black)] mb-3">
                      How many closings have you done in the last 12 months?
                    </label>
                    <input
                      type="number"
                      id="closingsLast12Months"
                      required
                      min="0"
                      value={formData.closingsLast12Months}
                      onChange={(e) => setFormData({ ...formData, closingsLast12Months: e.target.value })}
                      className="w-full px-5 py-4 text-lg rounded-[20px] border-2 border-[var(--color-ink-200)] bg-white text-[var(--color-off-black)] font-serif focus:outline-none focus:border-[var(--color-trust)] focus:ring-2 focus:ring-[var(--color-trust)]/20 transition-all duration-300"
                      placeholder="Enter number of closings"
                    />
                  </div>

                  {/* Which tools do you have */}
                  <div className="space-y-3">
                    <label className="block text-lg font-medium text-[var(--color-off-black)] mb-4">
                      Which of the following tools do you have?
                    </label>
                    <div className="space-y-4">
                      {['CRM', 'Website', 'Ads Account'].map((tool) => (
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

                  {/* Website URL - Only show if Website is checked */}
                  {formData.tools.includes('Website') && (
                    <div className="space-y-3">
                      <label htmlFor="websiteUrl" className="block text-lg font-medium text-[var(--color-off-black)] mb-3">
                        Website URL
                      </label>
                      <input
                        type="url"
                        id="websiteUrl"
                        required
                        value={formData.websiteUrl}
                        onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                        className="w-full px-5 py-4 text-lg rounded-[20px] border-2 border-[var(--color-ink-200)] bg-white text-[var(--color-off-black)] font-serif focus:outline-none focus:border-[var(--color-trust)] focus:ring-2 focus:ring-[var(--color-trust)]/20 transition-all duration-300"
                        placeholder="https://yourwebsite.com"
                      />
                    </div>
                  )}

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
        </div>
      </div>
    </div>
  );
}
