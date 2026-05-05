import Hero from '@/components/Hero';
import ClientLogosSlider from '@/components/ClientLogosSlider';
import CaseStudies from '@/components/CaseStudies';
import DMRWaySection from '@/components/DMRWaySection';
import VideoTestimonials from '@/components/VideoTestimonials';
import Testimonials from '@/components/Testimonials';
import HomeBlogSection from '@/components/HomeBlogSection';
import { getAllBlogPosts } from '@/data/blogPosts';

export default async function Home() {
  const blogPosts = await getAllBlogPosts();
  const validPosts = blogPosts.filter((post) => post.slug?.current);
  const featuredPosts = validPosts.slice(0, 3);

  return (
    <div className="min-h-screen bg-[var(--surface-base)] [--seo-section-y:theme(spacing.20)] md:[--seo-section-y:theme(spacing.28)]">
      <Hero />
      <ClientLogosSlider />
      <CaseStudies />
      <DMRWaySection />
      <VideoTestimonials />
      <HomeBlogSection posts={featuredPosts} layoutVariant="seo" />
      <Testimonials showStarRating />
    </div>
  );
}
