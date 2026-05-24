import type { Metadata } from 'next';
import Link from 'next/link';
import { SERVICES } from '@/lib/services';
import { RevealOnScroll } from '@/components/providers/RevealOnScroll';

export const metadata: Metadata = {
  title: 'Services — Five disciplines, one accountable team',
  description:
    'Structural consulting, residential and commercial construction, turnkey project management, renovation and retrofitting.',
};

const ICONS: Record<string, string> = {
  rebar: '⌗',
  villa: '⌂',
  tower: '▤',
  gantt: '▦',
  beam: '◫',
};

export default function ServicesPage() {
  return (
    <>
      <RevealOnScroll />

      <section className="pt-40 pb-16 md:pt-48 md:pb-24 bg-bone relative overflow-hidden">
        <div className="aurora aurora-soft" />
        <div className="container-wide relative z-10">
          <p className="eyebrow mb-6" data-reveal>Services</p>
          <h1 className="font-display text-display text-ink" data-reveal data-reveal-delay="80">
            Five disciplines.<br />
            <em className="font-display-italic text-brand-red">One accountable team.</em>
          </h1>
          <p className="mt-10 max-w-2xl text-ink/70 leading-body" data-reveal data-reveal-delay="160">
            Each engagement starts with a brief, a site visit and a fixed scope. We don&rsquo;t
            cross-sell other services; we explain what we recommend and why, and you decide.
          </p>
        </div>
      </section>

      <section className="section-tight bg-bone relative overflow-hidden">
        <div className="aurora aurora-soft aurora-warm" />
        <div className="container-wide relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((s, i) => (
              <article
                key={s.slug}
                id={s.slug}
                className="relative glass-strong rounded-3xl p-8 md:p-10 overflow-hidden hover:-translate-y-1 transition-transform duration-500 ease-out"
                data-reveal
                data-reveal-delay={`${i * 80}`}
              >
                {/* Wash */}
                <div
                  className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-50 pointer-events-none"
                  style={{
                    background:
                      i % 2 === 0
                        ? 'radial-gradient(circle, rgba(63,169,161,0.4), transparent 65%)'
                        : 'radial-gradient(circle, rgba(192,50,43,0.4), transparent 65%)',
                  }}
                />
                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl glass-tinted grid place-items-center text-3xl text-brand-red font-display">
                      {ICONS[s.motif] || '◆'}
                    </div>
                    <span className="text-gold font-display text-2xl">0{i + 1}</span>
                  </div>

                  <h2 className="font-display text-h2 text-ink leading-tight">{s.title}</h2>
                  <p className="text-brand-teal-deep text-[13px] tracking-[0.04em] mt-2">{s.caption}</p>
                  <p className="text-ink/75 leading-body mt-5 text-[15px]">{s.description}</p>

                  <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-[13px] text-ink/80">
                        <span className="mt-2 h-px w-4 bg-brand-red shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-[12px] text-brand-red sweep mt-7"
                  >
                    Discuss this service <span aria-hidden>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
