type Stat = {
  value: string
  label: string
  description?: string
}

type ServiceStatsProps = {
  stats: Stat[]
  heading?: string
  description?: string
}

export default function ServiceStats({ stats, heading, description }: ServiceStatsProps) {
  return (
    <section className="py-32 bg-white border-b border-[var(--color-ink-200)]">
      <div className="container-max">
        {(heading || description) && (
          <div className="max-w-3xl mb-20">
            {heading && (
              <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1] mb-6">
                {heading}
              </h2>
            )}
            {description && (
              <p className="text-sm text-[var(--color-ink-300)] leading-relaxed font-serif">
                {description}
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border-b border-[var(--color-ink-200)] pb-8 flex flex-col gap-4 hover:opacity-60 transition-opacity duration-300"
            >
              <span className="text-4xl md:text-5xl font-serif font-light text-[var(--color-off-black)]">
                {stat.value}
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-ink-300)] font-serif">
                {stat.label}
              </span>
              {stat.description && (
                <p className="text-sm text-[var(--color-ink-300)] leading-relaxed font-serif">
                  {stat.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

