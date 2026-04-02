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
    id: 'marquis-farwell-group',
    title: 'Marquis + Farwell Group',
    client: 'Marquis & Farwell',
    comment: 'Luxury Realtor in Sonoma',
    result: '19x Daily Clicks',
    description:
      'Transformed organic visibility in Sonoma County, growing from 2 clicks per day to 38 — generating qualified buyer leads directly from search.',
    image: '/images/Cities/Sonoma.jpg',
  },
];

export default function CaseStudies() {
  return (
    <section className="pt-16 pb-12 bg-white">
      <div className="container-max">
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1] mb-6">
            DMR Client Results
          </h2>
          <div className="w-72 h-[2px] bg-gradient-to-r from-[var(--color-off-black)] via-[var(--color-off-black)] to-transparent" />
        </div>

        {/* Small Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {SMALL_STUDIES.map((study) => (
            <Link
              key={study.id}
              href={`/case-study/${study.id}`}
              className="group border-b border-[var(--color-ink-200)] pb-8 hover:opacity-60 transition-opacity duration-300 flex flex-col"
            >
              <div className="relative aspect-[3/2] overflow-hidden mb-6">
                <Image
                  src={study.image}
                  alt={`${study.client} case study results`}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/10 to-transparent pointer-events-none" />
                <div className="absolute top-6 left-6 z-10">
                  <span className="text-sm uppercase tracking-[0.2em] text-[#FAFAF9] font-serif font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] [text-shadow:_0_2px_8px_rgba(0,0,0,0.8)]">
                    {study.comment}
                  </span>
                </div>
              </div>

              <div className="flex-1 flex flex-col gap-4">
                <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-ink-300)] font-serif">
                  {study.result}
                </div>
                <h3 className="text-xl font-serif font-light text-[var(--color-off-black)] leading-snug">
                  {study.title}
                </h3>
                <p className="text-sm text-[var(--color-ink-300)] leading-relaxed flex-1 font-serif">
                  {study.description}
                </p>
                <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-off-black)] font-serif">
                  View full story
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Large Featured Card — Eagan Luxury */}
        <div className="mb-20 border-b border-[var(--color-ink-200)] pb-16">
          <Link
            href="/case-study/eagan-luxury-real-estate"
            className="group block hover:opacity-60 transition-opacity duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left: Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/Cities/Stpet.jpg"
                  alt="Eagan Luxury Real Estate — St. Petersburg, Florida"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/10 to-transparent pointer-events-none" />
                {/* Achievement comment */}
                <div className="absolute top-6 left-6 z-10">
                  <span className="text-sm uppercase tracking-[0.2em] text-[#FAFAF9] font-serif font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] [text-shadow:_0_2px_8px_rgba(0,0,0,0.8)]">
                    #1 Realtor in Dolphin Cay, FL
                  </span>
                </div>
              </div>

              {/* Right: Content */}
              <div className="flex flex-col justify-center gap-8">
                <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-ink-300)] font-serif">
                  $11,075,000 Closed Volume — Q1 2026
                </div>

                <div>
                  <h3 className="text-3xl lg:text-4xl font-serif font-light text-[var(--color-off-black)] leading-snug mb-4">
                    Eagan Luxury Real Estate
                  </h3>
                  <p className="text-sm text-[var(--color-ink-300)] font-serif leading-relaxed">
                    Starting from zero organic traffic, we built the brand, dominated search, and layered in Google Ads. Eagan Luxury closed $11,075,000 in Q1 2026 — the quarter immediately after launch. Daily impressions: 0 to 812. Cost per home valuation lead: $36.93.
                  </p>
                </div>

                {/* Testimonial Quote */}
                <div className="border-t border-[var(--color-ink-200)] pt-8">
                  <blockquote className="text-sm text-[var(--color-ink-300)] leading-relaxed font-serif italic">
                    &ldquo;Andrew was great to work with on setting up new Real Estate website and getting everything linked and functional. He was always willing to listen and help guide us through the process to get what we considered to be the best outcome. We highly recommend him.&rdquo;
                  </blockquote>
                  <p className="mt-3 text-xs uppercase tracking-[0.15em] text-[var(--color-off-black)] font-serif">
                    — William Breaden, Eagan Luxury Real Estate
                  </p>
                </div>

                <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-off-black)] font-serif">
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
