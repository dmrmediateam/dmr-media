'use client';

import { useState, useEffect, useRef } from 'react';

const Hero = () => {
  const videos = [
    '/videos/entry-of-a-luxury-home-2026-01-21-18-28-02-utc (1).mp4',
    '/videos/interior-of-a-luxury-home-fountain-2026-01-21-18-30-07-utc (1).mp4',
    '/videos/rich-lifestyle-expensive-luxury-home-in-south-flor-2026-01-20-16-10-30-utc (1).mp4',
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    // Only load first video initially, lazy load others
    if (videoRefs.current[0]) {
      videoRefs.current[0].load();
    }
    
    // Cycle through videos every 8 seconds
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => {
        const next = (prev + 1) % videos.length;
        // Lazy load next video when needed
        if (videoRefs.current[next] && videoRefs.current[next].readyState === 0) {
          videoRefs.current[next].load();
        }
        return next;
      });
    }, 8000);

    return () => clearInterval(interval);
  }, [videos.length]);

  useEffect(() => {
    // Play the current video and pause others
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentVideoIndex) {
          video.play().catch(() => {});
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
            preload={index === 0 ? 'auto' : 'none'}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ))}
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Centered Text */}
      <div className="relative z-10 w-full flex items-center justify-center">
        <h1 className="text-center text-[48px] sm:text-[60px] md:text-[72px] lg:text-[84px] font-serif font-light tracking-tight leading-[1.05] px-4 relative text-[#FAFAF9]">
          {/* D - starts from center, moves left to form "DMR" */}
          <span className="hero-letter-d text-[54px] sm:text-[66px] md:text-[78px] lg:text-[90px] inline-block">
            D
          </span>
          {/* Rest of "Distinguished" */}
          <span className="hero-text-1">
            istinguished{' '}
          </span>
          {/* M - starts from center, stays at center */}
          <span className="hero-letter-m text-[54px] sm:text-[66px] md:text-[78px] lg:text-[90px] inline-block">
            M
          </span>
          {/* Rest of "Marketing for" */}
          <span className="hero-text-2">
            arketing for{' '}
          </span>
          {/* R - starts from center, moves right to form "DMR" */}
          <span className="hero-letter-r text-[54px] sm:text-[66px] md:text-[78px] lg:text-[90px] inline-block">
            R
          </span>
          {/* Rest of "Real Estate" */}
          <span className="hero-text-3">
            eal Estate
          </span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;