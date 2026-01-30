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
    <section className="py-32 bg-white border-b border-[var(--color-ink-200)]">
      <div className="container-max">
        <div className="max-w-3xl mb-24 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1] mb-6">
            {heading}
          </h2>
          {description && (
            <p className="text-sm text-[var(--color-ink-300)] leading-relaxed font-serif">
              {description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {studies.map((study) => (
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
                {/* Subtle black gradient overlay from top-left corner */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/10 to-transparent pointer-events-none" />
                {/* Result overlay in left corner */}
                <div className="absolute top-6 left-6 z-10">
                  <span className="text-sm uppercase tracking-[0.2em] text-[#FAFAF9] font-serif font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] [text-shadow:_0_2px_8px_rgba(0,0,0,0.8)]">
                    {study.result}
                  </span>
                </div>
              </div>

              <div className="flex-1 flex flex-col gap-4">
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

        {ctaLabel && ctaHref && (
          <div className="mt-16 text-center">
            <Link
              href={ctaHref}
              className="inline-flex items-center text-xs uppercase tracking-[0.2em] text-[var(--color-off-black)] font-serif hover:opacity-60 transition-opacity duration-300"
            >
              {ctaLabel}
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

