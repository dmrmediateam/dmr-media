import Link from 'next/link';
import Image from 'next/image';

const SMALL_STUDIES = [
  {
    id: 'eagan-luxury-real-estate',
    title: 'Eagan Luxury Real Estate',
    client: 'Eagan Luxury Real Estate',
    comment: '#1 Realtor in Dolphin Cay, FL',
    result: '$11,075,000 Closed Volume — Q1 2026',
    description:
      'Starting from zero organic traffic, we built the brand, dominated search, and layered in Google Ads. Eagan Luxury closed $11,075,000 in Q1 2026 — the quarter immediately after launch. Daily impressions: 0 to 812. Cost per home valuation lead: $36.93.',
    image: '/images/Cities/Stpet.jpg',
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
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
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
                  sizes="(max-width: 767px) 100vw, 33vw"
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
