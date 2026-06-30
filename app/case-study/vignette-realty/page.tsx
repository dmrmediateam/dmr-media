import CaseStudyLayout from '@/app/case-study/CaseStudyLayout'
import SEOWrapper from '@/components/SEOWrapper'
import { vignetteRealtyData } from '@/data/case-studies/vignette-realty'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: vignetteRealtyData.seo.title,
  description: vignetteRealtyData.seo.description,
  alternates: {
    canonical: vignetteRealtyData.seo.canonical,
  },
  openGraph: {
    title: `${vignetteRealtyData.client} | DMR Media Case Study`,
    description: vignetteRealtyData.seo.description,
    url: vignetteRealtyData.seo.canonical,
    images: [{ url: `https://www.dmrmedia.org${vignetteRealtyData.seo.ogImage}` }],
    type: 'article',
  },
}

export default function VignetteRealtyCaseStudy() {
  return (
    <SEOWrapper
      slug="/case-study/vignette-realty"
      title={vignetteRealtyData.seo.title}
      description={vignetteRealtyData.seo.description}
      datePublished={vignetteRealtyData.seo.datePublished}
      dateModified={vignetteRealtyData.seo.dateModified}
      schemaType="article"
    >
      <CaseStudyLayout data={vignetteRealtyData} />
    </SEOWrapper>
  )
}
