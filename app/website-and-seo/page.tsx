import Link from 'next/link';
import type { Metadata } from 'next';
import SEOWrapper from '@/components/SEOWrapper';

export const metadata: Metadata = {
  title: 'Website Design & SEO for Real Estate | DMR Media',
  description:
    'Luxury real estate website design paired with technical SEO: portfolio samples, search strategy, and how we build sites that earn qualified traffic.',
  alternates: {
    canonical: 'https://www.dmrmedia.org/website-and-seo',
  },
  openGraph: {
    title: 'Website Design & SEO for Real Estate | DMR Media',
    description:
      'Explore our website design portfolio and SEO programs built for agents, teams, and developers serving premium markets.',
    url: 'https://www.dmrmedia.org/website-and-seo',
    siteName: 'DMR Media',
    type: 'website',
  },
};

export default function WebsiteAndSeoPage() {
  return (
    <SEOWrapper slug="/website-and-seo">
      <div className="min-h-screen bg-white">
        <section className="pt-28 pb-20 md:pt-36 md:pb-28 border-b border-[var(--color-ink-200)]">
          <div className="container-max max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-ink-400)] font-serif mb-4">
              Website &amp; SEO
            </p>
            <h1 className="text-4xl md:text-5xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1] mb-6">
              Website design and SEO that win luxury search.
            </h1>
            <p className="text-base text-[var(--color-ink-300)] font-serif leading-relaxed mb-10">
              This hub connects our visual design standards with the technical work that makes pages discoverable: fast
              stacks, schema, topical structure, and reporting. Use it as a starting point before we scope a single
              listing build, a full brokerage site, or an ongoing SEO engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/real-estate-agent-website-samples"
                className="inline-flex justify-center px-8 py-4 bg-[var(--color-off-black)] text-white uppercase tracking-[0.15em] text-xs font-serif hover:opacity-85 transition-opacity"
              >
                View design portfolio
              </Link>
              <Link
                href="/seo-optimization"
                className="inline-flex justify-center px-8 py-4 border border-[var(--color-off-black)] text-[var(--color-off-black)] uppercase tracking-[0.15em] text-xs font-serif hover:bg-[var(--color-off-black)] hover:text-white transition-colors"
              >
                Explore SEO programs
              </Link>
            </div>
          </div>
        </section>
      </div>
    </SEOWrapper>
  );
}
