'use client'

import Image from 'next/image'
import { SeoReveal } from '@/app/seo-optimization/SeoReveal'
import VideoTestimonials from '@/components/VideoTestimonials'
import GoogleGeneralReviewsScroll from '@/components/landing/GoogleGeneralReviewsScroll'
import {
  FeatureHeading,
  FeatureSection,
  Frame,
  Stage,
  StatBand,
  Tile,
  type StatBandItem,
} from '@/components/landing/ShowcaseParts'

const STATS: StatBandItem[] = [
  { value: '#1', label: 'Real Estate Marketing Agency', detail: 'SEMrush & Lister' },
  { value: '$11m+', label: 'closed in Q1 2026 with search & Google Ads', detail: 'Eagan Luxury' },
  { value: '41', label: 'leads in 30 days on $1,812 of ad spend', detail: 'Hitchcock Properties' },
  { value: '5/5', label: 'stars on Trustpilot & Google' },
]

/** Social proof under the quiz, modeled on /landing/marketing-agency. */
export default function QuizProof({ onStart }: { onStart: () => void }) {
  return (
    <>
      <StatBand stats={STATS} />

      <GoogleGeneralReviewsScroll eyebrow="Reviews" title="Why we have 5/5 stars on Trustpilot & Google" />

      {/* One client who moved through every stage */}
      <FeatureSection id="proof" tone="base">
        <FeatureHeading
          eyebrow="Proof · Eagan Luxury, St. Petersburg"
          title="One client, every channel, $11m+ closed in a quarter"
          body="Website, Google Ads, and SEO run together by our team. Google Search Console for eaganluxury.com."
        />
        <SeoReveal delay={0.08}>
          <Stage className="mx-auto mt-10 max-w-5xl !bg-white md:mt-12">
            <Frame pan="min-w-[640px]">
              <Image
                src="/images/EaganCaseStudy/GoogleSearchConsole.png"
                alt="Google Search Console performance for eaganluxury.com showing organic search growth"
                width={2238}
                height={830}
                sizes="(min-width: 1280px) 1000px, 640px"
                className="h-auto w-full rounded-lg"
              />
            </Frame>
            <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-4 border-white bg-white shadow-[0_12px_30px_-12px_rgba(15,15,15,0.45)]">
                  <Image
                    src="/images/landing/website-development/debi-eagan-headshot.webp"
                    alt="Debi Eagan of Eagan Luxury in St. Petersburg, FL"
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="gg-display text-xl font-light">Debi Eagan</p>
                  <p className="gg-body !text-xs !text-[var(--gg-text-muted)]">Eagan Luxury · St. Petersburg, FL</p>
                </div>
              </div>
              <div className="grid gap-3 sm:min-w-[26rem] sm:grid-cols-3">
                <Tile value="$11m+" label="closed in Q1 2026" />
                <Tile value="3 of 3" label="AI tools name her first" />
                <Tile value="22" label="verified Google ads" />
              </div>
            </div>
          </Stage>
        </SeoReveal>
      </FeatureSection>

      <VideoTestimonials eyebrow="Client testimonials" title="What our clients are saying" />

      {/* Closing call to action: opens the quiz popup */}
      <section className="border-t border-[var(--color-ink-200)] bg-[var(--surface-base)] px-4 py-20 text-center sm:px-6 md:py-28">
        <p className="gg-eyebrow gg-eyebrow--strong">60 seconds</p>
        <h2 className="gg-display mx-auto mt-4 max-w-3xl text-[2.2rem] font-light leading-[1.08] tracking-tight sm:text-5xl">
          Find out where your next $10M is coming from
        </h2>
        <p className="gg-body gg-body-lg mx-auto mt-5 max-w-xl">
          Answer eight quick questions and get a roadmap tailored to your stage, your market, and your answers.
        </p>
        <button
          type="button"
          onClick={onStart}
          className="mt-9 inline-flex min-h-[60px] w-full max-w-sm items-center justify-center gap-2 rounded-full bg-[var(--color-off-black)] px-10 ![font-family:var(--font-inter),ui-sans-serif,system-ui,sans-serif] text-base font-semibold !text-white shadow-[0_16px_40px_-16px_rgba(15,15,15,0.6)] [&_*]:![font-family:var(--font-inter),ui-sans-serif,system-ui,sans-serif] transition-transform hover:-translate-y-0.5 motion-reduce:transition-none sm:w-auto"
        >
          Start the quiz <span aria-hidden className="!text-white">→</span>
        </button>
      </section>
    </>
  )
}
