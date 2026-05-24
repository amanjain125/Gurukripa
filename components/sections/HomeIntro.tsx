'use client';

import Link from 'next/link';
import { COMPANY } from '@/lib/company';

/**
 * The "exhale" section directly after the cinematic hero.
 * Light bone background — strong contrast against the dark scroll reel above.
 * Big editorial intro paragraph + CTAs + signature row.
 */
export function HomeIntro() {
  return (
    <section className="relative bg-bone overflow-hidden">
      {/* Aurora */}
      <div className="aurora aurora-soft" />

      <div className="container-wide relative z-10 pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-6" data-reveal>The studio</p>
            <h2
              className="font-display text-h1 text-ink leading-[1.05]"
              data-reveal
              data-reveal-delay="80"
            >
              We engineer <em className="font-display-italic text-brand-red">trust</em>—
              one quiet, well-detailed building at a time.
            </h2>
            <p
              className="mt-8 text-ink/75 leading-body text-[16px] max-w-2xl"
              data-reveal
              data-reveal-delay="160"
            >
              {COMPANY.name} is a Bengaluru civil construction and structural consultancy firm
              led by <span className="text-ink">Anuj Jain</span>{' '}
              <span className="text-ink/60">(B.E. Civil, M.Tech Structural)</span>. We work
              with owners who plan to live in the building for decades, and we sign every
              drawing and every pour ourselves.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4" data-reveal data-reveal-delay="240">
              <Link href="/projects" className="btn btn-primary">
                Explore Projects
                <span aria-hidden>→</span>
              </Link>
              <Link href="/contact" className="btn btn-ghost">
                Talk to Anuj
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>

          {/* Right: vertical stack of glass quick-cards */}
          <div className="lg:col-span-5 lg:pl-8 grid grid-cols-2 gap-4 self-end">
            {[
              ['Residences', 'Independent homes, row-house clusters.'],
              ['Commercial', 'Offices, retail, mixed-use.'],
              ['Consulting', 'Structural design and peer review.'],
              ['Retrofit', 'Heritage and ageing-building care.'],
            ].map(([title, body], i) => (
              <Link
                href="/services"
                key={title}
                className="glass rounded-2xl p-5 hover:-translate-y-1 transition-transform duration-500 ease-out"
                data-reveal
                data-reveal-delay={`${200 + i * 80}`}
              >
                <div className="text-[10px] tracking-[0.22em] uppercase text-brand-teal-deep mb-2">
                  0{i + 1}
                </div>
                <h3 className="font-display text-lg text-ink leading-snug">{title}</h3>
                <p className="text-[12px] text-ink/65 leading-body mt-2">{body}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="hairline mt-16" />

        <div className="mt-10 flex flex-wrap items-center justify-between gap-6 text-[11px] tracking-[0.22em] uppercase text-steel">
          <span>14+ years · 120+ projects · 1.4M sq.ft engineered</span>
          <span>{COMPANY.city} · IN</span>
        </div>
      </div>
    </section>
  );
}
