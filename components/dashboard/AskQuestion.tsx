'use client'

export default function AskQuestion() {
  return (
    <section id="ask-question" className="scroll-mt-8 mt-12">
      <div className="bg-white border border-[var(--color-ink-200)] p-8">
        <h2 className="text-3xl font-serif text-[var(--color-off-black)] mb-4">Ask a Question</h2>
        <p className="text-[var(--color-ink-300)] mb-6 font-sans">
          Need clarification on your metrics or have a question about your performance?
        </p>
        <a
          href="mailto:team@dmrmedia.org"
          className="inline-block bg-[var(--color-off-black)] text-[var(--color-off-white)] px-6 py-3 font-serif text-sm uppercase tracking-[0.15em] hover:opacity-90 transition-opacity"
        >
          Ask Question
        </a>
      </div>
    </section>
  )
}
