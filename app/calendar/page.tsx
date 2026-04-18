import Script from 'next/script'

const TRUSTPILOT_URL = 'https://www.trustpilot.com/review/dmrmedia.org'
const GOOGLE_REVIEWS_URL =
  'https://www.google.com/search?q=DMR+Media+Specialists+Appleton+Wisconsin+reviews'
const SEMRUSH_AGENCY_URL = 'https://agencies.semrush.com/dmr-media/'

/** Trustpilot brand green for rating stars */
function TrustpilotStars({ size = 'md' }: { size?: 'sm' | 'md' }) {
  const cls = size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4'
  return (
    <div className="flex gap-0.5" aria-hidden>
      {[...Array(5)].map((_, i) => (
        <svg key={i} className={`${cls} text-[#00b67a]`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

/** Google Maps / rating star yellow */
function GoogleStars({ size = 'md' }: { size?: 'sm' | 'md' }) {
  const cls = size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4'
  return (
    <div className="flex gap-0.5" aria-hidden>
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
    <div className="min-h-screen bg-white">
      <Script src="https://app.aura-app.ai/aura-embed.js" strategy="afterInteractive" />

      <section className="pt-28 pb-14 md:pt-32 md:pb-20 border-b border-[var(--color-ink-200)]">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-12 lg:gap-14 xl:gap-16 items-start">
            {/* Left: headline + reviews (~40%) */}
            <div className="min-w-0 space-y-14 md:space-y-20 lg:space-y-24 lg:max-w-xl">
              <header className="space-y-5">
                <p className="text-xs uppercase tracking-[0.2em] font-serif text-[var(--color-ink-300)]">
                  Application call · mutual fit
                </p>
                <h1 className="text-3xl sm:text-4xl font-serif font-light text-[var(--color-off-black)] leading-[1.12] tracking-tight">
                  Apply to see if DMR Media is the right fit
                </h1>
              </header>

              <div>
                <div className="space-y-4">
                  <a
                    href={TRUSTPILOT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 rounded-sm border border-[var(--color-ink-200)] bg-[rgba(15,15,15,0.02)] px-4 py-3 hover:border-[#00b67a]/40 transition-colors"
                  >
                    <div>
                      <span className="text-sm font-serif text-[var(--color-off-black)]">Trustpilot</span>
                      <p className="text-xs text-[var(--color-ink-300)] font-serif mt-0.5">5.0 · verified reviews</p>
                    </div>
                    <TrustpilotStars size="sm" />
                  </a>
                  <a
                    href={GOOGLE_REVIEWS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 rounded-sm border border-[var(--color-ink-200)] bg-[rgba(15,15,15,0.02)] px-4 py-3 hover:border-[#fbbc04]/50 transition-colors"
                  >
                    <div>
                      <span className="text-sm font-serif text-[var(--color-off-black)]">Google</span>
                      <p className="text-xs text-[var(--color-ink-300)] font-serif mt-0.5">5.0 · client reviews</p>
                    </div>
                    <GoogleStars size="sm" />
                  </a>
                  <a
                    href={SEMRUSH_AGENCY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start justify-between gap-4 rounded-sm border border-[var(--color-ink-200)] bg-[rgba(15,15,15,0.02)] px-4 py-3 hover:border-[var(--color-trust)]/50 transition-colors"
                  >
                    <div className="min-w-0">
                      <span className="text-sm font-serif text-[var(--color-off-black)]">SEMrush Agencies</span>
                      <p className="text-xs text-[var(--color-ink-300)] font-serif mt-0.5 leading-snug">
                        Top-rated on the SEMrush Agencies partner network
                      </p>
                    </div>
                    <img
                      src="/images/logo.BwihUn5s.svg"
                      alt=""
                      className="h-5 w-auto shrink-0 opacity-80 group-hover:opacity-100 transition-opacity mt-0.5"
                      width={72}
                      height={22}
                    />
                  </a>
                </div>

                <blockquote className="mt-10 md:mt-12 pl-4 border-l-2 border-[#00b67a]/35">
                  <TrustpilotStars />
                  <p className="mt-4 text-sm font-serif font-light text-[var(--color-off-black)] leading-relaxed italic">
                    &ldquo;Once we met with Andrew at DMR, it was a done deal… we cancelled all the other
                    meetings.&rdquo;
                  </p>
                  <footer className="mt-2 text-[10px] uppercase tracking-[0.18em] text-[var(--color-ink-300)] font-serif">
                    Linda F. · Trustpilot
                  </footer>
                </blockquote>
              </div>
            </div>

            {/* Right: booking widget (~60%) */}
            <div className="min-w-0 lg:sticky lg:top-28 w-full min-h-0">
              <iframe
                data-aura-embed
                src="https://app.aura-app.ai/dmr-media/the-strategy-call/embed?theme_preset=light&aura_setter=39b0075a"
                title="Apply for a strategy call with DMR Media"
                loading="lazy"
                className="w-full min-h-[min(720px,85vh)] lg:min-h-[calc(100vh-8rem)] border border-[var(--color-ink-200)] bg-white"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
