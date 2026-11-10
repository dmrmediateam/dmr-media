import { STAGES, STAGE_ORDER, type StageSlug } from '@/lib/landing/lead-quiz'

const STAGE_LIST = STAGE_ORDER.map((slug) => STAGES[slug])

/** Simple line icons, one per stage. */
function StageIcon({ slug, className = 'h-6 w-6' }: { slug: StageSlug; className?: string }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      {slug === 'foundation' ? (
        <g {...common}>
          <path d="M3 11.5 12 4l9 7.5" />
          <path d="M5.5 10v9.5h13V10" />
          <path d="M10 19.5v-5h4v5" />
        </g>
      ) : slug === 'consistency' ? (
        <g {...common}>
          <path d="M20 12a8 8 0 0 1-13.7 5.6" />
          <path d="M4 12a8 8 0 0 1 13.7-5.6" />
          <path d="M17.5 3v3.7h-3.7" />
          <path d="M6.5 21v-3.7h3.7" />
        </g>
      ) : slug === 'scaling' ? (
        <g {...common}>
          <path d="M3 17 9.5 10.5l4 4L21 7" />
          <path d="M15 7h6v6" />
        </g>
      ) : (
        <g {...common}>
          <path d="M3.5 8.5 7.5 12 12 5l4.5 7 4-3.5-1.8 10H5.3z" />
          <path d="M5.5 21h13" />
        </g>
      )}
    </svg>
  )
}

/**
 * The four-stage roadmap: a track with one dot per stage, and a card under each.
 * `current` is the highlighted stage (Stage 1 on the quiz page; the visitor's
 * own stage on their result, with a "You're here" tag when `youAreHere` is set).
 */
export default function RoadmapGraphic({ current = 'foundation', youAreHere = false }: { current?: StageSlug; youAreHere?: boolean }) {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="hidden grid-cols-4 lg:grid">
        {STAGE_LIST.map((s) => (
          <p key={s.slug} className={`gg-eyebrow text-center ${s.slug === current ? 'gg-eyebrow--strong' : ''}`}>
            {youAreHere && s.slug === current ? 'You\'re here' : `Stage ${s.number}`}
          </p>
        ))}
      </div>
      {/* Dots on one line, joined by the track */}
      <div className="relative mt-3 hidden grid-cols-4 lg:grid" aria-hidden>
        <div className="absolute left-[12.5%] right-[12.5%] top-1/2 h-px -translate-y-1/2 bg-[var(--color-ink-300)]" />
        {STAGE_LIST.map((s) => (
          <div key={s.slug} className="relative flex justify-center">
            <span
              className={`h-[18px] w-[18px] rounded-full border-2 ${s.slug === current ? 'border-[var(--color-off-black)] bg-[var(--color-off-black)]' : 'border-[var(--color-ink-300)] bg-[var(--surface-base)]'}`}
            />
          </div>
        ))}
      </div>
      <ol className="mt-6 grid list-none grid-cols-2 gap-2.5 p-0 sm:gap-3 lg:grid-cols-4 lg:gap-4">
        {STAGE_LIST.map((s) => {
          const on = s.slug === current
          return (
            <li
              key={s.slug}
              aria-current={youAreHere && on ? 'step' : undefined}
              className={`relative rounded-2xl p-4 sm:p-6 ${on ? 'bg-[var(--color-off-black)] !text-white' : 'border border-[var(--color-ink-200)] bg-white'}`}
            >
              {youAreHere && on ? (
                <span className="gg-body absolute right-3 top-3 rounded-full bg-white px-2 py-0.5 !text-[10px] font-semibold !text-[var(--color-off-black)] sm:right-4 sm:top-4 sm:px-2.5 sm:py-1 sm:!text-[11px] lg:hidden">
                  You&apos;re here
                </span>
              ) : null}
              <span className={on ? '!text-white' : '!text-[var(--color-off-black)]'}>
                <StageIcon slug={s.slug} className="h-6 w-6 sm:h-7 sm:w-7" />
              </span>
              <p className={`gg-display mt-3 text-xl font-light leading-tight sm:mt-4 sm:text-2xl ${on ? '!text-white' : ''}`}>{s.name}</p>
              <p className={`gg-body mt-1 !text-xs !leading-snug sm:!text-sm ${on ? '!text-white/75' : '!text-[var(--gg-text-muted)]'}`}>{s.phase}</p>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
