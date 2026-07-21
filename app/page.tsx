import { VillaScrollHero } from '@/components/sections/VillaScrollHero';
import { AboutSection } from '@/components/sections/AboutSection';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { ServicesPreview } from '@/components/sections/ServicesPreview';
import { FeaturedProjects } from '@/components/sections/FeaturedProjects';
import { FounderNote } from '@/components/sections/FounderNote';
import { ProcessTimeline } from '@/components/sections/ProcessTimeline';
import { Testimonials } from '@/components/sections/Testimonials';
import { RevealOnScroll } from '@/components/providers/RevealOnScroll';

export default function HomePage() {
  return (
    <>
      <RevealOnScroll />
      <VillaScrollHero />
      <AboutSection />
      <TrustStrip />
      <ServicesPreview />
      <FeaturedProjects />
      <FounderNote />
      <ProcessTimeline />
      <Testimonials />
    </>
  );
}
