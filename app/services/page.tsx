import Image from 'next/image';
import Link from 'next/link';
import ServicesShowcase from '@/components/ServicesShowcase';
import SEOWrapper from '@/components/SEOWrapper';
import { metadataFromRegistry } from '@/lib/content-registry';

export const metadata = metadataFromRegistry('/services');

export default function ServicesPage() {
  return (
    <SEOWrapper slug="/services">
      <div className="min-h-screen bg-white">
        {/* Intro */}
        <section className="py-20 md:py-28 bg-white border-b border-[var(--color-ink-200)]">
          <div className="container-max">
            <div className="max-w-2xl">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.15] mb-6">
                Systems designed for market makers.
              </h1>
              <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                Each engagement is built around clarity, restraint, and measurable outcomes. Explore the programs we operate for luxury real estate teams and developers.
              </p>
            </div>
          </div>
        </section>

        {/* Website Design Portfolio — between intro and SEO */}
        <section className="border-b border-[var(--color-ink-200)]">
          <Link
            href="/real-estate-agent-website-samples"
            className="group block"
          >
            <article className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
              <div className="flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 py-16 lg:py-24 order-2 lg:order-1">
                <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-ink-400)] font-serif mb-4">
                  Website Design Portfolio
                </p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] mb-6 tracking-tight leading-[1.15] group-hover:opacity-80 transition-opacity">
                  Distinguished Real Estate Website Designs.
                </h2>
                <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7] max-w-xl">
                  Websites that continue to earn 5-stars since 2022 from top agents, teams, and brokers. Legendary Real Estate, Eagan Luxury, Cheryl Towey, Valoria Homes.
                </p>
                <span className="mt-8 text-[11px] uppercase tracking-[0.25em] text-[var(--color-off-black)] font-serif group-hover:opacity-60 transition-opacity border-b border-[var(--color-off-black)] pb-1 w-fit">
                  View portfolio
                </span>
              </div>
              <div className="relative min-h-[320px] sm:min-h-[400px] lg:min-h-[480px] overflow-hidden bg-[var(--color-ink-200)] order-1 m-6 sm:m-10 lg:m-12 lg:order-2">
                <Image
                  src="/images/ClientWebsites/screencapture-legendaryrealestateservices-2026-03-04-03_34_49.png"
                  alt="Legendary Real Estate Services — real estate agent website example"
                  fill
                  className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </article>
          </Link>
        </section>

        <ServicesShowcase hideIntro sectionClassName="bg-white" />
      </div>
    </SEOWrapper>
  );
}
