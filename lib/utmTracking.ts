'use client'

export interface UTMParams {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_term?: string
  utm_content?: string
  gclid?: string // Google Ads click ID
  fbclid?: string // Facebook click ID
}

export interface StoredUTMData extends UTMParams {
  first_visit?: string
  landing_page?: string
}

/**
 * Extract UTM parameters from URL
 */
export function getUTMParamsFromURL(): UTMParams {
  if (typeof window === 'undefined') return {}
  
  const params = new URLSearchParams(window.location.search)
  const utmParams: UTMParams = {}
  
  // Standard UTM parameters
  const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'] as const
  utmKeys.forEach(key => {
    const value = params.get(key)
    if (value) {
      utmParams[key] = value
    }
  })
  
  // Track click IDs
  if (params.get('gclid')) utmParams.gclid = params.get('gclid')!
  if (params.get('fbclid')) utmParams.fbclid = params.get('fbclid')!
  
  return utmParams
}

/**
 * Store UTM parameters in sessionStorage (persists for browser session)
 */
export function storeUTMParams(params: UTMParams): void {
  if (typeof window === 'undefined') return
  
  // Only store if we have at least one UTM parameter
  if (Object.keys(params).length > 0) {
    const storedData: StoredUTMData = {
      ...params,
      first_visit: new Date().toISOString(),
      landing_page: window.location.pathname
    }
    sessionStorage.setItem('utm_params', JSON.stringify(storedData))
  }
}

/**
 * Get stored UTM parameters
 */
export function getStoredUTMParams(): StoredUTMData {
  if (typeof window === 'undefined') return {}
  
  const stored = sessionStorage.getItem('utm_params')
  return stored ? JSON.parse(stored) : {}
}

/**
 * Initialize UTM tracking on page load
 */
export function initUTMTracking(): void {
  if (typeof window === 'undefined') return
  
  const urlParams = getUTMParamsFromURL()
  
  // If UTM params exist in URL, store them (overwrites existing)
  if (Object.keys(urlParams).length > 0) {
    storeUTMParams(urlParams)
  }
  
  // Track page view with UTM params (for analytics)
  const storedParams = getStoredUTMParams()
  
  // Track with Facebook Pixel if available
  if (typeof window !== 'undefined' && (window as any).fbq && Object.keys(storedParams).length > 0) {
    try {
      (window as any).fbq('track', 'PageView', {
        content_name: storedParams.landing_page,
        ...storedParams
      })
    } catch (e) {
      // Silently fail if fbq is not available
    }
  }
}

/**
 * Track conversion event with UTM parameters
 */
export function trackConversion(eventName: string = 'Lead', additionalData: Record<string, any> = {}): void {
  if (typeof window === 'undefined') return
  
  const utmParams = getStoredUTMParams()
  
  // Track with Facebook Pixel
  if ((window as any).fbq) {
    try {
      (window as any).fbq('track', eventName, {
        ...utmParams,
        ...additionalData
      })
    } catch (e) {
      // Silently fail if fbq is not available
    }
  }
  
  // Track with Google Analytics if available
  if ((window as any).gtag) {
    try {
      (window as any).gtag('event', eventName.toLowerCase().replace(/\s+/g, '_'), {
        ...utmParams,
        ...additionalData
      })
    } catch (e) {
      // Silently fail if gtag is not available
    }
  }
}
