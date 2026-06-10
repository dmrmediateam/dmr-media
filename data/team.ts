/**
 * DMR Media Team Data
 * Single source of truth for all team member profiles.
 * Used by: /about-us index, individual profile pages, EEAT Person schema.
 */

export interface TeamMember {
  slug: string
  name: string
  role: string
  title: string // Full title for schema
  shortBio: string // Used on index cards (1–2 sentences)
  fullBio: string[] // Paragraphs for individual profile page
  expertise: string[] // Skill tags
  linkedin?: string
  twitter?: string
  image: string // /images/team/[slug].jpg — swap in real photos
  featured: boolean // Show in hero grid on /about-us
  order: number // Display order
}

export const teamMembers: TeamMember[] = [
  {
    slug: 'andrew-rohm',
    name: 'Andrew Rohm',
    role: 'CEO',
    title: 'Chief Executive Officer, DMR Media',
    shortBio:
      'Andrew founded DMR Media to give luxury real estate teams the same search and paid media firepower that Fortune 500 brands use — with the directness of a boutique partner.',
    fullBio: [
      'Andrew Rohm is the founder and CEO of DMR Media, a luxury real estate marketing agency specializing in Google Ads, SEO, and conversion-focused digital systems for high-producing agents and brokerages across the United States.',
      'He built DMR Media from the ground up with one principle: marketing for real estate should be measurable, accountable, and calibrated to the premium end of the market. That means no vanity metrics, no black-box reporting — just documented lifts in visibility, leads, and GCI.',
      'Andrew has personally overseen campaigns that have produced 3x lead growth for boutique brokerages, 19x daily click increases for luxury condo developments, and 920% traffic growth for teams entering competitive markets from a standing start.',
      'His approach combines technical SEO architecture, precision Google Ads targeting, and content strategy designed to rank in an AI-first search landscape. He works directly with clients — not through account managers — and prides himself on coming to every conversation with the client\'s market already researched.',
      'Outside of DMR, Andrew is driven by the belief that great marketing should feel invisible to the end consumer: the right home, in front of the right buyer, at exactly the right moment.',
    ],
    expertise: [
      'Google Ads Strategy',
      'SEO Architecture',
      'Luxury Real Estate Marketing',
      'Lead Generation Systems',
      'Client Growth Strategy',
      'Performance Max Campaigns',
    ],
    linkedin: 'https://www.linkedin.com/in/andrewrohm',
    image: '/images/team/andrew-rohm.jpg',
    featured: true,
    order: 1,
  },
  {
    slug: 'max-de',
    name: 'Max De',
    role: 'CMO',
    title: 'Chief Marketing Officer, DMR Media',
    shortBio:
      'Max lives at the intersection of data and creative — obsessed with client growth, client success, and making sure every campaign tells a story the numbers back up.',
    fullBio: [
      'Max Deleonardis is the Chief Marketing Officer at DMR Media, where he oversees campaign strategy, content architecture, and the overall marketing systems that drive client results.',
      'Max is relentlessly focused on client growth and client success — not as a talking point, but as the measurable outcome that every piece of work is accountable to. He believes the best marketing agencies earn their retainer every single month, and he holds DMR\'s output to that standard.',
      'His background spans paid media, organic search, and brand positioning, giving him a rare ability to see the full funnel — from a cold Google search to a signed listing agreement — and identify exactly where to apply pressure.',
      'At DMR, Max has been behind some of the agency\'s most significant client wins: coordinating multi-channel campaigns that blend Google Ads precision with SEO authority to dominate competitive luxury real estate markets.',
      'He brings the same intensity to internal operations as he does to client work: clear communication, documented processes, and a bias toward action. If something can be made faster, cleaner, or more effective for a client, Max finds it.',
    ],
    expertise: [
      'Campaign Strategy',
      'Content Architecture',
      'Paid Media',
      'Brand Positioning',
      'Client Success',
      'Full-Funnel Marketing',
    ],
    linkedin: 'https://www.linkedin.com/in/maxdeleonardis',
    image: '/images/team/max-de.jpg',
    featured: true,
    order: 2,
  },
  {
    slug: 'nako-a',
    name: 'Nako A.',
    role: 'Web Developer',
    title: 'Web Developer & Technical SEO, DMR Media',
    shortBio:
      'Nako builds the high-performing websites and digital marketing systems that power DMR client results — from technical SEO to conversion optimization.',
    fullBio: [
      'Nako is a web developer at DMR Media focused on building high-performing websites and digital marketing systems for clients. His work spans website development, technical SEO, analytics integrations, and conversion optimization — helping real estate agents and teams improve their online presence and drive measurable results.',
      'He approaches every build with performance and precision in mind: fast load times, clean architecture, and systems that are built to scale. Whether it\'s a single-property website for a luxury condo development or a full brokerage platform with MLS integration, Nako ensures the technical foundation supports the marketing strategy above it.',
      'His expertise in analytics and integrations means DMR clients don\'t just get a website — they get a fully instrumented system that reports accurately, tracks conversions cleanly, and feeds useful data back into campaign decisions.',
      'Outside of work, Nako is a soccer player who enjoys traveling and exploring new cultures and languages. That curiosity for how different systems work — whether a language, a culture, or a codebase — carries directly into the way he approaches complex technical challenges.',
    ],
    expertise: [
      'Web Development',
      'Technical SEO',
      'Analytics & Tracking',
      'Conversion Optimization',
      'MLS Integrations',
      'Site Performance',
    ],
    image: '/images/team/nako-a.jpg',
    featured: true,
    order: 3,
  },
  {
    slug: 'sj',
    name: 'SJ',
    role: 'Admin & Operations',
    title: 'Admin & Operations, DMR Media',
    shortBio:
      'SJ keeps the engine running — making sure the workflow stays tight, deadlines are met, and the team has everything it needs to do its best work.',
    fullBio: [
      'SJ is the operational backbone of DMR Media. As the team\'s admin and operations lead, she keeps the workflow running smoothly — managing schedules, coordinating communications, and making sure nothing falls through the cracks in a fast-moving agency environment.',
      'Behind every project that ships on time and every client who gets a timely response is SJ\'s quiet, consistent work keeping the machine in order. She\'s the reason the team can focus on doing great work instead of managing logistics.',
      'Her attention to detail and instinct for organization are matched by a warmth and approachability that makes her a natural hub for the team. Clients and colleagues alike know that when SJ is on it, it gets done.',
      'Off the clock, you\'ll find her on the hunt for great food, chasing wins at arcade claw machines, and serving as personal assistant to two dogs and one very opinionated cat.',
    ],
    expertise: [
      'Operations Management',
      'Workflow Coordination',
      'Client Communication',
      'Project Scheduling',
      'Team Support',
    ],
    image: '/images/team/sj.jpg',
    featured: true,
    order: 4,
  },
  {
    slug: 'collins',
    name: 'Collins',
    role: 'Google Ads Specialist',
    title: 'Google Ads Specialist, DMR Media',
    shortBio:
      'Collins runs the data-driven Google Ads campaigns that turn search intent into signed clients — with the creative problem-solving to outperform in competitive markets.',
    fullBio: [
      'Collins is a Google Ads specialist at DMR Media who helps businesses grow through data-driven marketing and creative problem-solving. He manages paid media campaigns for real estate agents and teams, with a focus on generating high-quality leads at efficient cost-per-acquisition.',
      'He approaches every account with curiosity and rigor — digging into the data to understand what\'s actually working, then applying creative thinking to push performance further. In competitive real estate markets where CPCs are high and margins on poor targeting are punishing, Collins\' precision makes the difference.',
      'His campaigns are built on clean conversion tracking, structured keyword architecture, and ad creative that speaks to where a buyer or seller actually is in their journey — not just what they searched.',
      'I believe the best results come from staying curious, continuously learning, and not taking life too seriously — something my dogs remind me of every day.',
      'Outside of work, Collins is a proud Rottweiler owner, an occasional adventurer, and someone who enjoys discovering great food and new experiences.',
    ],
    expertise: [
      'Google Ads Management',
      'Performance Max Campaigns',
      'Conversion Tracking',
      'Keyword Architecture',
      'Ad Copywriting',
      'Campaign Optimization',
    ],
    image: '/images/team/collins.jpg',
    featured: true,
    order: 5,
  },
  {
    slug: 'alex',
    name: 'Alex',
    role: 'Sales',
    title: 'Sales, DMR Media',
    shortBio:
      'Alex connects the right agents and teams with the DMR system — qualifying fit, understanding market context, and making sure every new partnership starts with clarity.',
    fullBio: [
      'Alex is on the sales team at DMR Media, responsible for connecting high-producing real estate agents and teams with the marketing systems that help them grow. He\'s the first conversation most new clients have with DMR — and he takes that responsibility seriously.',
      'His approach to sales is built on fit, not volume. Before any conversation about services, Alex spends time understanding the client\'s market, their current challenges, and what success actually looks like for their business. That preparation means every first call is substantive, not a pitch.',
      'He works closely with Andrew and the strategy team to make sure every new client onboards with full context — so the work starts from a position of clarity rather than catch-up.',
      'Alex believes the best client relationships start with honesty about what\'s possible, and he brings that directness to every conversation he has on behalf of DMR Media.',
    ],
    expertise: [
      'Client Acquisition',
      'Market Research',
      'Consultative Sales',
      'Onboarding',
      'Real Estate Industry',
    ],
    image: '/images/team/alex.jpg',
    featured: true,
    order: 6,
  },
]

export function getTeamMember(slug: string): TeamMember | undefined {
  return teamMembers.find((m) => m.slug === slug)
}

export function getFeaturedTeam(): TeamMember[] {
  return teamMembers.filter((m) => m.featured).sort((a, b) => a.order - b.order)
}

export function getAllTeamSlugs(): string[] {
  return teamMembers.map((m) => m.slug)
}
