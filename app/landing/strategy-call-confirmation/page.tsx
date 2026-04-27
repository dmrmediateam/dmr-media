'use client'

import { useEffect } from 'react'
import CaseStudies from '@/components/CaseStudies'
import Testimonials from '@/components/Testimonials'
import ReviewsAggregate from '@/components/ReviewsAggregate'

export default function StrategyCallConfirmationPage() {
  useEffect(() => {
    const nav = document.querySelector('nav') as HTMLElement | null
    const footer = document.querySelector('footer') as HTMLElement | null
    const chatbot = document.querySelector(
      '.elfsight-app-90e5dbc1-4850-470a-b384-914842649785'
    ) as HTMLElement | null
    if (nav) nav.style.display = 'none'
    if (footer) footer.style.display = 'none'
    if (chatbot) chatbot.style.display = 'none'
    return () => {
      if (nav) nav.style.display = ''
      if (footer) footer.style.display = ''
      if (chatbot) chatbot.style.display = ''
    }
  }, [])

  return (
    <div className="min-h-screen bg-[var(--color-off-white)]">
      {/* Hero: video last in visual hierarchy on narrow viewports (after headline) */}
      <section className="pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20">
        <div className="container-max">
          <div className="max-w-3xl mx-auto">
            <header className="text-center space-y-5 sm:space-y-6 mb-10 sm:mb-12">
              <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.32em] text-[var(--color-ink-400)] font-serif">
                Booking confirmed
              </p>
              <h1 className="text-[1.625rem] sm:text-3xl md:text-[2.125rem] font-serif font-light text-[var(--color-off-black)] leading-[1.12] tracking-[-0.02em]">
                Thank you for booking
              </h1>
              <p className="text-sm sm:text-base font-serif font-light text-[var(--color-ink-300)] leading-relaxed max-w-md mx-auto">
                A short video on how to accept your calendar invite is below.
              </p>
            </header>
            <div>
              <p className="text-center lg:text-left text-[10px] uppercase tracking-[0.28em] text-[var(--color-ink-400)] font-serif mb-4">
                Watch
              </p>
              <div className="border border-[var(--color-ink-200)] bg-white overflow-hidden">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full border-0"
                    src="https://www.youtube.com/embed/B0rKdgn2mX8?rel=0&modestbranding=1&autoplay=0"
                    title="How to accept your calendar invite"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-b border-[var(--color-ink-200)] bg-white">
        <div className="container-max py-8 sm:py-10">
          <div className="max-w-3xl mx-auto px-1 sm:px-0">
            <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--color-ink-400)] font-serif mb-3">
              Please note
            </p>
            <p className="text-sm sm:text-base font-serif font-light text-[var(--color-ink-300)] leading-relaxed">
              <span className="text-[var(--color-off-black)]">Important.</span> Because call volume is
              high, we may cancel your meeting if you do not accept the calendar invite or reply to your
              confirmation email within 48 hours.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 md:py-24">
        <div className="container-max">
          <div className="max-w-3xl mx-auto">
            <header className="text-center space-y-4 sm:space-y-5 mb-12 sm:mb-14">
              <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-[var(--color-ink-400)] font-serif">
                What to expect
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-[2.125rem] font-serif font-light text-[var(--color-off-black)] leading-tight tracking-[-0.02em]">
                What we will cover
              </h2>
              <p className="text-sm sm:text-base font-serif font-light text-[var(--color-ink-300)] leading-relaxed max-w-2xl mx-auto">
                A concise overview so you can get the most from our time together.
              </p>
            </header>

            <ul className="border-t border-[var(--color-ink-200)]">
              <li className="py-9 sm:py-10 border-b border-[var(--color-ink-200)]">
                <div className="flex flex-col sm:flex-row sm:gap-10 gap-4">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-[var(--color-ink-400)] font-serif shrink-0 sm:w-10 tabular-nums">
                    01
                  </span>
                  <div className="min-w-0 space-y-3">
                    <h3 className="text-lg sm:text-xl font-serif font-light text-[var(--color-off-black)] leading-snug">
                      Get to know your goals
                    </h3>
                    <p className="text-sm sm:text-base font-serif font-light text-[var(--color-ink-300)] leading-relaxed">
                      We start with your market, niche, and near-term goals so recommendations fit you, not a
                      generic playbook.
                    </p>
                  </div>
                </div>
              </li>
              <li className="py-9 sm:py-10 border-b border-[var(--color-ink-200)]">
                <div className="flex flex-col sm:flex-row sm:gap-10 gap-4">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-[var(--color-ink-400)] font-serif shrink-0 sm:w-10 tabular-nums">
                    02
                  </span>
                  <div className="min-w-0 space-y-4">
                    <h3 className="text-lg sm:text-xl font-serif font-light text-[var(--color-off-black)] leading-snug">
                      Website and SEO breakdown
                    </h3>
                    <p className="text-sm sm:text-base font-serif font-light text-[var(--color-ink-300)] leading-relaxed">
                      We review your site and Google Business Profile with professional SEO tooling to see
                      what is working and what is holding you back.
                    </p>
                    <div className="pl-4 sm:pl-5 border-l border-[rgba(15,15,15,0.1)] space-y-2">
                      <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-ink-400)] font-serif">
                        You will see
                      </p>
                      <ul className="text-sm font-serif font-light text-[var(--color-ink-300)] leading-relaxed space-y-2 list-disc list-outside pl-4 marker:text-[var(--color-ink-400)]">
                        <li>Why your site ranks where it does today</li>
                        <li>Specific fixes to improve traffic and conversions</li>
                        <li>Practical next steps: backlinks, content clusters, on-page work</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="py-9 sm:py-10 border-b border-[var(--color-ink-200)]">
                <div className="flex flex-col sm:flex-row sm:gap-10 gap-4">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-[var(--color-ink-400)] font-serif shrink-0 sm:w-10 tabular-nums">
                    03
                  </span>
                  <div className="min-w-0 space-y-3">
                    <h3 className="text-lg sm:text-xl font-serif font-light text-[var(--color-off-black)] leading-snug">
                      Action plan for predictable listings
                    </h3>
                    <p className="text-sm sm:text-base font-serif font-light text-[var(--color-ink-300)] leading-relaxed">
                      We close with a simple four-month direction for attracting two to three more
                      high-quality listings without relying on paid leads or cold outreach alone.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 border-t border-[var(--color-ink-200)]">
        <div className="container-max">
          <div className="max-w-3xl mx-auto border border-[var(--color-ink-200)] bg-white px-6 py-9 sm:px-10 sm:py-11">
            <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--color-ink-400)] font-serif mb-4">
              Optional prep
            </p>
            <h2 className="text-xl sm:text-2xl font-serif font-light text-[var(--color-off-black)] mb-6 leading-tight">
              To get the most from the call, consider
            </h2>
            <ul className="space-y-4 text-sm sm:text-base font-serif font-light text-[var(--color-ink-300)] leading-relaxed">
              <li className="flex gap-3">
                <span className="text-[var(--color-ink-400)] shrink-0 mt-0.5" aria-hidden>
                  ·
                </span>
                <span>
                  <span className="text-[var(--color-off-black)]">Your niche</span>
                  <span className="text-[var(--color-ink-400)]"> · </span>
                  luxury, waterfront, condos, and similar focus
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--color-ink-400)] shrink-0 mt-0.5" aria-hidden>
                  ·
                </span>
                <span>
                  <span className="text-[var(--color-off-black)]">Communities or developments</span> you want
                  to own
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--color-ink-400)] shrink-0 mt-0.5" aria-hidden>
                  ·
                </span>
                <span>
                  Whether your market leans{' '}
                  <span className="text-[var(--color-off-black)]">buyer-heavy</span>,{' '}
                  <span className="text-[var(--color-off-black)]">seller-heavy</span>, or balanced
                </span>
              </li>
            </ul>
            <p className="mt-8 text-sm sm:text-base font-serif font-light text-[var(--color-ink-300)] leading-relaxed italic">
              No prep is required. Having this in mind helps us move faster.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 md:py-20">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center px-1">
            <p className="text-sm sm:text-base md:text-lg font-serif font-light text-[var(--color-ink-300)] leading-relaxed">
              We look forward to the conversation. The goal is real insight and a plan you can use, whether or
              not we work together afterward.
            </p>
            <blockquote className="mt-10 sm:mt-12 text-left pl-5 sm:pl-6 border-l border-[rgba(15,15,15,0.1)]">
              <p className="text-sm sm:text-base font-serif font-light text-[var(--color-ink-300)] leading-relaxed">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-400)] font-serif block mb-2">
                  P.S.
                </span>
                If you would like the full recording and a short personalized video recap after the call,
                reply <span className="text-[var(--color-off-black)]">vid</span> to your confirmation email.
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      <div className="border-t border-[var(--color-ink-200)] bg-white">
        <CaseStudies />
      </div>
      <Testimonials />
      <ReviewsAggregate />

      <section className="py-14 sm:py-16 border-t border-[var(--color-ink-200)] bg-[var(--color-off-white)]">
        <div className="container-max text-center max-w-xl mx-auto px-2">
          <p className="text-[10px] uppercase tracking-[0.28em] text-[var(--color-ink-400)] font-serif mb-4">
            Questions
          </p>
          <p className="text-sm sm:text-base font-serif font-light text-[var(--color-ink-300)] leading-relaxed mb-8">
            Reach out any time before your call.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-6 sm:gap-10 text-sm font-serif font-light">
            <a
              href="mailto:team@dmrmedia.org"
              className="text-[var(--color-off-black)] border-b border-[var(--color-off-black)] pb-0.5 hover:text-[var(--color-ink-300)] hover:border-[var(--color-ink-300)] transition-colors"
            >
              team@dmrmedia.org
            </a>
            <a
              href="tel:+19209404049"
              className="text-[var(--color-off-black)] border-b border-[var(--color-off-black)] pb-0.5 hover:text-[var(--color-ink-300)] hover:border-[var(--color-ink-300)] transition-colors"
            >
              +1 (920) 940-4049
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
