import Image from 'next/image'

type ServiceVariant = 'seo' | 'google-ads'

type Metro = {
  slug: string
  name: string
  state: string
  neighborhoods: string
  image: string
  imageAlt: string
  seoLead: string
  seoDetail: string
  adsLead: string
  adsDetail: string
}

const METROS: Metro[] = [
  {
    slug: 'new-york-ny',
    name: 'New York',
    state: 'NY',
    neighborhoods: 'Manhattan, Brooklyn, Queens, the Gold Coast pockets of Long Island, and Northern New Jersey luxury corridors.',
    image: '/images/Cities/NewYork.jpeg',
    imageAlt: 'New York City skyline at dusk',
    seoLead:
      'New York is one of the few U.S. markets where buyers routinely start on portals yet still search building names, co-op boards, and micro-neighborhoods in Google.',
    seoDetail:
      'We focus on entity-level clarity (agent, brokerage, development, and listing schema), internal linking that mirrors how people actually move from “neighborhood + price band” queries into listing funnels, and content that earns citations from local publishers and community sites, so you are not competing with yourself across dozens of thin location URLs.',
    adsLead:
      'Search costs are high and intent is fragmented between renters, investors, first-time buyers, and trophy-home seekers, often in the same zip code.',
    adsDetail:
      'We structure campaigns by intent stage and geography: tight radius around proven pockets, disciplined negatives for low-quality rental queries, and landing experiences that match the promise of the ad so Quality Score and conversion rate protect your CPL as you scale.',
  },
  {
    slug: 'los-angeles-ca',
    name: 'Los Angeles',
    state: 'CA',
    neighborhoods: 'Beverly Hills, Santa Monica, Pacific Palisades, Venice, Malibu, and the hillside communities where privacy and views drive search behavior.',
    image: '/images/Cities/macarthur-park-los-angeles-2024-10-11-08-12-47-utc.jpg',
    imageAlt: 'Los Angeles urban landscape',
    seoLead:
      'Los Angeles rewards specificity: canyon roads, view corridors, architectural pedigrees, and school districts all show up as distinct search clusters.',
    seoDetail:
      'Our SEO work maps those clusters to crawlable site architecture, neighborhood hubs that do not duplicate one another, and listing experiences that load fast on mobile, because a large share of luxury discovery still happens from the car, open house line, or showing schedule.',
    adsLead:
      'Paid search here competes with entertainment, auto, and travel advertisers, so efficient geo and audience layering matters as much as copy.',
    adsDetail:
      'We pair high-intent keyword sets with creative that reflects the actual inventory (not generic stock), use extensions and structured snippets to pre-qualify clicks, and rebid aggressively around open houses, new development releases, and seasonal second-home demand.',
  },
  {
    slug: 'chicago-il',
    name: 'Chicago',
    state: 'IL',
    neighborhoods: 'Gold Coast, Lincoln Park, River North, Streeterville, and the near suburbs where lakefront proximity defines premium pricing.',
    image: '/images/Cities/vibrant-sunny-view-of-chicago-downtown-skyline-und-2025-06-19-18-23-11-utc.jpg',
    imageAlt: 'Chicago downtown skyline',
    seoLead:
      'Chicago buyers compare lakefront towers, vintage walk-ups, and North Shore estates in parallel, which creates overlapping keyword spaces.',
    seoDetail:
      'We consolidate authority into a tight set of pillar pages and listing templates, use FAQ and neighborhood guides where they genuinely differentiate you, and avoid the trap of publishing near-identical “service + suburb” pages that cannibalize your own rankings.',
    adsLead:
      'Corporate relocations and mortgage-rate sensitivity can swing lead quality week to week.',
    adsDetail:
      'We monitor search terms for finance-driven tire-kickers, tune match types and audiences as the pipeline shifts, and align ad messaging with inventory you can actually service so sales teams see fewer “wrong product” conversations.',
  },
  {
    slug: 'houston-tx',
    name: 'Houston',
    state: 'TX',
    neighborhoods: 'River Oaks, Memorial, The Heights, Bellaire, and the master-planned communities where new construction competes directly with resale.',
    image: '/images/Cities/storms-over-downtown-houston-2024-10-17-13-05-58-utc.jpg',
    imageAlt: 'Houston downtown with dramatic sky',
    seoLead:
      'Houston’s sprawl means “near me” and highway-corridor intent dominate; map pack and organic often intersect for the same high-value phrases.',
    seoDetail:
      'We align GBP categories and on-site locality signals with the neighborhoods you truly cover, build project-level pages for developments that merit depth, and keep schema and crawl paths clean as communities launch new phases.',
    adsLead:
      'Large geographic footprints and rapid new supply can burn budget fast if campaigns are too broad.',
    adsDetail:
      'We anchor spend on proven ZIPs and communities, use ad customizers where inventory changes quickly, and feed offline outcomes back into bidding so Google’s automation is trained on real appointments, not just form fills.',
  },
  {
    slug: 'phoenix-az',
    name: 'Phoenix',
    state: 'AZ',
    neighborhoods: 'Paradise Valley, Scottsdale, Arcadia, Biltmore, and Camelback corridor communities where golf, views, and lock-and-leave product dominate.',
    image: '/images/Cities/phoenix-arizona-state-capitol-2025-03-13-12-59-21-utc.jpg',
    imageAlt: 'Phoenix Arizona cityscape',
    seoLead:
      'Phoenix combines snowbird seasonality, strong new construction, and a wide luxury band from patio homes to desert modern estates.',
    seoDetail:
      'We emphasize topical depth on the communities you want to own, connect editorial content to live inventory where it helps users, and structure internal links so seasonal guides and market commentary reinforce your core money pages instead of competing with them.',
    adsLead:
      'Second-home and relocation intent spikes in predictable windows; campaigns should flex budgets with heat and holidays, not run flat year-round.',
    adsDetail:
      'We schedule budget and bid adjustments around peak search curves, separate snowbird vs primary-residence messaging where data supports it, and route high-net-worth segments to landing paths that mirror the luxury positioning of your brand.',
  },
]

