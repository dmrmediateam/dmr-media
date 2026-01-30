import Image from 'next/image'
import Link from 'next/link'

type HeroAction = {
  label: string
  href: string
  variant?: 'primary' | 'secondary'
}

type ServiceHeroProps = {
  eyebrow: string
  title: string
  description: string
  image: string
  actions?: HeroAction[]
}

export default function ServiceHero({
  eyebrow,
  title,
  description,
  image,
  actions = [],
}: ServiceHeroProps) {
  return (
    <section className="relative min-h-[70vh] lg:min-h-[80vh] flex items-center overflow-hidden bg-[var(--surface-base)] border-b border-[var(--color-ink-200)]">
      <div className="pointer-events-none absolute inset-0 flex justify-end pr-4 sm:pr-10 lg:pr-20 pb-12 sm:pb-16">
        <div className="relative w-[260px] sm:w-[340px] lg:w-[480px] aspect-[4/5] overflow-hidden opacity-70">
          <Image
            src={image}
            alt=""
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

      <div className="relative z-10 w-full pt-20 pb-24">
        <div className="container-max">
          <div className="max-w-3xl space-y-6">
            <span className="uppercase tracking-[0.2em] text-xs text-[var(--color-ink-300)] font-serif">
              {eyebrow}
            </span>
            <h1 className="text-[42px] sm:text-[54px] lg:text-[64px] font-serif font-light text-[var(--color-off-black)] leading-[1.08] tracking-tight">
              {title}
            </h1>
            <p className="text-sm text-[var(--color-ink-300)] leading-relaxed max-w-2xl font-serif">
              {description}
            </p>
            {actions.length > 0 && (
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                {actions.map((action) => {
                  const baseClasses =
                    'inline-flex items-center justify-center gap-3 px-6 py-3 uppercase tracking-[0.3em] text-[11px] transition-colors duration-300 font-serif'
                  const variantClasses =
                    action.variant === 'secondary'
                      ? 'border border-[var(--color-ink-200)] text-[var(--color-off-black)] hover:border-[var(--color-trust)] hover:text-[var(--color-trust)]'
                      : 'bg-[var(--color-off-black)] text-white hover:bg-black'

                  return (
                    <Link key={action.label} href={action.href} className={`${baseClasses} ${variantClasses}`}>
                      {action.label}
                    </Link>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

