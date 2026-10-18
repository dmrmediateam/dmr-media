/**
 * Carries the details a lead just typed into a /landing form over to the thank-you booking page,
 * so the Cal.com calendar opens prefilled. Stored in sessionStorage (this tab only, cleared when it
 * closes) rather than the URL, so personal details never land in the address bar or analytics.
 */

const STORAGE_KEY = 'dmr:landing-lead'

export type LandingLeadPrefill = {
  name?: string
  email?: string
  phone?: string
  website?: string
}

export function saveLandingLeadPrefill(lead: LandingLeadPrefill) {
  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(lead))
  } catch {
    // Private mode or blocked storage: the calendar just opens empty.
  }
}

export function readLandingLeadPrefill(): LandingLeadPrefill | null {
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as LandingLeadPrefill) : null
  } catch {
    return null
  }
}

/** Cal.com wants international format; US numbers typed as 10 digits get a +1. */
export function toE164(phone: string | undefined): string | undefined {
  if (!phone) return undefined
  const digits = phone.replace(/\D/g, '')
  if (digits.length === 10) return `+1${digits}`
  if (digits.length === 11 && digits.startsWith('1')) return `+${digits}`
  return phone.trim().startsWith('+') ? `+${digits}` : undefined
}
