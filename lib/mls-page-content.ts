import type { MlsEntry, StateInfo } from '@/data/mlsRegistry'

export type Faq = { question: string; answer: string }

export function formatList(items: string[]): string {
  if (items.length <= 1) return items[0] ?? ''
  if (items.length === 2) return `${items[0]} and ${items[1]}`
  return `${items.slice(0, -1).join(', ')}, and ${items[items.length - 1]}`
}

export function mlsFeatures(entry: MlsEntry) {
  const k = entry.keyword
  return [
    {
      title: `Live, searchable ${k} listings`,
      body: `Buyers search current ${entry.acronym} inventory by price, beds, baths, and area without leaving your site, with listings refreshed automatically from the feed.`,
    },
    {
      title: 'Map search and saved searches',
      body: 'Map-based browsing, saved searches, and new-listing alerts keep buyers coming back to your site instead of a portal.',
    },
    {
      title: 'Lead capture into your CRM',
      body: 'Registration prompts and showing requests go straight to your CRM. Nobody else gets a copy of the lead.',
    },
    {
      title: 'Featured and sold listings',
      body: `Put your own ${entry.acronym} listings and sold history up front, so sellers see what you've closed before they call.`,
    },
    {
      title: 'Community and neighborhood pages',
      body: 'SEO-built pages for the neighborhoods you serve, each pulling the matching listings so they rank and convert.',
    },
    {
      title: 'MLS-compliant display',
      body: `Disclaimers, broker attribution, and display rules set up to ${entry.acronym}'s requirements before launch.`,
    },
  ]
}

export function mlsSteps(entry: MlsEntry) {
  return [
    {
      title: 'Kickoff and broker sign-off',
      body: `We confirm your ${entry.acronym} membership and get the IDX agreement in front of your managing broker.`,
    },
    {
      title: 'IDX Broker feed approval',
      body: `We set up IDX Broker and request your ${entry.acronym} feed. The MLS sets the approval timeline.`,
    },
    {
      title: 'Design and build',
      body: 'Your custom site is built around your brand and market, with search, listings, and lead capture wired in.',
    },
    {
      title: 'Launch and lead routing',
      body: 'We go live, test every form into your CRM, and hand you our follow-up scripts so leads turn into appointments.',
    },
  ]
}

export function mlsFaqs(entry: MlsEntry, where: string): Faq[] {
  const a = entry.acronym
  const k = entry.keyword
  return [
    {
      question: `Can I put ${k} listings on my real estate website?`,
      answer: `Yes. IDX Broker covers ${entry.name}, and we connect ${a} IDX on every site we build for agents, teams, and brokerages in ${where}. Buyers search live ${a} listings on your site and register directly with you.`,
    },
    {
      question: `Do I need broker approval for ${a} IDX?`,
      answer: `Usually, yes. Most MLSs, including ${a}, issue IDX feeds through the broker of record, so your managing broker signs the IDX agreement. We prepare the paperwork and handle the request with IDX Broker.`,
    },
    {
      question: `How long does it take to get ${a} IDX live?`,
      answer: `Feed approval is set by ${a} and often takes a few business days to a couple of weeks once your broker signs. We design and build your site in parallel, so approval rarely delays launch.`,
    },
    {
      question: `What does a ${k} IDX website cost?`,
      answer: `DMR websites start at $2,500 (templated), $3,500 (semi-custom), or $8,500 (fully custom), plus a $650 per 4 weeks retainer. IDX Broker's subscription and any ${a} IDX fee are billed separately by those providers.`,
    },
    {
      question: `Can you add ${a} IDX to my existing website?`,
      answer: `IDX Broker works with most website platforms, so in many cases we can. If your current site isn't generating leads, we'll recommend a rebuild instead, because the 14-day qualified-lead guarantee only comes with a DMR site.`,
    },
  ]
}

export function stateFaqs(state: StateInfo, entries: MlsEntry[]): Faq[] {
  const top = entries.slice(0, 4).map((e) => e.acronym)
  return [
    {
      question: `Which ${state.name} MLSs does DMR integrate with?`,
      answer: `All ${entries.length} ${state.name} MLSs covered by IDX Broker, including ${formatList(top)}. Find yours in the list on this page.`,
    },
    {
      question: `How do I get ${state.name} MLS listings on my website?`,
      answer: `Through an IDX feed. DMR builds your website, sets up IDX Broker, and requests your MLS's IDX feed with your managing broker's sign-off.`,
    },
    {
      question: `What if I belong to more than one ${state.name} MLS?`,
      answer: 'IDX Broker can combine feeds from multiple MLSs on one site, so buyers search every listing you can show in one place.',
    },
    {
      question: `What does an IDX website cost in ${state.name}?`,
      answer:
        'DMR websites start at $2,500, $3,500, or $8,500 depending on the tier, plus a $650 per 4 weeks retainer. IDX Broker and MLS IDX fees are billed separately.',
    },
  ]
}
