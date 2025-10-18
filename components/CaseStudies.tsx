import Link from 'next/link';
import Image from 'next/image';

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 'jade-legendary-real-estate',
      title: "Jade's Success Story",
      client: "Jade Goodhue",
      company: "Legendary Real Estate Services",
      result: "3x Lead Generation",
      description: "From frustrated content creator to lead generation powerhouse - how we transformed Jade's digital marketing strategy and tripled her inbound leads in one quarter.",
      image: "/images/JadeCRM.png",
      testimonial: "He works with us like a partner, rather than a vendor dealing with just another number.",
      rating: 5
    },
    {
      id: 'michael-seo-transformation',
      title: "Michael's SEO Transformation",
      client: "Michael",
      company: "Real Estate Professional",
      result: "21x Impressions",
      description: "From abandoned SEO to 21x impressions growth - how we transformed Michael's website into a lead generation machine in just 7.5 weeks.",
      image: "/images/MichealTraffic.png",
      testimonial: "Despite being camera-shy, Michael gave us a video testimonial!",
      rating: 5
    },
    {
      id: 'rick-visions-first-realty',
      title: "Rick's SEO Transformation",
      client: "Rick",
      company: "Visions First Realty",
      result: "2-3 Leads/Day",
      description: "From wrong keywords to qualified leads - how we fixed Rick's SEO strategy and transformed his website into a lead generation machine.",
      image: "/images/RickAfter.png",
      testimonial: "Exceptional SEO services with strategic approach",
      rating: 5
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-off-black mb-4">
            Success Stories
          </h2>
          <div className="w-24 h-px bg-off-black mx-auto mb-6"></div>
          <p className="text-gray-dark max-w-2xl mx-auto">
            Real results from luxury real estate professionals who transformed their business
          </p>
        </div>

        {/* Brick/Staggered Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.slice(0, 2).map((study, index) => (
              <Link
                key={study.id}
                href={`/case-study/${study.id}`}
                className="relative h-[500px] overflow-hidden group cursor-pointer"
              >
                {/* Background Image */}
                <Image
                  src={study.image}
                  alt={`${study.client} case study results`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Black Overlay */}
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-all duration-500"></div>
                
                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-10">
                  {/* Top Section */}
                  <div>
                    <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs uppercase tracking-wider mb-4">
                      Case Study
                    </div>
                    
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(study.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Section */}
                  <div>
                    {/* Result Badge */}
                    <div className="inline-block px-5 py-2 bg-gold/90 text-off-black font-bold text-lg mb-6 group-hover:scale-105 transition-transform duration-500">
                      {study.result}
                    </div>

                    <h3 className="text-3xl font-serif font-light text-white mb-3 group-hover:text-gold transition-colors duration-500">
                      {study.title}
                    </h3>

                    <div className="text-white/90 mb-4">
                      <div className="font-semibold text-lg">{study.client}</div>
                      <div className="text-sm">{study.company}</div>
                    </div>

                    <p className="text-white/80 leading-relaxed mb-6">
                      {study.description}
                    </p>

                    <div className="flex items-center text-white group-hover:text-gold transition-colors duration-500">
                      <span className="text-sm font-medium mr-2">Read Full Case Study</span>
                      <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* View All Case Studies CTA */}
        <div className="text-center mt-12">
          <Link
            href="/case-studies"
            className="btn-outline inline-block"
          >
            View All Success Stories
          </Link>
        </div>
      </div>
    </section>
  );
}
