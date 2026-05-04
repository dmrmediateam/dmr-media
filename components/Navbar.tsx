'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

function openApplyModal() {
  window.dispatchEvent(new CustomEvent('openApplyModal'));
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 12);
    };

    onScroll();

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const showTopBar = isScrolled || isMenuOpen;

  return (
    <nav className="relative z-50">
      <div
        aria-hidden={!showTopBar}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out ${
          showTopBar
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-full opacity-0'
        } ${
          isScrolled
            ? 'border-b border-[rgba(15,15,15,0.06)] bg-white/95 backdrop-blur-sm'
            : 'border-b border-transparent bg-white/90 backdrop-blur-sm'
        }`}
      >
        <div className="container-max">
          <div className="flex items-center justify-between py-4 md:py-5">
            {/* Logo */}
            <Link href="/" className="z-10 flex items-center focus:outline-none">
              <span className="font-serif text-2xl font-light tracking-[0.05em] text-[var(--color-off-black)] md:text-3xl">
                DMR
              </span>
            </Link>

            <div className="flex items-center gap-4 md:gap-5">
              <button
                type="button"
                onClick={() => {
                  openApplyModal();
                  setIsMenuOpen(false);
                }}
                className="inline-flex min-h-[40px] items-center justify-center border border-[var(--color-off-black)]/18 bg-transparent px-4 font-serif text-[11px] uppercase tracking-[0.2em] text-[var(--color-off-black)] transition-colors hover:border-[var(--color-off-black)]/35 hover:bg-[var(--color-off-black)]/[0.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-off-black)]/25 focus-visible:ring-offset-2 focus-visible:ring-offset-white md:min-h-[44px] md:px-5"
              >
                Apply
              </button>
              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex h-6 w-6 flex-col items-center justify-center gap-1.5 text-[var(--color-off-black)] transition-opacity duration-300 hover:opacity-60 focus:outline-none"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    viewBox="0 0 16 16"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4l8 8M4 12l8-8" />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    viewBox="0 0 16 16"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2 4h12M2 8h12M2 12h12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Full Screen Menu Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-[rgba(15,15,15,0.2)] backdrop-blur-sm transition-opacity duration-500 ease-out ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Full Screen Menu - Slides from Right */}
      <div
        className={`fixed top-0 right-0 z-[61] h-full w-full bg-white transition-transform duration-700 ease-out md:w-2/5 lg:w-1/3 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full overflow-y-auto">
          <div className="container-max h-full py-16 lg:px-20 relative">
            {/* Close button positioned to align with hamburger icon */}
            <div className="absolute top-0 right-0 w-full">
              <div className="container-max">
                <div className="flex justify-end items-center py-4 md:py-5">
                  <button
                    type="button"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-center w-6 h-6 text-[var(--color-off-black)] hover:opacity-60 transition-opacity duration-300 focus:outline-none"
                    aria-label="Close menu"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      viewBox="0 0 16 16"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4l8 8M4 12l8-8" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col h-full pt-20">
              
              {/* Navigation */}
              <div className="flex flex-col space-y-6 px-8 md:px-12">
                <Link
                  href="/"
                  className="text-2xl font-serif font-light text-[var(--color-off-black)] hover:opacity-60 transition-opacity duration-300 tracking-tight"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>

                <Link
                  href="/blog"
                  className="text-2xl font-serif font-light text-[var(--color-off-black)] hover:opacity-60 transition-opacity duration-300 tracking-tight"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>

                <Link
                  href="/services"
                  className="text-2xl font-serif font-light text-[var(--color-off-black)] hover:opacity-60 transition-opacity duration-300 tracking-tight"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>

                <Link
                  href="/contact"
                  className="text-2xl font-serif font-light text-[var(--color-off-black)] hover:opacity-60 transition-opacity duration-300 tracking-tight"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>

                <div className="pt-2">
                  <button
                    type="button"
                    className="inline-flex min-h-[44px] items-center justify-center border border-[var(--color-off-black)]/18 bg-transparent px-6 font-serif text-[11px] uppercase tracking-[0.2em] text-[var(--color-off-black)] transition-colors hover:border-[var(--color-off-black)]/35 hover:bg-[var(--color-off-black)]/[0.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-off-black)]/25 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                    onClick={() => {
                      setIsMenuOpen(false);
                      openApplyModal();
                    }}
                  >
                    Apply
                  </button>
                </div>
              </div>

              {/* Contact Information */}
              <div className="flex flex-col space-y-8 px-8 md:px-12 mt-12 pt-12 border-t border-[rgba(15,15,15,0.08)]">
                {/* Email */}
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[var(--color-ink-300)] mb-3 font-serif">Email</div>
                  <a 
                    href="mailto:team@dmrmedia.org" 
                    className="text-base font-serif font-light text-[var(--color-off-black)] hover:opacity-60 transition-opacity duration-300 break-all"
                  >
                    team@dmrmedia.org
                  </a>
                </div>

                {/* Social Links */}
                <div className="flex gap-6">
                  <a 
                    href="https://www.linkedin.com/company/90571937/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-off-black)] hover:opacity-60 transition-opacity duration-300"
                    aria-label="Connect with DMR Media on LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.instagram.com/andrewrohmtcm/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-off-black)] hover:opacity-60 transition-opacity duration-300"
                    aria-label="Follow DMR Media on Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.youtube.com/@AndrewRohmcm" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-off-black)] hover:opacity-60 transition-opacity duration-300"
                    aria-label="Subscribe to DMR Media on YouTube"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;