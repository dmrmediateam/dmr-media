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
    id: 'justin-armbruster',
    name: 'Justin Armbruster',
    company: '',
    location: 'Topeka, Kansas',
    text: 'Great Communication, True Proffesionals! Andrew & his team are great communicators and definitely know their stuff. True proffesionals',
    cityImage: '/images/Cities/rochester-minnesota-usa-skyline-on-the-zumbro-r-2026-01-09-06-28-40-utc.jpg',
  },
  {
    id: 'rick-gruebele',
    name: 'Rick Gruebele',
    company: 'Visions First Realty',
    location: 'Ashland, Wisconsin',
    text: 'As the Broker/Owner of Visions First Realty, I cannot speak highly enough of DMR Media\'s exceptional SEO services. Their strategic approach to improving our online presence has yielded remarkable results, consistently pushing our website to top rankings for key real estate search terms in our market. From the outset, their team demonstrated a deep understanding of the real estate industry\'s unique digital marketing challenges. They implemented a comprehensive SEO strategy that included local search optimization, content enhancement, and technical improvements to our website enhancing our website\'s performance, while maintaining a user friendly website.',
    cityImage: '/images/Cities/beautiful-landscape-of-the-bay-a-cliff-near-a-lake-2026-01-07-23-46-50-utc.jpg',
  },
];

const Testimonials = () => {
  const truncateText = (text: string, maxLength: number = 100) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '...';
  };

  return (
    <section className="py-32 bg-white border-b border-[var(--color-ink-200)]">
      <div className="container-max">
        {/* Section Header */}
        <div className="max-w-3xl mb-24 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1]">
            Client Success Stories
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              truncateText={truncateText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial, truncateText }: { testimonial: typeof testimonials[0], truncateText: (text: string, maxLength?: number) => string }) => {
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
        <h3 className="text-xl font-serif font-light !text-white mb-3 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] [text-shadow:_0_2px_12px_rgba(0,0,0,0.9)]" style={{ color: '#FFFFFF' }}>
          {testimonial.name}
        </h3>
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
