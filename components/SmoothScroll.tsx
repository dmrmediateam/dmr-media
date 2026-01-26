'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let currentScroll = 0;
    let targetScroll = 0;
    let rafId: number | null = null;
    let isScrolling = false;

    // Easing value - lower = more lag/smoother, higher = less lag
    // This creates the "lagged" scroll effect similar to the reference site
    const ease = 0.075;

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const smoothScroll = () => {
      // Smoothly interpolate between current and target scroll
      currentScroll = lerp(currentScroll, targetScroll, ease);
      
      // Update scroll position
      window.scrollTo(0, currentScroll);
      
      // Continue animating if there's a significant difference
      if (Math.abs(targetScroll - currentScroll) > 0.5) {
        rafId = requestAnimationFrame(smoothScroll);
      } else {
        // Snap to final position when close enough
        currentScroll = targetScroll;
        window.scrollTo(0, targetScroll);
        isScrolling = false;
        rafId = null;
      }
    };

    // Handle wheel events - this is where the smooth scroll happens
    const handleWheel = (e: WheelEvent) => {
      // Only prevent default if we're not at the boundaries
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const isAtTop = window.scrollY <= 0;
      const isAtBottom = window.scrollY >= maxScroll;
      
      // Allow native scroll at boundaries
      if ((isAtTop && e.deltaY < 0) || (isAtBottom && e.deltaY > 0)) {
        return;
      }
      
      e.preventDefault();
      
      // Update target scroll position based on wheel delta
      targetScroll += e.deltaY;
      
      // Clamp to document bounds
      targetScroll = Math.max(0, Math.min(targetScroll, maxScroll));
      
      // Start smooth scroll animation if not already running
      if (!isScrolling) {
        isScrolling = true;
        currentScroll = window.scrollY;
        rafId = requestAnimationFrame(smoothScroll);
      }
    };

    // Handle touch events for mobile
    let touchStartY = 0;
    let touchStartScroll = 0;
    let isTouching = false;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
      touchStartScroll = window.scrollY;
      isTouching = true;
      targetScroll = window.scrollY;
      currentScroll = window.scrollY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isTouching) return;
      
      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;
      
      targetScroll = touchStartScroll + deltaY;
      
      // Clamp to document bounds
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      targetScroll = Math.max(0, Math.min(targetScroll, maxScroll));
      
      // For touch, update immediately but still use smooth scroll
      if (!isScrolling) {
        isScrolling = true;
        currentScroll = window.scrollY;
        rafId = requestAnimationFrame(smoothScroll);
      }
    };

    const handleTouchEnd = () => {
      isTouching = false;
    };

    // Handle programmatic scroll (anchor links, etc.)
    const handleScroll = () => {
      // Only update if not currently animating
      if (!isScrolling) {
        targetScroll = window.scrollY;
        currentScroll = window.scrollY;
      }
    };

    // Initialize
    currentScroll = window.scrollY;
    targetScroll = window.scrollY;

    // Add event listeners
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    // Handle resize
    const handleResize = () => {
      currentScroll = window.scrollY;
      targetScroll = window.scrollY;
    };
    window.addEventListener('resize', handleResize);

    // Reset on route change
    const resetScroll = () => {
      setTimeout(() => {
        currentScroll = window.scrollY;
        targetScroll = window.scrollY;
      }, 100);
    };
    resetScroll();

    // Cleanup
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('resize', handleResize);
      
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [pathname]);

  return null;
}
