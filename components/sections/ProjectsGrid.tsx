'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PROJECTS, PROJECT_CATEGORIES, Project } from '@/lib/projects';

export function ProjectsGrid() {
  const [filter, setFilter] = useState<(typeof PROJECT_CATEGORIES)[number]>('All');

  const constructionCount = useMemo(
    () => PROJECTS.filter((p) => p.projectType === 'construction').length,
    []
  );

  const renovationCount = useMemo(
    () => PROJECTS.filter((p) => p.projectType === 'renovation').length,
    []
  );

  const filtered = useMemo(() => {
    if (filter === 'All') return PROJECTS;
    return PROJECTS.filter((p) => p.category === filter || p.status === filter);
  }, [filter]);

  return (
    <section id="projects" className="section-tight bg-bone relative overflow-hidden scroll-mt-20">
      <div className="aurora aurora-soft" />
      <div className="container-wide relative z-10">
        {/* Two Dark Division Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-14">
          {/* Construction Projects Dark Card */}
          <Link
            href="/projects/construction"
            className="group relative overflow-hidden rounded-3xl cursor-pointer bg-ink border border-white/20 shadow-2xl transition-all duration-500 p-8 flex flex-col justify-between aspect-[16/9] hover:scale-[1.015] hover:border-gold hover:shadow-gold/20"
          >
            <Image
              src="/construction/Channsandra/render%201.png"
              alt="Construction Projects"
              fill
              sizes="(min-width:768px) 50vw, 100vw"
              className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105 opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/40" />

            <div className="relative z-10 flex items-center justify-between gap-4">
              <span className="bg-gold text-ink font-bold px-4 py-1.5 rounded-full text-[10px] tracking-[0.2em] uppercase shadow-md">
                Division 01 · Construction
              </span>
              <span className="text-[11px] font-mono font-bold tracking-wider text-ink bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md">
                {constructionCount} Projects
              </span>
            </div>

            <div className="relative z-10">
              <h3 className="font-display text-2xl md:text-3xl text-white font-semibold group-hover:text-gold transition-colors">
                Construction Projects
              </h3>
              <p className="mt-2 text-white/90 text-[13px] leading-relaxed font-normal">
                Turnkey residential villas, commercial structures, steel frames & foundation engineering.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 text-[12px] uppercase tracking-wider bg-white text-ink font-bold px-4 py-2 rounded-full shadow-md group-hover:bg-gold transition-colors">
                <span>Open Construction Section</span>
                <span className="text-sm font-extrabold">→</span>
              </div>
            </div>
          </Link>

          {/* Renovation Projects Dark Card */}
          <Link
            href="/projects/renovation"
            className="group relative overflow-hidden rounded-3xl cursor-pointer bg-ink border border-white/20 shadow-2xl transition-all duration-500 p-8 flex flex-col justify-between aspect-[16/9] hover:scale-[1.015] hover:border-gold hover:shadow-gold/20"
          >
            <Image
              src="/renovation/mrs%20-%20Shoma%20Nandi%20Hills/IMG20240320123631.jpg"
              alt="Renovation Projects"
              fill
              sizes="(min-width:768px) 50vw, 100vw"
              className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105 opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/40" />

            <div className="relative z-10 flex items-center justify-between gap-4">
              <span className="bg-gold text-ink font-bold px-4 py-1.5 rounded-full text-[10px] tracking-[0.2em] uppercase shadow-md">
                Division 02 · Renovation & Retrofits
              </span>
              <span className="text-[11px] font-mono font-bold tracking-wider text-ink bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md">
                {renovationCount} Projects
              </span>
            </div>

            <div className="relative z-10">
              <h3 className="font-display text-2xl md:text-3xl text-white font-semibold group-hover:text-gold transition-colors">
                Renovation Projects
              </h3>
              <p className="mt-2 text-white/90 text-[13px] leading-relaxed font-normal">
                Structural retrofits, building refurbishments, interior modernization & extensions.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 text-[12px] uppercase tracking-wider bg-white text-ink font-bold px-4 py-2 rounded-full shadow-md group-hover:bg-gold transition-colors">
                <span>Open Renovation Section</span>
                <span className="text-sm font-extrabold">→</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-between gap-4 flex-wrap mb-10 border-t border-steel/20 pt-8">
          <div className="glass rounded-full inline-flex flex-wrap items-center gap-1 p-1.5">
            {PROJECT_CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-4 py-2 text-[12px] tracking-[0.06em] rounded-full transition-all duration-300 ${
                  filter === c
                    ? 'bg-ink text-bone shadow-md font-medium'
                    : 'text-ink/65 hover:text-ink hover:bg-white/40'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <span className="text-[12px] text-steel font-mono">
            Showing {filtered.length} of {PROJECTS.length} Total Projects
          </span>
        </div>

        {/* Grid of Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <ProjectCard key={p.slug} p={p} mt={i % 2 === 0 ? 0 : 36} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ p, mt }: { p: Project; mt: number }) {
  return (
    <Link
      href={`/projects/${p.slug}`}
      className="group block"
      style={{ marginTop: mt ? `${mt}px` : undefined }}
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl glass">
        <Image
          src={p.thumb}
          alt={p.name}
          fill
          sizes="(min-width:1024px) 32vw, (min-width:640px) 48vw, 100vw"
          className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="absolute top-4 left-4 glass-pill rounded-full text-[10px] tracking-[0.18em] uppercase text-ink/80 px-3 py-1.5 font-medium">
          {p.projectType === 'construction' ? 'Construction' : 'Renovation'} · {p.category}
        </div>

        <div className="absolute top-4 right-4 glass-pill rounded-full text-[10px] tracking-[0.18em] uppercase text-ink/80 px-3 py-1.5">
          {p.status}
        </div>

        <div className="absolute inset-x-4 bottom-4 translate-y-3 group-hover:translate-y-0 transition-transform duration-500 ease-out">
          <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.16em] uppercase text-bone bg-brand-red px-3.5 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-400">
            View case study <span aria-hidden>→</span>
          </span>
        </div>
      </div>

      <div className="mt-5 flex items-end justify-between gap-4">
        <div>
          <h3 className="font-display text-xl text-ink leading-tight sweep inline-block">{p.name}</h3>
          <p className="text-[11px] text-steel uppercase tracking-[0.18em] mt-1">{p.location}</p>
        </div>
        <span className="font-display-italic text-gold text-lg shrink-0">{p.year}</span>
      </div>
    </Link>
  );
}
