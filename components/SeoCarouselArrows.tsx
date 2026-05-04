'use client'

function ChevronLeft({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
    </svg>
  )
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
    </svg>
  )
}

type SeoCarouselArrowsProps = {
  atStart: boolean
  atEnd: boolean
  onPrev: () => void
  onNext: () => void
  prevAriaLabel: string
  nextAriaLabel: string
}

export default function SeoCarouselArrows({
  atStart,
  atEnd,
  onPrev,
  onNext,
  prevAriaLabel,
  nextAriaLabel,
}: SeoCarouselArrowsProps) {
  const btn =
    'pointer-events-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--color-ink-200)] bg-white text-[var(--color-off-black)] shadow-md transition-all duration-200 hover:border-[var(--color-off-black)]/20 hover:shadow-lg disabled:pointer-events-none disabled:opacity-30 md:h-12 md:w-12'

  return (
    <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-[1] flex items-center justify-between px-0 md:px-1">
      <button type="button" onClick={onPrev} disabled={atStart} aria-label={prevAriaLabel} className={`${btn} ml-0.5 md:ml-1`}>
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button type="button" onClick={onNext} disabled={atEnd} aria-label={nextAriaLabel} className={`${btn} mr-0.5 md:mr-1`}>
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  )
}
