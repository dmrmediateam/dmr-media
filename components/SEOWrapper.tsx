/**
 * SEOWrapper
 *
 * Drop into any page to automatically inject:
 *  1. BreadcrumbList JSON-LD (every page)
 *  2. Service JSON-LD for service pages
 *  3. Article / WebPage JSON-LD for content pages
 *
 * Usage:
 *   <SEOWrapper slug="/seo-optimization">
 *     ...page content...
 *   </SEOWrapper>
 *
 * Or with override data:
 *   <SEOWrapper slug="/blog/my-post" title="Custom Title" datePublished="2026-01-15">
 *     ...
 *   </SEOWrapper>
 */

import { getContentEntry } from '@/lib/content-registry'

const BASE_URL = 'https://www.dmrmedia.org'
const ORG_NAME = 'DMR Media'

interface SEOWrapperProps {
  slug: string
  /** Override the registry title (e.g. for dynamic blog posts) */
  title?: string
  /** Override the registry description */
  description?: string
  /** ISO date string — for blog posts / case studies */
  datePublished?: string
  /** ISO date string */
  dateModified?: string
  /** 'article' forces Article schema; 'service' forces Service schema; 'website' (default) uses WebPage */
  schemaType?: 'article' | 'service' | 'website'
  children: React.ReactNode
}

function buildBreadcrumbs(slug: string) {
  const segments = slug.split('/').filter(Boolean)

  const items = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: BASE_URL,
    },
    ...segments.map((segment, i) => ({
      '@type': 'ListItem',
      position: i + 2,
      name: segment
        .replace(/-/g, ' ')
        .replace(/\b\w/g, (c) => c.toUpperCase()),
      item: `${BASE_URL}/${segments.slice(0, i + 1).join('/')}`,
    })),
  ]

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  }
}

function buildPageSchema(
  slug: string,
  title: string,
  description: string,
  schemaType: 'article' | 'service' | 'website',
  datePublished?: string,
  dateModified?: string,
) {
  const url = `${BASE_URL}${slug}`

  if (schemaType === 'article') {
    return {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: title,
      description,
      url,
      datePublished,
      dateModified: dateModified || datePublished,
      author: {
        '@type': 'Organization',
        name: ORG_NAME,
        url: BASE_URL,
      },
      publisher: {
        '@type': 'Organization',
        name: ORG_NAME,
        url: BASE_URL,
        logo: {
          '@type': 'ImageObject',
          url: `${BASE_URL}/images/logo.png`,
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': url,
      },
    }
  }

  if (schemaType === 'service') {
    return {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: title,
      description,
      url,
      provider: {
        '@type': 'Organization',
        name: ORG_NAME,
        url: BASE_URL,
      },
      areaServed: 'United States',
      serviceType: 'Real Estate Digital Marketing',
    }
  }

  // Default: WebPage
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url,
    isPartOf: {
      '@type': 'WebSite',
      name: ORG_NAME,
      url: BASE_URL,
    },
  }
}

export default function SEOWrapper({
  slug,
  title,
  description,
  datePublished,
  dateModified,
  schemaType = 'website',
  children,
}: SEOWrapperProps) {
  const entry = getContentEntry(slug)

  const resolvedTitle = title || entry?.title || ORG_NAME
  const resolvedDescription = description || entry?.description || ''
  const resolvedDatePublished = datePublished || entry?.publishDate
  const resolvedDateModified = dateModified || entry?.modifiedDate

  // Auto-detect schema type from registry category if not passed
  let resolvedType = schemaType
  if (schemaType === 'website' && entry) {
    if (entry.category === 'Case Study' || entry.category === 'Blog') {
      resolvedType = 'article'
    } else if (['SEO', 'Google Ads', 'Property Marketing', 'Analytics', 'Services'].includes(entry.category)) {
      resolvedType = 'service'
    }
  }

  const breadcrumbSchema = buildBreadcrumbs(slug)
  const pageSchema = buildPageSchema(
    slug,
    resolvedTitle,
    resolvedDescription,
    resolvedType,
    resolvedDatePublished,
    resolvedDateModified,
  )

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      {children}
    </>
  )
}
