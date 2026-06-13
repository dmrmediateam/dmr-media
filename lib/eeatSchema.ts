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
  shortDescription?: string
  title?: string
  skills?: string[]
  slug?: string
  teamProfileSlug?: string
  linkedin?: string
  twitter?: string
}

export interface TeamMemberForSchema {
  name: string
  slug: string
  title?: string
  role?: string
  shortDescription?: string
  image?: string
  skills?: string[]
  linkedin?: string
  twitter?: string
}

function absoluteImageUrl(baseUrl: string, image?: string) {
  if (!image) return undefined
  return image.startsWith('http') ? image : `${baseUrl}${image.startsWith('/') ? '' : '/'}${image}`
}

function buildAuthorProfileUrl(baseUrl: string, author: Pick<AuthorForSchema, 'slug' | 'teamProfileSlug'>) {
  const slug = author.slug || author.teamProfileSlug
  return slug ? `${baseUrl}/about/${slug}` : undefined
}

/**
 * Optional sameAs URLs per author (LinkedIn, Twitter, etc.)
 * Keyed by the exact name string used in Sanity author records.
 */
const AUTHOR_SAME_AS: Record<string, string[]> = {
  'Andrew J Rohm': ['https://www.linkedin.com/in/andrewrohm'],
  'Andrew Rohm': ['https://www.linkedin.com/in/andrewrohm'],
  'Max D.': ['https://www.linkedin.com/in/maxdeleonardis'],
  'Max De': ['https://www.linkedin.com/in/maxdeleonardis'],
  'Max Deleonardis': ['https://www.linkedin.com/in/maxdeleonardis'],
}

/**
 * Build Person schema for article authors (EEAT)
 * Prioritizes data from Sanity (slug, linkedin, twitter)
 * Falls back to AUTHOR_SAME_AS for legacy mappings
 */
export function buildPersonSchema(author: AuthorForSchema, baseUrl: string) {
  const slug =
    author.slug ||
    author.teamProfileSlug ||
    author.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
  const profileUrl = buildAuthorProfileUrl(baseUrl, author)
  const personId = profileUrl ? `${profileUrl}#person` : `${baseUrl}/#person-${slug}`

  const schema: Record<string, unknown> = {
    '@type': 'Person',
    '@id': personId,
    name: author.name,
    ...(author.image && { image: absoluteImageUrl(baseUrl, author.image) }),
    ...((author.shortDescription || author.bio) && {
      description: author.shortDescription || author.bio,
    }),
    ...(author.title && { jobTitle: author.title }),
    ...(profileUrl && { url: profileUrl }),
    ...(author.skills?.length && { knowsAbout: author.skills }),
  }

  const sameAsUrls: string[] = []

  if (profileUrl) {
    sameAsUrls.push(profileUrl)
  }

  if (author.linkedin) {
    sameAsUrls.push(author.linkedin)
  }

  if (author.twitter) {
    sameAsUrls.push(author.twitter)
  }

  if (sameAsUrls.length === 0) {
    const fallbackUrls = AUTHOR_SAME_AS[author.name] || []
    sameAsUrls.push(...fallbackUrls)
  }

  if (sameAsUrls.length > 0) {
    schema.sameAs = sameAsUrls
  }

  schema.worksFor = { '@id': `${baseUrl}/#organization` }

  return schema
}

/**
 * Full @graph for /about/[slug] team profile pages (EEAT + ProfilePage).
 */
export function buildTeamProfileGraph(member: TeamMemberForSchema, baseUrl: string) {
  const profileUrl = `${baseUrl}/about/${member.slug}`
  const personId = `${profileUrl}#person`
  const organization = buildOrganizationSchema(baseUrl)
  const imageUrl = absoluteImageUrl(baseUrl, member.image)

  const sameAs: string[] = []
  if (member.linkedin) sameAs.push(member.linkedin)
  if (member.twitter) sameAs.push(member.twitter)

  const person: Record<string, unknown> = {
    '@type': 'Person',
    '@id': personId,
    name: member.name,
    ...(member.title || member.role ? { jobTitle: member.title || member.role } : {}),
    ...(member.shortDescription && { description: member.shortDescription }),
    url: profileUrl,
    ...(imageUrl && { image: imageUrl }),
    ...(sameAs.length > 0 && { sameAs }),
    ...(member.skills?.length && { knowsAbout: member.skills }),
    worksFor: { '@id': `${baseUrl}/#organization` },
  }

  const profilePage = {
    '@type': 'ProfilePage',
    '@id': `${profileUrl}#webpage`,
    url: profileUrl,
    name: `${member.name} | DMR Media`,
    description: member.shortDescription,
    inLanguage: 'en-US',
    isPartOf: { '@id': `${baseUrl}/#website` },
    about: { '@id': personId },
    mainEntity: { '@id': personId },
    publisher: { '@id': `${baseUrl}/#organization` },
  }

  const breadcrumb = {
    '@type': 'BreadcrumbList',
    '@id': `${profileUrl}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'About', item: `${baseUrl}/about` },
      { '@type': 'ListItem', position: 3, name: member.name, item: profileUrl },
    ],
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [organization, person, profilePage, breadcrumb],
  }
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
