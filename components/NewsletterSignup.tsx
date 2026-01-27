'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { getStoredUTMParams, trackConversion } from '@/lib/utmTracking'

export default function NewsletterSignup() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Get stored UTM parameters
    const utmParams = getStoredUTMParams()

    try {
      const response = await fetch('/api/newsletter-signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
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
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit')
      }

      // Track conversion
      trackConversion('Newsletter Signup', { form_type: 'newsletter' })

      setIsSubmitted(true)
      setIsSubmitting(false)

      // Close modal after 2 seconds
      setTimeout(() => {
        setIsOpen(false)
        setIsSubmitted(false)
        setEmail('')
      }, 2000)
    } catch (error) {
      console.error('Newsletter signup error:', error)
      setIsSubmitting(false)
      alert(error instanceof Error ? error.message : 'Failed to submit. Please try again.')
    }
  }

  return (
    <>
      {/* Inline CTA Section */}
      <div className="my-12 py-12 border-y border-[var(--color-ink-200)]">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-serif font-light text-[var(--color-off-black)] mb-4">
              Private Briefings
            </h3>
            <p className="text-base text-[var(--color-ink-300)] leading-relaxed font-serif mb-2">
              Occasional notes on positioning, demand capture, and what's actually working in real estate and professional services.
            </p>
            <p className="text-sm text-[var(--color-ink-300)] font-serif italic">
              Shared selectively. No cadence. No noise.
            </p>
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className="inline-flex items-center justify-center px-8 py-3 bg-[var(--color-off-black)] text-white uppercase tracking-[0.12em] text-xs font-serif hover:opacity-85 transition-opacity duration-300 border border-[var(--color-off-black)]"
          >
            Request access
          </button>
        </div>
      </div>

      {/* Modal/Popup */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            >
              {/* Modal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white max-w-md w-full p-8 md:p-10 space-y-8 relative"
              >
                {/* Close button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-6 right-6 text-[var(--color-ink-300)] hover:text-[var(--color-off-black)] transition-colors"
                  aria-label="Close"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-[var(--color-off-black)] flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-serif font-light text-[var(--color-off-black)] mb-2">
                      Thank you
                    </h3>
                    <p className="text-sm text-[var(--color-ink-300)] font-serif">
                      You're on the list.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="space-y-4">
                      <h3 className="text-2xl md:text-3xl font-serif font-light text-[var(--color-off-black)]">
                        Private Briefings
                      </h3>
                      <p className="text-base text-[var(--color-ink-300)] leading-relaxed font-serif">
                        Occasional notes on positioning, demand capture, and what's actually working in real estate and professional services.
                      </p>
                      <p className="text-sm text-[var(--color-ink-300)] font-serif italic">
                        Shared selectively.<br />
                        No cadence. No noise.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email address"
                          required
                          className="w-full px-0 py-3 text-base border-b border-[var(--color-ink-200)] bg-transparent text-[var(--color-off-black)] font-serif focus:outline-none focus:border-[var(--color-off-black)] transition-colors duration-300 placeholder:text-[var(--color-ink-300)]"
                        />
                        <p className="text-xs text-[var(--color-ink-300)] mt-2 font-serif italic">
                          We only send something when there's something worth sending.
                        </p>
                      </div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full inline-flex items-center justify-center px-8 py-3 bg-[var(--color-off-black)] text-white uppercase tracking-[0.12em] text-xs font-serif hover:opacity-85 transition-opacity duration-300 border border-[var(--color-off-black)] disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Submitting...' : 'Request access'}
                      </button>
                    </form>
                  </>
                )}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
