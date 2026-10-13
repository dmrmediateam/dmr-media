/** Shared copy & structured data for `/chatgpt-ads-real-estate` (server + client). */

export const FAQ_ITEMS = [
  {
    question: 'What are ChatGPT Ads?',
    answer:
      'ChatGPT Ads are paid placements inside ChatGPT conversations, and the channel is out of beta and fully launched. When buyers ask about neighborhoods, agents, or short lists, your brand can appear as part of the answer. DMR builds and manages the channel for real estate agents and teams: creative, landing paths, and CRM handoffs adapted to how you sell.',
  },
  {
    question: 'How do ChatGPT Ads work for real estate agents and teams?',
    answer:
      'Your ads can appear when buyers ask ChatGPT about neighborhoods, agents, and short lists. DMR writes the creative, keeps the promise from the placement to the landing path where the product allows, and tags inquiries with UTMs and CRM fields, so ChatGPT results sit next to your Google Ads and SEO reporting.',
  },
  {
    question: 'Is ChatGPT Ads still in beta?',
    answer:
      'No. ChatGPT Ads have moved out of beta and are fully live. The auction is still young, which is the opportunity: fewer real estate advertisers, early-mover pricing, and the chance to build creative and account history before the channel gets crowded the way Google did.',
  },
  {
    question: 'Are there onboarding fees or a monthly retainer?',
    answer:
      'For our founding real estate cohort, no. There is no onboarding fee and no monthly retainer while we build the real estate playbook with a limited number of agents and teams. We stay focused on execution, routing, and reporting as the channel scales in your market.',
  },
  {
    question: 'Why is there an application step?',
    answer:
      'We are keeping the roster small on purpose while the channel is young. Applications help us match pacing, creative load, and CRM expectations so every account gets senior attention instead of waiting in a queue behind generic onboarding.',
  },
  {
    question: 'How do ChatGPT Ads work alongside Google Ads?',
    answer:
      'ChatGPT placements complement high-intent search; they do not replace it. We treat ChatGPT as incremental demand and narrative reach while Google Ads and SEO continue to carry provable conversion volume. One team wires creative, UTMs, and CRM so leadership still sees one story.',
  },
] as const

export const stakesThree = [
  {
    title: 'External',
    subtitle: 'The discovery shift',
    body:
      'Buyers already ask language models for neighborhoods, trade-offs, and short lists. If your listings and point of view never show up in those answers, you are invisible in a new attention lane while competitors experiment in public.',
  },
  {
    title: 'Internal',
    subtitle: 'The hype anxiety',
    body:
      'Your team does not need another channel sold as “the future” with nothing behind it. You need a partner who will say what is stable, what is still maturing, and what should wait until measurement catches up, without embarrassing the brand.',
  },
  {
    title: 'Philosophical',
    subtitle: 'Signal over hype',
    body:
      'We bias toward proof: defined conversions, plain pacing notes, and creative that still looks like your brand when the UI changes next month. The alternative is paying for screenshots instead of pipeline.',
  },
] as const

export const dmrVsAlternatives = [
  {
    label: 'Scope',
    dmr: 'Founding cohort with written guardrails on spend, creative, and what “success” means week to week',
    other: 'Generic “AI ads” packages with unclear inventory and no accountability when APIs move',
  },
  {
    label: 'Engagement',
    dmr: 'No onboarding fee and no monthly retainer for our founding real estate cohort. We build the playbook alongside a handful of agents and teams',
    other: 'Setup fees, retainers, and long contracts before the channel is proven in your category',
  },
  {
    label: 'Execution',
    dmr: 'Creative, landing paths, and UTMs aligned to how buyers inquire',
    other: 'One-size prompts and disconnected landing experiences',
  },
  {
    label: 'Proof',
    dmr: 'Reporting that separates platform noise from real conversations; CRM hooks where supported',
    other: 'Vanity impressions with no path to booked appointments',
  },
  {
    label: 'Stack fit',
    dmr: 'Same team as SEO, Google Ads, and analytics when you want one accountable narrative',
    other: 'Siloed vendors optimizing for their own deliverables',
  },
] as const

export const processPhases = [
  {
    title: 'Apply',
    description:
      'Short intake on markets, listings, and goals. We confirm fit, capacity, and whether timing matches your launch calendar before the pilot goes live.',
  },
  {
    title: 'Pilot plan',
    description:
      'Written pilot: budgets, creative variants, landing destinations, and what we will measure even when platform reporting is thin. You approve before we go live.',
  },
  {
    title: 'Launch & learn',
    description:
      'We ship, watch pacing daily at first, and explain what changed when the product shifts. Waste gets cut quickly; promising angles earn more budget within the pilot rules.',
  },
  {
    title: 'Decide next',
    description:
      'End-of-pilot readout on whether the channel is ready to scale, plus how ChatGPT complements search and site work. Nothing renews automatically; you get a clear recommendation.',
  },
] as const

export const frameworkPillars = [
  {
    title: 'Placement & narrative',
    body: 'Copy and creative built for conversational surfaces: clear proof points, accurate listing details, and a brand voice that survives frequent UI updates.',
    image: '/images/EaganCaseStudy/SearchAds.png',
    imageAlt: 'Campaign and performance planning context for real estate paid media programs',
  },
  {
    title: 'Message match',
    body: 'Where the product allows, we keep the promise from the placement to the landing path so curiosity converts into identifiable inquiries.',
    image: '/images/landing/google-general/03-semrush-ranking.png',
    imageAlt: 'Visibility and demand context across search and AI channels for real estate agents',
  },
  {
    title: 'Measurement discipline',
    body: 'UTMs, CRM tagging, and weekly summaries that separate early-channel quirks from real signal, reported next to your existing Google Ads and SEO numbers.',
    image: '/images/EaganCaseStudy/GoogleSearchConsole.png',
    imageAlt: 'Performance trends illustrating accountable measurement over time',
  },
] as const
