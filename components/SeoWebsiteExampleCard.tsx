import Image from 'next/image'
import type { SeoWebsiteExampleForCarousel } from '@/app/seo-optimization/seo-data'
import {
  SEO_CAROUSEL_CARD_LI,
  SEO_CAROUSEL_CARD_LINK,
  SEO_CAROUSEL_CARD_MIN,
  SEO_CAROUSEL_IMAGE_FRAME,
} from '@/components/seoCarouselLayout'

/** Website portfolio tile: matches `SeoCaseStudyCard` strip styling (SEO page only). */
export default function SeoWebsiteExampleCard({ site }: { site: SeoWebsiteExampleForCarousel }) {
  return (
    <li className={SEO_CAROUSEL_CARD_LI}>
      <a
        href={site.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${SEO_CAROUSEL_CARD_LINK} ${SEO_CAROUSEL_CARD_MIN}`}
      >
        <div className={SEO_CAROUSEL_IMAGE_FRAME}>
          <Image
            src={site.image}
            alt={`${site.name} website`}
            fill
            className="z-0 object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 90vw, 384px"
          />
          <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
          <div className="absolute left-4 top-4 z-[2] max-w-[calc(100%-2rem)] md:left-5 md:top-5">
            <span className="font-serif text-[11px] font-medium uppercase leading-snug tracking-[0.18em] text-[#fafaf9] drop-shadow-[0_2px_12px_rgba(0,0,0,0.75)]">
              {site.subheading}
            </span>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-3 p-5 md:p-6">
          <h3 className="font-serif text-xl font-light leading-snug text-[var(--color-off-black)] md:text-2xl">{site.name}</h3>
          <p className="flex-1 font-serif text-sm leading-relaxed text-[var(--color-ink-300)]">{site.description}</p>
          <span className="mt-auto font-serif text-[10px] uppercase tracking-[0.2em] text-[var(--color-off-black)] transition-opacity group-hover:opacity-70">
            Live site
          </span>
        </div>
      </a>
    </li>
  )
}
