'use client';

import { useState } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    id: 3,
    name: 'Jade Goodhue',
    company: 'Legendary Real Services',
    location: 'Lake Geneva, Wisconsin',
    text: 'He\'s articulate, responsive, and provides amazing weekly updates. He works with us like a partner, rather than a vendor. If you have the opportunity to work with him, just DO IT. You\'ll be grateful you did!',
    cityImage: '/images/Cities/LakeGeneva.jpg',
  },
  {
    id: 6,
    name: 'Samantha Marquis',
    company: 'Marquis + Farwell Team',
    location: 'Sonoma, California',
    text: 'We had been looking into SEO for a bit and interviewed some other companies. After each interview, we walked away feeling like we had to think about it. This was absolutely not the case with DMR. From the start, we knew their company was the right fit. We were thoroughly impressed with their knowledge, their willingness to give us tips immediately, and their easy communication style. SEO can be intimidating and daunting, but DMR holds your hand, answers your questions, and has great follow through. We never feel uncomfortable asking questions and they never make us feel less-then. Every bit of the process we have been through with them thus far has been exceptional. We highly recommend them',
    cityImage: '/images/Cities/Sonoma.jpg',
  },
  {
    id: 'linda-farwell',
    name: 'Linda Farwell',
    company: 'Marquis + Farwell Team',
    location: 'Sonoma, California',
    text: 'We interviewed a few different companies and had follow up meetings with scheduled with them. Once we met with Andrew at DMR, it was a done deal. In one meeting he not only presented himself in clear, easy to understand terms, but was very patient with us in explaining how all this works(this stuff is way over my head) He also gave us instant tips without even knowing if we were going to use him. Once we hung up, we cancelled all the other meetings and decided to go with DMR. They have been fantastic.',
    cityImage: '/images/Cities/Sonoma.jpg',
  },
  {
    id: 7,
    name: 'William Breaden',
    company: 'Eagan Luxury',
    location: 'St. Petersburg, Florida',
    text: 'Andrew was great to work with on setting up new Real Estate website and getting everything linked and functional. He was always willing to listen and help guide us through the process to get what we considered to be the best outcome. We highly recommend him.',
    cityImage: '/images/Cities/Stpet.jpg',
  },
  {
    id: 'sandy-reavill',
    name: 'Sandy Reavill',
    company: '',
    location: 'Woodstock, Vermont',
    text: 'Andrew and Max are The Best! We\'ve had an outstanding experience working with Andrew Rohm and Max Deleonardis at DMR Media. Their website management and search engine placement services have been exceptional. They are fast, reliable, and always provide smart, practical advice that truly makes a difference. Since partnering with them, our web traffic has increased tremendously, and we\'re seeing real results from their work. They are responsive, professional, and clearly experts in what they do. Highly recommend Andrew, Max, and the entire DMR Media team to anyone looking to grow their online presence!',
    cityImage: '/images/Cities/NewHampshire.jpg',
  },
  {
    id: 'david-heine',
    name: 'David Heine',
    company: '',
    location: 'Denver, Colorado',
    text: 'Andrew and Max are amazing at online lead Gen. They are extremely skilled in their craft and passionate about what they do. They are true advisors with the ability to breakdown a complex system into manageable steps and provide transparent and honest feedback and guidance along the way.',
    cityImage: '/images/Cities/beautiful-landscape-of-the-bay-a-cliff-near-a-lake-2026-01-07-23-46-50-utc.jpg',
  },
];

type TestimonialsProps = {
  /** When true, the "Client Reviews" H2 is omitted (parent section supplies the heading). */
  omitHeading?: boolean
  /** When true, each card shows a 5-star row (visual trust signal). */
  showStarRating?: boolean
  /** When set, only testimonials whose `id` is in this list are rendered (order follows this array). */
  visibleIds?: (string | number)[]
}

const Testimonials = ({ omitHeading = false, showStarRating = false, visibleIds }: TestimonialsProps) => {
  const list =
    visibleIds && visibleIds.length > 0
      ? visibleIds.map((vid) => testimonials.find((t) => t.id === vid)).filter(Boolean) as typeof testimonials
      : testimonials
  const truncateText = (text: string, maxLength: number = 100) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  };

  return (
    <section className="pt-10 pb-32 bg-white border-b border-[var(--color-ink-200)]">
      <div className="container-max">
        {/* Section Header */}
        {!omitHeading ? (
          <div className="mb-14">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1]">
              Client Reviews
            </h2>
          </div>
        ) : null}

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {list.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              truncateText={truncateText}
              showStarRating={showStarRating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({
  testimonial,
  truncateText,
  showStarRating,
}: {
  testimonial: (typeof testimonials)[0]
  truncateText: (text: string, maxLength?: number) => string
  showStarRating?: boolean
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const truncatedText = truncateText(testimonial.text, 80);

  return (
    <div
      className="group relative aspect-[2/3] min-h-[500px] overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={testimonial.cityImage}
          alt={`${testimonial.location}`}
          fill
          className="object-cover"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />
      </div>

      {/* Location - Top Left */}
      {testimonial.location && (
        <div className="absolute top-6 left-6 z-10">
          <span className="text-sm uppercase tracking-[0.2em] text-[#FAFAF9] font-serif font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] [text-shadow:_0_2px_8px_rgba(0,0,0,0.8)]">
            {testimonial.location}
          </span>
        </div>
      )}

      {/* Client Name & Review - Bottom Left */}
      <div className="absolute bottom-6 left-6 right-6 z-10">
        <h3 className="text-xl font-serif font-light !text-white mb-2 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] [text-shadow:_0_2px_12px_rgba(0,0,0,0.9)]" style={{ color: '#FFFFFF' }}>
          {testimonial.name}
        </h3>
        {showStarRating ? (
          <p
            className="text-amber-400 text-sm mb-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
            aria-label="5 out of 5 stars"
          >
            ★★★★★ <span className="text-[#FAFAF9] text-xs font-serif tracking-wide">5.0</span>
          </p>
        ) : null}
        <blockquote className={`text-sm text-[#FAFAF9] leading-relaxed font-serif drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] [text-shadow:_0_2px_8px_rgba(0,0,0,0.8)] transition-all duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-90'
        }`}>
          "{isHovered ? testimonial.text : truncatedText}"
        </blockquote>
      </div>
    </div>
  );
};

export default Testimonials;
