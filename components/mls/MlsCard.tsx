import Link from 'next/link';
import type { MlsEntry } from '@/data/mlsRegistry';

export interface MlsCardProps {
  entry: MlsEntry;
}

export default function MlsCard({ entry }: MlsCardProps) {
  return (
    <Link
      href={`/mls-integrations/${entry.slug}`}
      className="group block border-b border-[var(--color-ink-200)] pb-12 hover:opacity-60 transition-opacity duration-300"
    >
      <h3 className="text-2xl font-serif font-light text-[var(--color-off-black)] leading-snug mb-4">
        {entry.name}
      </h3>
      <div className="flex flex-wrap gap-2 text-sm text-[var(--color-off-black)] font-serif">
        <span>{entry.states.join(', ')}</span>
        <span>·</span>
        <span>{entry.cost}</span>
      </div>
      {entry.idxVendors.length > 0 && entry.idxVendors[0] !== 'Unknown' && (
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-off-black)] font-serif mt-4">
          IDX: {entry.idxVendors.slice(0, 3).join(', ')}
          {entry.idxVendors.length > 3 && '…'}
        </p>
      )}
      <span className="mt-6 inline-block text-xs uppercase tracking-[0.2em] text-[var(--color-off-black)] font-serif">
        View details
      </span>
    </Link>
  );
}
