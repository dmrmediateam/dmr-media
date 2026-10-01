'use client'

import { useEffect, useState } from 'react'

type Props = {
  label: string
  /** Short reassurance under the button, e.g. the guarantee or time-to-complete. */
  hint?: string
  targetId?: string
}

/**
 * Phone-only bottom bar that returns visitors to the hero form. It stays hidden while the
 * form is on screen so it never competes with the form itself.
 */
export default function LandingStickyCta({ label, hint, targetId = 'hero-form' }: Props) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const target = document.getElementById(targetId)
    if (!target) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const scrolledPast = entry.boundingClientRect.top < 0
        setVisible(!entry.isIntersecting && scrolledPast)
      },
      { threshold: 0 }
    )
    observer.observe(target)
    return () => observer.disconnect()
  }, [targetId])

  const goToForm = () => {
    const target = document.getElementById(targetId)
    if (!target) return
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    const firstInput = target.querySelector<HTMLInputElement>('input:not([tabindex="-1"]):not([aria-hidden="true"])')
    window.setTimeout(() => firstInput?.focus({ preventScroll: true }), 450)
  }

  return (
    <div
      className={`gg-sticky-cta fixed inset-x-0 bottom-0 z-40 border-t border-[var(--color-ink-200)] bg-[var(--surface-base)]/95 px-4 pt-3 backdrop-blur-md transition-transform duration-300 motion-reduce:transition-none lg:hidden ${
        visible ? 'translate-y-0' : 'pointer-events-none translate-y-full'
      }`}
      aria-hidden={!visible}
    >
      <button
        type="button"
        onClick={goToForm}
        tabIndex={visible ? 0 : -1}
        className="flex min-h-[52px] w-full items-center justify-center rounded-full bg-[var(--color-off-black)] px-6 font-serif text-[12px] uppercase tracking-[0.18em] text-white shadow-[0_8px_24px_-8px_rgba(15,15,15,0.45)] active:scale-[0.99]"
      >
        {label}
      </button>
      {hint ? (
        <p className="mt-1.5 text-center font-sans text-[11px] leading-snug text-[var(--color-ink-400)]">{hint}</p>
      ) : null}
    </div>
  )
}
