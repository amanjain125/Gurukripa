'use client';

import Image from 'next/image';
import Link from 'next/link';
import { PROJECTS } from '@/lib/projects';

export function FeaturedProjects() {
  const constructionCount = PROJECTS.filter((p) => p.projectType === 'construction').length;
  const renovationCount = PROJECTS.filter((p) => p.projectType === 'renovation').length;

  return (
    <section id="projects" className="relative overflow-hidden bg-bone py-24 md:py-32 scroll-mt-20">
      <div className="aurora aurora-soft" />

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <p className="eyebrow mb-4" data-reveal>
            Project Divisions
          </p>
          <h2 className="font-display text-h1 max-w-3xl text-ink" data-reveal data-reveal-delay="80">
            Explore our specialized <em className="font-display-italic text-brand-red">construction & renovation</em> divisions.
          </h2>
        </div>

        {/* Two Dark Category Cards: Construction Projects & Renovation Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Construction Projects Dark Card */}
          <Link
            href="/projects/construction"
            className="group relative overflow-hidden rounded-3xl cursor-pointer bg-ink border border-white/20 shadow-2xl transition-all duration-500 p-8 md:p-10 flex flex-col justify-between aspect-[16/11] sm:aspect-[16/10] hover:scale-[1.015] hover:border-gold hover:shadow-gold/20"
          >
            <Image
              src="/construction/Channsandra/render%201.png"
              alt="Construction Projects"
              fill
              sizes="(min-width:768px) 50vw, 100vw"
              className="object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-108 opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/40" />

            <div className="relative z-10 flex items-center justify-between gap-4">
              <span className="bg-gold text-ink font-bold px-4 py-1.5 rounded-full text-[10px] tracking-[0.2em] uppercase shadow-md">
                Division 01 · New Builds
              </span>
              <span className="text-[11px] font-mono font-bold tracking-wider text-ink bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md">
                {constructionCount} Projects
              </span>
            </div>

            <div className="relative z-10 mt-12">
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-display text-3xl md:text-4xl text-white font-semibold leading-tight group-hover:text-gold transition-colors duration-300">
                  Construction Projects
                </h3>
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gold text-ink font-bold text-xl group-hover:scale-110 transition-all duration-300 shadow-xl shrink-0">
                  →
                </span>
              </div>
              <p className="mt-3 text-white/90 text-[14px] leading-relaxed max-w-lg font-normal">
                Turnkey residential villas, commercial towers, structural foundations, and RCC frames built with engineering precision.
              </p>
              <div className="mt-6 inline-flex items-center gap-2.5 text-[12px] uppercase tracking-wider bg-white text-ink font-bold px-5 py-2.5 rounded-full shadow-lg group-hover:bg-gold group-hover:translate-x-1 transition-all duration-300">
                <span>Open Construction Section</span>
                <span className="text-sm font-extrabold">→</span>
              </div>
            </div>
          </Link>

          {/* Renovation Projects Dark Card */}
          <Link
            href="/projects/renovation"
            className="group relative overflow-hidden rounded-3xl cursor-pointer bg-ink border border-white/20 shadow-2xl transition-all duration-500 p-8 md:p-10 flex flex-col justify-between aspect-[16/11] sm:aspect-[16/10] hover:scale-[1.015] hover:border-gold hover:shadow-gold/20"
          >
            <Image
              src="/renovation/mrs%20-%20Shoma%20Nandi%20Hills/IMG20240320123631.jpg"
              alt="Renovation Projects"
              fill
              sizes="(min-width:768px) 50vw, 100vw"
              className="object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-108 opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/40" />

            <div className="relative z-10 flex items-center justify-between gap-4">
              <span className="bg-gold text-ink font-bold px-4 py-1.5 rounded-full text-[10px] tracking-[0.2em] uppercase shadow-md">
                Division 02 · Retrofits & Overhauls
              </span>
              <span className="text-[11px] font-mono font-bold tracking-wider text-ink bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md">
                {renovationCount} Projects
              </span>
            </div>

            <div className="relative z-10 mt-12">
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-display text-3xl md:text-4xl text-white font-semibold leading-tight group-hover:text-gold transition-colors duration-300">
                  Renovation Projects
                </h3>
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gold text-ink font-bold text-xl group-hover:scale-110 transition-all duration-300 shadow-xl shrink-0">
                  →
                </span>
              </div>
              <p className="mt-3 text-white/90 text-[14px] leading-relaxed max-w-lg font-normal">
                Structural strengthening, heritage retrofits, elevation upgrades, cantilever extensions, and modern building overhaul.
              </p>
              <div className="mt-6 inline-flex items-center gap-2.5 text-[12px] uppercase tracking-wider bg-white text-ink font-bold px-5 py-2.5 rounded-full shadow-lg group-hover:bg-gold group-hover:translate-x-1 transition-all duration-300">
                <span>Open Renovation Section</span>
                <span className="text-sm font-extrabold">→</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
