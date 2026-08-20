/**
 * Annual sales volume options for the Paid Ads webinar form, and the
 * qualification rule applied to them.
 *
 * Imported by BOTH the client form (which renders the <select>) and the
 * server-side registration API (which decides `qualified`). Keep it that way —
 * when these strings lived in two places, a label edit would silently break
 * routing with no type error and no failing build.
 */

/** The one disqualifying answer. */
export const WEBINAR_VOLUME_UNDER_5M = 'Under $5M'

export const WEBINAR_VOLUME_OPTIONS = [
  WEBINAR_VOLUME_UNDER_5M,
  '$5M – $20M',
  '$20M – $50M',
  '$50M+',
] as const

/**
 * Qualified = $5M+ in annual sales volume.
 *
 * Only "Under $5M" disqualifies, so adding a higher tier to the options above
 * qualifies automatically. A missing or blank answer is treated as NOT
 * qualified: the field is required, so an empty value means something went
 * wrong, and routing an unknown to the DQ page is the recoverable failure.
 */
export function isQualifiedWebinarVolume(volume: string | null | undefined): boolean {
  const value = (volume ?? '').trim()
  if (!value) return false
  return value !== WEBINAR_VOLUME_UNDER_5M
}
