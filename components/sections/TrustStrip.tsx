'use client';

import { useEffect, useRef, useState } from 'react';
import { STATS } from '@/lib/process';

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { setVal(value); return; }

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const start = performance.now();
          const dur = 1300;
          const isFloat = !Number.isInteger(value);
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / dur);
            const eased = 1 - Math.pow(1 - t, 3);
            const v = value * eased;
            setVal(isFloat ? Math.round(v * 10) / 10 : Math.round(v));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      });
    }, { threshold: 0.4 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="font-display text-h1 text-ink tabular-nums">
      {val}
      <span className="text-brand-red">{suffix}</span>
    </span>
  );
}

export function TrustStrip() {
  return (
    <section className="bg-bone relative overflow-hidden py-14 md:py-20">
      <div className="container-wide">
        <div className="glass-strong rounded-3xl px-8 md:px-12 py-10 md:py-14 grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6">
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col gap-2">
              <Counter value={s.value} suffix={s.suffix} />
              <span className="text-[11px] uppercase tracking-[0.18em] text-steel">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
