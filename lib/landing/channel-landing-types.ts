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

export type ChannelLandingObjectionItem = {
  title: string
  problem: string
  fix: string
}

export type ChannelLandingObjectionSection = {
  eyebrow: string
  title: string
  intro: string
  items: readonly ChannelLandingObjectionItem[]
}

export type ChannelLandingTimelineWeek = {
  label: string
  title: string
  body: string
}

export type ChannelLandingTimelineSection = {
  eyebrow: string
  title: string
  intro: string
  weeks: readonly ChannelLandingTimelineWeek[]
}

export type ChannelLandingSectionHeading = {
  eyebrow: string
  title: string
}

export type ChannelLandingByTheNumbersStat = {
  value: string
  label: string
}

export type ChannelLandingByTheNumbersSection = {
  eyebrow: string
  title: string
  stats: readonly ChannelLandingByTheNumbersStat[]
}

export type ChannelLandingHeroTitleSegment = {
  text: string
  italic?: boolean
}

export type ChannelLandingHeroProofMetric = {
  value: string
  label: string
}

export type ChannelLandingFormFieldSet = 'full' | 'compact' | 'minimal'

export type ChannelLandingFormConfig = {
  title?: string
  subtitle?: string
  question?: string
  submitLabel?: string
  footnote?: string
  ariaLabel?: string
  fieldSet?: ChannelLandingFormFieldSet
}

export type ChannelLandingConfig = {
  path: `/landing/${string}`
  formName: string
  /** Lower-friction form copy and fields for cold traffic. */
  formConfig?: ChannelLandingFormConfig
  /** Nav CTA that scrolls to the hero form. */
  headerApplyLabel?: string
  /** Client logo marquee repeats (default 3). Use 1 for a single static row. */
  clientLogosRepeat?: number
  /** Conversion-focused hero (form-first mobile, proof metrics, sticky form). */
  heroLayout?: 'default' | 'conversion'
  /** Serif subhead below H1 on conversion hero. */
  heroSubhead?: string
  /** Scannable proof chips below intro on conversion hero. */
  heroProofMetrics?: readonly ChannelLandingHeroProofMetric[]
  /** Rich H1 segments (use for multiple italic words). Takes precedence over heroTitle. */
  heroTitleSegments?: readonly ChannelLandingHeroTitleSegment[]
  /** Full H1 when set; otherwise the default “Last Real Estate Marketing Partner…” template is used. */
  heroTitle?: string
  heroTitleEmphasis: string
  /** Plain intro when heroIntroSegments is not set. */
  heroIntro: string
  /** Single intro block with optional italic segments. */
  heroIntroSegments?: readonly ChannelLandingHeroTitleSegment[]
  /** Multi-paragraph intro; takes precedence over heroIntroSegments and heroIntro. */
  heroIntroParagraphs?: readonly (readonly ChannelLandingHeroTitleSegment[])[]
  marketingCoreHeading: string
  marketingCorePillars: readonly ChannelLandingPillar[]
  partnerStatsEyebrow?: string
  partnerStats: readonly string[]
  caseStudies: readonly ChannelLandingCaseStudy[]
  faqItems: readonly ChannelLandingFaqItem[]
  objectionSection?: ChannelLandingObjectionSection
  timelineSection?: ChannelLandingTimelineSection
  byTheNumbersSection?: ChannelLandingByTheNumbersSection
  reviewsSection?: ChannelLandingSectionHeading
  caseStudiesSection?: ChannelLandingSectionHeading
  metadata: ChannelLandingMetadata
}
