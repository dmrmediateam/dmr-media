import Link from 'next/link'
import Image from 'next/image'
import { getAllBlogPosts } from '@/data/blogPosts'

export const revalidate = 60 // Revalidate every 60 seconds

const heroImage = '/images/StockHomes/modern-luxury-house-at-dusk-2025-02-10-06-40-31-utc.jpg'

export default async function BlogPage() {
  const posts = await getAllBlogPosts()

  return (
    <div className="min-h-screen bg-[var(--surface-base)]">
      <section className="relative min-h-[70vh] lg:min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-white via-white/95 to-[var(--surface-base)]">
        <div className="pointer-events-none absolute inset-0 flex justify-end pr-4 sm:pr-10 lg:pr-20 pb-12 sm:pb-16">
          <div className="relative w-[260px] sm:w-[340px] lg:w-[500px] aspect-[4/5] rounded-[48px] overflow-hidden bg-white/40 backdrop-blur-[2px] border border-[var(--color-ink-200)] opacity-70">
            <Image src={heroImage} alt="Luxury property exterior" fill priority className="object-cover" />
          </div>
        </div>

        <div className="relative z-10 w-full pt-24 pb-24">
          <div className="container-max">
            <div className="max-w-3xl space-y-6">
              <span className="uppercase tracking-[0.35em] text-[10px] text-[var(--color-ink-400)]">Insights</span>
              <h1 className="text-[42px] sm:text-[54px] lg:text-[64px] font-serif font-light text-[var(--color-off-black)] leading-[1.08] tracking-tight">
                Field notes for market makers.
              </h1>
              <p className="text-sm sm:text-base text-[var(--color-ink-400)] leading-relaxed max-w-xl">
                What we’re seeing across luxury real estate—SEO intel, campaign architecture, and conversion systems engineered for discerning buyers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Link
                  href="#latest"
                  className="inline-flex items-center justify-center gap-3 rounded-full px-6 py-3 bg-[var(--color-off-black)] text-white uppercase tracking-[0.3em] text-[11px] transition-colors duration-300 hover:bg-black"
                >
                  See latest articles
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-3 rounded-full px-6 py-3 border border-[var(--color-ink-200)] text-[var(--color-off-black)] uppercase tracking-[0.3em] text-[11px] transition-colors duration-300 hover:border-[var(--color-trust)] hover:text-[var(--color-trust)]"
                >
                  Explore services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="latest" className="py-24">
        <div className="container-max">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => {
                const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })

                return (
                  <Link
                    key={post._id}
                    href={`/blog/${post.slug.current}`}
                    className="group rounded-[24px] border border-[var(--color-ink-200)] overflow-hidden bg-white/80 backdrop-blur-sm hover:border-[var(--color-trust)] transition-colors duration-300"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={post.mainImage.asset.url}
                        alt={post.mainImage.alt}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute top-4 left-4 rounded-full bg-white/80 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-[var(--color-off-black)]">
                        {post.category}
                      </span>
                    </div>
                    <div className="p-6 flex flex-col gap-4">
                      <div className="text-xs uppercase tracking-[0.3em] text-[var(--color-ink-400)] flex items-center gap-2">
                        <span>{formattedDate}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h2 className="text-2xl font-serif font-light text-[var(--color-off-black)] leading-snug group-hover:text-[var(--color-trust)] transition-colors duration-300">
                        {post.title}
                      </h2>
                      <p className="text-sm text-[var(--color-ink-400)] leading-relaxed">
                        {post.description}
                      </p>
                      <span className="inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.24em] text-[var(--color-trust)]">
                        Read article
                        <span className="inline-block h-px w-8 bg-[var(--color-trust)] group-hover:w-12 transition-all duration-300" />
                      </span>
                    </div>
                  </Link>
                )
              })}
            </div>
          ) : (
            <div className="rounded-[24px] border border-[var(--color-ink-200)] bg-white/80 backdrop-blur-sm p-12 text-center">
              <p className="text-sm text-[var(--color-ink-400)]">Marketing insights and strategies coming soon.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
