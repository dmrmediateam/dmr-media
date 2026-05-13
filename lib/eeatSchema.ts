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
}

/**
 * Optional sameAs URLs per author (LinkedIn, Twitter, etc.)
 * Add entries as authors are added. Can be moved to Sanity later.
 */
const AUTHOR_SAME_AS: Record<string, string[]> = {
  'Andrew J Rohm': ['https://www.linkedin.com/in/andrewrohm'],
  'Andrew Rohm': ['https://www.linkedin.com/in/andrewrohm'],
  // Add more authors as needed: 'Author Name': ['https://linkedin.com/in/...', 'https://twitter.com/...'],
}

/**
 * Build Person schema for article authors (EEAT)
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

  const sameAs = AUTHOR_SAME_AS[author.name] || []
  if (sameAs.length > 0) {
    schema.sameAs = sameAs
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
