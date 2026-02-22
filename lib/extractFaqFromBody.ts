/**
 * Extracts FAQ pairs (Question/Answer) from Sanity Portable Text body.
 * Looks for a "Frequently Asked Questions" or "FAQ" section, then collects
 * h3 = question, following paragraph(s) = answer.
 *
 * FAQ Schema: https://schema.org/FAQPage
 */

export interface FaqItem {
  question: string
  answer: string
}

/**
 * Extract plain text from a Portable Text block's children
 */
function blockToText(block: { children?: Array<{ _type?: string; text?: string }> }): string {
  if (!block?.children || !Array.isArray(block.children)) return ''
  return block.children
    .filter((child): child is { text: string } => typeof (child as any)?.text === 'string')
    .map((child) => child.text)
    .join('')
}

/**
 * Check if a block is an FAQ section header (h2 with "FAQ" or "Frequently Asked Questions")
 */
function isFaqSectionHeader(block: { _type?: string; style?: string }): boolean {
  if (block._type !== 'block') return false
  const style = block.style || 'normal'
  if (style !== 'h2') return false
  const text = blockToText(block).trim()
  const normalized = text.toLowerCase()
  return (
    normalized.includes('frequently asked questions') ||
    normalized === 'faq' ||
    normalized.startsWith('faq ')
  )
}

/**
 * Check if a block is a question header (h3 or h4 when in FAQ section)
 */
function isQuestionBlock(block: { _type?: string; style?: string }): boolean {
  if (block._type !== 'block') return false
  const style = block.style || 'normal'
  return style === 'h3' || style === 'h4'
}

/**
 * Check if a block is a normal paragraph (answer content)
 */
function isAnswerBlock(block: { _type?: string; style?: string }): boolean {
  if (block._type !== 'block') return false
  const style = block.style || 'normal'
  return style === 'normal' || style === 'blockquote'
}

/**
 * Extract FAQ items from blog post body.
 * Expects structure: H2 "Frequently Asked Questions" -> H3 "Q?" -> normal "A" -> H3 "Q?" -> normal "A" ...
 */
export function extractFaqFromBody(body: unknown): FaqItem[] {
  if (!body || !Array.isArray(body)) return []

  const items: FaqItem[] = []
  let inFaqSection = false
  let currentQuestion = ''
  let currentAnswerParts: string[] = []

  for (const block of body) {
    // Skip non-block types (images, custom blocks, etc.)
    if (!block || typeof block !== 'object') continue

    const blockObj = block as { _type?: string; style?: string; children?: unknown[] }

    if (blockObj._type === 'block') {
      if (isFaqSectionHeader(blockObj)) {
        inFaqSection = true
        // Flush any in-progress Q/A before starting
        if (currentQuestion && currentAnswerParts.length > 0) {
          items.push({
            question: currentQuestion,
            answer: currentAnswerParts.join(' ').trim(),
          })
        }
        currentQuestion = ''
        currentAnswerParts = []
        continue
      }

      if (!inFaqSection) continue

      if (isQuestionBlock(blockObj)) {
        // Save previous Q/A if we have one
        if (currentQuestion && currentAnswerParts.length > 0) {
          items.push({
            question: currentQuestion,
            answer: currentAnswerParts.join(' ').trim(),
          })
        }
        currentQuestion = blockToText(blockObj).trim()
        currentAnswerParts = []
        continue
      }

      if (isAnswerBlock(blockObj) && currentQuestion) {
        const text = blockToText(blockObj).trim()
        if (text) currentAnswerParts.push(text)
        continue
      }

      // Another h2 outside FAQ pattern - could end section; keep collecting if it looks like a question
      if (blockObj.style === 'h2' && !isFaqSectionHeader(blockObj)) {
        // End FAQ section when we hit a different h2
        if (currentQuestion && currentAnswerParts.length > 0) {
          items.push({
            question: currentQuestion,
            answer: currentAnswerParts.join(' ').trim(),
          })
        }
        inFaqSection = false
        currentQuestion = ''
        currentAnswerParts = []
      }
    }
  }

  // Don't forget the last one
  if (currentQuestion && currentAnswerParts.length > 0) {
    items.push({
      question: currentQuestion,
      answer: currentAnswerParts.join(' ').trim(),
    })
  }

  return items.filter((item) => item.question && item.answer)
}

/**
 * Build FAQPage schema for JSON-LD
 */
export function buildFaqSchema(faqItems: FaqItem[]) {
  if (faqItems.length === 0) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}
