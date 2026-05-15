'use client'

import { useEffect, useRef, useState } from 'react'

const THANK_YOU_VIDEO_SRC = `/videos/${encodeURIComponent('Thankyou.mov')}`

function VolumeOffIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M11 5 6 9H2v6h4l5 4V5Z" />
      <line x1="23" y1="9" x2="17" y2="15" />
      <line x1="17" y1="9" x2="23" y2="15" />
    </svg>
  )
}

function VolumeOnIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M11 5 6 9H2v6h4l5 4V5Z" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
  )
}

export default function ThankYouApplicationPage() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMuted, setIsMuted] = useState(true)

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

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    void video.play().catch(() => {})
  }, [])

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return
    const nextMuted = !video.muted
    video.muted = nextMuted
    setIsMuted(nextMuted)
    void video.play().catch(() => {})
  }

  return (
    <main className="min-h-screen bg-[var(--surface-base)]">
      <section className="container-max py-16 md:py-24 text-center">
        <h1 className="font-serif font-light text-3xl sm:text-4xl md:text-5xl text-[var(--color-off-black)] leading-tight max-w-2xl mx-auto">
          Thank you for applying, we will be in touch
        </h1>

        <div className="relative mx-auto mt-10 max-w-xl aspect-video rounded-md overflow-hidden border border-[var(--color-ink-200)] bg-black shadow-sm">
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            src={THANK_YOU_VIDEO_SRC}
            autoPlay
            muted={isMuted}
            playsInline
            preload="auto"
            aria-label="Thank you video"
          />
          <button
            type="button"
            onClick={toggleMute}
            className="absolute bottom-3 right-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/35 bg-black/55 text-[#fafaf9] transition-colors hover:bg-black/72 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/50"
            aria-label={isMuted ? 'Unmute video' : 'Mute video'}
          >
            {isMuted ? (
              <VolumeOffIcon className="h-5 w-5" />
            ) : (
              <VolumeOnIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </section>
    </main>
  )
}
