import Image from 'next/image'
import Link from 'next/link'

export type SeoCaseStudyTemplate =
  | {
      variant: 'compact'
      id: string
      href: string
      image: string
      imageAlt: string
      badge: string
      metric: string
      title: string
      description: string
    }
  | {
      variant: 'featured'
      id: string
      href: string
      image: string
      imageAlt: string
      badge: string
      metric: string
      title: string
      description: string
      quote: string
      quoteAttribution: string
    }

const liWidth: Record<SeoCaseStudyTemplate['variant'], string> = {
  compact:
    'w-[min(100vw-2rem,20rem)] shrink-0 snap-start sm:w-[min(100vw-3rem,22rem)] md:w-[24rem]',
  featured:
    'w-[min(100vw-2rem,28rem)] shrink-0 snap-start sm:w-[min(100vw-3rem,32rem)] md:w-[36rem] lg:w-[40rem]',
}

/** Single case-study tile for the SEO horizontal strip — layout is fixed; content comes from data. */
export default function SeoCaseStudyCard({ study }: { study: SeoCaseStudyTemplate }) {
  const isFeatured = study.variant === 'featured'

  return (
    <li className={liWidth[study.variant]}>
      <Link
        href={study.href}
        className="group flex h-full min-h-[28rem] flex-col overflow-hidden rounded-lg border border-[var(--color-ink-200)] bg-white shadow-[0_1px_0_rgba(15,15,15,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-off-black)]/12 hover:shadow-md md:min-h-[30rem] motion-reduce:transition-colors motion-reduce:hover:translate-y-0"
      >
        <div
          className={
            isFeatured
              ? 'relative aspect-[16/10] shrink-0 border-b border-[var(--color-ink-200)]'
              : 'relative aspect-[4/3] shrink-0 border-b border-[var(--color-ink-200)]'
          }
        >
          <Image
            src={study.image}
            alt={study.imageAlt}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            sizes={isFeatured ? '(max-width: 768px) 90vw, 640px' : '(max-width: 768px) 85vw, 384px'}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/35 via-black/10 to-transparent" />
          <div className="absolute left-5 top-5 z-10 max-w-[90%]">
            <span className="font-serif text-[11px] font-medium uppercase leading-snug tracking-[0.18em] text-[#fafaf9] drop-shadow-[0_2px_12px_rgba(0,0,0,0.75)]">
              {study.badge}
            </span>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-3 p-5 md:p-6">
          <p className="font-serif text-[10px] uppercase tracking-[0.2em] text-[var(--color-trust)]">{study.metric}</p>
          <h3 className="font-serif text-xl font-light leading-snug text-[var(--color-off-black)] md:text-2xl">
            {study.title}
          </h3>
          <p className="flex-1 font-serif text-sm leading-relaxed text-[var(--color-ink-300)]">{study.description}</p>
          {isFeatured ? (
            <div className="border-t border-[var(--color-ink-200)] pt-4">
              <blockquote className="font-serif text-sm italic leading-relaxed text-[var(--color-ink-300)]">
                &ldquo;{study.quote}&rdquo;
              </blockquote>
              <p className="mt-3 font-serif text-[10px] uppercase tracking-[0.15em] text-[var(--color-off-black)]">
                {study.quoteAttribution}
              </p>
            </div>
          ) : null}
          <span className="mt-1 font-serif text-[10px] uppercase tracking-[0.2em] text-[var(--color-off-black)] transition-opacity group-hover:opacity-70">
            View full story
          </span>
        </div>
      </Link>
    </li>
  )
}
