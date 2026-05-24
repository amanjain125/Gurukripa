import type { Metadata } from 'next';
import { ProjectsGrid } from '@/components/sections/ProjectsGrid';
import { RevealOnScroll } from '@/components/providers/RevealOnScroll';

export const metadata: Metadata = {
  title: 'Projects — Selected work',
  description:
    'A selection of residential, commercial and consulting projects delivered by Gurukripa Constructions across Bengaluru.',
};

export default function ProjectsPage() {
  return (
    <>
      <RevealOnScroll />
      <section className="pt-40 pb-12 md:pt-48 md:pb-16 bg-bone relative overflow-hidden">
        <div className="aurora aurora-soft" />
        <div className="container-wide relative z-10 flex items-end justify-between flex-wrap gap-6">
          <div>
            <p className="eyebrow mb-6" data-reveal>Projects</p>
            <h1 className="font-display text-display text-ink" data-reveal data-reveal-delay="80">
              Selected work.
            </h1>
          </div>
          <p className="max-w-md text-ink/70 leading-body text-[15px]" data-reveal data-reveal-delay="160">
            A small portfolio, intentionally. Each one represents a problem we found a clear way
            through, with a client who wanted to be in the building for a long time.
          </p>
        </div>
      </section>
      <ProjectsGrid />
    </>
  );
}
