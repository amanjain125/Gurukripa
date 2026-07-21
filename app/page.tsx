import { VideoHero } from '@/components/sections/VideoHero';
import { AboutSection } from '@/components/sections/AboutSection';
import { ServicesPreview } from '@/components/sections/ServicesPreview';
import { FeaturedProjects } from '@/components/sections/FeaturedProjects';
import { Testimonials } from '@/components/sections/Testimonials';
import { RevealOnScroll } from '@/components/providers/RevealOnScroll';

export default function HomePage() {
  return (
    <>
      <RevealOnScroll />
      <VideoHero />
      <AboutSection />
      <ServicesPreview />
      <FeaturedProjects />
      <Testimonials />
    </>
  );
}
