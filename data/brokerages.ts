// Brokerage Directory Data Structure
export interface Brokerage {
  id: string;
  name: string;
  tagline: string;
  brokerage: string;
  offices: string[];
  city: string;
  state: string;
  stateSlug: string;
  stateAbbr: string;
  phone: string;
  website: string;
  social: {
    instagram?: string;
    facebook?: string;
    linkedin?: string;
  };
  highlights: {
    year: number;
    achievements: string[];
  };
  stats: {
    closings?: string;
    volume?: string;
    agents?: string;
    ranking?: string;
  };
  signatureMove: string;
  perfectFor: string;
  oneLiner: string;
  logo?: string;
  image?: string;
  featured: boolean;
}

export const wisconsinBrokerages: Brokerage[] = [
  // Existing brokerages from case studies
  {
    id: 'legendary-real-estate-services',
    name: 'Legendary Real Estate Services',
    tagline: "Lake Geneva's Lead Generation Powerhouse",
    brokerage: 'Independent',
    offices: ['Lake Geneva, WI'],
    city: 'Lake Geneva',
    state: 'Wisconsin',
    stateSlug: 'wisconsin',
    stateAbbr: 'WI',
    phone: '262-555-0100', // Update with actual
    website: 'https://www.legendaryrealestateservices.com',
    social: {
      instagram: '@legendaryrealestateservices',
    },
    highlights: {
      year: 2024,
      achievements: [
        '3x lead generation increase',
        'Strategic SEO & content optimization',
        'DMR Media partnership success story',
      ],
    },
    stats: {
      ranking: '3x Lead Growth',
    },
    signatureMove: 'Content-driven SEO strategy that tripled inbound leads through strategic keyword targeting and Google My Business optimization.',
    perfectFor: 'Lake Geneva luxury buyers and sellers looking for boutique service with cutting-edge digital marketing.',
    oneLiner: 'We don\'t just market homes—we engineer lead generation machines.',
    featured: true,
  },
  {
    id: 'visions-first-realty',
    name: 'Visions First Realty',
    tagline: "Northern Wisconsin's SEO Leaders",
    brokerage: 'Independent Brokerage',
    offices: ['Ashland, WI'],
    city: 'Ashland',
    state: 'Wisconsin',
    stateSlug: 'wisconsin',
    stateAbbr: 'WI',
    phone: '715-555-0200', // Update with actual
    website: 'https://www.visionsfirstrealty.com',
    social: {},
    highlights: {
      year: 2024,
      achievements: [
        'Top rankings for key real estate search terms',
        '2.7x impressions increase',
        'Rural market SEO success story',
      ],
    },
    stats: {
      ranking: 'Top Local Rankings',
    },
    signatureMove: 'Hyperlocal content strategy featuring community events and neighborhood spotlights that dominate Northern Wisconsin search results.',
    perfectFor: 'Buyers and sellers in Ashland, Washburn, and surrounding Lake Superior communities.',
    oneLiner: 'Connecting Northern Wisconsin families with their dream properties through proven local expertise.',
    featured: true,
  },
  // New brokerages
  {
    id: 'jennifer-landro-real-estate-team',
    name: 'The Jennifer Landro Real Estate Team',
    tagline: "Eastern Wisconsin's Tech-Driven Winners",
    brokerage: 'LPT Realty (independent team)',
    offices: ['Appleton (Fox Cities)', 'Brookfield (Metro Milwaukee)'],
    city: 'Appleton',
    state: 'Wisconsin',
    stateSlug: 'wisconsin',
    stateAbbr: 'WI',
    phone: '920-759-2036',
    website: 'https://jenniferlandro.com',
    social: {
      instagram: '@jenniferlandrorealestate',
    },
    highlights: {
      year: 2024,
      achievements: [
        '4,000+ homes sold lifetime',
        '40-agent powerhouse',
        'U.S. News "Top Wisconsin Firm"',
      ],
    },
    stats: {
      closings: '4,000+',
      agents: '40',
      ranking: 'U.S. News Top Wisconsin Firm',
    },
    signatureMove: 'AI-powered pricing + 3D tours = listings sell 42% faster than market average.',
    perfectFor: 'First-time buyers in Green Bay or empty-nesters downsizing in Wauwatosa.',
    oneLiner: 'We don\'t just list homes—we engineer wins.',
    featured: true,
  },
  {
    id: 'jay-schmidt-group',
    name: 'The Jay Schmidt Group',
    tagline: "Wisconsin's #1 Volume Team (440+ closings last year)",
    brokerage: 'Keller Williams North Shore',
    offices: ['4050 N Oakland Ave, Shorewood (Metro Milwaukee)'],
    city: 'Shorewood',
    state: 'Wisconsin',
    stateSlug: 'wisconsin',
    stateAbbr: 'WI',
    phone: '414-852-6153',
    website: 'https://jayschmidtgroup.com',
    social: {
      instagram: '@jayschmidtgroup',
    },
    highlights: {
      year: 2024,
      achievements: [
        '#1 team in the entire state',
        '440+ closings in 2024',
        'In-house stager + pro photographer on every listing',
      ],
    },
    stats: {
      closings: '440+',
      ranking: '#1 Team in Wisconsin',
    },
    signatureMove: 'Concierge "Cadillac" service—every client gets a licensed partner agent so nothing falls through the cracks.',
    perfectFor: 'North Shore families trading up or Lake Country second-home buyers.',
    oneLiner: '440 families last year can\'t be wrong.',
    featured: true,
  },
  {
    id: 'tiffany-holtz-real-estate-group',
    name: 'The Tiffany Holtz Real Estate Group',
    tagline: '#3 Coldwell Banker Team in ALL of North America',
    brokerage: 'Coldwell Banker Real Estate Group',
    offices: ['2830 E John St, Appleton'],
    city: 'Appleton',
    state: 'Wisconsin',
    stateSlug: 'wisconsin',
    stateAbbr: 'WI',
    phone: '920-574-4422',
    website: 'https://tiffanyholtz.com',
    social: {
      instagram: '@tiffanyholtzrealestate',
    },
    highlights: {
      year: 2024,
      achievements: [
        '$200M+ closed in 2024',
        '#1 team in Wisconsin (any brand)',
        'Barbara Corcoran-endorsed',
        '#3 Coldwell Banker Team in North America',
      ],
    },
    stats: {
      volume: '$200M+',
      ranking: '#3 Coldwell Banker Team (North America)',
    },
    signatureMove: 'Written "Sell it or I\'ll Buy it" guarantee + free staging, drone video, and 3D tours on every listing.',
    perfectFor: 'Luxury lake homes in Oshkosh or move-up buyers in the Fox Valley.',
    oneLiner: 'We sell so fast we\'ll buy it if we don\'t.',
    featured: true,
  },
];

