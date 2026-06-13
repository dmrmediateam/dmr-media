'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { SeoReveal } from '@/app/seo-optimization/SeoReveal'
import { getAuthorLongParagraphs, getAuthorShortCopy, type TeamAuthor } from '@/data/authors'
import '@/app/landing/google-general/google-general-landing.css'

interface TeamProfileContentProps {
  author: TeamAuthor
  schemaGraph: Record<string, unknown>
}

function SectionRule({ align = 'left' }: { align?: 'left' | 'center' }) {
  return (
    <div
      className={`mt-5 h-[2px] w-14 bg-gradient-to-r from-[var(--color-off-black)] via-[var(--color-off-black)]/55 to-transparent sm:w-20 ${align === 'center' ? 'mx-auto' : ''}`}
      aria-hidden
    />
  )
}

function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-[44px] items-center justify-center rounded-sm border border-[var(--color-ink-200)] px-5 font-serif text-[11px] uppercase tracking-[0.16em] text-[var(--color-off-black)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-off-black)]/25 hover:bg-[var(--color-off-black)]/[0.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-off-black)]/20 focus-visible:ring-offset-2"
    >
      {label}
    </a>
  )
}

export default function TeamProfileContent({ author, schemaGraph }: TeamProfileContentProps) {
  const reduceMotion = useReducedMotion()
  const roleLabel = author.role || author.title
  const shortCopy = getAuthorShortCopy(author)
  const paragraphs = getAuthorLongParagraphs(author)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }} />

      <main className="google-general-landing min-h-screen bg-white [--seo-section-y:theme(spacing.20)] md:[--seo-section-y:theme(spacing.28)]">
        <div className="border-b border-[var(--color-ink-200)] bg-[var(--surface-base)]">
          <div className="container-max px-4 py-4 sm:px-6">
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2 font-serif text-[11px] uppercase tracking-[0.16em] text-[var(--color-ink-400)]">
                <li>
                  <Link href="/about" className="transition-colors hover:text-[var(--color-off-black)]">
                    About
                  </Link>
                </li>
                <li aria-hidden className="text-[var(--color-ink-200)]">
                  /
                </li>
                <li>
                  <Link href="/about#team" className="transition-colors hover:text-[var(--color-off-black)]">
                    Team
                  </Link>
                </li>
                <li aria-hidden className="text-[var(--color-ink-200)]">
                  /
                </li>
                <li className="text-[var(--color-off-black)]">{author.name}</li>
              </ol>
            </nav>
          </div>
        </div>

        <section
          className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-white py-[var(--seo-section-y)]"
          aria-labelledby={`profile-name-${author.slug}`}
        >
          <div className="container-max px-4 sm:px-6">
            <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-16 xl:grid-cols-[minmax(0,24rem)_1fr]">
              <SeoReveal>
                <div className="overflow-hidden rounded-xl border border-[var(--color-ink-200)] bg-[var(--surface-base)] shadow-[0_12px_40px_-12px_rgba(15,15,15,0.12)]">
                  <div className="relative aspect-[4/5] w-full">
                    {author.image ? (
                      <Image
                        src={author.image}
                        alt={`${author.name}${roleLabel ? ` — ${roleLabel}` : ''} at DMR Media`}
                        fill
                        priority
                        className="object-cover object-top"
                        sizes="(max-width: 1024px) 100vw, 384px"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center bg-[var(--color-off-black)]">
                        <span className="select-none font-serif text-6xl font-light text-white/20">
                          {author.name
                            .split(' ')
                            .map((part) => part[0])
                            .join('')
                            .slice(0, 2)}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </SeoReveal>

              <SeoReveal delay={0.08}>
                <div className="max-w-2xl">
                  <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">DMR Media</p>
                  <h1
                    id={`profile-name-${author.slug}`}
                    className="mt-3 font-serif text-4xl font-light tracking-tight text-[var(--color-off-black)] md:text-5xl"
                  >
                    {author.name}
                  </h1>
                  <SectionRule />
                  {roleLabel ? (
                    <p className="mt-8 font-serif text-lg italic text-[var(--color-ink-300)]">{roleLabel}</p>
                  ) : null}
                  {author.title && author.title !== roleLabel ? (
                    <p className="mt-2 gg-body gg-body-sm">{author.title}</p>
                  ) : null}
                  {shortCopy ? (
                    <p className="mt-6 gg-body gg-body-lg">{shortCopy}</p>
                  ) : null}
                  {(author.linkedin || author.twitter) && (
                    <div className="mt-8 flex flex-wrap gap-3">
                      {author.linkedin ? <SocialLink href={author.linkedin} label="LinkedIn" /> : null}
                      {author.twitter ? <SocialLink href={author.twitter} label="Twitter / X" /> : null}
                    </div>
                  )}
                </div>
              </SeoReveal>
            </div>
          </div>
        </section>

        {paragraphs.length > 0 && (
          <section className="border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] py-[var(--seo-section-y)]">
            <div className="container-max px-4 sm:px-6">
              <SeoReveal>
                <div className="mx-auto max-w-3xl">
                  <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">Background</p>
                  <h2 className="mt-3 font-serif text-2xl font-light tracking-tight text-[var(--color-off-black)] md:text-3xl">
                    About {author.name.split(' ')[0]}
                  </h2>
                  <SectionRule />
                  <div className="mt-8 space-y-5">
                    {paragraphs.map((paragraph, index) => (
                      <p
                        key={paragraph.slice(0, 48)}
                        className={`gg-body ${index === 0 ? 'gg-body-lg' : 'gg-body-sm'}`}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </SeoReveal>
            </div>
          </section>
        )}

        {author.skills && author.skills.length > 0 && (
          <section className="border-b border-[var(--color-ink-200)] bg-white py-[var(--seo-section-y)]">
            <div className="container-max px-4 sm:px-6">
              <SeoReveal>
                <div className="mx-auto max-w-3xl">
                  <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">
                    Expertise
                  </p>
                  <h2 className="mt-3 font-serif text-2xl font-light tracking-tight text-[var(--color-off-black)] md:text-3xl">
                    Skills & fluencies
                  </h2>
                  <SectionRule />
                  <ul className="mt-8 flex flex-wrap gap-3" role="list">
                    {author.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-sm border border-[var(--color-ink-200)] bg-[var(--surface-base)] px-4 py-2.5 font-serif text-xs uppercase tracking-[0.12em] text-[var(--color-ink-300)]"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </SeoReveal>
            </div>
          </section>
        )}

        <section className="border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] py-[var(--seo-section-y)]">
          <div className="container-max mx-auto max-w-2xl px-4 text-center sm:px-6">
            <SeoReveal>
              <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">Next step</p>
              <h2 className="mt-3 font-serif text-3xl font-light tracking-tight text-[var(--color-off-black)] md:text-4xl">
                Work with {author.name.split(' ')[0]} and the team
              </h2>
              <SectionRule align="center" />
              <p className="mt-8 gg-body mx-auto max-w-xl">
                Book a strategy call or explore the rest of the team — same senior specialists on every engagement, no
                handoffs.
              </p>
            </SeoReveal>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <motion.div whileTap={reduceMotion ? undefined : { scale: 0.98 }}>
                <Link
                  href="/calendar"
                  className="inline-flex min-h-[52px] w-full min-w-[12rem] items-center justify-center rounded-sm border border-[var(--color-off-black)]/18 bg-[var(--color-off-black)] px-10 font-serif text-[11px] uppercase tracking-[0.2em] text-white shadow-[0_6px_24px_-4px_rgba(15,15,15,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-off-black)]/90 hover:shadow-[0_10px_28px_-4px_rgba(15,15,15,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-off-black)]/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-base)] motion-reduce:hover:translate-y-0 sm:w-auto"
                >
                  Book a strategy call
                </Link>
              </motion.div>
              <Link
                href="/about#team"
                className="inline-flex min-h-[52px] w-full min-w-[12rem] items-center justify-center rounded-sm border border-[var(--color-off-black)]/18 bg-transparent px-10 font-serif text-[11px] uppercase tracking-[0.2em] text-[var(--color-off-black)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-off-black)]/30 hover:bg-[var(--color-off-black)]/[0.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-off-black)]/25 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-base)] motion-reduce:hover:translate-y-0 sm:w-auto"
              >
                Meet the full team
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
