'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter, useSearchParams } from 'next/navigation';
import Testimonials from '@/components/Testimonials';
import ReviewsAggregate from '@/components/ReviewsAggregate';
import getStripe from '@/lib/stripe';

function Feb2026LandingContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    averageSalePrice: '',
    homesSold2025: '',
    website: '', // Honeypot field - hidden from users
  });
  const [utmParams, setUtmParams] = useState({
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_term: '',
    utm_content: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [checkoutSessionId, setCheckoutSessionId] = useState<string | null>(null);
  const [checkoutClientSecret, setCheckoutClientSecret] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const formRef = useRef<HTMLDivElement>(null);
  const checkoutRef = useRef<HTMLDivElement>(null);
  const checkoutInstanceRef = useRef<any>(null);

  // Capture UTM parameters from URL on mount
  useEffect(() => {
    const utm_source = searchParams.get('utm_source') || '';
    const utm_medium = searchParams.get('utm_medium') || '';
    const utm_campaign = searchParams.get('utm_campaign') || '';
    const utm_term = searchParams.get('utm_term') || '';
    const utm_content = searchParams.get('utm_content') || '';
    
    setUtmParams({
      utm_source,
      utm_medium,
      utm_campaign,
      utm_term,
      utm_content,
    });
  }, [searchParams]);

  // Check if user canceled checkout
  useEffect(() => {
    if (searchParams.get('canceled') === 'true') {
      alert('Payment was canceled. You can try again when you\'re ready.');
      // Remove the canceled parameter from URL
      router.replace('/landing/feb-2026', undefined);
    }
  }, [searchParams, router]);

  // Hide header, footer, and AI chatbot (Elfsight embed) for this landing page
  useEffect(() => {
    const nav = document.querySelector('nav') as HTMLElement | null;
    const footer = document.querySelector('footer') as HTMLElement | null;
    
    const hideElfsightWidgets = () => {
      // Hide all Elfsight embeds - target by class, ID, and data attributes
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
            if (el) {
              el.style.display = 'none';
            }
          });
        } catch (e) {
          // Ignore selector errors
        }
      });
    };
    
    // Hide immediately
    if (nav) nav.style.display = 'none';
    if (footer) footer.style.display = 'none';
    hideElfsightWidgets();
    
    // Also hide dynamically loaded Elfsight widgets
    const observer = new MutationObserver(() => {
      hideElfsightWidgets();
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
    
    // Also check periodically in case widgets load with delay
    const intervalId = setInterval(hideElfsightWidgets, 500);
    
    return () => {
      if (nav) nav.style.display = '';
      if (footer) footer.style.display = '';
      observer.disconnect();
      clearInterval(intervalId);
      
      // Restore Elfsight widgets on unmount
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
            if (el) {
              el.style.display = '';
            }
          });
        } catch (e) {
          // Ignore selector errors
        }
      });
    };
  }, []);

  // Scroll progress indicator
  useEffect(() => {
    const handleScroll = () => {
      if (!formRef.current) return;
      const formTop = formRef.current.offsetTop;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Calculate progress from top of page to form
      const totalDistance = formTop;
      const scrolled = scrollY;
      const progress = Math.min((scrolled / totalDistance) * 100, 100);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const videoId = 'UGy2ppmSeYc';
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&rel=0&modestbranding=1`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create a Checkout Session
      const response = await fetch('/api/checkout_sessions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
        }),
      });

      const checkoutSession = await response.json();

      if ((checkoutSession as any).statusCode === 500) {
        console.error((checkoutSession as any).message);
        throw new Error((checkoutSession as any).message || 'Failed to create checkout session');
      }

      if (!response.ok) {
        throw new Error(checkoutSession.error || 'Failed to create checkout session');
      }

      // If free registration, skip Stripe and submit directly to registration API
      if ((checkoutSession as any).isFree) {
        // Submit to registration API with UTM parameters
        const regResponse = await fetch('/api/landing-registration', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            averageSalePrice: formData.averageSalePrice,
            homesSold2025: formData.homesSold2025,
            website: formData.website, // Include honeypot field
            source: 'feb-2026-landing',
            eventDate: 'February 11th, 2026',
            // Include UTM parameters if present
            ...(utmParams.utm_source && { utm_source: utmParams.utm_source }),
            ...(utmParams.utm_medium && { utm_medium: utmParams.utm_medium }),
            ...(utmParams.utm_campaign && { utm_campaign: utmParams.utm_campaign }),
            ...(utmParams.utm_term && { utm_term: utmParams.utm_term }),
            ...(utmParams.utm_content && { utm_content: utmParams.utm_content }),
          }),
        });

        const regResult = await regResponse.json();

        if (!regResponse.ok) {
          throw new Error(regResult.error || 'Application failed');
        }

        // Redirect to feb-2026 thank-you page with qualification status, email, and name
        const emailParam = encodeURIComponent(formData.email);
        const nameParam = encodeURIComponent(formData.name);
        const qualified = regResult.qualified ? 'qualified' : 'disqualified';
        router.push(`/landing/thank-you-feb-2026?status=${qualified}&email=${emailParam}&name=${nameParam}`);
        return;
      }

      // Store session info and show checkout modal
      setCheckoutSessionId(checkoutSession.id);
      setCheckoutClientSecret(checkoutSession.clientSecret);
      setIsSubmitting(false);
      
      // Show checkout modal - useEffect will handle loading
      setShowCheckout(true);
    } catch (error: any) {
      console.error('Form submission error:', error);
      alert(error.message || 'Something went wrong. Please try again.');
      setIsSubmitting(false);
    }
  };

  const loadEmbeddedCheckout = async (clientSecret: string) => {
    let stripe: any = null;
    try {
      // Unmount any existing checkout first
      if (checkoutInstanceRef.current) {
        try {
          checkoutInstanceRef.current.unmount();
        } catch (unmountError) {
          console.warn('Error unmounting previous checkout:', unmountError);
        }
        checkoutInstanceRef.current = null;
      }

      stripe = await getStripe();
      if (!stripe) {
        throw new Error('Stripe is not configured. Please add NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY to your environment variables.');
      }

      // Check if initEmbeddedCheckout method exists
      if (!(stripe as any).initEmbeddedCheckout) {
        throw new Error('Stripe embedded checkout is not available. Please ensure you are using the latest version of @stripe/stripe-js.');
      }

      // Wait for the container to be available
      if (!checkoutRef.current) {
        throw new Error('Checkout container not found');
      }

      // Mount the embedded checkout
      const checkout = await (stripe as any).initEmbeddedCheckout({
        clientSecret,
      });

      // Store checkout instance for cleanup
      checkoutInstanceRef.current = checkout;

      // Note: Embedded checkout handles completion via return_url redirect
      // The return_url is set in the API route, so we don't need event listeners here
      // After payment, Stripe will redirect to /landing/thank-you?session_id={SESSION_ID}

      checkout.mount(checkoutRef.current);
    } catch (error: any) {
      console.error('Error loading embedded checkout:', error);
      console.error('Error details:', {
        message: error.message,
        stack: error.stack,
        clientSecret: clientSecret ? 'Present' : 'Missing',
        stripeLoaded: !!stripe,
      });
      alert(`Failed to load payment form: ${error.message || 'Unknown error'}. Please check the console for details.`);
      setShowCheckout(false);
    }
  };

  // Load checkout when modal opens and clientSecret is available
  useEffect(() => {
    if (showCheckout && checkoutClientSecret && checkoutRef.current) {
      // Small delay to ensure DOM is ready
      const timer = setTimeout(() => {
        loadEmbeddedCheckout(checkoutClientSecret);
      }, 100);

      return () => {
        clearTimeout(timer);
        // Cleanup: unmount checkout when component unmounts or dependencies change
        if (checkoutInstanceRef.current) {
          try {
            checkoutInstanceRef.current.unmount();
          } catch (error) {
            console.warn('Error unmounting checkout in cleanup:', error);
          }
          checkoutInstanceRef.current = null;
        }
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showCheckout, checkoutClientSecret]);

  const handleCloseCheckout = () => {
    // Unmount checkout if it exists
    if (checkoutInstanceRef.current) {
      try {
        checkoutInstanceRef.current.unmount();
      } catch (error) {
        console.error('Error unmounting checkout:', error);
      }
      checkoutInstanceRef.current = null;
    }
    
    setShowCheckout(false);
    setCheckoutSessionId(null);
    setCheckoutClientSecret(null);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (checkoutInstanceRef.current) {
        try {
          checkoutInstanceRef.current.unmount();
        } catch (error) {
          console.error('Error unmounting checkout on cleanup:', error);
        }
      }
    };
  }, []);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const topics = [
    {
      title: 'How AI Actually Surfaces "Top Agents"',
      subtitle: 'Market Positioning',
      description: 'Right now, AI engines are deciding who looks like the "top agent" in your market. Most agents have zero control over how they appear there. I\'ll show you exactly how Google and AI decide which agents to surface—and how to become the default choice they recommend first.',
    },
    {
      title: 'Why Google Business Profiles Now Matter More Than Websites',
      subtitle: 'Authority Building',
      description: 'While Zillow, Compass and other brokerages fight for power, your strategy should be dominating the field they can\'t even play. A High Trust Brand in AI search. I\'ll show you how Google Business Profiles drive qualified inquiries and why they now matter more than expensive websites.',
    },
    {
      title: 'How Trust Signals Compound Across Google and AI',
      subtitle: 'Long-term Authority',
      description: 'This isn\'t about chasing Zillow leads or competing with Compass\' ad spend. It\'s about owning trust where buyers are already looking. I\'ll show you how to build long-term authority without buying leads—how trust signals compound across Google and AI to make you the obvious choice.',
    },
    {
      title: 'How To Become The "Default Choice" In Your Market',
      subtitle: 'Market Dominance',
      description: 'There will only be one "top agent" per market by the end of 2026. Everyone else will compete for leftovers. This isn\'t lead gen. It\'s market positioning. I\'ll walk you through the exact system that took Legendary Real Estate from 6 search inquiries to 830 in one year.',
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--surface-base)] relative">
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-[var(--color-ink-200)] z-50">
        <div
          className="h-full bg-[var(--color-trust)] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Hero Section - Full Viewport Height */}
      <section className="relative min-h-screen flex flex-col justify-between py-6 sm:py-8 lg:py-12">
        <div className="container-max flex-1 flex flex-col justify-center">
          <div className="max-w-4xl mx-auto w-full">
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8 sm:mb-12"
            >
              {/* Date & Time Banner */}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-3 rounded-full bg-[var(--color-trust)]/10 px-6 py-3 border border-[var(--color-trust)]/20 mb-6"
              >
                <svg className="w-5 h-5 text-[var(--color-trust)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                  <span className="text-base sm:text-lg font-serif font-light text-[var(--color-off-black)]">
                    February 11th, 2026
                  </span>
                  <span className="hidden sm:inline text-[var(--color-ink-300)]">•</span>
                  <div className="flex items-center gap-3 text-sm sm:text-base text-[var(--color-ink-300)]">
                    <span>12pm EST</span>
                    <span className="text-[var(--color-ink-300)]">/</span>
                    <span>9am PST</span>
                  </div>
                </div>
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-[32px] sm:text-[42px] lg:text-[52px] font-serif font-light text-[var(--color-off-black)] leading-[1.05] tracking-tight mb-6"
              >
                Your Business Won't Survive 2026 If You're Not The Agent Buyers & Sellers Find First
                <span className="text-[var(--color-trust)] text-[1.05em] align-baseline">.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-lg sm:text-xl text-[var(--color-ink-300)] leading-[1.6] max-w-2xl mx-auto"
              >
                I'm going to show a small group of established agents how to become THE trusted name in Google and AI search in their market.
              </motion.p>
            </motion.div>

            {/* Video Container - Smaller */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative w-full max-w-2xl mx-auto rounded-[24px] overflow-hidden border border-[var(--color-ink-200)] bg-white/80 backdrop-blur-sm shadow-[0_24px_64px_rgba(15,15,15,0.08)] mb-8"
            >
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src={embedUrl}
                    title="How Established Agents Control What Shows Up in Google and AI Search"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                  style={{ border: 'none' }}
                />
              </div>
            </motion.div>

            {/* Button at Bottom */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToForm}
                className="inline-flex items-center gap-3 rounded-full px-8 py-4 bg-[var(--color-off-black)] text-white uppercase tracking-[0.3em] text-sm font-semibold hover:bg-black transition-colors duration-300"
              >
                Apply Now
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We'll Cover - Animated */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-max">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8 md:mb-10"
            >
              <h2 className="text-3xl sm:text-4xl font-serif font-light text-[var(--color-off-black)] mb-4 tracking-tight">
                What You'll Get
              </h2>
              <p className="text-base text-[var(--color-ink-300)] max-w-2xl mx-auto leading-relaxed">
                We're going to walk a select few established agents through this exact system step by step. The same system that took Legendary Real Estate Services from 6 total inquiries in 2024 to 830 in 2025. The same system that took Willow Brook Realty from 11 inquiries to 44 per month.
              </p>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="h-px bg-[var(--color-ink-200)] mx-auto mb-6"
              ></motion.div>
            </motion.div>

            <div className="space-y-6 md:space-y-8">
              {topics.map((topic, index) => {
                const isEven = index % 2 === 1;
                const isLarge = index === 0 || index === 3;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isEven ? 50 : -50, y: 30 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.7, delay: index * 0.15, ease: 'easeOut' }}
                    className={`flex flex-col md:flex-row gap-4 md:gap-6 ${
                      isEven ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Number Badge */}
                    <div className={`flex-shrink-0 ${isEven ? 'md:order-2' : ''}`}>
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[var(--color-trust)]/20 to-[var(--color-trust)]/5 flex items-center justify-center border-2 border-[var(--color-trust)]/30 shadow-lg">
                        <span className="text-[var(--color-trust)] text-2xl md:text-3xl font-serif font-light">{index + 1}</span>
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className={`flex-1 ${isLarge ? 'md:max-w-2xl' : 'md:max-w-xl'} ${
                      isEven ? 'md:ml-auto' : 'md:mr-auto'
                    }`}>
                      <div className="rounded-[24px] border-2 border-[var(--color-ink-200)] bg-gradient-to-br from-white to-white/95 backdrop-blur-sm p-6 md:p-8 hover:border-[var(--color-trust)] hover:shadow-xl transition-all duration-500 relative overflow-hidden group">
                        {/* Decorative gradient overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-trust)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        <div className="relative z-10">
                          <div className="mb-3">
                            <span className="inline-block px-3 py-1 rounded-full bg-[var(--color-trust)]/10 text-[var(--color-trust)] text-xs uppercase tracking-[0.3em] font-semibold mb-2">
                              {topic.subtitle}
                            </span>
                          </div>
                          
                          <h3 className="text-2xl md:text-3xl font-serif font-light text-[var(--color-off-black)] mb-3 tracking-tight">
                            {topic.title}
                            <span className="text-[var(--color-trust)] text-[1.05em]">.</span>
                          </h3>
                          
                          <p className="text-base md:text-lg text-[var(--color-ink-300)] leading-relaxed">
                            {topic.description}
                          </p>
                        </div>

                        {/* Decorative corner accent */}
                        <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--color-trust)]/5 rounded-full blur-3xl -mr-12 -mt-12 opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="text-center mt-12">
              <button
                onClick={scrollToForm}
                className="inline-flex items-center gap-3 rounded-full px-8 py-4 bg-[var(--color-off-black)] text-white uppercase tracking-[0.3em] text-sm font-semibold hover:bg-black transition-colors duration-300"
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Who is this for */}
      <section className="py-20 bg-[var(--surface-base)]">
        <div className="container-max">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-light text-[var(--color-off-black)] mb-4 tracking-tight">
                Is This Training For You?
              </h2>
              <p className="text-lg text-[var(--color-ink-300)] max-w-2xl mx-auto leading-relaxed mb-4">
                Luxury buyers are choosing their agent before they ever make a call. Not from referrals. Not from open houses. From Google and AI search.
              </p>
              <p className="text-base font-semibold text-[var(--color-ink-400)] max-w-2xl mx-auto leading-relaxed">
                This is not for new agents. And it's not for crowded metro markets. This is for established agents in Secondary home or luxury markets who want leverage, not volume.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6 }}
                className="rounded-[24px] border border-[var(--color-ink-200)] bg-white/80 backdrop-blur-sm p-8 hover:border-[var(--color-trust)] transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-trust)]/10 flex items-center justify-center mt-1">
                    <svg className="w-5 h-5 text-[var(--color-trust)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-light text-[var(--color-off-black)] mb-3">
                      You're an established agent in a Secondary home or luxury market
                    </h3>
                    <p className="text-base text-[var(--color-ink-300)] leading-relaxed">
                      You've built your reputation, but buyers aren't finding you first. By 2026, buyers won't ask for agent referrals first. They'll ask Google and AI. You need to control what shows up when they search—before someone else owns that position.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="rounded-[24px] border border-[var(--color-ink-200)] bg-white/80 backdrop-blur-sm p-8 hover:border-[var(--color-trust)] transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-trust)]/10 flex items-center justify-center mt-1">
                    <svg className="w-5 h-5 text-[var(--color-trust)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-light text-[var(--color-off-black)] mb-3">
                      You want market positioning, not lead volume
                    </h3>
                    <p className="text-base text-[var(--color-ink-300)] leading-relaxed">
                      Zillow, Compass, and national portals are fighting for control of the same battlefield. That's not where you win. The agents quietly taking market share in 2026 are doing it in AI search. This isn't lead gen. It's becoming the "default choice" in your market.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-[24px] border border-[var(--color-ink-200)] bg-white/80 backdrop-blur-sm p-8 hover:border-[var(--color-trust)] transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-trust)]/10 flex items-center justify-center mt-1">
                    <svg className="w-5 h-5 text-[var(--color-trust)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-light text-[var(--color-off-black)] mb-3">
                      You know your reputation deserves to be seen
                    </h3>
                    <p className="text-base text-[var(--color-ink-300)] leading-relaxed">
                      Most real estate businesses won't fail because of the market. They'll fail because buyers never see them. Right now, AI engines are deciding who looks like the "top agent" in your market. Most agents have zero control over how they appear there. You're ready to change that.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="rounded-[24px] border border-[var(--color-ink-200)] bg-white/80 backdrop-blur-sm p-8 hover:border-[var(--color-trust)] transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mt-1">
                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-light text-[var(--color-off-black)] mb-3">
                      You're a new agent or operate in crowded metro markets
                    </h3>
                    <p className="text-base text-[var(--color-ink-300)] leading-relaxed">
                      This training is specifically designed for established agents in Secondary home or luxury markets. If you're new to real estate or operate in highly competitive metro areas, this system isn't the right fit for your situation right now. We want to ensure this is valuable for everyone who attends.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="text-center mt-12">
              <button
                onClick={scrollToForm}
                className="inline-flex items-center gap-3 rounded-full px-8 py-4 bg-[var(--color-off-black)] text-white uppercase tracking-[0.3em] text-sm font-semibold hover:bg-black transition-colors duration-300"
              >
                If You're An Established Agent, Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Legendary Real Estate Case Study */}
      <section className="py-20 bg-[var(--surface-base)]">
        <div className="container-max">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7 }}
              className="text-center mb-12"
            >
              <span className="uppercase tracking-[0.35em] text-[11px] text-[var(--color-ink-300)] mb-4 block">
                Case Study
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-light text-[var(--color-off-black)] mb-4 tracking-tight">
                Jade · Legendary Real Estate
                <span className="text-[var(--color-trust)] text-[1.05em]">.</span>
              </h2>
              <p className="text-lg text-[var(--color-ink-300)] max-w-2xl mx-auto leading-relaxed">
                From frustrated content creator to lead generation powerhouse—how we transformed Jade's digital strategy and tripled her inbound leads.
              </p>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6 }}
                className="rounded-[32px] border border-[var(--color-ink-200)] bg-white/80 px-6 py-8 backdrop-blur-xl text-center"
              >
                <div className="text-[36px] font-serif font-light text-[var(--color-off-black)]">3x</div>
                <p className="mt-2 text-base text-[var(--color-ink-300)] uppercase tracking-[0.3em]">Qualified Leads</p>
                <p className="mt-4 text-base text-[var(--color-ink-300)]">Inbound pipeline inside 90 days</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="rounded-[32px] border border-[var(--color-ink-200)] bg-white/80 px-6 py-8 backdrop-blur-xl text-center"
              >
                <div className="text-[36px] font-serif font-light text-[var(--color-off-black)]">42</div>
                <p className="mt-2 text-base text-[var(--color-ink-300)] uppercase tracking-[0.3em]">Content Assets</p>
                <p className="mt-4 text-base text-[var(--color-ink-300)]">Blogs, landing pages, nurture flows</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-[32px] border border-[var(--color-ink-200)] bg-white/80 px-6 py-8 backdrop-blur-xl text-center"
              >
                <div className="text-[36px] font-serif font-light text-[var(--color-off-black)]">12 hrs</div>
                <p className="mt-2 text-base text-[var(--color-ink-300)] uppercase tracking-[0.3em]">Automation</p>
                <p className="mt-4 text-base text-[var(--color-ink-300)]">From lead to curated follow-up</p>
              </motion.div>
            </div>

            {/* Before & After Comparison */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl sm:text-3xl font-serif font-light text-[var(--color-off-black)] mb-4 tracking-tight">
                  The Transformation
                </h3>
                <p className="text-base text-[var(--color-ink-300)]">
                  See the dramatic improvement in search visibility
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="rounded-[32px] border border-[var(--color-ink-200)] bg-white/80 p-6 backdrop-blur-xl"
                >
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm uppercase tracking-[0.3em] text-red-700">
                      Before
                    </span>
                    <p className="text-base text-[var(--color-ink-300)] mt-2">18th Dec 2024</p>
                  </div>
                  <Image
                    src="/images/before.png"
                    alt="Legendary Real Estate - Before results"
                    width={962}
                    height={962}
                    className="w-full rounded-[24px] border border-[var(--color-ink-200)]"
                    unoptimized
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="rounded-[32px] border-2 border-[var(--color-trust)] bg-white/80 p-6 backdrop-blur-xl shadow-lg"
                >
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-trust)]/10 px-4 py-2 text-sm uppercase tracking-[0.3em] text-[var(--color-trust)]">
                      After
                    </span>
                    <p className="text-base text-[var(--color-ink-300)] mt-2">23rd Apr 2025</p>
                  </div>
                  <Image
                    src="/images/after.png"
                    alt="Legendary Real Estate - After results"
                    width={814}
                    height={820}
                    className="w-full rounded-[24px] border border-[var(--color-trust)]"
                    unoptimized
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Screenshots */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7 }}
                className="rounded-[32px] border border-[var(--color-ink-200)] bg-white/80 p-6 backdrop-blur-xl"
              >
                <Image
                  src="/images/JadeCRM.png"
                  alt="Jade's CRM showing lead growth"
                  width={720}
                  height={520}
                  className="w-full rounded-[24px]"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="rounded-[32px] border border-[var(--color-ink-200)] bg-white/80 p-6 backdrop-blur-xl"
              >
                <Image
                  src="/images/JadeReview.jpeg"
                  alt="Jade's testimonial review"
                  width={480}
                  height={320}
                  className="w-full rounded-[24px] mb-6"
                />
                <blockquote className="text-lg font-serif font-light text-[var(--color-off-black)] leading-relaxed italic">
                  "He's articulate, responsive, and provides amazing weekly updates. He works with us like a partner, rather than a vendor. If you have the opportunity to work with him, just DO IT. You'll be grateful you did!"
                </blockquote>
                <div className="mt-4 text-base text-[var(--color-ink-300)]">
                  <p className="uppercase tracking-[0.3em]">Jade Goodhue</p>
                  <p className="uppercase tracking-[0.3em] mt-1">Legendary Real Estate</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToForm}
                className="inline-flex items-center gap-3 rounded-full px-8 py-4 bg-[var(--color-off-black)] text-white uppercase tracking-[0.3em] text-sm font-semibold hover:bg-black transition-colors duration-300"
              >
                Get Similar Results
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Social Proof Section - Before Form */}
      <section className="py-16 bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-serif font-light text-[var(--color-off-black)] mb-8 tracking-tight">
              The System That 138x'd Search Inquiries In One Year
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="rounded-[24px] border border-[var(--color-ink-200)] bg-white/80 p-6">
                <div className="text-4xl font-serif font-light text-[var(--color-trust)] mb-2">6 → 830</div>
                <div className="text-base uppercase tracking-[0.3em] text-[var(--color-ink-300)]">Search Inquiries</div>
                <div className="text-sm text-[var(--color-ink-300)] mt-2">Legendary Real Estate Services in one year</div>
              </div>
              <div className="rounded-[24px] border border-[var(--color-ink-200)] bg-white/80 p-6">
                <div className="text-4xl font-serif font-light text-[var(--color-trust)] mb-2">11 → 44</div>
                <div className="text-base uppercase tracking-[0.3em] text-[var(--color-ink-300)]">Monthly Inquiries</div>
                <div className="text-sm text-[var(--color-ink-300)] mt-2">Willow Brook Realty in under 30 days</div>
              </div>
              <div className="rounded-[24px] border border-[var(--color-ink-200)] bg-white/80 p-6">
                <div className="text-4xl font-serif font-light text-[var(--color-trust)] mb-2">138x</div>
                <div className="text-base uppercase tracking-[0.3em] text-[var(--color-ink-300)]">Growth Rate</div>
                <div className="text-sm text-[var(--color-ink-300)] mt-2">Same system. Different markets. Same outcome.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Testimonials - Before Form */}
      <section className="py-12 bg-[var(--surface-base)]">
        <div className="container-max">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-serif font-light text-[var(--color-off-black)] mb-4">
                Real Results from Real Agents
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-[24px] border border-[var(--color-ink-200)] bg-white/80 p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-trust)]/10 flex items-center justify-center">
                    <span className="text-[var(--color-trust)] font-serif text-lg">RG</span>
                  </div>
                  <div>
                    <div className="font-serif font-light text-[var(--color-off-black)]">Rick Grueble</div>
                    <div className="text-sm text-[var(--color-ink-300)]">Visions First Realty</div>
                  </div>
                </div>
                <p className="text-base text-[var(--color-ink-300)] leading-relaxed italic">
                  "DMR Media delivered top rankings for real estate search terms, a higher volume of qualified leads, and transparent reporting the entire way. I now get 2–3 qualified leads per day."
                </p>
              </div>
              <div className="rounded-[24px] border border-[var(--color-ink-200)] bg-white/80 p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-trust)]/10 flex items-center justify-center">
                    <span className="text-[var(--color-trust)] font-serif text-lg">JG</span>
                  </div>
                  <div>
                    <div className="font-serif font-light text-[var(--color-off-black)]">Jade Goodhue</div>
                    <div className="text-sm text-[var(--color-ink-300)]">Legendary Real Estate</div>
                  </div>
                </div>
                <p className="text-base text-[var(--color-ink-300)] leading-relaxed italic">
                  "He works with us like a partner, rather than a vendor. If you have the opportunity to work with him, just DO IT. You'll be grateful you did!"
                </p>
              </div>
              <div className="rounded-[24px] border border-[var(--color-ink-200)] bg-white/80 p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-trust)]/10 flex items-center justify-center">
                    <span className="text-[var(--color-trust)] font-serif text-lg">JA</span>
                  </div>
                  <div>
                    <div className="font-serif font-light text-[var(--color-off-black)]">Justin Armbruster</div>
                    <div className="text-sm text-[var(--color-ink-300)]">The Armbruster Team</div>
                  </div>
                </div>
                <p className="text-base text-[var(--color-ink-300)] leading-relaxed italic">
                  "Andrew & his team are great communicators and definitely know their stuff. True professionals!"
                </p>
              </div>
              <div className="rounded-[24px] border border-[var(--color-ink-200)] bg-white/80 p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-trust)]/10 flex items-center justify-center">
                    <span className="text-[var(--color-trust)] font-serif text-lg">AP</span>
                  </div>
                  <div>
                    <div className="font-serif font-light text-[var(--color-off-black)]">Andy Peterson</div>
                    <div className="text-sm text-[var(--color-ink-300)]">Keller Williams Luxury</div>
                  </div>
                </div>
                <p className="text-base text-[var(--color-ink-300)] leading-relaxed italic">
                  "Andrew worked with me personally to completely change my presence online - with a perfect mix of personal and professional."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form - Prominent */}
      <section id="application-form" ref={formRef} className="py-20 bg-gradient-to-br from-white via-white/95 to-[var(--surface-base)]">
        <div className="container-max">
          <div className="max-w-3xl mx-auto">
            {/* Large Prominent Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7 }}
              className="text-center mb-12"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-trust)]/10 px-4 py-2 mb-6"
              >
                <span className="text-[11px] uppercase tracking-[0.35em] text-[var(--color-trust)] font-semibold">
                  Apply Now
                </span>
              </motion.div>
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-off-black)]/5 px-4 py-2 mb-4">
                  <span className="text-base uppercase tracking-[0.3em] text-[var(--color-off-black)] font-semibold">
                    February 11th, 2026 • 12pm EST / 9am PST
                  </span>
                </div>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-[var(--color-off-black)] mb-6 tracking-tight">
                Apply Now
                <span className="text-[var(--color-trust)] text-[1.05em]">.</span>
              </h2>
              <p className="text-lg sm:text-xl text-[var(--color-ink-300)] leading-relaxed max-w-2xl mx-auto mb-8">
                On February 11th, we're walking a small group of established agents through the exact system that took Legendary Real Estate Services from 6 search inquiries to 830 in one year. The same system that took Willow Brook Realty from 11 inquiries to 44 per month.
              </p>
            </motion.div>

            {/* Large Form Card */}
            <div className="rounded-[32px] border-2 border-[var(--color-trust)] bg-white shadow-[0_24px_64px_rgba(15,15,15,0.12)] px-8 py-12 md:px-12 md:py-16 relative overflow-hidden">
              {/* Decorative Background Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-trust)]/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[var(--color-trust)]/5 rounded-full blur-3xl -ml-24 -mb-24"></div>
              
              <div className="relative z-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-base uppercase tracking-[0.3em] text-[var(--color-ink-300)] mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-[20px] border border-[var(--color-ink-200)] bg-white/90 text-[var(--color-off-black)] font-serif focus:outline-none focus:border-[var(--color-trust)] transition-colors duration-300"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-base uppercase tracking-[0.3em] text-[var(--color-ink-300)] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-[20px] border border-[var(--color-ink-200)] bg-white/90 text-[var(--color-off-black)] font-serif focus:outline-none focus:border-[var(--color-trust)] transition-colors duration-300"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-base uppercase tracking-[0.3em] text-[var(--color-ink-300)] mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-[20px] border border-[var(--color-ink-200)] bg-white/90 text-[var(--color-off-black)] font-serif focus:outline-none focus:border-[var(--color-trust)] transition-colors duration-300"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="averageSalePrice" className="block text-base uppercase tracking-[0.3em] text-[var(--color-ink-300)] mb-2">
                      Average Sale Price
                    </label>
                    <input
                      type="text"
                      id="averageSalePrice"
                      required
                      value={formData.averageSalePrice}
                      onChange={(e) => setFormData({ ...formData, averageSalePrice: e.target.value })}
                      className="w-full px-4 py-3 rounded-[20px] border border-[var(--color-ink-200)] bg-white/90 text-[var(--color-off-black)] font-serif focus:outline-none focus:border-[var(--color-trust)] transition-colors duration-300"
                      placeholder="$500,000"
                    />
                  </div>

                  <div>
                    <label htmlFor="homesSold2025" className="block text-base uppercase tracking-[0.3em] text-[var(--color-ink-300)] mb-2">
                      Homes Sold in 2025
                    </label>
                    <input
                      type="number"
                      id="homesSold2025"
                      required
                      value={formData.homesSold2025}
                      onChange={(e) => setFormData({ ...formData, homesSold2025: e.target.value })}
                      className="w-full px-4 py-3 rounded-[20px] border border-[var(--color-ink-200)] bg-white/90 text-[var(--color-off-black)] font-serif focus:outline-none focus:border-[var(--color-trust)] transition-colors duration-300"
                      placeholder="12"
                    />
                  </div>

                  {/* Honeypot field - hidden from users, bots will fill this */}
                  <div className="absolute opacity-0 pointer-events-none h-0 w-0 overflow-hidden">
                    <label htmlFor="website">Website (leave blank)</label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    />
                  </div>

                  {/* Marketing Consent */}
                  <p className="text-xs sm:text-sm text-[var(--color-ink-300)] leading-relaxed text-center">
                    By applying for this workshop, you agree to receive marketing communications from DMR Media, including but not limited to phone calls, text messages (SMS), and emails. You may opt out at any time. See our{' '}
                    <a href="/privacy-policy" className="text-[var(--color-trust)] hover:underline" target="_blank" rel="noopener noreferrer">
                      Privacy Policy
                    </a>
                    {' '}for more information.
                  </p>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-3 rounded-full px-8 py-5 bg-[var(--color-off-black)] text-white uppercase tracking-[0.3em] text-sm font-semibold hover:bg-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                  >
                    {isSubmitting ? 'Processing...' : 'Apply Now'}
                  </motion.button>
                </form>
              
              {/* Trust Badges */}
              <div className="mt-8 pt-8 border-t border-[var(--color-ink-200)]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="flex flex-col items-center">
                    <svg className="w-8 h-8 text-[var(--color-trust)] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <div className="text-sm uppercase tracking-[0.2em] text-[var(--color-ink-300)]">Private Workshop</div>
                    <div className="text-sm text-[var(--color-ink-300)] mt-1">Interactive Setup</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <svg className="w-8 h-8 text-[var(--color-trust)] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <div className="text-sm uppercase tracking-[0.2em] text-[var(--color-ink-300)]">Event Access</div>
                    <div className="text-sm text-[var(--color-ink-300)] mt-1">February 11th, 2026</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <svg className="w-8 h-8 text-[var(--color-trust)] mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 0v8m0 0v-1m0 1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className="text-sm uppercase tracking-[0.2em] text-[var(--color-ink-300)]">Proven System</div>
                    <div className="text-sm text-[var(--color-ink-300)] mt-1">Used by 100+ agents</div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Case Studies - Full Content */}
      <section className="py-20 bg-[var(--surface-base)]">
        <div className="container-max">
          <div className="max-w-6xl mx-auto space-y-20">
            {/* Michael's Case Study */}
            <div>
              <div className="text-center mb-12">
                <span className="uppercase tracking-[0.35em] text-[11px] text-[var(--color-ink-300)] mb-4 block">
                  Case Study
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-light text-[var(--color-off-black)] mb-4 tracking-tight">
                  Michael · SEO Transformation
                  <span className="text-[var(--color-trust)] text-[1.05em]">.</span>
                </h2>
                <p className="text-lg text-[var(--color-ink-300)] max-w-2xl mx-auto leading-relaxed">
                  From a silent IDX template to a site that behaves like a modern magazine. We rebuilt his presence, piped data into every decision, and let the numbers roll on camera—even though he's camera shy.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
                <div className="rounded-[32px] border border-[var(--color-ink-200)] bg-white/80 px-6 py-8 backdrop-blur-xl text-center">
                  <div className="text-[36px] font-serif font-light text-[var(--color-off-black)]">21x</div>
                  <p className="mt-2 text-base text-[var(--color-ink-300)] uppercase tracking-[0.3em]">Search Impressions</p>
                  <p className="mt-4 text-base text-[var(--color-ink-300)]">7.5 weeks after relaunch</p>
                </div>
                <div className="rounded-[32px] border border-[var(--color-ink-200)] bg-white/80 px-6 py-8 backdrop-blur-xl text-center">
                  <div className="text-[36px] font-serif font-light text-[var(--color-off-black)]">+312%</div>
                  <p className="mt-2 text-base text-[var(--color-ink-300)] uppercase tracking-[0.3em]">Organic Sessions</p>
                  <p className="mt-4 text-base text-[var(--color-ink-300)]">Year-over-year swing vs. template site</p>
                </div>
                <div className="rounded-[32px] border border-[var(--color-ink-200)] bg-white/80 px-6 py-8 backdrop-blur-xl text-center">
                  <div className="text-[36px] font-serif font-light text-[var(--color-off-black)]">6 weeks</div>
                  <p className="mt-2 text-base text-[var(--color-ink-300)] uppercase tracking-[0.3em]">Build Timeline</p>
                  <p className="mt-4 text-base text-[var(--color-ink-300)]">From discovery to launch-ready WordPress</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <div className="rounded-[32px] border border-[var(--color-ink-200)] bg-white/80 p-6 backdrop-blur-xl">
                  <Image
                    src="/images/MichealTraffic.png"
                    alt="Michael's traffic analytics"
                    width={720}
                    height={520}
                    className="w-full rounded-[24px]"
                  />
                </div>
                <div className="rounded-[32px] border border-[var(--color-ink-200)] bg-white/80 p-8 backdrop-blur-xl">
                  <h3 className="text-2xl font-serif font-light text-[var(--color-off-black)] mb-4">The Results</h3>
                  <p className="text-base text-[var(--color-ink-300)] leading-relaxed mb-6">
                    21x more visibility and leads that stay on-brand. Every dashboard, every call, every follow-up is now scripted to feel premium. His team knows what to publish each week and what data proves it's working.
                  </p>
                  <blockquote className="text-lg font-serif font-light text-[var(--color-off-black)] leading-relaxed italic">
                    "Despite being camera shy, I recorded a testimonial because the lead flow spoke for itself. The weekly updates made it impossible to ignore the progress."
                  </blockquote>
                  <div className="mt-4 text-sm text-[var(--color-ink-300)]">
                    <p className="uppercase tracking-[0.3em]">Michael</p>
                    <p className="uppercase tracking-[0.3em] mt-1">Real Estate Professional</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Rick's Case Study */}
            <div>
              <div className="text-center mb-12">
                <span className="uppercase tracking-[0.35em] text-[11px] text-[var(--color-ink-300)] mb-4 block">
                  Case Study
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-light text-[var(--color-off-black)] mb-4 tracking-tight">
                  Rick · Visions First Realty
                  <span className="text-[var(--color-trust)] text-[1.05em]">.</span>
                </h2>
                <p className="text-lg text-[var(--color-ink-300)] max-w-2xl mx-auto leading-relaxed">
                  Traffic wasn't the issue—positioning was. We reoriented every keyword, every page, every follow-up so the right buyers found him first and felt compelled to reach out.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
                <div className="rounded-[32px] border border-[var(--color-ink-200)] bg-white/80 px-6 py-8 backdrop-blur-xl text-center">
                  <div className="text-[36px] font-serif font-light text-[var(--color-off-black)]">2–3 /day</div>
                  <p className="mt-2 text-base text-[var(--color-ink-300)] uppercase tracking-[0.3em]">Qualified Leads</p>
                  <p className="mt-4 text-base text-[var(--color-ink-300)]">Organic only, no ads</p>
                </div>
                <div className="rounded-[32px] border border-[var(--color-ink-200)] bg-white/80 px-6 py-8 backdrop-blur-xl text-center">
                  <div className="text-[36px] font-serif font-light text-[var(--color-off-black)]">118</div>
                  <p className="mt-2 text-base text-[var(--color-ink-300)] uppercase tracking-[0.3em]">Keywords</p>
                  <p className="mt-4 text-base text-[var(--color-ink-300)]">Rewritten within 60 days</p>
                </div>
                <div className="rounded-[32px] border border-[var(--color-ink-200)] bg-white/80 px-6 py-8 backdrop-blur-xl text-center">
                  <div className="text-[36px] font-serif font-light text-[var(--color-off-black)]">8 weeks</div>
                  <p className="mt-2 text-base text-[var(--color-ink-300)] uppercase tracking-[0.3em]">Time to Clarity</p>
                  <p className="mt-4 text-base text-[var(--color-ink-300)]">From audit to predictable calls</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <div className="rounded-[32px] border border-[var(--color-ink-200)] bg-white/80 p-6 backdrop-blur-xl">
                  <Image
                    src="/images/RickAfter.png"
                    alt="Rick's keyword rankings"
                    width={720}
                    height={520}
                    className="w-full rounded-[24px]"
                  />
                </div>
                <div className="rounded-[32px] border border-[var(--color-ink-200)] bg-white/80 p-8 backdrop-blur-xl">
                  <h3 className="text-2xl font-serif font-light text-[var(--color-off-black)] mb-4">Daily Deal Flow</h3>
                  <p className="text-base text-[var(--color-ink-300)] leading-relaxed mb-6">
                    Rick now fields two to three qualified inquiries every day. The team knows which keywords, reviews, and pieces of content triggered each call.
                  </p>
                  <blockquote className="text-lg font-serif font-light text-[var(--color-off-black)] leading-relaxed italic">
                    "DMR Media delivered top rankings for real estate search terms, a higher volume of qualified leads, and transparent reporting the entire way."
                  </blockquote>
                  <div className="mt-4 text-base text-[var(--color-ink-300)]">
                    <p className="uppercase tracking-[0.3em]">Rick Grueble</p>
                    <p className="uppercase tracking-[0.3em] mt-1">Visions First Realty</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[32px] border border-[var(--color-ink-200)] bg-white/80 p-6 backdrop-blur-xl">
                <Image
                  src="/images/RickReview.jpeg"
                  alt="Rick's review"
                  width={480}
                  height={320}
                  className="w-full max-w-xl mx-auto rounded-[24px]"
                />
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={scrollToForm}
                className="inline-flex items-center gap-3 rounded-full px-8 py-4 bg-[var(--color-off-black)] text-white uppercase tracking-[0.3em] text-sm font-semibold hover:bg-black transition-colors duration-300"
              >
                Join These Success Stories
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Aggregate Section */}
      <ReviewsAggregate />

      {/* Stripe Checkout Modal Overlay - Full Screen */}
      {showCheckout && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] bg-white overflow-hidden flex flex-col"
        >
          {/* Modal Header */}
          <div className="flex items-center justify-center p-4 md:p-6" style={{ backgroundColor: '#ffffff', borderBottomWidth: 0 }}>
            <h3 className="text-xl md:text-2xl font-serif font-light text-[var(--color-off-black)]">
              Complete Your Application
            </h3>
          </div>
          
          {/* Stripe Checkout Container - Full Screen */}
          <div className="flex-1 overflow-y-auto w-full h-full">
            <div id="checkout" ref={checkoutRef} className="w-full h-full min-h-full"></div>
          </div>
        </motion.div>
      )}

    </div>
  );
}

export default function Feb2026LandingPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[var(--surface-base)] flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 rounded-full bg-[var(--color-trust)]/10 flex items-center justify-center mx-auto mb-4 animate-pulse">
            <svg className="w-6 h-6 text-[var(--color-trust)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          <p className="text-lg text-[var(--color-ink-300)]">Loading...</p>
        </div>
      </div>
    }>
      <Feb2026LandingContent />
    </Suspense>
  );
}
