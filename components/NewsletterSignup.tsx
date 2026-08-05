'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import GrowthPartnerPromoCard from '@/components/GrowthPartnerPromoCard'
import { getStoredUTMParams, trackConversion } from '@/lib/utmTracking'
import FormHoneypot, { readHoneypot } from '@/components/FormHoneypot'

const VSL_VIDEO_ID = 'Cty5rQPwksM'

const inputClasses =
  'w-full px-0 py-3 text-base border-b border-[var(--color-ink-200)] bg-transparent text-[var(--color-off-black)] font-serif focus:outline-none focus:border-[var(--color-off-black)] transition-colors duration-300 placeholder:text-[var(--color-ink-300)]'

export default function NewsletterSignup() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', website: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Read honeypot values before the first state change / await. No early
    // return on a hit: the request goes through and the server drops it
    // silently, so the bot sees a normal flow and we get a log line.
    const honeypot = readHoneypot(e.currentTarget)

    setIsSubmitting(true)

    const utmParams = getStoredUTMParams()

    try {
      const response = await fetch('/api/landing-registration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim().toLowerCase(),
          phone: formData.phone.trim(),
          website: formData.website,
          ...honeypot,
          source: 'google-direct-landing',
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

      // Skip the conversion pixel on a spam-filtered submission.
      if (!data.filtered) trackConversion('Lead', { form_type: 'google_direct_landing' })
      setIsSubmitted(true)
      setIsSubmitting(false)

      router.push(
        `/landing/thank-you?session_id=free_registration&email=${encodeURIComponent(formData.email)}&name=${encodeURIComponent(formData.name)}&phone=${encodeURIComponent(formData.phone)}`
      )
    } catch (error) {
      console.error('Newsletter signup error:', error)
      setIsSubmitting(false)
      alert(error instanceof Error ? error.message : 'Failed to submit. Please try again.')
    }
  }

  return (
    <>
      {/* CTA — same card style as site-wide growth / calendar promo */}
      <section className="my-10 md:my-14 px-4 sm:px-6" aria-labelledby="blog-growth-promo-heading">
        <div className="mx-auto flex w-full max-w-[480px] flex-col items-center">
          <GrowthPartnerPromoCard headingId="blog-growth-promo-heading" className="w-full" />
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="mt-5 font-serif text-xs uppercase tracking-[0.18em] text-[var(--color-ink-400)] underline decoration-[var(--color-ink-200)] underline-offset-4 transition-colors hover:text-[var(--color-off-black)]"
          >
            Get the free AI training video instead
          </button>
        </div>
      </section>

      {/* Modal - VSL + Form, same Zapier flow as google-direct */}
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            >
              <motion.div
                initial={{ scale: 0.96 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.96 }}
                transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 md:p-10 relative pointer-events-auto"
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
                      Redirecting...
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center text-center">
                    {/* Copy - Centered */}
                    <div className="space-y-3 mb-6 max-w-xl mx-auto">
                      <h3 className="text-2xl md:text-3xl font-serif font-light text-[var(--color-off-black)] leading-tight">
                        Free AI training for real estate teams
                      </h3>
                      <p className="text-[15px] text-[var(--color-ink-300)] leading-[1.6] font-serif">
                        Enter your details below to claim your free training. We&apos;ll show you exactly how our system converts traffic into qualified buyer and seller conversations—and where yours might be leaking deals.
                      </p>
                    </div>

                    <div className="mb-8 w-full max-w-xl mx-auto aspect-video overflow-hidden rounded-sm border border-[var(--color-ink-200)] bg-[var(--color-off-white)]">
                      <iframe
                        src={`https://www.youtube.com/embed/${VSL_VIDEO_ID}?rel=0`}
                        title="DMR Media — free AI training for real estate"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="h-full w-full"
                      />
                    </div>

                    {/* Form - Centered */}
                    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-5">
                      <FormHoneypot idSuffix="newsletter" />
                      <div className="absolute -left-[9999px] w-1 h-1 overflow-hidden" aria-hidden="true">
                        <label htmlFor="newsletter-website">Website</label>
                        <input
                          type="text"
                          id="newsletter-website"
                          name="website"
                          tabIndex={-1}
                          autoComplete="nope"
                          value={formData.website}
                          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        />
                      </div>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Name"
                        required
                        className={inputClasses}
                      />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Email address"
                        required
                        className={inputClasses}
                      />
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Phone"
                        required
                        className={inputClasses}
                      />
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 bg-[var(--color-trust)] text-white uppercase tracking-[0.15em] text-xs font-serif hover:opacity-90 transition-opacity duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? 'Submitting...' : 'Get Free Training'}
                      </button>
                      <p className="text-xs text-[var(--color-ink-400)] font-serif text-center pt-1">
                        Free training · No obligation · We&apos;ll be in touch
                      </p>
                    </form>
                  </div>
                )}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
