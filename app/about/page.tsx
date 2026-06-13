import AboutPageContent from './AboutPageContent'
import SEOWrapper from '@/components/SEOWrapper'
import { getTeamAuthors } from '@/data/authors'
import { getAllBlogPosts } from '@/data/blogPosts'
import { metadataFromRegistry } from '@/lib/content-registry'

export const metadata = metadataFromRegistry('/about')

export default async function AboutPage() {
  const [blogPosts, teamAuthors] = await Promise.all([getAllBlogPosts(), getTeamAuthors()])
  const validPosts = blogPosts.filter((post) => post.slug?.current)
  const featuredPosts = validPosts.slice(0, 3)

  return (
    <SEOWrapper slug="/about">
      <AboutPageContent posts={featuredPosts} teamAuthors={teamAuthors} />
    </SEOWrapper>
  )
}
