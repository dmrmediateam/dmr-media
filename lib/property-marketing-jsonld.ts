/**
 * JSON-LD @graph for /property-marketing:
 * LocalBusiness + ProfessionalService (agency) and Service (offering).
 * https://schema.org/LocalBusiness
 * https://schema.org/ProfessionalService
 * https://schema.org/Service
 */

import { buildOrganizationSchema } from '@/lib/eeatSchema'

const BASE_URL = 'https://www.dmrmedia.org'
const PAGE_PATH = '/property-marketing'
const PAGE_URL = `${BASE_URL}${PAGE_PATH}`

const BUSINESS_ID = `${PAGE_URL}#dmr-media`
const SERVICE_ID = `${PAGE_URL}#luxury-property-marketing`

const NICHE_KNOWS_ABOUT = [
  'Luxury real estate marketing',
  'High-end residential listings',
  'Single-property websites',
  'Google Ads for luxury real estate',
  'Pay-at-close listing campaigns',
]

const SERVICE_DESCRIPTION =
  'Luxury property marketing for exceptional listings: dedicated single-property websites and targeted Google Ads campaigns designed to close luxury listings faster.'

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
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    knowsAbout: NICHE_KNOWS_ABOUT,
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

  return {
    '@context': 'https://schema.org',
    '@graph': [localBusinessProfessional, propertyMarketingService],
  }
}
