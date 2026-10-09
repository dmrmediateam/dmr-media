'use client'

import type { ReactNode } from 'react'
import VideoTestimonials from '@/components/VideoTestimonials'
import GoogleGeneralCaseStudies from '@/components/landing/GoogleGeneralCaseStudies'
import GoogleGeneralReviewsScroll from '@/components/landing/GoogleGeneralReviewsScroll'
import {
  FinalCtaSection,
  IncludedCards,
  InlineCtaBand,
  LandingFaq,
  ProcessSteps,
} from '@/components/landing/conversion/ConversionSections'
import type { ChannelLandingConfig } from '@/lib/landing/channel-landing-types'

type Props = {
  config: ChannelLandingConfig
  /** Page-specific proof: stat band, screenshots, website examples. */
  showcase: ReactNode
}

/**
 * Below-the-hero order for the conversion landings: proof first, then the offer and how it works,
 * then the questions, then one last ask. Each block ends in the same CTA.
 */
export default function ConversionLandingBody({ config, showcase }: Props) {
  const ctaLabel = config.headerApplyLabel ?? 'Get started'

  return (
    <>
      {showcase}

      <GoogleGeneralCaseStudies
        studies={config.caseStudies}
        eyebrow={config.caseStudiesSection?.eyebrow}
        title={config.caseStudiesSection?.title}
      />

      {config.inlineCta ? <InlineCtaBand cta={config.inlineCta} /> : null}

      <VideoTestimonials />

      {config.includedSection ? (
        <IncludedCards heading={config.includedSection} pillars={config.marketingCorePillars} />
      ) : null}

      {config.timelineSection ? <ProcessSteps section={config.timelineSection} ctaLabel={ctaLabel} /> : null}

      <GoogleGeneralReviewsScroll eyebrow={config.reviewsSection?.eyebrow} title={config.reviewsSection?.title} />

      <LandingFaq items={config.faqItems} />

      {config.finalCta ? <FinalCtaSection cta={config.finalCta} /> : null}
    </>
  )
}
