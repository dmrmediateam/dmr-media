'use client'

import Image from 'next/image'
import { useState } from 'react'

/**
 * A YouTube video, or one moment of it. Shows the thumbnail until it's clicked,
 * then loads the player. With `start`/`end` (seconds) it plays only that clip,
 * so a long video can back up a page without pulling visitors into the whole thing.
 */
export default function VideoClip({
  videoId,
  start,
  end,
  title,
  caption,
}: {
  videoId: string
  start?: number
  end?: number
  title: string
  caption?: string
}) {
  const [playing, setPlaying] = useState(false)
  const params = new URLSearchParams({ autoplay: '1', rel: '0', modestbranding: '1' })
  if (start) params.set('start', String(start))
  if (end) params.set('end', String(end))

  return (
    <figure className="mx-auto max-w-3xl">
      <div className="relative aspect-video overflow-hidden rounded-2xl border border-[var(--color-ink-200)] bg-[var(--color-off-black)] shadow-[0_30px_80px_-40px_rgba(15,15,15,0.5)]">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play: ${title}`}
            className="group absolute inset-0 block h-full w-full"
          >
            <Image
              src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
              alt=""
              fill
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover opacity-85 transition-opacity group-hover:opacity-100"
            />
            <span className="absolute inset-0 flex items-center justify-center" aria-hidden>
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-[0_12px_30px_-8px_rgba(0,0,0,0.5)] transition-transform group-hover:scale-105 sm:h-20 sm:w-20">
                <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 !text-[var(--color-off-black)] sm:h-8 sm:w-8" fill="currentColor">
                  <path d="M8 5.5v13l10.5-6.5z" />
                </svg>
              </span>
            </span>
          </button>
        )}
      </div>
      {caption ? <figcaption className="gg-body mt-3 text-center !text-sm !text-[var(--gg-text-muted)]">{caption}</figcaption> : null}
    </figure>
  )
}
