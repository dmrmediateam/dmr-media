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
    const scrollCenter = scroller.scrollLeft + scroller.clientWidth / 2
    let closest = 0
    let minDistance = Infinity
    for (let i = 0; i < items.length; i++) {
      const cardCenter = items[i].offsetLeft + ul.offsetLeft + items[i].offsetWidth / 2
      const distance = Math.abs(cardCenter - scrollCenter)
      if (distance < minDistance) {
        minDistance = distance
        closest = i
      }
    }
    return closest
  }, [])

  const scrollToIndex = useCallback((index: number, behavior: ScrollBehavior = 'smooth') => {
    const scroller = scrollerRef.current
    const items = scroller?.querySelectorAll<HTMLLIElement>(':scope > ul > li')
    if (!scroller || !items?.length) return
    const i = Math.min(Math.max(0, index), items.length - 1)
    const ul = items[0].parentElement as HTMLElement
    const left = items[i].offsetLeft + ul.offsetLeft
    scroller.scrollTo({ left, behavior })
  }, [])

  const scrollByCard = useCallback(
    (direction: 1 | -1, wrap = false) => {
      const scroller = scrollerRef.current
      const items = scroller?.querySelectorAll<HTMLLIElement>(':scope > ul > li')
      if (!scroller || !items?.length) return
      const idx = activeIndex()
      const count = items.length
      const next = wrap
        ? (idx + direction + count) % count
        : Math.min(Math.max(0, idx + direction), count - 1)
      const loopingBack = wrap && direction === 1 && idx === count - 1 && next === 0
      const loopingForward = wrap && direction === -1 && idx === 0 && next === count - 1
      scrollToIndex(next, loopingBack || loopingForward ? 'instant' : 'smooth')
      return next
    },
    [activeIndex, scrollToIndex],
  )

  const scrollToNext = useCallback(
    (wrap = false) => {
      return scrollByCard(1, wrap)
    },
    [scrollByCard],
  )

  const scrollToPrev = useCallback(
    (wrap = false) => {
      return scrollByCard(-1, wrap)
    },
    [scrollByCard],
  )

  return {
    scrollerRef,
    atStart,
    atEnd,
    scrollByCard,
    scrollToNext,
    scrollToPrev,
    scrollToIndex,
    activeIndex,
  }
}