// New Jersey Brokerages
export const newJerseyBrokerages: Brokerage[] = [
  {
    id: 'roman-balandin-realty-company',
    name: 'Roman Balandin Realty Company',
    tagline: "Central NJ's $300 Million Closer",
    brokerage: '100% Independent',
    offices: ['7 South Main St, Manalapan (15 min to Princeton)'],
    city: 'Manalapan',
    state: 'New Jersey',
    stateSlug: 'new-jersey',
    stateAbbr: 'NJ',
    phone: '732-851-4470',
    website: 'https://newjerseyresidence.com',
    social: {
      instagram: '@romanbalandinrealty',
    },
    highlights: {
      year: 2025,
      achievements: [
        '1,000+ homes sold lifetime',
        '$300M+ closed',
        '24-hour "Ninja Negotiations"',
      ],
    },
    stats: {
      closings: '1,000+',
      volume: '$300M+',
    },
    signatureMove: '24-hour "Ninja Negotiations"—clients brag he squeezes an extra $15k on average.',
    perfectFor: 'First-timers in Freehold or doctors relocating to Marlboro.',
    oneLiner: 'We don\'t just close—we conquer.',
    featured: true,
  },
  {
    id: 'rob-dekanski-team',
    name: 'The Rob Dekanski Team',
    tagline: 'The $3 Billion Behemoth',
    brokerage: 'Independent (powered by RE/MAX backbone)',
    offices: ['2200 Route 10 West, Parsippany (dead-center NJ)'],
    city: 'Parsippany',
    state: 'New Jersey',
    stateSlug: 'new-jersey',
    stateAbbr: 'NJ',
    phone: '973-462-7455',
    website: 'https://newjerseyrealestatenetwork.com',
    social: {
      instagram: '@robdekanski',
    },
    highlights: {
      year: 2025,
      achievements: [
        '$3,000,000,000+ career volume',
        '5,000+ families served',
        '"Zero-Down Dekanski Plan"',
      ],
    },
    stats: {
      closings: '5,000+',
      volume: '$3B+',
    },
    signatureMove: '"Zero-Down Dekanski Plan"—in-house lender finds grants most agents miss.',
    perfectFor: 'Trade-up families in Morris County or NYC commuters hunting Wayne.',
    oneLiner: 'Three billion closed and still counting your savings.',
    featured: true,
  },
  {
    id: 'south-jersey-realty',
    name: 'South Jersey Realty',
    tagline: 'Shore-to-Philly Speed Demons',
    brokerage: 'Keller Williams Shore Properties',
    offices: ['818 N Main St, Toms River (10 min to LBI bridges)'],
    city: 'Toms River',
    state: 'New Jersey',
    stateSlug: 'new-jersey',
    stateAbbr: 'NJ',
    phone: '609-693-2800',
    website: 'https://southjerseyrealty.com',
    social: {
      instagram: '@southjerseyrealty',
    },
    highlights: {
      year: 2025,
      achievements: [
        '400+ closings last 12 months',
        'Top 1% KW NJ',
        '"48-Hour Shore Blitz"',
      ],
    },
    stats: {
      closings: '400+',
      ranking: 'Top 1% KW NJ',
    },
    signatureMove: '"48-Hour Shore Blitz"—drone video + Matterport + TikTok reel = 3 offers in the first weekend.',
    perfectFor: 'Vacation-home buyers in Barnegat or Cherry Hill empty-nesters cashing out.',
    oneLiner: 'From bay to bay in 48 hours.',
    featured: true,
  },
];

