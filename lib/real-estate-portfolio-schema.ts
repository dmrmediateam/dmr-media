import { buildBreadcrumbListJsonLd } from '@/lib/breadcrumb-jsonld'
import { getContentEntry } from '@/lib/content-registry'
import { buildOrganizationSchema } from '@/lib/eeatSchema'

const SLUG = '/real-estate-agent-website-samples'

export interface PortfolioSiteForSchema {
  id: string
  name: string
  subheading: string
  description: string
  url: string
  image: string
}

function toIsoDateTime(date: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return undefined
  return `${date}T12:00:00.000Z`
}

function stripAtContext(node: Record<string, unknown>) {
  const { ['@context']: _omit, ...rest } = node
  return rest
}

/**
 * Rich JSON-LD @graph for the website design portfolio page:
 * Organization, WebSite, CollectionPage, ItemList, BreadcrumbList, SpeakableSpecification.
 * Tuned for entity clarity in search and generative / AI-driven retrieval (GEO).
 */
export function buildRealEstatePortfolioSamplesGraph(
  baseUrl: string,
  agentSites: PortfolioSiteForSchema[],
  propertySites: PortfolioSiteForSchema[],
) {
  const entry = getContentEntry(SLUG)
  const pageUrl = `${baseUrl}${SLUG}`
  const orgId = `${baseUrl}/#organization`
  const websiteId = `${baseUrl}/#website`
  const webpageId = `${pageUrl}#webpage`
  const itemListId = `${pageUrl}#portfolio-itemlist`
  const breadcrumbId = `${pageUrl}#breadcrumbs`

  const title =
    entry?.title ?? 'Real Estate Agent Website Examples | DMR Media Design Portfolio'
  const description =
    entry?.description ??
    'Real estate agent website examples and custom design portfolio from DMR Media.'

  const organization = buildOrganizationSchema(baseUrl) as Record<string, unknown>

  const website = {
    '@type': 'WebSite',
    '@id': websiteId,
    url: baseUrl,
    name: 'DMR Media',
    inLanguage: 'en-US',
    publisher: { '@id': orgId },
  }

  const aboutTopics = [
    { '@type': 'Thing', name: 'Real estate website design' },
    { '@type': 'Thing', name: 'Real estate agent websites' },
    { '@type': 'Thing', name: 'Luxury real estate marketing' },
    { '@type': 'Thing', name: 'Single-property listing websites' },
    { '@type': 'Thing', name: 'Real estate team and brokerage websites' },
  ]

  const keywordSet = new Set<string>([
    'real estate agent website examples',
    'real estate website design portfolio',
    'luxury real estate websites',
    'single property website',
    'IDX website design',
    ...(entry?.tags ?? []),
  ])

  const combined: Array<PortfolioSiteForSchema & { genre: string }> = [
    ...agentSites.map((s) => ({ ...s, genre: 'Real estate agent or team website' })),
    ...propertySites.map((s) => ({ ...s, genre: 'Single-property real estate website' })),
  ]

  const itemListElement = combined.map((sample, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'CreativeWork',
      '@id': `${pageUrl}#work-${sample.id}`,
      name: sample.name,
      alternativeHeadline: sample.subheading,
      description: sample.description,
      url: sample.url,
      genre: sample.genre,
      inLanguage: 'en-US',
      image: `${baseUrl}${sample.image}`,
      creator: { '@id': orgId },
      publisher: { '@id': orgId },
    },
  }))

  const itemList = {
    '@type': 'ItemList',
    '@id': itemListId,
    name: 'DMR Media real estate website design portfolio',
    description:
      'Selected custom websites for luxury agents, teams, brokers, and single-listing campaigns designed and launched by DMR Media.',
    numberOfItems: combined.length,
    itemListElement,
  }

  const collectionPage: Record<string, unknown> = {
    '@type': 'CollectionPage',
    '@id': webpageId,
    url: pageUrl,
    name: title,
    headline: title,
    description,
    inLanguage: 'en-US',
    isPartOf: { '@id': websiteId },
    publisher: { '@id': orgId },
    creator: { '@id': orgId },
    about: aboutTopics,
    keywords: Array.from(keywordSet),
    mainEntity: { '@id': itemListId },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.portfolio-schema-hero-h1', '.portfolio-schema-hero-summary'],
    },
  }

  if (entry?.publishDate) {
    const pub = toIsoDateTime(entry.publishDate)
    if (pub) collectionPage.datePublished = pub
  }
  if (entry?.modifiedDate) {
    const mod = toIsoDateTime(entry.modifiedDate)
    if (mod) collectionPage.dateModified = mod
  }

  const primaryImage = combined[0]?.image
  if (primaryImage) {
    collectionPage.primaryImageOfPage = {
      '@type': 'ImageObject',
      url: `${baseUrl}${primaryImage}`,
      caption: `${combined[0].name} website example designed by DMR Media`,
    }
  }

  const breadcrumbFull = buildBreadcrumbListJsonLd(SLUG, baseUrl) as Record<string, unknown>
  const breadcrumbNode = {
    ...stripAtContext(breadcrumbFull),
    '@id': breadcrumbId,
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [organization, website, collectionPage, itemList, breadcrumbNode],
  }
}
