'use client';

import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Justin Armbruster',
    company: 'The Armbruster Team',
    location: 'Topeka, KS',
    text: 'Andrew & his team are great communicators and definitely know their stuff. True professionals!',
    shortText: 'Great communicators who definitely know their stuff. True professionals!',
    bgImage: '/images/StockHomes/modern-luxury-house-at-dusk-2025-02-10-06-40-31-utc.jpg',
    featured: false,
  },
  {
    id: 2,
    name: 'Rick Grueble',
    company: 'Visions First Realty',
    location: 'Ashland, WI',
    text: 'As the Broker/Owner of Visions First Realty, I cannot speak highly enough of DMR Media\'s exceptional SEO services. Their strategic approach to improving our online presence has yielded remarkable results, consistently pushing our website to top rankings for key real estate search terms in our market.',
    shortText: 'DMR Media\'s exceptional SEO services yielded remarkable results, consistently pushing our website to top rankings.',
    bgImage: '/images/StockHomes/modern-villa-interior-with-sparkle-floor-2024-10-18-09-40-13-utc.jpg',
    featured: true,
  },
  {
    id: 3,
    name: 'Jade Goodhue',
    company: 'Legendary Real Services',
    location: 'Lake Geneva, WI',
    text: 'He\'s articulate, responsive, and provides amazing weekly updates. He works with us like a partner, rather than a vendor. If you have the opportunity to work with him, just DO IT. You\'ll be grateful you did!',
    shortText: 'Amazing weekly updates. Works like a partner, not a vendor. Just DO IT!',
    bgImage: '/images/StockHomes/spacious-living-room-with-staircase-in-residence-2025-10-10-15-17-44-utc (1).jpg',
    featured: true,
  },
  {
    id: 4,
    name: 'Andy Peterson',
    company: 'Keller Williams Luxury',
    location: 'Nashville, TN',
    text: 'Andrew worked with me personally to completely change my presence online - with a perfect mix of personal and professional. He was always on time, asking the right questions and got it done fast.',
    shortText: 'Completely changed my online presence with a perfect mix of personal and professional.',
    bgImage: '/images/StockHomes/studio-apartment-interior-with-wooden-furniture-2025-02-09-23-29-43-utc.jpg',
    featured: false,
  },
  {
    id: 5,
    name: 'Tony Jordan',
    company: 'The Jordan Group',
    location: 'Scottsdale, AZ',
    text: 'I\'ve been working with Andrew for years! Simply put, he\'s an SEO genius!',
    shortText: 'Been working with Andrew for years. Simply put, he\'s an SEO genius!',
    bgImage: '/images/StockHomes/a-backyard-with-a-swimming-pool-hot-tub-and-pati-2025-02-10-06-23-51-utc.jpg',
    featured: false,
  },
];

