'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

interface TocHeading {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  headings: TocHeading[]
}

/**
 * Table of Contents Component for Blog Posts
 * Auto-highlights current section on scroll
 * Improves readability and SEO (shows content structure to crawlers)
 */
export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: '0px 0px -80% 0px', // Trigger when heading is in top 20% of viewport
        threshold: 0.1,
      }
    )

    // Observe all headings
    headings.forEach((heading) => {
      const element = document.getElementById(heading.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [headings])

  if (headings.length === 0) {
    return null
  }

  return (
    <nav
      className="sticky top-24 border border-[var(--color-ink-200)] bg-white p-6 max-h-[calc(100vh-8rem)] overflow-y-auto"
      aria-label="Table of Contents"
    >
      <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)] mb-4">
        On this page
      </p>
      <ul className="space-y-3">
        {headings.map((heading) => {
          const isActive = activeId === heading.id
          const isH3 = heading.level === 3

          return (
            <li
              key={heading.id}
              className={isH3 ? 'ml-4' : ''}
            >
              <Link
                href={`#${heading.id}`}
                className={`
                  block font-serif text-sm leading-relaxed transition-all duration-200
                  ${
                    isActive
                      ? 'text-[var(--color-off-black)] font-normal'
                      : 'text-[var(--color-ink-300)] hover:text-[var(--color-off-black)]'
                  }
                  ${isH3 ? 'text-xs' : ''}
                `}
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.getElementById(heading.id)
                  if (element) {
                    const yOffset = -100 // Offset for fixed header
                    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
                    window.scrollTo({ top: y, behavior: 'smooth' })
                  }
                }}
              >
                {heading.text}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
