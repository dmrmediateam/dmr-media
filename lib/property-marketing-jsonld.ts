/**
 * JSON-LD @graph for /property-marketing:
 * LocalBusiness + ProfessionalService (agency), Service (offering), OfferCatalog (pricing tiers).
 * https://schema.org/LocalBusiness
 * https://schema.org/ProfessionalService
 * https://schema.org/Service
 * https://schema.org/OfferCatalog
 */

import { buildOrganizationSchema } from '@/lib/eeatSchema'

const BASE_URL = 'https://www.dmrmedia.org'
const PAGE_PATH = '/property-marketing'
const PAGE_URL = `${BASE_URL}${PAGE_PATH}`

const BUSINESS_ID = `${PAGE_URL}#dmr-media`
const SERVICE_ID = `${PAGE_URL}#luxury-property-marketing`
const CATALOG_ID = `${PAGE_URL}#property-marketing-pricing`

const NICHE_KNOWS_ABOUT = [
  'Luxury real estate marketing',
  'High-end residential listings',
  'Single-property websites',
  'Google Ads for luxury real estate',
  'Pay-at-close listing campaigns',
]

const SERVICE_DESCRIPTION =
  'Luxury property marketing for exceptional listings: dedicated single-property websites and targeted Google Ads campaigns designed to close luxury listings faster, with transparent pay-at-close or upfront options.'

const BUSINESS_DESCRIPTION =
  'DMR Media is a luxury real estate marketing agency delivering property listing campaigns, dedicated microsites, and paid search for agents, teams, and developers serving affluent buyers and sellers across the United States.'

export function buildPropertyMarketingJsonLd() {
  const org = buildOrganizationSchema(BASE_URL)
  const address = org.address as Record<string, unknown>
  const contactPoint = org.contactPoint as Record<string, unknown>

  const localBusinessProfessional: Record<string, unknown> = {
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': BUSINESS_ID,
    name: 'DMR Media',
    url: BASE_URL,
    description: BUSINESS_DESCRIPTION,
    image: `${BASE_URL}/images/logo.png`,
    telephone: contactPoint.telephone,
    email: contactPoint.email,
    address,
    priceRange: '$2,500–$3,250',
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    knowsAbout: NICHE_KNOWS_ABOUT,
    hasOfferCatalog: {
      '@id': CATALOG_ID,
    },
  }

  const propertyMarketingService: Record<string, unknown> = {
    '@type': 'Service',
    '@id': SERVICE_ID,
    name: 'Luxury property marketing',
    description: SERVICE_DESCRIPTION,
    url: PAGE_URL,
    serviceType: 'Luxury real estate listing marketing and paid media',
    provider: {
      '@id': BUSINESS_ID,
    },
    audience: {
      '@type': 'BusinessAudience',
      audienceType: 'Luxury real estate agents, teams, and brokerages',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
  }

  const offerCatalog: Record<string, unknown> = {
    '@type': 'OfferCatalog',
    '@id': CATALOG_ID,
    name: 'Luxury property marketing pricing',
    description:
      'Flat-fee listing campaigns including a dedicated property website, 30-day Google Ads with spend covered by DMR Media, and done-for-you email copy. Google Ads budget is included in the flat fee.',
    url: `${PAGE_URL}#pricing`,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'Offer',
          name: 'Luxury property marketing — current DMR Media clients',
          description:
            '$2,500 per listing, pay-at-close with a 90-day cap. For existing clients. Includes dedicated single-property website, 30-day Google Ads burst, ad spend fully covered by DMR Media, done-for-you listing email copy, and integrated lead capture.',
          price: 2500,
          priceCurrency: 'USD',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: 2500,
            priceCurrency: 'USD',
            name: 'Per listing — pay at close',
            description: 'Deferred payment at closing for current DMR Media clients; 90-day maximum.',
          },
          availability: 'https://schema.org/InStock',
          url: `${PAGE_URL}#pricing`,
          seller: {
            '@id': BUSINESS_ID,
          },
          itemOffered: {
            '@id': SERVICE_ID,
          },
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'Offer',
          name: 'Luxury property marketing — non-clients',
          description:
            '$3,250 per listing, paid upfront before work begins. For agents and teams not yet under an active DMR Media engagement. Same deliverables: dedicated property website, 30-day Google Ads with spend included, listing email copy, and lead capture.',
          price: 3250,
          priceCurrency: 'USD',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: 3250,
            priceCurrency: 'USD',
            name: 'Per listing — upfront',
            description: 'Full payment before campaign kickoff for non-clients.',
          },
          availability: 'https://schema.org/InStock',
          url: `${PAGE_URL}#pricing`,
          seller: {
            '@id': BUSINESS_ID,
          },
          itemOffered: {
            '@id': SERVICE_ID,
          },
        },
      },
    ],
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [localBusinessProfessional, propertyMarketingService, offerCatalog],
  }
}
