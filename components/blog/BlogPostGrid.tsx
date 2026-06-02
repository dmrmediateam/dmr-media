import Link from 'next/link'
import Image from 'next/image'

export type BlogPostListItem = {
  _id: string
  title: string
  description?: string
  publishedAt?: string
  slug?: { current?: string }
  mainImage?: {
    asset?: { url?: string }
    alt?: string
  }
}

function formatPublishedDate(publishedAt?: string) {
  if (!publishedAt) return ''
  return new Date(publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function BlogPostGrid({ posts }: { posts: BlogPostListItem[] }) {
  if (posts.length === 0) {
    return (
      <div className="rounded-lg border border-[var(--color-ink-200)] bg-white px-6 py-14 text-center shadow-[0_1px_0_rgba(15,15,15,0.04)]">
        <p className="gg-body">Marketing insights and strategies coming soon.</p>
      </div>
    )
  }

  return (
    <ul className="grid list-none grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3" role="list">
      {posts.map((post) => {
        const formattedDate = formatPublishedDate(post.publishedAt)
        const href = `/blog/${post.slug?.current || ''}`

        return (
          <li key={post._id} className="list-none">
            <Link
              href={href}
              className="group flex h-full flex-col overflow-hidden rounded-lg border border-[var(--color-ink-200)] bg-white shadow-[0_1px_0_rgba(15,15,15,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-off-black)]/10 hover:shadow-md motion-reduce:hover:translate-y-0"
            >
              <div className="relative h-56 overflow-hidden border-b border-[var(--color-ink-200)] bg-[var(--color-ink-200)]">
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
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="gg-eyebrow !text-xs">No image</span>
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                {formattedDate ? (
                  <p className="gg-eyebrow mb-3 !text-xs">{formattedDate}</p>
                ) : null}
                <h2 className="gg-display text-xl font-light leading-snug">{post.title}</h2>
                {post.description ? (
                  <p className="gg-body gg-body-sm mb-6 mt-3 flex-1">{post.description}</p>
                ) : (
                  <div className="flex-1" />
                )}
                <span className="gg-eyebrow gg-eyebrow--strong mt-auto transition-opacity group-hover:opacity-70">
                  Read article →
                </span>
              </div>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
