'use client';

import Link from 'next/link';
import { useState, useEffect, useRef, useCallback } from 'react';
import { usePathname } from 'next/navigation';

function openApplyModal() {
  window.dispatchEvent(new CustomEvent('openApplyModal'));
}

function MenuIcon({ open }: { open: boolean }) {
  const cls = 'site-nav__icon';
  if (open) {
    return (
      <svg className={cls} fill="none" stroke="currentColor" strokeWidth="1.25" viewBox="0 0 16 16" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4l8 8M4 12l8-8" />
      </svg>
    );
  }
  return (
    <svg className={cls} fill="none" stroke="currentColor" strokeWidth="1.25" viewBox="0 0 16 16" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2 4h12M2 8h12M2 12h12" />
    </svg>
  );
}

const DMR_PHONE_DISPLAY = '+1 920-249-5210';
const DMR_PHONE_HREF = 'tel:+19202495210';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/about-us', label: 'Team' },
  { href: '/blog', label: 'Blog' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
] as const;

function navLinkIsCurrent(pathname: string, href: string) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  /** All pages: no header until user scrolls past threshold (unobstructed top). */
  const showBar = isScrolled;
  const elevatedChrome = isScrolled;

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const openMenu = useCallback(() => {
    setIsMenuOpen(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const t = window.setTimeout(() => closeBtnRef.current?.focus(), 0);
    return () => window.clearTimeout(t);
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isMenuOpen, closeMenu]);

  return (
    <nav
      className={`site-nav ${elevatedChrome ? 'site-nav--elevated' : ''}`}
      aria-label="Primary"
    >
      {showBar ? (
        <div className="site-nav__bar">
          <div className="site-nav__bar-inner">
            <div className="site-nav__row">
              <div className="site-nav__row-track">
                <Link href="/" className="site-nav__logo" {...(pathname === '/' ? { 'aria-current': 'page' as const } : {})}>
                  DMR
                </Link>

                <div className="site-nav__actions gap-3 sm:gap-4 md:gap-5">
                  <a href={DMR_PHONE_HREF} className="site-nav__phone">
                    {DMR_PHONE_DISPLAY}
                  </a>
                  <button
                    type="button"
                    className="site-nav__apply"
                    onClick={() => {
                      openApplyModal();
                      closeMenu();
                    }}
                  >
                    Apply
                  </button>
                  <button
                    type="button"
                    className="site-nav__menu-toggle"
                    onClick={() => {
                      if (isMenuOpen) closeMenu();
                      else openMenu();
                    }}
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isMenuOpen}
                    aria-controls="site-nav-drawer"
                  >
                    <MenuIcon open={isMenuOpen} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <div
        className={`site-nav__backdrop ${isMenuOpen ? 'site-nav__backdrop--open' : 'site-nav__backdrop--closed'}`}
        aria-hidden={!isMenuOpen}
        onClick={closeMenu}
      />

      <div
        id="site-nav-drawer"
        className={`site-nav__drawer ${isMenuOpen ? 'site-nav__drawer--open' : 'site-nav__drawer--closed'}`}
        role={isMenuOpen ? 'dialog' : undefined}
        aria-modal={isMenuOpen ? true : undefined}
        aria-label={isMenuOpen ? 'Site menu' : undefined}
        aria-hidden={!isMenuOpen}
      >
        <div className="site-nav__drawer-scroll">
          <div className="site-nav__drawer-inner">
            <div className="site-nav__drawer-top">
              <span className="site-nav__drawer-brand">Menu</span>
              <button
                ref={closeBtnRef}
                type="button"
                className="site-nav__drawer-close"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <svg className="site-nav__icon" fill="none" stroke="currentColor" strokeWidth="1.25" viewBox="0 0 16 16" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4l8 8M4 12l8-8" />
                </svg>
              </button>
            </div>

            <p className="site-nav__drawer-label" id="site-nav-drawer-heading">
              Menu
            </p>
            <ul className="site-nav__list" aria-labelledby="site-nav-drawer-heading">
              {NAV_LINKS.map(({ href, label }) => {
                const current = navLinkIsCurrent(pathname, href);
                return (
                <li key={href} className="site-nav__item">
                  <Link
                    href={href}
                    className={`site-nav__link${current ? ' site-nav__link--current' : ''}`}
                    onClick={closeMenu}
                    {...(current ? { 'aria-current': 'page' as const } : {})}
                  >
                    <span>{label}</span>
                    <span className="site-nav__link-chevron" aria-hidden>
                      →
                    </span>
                  </Link>
                </li>
                );
              })}
              <li className="site-nav__item">
                <a
                  href="#apply-strategy"
                  className="site-nav__link"
                  aria-haspopup="dialog"
                  onClick={(e) => {
                    e.preventDefault();
                    closeMenu();
                    openApplyModal();
                  }}
                >
                  <span>Apply</span>
                  <span className="site-nav__link-chevron" aria-hidden>
                    →
                  </span>
                </a>
              </li>
            </ul>

            <div className="site-nav__footer">
              <div className="site-nav__footer-inner">
                <p className="site-nav__meta-label">Phone</p>
                <a href={DMR_PHONE_HREF} className="site-nav__meta-value">
                  {DMR_PHONE_DISPLAY}
                </a>

                <p className="site-nav__meta-label">Email</p>
                <a href="mailto:team@dmrmedia.org" className="site-nav__meta-value">
                  team@dmrmedia.org
                </a>

                <div className="site-nav__social">
                <a
                  href="https://www.linkedin.com/company/90571937/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect with DMR Media on LinkedIn"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/andrewrohmtcm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow DMR Media on Instagram"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@AndrewRohmcm"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Subscribe to DMR Media on YouTube"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
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
