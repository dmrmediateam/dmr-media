import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getMlsBySlug, listMls } from '@/data/mlsRegistry';
import type { Metadata } from 'next';

/** Slugs that have dedicated custom pages - exclude from dynamic route */
const DEDICATED_PAGE_SLUGS = new Set([
  'stellar-mls',
  'south-central-wisconsin-mls',
  'cooperative-arkansas-realtors-mls',
  'metro-mls',
  'prime-mls',
  'bareis',
  'hudson-mls',
  'california-regional-multiple-listing-service',
  'san-francisco-mls-sfarmls',
  'mls-pin',
]);

export function generateStaticParams() {
  return listMls()
    .filter((e) => !DEDICATED_PAGE_SLUGS.has(e.slug))
    .map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getMlsBySlug(slug);
  if (!entry) {
    return { title: 'MLS Not Found' };
  }
  return {
    title: `${entry.name} | MLS Integrations | DMR Media`,
    description: `MLS integration details for ${entry.name}. States: ${entry.states.join(', ')}. IDX vendors: ${entry.idxVendors.join(', ')}.`,
  };
}

export default async function MlsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getMlsBySlug(slug);

  if (!entry) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <section className="py-24 md:py-32 border-b border-[var(--color-ink-200)]">
        <div className="container-max">
          <Link
            href="/mls-integrations"
            className="text-xs uppercase tracking-[0.2em] text-[var(--color-off-black)] font-serif hover:opacity-60 transition-opacity mb-8 inline-block"
          >
            ← Back to MLS directory
          </Link>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[var(--color-off-black)] leading-[1.1] tracking-tight">
            {entry.name}
          </h1>
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-off-black)] font-serif mt-6 opacity-80">
            {entry.slug}
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-max max-w-3xl">
          <dl className="space-y-12">
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-[var(--color-off-black)] font-serif mb-3">
                States
              </dt>
              <dd className="text-[var(--color-off-black)] font-serif text-lg">
                {entry.states.join(', ')}
              </dd>
            </div>
            {entry.coverage && (
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-[var(--color-off-black)] font-serif mb-3">
                  Coverage
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif text-lg leading-relaxed">
                  {entry.coverage}
                </dd>
              </div>
            )}
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-[var(--color-off-black)] font-serif mb-3">
                IDX Vendors
              </dt>
              <dd className="text-[var(--color-off-black)] font-serif text-lg">
                {entry.idxVendors.join(', ')}
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-[var(--color-off-black)] font-serif mb-3">
                Cost
              </dt>
              <dd className="text-[var(--color-off-black)] font-serif text-lg">
                {entry.cost}
              </dd>
            </div>
            {entry.notes && (
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-[var(--color-off-black)] font-serif mb-3">
                  Note
                </dt>
                <dd className="text-[var(--color-off-black)] font-serif text-lg leading-relaxed">
                  {entry.notes}
                </dd>
              </div>
            )}
          </dl>

          {entry.links && entry.links.length > 0 && (
            <div className="mt-16 pt-12 border-t border-[var(--color-ink-200)]">
              <h2 className="text-xl font-serif font-light text-[var(--color-off-black)] mb-6 tracking-tight">
                Resources
              </h2>
              <ul className="space-y-3">
                {entry.links.map((link) => (
                  <li key={link.url}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--color-off-black)] font-serif hover:opacity-60 transition-opacity underline underline-offset-2"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
