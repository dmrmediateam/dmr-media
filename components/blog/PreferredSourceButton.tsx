import Image from 'next/image'

/**
 * Google "preferred sources" deeplink, styled for the blog hero (sits on a dark
 * image overlay). Readers who add DMR Media see our posts more often in Top
 * Stories and get a "preferred" badge on them.
 * Format: https://developers.google.com/search/docs/appearance/preferred-sources
 */
const PREFERRED_SOURCE_URL = 'https://www.google.com/preferences/source?q=dmrmedia.org'

export default function PreferredSourceButton({ className = '' }: { className?: string }) {
  return (
    <a
      href={PREFERRED_SOURCE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Add DMR Media as a preferred source on Google (opens in a new tab)"
      className={`group inline-flex min-h-[44px] items-center gap-3 rounded-full border border-white/35 bg-white/10 py-1.5 pl-1.5 pr-5 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/50 motion-reduce:hover:translate-y-0 ${className}`}
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white">
        <Image src="/images/Google__G__logo.svg.png" alt="" width={18} height={18} className="h-[18px] w-[18px]" />
      </span>
      <span className="font-serif text-[11px] uppercase tracking-[0.18em] !text-white sm:text-xs">
        Add DMR Media as a preferred source on Google
      </span>
    </a>
  )
}
