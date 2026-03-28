'use client';

import { useState, useEffect } from 'react';

export interface NavHeading {
  id: string;
  text: string;
}

export default function BlogNavBar({ headings }: { headings: NavHeading[] }) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    if (!headings.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: '-72px 0px -65% 0px', threshold: 0 }
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (!headings.length) return null;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 24;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <nav
      className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      aria-label="Article sections"
    >
      <p className="text-xs uppercase tracking-[0.22em] text-[var(--color-ink-400)] font-serif mb-5">
        On this page
      </p>
      <ul className="space-y-0">
        {headings.map(({ id, text }) => (
          <li key={id} className="border-l-2 transition-colors duration-200 border-[var(--color-ink-200)]"
            style={activeId === id ? { borderColor: 'var(--color-off-black)' } : undefined}
          >
            <a
              href={`#${id}`}
              onClick={(e) => handleClick(e, id)}
              className={`block pl-4 py-2.5 text-sm font-serif leading-snug transition-colors duration-200 ${
                activeId === id
                  ? 'text-[var(--color-off-black)] font-medium'
                  : 'text-[var(--color-ink-400)] hover:text-[var(--color-off-black)]'
              }`}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
