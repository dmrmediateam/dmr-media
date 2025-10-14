'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <nav className="bg-off-white sticky top-0 z-50 border-b border-gray-200">
      {/* Scroll Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-gray-200">
        <div 
          className="h-full bg-off-black transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      
      <div className="container-max">
        <div className="flex justify-between items-center py-4 md:py-6">
          {/* Logo */}
          <Link href="/" className="flex items-center py-2 md:py-0 z-10">
            <span className="text-2xl md:text-3xl font-serif text-off-black tracking-wide">
              DMR <span className="italic">Media</span>
            </span>
          </Link>

          {/* Right Side - Desktop Nav + Menu Button */}
          <div className="flex items-center gap-8">
            {/* Desktop Navigation - Only visible on lg+ screens */}
            <div className="hidden lg:flex items-center gap-8">
              <Link
                href="/blog"
                className="text-off-black hover:text-gray-dark font-serif text-sm transition-colors duration-200 relative group tracking-wide"
                style={{ fontWeight: 400 }}
              >
                Blog
                <span className="absolute bottom-0 left-0 w-0 h-px bg-off-black transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/contact"
                className="text-off-black hover:text-gray-dark font-serif text-sm transition-colors duration-200 relative group tracking-wide"
                style={{ fontWeight: 400 }}
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-px bg-off-black transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/calendar"
                className="text-off-black hover:text-gray-dark font-serif text-sm transition-colors duration-200 relative group tracking-wide"
                style={{ fontWeight: 400 }}
              >
                Schedule
                <span className="absolute bottom-0 left-0 w-0 h-px bg-off-black transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>

            {/* Menu button - Right aligned on all screens */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-off-black hover:text-gray-dark hover:bg-gray-light z-50 relative transition-colors duration-200"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <svg
                className="w-5 h-5"
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
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Full Screen Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Full Screen Menu - Slides from Right */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-3/4 lg:w-2/3 bg-off-white z-40 shadow-2xl transition-transform duration-500 ease-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full overflow-y-auto">
          <div className="container-max h-full py-16 px-8 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 h-full">
              
              {/* Left Side - Navigation */}
              <div className="flex flex-col justify-center space-y-6">
                <h2 className="text-xs uppercase tracking-widest text-gray-dark mb-2 font-semibold">Navigation</h2>
                
                <Link
                  href="/"
                  className="text-2xl md:text-3xl font-serif font-light text-off-black hover:text-gray-dark transition-all duration-400 tracking-wide relative group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-off-black transition-all duration-400 group-hover:w-full"></span>
                </Link>

                <Link
                  href="/blog"
                  className="text-2xl md:text-3xl font-serif font-light text-off-black hover:text-gray-dark transition-all duration-400 tracking-wide relative group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-off-black transition-all duration-400 group-hover:w-full"></span>
                </Link>

                <Link
                  href="/contact"
                  className="text-2xl md:text-3xl font-serif font-light text-off-black hover:text-gray-dark transition-all duration-400 tracking-wide relative group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-off-black transition-all duration-400 group-hover:w-full"></span>
                </Link>

                <Link
                  href="/calendar"
                  className="text-2xl md:text-3xl font-serif font-light text-off-black hover:text-gray-dark transition-all duration-400 tracking-wide relative group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Schedule
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-off-black transition-all duration-400 group-hover:w-full"></span>
                </Link>
              </div>

              {/* Right Side - Contact Information */}
              <div className="flex flex-col justify-center space-y-10 lg:border-l lg:border-gray-300 lg:pl-16">
                <div>
                  <h2 className="text-xs uppercase tracking-widest text-gray-dark mb-6 font-semibold">Get In Touch</h2>
                  
                  <div className="space-y-6">
                    {/* Email */}
                    <div>
                      <div className="text-xs uppercase tracking-widest text-gray-dark mb-2">Email</div>
                      <a 
                        href="mailto:team@dmrmedia.org" 
                        className="text-base md:text-lg font-serif font-light text-off-black hover:text-gray-dark transition-colors duration-300 break-all"
                      >
                        team@dmrmedia.org
                      </a>
                    </div>

                    {/* Services */}
                    <div>
                      <div className="text-xs uppercase tracking-widest text-gray-dark mb-2">Specialization</div>
                      <p className="text-base md:text-lg font-serif font-light text-off-black">
                        Google Marketing<br />
                        SEO & Google Ads
                      </p>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-3">
                      <Link
                        href="/contact"
                        className="inline-block btn-primary text-xs"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Start Your Campaign
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-6 border-t border-gray-300">
                  <div className="text-xs uppercase tracking-widest text-gray-dark mb-3">Connect</div>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.linkedin.com/company/90571937/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-off-black hover:text-gray-dark transition-colors duration-300"
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
                      className="text-off-black hover:text-gray-dark transition-colors duration-300"
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
                      className="text-off-black hover:text-gray-dark transition-colors duration-300"
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
