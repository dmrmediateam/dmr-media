'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';

const Hero = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollY } = useScroll();
  
  // Parallax effect - image moves slower than content
  const imageY = useTransform(scrollY, [0, 500], [0, 150]);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Force video to load and play
      video.load();
      const playPromise = video.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log('Video autoplay failed:', error);
          // Try again after a short delay
          setTimeout(() => {
            video.play().catch(e => console.log('Second play attempt failed:', e));
          }, 500);
        });
      }
    }
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen flex items-center overflow-hidden">
      {/* Video Background with Parallax */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        style={{ y: imageY }}
      >
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{
            pointerEvents: 'none',
          }}
        >
          <source src="/videos/aerial-view-of-a-gloomy-castle-1080p-2025-08-28-16-17-39-utc.mov" type="video/mp4" />
          <source src="/videos/aerial-view-of-a-gloomy-castle-1080p-2025-08-28-16-17-39-utc.mov" type="video/quicktime" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
      
      {/* Black Gradient Overlay from Left */}
      <div className="absolute inset-0 bg-gradient-to-r from-off-black/70 via-off-black/50 via-40% via-off-black/30 via-60% to-transparent"></div>

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
            DMR <span className="italic">Media</span>
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