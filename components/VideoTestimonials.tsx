'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const videoTestimonials = [
  {
    id: 'bill',
    name: 'William Breaden',
    agency: 'Eagan Luxury',
    location: 'St. Petersburg, FL',
    videoId: 'UtuLcLjSsG0',
    image: '/images/ClientImages/Bill-Breaden-1-227x226.avif',
    highlight:
      "You were able to turn our website around in a month. The hits on the website are five, six times what they were on our old website. Everything I asked you to do, you come back and put it together in a way that's frankly better than the idea I thought it would come out.",
  },
  {
    id: 'michael',
    name: 'Michael Kurlyak',
    agency: 'MK Real Estate',
    location: '',
    videoId: 'ng_7ysEAlkc',
    image: '/images/ClientImages/Micheal.png',
    highlight:
      "Andrew's been great to work with. He's been awesome especially with updates, ideas and planning. Looking forward to continuing to work with him — he's been a great resource for everything I'm looking to do.",
  },
] as const;

export default function VideoTestimonials() {
  const [modalVideo, setModalVideo] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = modalVideo ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [modalVideo]);

  return (
    <>
      <section aria-labelledby="vt-heading" className="bg-white py-16 md:py-24">
        <div className="container-max">

          {/* Section label */}
          <p className="uppercase tracking-[0.22em] text-[10px] text-[var(--color-ink-300)] font-serif mb-10">
            Client testimonials
          </p>

          {/* 2-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {videoTestimonials.map((t) => (
              <button
                key={t.id}
                onClick={() => setModalVideo(t.videoId)}
                className="group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-off-black)]"
                aria-label={`Watch ${t.name}'s testimonial`}
              >
                {/* Photo */}
                <div className="relative overflow-hidden aspect-[4/3] mb-6">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                  {/* Play button overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-16 h-16 rounded-full border border-white/70 flex items-center justify-center backdrop-blur-sm">
                      <svg className="w-5 h-5 fill-white ml-1" viewBox="0 0 24 24" aria-hidden>
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </div>
                </div>

                {/* Identity */}
                <div className="mb-5">
                  <h3 className="font-serif font-light text-xl text-[var(--color-off-black)] tracking-tight leading-tight mb-1">
                    {t.name}
                  </h3>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-ink-300)] font-serif">
                    {t.agency}{t.location ? ` · ${t.location}` : ''}
                  </p>
                </div>

                {/* Quote */}
                <blockquote className="font-serif text-[var(--color-ink-300)] leading-[1.8] text-sm border-l-2 border-[var(--color-ink-200)] pl-5">
                  &ldquo;{t.highlight}&rdquo;
                </blockquote>

                {/* Watch CTA */}
                <span className="mt-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] font-serif text-[var(--color-off-black)] group-hover:opacity-60 transition-opacity duration-200">
                  <span className="w-5 h-5 rounded-full border border-[var(--color-off-black)] flex items-center justify-center shrink-0">
                    <svg className="w-2 h-2 fill-current ml-0.5" viewBox="0 0 24 24" aria-hidden>
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  Watch video
                </span>
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox modal */}
      {modalVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-6 sm:p-10"
          onClick={() => setModalVideo(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalVideo(null)}
              className="absolute -top-12 right-0 min-h-[44px] flex items-center text-white/70 hover:text-white text-[11px] uppercase tracking-[0.25em] font-serif transition-colors duration-200"
              aria-label="Close video"
            >
              Close
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${modalVideo}?autoplay=1`}
              title="Client testimonial video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
              style={{ border: 'none' }}
            />
          </div>
        </div>
      )}
    </>
  );
}
