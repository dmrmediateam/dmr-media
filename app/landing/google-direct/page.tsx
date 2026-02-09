'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Script from 'next/script';
import Image from 'next/image';
import ClientLogosSlider from '@/components/ClientLogosSlider';
import ReviewsAggregate from '@/components/ReviewsAggregate';
import LandingCaseStudies from '@/components/landing/LandingCaseStudies';

export default function GoogleDirectLandingPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    website: '',
    transactions2025: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showFloatingReviews, setShowFloatingReviews] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  // Hide header, footer, and AI chatbot for this landing page
  useEffect(() => {
    const nav = document.querySelector('nav') as HTMLElement | null;
    const footer = document.querySelector('footer') as HTMLElement | null;
    
    const hideElfsightWidgets = () => {
      const selectors = [
        '.elfsight-app-90e5dbc1-4850-470a-b384-914842649785',
        '[class*="elfsight"]',
        '[id*="elfsight"]',
        '[data-elfsight]',
        'iframe[src*="elfsight"]',
      ];
      
      selectors.forEach(selector => {
        try {
          const elements = document.querySelectorAll(selector) as NodeListOf<HTMLElement>;
          elements.forEach(el => {
            if (el) el.style.display = 'none';
          });
        } catch (e) {
          // Ignore selector errors
        }
      });
    };
    
    if (nav) nav.style.display = 'none';
    if (footer) footer.style.display = 'none';
    hideElfsightWidgets();
    
    const observer = new MutationObserver(() => {
      hideElfsightWidgets();
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
    
    const intervalId = setInterval(hideElfsightWidgets, 500);
    
    return () => {
      if (nav) nav.style.display = '';
      if (footer) footer.style.display = '';
      observer.disconnect();
      clearInterval(intervalId);
    };
  }, []);

  // Scroll progress to form and detect hero scroll past
  useEffect(() => {
    const handleScroll = () => {
      if (!formRef.current) return;
      const formTop = formRef.current.offsetTop;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Calculate progress from top of page to form
      const totalDistance = formTop;
      const scrolled = scrollY;
      const progress = Math.min((scrolled / totalDistance) * 100, 100);
      setScrollProgress(progress);

      // Check if hero section has been scrolled past
      if (heroRef.current) {
        const heroBottom = heroRef.current.offsetTop + heroRef.current.offsetHeight;
        if (scrollY > heroBottom) {
          setShowFloatingReviews(true);
        } else {
          setShowFloatingReviews(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send to our API route which proxies to Zapier server-side
      const response = await fetch('/api/google-direct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          website: formData.website,
          transactions2025: formData.transactions2025,
          source: 'Google Direct Landing Page',
        }),
      });

      if (response.ok) {
        // Track conversion
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'conversion', {
            'send_to': 'AW-CONVERSION_ID/AW-CONVERSION_LABEL',
            'value': 1.0,
            'currency': 'USD'
          });
        }

        // Facebook Pixel conversion
        if (typeof window !== 'undefined' && (window as any).fbq) {
          (window as any).fbq('track', 'Lead');
        }

        // Redirect to thank you page
        window.location.href = '/landing/thank-you';
      } else {
        const errorData = await response.json();
        console.error('Form submission error:', errorData);
        alert('There was an error submitting your form. Please try again.');
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your form. Please try again.');
      setIsSubmitting(false);
    }
  };


  return (
    <>
      {/* Google Ads Conversion Tracking */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-CONVERSION_ID"
        strategy="afterInteractive"
      />
      <Script id="google-ads" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-CONVERSION_ID');
        `}
      </Script>

      <div className="min-h-screen bg-white">
        {/* Scroll Progress Bar */}
        <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
          <div 
            className="h-full bg-[var(--color-off-black)] transition-all duration-150 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Hero Section */}
        <section ref={heroRef} className="relative py-16 md:py-24 px-4 md:px-6">
          {/* Gray fade overlay from top */}
          <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-gray-900/20 via-gray-900/10 to-transparent pointer-events-none z-0" />
          
          <div className="container-max max-w-4xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center md:justify-start mb-6"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/90 backdrop-blur-sm border border-[var(--color-ink-200)] rounded-full">
                <span className="text-[22px] text-[var(--color-off-black)] font-serif whitespace-nowrap">5 stars since 2022</span>
                <div className="flex items-center gap-2">
                  <Image
                    src="/images/Untitled design (81).png"
                    alt="Trustpilot"
                    width={72}
                    height={24}
                    className="h-5 md:h-6 w-auto object-contain"
                  />
                  <Image
                    src="/images/Google__G__logo.svg.png"
                    alt="Google"
                    width={58}
                    height={19}
                    className="h-4 md:h-5 w-auto object-contain"
                  />
                </div>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-serif font-light text-[var(--color-off-black)] leading-[1.1] tracking-tight mb-6 text-center md:text-left"
            >
              Finally The <em>Boring System Top Agents</em> Use to Turn Website Traffic Into <em>Daily Buyer & Seller Conversations!</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[22px] text-[var(--color-off-black)] font-serif mb-12 text-center md:text-left"
            >
              Your website is a brochure. Your competitors built a machine.
            </motion.p>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center mt-8 md:mt-12"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="cursor-pointer"
                onClick={() => {
                  const nextSection = document.querySelector('#form') || document.querySelector('section:nth-of-type(2)');
                  nextSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <svg
                  className="w-6 h-6 text-[var(--color-off-black)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Floating Reviews Pill - Bottom Left */}
        <motion.div
          initial={{ opacity: 0, x: -100, y: 100 }}
          animate={{
            opacity: showFloatingReviews ? 1 : 0,
            x: showFloatingReviews ? 0 : -100,
            y: showFloatingReviews ? 0 : 100,
            scale: showFloatingReviews ? 1 : 0.8,
          }}
          transition={{
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={`fixed bottom-6 left-6 z-40 ${showFloatingReviews ? 'pointer-events-auto' : 'pointer-events-none'}`}
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/95 backdrop-blur-sm border border-[var(--color-ink-200)] rounded-full shadow-lg">
            <span className="text-[18px] md:text-[22px] text-[var(--color-off-black)] font-serif whitespace-nowrap">5 stars since 2022</span>
            <div className="flex items-center gap-2">
              <Image
                src="/images/Untitled design (81).png"
                alt="Trustpilot"
                width={72}
                height={24}
                className="h-4 md:h-5 w-auto object-contain"
              />
              <Image
                src="/images/Google__G__logo.svg.png"
                alt="Google"
                width={58}
                height={19}
                className="h-3 md:h-4 w-auto object-contain"
              />
            </div>
          </div>
        </motion.div>

        {/* Scrolling Agencies */}
        <ClientLogosSlider />

        {/* Horizontal Scrolling Reviews */}
        <section className="relative py-12 md:py-16 bg-white overflow-hidden border-y border-[var(--color-ink-200)]">
          {/* Left fade gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          {/* Right fade gradient */}
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div 
            className="flex items-center gap-8 md:gap-12"
            style={{
              animation: 'scroll-horizontal 40s linear infinite',
              width: 'fit-content',
            }}
          >
            {[
              {
                name: 'Linda Farwell',
                text: 'They make it easy to understand. We interviewed a few different companies and had follow up meetings with scheduled with them. Once we met with Andrew at DMR, it was a done deal.',
                rating: 5,
              },
              {
                name: 'Samantha Marquis',
                text: 'Look No Further. We had been looking into SEO for a bit and interviewed some other companies. After each interview, we walked away feeling like we had to think about it.',
                rating: 5,
              },
              {
                name: 'William Breaden',
                text: 'New Real Estate Website coordination. Andrew was great to work with on setting up new Real Estate website and getting everything linked and functional.',
                rating: 5,
              },
              {
                name: 'Jade Goodhue',
                text: 'We started working with Andrew about a month ago. He\'s articulate, responsive, and provides amazing weekly updates.',
                rating: 5,
              },
              {
                name: 'Rick Gruebele',
                text: 'Exceptional SEO services. As the Broker/Owner of Visions First Realty, I cannot speak highly enough of DMR Media\'s exceptional SEO services.',
                rating: 5,
              },
            ].map((review, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 md:w-96 p-6 border border-[var(--color-ink-200)] bg-[var(--surface-base)]"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-[var(--color-trust)]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-[22px] text-[var(--color-off-black)] leading-relaxed font-serif mb-4">
                  &quot;{review.text}&quot;
                </blockquote>
                <p className="text-[22px] font-serif font-light text-[var(--color-off-black)]">
                  - {review.name}
                </p>
              </div>
            ))}
            {/* Duplicate for seamless scroll */}
            {[
              {
                name: 'Linda Farwell',
                text: 'They make it easy to understand. We interviewed a few different companies and had follow up meetings with scheduled with them. Once we met with Andrew at DMR, it was a done deal.',
                rating: 5,
              },
              {
                name: 'Samantha Marquis',
                text: 'Look No Further. We had been looking into SEO for a bit and interviewed some other companies. After each interview, we walked away feeling like we had to think about it.',
                rating: 5,
              },
              {
                name: 'William Breaden',
                text: 'New Real Estate Website coordination. Andrew was great to work with on setting up new Real Estate website and getting everything linked and functional.',
                rating: 5,
              },
              {
                name: 'Jade Goodhue',
                text: 'We started working with Andrew about a month ago. He\'s articulate, responsive, and provides amazing weekly updates.',
                rating: 5,
              },
              {
                name: 'Rick Gruebele',
                text: 'Exceptional SEO services. As the Broker/Owner of Visions First Realty, I cannot speak highly enough of DMR Media\'s exceptional SEO services.',
                rating: 5,
              },
            ].map((review, index) => (
              <div
                key={`dup-${index}`}
                className="flex-shrink-0 w-80 md:w-96 p-6 border border-[var(--color-ink-200)] bg-[var(--surface-base)]"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-[var(--color-trust)]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-[22px] text-[var(--color-off-black)] leading-relaxed font-serif mb-4">
                  &quot;{review.text}&quot;
                </blockquote>
                <p className="text-[22px] font-serif font-light text-[var(--color-off-black)]">
                  - {review.name}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Problem Statement */}
        <section className="py-16 md:py-24 px-4 md:px-6 bg-[var(--surface-base)]">
          <div className="container-max max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-[22px] font-serif font-light text-[var(--color-off-black)] leading-relaxed text-center">
                Most agents don&apos;t have a lead problem.<br />
                They have a conversion and follow-up problem.
              </p>
              <p className="text-[22px] text-[var(--color-off-black)] font-serif text-center">
                Running ads and hoping someone calls you back in two hours is not a system.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="container-max max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <p className="text-[22px] font-serif font-light text-[var(--color-off-black)] leading-relaxed text-center">
                Google and AI aren&apos;t magic.<br />
                They&apos;re simply tools that expand your sphere of influence if your website is built to capture, qualify, and respond instantly.
              </p>
              <p className="text-[22px] font-serif font-light text-[var(--color-off-black)] text-center">
                That&apos;s the difference between &quot;leads&quot; and real conversations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-16 md:py-24 px-4 md:px-6 bg-[var(--surface-base)]">
          <div className="container-max max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-8"
            >
              <p className="text-2xl md:text-3xl font-serif font-light text-[var(--color-off-black)]">
                What if instead of paying hundreds of dollars for cold, unresponsive leads, you could reliably pay <em>$70.93</em> for a real buyer or seller conversation?
              </p>
              
              {/* Formula */}
              <div className="mt-8 p-6 bg-[var(--surface-base)] border border-[var(--color-ink-200)]">
                <div className="text-center space-y-2">
                  <p className="text-[22px] font-serif text-[var(--color-off-black)]">
                    $9.93 / 14% = <em>$70.93</em>
                  </p>
                  <p className="text-[22px] font-serif text-[var(--color-ink-300)]">
                    (Lead) / (Conversation Rate) = Cost per Conversation
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                <div className="aspect-[4/3] overflow-hidden rounded">
                  <video
                    src="/videos/Google-Ads-Proof.mov"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] overflow-hidden rounded">
                  <video
                    src="/videos/Boldtrail-Proof.mov"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <p className="text-[22px] text-[var(--color-off-black)] font-serif mt-4">
                KVcore &amp; Google Ads Screenshots
              </p>
            </motion.div>
          </div>
        </section>

        {/* Markets Section */}
        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="container-max max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-6"
            >
              <p className="text-[22px] font-serif text-[var(--color-off-black)]">
                We&apos;ve built and managed these systems in competitive markets like:
              </p>
              <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                {['Wisconsin', 'Florida', 'California', 'New Jersey'].map((state) => (
                  <span
                    key={state}
                    className="text-[22px] font-serif font-light text-[var(--color-off-black)]"
                  >
                    {state}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 px-4 md:px-6 bg-[var(--surface-base)]">
          <div className="container-max max-w-2xl mx-auto text-center">
            <motion.a
              href="#form"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block px-8 md:px-12 py-4 md:py-5 bg-[var(--color-off-black)] text-white uppercase tracking-[0.12em] text-[22px] font-serif hover:opacity-85 transition-opacity duration-300"
            >
              15 minutes to see exactly where your website is leaking deals
            </motion.a>
          </div>
        </section>


        {/* Problem Statement 2 */}
        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="container-max max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 text-center"
            >
              <p className="text-[22px] font-serif text-[var(--color-off-black)]">
                Every month, millions of buyers and sellers search for a real estate agent online.
              </p>
              <p className="text-[22px] font-serif text-[var(--color-off-black)]">
                In your market alone, dozens of them are choosing an agent this month.
              </p>
              <p className="text-[22px] font-serif font-light text-[var(--color-off-black)]">
                If your website isn&apos;t built to convert and respond instantly, those conversations are going to someone else.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mistake Section */}
        <section className="py-16 md:py-24 px-4 md:px-6 bg-[var(--surface-base)]">
          <div className="container-max max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8 text-center"
            >
              <p className="text-2xl md:text-3xl font-serif font-light text-[var(--color-off-black)]">
                But if you&apos;re not getting any of these leads you&apos;re making ONE simple mistake.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                <div className="aspect-[4/3] overflow-hidden rounded">
                  <video
                    src="/videos/Google-Ads-Proof.mov"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/3] overflow-hidden rounded">
                  <video
                    src="/videos/Boldtrail-Proof.mov"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <p className="text-[22px] font-serif font-light text-[var(--color-off-black)] mt-8">
                This ONE fixed changed this ad account from $200+ per conversation to <em>$70.93</em>.
              </p>
              <p className="text-[22px] font-serif text-[var(--color-off-black)]">
                The mistake: treating your website like a destination instead of a conversion system.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Promise Section */}
        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="container-max max-w-4xl mx-auto text-center space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[22px] font-serif text-[var(--color-off-black)]"
            >
              No recycled tactics from 2019.<br />
              No vanity leads.<br />
              Just a system that works in today&apos;s market.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[22px] font-serif font-light text-[var(--color-off-black)]"
            >
              &quot;See why your ads aren&apos;t converting in 2026.&quot;
            </motion.p>
          </div>
        </section>

        {/* Form Section */}
        <section id="form" className="py-24 md:py-32 px-4 md:px-6 bg-[var(--surface-base)]">
          <div className="container-max max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] mb-4">
                Get a 15 min phone call to see where your website is leaking leads.
              </h2>
              <p className="text-[22px] text-[var(--color-off-black)] font-serif">
                One of our team members will reach out within 24 hours with a basic audit on your website.
              </p>
            </motion.div>

            <motion.form
              ref={formRef}
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8 bg-white p-8 md:p-12 border border-[var(--color-ink-200)]"
            >
              <div>
                <label htmlFor="name" className="block text-[22px] font-serif text-[var(--color-off-black)] mb-3 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-6 py-4 border-2 border-[var(--color-ink-200)] bg-white text-[22px] text-[var(--color-off-black)] font-serif focus:outline-none focus:border-[var(--color-off-black)] transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-[22px] font-serif text-[var(--color-off-black)] mb-3 font-medium">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-6 py-4 border-2 border-[var(--color-ink-200)] bg-white text-[22px] text-[var(--color-off-black)] font-serif focus:outline-none focus:border-[var(--color-off-black)] transition-colors"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[22px] font-serif text-[var(--color-off-black)] mb-3 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-6 py-4 border-2 border-[var(--color-ink-200)] bg-white text-[22px] text-[var(--color-off-black)] font-serif focus:outline-none focus:border-[var(--color-off-black)] transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="website" className="block text-[22px] font-serif text-[var(--color-off-black)] mb-3 font-medium">
                  Website
                </label>
                <input
                  type="text"
                  id="website"
                  required
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  className="w-full px-6 py-4 border-2 border-[var(--color-ink-200)] bg-white text-[22px] text-[var(--color-off-black)] font-serif focus:outline-none focus:border-[var(--color-off-black)] transition-colors"
                  placeholder="yourwebsite.com"
                />
              </div>

              <div>
                <label htmlFor="transactions2025" className="block text-[22px] font-serif text-[var(--color-off-black)] mb-3 font-medium">
                  Transactions Closed in 2025
                </label>
                <input
                  type="number"
                  id="transactions2025"
                  required
                  value={formData.transactions2025}
                  onChange={(e) => setFormData({ ...formData, transactions2025: e.target.value })}
                  className="w-full px-6 py-4 border-2 border-[var(--color-ink-200)] bg-white text-[22px] text-[var(--color-off-black)] font-serif focus:outline-none focus:border-[var(--color-off-black)] transition-colors"
                  placeholder="0"
                  min="0"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-5 bg-[var(--color-off-black)] text-white uppercase tracking-[0.12em] text-[22px] font-serif hover:opacity-85 transition-opacity duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </motion.form>
          </div>
        </section>

        {/* Trusted Agencies */}
        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="container-max max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-3xl font-serif font-light text-[var(--color-off-black)] mb-12 text-center"
            >
              Trusted Agencies
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {[
                '/images/ClientLogos/Untitled design (71).png',
                '/images/ClientLogos/Untitled design (63).png',
                '/images/ClientLogos/Untitled design (73).png',
                '/images/ClientLogos/Untitled design (65).png',
                '/images/ClientLogos/Untitled design (74).png',
                '/images/ClientLogos/Untitled design (67).png',
                '/images/ClientLogos/Untitled design (72).png',
              ].map((logo, index) => {
                const isSmaller = [
                  '/images/ClientLogos/Untitled design (71).png',
                  '/images/ClientLogos/Untitled design (73).png',
                  '/images/ClientLogos/Untitled design (74).png',
                  '/images/ClientLogos/Untitled design (72).png',
                ].includes(logo);
                
                return (
                  <motion.div
                    key={logo}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`flex items-center justify-center ${isSmaller ? 'h-12 md:h-16' : 'h-16 md:h-20'}`}
                    style={{ opacity: 0.8 }}
                  >
                    <Image
                      src={logo}
                      alt={`Trusted agency logo ${index + 1}`}
                      width={200}
                      height={80}
                      className="h-full w-auto object-contain"
                      loading="lazy"
                      sizes="(max-width: 768px) 100px, 200px"
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Reviews Section - Bottom */}
        <section className="py-32 bg-white border-t border-[var(--color-ink-200)]">
          <div className="container-max max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <div className="border-b border-[var(--color-ink-200)] pb-8 mb-8">
                <span className="uppercase tracking-[0.2em] text-[22px] text-[var(--color-off-black)] font-serif mb-6 block">
                  Trusted by Real Estate Professionals
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--color-off-black)] mb-8 tracking-tight">
                  What Our Clients Say.
                </h2>
                
                <div className="flex items-center justify-center gap-4">
                  <span className="text-5xl md:text-6xl font-serif font-light text-[var(--color-off-black)]">
                    5
                  </span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-6 h-6 md:w-7 md:h-7 text-[var(--color-trust)]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-[22px] text-[var(--color-off-black)] font-serif mt-6">
                  Based on Google &amp; Trustpilot
                </p>
              </div>
            </motion.div>

            {/* Reviews Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {/* Video Testimonial */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0 }}
                className="border-b border-[var(--color-ink-200)] pb-8"
              >
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
                <div className="relative w-full mb-6" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src="https://www.youtube.com/embed/ng_7ysEAlkc?rel=0&modestbranding=1"
                    title="DMR Media Client Testimonial"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                    style={{ border: 'none' }}
                  />
                </div>
                <div className="pt-4 border-t border-[var(--color-ink-200)]">
                  <p className="text-[22px] font-serif font-light text-[var(--color-off-black)]">
                    Video Testimonial
                  </p>
                  <p className="text-[22px] text-[var(--color-off-black)] font-serif mt-1">
                    Client Success Story
                  </p>
                </div>
              </motion.div>

              {/* All Reviews */}
              {[
                {
                  id: 1,
                  name: 'Linda Farwell',
                  text: 'They make it easy to understand. We interviewed a few different companies and had follow up meetings with scheduled with them. Once we met with Andrew at DMR, it was a done deal. In one meeting he not only presented himself in clear, easy to understand terms, but was very patient with us in explaining how all this works(this stuff is way over my head) He also gave us instant tips without even knowing if we were going to use him. Once we hung up, we cancelled all the other meetings and decided to go with DMR. They have been fantastic.',
                  rating: 5,
                },
                {
                  id: 2,
                  name: 'Samantha Marquis',
                  text: 'Look No Further. We had been looking into SEO for a bit and interviewed some other companies. After each interview, we walked away feeling like we had to think about it. This was absolutely not the case with DMR. From the start, we knew their company was the right fit. We were thoroughly impressed with their knowledge, their willingness to give us tips immediately, and their easy communication style. SEO can be intimidating and daunting, but DMR holds your hand, answers your questions, and has great follow through. We never feel uncomfortable asking questions and they never make us feel less-then. Every bit of the process we have been through with them thus far has been exceptional. We highly recommend them',
                  rating: 5,
                },
                {
                  id: 3,
                  name: 'William Breaden',
                  text: 'New Real Estate Website coordination. Andrew was great to work with on setting up new Real Estate website and getting everything linked and functional. He was always willing to listen and help guide us through the process to get what we considered to be the best outcome. We highly recommend him.',
                  rating: 5,
                },
                {
                  id: 4,
                  name: 'Iris Harlow',
                  text: 'I worked with DMR and ranked within the first week! It was awesome!',
                  rating: 5,
                },
                {
                  id: 5,
                  name: 'Max De Leonardis',
                  text: 'Built me a great website for my real estate business.',
                  rating: 5,
                },
                {
                  id: 6,
                  name: 'Justin',
                  text: 'Great Communication, True Professionals! Andrew & his team are great communicators and definitely know their stuff. True professionals!',
                  rating: 5,
                },
                {
                  id: 7,
                  name: 'Rick Gruebele',
                  company: 'Visions First Realty',
                  text: 'Exceptional SEO services. As the Broker/Owner of Visions First Realty, I cannot speak highly enough of DMR Media\'s exceptional SEO services. Their strategic approach to improving our online presence has yielded remarkable results, consistently pushing our website to top rankings for key real estate search terms in our market.',
                  rating: 5,
                },
                {
                  id: 8,
                  name: 'Jade Goodhue',
                  text: 'We started working with Andrew about a month ago. He\'s articulate, responsive, and provides amazing weekly updates. He\'s taken the time to really explain what the issues were on why we weren\'t ranking despite all our blogs and videos.',
                  rating: 5,
                },
                {
                  id: 9,
                  name: 'Andy Peterson',
                  text: 'Andrew worked with me personally to completely change my presence online - with a perfect mix of personal and professional. He was always on time, asking the right questions and got it done fast. Highly recommend and will be working with him consistently.',
                  rating: 5,
                },
                {
                  id: 10,
                  name: 'W. John Coletta',
                  text: 'DMR Media Specialists is a top-notch business! They brilliantly transformed my website! They are fast; they are great communicators; and they contacted me every step of the way, making sure that I was satisfied. Not only are they on the ball, but they deliver exceptional results.',
                  rating: 5,
                },
                {
                  id: 11,
                  name: 'Tara Parks',
                  text: 'Andrew is very knowledgeable about building websites and SEO best practices and he completes changes very quickly. I highly recommend DMR Media Specialists for your next project or website build.',
                  rating: 5,
                },
                {
                  id: 12,
                  name: 'Marsha VanArk',
                  text: 'Andrew was so helpful! I asked him to see why my website was coming up in unrelated searches. He went above and beyond to investigate the problems. He provided me with valuable insight and feedback that helped me move forward and solve the problems. Thank you so much, Andrew!!!',
                  rating: 5,
                },
                {
                  id: 13,
                  name: 'Tony Jordan',
                  text: 'I\'ve been working with Andrew for years! Simply put, he\'s an SEO genius!',
                  rating: 5,
                },
                {
                  id: 14,
                  name: 'Jason Rohm',
                  text: 'I hired DMR Media to recreate and update my web presence. I was very happy with the outcome. They have continued to follow up with support and updates after the project was complete.',
                  rating: 5,
                },
                {
                  id: 15,
                  name: 'Allison Shuler',
                  text: 'DMR built a website for the coffee shop that I manage. I worked directly with the owner who was very helpful and provided excellent service! Would definitely recommend DMR to anyone looking for a personalized website to help grow their business!',
                  rating: 5,
                },
              ].map((review, index) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: (index + 1) * 0.05 }}
                  className="border-b border-[var(--color-ink-200)] pb-8"
                >
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
                  <blockquote className="text-[22px] text-[var(--color-off-black)] leading-relaxed font-serif mb-6">
                    &quot;{review.text}&quot;
                  </blockquote>
                  <div className="pt-4 border-t border-[var(--color-ink-200)]">
                    <p className="text-[22px] font-serif font-light text-[var(--color-off-black)]">
                      {review.name}
                    </p>
                    {review.company && (
                      <p className="text-[22px] text-[var(--color-off-black)] font-serif mt-1">
                        {review.company}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section - Moved to End */}
        <LandingCaseStudies />

      </div>
    </>
  );
}
