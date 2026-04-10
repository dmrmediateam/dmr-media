'use client';

import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const HERO_VIDEO_SRC =
  process.env.NEXT_PUBLIC_HERO_VIDEO_URL?.trim() ||
  `/videos/${encodeURIComponent('DMR - INTRO 4K.mp4')}`;

function VolumeOffIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M11 5 6 9H2v6h4l5 4V5Z" />
      <line x1="23" y1="9" x2="17" y2="15" />
      <line x1="17" y1="9" x2="23" y2="15" />
    </svg>
  );
}

function VolumeOnIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M11 5 6 9H2v6h4l5 4V5Z" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
  );
}

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const [soundOn, setSoundOn] = useState(false);
  const [centerOffset, setCenterOffset] = useState(0);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, [soundOn]);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (h1Ref.current) {
        const rect = h1Ref.current.getBoundingClientRect();
        const h1Center = rect.left + rect.width / 2;
        const viewportCenter = window.innerWidth / 2;
        setCenterOffset(viewportCenter - h1Center);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSound = () => setSoundOn((p) => !p);

  return (
    <section className="hero-section">
      <div className="hero-video-container">
        <video
          ref={videoRef}
          className="hero-video hero-video-active"
          src={HERO_VIDEO_SRC}
          muted={!soundOn}
          loop
          playsInline
          preload="metadata"
        />
        <div className="hero-overlay" />
        <button
          type="button"
          className="hero-sound-toggle"
          onClick={toggleSound}
          aria-label={soundOn ? 'Mute video' : 'Turn on video sound'}
        >
          {soundOn ? <VolumeOnIcon className="hero-sound-toggle-icon" /> : <VolumeOffIcon className="hero-sound-toggle-icon" />}
        </button>
      </div>

      <div className="hero-text-container">
        <h1 ref={h1Ref} className="hero-heading">
          <motion.span
            className="hero-text-mobile hero-mobile-content"
            style={{
              fontFamily: "'Instrument Serif', serif",
              color: '#FAFAF9',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Distinguished Marketing for Real Estate
          </motion.span>

          <span className="hero-desktop-content">
            <motion.span
              className="hero-letter-large"
              initial={{ opacity: 0, x: centerOffset + 80, scale: 1.2 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0 }}
            >
              D
            </motion.span>
            <motion.span
              className="hero-text-normal"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 1.2 }}
            >
              istinguished{' '}
            </motion.span>
            <motion.span
              className="hero-letter-large"
              initial={{ opacity: 0, x: centerOffset, scale: 1.2 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
            >
              M
            </motion.span>
            <motion.span
              className="hero-text-normal"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 1.3 }}
            >
              arketing for{' '}
            </motion.span>
            <motion.span
              className="hero-letter-large"
              initial={{ opacity: 0, x: centerOffset - 80, scale: 1.2 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
            >
              R
            </motion.span>
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
