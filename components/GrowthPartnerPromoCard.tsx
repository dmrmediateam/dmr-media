import type { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const GROWTH_PROMO_TRUSTPILOT_URL = 'https://www.trustpilot.com/review/dmrmedia.org'
export const GROWTH_PROMO_GOOGLE_REVIEWS_URL =
  'https://www.google.com/search?q=DMR+Media+Specialists+Appleton+Wisconsin+reviews'
export const GROWTH_PROMO_SEMRUSH_AGENCY_URL = 'https://agencies.semrush.com/dmr-media/'

function GoogleStarGlyph({ className }: { className?: string }) {
  return (
    <span className={`text-[13px] leading-none tracking-[0.08em] text-[#fbbc04] ${className ?? ''}`} aria-hidden>
      ★★★★★
    </span>
  )
}

function TrustpilotStarGlyph({ className }: { className?: string }) {
  return (
    <span className={`text-[13px] leading-none tracking-[0.08em] text-[#00b67a] ${className ?? ''}`} aria-hidden>
      ★★★★★
    </span>
  )
}

function TrustStripLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="no-underline flex min-w-0 flex-1 flex-col items-center justify-center gap-2.5 border-r border-[var(--color-ink-200)] px-2 py-4 text-center text-inherit transition-opacity last:border-r-0 hover:opacity-80 sm:px-3 sm:py-5"
    >
      {children}
    </a>
  )
}

export type GrowthPartnerPromoCardProps = {
  /** For `aria-labelledby` when used in a dialog */
  headingId?: string
  className?: string
  onPrimaryCtaClick?: () => void
}

export default function GrowthPartnerPromoCard({
  headingId = 'growth-partner-promo-heading',
  className = '',
  onPrimaryCtaClick,
}: GrowthPartnerPromoCardProps) {
  return (
    <div
      className={`w-full max-w-[480px] overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-ink-200)] bg-white shadow-[var(--shadow-sharp)] ${className}`}
    >
      <div className="bg-white px-8 pb-6 pt-9 text-center sm:px-10 sm:pb-7 sm:pt-10">
        <div className="mb-5 inline-block rounded-[var(--radius-xs)] bg-[var(--gray-light)] px-3 py-1 font-[family-name:var(--font-system)] text-[11px] font-normal uppercase tracking-[0.14em] text-[var(--color-ink-400)]">
          Not for everyone
        </div>
        <h2
          id={headingId}
          className="font-serif text-[1.375rem] font-light leading-snug tracking-tight text-[var(--color-off-black)] sm:text-[1.5rem]"
        >
          Looking to grow your Real Estate Business?
        </h2>
        <p className="mt-4 font-[family-name:var(--font-system)] text-sm font-light leading-[1.65] text-[var(--color-ink-300)]">
          Partner with a 5-star team. Book a strategy call to see if DMR Media is the right fit—we work with select
          teams we know we can win for.
        </p>
      </div>

      <div className="flex flex-row border-y border-[var(--color-ink-200)] bg-[var(--color-off-white)]">
        <TrustStripLink href={GROWTH_PROMO_GOOGLE_REVIEWS_URL}>
          <GoogleStarGlyph />
          <div className="min-w-0">
            <p className="!m-0 font-[family-name:var(--font-system)] text-xs font-medium leading-tight text-[var(--color-off-black)]">
              Google
            </p>
            <p className="!mt-1 !text-[11px] !leading-snug text-[var(--color-ink-400)]">5-Star Rated</p>
          </div>
        </TrustStripLink>
        <TrustStripLink href={GROWTH_PROMO_TRUSTPILOT_URL}>
          <TrustpilotStarGlyph />
          <div className="min-w-0">
            <p className="!m-0 font-[family-name:var(--font-system)] text-xs font-medium leading-tight text-[var(--color-off-black)]">
              Trustpilot
            </p>
            <p className="!mt-1 !text-[11px] !leading-snug text-[var(--color-ink-400)]">5-Star Rated</p>
          </div>
        </TrustStripLink>
        <TrustStripLink href={GROWTH_PROMO_SEMRUSH_AGENCY_URL}>
          <Image
            src="/images/logo.BwihUn5s.svg"
            alt=""
            width={72}
            height={22}
            className="h-5 w-auto max-w-[4.5rem] shrink-0 object-contain object-center opacity-90 sm:h-[22px] sm:max-w-none"
          />
          <div className="min-w-0">
            <p className="!m-0 font-[family-name:var(--font-system)] text-xs font-medium leading-tight text-[var(--color-off-black)]">
              SEMrush
            </p>
            <p className="!mt-1 !text-[11px] !leading-snug text-[var(--color-ink-400)]">Top Rated Agency</p>
          </div>
        </TrustStripLink>
      </div>

      <div className="bg-[var(--color-off-white)] px-8 py-6 text-center sm:px-10">
        <p className="mb-5 font-serif text-[0.8125rem] italic leading-relaxed text-[var(--color-ink-400)]">
          &ldquo;We handle the digital. You handle the deals.&rdquo;
        </p>
        <Link
          href="/calendar"
          onClick={onPrimaryCtaClick}
          className="flex min-h-[48px] w-full items-center justify-center bg-[var(--color-off-black)] px-6 py-3.5 font-serif text-[15px] font-light tracking-wide text-white no-underline transition-opacity hover:opacity-90"
        >
          Apply Today
        </Link>
        <p className="!mt-3 !text-xs !leading-relaxed text-[var(--color-ink-400)]">
          Schedule a call or apply directly with a team member — applications reviewed within 48 hours.
        </p>
      </div>
    </div>
  )
}
