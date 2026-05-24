'use client';

import Image from 'next/image';
import Link from 'next/link';
import { PROJECTS } from '@/lib/projects';

/**
 * Snap-scrolling horizontal gallery with glass cards.
 * No GSAP pin → no scroll lag.
 */
export function FeaturedProjects() {
  return (
    <section className="relative overflow-hidden bg-bone py-24 md:py-32">
      <div className="aurora aurora-soft" />
      <div className="container-wide relative z-10 flex items-end justify-between gap-6 mb-12 md:mb-16">
        <div>
          <p className="eyebrow mb-4" data-reveal>Selected Projects</p>
          <h2 className="font-display text-h1 max-w-3xl text-ink" data-reveal data-reveal-delay="80">
            Buildings we&rsquo;ll quietly stand by, <em className="font-display-italic text-brand-red">for decades.</em>
          </h2>
        </div>
        <Link href="/projects" className="hidden md:inline-flex sweep text-ink/70 text-[14px] mb-2">
          View all <span aria-hidden>→</span>
        </Link>
      </div>

      <div className="relative z-10 overflow-x-auto scrollbar-hide pb-6">
        <div className="flex gap-6 px-6 md:px-12 snap-x snap-mandatory" style={{ width: 'max-content' }}>
          {PROJECTS.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="group relative snap-start flex-shrink-0 w-[80vw] sm:w-[55vw] md:w-[42vw] lg:w-[32vw] xl:w-[28vw] aspect-[4/5] rounded-2xl overflow-hidden glass-strong"
            >
              <Image
                src={p.thumb}
                alt={p.name}
                fill
                sizes="(min-width:1280px) 28vw, (min-width:768px) 42vw, 80vw"
                className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-bone/65 mb-3">
                  <span>{p.category}</span>
                  <span className="h-px w-5 bg-gold/70" />
                  <span>{p.location.split(',')[0]}</span>
                </div>
                <h3 className="font-display text-2xl leading-tight text-bone sweep inline-block">
                  {p.name}
                </h3>
                <p className="mt-3 text-[12px] text-bone/75 max-w-md leading-body line-clamp-2">{p.summary}</p>
              </div>
              <div className="absolute top-4 right-4 glass-pill px-3 py-1.5 rounded-full text-[10px] tracking-[0.18em] uppercase text-ink/80">
                {p.status}
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="container-wide relative z-10 mt-6 text-[12px] text-steel uppercase tracking-[0.22em] hidden md:block">
        ← scroll →
      </div>
    </section>
  );
}
