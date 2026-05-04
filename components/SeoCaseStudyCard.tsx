import Image from 'next/image'
import Link from 'next/link'
import {
  SEO_CAROUSEL_CARD_LI,
  SEO_CAROUSEL_CARD_LINK,
  SEO_CAROUSEL_CARD_MIN,
  SEO_CAROUSEL_IMAGE_FRAME,
} from '@/components/seoCarouselLayout'

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
      quote?: string
      quoteAttribution?: string
    }

/** Single case-study tile for the SEO horizontal strip: layout is fixed; content comes from data. */
export default function SeoCaseStudyCard({ study }: { study: SeoCaseStudyTemplate }) {
  const isFeatured = study.variant === 'featured'
  const hasQuote = isFeatured && Boolean(study.quote && study.quoteAttribution)
  const minHeights = hasQuote ? 'min-h-[30rem] md:min-h-[32rem]' : SEO_CAROUSEL_CARD_MIN

  return (
    <li className={SEO_CAROUSEL_CARD_LI}>
      <Link href={study.href} className={`${SEO_CAROUSEL_CARD_LINK} ${minHeights}`}>
        <div className={SEO_CAROUSEL_IMAGE_FRAME}>
          <Image
            src={study.image}
            alt={study.imageAlt}
            fill
            unoptimized
            className="z-0 object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 90vw, 384px"
          />
          <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
          <div className="absolute left-4 top-4 z-[2] max-w-[calc(100%-2rem)] md:left-5 md:top-5">
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
          {isFeatured && study.quote && study.quoteAttribution ? (
            <div className="border-t border-[var(--color-ink-200)] pt-4">
              <blockquote className="font-serif text-sm italic leading-relaxed text-[var(--color-ink-300)]">
                &ldquo;{study.quote}&rdquo;
              </blockquote>
              <p className="mt-3 font-serif text-[10px] uppercase tracking-[0.15em] text-[var(--color-off-black)]">
                {study.quoteAttribution}
              </p>
            </div>
          ) : null}
          <span className="mt-auto font-serif text-[10px] uppercase tracking-[0.2em] text-[var(--color-off-black)] transition-opacity group-hover:opacity-70">
            View full story
          </span>
        </div>
      </Link>
    </li>
  )
}
