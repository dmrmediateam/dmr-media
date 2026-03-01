import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--surface-base)] flex flex-col">
      <section className="relative flex-1 flex items-center overflow-hidden min-h-screen w-full">
        <div className="container-max py-20 w-full">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-ink-300)] font-serif block">
              Page not found
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[var(--color-off-black)] leading-[1.08] tracking-tight">
              404
            </h1>
            <p className="text-base sm:text-lg font-serif text-[var(--color-ink-300)] leading-relaxed max-w-2xl">
              This page doesn&apos;t exist or has been moved. Return home or explore our services.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/"
                className="inline-flex items-center justify-center px-8 py-3 bg-[var(--color-off-black)] text-white uppercase tracking-[0.12em] text-xs font-serif hover:opacity-90 transition-opacity duration-300 border border-[var(--color-off-black)]"
              >
                Return Home
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-3 border border-[var(--color-ink-200)] text-[var(--color-off-black)] uppercase tracking-[0.12em] text-xs font-serif hover:border-[var(--color-trust)] hover:text-[var(--color-trust)] transition-colors duration-300"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-t border-[var(--color-ink-200)]">
        <div className="container-max py-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl font-serif font-light text-[var(--color-off-black)] leading-[1.1] tracking-tight mb-3">
                Need help finding something?
              </h2>
              <p className="text-sm sm:text-base font-serif text-[var(--color-ink-300)] leading-relaxed">
                Our team can guide you—SEO, paid media, analytics, or full-funnel acquisition for luxury real estate.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-[var(--color-off-black)] text-white uppercase tracking-[0.12em] text-xs font-serif hover:opacity-90 transition-opacity duration-300 border border-[var(--color-off-black)] self-start md:self-auto"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
