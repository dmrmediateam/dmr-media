import CaseStudyTemplate, { type CaseStudyData } from '@/components/CaseStudyTemplate'
import SEOWrapper from '@/components/SEOWrapper'
import { metadataFromRegistry } from '@/lib/content-registry'

export const metadata = metadataFromRegistry('/case-study/willow-brook-realty')

const caseStudyData: CaseStudyData = {
  title: 'Willow Brook Realty',
  subtitle:
    'From zero visibility to 46 leads in 3 weeks. We built a complete inbound foundation from the ground up, transforming Willow Brook Realty from a referral-only operation into a predictable lead generation engine across Vermont and New Hampshire.',
  heroImage: {
    src: '/images/WillowBrookTraffic.png',
    alt: 'Willow Brook Realty traffic and leads dashboard',
  },
  stats: [
    { label: 'Inbound leads', value: '46', detail: 'In 3 weeks (from 11)' },
    { label: 'Website traffic', value: '+920%', detail: 'Growth in first phase' },
    { label: 'New clients', value: '2', detail: '1 listing + 1 buyer client' },
    { label: 'Budget', value: '$5,000/mo', detail: 'Monthly investment' },
    { label: 'Status', value: 'Ongoing', detail: '4 months active' },
  ],
  sections: [
    {
      title: 'The Challenge: Zero Inbound System',
      subtitle: 'The Problem',
      content: (
        <>
          <p>
            Willow Brook Realty operated across Vermont and New Hampshire with strong local expertise but had virtually no inbound system. They had no meaningful Google visibility, no consistent lead flow, and were relying entirely on outbound efforts and referrals.
          </p>
          <p>
            There was no predictable way for buyers or sellers to discover them online, which made growth inconsistent and capped deal volume. Every lead required manual outreach, every listing depended on existing relationships, and there was no scalable system to capture the demand that already existed in their markets.
          </p>
          <p>
            The team needed a complete inbound foundation—not just a website, but a full system that would make them discoverable, credible, and easy to contact when motivated buyers and sellers were actively searching.
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
            Our audit revealed a complete absence of inbound infrastructure. The website had minimal SEO optimization, no Google Business Profile strategy, and zero paid advertising presence. When potential clients searched for real estate services in Vermont or New Hampshire, Willow Brook Realty simply didn't appear.
          </p>
          <p>
            The referral network was strong, but it wasn't scalable. The team was leaving money on the table by not capturing the search demand that existed in their markets. Every day, motivated buyers and sellers were searching for exactly what Willow Brook offered—but they couldn't find them.
          </p>
          <p>
            We also identified gaps in lead follow-up systems. Even if traffic arrived, there was no automated system to ensure every inquiry received immediate, consistent follow-up. The opportunity wasn't just visibility—it was turning visibility into conversations.
          </p>
        </>
      ),
    },
    {
      title: 'How We Built the System',
      subtitle: 'The Solution',
      content: (
        <>
          <p>
            We built a full inbound foundation from the ground up. The strategy had four core components: local SEO tailored to Vermont and New Hampshire markets, fully optimized Google Business Profiles for map pack visibility, targeted Google Ads to capture high-intent search traffic, and CRM automations to ensure every inquiry was followed up with speed and consistency.
          </p>
          <p>
            The local SEO strategy focused on location-specific, service-specific keywords that matched buyer and seller intent. We optimized every page for searches like "realtor near me," "real estate agent in [city]," and niche-specific searches that aligned with Willow Brook's expertise. This wasn't generic blog content—every page was written to rank and convert.
          </p>
          <p>
            Google Business Profile optimization became the fastest path to visibility. We optimized categories, services, descriptions, images, and posting strategy to help Willow Brook dominate the map pack. This is often the difference between being invisible and being the agent buyers and sellers call first.
          </p>
          <p>
            Targeted Google Ads filled the gaps while organic visibility built. We ran campaigns that captured high-intent search traffic, using paid media strategically to accelerate results and capture quality demand without relying on expensive portals or long-term contracts.
          </p>
          <p>
            Finally, we installed CRM automations that ensured every lead received immediate follow-up. The focus wasn't just traffic—it was turning visibility into real conversations. Every inquiry was routed, tracked, and nurtured automatically, so nothing fell through the cracks.
          </p>
        </>
      ),
      image: {
        src: '/images/WillowBrookLeads.png',
        alt: 'Willow Brook Realty leads dashboard showing growth',
        width: 800,
        height: 500,
      },
      imagePosition: 'right',
    },
    {
      title: 'The Process: Foundation, Launch, Scale',
      subtitle: 'How We Did It',
      content: (
        <>
          <p>
            Phase one was building the foundation. We implemented the local SEO strategy, optimized Google Business Profiles, and set up the CRM automation systems. This groundwork ensured that when traffic arrived, there was a system in place to convert it.
          </p>
          <p>
            Phase two was launching the paid campaigns. We launched targeted Google Ads to capture high-intent search traffic immediately, while the organic SEO foundation continued to build. This dual approach—paid acceleration plus organic growth—created a comprehensive lead generation system.
          </p>
          <p>
            Phase three was continuous optimization. We monitored performance, refined keyword targeting, optimized ad copy, and improved CRM follow-up sequences. The system wasn't just launched—it was continuously improved to maximize results.
          </p>
        </>
      ),
    },
    {
      title: 'The Results: From 11 to 46 Leads in 3 Weeks',
      subtitle: 'What Willow Brook Achieved',
      content: (
        <>
          <p>
            Within three weeks, inbound leads increased from 11 to 46—a dramatic shift driven by a sharp rise in Google visibility and search demand capture. Website traffic grew by 920% in the first phase of the campaign, proving that the inbound foundation was working.
          </p>
          <p>
            More importantly, those leads converted. In those same three weeks, Willow Brook Realty signed 2 new clients—1 listing client and 1 buyer client—real business outcomes from a system that didn't exist before. This wasn't just traffic or leads; it was actual clients ready to work with the team.
          </p>
          <p>
            Willow Brook Realty went from having no predictable inbound system to a measurable, repeatable lead engine that continues to scale month over month. The team now has a consistent flow of qualified leads that doesn't depend on referrals or manual outreach, and those leads are converting into new clients.
          </p>
          <p>
            The system works across multiple channels. Google Business Profile optimization drives map pack visibility, local SEO captures organic search traffic, and targeted Google Ads fill gaps and accelerate results. CRM automations ensure every lead is followed up with speed and consistency.
          </p>
          <p>
            This is an ongoing case study. As we continue to optimize the SEO strategy, refine the paid campaigns, and improve the CRM automations, we'll track performance and refine the system to maximize results for Willow Brook Realty.
          </p>
        </>
      ),
      image: {
        src: '/images/WillowBrookTraffic.png',
        alt: 'Willow Brook Realty traffic analytics showing 920% growth',
        width: 1200,
        height: 600,
      },
      imagePosition: 'full',
    },
  ],
  testimonial: {
    quote:
      "Andrew and Max are The Best! We've had an outstanding experience working with Andrew Rohm and Max Deleonardis at DMR Media. Their website management and search engine placement services have been exceptional. They are fast, reliable, and always provide smart, practical advice that truly makes a difference. Since partnering with them, our web traffic has increased tremendously, and we're seeing real results from their work. They are responsive, professional, and clearly experts in what they do. Highly recommend Andrew, Max, and the entire DMR Media team to anyone looking to grow their online presence!",
    author: 'Sandy Reavill',
    role: 'Woodstock, Vermont',
  },
  cta: {
    title: 'Ready to build your inbound foundation?',
    description:
      'We can help you go from zero visibility to predictable lead flow in weeks. The system is proven; it just needs your market.',
    primaryButton: {
      text: 'Schedule a consultation',
      href: '/contact',
    },
    secondaryButton: {
      text: 'View our services',
      href: '/services',
    },
  },
}

export default function WillowBrookRealtyCaseStudy() {
  return (
    <SEOWrapper slug="/case-study/willow-brook-realty" schemaType="article">
      <CaseStudyTemplate data={caseStudyData} />
    </SEOWrapper>
  )
}
