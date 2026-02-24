import { listMls } from '@/data/mlsRegistry';
import MlsDirectoryClient from '@/components/mls/MlsDirectoryClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MLS Integrations | DMR Media',
  description:
    'Browse MLS integrations supported by DMR Media. Filter by state, search by name or vendor.',
};

export default function MlsIntegrationsPage() {
  listMls();

  return (
    <div className="min-h-screen bg-white">
      <section className="py-24 md:py-32 border-b border-[var(--color-ink-200)]">
        <div className="container-max">
          <div className="max-w-3xl space-y-8">
            <span className="uppercase tracking-[0.2em] text-xs text-[var(--color-off-black)] font-serif">
              MLS Integrations
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[var(--color-off-black)] leading-[1.1] tracking-tight">
              Supported MLS systems
            </h1>
            <p className="text-base text-[var(--color-off-black)] max-w-2xl leading-relaxed font-serif">
              DMR Media supports integrations with multiple MLS systems across the
              US. Use the map to filter by state, or search by name or IDX vendor.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-max">
          <MlsDirectoryClient />
        </div>
      </section>
    </div>
  );
}
