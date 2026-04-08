import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Book a Strategy Call | DMR Media',
  description: 'Schedule your free strategy call with DMR Media. We\'ll review your current digital presence and map out a plan to grow your real estate business.',
  alternates: {
    canonical: 'https://www.dmrmedia.org/calendar',
  },
}

export default function CalendarPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script src="https://app.aura-app.ai/aura-embed.js" strategy="afterInteractive" />

      <section className="pt-28 pb-8 md:pt-36 md:pb-12 border-b border-[var(--color-ink-200)]">
        <div className="container-max max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] font-serif text-[var(--color-ink-300)] mb-4">
            Book a call
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[var(--color-off-black)] leading-[1.1] tracking-tight">
            The Strategy Call
          </h1>
          <p className="mt-4 text-base text-[var(--color-ink-300)] font-serif leading-relaxed max-w-lg">
            Pick a time below. We&apos;ll review your market, your current digital presence, and map out exactly what it takes to become the #1 agent in your area.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-max max-w-3xl">
          <iframe
            data-aura-embed
            src="https://app.aura-app.ai/dmr-media/the-strategy-call/embed?theme_preset=light&aura_setter=39b0075a"
            title="The Strategy Call - Booking"
            loading="lazy"
            className="w-full min-h-[700px] border-0"
          />
        </div>
      </section>
    </div>
  )
}
