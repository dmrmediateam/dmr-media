'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-white via-white/90 to-[var(--surface-base)]">
      <div className="pointer-events-none absolute inset-0 flex items-end justify-end pr-4 sm:pr-10 lg:pr-20 pb-10 lg:pb-16">
        <div className="relative w-[280px] sm:w-[360px] lg:w-[520px] aspect-[4/5] rounded-[48px] overflow-hidden bg-white/40 backdrop-blur-[2px] border border-[var(--color-ink-200)] opacity-70">
          <Image
            src="/images/Untitled%20design%20(45).png"
            alt="Modern luxury property exterior"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

      <div className="relative z-10 w-full pt-24 pb-20">
        <div className="container-max">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-[48px] sm:text-[60px] md:text-[72px] font-serif font-light tracking-tight text-[var(--color-off-black)] leading-[1.05]"
            >
              Refined marketing systems for the luxury market
              <span className="text-[var(--color-trust)] text-[1.1em] align-baseline">.</span>
            </motion.h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;