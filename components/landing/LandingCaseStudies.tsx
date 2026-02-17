'use client';

import Image from 'next/image';

export default function LandingCaseStudies() {
  const caseStudies = [
    {
      id: 'willow-brook-realty',
      title: "Willow Brook Realty",
      location: 'South Royalton, Vermont',
      result: '2 Clients / 3 Weeks',
      description:
        'From zero visibility to 46 leads and 2 new clients (1 listing + 1 buyer) in 3 weeks. Built a complete inbound foundation with local SEO, Google Business Profile optimization, and targeted ads across Vermont and New Hampshire.',
      image: '/images/Cities/NewHampshire.jpg',
    },
    {
      id: 'eagan-luxury-real-estate',
      title: "Eagan Luxury Real Estate",
      location: 'St. Petersburg, Florida',
      result: 'Ongoing',
      description:
        'Consolidated multiple fragmented websites into a single, powerful brand presence—launched December 17th with 0 measurable ranking loss and 10% keyword increase.',
      image: '/images/Cities/Stpet.jpg',
    },
    {
      id: 'marquis-farwell-group',
      title: 'Marquis + Farwell Group',
      location: 'Sonoma, California',
      result: '19x Daily Clicks',
      description:
        'Transformed organic visibility in Sonoma County, growing from 2 clicks per day to 38 clicks per day while generating qualified buyer leads directly from search.',
      image: '/images/Cities/Sonoma.jpg',
    },
  ];

  return (
    <section className="py-12 md:py-24 bg-white border-b border-[var(--color-ink-200)]">
      <div className="container-max">
        <div className="max-w-3xl mb-8 md:mb-16 mx-auto text-center">
          <h2 className="text-[22px] md:text-3xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1]">
            Trusted in the Top Markets
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="border-b border-[var(--color-ink-200)] pb-6 md:pb-8 flex flex-col"
            >
              <div className="relative aspect-[3/2] overflow-hidden mb-4 md:mb-6">
                <Image
                  src={study.image}
                  alt={`${study.title} case study results`}
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Subtle black gradient overlay from top-left corner */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/10 to-transparent pointer-events-none" />
                {/* Location overlay in left corner */}
                {study.location && (
                  <div className="absolute top-3 left-3 md:top-6 md:left-6 z-10">
                    <span className="text-[22px] uppercase tracking-[0.2em] text-[#FAFAF9] font-serif font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] [text-shadow:_0_2px_8px_rgba(0,0,0,0.8)]">
                      {study.location}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex-1 flex flex-col gap-2 md:gap-4">
                <div className="text-[22px] uppercase tracking-[0.2em] text-[var(--color-off-black)] font-serif">
                  {study.result}
                </div>

                <h3 className="text-[22px] md:text-2xl font-serif font-light text-[var(--color-off-black)] leading-snug">
                  {study.title}
                </h3>

                <p className="text-[22px] text-[var(--color-off-black)] leading-relaxed flex-1 font-serif">
                  {study.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
