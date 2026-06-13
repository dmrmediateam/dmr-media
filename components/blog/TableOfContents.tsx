'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'

export interface TocHeading {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  headings: TocHeading[]
  /** Sidebar (desktop) or collapsible block above article (mobile). */
  layout?: 'sidebar' | 'mobile'
}

function useActiveHeading(headings: TocHeading[]) {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    if (headings.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: '-96px 0px -60% 0px', threshold: 0 },
    )

    headings.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [headings])

  return activeId
}

function TocList({
  headings,
  activeId,
  onNavigate,
  compact = false,
}: {
  headings: TocHeading[]
  activeId: string
  onNavigate: (id: string) => void
  compact?: boolean
}) {
  return (
    <ul className={compact ? 'space-y-0' : 'space-y-0'} role="list">
      {headings.map((heading) => {
        const isActive = activeId === heading.id
        const isH3 = heading.level === 3

        return (
          <li
            key={heading.id}
            className={`border-l-2 transition-colors duration-200 ${
              isActive ? 'border-[var(--color-off-black)]' : 'border-[var(--color-ink-200)]'
            } ${isH3 ? 'ml-3' : ''}`}
          >
            <Link
              href={`#${heading.id}`}
              aria-current={isActive ? 'location' : undefined}
              className={`block py-2.5 font-serif leading-snug transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-off-black)]/20 focus-visible:ring-offset-2 ${
                isH3 ? 'pl-3.5 text-xs' : 'pl-4 text-sm'
              } ${
                isActive
                  ? 'font-medium text-[var(--color-off-black)]'
                  : 'text-[var(--color-ink-400)] hover:text-[var(--color-off-black)]'
              }`}
              onClick={(e) => {
                e.preventDefault()
                onNavigate(heading.id)
              }}
            >
              {heading.text}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default function TableOfContents({ headings, layout = 'sidebar' }: TableOfContentsProps) {
  const activeId = useActiveHeading(headings)

  const scrollToHeading = useCallback((id: string) => {
    const element = document.getElementById(id)
    if (!element) return
    const offset = 96
    const top = element.getBoundingClientRect().top + window.scrollY - offset
    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
    window.scrollTo({ top, behavior })
    history.replaceState(null, '', `#${id}`)
  }, [])

  if (headings.length === 0) return null

  if (layout === 'mobile') {
    return (
      <nav
        className="xl:hidden rounded-lg border border-[var(--color-ink-200)] bg-white shadow-[0_1px_0_rgba(15,15,15,0.04)]"
        aria-label="Article sections"
      >
        <details className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-serif text-[11px] uppercase tracking-[0.18em] text-[var(--color-off-black)] marker:content-none [&::-webkit-details-marker]:hidden">
            <span>Sections</span>
            <span
              className="text-[var(--color-ink-400)] transition-transform duration-200 group-open:rotate-180"
              aria-hidden
            >
              ↓
            </span>
          </summary>
          <div className="border-t border-[var(--color-ink-200)] px-3 pb-4 pt-2">
            <TocList headings={headings} activeId={activeId} onNavigate={scrollToHeading} compact />
          </div>
        </details>
      </nav>
    )
  }

  return (
    <nav
      className="sticky top-28 max-h-[calc(100vh-7.5rem)] overflow-y-auto rounded-lg border border-[var(--color-ink-200)] bg-white p-6 shadow-[0_1px_0_rgba(15,15,15,0.04)] [scrollbar-width:thin]"
      aria-label="Article sections"
    >
      <p className="mb-5 font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">Sections</p>
      <TocList headings={headings} activeId={activeId} onNavigate={scrollToHeading} />
      <p className="mt-6 border-t border-[var(--color-ink-200)] pt-4 font-serif text-[10px] leading-relaxed text-[var(--color-ink-400)]">
        {headings.length} section{headings.length === 1 ? '' : 's'} in this article
      </p>
    </nav>
  )
}
