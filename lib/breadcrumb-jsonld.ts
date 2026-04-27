const DEFAULT_BASE = 'https://www.dmrmedia.org'

/**
 * BreadcrumbList JSON-LD for a path slug (e.g. "/real-estate-agent-website-samples").
 */
export function buildBreadcrumbListJsonLd(slug: string, baseUrl: string = DEFAULT_BASE) {
  const segments = slug.split('/').filter(Boolean)

  const items = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: baseUrl,
    },
    ...segments.map((segment, i) => ({
      '@type': 'ListItem',
      position: i + 2,
      name: segment
        .replace(/-/g, ' ')
        .replace(/\b\w/g, (c) => c.toUpperCase()),
      item: `${baseUrl}/${segments.slice(0, i + 1).join('/')}`,
    })),
  ]

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  }
}
