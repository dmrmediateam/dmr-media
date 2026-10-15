'use client';

import Image from 'next/image';

type ClientLogosSliderProps = {
  /** Marquee repeats for infinite scroll. Use 1 for a single static row. */
  repeatCount?: number;
};

const ClientLogosSlider = ({ repeatCount = 3 }: ClientLogosSliderProps) => {
  const logos = [
    '/images/ClientLogos/Untitled design (71).png',
    '/images/ClientLogos/Untitled design (63).png',
    '/images/ClientLogos/Untitled design (73).png',
    '/images/ClientLogos/Untitled design (65).png',
    '/images/ClientLogos/Untitled design (74).png',
    '/images/ClientLogos/Untitled design (67).png',
    '/images/ClientLogos/Untitled design (72).png',
    '/images/ClientLogos/Untitled design (92).png',
    '/images/ClientLogos/oppenheim-group.png',
    '/images/ClientLogos/coldwell-banker.png',
  ];

  const logoAlts: Record<string, string> = {
    '/images/ClientLogos/oppenheim-group.png': 'The Oppenheim Group Real Estate',
    '/images/ClientLogos/coldwell-banker.png': 'Coldwell Banker',
  };

  /** Very wide wordmarks need a shorter box to sit at the same visual weight as the rest. */
  const wideLogos = ['/images/ClientLogos/oppenheim-group.png'];

  /** Two-line wordmarks read larger, so they get a mid-size box. */
  const mediumLogos = ['/images/ClientLogos/coldwell-banker.png'];

  const smallerLogos = [
    '/images/ClientLogos/Untitled design (71).png',
    '/images/ClientLogos/Untitled design (73).png',
    '/images/ClientLogos/Untitled design (74).png',
    '/images/ClientLogos/Untitled design (72).png',
  ];

  /** Marquee items carry their own right padding (not a flex gap) so each copy of the set is exactly one loop wide. */
  let spacingClass = 'pr-14 sm:pr-24';

  const renderLogo = (logo: string, index: number) => {
    const isSmaller = smallerLogos.includes(logo);
    const isWide = wideLogos.includes(logo);
    const isMedium = mediumLogos.includes(logo);
    const heightClass = isWide ? 'h-6 md:h-8' : isMedium ? 'h-9 md:h-11' : isSmaller ? 'h-12 md:h-14' : 'h-16 md:h-20';
    return (
      <div
        key={`${logo}-${index}`}
        className={`flex flex-shrink-0 items-center justify-center ${heightClass} ${spacingClass}`}
        style={{ opacity: 0.8 }}
      >
        <Image
          src={logo}
          alt={logoAlts[logo] ?? 'Client logo'}
          width={200}
          height={80}
          className="h-full w-auto object-contain"
          loading="eager"
          sizes="(max-width: 768px) 100px, 200px"
        />
      </div>
    );
  };

  if (repeatCount <= 1) {
    spacingClass = '';
    return (
      <section className="relative border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] py-6">
        <div className="container-max flex flex-wrap items-center justify-center gap-x-10 gap-y-5 px-4 sm:gap-x-14 sm:px-6">
          {logos.map((logo, index) => renderLogo(logo, index))}
        </div>
      </section>
    );
  }

  const duplicatedLogos = Array.from({ length: repeatCount }, () => logos).flat();

  return (
    <section className="relative overflow-hidden border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] py-6">
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-40 bg-gradient-to-r from-[var(--surface-base)] via-[var(--surface-base)]/80 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-40 bg-gradient-to-l from-[var(--surface-base)] via-[var(--surface-base)]/80 to-transparent" />

      <div
        className="scroll-slow-logos flex w-max items-center"
        style={{ '--marquee-shift': `${-100 / repeatCount}%` } as React.CSSProperties}
      >
        {duplicatedLogos.map((logo, index) => renderLogo(logo, index))}
      </div>
    </section>
  );
};

export default ClientLogosSlider;
