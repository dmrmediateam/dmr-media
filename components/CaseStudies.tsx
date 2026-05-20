import Link from 'next/link';
import Image from 'next/image';

const SMALL_STUDIES = [
  {
    id: 'willow-brook-realty',
    title: 'Willow Brook Realty',
    client: 'Willow Brook',
    comment: 'Vermont Realtor of the Year',
    result: '2 Clients / 3 Weeks',
    description:
      'From zero visibility to 46 leads and 2 new clients in 3 weeks. Built a complete inbound foundation with local SEO, Google Business Profile optimization, and targeted ads across Vermont and New Hampshire.',
    image: '/images/Cities/NewHampshire.jpg',
  },
  {
    id: 'jade-legendary-real-estate',
    title: 'Legendary Real Estate Services',
    client: 'Legendary Real Estate',
    comment: 'Wisconsin Realtor of the Year',
    result: '3x Lead Generation',
    description:
      'Tripled the inbound pipeline in 90 days. 42 content assets rebuilt, 12-hour automation velocity, and a ranking system built to own the Geneva Lakes luxury market.',
    image: '/images/Cities/LakeGeneva.jpg',
  },
  {
    id: 'hitchcock-properties',
    title: 'Hitchcock Properties',
    client: 'Hitchcock Properties',
    comment: 'Panama City Beach, FL',
    result: '88% Lower CPL',
    description:
      'Cut cost-per-lead from $86.36 to $10.46 with niche Google Search and P-Max for vacation rental buyers. 28+ high-intent leads per week and 1,323% estimated ROAS.',
    image: '/images/case-studies/hitchcock-properties/panama-city-beach.jpg',
  },
];

export default function CaseStudies({ hideHeading = false }: { hideHeading?: boolean }) {
  return (
    <section className={`pb-12 bg-white ${hideHeading ? 'pt-8 md:pt-10' : 'pt-16'}`}>
      <div className="container-max">
        {!hideHeading ? (
          <div className="mb-14">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1] mb-6">
              DMR Client Results
            </h2>
            <div className="w-72 h-[2px] bg-gradient-to-r from-[var(--color-off-black)] via-[var(--color-off-black)] to-transparent" />
          </div>
        ) : null}

        {/* Small Cards Grid — same chrome as /seo-optimization pillar cards */}
        <div className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
          {SMALL_STUDIES.map((study) => (
            <Link
              key={study.id}
              href={`/case-study/${study.id}`}
              className="group flex h-full flex-col overflow-hidden rounded-lg border border-[var(--color-ink-200)] bg-white shadow-[0_1px_0_rgba(15,15,15,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-off-black)]/10 hover:shadow-md motion-reduce:hover:translate-y-0"
            >
              <div className="relative aspect-[3/2] w-full overflow-hidden border-b border-[var(--color-ink-200)]">
                <Image
                  src={study.image}
                  alt={`${study.client} case study results`}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/30 via-black/10 to-transparent" />
                <div className="absolute left-6 top-6 z-10">
                  <span className="text-sm font-medium uppercase tracking-[0.2em] text-[#FAFAF9] [text-shadow:_0_2px_8px_rgba(0,0,0,0.8)] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] font-serif">
                    {study.comment}
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-4 p-6">
                <div className="font-serif text-xs uppercase tracking-[0.2em] text-[var(--color-ink-300)]">
                  {study.result}
                </div>
                <h3 className="font-serif text-xl font-light leading-snug text-[var(--color-off-black)]">
                  {study.title}
                </h3>
                <p className="flex-1 font-serif text-sm leading-relaxed text-[var(--color-ink-300)]">
                  {study.description}
                </p>
                <span className="font-serif text-xs uppercase tracking-[0.2em] text-[var(--color-off-black)]">
                  View full story
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Large Featured Card — Eagan Luxury */}
        <div className="mb-20">
          <Link
            href="/case-study/eagan-luxury-real-estate"
            className="group block overflow-hidden rounded-lg border border-[var(--color-ink-200)] bg-white shadow-[0_1px_0_rgba(15,15,15,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-off-black)]/10 hover:shadow-md motion-reduce:hover:translate-y-0"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-0">
              <div className="relative aspect-[4/3] overflow-hidden border-b border-[var(--color-ink-200)] lg:aspect-auto lg:min-h-[320px] lg:border-b-0 lg:border-r">
                <Image
                  src="/images/Cities/Stpet.jpg"
                  alt="Eagan Luxury Real Estate — St. Petersburg, Florida"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/30 via-black/10 to-transparent" />
                <div className="absolute left-6 top-6 z-10">
                  <span className="text-sm font-medium uppercase tracking-[0.2em] text-[#FAFAF9] [text-shadow:_0_2px_8px_rgba(0,0,0,0.8)] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] font-serif">
                    #1 Realtor in Dolphin Cay, FL
                  </span>
                </div>
              </div>

              <div className="flex flex-col justify-center gap-8 p-6 sm:p-8 lg:p-10">
                <div className="font-serif text-xs uppercase tracking-[0.2em] text-[var(--color-ink-300)]">
                  $11,075,000 Closed Volume — Q1 2026
                </div>

                <div>
                  <h3 className="mb-4 font-serif text-3xl font-light leading-snug text-[var(--color-off-black)] lg:text-4xl">
                    Eagan Luxury Real Estate
                  </h3>
                  <p className="font-serif text-sm leading-relaxed text-[var(--color-ink-300)]">
                    Starting from zero organic traffic, we built the brand, dominated search, and layered in Google Ads. Eagan Luxury closed $11,075,000 in Q1 2026 — the quarter immediately after launch. Daily impressions: 0 to 812. Cost per home valuation lead: $36.93.
                  </p>
                </div>

                <div className="border-t border-[var(--color-ink-200)] pt-8">
                  <blockquote className="font-serif text-sm italic leading-relaxed text-[var(--color-ink-300)]">
                    &ldquo;Andrew was great to work with on setting up new Real Estate website and getting everything linked and functional. He was always willing to listen and help guide us through the process to get what we considered to be the best outcome. We highly recommend him.&rdquo;
                  </blockquote>
                  <p className="mt-3 font-serif text-xs uppercase tracking-[0.15em] text-[var(--color-off-black)]">
                    — William Breaden, Eagan Luxury Real Estate
                  </p>
                </div>

                <span className="font-serif text-xs uppercase tracking-[0.2em] text-[var(--color-off-black)]">
                  View full story
                </span>
              </div>
            </div>
          </Link>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center text-xs uppercase tracking-[0.2em] text-[var(--color-off-black)] font-serif hover:opacity-60 transition-opacity duration-300"
          >
            View all success stories
          </Link>
        </div>
      </div>
    </section>
  );
}
