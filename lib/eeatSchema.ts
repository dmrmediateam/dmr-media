/**
 * Entity & Credibility Schemas (EEAT)
 * Person, Organization/LocalBusiness with sameAs for AI/SEO trust signals.
 * https://schema.org/Person
 * https://schema.org/Organization
 * https://schema.org/LocalBusiness
 */

export interface AuthorForSchema {
  name: string
  image?: string
  bio?: string
  slug?: string
  teamProfileSlug?: string
  linkedin?: string
  twitter?: string
}

/**
 * Optional sameAs URLs per author (LinkedIn, Twitter, etc.)
 * Keyed by the exact name string used in Sanity author records.
 * Profile pages: https://www.dmrmedia.org/about-us/[slug]
 */
const AUTHOR_SAME_AS: Record<string, string[]> = {
  'Andrew J Rohm': [
    'https://www.linkedin.com/in/andrewrohm',
    'https://www.dmrmedia.org/about-us/andrew-rohm',
  ],
  'Andrew Rohm': [
    'https://www.linkedin.com/in/andrewrohm',
    'https://www.dmrmedia.org/about-us/andrew-rohm',
  ],
  'Max D.': [
    'https://www.linkedin.com/in/maxdeleonardis',
    'https://www.dmrmedia.org/about-us/max-de',
  ],
  'Max De': [
    'https://www.linkedin.com/in/maxdeleonardis',
    'https://www.dmrmedia.org/about-us/max-de',
  ],
  'Max Deleonardis': [
    'https://www.linkedin.com/in/maxdeleonardis',
    'https://www.dmrmedia.org/about-us/max-de',
  ],
  'Nako A.': ['https://www.dmrmedia.org/about-us/nako-a'],
  'Nako': ['https://www.dmrmedia.org/about-us/nako-a'],
  'SJ': ['https://www.dmrmedia.org/about-us/sj'],
  'Collins': ['https://www.dmrmedia.org/about-us/collins'],
  'Alex': ['https://www.dmrmedia.org/about-us/alex'],
}

/**
 * Build Person schema for article authors (EEAT)
 * Prioritizes data from Sanity (teamProfileSlug, linkedin, twitter)
 * Falls back to AUTHOR_SAME_AS for legacy mappings
 */
export function buildPersonSchema(author: AuthorForSchema, baseUrl: string) {
  const slug = author.slug || author.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
  const personId = `${baseUrl}/#person-${slug}`

  const schema: Record<string, unknown> = {
    '@type': 'Person',
    '@id': personId,
    name: author.name,
    ...(author.image && { image: author.image }),
    ...(author.bio && { description: author.bio }),
  }

  // Build sameAs array from Sanity fields (preferred) or fallback to AUTHOR_SAME_AS
  const sameAsUrls: string[] = []
  
  // Add team profile URL if teamProfileSlug is set in Sanity
  if (author.teamProfileSlug) {
    sameAsUrls.push(`${baseUrl}/about-us/${author.teamProfileSlug}`)
  }
  
  // Add LinkedIn if set in Sanity
  if (author.linkedin) {
    sameAsUrls.push(author.linkedin)
  }
  
  // Add Twitter if set in Sanity
  if (author.twitter) {
    sameAsUrls.push(author.twitter)
  }
  
  // Fallback: if no Sanity data, use legacy AUTHOR_SAME_AS mapping
  if (sameAsUrls.length === 0) {
    const fallbackUrls = AUTHOR_SAME_AS[author.name] || []
    sameAsUrls.push(...fallbackUrls)
  }

  if (sameAsUrls.length > 0) {
    schema.sameAs = sameAsUrls
  }

  return schema
}

/**
 * DMR Media Organization schema (EEAT)
 * Defines brand, contact, sameAs for authority.
 */
