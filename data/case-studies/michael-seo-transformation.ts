import type { CaseStudyData } from '@/types/case-study'

export const michaelSeoData: CaseStudyData = {
  slug: 'michael-seo-transformation',
  client: 'Michael · SEO Transformation',
  location: 'Real Estate Professional',
  market: 'Luxury Real Estate',
  status: 'Ongoing',
  seo: {
    title: 'Michael SEO Transformation — 21x Search Impressions, 312% Organic Sessions | DMR Media',
    description:
      'DMR Media transformed Michael\'s silent IDX template into a modern, data-driven website. 21x more search impressions, 312% organic sessions. Premium brand experience for multimillion-dollar clients.',
    canonical: 'https://www.dmrmedia.org/case-study/michael-seo-transformation',
    ogImage: '/images/MichealTraffic.png',
    datePublished: '2025-03-01',
    dateModified: '2026-03-17',
  },
  hero: {
    image: '/images/MichealTraffic.png',
    imageAlt: 'Michael SEO traffic analytics dashboard — DMR Media',
    subtitle:
      "We helped Michael transform his silent IDX template into a modern, data-driven website that generates 21x more search impressions and 312% more organic sessions—all while maintaining the premium brand experience his multimillion-dollar clients expect.",
  },
  metrics: [
    { number: '21x', label: 'Search impressions', context: '7.5 weeks after relaunch' },
    { number: '+312%', label: 'Organic sessions', context: 'Year-over-year vs. template site' },
    { number: '6 weeks', label: 'Build timeline', context: 'From discovery to launch-ready WordPress' },
  ],
  reviews: [
    {
      text: "Despite being camera shy, I recorded a testimonial because the lead flow spoke for itself. The weekly updates made it impossible to ignore the progress.",
      author: 'Michael',
      role: 'Real Estate Professional',
      image: null,
      video: {
        src: 'https://www.youtube.com/embed/ng_7ysEAlkc',
        title: 'Michael on camera',
      },
    },
  ],
  sections: [
    {
      id: 'the-problem',
      eyebrow: 'The Problem',
      headline: 'The Challenge: A Ghost Town in Search Results',
      body: [
        `Michael was selling multimillion-dollar homes, but his website told a different story. His IDX template site was invisible to search engines—no metadata discipline, nothing indexable, nothing that proved he was a luxury real estate professional. When he did manage to attract traffic, visitors landed on squeeze pages that screamed discount lead generation, not premium service.`,
        `The site looked like everyone else's template, and the results matched: zero organic visibility, no qualified leads, and a brand presence that undermined his reputation. Michael needed a complete transformation—not just a redesign, but a fundamental rebuild of how his business appeared online.`,
      ],
    },
    {
      id: 'the-diagnosis',
      eyebrow: 'The Diagnosis',
      headline: 'What We Discovered',
      body: [
        `Our forensic audit revealed three critical failures. First, the site suffered from template paralysis—a generic KVcore shell with no indexing plan or sitemap hygiene. Google couldn't find or understand the content, so it simply didn't rank.`,
        `Second, the <a href="/seo-optimization">SEO foundation</a> was completely abandoned. Zero schema markup, zero internal linking strategy, zero topical authority. The site had no structure for search engines to understand what Michael actually did or who he served.`,
        `Third, every conversion point felt like a discount funnel. The messaging, design, and user experience screamed "cheap lead gen" rather than "luxury real estate advisor." This misalignment meant that even when traffic arrived, it wasn't the right kind of traffic—and those visitors didn't convert because the experience didn't match Michael's actual service level.`,
      ],
    },
    {
      id: 'the-solution',
      eyebrow: 'The Solution',
      headline: 'How We Rebuilt Everything',
      body: [
        `We didn't just redesign the site—we rebuilt the entire marketing system from the ground up. Every artifact needed a new point of view: the website, SEO strategy, CRM integrations, and even the video content. We started with architecture, layered in irresistible copy, and then taught the automations to sound like a high-end advisor.`,
        `The modern WordPress rebuild became the foundation. We rebuilt every URL with tailored layouts, comprehensive schema markup, and lightning-fast Core Web Vitals. The site now loads in under two seconds and provides search engines with crystal-clear signals about Michael's expertise and market focus.`,
        `We built a thought-leadership engine with an editorial calendar anchored on relocation, investment, and micro-neighborhood queries. Every piece of content now serves a dual purpose: answering the questions high-net-worth buyers ask while establishing Michael as the authority in his market.`,
        `Finally, we created an automated nurture system that feels personal. Video walkthroughs, IDX alerts, and concierge SMS flows trigger based on on-site behavior, not generic timers. Every touchpoint now reinforces the premium brand experience.`,
      ],
      screenshot: {
        src: '/images/MichealTraffic.png',
        alt: 'SEO analytics showing traffic growth — Michael DMR Media',
      },
    },
    {
      id: 'how-we-did-it',
      eyebrow: 'How We Did It',
      headline: 'The Process: From Forensics to Momentum',
      body: [],
      phases: [
        {
          label: 'Phase 01',
          name: 'Forensics',
          body: "We crawled the old IDX stack, surfaced every technical debt issue, and mapped every break point. This comprehensive audit gave us a complete picture of what needed to change and why the current system was failing.",
        },
        {
          label: 'Phase 02',
          name: 'Rebuild',
          body: "We created a custom WordPress experience with bespoke landing pages and a search-friendly information architecture. Every page was designed with both user experience and search engine optimization in mind. The content strategy was built around buyer intent, not keyword stuffing.",
        },
        {
          label: 'Phase 03',
          name: 'Momentum',
          body: "We established a weekly experimentation cadence with backlinks, YouTube content hooks, and newsletter integrations. The goal wasn't just to launch a new site—it was to create a system that continuously improves and adapts to market changes.",
        },
      ],
    },
    {
      id: 'results',
      eyebrow: 'What Michael Achieved',
      headline: 'The Results: 21x More Visibility',
      body: [
        `Seven weeks after launch, the data told the story. Search impressions increased 21x. Organic sessions jumped 312% year-over-year. But more importantly, the quality of those sessions improved dramatically. Visitors now arrive looking for luxury real estate services, not discount furniture.`,
        `Every dashboard, every call, every follow-up is now scripted to feel premium. Michael's team knows exactly what to publish each week and what data proves it's working. The weekly <a href="/analytics-reporting">reporting</a> makes it impossible to ignore the progress—even Michael, who's camera shy, recorded a testimonial video because the results were that obvious.`,
        `The site now behaves like a modern magazine while functioning as a high-converting lead generation engine. The brand experience matches the service level, and the data matches the way Michael works: calm, confident, and modern.`,
      ],
      screenshot: {
        src: '/images/MichealTraffic.png',
        alt: 'Traffic analytics dashboard showing growth — Michael DMR Media',
      },
    },
  ],
}
