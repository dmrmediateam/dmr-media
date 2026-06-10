/**
 * Extract headings from Sanity block content for Table of Contents
 */

interface TocHeading {
  id: string
  text: string
  level: number
}

/**
 * Convert heading text to URL-safe ID
 */
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/**
 * Extract H2 and H3 headings from Sanity block content
 * Returns array of { id, text, level } for Table of Contents
 */
export function extractHeadings(body: any[]): TocHeading[] {
  if (!body || !Array.isArray(body)) {
    return []
  }

  const headings: TocHeading[] = []

  body.forEach((block) => {
    if (block._type === 'block' && (block.style === 'h2' || block.style === 'h3')) {
      // Extract plain text from block children
      const text = block.children
        ?.map((child: any) => child.text)
        .join('')
        .trim()

      if (text) {
        const id = slugify(text)
        const level = block.style === 'h2' ? 2 : 3

        headings.push({ id, text, level })
      }
    }
  })

  return headings
}