// Combined brokerages array
const allBrokerages = [...wisconsinBrokerages, ...newJerseyBrokerages];

// Helper functions
export function getAllBrokerages(): Brokerage[] {
  return allBrokerages;
}

export function getBrokerageById(id: string): Brokerage | undefined {
  return allBrokerages.find((brokerage) => brokerage.id === id);
}

export function getBrokeragesByState(stateSlug: string): Brokerage[] {
  return allBrokerages.filter((brokerage) => brokerage.stateSlug === stateSlug);
}

export function getFeaturedBrokerages(): Brokerage[] {
  return allBrokerages.filter((brokerage) => brokerage.featured);
}

export interface StateDirectory {
  name: string;
  slug: string;
  abbr: string;
  description: string;
  brokerageCount: number;
}

export const stateDirectories: StateDirectory[] = [
  {
    name: 'Wisconsin',
    slug: 'wisconsin',
    abbr: 'WI',
    description: 'Discover Wisconsin\'s top-performing real estate brokerages and teams driving innovation in the Badger State.',
    brokerageCount: wisconsinBrokerages.length,
  },
  {
    name: 'New Jersey',
    slug: 'new-jersey',
    abbr: 'NJ',
    description: 'Explore New Jersey\'s elite real estate teams from the Shore to Central Jersey, dominating one of America\'s most competitive markets.',
    brokerageCount: newJerseyBrokerages.length,
  },
];

export function getAllStates(): StateDirectory[] {
  return stateDirectories;
}
