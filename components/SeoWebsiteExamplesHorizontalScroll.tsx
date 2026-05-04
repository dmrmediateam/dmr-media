import Image from 'next/image'
import Link from 'next/link'
import { websiteExamplesForSeo } from '@/app/seo-optimization/seo-data'

/** Horizontal portfolio strip — `/seo-optimization` only; data from `websiteExamplesForSeo`. */
export default function SeoWebsiteExamplesHorizontalScroll() {
  return (
    <section
      className="scroll-mt-24 border-b border-[var(--color-ink-200)] bg-white py-[var(--seo-section-y)]"
      id="websites"
      aria-label="Website design examples"
    >
      <div className="container-max mb-8 md:mb-10">
        <p className="font-serif text-[11px] uppercase tracking-[0.22em] text-[var(--color-ink-400)]">Design + search</p>
        <h2 className="mt-2 max-w-3xl font-serif text-3xl font-light tracking-tight text-[var(--color-off-black)] md:text-4xl">
          Sites built to rank—and to look like the leader you already are.
        </h2>
        <div className="mt-6 h-[2px] w-72 max-w-full bg-gradient-to-r from-[var(--color-off-black)] via-[var(--color-off-black)] to-transparent" />
        <p className="mt-6 max-w-2xl font-serif text-sm leading-relaxed text-[var(--color-ink-300)]">
          SEO without a credible site is pressure without leverage. Here is how we pair brand-grade presentation with
          architectures buyers and bots both trust—see the full portfolio on{' '}
          <Link href="/real-estate-agent-website-samples" className="underline underline-offset-2 hover:opacity-70">
            real estate website examples
          </Link>
          .
        </p>
      </div>

      <div className="container-max">
        <div className="-mx-4 overflow-x-auto overflow-y-visible overscroll-x-contain scroll-smooth px-4 pb-2 [scrollbar-width:thin] md:-mx-6 md:px-6 lg:-mx-8 lg:px-8">
          <ul className="flex w-max snap-x snap-mandatory gap-5 md:gap-6" role="list">
            {websiteExamplesForSeo.map((site) => (
              <li
                key={site.id}
                className="w-[min(100vw-2rem,20rem)] shrink-0 snap-start sm:w-[min(100vw-3rem,22rem)] md:w-[24rem]"
              >
                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full min-h-[26rem] flex-col overflow-hidden rounded-lg border border-[var(--color-ink-200)] bg-white shadow-[0_1px_0_rgba(15,15,15,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-off-black)]/12 hover:shadow-md md:min-h-[28rem] motion-reduce:transition-colors motion-reduce:hover:translate-y-0"
                >
                  <div className="relative aspect-[4/3] shrink-0 border-b border-[var(--color-ink-200)] bg-[var(--surface-base)]">
                    <Image
                      src={site.image}
                      alt={`${site.name} website`}
                      fill
                      className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                      sizes="(max-width: 768px) 85vw, 384px"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-transparent" />
                    <div className="absolute left-5 top-5 z-10 max-w-[90%]">
                      <span className="font-serif text-[11px] font-medium uppercase leading-snug tracking-[0.18em] text-[#fafaf9] drop-shadow-[0_2px_12px_rgba(0,0,0,0.75)]">
                        {site.subheading}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-5 md:p-6">
                    <h3 className="font-serif text-xl font-light leading-snug text-[var(--color-off-black)] md:text-2xl">
                      {site.name}
                    </h3>
                    <p className="flex-1 font-serif text-sm leading-relaxed text-[var(--color-ink-300)]">{site.description}</p>
                    <span className="mt-1 font-serif text-[11px] uppercase tracking-[0.2em] text-[var(--color-off-black)] underline underline-offset-4 transition-opacity group-hover:opacity-70">
                      Live site
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
