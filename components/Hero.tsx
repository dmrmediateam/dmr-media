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
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const [centerOffset, setCenterOffset] = useState(0);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

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

  useEffect(() => {
    // Check if mobile or small tablet (up to md breakpoint)
    const checkMobileOrTablet = () => {
      setIsMobileOrTablet(window.innerWidth < 768); // Tailwind's md breakpoint (includes mobile and small tablets)
    };
    
    // Calculate center positions for DMR animation
    const handleResize = () => {
      checkMobileOrTablet();
      if (h1Ref.current) {
        const rect = h1Ref.current.getBoundingClientRect();
        const h1Center = rect.left + rect.width / 2;
        const viewportCenter = window.innerWidth / 2;
        setCenterOffset(viewportCenter - h1Center);
      }
    };
    
    checkMobileOrTablet();
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="hero-section">
      {/* Video Backgrounds */}
      <div className="hero-video-container">
        {videos.map((videoSrc, index) => (
          <video
            key={videoSrc}
            ref={(el) => {
              videoRefs.current[index] = el;
            }}
            className={`hero-video ${index === currentVideoIndex ? 'hero-video-active' : 'hero-video-hidden'}`}
            muted
            loop
            playsInline
            preload={index === 0 ? 'metadata' : 'none'}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ))}
        {/* Overlay for better text readability */}
        <div className="hero-overlay" />
      </div>

      {/* Centered Text */}
      <div className="hero-text-container">
        <h1 ref={h1Ref} className="hero-heading">
          {/* Mobile version - always rendered, hidden on desktop via CSS */}
          <motion.span
            className="hero-text-mobile hero-mobile-content"
            style={{ 
              fontFamily: "'Instrument Serif', serif",
              color: '#FAFAF9'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Distinguished Marketing for Real Estate
          </motion.span>
          
          {/* Desktop version - always rendered, hidden on mobile via CSS */}
          <span className="hero-desktop-content">
            {/* D - starts from center, moves left to form "DMR" */}
            <motion.span 
              className="hero-letter-large"
              initial={{ opacity: 0, x: centerOffset + 80, scale: 1.2 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0 }}
            >
              D
            </motion.span>
            {/* Rest of "Distinguished" */}
            <motion.span
              className="hero-text-normal"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 1.2 }}
            >
              istinguished{' '}
            </motion.span>
            {/* M - starts from center, stays at center */}
            <motion.span 
              className="hero-letter-large"
              initial={{ opacity: 0, x: centerOffset, scale: 1.2 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
            >
              M
            </motion.span>
            {/* Rest of "Marketing for" */}
            <motion.span
              className="hero-text-normal"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 1.3 }}
            >
              arketing for{' '}
            </motion.span>
            {/* R - starts from center, moves right to form "DMR" */}
            <motion.span 
              className="hero-letter-large"
              initial={{ opacity: 0, x: centerOffset - 80, scale: 1.2 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
            >
              R
            </motion.span>
            {/* Rest of "Real Estate" */}
            <motion.span
              className="hero-text-normal"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 1.4 }}
            >
              eal Estate
            </motion.span>
          </span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;