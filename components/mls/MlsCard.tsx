import Link from 'next/link'
import { stateNames, type MlsEntry } from '@/data/mlsRegistry'

export interface MlsCardProps {
  entry: MlsEntry
}

export default function MlsCard({ entry }: MlsCardProps) {
  return (
    <Link
      href={`/mls-integrations/${entry.slug}`}
      className="group flex h-full flex-col justify-between gap-2 rounded-xl border border-[var(--color-ink-200)] bg-white p-5 shadow-[0_1px_0_rgba(15,15,15,0.04)] transition-all hover:-translate-y-0.5 hover:border-[var(--color-off-black)]/20 hover:shadow-[0_12px_32px_-14px_rgba(15,15,15,0.2)] motion-reduce:hover:translate-y-0"
    >
      <span className="font-serif text-[15px] leading-snug text-[var(--color-off-black)]">{entry.name}</span>
      <span className="font-serif text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-400)] group-hover:text-[var(--color-off-black)]">
        {stateNames(entry).join(', ')} · {entry.acronym} IDX →
      </span>
    </Link>
  )
}
