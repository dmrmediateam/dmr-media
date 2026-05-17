/** Shared types for `/landing/*` channel pages (google-general, seo, google-ads, chatgpt-ads). */

export type ChannelLandingFaqItem = {
  question: string
  answer: string
}

export type ChannelLandingPillar = {
  number: string
  title: string
  body: string
}

export type ChannelLandingCaseStudy = {
  id: string
  title: string
  region: string
  badge: string
  metric: string
  summary: string
  image: string
  imageAlt: string
  outcomes: readonly string[]
}

export type ChannelLandingMetadata = {
  title: string
  description: string
  openGraphTitle: string
  openGraphDescription: string
}

export type ChannelLandingConfig = {
  path: `/landing/${string}`
  formName: string
  heroTitleEmphasis: string
  heroIntro: string
  marketingCoreHeading: string
  marketingCorePillars: readonly ChannelLandingPillar[]
  partnerStats: readonly string[]
  caseStudies: readonly ChannelLandingCaseStudy[]
  faqItems: readonly ChannelLandingFaqItem[]
  metadata: ChannelLandingMetadata
}
