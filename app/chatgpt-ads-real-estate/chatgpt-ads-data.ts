/** Shared copy & structured data for `/chatgpt-ads-real-estate` (server + client). */

export const FAQ_ITEMS = [
  {
    question: 'What is the ChatGPT Ads beta?',
    answer:
      'ChatGPT Ads are rolling out gradually around the world—not every market or format is live at once. The United States and a handful of other countries are in the first wave of access. DMR is running a small, hands-on test with a handful of luxury real estate teams so we can adapt creative, landing paths, and CRM handoffs to how you actually sell, while the product continues to evolve.',
  },
  {
    question: 'Are there onboarding fees or a monthly retainer?',
    answer:
      'For this test cohort, no. There is no onboarding fee and no monthly retainer while we build the real estate playbook with a limited number of teams. We stay focused on execution, routing, and reporting as access expands in your market.',
  },
  {
    question: 'Why is there an application step?',
    answer:
      'We are intentionally keeping the cohort small while placements, APIs, and measurement mature. Applications help us match pacing, creative load, and CRM expectations so every pilot gets senior attention—not a queue behind generic onboarding.',
  },
  {
    question: 'Is ChatGPT Ads fully released everywhere?',
    answer:
      'No. Capabilities are still expanding market by market. That can mean format changes, reporting gaps, or pacing quirks depending on where you operate. We set expectations up front, document what we can prove today, and pair pilots with search and site foundations so you are never dependent on a single immature line item.',
  },
  {
    question: 'How does this work alongside Google Ads?',
    answer:
      'ChatGPT placements can complement high-intent search, not replace it. In this test we treat ChatGPT as incremental demand and narrative reach while Google Ads and SEO continue to carry provable conversion volume. One team wires creative, UTMs, and CRM so leadership still sees one story.',
  },
] as const

export const stakesThree = [
  {
    title: 'External',
    subtitle: 'The discovery shift',
    body:
      'Buyers already ask language models for neighborhoods, trade-offs, and short lists. If your listings and point of view never show up in those answers, you are invisible in a new attention lane—while competitors experiment in public.',
  },
  {
    title: 'Internal',
    subtitle: 'The beta anxiety',
    body:
      'Your team does not need another half-baked channel sold as “the future.” You need a partner who will say what is stable, what is experimental, and what should wait until measurement catches up—without embarrassing the brand.',
  },
  {
    title: 'Philosophical',
    subtitle: 'Signal over hype',
    body:
      'We bias toward proof: defined conversions, honest pacing notes, and creative that still looks like your brokerage when the UI changes next month. The alternative is paying for screenshots instead of pipeline.',
  },
] as const

export const dmrVsAlternatives = [
  {
    label: 'Scope',
    dmr: 'Invite-only beta with written guardrails on spend, creative, and what “success” means week to week',
    other: 'Generic “AI ads” packages with unclear inventory and no accountability when APIs move',
  },
  {
    label: 'Engagement',
    dmr: 'No onboarding fee and no monthly retainer for this real estate test cohort—we are learning alongside a handful of teams',
    other: 'Setup fees, retainers, and long contracts before the channel is proven in your category',
  },
  {
    label: 'Execution',
    dmr: 'Creative, landing paths, and UTMs aligned to how luxury buyers actually inquire',
    other: 'One-size prompts and disconnected landing experiences',
  },
  {
    label: 'Proof',
    dmr: 'Reporting that separates beta noise from real conversations; CRM hooks where supported',
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
      'We ship, watch pacing daily at first, and narrate what changed when the product shifts. Waste gets cut quickly; promising angles earn more budget within the pilot rules.',
  },
  {
    title: 'Decide next',
    description:
      'End-of-pilot readout with honest read on scale readiness, plus how ChatGPT complements search and site work. No auto-renew theater—just a clear recommendation.',
  },
] as const

export const frameworkPillars = [
  {
    title: 'Placement & narrative',
    body: 'Copy and creative built for conversational surfaces: clear proof points, listing truth, and brand voice that survives frequent UI updates.',
    image: '/images/EaganCaseStudy/SearchAds.png',
    imageAlt: 'Campaign and performance planning context for paid media programs',
  },
  {
    title: 'Message match',
    body: 'Where the product allows, we keep the promise from the placement to the landing path so curiosity converts into identifiable inquiries.',
    image: '/images/landing/google-general/03-semrush-ranking.png',
    imageAlt: 'Visibility and demand context across search and emerging channels',
  },
  {
    title: 'Measurement discipline',
    body: 'UTMs, CRM tagging, and weekly summaries that separate beta quirks from real signal—paired with your existing Google Ads and SEO reporting.',
    image: '/images/EaganCaseStudy/GoogleSearchConsole.png',
    imageAlt: 'Performance trends illustrating accountable measurement over time',
  },
] as const
