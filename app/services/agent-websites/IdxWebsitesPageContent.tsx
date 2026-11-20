'use client'

import Image from 'next/image'
import Link from 'next/link'
import { SeoReveal } from '@/app/seo-optimization/SeoReveal'
import { AI_ANSWERS, BRAND_BUILDS, LaptopHero } from '@/app/landing/website-development/WebsiteDevBody'
import AwardBadgeRow from '@/components/AwardBadgeRow'
import ClientLogosSlider from '@/components/ClientLogosSlider'
import TopWebsites from '@/components/TopWebsites'
import VideoTestimonials from '@/components/VideoTestimonials'
import GoogleGeneralHero from '@/components/landing/GoogleGeneralHero'
import GoogleGeneralReviewsScroll from '@/components/landing/GoogleGeneralReviewsScroll'
import LandingStickyCta from '@/components/landing/LandingStickyCta'
import {
  FeatureHeading,
  FeatureSection,
  Frame,
  PhotoCardGrid,
  Stage,
  StatBand,
  Tile,
  type StatBandItem,
} from '@/components/landing/ShowcaseParts'
import { FinalCtaSection, FormCta, LandingFaq, ProcessSteps } from '@/components/landing/conversion/ConversionSections'
import {
  IDX_FAQ,
  IDX_FINAL_CTA,
  IDX_FURTHER_READING,
  IDX_INCLUDED,
  IDX_PROBLEMS,
  IDX_PROCESS,
  IDX_TERMS,
  QUOTE_CTA,
  idxHeroConfig,
} from './idx-websites-data'

const STATS: StatBandItem[] = [
  { value: '600+', label: 'MLSs available through IDX' },
  { value: '3×', label: 'DesignRush Design Awards' },
  { value: '#1', label: 'Real Estate Marketing Agency', detail: 'SEMrush & Lister' },
  { value: '5/5', label: 'stars on Trustpilot & Google' },
]

const LEAD_SYSTEM = [
  'Google Ads campaigns aimed at the buyers and sellers in your market',
  'Our exact follow-up scripts and cadence, tested across clients',
  'The 14-Day Lead Guarantee: qualified leads in your CRM within 14 days of your campaigns going live, or we refund your website fee and ad spend',
] as const

const inlineLink = 'underline decoration-[var(--color-off-black)]/30 underline-offset-4 transition-colors hover:decoration-[var(--color-off-black)]'

/**
 * IDX websites for realtors. Same layout as /landing/website-development, but
 * as an indexable site page: site nav and footer stay, and the copy teaches
 * (what IDX is, why most IDX sites lose the lead) before the proof and CTA.
 */
