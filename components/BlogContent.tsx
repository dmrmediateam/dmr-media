'use client'

import { PortableText } from '@portabletext/react'
import NewsletterSignup from './NewsletterSignup'
import { useMemo } from 'react'
import { urlFor } from '@/lib/sanity'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

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
      h2: ({ children, value }: any) => {
        const rawText: string = (value?.children ?? [])
          .map((c: any) => c.text ?? '')
          .join('')
        const id = rawText
          .toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-')
          .replace(/-+/g, '-')
          .trim()
        return (
          <h2
            id={id}
            className="scroll-mt-16 text-2xl md:text-3xl font-serif font-light text-[var(--color-off-black)] mt-8 mb-4 tracking-tight"
          >
            {children}
          </h2>
        )
      },
      h3: ({ children, value }: any) => {
        const rawText: string = (value?.children ?? [])
          .map((c: any) => c.text ?? '')
          .join('')
        const id = rawText
          .toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-')
          .replace(/-+/g, '-')
          .trim()
        return (
          <h3
            id={id}
            className="scroll-mt-16 text-xl md:text-2xl font-serif font-light text-[var(--color-off-black)] mt-6 mb-3 tracking-tight"
          >
            {children}
          </h3>
        )
      },
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
      image: ({ value }: { value: { asset?: { url?: string }; alt?: string } }) => {
        if (!value?.asset) return null
        const src =
          typeof value.asset === 'object' && 'url' in value.asset
            ? value.asset.url
            : urlFor(value).width(1200).url()
        if (!src) return null
        return (
          <figure className="my-8">
            <img
              src={src}
              alt={value.alt || ''}
              className="w-full h-auto rounded-sm"
            />
          </figure>
        )
      },
      markdown: ({ value }: { value: { content?: string } }) => {
        if (!value?.content) return null
        return (
          <div className="my-6">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                table: ({ children }) => (
                  <div className="my-6 w-full overflow-x-auto">
                    <table className="w-full border-collapse font-serif text-sm">{children}</table>
                  </div>
                ),
                thead: ({ children }) => <thead>{children}</thead>,
                tbody: ({ children }) => <tbody>{children}</tbody>,
                tr: ({ children }) => <tr className="even:bg-[var(--color-ink-200)]/20">{children}</tr>,
                th: ({ children }) => (
                  <th className="border border-[var(--color-ink-200)] bg-[var(--color-off-black)] px-4 py-2.5 text-left text-[11px] uppercase tracking-[0.14em] text-white">
                    {children}
                  </th>
                ),
                td: ({ children }) => (
                  <td className="border border-[var(--color-ink-200)] px-4 py-2.5 text-[var(--color-ink-300)] leading-snug">
                    {children}
                  </td>
                ),
                p: ({ children }) => (
                  <p className="text-[var(--color-ink-300)] text-base leading-relaxed mb-4 font-serif">{children}</p>
                ),
                strong: ({ children }) => <strong className="font-semibold text-[var(--color-off-black)]">{children}</strong>,
                em: ({ children }) => <em>{children}</em>,
                ul: ({ children }) => <ul className="list-disc list-inside mb-6 space-y-2 font-serif">{children}</ul>,
                ol: ({ children }) => <ol className="list-decimal list-inside mb-6 space-y-2 font-serif">{children}</ol>,
                li: ({ children }) => <li className="text-[var(--color-ink-300)] font-serif">{children}</li>,
              }}
            >
              {value.content}
            </ReactMarkdown>
          </div>
        )
      },
      table: ({ value }: { value: { rows?: { _key: string; cells?: string[] }[] } }) => {
        const rows = value?.rows ?? []
        if (rows.length === 0) return null
        const [headerRow, ...bodyRows] = rows
        return (
          <div className="my-8 w-full overflow-x-auto">
            <table className="w-full border-collapse font-serif text-sm">
              {headerRow?.cells && headerRow.cells.length > 0 && (
                <thead>
                  <tr>
                    {headerRow.cells.map((cell, i) => (
                      <th
                        key={i}
                        className="border border-[var(--color-ink-200)] bg-[var(--color-off-black)] px-4 py-2.5 text-left text-[11px] uppercase tracking-[0.14em] text-white"
                      >
                        {cell}
                      </th>
                    ))}
                  </tr>
                </thead>
              )}
              <tbody>
                {bodyRows.map((row, ri) => (
                  <tr key={row._key ?? ri} className={ri % 2 === 0 ? 'bg-white' : 'bg-[var(--color-ink-200)]/20'}>
                    {(row.cells ?? []).map((cell, ci) => (
                      <td
                        key={ci}
                        className="border border-[var(--color-ink-200)] px-4 py-2.5 text-[var(--color-ink-300)] leading-snug"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      },
      newsletterSignup: () => <NewsletterSignup />,
    },
  }

  return <PortableText value={processedBody} components={portableTextComponents} />
}
