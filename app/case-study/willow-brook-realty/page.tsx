import CaseStudyLayout from '@/app/case-study/CaseStudyLayout'
import SEOWrapper from '@/components/SEOWrapper'
import { willowBrookData } from '@/data/case-studies/willow-brook-realty'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: willowBrookData.seo.title,
  description: willowBrookData.seo.description,
  alternates: {
    canonical: willowBrookData.seo.canonical,
  },
  openGraph: {
    title: `${willowBrookData.client} | DMR Media Case Study`,
    description: willowBrookData.seo.description,
    url: willowBrookData.seo.canonical,
    images: [{ url: `https://www.dmrmedia.org${willowBrookData.seo.ogImage}` }],
    type: 'article',
  },
}

export default function WillowBrookRealtyCaseStudy() {
  return (
    <SEOWrapper
      slug="/case-study/willow-brook-realty"
      title={willowBrookData.seo.title}
      description={willowBrookData.seo.description}
      datePublished={willowBrookData.seo.datePublished}
      dateModified={willowBrookData.seo.dateModified}
      schemaType="article"
    >
      <CaseStudyLayout data={willowBrookData} />
    </SEOWrapper>
  )
}
