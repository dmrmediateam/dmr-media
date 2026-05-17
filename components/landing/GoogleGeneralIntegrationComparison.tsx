type ComparisonRow = {
  label: string
  dmr: string
  other: string
}

type GoogleGeneralIntegrationComparisonProps = {
  rows: readonly ComparisonRow[]
}

export default function GoogleGeneralIntegrationComparison({ rows }: GoogleGeneralIntegrationComparisonProps) {
  return (
    <div className="mt-12 lg:mt-14">
      <p className="text-center font-serif text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-400)]">
        Side by side
      </p>
      <p className="mt-2 text-center font-serif text-lg font-light text-[var(--color-off-black)] sm:text-xl">
        One integrated team vs. the usual split setup
      </p>

      <div className="mt-8 space-y-3 sm:mt-10 sm:space-y-4">
        {rows.map((row) => (
          <article
            key={row.label}
            className="overflow-hidden rounded-lg border border-[var(--color-ink-200)] bg-white shadow-[0_1px_0_rgba(15,15,15,0.04)]"
          >
            <div className="border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] px-4 py-3 sm:px-5">
              <h3 className="font-serif text-[11px] uppercase tracking-[0.18em] text-[var(--color-ink-400)]">
                {row.label}
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 sm:divide-x sm:divide-[var(--color-ink-200)]">
              <div className="border-b border-[var(--color-ink-200)] p-4 sm:border-b-0 sm:p-5">
                <p className="font-serif text-[10px] uppercase tracking-[0.16em] text-[var(--color-off-black)]">
                  DMR Media
                </p>
                <p className="mt-2 font-serif text-sm leading-relaxed text-[var(--color-off-black)]">{row.dmr}</p>
              </div>
              <div className="bg-[var(--surface-base)]/60 p-4 sm:p-5">
                <p className="font-serif text-[10px] uppercase tracking-[0.16em] text-[var(--color-ink-400)]">
                  Typical setup
                </p>
                <p className="mt-2 font-serif text-sm leading-relaxed text-[var(--color-ink-300)]">{row.other}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
