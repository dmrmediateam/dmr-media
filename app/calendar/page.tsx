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
    <div className="min-h-screen bg-white">
      <div className="container-max py-24 md:py-32">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 md:mb-24"
          >
            <div className="text-center mb-16 md:mb-24">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[var(--color-off-black)] mb-8 tracking-tight">
                Apply for a 1:1 Strategy Session
              </h1>
              <p className="text-base md:text-lg text-[var(--color-ink-300)] max-w-2xl mx-auto leading-relaxed font-serif">
                We only bring on <em>5 new clients</em> per month. We only accept agents who already have deal flow and want to add <em>2–3 closings</em> per month using a <em>predictable system</em>. If selected, you'll receive a custom roadmap (a <em>$3,500 value</em>) built specifically for your market.
              </p>
            </div>

            {/* Qualification Form */}
            <div className="border-b border-[var(--color-ink-200)] pb-16">
              <form onSubmit={handleSubmit} className="space-y-12">
                  {/* Market Commitment - Full-time agent */}
                  <div className="space-y-4">
                    <label htmlFor="isFullTime" className="block text-sm font-serif text-[var(--color-off-black)] uppercase tracking-[0.2em]">
                      Are you a full-time real estate agent?
                    </label>
                    <select
                      id="isFullTime"
                      required
                      value={formData.isFullTime}
                      onChange={(e) => setFormData({ ...formData, isFullTime: e.target.value })}
                      className="w-full px-0 py-3 text-base border-b border-[var(--color-ink-200)] bg-transparent text-[var(--color-off-black)] font-serif focus:outline-none focus:border-[var(--color-off-black)] transition-colors duration-300"
                    >
                      <option value="">Select an option</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
        </div>

                  {/* Active market */}
                  <div className="space-y-4">
                    <label htmlFor="activeMarket" className="block text-sm font-serif text-[var(--color-off-black)] uppercase tracking-[0.2em]">
                      What market do you actively serve right now?
                    </label>
                    <input
                      type="text"
                      id="activeMarket"
                      required
                      value={formData.activeMarket}
                      onChange={(e) => setFormData({ ...formData, activeMarket: e.target.value })}
                      className="w-full px-0 py-3 text-base border-b border-[var(--color-ink-200)] bg-transparent text-[var(--color-off-black)] font-serif focus:outline-none focus:border-[var(--color-off-black)] transition-colors duration-300 placeholder:text-[var(--color-ink-300)]"
                      placeholder="e.g., St. Petersburg, FL"
              />
            </div>

                  {/* Listing situation */}
                  <div className="space-y-4">
                    <label htmlFor="listingSituation" className="block text-sm font-serif text-[var(--color-off-black)] uppercase tracking-[0.2em]">
                      Which best describes your current listing situation?
                    </label>
                    <select
                      id="listingSituation"
                      required
                      value={formData.listingSituation}
                      onChange={(e) => setFormData({ ...formData, listingSituation: e.target.value })}
                      className="w-full px-0 py-3 text-base border-b border-[var(--color-ink-200)] bg-transparent text-[var(--color-off-black)] font-serif focus:outline-none focus:border-[var(--color-off-black)] transition-colors duration-300"
                    >
                      <option value="">Select an option</option>
                      <option value="rely-referrals">I rely heavily on referrals and want more control</option>
                      <option value="buyer-leads-struggle">I get buyer leads but struggle converting to listings</option>
                      <option value="inconsistent-want-predictability">I take listings inconsistently and want predictability</option>
                      <option value="exploring-options">I'm just exploring options</option>
                    </select>
          </div>

                  {/* Decision maker */}
                  <div className="space-y-4">
                    <label htmlFor="isDecisionMaker" className="block text-sm font-serif text-[var(--color-off-black)] uppercase tracking-[0.2em]">
                      Are you the primary decision-maker for your business?
                    </label>
                    <select
                      id="isDecisionMaker"
                      required
                      value={formData.isDecisionMaker}
                      onChange={(e) => setFormData({ ...formData, isDecisionMaker: e.target.value })}
                      className="w-full px-0 py-3 text-base border-b border-[var(--color-ink-200)] bg-transparent text-[var(--color-off-black)] font-serif focus:outline-none focus:border-[var(--color-off-black)] transition-colors duration-300"
                    >
                      <option value="">Select an option</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
        </div>

                  {/* How many closings in last 12 months */}
                  <div className="space-y-4">
                    <label htmlFor="closingsLast12Months" className="block text-sm font-serif text-[var(--color-off-black)] uppercase tracking-[0.2em]">
                      How many closings have you done in the last 12 months?
                    </label>
                    <input
                      type="number"
                      id="closingsLast12Months"
                      required
                      min="0"
                      value={formData.closingsLast12Months}
                      onChange={(e) => setFormData({ ...formData, closingsLast12Months: e.target.value })}
                      className="w-full px-0 py-3 text-base border-b border-[var(--color-ink-200)] bg-transparent text-[var(--color-off-black)] font-serif focus:outline-none focus:border-[var(--color-off-black)] transition-colors duration-300 placeholder:text-[var(--color-ink-300)]"
                      placeholder="Enter number of closings"
                    />
          </div>

                  {/* Which tools do you have */}
                  <div className="space-y-4">
                    <label className="block text-sm font-serif text-[var(--color-off-black)] uppercase tracking-[0.2em]">
                      Which of the following tools do you have?
                    </label>
                    <div className="space-y-6">
                      {['CRM', 'Website', 'Ads Account'].map((tool) => (
                        <label
                          key={tool}
                          className="flex items-center gap-4 cursor-pointer group"
                        >
                          <input
                            type="checkbox"
                            checked={formData.tools.includes(tool)}
                            onChange={() => handleToolChange(tool)}
                            className="w-5 h-5 border border-[var(--color-off-black)] bg-transparent text-[var(--color-off-black)] focus:ring-0 focus:ring-offset-0 cursor-pointer accent-[var(--color-off-black)]"
                          />
                          <span className="text-base text-[var(--color-off-black)] font-serif group-hover:opacity-60 transition-opacity duration-300">
                            {tool}
                          </span>
                        </label>
                      ))}
              </div>
            </div>

                  {/* Website URL - Only show if Website is checked */}
                  {formData.tools.includes('Website') && (
                    <div className="space-y-4">
                      <label htmlFor="websiteUrl" className="block text-sm font-serif text-[var(--color-off-black)] uppercase tracking-[0.2em]">
                        Website URL
                      </label>
                      <input
                        type="url"
                        id="websiteUrl"
                        required
                        value={formData.websiteUrl}
                        onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                        className="w-full px-0 py-3 text-base border-b border-[var(--color-ink-200)] bg-transparent text-[var(--color-off-black)] font-serif focus:outline-none focus:border-[var(--color-off-black)] transition-colors duration-300 placeholder:text-[var(--color-ink-300)]"
                        placeholder="https://yourwebsite.com"
                      />
              </div>
                  )}

                  {/* Lead response time */}
                  <div className="space-y-4">
                    <label htmlFor="leadResponseTime" className="block text-sm font-serif text-[var(--color-off-black)] uppercase tracking-[0.2em]">
                      What is your typical time to respond to a lead?
                    </label>
                    <select
                      id="leadResponseTime"
                      required
                      value={formData.leadResponseTime}
                      onChange={(e) => setFormData({ ...formData, leadResponseTime: e.target.value })}
                      className="w-full px-0 py-3 text-base border-b border-[var(--color-ink-200)] bg-transparent text-[var(--color-off-black)] font-serif focus:outline-none focus:border-[var(--color-off-black)] transition-colors duration-300"
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
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center px-8 py-3 bg-[var(--color-off-black)] text-white uppercase tracking-[0.12em] text-xs font-serif hover:opacity-85 transition-opacity duration-300 border border-[var(--color-off-black)] disabled:opacity-50 disabled:cursor-not-allowed mt-8"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </motion.button>
                </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
