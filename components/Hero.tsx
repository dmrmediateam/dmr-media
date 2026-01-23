'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const videos = [
    '/videos/entry-of-a-luxury-home-2026-01-21-18-28-02-utc (1).mp4',
    '/videos/interior-of-a-luxury-home-fountain-2026-01-21-18-30-07-utc (1).mp4',
    '/videos/rich-lifestyle-expensive-luxury-home-in-south-flor-2026-01-20-16-10-30-utc (1).mp4',
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    // Cycle through videos every 8 seconds
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [videos.length]);

  useEffect(() => {
    // Play the current video and pause others
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentVideoIndex) {
          video.play().catch(() => {
            // Ignore autoplay errors
          });
        } else {
          video.pause();
        }
      }
    });
  }, [currentVideoIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Backgrounds */}
      <div className="absolute inset-0 z-0">
        {videos.map((videoSrc, index) => (
          <video
            key={videoSrc}
            ref={(el) => {
              videoRefs.current[index] = el;
            }}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentVideoIndex ? 'opacity-100' : 'opacity-0'
            }`}
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ))}
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Centered Text */}
      <div className="relative z-10 w-full flex items-center justify-center">
        <h1
          className="text-center text-[48px] sm:text-[60px] md:text-[72px] lg:text-[84px] font-serif font-light tracking-tight leading-[1.05] px-4"
          style={{ 
            color: '#FAFAF9',
            fontFamily: "'Instrument Serif', serif"
          }}
        >
          <motion.span 
            className="text-[54px] sm:text-[66px] md:text-[78px] lg:text-[90px]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0 }}
            style={{ 
              fontFamily: "'Instrument Serif', serif",
              color: '#FAFAF9'
            }}
          >
            D
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 1 }}
            style={{ 
              fontFamily: "'Instrument Serif', serif",
              color: '#FAFAF9'
            }}
          >
            istinguished{' '}
          </motion.span>
          <motion.span 
            className="text-[54px] sm:text-[66px] md:text-[78px] lg:text-[90px]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0 }}
            style={{ 
              fontFamily: "'Instrument Serif', serif",
              color: '#FAFAF9'
            }}
          >
            M
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 1 }}
            style={{ 
              fontFamily: "'Instrument Serif', serif",
              color: '#FAFAF9'
            }}
          >
            arketing for{' '}
          </motion.span>
          <motion.span 
            className="text-[54px] sm:text-[66px] md:text-[78px] lg:text-[90px]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0 }}
            style={{ 
              fontFamily: "'Instrument Serif', serif",
              color: '#FAFAF9'
            }}
          >
            R
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 1 }}
            style={{ 
              fontFamily: "'Instrument Serif', serif",
              color: '#FAFAF9'
            }}
          >
            eal Estate
          </motion.span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;