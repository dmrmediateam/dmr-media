/**
 * JSON-LD @graph for /chatgpt-ads-real-estate:
 * WebPage + Service (ChatGPT Ads management for real estate agents and teams) + FAQPage + BreadcrumbList.
 * The Organization node is defined site-wide in app/layout.tsx and referenced by @id.
 * https://schema.org/Service
 * https://schema.org/FAQPage
 */

const BASE_URL = 'https://www.dmrmedia.org'
const PAGE_PATH = '/chatgpt-ads-real-estate'
const PAGE_URL = `${BASE_URL}${PAGE_PATH}`

const ORG_ID = `${BASE_URL}/#organization`
const WEBPAGE_ID = `${PAGE_URL}#webpage`
const SERVICE_ID = `${PAGE_URL}#service`
const FAQ_ID = `${PAGE_URL}#faq`
const BREADCRUMB_ID = `${PAGE_URL}#breadcrumb`

export const CHATGPT_ADS_TITLE = 'ChatGPT Ads for Real Estate Agents & Teams | DMR Media'
export const CHATGPT_ADS_DESCRIPTION =
  'ChatGPT Ads for real estate agents and teams, run by DMR Media: creative, landing paths, and CRM handoffs tied to qualified conversations.'
export const CHATGPT_ADS_IMAGE = `${BASE_URL}/images/chatgpt-ads/chatgpt-ads-manager-campaigns.png`
export const CHATGPT_ADS_PUBLISHED = '2026-05-11'
export const CHATGPT_ADS_MODIFIED = '2026-10-12'

type FaqItem = { readonly question: string; readonly answer: string }

export function buildChatgptAdsJsonLd(faqItems: readonly FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': WEBPAGE_ID,
        url: PAGE_URL,
        name: CHATGPT_ADS_TITLE,
        description: CHATGPT_ADS_DESCRIPTION,
        inLanguage: 'en-US',
        isPartOf: { '@type': 'WebSite', name: 'DMR Media', url: BASE_URL },
        about: { '@id': SERVICE_ID },
        mainEntity: { '@id': SERVICE_ID },
        breadcrumb: { '@id': BREADCRUMB_ID },
        publisher: { '@id': ORG_ID },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: CHATGPT_ADS_IMAGE,
          width: 3024,
          height: 1516,
          caption: 'ChatGPT Ads Manager showing live real estate campaigns in a DMR-managed account',
        },
        datePublished: CHATGPT_ADS_PUBLISHED,
        dateModified: CHATGPT_ADS_MODIFIED,
      },
      {
        '@type': 'Service',
        '@id': SERVICE_ID,
        name: 'ChatGPT Ads for Real Estate Agents & Teams',
        alternateName: ['ChatGPT Ads management for real estate', 'ChatGPT advertising for realtors'],
        serviceType: 'ChatGPT Ads management',
        category: 'Paid Media',
        description:
          'DMR Media builds and manages ChatGPT Ads for real estate agents and teams: conversational creative, landing paths that match each placement, and UTM and CRM tagging so ChatGPT inquiries are reported next to Google Ads and SEO.',
        url: PAGE_URL,
        image: CHATGPT_ADS_IMAGE,
        provider: { '@id': ORG_ID },
        audience: {
          '@type': 'BusinessAudience',
          audienceType: 'Real estate agents, teams, and brokerages',
        },
        areaServed: { '@type': 'Country', name: 'United States' },
        isRelatedTo: [
          { '@type': 'Service', name: 'Google Ads management for real estate', url: `${BASE_URL}/google-ads-management` },
          { '@type': 'Service', name: 'Real estate SEO', url: `${BASE_URL}/seo-optimization` },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': FAQ_ID,
        isPartOf: { '@id': WEBPAGE_ID },
        mainEntity: faqItems.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': BREADCRUMB_ID,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE_URL}/services` },
          { '@type': 'ListItem', position: 3, name: 'ChatGPT Ads for Real Estate Agents & Teams', item: PAGE_URL },
        ],
      },
    ],
  }
}
