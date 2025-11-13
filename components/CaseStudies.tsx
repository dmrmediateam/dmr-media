import Link from 'next/link';
import Image from 'next/image';

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 'jade-legendary-real-estate',
      title: "Jade's Success Story",
      client: 'Jade Goodhue',
      company: 'Legendary Real Estate Services',
      result: '3x Lead Generation',
      description:
        "From frustrated content creator to lead generation powerhouse -- how we transformed Jade's digital strategy and tripled her inbound leads in one quarter.",
      image: '/images/JadeCRM.png',
    },
    {
      id: 'michael-seo-transformation',
      title: "Michael's SEO Transformation",
      client: 'Michael',
      company: 'Real Estate Professional',
      result: '21x Impressions',
      description:
        "From abandoned SEO to 21x impressions growth -- how we turned Michael's website into a lead machine in just 7.5 weeks.",
      image: '/images/MichealTraffic.png',
    },
    {
      id: 'rick-visions-first-realty',
      title: "Rick's SEO Transformation",
      client: 'Rick',
      company: 'Visions First Realty',
      result: '2-3 Leads / Day',
      description:
        "From misaligned keywords to daily qualified leads -- how we fixed Rick's SEO strategy and unlocked consistent deal flow.",
      image: '/images/RickAfter.png',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-max">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-16">
          <div>
            <span className="uppercase tracking-[0.4em] text-[11px] text-[var(--color-ink-400)] mb-4 block">
              Results
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-light text-[var(--color-off-black)] tracking-tight">
              Quiet confidence built on performance.
            </h2>
          </div>
          <p className="text-[var(--color-ink-400)] max-w-xl text-base leading-relaxed">
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

                <div className="text-sm text-[var(--color-ink-400)]">
                  <span className="font-semibold text-[var(--color-off-black)]">{study.client}</span>
                  {study.company && <span className="block">{study.company}</span>}
                </div>

                <p className="text-sm text-[var(--color-ink-400)] leading-relaxed flex-1">
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
