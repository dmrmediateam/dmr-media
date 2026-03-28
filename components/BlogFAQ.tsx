'use client';

import { useState } from 'react';

interface FaqItem {
  _key: string;
  question: string;
  answer: string;
}

export default function BlogFAQ({ items }: { items: FaqItem[] }) {
  if (!items || items.length === 0) return null;

  return (
    <section className="border-t border-[var(--color-ink-200)] pt-12 mt-4">
      <h2
        id="frequently-asked-questions"
        className="scroll-mt-28 text-2xl sm:text-3xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1] mb-8"
      >
        Frequently Asked Questions
      </h2>
      <dl className="space-y-0 divide-y divide-[var(--color-ink-200)]">
        {items.map((item) => (
          <FaqRow key={item._key} question={item.question} answer={item.answer} />
        ))}
      </dl>
    </section>
  );
}

function FaqRow({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <dt>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="w-full flex items-start justify-between gap-4 py-5 text-left group"
          aria-expanded={open}
        >
          <span className="font-serif text-[15px] sm:text-base font-medium text-[var(--color-off-black)] leading-snug group-hover:opacity-70 transition-opacity duration-200">
            {question}
          </span>
          <span
            className="shrink-0 mt-0.5 w-5 h-5 flex items-center justify-center text-[var(--color-ink-300)] transition-transform duration-300"
            style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}
            aria-hidden="true"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <line x1="7" y1="1" x2="7" y2="13" />
              <line x1="1" y1="7" x2="13" y2="7" />
            </svg>
          </span>
        </button>
      </dt>
      {open && (
        <dd className="pb-6 -mt-1">
          <p className="font-serif text-[15px] text-[var(--color-ink-300)] leading-[1.75]">
            {answer}
          </p>
        </dd>
      )}
    </div>
  );
}
