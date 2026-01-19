'use client'

export default function ContactTeam() {
  return (
    <section id="contact-team" className="scroll-mt-8 mt-16 pt-16 border-t border-[var(--color-ink-200)]">
      <div className="bg-white border border-[var(--color-ink-200)] p-8">
        <h2 className="text-3xl font-serif text-[var(--color-off-black)] mb-4">Contact the Team</h2>
        <p className="text-[var(--color-ink-300)] mb-6 font-sans">
          Have questions or need assistance? Reach out to our team.
        </p>
        <a
          href="mailto:team@dmrmedia.org"
          className="inline-block bg-[var(--color-off-black)] text-[var(--color-off-white)] px-6 py-3 font-serif text-sm uppercase tracking-[0.15em] hover:opacity-90 transition-opacity"
        >
          Email Team
        </a>
      </div>
    </section>
  )
}