const Testimonials = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="uppercase tracking-[0.4em] text-[11px] text-[var(--color-ink-400)] mb-4 block">
            Voices
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-[var(--color-off-black)] mb-4">
            Client <span className="italic">Success Stories</span>
          </h2>
          <p className="text-[var(--color-ink-400)] max-w-2xl mx-auto leading-relaxed">
            Real results from real estate professionals who transformed their digital presence
          </p>
        </div>

        {/* Desktop Horizontal Accordion */}
        <div className="hidden lg:flex gap-4 h-[520px]">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`relative overflow-hidden cursor-pointer transition-all duration-700 ease-in-out rounded-[32px] border border-[var(--color-ink-200)] bg-white/80 backdrop-blur-sm ${
                hoveredIndex === index
                  ? 'flex-[2.6]'
                  : hoveredIndex === null
                  ? 'flex-[1.2]'
                  : 'flex-[0.4]'
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={testimonial.bgImage}
                  alt={`${testimonial.name} testimonial background`}
                  className="w-full h-full object-cover transition-transform duration-700"
                />
                {/* Overlay Gradient */}
                <div className={`absolute inset-0 transition-all duration-700 ${
                  hoveredIndex === index
                    ? 'bg-gradient-to-t from-white via-white/85 to-white/40'
                    : 'bg-white/85'
                }`}></div>
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-10">
                {/* Default Content - Hidden when another panel is hovered */}
                <div className={`transition-all duration-500 ${
                  hoveredIndex !== null && hoveredIndex !== index
                    ? 'opacity-0 pointer-events-none'
                    : 'opacity-100'
                }`}>
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-[var(--color-trust)]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Name */}
                  <h3 className={`font-serif text-[var(--color-off-black)] mb-2 transition-all duration-500 ${
                    hoveredIndex === index ? 'text-3xl' : 'text-2xl'
                  }`}>
                    {testimonial.name}
                  </h3>

                  {/* Company & Location */}
                  {testimonial.company && (
                    <p className={`text-[var(--color-trust)] font-semibold transition-all duration-500 ${
                      hoveredIndex === index ? 'text-base mb-2 opacity-100' : 'text-sm mb-1 opacity-80'
                    }`}>
                      {testimonial.company}
                    </p>
                  )}
                  
                  {testimonial.location && (
                    <p className={`text-[var(--color-ink-400)] mb-6 transition-all duration-500 ${
                      hoveredIndex === index ? 'text-sm opacity-100' : 'text-xs opacity-70'
                    }`}>
                      {testimonial.location}
                    </p>
                  )}

                  {/* Testimonial Text - Expands on hover */}
                  <div className={`transition-all duration-700 overflow-hidden ${
                    hoveredIndex === index
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}>
                    <div className="mb-4 h-px bg-gradient-to-r from-[var(--color-trust)] via-[var(--color-trust)]/40 to-transparent"></div>
                    <blockquote className="text-[var(--color-off-black)] leading-relaxed text-base font-serif italic mb-4">
                      "{testimonial.text}"
                    </blockquote>
                  </div>

                  {/* Short text - Visible when no panel is hovered */}
                  <div className={`transition-all duration-700 ${
                    hoveredIndex === null
                      ? 'max-h-32 opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}>
                    <p className="text-[var(--color-ink-400)] text-sm leading-relaxed line-clamp-3">
                      "{testimonial.shortText}"
                    </p>
                  </div>
                </div>

                {/* Vertical Text - Only shown when another panel is hovered */}
                {hoveredIndex !== null && hoveredIndex !== index && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="transform -rotate-90 whitespace-nowrap">
                      <span className="text-[var(--color-ink-400)] text-2xl font-serif tracking-wider">
                        {testimonial.name}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Vertical Scroll */}
        <div className="lg:hidden space-y-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="relative overflow-hidden rounded-3xl border border-[var(--color-ink-200)] bg-white/80 backdrop-blur-sm"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={testimonial.bgImage}
                  alt={`${testimonial.name} testimonial background`}
                  className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/85 to-white/40"></div>
              </div>

              {/* Content */}
              <div className="relative p-6 min-h-[200px] flex flex-col justify-end">
                {/* Stars */}
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-[var(--color-trust)]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Name */}
                <h3 className="font-serif text-2xl text-[var(--color-off-black)] mb-2">
                  {testimonial.name}
                </h3>

                {/* Company & Location */}
                {testimonial.company && (
                  <p className="text-[var(--color-trust)] font-semibold text-base mb-1">
                    {testimonial.company}
                  </p>
                )}
                
                {testimonial.location && (
                  <p className="text-[var(--color-ink-400)] text-sm mb-4">
                    {testimonial.location}
                  </p>
                )}

                {/* Testimonial Text */}
                <div className="mb-4 h-px bg-gradient-to-r from-[var(--color-trust)] via-[var(--color-trust)]/40 to-transparent"></div>
                <blockquote className="text-[var(--color-off-black)] leading-relaxed text-base font-serif italic mb-4">
                  "{testimonial.text}"
                </blockquote>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Notice */}
        <div className="mt-8 text-center text-sm text-[var(--color-ink-400)] lg:hidden">
          Swipe to explore every story
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
