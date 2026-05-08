import Image from 'next/image'
import type { CaseStudyData } from '@/types/case-study'

interface CaseStudyLayoutProps {
  data: CaseStudyData
}

export default function CaseStudyLayout({ data }: CaseStudyLayoutProps) {
  const reviewSchema = data.reviews[0]
    ? {
        '@context': 'https://schema.org',
        '@type': 'Review',
        itemReviewed: {
          '@type': 'Service',
          name: 'Real Estate Marketing — DMR Media Specialists',
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        author: {
          '@type': 'Person',
          name: data.reviews[0].author,
        },
        reviewBody: data.reviews[0].text,
      }
    : null

  return (
    <div className="min-h-screen bg-[var(--surface-base)] text-[var(--color-off-black)]">
      {/* Review schema — Article schema provided by SEOWrapper */}
      {reviewSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
        />
      )}

      {/* 1. Hero */}
      <section className="border-b border-[var(--color-ink-200)] py-24 md:py-32">
        <div className="container-max">
          <div className="max-w-3xl space-y-6">
            <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">
              case study
            </p>
            <h1 className="text-3xl font-serif font-light leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
              {data.client}
            </h1>
            <div
              className="h-[2px] w-14 bg-gradient-to-r from-[var(--color-off-black)] via-[var(--color-off-black)]/55 to-transparent sm:w-20"
              aria-hidden
            />
            <p className="max-w-[700px] font-serif text-base leading-relaxed text-[var(--color-ink-300)] sm:text-lg">
              {data.hero.subtitle}
            </p>
          </div>
          {data.hero.image && (
            <div className="mt-12 w-full max-w-[1200px] mx-auto overflow-hidden">
              <Image
                src={data.hero.image}
                alt={data.hero.imageAlt}
                width={1920}
                height={1080}
                className="h-auto w-full rounded-lg border border-[var(--color-ink-200)] shadow-[0_1px_0_rgba(15,15,15,0.04)]"
                priority
              />
            </div>
          )}
        </div>
      </section>

      {/* 2. Metrics Bar */}
      <section className="border-y border-[var(--color-ink-200)] bg-white" aria-label="Key results">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-0 [&>*]:border-r [&>*]:border-[var(--color-ink-200)] [&>*:nth-child(2n)]:border-r-0 md:[&>*:nth-child(2n)]:border-r md:[&>*:last-child]:border-r-0">
            {data.metrics.map((m) => (
              <div
                key={m.label}
                className="flex flex-col items-center justify-center text-center py-12 px-6 min-w-0"
              >
                <span className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] leading-none mb-2">
                  {m.number}
                </span>
                <span className="text-xs font-medium uppercase tracking-[0.1em] text-[var(--color-off-black)] mb-1">
                  {m.label}
                </span>
                <span className="text-xs text-[var(--color-ink-300)] tracking-wide">
                  {m.context}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Client Review — Featured, position #2 after metrics (omitted when no reviews) */}
      {data.reviews.length > 0 ? (
        <section
          className="border-y border-[var(--color-ink-200)] bg-white py-16 md:py-24"
          aria-label="Client testimonial"
        >
          <div className="container-max">
            <div className="mx-auto max-w-[820px] space-y-16">
              <p className="text-center font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">
                Client review
              </p>
              <div
                className="mx-auto h-[2px] w-14 bg-gradient-to-r from-transparent via-[var(--color-off-black)]/55 to-transparent sm:w-20"
                aria-hidden
              />
              {data.reviews.map((review, i) => (
                <div key={i} className="text-center">
                  {review.image && (
                    <div className="mb-6 flex justify-center">
                      <Image
                        src={review.image}
                        alt={`${review.author} testimonial — DMR Media client`}
                        width={480}
                        height={320}
                        className="w-full max-w-xl rounded-lg border border-[var(--color-ink-200)] shadow-[0_1px_0_rgba(15,15,15,0.04)]"
                      />
                    </div>
                  )}
                  {review.video && (
                    <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-lg border border-[var(--color-ink-200)] pb-[56.25%] shadow-[0_1px_0_rgba(15,15,15,0.04)]">
                      <iframe
                        className="absolute inset-0 h-full w-full"
                        src={review.video.src}
                        title={review.video.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                  )}
                  <blockquote className="my-6 font-serif text-lg font-light italic leading-relaxed text-[var(--color-off-black)] sm:text-xl md:text-2xl">
                    &ldquo;{review.text}&rdquo;
                  </blockquote>
                  <div className="mt-10">
                    <strong className="mb-1 block text-base font-semibold text-[var(--color-off-black)]">
                      {review.author}
                    </strong>
                    <span className="block text-xs uppercase tracking-[0.1em] text-[var(--color-ink-400)]">
                      {review.role}
                    </span>
                    {review.link && (
                      <a
                        href={review.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block font-serif text-[11px] uppercase tracking-[0.2em] text-[var(--color-off-black)] underline decoration-[var(--color-ink-200)] underline-offset-4 transition-opacity hover:opacity-70"
                      >
                        Read full review
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* 4–8. Narrative sections */}
      <article>
        {data.sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="border-b border-[var(--color-ink-200)] py-16 md:py-20 last:border-b-0"
          >
            <div className="container-max">
              <div className="mx-auto max-w-[820px]">
                <p className="mb-3 font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">
                  {section.eyebrow}
                </p>
                <h2 className="mb-6 font-serif text-2xl font-light leading-tight tracking-tight text-[var(--color-off-black)] md:text-3xl">
                  {section.headline}
                </h2>
                <div
                  className="mb-8 h-[2px] w-14 bg-gradient-to-r from-[var(--color-off-black)] via-[var(--color-off-black)]/55 to-transparent sm:w-20"
                  aria-hidden
                />

                {section.body.length > 0 && (
                  <div className="space-y-5 [&_p]:font-serif [&_p]:text-base [&_p]:leading-[1.85] [&_p]:text-[var(--color-ink-300)] [&_a]:underline [&_a]:hover:opacity-70 [&_a]:transition-opacity">
                    {section.body.map((paragraph, i) => (
                      <p key={i} dangerouslySetInnerHTML={{ __html: paragraph }} />
                    ))}
                  </div>
                )}

                {section.screenshot && (
                  <div className="mt-10 w-full">
                    <Image
                      src={section.screenshot.src}
                      alt={section.screenshot.alt}
                      width={1440}
                      height={900}
                      className="h-auto w-full rounded-lg border border-[var(--color-ink-200)] shadow-[0_1px_0_rgba(15,15,15,0.04)]"
                      loading="lazy"
                    />
                  </div>
                )}

                {section.screenshots && section.screenshots.length > 0 && (
                  <div className={`mt-10 grid gap-6 ${section.screenshots.length === 1 ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
                    {section.screenshots.map((shot, i) => (
                      <figure key={i} className="w-full">
                        <Image
                          src={shot.src}
                          alt={shot.alt}
                          width={900}
                          height={560}
                          className="h-auto w-full rounded-lg border border-[var(--color-ink-200)] shadow-[0_1px_0_rgba(15,15,15,0.04)]"
                          loading="lazy"
                        />
                        {shot.caption && (
                          <figcaption className="mt-2 text-xs text-[var(--color-ink-300)] font-serif tracking-wide text-center">
                            {shot.caption}
                          </figcaption>
                        )}
                      </figure>
                    ))}
                  </div>
                )}

                {section.phases && section.phases.length > 0 && (
                  <div className="mt-10 space-y-8">
                    {section.phases.map((phase) => (
                      <div
                        key={phase.name}
                        className="grid grid-cols-1 sm:grid-cols-[80px_1fr] gap-6 pt-8 border-t border-[var(--color-ink-200)] first:pt-0 first:border-t-0"
                      >
                        <span className="pt-0.5 font-serif text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-400)] sm:pt-0.5">
                          {phase.label}
                        </span>
                        <div>
                          <strong className="block text-sm font-semibold uppercase tracking-[0.08em] text-[var(--color-off-black)] mb-2">
                            {phase.name}
                          </strong>
                          <p className="text-[var(--color-ink-300)] font-serif text-[0.95rem] leading-[1.75] m-0">
                            {phase.body}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>
        ))}
      </article>

    </div>
  )
}
