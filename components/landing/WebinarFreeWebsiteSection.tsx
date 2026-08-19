'use client'

import Image from 'next/image'
import { SeoReveal } from '@/app/seo-optimization/SeoReveal'

function SectionRule() {
  return <div className="mt-6 h-px w-full max-w-[4.5rem] bg-[var(--color-off-black)]/20" aria-hidden />
}

function scrollToForm() {
  document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

/** FREE website offer showcase for /landing/paid-ads-webinar. */
export default function WebinarFreeWebsiteSection() {
  return (
    <section
      id="free-website"
      className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-white py-20 md:py-28"
      aria-labelledby="free-website-heading"
    >
      <div className="container-max px-4 sm:px-6">
        <SeoReveal>
          <p className="gg-eyebrow">The FREE website</p>
          <h2
            id="free-website-heading"
            className="gg-display mt-3 max-w-2xl text-3xl font-light tracking-tight md:text-4xl lg:text-[2.75rem]"
          >
            Attend live, walk away with a website like these.
          </h2>
          <SectionRule />
          <p className="gg-body gg-body-lg mt-8 max-w-2xl">
            Every live attendee unlocks a FREE real estate website.* Not a DIY page builder — the same design standard
            we hold for client sites, from the team behind a DesignRush Design Awards–nominated build.
          </p>
          <p className="gg-body gg-body-sm mt-3 max-w-2xl">*Additional purchase required.</p>
        </SeoReveal>

        {/* The live sample */}
        <SeoReveal delay={0.05}>
          <article className="mt-14 grid items-center gap-8 lg:grid-cols-2 lg:gap-14 xl:gap-20">
            <div className="flex flex-col justify-center lg:order-1">
              <p className="gg-eyebrow">Sample · This is the website you can claim</p>
              <h3 className="gg-display mt-3 text-2xl font-light tracking-tight md:text-[1.75rem]">
                Your free website, already built
              </h3>
              <p className="gg-body gg-body-lg mt-4 max-w-xl">
                This is not a mockup — it’s a real, working sample of the luxury agent website live attendees can
                claim. Editorial design, neighborhood pages, listing search, and lead capture, personalized to your
                brand and market. We’ll walk through it live on the webinar.
              </p>
              <button
                type="button"
                onClick={scrollToForm}
                className="gg-eyebrow gg-eyebrow--strong mt-7 w-fit border-b border-[var(--color-off-black)] pb-1 text-left transition-opacity hover:opacity-60"
              >
                Save my seat →
              </button>
            </div>
            <div className="lg:order-2">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-[var(--color-ink-200)] bg-white shadow-[0_12px_40px_-16px_rgba(15,15,15,0.12)]">
                <Image
                  src="/images/webinar/luxury-template-carole-tierney.png"
                  alt="Sample of the free luxury real estate agent website offered to webinar attendees"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </article>
        </SeoReveal>

        {/* Florio Team — award-nominated proof */}
        <SeoReveal delay={0.05}>
          <article className="mt-16 grid items-center gap-8 border-t border-[var(--color-ink-200)] pt-14 lg:grid-cols-2 lg:gap-14 xl:gap-20 md:mt-20">
            <div className="flex flex-col justify-center lg:order-2">
              <p className="gg-eyebrow">DesignRush Design Awards Nominee</p>
              <h3 className="gg-display mt-3 text-2xl font-light tracking-tight md:text-[1.75rem]">
                The Florio Team | RE/MAX Town &amp; Country
              </h3>
              <p className="gg-body gg-body-lg mt-4 max-w-xl">
                The same team building your free website built this one — for a Central Florida team ranked #35 of
                20,000+ Realtors, doing 200+ sales a year. It was nominated for a DesignRush Design Award. That’s the
                standard your site is held to, free or not.
              </p>
              <button
                type="button"
                onClick={scrollToForm}
                className="gg-eyebrow gg-eyebrow--strong mt-7 w-fit border-b border-[var(--color-off-black)] pb-1 text-left transition-opacity hover:opacity-60"
              >
                Save my seat →
              </button>
            </div>
            <div className="relative lg:order-1">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-[var(--color-ink-200)] bg-white shadow-[0_12px_40px_-16px_rgba(15,15,15,0.12)]">
                <Image
                  src="/images/ClientWebsiteImages/screencapture-florio-team-vercel-app-2026-05-16-15_01_22.png"
                  alt="The Florio Team website by DMR Media — DesignRush Design Awards nominee"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="pointer-events-none absolute -left-4 -top-4 z-10 sm:-left-6 sm:-top-6">
                <Image
                  src="/images/ClientWebsiteImages/designrush-design-awards-nominee-florio-team.png"
                  alt="DesignRush.com Design Awards Nominee"
                  width={351}
                  height={424}
                  className="h-24 w-auto drop-shadow-[0_12px_32px_rgba(15,15,15,0.28)] sm:h-28 lg:h-32"
                />
              </div>
            </div>
          </article>
        </SeoReveal>
      </div>
    </section>
  )
}
