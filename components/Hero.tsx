'use client';

import { useState, useEffect, useRef } from 'react';

const HERO_VIDEO_SRC = '/videos/dmr-full-hd.mp4';

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
  const [soundOn, setSoundOn] = useState(false);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, [soundOn]);

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
    </section>
  );
};

export default Hero;
