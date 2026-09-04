'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SeoReveal } from '@/app/seo-optimization/SeoReveal';

const TOP_WEBSITES = [
  {
    id: 'carole-tierney',
    name: 'CaroleTierney.com',
    subline: 'DesignRush Design Awards Nominee · September 2026',
    domain: 'caroletierney.com',
    href: 'https://www.caroletierney.com/',
    image: '/images/ClientWebsiteImages/screencapture-caroletierney-2026-09-04.png',
    awardBadge: {
      src: '/images/ClientWebsiteImages/designrush-design-awards-nominee-carole-tierney.png',
      alt: 'DesignRush.com Design Awards Nominee',
    },
  },
  {
    id: 'eagan-luxury',
    name: 'EaganLuxury.com',
    subline: '$252M in Sales · St. Petersburg to the Gulf Beaches',
    domain: 'eaganluxury.com',
    href: 'https://www.eaganluxury.com/',
    image: '/images/screencapture-eaganluxury-2026-09-04.png',
  },
  {
    id: 'legendary-real-estate',
    name: 'LegendaryRealEstateServices.com',
    subline: 'Wisconsin Realtor of the Year 2025 · Lake Geneva',
    domain: 'legendaryrealestateservices.com',
    href: 'https://legendaryrealestateservices.com/',
    image: '/images/ClientWebsites/screencapture-legendaryrealestateservices-2026-03-04-03_34_49.png',
  },
];

/** Homepage showcase: flagship website designs in a browser-framed carousel (Carole, the award nominee, first). */
export default function TopWebsites() {
  const [active, setActive] = useState(0);
  const site = TOP_WEBSITES[active];
  const prev = () => setActive((a) => (a - 1 + TOP_WEBSITES.length) % TOP_WEBSITES.length);
  const next = () => setActive((a) => (a + 1) % TOP_WEBSITES.length);

  return (
    <section className="overflow-hidden py-16 md:py-24">
      <div className="container-max">
        <SeoReveal>
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1] mb-6">
              Website Design, Held to an Award Standard
            </h2>
            <div className="w-72 h-[2px] bg-gradient-to-r from-[var(--color-off-black)] via-[var(--color-off-black)] to-transparent" />
          </div>
        </SeoReveal>

        {/* Active-site header row — name + subline left, domain link + arrows right */}
        <SeoReveal delay={0.05}>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-6">
            <div>
              <h3 className="font-serif text-2xl font-light tracking-tight text-[var(--color-off-black)] md:text-3xl">
                {site.name}
              </h3>
              <p className="mt-1 text-sm text-[var(--color-ink-300)]">{site.subline}</p>
            </div>
            <div className="flex items-center gap-6">
              <a
                href={site.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden font-serif text-xs uppercase tracking-[0.2em] text-[var(--color-off-black)] border-b border-[var(--color-off-black)] pb-1 transition-opacity hover:opacity-60 sm:inline-block"
              >
                {site.domain} →
              </a>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous website"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-ink-200)] text-[var(--color-off-black)] transition-all duration-300 hover:border-[var(--color-off-black)] hover:bg-[var(--color-off-black)] hover:text-[var(--color-off-white)]"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next website"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-ink-200)] text-[var(--color-off-black)] transition-all duration-300 hover:border-[var(--color-off-black)] hover:bg-[var(--color-off-black)] hover:text-[var(--color-off-white)]"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </SeoReveal>

        {/* Browser-framed carousel — active slide left, next slides peeking from the edge */}
        <SeoReveal delay={0.1}>
          <div aria-live="polite">
            <div
              className="flex gap-[var(--slide-gap)] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none [--slide-gap:1.5rem] [--slide-w:86%] md:[--slide-gap:2rem] md:[--slide-w:72%]"
              style={{ transform: `translateX(calc(${active} * -1 * (var(--slide-w) + var(--slide-gap))))` }}
            >
              {TOP_WEBSITES.map((s, i) => (
                <a
                  key={s.id}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-hidden={i !== active}
                  tabIndex={i === active ? 0 : -1}
                  className={`group relative w-[var(--slide-w)] shrink-0 ${
                    i === active ? 'opacity-100' : 'opacity-50'
                  } transition-opacity duration-700`}
                >
                  <div className="overflow-hidden rounded-lg border border-[var(--color-ink-200)] bg-white shadow-[0_12px_40px_-16px_rgba(15,15,15,0.14)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-md motion-reduce:group-hover:translate-y-0">
                    {/* Browser chrome */}
                    <div className="relative flex items-center border-b border-[var(--color-ink-200)] bg-[var(--color-off-white,#fafaf9)] px-4 py-2.5">
                      <span className="flex gap-1.5" aria-hidden>
                        <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-ink-200)]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-ink-200)]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-ink-200)]" />
                      </span>
                      <span className="absolute inset-x-0 text-center font-serif text-[11px] uppercase tracking-[0.2em] text-[var(--color-ink-300)]">
                        {s.domain}
                      </span>
                    </div>
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <Image
                        src={s.image}
                        alt={`${s.name} — real estate website designed by DMR Media`}
                        fill
                        className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                        loading="lazy"
                        sizes="(max-width: 767px) 86vw, 72vw"
                      />
                    </div>
                  </div>

                  {s.awardBadge ? (
                    <div className="pointer-events-none absolute -left-3 -top-3 z-10 sm:-left-5 sm:-top-5">
                      <Image
                        src={s.awardBadge.src}
                        alt={s.awardBadge.alt}
                        width={351}
                        height={424}
                        className="h-20 w-auto drop-shadow-[0_12px_32px_rgba(15,15,15,0.28)] sm:h-28"
                      />
                    </div>
                  ) : null}
                </a>
              ))}
            </div>
          </div>
        </SeoReveal>

        <SeoReveal delay={0.15}>
          <div className="mt-12">
            <Link
              href="/real-estate-agent-website-samples"
              className="font-serif text-sm uppercase tracking-[0.2em] text-[var(--color-off-black)] border-b border-[var(--color-off-black)] pb-1 transition-opacity hover:opacity-60"
            >
              View all website designs →
            </Link>
          </div>
        </SeoReveal>
      </div>
    </section>
  );
}
