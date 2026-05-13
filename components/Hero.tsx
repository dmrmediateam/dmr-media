'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

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

const easeOut = [0.22, 1, 0.36, 1] as const;

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [soundOn, setSoundOn] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, [soundOn]);

  const toggleSound = () => setSoundOn((p) => !p);

  const itemVariants = {
    hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: reduceMotion ? { duration: 0 } : { duration: 0.58, ease: easeOut },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.1,
        delayChildren: reduceMotion ? 0 : 0.06,
      },
    },
  };

  return (
    <section className="hero-section" aria-label="Introduction">
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
        <div className="hero-overlay" aria-hidden />
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
        <motion.div
          className="dmr-home-hero__content"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.p className="dmr-home-hero__eyebrow" variants={itemVariants}>
            Luxury real estate · SEO · paid search · web
          </motion.p>

          <motion.h1 className="dmr-home-hero__heading" variants={itemVariants}>
            Distinguished marketing for{' '}
            <span className="dmr-home-hero__heading-accent">real estate</span>
          </motion.h1>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
