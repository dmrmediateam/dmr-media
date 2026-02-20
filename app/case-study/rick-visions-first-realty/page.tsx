import CaseStudyTemplate, { type CaseStudyData } from '@/components/CaseStudyTemplate'
import SEOWrapper from '@/components/SEOWrapper'
import { metadataFromRegistry } from '@/lib/content-registry'

export const metadata = metadataFromRegistry('/case-study/rick-visions-first-realty')

const caseStudyData: CaseStudyData = {
  title: 'Rick · Visions First Realty',
  subtitle:
    'We helped Rick transform his misaligned SEO strategy from ranking for discount furniture keywords to dominating luxury real estate searches, resulting in 2-3 qualified leads per day—all without a single dollar in ad spend.',
  heroImage: {
    src: '/images/RickAfter.png',
    alt: 'Rick keyword rankings dashboard',
  },
  stats: [
  { label: 'Qualified leads', value: '2–3 /day', detail: 'Organic only, no ads' },
  { label: 'Keyword realignment', value: '118 terms', detail: 'Rewritten within 60 days' },
  { label: 'Time to clarity', value: '8 weeks', detail: 'From audit to predictable calls' },
  ],
  sections: [
    {
      title: 'The Challenge: Ranking Everywhere But Where It Mattered',
      subtitle: 'The Problem',
      content: (
        <>
          <p>
            Rick had hired "SEO experts" before, and the results were frustrating. His site was ranking, but for all the wrong keywords. He showed up in search
            results for discount furniture stores, not luxury real estate services. Buyers searching for relocation help, move-up homes, or investment
            properties never saw him—even though he was the expert they needed.
          </p>
          <p>
            Traffic wasn't the issue. Positioning was. The wrong audience was finding him, and the right audience couldn't. Every lead that came through felt
            like a mismatch—bargain hunters instead of serious buyers and sellers ready to transact. Rick needed a complete reset of his search footprint, not
            just more traffic.
          </p>
        </>
      ),
    },
    {
      title: 'What We Discovered',
      subtitle: 'The Diagnosis',
      content: (
        <>
          <p>
            Our audit revealed three critical misalignments. First, Rick was targeting the wrong keywords entirely. His content and metadata were optimized for
            discount store searches instead of luxury real estate. Google was sending him traffic, but it was the wrong kind of traffic.
          </p>
          <p>
            Second, the audience was completely misaligned. The visitors arriving at his site were bargain hunters, not buyers and sellers ready to transact
            on high-value properties. This meant even when traffic increased, conversion rates stayed flat because the intent didn't match the service.
          </p>
          <p>
            Third, there was no conversion spine. Even when interested visitors did arrive, they had nowhere elegant to convert. The site lacked clear pathways
            for serious buyers to engage, and the messaging didn't speak to the luxury market Rick actually served.
          </p>
        </>
      ),
    },
    {
      title: 'How We Fixed the System',
      subtitle: 'The Solution',
      content: (
        <>
          <p>
            We obsessed over intent. Every keyword, every landing page, every call-to-action now speaks to serious buyers and sellers—and nothing else. We tore
            down the old SERP footprint and rebuilt it around relocation, move-up buyers, and investors. The entire keyword strategy was reset to align with
            Rick's actual service level.
          </p>
          <p>
            We built a local proof layer that reinforced Rick's authority. We dialed in his Google Business Profile, established a consistent review cadence,
            and created neighborhood long-form content that positioned him as the local expert. Every touchpoint now reinforces his expertise in the markets
            he serves.
          </p>
          <p>
            Finally, we created lead rituals that made every interaction feel bespoke. Daily reporting, follow-up scripts, and concierge routing ensure that
            every lead feels like it's coming from a luxury service provider, not a discount funnel. The system now works like an operating system that keeps
            Rick's search footprint pointed at closings, not just clicks.
          </p>
        </>
      ),
      image: {
        src: '/images/RickAfter.png',
        alt: 'Keyword rankings showing improvement',
        width: 800,
        height: 500,
      },
      imagePosition: 'right',
    },
    {
      title: 'The Process: Audit, Rebuild, Scale',
      subtitle: 'How We Did It',
      content: (
        <>
          <p>
            Phase one was a comprehensive audit. We identified every keyword, schema tag, and competitor outranking Rick for his own city. This forensic
            analysis revealed exactly where the misalignment was happening and what needed to change.
          </p>
          <p>
            Phase two was the rebuild. We rolled out new landing pages, listings hubs, and structured content tied to buyer intent. Every page was rewritten
            to speak to the right audience, with metadata and schema that told search engines exactly who Rick served and what problems he solved.
          </p>
          <p>
            Phase three was scale. We established a weekly experimentation cadence with new hooks, Google Business Profile posts, and CRM automations to keep
            volume steady. The goal was predictable, qualified lead flow—not just traffic spikes.
          </p>
        </>
      ),
    },
    {
      title: 'The Results: Daily Deal Flow Without Ad Spend',
      subtitle: 'What Rick Achieved',
      content: (
        <>
          <p>
            Within 60 days, we rewrote 118 keyword terms to align with Rick's actual service. Within 8 weeks, he was fielding 2-3 qualified inquiries every
            day—all organic, no ad spend required. But more importantly, the quality of those leads improved dramatically.
          </p>
          <p>
            Rick's team now knows exactly which keywords, reviews, and pieces of content triggered each call. The reporting is transparent, the strategy is
            clear, and the results speak for themselves. The search footprint now points at closings, not just clicks.
          </p>
          <p>
            The transformation wasn't just about rankings—it was about building a system that consistently delivers the right kind of leads. Rick went from
            ranking for the wrong searches to dominating the searches that matter, and the pipeline reflects that shift every single day.
          </p>
        </>
      ),
      image: {
        src: '/images/RickAfter.png',
        alt: 'Keyword rankings dashboard',
        width: 1200,
        height: 600,
      },
      imagePosition: 'full',
    },
  ],
  testimonial: {
    quote:
      'DMR Media delivered top rankings for real estate search terms, a higher volume of qualified leads, and transparent reporting the entire way.',
    author: 'Rick',
    role: 'Visions First Realty',
    image: '/images/RickReview.jpeg',
  },
  cta: {
    title: 'Need your SEO to talk to the right buyers?',
    description: "Let's reroute your traffic toward listings that convert. The playbook is ready; it just needs your market data.",
    primaryButton: {
      text: 'Fix my rankings',
      href: '/contact',
    },
    secondaryButton: {
      text: 'View services',
      href: '/services',
    },
  },
}

export default function RickCaseStudy() {
  return (
    <SEOWrapper slug="/case-study/rick-visions-first-realty" schemaType="article">
      <CaseStudyTemplate data={caseStudyData} />
    </SEOWrapper>
  )
}
