import CaseStudyLayout from '@/app/case-study/CaseStudyLayout'
import SEOWrapper from '@/components/SEOWrapper'
import { hitchcockPropertiesData } from '@/data/case-studies/hitchcock-properties'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: hitchcockPropertiesData.seo.title,
  description: hitchcockPropertiesData.seo.description,
  alternates: {
    canonical: hitchcockPropertiesData.seo.canonical,
  },
  openGraph: {
    title: `${hitchcockPropertiesData.client} | DMR Media Case Study`,
    description: hitchcockPropertiesData.seo.description,
    url: hitchcockPropertiesData.seo.canonical,
    images: [{ url: `https://www.dmrmedia.org${hitchcockPropertiesData.seo.ogImage}` }],
    type: 'article',
  },
}

export default function HitchcockPropertiesCaseStudy() {
  return (
    <SEOWrapper
      slug="/case-study/hitchcock-properties"
      title={hitchcockPropertiesData.seo.title}
      description={hitchcockPropertiesData.seo.description}
      datePublished={hitchcockPropertiesData.seo.datePublished}
      dateModified={hitchcockPropertiesData.seo.dateModified}
      schemaType="article"
    >
      <CaseStudyLayout data={hitchcockPropertiesData} />
    </SEOWrapper>
  )
}
