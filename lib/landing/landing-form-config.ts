import type { ChannelLandingFormConfig } from '@/lib/landing/channel-landing-types'
import { caseStudiesLandingConfig } from '@/app/landing/case-studies/case-studies-landing-config'
import { ourGuarenteeLandingConfig } from '@/app/landing/our-guarentee/our-guarentee-landing-config'
import { stopMarketingLandingConfig } from '@/app/landing/stop-marketing/stop-marketing-landing-config'

export type ResolvedLandingFormConfig = {
  title: string
  subtitle: string
  question: string
  submitLabelConversion: string
  submitLabelDefault: string
  footnoteConversion: string
  footnoteDefault: string
  ariaLabel: string
  fieldSet: 'full' | 'compact' | 'minimal'
}

const DEFAULT_LANDING_FORM_CONFIG: ResolvedLandingFormConfig = {
  title: 'Book your strategy review',
  subtitle: 'Takes about 60 seconds',
  question: 'Where should we send your strategy review?',
  submitLabelConversion: 'Book my strategy review',
  submitLabelDefault: 'Submit application',
  footnoteConversion: 'No spam. 30-day qualified-lead guarantee.',
  footnoteDefault: 'No spam. No pressure, just a direct conversation about fit.',
  ariaLabel: 'Strategy review application',
  fieldSet: 'full',
}

const PATH_FORM_CONFIG: Partial<Record<string, ChannelLandingFormConfig>> = {
  [stopMarketingLandingConfig.path]: stopMarketingLandingConfig.formConfig,
  [caseStudiesLandingConfig.path]: caseStudiesLandingConfig.formConfig,
  [ourGuarenteeLandingConfig.path]: ourGuarenteeLandingConfig.formConfig,
}

function mergeFormConfig(overrides?: ChannelLandingFormConfig): ResolvedLandingFormConfig {
  if (!overrides) return DEFAULT_LANDING_FORM_CONFIG

  return {
    title: overrides.title ?? DEFAULT_LANDING_FORM_CONFIG.title,
    subtitle: overrides.subtitle ?? DEFAULT_LANDING_FORM_CONFIG.subtitle,
    question: overrides.question ?? DEFAULT_LANDING_FORM_CONFIG.question,
    submitLabelConversion:
      overrides.submitLabel ?? DEFAULT_LANDING_FORM_CONFIG.submitLabelConversion,
    submitLabelDefault: overrides.submitLabel ?? DEFAULT_LANDING_FORM_CONFIG.submitLabelDefault,
    footnoteConversion: overrides.footnote ?? DEFAULT_LANDING_FORM_CONFIG.footnoteConversion,
    footnoteDefault: overrides.footnote ?? DEFAULT_LANDING_FORM_CONFIG.footnoteDefault,
    ariaLabel: overrides.ariaLabel ?? DEFAULT_LANDING_FORM_CONFIG.ariaLabel,
    fieldSet: overrides.fieldSet ?? DEFAULT_LANDING_FORM_CONFIG.fieldSet,
  }
}

export function getLandingFormConfigForPath(pathname: string | null): ResolvedLandingFormConfig {
  const overrides = pathname ? PATH_FORM_CONFIG[pathname] : undefined
  return mergeFormConfig(overrides)
}

export function resolveLandingFormConfig(
  formConfig?: ChannelLandingFormConfig,
  pathname?: string | null
): ResolvedLandingFormConfig {
  if (formConfig) return mergeFormConfig(formConfig)
  return getLandingFormConfigForPath(pathname ?? null)
}
