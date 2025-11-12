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
    <section className="py-24 bg-[var(--surface-base)]">
      <div className="container-max">
        <div className="rounded-[28px] border border-[var(--color-ink-200)] bg-white/80 backdrop-blur-sm px-10 py-16 md:px-16 md:py-20 flex flex-col md:flex-row md:items-center md:justify-between gap-12">
          <div className="max-w-2xl">
            <span className="uppercase tracking-[0.35em] text-[10px] text-[var(--color-ink-400)] mb-4 block">
              Start Now
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-light text-[var(--color-off-black)] leading-[1.08] tracking-tight mb-4">
              {heading}
            </h2>
            <p className="text-sm sm:text-base text-[var(--color-ink-400)] leading-relaxed">
              {description}
            </p>
          </div>
          <div className="flex flex-col md:items-end gap-4 min-w-[220px]">
            <Link
              href={primaryAction.href}
              className="inline-flex items-center gap-3 rounded-full px-6 py-3 bg-[var(--color-off-black)] text-white uppercase tracking-[0.3em] text-[11px] hover:bg-black transition-colors duration-300"
            >
              {primaryAction.label}
            </Link>
            {secondaryAction && (
              <Link
                href={secondaryAction.href}
                className="inline-flex items-center gap-3 rounded-full px-6 py-3 border border-[var(--color-ink-200)] text-[var(--color-off-black)] uppercase tracking-[0.3em] text-[11px] hover:border-[var(--color-trust)] hover:text-[var(--color-trust)] transition-colors duration-300"
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

