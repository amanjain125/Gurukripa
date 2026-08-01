import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { PROJECTS } from '@/lib/projects';
import { ProjectGallery } from '@/components/sections/ProjectGallery';
import { RevealOnScroll } from '@/components/providers/RevealOnScroll';

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = PROJECTS.find((x) => x.slug === params.slug);
  if (!p) return {};
  return {
    title: `${p.name} — ${p.location}`,
    description: p.summary,
    openGraph: { images: [{ url: p.hero, width: 1600, height: 900, alt: p.name }] },
  };
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const p = PROJECTS.find((x) => x.slug === params.slug);
  if (!p) return notFound();

  const metadataItems = [
    ['Location', p.location],
    ['Built area', p.area],
    ['Floor count', p.floorCount || '—'],
    ['Year of commencement', p.commencementYear || '—'],
    ['Year of completion', p.completionYear || '—'],
    ['System', p.system],
  ];

  const gridCols = 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6';

  return (
    <>
      <RevealOnScroll />

      <section className="relative h-[78svh] min-h-[520px] w-full overflow-hidden bg-bone">
        <Image
          src={p.hero}
          alt={p.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-bone/30" />
        <div className="container-wide relative z-10 h-full flex flex-col justify-end pb-12 md:pb-16 text-bone">
          <div className="glass-pill px-4 py-2 rounded-full inline-flex items-center gap-3 self-start text-[10px] tracking-[0.22em] uppercase mb-6 text-bone/85">
            <span>{p.category}</span>
            <span className="h-px w-5 bg-gold" />
            <span>{p.status}</span>
            <span className="h-px w-5 bg-gold" />
            <span>{p.year}</span>
          </div>
          <h1
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-5xl leading-[1.1]"
            data-reveal
            data-reveal-delay="80"
          >
            {p.name}
          </h1>
          <p className="mt-6 text-bone/80 max-w-xl text-[15px] leading-body" data-reveal data-reveal-delay="160">
            {p.summary}
          </p>
        </div>
      </section>

      {p.projectType === 'construction' && (
        <section className="section-tight bg-bone relative overflow-hidden">
          <div className="aurora aurora-soft" />
          <div className="container-wide relative z-10">
            <div className={`glass-strong rounded-3xl px-8 md:px-12 py-10 grid ${gridCols} gap-y-8 gap-x-6`}>
              {metadataItems.map(([k, v]) => (
                <div key={k} data-reveal>
                  <div className="text-[10px] tracking-[0.22em] uppercase text-steel mb-2">{k}</div>
                  <div className="font-display text-lg text-ink leading-tight">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}


      <ProjectGallery images={p.gallery} projectName={p.name} />

    </>
  );
}