export function buildOrganizationSchema(baseUrl: string) {
  return {
    '@type': 'Organization',
    '@id': `${baseUrl}/#organization`,
    name: 'DMR Media',
    url: baseUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${baseUrl}/images/logo.png`,
    },
    description:
      'Luxury real estate marketing agency. Specialized SEO, Google Ads, and digital strategy for premium agents and brokerages.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '100 W College Ave, Office No. 326',
      addressLocality: 'Appleton',
      addressRegion: 'WI',
      postalCode: '54911',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'team@dmrmedia.org',
      telephone: '+1-920-249-5210',
      contactType: 'customer support',
      areaServed: 'US',
      availableLanguage: 'English',
    },
    sameAs: [
      'https://www.linkedin.com/company/dmr-media',
      'https://www.trustpilot.com/review/dmrmedia.org',
      'https://agencies.semrush.com/dmr-media/',
      'https://www.instagram.com/dmrmedia',
    ],
  }
}

/**
 * Build a @graph with Organization + Person for blog post EEAT
 */
export function buildBlogEeatGraph(
  baseUrl: string,
  author: AuthorForSchema,
  options?: { includeOrganization?: boolean }
) {
  const organization = buildOrganizationSchema(baseUrl)
  const person = buildPersonSchema(author, baseUrl)
  const includeOrg = options?.includeOrganization !== false

  return includeOrg ? [organization, person] : [person]
}

/**
 * VideoObject schema — attach to blog posts that embed a YouTube video.
 * Unlocks Google Video search as a separate impression surface.
 * https://schema.org/VideoObject
 */
export function buildVideoObjectSchema(options: {
  name: string
  description: string
  thumbnailUrl: string
  uploadDate: string
  embedUrl: string
  contentUrl?: string
  duration?: string // ISO 8601 e.g. "PT5M30S"
}) {
  return {
    '@type': 'VideoObject',
    name: options.name,
    description: options.description,
    thumbnailUrl: options.thumbnailUrl,
    uploadDate: options.uploadDate,
    embedUrl: options.embedUrl,
    ...(options.contentUrl && { contentUrl: options.contentUrl }),
    ...(options.duration && { duration: options.duration }),
  }
}

/**
 * HowTo schema — for tutorial/step-by-step guide posts.
 * Enables HowTo rich results with high SERP CTR.
 * https://schema.org/HowTo
 */
export function buildHowToSchema(options: {
  name: string
  description: string
  steps: Array<{ name: string; text: string; image?: string }>
  totalTime?: string // ISO 8601 e.g. "PT30M"
  estimatedCost?: string
}) {
  return {
    '@type': 'HowTo',
    name: options.name,
    description: options.description,
    ...(options.totalTime && { totalTime: options.totalTime }),
    ...(options.estimatedCost && {
      estimatedCost: { '@type': 'MonetaryAmount', value: options.estimatedCost },
    }),
    step: options.steps.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: step.name,
      text: step.text,
      ...(step.image && {
        image: { '@type': 'ImageObject', url: step.image },
      }),
    })),
  }
}

/**
 * AggregateRating schema — for Trustpilot / Google review data.
 * Shows star ratings directly in SERPs on pages where attached.
 * https://schema.org/AggregateRating
 */
export function buildAggregateRatingSchema(options: {
  ratingValue: number
  reviewCount: number
  bestRating?: number
  worstRating?: number
}) {
  return {
    '@type': 'AggregateRating',
    ratingValue: options.ratingValue,
    reviewCount: options.reviewCount,
    bestRating: options.bestRating ?? 5,
    worstRating: options.worstRating ?? 1,
  }
}

/**
 * LocalBusiness schema — extends Organization with physical location signals.
 * Adds geo, openingHours, priceRange for local search trust and ranking.
 * https://schema.org/LocalBusiness
 */
export function buildLocalBusinessSchema(baseUrl: string) {
  return {
    '@type': ['Organization', 'LocalBusiness'],
    '@id': `${baseUrl}/#localbusiness`,
    name: 'DMR Media',
    url: baseUrl,
    telephone: '+1-920-249-5210',
    email: 'team@dmrmedia.org',
    image: `${baseUrl}/images/logo.png`,
    priceRange: '$$$',
    description:
      'Luxury real estate marketing agency. Specialized SEO, Google Ads, and digital strategy for premium agents and brokerages.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '100 W College Ave, Office No. 326',
      addressLocality: 'Appleton',
      addressRegion: 'WI',
      postalCode: '54911',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 44.2619,
      longitude: -88.4154,
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    sameAs: [
      'https://www.linkedin.com/company/dmr-media',
      'https://www.trustpilot.com/review/dmrmedia.org',
      'https://agencies.semrush.com/dmr-media/',
      'https://www.instagram.com/dmrmedia',
    ],
  }
}
