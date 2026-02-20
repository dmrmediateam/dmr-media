import CaseStudyTemplate, { type CaseStudyData } from '@/components/CaseStudyTemplate'
import SEOWrapper from '@/components/SEOWrapper'
import { metadataFromRegistry } from '@/lib/content-registry'

export const metadata = metadataFromRegistry('/case-study/marquis-farwell-group')

const caseStudyData: CaseStudyData = {
  title: 'Marquis + Farwell Group',
  subtitle:
    'We helped Samantha Marquis and Linda Farwell transform their organic visibility in Sonoma County, growing from 2 clicks per day to 38 clicks per day while generating qualified buyer leads directly from search—all without relying on portals or paid leads.',
  heroImage: {
    src: '/images/MarquisFarwellGoogleSearchConsole.png',
    alt: 'Google Search Console showing organic growth for Marquis + Farwell Group',
  },
  stats: [
    { label: 'Daily organic clicks', value: '2 → 38', detail: '19x growth in daily clicks' },
    { label: 'Google Business interactions', value: '46 → 65', detail: '41% increase in one month' },
    { label: 'Primary market', value: 'Healdsburg', detail: 'Sonoma County, CA' },
    { label: 'Lead quality', value: 'High-intent', detail: '1031 exchange buyers' },
  ],
  sections: [
    {
      title: 'The Challenge: Invisible in Competitive Sonoma County',
      subtitle: 'The Problem',
      content: (
        <>
          <p>
            Samantha Marquis and Linda Farwell are founding agents at Marquis & Farwell Group, serving Healdsburg and Sonoma County—one of the most competitive
            luxury real estate markets in California. Despite their deep local expertise and strong relationships, they were nearly invisible where serious buyers
            were already searching.
          </p>
          <p>
            The external problem was clear: limited organic visibility in competitive Sonoma County searches. They were seeing low daily click volume from Google
            despite their strong local expertise. Heavy buyer activity was happening on platforms like Redfin without direct capture—buyers were finding properties
            but not finding them.
          </p>
          <p>
            Internally, SEO felt intimidating, technical, and unclear. They had difficulty knowing which keywords and communities actually mattered. There was
            uncertainty around what "good SEO" really looks like for real estate—especially in a market as competitive as Sonoma County.
          </p>
          <p>
            But the philosophical problem was the real issue: agents who know their market best should not be invisible online. Local expertise deserves local
            search dominance. Samantha and Linda had the knowledge, the relationships, and the service level—they just needed to be found where buyers were
            already looking.
          </p>
        </>
      ),
    },
    {
      title: 'The Goal: Own High-Intent Local Searches',
      subtitle: 'What They Needed',
      content: (
        <>
          <p>
            The goal was straightforward but ambitious: become visible where serious buyers already search. They needed to own high-intent local and
            community-specific keywords. Most importantly, they wanted to generate organic leads without relying on portals or paid leads.
          </p>
          <p>
            This wasn't about vanity metrics or ranking for every possible term. It was about strategic visibility—showing up when buyers were actively searching
            for properties in Healdsburg, Montage Residences, and the surrounding Sonoma County communities where Samantha and Linda had deep expertise.
          </p>
          <p>
            The strategy needed to be simple, clear, and tied directly to business outcomes. No jargon, no confusion—just a system that made them visible to the
            right buyers at the right time.
          </p>
        </>
      ),
    },
    {
      title: 'Why DMR Media: Clear Communication and Immediate Value',
      subtitle: 'The Guide',
      content: (
        <>
          <p>
            Samantha and Linda interviewed several SEO companies before meeting with DMR Media. After each interview, they walked away feeling like they had to
            think about it. This was absolutely not the case with DMR.
          </p>
          <p>
            From the start, they knew DMR Media was the right fit. They were thoroughly impressed with our knowledge, our willingness to give them tips immediately,
            and our easy communication style. SEO can be intimidating and daunting, but DMR holds your hand, answers your questions, and has great follow through.
          </p>
          <p>
            The authority signals were clear: real estate–specific SEO frameworks, immediate actionable advice in the first meeting, and a clear roadmap tied to
            business outcomes—not vanity metrics. We gave value before a contract was ever signed, which showed Samantha and Linda exactly how we work.
          </p>
          <p className="italic text-[var(--color-ink-300)] mt-4">
            "From the start, we knew their company was the right fit."
            <br />
            <span className="not-italic">— Sam Marquis, Founding Agent</span>
          </p>
        </>
      ),
    },
    {
      title: 'The Plan: Simple, Strategic, Repeatable',
      subtitle: 'The Solution',
      content: (
        <>
          <p>
            We built a three-step system that was simple, strategic, and repeatable. Step one was targeting the right searches. We shifted focus to strategic,
            high-intent keywords and prioritized community-specific searches. For example, we optimized for "Montage Residences Healdsburg" and built SEO around how
            real buyers actually search—not how we thought they should search.
          </p>
          <p>
            Step two was strengthening blue-link SEO. We optimized pages for traditional organic rankings, improved topical relevance for Healdsburg and
            surrounding communities, and increased indexed visibility in Google Search Console. Every page now serves a dual purpose: ranking for the right searches
            and guiding readers toward conversion.
          </p>
          <p>
            Step three was optimizing their Google Business Profile. We added high-quality, location-relevant images, created consistent posts and product entries,
            and strengthened local engagement signals. Every touchpoint now reinforces their expertise in the markets where they're legendary.
          </p>
        </>
      ),
      image: {
        src: '/images/MarquisFarwellTrafficDistrubution.png',
        alt: 'Traffic channels and device data showing organic growth',
        width: 1200,
        height: 600,
      },
      imagePosition: 'right',
    },
    {
      title: 'The Results: 19x Growth in Daily Clicks',
      subtitle: 'What Marquis + Farwell Achieved',
      content: (
        <>
          <p>
            The results were immediate and measurable. Organic search growth exploded: from 2 clicks per day to 38 clicks per day—a 19x increase. This wasn't
            just more traffic; it was the right traffic. Buyers searching for Healdsburg properties, Montage Residences, and Sonoma County communities were now
            finding Samantha and Linda.
          </p>
          <p>
            Google Business Profile engagement grew significantly: from 46 interactions to 65 interactions in just one month—a 41% increase. This increased
            visibility in local Healdsburg searches meant more direct discovery without paid ads. Buyers were finding them organically, not through portals.
          </p>
          <p>
            But the real win was lead generation. They started generating real buyer inquiries directly from organic traffic. One example: a buyer interested in
            two properties, with a 1031 exchange and an identifying deadline, who fully opted in with name, phone, and email. This wasn't a portal lead or a paid
            click—this was a qualified buyer who found them through search.
          </p>
        </>
      ),
      image: {
        src: '/images/MarquisFarwellGoogleSearchConsole.png',
        alt: 'Google Search Console showing 2 to 38 clicks per day growth',
        width: 1200,
        height: 800,
      },
      imagePosition: 'full',
    },
    {
      title: 'The Stakes: Capture Demand Instead of Chasing It',
      subtitle: 'Why This Matters',
      content: (
        <>
          <p>
            Without a clear SEO strategy, buyers stay on Redfin and portals. Local agents miss high-intent opportunities. Visibility is handed to whoever shows up
            first—not necessarily who knows the market best.
          </p>
          <p>
            With the right SEO foundation, agents capture demand instead of chasing it. Organic traffic compounds over time. Leads arrive already informed and
            motivated—they've done their research, they know what they want, and they're ready to work with someone who understands their market.
          </p>
          <p>
            For Samantha and Linda, this transformation meant they could focus on what they do best: serving clients with deep local expertise. The SEO system
            works in the background, making them visible to the right buyers at the right time, without the constant pressure of paid leads or portal
            dependency.
          </p>
        </>
      ),
    },
    {
      title: 'The Transformation: Before vs After',
      subtitle: 'What Changed',
      content: (
        <>
          <p>
            Before DMR Media, Marquis + Farwell Group had minimal daily organic traffic—just 2 clicks per day. They had an unclear SEO strategy and SEO felt
            overwhelming and opaque. They were invisible where buyers were searching, despite having the expertise and service level to serve those buyers
            exceptionally well.
          </p>
          <p>
            After DMR Media, they have consistent organic click growth—38 clicks per day, a 19x increase. Google Business engagement increased by 41% in one month.
            They're generating qualified buyer leads from search, including high-intent buyers with specific needs like 1031 exchanges.
          </p>
          <p>
            Most importantly, they now have confidence in how SEO works and why it works. SEO no longer feels intimidating or opaque. They understand the strategy,
            they see the results, and they know exactly how the system is working for their business.
          </p>
        </>
      ),
      image: {
        src: '/images/MarquisFarwellLead.png',
        alt: 'Example lead showing 1031 exchange buyer inquiry',
        width: 800,
        height: 500,
      },
      imagePosition: 'right',
    },
  ],
  testimonial: {
    quote:
      "SEO can be intimidating and daunting, but DMR holds your hand, answers your questions, and has great follow through. We never feel uncomfortable asking questions and they never make us feel less-than. Every bit of the process we have been through with them thus far has been exceptional. We highly recommend them.",
    author: 'Samantha Marquis',
    role: 'Founding Agent, Marquis + Farwell Group',
    image: '/images/SamMarquisReview.png',
  },
  secondaryTestimonial: {
    quote:
      "Once we met with Andrew at DMR, it was a done deal. In one meeting he not only presented himself in clear, easy to understand terms, but was very patient with us in explaining how all this works. He also gave us instant tips without even knowing if we were going to use him. Once we hung up, we cancelled all the other meetings and decided to go with DMR.",
    author: 'Linda Farwell',
    role: 'Founding Agent, Marquis + Farwell Group',
    image: '/images/LindaFarwellReview.png',
  },
  cta: {
    title: 'Ready to become visible where serious buyers already search?',
    description:
      'If buyers are already searching for your communities, the only question is whether they find you or someone else. We can help you own high-intent local keywords and generate organic leads without relying on portals or paid leads.',
    primaryButton: {
      text: 'Book a Strategy Call',
      href: '/contact',
    },
    secondaryButton: {
      text: 'See How SEO Works for Your Market',
      href: '/services',
    },
  },
}

export default function MarquisFarwellCaseStudy() {
  return (
    <SEOWrapper slug="/case-study/marquis-farwell-group" schemaType="article">
      <CaseStudyTemplate data={caseStudyData} />
    </SEOWrapper>
  )
}

