import type { CaseStudyData } from '@/types/case-study'

export const rickVisionsData: CaseStudyData = {
  slug: 'rick-visions-first-realty',
  client: 'Rick · Visions First Realty',
  location: 'New Jersey',
  market: 'New Jersey',
  status: 'Ongoing',
  seo: {
    title: 'Rick Visions First Realty — 2–3 Qualified Leads/Day, Zero Ad Spend | DMR Media',
    description:
      'DMR Media realigned Rick\'s SEO from discount furniture keywords to luxury real estate. 118 terms rewritten in 60 days. 2–3 qualified leads per day—all organic, no ad spend.',
    canonical: 'https://www.dmrmedia.org/case-study/rick-visions-first-realty',
    ogImage: '/images/RickAfter.png',
    datePublished: '2025-02-01',
    dateModified: '2026-03-17',
  },
  hero: {
    image: '/images/RickAfter.png',
    imageAlt: 'Rick keyword rankings dashboard — DMR Media New Jersey',
    subtitle:
      "We helped Rick transform his misaligned SEO strategy from ranking for discount furniture keywords to dominating luxury real estate searches, resulting in 2-3 qualified leads per day—all without a single dollar in ad spend.",
  },
  metrics: [
    { number: '2–3/day', label: 'Qualified leads', context: 'Organic only, no ads' },
    { number: '118', label: 'Keyword terms', context: 'Rewritten within 60 days' },
    { number: '8 weeks', label: 'Time to clarity', context: 'From audit to predictable calls' },
  ],
  reviews: [
    {
      text: "DMR Media delivered top rankings for real estate search terms, a higher volume of qualified leads, and transparent reporting the entire way.",
      author: 'Rick',
      role: 'Visions First Realty',
      image: '/images/RickReview.jpeg',
    },
  ],
  sections: [
    {
      id: 'the-problem',
      eyebrow: 'The Problem',
      headline: 'The Challenge: Ranking Everywhere But Where It Mattered',
      body: [
        `Rick had hired "SEO experts" before, and the results were frustrating. His site was ranking, but for all the wrong keywords. He showed up in search results for discount furniture stores, not luxury real estate services. Buyers searching for relocation help, move-up homes, or investment properties never saw him—even though he was the expert they needed.`,
        `Traffic wasn't the issue. Positioning was. The wrong audience was finding him, and the right audience couldn't. Every lead that came through felt like a mismatch—bargain hunters instead of serious buyers and sellers ready to transact. Rick needed a complete reset of his search footprint, not just more traffic.`,
      ],
    },
    {
      id: 'the-diagnosis',
      eyebrow: 'The Diagnosis',
      headline: 'What We Discovered',
      body: [
        `Our audit revealed three critical misalignments. First, Rick was targeting the wrong keywords entirely. His content and metadata were optimized for discount store searches instead of luxury real estate. Google was sending him traffic, but it was the wrong kind of traffic.`,
        `Second, the audience was completely misaligned. The visitors arriving at his site were bargain hunters, not buyers and sellers ready to transact on high-value properties. This meant even when traffic increased, conversion rates stayed flat because the intent didn't match the service.`,
        `Third, there was no conversion spine. Even when interested visitors did arrive, they had nowhere elegant to convert. The site lacked clear pathways for serious buyers to engage, and the messaging didn't speak to the luxury market Rick actually served.`,
      ],
    },
    {
      id: 'the-solution',
      eyebrow: 'The Solution',
      headline: 'How We Fixed the System',
      body: [
        `We obsessed over intent. Every keyword, every landing page, every call-to-action now speaks to serious buyers and sellers—and nothing else. We tore down the old SERP footprint and rebuilt it around relocation, move-up buyers, and investors. The entire keyword strategy was reset to align with Rick's actual service level.`,
        `We built a local proof layer that reinforced Rick's authority. We dialed in his <a href="/seo-optimization">Google Business Profile</a>, established a consistent review cadence, and created neighborhood long-form content that positioned him as the local expert. Every touchpoint now reinforces his expertise in the markets he serves.`,
        `Finally, we created lead rituals that made every interaction feel bespoke. Daily reporting, follow-up scripts, and concierge routing ensure that every lead feels like it's coming from a luxury service provider, not a discount funnel. The system now works like an operating system that keeps Rick's search footprint pointed at closings, not just clicks.`,
      ],
      screenshot: {
        src: '/images/RickAfter.png',
        alt: 'Keyword rankings showing improvement — Rick Visions First Realty DMR Media',
      },
    },
    {
      id: 'how-we-did-it',
      eyebrow: 'How We Did It',
      headline: 'The Process: Audit, Rebuild, Scale',
      body: [],
      phases: [
        {
          label: 'Phase 01',
          name: 'Audit',
          body: "We identified every keyword, schema tag, and competitor outranking Rick for his own city. This forensic analysis revealed exactly where the misalignment was happening and what needed to change.",
        },
        {
          label: 'Phase 02',
          name: 'Rebuild',
          body: "We rolled out new landing pages, listings hubs, and structured content tied to buyer intent. Every page was rewritten to speak to the right audience, with metadata and schema that told search engines exactly who Rick served and what problems he solved.",
        },
        {
          label: 'Phase 03',
          name: 'Scale',
          body: "We established a weekly experimentation cadence with new hooks, Google Business Profile posts, and CRM automations to keep volume steady. The goal was predictable, qualified lead flow—not just traffic spikes.",
        },
      ],
    },
    {
      id: 'results',
      eyebrow: 'What Rick Achieved',
      headline: 'The Results: Daily Deal Flow Without Ad Spend',
      body: [
        `Within 60 days, we rewrote 118 keyword terms to align with Rick's actual service. Within 8 weeks, he was fielding 2-3 qualified inquiries every day—all organic, no ad spend required. But more importantly, the quality of those leads improved dramatically.`,
        `Rick's team now knows exactly which keywords, reviews, and pieces of content triggered each call. The <a href="/analytics-reporting">reporting</a> is transparent, the strategy is clear, and the results speak for themselves. The search footprint now points at closings, not just clicks.`,
        `The transformation wasn't just about rankings—it was about building a system that consistently delivers the right kind of leads. Rick went from ranking for the wrong searches to dominating the searches that matter, and the pipeline reflects that shift every single day.`,
      ],
      screenshot: {
        src: '/images/RickAfter.png',
        alt: 'Keyword rankings dashboard — Rick Visions First Realty DMR Media',
      },
    },
  ],
}
