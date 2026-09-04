import CaseStudyLayout from '@/app/case-study/CaseStudyLayout'
import SEOWrapper from '@/components/SEOWrapper'
import { eaganLuxuryData } from '@/data/case-studies/eagan-luxury-real-estate'
import Image from 'next/image'
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

      {/* Website screenshot — full-width, shown once */}
      <section className="border-t border-[var(--color-ink-200)] bg-white">
        <div className="container-max py-16 md:py-20">
          <Image
            src="/images/screencapture-eaganluxury-2026-09-04.png"
            alt="Eagan Luxury Real Estate — eaganluxury.com, St. Petersburg Florida"
            width={1920}
            height={1080}
            className="w-full h-auto rounded-lg border border-[var(--color-ink-200)] shadow-[0_1px_0_rgba(15,15,15,0.04)]"
            loading="lazy"
          />
        </div>
      </section>
    </SEOWrapper>
  )
}
