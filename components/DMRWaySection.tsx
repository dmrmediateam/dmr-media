'use client';

import { useEffect, useRef, useState } from 'react';

const MAIN_VIDEO_SRC = `/videos/${encodeURIComponent('DMR - MAIN VIDEO 4K.mp4')}`;

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function PauseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
    </svg>
  );
}

function VolumeOffIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M11 5 6 9H2v6h4l5 4V5Z" />
      <line x1="23" y1="9" x2="17" y2="15" />
      <line x1="17" y1="9" x2="23" y2="15" />
    </svg>
  );
}

function VolumeOnIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M11 5 6 9H2v6h4l5 4V5Z" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
  );
}

export default function DMRWaySection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isPaused, setIsPaused] = useState(true);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onPlay = () => setIsPaused(false);
    const onPause = () => setIsPaused(true);
    v.addEventListener('play', onPlay);
    v.addEventListener('pause', onPause);
    return () => {
      v.removeEventListener('play', onPlay);
      v.removeEventListener('pause', onPause);
    };
  }, []);

  const handleStart = () => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 0;
    setIsMuted(false);
    v.muted = false;
    setHasStarted(true);
    void v.play();
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    const next = !v.muted;
    v.muted = next;
    setIsMuted(next);
  };

  const togglePause = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) void v.play();
    else v.pause();
  };

  return (
    <section className="border-t border-[var(--color-ink-200)] bg-white pt-12 pb-16 md:pt-16 md:pb-20" aria-labelledby="partner-tagline-heading">
      <div className="container-max">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
          <div className="relative order-2 aspect-video w-full overflow-hidden bg-black lg:order-1">
            <video
              ref={videoRef}
              className="absolute inset-0 h-full w-full object-cover"
              src={MAIN_VIDEO_SRC}
              muted={isMuted}
              playsInline
              preload="metadata"
              aria-label="DMR Media brand video"
            />

            {!hasStarted && (
              <div className="absolute inset-0 z-[1] flex items-center justify-center bg-black/35">
                <button
                  type="button"
                  onClick={handleStart}
                  className="flex h-20 w-20 items-center justify-center rounded-full border border-white/50 bg-black/50 text-white backdrop-blur-sm transition-transform hover:scale-[1.04] hover:bg-black/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/40 md:h-24 md:w-24"
                  aria-label="Play video from the beginning with sound"
                >
                  <PlayIcon className="ml-1 h-9 w-9 md:h-11 md:w-11" />
                </button>
              </div>
            )}

            {hasStarted && (
              <div className="absolute bottom-3 right-3 z-[2] flex gap-2 md:bottom-4 md:right-4">
                <button
                  type="button"
                  onClick={toggleMute}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/35 bg-black/55 text-[#fafaf9] transition-colors hover:bg-black/72 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                >
                  {isMuted ? <VolumeOffIcon className="h-5 w-5" /> : <VolumeOnIcon className="h-5 w-5" />}
                </button>
                <button
                  type="button"
                  onClick={togglePause}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/35 bg-black/55 text-[#fafaf9] transition-colors hover:bg-black/72 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  aria-label={isPaused ? 'Play video' : 'Pause video'}
                >
                  {isPaused ? <PlayIcon className="ml-0.5 h-5 w-5" /> : <PauseIcon className="h-5 w-5" />}
                </button>
              </div>
            )}
          </div>
          <div className="order-1 flex flex-col justify-center lg:order-2 lg:pl-4">
            <h2
              id="partner-tagline-heading"
              className="font-serif font-light tracking-tight text-[var(--color-off-black)] text-4xl leading-[1.08] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl [&_span]:font-serif [&_span]:font-light [&_span]:italic [&_span]:text-[var(--color-off-black)]"
            >
              The last <span>Partner</span> you&apos;ll ever need
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
