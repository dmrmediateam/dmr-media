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
    <section className="py-24 bg-white">
      <div className="container-max">
        {(heading || description) && (
          <div className="max-w-3xl mb-12">
            {heading && (
              <h2 className="text-3xl sm:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight mb-4">
                {heading}
              </h2>
            )}
            {description && (
              <p className="text-sm sm:text-base text-[var(--color-ink-400)] leading-relaxed">
                {description}
              </p>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[20px] border border-[var(--color-ink-200)] bg-white/80 backdrop-blur-sm p-10 flex flex-col gap-3 hover:border-[var(--color-trust)] transition-colors duration-300"
            >
              <span className="text-4xl md:text-5xl font-serif font-light text-[var(--color-off-black)]">
                {stat.value}
              </span>
              <span className="text-sm uppercase tracking-[0.3em] text-[var(--color-ink-400)]">
                {stat.label}
              </span>
              {stat.description && (
                <p className="text-sm text-[var(--color-ink-400)] leading-relaxed">
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

