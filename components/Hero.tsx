'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Parallax effect - image moves slower than content
  const imageY = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section ref={sectionRef} className="relative h-screen flex items-center overflow-hidden">
      {/* YouTube Video Background with Parallax */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        style={{ y: imageY }}
      >
        <iframe
          className="absolute inset-0 w-full h-full object-cover scale-[1.1]"
          src="https://www.youtube.com/embed/qDKYXovls4k?autoplay=1&mute=1&loop=1&playlist=qDKYXovls4k&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&fs=0&cc_load_policy=0&playsinline=1&enablejsapi=1"
          title="Luxury Home Fly Through"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen={false}
          style={{
            pointerEvents: 'none',
            minWidth: '100vw',
            minHeight: '100vh',
            width: '100vw',
            height: '56.25vw', // 16:9 aspect ratio
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </motion.div>
      
      {/* Black Gradient Overlay from Left */}
      <div className="absolute inset-0 bg-gradient-to-r from-off-black via-off-black/85 via-30% to-off-black/50"></div>

      {/* Content - Left Aligned */}
      <div className="relative z-10 text-left text-off-white px-6 sm:px-12 lg:px-20 max-w-7xl">
        {/* Hero Name with Minimal Accent Line */}
        <div className="inline-block mb-8">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-serif font-light tracking-[-0.03em] text-off-white relative pb-4"
          >
            DMR Media
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.7, ease: 'easeOut' }}
              className="absolute left-1/2 -translate-x-1/2 bottom-0 w-24 h-[1px] bg-off-white origin-center"
            />
          </motion.h1>
        </div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
          className="text-xl sm:text-2xl lg:text-3xl mb-6 tracking-wide font-serif font-light text-off-white"
        >
          Luxury Real Estate Marketing
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
          className="text-sm sm:text-base mb-10 text-off-white tracking-wide max-w-2xl"
        >
          Specializing in Google Marketing • SEO Optimization • Google Ads Management • Premium Property Marketing
        </motion.p>
        
        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-4 items-start"
        >
          <Link 
            href="/contact" 
            className="btn-primary w-full sm:w-auto text-xs sm:text-sm text-off-white transition-all duration-400"
          >
            Start Your Campaign
          </Link>
          <Link 
            href="/blog" 
            className="btn-outline border border-off-white text-off-white hover:bg-off-white hover:text-off-black w-full sm:w-auto text-xs sm:text-sm font-normal transition-all duration-400"
          >
            View Insights
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;