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
        className="py-12 sm:py-20 md:py-24 lg:py-28 bg-[var(--surface-base)] border-b border-[var(--color-ink-200)]"
        aria-labelledby="video-testimonials-heading"
      >
        <div className="container-max">
          <header className="mb-8 sm:mb-12 md:mb-14">
            <span className="uppercase tracking-[0.2em] text-xs text-[var(--color-ink-300)] font-serif block mb-2">
              Video testimonials
            </span>
            <h2
              id="video-testimonials-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1]"
            >
              Hear from our clients
            </h2>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-6"
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
          className="absolute -top-10 sm:-top-12 right-0 min-h-[44px] min-w-[44px] flex items-center justify-end text-white/90 hover:text-white text-sm uppercase tracking-[0.2em] font-serif transition-opacity"
          aria-label="Close video"
        >
          Close
        </button>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 w-full h-full rounded-sm"
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
      className="group relative overflow-hidden text-left w-full rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-off-black)] focus-visible:ring-offset-2"
      aria-label={`Watch video testimonial from ${testimonial.name} of ${testimonial.agency}`}
    >
      <div className="relative overflow-hidden bg-[var(--color-ink-200)] aspect-[16/10]">
        <Image
          src={testimonial.backgroundImage}
          alt=""
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/85 font-serif">
            {testimonial.agency}
          </span>
        </div>

        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 flex items-center gap-1.5 sm:gap-2">
          <svg
            className="w-3.5 h-3.5 text-white/75 shrink-0"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path d="M8 5v14l11-7z" />
          </svg>
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/75 font-serif">
            Watch video
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 lg:p-8 z-10">
          <span className="block text-base sm:text-lg md:text-xl lg:text-2xl font-serif font-light text-white mb-2 sm:mb-3 md:mb-4">
            {testimonial.name}
          </span>
          <p className="font-serif text-white/95 text-sm sm:text-base md:text-lg leading-[1.65]">
            &ldquo;{testimonial.highlight}&rdquo;
          </p>
        </div>
      </div>
    </button>
  );
}
