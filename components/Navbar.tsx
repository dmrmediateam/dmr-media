'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="relative z-50">
      <div
        className={`fixed inset-x-0 top-0 transition-all duration-300 ${
          isScrolled ? 'backdrop-blur-xl bg-white/80 border-b border-[rgba(15,15,15,0.08)] shadow-[0_8px_32px_rgba(15,15,15,0.08)]' : 'backdrop-blur-lg bg-white/60 border-b border-transparent'
        }`}
      >
        <div className="container-max">
          <div className="flex justify-between items-center py-3 md:py-4">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-trust)] focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-full px-2 py-1"
            >
              <span className="text-xl md:text-2xl font-serif text-[var(--color-off-black)] tracking-tight">
                DMR <span className="italic">Media</span>
              </span>
            </Link>

            <div className="flex items-center gap-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] rounded-full px-4 py-2 border border-[var(--color-ink-200)] bg-white/70 hover:bg-white text-[var(--color-off-black)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-trust)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                <span className="inline-block w-2 h-2 rounded-full bg-[var(--color-trust)]" />
                Contact
              </Link>

              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-ink-200)] text-[var(--color-off-black)] bg-white/80 hover:bg-white transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-trust)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 7h16M4 12h16M4 17h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Full Screen Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[rgba(15,15,15,0.35)] backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Full Screen Menu - Slides from Right */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-3/4 lg:w-2/3 bg-white/95 backdrop-blur-xl z-40 shadow-[0_32px_80px_rgba(15,15,15,0.16)] transition-transform duration-500 ease-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full overflow-y-auto">
          <div className="container-max h-full py-16 lg:px-20 relative">
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-0 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-ink-200)] bg-white/90 text-[var(--color-off-black)] hover:border-[var(--color-trust)] hover:text-[var(--color-trust)] transition-colors duration-200"
              aria-label="Close menu"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 h-full">
              
              {/* Left Side - Navigation */}
              <div className="flex flex-col justify-center space-y-8">
                <h2 className="text-xs uppercase tracking-[0.4em] text-[var(--color-ink-400)] font-semibold">
                  Navigation
                </h2>
                
                <Link
                  href="/"
                  className="text-3xl font-serif font-light text-[var(--color-off-black)] hover:text-[var(--color-trust)] transition-colors duration-300 tracking-tight"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>

                <Link
                  href="/blog"
                  className="text-3xl font-serif font-light text-[var(--color-off-black)] hover:text-[var(--color-trust)] transition-colors duration-300 tracking-tight"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>

                <Link
                  href="/services"
                  className="text-3xl font-serif font-light text-[var(--color-off-black)] hover:text-[var(--color-trust)] transition-colors duration-300 tracking-tight"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>

                <Link
                  href="/contact"
                  className="text-3xl font-serif font-light text-[var(--color-off-black)] hover:text-[var(--color-trust)] transition-colors duration-300 tracking-tight"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>

                <Link
                  href="/calendar"
                  className="text-3xl font-serif font-light text-[var(--color-off-black)] hover:text-[var(--color-trust)] transition-colors duration-300 tracking-tight"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Schedule
                </Link>
              </div>

              {/* Right Side - Contact Information */}
              <div className="flex flex-col justify-center space-y-10 lg:border-l lg:border-[var(--color-ink-200)] lg:pl-16">
                <div>
                  <h2 className="text-xs uppercase tracking-[0.4em] text-[var(--color-ink-400)] mb-6 font-semibold">
                    Get In Touch
                  </h2>
                  
                  <div className="space-y-6">
                    {/* Email */}
                    <div>
                      <div className="text-xs uppercase tracking-[0.3em] text-[var(--color-ink-400)] mb-2">Email</div>
                      <a 
                        href="mailto:team@dmrmedia.org" 
                        className="text-lg font-serif font-light text-[var(--color-off-black)] hover:text-[var(--color-trust)] transition-colors duration-300 break-all"
                      >
                        team@dmrmedia.org
                      </a>
                    </div>

                    {/* Services */}
                    <div>
                      <div className="text-xs uppercase tracking-[0.3em] text-[var(--color-ink-400)] mb-2">Specialization</div>
                      <p className="text-lg font-serif font-light text-[var(--color-off-black)] leading-relaxed">
                        Google Marketing<br />
                        SEO & Google Ads
                      </p>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-3">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-3 rounded-full px-6 py-3 bg-[var(--color-off-black)] text-white uppercase tracking-[0.3em] text-[11px] hover:bg-black transition-colors duration-300"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Start Your Campaign
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-6 border-t border-[var(--color-ink-200)]">
                  <div className="text-xs uppercase tracking-[0.3em] text-[var(--color-ink-400)] mb-4">Connect</div>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.linkedin.com/company/90571937/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full border border-[var(--color-ink-200)] text-[var(--color-off-black)] hover:text-[var(--color-trust)] hover:border-[var(--color-trust)] flex items-center justify-center transition-colors duration-300"
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
                      className="w-9 h-9 rounded-full border border-[var(--color-ink-200)] text-[var(--color-off-black)] hover:text-[var(--color-trust)] hover:border-[var(--color-trust)] flex items-center justify-center transition-colors duration-300"
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
                      className="w-9 h-9 rounded-full border border-[var(--color-ink-200)] text-[var(--color-off-black)] hover:text-[var(--color-trust)] hover:border-[var(--color-trust)] flex items-center justify-center transition-colors duration-300"
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
      </div>
    </nav>
  );
};

export default Navbar;