import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { getBlogPostBySlug, getAllBlogPosts } from '@/data/blogPosts'
import type { Metadata } from 'next'

export const revalidate = 60

export async function generateStaticParams() {
  const posts = await getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug.current,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
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
}

const portableTextComponents = {
  block: {
    h2: ({ children }: any) => (
      <h2 className="text-[28px] sm:text-[32px] font-serif font-light text-[var(--color-off-black)] mt-10 mb-3 tracking-tight">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-[22px] sm:text-[24px] font-serif font-light text-[var(--color-off-black)] mt-7 mb-2 tracking-tight">
        {children}
      </h3>
    ),
    normal: ({ children }: any) => (
      <p className="text-[var(--color-ink-400)] text-base sm:text-[17px] leading-[1.6] mb-4">
        {children}
      </p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-2 border-[var(--color-trust)] pl-5 my-8 italic text-[var(--color-ink-400)]">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside mb-4 text-[var(--color-ink-400)] space-y-1.5">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside mb-4 text-[var(--color-ink-400)] space-y-1.5">
        {children}
      </ol>
    ),
  },
  marks: {
    link: ({ children, value }: any) => (
      <a
        href={value.href}
        className="text-[var(--color-trust)] hover:opacity-80 underline decoration-[var(--color-trust)]/40"
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
  const post = await getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="min-h-screen bg-[var(--surface-base)]">
      <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-white via-white/95 to-[var(--surface-base)]">
        <div className="pointer-events-none absolute inset-0 flex justify-end pr-4 sm:pr-10 lg:pr-20 pb-10 sm:pb-14">
          <div className="relative w-[240px] sm:w-[320px] lg:w-[460px] aspect-[4/5] rounded-[40px] overflow-hidden bg-white/40 backdrop-blur-[2px] border border-[var(--color-ink-200)] opacity-70">
            <Image
              src={post.mainImage.asset.url}
              alt={post.mainImage.alt}
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        <div className="relative z-10 w-full pt-12 pb-14">
          <div className="container-max">
            <div className="max-w-3xl space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-[var(--color-off-black)]">
                {post.category}
              </span>
              <h1 className="text-[40px] sm:text-[52px] lg:text-[60px] font-serif font-light text-[var(--color-off-black)] leading-[1.04] tracking-tight">
                {post.title}
                <span className="text-[var(--color-trust)] text-[1.05em] align-baseline">.</span>
              </h1>
              <p className="text-base sm:text-[17px] text-[var(--color-ink-400)] leading-[1.55] max-w-2xl">
                {post.description}
              </p>
              <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--color-ink-400)]">
                <div className="flex items-center gap-3">
                  {post.author.image && (
                    <Image
                      src={post.author.image}
                      alt={post.author.name}
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-full border border-[var(--color-ink-200)] object-cover"
                    />
                  )}
                  <span>{post.author.name}</span>
                </div>
                <span className="text-[var(--color-ink-200)]">•</span>
                <span>{formattedDate}</span>
                <span className="text-[var(--color-ink-200)]">•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <article className="py-20">
        <div className="container-max">
          <div className="max-w-4xl mx-auto space-y-12">
            <PortableText value={post.body} components={portableTextComponents} />

            {post.tags && post.tags.length > 0 && (
              <div className="border-t border-[var(--color-ink-200)] pt-6">
                <h3 className="text-xs uppercase tracking-[0.3em] text-[var(--color-ink-400)] mb-4">
                  Topics
                </h3>
                <div className="flex flex-wrap gap-3">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[var(--color-ink-200)] bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[var(--color-ink-400)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="rounded-[24px] border border-[var(--color-ink-200)] bg-white/85 backdrop-blur-sm p-8">
              <div className="flex flex-col sm:flex-row items-start gap-5">
                {post.author.image && (
                  <Image
                    src={post.author.image}
                    alt={post.author.name}
                    width={96}
                    height={96}
                    className="h-24 w-24 rounded-full border border-[var(--color-ink-200)] object-cover"
                  />
                )}
                <div>
                  <h3 className="text-2xl font-serif font-light text-[var(--color-off-black)] mb-3">
                    About {post.author.name}
                  </h3>
                  <p className="text-sm text-[var(--color-ink-400)] leading-relaxed mb-4">
                    Marketing experts specializing in luxury real estate SEO, Google Ads, and digital strategy. Helping premium agents dominate their markets with data-driven campaigns and proven results.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 rounded-full px-6 py-3 bg-[var(--color-off-black)] text-white uppercase tracking-[0.3em] text-[11px] hover:bg-black transition-colors duration-300"
                  >
                    Work With Us
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex justify-center pt-2">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.24em] text-[var(--color-trust)] hover:text-[var(--color-off-black)] transition-colors duration-300"
              >
                <span>←</span>
                <span>Back to all insights</span>
              </Link>
            </div>
          </div>
        </div>
      </article>

      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="rounded-[28px] border border-[var(--color-ink-200)] bg-white/85 backdrop-blur-sm px-8 py-14 md:px-14 md:py-18 text-center">
            <h2 className="text-3xl sm:text-4xl font-serif font-light text-[var(--color-off-black)] mb-6">
              Ready to elevate your real estate marketing?
            </h2>
            <p className="text-sm sm:text-base text-[var(--color-ink-400)] max-w-2xl mx-auto mb-6 leading-[1.55]">
              Let’s tailor a growth plan around your portfolio—SEO, paid media, and analytics working together.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full px-6 py-3 bg-[var(--color-off-black)] text-white uppercase tracking-[0.3em] text-[11px] hover:bg-black transition-colors duration-300"
              >
                Start a Project
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-3 rounded-full px-6 py-3 border border-[var(--color-ink-200)] text-[var(--color-off-black)] uppercase tracking-[0.3em] text-[11px] hover:border-[var(--color-trust)] hover:text-[var(--color-trust)] transition-colors duration-300"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
