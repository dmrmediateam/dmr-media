'use client'

import { useEffect } from 'react'

export default function ThankYouGDqPage() {
  useEffect(() => {
    const nav = document.querySelector('nav') as HTMLElement | null
    const footer = document.querySelector('footer') as HTMLElement | null
    if (nav) nav.style.display = 'none'
    if (footer) footer.style.display = 'none'
    return () => {
      if (nav) nav.style.display = ''
      if (footer) footer.style.display = ''
    }
  }, [])

  return (
    <main className="min-h-screen bg-[var(--surface-base)] flex items-center">
      <section className="container-max py-20 md:py-28 text-center">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-ink-400)] font-serif mb-5">
          Application received
        </p>
        <h1 className="font-serif font-light text-4xl sm:text-5xl text-[var(--color-off-black)] leading-tight">
          Thank you.
        </h1>
        <p className="mt-6 max-w-2xl mx-auto font-serif text-[var(--color-ink-300)] text-lg leading-relaxed">
          We got your application and will review your market details before reaching out.
        </p>
      </section>
    </main>
  )
}
