import Link from 'next/link'
import Image from 'next/image'

type CaseStudy = {
  id: string
  title: string
  client: string
  company?: string
  result: string
  description: string
  image: string
}

type ServiceCaseStudiesProps = {
  heading: string
  description?: string
  studies: CaseStudy[]
  ctaLabel?: string
  ctaHref?: string
}

export default function ServiceCaseStudies({
  heading,
  description,
  studies,
  ctaLabel,
  ctaHref,
}: ServiceCaseStudiesProps) {
  return (
    <section className="py-24 bg-[var(--surface-base)]">
      <div className="container-max">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-16">
          <div>
            <span className="uppercase tracking-[0.4em] text-[11px] text-[var(--color-ink-400)] mb-4 block">
              Case Studies
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-light text-[var(--color-off-black)] tracking-tight">
              {heading}
            </h2>
          </div>
          {description && (
            <p className="text-[var(--color-ink-400)] max-w-xl text-base leading-relaxed">
              {description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {studies.map((study) => (
            <Link
              key={study.id}
              href={`/case-study/${study.id}`}
              className="group relative h-[420px] md:h-[480px] overflow-hidden rounded-[28px] border border-[var(--color-ink-200)] bg-black text-white"
            >
              <Image
                src={study.image}
                alt={study.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
              <div className="relative h-full flex flex-col justify-end p-10 gap-4">
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-white">
                  {study.result}
                </span>
                <h3 className="text-3xl font-serif font-light group-hover:text-[var(--color-trust)] transition-colors duration-300">
                  {study.title}
                </h3>
                <div className="text-white/80 text-sm">
                  <div className="font-semibold text-base">{study.client}</div>
                  {study.company && <div>{study.company}</div>}
                </div>
                <p className="text-white/70 text-sm leading-relaxed">
                  {study.description}
                </p>
                <span className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.24em] text-white/80 group-hover:text-white transition-colors duration-300">
                  View case study →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {ctaLabel && ctaHref && (
          <div className="mt-12 text-center">
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-3 rounded-full px-6 py-3 border border-[var(--color-ink-200)] text-[var(--color-off-black)] uppercase tracking-[0.3em] text-[11px] hover:border-[var(--color-trust)] hover:text-[var(--color-trust)] transition-colors duration-300"
            >
              {ctaLabel}
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

