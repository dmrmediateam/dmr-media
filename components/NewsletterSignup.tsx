'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { getStoredUTMParams, trackConversion } from '@/lib/utmTracking'

const inputClasses =
  'w-full px-0 py-3 text-base border-b border-[var(--color-ink-200)] bg-transparent text-[var(--color-off-black)] font-serif focus:outline-none focus:border-[var(--color-off-black)] transition-colors duration-300 placeholder:text-[var(--color-ink-300)]'

export default function NewsletterSignup() {
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
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
          name: name.trim(),
          email: email.trim().toLowerCase(),
          phone: phone.trim(),
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
        setName('')
        setEmail('')
        setPhone('')
      }, 2000)
    } catch (error) {
      console.error('Newsletter signup error:', error)
      setIsSubmitting(false)
      alert(error instanceof Error ? error.message : 'Failed to submit. Please try again.')
    }
  }

  return (
    <>
      {/* CTA Section */}
      <section className="my-20 p-16 bg-[#353535]">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-light !text-white mb-5 md:mb-6 leading-[1.2] tracking-tight">
            ChatGPT Ads Are About To Change Real Estate. Early Agents Will Take The Listings
          </h3>
          <p className="text-[15px] md:text-base text-white/90 leading-[1.65] font-serif mb-4">
            In the next 30 days, buyers will start searching for homes inside ChatGPT instead of Google.
            The agents who launch first will capture the conversations before competitors even know they exist.
          </p>
          <p className="text-[15px] md:text-base text-white/90 leading-[1.65] font-serif mb-8">
            We&apos;re preparing a limited rollout for select markets.
            If you get in early, you don&apos;t compete — you become the default.
          </p>
          <button
            onClick={() => setIsOpen(true)}
            className="inline-flex items-center justify-center px-8 py-3.5 bg-[var(--color-trust)] text-white uppercase tracking-[0.15em] text-xs font-serif hover:opacity-90 transition-opacity duration-300"
          >
            Reserve My Market Position
          </button>
          <p className="mt-5 text-xs text-white/70 font-serif tracking-wide">
            Free early-access briefing + setup priority · No spam. Only launch details and eligibility.
          </p>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            >
              <motion.div
                onClick={(e) => e.stopPropagation()}
                className="bg-white max-w-md w-full p-8 md:p-10 relative pointer-events-auto"
              >
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center text-[var(--color-ink-300)] hover:text-[var(--color-off-black)] transition-colors"
                  aria-label="Close"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {isSubmitted ? (
                  <div className="text-center py-6">
                    <div className="w-14 h-14 bg-[var(--color-trust)] flex items-center justify-center mx-auto mb-5">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-serif font-light text-[var(--color-off-black)] mb-1">
                      Thank you
                    </h3>
                    <p className="text-sm text-[var(--color-ink-300)] font-serif">
                      You&apos;re on the list.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="space-y-3 mb-8">
                      <h3 className="text-2xl md:text-3xl font-serif font-light text-[var(--color-off-black)] leading-tight">
                        ChatGPT Ads Are About To Change Real Estate. Early Agents Will Take The Listings
                      </h3>
                      <p className="text-[15px] text-[var(--color-ink-300)] leading-[1.6] font-serif">
                        In the next 30 days, buyers will start searching for homes inside ChatGPT instead of Google.
                        The agents who launch first will capture the conversations before competitors even know they exist.
                      </p>
                      <p className="text-[15px] text-[var(--color-ink-300)] leading-[1.6] font-serif">
                        We&apos;re preparing a limited rollout for select markets.
                        If you get in early, you don&apos;t compete — you become the default.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                        required
                        className={inputClasses}
                      />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email address"
                        required
                        className={inputClasses}
                      />
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Phone"
                        required
                        className={inputClasses}
                      />
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-[var(--color-trust)] text-white uppercase tracking-[0.15em] text-xs font-serif hover:opacity-90 transition-opacity duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Submitting...' : 'Reserve My Market Position'}
                      </button>
                      <p className="text-xs text-[var(--color-ink-400)] font-serif text-center pt-1">
                        Free early-access briefing + setup priority · No spam. Only launch details.
                      </p>
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
