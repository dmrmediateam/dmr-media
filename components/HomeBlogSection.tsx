'use client'

import Link from 'next/link'
import Image from 'next/image'
import '@/app/landing/google-general/google-general-landing.css'
import BlogPostGrid, { type BlogPostListItem } from '@/components/blog/BlogPostGrid'
import BlogSectionHeader from '@/components/blog/BlogSectionHeader'

interface HomeBlogSectionProps {
  posts: BlogPostListItem[]
  eyebrow?: string
  heading?: string
  viewAllHref?: string
  viewAllLabel?: string
  sectionClassName?: string
  layoutVariant?: 'default' | 'seo'
}

const DEFAULT_EYEBROW = 'Latest insights'
const DEFAULT_HEADING = 'Strategy, timing, and positioning for the luxury market.'
const DEFAULT_VIEW_ALL = 'View all insights'

export default function HomeBlogSection({
  posts,
  eyebrow = DEFAULT_EYEBROW,
  heading = DEFAULT_HEADING,
  viewAllHref = '/blog',
  viewAllLabel = DEFAULT_VIEW_ALL,
  sectionClassName = '',
  layoutVariant = 'default',
}: HomeBlogSectionProps) {
  const isSeoLayout = layoutVariant === 'seo'

  const sectionClasses = isSeoLayout
    ? `google-general-landing scroll-mt-24 border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] py-[var(--seo-section-y)] ${sectionClassName}`.trim()
    : `pt-10 pb-32 bg-[var(--surface-base)] ${sectionClassName}`.trim()

  const viewAllLink = (
    <Link
      href={viewAllHref}
      className={
        isSeoLayout
          ? 'gg-eyebrow gg-eyebrow--strong inline-flex items-center self-start transition-opacity hover:opacity-70 md:self-auto'
          : 'inline-flex items-center self-start font-serif text-xs uppercase tracking-[0.2em] text-[var(--color-off-black)] transition-opacity duration-300 hover:opacity-60 md:self-auto'
      }
    >
      {viewAllLabel} →
    </Link>
  )

  return (
    <section className={sectionClasses}>
      <div className="container-max px-4 sm:px-6">
        {isSeoLayout ? (
          <div className="mb-10 md:mb-12">
            <BlogSectionHeader eyebrow={eyebrow} title={heading} action={viewAllLink} />
          </div>
        ) : (
          <div className="mb-20 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="mb-6 block font-serif text-xs uppercase tracking-[0.2em] text-[var(--color-ink-300)]">
                {eyebrow}
              </span>
              <h2 className="font-serif text-3xl font-light leading-[1.1] tracking-tight text-[var(--color-off-black)] md:text-4xl">
                {heading}
              </h2>
            </div>
            {viewAllLink}
          </div>
        )}

        {isSeoLayout ? (
          <BlogPostGrid posts={posts} />
        ) : (
          <LegacyBlogPostGrid posts={posts} />
        )}
      </div>
    </section>
  )
}

/** Legacy homepage cards (pre–design-system refresh). */
function LegacyBlogPostGrid({ posts }: { posts: BlogPostListItem[] }) {
  if (posts.length === 0) {
    return (
      <div className="border-b border-[var(--color-ink-200)] bg-white pb-12 pt-12 text-center">
        <p className="font-serif text-base text-[var(--color-ink-300)]">Marketing insights and strategies coming soon</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => {
        const formattedDate = post.publishedAt
          ? new Date(post.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })
          : ''

        return (
          <div key={post._id}>
            <Link
              href={`/blog/${post.slug?.current || ''}`}
              className="group block border-b border-[var(--color-ink-200)] bg-white pb-8 transition-opacity duration-300 hover:opacity-60"
            >
              <div className="relative mb-6 h-64 overflow-hidden bg-[var(--color-ink-200)]">
                {post.mainImage?.asset?.url ? (
                  <Image
                    src={post.mainImage.asset.url}
                    alt={post.mainImage.alt || post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center font-serif text-sm text-[var(--color-ink-400)]">
                    No image
                  </div>
                )}
              </div>
              <div className="mb-4 font-serif text-xs uppercase tracking-[0.2em] text-[var(--color-ink-300)]">
                {formattedDate}
              </div>
              <h3 className="mb-3 font-serif text-xl font-light leading-snug text-[var(--color-off-black)]">
                {post.title}
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-[var(--color-ink-300)]">{post.description}</p>
              <div className="font-serif text-xs uppercase tracking-[0.2em] text-[var(--color-off-black)]">
                Read article
              </div>
            </Link>
          </div>
        )
      })}
    </div>
  )
}
