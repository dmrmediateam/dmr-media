import Image from 'next/image'
import AwardBadgeRow from '@/components/AwardBadgeRow'
import { ALEXA_DEVANEY_BADGES, DESIGNRUSH_NOMINEE_BADGE, type AwardBadge } from '@/lib/award-badges'

type Site = {
  name: string
  domain: string
  href: string
  image: string
  note: string
  badges: readonly AwardBadge[]
  /** Position in the row: absolute placement, size and stacking. */
  place: string
}

const SITES: readonly Site[] = [
  {
    name: 'Carole Tierney',
    domain: 'caroletierney.com',
    href: 'https://www.caroletierney.com/',
    image: '/images/seo/carole-tierney-hero.jpg',
    note: 'DesignRush nominee',
    badges: [DESIGNRUSH_NOMINEE_BADGE],
    place: 'left-0 top-[20%] w-[38%] z-10',
  },
  {
    name: 'Melissa Tindall',
    domain: 'melissainsunvalley.com',
    href: 'https://www.melissainsunvalley.com/',
    image: '/images/seo/melissa-tindall-hero.webp',
    note: 'Our newest build',
    badges: [],
    place: 'right-0 top-[20%] w-[38%] z-10',
  },
  {
    name: 'Alexa Devaney',
    domain: 'alexadevaney.com',
    href: 'https://www.alexadevaney.com/',
    image: '/images/seo/alexa-devaney-hero.jpg',
    note: 'DesignRush & Awwwards nominee',
    badges: ALEXA_DEVANEY_BADGES,
    place: 'left-1/2 top-[7%] w-[42%] -translate-x-1/2 z-20',
  },
]

function BrowserFrame({ site }: { site: Site }) {
  return (
    <a
      href={site.href}
      target="_blank"
      rel="nofollow noopener noreferrer"
      aria-label={`${site.name}'s website, ${site.note} (opens in a new tab)`}
      className={`group absolute block ${site.place}`}
    >
      <div className="overflow-hidden rounded-lg border border-[var(--color-ink-200)] bg-white shadow-[0_24px_50px_-24px_rgba(15,15,15,0.5)] transition-transform duration-300 group-hover:-translate-y-1 motion-reduce:transition-none">
        <div className="flex items-center gap-1 border-b border-[var(--color-ink-200)] bg-[#f4f3f1] px-2 py-1 sm:gap-1.5 sm:px-2.5 sm:py-1.5" aria-hidden>
          <span className="h-1.5 w-1.5 rounded-full bg-[#d9d6d1] sm:h-2 sm:w-2" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#d9d6d1] sm:h-2 sm:w-2" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#d9d6d1] sm:h-2 sm:w-2" />
          <span className="ml-1.5 truncate font-sans text-[8px] !text-[var(--gg-text-muted)] sm:text-[10px]">{site.domain}</span>
        </div>
        <Image
          src={site.image}
          alt={`${site.name} website home page, designed by DMR Media`}
          width={1400}
          height={868}
          sizes="(min-width: 1024px) 360px, 60vw"
          className="block h-auto w-full"
        />
      </div>
      {site.badges.length ? (
        <AwardBadgeRow
          badges={site.badges}
          className="absolute -left-2 -top-4 sm:-left-3 sm:-top-5"
          imgClassName="h-8 drop-shadow-md sm:h-11"
        />
      ) : null}
    </a>
  )
}

/** Three recent builds side by side: Carole and Alexa (award nominees, Alexa raised in front) and Melissa (newest). */
export default function AwardSitesGraphic() {
  return (
    <figure className="mt-9">
      <div className="relative mx-auto aspect-[16/7.5] w-full max-w-[600px]">
        {SITES.map((site) => (
          <BrowserFrame key={site.name} site={site} />
        ))}
      </div>
      <figcaption className="mt-4 grid grid-cols-3 gap-2 text-center sm:gap-3">
        {[SITES[0], SITES[2], SITES[1]].map((site) => (
          <span key={site.name} className="block">
            <span className="gg-body block !text-xs font-semibold !leading-tight !text-[var(--color-off-black)] sm:!text-sm">{site.name}</span>
            <span className="gg-body mt-0.5 block !text-[11px] !leading-snug !text-[var(--gg-text-muted)] sm:!text-xs">{site.note}</span>
          </span>
        ))}
      </figcaption>
    </figure>
  )
}
