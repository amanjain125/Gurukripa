'use client';

import Image from 'next/image';

export function FounderNote() {
  return (
    <section className="section bg-bone relative overflow-hidden">
      <div className="aurora aurora-soft aurora-warm" />
      <div className="container-narrow relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5" data-reveal>
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden glass-strong">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80"
              alt="Anuj Jain — Founder & Principal Consultant"
              fill
              sizes="(min-width:768px) 40vw, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 glass-pill rounded-2xl px-4 py-3">
              <p className="text-[10px] tracking-[0.22em] uppercase text-ink/60">Founder</p>
              <p className="font-display text-xl text-ink mt-0.5">Anuj Jain</p>
              <p className="text-[11px] text-ink/65">B.E. Civil · M.Tech Structural</p>
            </div>
          </div>
        </div>

        <div className="md:col-span-7">
          <p className="eyebrow mb-6" data-reveal>A note from Anuj</p>
          <blockquote
            className="font-display text-h2 text-ink leading-tight"
            data-reveal
            data-reveal-delay="80"
          >
            <em className="font-display-italic text-brand-red">&ldquo;</em>
            We don&rsquo;t chase volume. We design every member, sign every pour, and we&rsquo;re still
            on call ten years after handover. That&rsquo;s the only way I know how to build.
            <em className="font-display-italic text-brand-red">&rdquo;</em>
          </blockquote>
          <div className="mt-10 flex items-center gap-4" data-reveal data-reveal-delay="160">
            <span className="font-display-italic text-3xl text-brand-red">Anuj Jain</span>
            <span className="hairline-gold flex-1 max-w-[120px]" />
            <span className="text-[12px] text-steel uppercase tracking-[0.18em]">Founder · Principal</span>
          </div>
        </div>
      </div>
    </section>
  );
}
