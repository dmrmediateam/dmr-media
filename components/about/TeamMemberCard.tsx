import Link from 'next/link'
import Image from 'next/image'
import { getAuthorShortCopy, type TeamAuthor } from '@/data/authors'

const CARD_LINK =
  'group flex h-full flex-col overflow-hidden rounded-lg border border-[var(--color-ink-200)] bg-white shadow-[0_1px_0_rgba(15,15,15,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-off-black)]/10 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-off-black)]/20 focus-visible:ring-offset-2 motion-reduce:hover:translate-y-0'

export default function TeamMemberCard({ author }: { author: TeamAuthor }) {
  const shortCopy = getAuthorShortCopy(author)
  const roleLabel = author.role || author.title

  return (
    <li id={author.slug} className="list-none">
      <Link
        href={`/about/${author.slug}`}
        className={CARD_LINK}
        aria-label={`View ${author.name}${roleLabel ? `, ${roleLabel}` : ''} profile`}
      >
        <div className="relative h-64 overflow-hidden border-b border-[var(--color-ink-200)] bg-[var(--color-ink-200)]">
          {author.image ? (
            <>
              <Image
                src={author.image}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent"
                aria-hidden
              />
              {roleLabel ? (
                <span className="absolute left-5 top-5 z-10 max-w-[calc(100%-2.5rem)] font-serif text-[11px] font-medium uppercase leading-snug tracking-[0.18em] text-[#fafaf9] drop-shadow-[0_2px_12px_rgba(0,0,0,0.75)]">
                  {roleLabel}
                </span>
              ) : null}
            </>
          ) : (
            <div className="flex h-full flex-col items-center justify-center bg-[var(--color-off-black)] px-6 text-center">
              <span className="font-serif text-5xl font-light text-white/20">
                {author.name
                  .split(' ')
                  .map((part) => part[0])
                  .join('')
                  .slice(0, 2)}
              </span>
              {roleLabel ? (
                <span className="mt-4 font-serif text-[11px] uppercase tracking-[0.18em] text-white/50">{roleLabel}</span>
              ) : null}
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="gg-display text-xl font-light leading-snug">{author.name}</h3>
          {author.title && author.title !== roleLabel ? (
            <p className="gg-eyebrow mt-2 !text-[0.65rem] !normal-case !tracking-[0.04em]">{author.title}</p>
          ) : null}
          {shortCopy ? (
            <p className="gg-body gg-body-sm mb-5 mt-3 flex-1 line-clamp-3">{shortCopy}</p>
          ) : (
            <div className="flex-1" />
          )}
          {author.skills && author.skills.length > 0 ? (
            <ul className="mb-5 flex flex-wrap gap-2" aria-label={`${author.name} skills`}>
              {author.skills.slice(0, 3).map((skill) => (
                <li
                  key={skill}
                  className="rounded-sm border border-[var(--color-ink-200)] bg-[var(--surface-base)] px-2.5 py-1 font-serif text-[10px] uppercase tracking-[0.1em] text-[var(--color-ink-400)]"
                >
                  {skill}
                </li>
              ))}
            </ul>
          ) : null}
          <span className="gg-eyebrow gg-eyebrow--strong mt-auto transition-opacity group-hover:opacity-70">
            View profile →
          </span>
        </div>
      </Link>
    </li>
  )
}
