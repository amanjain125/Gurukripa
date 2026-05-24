'use client';

import Link from 'next/link';
import { SERVICES } from '@/lib/services';

const ICONS: Record<string, string> = {
  rebar: '⌗',
  villa: '⌂',
  tower: '▤',
  gantt: '▦',
  beam: '◫',
};

export function ServicesPreview() {
  return (
    <section className="section relative overflow-hidden bg-bone">
      <div className="aurora aurora-warm aurora-soft" />
      <div className="container-wide relative z-10">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div>
            <p className="eyebrow mb-4" data-reveal>Services</p>
            <h2 className="font-display text-h1 text-ink max-w-2xl" data-reveal data-reveal-delay="80">
              Five disciplines.<br />
              <em className="font-display-italic text-brand-red">One accountable team.</em>
            </h2>
          </div>
          <Link href="/services" className="sweep text-[14px] text-ink/80">
            All services <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.slice(0, 4).map((s, i) => (
            <Link
              key={s.slug}
              href={`/services#${s.slug}`}
              data-reveal
              data-reveal-delay={`${120 + i * 80}`}
              className="group relative glass rounded-2xl p-7 hover:-translate-y-1 transition-transform duration-500 ease-out overflow-hidden"
            >
              {/* Per-card colour wash */}
              <div
                className="absolute -top-20 -right-20 w-48 h-48 rounded-full opacity-50 blur-3xl pointer-events-none"
                style={{
                  background:
                    i % 2 === 0
                      ? 'radial-gradient(circle, rgba(192,50,43,0.4), transparent 65%)'
                      : 'radial-gradient(circle, rgba(63,169,161,0.4), transparent 65%)',
                }}
              />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl glass-tinted grid place-items-center mb-6 text-3xl text-brand-red font-display">
                  {ICONS[s.motif] || '◆'}
                </div>
                <p className="eyebrow mb-3 text-brand-teal-deep">0{i + 1}</p>
                <h3 className="font-display text-2xl text-ink mb-2 leading-tight">{s.title}</h3>
                <p className="text-[13px] text-ink/70 leading-body">{s.caption}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-[12px] text-brand-red sweep">
                  Read more <span aria-hidden>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
