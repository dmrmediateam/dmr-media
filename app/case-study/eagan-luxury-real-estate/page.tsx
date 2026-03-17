import CaseStudyLayout from '@/app/case-study/CaseStudyLayout'
import SEOWrapper from '@/components/SEOWrapper'
import { eaganLuxuryData } from '@/data/case-studies/eagan-luxury-real-estate'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: eaganLuxuryData.seo.title,
  description: eaganLuxuryData.seo.description,
  alternates: {
    canonical: eaganLuxuryData.seo.canonical,
  },
  openGraph: {
    title: `${eaganLuxuryData.client} | DMR Media Case Study`,
    description: eaganLuxuryData.seo.description,
    url: eaganLuxuryData.seo.canonical,
    images: [{ url: `https://www.dmrmedia.org${eaganLuxuryData.seo.ogImage}` }],
    type: 'article',
  },
}

export default function EaganLuxuryCaseStudy() {
  return (
    <SEOWrapper
      slug="/case-study/eagan-luxury-real-estate"
      title={eaganLuxuryData.seo.title}
      description={eaganLuxuryData.seo.description}
      datePublished={eaganLuxuryData.seo.datePublished}
      dateModified={eaganLuxuryData.seo.dateModified}
      schemaType="article"
    >
      <CaseStudyLayout data={eaganLuxuryData} />
    </SEOWrapper>
  )
}
