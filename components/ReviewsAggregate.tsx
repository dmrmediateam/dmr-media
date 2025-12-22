'use client';

import { motion } from 'framer-motion';

const reviews = [
  // Trustpilot Reviews
  {
    id: 1,
    name: 'Linda Farwell',
    company: '',
    location: 'US',
    rating: 5,
    text: 'They make it easy to understand. We interviewed a few different companies and had follow up meetings with scheduled with them. Once we met with Andrew at DMR, it was a done deal. In one meeting he not only presented himself in clear, easy to understand terms, but was very patient with us in explaining how all this works(this stuff is way over my head) He also gave us instant tips without even knowing if we were going to use him. Once we hung up, we cancelled all the other meetings and decided to go with DMR. They have been fantastic.',
    date: 'November 11, 2025',
    source: 'Trustpilot',
  },
  {
    id: 2,
    name: 'Samantha Marquis',
    company: '',
    location: 'US',
    rating: 5,
    text: 'Look No Further. We had been looking into SEO for a bit and interviewed some other companies. After each interview, we walked away feeling like we had to think about it. This was absolutely not the case with DMR. From the start, we knew their company was the right fit. We were thoroughly impressed with their knowledge, their willingness to give us tips immediately, and their easy communication style. SEO can be intimidating and daunting, but DMR holds your hand, answers your questions, and has great follow through. We never feel uncomfortable asking questions and they never make us feel less-then. Every bit of the process we have been through with them thus far has been exceptional. We highly recommend them',
    date: 'December 9, 2025',
    source: 'Trustpilot',
  },
  {
    id: 3,
    name: 'William Breaden',
    company: '',
    location: 'US',
    rating: 5,
    text: 'New Real Estate Website coordination. Andrew was great to work with on setting up new Real Estate website and getting everything linked and functional. He was always willing to listen and help guide us through the process to get what we considered to be the best outcome. We highly recommend him.',
    date: 'December 9, 2025',
    source: 'Trustpilot',
  },
  {
    id: 4,
    name: 'Iris Harlow',
    company: '',
    location: 'ID',
    rating: 5,
    text: 'I worked with DMR and ranked within the first week! It was awesome!',
    date: 'October 21, 2025',
    source: 'Trustpilot',
  },
  {
    id: 5,
    name: 'Max De Leonardis',
    company: '',
    location: 'US',
    rating: 5,
    text: 'Built me a great website for my real estate business.',
    date: 'October 21, 2025',
    source: 'Trustpilot',
  },
  {
    id: 6,
    name: 'Justin',
    company: '',
    location: 'US',
    rating: 5,
    text: 'Great Communication, True Professionals! Andrew & his team are great communicators and definitely know their stuff. True professionals!',
    date: 'October 16, 2025',
    source: 'Trustpilot',
  },
  {
    id: 7,
    name: 'Rick Gruebele',
    company: 'Visions First Realty',
    location: 'US',
    rating: 5,
    text: 'Exceptional SEO services. As the Broker/Owner of Visions First Realty, I cannot speak highly enough of DMR Media\'s exceptional SEO services. Their strategic approach to improving our online presence has yielded remarkable results, consistently pushing our website to top rankings for key real estate search terms in our market. From the outset, their team demonstrated a deep understanding of the real estate industry\'s unique digital marketing challenges. They implemented a comprehensive SEO strategy that included local search optimization, content enhancement, and technical improvements to our website enhancing our website\'s performance, while maintaining a user friendly website. The results have been outstanding. Our organic traffic has increased significantly, and we\'re now ranking on the first page for numerous competitive real estate keywords. Most importantly, this improved visibility has translated into tangible results - more qualified leads and increased property inquiries by both sellers and buyers. What truly sets DMR Media apart is their transparent communication and regular performance reporting. They keep us informed of all optimization efforts and provide detailed analytics that clearly show the return on our investment. For any real estate business looking to enhance their digital presence, I highly recommend DMR Media\'s SEO services. They\'ve proven to be an invaluable partner in our continued ongoing success. Thank you, Andrew for all the services you provide for Visions First Realty.',
    date: 'February 7, 2025',
    source: 'Trustpilot',
  },
  // Google Reviews
  {
    id: 8,
    name: 'Jade Goodhue',
    company: '',
    location: 'US',
    rating: 5,
    text: 'We started working with Andrew about a month ago. He\'s articulate, responsive, and provides amazing weekly updates. He\'s taken the time to really explain what the issues were on why we weren\'t ranking despite all our blogs and videos.',
    date: '10 months ago',
    source: 'Google',
  },
  {
    id: 9,
    name: 'Andy Peterson',
    company: '',
    location: 'US',
    rating: 5,
    text: 'Andrew worked with me personally to completely change my presence online - with a perfect mix of personal and professional. He was always on time, asking the right questions and got it done fast. Highly recommend and will be working with him consistently.',
    date: '2 years ago',
    source: 'Google',
  },
  {
    id: 10,
    name: 'W. John Coletta',
    company: '',
    location: 'US',
    rating: 5,
    text: 'DMR Media Specialists is a top-notch business! They brilliantly transformed my website! They are fast; they are great communicators; and they contacted me every step of the way, making sure that I was satisfied. Not only are they on the ball, but they deliver exceptional results.',
    date: '2 years ago',
    source: 'Google',
  },
  {
    id: 11,
    name: 'Tara Parks',
    company: '',
    location: 'US',
    rating: 5,
    text: 'Andrew is very knowledgeable about building websites and SEO best practices and he completes changes very quickly. I highly recommend DMR Media Specialists for your next project or website build.',
    date: 'a year ago',
    source: 'Google',
  },
  {
    id: 12,
    name: 'Marsha VanArk',
    company: '',
    location: 'US',
    rating: 5,
    text: 'Andrew was so helpful! I asked him to see why my website was coming up in unrelated searches. He went above and beyond to investigate the problems. He provided me with valuable insight and feedback that helped me move forward and solve the problems. Thank you so much, Andrew!!!',
    date: 'a year ago',
    source: 'Google',
  },
  {
    id: 13,
    name: 'Tony Jordan',
    company: '',
    location: 'US',
    rating: 5,
    text: 'I\'ve been working with Andrew for years! Simply put, he\'s an SEO genius!',
    date: '8 months ago',
    source: 'Google',
  },
  {
    id: 14,
    name: 'Jason Rohm',
    company: '',
    location: 'US',
    rating: 5,
    text: 'I hired DMR Media to recreate and update my web presence. I was very happy with the outcome. They have continued to follow up with support and updates after the project was complete.',
    date: '2 years ago',
    source: 'Google',
  },
  {
    id: 15,
    name: 'Allison Shuler',
    company: '',
    location: 'US',
    rating: 5,
    text: 'DMR built a website for the coffee shop that I manage. I worked directly with the owner who was very helpful and provided excellent service! Would definitely recommend DMR to anyone looking for a personalized website to help grow their business!',
    date: 'a year ago',
    source: 'Google',
  },
];

