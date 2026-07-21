'use client';

import { useEffect, useRef, useState } from 'react';
import { COMPANY } from '@/lib/company';

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
          const dur = 1500;
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
    }, { threshold: 0.1 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [value]);

  const formattedVal = Number.isInteger(value) ? val : val.toFixed(1);

  return (
    <span ref={ref} className="font-sans text-3xl md:text-4xl font-extrabold text-ink leading-none tabular-nums">
      {formattedVal}
      <span className="text-brand-red font-extrabold">{suffix}</span>
    </span>
  );
}

/**
 * About Section combining both design mockups:
 * 1. Top Section: Headline "Engineering Trust. Building Legacies.", text, villa photo, and metrics.
 * 2. Bottom Section: Side-by-side Cards for Founder Bio, Core Values, and Engineering Process.
 */
export function AboutSection() {
  const stats = [
    {
      targetValue: 14,
      suffix: '+',
      title: 'Years of Engineering Excellence',
      subtitle: 'ESTABLISHED 2010',
      icon: (
        <svg className="w-6 h-6 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 00.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      targetValue: 120,
      suffix: '+',
      title: 'Projects Delivered On-Time',
      subtitle: 'VILLAS & COMMERCIAL',
      icon: (
        <svg className="w-6 h-6 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0V11m0 0h4m-4 0H7" />
        </svg>
      ),
    },
    {
      targetValue: 1.4,
      suffix: 'M+',
      title: 'Sq. Ft. Engineered & Built',
      subtitle: 'ACROSS BENGALURU',
      icon: (
        <svg className="w-6 h-6 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      targetValue: 100,
      suffix: '%',
      title: 'Founder Site Oversight',
      subtitle: 'SIGNED BY M.TECH ENG.',
      icon: (
        <svg className="w-6 h-6 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="about" className="relative bg-[#FAF8F5] pt-20 pb-24 overflow-hidden border-b border-ink/5">
      {/* ==================== PART 1: ABOUT US HEADER ROW (FULL VIEWPORT WIDTH) ==================== */}
      <div className="relative flex flex-col lg:flex-row items-stretch w-full mb-16 lg:mb-20">
        
        {/* LEFT COLUMN: TEXT CONTENT (ALIGNS WITH CONTAINER-WIDE) */}
        <div 
          className="about-left-col w-full lg:w-[55%] flex flex-col justify-center pr-6 lg:pr-16 py-8 pb-12 lg:py-16 z-10"
        >
          {/* Red badge with trailing line */}
          <div className="flex items-center gap-3 text-[11px] tracking-[0.24em] font-bold text-brand-red uppercase mb-5" data-reveal>
            <span>About Us</span>
            <span className="w-12 h-px bg-brand-red/60" />
          </div>

          {/* Serif Display Heading */}
          <h2 
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-bold text-ink leading-[1.08] tracking-tight mb-5"
            data-reveal
            data-reveal-delay="80"
          >
            Engineering<br />
            <span className="font-display-italic text-brand-red not-italic italic font-semibold">Trust.</span><br />
            Building Legacies.
          </h2>

          {/* Red horizontal divider line */}
          <div className="w-16 h-[2px] bg-brand-red mb-8 mt-1" data-reveal data-reveal-delay="120" />

          {/* Paragraph Description */}
          <div className="space-y-6 text-ink/80 text-[16px] sm:text-[17px] leading-relaxed max-w-2xl font-light">
            <p data-reveal data-reveal-delay="160">
              Founded in 2010 by <strong className="font-semibold text-ink">Anuj Jain</strong> (B.E. Civil, M.Tech Structural),{' '}
              <strong className="font-semibold text-ink">{COMPANY.name}</strong> is a premier Bengaluru-based civil engineering and structural consultancy firm.
            </p>
            <p data-reveal data-reveal-delay="200">
              We bridge the gap between architectural vision and rock-solid structural longevity.
            </p>
          </div>
        </div>

        {/* DESKTOP RIGHT COLUMN: LUXURY VILLA IMAGE (ABSOLUTE FULL HEIGHT & BLEEDS TO RIGHT VIEWPORT EDGE) */}
        <div 
          className="absolute right-0 -top-20 bottom-0 w-[45%] overflow-hidden hidden lg:block z-0" 
          data-reveal 
          data-reveal-delay="240"
        >
          <img
            src="/villa-hero.jpg"
            alt="Gurukripa Luxury Villa"
            className="w-full h-full object-cover animate-breath"
          />
          {/* Smooth edge transitions to dissolve boundaries */}
          <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/60 via-[#FAF8F5]/20 to-transparent w-1/3 pointer-events-none z-10" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/40 to-transparent h-24 pointer-events-none z-10" />
        </div>

        {/* MOBILE RIGHT COLUMN: LUXURY VILLA IMAGE (INLINE & BLEEDS TO VIEWPORT SIDES) */}
        <div 
          className="w-full h-[350px] sm:h-[460px] md:h-[520px] relative overflow-hidden block lg:hidden z-0"
          data-reveal 
          data-reveal-delay="240"
        >
          <img
            src="/villa-hero.jpg"
            alt="Gurukripa Luxury Villa"
            className="w-full h-full object-cover animate-breath"
          />
          {/* Smooth edge transitions for mobile */}
          <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/50 to-transparent w-1/4 pointer-events-none z-10" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/40 to-transparent h-16 pointer-events-none z-10" />
        </div>

      </div>

      {/* ==================== CONTAINER WRAPPER FOR STATS & CARDS ==================== */}
      <div className="container-wide relative z-10">
        
        {/* ==================== PART 2: METRICS STRIP ==================== */}
        <div 
          className="bg-white rounded-3xl border border-ink/5 shadow-lg p-6 sm:p-8 md:p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 divide-y sm:divide-y-0 lg:divide-x divide-ink/10"
          data-reveal
          data-reveal-delay="300"
        >
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className={`flex items-start gap-4 pt-6 sm:pt-4 lg:pt-0 first:pt-0 lg:first:pl-0 ${idx % 2 === 0 ? 'sm:pl-0' : 'sm:pl-6 lg:pl-8'}`}
            >
              {/* Red circular outline icon */}
              <div className="w-12 h-12 rounded-full border border-brand-red/20 flex items-center justify-center text-brand-red bg-brand-red/5 shrink-0">
                {stat.icon}
              </div>
              
              {/* Stat Value & Labels */}
              <div className="flex flex-col">
                <Counter value={stat.targetValue} suffix={stat.suffix} />
                <span className="text-[13px] font-medium text-ink/75 mt-1.5 leading-snug">
                  {stat.title}
                </span>
                <span className="text-[10px] tracking-wider text-brand-red font-mono uppercase mt-1.5 font-bold">
                  {stat.subtitle}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ==================== PART 3: THREE CARDS GRID ==================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-20 md:mt-24">
          
          {/* CARD 1: FOUNDER */}
          <div 
            className="bg-white rounded-[32px] p-6 sm:p-8 border border-ink/5 shadow-lg flex flex-col sm:flex-row justify-between gap-6 overflow-hidden col-span-1 lg:col-span-4 transition-all duration-300 hover:shadow-xl"
            data-reveal
            data-reveal-delay="100"
          >
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[10px] tracking-wider text-brand-red font-mono font-bold uppercase">Founder</span>
                <h3 className="font-display text-3xl text-ink font-bold mt-1 leading-none">Anuj Jain</h3>
                <p className="text-[12px] font-bold text-brand-red mt-2 leading-snug">
                  B.E. Civil,<br />M.Tech Structural Engineering
                </p>
                <p className="text-[13px] text-ink/75 leading-relaxed mt-5 font-light">
                  With a passion for precision and a commitment to integrity, Anuj Jain leads every project with hands-on involvement from concept to completion.
                </p>
              </div>
              {/* Signature */}
              <div className="mt-8">
                <svg className="w-28 h-10 text-ink/80" viewBox="0 0 100 40" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M10,25 C20,15 25,5 30,20 C35,28 32,32 38,18 C42,8 48,22 52,24 C56,26 60,14 64,16 C68,18 72,28 75,20 C78,12 85,25 90,22" />
                </svg>
              </div>
            </div>
            
            {/* Portrait Image */}
            <div className="relative w-36 h-48 sm:w-40 sm:h-52 mx-auto sm:mx-0 shrink-0 rounded-2xl overflow-hidden bg-gradient-to-b from-[#EAE6DF] to-[#FAF8F5] flex items-end">
              <img
                src="/founder_anuj_jain.png"
                alt="Anuj Jain - Founder"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* CARD 2: OUR CORE VALUES */}
          <div 
            className="bg-white rounded-[32px] p-6 sm:p-8 border border-ink/5 shadow-lg flex flex-col col-span-1 lg:col-span-4 transition-all duration-300 hover:shadow-xl"
            data-reveal
            data-reveal-delay="200"
          >
            <span className="text-[10px] tracking-wider text-brand-red font-mono font-bold uppercase mb-6">Our Core Values</span>
            <div className="space-y-6 flex-1 flex flex-col justify-center">
              {/* Value 1 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-brand-red/20 flex items-center justify-center text-brand-red bg-brand-red/5 shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
                    <circle cx="12" cy="12" r="4" strokeWidth={1.5} />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-ink leading-tight">Precision Engineering</h4>
                  <p className="text-[12px] text-ink/75 mt-1 leading-relaxed font-light">Every calculation, every detail matters.</p>
                </div>
              </div>
              
              {/* Value 2 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-brand-red/20 flex items-center justify-center text-brand-red bg-brand-red/5 shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-ink leading-tight">Uncompromised Quality</h4>
                  <p className="text-[12px] text-ink/75 mt-1 leading-relaxed font-light">We never take shortcuts.</p>
                </div>
              </div>

              {/* Value 3 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-brand-red/20 flex items-center justify-center text-brand-red bg-brand-red/5 shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-ink leading-tight">Complete Transparency</h4>
                  <p className="text-[12px] text-ink/75 mt-1 leading-relaxed font-light">Open communication, open books.</p>
                </div>
              </div>

              {/* Value 4 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-brand-red/20 flex items-center justify-center text-brand-red bg-brand-red/5 shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-ink leading-tight">Safety First</h4>
                  <p className="text-[12px] text-ink/75 mt-1 leading-relaxed font-light">People, structure, and environment.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 3: OUR ENGINEERING PROCESS */}
          <div 
            className="bg-white rounded-[32px] p-6 sm:p-8 border border-ink/5 shadow-lg flex flex-col col-span-1 lg:col-span-4 transition-all duration-300 hover:shadow-xl"
            data-reveal
            data-reveal-delay="300"
          >
            <span className="text-[10px] tracking-wider text-brand-red font-mono font-bold uppercase mb-6">Our Engineering Process</span>
            <div className="flex-1 flex flex-col justify-center gap-10 py-2">
              {/* Row 1 */}
              <div className="relative flex items-center justify-between">
                {/* Connector Line Row 1 */}
                <div className="absolute left-[15%] right-[15%] top-6 h-[2px] bg-brand-red/20 z-0" />
                
                {/* Step 1 */}
                <div className="flex flex-col items-center text-center z-10 w-24">
                  <div className="w-12 h-12 rounded-full border border-brand-red/20 bg-white flex items-center justify-center text-brand-red shadow-sm hover:scale-105 transition-transform duration-300">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                  <span className="text-[11px] font-bold text-ink mt-3 leading-snug">Site Study</span>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-center text-center z-10 w-24">
                  <div className="w-12 h-12 rounded-full border border-brand-red/20 bg-white flex items-center justify-center text-brand-red shadow-sm hover:scale-105 transition-transform duration-300">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <span className="text-[11px] font-bold text-ink mt-3 leading-snug">Planning</span>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-center text-center z-10 w-24">
                  <div className="w-12 h-12 rounded-full border border-brand-red/20 bg-white flex items-center justify-center text-brand-red shadow-sm hover:scale-105 transition-transform duration-300">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                  </div>
                  <span className="text-[11px] font-bold text-ink mt-3 leading-snug">Structural Design</span>
                </div>
              </div>

              {/* Row 2 */}
              <div className="relative flex items-center justify-between">
                {/* Connector Line Row 2 */}
                <div className="absolute left-[15%] right-[15%] top-6 h-[2px] bg-brand-red/20 z-0" />

                {/* Step 4 */}
                <div className="flex flex-col items-center text-center z-10 w-24">
                  <div className="w-12 h-12 rounded-full border border-brand-red/20 bg-white flex items-center justify-center text-brand-red shadow-sm hover:scale-105 transition-transform duration-300">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <span className="text-[11px] font-bold text-ink mt-3 leading-snug">Material Selection</span>
                </div>

                {/* Step 5 */}
                <div className="flex flex-col items-center text-center z-10 w-24">
                  <div className="w-12 h-12 rounded-full border border-brand-red/20 bg-white flex items-center justify-center text-brand-red shadow-sm hover:scale-105 transition-transform duration-300">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <span className="text-[11px] font-bold text-ink mt-3 leading-snug">Execution</span>
                </div>

                {/* Step 6 */}
                <div className="flex flex-col items-center text-center z-10 w-24">
                  <div className="w-12 h-12 rounded-full border border-brand-red/20 bg-white flex items-center justify-center text-brand-red shadow-sm hover:scale-105 transition-transform duration-300">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <span className="text-[11px] font-bold text-ink mt-3 leading-snug">Quality Assurance</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
