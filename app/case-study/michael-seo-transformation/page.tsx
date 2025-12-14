import CaseStudyTemplate, { type CaseStudyData } from '@/components/CaseStudyTemplate'

const caseStudyData: CaseStudyData = {
  title: 'Michael · SEO Transformation',
  subtitle:
    'We helped Michael transform his silent IDX template into a modern, data-driven website that generates 21x more search impressions and 312% more organic sessions—all while maintaining the premium brand experience his multimillion-dollar clients expect.',
  heroImage: {
    src: '/images/MichealTraffic.png',
    alt: 'Michael SEO traffic analytics dashboard',
  },
  stats: [
  { label: 'Search impressions', value: '21x', detail: '7.5 weeks after relaunch' },
  { label: 'Organic sessions', value: '+312%', detail: 'Year-over-year swing vs. template site' },
  { label: 'Build timeline', value: '6 weeks', detail: 'From discovery to launch-ready WordPress' },
  ],
  sections: [
    {
      title: 'The Challenge: A Ghost Town in Search Results',
      subtitle: 'The Problem',
      content: (
        <>
          <p>
            Michael was selling multimillion-dollar homes, but his website told a different story. His IDX template site was invisible to search engines—no
            metadata discipline, nothing indexable, nothing that proved he was a luxury real estate professional. When he did manage to attract traffic, visitors
            landed on squeeze pages that screamed discount lead generation, not premium service.
          </p>
          <p>
            The site looked like everyone else's template, and the results matched: zero organic visibility, no qualified leads, and a brand presence that
            undermined his reputation. Michael needed a complete transformation—not just a redesign, but a fundamental rebuild of how his business appeared
            online.
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
            Our forensic audit revealed three critical failures. First, the site suffered from template paralysis—a generic KVcore shell with no indexing plan
            or sitemap hygiene. Google couldn't find or understand the content, so it simply didn't rank.
          </p>
          <p>
            Second, the SEO foundation was completely abandoned. Zero schema markup, zero internal linking strategy, zero topical authority. The site had no
            structure for search engines to understand what Michael actually did or who he served.
          </p>
          <p>
            Third, every conversion point felt like a discount funnel. The messaging, design, and user experience screamed "cheap lead gen" rather than "luxury
            real estate advisor." This misalignment meant that even when traffic arrived, it wasn't the right kind of traffic—and those visitors didn't convert
            because the experience didn't match Michael's actual service level.
          </p>
        </>
      ),
    },
    {
      title: 'How We Rebuilt Everything',
      subtitle: 'The Solution',
      content: (
        <>
          <p>
            We didn't just redesign the site—we rebuilt the entire marketing system from the ground up. Every artifact needed a new point of view: the
            website, SEO strategy, CRM integrations, and even the video content. We started with architecture, layered in irresistible copy, and then taught
            the automations to sound like a high-end advisor.
          </p>
          <p>
            The modern WordPress rebuild became the foundation. We rebuilt every URL with tailored layouts, comprehensive schema markup, and lightning-fast
            Core Web Vitals. The site now loads in under two seconds and provides search engines with crystal-clear signals about Michael's expertise and
            market focus.
          </p>
          <p>
            We built a thought-leadership engine with an editorial calendar anchored on relocation, investment, and micro-neighborhood queries. Every piece of
            content now serves a dual purpose: answering the questions high-net-worth buyers ask while establishing Michael as the authority in his market.
          </p>
          <p>
            Finally, we created an automated nurture system that feels personal. Video walkthroughs, IDX alerts, and concierge SMS flows trigger based on
            on-site behavior, not generic timers. Every touchpoint now reinforces the premium brand experience.
          </p>
        </>
      ),
      image: {
        src: '/images/MichealTraffic.png',
        alt: 'SEO analytics showing traffic growth',
        width: 800,
        height: 500,
      },
      imagePosition: 'right',
    },
    {
      title: 'The Process: From Forensics to Momentum',
      subtitle: 'How We Did It',
      content: (
        <>
          <p>
            Phase one was forensics. We crawled the old IDX stack, surfaced every technical debt issue, and mapped every break point. This comprehensive audit
            gave us a complete picture of what needed to change and why the current system was failing.
          </p>
          <p>
            Phase two was the rebuild. We created a custom WordPress experience with bespoke landing pages and a search-friendly information architecture. Every
            page was designed with both user experience and search engine optimization in mind. The content strategy was built around buyer intent, not keyword
            stuffing.
          </p>
          <p>
            Phase three was momentum. We established a weekly experimentation cadence with backlinks, YouTube content hooks, and newsletter integrations. The
            goal wasn't just to launch a new site—it was to create a system that continuously improves and adapts to market changes.
          </p>
        </>
      ),
    },
    {
      title: 'The Results: 21x More Visibility',
      subtitle: 'What Michael Achieved',
      content: (
        <>
          <p>
            Seven weeks after launch, the data told the story. Search impressions increased 21x. Organic sessions jumped 312% year-over-year. But more
            importantly, the quality of those sessions improved dramatically. Visitors now arrive looking for luxury real estate services, not discount
            furniture.
          </p>
          <p>
            Every dashboard, every call, every follow-up is now scripted to feel premium. Michael's team knows exactly what to publish each week and what data
            proves it's working. The weekly reporting makes it impossible to ignore the progress—even Michael, who's camera shy, recorded a testimonial video
            because the results were that obvious.
          </p>
          <p>
            The site now behaves like a modern magazine while functioning as a high-converting lead generation engine. The brand experience matches the service
            level, and the data matches the way Michael works: calm, confident, and modern.
          </p>
        </>
      ),
      image: {
        src: '/images/MichealTraffic.png',
        alt: 'Traffic analytics dashboard showing growth',
        width: 1200,
        height: 600,
      },
      imagePosition: 'full',
    },
  ],
  testimonial: {
    quote:
      'Despite being camera shy, I recorded a testimonial because the lead flow spoke for itself. The weekly updates made it impossible to ignore the progress.',
    author: 'Michael',
    role: 'Real Estate Professional',
    video: {
      src: 'https://www.youtube.com/embed/ng_7ysEAlkc',
      title: 'Michael on camera',
    },
  },
  cta: {
    title: 'Want your IDX to feel like a flagship magazine?',
    description: 'We can rebuild the entire experience and have Google, YouTube, and your CRM humming in less than two months.',
    primaryButton: {
      text: 'Start the rebuild',
      href: '/contact',
    },
    secondaryButton: {
      text: 'Explore services',
      href: '/services',
    },
  },
}

export default function MichaelCaseStudy() {
  return <CaseStudyTemplate data={caseStudyData} />
}
