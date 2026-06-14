/** Annual sales volume tiers (Apply modal, /calendar, Zapier payloads). */
export const ANNUAL_SALES_VOLUME_OPTIONS = [
  'sub $5m',
  '$5m to $20m',
  '$20m to $40m',
  '$40m+',
] as const

/** Google General funnel: only sub $5M volume goes to the disqualified thank-you page. */
export function isGoogleGeneralDisqualifiedVolume(annualSalesVolume: string): boolean {
  return annualSalesVolume === 'sub $5m'
}

/** Google General funnel: tiers at ~$20M+ are qualified for the General signup conversion. */
export function isGoogleGeneralQualifiedVolume(annualSalesVolume: string): boolean {
  return annualSalesVolume === '$20m to $40m' || annualSalesVolume === '$40m+'
}

/** Biggest challenge options (google-general hero form). */
export const GOOGLE_GENERAL_BIGGEST_CHALLENGE_OPTIONS = [
  'Lead Flow/Consistency',
  'Finding Buyers',
  'Getting Listings',
  'Lead Cost',
] as const
