import Image from 'next/image'
import Link from 'next/link'
import SEOWrapper from '@/components/SEOWrapper'
import { metadataFromRegistry } from '@/lib/content-registry'

export const metadata = metadataFromRegistry('/case-studies')


const caseStudies = [
  {
    id: 'willow-brook-realty',
    title: 'Willow Brook Realty',
    eyebrow: 'Inbound Foundation',
    result: '2 Clients / 3 Weeks',
    image: '/images/WillowBrookTraffic.png',
    description:
      'From zero visibility to 46 leads and 2 new clients (1 listing + 1 buyer) in 3 weeks. Built a complete inbound foundation with local SEO, Google Business Profile optimization, and targeted ads across Vermont and New Hampshire.',
    tags: ['Local SEO', 'Google Business Profile', 'Google Ads', 'CRM Automation'],
  },
  {
    id: 'eagan-luxury-real-estate',
    title: 'Eagan Luxury Real Estate',
    eyebrow: 'Website Consolidation',
    result: 'Ongoing',
    image: '/images/screencapture-eaganluxury-2025-12-17-21_25_49.png',
    description:
      'Consolidated multiple fragmented websites into a single, powerful brand presence—launched December 17th with 0 measurable ranking loss and 10% keyword increase. Currently redirecting legacy sites and running retargeting campaigns.',
    tags: ['Website Build', 'SEO Preservation', '301 Redirects', 'Ongoing'],
  },
  {
    id: 'jade-legendary-real-estate',
    title: 'Jade Legendary Real Estate',
    eyebrow: 'Lead Engine Rebuild',
    result: '3x Leads in 90 Days',
    image: '/images/JadeCRM.png',
    description:
      "Tripled inbound pipeline for a boutique broker by rebuilding her search footprint and automations around the way luxury buyers actually shop.",
    tags: ['Content Architecture', 'Local SEO', 'Automation'],
  },
  {
    id: 'michael-seo-transformation',
    title: 'Michael SEO Cliff Notes',
    eyebrow: 'Modern IDX Relaunch',
    result: '21x Search Impressions',
    image: '/images/MichealTraffic.png',
    description:
      'Turned a templated IDX site into a modern journal-driven experience that pulls in intent-rich keywords and nurtures them automatically.',
    tags: ['WordPress Rebuild', 'Thought Leadership', 'YouTube'],
  },
  {
    id: 'marquis-farwell-group',
    title: 'Marquis + Farwell Group',
    eyebrow: 'Organic Visibility',
    result: '19x Daily Clicks',
    image: '/images/MarquisFarwellGoogleSearchConsole.png',
    description:
      'Transformed organic visibility in Sonoma County, growing from 2 clicks per day to 38 clicks per day while generating qualified buyer leads directly from search—all without relying on portals or paid leads.',
    tags: ['Local SEO', 'Google Business Profile', 'Organic Growth'],
  },
]

const trustSignals = [
  { label: 'Average lift in organic leads', value: '214%' },
  { label: 'Launch timeline for full rebuilds', value: '6–9 weeks' },
  { label: 'Markets activated in 2024', value: '18' },
]

export default function CaseStudiesPage() {
  return (
    <SEOWrapper slug="/case-studies">
    <div className="min-h-screen bg-white">
      <section className="py-24 md:py-32 border-b border-[var(--color-ink-200)]">
        <div className="container-max">
          <div className="max-w-3xl space-y-8">
            <span className="uppercase tracking-[0.2em] text-xs text-[var(--color-ink-300)] font-serif">
              case studies
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-[var(--color-off-black)] leading-[1.1] tracking-tight">
              Luxury real estate growth stories
            </h1>
            <p className="text-base text-[var(--color-ink-300)] max-w-2xl leading-relaxed font-serif">
              Every engagement is a bespoke sprint. The structure is consistent—research, rebuild, relentless iteration—but
              the look, feel, and commercial outcome are tailored to the brokerage, the market, and the listings they deserve.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-12">
            {trustSignals.map((signal) => (
              <div
                key={signal.label}
                className="border-b border-[var(--color-ink-200)] pb-8"
              >
                <div className="text-3xl font-serif font-light text-[var(--color-off-black)] mb-4">{signal.value}</div>
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-ink-300)] font-serif">{signal.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-max space-y-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {caseStudies.map((study) => (
              <Link
                key={study.id}
                href={`/case-study/${study.id}`}
                className="group border-b border-[var(--color-ink-200)] pb-12 hover:opacity-60 transition-opacity duration-300 flex flex-col"
              >
                <div className="flex items-center justify-between gap-6 mb-6">
                  <span className="uppercase tracking-[0.2em] text-xs text-[var(--color-ink-300)] font-serif">{study.eyebrow}</span>
                  <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-off-black)] font-serif">
                    {study.result}
                  </span>
                </div>

                <h3 className="text-2xl font-serif font-light text-[var(--color-off-black)] leading-snug mb-6">{study.title}</h3>

                <p className="text-sm text-[var(--color-ink-300)] leading-relaxed font-serif mb-6">{study.description}</p>

                <div className="flex flex-wrap gap-4 mb-8">
                  {study.tags.map((tag) => (
                    <span key={tag} className="text-xs uppercase tracking-[0.2em] text-[var(--color-ink-300)] font-serif">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="relative aspect-[16/9] overflow-hidden mb-6">
                  <Image src={study.image} alt={study.title} fill className="object-cover" />
                </div>

                <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-off-black)] font-serif">
                  Read the story
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
    </SEOWrapper>
  )
}
