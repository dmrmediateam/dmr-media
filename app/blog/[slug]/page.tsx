import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { getBlogPostBySlug, getAllBlogPosts } from '@/data/blogPosts'
import { buildOrganizationSchema, buildPersonSchema } from '@/lib/eeatSchema'
import type { Metadata } from 'next'
import BlogContent from '@/components/BlogContent'
import BlogFAQ from '@/components/BlogFAQ'
import BlogAuthorCard from '@/components/blog/BlogAuthorCard'
import TableOfContents from '@/components/blog/TableOfContents'
import RelatedPosts from '@/components/blog/RelatedPosts'
import { extractHeadings } from '@/lib/extractHeadings'
import '@/app/landing/google-general/google-general-landing.css'

export const dynamic = 'force-dynamic'
export const revalidate = 60

export async function generateStaticParams() {
  try {
    const posts = await getAllBlogPosts()
    // Filter out posts without valid slugs
    const validPosts = posts.filter((post) => post.slug?.current)
    return validPosts.map((post) => ({
      slug: post.slug.current,
    }))
  } catch (error) {
    console.error('Error generating static params for blog posts:', error)
    return []
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  
  try {
    const post = await getBlogPostBySlug(slug)

    if (!post) {
      return {
        title: 'Blog Post Not Found',
      }
    }

    const rawBase = process.env.NEXT_PUBLIC_SITE_URL || 'https://dmrmedia.org'
    const baseUrl =
      rawBase.includes('dmrmedia.org') && !rawBase.includes('www.')
        ? 'https://www.dmrmedia.org'
        : rawBase
    const canonicalUrl = `${baseUrl}/blog/${post.slug.current}`

    return {
      title: post.seo?.metaTitle || post.title,
      description: post.seo?.metaDescription || post.description,
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title: post.seo?.metaTitle || post.title,
        description: post.seo?.metaDescription || post.description,
        images: post.mainImage?.asset?.url ? [post.mainImage.asset.url] : [],
        type: 'article',
        publishedTime: post.publishedAt,
      },
    }
  } catch (error: any) {
    console.error('Error generating metadata for blog post:', {
      slug,
      error: error?.message || error,
    })
    return {
      title: 'Blog Post Not Found',
    }
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  
  try {
    const post = await getBlogPostBySlug(slug)

    if (!post) {
      console.warn(`Blog post not found for slug: ${slug}`)
      notFound()
    }

    // Fetch all posts for related posts component
    const allPosts = await getAllBlogPosts()

    const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  // Build schema markup: Article + EEAT (Person, Organization)
  const rawBase = process.env.NEXT_PUBLIC_SITE_URL || 'https://dmrmedia.org'
  const baseUrl =
    rawBase.includes('dmrmedia.org') && !rawBase.includes('www.')
      ? 'https://www.dmrmedia.org'
      : rawBase
  const postUrl = `${baseUrl}/blog/${post.slug.current}`
  const dateModified = post.schemaMarkup?.dateModified || post.publishedAt
  const articleSection = post.schemaMarkup?.articleSection || post.category

  // EEAT: Organization & Person schemas for credibility
  const organizationSchema = buildOrganizationSchema(baseUrl)
  
  // Safely handle author data (might be null/undefined)
  const personSchema = post.author ? buildPersonSchema(
    {
      name: post.author.name || 'DMR Media Team',
      image: post.author.image,
      bio: post.author.bio,
      shortDescription: post.author.shortDescription,
      title: post.author.title,
      skills: post.author.skills,
      slug: post.author.slug || post.author.teamProfileSlug,
      linkedin: post.author.linkedin,
      twitter: post.author.twitter,
    },
    baseUrl
  ) : null

  const articleSchema = {
    '@type': 'BlogPosting',
    '@id': `${postUrl}#article`,
    headline: post.title,
    description: post.description,
    image: post.mainImage.asset.url,
    datePublished: post.publishedAt,
    dateModified: dateModified,
    ...(personSchema && { author: { '@id': (personSchema as { '@id': string })['@id'] } }),
    publisher: { '@id': (organizationSchema as { '@id': string })['@id'] },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
    articleSection: articleSection,
    url: postUrl,
    ...(post.tags && post.tags.length > 0 && {
      keywords: post.tags.join(', '),
    }),
  }

  // Single @graph with all schemas (Article, Organization, Person)
  const graphItems: object[] = [
    organizationSchema,
    ...(personSchema ? [personSchema] : []),
    articleSchema,
  ]

  // FAQPage schema — only emitted when the post has FAQ items
  if (post.faq && post.faq.length > 0) {
    graphItems.push({
      '@type': 'FAQPage',
      '@id': `${postUrl}#faq`,
      mainEntity: post.faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    })
  }

  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': graphItems,
  }

  // Extract h2 + h3 headings for Table of Contents
  const tocHeadings = extractHeadings(post.body)

  if (post.faq && post.faq.length > 0) {
    tocHeadings.push({ id: 'frequently-asked-questions', text: 'Frequently Asked Questions', level: 2 })
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />
      <div className="min-h-screen bg-white">
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 border-b border-[var(--color-ink-200)] min-h-[55vh]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          {post.mainImage?.asset?.url ? (
            <Image
              src={post.mainImage.asset.url}
              alt={post.mainImage.alt || post.title}
              fill
              priority
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-[var(--color-ink-200)]" />
          )}
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/55" />
        </div>
        
        {/* Content */}
        <div className="container-max relative z-10">
          <div className="max-w-3xl text-left">
            <span className="uppercase tracking-[0.2em] text-xs text-white/70 font-serif mb-5 block">
              {post.category}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light !text-white leading-[1.1] tracking-tight mb-8 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]" style={{ color: '#FFFFFF' }}>
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm !text-white font-serif drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" style={{ color: '#FFFFFF' }}>
              {post.author.image && (
                <Image
                  src={post.author.image}
                  alt={post.author.name}
                  width={36}
                  height={36}
                  className="h-9 w-9 border border-white/30 object-cover"
                />
              )}
              {post.author.slug || post.author.teamProfileSlug ? (
                <Link 
                  href={`/about/${post.author.slug || post.author.teamProfileSlug}`}
                  className="hover:underline transition-all"
                  style={{ color: '#FFFFFF' }}
                >
                  {post.author.name}
                </Link>
              ) : (
                <span style={{ color: '#FFFFFF' }}>{post.author.name}</span>
              )}
              <span className="text-white/50">•</span>
              <span style={{ color: '#FFFFFF' }}>{formattedDate}</span>
              <span className="text-white/50">•</span>
              <span style={{ color: '#FFFFFF' }}>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      <article className="google-general-landing py-14 md:py-20">
        <div className="container-max px-4 sm:px-6">
          <div className="flex gap-12 xl:gap-16">

            {/* ── Main content ── */}
            <div className="min-w-0 flex-1 space-y-10">
              {tocHeadings.length > 0 ? <TableOfContents headings={tocHeadings} layout="mobile" /> : null}

              <BlogContent body={post.body} />

            {post.faq && post.faq.length > 0 && (
              <BlogFAQ items={post.faq} />
            )}

            {post.tags && post.tags.length > 0 && (
              <div className="rounded-lg border border-[var(--color-ink-200)] bg-[var(--surface-base)] px-6 py-8">
                <p className="gg-eyebrow mb-4">Topics</p>
                <ul className="flex flex-wrap gap-2" role="list">
                  {post.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-sm border border-[var(--color-ink-200)] bg-white px-3 py-1.5 font-serif text-[10px] uppercase tracking-[0.12em] text-[var(--color-ink-400)]"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {post.author ? <BlogAuthorCard author={post.author} /> : null}

            <div className="flex justify-center border-t border-[var(--color-ink-200)] pt-8">
              <Link
                href="/blog"
                className="gg-eyebrow gg-eyebrow--strong inline-flex items-center transition-opacity hover:opacity-70"
              >
                ← Back to all insights
              </Link>
            </div>
            </div>{/* end main content */}

            {/* ── Right sidebar: sections ── */}
            {tocHeadings.length > 0 && (
              <aside className="hidden w-72 shrink-0 xl:block">
                <TableOfContents headings={tocHeadings} layout="sidebar" />
              </aside>
            )}

          </div>{/* end flex row */}
        </div>
      </article>

      {/* ── Related Posts ── */}
      <RelatedPosts
        currentPostSlug={post.slug.current}
        currentCategory={post.category}
        currentTags={post.tags}
        allPosts={allPosts}
        maxPosts={3}
      />

    </div>
    </>
    )
  } catch (error: any) {
    console.error('Error rendering blog post:', {
      slug,
      error: error?.message || error,
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    })
    notFound()
  }
}
