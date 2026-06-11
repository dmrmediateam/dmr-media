import Link from 'next/link'
import Image from 'next/image'
import type { BlogPost } from '@/data/blogPosts'

interface RelatedPostsProps {
  currentPostSlug: string
  currentCategory: string
  currentTags?: string[]
  allPosts: BlogPost[]
  maxPosts?: number
}

/**
 * Related Posts Component
 * Shows 3 related articles based on category and tag overlap
 * Improves internal linking and keeps users engaged
 */
export default function RelatedPosts({
  currentPostSlug,
  currentCategory,
  currentTags = [],
  allPosts,
  maxPosts = 3,
}: RelatedPostsProps) {
  // Score and filter related posts — guard every property access defensively
  const scoredPosts = allPosts
    .filter((post) => post?.slug?.current && post.slug.current !== currentPostSlug)
    .map((post) => {
      let score = 0

      // Same category = +10 points
      if (post.category && post.category === currentCategory) {
        score += 10
      }

      // Tag overlap = +5 points per matching tag
      if (post.tags && currentTags.length > 0) {
        const matchingTags = post.tags.filter((tag) => currentTags.includes(tag))
        score += matchingTags.length * 5
      }

      return { post, score }
    })
    .filter((item) => item.score > 0) // Only show posts with some relevance
    .sort((a, b) => b.score - a.score) // Sort by highest score
    .slice(0, maxPosts) // Take top N

  if (scoredPosts.length === 0) {
    return null // No related posts found
  }

  return (
    <section
      className="border-t border-[var(--color-ink-200)] bg-[var(--surface-base)] py-16"
      aria-labelledby="related-posts-heading"
    >
      <div className="container-max px-4 sm:px-6">
        <div className="mb-12">
          <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)] mb-2">
            Keep Reading
          </p>
          <h2
            id="related-posts-heading"
            className="font-serif text-3xl font-light tracking-tight text-[var(--color-off-black)] md:text-4xl"
          >
            Related insights
          </h2>
          <div
            className="mt-4 h-[2px] w-14 bg-gradient-to-r from-[var(--color-off-black)] via-[var(--color-off-black)]/55 to-transparent"
            aria-hidden
          />
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {scoredPosts.map(({ post }) => {
            const formattedDate = post.publishedAt
              ? new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })
              : ''

            return (
              <Link
                key={post._id}
                href={`/blog/${post.slug?.current ?? ''}`}
                className="group block border border-[var(--color-ink-200)] bg-white hover:border-[var(--color-off-black)]/30 hover:shadow-[0_8px_32px_-8px_rgba(15,15,15,0.12)] transition-all duration-300"
              >
                {/* Image */}
                {post.mainImage?.asset?.url && (
                  <div className="relative aspect-[16/9] overflow-hidden bg-[var(--color-ink-200)]">
                    <Image
                      src={post.mainImage.asset.url}
                      alt={post.mainImage?.alt || post.title || ''}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  {/* Category Badge */}
                  {post.category && (
                    <span className="inline-block px-3 py-1 font-serif text-[10px] uppercase tracking-[0.14em] text-[var(--color-ink-400)] bg-[var(--color-ink-200)]/50 mb-4">
                      {post.category}
                    </span>
                  )}

                  {/* Title */}
                  <h3 className="font-serif text-xl font-light text-[var(--color-off-black)] mb-3 line-clamp-2 group-hover:text-[var(--color-off-black)]/70 transition-colors">
                    {post.title}
                  </h3>

                  {/* Description */}
                  {post.description && (
                    <p className="font-serif text-sm leading-relaxed text-[var(--color-ink-300)] mb-4 line-clamp-3">
                      {post.description}
                    </p>
                  )}

                  {/* Meta */}
                  <div className="flex items-center gap-3 text-xs text-[var(--color-ink-400)] font-serif">
                    {formattedDate && <span>{formattedDate}</span>}
                    {formattedDate && post.readTime && <span>•</span>}
                    {post.readTime && <span>{post.readTime}</span>}
                  </div>

                  {/* Read More */}
                  <p className="mt-5 font-serif text-[11px] uppercase tracking-[0.18em] text-[var(--color-off-black)] group-hover:opacity-60 transition-opacity">
                    Read article →
                  </p>
                </div>
              </Link>
            )
          })}
        </div>

        {/* View All Link */}
        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center px-8 py-3 border border-[var(--color-off-black)] text-[var(--color-off-black)] uppercase tracking-[0.12em] text-xs font-serif hover:bg-[var(--color-off-black)] hover:text-white transition-all duration-300"
          >
            View all insights
          </Link>
        </div>
      </div>
    </section>
  )
}
