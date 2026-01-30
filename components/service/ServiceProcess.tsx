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
    <section id={id} className="py-32 bg-[var(--surface-base)] border-b border-[var(--color-ink-200)]">
      <div className="container-max">
        <div className="max-w-3xl mb-20">
          <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1] mb-6">
            {heading}
          </h2>
          {description && (
            <p className="text-sm text-[var(--color-ink-300)] leading-relaxed font-serif">
              {description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {steps.map((step, index) => (
            <div key={step.title} className="border-b border-[var(--color-ink-200)] pb-8 flex flex-col gap-4">
              <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-ink-300)] font-serif">
                {step.step ?? String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="text-xl font-serif font-light text-[var(--color-off-black)] leading-snug">
                {step.title}
              </h3>
              <p className="text-sm text-[var(--color-ink-300)] leading-relaxed font-serif">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

