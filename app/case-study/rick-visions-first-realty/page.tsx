import CaseStudyLayout from '@/app/case-study/CaseStudyLayout'
import SEOWrapper from '@/components/SEOWrapper'
import { rickVisionsData } from '@/data/case-studies/rick-visions-first-realty'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: rickVisionsData.seo.title,
  description: rickVisionsData.seo.description,
  alternates: {
    canonical: rickVisionsData.seo.canonical,
  },
  openGraph: {
    title: `${rickVisionsData.client} | DMR Media Case Study`,
    description: rickVisionsData.seo.description,
    url: rickVisionsData.seo.canonical,
    images: [{ url: `https://www.dmrmedia.org${rickVisionsData.seo.ogImage}` }],
    type: 'article',
  },
}

export default function RickCaseStudy() {
  return (
    <SEOWrapper
      slug="/case-study/rick-visions-first-realty"
      title={rickVisionsData.seo.title}
      description={rickVisionsData.seo.description}
      datePublished={rickVisionsData.seo.datePublished}
      dateModified={rickVisionsData.seo.dateModified}
      schemaType="article"
    >
      <CaseStudyLayout data={rickVisionsData} />
    </SEOWrapper>
  )
}
