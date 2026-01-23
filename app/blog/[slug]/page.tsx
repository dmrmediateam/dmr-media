import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { getBlogPostBySlug, getAllBlogPosts } from '@/data/blogPosts'
import type { Metadata } from 'next'

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

const portableTextComponents = {
  block: {
    h2: ({ children }: any) => (
      <h2 className="text-2xl md:text-3xl font-serif font-light text-[var(--color-off-black)] mt-12 mb-6 tracking-tight">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl md:text-2xl font-serif font-light text-[var(--color-off-black)] mt-10 mb-4 tracking-tight">
        {children}
      </h3>
    ),
    normal: ({ children }: any) => (
      <p className="text-[var(--color-ink-300)] text-base leading-relaxed mb-6 font-serif">
        {children}
      </p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l border-[var(--color-off-black)] pl-6 my-8 text-[var(--color-ink-300)] font-serif">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside mb-6 text-[var(--color-ink-300)] space-y-2 font-serif">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside mb-6 text-[var(--color-ink-300)] space-y-2 font-serif">
        {children}
      </ol>
    ),
  },
  marks: {
    link: ({ children, value }: any) => (
      <a
        href={value.href}
        className="text-[var(--color-off-black)] hover:opacity-60 transition-opacity duration-300 underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
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
      <section className="py-24 md:py-32 border-b border-[var(--color-ink-200)]">
        <div className="container-max">
          <div className="max-w-3xl">
            <span className="uppercase tracking-[0.2em] text-xs text-[var(--color-ink-300)] font-serif mb-6 block">
              {post.category}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[var(--color-off-black)] leading-[1.1] tracking-tight mb-8">
              {post.title}
            </h1>
            <p className="text-base text-[var(--color-ink-300)] leading-relaxed font-serif max-w-2xl mb-8">
              {post.description}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--color-ink-300)] font-serif">
              {post.author.image && (
                <Image
                  src={post.author.image}
                  alt={post.author.name}
                  width={40}
                  height={40}
                  className="h-10 w-10 border border-[var(--color-ink-200)] object-cover"
                />
              )}
              <span>{post.author.name}</span>
              <span className="text-[var(--color-ink-200)]">•</span>
              <span>{formattedDate}</span>
              <span className="text-[var(--color-ink-200)]">•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      <article className="py-24 md:py-32">
        <div className="container-max">
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="relative h-96 overflow-hidden mb-12">
              <Image
                src={post.mainImage.asset.url}
                alt={post.mainImage.alt}
                fill
                priority
                className="object-cover"
              />
            </div>

            <PortableText value={post.body} components={portableTextComponents} />

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

      <section className="py-24 md:py-32 bg-white border-t border-[var(--color-ink-200)]">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-serif font-light text-[var(--color-off-black)] mb-6">
              Ready to elevate your real estate marketing?
            </h2>
            <p className="text-base text-[var(--color-ink-300)] max-w-2xl mx-auto mb-8 leading-relaxed font-serif">
              Let’s tailor a growth plan around your portfolio—SEO, paid media, and analytics working together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-[var(--color-off-black)] text-white uppercase tracking-[0.12em] text-xs font-serif hover:opacity-85 transition-opacity duration-300 border border-[var(--color-off-black)]"
              >
                Start a Project
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-3 border border-[var(--color-off-black)] text-[var(--color-off-black)] uppercase tracking-[0.12em] text-xs font-serif hover:bg-[var(--color-off-black)] hover:text-white transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
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
