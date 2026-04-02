import CaseStudyLayout from '@/app/case-study/CaseStudyLayout'
import SEOWrapper from '@/components/SEOWrapper'
import { eaganLuxuryData } from '@/data/case-studies/eagan-luxury-real-estate'
import Link from 'next/link'
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

      {/* CTA */}
      <section className="bg-[#0D0D0D] py-24 md:py-32 text-center">
        <div className="container-max max-w-2xl space-y-6">
          <p className="text-xs uppercase tracking-[0.2em] font-serif" style={{ color: '#B8925A' }}>
            Ready to grow?
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[#F5F4F0] leading-[1.1] tracking-tight">
            Ready to become the #1 agent in your market?
          </h2>
          <p className="text-base text-[#888] font-serif leading-relaxed">
            We build the system. You close the deals.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 bg-[#F5F4F0] text-[#0D0D0D] uppercase tracking-[0.15em] text-xs font-serif hover:opacity-85 transition-opacity duration-300"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      </section>
    </SEOWrapper>
  )
}
