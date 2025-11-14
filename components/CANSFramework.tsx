'use client';

import Link from 'next/link';

// Data structure for each framework phase
interface StrategyCard {
  title: string;
  items: string[];
  variant?: 'light' | 'dark';
}

interface Phase {
  letter: string;
  title: string;
  description: string;
  strategies: StrategyCard[];
  bgColor: string;
}

// Framework data
const frameworkPhases: Phase[] = [
  {
    letter: 'C',
    title: 'Catch',
    description: 'Initial lead generation through Google systems',
    bgColor: 'bg-off-black',
    strategies: [
      {
        title: 'Google Business Profile',
        items: ['Short-term Play', 'Seller Leads', 'Hard to Scale'],
        variant: 'light',
      },
      {
        title: 'Search Engine Optimization',
        items: ['Long-term Play', 'Mainly Buyer Leads', 'Compounds'],
        variant: 'light',
      },
      {
        title: 'Google Search Ads',
        items: ['Short-term Play', 'Mixed Leads', 'Scales but Expensive'],
        variant: 'light',
      },
    ],
  },
  {
    letter: 'A',
    title: 'Amplify',
    description: 'Scale and warm leads through targeted campaigns',
    bgColor: 'bg-gray-dark',
    strategies: [
      {
        title: 'Google P-Max Ads (Cold)',
        items: ['Short-term Play', 'High Volume', 'Cold Leads', 'Expensive'],
        variant: 'dark',
      },
      {
        title: 'Email Newsletter (Warm)',
        items: ['Long-term Play', 'Low Volume', 'Warm Leads', 'Cheap'],
        variant: 'dark',
      },
    ],
  },
  {
    letter: 'N',
    title: 'Nurture & Service',
    description: 'Convert and manage leads through systematic follow-up',
    bgColor: 'bg-off-black',
    strategies: [
      {
        title: 'SMS & Email Automations',
        items: ['High Volume', 'Colder Leads', 'Scales'],
        variant: 'light',
      },
      {
        title: 'Manual Calls',
        items: ['Low Volume', 'Warmest Leads', 'Hard to Scale'],
        variant: 'light',
      },
    ],
  },
];

// Strategy Card Component
function StrategyCard({ title, items, variant = 'light' }: StrategyCard) {
  const cardStyles =
    variant === 'light'
      ? 'bg-gray-50 border-gray-200 hover:border-off-black'
      : 'bg-gray-900 border-gray-700 hover:border-off-black';
  
  const titleStyles = variant === 'light' ? 'text-off-black' : 'text-white';
  const itemStyles = variant === 'light' ? 'text-gray-dark' : 'text-gray-300';

  return (
    <div className={`p-6 border transition-all duration-400 ${cardStyles}`}>
      <h4 className={`text-xl font-serif font-light mb-3 ${titleStyles}`}>
        {title}
      </h4>
      <ul className={`text-sm space-y-2 ${itemStyles}`}>
        {items.map((item, index) => (
          <li key={index}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}

// Phase Separator Arrow
function PhaseArrow() {
  return (
    <div className="flex justify-center my-8">
      <div className="w-px h-12 bg-gray-300"></div>
    </div>
  );
}

// Phase Icon
function PhaseIcon({ letter, bgColor }: { letter: string; bgColor: string }) {
  return (
    <div className={`w-16 h-16 ${bgColor} text-white flex items-center justify-center rounded-full flex-shrink-0`}>
      <span className="text-2xl font-serif font-light">{letter}</span>
    </div>
  );
}

// Phase Component
function Phase({ phase, isLast = false }: { phase: Phase; isLast?: boolean }) {
  return (
    <>
      <div className="mb-12">
        {/* Phase Header */}
        <div className="flex items-center mb-8">
          <PhaseIcon letter={phase.letter} bgColor={phase.bgColor} />
          <div className="ml-6">
            <h3 className="text-3xl font-serif font-light text-off-black mb-2">
              {phase.title}
            </h3>
            <p className="text-gray-dark">{phase.description}</p>
          </div>
        </div>

        {/* Strategy Cards */}
        <div
          className={`grid grid-cols-1 gap-6 ml-0 md:ml-22 ${
            phase.strategies.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'
          }`}
        >
          {phase.strategies.map((strategy, index) => (
            <StrategyCard key={index} {...strategy} />
          ))}
        </div>
      </div>

      {/* Arrow separator (except after last phase) */}
      {!isLast && <PhaseArrow />}
    </>
  );
}

// Main CANS Framework Component
export default function CANSFramework() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-off-black mb-4">
            The CANS Framework
          </h2>
          <div className="w-24 h-px bg-off-black mx-auto mb-6"></div>
          <p className="text-gray-dark max-w-3xl mx-auto text-lg">
            Our proprietary lead generation system that leverages Google's ecosystem to
            deliver predictable, scalable results for luxury real estate professionals.
          </p>
        </div>

        {/* Framework Flow */}
        <div className="max-w-6xl mx-auto">
          {frameworkPhases.map((phase, index) => (
            <Phase
              key={phase.letter}
              phase={phase}
              isLast={index === frameworkPhases.length - 1}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-dark mb-6">
            Ready to implement the CANS Framework for your real estate business?
          </p>
          <Link href="/contact" className="btn-primary">
            Get Your CANS Strategy
          </Link>
        </div>
      </div>
    </section>
  );
}