const INTROS: Record<
  ServiceVariant,
  { kicker: string; headline: string; body: string }
> = {
  seo: {
    kicker: 'Markets we serve',
    headline: 'SEO depth in the metros that define luxury search.',
    body: 'We work nationally, but we are deepest in high-competition markets where thin template pages fail and topical authority wins. Below is how we think about organic search: not a list of duplicate city landing pages, but the real dynamics of each region.',
  },
  'google-ads': {
    kicker: 'Markets we serve',
    headline: 'Paid search calibrated for competitive luxury corridors.',
    body: 'The same metro can require completely different account architecture depending on inventory, average sale price, and how buyers discover homes. Here is how we approach Google Ads in the markets where we spend the most time tuning accounts, not generic “local PPC” copy.',
  },
}

type ServiceMarketsSectionProps = {
  variant: ServiceVariant
}

export default function ServiceMarketsSection({ variant }: ServiceMarketsSectionProps) {
  const intro = INTROS[variant]

  return (
    <section
      id="markets-we-serve"
      className="py-32 bg-[var(--surface-base)] border-b border-[var(--color-ink-200)] scroll-mt-24"
    >
      <div className="container-max">
        <div className="max-w-3xl mb-16 md:mb-24">
          <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-ink-400)] font-serif mb-4">
            {intro.kicker}
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.1] mb-6">
            {intro.headline}
          </h2>
          <p className="text-sm text-[var(--color-ink-300)] leading-relaxed font-serif">{intro.body}</p>
        </div>

        <div className="space-y-20 md:space-y-28">
          {METROS.map((metro, index) => {
            const lead = variant === 'seo' ? metro.seoLead : metro.adsLead
            const detail = variant === 'seo' ? metro.seoDetail : metro.adsDetail
            const imageOnRight = index % 2 === 1

            return (
              <article
                key={metro.slug}
                id={`market-${metro.slug}`}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center scroll-mt-24"
              >
                <div
                  className={`relative min-h-[280px] sm:min-h-[340px] overflow-hidden bg-[var(--color-ink-200)] ${
                    imageOnRight ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <Image
                    src={metro.image}
                    alt={metro.imageAlt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className={imageOnRight ? 'lg:order-1' : 'lg:order-2'}>
                  <h3 className="text-2xl sm:text-3xl font-serif font-light text-[var(--color-off-black)] tracking-tight leading-[1.15] mb-4">
                    {metro.name}, {metro.state}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-ink-400)] font-serif mb-6">
                    Neighborhoods & corridors: {metro.neighborhoods}
                  </p>
                  <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7] mb-4">
                    {lead}
                  </p>
                  <p className="text-[15px] sm:text-base text-[var(--color-ink-300)] font-serif leading-[1.7]">
                    {detail}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
