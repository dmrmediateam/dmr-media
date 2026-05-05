'use client';

import Image from 'next/image';

const cardClassName =
  'group relative flex h-[28rem] flex-col overflow-hidden rounded-lg border border-[var(--color-ink-200)] bg-white shadow-[0_1px_0_rgba(15,15,15,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-off-black)]/10 hover:shadow-md motion-reduce:hover:translate-y-0 sm:h-[29rem]';

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
];

type TestimonialsProps = {
  /** When true, the "Client Reviews" H2 is omitted (parent section supplies the heading). */
  omitHeading?: boolean;
  /** When true, each card shows a 5-star row (visual trust signal). */
  showStarRating?: boolean;
  /** When set, only testimonials whose `id` is in this list are rendered (order follows this array). */
  visibleIds?: (string | number)[];
};

const Testimonials = ({ omitHeading = false, showStarRating = false, visibleIds }: TestimonialsProps) => {
  const list =
    visibleIds && visibleIds.length > 0
      ? (visibleIds.map((vid) => testimonials.find((t) => t.id === vid)).filter(Boolean) as typeof testimonials)
      : testimonials;

  return (
    <section
      className={`border-b border-[var(--color-ink-200)] bg-[var(--surface-base)] ${omitHeading ? 'pt-0 pb-12 md:pb-16' : 'py-[var(--seo-section-y,theme(spacing.20))] md:py-[var(--seo-section-y,theme(spacing.28))]'}`}
    >
      <div className="container-max">
        {!omitHeading ? (
          <div className="mb-10 md:mb-12">
            <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">Reviews</p>
            <h2 className="mt-3 font-serif text-3xl font-light tracking-tight text-[var(--color-off-black)] md:text-4xl">
              Client reviews
            </h2>
            <div
              className="mt-5 h-[2px] w-14 bg-gradient-to-r from-[var(--color-off-black)] via-[var(--color-off-black)]/55 to-transparent sm:w-20"
              aria-hidden
            />
          </div>
        ) : null}

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
          {list.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} showStarRating={showStarRating} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({
  testimonial,
  showStarRating,
}: {
  testimonial: (typeof testimonials)[0];
  showStarRating?: boolean;
}) => {
  return (
    <article className={cardClassName}>
      <div className="pointer-events-none absolute inset-0">
        <Image
          src={testimonial.image}
          alt=""
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.38)_0%,rgba(0,0,0,0.12)_18%,rgba(255,255,255,0.88)_36%,#ffffff_44%,#ffffff_100%)]"
          aria-hidden
        />
      </div>

      <div className="relative z-10 flex min-h-0 flex-1 flex-col p-6 pb-6 pt-28 sm:pt-32">
        <div className="absolute left-6 top-6 right-6 z-10">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-[#FAFAF9] [text-shadow:_0_2px_8px_rgba(0,0,0,0.75)] drop-shadow-[0_2px_8px_rgba(0,0,0,0.75)] font-serif">
            {testimonial.location}
          </span>
        </div>

        {showStarRating ? (
          <p className="font-general-sans text-[var(--color-trust)]" aria-hidden>
            ★★★★★
          </p>
        ) : null}

        <h3 className={`font-serif text-xl font-light leading-snug text-[var(--color-off-black)] ${showStarRating ? 'mt-2' : 'mt-1'}`}>
          {testimonial.name}
        </h3>

        <blockquote className="mt-3 line-clamp-6 min-h-0 flex-1 font-serif text-sm leading-relaxed text-[var(--color-ink-300)]">
          &quot;{testimonial.text}&quot;
        </blockquote>

        <p className="mt-auto self-start pt-4 text-left font-serif text-xs uppercase tracking-[0.2em] text-[var(--color-ink-300)]">
          {testimonial.teamName}
        </p>
      </div>
    </article>
  );
};

export default Testimonials;
