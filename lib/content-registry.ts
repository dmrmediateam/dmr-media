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
    title: 'Apply for a Fit Call | DMR Media',
    description:
      'Apply to see if DMR Media is the right marketing partner for your real estate business. Book a mutual-fit strategy call with 5-star Trustpilot and Google reviews and SEMrush Agency recognition.',
    publishDate: '2024-06-01',
    modifiedDate: '2026-04-18',
    category: 'Booking',
    tags: [
      'apply',
      'strategy call',
      'fit call',
      'real estate marketing consultation',
      'book a call',
    ],
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
    slug: '/real-estate-lead-generation',
    title: 'Real Estate Lead Generation | SEO, Ads & Inbound Systems | DMR Media',
    description:
      'Predictable real estate lead generation: search visibility, Google Ads, landing discipline, and nurture velocity—measured in dashboards. See documented lifts in published case studies.',
    publishDate: '2026-04-18',
    modifiedDate: '2026-04-18',
    category: 'Lead Generation',
    tags: [
      'real estate lead generation',
      'luxury real estate leads',
      'real estate inbound marketing',
      'realtor lead generation',
      'real estate PPC leads',
    ],
    priority: 0.89,
    changeFrequency: 'weekly',
  },
  {
    slug: '/luxury-development-marketing',
    title: 'Luxury Development Marketing | New Construction & Estates | DMR Media',
    description:
      'Presale and sell-out marketing for luxury residential developments: brand systems, gallery sites, SEO, Google Ads, and analytics tuned for high-ticket reservations.',
    publishDate: '2026-04-18',
    modifiedDate: '2026-04-18',
    category: 'Luxury Development',
    tags: ['luxury development marketing', 'new construction marketing', 'presale marketing', 'real estate developer marketing'],
    priority: 0.88,
    changeFrequency: 'weekly',
  },
  {
    slug: '/websites-for-new-developments',
    title: 'Websites for New Developments | Presale & Sell-Through Digital | DMR Media',
    description:
      'New development websites: phased releases, floorplan UX, CRM-ready capture, technical SEO, schema, and Core Web Vitals—paired with demand programs when you are ready to scale beyond the gallery.',
    publishDate: '2026-04-18',
    modifiedDate: '2026-04-18',
    category: 'New Development Websites',
    tags: [
      'new development website',
      'real estate developer website',
      'presale website',
      'new construction website design',
      'housing development website',
    ],
    priority: 0.88,
    changeFrequency: 'weekly',
  },
  {
    slug: '/single-property-websites',
    title: 'Single Property Websites for Luxury Listings | DMR Media',
    description:
      'Dedicated microsites for trophy listings: cinematic layouts, fast performance, lead capture, and SEO-ready structure—paired with optional paid demand through our property marketing program.',
    publishDate: '2026-04-18',
    modifiedDate: '2026-04-18',
    category: 'Single Property Websites',
    tags: ['single property website', 'listing website', 'luxury listing microsite', 'real estate property site'],
    priority: 0.87,
    changeFrequency: 'weekly',
  },
  {
    slug: '/luxury-condo-websites',
    title: 'Luxury Condo Website Design & SEO | High-Rise & Boutique Buildings | DMR Media',
    description:
      'Luxury condo websites for agents, teams, and developers: fast performance, floorplan-led UX, local SEO for tower neighborhoods, schema, and optional Google Ads—built on documented luxury results.',
    publishDate: '2026-04-18',
    modifiedDate: '2026-04-18',
    category: 'Luxury Condo Websites',
    tags: [
      'luxury condo website',
      'condo website design',
      'high rise real estate website',
      'luxury condominium marketing',
      'condo development website',
    ],
    priority: 0.87,
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

  {
    slug: '/real-estate-seo-consultant',
    title: 'Real Estate SEO Consultant | SEO Plans for Agents & Teams | DMR Media',
    description:
      'We create custom SEO plans for real estate agents and teams. Keyword strategy, content architecture, technical audits, and local search frameworks built around your market.',
    publishDate: '2026-03-30',
    modifiedDate: '2026-03-30',
    category: 'SEO',
    tags: ['real estate SEO consultant', 'SEO plan real estate', 'real estate SEO consulting', 'SEO strategy real estate agents'],
    priority: 0.9,
    changeFrequency: 'weekly',
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
  // ─── Portfolio / Samples ─────────────────────────────────────────────────────
  {
    slug: '/real-estate-agent-website-samples',
    title: 'Real Estate Agent Website Examples | DMR Media Design Portfolio',
    description:
      'Real estate agent website examples from award-winning designs. Legendary Real Estate, Eagan Luxury, Cheryl Towey, Valoria Homes—custom sites built for top agents, teams, and brokers.',
    publishDate: '2026-03-01',
    modifiedDate: '2026-03-01',
    category: 'Portfolio',
    tags: ['real estate agent website examples', 'real estate website examples', 'real estate website design', 'luxury real estate websites', 'agent websites'],
    priority: 0.7,
    changeFrequency: 'monthly',
  },

  {
    slug: '/mls-integrations',
    title: 'MLS Integrations | DMR Media',
    description:
      'Browse MLS integrations supported by DMR Media. Filter by state, search by name or IDX vendor, and open detail pages for each MLS.',
    publishDate: '2026-04-01',
    modifiedDate: '2026-04-11',
    category: 'MLS',
    tags: ['MLS integrations', 'IDX', 'iHomeFinder', 'Showcase IDX', 'real estate MLS'],
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
