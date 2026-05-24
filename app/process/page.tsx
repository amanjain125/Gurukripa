import type { Metadata } from 'next';
import { ProcessTimeline } from '@/components/sections/ProcessTimeline';
import { RevealOnScroll } from '@/components/providers/RevealOnScroll';

export const metadata: Metadata = {
  title: 'Process — A calm, predictable rhythm',
  description: 'Consult, design, estimate, build, handover. Five steps, no surprises.',
};

export default function ProcessPage() {
  return (
    <>
      <RevealOnScroll />
      <section className="pt-40 pb-12 md:pt-48 md:pb-16 bg-bone relative overflow-hidden">
        <div className="aurora aurora-soft" />
        <div className="container-wide relative z-10">
          <p className="eyebrow mb-6" data-reveal>Process</p>
          <h1 className="font-display text-display text-ink" data-reveal data-reveal-delay="80">
            How we work.
          </h1>
          <p className="mt-10 max-w-2xl text-ink/70 leading-body" data-reveal data-reveal-delay="160">
            Five steps that we&rsquo;ve refined over a hundred projects. Each one ends with a
            single deliverable you can sign off, and the next step doesn&rsquo;t start until you
            do.
          </p>
        </div>
      </section>
      <ProcessTimeline />
    </>
  );
}
