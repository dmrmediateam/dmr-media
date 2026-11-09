'use client'

import { useEffect } from 'react'

/** Same as the other /landing pages: hide the site nav and footer while mounted. */
export function useHideSiteChrome() {
  useEffect(() => {
    const nav = document.querySelector('nav[data-site-nav]') as HTMLElement | null
    const footer = document.querySelector('footer[data-site-footer]') as HTMLElement | null
    if (nav) nav.style.display = 'none'
    if (footer) footer.style.display = 'none'
    return () => {
      if (nav) nav.style.display = ''
      if (footer) footer.style.display = ''
    }
  }, [])
}
