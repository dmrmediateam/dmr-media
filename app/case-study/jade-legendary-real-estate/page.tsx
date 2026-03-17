import CaseStudyLayout from '@/app/case-study/CaseStudyLayout'
import SEOWrapper from '@/components/SEOWrapper'
import { jadeLegendaryData } from '@/data/case-studies/jade-legendary-real-estate'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: jadeLegendaryData.seo.title,
  description: jadeLegendaryData.seo.description,
  alternates: {
    canonical: jadeLegendaryData.seo.canonical,
  },
  openGraph: {
    title: `${jadeLegendaryData.client} | DMR Media Case Study`,
    description: jadeLegendaryData.seo.description,
    url: jadeLegendaryData.seo.canonical,
    images: [{ url: `https://www.dmrmedia.org${jadeLegendaryData.seo.ogImage}` }],
    type: 'article',
  },
}

export default function JadeCaseStudy() {
  return (
    <SEOWrapper
      slug="/case-study/jade-legendary-real-estate"
      title={jadeLegendaryData.seo.title}
      description={jadeLegendaryData.seo.description}
      datePublished={jadeLegendaryData.seo.datePublished}
      dateModified={jadeLegendaryData.seo.dateModified}
      schemaType="article"
    >
      <CaseStudyLayout data={jadeLegendaryData} />
    </SEOWrapper>
  )
}
