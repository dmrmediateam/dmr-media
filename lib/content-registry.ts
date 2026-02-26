/**
 * Content Registry — DMR Media
 *
 * Single source of truth for all page metadata.
 * Used by: sitemap generation, SEOWrapper (breadcrumbs + structured data),
 * and meta fallback logic.
 *
 * Priority scale:  1.0 = homepage  |  0.8 = core service/landing pages
 *                  0.7 = case studies / blog index  |  0.5 = supporting pages
 *                  0.3 = legal / utility pages
 */

export type ChangeFrequency = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'

export interface ContentEntry {
  slug: string            // Absolute path e.g. "/seo-optimization"
  title: string           // Page <title> / schema headline
  description: string     // Meta description (≤ 160 chars)
  publishDate: string     // ISO date "YYYY-MM-DD" — when page first went live
  modifiedDate: string    // ISO date — last meaningful content edit
  category: string        // Primary category for structured-data
  tags: string[]
  priority: number        // Sitemap priority 0.0–1.0
  changeFrequency: ChangeFrequency
}

export const contentRegistry: ContentEntry[] = [
  // ─── Core Pages ────────────────────────────────────────────────────────────
  {
    slug: '/',
    title: 'DMR Media — Luxury Real Estate Marketing Agency',
    description:
      'Specialized Google marketing, SEO, and Google Ads for luxury real estate professionals. Elevate your brand and dominate the premium property market.',
    publishDate: '2024-06-01',
    modifiedDate: '2026-02-15',
    category: 'Agency',
    tags: ['real estate marketing', 'luxury real estate', 'Google Ads', 'SEO'],
    priority: 1.0,
    changeFrequency: 'weekly',
  },
  {
    slug: '/services',
    title: 'Marketing Services for Luxury Real Estate | DMR Media',
    description:
      'Full-service digital marketing for luxury real estate agents: SEO, Google Ads, property marketing, and analytics reporting.',
    publishDate: '2024-06-01',
    modifiedDate: '2026-01-10',
    category: 'Services',
    tags: ['real estate services', 'digital marketing', 'luxury real estate'],
    priority: 0.9,
    changeFrequency: 'monthly',
  },
  {
    slug: '/contact',
    title: 'Contact DMR Media | Luxury Real Estate Marketing',
    description:
      'Get in touch with DMR Media. Schedule a strategy call or send us a message about your luxury real estate marketing goals.',
    publishDate: '2024-06-01',
    modifiedDate: '2025-11-01',
    category: 'Contact',
    tags: ['contact', 'strategy call', 'real estate marketing'],
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    slug: '/blog',
    title: 'Real Estate Marketing Insights | DMR Media Blog',
    description:
      'Strategy, timing, and positioning intelligence for the luxury real estate market. SEO intel, campaign architecture, and conversion systems.',
    publishDate: '2024-07-01',
    modifiedDate: '2026-02-20',
    category: 'Blog',
    tags: ['real estate blog', 'marketing insights', 'luxury real estate'],
    priority: 0.8,
    changeFrequency: 'weekly',
  },
  {
    slug: '/case-studies',
    title: 'Client Case Studies | DMR Media Results',
    description:
      'Real results for luxury real estate professionals: 19x daily clicks, 46 leads in 3 weeks, 21x search impressions. See how DMR Media delivers.',
    publishDate: '2024-08-01',
    modifiedDate: '2026-02-01',
    category: 'Case Studies',
    tags: ['case studies', 'real estate marketing results', 'SEO results'],
    priority: 0.8,
    changeFrequency: 'monthly',
  },
  {
    slug: '/calendar',
    title: 'Schedule a Strategy Call | DMR Media',
    description:
      'Book a free strategy session with DMR Media to explore how we can grow your luxury real estate business through targeted digital marketing.',
    publishDate: '2024-06-01',
    modifiedDate: '2025-10-01',
    category: 'Booking',
    tags: ['strategy call', 'book a call', 'real estate marketing consultation'],
    priority: 0.7,
    changeFrequency: 'monthly',
  },

  // ─── Service Pages ──────────────────────────────────────────────────────────
  {
    slug: '/seo-optimization',
    title: 'SEO Optimization for Real Estate | DMR Media',
    description:
      'Dominate local search results and attract high-value clients with strategic SEO campaigns tailored for luxury real estate professionals.',
    publishDate: '2024-06-15',
    modifiedDate: '2026-01-20',
    category: 'SEO',
    tags: ['real estate SEO', 'luxury real estate SEO', 'local SEO', 'property SEO'],
    priority: 0.9,
    changeFrequency: 'weekly',
  },
  {
    slug: '/google-ads-management',
    title: 'Google Ads Management for Real Estate | DMR Media',
    description:
      'High-ROI Google Ads campaigns engineered specifically for luxury real estate professionals. Capture high-intent buyers and sellers at the moment of search.',
    publishDate: '2024-06-15',
    modifiedDate: '2026-01-20',
    category: 'Google Ads',
    tags: ['Google Ads real estate', 'PPC real estate', 'luxury real estate advertising'],
    priority: 0.9,
    changeFrequency: 'weekly',
  },
  {
    slug: '/property-marketing',
    title: 'Property Marketing for Luxury Real Estate | DMR Media',
    description:
      'Elevate your listings with premium digital marketing strategies designed to attract qualified luxury buyers and close faster.',
    publishDate: '2024-06-15',
    modifiedDate: '2025-12-01',
    category: 'Property Marketing',
    tags: ['property marketing', 'luxury listings', 'real estate advertising'],
    priority: 0.85,
    changeFrequency: 'monthly',
  },
  {
    slug: '/analytics-reporting',
    title: 'Marketing Analytics & Reporting | DMR Media',
    description:
      'Crystal-clear reporting dashboards showing exactly how your marketing budget performs — leads, keyword positions, and campaign ROI.',
    publishDate: '2024-07-01',
    modifiedDate: '2025-12-01',
    category: 'Analytics',
    tags: ['marketing analytics', 'reporting', 'real estate ROI tracking'],
    priority: 0.8,
    changeFrequency: 'monthly',
  },

  // ─── Case Study Pages ───────────────────────────────────────────────────────
  {
    slug: '/case-study/willow-brook-realty',
    title: 'Willow Brook Realty — 46 Leads & 2 Clients in 3 Weeks | DMR Media',
    description:
      'From zero visibility to 46 leads and 2 new clients in 3 weeks with local SEO, Google Business Profile optimization, and targeted ads across Vermont and New Hampshire.',
    publishDate: '2025-03-01',
    modifiedDate: '2026-01-15',
    category: 'Case Study',
    tags: ['local SEO', 'Google Business Profile', 'Vermont real estate', 'lead generation'],
    priority: 0.75,
    changeFrequency: 'monthly',
  },
  {
    slug: '/case-study/eagan-luxury-real-estate',
    title: 'Eagan Luxury Real Estate — Zero Ranking Loss After Site Consolidation | DMR Media',
    description:
      'Consolidated multiple fragmented websites into a single brand presence with 0 measurable ranking loss and 10% keyword increase. Launched December 2025.',
    publishDate: '2025-12-17',
    modifiedDate: '2026-02-01',
    category: 'Case Study',
    tags: ['website consolidation', 'SEO migration', 'luxury real estate', 'St. Petersburg'],
    priority: 0.75,
    changeFrequency: 'monthly',
  },
  {
    slug: '/case-study/jade-legendary-real-estate',
    title: 'Jade Legendary Real Estate — 3x Leads in 90 Days | DMR Media',
    description:
      "Tripled inbound pipeline for a boutique broker by rebuilding her search footprint and automations around the way luxury buyers actually shop.",
    publishDate: '2025-04-01',
    modifiedDate: '2026-01-10',
    category: 'Case Study',
    tags: ['lead generation', 'local SEO', 'automation', 'luxury real estate'],
    priority: 0.75,
    changeFrequency: 'monthly',
  },
  {
    slug: '/case-study/marquis-farwell-group',
    title: 'Marquis + Farwell Group — 19x Daily Clicks in Sonoma County | DMR Media',
    description:
      'Transformed organic visibility in Sonoma County, growing from 2 clicks per day to 38 clicks per day while generating qualified buyer leads directly from search.',
    publishDate: '2025-05-01',
    modifiedDate: '2026-01-10',
    category: 'Case Study',
    tags: ['organic SEO', 'Sonoma County real estate', 'luxury real estate growth'],
    priority: 0.75,
    changeFrequency: 'monthly',
  },
  {
    slug: '/case-study/michael-seo-transformation',
    title: 'Michael SEO Transformation — 21x Search Impressions | DMR Media',
    description:
      'A modern IDX relaunch that grew search impressions 21x and rebuilt an agent\'s online authority after years of stagnant visibility.',
    publishDate: '2025-02-01',
    modifiedDate: '2025-12-01',
    category: 'Case Study',
    tags: ['IDX website', 'SEO relaunch', 'search impressions', 'real estate SEO'],
    priority: 0.75,
    changeFrequency: 'monthly',
  },
  {
    slug: '/case-study/rick-visions-first-realty',
    title: 'Rick — Visions First Realty SEO Transformation | DMR Media',
    description:
      'Rebuilt an agent\'s search presence in a competitive Wisconsin market, driving consistent 2–3 inbound leads per day from organic search.',
    publishDate: '2025-01-01',
    modifiedDate: '2025-12-01',
    category: 'Case Study',
    tags: ['Wisconsin real estate', 'real estate SEO', 'inbound leads', 'organic search'],
    priority: 0.75,
    changeFrequency: 'monthly',
  },

  // ─── Brokerage / Location Pages ─────────────────────────────────────────────
  {
    slug: '/brokerages',
    title: 'Real Estate Brokerage Marketing | DMR Media',
    description:
      'Marketing systems built for brokerages — from single-office teams to multi-location brands. SEO, ads, and lead infrastructure tailored to your market.',
    publishDate: '2025-01-01',
    modifiedDate: '2026-01-01',
    category: 'Brokerages',
    tags: ['brokerage marketing', 'real estate brokerage', 'team marketing'],
    priority: 0.7,
    changeFrequency: 'monthly',
  },
  {
    slug: '/brokerages/new-jersey',
    title: 'New Jersey Real Estate Brokerage Marketing | DMR Media',
    description:
      'Specialized digital marketing for New Jersey real estate brokerages. Local SEO, Google Ads, and lead generation systems for NJ agents.',
    publishDate: '2025-01-01',
    modifiedDate: '2026-01-01',
    category: 'Brokerages',
    tags: ['New Jersey real estate', 'NJ brokerage marketing', 'local SEO NJ'],
    priority: 0.65,
    changeFrequency: 'monthly',
  },
  {
    slug: '/brokerages/wisconsin',
    title: 'Wisconsin Real Estate Brokerage Marketing | DMR Media',
    description:
      'Digital marketing for Wisconsin real estate brokerages. Proven SEO and Google Ads strategies for WI agents looking to dominate local search.',
    publishDate: '2025-01-01',
    modifiedDate: '2026-01-01',
    category: 'Brokerages',
    tags: ['Wisconsin real estate', 'WI brokerage marketing', 'local SEO Wisconsin'],
    priority: 0.65,
    changeFrequency: 'monthly',
  },

  // ─── Legal / Utility ────────────────────────────────────────────────────────
  {
    slug: '/privacy-policy',
    title: 'Privacy Policy | DMR Media',
    description: 'DMR Media privacy policy — how we collect, use, and protect your data.',
    publishDate: '2024-06-01',
    modifiedDate: '2025-06-01',
    category: 'Legal',
    tags: ['privacy policy'],
    priority: 0.3,
    changeFrequency: 'yearly',
  },
  {
    slug: '/terms-of-service',
    title: 'Terms of Service | DMR Media',
    description: 'DMR Media terms of service governing use of our website and marketing services.',
    publishDate: '2024-06-01',
    modifiedDate: '2025-06-01',
    category: 'Legal',
    tags: ['terms of service'],
    priority: 0.3,
    changeFrequency: 'yearly',
  },
  {
    slug: '/fair-housing',
    title: 'Fair Housing Statement | DMR Media',
    description: 'DMR Media is committed to fair housing principles in all real estate marketing services.',
    publishDate: '2024-06-01',
    modifiedDate: '2025-06-01',
    category: 'Legal',
    tags: ['fair housing', 'real estate compliance'],
    priority: 0.3,
    changeFrequency: 'yearly',
  },
]

/** Helper: look up a registry entry by slug */
export function getContentEntry(slug: string): ContentEntry | undefined {
  return contentRegistry.find((e) => e.slug === slug)
}

/**
 * metadataFromRegistry
 *
 * One-liner to generate a full Next.js Metadata object from the registry.
 * Use in any page:
 *
 *   export const metadata = metadataFromRegistry('/case-study/willow-brook-realty')
 *
 * Falls back to the site default description if the slug isn't registered.
 */
export function metadataFromRegistry(slug: string) {
  const BASE_URL = 'https://www.dmrmedia.org'
  const SITE_NAME = 'DMR Media'
  const FALLBACK_DESCRIPTION =
    'Specialized Google marketing, SEO, and Google Ads for luxury real estate professionals. Elevate your brand and dominate the premium property market.'

  const entry = getContentEntry(slug)
  const title = entry?.title ?? `${SITE_NAME} — Luxury Real Estate Marketing`
  const description = entry?.description ?? FALLBACK_DESCRIPTION
  const url = `${BASE_URL}${slug}`

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: 'website' as const,
    },
    twitter: {
      card: 'summary_large_image' as const,
      title,
      description,
    },
  }
}
