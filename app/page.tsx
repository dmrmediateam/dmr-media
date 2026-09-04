import Hero from '@/components/Hero';
import ClientLogosSlider from '@/components/ClientLogosSlider';
import CaseStudies from '@/components/CaseStudies';
import TopWebsites from '@/components/TopWebsites';
import DMRWaySection from '@/components/DMRWaySection';
import VideoTestimonials from '@/components/VideoTestimonials';
import Testimonials from '@/components/Testimonials';
import HomeBlogSection from '@/components/HomeBlogSection';
import { getAllBlogPosts } from '@/data/blogPosts';
import '@/app/styles/homepage-luxury.css';
import '@/app/landing/google-general/google-general-landing.css';

export default async function Home() {
  const blogPosts = await getAllBlogPosts();
  const validPosts = blogPosts.filter((post) => post.slug?.current);
  const featuredPosts = validPosts.slice(0, 3);

  return (
    <main className="dmr-home min-h-screen [--seo-section-y:theme(spacing.20)] md:[--seo-section-y:theme(spacing.28)]">
      <Hero />
      <ClientLogosSlider />
      <CaseStudies />
      <TopWebsites />
      <DMRWaySection />
      <VideoTestimonials />
      <HomeBlogSection posts={featuredPosts} layoutVariant="seo" />
      <Testimonials showStarRating />
    </main>
  );
}
