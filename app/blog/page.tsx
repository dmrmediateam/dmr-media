import Link from 'next/link'
import Image from 'next/image'
import { getAllBlogPosts } from '@/data/blogPosts'
import SEOWrapper from '@/components/SEOWrapper'
import { metadataFromRegistry } from '@/lib/content-registry'
import { buildOrganizationSchema } from '@/lib/eeatSchema'

export const metadata = metadataFromRegistry('/blog')

export const revalidate = 60 // Revalidate every 60 seconds

export default async function BlogPage() {
  const posts = await getAllBlogPosts()
  // Filter out posts without valid slugs
  const validPosts = posts.filter((post) => post.slug?.current)

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dmrmedia.org'
  const organizationSchema = buildOrganizationSchema(baseUrl)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            ...organizationSchema,
          }),
        }}
      />
      <SEOWrapper slug="/blog">
    <div className="min-h-screen bg-white">
      <section className="py-14 md:py-20 border-b border-[var(--color-ink-200)]">
        <div className="container-max">
          <div className="max-w-3xl">
            <span className="uppercase tracking-[0.2em] text-xs text-[var(--color-ink-300)] font-serif mb-6 block">Insights</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[var(--color-off-black)] leading-[1.1] tracking-tight mb-8">
              Field notes for market makers.
            </h1>
            <p className="text-base text-[var(--color-ink-300)] leading-relaxed font-serif max-w-xl">
              What we're seeing across luxury real estate—SEO intel, campaign architecture, and conversion systems engineered for discerning buyers.
            </p>
          </div>
        </div>
      </section>

      <section id="latest" className="py-14 md:py-20">
        <div className="container-max">
          {validPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {validPosts.map((post) => {
                const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })

                return (
                  <Link
                    key={post._id}
                    href={`/blog/${post.slug?.current || ''}`}
                    className="group border-b border-[var(--color-ink-200)] pb-8 hover:opacity-60 transition-opacity duration-300 flex flex-col"
                  >
                    <div className="relative h-64 overflow-hidden mb-4">
                      <img
                        src={post.mainImage.asset.url}
                        alt={post.mainImage.alt}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-ink-300)] font-serif">
                        {formattedDate}
                      </div>
                      <h2 className="text-xl font-serif font-light text-[var(--color-off-black)] leading-snug">
                        {post.title}
                      </h2>
                      <p className="text-sm text-[var(--color-ink-300)] leading-relaxed font-serif">
                        {post.description}
                      </p>
                      <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-off-black)] font-serif mt-2">
                        Read article
                      </span>
                    </div>
                  </Link>
                )
              })}
            </div>
          ) : (
            <div className="border-b border-[var(--color-ink-200)] pb-12 pt-12 text-center">
              <p className="text-sm text-[var(--color-ink-300)] font-serif">Marketing insights and strategies coming soon.</p>
            </div>
          )}
        </div>
      </section>
    </div>
    </SEOWrapper>
    </>
  )
}
