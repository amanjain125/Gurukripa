'use client';

import { TESTIMONIALS } from '@/lib/testimonials';

export function Testimonials() {
  const items = [...TESTIMONIALS, ...TESTIMONIALS];
  return (
    <section className="section-tight relative overflow-hidden bg-bone">
      <div className="aurora aurora-soft" />
      <div className="container-wide relative z-10 mb-12">
        <p className="eyebrow" data-reveal>What clients say</p>
        <h2 className="font-display text-h1 text-ink mt-3 max-w-2xl" data-reveal data-reveal-delay="80">
          Built once. <em className="font-display-italic text-brand-red">Vouched-for</em> for years.
        </h2>
      </div>

      <div className="relative z-10">
        <div className="flex gap-5 marquee-track w-max">
          {items.map((t, i) => (
            <article
              key={i}
              className="w-[340px] md:w-[420px] shrink-0 glass-strong rounded-2xl p-7"
            >
              <p className="font-display text-lg leading-snug text-ink">
                <em className="font-display-italic text-brand-red">&ldquo;</em>
                {t.quote}
                <em className="font-display-italic text-brand-red">&rdquo;</em>
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-teal to-brand-teal-deep" />
                <div>
                  <p className="text-[13px] font-medium text-ink">{t.author}</p>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-steel">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
