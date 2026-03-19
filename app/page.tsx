import Hero from '@/components/Hero';
import ClientLogosSlider from '@/components/ClientLogosSlider';
import CaseStudies from '@/components/CaseStudies';
import VideoTestimonials from '@/components/VideoTestimonials';
import Testimonials from '@/components/Testimonials';
import HomeBlogSection from '@/components/HomeBlogSection';
import { getAllBlogPosts } from '@/data/blogPosts';

export default async function Home() {
  const blogPosts = await getAllBlogPosts();
  const validPosts = blogPosts.filter((post) => post.slug?.current);
  const featuredPosts = validPosts.slice(0, 3);

  return (
    <div className="min-h-screen bg-[var(--surface-base)]">
      <Hero />
      <ClientLogosSlider />
      <CaseStudies />
      <VideoTestimonials />
      <HomeBlogSection posts={featuredPosts} />
      <Testimonials />
    </div>
  );
}
