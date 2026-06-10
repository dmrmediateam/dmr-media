'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import type { TeamMember } from '@/data/team'

interface TeamProfileProps {
  member: TeamMember
  schemaGraph: Record<string, unknown>
}

export default function TeamProfileContent({ member, schemaGraph }: TeamProfileProps) {
  const reduceMotion = useReducedMotion()
  const ease = [0.25, 0.1, 0.25, 1] as const

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
      />

      <main className="min-h-screen bg-[var(--surface-base)]">

        {/* ── Back nav ── */}
        <div className="border-b border-[var(--color-ink-200)] bg-white">
          <div className="container-max px-4 sm:px-6 py-4">
            <Link
              href="/about-us"
              className="inline-flex items-center gap-2 font-serif text-[11px] uppercase tracking-[0.18em] text-[var(--color-ink-400)] hover:text-[var(--color-off-black)] transition-colors"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 12H5m7-7-7 7 7 7" />
              </svg>
              Meet the team
            </Link>
          </div>
        </div>

        {/* ── Profile Hero ── */}
        <section
          className="border-b border-[var(--color-ink-200)] bg-[var(--color-off-black)] py-20 md:py-28"
          aria-labelledby={`profile-name-${member.slug}`}
        >
          <div className="container-max px-4 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-end gap-10 md:gap-16 max-w-5xl">

              {/* Photo */}
              <motion.div
                className="relative w-48 h-48 md:w-56 md:h-56 shrink-0 overflow-hidden border border-white/10"
                initial={reduceMotion ? false : { opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.55, ease }}
              >
                <Image
                  src={member.image}
                  alt={`${member.name} — ${member.role} at DMR Media`}
                  fill
                  priority
                  className="object-cover object-top"
                />
                {/* Initials fallback */}
                <div className="absolute inset-0 flex items-center justify-center bg-[var(--color-off-black)]/40 pointer-events-none">
                  <span className="font-serif text-6xl font-light text-white/20 select-none">
                    {member.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
                  </span>
                </div>
              </motion.div>

              {/* Name + Role */}
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1, ease }}
              >
                <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-white/50 mb-3">
                  DMR Media
                </p>
                <h1
                  id={`profile-name-${member.slug}`}
                  className="font-serif text-4xl font-light leading-tight text-white md:text-5xl lg:text-6xl"
                >
                  {member.name}
                </h1>
                <p className="mt-3 font-serif text-lg text-white/60 italic">
                  {member.role}
                </p>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 font-serif text-[11px] uppercase tracking-[0.18em] text-white/50 hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Bio ── */}
        <section className="border-b border-[var(--color-ink-200)] bg-white py-16 md:py-20">
          <div className="container-max px-4 sm:px-6">
            <div className="max-w-3xl">
              <div className="space-y-5">
                {member.fullBio.map((paragraph, i) => (
                  <p
                    key={i}
                    className="font-serif text-base leading-relaxed text-[var(--color-ink-300)]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Expertise ── */}
        <section className="border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] py-14 md:py-20">
          <div className="container-max px-4 sm:px-6">
            <div className="max-w-3xl">
              <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)] mb-6">
                Areas of Expertise
              </p>
              <div className="flex flex-wrap gap-3">
                {member.expertise.map((skill) => (
                  <span
                    key={skill}
                    className="border border-[var(--color-ink-200)] bg-white px-4 py-2 font-serif text-xs uppercase tracking-[0.14em] text-[var(--color-ink-300)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 md:py-20 bg-white border-b border-[var(--color-ink-200)]">
          <div className="container-max px-4 sm:px-6">
            <div className="max-w-xl">
              <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)] mb-4">
                Work with the team
              </p>
              <h2 className="font-serif text-2xl font-light tracking-tight text-[var(--color-off-black)] md:text-3xl mb-8">
                Ready to talk about your market?
              </h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/calendar"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-sm bg-[var(--color-off-black)] px-8 font-serif text-[11px] uppercase tracking-[0.2em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
                >
                  Book a strategy call
                </Link>
                <Link
                  href="/about-us"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-sm border border-[var(--color-ink-200)] px-8 font-serif text-[11px] uppercase tracking-[0.2em] text-[var(--color-off-black)] transition-all duration-200 hover:border-[var(--color-off-black)]/40"
                >
                  Meet the full team
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
