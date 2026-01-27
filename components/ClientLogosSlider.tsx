'use client';

import Image from 'next/image';

const ClientLogosSlider = () => {
  const logos = [
    '/images/ClientLogos/Untitled design (71).png',
    '/images/ClientLogos/Untitled design (63).png',
    '/images/ClientLogos/Untitled design (73).png',
    '/images/ClientLogos/Untitled design (65).png',
    '/images/ClientLogos/Untitled design (74).png',
    '/images/ClientLogos/Untitled design (67).png',
    '/images/ClientLogos/Untitled design (72).png',
  ];

  // Logos that need to be smaller
  const smallerLogos = [
    '/images/ClientLogos/Untitled design (71).png',
    '/images/ClientLogos/Untitled design (73).png',
    '/images/ClientLogos/Untitled design (74).png',
    '/images/ClientLogos/Untitled design (72).png',
  ];

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="relative py-12 bg-[var(--surface-base)] overflow-hidden border-b border-[var(--color-ink-200)]">
      {/* Left fade gradient */}
      <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-[var(--surface-base)] via-[var(--surface-base)]/80 to-transparent z-10 pointer-events-none" />
      
      {/* Right fade gradient */}
      <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-[var(--surface-base)] via-[var(--surface-base)]/80 to-transparent z-10 pointer-events-none" />

      {/* Scrolling container */}
      <div 
        className="flex items-center"
        style={{
          animation: 'scroll-slow 40s linear infinite',
          gap: '6rem',
        }}
      >
        {duplicatedLogos.map((logo, index) => {
          const isSmaller = smallerLogos.includes(logo);
          return (
            <div
              key={`${logo}-${index}`}
              className={`flex-shrink-0 flex items-center justify-center ${isSmaller ? 'h-12 md:h-14' : 'h-16 md:h-20'}`}
              style={{ opacity: 0.8 }}
            >
              <Image
                src={logo}
                alt={`Client logo ${index + 1}`}
                width={200}
                height={80}
                className="h-full w-auto object-contain"
                loading="lazy"
                sizes="(max-width: 768px) 100px, 200px"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ClientLogosSlider;
