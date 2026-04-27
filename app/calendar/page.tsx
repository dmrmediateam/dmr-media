import Link from 'next/link'
import Script from 'next/script'

/** Trustpilot brand green for rating stars */
function TrustpilotStars({ size = 'md' }: { size?: 'sm' | 'md' }) {
  const cls = size === 'sm' ? 'w-3 h-3' : 'w-3.5 h-3.5'
  return (
    <div className="flex gap-0.5 shrink-0 opacity-[0.85]" aria-hidden>
      {[...Array(5)].map((_, i) => (
        <svg key={i} className={`${cls} text-[#00b67a]`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

/** Google rating stars */
function GoogleStars({ size = 'md' }: { size?: 'sm' | 'md' }) {
  const cls = size === 'sm' ? 'w-3 h-3' : 'w-3.5 h-3.5'
  return (
    <div className="flex gap-0.5 shrink-0 opacity-[0.85]" aria-hidden>
      {[...Array(5)].map((_, i) => (
        <svg key={i} className={`${cls} text-[#fbbc04]`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function CalendarPage() {
  return (
    <div className="min-h-screen bg-[var(--color-off-white)]">
      <Script src="https://app.aura-app.ai/aura-embed.js" strategy="afterInteractive" />

      <section className="pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-32 md:pb-24">
        <div className="container-max">
          <div className="flex flex-col gap-14 sm:gap-16 lg:grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] lg:items-start lg:gap-x-16 xl:gap-x-20">
            {/* Mobile-first: intro and trust first; embed follows at the bottom of the column */}
            <div className="min-w-0 w-full max-w-xl mx-auto lg:mx-0 lg:max-w-none">
              <header className="text-center lg:text-left space-y-5 sm:space-y-6">
                <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.32em] text-[var(--color-ink-400)] font-serif">
                  Application · mutual fit
                </p>
                <h1 className="text-[1.625rem] sm:text-3xl md:text-[2.125rem] font-serif font-light text-[var(--color-off-black)] leading-[1.12] tracking-[-0.02em]">
                  Apply to see if we are the right fit
                </h1>
                <p className="text-sm sm:text-base font-serif font-light text-[var(--color-ink-300)] leading-relaxed max-w-md mx-auto lg:mx-0">
                  When you are ready, choose a time. Questions first? We are happy to correspond by email.
                </p>
                <div className="pt-1">
                  <Link
                    href="/contact"
                    className="inline-flex min-h-[44px] items-center justify-center text-[11px] sm:text-xs uppercase tracking-[0.22em] font-serif text-[var(--color-off-black)] border-b border-[var(--color-off-black)] pb-1 hover:text-[var(--color-ink-300)] hover:border-[var(--color-ink-300)] transition-colors"
                  >
                    Request more info
                  </Link>
                </div>
              </header>

              <div className="mt-12 sm:mt-14 lg:mt-16 pt-10 sm:pt-12 border-t border-[var(--color-ink-200)]">
                <ul className="flex flex-col gap-8 sm:gap-10">
                  <li className="flex items-center justify-between gap-6 text-left">
                    <div className="min-w-0 space-y-1">
                      <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--color-ink-400)] font-serif">
                        Trustpilot
                      </p>
                      <p className="text-sm font-serif font-light text-[var(--color-off-black)]">5.0 verified</p>
                    </div>
                    <TrustpilotStars size="sm" />
                  </li>
                  <li className="h-px w-full bg-[var(--color-ink-200)]" aria-hidden />
                  <li className="flex items-center justify-between gap-6 text-left">
                    <div className="min-w-0 space-y-1">
                      <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--color-ink-400)] font-serif">
                        Google
                      </p>
                      <p className="text-sm font-serif font-light text-[var(--color-off-black)]">5.0 client reviews</p>
                    </div>
                    <GoogleStars size="sm" />
                  </li>
                  <li className="h-px w-full bg-[var(--color-ink-200)]" aria-hidden />
                  <li className="flex items-start justify-between gap-6 text-left">
                    <div className="min-w-0 space-y-1 pr-4">
                      <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--color-ink-400)] font-serif">
                        SEMrush
                      </p>
                      <p className="text-sm font-serif font-light text-[var(--color-off-black)] leading-snug">
                        Agency partner
                      </p>
                    </div>
                    <img
                      src="/images/logo.BwihUn5s.svg"
                      alt=""
                      className="h-4 w-auto shrink-0 opacity-50 mt-0.5"
                      width={64}
                      height={20}
                    />
                  </li>
                </ul>

                <blockquote className="mt-12 sm:mt-14 pl-5 sm:pl-6 border-l border-[rgba(15,15,15,0.1)]">
                  <p className="text-sm sm:text-[0.9375rem] font-serif font-light text-[var(--color-off-black)] leading-[1.65] italic">
                    &ldquo;Once we met with Andrew at DMR, it was a done deal… we cancelled all the other
                    meetings.&rdquo;
                  </p>
                  <footer className="mt-4 text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-400)] font-serif">
                    Linda F.
                  </footer>
                </blockquote>
              </div>
            </div>

            {/* Scheduler last on mobile; right column + sticky on large screens */}
            <div
              id="strategy-scheduler"
              tabIndex={-1}
              className="min-w-0 w-full scroll-mt-28 lg:sticky lg:top-24 lg:self-start xl:top-28 outline-none"
            >
              <p className="text-center lg:text-left text-[10px] uppercase tracking-[0.28em] text-[var(--color-ink-400)] font-serif mb-4 lg:mb-5">
                Schedule
              </p>
              <div className="border border-[var(--color-ink-200)] bg-white overflow-hidden">
                <iframe
                  data-aura-embed
                  src="https://app.aura-app.ai/dmr-media/the-strategy-call/embed?theme_preset=light&aura_setter=39b0075a"
                  title="Apply for a strategy call with DMR Media"
                  loading="lazy"
                  className="w-full block min-h-[min(480px,62svh)] sm:min-h-[min(540px,58svh)] lg:min-h-[min(640px,calc(100svh-6.5rem))] xl:min-h-[calc(100svh-7.5rem)] border-0 bg-white"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
