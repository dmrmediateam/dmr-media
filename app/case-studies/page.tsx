import Link from 'next/link';
import Image from 'next/image';

export default function CaseStudiesPage() {
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
      rating: 5,
      category: "SEO & Content Strategy"
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
      rating: 5,
      category: "Website Development & SEO"
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
      rating: 5,
      category: "SEO Strategy & Lead Generation"
    }
  ];

  return (
    <div className="min-h-screen bg-off-white">
      {/* Hero Section */}
      <section className="section-padding bg-off-black text-off-white">
        <div className="container-max">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-light text-off-white mb-6">
              Success Stories
            </h1>
            <div className="w-24 h-px bg-off-white mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Real results from luxury real estate professionals who transformed their business with DMR <span className="italic">Media</span>
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {caseStudies.map((study) => (
              <Link
                key={study.id}
                href={`/case-study/${study.id}`}
                className="group bg-white border border-gray-200 overflow-hidden hover:border-off-black transition-all duration-400"
              >
                {/* Image */}
                <div className="relative h-64 bg-gray-light overflow-hidden">
                  <Image
                    src={study.image}
                    alt={`${study.client} case study results`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-400"
                  />
                  <div className="absolute top-4 left-4 bg-off-black text-off-white px-3 py-1 text-xs uppercase tracking-wider">
                    {study.category}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-off-white/90 text-off-black px-3 py-1 text-sm font-medium">
                    {study.result}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(study.rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  <h3 className="text-2xl font-serif font-light text-off-black mb-3 group-hover:text-gray-dark transition-colors duration-400">
                    {study.title}
                  </h3>

                  <div className="text-gray-dark mb-4">
                    <div className="font-medium text-off-black">{study.client}</div>
                    <div className="text-sm">{study.company}</div>
                  </div>

                  <p className="text-gray-dark leading-relaxed mb-6">
                    {study.description}
                  </p>

                  <blockquote className="text-gray-dark italic mb-6 border-l-4 border-off-black pl-4">
                    "{study.testimonial}"
                  </blockquote>

                  <div className="flex items-center text-off-black group-hover:text-gray-dark transition-colors duration-400">
                    <span className="text-sm font-medium mr-2">Read Full Case Study</span>
                    <span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Coming Soon */}
          <div className="mt-16 text-center">
            <div className="bg-off-white p-12 border border-gray-200">
              <h3 className="text-2xl font-serif font-light text-off-black mb-4">
                More Success Stories Coming Soon
              </h3>
              <p className="text-gray-dark mb-6">
                We're working on documenting more client success stories. Check back soon for additional case studies.
              </p>
              <Link href="/contact" className="btn-outline">
                Start Your Success Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-off-black text-off-white">
        <div className="container-max text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-off-white mb-6">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Join the luxury real estate professionals who have transformed their digital marketing with DMR <span className="italic">Media</span>.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Start Your Campaign
            </Link>
            <Link href="/" className="btn-outline">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
