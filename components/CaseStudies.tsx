import Link from 'next/link';
import Image from 'next/image';

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 'willow-brook-realty',
      title: "Willow Brook Realty",
      client: 'Willow Brook',
      company: 'Vermont',
      result: '2 Clients / 3 Weeks',
      description:
        'From zero visibility to 46 leads and 2 new clients (1 listing + 1 buyer) in 3 weeks. Built a complete inbound foundation with local SEO, Google Business Profile optimization, and targeted ads across Vermont and New Hampshire.',
      image: '/images/WillowBrookTraffic.png',
    },
    {
      id: 'eagan-luxury-real-estate',
      title: "Eagan Luxury Real Estate",
      client: 'Eagan Luxury',
      company: 'St. Petersburg, FL',
      result: 'Ongoing',
      description:
        'Consolidated multiple fragmented websites into a single, powerful brand presence—launched December 17th with 0 measurable ranking loss and 10% keyword increase.',
      image: '/images/screencapture-eaganluxury-2025-12-17-21_25_49.png',
    },
    {
      id: 'marquis-farwell-group',
      title: 'Marquis + Farwell Group',
      client: 'Marquis & Farwell Group',
      company: 'Healdsburg, CA',
      result: '19x Daily Clicks',
      description:
        'Transformed organic visibility in Sonoma County, growing from 2 clicks per day to 38 clicks per day while generating qualified buyer leads directly from search.',
      image: '/images/MarquisFarwellGoogleSearchConsole.png',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-max">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-16">
          <div>
            <span className="uppercase tracking-[0.4em] text-[11px] text-[var(--color-ink-300)] mb-4 block">
              Results
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-light text-[var(--color-off-black)] tracking-tight">
              Quiet confidence built on performance.
            </h2>
          </div>
          <p className="text-[var(--color-ink-300)] max-w-xl text-base leading-relaxed">
            We partner deeply with our clients, aligning marketing outcomes with revenue goals and brand stature.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((study) => (
            <Link
              key={study.id}
              href={`/case-study/${study.id}`}
              className="group rounded-[24px] border border-[var(--color-ink-200)] bg-white/85 backdrop-blur-sm overflow-hidden hover:border-[var(--color-trust)] transition-colors duration-300 flex flex-col"
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src={study.image}
                  alt={`${study.client} case study results`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-white/20" />
                <div className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-[var(--color-off-black)]">
                  Case Study
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col gap-4">
                <div className="flex items-center gap-2 text-[13px] uppercase tracking-[0.24em] text-[var(--color-trust)]">
                  {study.result}
                  <span className="inline-block h-px w-8 bg-[var(--color-trust)] group-hover:w-12 transition-all duration-300" />
                </div>

                <h3 className="text-2xl font-serif font-light text-[var(--color-off-black)] group-hover:text-[var(--color-trust)] transition-colors duration-300 leading-snug">
                  {study.title}
                </h3>

                <div className="text-sm text-[var(--color-ink-300)]">
                  <span className="font-semibold text-[var(--color-off-black)]">{study.client}</span>
                  {study.company && <span className="block">{study.company}</span>}
                </div>

                <p className="text-sm text-[var(--color-ink-300)] leading-relaxed flex-1">
                  {study.description}
                </p>

                <span className="inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.24em] text-[var(--color-off-black)] group-hover:text-[var(--color-trust)] transition-colors duration-300">
                  View full story
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Large Jade Case Study Card */}
        <div className="mt-16">
          <Link
            href="/case-study/jade-legendary-real-estate"
            className="group block rounded-[32px] border border-[var(--color-ink-200)] bg-white/85 backdrop-blur-sm overflow-hidden hover:border-[var(--color-trust)] transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left: Image */}
              <div className="relative aspect-[4/3] lg:aspect-auto lg:h-auto overflow-hidden">
                <Image
                  src="/images/jade-google-business-profile.png"
                  alt="Jade Goodhue - Legendary Real Estate Services"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-white/30" />
                <div className="absolute top-6 left-6 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-[var(--color-off-black)]">
                  Featured Case Study
                </div>
              </div>

              {/* Right: Content */}
              <div className="p-10 lg:p-12 flex flex-col justify-center gap-8 bg-white/80">
                <div className="flex items-center gap-2 text-[13px] uppercase tracking-[0.24em] text-[var(--color-trust)]">
                  3x Lead Generation
                  <span className="inline-block h-px w-8 bg-[var(--color-trust)] group-hover:w-12 transition-all duration-300" />
                </div>

                <div>
                  <h3 className="text-3xl lg:text-4xl font-serif font-light text-[var(--color-off-black)] group-hover:text-[var(--color-trust)] transition-colors duration-300 leading-snug mb-3">
                    Jade Goodhue
                  </h3>
                  <div className="text-sm text-[var(--color-ink-300)]">
                    <span className="block">Top Lake Geneva Area Realtor</span>
                    <span className="block mt-1">Legendary Real Estate Services</span>
                  </div>
                </div>

                {/* Testimonial Quote */}
                <div className="border-t border-[var(--color-ink-200)] pt-6">
                  <div className="flex items-start gap-4">
                    <svg className="w-8 h-8 text-[var(--color-trust)] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <blockquote className="text-sm text-[var(--color-ink-300)] leading-relaxed italic">
                      "We started working with Andrew about a month ago. He's articulate, responsive, and provides amazing weekly updates. He's taken the time to really explain what the issues were on why we weren't ranking despite all our blogs and videos. It's exciting to watch his weekly progress, and he even provides us feedback for how we can better engage the leads we have. He works with us like a partner, rather than a vendor dealing with just another number. If you have the opportunity to work with him, just DO IT. You'll be grateful you did!"
                    </blockquote>
                  </div>
                </div>

                <span className="inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.24em] text-[var(--color-off-black)] group-hover:text-[var(--color-trust)] transition-colors duration-300">
                  View full story
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-3 rounded-full px-6 py-3 border border-[var(--color-ink-200)] text-[var(--color-off-black)] uppercase tracking-[0.3em] text-[11px] hover:border-[var(--color-trust)] hover:text-[var(--color-trust)] transition-colors duration-300"
          >
            View all success stories
          </Link>
        </div>
      </div>
    </section>
  );
}
