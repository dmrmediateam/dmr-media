'use client';

import { useState } from 'react';
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
    featured: true,
  },
  {
    id: 'mk',
    agency: 'MK Real Estate',
    name: 'Michael Kurlyak',
    highlight:
      "Andrew's been great to work with. He's been awesome especially with updates, ideas and planning. Looking forward to continuing to work with him, and he's been a great resource for everything I'm looking to do.",
    videoId: 'ng_7ysEAlkc',
    backgroundImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    featured: false,
  },
];

export default function VideoTestimonials() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const activeTestimonial = videoTestimonials.find((t) => t.videoId === activeVideo);

  return (
    <>
      <section className="py-12 sm:py-16 md:py-24 lg:py-28 bg-[var(--surface-base)] border-b border-[var(--color-ink-200)]">
        <div className="container-max">
          <div className="mb-8 sm:mb-10 md:mb-14">
            <span className="uppercase tracking-[0.2em] text-xs text-[var(--color-ink-300)] font-serif block mb-2 sm:mb-3">
              Video testimonials
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1]">
              Hear from our clients
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 md:gap-8">
            {/* Bill - always primary (first on mobile, large on desktop) */}
            {videoTestimonials
              .filter((t) => t.featured)
              .map((testimonial) => (
                <VideoTestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                  onClick={() => setActiveVideo(testimonial.videoId)}
                  className="order-1 lg:col-span-8"
                  compact={false}
                />
              ))}

            {/* MK - always secondary (smaller on mobile, corner on desktop) */}
            {videoTestimonials
              .filter((t) => !t.featured)
              .map((testimonial) => (
                <VideoTestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                  onClick={() => setActiveVideo(testimonial.videoId)}
                  className="order-2 max-w-md mx-auto w-full lg:max-w-none lg:mx-0 lg:col-span-4"
                  compact
                />
              ))}
          </div>
        </div>
      </section>

      {/* Video modal */}
      {activeVideo && activeTestimonial && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setActiveVideo(null)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Escape' && setActiveVideo(null)}
          aria-modal="true"
          aria-label="Close video"
        >
          <div
            className="relative w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-12 right-0 text-white/90 hover:text-white text-sm uppercase tracking-[0.2em] font-serif transition-opacity"
              aria-label="Close"
            >
              Close
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
              title={`${activeTestimonial.name} — ${activeTestimonial.agency} testimonial`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      )}
    </>
  );
}

function VideoTestimonialCard({
  testimonial,
  onClick,
  className = '',
  compact = false,
}: {
  testimonial: (typeof videoTestimonials)[0];
  onClick: () => void;
  className?: string;
  compact?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative overflow-hidden text-left w-full ${className}`}
      aria-label={`Watch video testimonial from ${testimonial.name}`}
    >
      <div
        className={`relative overflow-hidden bg-[var(--color-ink-200)] ${
          compact ? 'aspect-[16/9] lg:aspect-[4/5]' : 'aspect-[16/10]'
        }`}
      >
        <Image
          src={testimonial.backgroundImage}
          alt=""
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes={compact ? '(max-width: 1024px) 100vw, 33vw' : '(max-width: 1024px) 100vw, 66vw'}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* Team name - top left */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/80 font-serif">
            {testimonial.agency}
          </span>
        </div>

        {/* Watch video label with subtle play icon */}
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 flex items-center gap-1.5 sm:gap-2">
          <svg
            className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white/70"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path d="M8 5v14l11-7z" />
          </svg>
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/70 font-serif">
            Watch video
          </span>
        </div>

        {/* Content overlay - bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 lg:p-8 z-10">
          <span className="block text-lg sm:text-xl md:text-2xl font-serif font-light text-[#ffffff] mb-3 sm:mb-4">
            {testimonial.name}
          </span>
          <p
            className={`font-serif text-white/95 leading-[1.7] ${
              compact
                ? 'text-xs sm:text-sm line-clamp-3 lg:line-clamp-none'
                : 'text-sm sm:text-base md:text-lg'
            }`}
          >
            &ldquo;{testimonial.highlight}&rdquo;
          </p>
        </div>
      </div>
    </button>
  );
}
