import { client } from '@/lib/sanity'

const AUTHOR_FIELDS = `{
  _id,
  name,
  "slug": slug.current,
  "image": image.asset->url,
  title,
  role,
  shortDescription,
  longDescription,
  bio,
  skills,
  linkedin,
  twitter,
  featuredOnAbout,
  sortOrder
}`

export interface TeamAuthor {
  _id: string
  name: string
  slug: string
  image?: string
  title?: string
  role?: string
  shortDescription?: string
  longDescription?: string
  bio?: string
  skills?: string[]
  linkedin?: string
  twitter?: string
  featuredOnAbout?: boolean
  sortOrder?: number
}

/** Short copy for cards and meta — prefers shortDescription, falls back to bio. */
export function getAuthorShortCopy(author: Pick<TeamAuthor, 'shortDescription' | 'bio'>): string {
  return author.shortDescription?.trim() || author.bio?.trim() || ''
}

/** Split longDescription into paragraphs (blank-line separated). */
export function getAuthorLongParagraphs(author: Pick<TeamAuthor, 'longDescription' | 'shortDescription' | 'bio'>): string[] {
  const raw = author.longDescription?.trim()
  if (raw) {
    return raw
      .split(/\n\s*\n/)
      .map((p) => p.trim())
      .filter(Boolean)
  }
  const fallback = getAuthorShortCopy(author)
  return fallback ? [fallback] : []
}

export async function getTeamAuthors(): Promise<TeamAuthor[]> {
  const query = `*[_type == "author" && defined(slug.current) && featuredOnAbout != false] | order(sortOrder asc, name asc) ${AUTHOR_FIELDS}`

  try {
    const authors = await client.fetch<TeamAuthor[]>(query)
    return Array.isArray(authors) ? authors.filter((a) => a.slug) : []
  } catch (error) {
    console.error('Error fetching team authors:', error)
    return []
  }
}

export async function getAuthorBySlug(slug: string): Promise<TeamAuthor | null> {
  const query = `*[_type == "author" && slug.current == $slug][0] ${AUTHOR_FIELDS}`

  try {
    const author = await client.fetch<TeamAuthor | null>(query, { slug })
    return author?.slug ? author : null
  } catch (error) {
    console.error(`Error fetching author "${slug}":`, error)
    return null
  }
}

export async function getAllAuthorSlugs(): Promise<string[]> {
  const query = `*[_type == "author" && defined(slug.current)]{ "slug": slug.current }`

  try {
    const rows = await client.fetch<Array<{ slug: string }>>(query)
    return rows.map((row) => row.slug).filter(Boolean)
  } catch (error) {
    console.error('Error fetching author slugs:', error)
    return []
  }
}
