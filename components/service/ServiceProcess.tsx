type ProcessStep = {
  title: string
  description: string
  step?: string
}

type ServiceProcessProps = {
  heading: string
  description?: string
  steps: ProcessStep[]
  id?: string
}

export default function ServiceProcess({ heading, description, steps, id }: ServiceProcessProps) {
  return (
    <section id={id} className="py-24 bg-white">
      <div className="container-max">
        <div className="max-w-3xl mb-16">
          <span className="uppercase tracking-[0.4em] text-[11px] text-[var(--color-ink-400)] mb-4 block">
            Process
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-[var(--color-off-black)] tracking-tight">
            {heading}
          </h2>
          {description && (
            <p className="mt-6 text-sm sm:text-base text-[var(--color-ink-400)] leading-relaxed">
              {description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-[24px] border border-[var(--color-ink-200)] bg-white/80 backdrop-blur-sm p-8">
              <div className="text-xs uppercase tracking-[0.3em] text-[var(--color-ink-400)] mb-3">
                {step.step ?? String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="text-2xl font-serif font-light text-[var(--color-off-black)] mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-[var(--color-ink-400)] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

