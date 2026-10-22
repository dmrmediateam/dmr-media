import Image from 'next/image'
import type { AwardBadge } from '@/lib/award-badges'

/** One or more award badges side by side, sized by `imgClassName` (set a height). */
export default function AwardBadgeRow({
  badges,
  imgClassName,
  className = '',
}: {
  badges: readonly AwardBadge[]
  imgClassName: string
  className?: string
}) {
  return (
    <div className={`flex items-start gap-1.5 sm:gap-2 ${className}`}>
      {badges.map((badge) => {
        const img = (
          <Image src={badge.src} alt={badge.alt} width={351} height={424} className={`w-auto ${imgClassName}`} />
        )
        return badge.href ? (
          <a
            key={badge.src}
            href={badge.href}
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto block transition-opacity hover:opacity-90"
          >
            {img}
          </a>
        ) : (
          <span key={badge.src} className="block">
            {img}
          </span>
        )
      })}
    </div>
  )
}
