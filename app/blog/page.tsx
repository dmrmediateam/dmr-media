import SEOWrapper from '@/components/SEOWrapper'
import BlogPostGrid from '@/components/blog/BlogPostGrid'
import BlogSectionHeader from '@/components/blog/BlogSectionHeader'
import { getAllBlogPosts } from '@/data/blogPosts'
import { buildOrganizationSchema } from '@/lib/eeatSchema'
import { metadataFromRegistry } from '@/lib/content-registry'
import '@/app/landing/google-general/google-general-landing.css'
import '@/app/styles/homepage-luxury.css'

export const metadata = metadataFromRegistry('/blog')

export const revalidate = 60

export default async function BlogPage() {
  const posts = await getAllBlogPosts()
  const validPosts = posts.filter((post) => post.slug?.current)

  const rawBase = process.env.NEXT_PUBLIC_SITE_URL || 'https://dmrmedia.org'
  const baseUrl =
    rawBase.includes('dmrmedia.org') && !rawBase.includes('www.')
      ? 'https://www.dmrmedia.org'
      : rawBase
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
        <main className="dmr-home google-general-landing min-h-screen bg-[var(--surface-base)] [--seo-section-y:theme(spacing.20)] md:[--seo-section-y:theme(spacing.28)]">
          <section
            className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] py-[var(--seo-section-y)]"
            aria-labelledby="blog-index-heading"
          >
            <div className="container-max px-4 sm:px-6">
              <BlogSectionHeader
                eyebrow="Insights"
                title="Field notes for market makers."
                titleAs="h1"
                titleId="blog-index-heading"
                intro={
                  <p>
                    What we&apos;re seeing across luxury real estate: SEO intel, campaign architecture, and
                    conversion systems engineered for discerning buyers.
                  </p>
                }
              />
            </div>
          </section>

          <section
            id="latest"
            className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-white py-[var(--seo-section-y)]"
            aria-label="All blog articles"
          >
            <div className="container-max px-4 sm:px-6">
              {validPosts.length > 0 ? (
                <>
                  <p className="gg-eyebrow mb-10 md:mb-12">
                    {validPosts.length} {validPosts.length === 1 ? 'article' : 'articles'}
                  </p>
                  <BlogPostGrid posts={validPosts} />
                </>
              ) : (
                <BlogPostGrid posts={[]} />
              )}
            </div>
          </section>
        </main>
      </SEOWrapper>
    </>
  )
}
