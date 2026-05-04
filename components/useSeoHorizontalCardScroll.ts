'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

/** Prev/next card snapping for SEO horizontal carousels (shared by case studies + website strip). */
export function useSeoHorizontalCardScroll() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const syncScrollEdges = useCallback(() => {
    const el = scrollerRef.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    const left = el.scrollLeft
    setAtStart(left <= 2)
    setAtEnd(max <= 2 || left >= max - 2)
  }, [])

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return
    syncScrollEdges()
    el.addEventListener('scroll', syncScrollEdges, { passive: true })
    const ro = new ResizeObserver(syncScrollEdges)
    ro.observe(el)
    return () => {
      el.removeEventListener('scroll', syncScrollEdges)
      ro.disconnect()
    }
  }, [syncScrollEdges])

  const activeIndex = useCallback(() => {
    const scroller = scrollerRef.current
    const items = scroller?.querySelectorAll<HTMLLIElement>(':scope > ul > li')
    if (!scroller || !items?.length) return 0
    const ul = items[0].parentElement as HTMLElement
    const slop = 16
    let idx = 0
    for (let i = 0; i < items.length; i++) {
      const leftEdge = items[i].offsetLeft + ul.offsetLeft
      if (leftEdge <= scroller.scrollLeft + slop) idx = i
    }
    return idx
  }, [])

  const scrollByCard = useCallback(
    (direction: 1 | -1) => {
      const scroller = scrollerRef.current
      const items = scroller?.querySelectorAll<HTMLLIElement>(':scope > ul > li')
      if (!scroller || !items?.length) return
      const idx = activeIndex()
      const next = Math.min(Math.max(0, idx + direction), items.length - 1)
      items[next].scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' })
    },
    [activeIndex],
  )

  return { scrollerRef, atStart, atEnd, scrollByCard }
}
