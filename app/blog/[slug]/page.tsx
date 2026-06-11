import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { getBlogPostBySlug, getAllBlogPosts } from '@/data/blogPosts'
import { buildOrganizationSchema, buildPersonSchema } from '@/lib/eeatSchema'
import type { Metadata } from 'next'
import BlogContent from '@/components/BlogContent'
import BlogFAQ from '@/components/BlogFAQ'
import BlogNavBar, { type NavHeading } from '@/components/BlogNavBar'
import TableOfContents from '@/components/blog/TableOfContents'
import RelatedPosts from '@/components/blog/RelatedPosts'
import { extractHeadings } from '@/lib/extractHeadings'

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
      slug: post.author.slug,
      teamProfileSlug: post.author.teamProfileSlug,
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

  // Also for the old BlogNavBar (keeping for compatibility)
  const navHeadings: NavHeading[] = (post.body ?? [])
    .filter((block: any) => block._type === 'block' && (block.style === 'h2' || block.style === 'h3'))
    .map((block: any) => {
      const text: string = (block.children ?? []).map((c: any) => c.text ?? '').join('');
      const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').trim();
      return { id, text };
    })
    .filter((h: NavHeading) => h.id && h.text);

  // Append the hardcoded FAQ section heading when FAQ items exist
  if (post.faq && post.faq.length > 0) {
    navHeadings.push({ id: 'frequently-asked-questions', text: 'Frequently Asked Questions' });
    tocHeadings.push({ id: 'frequently-asked-questions', text: 'Frequently Asked Questions', level: 2 });
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
              {post.author.teamProfileSlug ? (
                <Link 
                  href={`/about-us/${post.author.teamProfileSlug}`}
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

      <article className="py-14 md:py-20">
        <div className="container-max">
          <div className="flex gap-16 xl:gap-20">

            {/* ── Main content ── */}
            <div className="flex-1 min-w-0 space-y-8">
              <BlogContent body={post.body} />

            {post.faq && post.faq.length > 0 && (
              <BlogFAQ items={post.faq} />
            )}

            {post.tags && post.tags.length > 0 && (
              <div className="border-t border-[var(--color-ink-200)] pt-8">
                <h3 className="text-xs uppercase tracking-[0.2em] text-[var(--color-ink-300)] mb-6 font-serif">
                  Topics
                </h3>
                <div className="flex flex-wrap gap-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs uppercase tracking-[0.2em] text-[var(--color-ink-300)] font-serif"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="border-t border-[var(--color-ink-200)] pt-12">
              <div className="flex flex-col sm:flex-row items-start gap-8">
                {post.author.image && (
                  <Image
                    src={post.author.image}
                    alt={post.author.name}
                    width={96}
                    height={96}
                    className="h-24 w-24 border border-[var(--color-ink-200)] object-cover"
                  />
                )}
                <div>
                  <h3 className="text-xl font-serif font-light text-[var(--color-off-black)] mb-4">
                    About {post.author.name}
                  </h3>
                  {post.author.bio && (
                    <p className="text-sm text-[var(--color-ink-300)] leading-relaxed mb-6 font-serif">
                      {post.author.bio}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-4">
                    {post.author.teamProfileSlug && (
                      <Link
                        href={`/about-us/${post.author.teamProfileSlug}`}
                        className="inline-flex items-center justify-center px-8 py-3 border border-[var(--color-off-black)] text-[var(--color-off-black)] uppercase tracking-[0.12em] text-xs font-serif hover:bg-[var(--color-off-black)] hover:text-white transition-all duration-300"
                      >
                        View Profile
                      </Link>
                    )}
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center px-8 py-3 bg-[var(--color-off-black)] text-white uppercase tracking-[0.12em] text-xs font-serif hover:opacity-85 transition-opacity duration-300 border border-[var(--color-off-black)]"
                    >
                      Work With Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center pt-8">
              <Link
                href="/blog"
                className="text-xs uppercase tracking-[0.2em] text-[var(--color-off-black)] font-serif hover:opacity-60 transition-opacity duration-300"
              >
                ← Back to all insights
              </Link>
            </div>
            </div>{/* end main content */}

            {/* ── Right sidebar: Table of Contents ── */}
            {tocHeadings.length > 0 && (
              <aside className="hidden xl:block w-64 shrink-0">
                <TableOfContents headings={tocHeadings} />
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