export default function IdxWebsitesPageContent() {
  return (
    <div className="google-general-landing bg-[var(--surface-base)] text-[var(--color-off-black)]">
      <GoogleGeneralHero config={idxHeroConfig} visual={<LaptopHero />} />

      <section aria-label="Client logos">
        <ClientLogosSlider />
      </section>

      <StatBand stats={STATS} />

      {/* Teaching: the featured-snippet answer, then the three terms. */}
      <FeatureSection id="what-is-idx">
        <SeoReveal>
          <div className="mx-auto max-w-3xl">
            <p className="gg-eyebrow text-center">IDX, explained</p>
            <h2 className="gg-display mt-3 text-center text-[1.9rem] font-light leading-tight tracking-tight sm:text-3xl md:text-[2.75rem]">
              What is an IDX website?
            </h2>
            <p className="gg-body gg-body-lg mx-auto mt-6 max-w-2xl text-center">
              An IDX website is a real estate website that shows live MLS listings on your own domain. IDX (Internet
              Data Exchange) is the agreement that lets agents display their MLS listings to the public. Buyers search
              homes on your site, save the ones they like, and register with you instead of leaving for Zillow.
            </p>
          </div>
        </SeoReveal>
        <SeoReveal delay={0.08}>
          <dl className="mx-auto mt-10 grid max-w-5xl gap-4 md:mt-12 md:grid-cols-3">
            {IDX_TERMS.map((t) => (
              <div key={t.term} className="rounded-2xl border border-[var(--color-ink-200)] bg-[var(--surface-base)] p-6">
                <dt className="gg-display text-2xl font-light">{t.term}</dt>
                <dd className="gg-body gg-body-sm mt-2">{t.body}</dd>
              </div>
            ))}
          </dl>
          <p className="gg-body mx-auto mt-8 max-w-2xl text-center !text-sm">
            Every MLS sets its own display rules, and the IDX provider you use decides how much of your site Google can
            read. See <Link href="/mls-integrations" className={inlineLink}>which MLSs we connect to</Link>, or compare
            providers in{' '}
            <Link href="/blog/ihomefinder-vs-idx-broker-in-2026" className={inlineLink}>
              iHomefinder vs IDX Broker
            </Link>
            .
          </p>
        </SeoReveal>
      </FeatureSection>

      {/* Problem: why most IDX setups lose the lead. */}
      <FeatureSection id="problem" tone="base">
        <FeatureHeading
          eyebrow="The problem"
          title="Why most IDX websites lose the lead"
          body="Adding home search to a website is easy. Turning searches into registered buyers is where most IDX setups fail."
        />
        <ol className="mx-auto mt-10 max-w-4xl list-none p-0 md:mt-14">
          {IDX_PROBLEMS.map((p, i) => (
            <SeoReveal key={p.number} delay={i * 0.07}>
              <li className="border-t border-[var(--color-ink-200)] py-8 first:border-t-0 first:pt-0 md:py-10">
                <article className="grid gap-4 md:grid-cols-[4.5rem_minmax(0,1fr)] md:gap-10">
                  <p className="font-serif text-4xl font-light tabular-nums text-[var(--color-ink-200)] md:text-5xl" aria-hidden>
                    {p.number}
                  </p>
                  <div>
                    <h3 className="gg-display text-2xl font-light md:text-[1.75rem]">{p.title}</h3>
                    <p className="gg-body gg-body-lg mt-3 max-w-2xl">{p.body}</p>
                  </div>
                </article>
              </li>
            </SeoReveal>
          ))}
        </ol>
      </FeatureSection>

      {/* Proof: designs built to the client's brand. */}
      <FeatureSection id="design">
        <FeatureHeading
          eyebrow="Custom design"
          title="IDX website designs built to your brand"
          body="Every site is designed around the agent and the brokerage, then nominated against the best in the industry."
        />
        <SeoReveal delay={0.08}>
          <div className="mt-10 grid gap-8 md:mt-12 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {BRAND_BUILDS.map((b) => (
              <article key={b.name} className="min-w-0">
                <div className="relative">
                  <a
                    href={b.href}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="group block"
                    aria-label={`Visit ${b.name}'s live website (opens in a new tab)`}
                  >
                    <Frame>
                      <Image
                        src={b.image}
                        alt={`${b.name} IDX website home page for ${b.brokerage}, designed by DMR Media`}
                        width={1400}
                        height={868}
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="h-auto w-full rounded-2xl transition-transform duration-500 group-hover:scale-[1.01] motion-reduce:transition-none"
                      />
                    </Frame>
                  </a>
                  <AwardBadgeRow badges={b.badges} className="absolute -left-2 -top-3" imgClassName="h-16 drop-shadow-md sm:h-[4.75rem]" />
                </div>
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="gg-display text-xl font-light">{b.name}</h3>
                    <p className="gg-body !text-xs !text-[var(--gg-text-muted)]">{b.market}</p>
                    <a
                      href={b.href}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      className="gg-eyebrow gg-eyebrow--strong mt-2 inline-flex min-h-[32px] items-center gap-1 border-b border-[var(--color-off-black)]/30 transition-colors hover:border-[var(--color-off-black)]"
                    >
                      View live site <span aria-hidden>↗</span>
                    </a>
                  </div>
                  <Image src={b.logo.src} alt={b.logo.alt} width={b.logo.width} height={b.logo.height} className={`w-auto ${b.logo.className}`} />
                </div>
              </article>
            ))}
          </div>
        </SeoReveal>
      </FeatureSection>

      {/* Lead capture */}
      <FeatureSection tone="base">
        <FeatureHeading
          eyebrow="Lead capture"
          title="Turn home searches into registered buyers"
          body="Buyers register to see the full listing, and the lead goes straight to your CRM."
        />
        <SeoReveal delay={0.08}>
          <div className="relative mx-auto mt-10 aspect-[1376/828] max-w-5xl overflow-hidden rounded-2xl border border-[var(--color-ink-200)] shadow-[0_30px_80px_-40px_rgba(15,15,15,0.45)] sm:aspect-[2000/963] md:mt-12">
            <Image
              src="/images/landing/website-development/elite-realtors-lead-capture.webp"
              alt="IDX listing registration popup on a Bakersfield listing: View Full Property Details with name, email, phone, and SMS consent fields"
              width={2000}
              height={963}
              sizes="(min-width: 1024px) 1024px, 150vw"
              className="absolute -left-[22.7%] -top-[8.3%] h-auto w-[145.3%] max-w-none sm:static sm:w-full"
            />
          </div>
        </SeoReveal>
      </FeatureSection>

      {/* AI search */}
      <FeatureSection>
        <FeatureHeading
          eyebrow="AI search · Dolphin Cay, St. Petersburg"
          title="Get named first in ChatGPT, Perplexity, and Google AI"
          body="Ask Google AI, ChatGPT, or Perplexity for the best realtor in Dolphin Cay. All three name our client first."
        />
        <SeoReveal delay={0.08}>
          <Stage className="mt-10 md:mt-12">
            <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 [-webkit-overflow-scrolling:touch] sm:-mx-8 sm:px-8 md:-mx-12 md:px-12 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-5 lg:overflow-visible lg:px-0 lg:pb-0">
              {AI_ANSWERS.map((a) => (
                <figure key={a.tool} className="w-[84%] min-w-0 shrink-0 snap-start sm:w-[60%] lg:w-auto">
                  <figcaption className="mb-3 flex items-center justify-between gap-3">
                    <span className="gg-eyebrow gg-eyebrow--strong">{a.tool}</span>
                    <span className="shrink-0 rounded-full bg-[var(--color-off-black)] px-3 py-1 font-sans text-[10px] font-semibold uppercase tracking-[0.14em] !text-white">
                      #1 · Debi Eagan
                    </span>
                  </figcaption>
                  <Frame>
                    <Image src={a.image} alt={a.alt} width={a.width} height={a.height} sizes="(min-width: 1024px) 380px, 84vw" className="h-auto w-full rounded-2xl" />
                  </Frame>
                </figure>
              ))}
            </div>
            <p className="gg-body mt-2 !text-xs !text-[var(--gg-text-muted)] lg:hidden" aria-hidden>
              Swipe to see all three →
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border-4 border-white bg-white shadow-[0_12px_30px_-12px_rgba(15,15,15,0.45)] sm:h-28 sm:w-28">
                  <Image
                    src="/images/landing/website-development/debi-eagan-headshot.webp"
                    alt="Debi Eagan of Eagan Luxury in St. Petersburg, FL"
                    fill
                    sizes="112px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="gg-display text-xl font-light">Debi Eagan</p>
                  <p className="gg-body !text-xs !text-[var(--gg-text-muted)]">Eagan Luxury · St. Petersburg, FL</p>
                </div>
              </div>
              <div className="grid gap-3 sm:min-w-[22rem] sm:grid-cols-2">
                <Tile value="3 of 3" label="AI tools name her first" />
                <Tile value="$11m+" label="closed in quarter 1 of 2026" />
              </div>
            </div>
          </Stage>
        </SeoReveal>
      </FeatureSection>

      <GoogleGeneralReviewsScroll eyebrow="Reviews" title="Why agents rate us 5/5 on Trustpilot & Google" />

      <FeatureSection id="included" tone="base">
        <FeatureHeading
          eyebrow="Every DMR IDX website"
          title="What every IDX website we build includes"
          body="Three things come standard on every build, whatever the design tier."
        />
        <PhotoCardGrid items={IDX_INCLUDED} />
      </FeatureSection>

      <ProcessSteps section={IDX_PROCESS} ctaLabel={QUOTE_CTA} />

      <VideoTestimonials eyebrow="Client testimonials" title="What our clients are saying" />

      {/* Website examples: links open each client's live site in a new tab */}
      <section id="websites" className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-white pb-6 md:pb-10">
        <TopWebsites hideIndexLink nofollow />
      </section>

      {/* Upsell: the website is the offer; the lead system (and its guarantee) is the add-on. */}
      <FeatureSection id="add-leads" tone="base">
        <FeatureHeading
          eyebrow="Optional add-on"
          title="Want the leads too? Add our lead system"
          body="Your IDX website is the foundation. When you're ready, we put buyers and sellers on it."
        />
        <SeoReveal delay={0.08}>
          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-[var(--color-off-black)] bg-white p-6 shadow-[0_24px_60px_-36px_rgba(15,15,15,0.45)] md:mt-12 md:p-8">
            <ul className="list-none space-y-4 p-0">
              {LEAD_SYSTEM.map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-off-black)] text-[10px] leading-none !text-white"
                    aria-hidden
                  >
                    ✓
                  </span>
                  <span className="gg-body !text-[15px] !leading-snug !text-[var(--color-off-black)]">{line}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-col gap-4 border-t border-[var(--color-ink-200)] pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="gg-body max-w-md !text-xs !leading-relaxed !text-[var(--gg-text-muted)]">
                Ask about it on your quote. Ad spend is separate. The guarantee covers markets with an average home price
                above $500,000, caps refunded ad spend at $2,000, and requires following up on at least 90% of leads
                within an hour during business hours.{' '}
                <Link href="/stripe/terms-of-service" className="underline underline-offset-2 hover:opacity-70">
                  Full terms
                </Link>
                .
              </p>
              <FormCta label={QUOTE_CTA} className="shrink-0" />
            </div>
          </div>
        </SeoReveal>
      </FeatureSection>

      <LandingFaq items={IDX_FAQ} />

      {/* Internal links for readers still researching. */}
      <section className="border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] py-14 md:py-20" aria-labelledby="idx-reading-heading">
        <div className="container-max px-4 sm:px-6">
          <p className="gg-eyebrow">Keep researching</p>
          <h2 id="idx-reading-heading" className="gg-display mt-3 text-2xl font-light tracking-tight md:text-3xl">
            More on IDX and real estate websites
          </h2>
          <ul className="mt-8 grid list-none gap-x-10 border-t border-[var(--color-ink-200)] p-0 md:grid-cols-2">
            {IDX_FURTHER_READING.map((r) => (
              <li key={r.href} className="border-b border-[var(--color-ink-200)]">
                <Link href={r.href} className="group flex items-center justify-between gap-4 py-4">
                  <span className="gg-body !text-[15px] !text-[var(--color-off-black)]">{r.label}</span>
                  <span className="text-[var(--color-ink-400)] transition-transform group-hover:translate-x-1" aria-hidden>
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FinalCtaSection cta={IDX_FINAL_CTA} />

      <LandingStickyCta label="Get a quote" hint={idxHeroConfig.formConfig?.footnote} />
    </div>
  )
}
