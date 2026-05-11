/** Annual sales volume tiers (Apply modal, /calendar, Zapier payloads). */
export const ANNUAL_SALES_VOLUME_OPTIONS = [
  'sub $5m',
  '$5m to $20m',
  '$20m to $40m',
  '$40m+',
] as const

/** Google General funnel: tiers below ~$20M go to the disqualified thank-you page. */
export function isGoogleGeneralDisqualifiedVolume(annualSalesVolume: string): boolean {
  return annualSalesVolume === 'sub $5m' || annualSalesVolume === '$5m to $20m'
}
