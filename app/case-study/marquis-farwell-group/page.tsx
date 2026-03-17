import CaseStudyLayout from '@/app/case-study/CaseStudyLayout'
import SEOWrapper from '@/components/SEOWrapper'
import { marquisFarwellData } from '@/data/case-studies/marquis-farwell-group'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: marquisFarwellData.seo.title,
  description: marquisFarwellData.seo.description,
  alternates: {
    canonical: marquisFarwellData.seo.canonical,
  },
  openGraph: {
    title: `${marquisFarwellData.client} | DMR Media Case Study`,
    description: marquisFarwellData.seo.description,
    url: marquisFarwellData.seo.canonical,
    images: [{ url: `https://www.dmrmedia.org${marquisFarwellData.seo.ogImage}` }],
    type: 'article',
  },
}

export default function MarquisFarwellCaseStudy() {
  return (
    <SEOWrapper
      slug="/case-study/marquis-farwell-group"
      title={marquisFarwellData.seo.title}
      description={marquisFarwellData.seo.description}
      datePublished={marquisFarwellData.seo.datePublished}
      dateModified={marquisFarwellData.seo.dateModified}
      schemaType="article"
    >
      <CaseStudyLayout data={marquisFarwellData} />
    </SEOWrapper>
  )
}
