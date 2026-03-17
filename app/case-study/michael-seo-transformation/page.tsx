import CaseStudyLayout from '@/app/case-study/CaseStudyLayout'
import SEOWrapper from '@/components/SEOWrapper'
import { michaelSeoData } from '@/data/case-studies/michael-seo-transformation'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: michaelSeoData.seo.title,
  description: michaelSeoData.seo.description,
  alternates: {
    canonical: michaelSeoData.seo.canonical,
  },
  openGraph: {
    title: `${michaelSeoData.client} | DMR Media Case Study`,
    description: michaelSeoData.seo.description,
    url: michaelSeoData.seo.canonical,
    images: [{ url: `https://www.dmrmedia.org${michaelSeoData.seo.ogImage}` }],
    type: 'article',
  },
}

export default function MichaelCaseStudy() {
  return (
    <SEOWrapper
      slug="/case-study/michael-seo-transformation"
      title={michaelSeoData.seo.title}
      description={michaelSeoData.seo.description}
      datePublished={michaelSeoData.seo.datePublished}
      dateModified={michaelSeoData.seo.dateModified}
      schemaType="article"
    >
      <CaseStudyLayout data={michaelSeoData} />
    </SEOWrapper>
  )
}
