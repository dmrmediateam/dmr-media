import type { CaseStudyData } from '@/types/case-study'

export const jadeLegendaryData: CaseStudyData = {
  slug: 'jade-legendary-real-estate',
  client: 'Jade · Legendary Real Estate',
  location: 'Lake Geneva, Wisconsin',
  market: 'Lake Geneva / Southeastern Wisconsin',
  status: 'Ongoing',
  seo: {
    title: 'Jade Legendary Real Estate — 3x Leads in 90 Days | DMR Media',
    description:
      "DMR Media transformed Jade's content-heavy marketing system into a signal-rich engine that tripled her inbound pipeline in 90 days. 42 content assets rebuilt, 12hr automation velocity.",
    canonical: 'https://www.dmrmedia.org/case-study/jade-legendary-real-estate',
    ogImage: '/images/JadeCRM.png',
    datePublished: '2025-04-01',
    dateModified: '2026-03-17',
  },
  hero: {
    image: '/images/JadeCRM.png',
    imageAlt: 'Jade CRM dashboard showing lead growth — DMR Media Lake Geneva Wisconsin',
    subtitle:
      "We helped Jade transform her content-heavy but context-poor marketing system into a signal-rich engine that tripled her inbound pipeline in 90 days, with every lead understanding exactly why Jade was different.",
  },
  metrics: [
    { number: '3x', label: 'Qualified leads', context: 'Inbound pipeline inside 90 days' },
    { number: '42', label: 'Content assets', context: 'Blogs, landing pages, nurture flows' },
    { number: '12 hrs', label: 'Automation velocity', context: 'From lead to curated follow-up' },
  ],
  reviews: [
    {
      text: "He's articulate, responsive, and tells us exactly why things are ranking—or not—every week. It feels like an in-house team that communicates like luxury service should.",
      author: 'Jade Goodhue',
      role: 'Legendary Real Estate',
      image: '/images/JadeReview.jpeg',
    },
  ],
  sections: [
    {
      id: 'the-problem',
      eyebrow: 'The Problem',
      headline: 'The Challenge: Content Without Context',
      body: [
        `Jade was publishing weekly—blogs, shorts, emails. But nothing was connected. She had hundreds of content assets with zero keyword hierarchy or conversion path. Searchers would land, skim, and bounce because the content wasn't mapped to what they were really buying: a trusted guide for complex listings.`,
        `The content wasn't the problem. Context was. Jade was ranking for aspirational topics, not listings and relocation triggers. Her Google Business Profile was under-optimized with sporadic posting cadence. And traffic stalled at page views because automations stopped at "thanks for visiting."`,
        `Jade needed a complete rebuild of her marketing spine—not more content, but better content connected to a system that actually converted visitors into clients.`,
      ],
    },
    {
      id: 'the-diagnosis',
      eyebrow: 'The Diagnosis',
      headline: 'What We Discovered',
      body: [
        `Our full crawl of every article, URL, schema tag, and CRM touchpoint revealed where momentum was leaking. First, the content had no context. Hundreds of blogs existed with zero keyword hierarchy or conversion path. There was no structure to guide readers from discovery to decision.`,
        `Second, there was a search intent mismatch. Jade was ranking for aspirational topics, not listings and relocation triggers. The content answered questions that didn't lead to transactions, so even engaged readers had no reason to convert.`,
        `Third, local presence had significant gaps. Her Google Business Profile was under-optimized with sporadic posting cadence. The neighborhoods she dominated weren't reflected in her online presence.`,
        `Finally, there was no nurture spine. Traffic stalled at page views because automations stopped at "thanks for visiting." There was no system to move interested visitors through a journey that ended in booked calls.`,
      ],
    },
    {
      id: 'the-solution',
      eyebrow: 'The Solution',
      headline: 'How We Built the System',
      body: [
        `We rebuilt Jade's marketing ecosystem from the inside out, starting with a forensic audit of the 216 assets she already had. Then we rebuilt the top of the funnel with dead-simple landing pages that reflected the exact questions buyers asked her on calls.`,
        `We created a signal-first content system. We rebuilt her editorial calendar around the questions high-net buyers ask minutes before texting an agent. Every piece of content now serves a dual purpose: ranking for the right searches and guiding readers toward conversion.`,
        `We built a local authority spine. We structured her Google Business ecosystem—posts, products, Q&A—around the neighborhoods she dominates. Every touchpoint now reinforces her expertise in the markets where she's legendary.`,
        `Finally, we introduced a luxury nurture layer. Voice-note follow-ups, video walkthroughs, and concierge drip sequences trigger based on specific behaviors, not generic timers. Every automation now references each reader's intent and moves them closer to booking a call.`,
      ],
      screenshot: {
        src: '/images/JadeCRM.png',
        alt: 'CRM dashboard showing lead pipeline growth — Jade Legendary Real Estate DMR Media',
      },
    },
    {
      id: 'how-we-did-it',
      eyebrow: 'How We Did It',
      headline: 'The Process: Diagnose, Rebuild, Scale',
      body: [],
      phases: [
        {
          label: 'Phase 01',
          name: 'Diagnose',
          body: "We performed a full crawl of every article, URL, schema tag, and CRM touchpoint to see where attention evaporated. This comprehensive audit revealed exactly where the disconnect was happening between content and conversion.",
        },
        {
          label: 'Phase 02',
          name: 'Rebuild',
          body: "We re-scripted the hero narrative, rebuilt the site information architecture, and layered in automations that referenced each reader's intent. The content strategy shifted from 'publish more' to 'publish with purpose.'",
        },
        {
          label: 'Phase 03',
          name: 'Scale',
          body: "We established a weekly experimentation cadence—new hooks, new keyword clusters, new campaign angles—until the pipeline tripled. The goal was continuous improvement, not just a one-time fix.",
        },
      ],
    },
    {
      id: 'results',
      eyebrow: 'What Jade Achieved',
      headline: 'The Results: A Pipeline That Tripled',
      body: [
        `Within 90 days, Jade's inbound pipeline tripled. But more importantly, every lead knew exactly why Jade was different. The content now speaks to the right audience, the local presence reinforces her authority, and the nurture system moves interested visitors through a journey that ends in booked calls.`,
        `Every Monday, Jade receives a signal report with the exact posts, keywords, and conversations driving revenue. No more guessing if the work is landing. The work shows up as booked calls, vetted buyers, and listings that feel on-brand.`,
        `The transformation wasn't just about more content or more traffic. It was about building a system where content, local presence, and automation work together to create a marketing engine that feels like couture—premium, personalized, and perfectly aligned with Jade's service level.`,
      ],
      screenshot: {
        src: '/images/JadeCRM.png',
        alt: 'CRM dashboard showing lead growth metrics — Jade Legendary Real Estate DMR Media',
      },
    },
  ],
}
