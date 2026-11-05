'use client'

import { useEffect } from 'react'
import { ChannelLandingHeader } from '@/components/landing/ChannelLandingPageContent'
import LandingApplicationForm from '@/components/landing/LandingApplicationForm'
import AwardSitesGraphic from './AwardSitesGraphic'

const FORM_CONFIG = {
  title: 'Apply for a December slot',
  subtitle: 'Takes about 60 seconds',
  question: 'Where should we call you?',
  submitLabel: 'Apply & get a call',
  footnote: 'No spam. We call every applicant, usually the same day.',
  ariaLabel: 'December website slot application',
  fieldSet: 'full',
} as const

/** Squeeze page for the "5 December website slots" email: header, offer, form. Nothing else. */
export default function WebsiteWaitlistPage() {
  // Same as the other /landing pages: no site nav or footer.
  useEffect(() => {
    const nav = document.querySelector('nav[data-site-nav]') as HTMLElement | null
    const footer = document.querySelector('footer[data-site-footer]') as HTMLElement | null
    if (nav) nav.style.display = 'none'
    if (footer) footer.style.display = 'none'
    return () => {
      if (nav) nav.style.display = ''
      if (footer) footer.style.display = ''
    }
  }, [])

  return (
    <div className="google-general-landing min-h-screen bg-[var(--surface-base)] text-[var(--color-off-black)]">
      <ChannelLandingHeader applyLabel="Apply for a slot" />

      <main id="top" className="container-max px-4 pb-20 pt-28 sm:px-6 sm:pt-32 lg:pb-28">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
          <div className="max-w-xl lg:max-w-none lg:pt-4">
            <p className="gg-eyebrow gg-eyebrow--strong">December build schedule · 5 slots</p>
            <h1 className="gg-display mt-4 text-[2.4rem] font-light leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.6rem]">
              We can&apos;t build another real estate website. <em className="italic">Join the waitlist.</em>
            </h1>

            <div className="mt-7 space-y-4">
              <p className="gg-body gg-body-lg">
                The DMR team keeps getting nominated for website design awards, and we want to thank everyone for the
                support.
              </p>
              <p className="gg-body gg-body-lg">
                The catch: we&apos;re at capacity on website builds through November. So we&apos;re opening{' '}
                <strong className="font-semibold">5 slots, starting December 1</strong>. And giving those 5 people{' '}
                <strong className="font-semibold">$500 off their build</strong>!
              </p>
              <p className="gg-body gg-body-lg">If you&apos;re thinking about a new site, apply here and we&apos;ll call you.</p>
            </div>

            <AwardSitesGraphic />
          </div>

          <div className="lg:sticky lg:top-28">
            <LandingApplicationForm formName="website-waitlist-landing" formConfig={FORM_CONFIG} />
          </div>
        </div>
      </main>
    </div>
  )
}
