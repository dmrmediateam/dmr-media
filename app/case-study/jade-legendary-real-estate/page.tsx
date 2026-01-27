import CaseStudyTemplate, { type CaseStudyData } from '@/components/CaseStudyTemplate'

const caseStudyData: CaseStudyData = {
  title: 'Jade · Legendary Real Estate',
  subtitle:
    'We helped Jade transform her content-heavy but context-poor marketing system into a signal-rich engine that tripled her inbound pipeline in 90 days, with every lead understanding exactly why Jade was different.',
  heroImage: {
    src: '/images/JadeCRM.png',
    alt: 'Jade CRM dashboard showing lead growth',
  },
  stats: [
  { label: 'Qualified leads', value: '3x', detail: 'Inbound pipeline inside 90 days' },
  { label: 'Content rebuild', value: '42 assets', detail: 'Blogs, landing pages, nurture flows' },
  { label: 'Automation velocity', value: '12 hrs', detail: 'From lead to curated follow-up' },
  ],
  sections: [
    {
      title: 'The Challenge: Content Without Context',
      subtitle: 'The Problem',
      content: (
        <>
          <p>
            Jade was publishing weekly—blogs, shorts, emails. But nothing was connected. She had hundreds of content assets with zero keyword hierarchy or
            conversion path. Searchers would land, skim, and bounce because the content wasn't mapped to what they were really buying: a trusted guide for
            complex listings.
          </p>
          <p>
            The content wasn't the problem. Context was. Jade was ranking for aspirational topics, not listings and relocation triggers. Her Google Business
            Profile was under-optimized with sporadic posting cadence. And traffic stalled at page views because automations stopped at "thanks for visiting."
          </p>
          <p>
            Jade needed a complete rebuild of her marketing spine—not more content, but better content connected to a system that actually converted visitors
            into clients.
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
            Our full crawl of every article, URL, schema tag, and CRM touchpoint revealed where momentum was leaking. First, the content had no context. Hundreds
            of blogs existed with zero keyword hierarchy or conversion path. There was no structure to guide readers from discovery to decision.
          </p>
          <p>
            Second, there was a search intent mismatch. Jade was ranking for aspirational topics, not listings and relocation triggers. The content answered
            questions that didn't lead to transactions, so even engaged readers had no reason to convert.
          </p>
          <p>
            Third, local presence had significant gaps. Her Google Business Profile was under-optimized with sporadic posting cadence. The neighborhoods she
            dominated weren't reflected in her online presence.
          </p>
          <p>
            Finally, there was no nurture spine. Traffic stalled at page views because automations stopped at "thanks for visiting." There was no system to
            move interested visitors through a journey that ended in booked calls.
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
            We rebuilt Jade's marketing ecosystem from the inside out, starting with a forensic audit of the 216 assets she already had. Then we rebuilt the top
            of the funnel with dead-simple landing pages that reflected the exact questions buyers asked her on calls.
          </p>
          <p>
            We created a signal-first content system. We rebuilt her editorial calendar around the questions high-net buyers ask minutes before texting an
            agent. Every piece of content now serves a dual purpose: ranking for the right searches and guiding readers toward conversion.
          </p>
          <p>
            We built a local authority spine. We structured her Google Business ecosystem—posts, products, Q&A—around the neighborhoods she dominates. Every
            touchpoint now reinforces her expertise in the markets where she's legendary.
          </p>
          <p>
            Finally, we introduced a luxury nurture layer. Voice-note follow-ups, video walkthroughs, and concierge drip sequences trigger based on specific
            behaviors, not generic timers. Every automation now references each reader's intent and moves them closer to booking a call.
          </p>
        </>
      ),
      image: {
        src: '/images/JadeCRM.png',
        alt: 'CRM dashboard showing lead pipeline growth',
        width: 800,
        height: 500,
      },
      imagePosition: 'right',
    },
    {
      title: 'The Process: Diagnose, Rebuild, Scale',
      subtitle: 'How We Did It',
      content: (
        <>
          <p>
            Phase one was diagnosis. We performed a full crawl of every article, URL, schema tag, and CRM touchpoint to see where attention evaporated. This
            comprehensive audit revealed exactly where the disconnect was happening between content and conversion.
          </p>
          <p>
            Phase two was the rebuild. We re-scripted the hero narrative, rebuilt the site information architecture, and layered in automations that referenced
            each reader's intent. The content strategy shifted from "publish more" to "publish with purpose."
          </p>
          <p>
            Phase three was scale. We established a weekly experimentation cadence—new hooks, new keyword clusters, new campaign angles—until the pipeline
            tripled. The goal was continuous improvement, not just a one-time fix.
          </p>
        </>
      ),
    },
    {
      title: 'The Results: A Pipeline That Tripled',
      subtitle: 'What Jade Achieved',
      content: (
        <>
          <p>
            Within 90 days, Jade's inbound pipeline tripled. But more importantly, every lead knew exactly why Jade was different. The content now speaks to the
            right audience, the local presence reinforces her authority, and the nurture system moves interested visitors through a journey that ends in booked
            calls.
          </p>
          <p>
            Every Monday, Jade receives a signal report with the exact posts, keywords, and conversations driving revenue. No more guessing if the work is
            landing. The work shows up as booked calls, vetted buyers, and listings that feel on-brand.
          </p>
          <p>
            The transformation wasn't just about more content or more traffic. It was about building a system where content, local presence, and automation work
            together to create a marketing engine that feels like couture—premium, personalized, and perfectly aligned with Jade's service level.
          </p>
        </>
      ),
      image: {
        src: '/images/JadeCRM.png',
        alt: 'CRM dashboard showing lead growth metrics',
        width: 1200,
        height: 600,
      },
      imagePosition: 'full',
    },
  ],
  testimonial: {
    quote:
      "He's articulate, responsive, and tells us exactly why things are ranking—or not—every week. It feels like an in-house team that communicates like luxury service should.",
    author: 'Jade Goodhue',
    role: 'Legendary Real Estate',
    image: '/images/JadeReview.jpeg',
  },
  cta: {
    title: 'Need a content system that feels like couture?',
    description:
      'We can diagnose your existing footprint, rebuild the parts that matter, and have new leads in the pipeline before the next quarter closes.',
    primaryButton: {
      text: 'Schedule a workshop',
      href: '/contact',
    },
    secondaryButton: {
      text: 'View our services',
      href: '/services',
    },
  },
}

export default function JadeCaseStudy() {
  return <CaseStudyTemplate data={caseStudyData} />
}
