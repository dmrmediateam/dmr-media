import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { getBlogPostBySlug, getAllBlogPosts } from '@/data/blogPosts'
import type { Metadata } from 'next'
import BlogContent from '@/components/BlogContent'

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

    return {
      title: post.seo?.metaTitle || post.title,
      description: post.seo?.metaDescription || post.description,
      openGraph: {
        title: post.seo?.metaTitle || post.title,
        description: post.seo?.metaDescription || post.description,
        images: [post.mainImage.asset.url],
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

    const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  // Build schema markup for Article
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dmrmedia.org'
  const postUrl = `${baseUrl}/blog/${post.slug.current}`
  const dateModified = post.schemaMarkup?.dateModified || post.publishedAt
  const articleSection = post.schemaMarkup?.articleSection || post.category

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: post.mainImage.asset.url,
    datePublished: post.publishedAt,
    dateModified: dateModified,
    author: {
      '@type': 'Person',
      name: post.author.name,
      ...(post.author.image && { image: post.author.image }),
    },
    publisher: {
      '@type': 'Organization',
      name: 'DMR Media',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
    articleSection: articleSection,
    ...(post.tags && post.tags.length > 0 && {
      keywords: post.tags.join(', '),
    }),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="min-h-screen bg-white">
      <section className="relative py-24 md:py-32 border-b border-[var(--color-ink-200)] min-h-[60vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={post.mainImage.asset.url}
            alt={post.mainImage.alt}
            fill
            priority
            className="object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        {/* Content */}
        <div className="container-max relative z-10">
          <div className="max-w-3xl">
            <span className="uppercase tracking-[0.2em] text-xs text-white/80 font-serif mb-6 block">
              {post.category}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light !text-white leading-[1.1] tracking-tight mb-8 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]" style={{ color: '#FFFFFF' }}>
              {post.title}
            </h1>
            <p className="text-base text-white/90 leading-relaxed font-serif max-w-2xl mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              {post.description}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm !text-white font-serif drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" style={{ color: '#FFFFFF' }}>
              {post.author.image && (
                <Image
                  src={post.author.image}
                  alt={post.author.name}
                  width={40}
                  height={40}
                  className="h-10 w-10 border border-white/30 object-cover"
                />
              )}
              <span style={{ color: '#FFFFFF' }}>{post.author.name}</span>
              <span className="text-white/60">•</span>
              <span style={{ color: '#FFFFFF' }}>{formattedDate}</span>
              <span className="text-white/60">•</span>
              <span style={{ color: '#FFFFFF' }}>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      <article className="py-14 md:py-20">
        <div className="container-max">
          <div className="max-w-3xl mx-auto space-y-8">
            <BlogContent body={post.body} />

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
                  <p className="text-sm text-[var(--color-ink-300)] leading-relaxed mb-6 font-serif">
                    Marketing experts specializing in luxury real estate SEO, Google Ads, and digital strategy. Helping premium agents dominate their markets with data-driven campaigns and proven results.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-3 bg-[var(--color-off-black)] text-white uppercase tracking-[0.12em] text-xs font-serif hover:opacity-85 transition-opacity duration-300 border border-[var(--color-off-black)]"
                  >
                    Work With Us
                  </Link>
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
          </div>
        </div>
      </article>

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
