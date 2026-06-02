import type { ReactNode } from 'react'

function SectionRule() {
  return <div className="mt-6 h-px w-full max-w-[4.5rem] bg-[var(--color-off-black)]/20" aria-hidden />
}

type BlogSectionHeaderProps = {
  eyebrow: string
  title: string
  intro?: ReactNode
  action?: ReactNode
  titleAs?: 'h1' | 'h2'
  titleId?: string
}

export default function BlogSectionHeader({
  eyebrow,
  title,
  intro,
  action,
  titleAs = 'h2',
  titleId,
}: BlogSectionHeaderProps) {
  const TitleTag = titleAs

  return (
    <div
      className={
        action
          ? 'flex flex-col gap-8 md:flex-row md:items-end md:justify-between'
          : undefined
      }
    >
      <div className="max-w-3xl">
        <p className="gg-eyebrow">{eyebrow}</p>
        <TitleTag
          id={titleId}
          className="gg-display mt-3 text-3xl font-light tracking-tight md:text-4xl lg:text-[2.75rem]"
        >
          {title}
        </TitleTag>
        <SectionRule />
        {intro ? <div className="gg-body gg-body-lg mt-6 max-w-xl">{intro}</div> : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  )
}
