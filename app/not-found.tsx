import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--surface-base)] flex flex-col">
      <section className="relative flex-1 flex items-center overflow-hidden bg-gradient-to-br from-white via-white/95 to-[var(--surface-base)] min-h-screen w-full">
        <div className="container-max py-20 w-full">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-[0.35em] text-[var(--color-ink-300)]">Navigation error</span>
            <h1 className="text-[42px] sm:text-[58px] font-serif font-light text-[var(--color-off-black)] leading-[1.05]">
              Oh No<span className="text-[var(--color-trust)]">!</span> 404
              <span className="text-[var(--color-trust)]">!</span>
            </h1>
            <p className="text-base sm:text-lg text-[var(--color-ink-400)] leading-[1.55] max-w-2xl">
              That route isn’t live—either it moved or never shipped. Head back to the main flow or jump into our latest market intelligence while we keep refining every surface.
            </p>
            <div className="flex flex-wrap gap-4 pt-6">
              <Link
                href="/"
                className="inline-flex items-center gap-3 rounded-full px-6 py-3 bg-[var(--color-off-black)] text-white uppercase tracking-[0.3em] text-[11px] hover:bg-black transition-colors duration-300"
              >
                Return Home
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-3 rounded-full px-6 py-3 border border-[var(--color-ink-200)] text-[var(--color-off-black)] uppercase tracking-[0.3em] text-[11px] hover:border-[var(--color-trust)] hover:text-[var(--color-trust)] transition-colors duration-300"
              >
                Read Insights
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-max py-16">
          <div className="rounded-[28px] border border-[var(--color-ink-200)] bg-white/85 backdrop-blur-sm px-10 py-12 md:px-16 md:py-16">
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl sm:text-3xl font-serif font-light text-[var(--color-off-black)]">
                Looking for something specific?
              </h2>
              <p className="text-sm sm:text-base text-[var(--color-ink-400)] leading-[1.55] max-w-2xl">
                Our team can point you to the right playbook—SEO, paid media, analytics, or full-funnel acquisition systems tailored for luxury real estate operators.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-full px-6 py-3 bg-[var(--color-off-black)] text-white uppercase tracking-[0.3em] text-[11px] hover:bg-black transition-colors duration-300"
                >
                  Start a project
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-3 rounded-full px-6 py-3 border border-[var(--color-ink-200)] text-[var(--color-off-black)] uppercase tracking-[0.3em] text-[11px] hover:border-[var(--color-trust)] hover:text-[var(--color-trust)] transition-colors duration-300"
                >
                  Explore services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

