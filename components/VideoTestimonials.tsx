'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const videoTestimonials = [
  {
    id: 'eagan',
    agency: 'Eagan Luxury',
    name: 'William Breaden',
    highlight:
      "You were able to turn our website around in a month it was a functional website over the course of three to four weeks. The hits on the website are five, six times what they were on our old website. Everything I asked you to do, you come back and put it together in a way that's frankly better than the idea the way I thought it would come out. I think we work pretty good as a team I look at you with knowledge beyond your years.",
    videoId: 'UtuLcLjSsG0',
    backgroundImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
  },
  {
    id: 'mk',
    agency: 'MK Real Estate',
    name: 'Michael Kurlyak',
    highlight:
      "Andrew's been great to work with. He's been awesome especially with updates, ideas and planning. Looking forward to continuing to work with him, and he's been a great resource for everything I'm looking to do.",
    videoId: 'ng_7ysEAlkc',
    backgroundImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
  },
] as const;

export default function VideoTestimonials() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const activeTestimonial = videoTestimonials.find((t) => t.videoId === activeVideo);

  useEffect(() => {
    if (activeVideo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeVideo]);

  return (
    <>
      <section
        className="py-16 md:py-24 lg:py-28 bg-[var(--surface-base)] border-b border-[var(--color-ink-200)]"
        aria-labelledby="video-testimonials-heading"
      >
        <div className="container-max">
          <header className="mb-12 md:mb-16">
            <span className="uppercase tracking-[0.2em] text-xs text-[var(--color-ink-300)] font-serif block mb-3">
              Video testimonials
            </span>
            <h2
              id="video-testimonials-heading"
              className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1] mb-6"
            >
              Hear from our clients
            </h2>
            <div className="w-48 h-[1px] bg-gradient-to-r from-[var(--color-off-black)] via-[var(--color-off-black)] to-transparent" />
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
            {videoTestimonials.map((testimonial) => (
              <VideoTestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                onClick={() => setActiveVideo(testimonial.videoId)}
              />
            ))}
          </div>
        </div>
      </section>

      {activeVideo && activeTestimonial && (
        <VideoModal
          videoId={activeVideo}
          title={`${activeTestimonial.name} — ${activeTestimonial.agency} testimonial`}
          onClose={() => setActiveVideo(null)}
        />
      )}
    </>
  );
}

function VideoModal({
  videoId,
  title,
  onClose,
}: {
  videoId: string;
  title: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/98 p-6 sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Video testimonial"
    >
      <div
        className="relative w-full max-w-4xl aspect-video"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 sm:-top-14 right-0 min-h-[44px] min-w-[44px] flex items-center justify-end text-[#FAFAF9]/90 hover:text-[#FAFAF9] text-xs uppercase tracking-[0.25em] font-serif transition-opacity duration-300"
          aria-label="Close video"
        >
          Close
        </button>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
    </div>
  );
}

function VideoTestimonialCard({
  testimonial,
  onClick,
}: {
  testimonial: (typeof videoTestimonials)[number];
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative overflow-hidden text-left w-full h-full min-h-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-off-black)] focus-visible:ring-offset-2"
      aria-label={`Watch video testimonial from ${testimonial.name} of ${testimonial.agency}`}
    >
      <div className="relative overflow-hidden bg-[var(--color-ink-200)] min-h-[280px] h-full flex flex-col">
        <Image
          src={testimonial.backgroundImage}
          alt=""
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        <div className="absolute top-5 left-5 md:top-6 md:left-6 z-10">
          <span className="text-xs uppercase tracking-[0.2em] text-[#FAFAF9] font-serif font-medium drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] [text-shadow:_0_2px_12px_rgba(0,0,0,0.8)]">
            {testimonial.agency}
          </span>
        </div>

        <div className="absolute top-5 right-5 md:top-6 md:right-6 z-10 flex items-center gap-2">
          <svg
            className="w-3.5 h-3.5 text-[#FAFAF9]/80 shrink-0"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path d="M8 5v14l11-7z" />
          </svg>
          <span className="text-xs uppercase tracking-[0.2em] text-[#FAFAF9]/80 font-serif drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] [text-shadow:_0_2px_8px_rgba(0,0,0,0.6)]">
            Watch video
          </span>
        </div>

        <div className="relative z-10 pt-[50%] px-5 pb-5 md:px-6 md:pb-6 lg:px-8 lg:pb-8 flex-1 flex flex-col justify-end min-h-0">
          <span
            className="block font-serif font-light text-[#FAFAF9] mb-3 md:mb-4 drop-shadow-[0_2px_16px_rgba(0,0,0,0.9)] [text-shadow:_0_2px_16px_rgba(0,0,0,0.9)]"
            style={{ fontSize: 'clamp(1.125rem, 2.5vw + 1rem, 1.5rem)' }}
          >
            {testimonial.name}
          </span>
          <p
            className="font-serif text-[#FAFAF9]/95 leading-[1.7] max-w-2xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] [text-shadow:_0_2px_12px_rgba(0,0,0,0.8)]"
            style={{ fontSize: 'clamp(0.9375rem, 1.25vw + 0.75rem, 1.125rem)' }}
          >
            &ldquo;{testimonial.highlight}&rdquo;
          </p>
        </div>
      </div>
    </button>
  );
}
