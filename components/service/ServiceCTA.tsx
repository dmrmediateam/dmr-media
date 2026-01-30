import Link from 'next/link'

type ServiceCTAProps = {
  heading: string
  description: string
  primaryAction: { label: string; href: string }
  secondaryAction?: { label: string; href: string }
}

export default function ServiceCTA({
  heading,
  description,
  primaryAction,
  secondaryAction,
}: ServiceCTAProps) {
  return (
    <section className="py-32 bg-[var(--surface-base)] border-b border-[var(--color-ink-200)]">
      <div className="container-max">
        <div className="border-b border-[var(--color-ink-200)] pb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1] mb-6">
              {heading}
            </h2>
            <p className="text-sm text-[var(--color-ink-300)] leading-relaxed font-serif">
              {description}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={primaryAction.href}
              className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-[var(--color-off-black)] text-white uppercase tracking-[0.3em] text-[11px] hover:bg-black transition-colors duration-300 font-serif"
            >
              {primaryAction.label}
            </Link>
            {secondaryAction && (
              <Link
                href={secondaryAction.href}
                className="inline-flex items-center justify-center gap-3 px-6 py-3 border border-[var(--color-ink-200)] text-[var(--color-off-black)] uppercase tracking-[0.3em] text-[11px] hover:border-[var(--color-trust)] hover:text-[var(--color-trust)] transition-colors duration-300 font-serif"
              >
                {secondaryAction.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

