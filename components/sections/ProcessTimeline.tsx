'use client';

import { PROCESS_STEPS } from '@/lib/process';

export function ProcessTimeline() {
  return (
    <section className="section bg-bone relative overflow-hidden">
      <div className="aurora aurora-soft" />
      <div className="container-wide relative z-10">
        <div className="mb-20 max-w-2xl">
          <p className="eyebrow mb-4" data-reveal>How we work</p>
          <h2 className="font-display text-h1 text-ink" data-reveal data-reveal-delay="80">
            A calm, predictable<br />
            <em className="font-display-italic text-brand-red">five-step</em> rhythm.
          </h2>
        </div>

        <div className="relative pl-6 md:pl-0">
          {/* Vertical line */}
          <div className="absolute left-[7px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-ink/20 to-transparent" />

          <div className="flex flex-col gap-16 md:gap-28">
            {PROCESS_STEPS.map((s, i) => {
              const left = i % 2 === 0;
              return (
                <div
                  key={s.n}
                  data-reveal
                  className={`relative md:grid md:grid-cols-2 md:gap-16 items-center`}
                >
                  {/* Node */}
                  <div className="absolute left-[-1px] md:left-1/2 -translate-x-1/2 top-2 md:top-1/2 md:-translate-y-1/2 w-4 h-4 rounded-full bg-brand-red shadow-[0_0_0_6px_rgba(192,50,43,0.12)]" />

                  <div className={`pl-8 md:pl-0 ${left ? 'md:pr-12 md:text-right' : 'md:pl-12 md:order-2'}`}>
                    <span className="text-gold font-display text-2xl">{s.n}</span>
                    <h3 className="font-display text-h2 text-ink mt-2 mb-4 leading-tight">{s.title}</h3>
                    <p className="text-ink/70 leading-body max-w-md md:inline-block text-[15px]">
                      {s.body}
                    </p>
                  </div>

                  {/* Glass card */}
                  <div className={`mt-8 md:mt-0 pl-8 md:pl-0 ${left ? 'md:pl-12' : 'md:pr-12 md:order-1'}`}>
                    <GlassStep label={s.title} index={i} mirror={!left} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function GlassStep({ label, index, mirror }: { label: string; index: number; mirror: boolean }) {
  const accents = [
    'rgba(63,169,161,0.45)',
    'rgba(192,50,43,0.4)',
    'rgba(200,162,75,0.45)',
    'rgba(44,123,118,0.45)',
    'rgba(14,15,18,0.45)',
  ];
  const c = accents[index % accents.length];
  return (
    <div className="relative w-full max-w-sm aspect-[4/3] mx-auto">
      <div
        className="absolute -inset-4 rounded-3xl blur-2xl opacity-70"
        style={{ background: `radial-gradient(circle at ${mirror ? '70%' : '30%'} 30%, ${c}, transparent 70%)` }}
      />
      <div className="relative h-full glass-strong rounded-3xl p-7 flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="text-[10px] tracking-[0.22em] uppercase text-steel">Step</span>
          <span className="font-display text-2xl text-gold">0{index + 1}</span>
        </div>
        <span className="font-display text-3xl text-ink leading-tight">{label}</span>
      </div>
    </div>
  );
}
