import Link from 'next/link';
import Image from 'next/image';

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 'willow-brook-realty',
      title: "Willow Brook Realty",
      client: 'Willow Brook',
      company: 'Vermont',
      location: 'South Royalton, Vermont',
      result: '2 Clients / 3 Weeks',
      description:
        'From zero visibility to 46 leads and 2 new clients (1 listing + 1 buyer) in 3 weeks. Built a complete inbound foundation with local SEO, Google Business Profile optimization, and targeted ads across Vermont and New Hampshire.',
      image: '/images/Cities/NewHampshire.jpg',
    },
    {
      id: 'eagan-luxury-real-estate',
      title: "Eagan Luxury Real Estate",
      client: 'Eagan Luxury',
      company: 'St. Petersburg, FL',
      location: 'St. Petersburg, Florida',
      result: 'Ongoing',
      description:
        'Consolidated multiple fragmented websites into a single, powerful brand presence—launched December 17th with 0 measurable ranking loss and 10% keyword increase.',
      image: '/images/Cities/Stpet.jpg',
    },
    {
      id: 'marquis-farwell-group',
      title: 'Marquis + Farwell Group',
      client: 'Marquis & Farwell Group',
      company: 'Healdsburg, CA',
      location: 'Sonoma, California',
      result: '19x Daily Clicks',
      description:
        'Transformed organic visibility in Sonoma County, growing from 2 clicks per day to 38 clicks per day while generating qualified buyer leads directly from search.',
      image: '/images/Cities/Sonoma.jpg',
    },
  ];

  return (
    <section className="py-32 bg-white border-b border-[var(--color-ink-200)]">
      <div className="container-max">
        <div className="max-w-3xl mb-24 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1]">
            Private Client Results
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {caseStudies.map((study) => (
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
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Location overlay in left corner */}
                {study.location && (
                  <div className="absolute top-6 left-6">
                    <span className="text-sm uppercase tracking-[0.2em] text-[#FAFAF9] font-serif font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] [text-shadow:_0_2px_8px_rgba(0,0,0,0.8)]">
                      {study.location}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex-1 flex flex-col gap-4">
                <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-ink-300)] font-serif">
                  {study.result}
                </div>

                <h3 className="text-xl font-serif font-light text-[var(--color-off-black)] leading-snug">
                  {study.title}
                </h3>

                <div className="text-sm text-[var(--color-ink-300)] font-serif">
                  <span className="font-light text-[var(--color-off-black)]">{study.client}</span>
                  {study.company && <span className="block mt-1">{study.company}</span>}
                </div>

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

        {/* Large Jade Case Study Card */}
        <div className="mt-24 border-b border-[var(--color-ink-200)] pb-16">
          <Link
            href="/case-study/jade-legendary-real-estate"
            className="group block hover:opacity-60 transition-opacity duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left: Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/Cities/LakeGeneva.jpg"
                  alt="Jade Goodhue - Legendary Real Estate Services"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Location overlay in left corner */}
                <div className="absolute top-6 left-6">
                  <span className="text-sm uppercase tracking-[0.2em] text-[#FAFAF9] font-serif font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] [text-shadow:_0_2px_8px_rgba(0,0,0,0.8)]">
                    Lake Geneva, Wisconsin
                  </span>
                </div>
              </div>

              {/* Right: Content */}
              <div className="flex flex-col justify-center gap-8">
                <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-ink-300)] font-serif">
                  3x Lead Generation
                </div>

                <div>
                  <h3 className="text-3xl lg:text-4xl font-serif font-light text-[var(--color-off-black)] leading-snug mb-4">
                    Jade Goodhue
                  </h3>
                  <div className="text-sm text-[var(--color-ink-300)] font-serif">
                    <span className="block">Top Lake Geneva Area Realtor</span>
                    <span className="block mt-1">Legendary Real Estate Services</span>
                  </div>
                </div>

                {/* Testimonial Quote */}
                <div className="border-t border-[var(--color-ink-200)] pt-8">
                  <blockquote className="text-sm text-[var(--color-ink-300)] leading-relaxed font-serif">
                    "We started working with Andrew about a month ago. He's articulate, responsive, and provides amazing weekly updates. He's taken the time to really explain what the issues were on why we weren't ranking despite all our blogs and videos. It's exciting to watch his weekly progress, and he even provides us feedback for how we can better engage the leads we have. He works with us like a partner, rather than a vendor dealing with just another number. If you have the opportunity to work with him, just DO IT. You'll be grateful you did!"
                  </blockquote>
                </div>

                <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-off-black)] font-serif">
                  View full story
                </span>
              </div>
            </div>
          </Link>
        </div>

        <div className="mt-16 text-center">
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
