import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAuthorBySlug, getAllAuthorSlugs, getAuthorShortCopy } from '@/data/authors'
import { buildTeamProfileGraph } from '@/lib/eeatSchema'
import TeamProfileContent from '../TeamProfileContent'

const BASE_URL = 'https://www.dmrmedia.org'

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = await getAllAuthorSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const author = await getAuthorBySlug(slug)
  if (!author) return {}

  const roleLabel = author.role || author.title
  const shortCopy = getAuthorShortCopy(author)
  const title = roleLabel ? `${author.name} — ${roleLabel} | DMR Media` : `${author.name} | DMR Media`
  const description =
    shortCopy ||
    `${author.name} is part of the DMR Media team — luxury real estate marketing specialists in SEO, Google Ads, and web.`
  const canonical = `${BASE_URL}/about/${author.slug}`

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      type: 'profile',
      url: canonical,
      ...(author.image && { images: [author.image.startsWith('http') ? author.image : `${BASE_URL}${author.image}`] }),
    },
  }
}

export default async function AboutAuthorPage({ params }: PageProps) {
  const { slug } = await params
  const author = await getAuthorBySlug(slug)
  if (!author) notFound()

  const schemaGraph = buildTeamProfileGraph(
    {
      name: author.name,
      slug: author.slug,
      title: author.title,
      role: author.role,
      shortDescription: getAuthorShortCopy(author),
      image: author.image,
      skills: author.skills,
      linkedin: author.linkedin,
      twitter: author.twitter,
    },
    BASE_URL,
  )

  return <TeamProfileContent author={author} schemaGraph={schemaGraph} />
}
