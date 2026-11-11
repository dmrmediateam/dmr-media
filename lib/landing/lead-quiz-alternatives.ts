/**
 * Options outside what DMR Media offers, compiled per quiz stage from industry
 * research (reports/Lead quiz stage alternatives.md) so agents can look into
 * them on their own. DMR doesn't sell, run, or support any of these; the result
 * page says so above the list. Costs are rough, mostly third-party estimates.
 * No company or product names: the page describes options, it doesn't recommend providers.
 */

import type { StageSlug } from '@/lib/landing/lead-quiz'

export type Alternative = {
  title: string
  /** Short cost label for the collapsed row; `cost` has the full detail. */
  tag: string
  why: string
  cost: string
  watchOut: string
}

export const ALTERNATIVES: Record<StageSlug, Alternative[]> = {
  foundation: [
    {
      title: 'Host open houses for other agents’ listings',
      tag: 'Time only',
      why: 'You meet buyers who don’t have an agent yet, under someone else’s listing and brand.',
      cost: 'Your time, plus a free open-house sign-in app',
      watchOut: 'Ask the listing agent first, and follow up with every visitor within 24 hours.',
    },
    {
      title: 'A structured in-person referral system',
      tag: 'Time + small gifts',
      why: 'Most buyers and sellers pick an agent through someone they know. Calls, handwritten notes, and pop-bys on a set schedule turn your sphere into referrals.',
      cost: 'Your time, plus cards and small gifts',
      watchOut: 'Keep a simple tracker so nobody falls off the list.',
    },
    {
      title: 'Join a producing team or mentorship program',
      tag: 'Commission split',
      why: 'You borrow leads, systems, and credibility while you build your own. NAR’s median team closes 31 transactions a year, against 9 for the typical agent.',
      cost: 'A share of your commission',
      watchOut: 'Read the split, lead costs, and exit terms closely before you sign.',
    },
    {
      title: 'Builder and new-construction relationships',
      tag: 'Time only',
      why: 'Sales offices see steady buyer traffic, and many buyers arrive without an agent.',
      cost: 'Your time',
      watchOut: 'Disclose any builder incentives to your client and keep their interests first.',
    },
    {
      title: 'Rental clients as future buyers',
      tag: 'Time only',
      why: 'Today’s renters are next year’s first-time buyers, and they already trust you.',
      cost: 'Your time',
      watchOut: 'Lower pay per deal. Treat it as a pipeline, not your income.',
    },
  ],
  consistency: [
    {
      title: 'Expired and FSBO listing data with a dialer',
      tag: '$60 to $360/mo',
      why: 'These are owners who already want to sell, so listing appointments can come within weeks.',
      cost: 'About $60 to $360 a month',
      watchOut: 'Scrub every number against Do Not Call lists. TCPA fines run $500 to $1,500 per violation.',
    },
    {
      title: 'A direct-mail farm in one neighborhood',
      tag: '$0.45 to $1.65/piece',
      why: 'Mailing the same area every month builds lasting market share that doesn’t depend on referrals.',
      cost: 'About $0.45 to $1.65 per piece, all in',
      watchOut: 'It usually takes 6 to 18 months to pay off. Pair it with a faster channel.',
    },
    {
      title: 'Pay-at-close portal referrals',
      tag: '15% to 40% at closing',
      why: 'Portal referral programs send buyers now, and you only pay when a deal closes.',
      cost: 'About 15% to 40% of your commission at closing',
      watchOut: 'Use them to fill gaps, not as your base. The portal owns the relationship and sets the fee.',
    },
    {
      title: 'Open-house lead capture apps',
      tag: 'Free to $25/mo',
      why: 'A near-free source of local buyers and neighbors that adds up every weekend.',
      cost: 'Free to about $25 a month',
      watchOut: 'Low volume on its own. Follow up the same day.',
    },
    {
      title: 'Predictive seller data',
      tag: '$200 to $500/mo',
      why: 'Predictive data tools flag homeowners likely to sell, so you can aim a farm or calls.',
      cost: 'About $200 to $500 a month, often on a 12-month contract',
      watchOut: 'Accuracy claims come from the companies selling the data. Test before you commit.',
    },
  ],
  scaling: [
    {
      title: 'Hire an assistant or transaction coordinator first',
      tag: '$35k to $60k/yr',
      why: 'At this stage the bottleneck is your time, not your leads. Hand off paperwork and scheduling before you add more volume.',
      cost: 'About $35,000 to $60,000 a year, or per file for a virtual coordinator',
      watchOut: 'Write down your processes before you hand them off.',
    },
    {
      title: 'Add a buyer specialist',
      tag: '50/50 split',
      why: 'Give your fastest-converting buyer leads to a specialist so you can focus on listings.',
      cost: 'Commonly a 50/50 commission split',
      watchOut: 'Not every hire works out. Set clear expectations and a 90-day review.',
    },
    {
      title: 'A weekly team scoreboard',
      tag: 'Monthly software',
      why: 'Track appointments set, met, signed, and closed for each agent so you see problems early.',
      cost: 'A team tracking tool, billed monthly',
      watchOut: 'It only works if someone reviews it every single week.',
    },
    {
      title: 'Past-client appreciation events',
      tag: '$500 to $2k/event',
      why: 'Repeat and referral business is the biggest source of deals. Two to four events a year keep you top of mind.',
      cost: 'About $500 to $2,000 per event',
      watchOut: 'Vendor or lender sponsorships must follow RESPA rules.',
    },
    {
      title: 'A builder or new-construction partnership',
      tag: 'Time only',
      why: 'One strong builder relationship can fill a small team’s pipeline on its own.',
      cost: 'Your time and sales-office coverage',
      watchOut: 'Disclose builder incentives and keep the client’s interests first.',
    },
  ],
  'brand-building': [
    {
      title: 'Launch your own brokerage',
      tag: 'Varies',
      why: 'Own your brand and keep more of the economics, either fully independent or on a white-label brokerage platform.',
      cost: 'Platform fees and launch costs vary',
      watchOut: 'Licensing, compliance, and errors-and-omissions coverage become your responsibility.',
    },
    {
      title: 'A recruiting and retention program',
      tag: 'Time + events',
      why: 'At your level, growth comes from the team you build, not the deals you close yourself.',
      cost: 'Your time, plus recruiting content and events',
      watchOut: 'Retention matters as much as recruiting. Plan both.',
    },
    {
      title: 'A team-branded YouTube series or podcast',
      tag: 'Time or an editor',
      why: 'Builds a brand people recognize, and relocation buyers find you before they move.',
      cost: 'Production time, or a part-time video editor',
      watchOut: 'Results usually take a year or more of weekly publishing.',
    },
    {
      title: 'A local streaming TV test',
      tag: 'From about $500',
      why: 'Connected TV puts your brand on screens in your market with digital-style targeting.',
      cost: 'Streaming TV campaigns can start around $500',
      watchOut: 'Most results data comes from the companies selling the ads. Your brokerage name must appear in the ad.',
    },
    {
      title: 'An owned quarterly print magazine',
      tag: 'Print + postage',
      why: 'A high-end piece mailed to the top of your sphere positions you as the market leader in luxury.',
      cost: 'Design, printing, and postage for each issue',
      watchOut: 'Best for luxury markets. Track it with a unique URL or QR code.',
    },
  ],
}
