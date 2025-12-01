import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Add 1–2 Listings Every Month Using ONLY Google Business Profile & LSAs | DMR Media',
  description: 'Discover the proven system to add 1–2 listings every month using only Google Business Profile and Local Service Ads. No website needed. Free webinar training.',
  openGraph: {
    title: 'How to Add 1–2 Listings Every Month Using ONLY Google Business Profile & LSAs',
    description: 'Free webinar: Learn how to get more listings using Google Business Profile and LSAs.',
    type: 'website',
  },
};

export default function AddListingsLandingPage() {
  const videoId = 'xO8zNVewNOA';
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&rel=0&modestbranding=1`;

  const stats = [
    { value: '1–2', label: 'New Listings Per Month', description: 'Using only GBP & LSAs' },
    { value: '100+', label: 'Agents Trained', description: 'Nationwide success stories' },
    { value: '$11K', label: 'Average Monthly GCI', description: 'From our marketing systems' },
  ];

  const testimonials = [
    {
      name: 'Rick Grueble',
      company: 'Visions First Realty',
      location: 'Ashland, WI',
      text: 'DMR Media\'s strategic approach has yielded remarkable results, consistently pushing our website to top rankings for key real estate search terms.',
    },
    {
      name: 'Jade Goodhue',
      company: 'Legendary Real Services',
      location: 'Lake Geneva, WI',
      text: 'He works with us like a partner, rather than a vendor. If you have the opportunity to work with him, just DO IT. You\'ll be grateful you did!',
    },
    {
      name: 'Justin Armbruster',
      company: 'The Armbruster Team',
      location: 'Topeka, KS',
      text: 'Andrew & his team are great communicators and definitely know their stuff. True professionals!',
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--surface-base)]">
      {/* Hero Section with VSL */}
      <section className="relative py-12 sm:py-16 lg:py-20">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <div className="text-center mb-8 sm:mb-12">
              <span className="uppercase tracking-[0.35em] text-[10px] text-[var(--color-ink-400)] mb-4 block">
                Free Training
              </span>
              <h1 className="text-[32px] sm:text-[42px] lg:text-[52px] font-serif font-light text-[var(--color-off-black)] leading-[1.05] tracking-tight mb-6">
                How to Add 1–2 Listings Every Month Using ONLY Google Business Profile & LSAs
                <span className="text-[var(--color-trust)] text-[1.05em] align-baseline">.</span>
              </h1>
              <p className="text-base sm:text-lg text-[var(--color-ink-400)] leading-[1.55] max-w-2xl mx-auto">
                No website needed. Discover the proven system that's helping real estate agents dominate their local markets.
              </p>
            </div>

            {/* Video Container */}
            <div className="relative w-full rounded-[24px] overflow-hidden border border-[var(--color-ink-200)] bg-white/80 backdrop-blur-sm shadow-[0_24px_64px_rgba(15,15,15,0.08)] mb-12">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src={embedUrl}
                  title="How to Add 1–2 Listings Every Month Using ONLY Google Business Profile & LSAs"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                  style={{ border: 'none' }}
                />
              </div>
            </div>

            {/* Social Proof Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="rounded-[20px] border border-[var(--color-ink-200)] bg-white/70 backdrop-blur-sm p-8 text-center hover:border-[var(--color-trust)] transition-colors duration-300"
                >
                  <span className="text-4xl md:text-5xl font-serif font-light text-[var(--color-off-black)] block mb-3">
                    {stat.value}
                  </span>
                  <span className="text-sm uppercase tracking-[0.3em] text-[var(--color-ink-400)] block mb-2">
                    {stat.label}
                  </span>
                  <p className="text-xs text-[var(--color-ink-400)] leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-16 bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-light text-[var(--color-off-black)] mb-4 tracking-tight">
                What You'll Discover
              </h2>
              <div className="w-24 h-px bg-[var(--color-ink-200)] mx-auto mb-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-trust)]/10 flex items-center justify-center">
                  <span className="text-[var(--color-trust)] text-sm font-serif">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-light text-[var(--color-off-black)] mb-2">
                    Google Business Profile Optimization
                  </h3>
                  <p className="text-sm text-[var(--color-ink-400)] leading-relaxed">
                    The exact setup and optimization strategies that get you found by motivated sellers in your market.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-trust)]/10 flex items-center justify-center">
                  <span className="text-[var(--color-trust)] text-sm font-serif">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-light text-[var(--color-off-black)] mb-2">
                    Local Service Ads Strategy
                  </h3>
                  <p className="text-sm text-[var(--color-ink-400)] leading-relaxed">
                    How to dominate Google's Local Service Ads without breaking the bank or needing a website.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-trust)]/10 flex items-center justify-center">
                  <span className="text-[var(--color-trust)] text-sm font-serif">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-light text-[var(--color-off-black)] mb-2">
                    Proven Lead Generation System
                  </h3>
                  <p className="text-sm text-[var(--color-ink-400)] leading-relaxed">
                    The step-by-step process that converts local searches into listing appointments.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-trust)]/10 flex items-center justify-center">
                  <span className="text-[var(--color-trust)] text-sm font-serif">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-light text-[var(--color-off-black)] mb-2">
                    No Website Required
                  </h3>
                  <p className="text-sm text-[var(--color-ink-400)] leading-relaxed">
                    Learn how to generate listings using only free and low-cost Google tools.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-[var(--surface-base)]">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-light text-[var(--color-off-black)] mb-4 tracking-tight">
                Real Results from Real Agents
              </h2>
              <div className="w-24 h-px bg-[var(--color-ink-200)] mx-auto mb-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="rounded-[20px] border border-[var(--color-ink-200)] bg-white/80 backdrop-blur-sm p-6 hover:border-[var(--color-trust)] transition-colors duration-300"
                >
                  <p className="text-sm text-[var(--color-ink-400)] leading-relaxed mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t border-[var(--color-ink-200)] pt-4">
                    <p className="text-sm font-serif font-light text-[var(--color-off-black)]">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-[var(--color-ink-400)] uppercase tracking-[0.2em]">
                      {testimonial.company}
                    </p>
                    <p className="text-xs text-[var(--color-ink-400)] mt-1">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center">
            <div className="rounded-[28px] border border-[var(--color-ink-200)] bg-white/85 backdrop-blur-sm px-10 py-16 md:px-16 md:py-20">
              <h2 className="text-3xl sm:text-4xl font-serif font-light text-[var(--color-off-black)] mb-6 tracking-tight">
                Ready to Get More Listings?
              </h2>
              <p className="text-sm sm:text-base text-[var(--color-ink-400)] max-w-2xl mx-auto mb-8 leading-relaxed">
                Watch the full training above to discover how to add 1–2 listings every month using only Google Business Profile and Local Service Ads.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-full px-6 py-3 bg-[var(--color-off-black)] text-white uppercase tracking-[0.3em] text-[11px] hover:bg-black transition-colors duration-300"
                >
                  Get Started Today
                </Link>
                <Link
                  href="/calendar"
                  className="inline-flex items-center gap-3 rounded-full px-6 py-3 border border-[var(--color-ink-200)] text-[var(--color-off-black)] uppercase tracking-[0.3em] text-[11px] hover:border-[var(--color-trust)] hover:text-[var(--color-trust)] transition-colors duration-300"
                >
                  Schedule a Call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

