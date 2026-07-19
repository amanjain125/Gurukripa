import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PROJECTS } from '@/lib/projects';
import { RevealOnScroll } from '@/components/providers/RevealOnScroll';

export const metadata: Metadata = {
  title: 'Renovation & Structural Retrofit Projects — Gurukripa Constructions',
  description:
    'Structural upgrades, heritage retrofits, building restorations, cantilever floor extensions, and high-end residential remodeling across Bengaluru.',
};

export default function RenovationProjectsPage() {
  const renovationProjects = PROJECTS.filter((p) => p.projectType === 'renovation');

  return (
    <>
      <RevealOnScroll />
      {/* Header Section */}
      <section className="pt-40 pb-16 md:pt-48 md:pb-24 bg-ink text-bone relative overflow-hidden">
        <div
          className="absolute -top-40 -left-20 w-[60vw] h-[60vw] rounded-full opacity-25 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.4), transparent 65%)' }}
        />
        <div className="container-wide relative z-10">
          <div className="flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.22em] text-gold font-bold mb-6">
            <Link href="/projects" className="hover:underline text-white/80">
              Projects
            </Link>
            <span>/</span>
            <span>Division 02</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h1
                className="font-display text-4xl sm:text-5xl md:text-6xl text-white font-semibold leading-[1.05]"
                data-reveal
                data-reveal-delay="80"
              >
                Renovation Projects.
              </h1>
              <p
                className="mt-6 max-w-2xl text-white/90 text-[16px] md:text-[18px] leading-relaxed font-normal"
                data-reveal
                data-reveal-delay="160"
              >
                Structural retrofits, heritage restorations, elevation redesigns, cantilever floor additions, and high-end building remodeling. Engineering extra life into existing structures.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3 lg:items-end">
              <div className="bg-gold text-ink font-extrabold px-5 py-2.5 rounded-full text-xs shadow-xl border border-gold tracking-wide">
                {renovationProjects.length} Retrofit & Renovation Projects
              </div>
              <Link
                href="/projects/construction"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-4 py-2 rounded-full border border-white/20 text-xs transition-colors flex items-center gap-2 shadow-md"
              >
                <span>Switch to Construction Projects</span>
                <span className="font-bold text-gold">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="section bg-bone relative overflow-hidden">
        <div className="aurora aurora-soft" />
        <div className="container-wide relative z-10">
          <div className="flex items-center justify-between mb-10 border-b border-steel/20 pb-4">
            <h2 className="font-display text-2xl text-ink font-semibold">
              All Renovation Division Projects ({renovationProjects.length})
            </h2>
            <span className="text-xs text-steel font-mono font-medium hidden sm:inline">
              Click any project card to view full case study
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {renovationProjects.map((p, i) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="group block"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-ink border border-white/10 shadow-xl transition-all duration-500 hover:scale-[1.02] hover:border-gold hover:shadow-2xl flex flex-col justify-between p-6">
                  <Image
                    src={p.thumb}
                    alt={p.name}
                    fill
                    sizes="(min-width:1024px) 32vw, (min-width:640px) 48vw, 100vw"
                    className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-106 opacity-55"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/30" />

                  {/* Top Badges */}
                  <div className="relative z-10 flex items-center justify-between gap-2">
                    <span className="bg-gold text-ink font-extrabold text-[10px] tracking-wider uppercase px-3.5 py-1.5 rounded-full shadow-lg">
                      {p.category}
                    </span>

                    <span className="bg-white text-ink font-extrabold text-[10px] tracking-wider uppercase px-3.5 py-1.5 rounded-full shadow-lg">
                      {p.status}
                    </span>
                  </div>

                  {/* Bottom Content */}
                  <div className="relative z-10 mt-auto">
                    <p className="text-[11px] uppercase tracking-widest text-gold font-mono font-bold mb-2">
                      {p.location}
                    </p>
                    <h3 className="font-display text-2xl text-white font-semibold leading-tight group-hover:text-gold transition-colors">
                      {p.name}
                    </h3>
                    <p className="mt-2 text-[13px] text-white/90 line-clamp-2 leading-relaxed font-normal">
                      {p.summary}
                    </p>
                    <div className="mt-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-wider bg-white text-ink font-extrabold px-4 py-2 rounded-full shadow-lg group-hover:bg-gold group-hover:translate-x-1 transition-all duration-300">
                      <span>View Case Study</span>
                      <span className="text-xs">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Banner Callout */}
          <div className="mt-20 bg-ink border border-white/15 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto shadow-2xl text-bone">
            <span className="eyebrow text-gold mb-3 block font-bold">Custom Renovation Portfolio</span>
            <h3 className="font-display text-2xl md:text-3xl text-white font-semibold">
              Have renovation & retrofit projects to add?
            </h3>
            <p className="text-white/80 text-[14px] mt-3 max-w-xl mx-auto leading-relaxed">
              We can update this page with your specific renovation case studies, before & after photos, structural solution specs, and locations.
            </p>
            <div className="mt-6 flex items-center justify-center gap-4 flex-wrap">
              <Link href="/contact" className="btn btn-primary !rounded-full !px-7 !py-3 text-[14px] font-bold shadow-lg">
                Consult With Founder
              </Link>
              <Link href="/projects/construction" className="btn btn-secondary !rounded-full !px-7 !py-3 text-[14px] font-bold">
                Explore Construction Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