const ReviewsAggregate = () => {
  const averageRating = 5;
  const videoId = 'ng_7ysEAlkc';
  const embedUrl = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`;

  return (
    <section className="py-20 bg-white">
      <div className="container-max">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <span className="uppercase tracking-[0.35em] text-[11px] text-[var(--color-ink-300)] mb-4 block">
              Trusted by Real Estate Professionals
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-light text-[var(--color-off-black)] mb-4 tracking-tight">
              What Our Clients Say
              <span className="text-[var(--color-trust)] text-[1.05em]">.</span>
            </h2>
            
            {/* Aggregate Score */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="text-center">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-5xl font-serif font-light text-[var(--color-off-black)]">
                    {averageRating}
                  </span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-6 h-6 text-[var(--color-trust)]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-base text-[var(--color-ink-300)]">
                  Based on Google & Trustpilot
                </p>
              </div>
            </div>
          </motion.div>

          {/* Reviews Grid - Including Video */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Video Testimonial - Styled as a review card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: 0 }}
              className="rounded-[24px] border border-[var(--color-ink-200)] bg-white/80 backdrop-blur-sm p-6 hover:border-[var(--color-trust)] transition-colors duration-300 flex flex-col overflow-hidden"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-[var(--color-trust)]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Video */}
              <div className="relative w-full mb-6 flex-grow" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src={embedUrl}
                  title="DMR Media Client Testimonial"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-[16px]"
                  style={{ border: 'none' }}
                />
              </div>

              {/* Reviewer Info */}
              <div className="mt-auto pt-4 border-t border-[var(--color-ink-200)]">
                <div className="font-serif font-light text-[var(--color-off-black)] text-lg">
                  Video Testimonial
                </div>
                <div className="text-xs text-[var(--color-ink-300)] mt-1">
                  Client Success Story
                </div>
              </div>
            </motion.div>
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
                className="rounded-[24px] border border-[var(--color-ink-200)] bg-white/80 backdrop-blur-sm p-6 hover:border-[var(--color-trust)] transition-colors duration-300 flex flex-col"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-[var(--color-trust)]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Review Text */}
                <blockquote className="text-base text-[var(--color-ink-300)] leading-relaxed mb-6 flex-grow italic">
                  "{review.text}"
                </blockquote>

                {/* Reviewer Info */}
                <div className="mt-auto pt-4 border-t border-[var(--color-ink-200)]">
                  <div className="font-serif font-light text-[var(--color-off-black)] text-lg">
                    {review.name}
                  </div>
                  {review.company && (
                    <div className="text-sm text-[var(--color-trust)] font-semibold mt-1">
                      {review.company}
                    </div>
                  )}
                  <div className="flex items-center gap-2 mt-1">
                    <div className="text-xs text-[var(--color-ink-300)]">
                      {review.date}
                    </div>
                    {review.source && (
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-ink-300)] bg-[var(--color-ink-200)] px-2 py-0.5 rounded-full">
                        {review.source}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trustpilot Link & See More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12 space-y-6"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="https://www.trustpilot.com/review/dmrmedia.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[var(--color-trust)] hover:text-[var(--color-off-black)] transition-colors duration-300"
              >
                <span className="text-sm uppercase tracking-[0.3em]">Read All Reviews on Trustpilot</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            
            {/* See More Button */}
            <motion.a
              href="/case-studies"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 rounded-full px-8 py-4 bg-[var(--color-off-black)] text-white uppercase tracking-[0.3em] text-sm font-semibold hover:bg-black transition-colors duration-300"
            >
              See More Case Studies
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsAggregate;

