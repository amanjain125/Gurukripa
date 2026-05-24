'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { PROJECTS, PROJECT_CATEGORIES, Project } from '@/lib/projects';

export function ProjectsGrid() {
  const [filter, setFilter] = useState<(typeof PROJECT_CATEGORIES)[number]>('All');

  const filtered = useMemo(() => {
    if (filter === 'All') return PROJECTS;
    return PROJECTS.filter((p) => p.category === filter || p.status === filter);
  }, [filter]);

  return (
    <section className="section-tight bg-bone relative overflow-hidden">
      <div className="aurora aurora-soft" />
      <div className="container-wide relative z-10">
        <div className="glass rounded-full inline-flex flex-wrap items-center gap-1 p-1.5 mb-12">
          {PROJECT_CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-2 text-[12px] tracking-[0.06em] rounded-full transition-all duration-300 ${
                filter === c
                  ? 'bg-ink text-bone shadow-md'
                  : 'text-ink/65 hover:text-ink hover:bg-white/40'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p, i) => (
            <ProjectCard key={p.slug} p={p} mt={i % 2 === 0 ? 0 : 48} />
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

        <div className="absolute top-4 left-4 glass-pill rounded-full text-[10px] tracking-[0.18em] uppercase text-ink/80 px-3 py-1.5">
          {p.category} · {p.status}
        </div>

        <div className="absolute inset-x-4 bottom-4 translate-y-3 group-hover:translate-y-0 transition-transform duration-500 ease-out">
          <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.16em] uppercase text-bone bg-brand-red px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-400">
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
