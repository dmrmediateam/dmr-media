'use client'

import { PortableText } from '@portabletext/react'
import NewsletterSignup from './NewsletterSignup'
import { useMemo } from 'react'

interface BlogContentProps {
  body: any[]
}

export default function BlogContent({ body }: BlogContentProps) {
  // Process blocks to insert newsletter signup just before a heading, after enough content
  const processedBody = useMemo(() => {
    if (!body || !Array.isArray(body)) return body

    let paragraphCount = 0
    const result: any[] = []
    let newsletterInserted = false

    for (const block of body) {
      // Insert newsletter signup just before first heading after 8+ paragraphs
      if (
        block._type === 'block' &&
        (block.style === 'h2' || block.style === 'h3') &&
        paragraphCount >= 8 &&
        !newsletterInserted
      ) {
        newsletterInserted = true
        result.push({
          _type: 'newsletterSignup',
          _key: `newsletter-${Date.now()}`,
        })
      }

      result.push(block)

      if (block._type === 'block' && block.style === 'normal') {
        paragraphCount++
      }
    }

    return result
  }, [body])

  const portableTextComponents = {
    block: {
      h2: ({ children }: any) => (
        <h2 className="text-2xl md:text-3xl font-serif font-light text-[var(--color-off-black)] mt-8 mb-4 tracking-tight">
          {children}
        </h2>
      ),
      h3: ({ children }: any) => (
        <h3 className="text-xl md:text-2xl font-serif font-light text-[var(--color-off-black)] mt-6 mb-3 tracking-tight">
          {children}
        </h3>
      ),
      normal: ({ children }: any) => (
        <p className="text-[var(--color-ink-300)] text-base leading-relaxed mb-4 font-serif">
          {children}
        </p>
      ),
      blockquote: ({ children }: any) => (
        <blockquote className="border-l border-[var(--color-off-black)] pl-6 my-5 text-[var(--color-ink-300)] font-serif">
          {children}
        </blockquote>
      ),
    },
    list: {
      bullet: ({ children }: any) => (
        <ul className="list-disc list-inside mb-6 text-black space-y-2 font-serif">
          {children}
        </ul>
      ),
      number: ({ children }: any) => (
        <ol className="list-decimal list-inside mb-6 text-black space-y-2 font-serif">
          {children}
        </ol>
      ),
    },
    listItem: {
      bullet: ({ children }: any) => (
        <li className="text-black font-serif">{children}</li>
      ),
      number: ({ children }: any) => (
        <li className="text-black font-serif">{children}</li>
      ),
    },
    marks: {
      link: ({ children, value }: any) => (
        <a
          href={value.href}
          className="text-[var(--color-off-black)] hover:opacity-60 transition-opacity duration-300 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ),
    },
    types: {
      newsletterSignup: () => <NewsletterSignup />,
    },
  }

  return <PortableText value={processedBody} components={portableTextComponents} />
}
