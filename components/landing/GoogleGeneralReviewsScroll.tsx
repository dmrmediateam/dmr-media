'use client'

import Image from 'next/image'
import { SeoReveal } from '@/app/seo-optimization/SeoReveal'
import SeoCarouselArrows from '@/components/SeoCarouselArrows'
import { SEO_CAROUSEL_CARD_LI } from '@/components/seoCarouselLayout'
import { useSeoHorizontalCardScroll } from '@/components/useSeoHorizontalCardScroll'

const cardClassName =
  'group relative flex h-[28rem] w-full flex-col overflow-hidden rounded-lg border border-[var(--color-ink-200)] bg-white shadow-[0_1px_0_rgba(15,15,15,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-off-black)]/10 hover:shadow-md motion-reduce:hover:translate-y-0 sm:h-[29rem]'

const testimonials = [
  {
    id: 3,
    name: 'Jade Goodhue',
    teamName: 'Legendary Real Services',
    location: 'Lake Geneva, Wisconsin',
    text: "He's articulate, responsive, and provides amazing weekly updates. He works with us like a partner, rather than a vendor. If you have the opportunity to work with him, just DO IT. You'll be grateful you did!",
    image: '/images/Cities/LakeGeneva.jpg',
  },
  {
    id: 6,
    name: 'Samantha Marquis',
    teamName: 'Marquis + Farwell Team',
    location: 'Sonoma, California',
    text: 'We interviewed several SEO firms and always walked away unsure. With DMR it was different from the start—their depth, willingness to share tips immediately, and calm communication made a daunting topic feel manageable. We never feel silly asking questions, and the process so far has been exceptional.',
    image: '/images/Cities/Sonoma.jpg',
  },
  {
    id: 'gregg-rossman',
    name: 'Gregg Rossman',
    teamName: 'Keller Williams St. Petersburg',
    location: 'St. Petersburg, Florida',
    text: 'The DMR team has made everything super simple to understand and handle so much of the setup. Already getting leads after a week!',
    image: '/images/Cities/Stpet.jpg',
  },
  {
    id: 7,
    name: 'William Breaden',
    teamName: 'Eagan Luxury',
    location: 'St. Petersburg, Florida',
    text: 'Andrew was great to work with on setting up our real estate site and getting everything linked and functional. He listened, guided us to the outcome we wanted, and we highly recommend him.',
    image: '/images/Cities/Stpet.jpg',
  },
  {
    id: 'sandy-reavill',
    name: 'Sandy Reavill',
    teamName: 'Willowbrook Realty',
    location: 'Woodstock, Vermont',
    text: 'Andrew and Max are outstanding—fast, reliable, and practical. Traffic is up materially and the team is responsive and expert. We recommend DMR Media to anyone serious about growing online.',
    image: '/images/Cities/NewHampshire.jpg',
  },
  {
    id: 'jorge-elizondo',
    name: 'Jorge Elizondo',
    teamName: "Christie's International",
    location: 'Costa Rica',
    text: "It's been great working with Andrew, very responsive and professional. I interviewed several other companies but I was looking something more sophisticated and that understands more about real estate and how to find the right buyer for my listings, after the first meeting with Andrew I knew they were a great fit for me.",
    image: '/images/ClientWebsiteImages/screencapture-ocean-breeze-one-vercel-app-2026-03-29-19_49_50.png',
  },
] as const

function SectionRule() {
  return <div className="mt-6 h-px w-full max-w-[4.5rem] bg-[var(--color-off-black)]/20" aria-hidden />
}

function ReviewCard({ testimonial }: { testimonial: (typeof testimonials)[number] }) {
  return (
    <article className={cardClassName}>
      <div className="pointer-events-none absolute inset-0">
        <Image
          src={testimonial.image}
          alt=""
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          loading="lazy"
          sizes="24rem"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.38)_0%,rgba(0,0,0,0.12)_18%,rgba(255,255,255,0.88)_36%,#ffffff_44%,#ffffff_100%)]"
          aria-hidden
        />
      </div>

      <div className="relative z-10 flex min-h-0 flex-1 flex-col p-6 pb-6 pt-28 sm:pt-32">
        <div className="absolute left-6 top-6 right-6 z-10">
          <span className="gg-review-location font-serif text-sm font-medium uppercase tracking-[0.2em] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.75)]">
            {testimonial.location}
          </span>
        </div>

        <p className="text-[var(--color-trust)]" aria-hidden>
          ★★★★★
        </p>

        <h3 className="gg-display mt-2 text-xl font-light leading-snug">{testimonial.name}</h3>

        <blockquote className="gg-body gg-body-sm mt-3 line-clamp-6 min-h-0 flex-1">
          &quot;{testimonial.text}&quot;
        </blockquote>

        <p className="gg-eyebrow mt-auto self-start pt-4 !text-[10px]">{testimonial.teamName}</p>
      </div>
    </article>
  )
}

export default function GoogleGeneralReviewsScroll() {
  const { scrollerRef, atStart, atEnd, scrollByCard } = useSeoHorizontalCardScroll()

  return (
    <section id="reviews" className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-white pb-0">
      <div className="container-max px-4 pt-14 sm:px-6 md:pt-16">
        <SeoReveal>
          <div className="flex items-center justify-between gap-4 sm:gap-6">
            <div className="min-w-0 flex-1">
              <p className="gg-eyebrow">Reviews</p>
              <h2 className="gg-display mt-3 text-3xl font-light tracking-tight md:text-4xl">
                What luxury teams say
              </h2>
            </div>

            <SeoCarouselArrows
              atStart={atStart}
              atEnd={atEnd}
              onPrev={() => scrollByCard(-1)}
              onNext={() => scrollByCard(1)}
              prevAriaLabel="Previous review"
              nextAriaLabel="Next review"
              placement="inline"
            />
          </div>
          <SectionRule />
        </SeoReveal>
      </div>

      <div className="container-max mt-8 pb-12 md:mt-10 md:pb-16">
        <div
          ref={scrollerRef}
          className="-mx-4 overflow-x-auto overflow-y-visible overscroll-x-contain scroll-smooth px-4 pb-2 [scrollbar-width:thin] md:-mx-6 md:px-6 lg:-mx-8 lg:px-8"
          aria-label="Client reviews"
        >
          <ul className="flex w-max snap-x snap-mandatory gap-5 md:gap-6" role="list">
            {testimonials.map((testimonial) => (
              <li key={testimonial.id} className={`${SEO_CAROUSEL_CARD_LI} list-none`}>
                <ReviewCard testimonial={testimonial} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
