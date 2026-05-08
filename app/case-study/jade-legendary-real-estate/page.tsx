import CaseStudyLayout from '@/app/case-study/CaseStudyLayout'
import SEOWrapper from '@/components/SEOWrapper'
import { jadeLegendaryData } from '@/data/case-studies/jade-legendary-real-estate'
import Image from 'next/image'
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

      <section className="border-t border-[var(--color-ink-200)] bg-white" aria-label="Website preview">
        <div className="container-max py-16 md:py-20">
          <Image
            src={jadeLegendaryData.seo.ogImage}
            alt={jadeLegendaryData.hero.imageAlt}
            width={1920}
            height={1080}
            className="h-auto w-full rounded-lg border border-[var(--color-ink-200)] shadow-[0_1px_0_rgba(15,15,15,0.04)]"
            loading="lazy"
          />
        </div>
      </section>
    </SEOWrapper>
  )
}
