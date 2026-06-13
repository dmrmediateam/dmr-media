import Link from 'next/link'
import Image from 'next/image'
import { getAuthorShortCopy } from '@/data/authors'

export type BlogPostAuthor = {
  name: string
  image?: string
  bio?: string
  shortDescription?: string
  title?: string
  role?: string
  skills?: string[]
  slug?: string
  teamProfileSlug?: string
  linkedin?: string
  twitter?: string
}

const PRIMARY_BTN =
  'inline-flex min-h-[44px] items-center justify-center rounded-sm border border-[var(--color-off-black)]/18 bg-[var(--color-off-black)] px-6 font-serif text-[11px] uppercase tracking-[0.18em] text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-off-black)]/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-off-black)]/25 focus-visible:ring-offset-2 motion-reduce:hover:translate-y-0'

const SECONDARY_BTN =
  'inline-flex min-h-[44px] items-center justify-center rounded-sm border border-[var(--color-ink-200)] bg-white px-6 font-serif text-[11px] uppercase tracking-[0.18em] text-[var(--color-off-black)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-off-black)]/25 hover:bg-[var(--color-off-black)]/[0.03] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-off-black)]/20 focus-visible:ring-offset-2 motion-reduce:hover:translate-y-0'

export default function BlogAuthorCard({ author }: { author: BlogPostAuthor }) {
  const profileSlug = author.slug || author.teamProfileSlug
  const shortCopy = getAuthorShortCopy(author)
  const roleLabel = author.role || author.title

  return (
    <aside
      className="overflow-hidden rounded-lg border border-[var(--color-ink-200)] bg-white shadow-[0_1px_0_rgba(15,15,15,0.04)]"
      aria-labelledby="blog-author-heading"
    >
      <div className="border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] px-6 py-4">
        <p className="gg-eyebrow">Written by</p>
        <h2 id="blog-author-heading" className="gg-display mt-2 text-2xl font-light tracking-tight">
          About the author
        </h2>
      </div>

      <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-start sm:gap-8">
        {author.image ? (
          <div className="relative mx-auto h-28 w-28 shrink-0 overflow-hidden rounded-lg border border-[var(--color-ink-200)] bg-[var(--surface-base)] shadow-[0_8px_24px_-8px_rgba(15,15,15,0.12)] sm:mx-0">
            <Image
              src={author.image}
              alt={`${author.name}${roleLabel ? `, ${roleLabel}` : ''}`}
              fill
              className="object-cover object-top"
              sizes="112px"
            />
          </div>
        ) : null}

        <div className="min-w-0 flex-1 text-center sm:text-left">
          <p className="font-serif text-xl font-light text-[var(--color-off-black)]">{author.name}</p>
          {roleLabel ? (
            <p className="mt-1 font-serif text-sm italic text-[var(--color-ink-300)]">{roleLabel}</p>
          ) : null}
          {author.title && author.title !== roleLabel ? (
            <p className="gg-eyebrow mt-2 !text-[0.65rem] !normal-case !tracking-[0.04em]">{author.title}</p>
          ) : null}
          {shortCopy ? <p className="gg-body gg-body-sm mt-4">{shortCopy}</p> : null}

          {author.skills && author.skills.length > 0 ? (
            <ul className="mt-5 flex flex-wrap justify-center gap-2 sm:justify-start" aria-label={`${author.name} expertise`}>
              {author.skills.slice(0, 4).map((skill) => (
                <li
                  key={skill}
                  className="rounded-sm border border-[var(--color-ink-200)] bg-[var(--surface-base)] px-2.5 py-1 font-serif text-[10px] uppercase tracking-[0.1em] text-[var(--color-ink-400)]"
                >
                  {skill}
                </li>
              ))}
            </ul>
          ) : null}

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {profileSlug ? (
              <Link href={`/about/${profileSlug}`} className={SECONDARY_BTN}>
                View profile
              </Link>
            ) : null}
            <Link href="/contact" className={PRIMARY_BTN}>
              Work with us
            </Link>
            {author.linkedin ? (
              <a
                href={author.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={SECONDARY_BTN}
              >
                LinkedIn
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </aside>
  )
}
