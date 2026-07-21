'use client';

import { useState } from 'react';
import Link from 'next/link';
import { COMPANY } from '@/lib/company';

/**
 * Comprehensive About Section with id="about" for smooth scrolling.
 * Provides deep insight into Gurukripa Constructions' history, founder leadership,
 * structural engineering rigor, key statistics, and core operational principles.
 */
export function AboutSection() {
  const [activeTab, setActiveTab] = useState<'philosophy' | 'founder' | 'standards' | 'stats'>('philosophy');

  const pillars = [
    {
      icon: '📐',
      title: 'Evidence-Led Structural Engineering',
      description:
        'Every beam, column, and foundation load case is simulated using STAAD Pro & ETABS. We build based on empirical structural math, not guesswork or arbitrary margins.',
    },
    {
      icon: '🛡️',
      title: 'Founder-Led Site Verification',
      description:
        'Anuj Jain (M.Tech Structural) personally inspects every critical pour, soil-bearing test, and steel reinforcement rebar placement before concrete is cast.',
    },
    {
      icon: '💎',
      title: 'Transparent Bill of Quantities',
      description:
        'Zero hidden costs or speculative pricing. Detailed itemized estimates down to grade of steel (JSW/Tata Tiscon) and cement (Ultratech) with open-book contracting.',
    },
    {
      icon: '🏛️',
      title: 'Built to Last Generations',
      description:
        'Specializing in long-life residential villas, commercial structures, and heritage structural retrofits in Bengaluru with 100% compliance to BBMP/BDA standards.',
    },
  ];

  const founderSpecs = [
    { label: 'Founder & Principal', value: 'Anuj Jain' },
    { label: 'Qualifications', value: 'B.E. Civil (VTU) · M.Tech Structural Engineering' },
    { label: 'Experience', value: '14+ Years in Bengaluru & Pune' },
    { label: 'Specialization', value: 'RCC Frames, Steel Structures, Retrofits, Soil Dynamics' },
    { label: 'Software Suite', value: 'STAAD Pro · ETABS · SAFE · Revit Structure · AutoCAD' },
    { label: 'Memberships', value: 'IStructE (India) · Institution of Engineers' },
  ];

  const companyMilestones = [
    { year: '2010', title: 'Established in Basavanagudi', desc: 'Started with structural consulting & bespoke residential builds.' },
    { year: '2015', title: '50+ Projects Milestone', desc: 'Expanded into multi-story commercial spaces & turnkey contracting.' },
    { year: '2020', title: '1 Million Sq.Ft Built', desc: 'Crossed 1M sq.ft of precision-engineered built environment.' },
    { year: 'Present', title: '120+ Completed Projects', desc: 'Full-service consultancy & luxury residential construction.' },
  ];

  return (
    <section id="about" className="relative bg-bone overflow-hidden pt-28 pb-24 md:pt-36 md:pb-32 border-b border-ink/10">
      {/* Background Aurora Elements */}
      <div className="aurora aurora-soft opacity-60 pointer-events-none" />
      <div
        className="absolute top-1/3 -right-20 w-[45vw] h-[45vw] rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(63,169,161,0.5), transparent 70%)' }}
      />

      <div className="container-wide relative z-10">
        {/* HEADER BADGE & MAIN TITLE */}
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-teal/10 border border-brand-teal/20 text-brand-teal-deep text-[11px] font-bold tracking-[0.22em] uppercase mb-6" data-reveal>
            <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
            About Gurukripa Constructions
          </div>

          <h2
            className="font-display text-h1 sm:text-display text-ink leading-[0.98] font-light"
            data-reveal
            data-reveal-delay="80"
          >
            We engineer <em className="font-display-italic text-brand-red font-normal">trust</em>—
            one quiet, precision-built structure at a time.
          </h2>

          <p
            className="mt-6 text-ink/80 text-[17px] sm:text-[19px] leading-relaxed max-w-3xl"
            data-reveal
            data-reveal-delay="160"
          >
            Founded in <strong>2010</strong> by <strong>Anuj Jain</strong> (B.E. Civil, M.Tech Structural),{' '}
            <span className="text-ink font-semibold">Gurukripa Constructions</span> is a premier Bengaluru-based civil engineering and structural consultancy firm. We bridge the gap between architectural vision and rock-solid structural longevity.
          </p>
        </div>

        {/* METRICS & HIGHLIGHT STRIP */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-14" data-reveal data-reveal-delay="200">
          {[
            { metric: '14+', label: 'Years of Engineering Excellence', sub: 'Established 2010' },
            { metric: '120+', label: 'Projects Delivered On-Time', sub: 'Villas & Commercial' },
            { metric: '1.4M+', label: 'Sq. Ft. Engineered & Built', sub: 'Across Bengaluru' },
            { metric: '100%', label: 'Founder Site Oversight', sub: 'Signed by M.Tech Eng.' },
          ].map((item, i) => (
            <div
              key={i}
              className="glass rounded-3xl p-6 border border-ink/10 hover:border-brand-teal/40 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="font-display text-3xl sm:text-4xl lg:text-5xl text-ink font-bold tracking-tight">
                {item.metric}
              </div>
              <div className="font-semibold text-ink text-[14px] sm:text-[15px] mt-2 leading-snug">
                {item.label}
              </div>
              <div className="text-[11px] tracking-wider uppercase text-brand-teal-deep font-mono mt-1 opacity-80">
                {item.sub}
              </div>
            </div>
          ))}
        </div>

        {/* MAIN INTERACTIVE CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-16 items-start">
          {/* LEFT: INTERACTIVE TABS CONTENT */}
          <div className="lg:col-span-7 space-y-8">
            {/* Tab Selectors */}
            <div className="flex flex-wrap gap-2 p-1.5 glass rounded-2xl border border-ink/10">
              {[
                { id: 'philosophy', label: 'Our Philosophy' },
                { id: 'founder', label: 'Founder & Leadership' },
                { id: 'standards', label: 'Engineering Standards' },
                { id: 'stats', label: 'Milestones' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-5 py-2.5 rounded-xl text-[13px] font-bold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-ink text-bone shadow-md'
                      : 'text-ink/70 hover:text-ink hover:bg-black/5'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* TAB 1: PHILOSOPHY */}
            {activeTab === 'philosophy' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="glass-strong rounded-3xl p-8 border border-ink/10">
                  <h3 className="font-display text-2xl text-ink mb-4">
                    Evidence-Led Construction, Zero Compromise.
                  </h3>
                  <p className="text-ink/80 text-[15.5px] leading-relaxed mb-6">
                    At Gurukripa, construction is a profession of mathematical proof. We do not speculate on material quantities, nor do we delegate critical structural decisions to unverified vendors. From soil-bearing capacity assessments to non-destructive concrete testing, every step is backed by data.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {pillars.map((p, idx) => (
                      <div key={idx} className="bg-bone/80 rounded-2xl p-4 border border-ink/5">
                        <div className="text-2xl mb-2">{p.icon}</div>
                        <h4 className="font-bold text-ink text-[14.5px]">{p.title}</h4>
                        <p className="text-ink/70 text-[13px] leading-relaxed mt-1">{p.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: FOUNDER */}
            {activeTab === 'founder' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="glass-strong rounded-3xl p-8 border border-ink/10">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-ink/10 pb-6 mb-6">
                    <div>
                      <span className="text-[10px] font-bold tracking-[0.25em] text-brand-red uppercase">
                        Principal Consultant
                      </span>
                      <h3 className="font-display text-3xl text-ink">{COMPANY.founder.name}</h3>
                      <p className="font-display-italic text-brand-teal-deep text-[16px]">
                        {COMPANY.founder.credentials}
                      </p>
                    </div>
                    <div className="px-4 py-2 rounded-xl bg-brand-gold/15 text-gold-dark font-mono text-[12px] font-bold border border-brand-gold/30">
                      14+ Yrs Practice
                    </div>
                  </div>

                  <p className="text-ink/80 text-[15px] leading-relaxed mb-6">
                    Anuj Jain holds a Bachelor of Engineering in Civil Engineering from Visvesvaraya Technological University (VTU) and a Master of Technology in Structural Engineering. With over 14 years of hands-on experience designing and executing complex structural frames across Bengaluru and Maharashtra, he ensures every project meets stringent seismic and load-bearing parameters.
                  </p>

                  <div className="space-y-3 bg-bone/90 p-5 rounded-2xl border border-ink/5">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-ink/60 mb-2">
                      Technical Credentials & Specs
                    </div>
                    {founderSpecs.map((spec, i) => (
                      <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between text-[13.5px] py-1 border-b border-ink/5 last:border-0">
                        <span className="text-ink/60 font-medium">{spec.label}</span>
                        <span className="text-ink font-semibold">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: STANDARDS */}
            {activeTab === 'standards' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="glass-strong rounded-3xl p-8 border border-ink/10">
                  <h3 className="font-display text-2xl text-ink mb-4">
                    Our Quality & Material Benchmark
                  </h3>
                  <p className="text-ink/80 text-[15px] leading-relaxed mb-6">
                    We maintain strict specification enforcement across all turnkey projects. We never substitute brands without written structural peer review.
                  </p>

                  <div className="space-y-4">
                    {[
                      { item: 'Structural Steel', details: 'Fe-550D TMT bars (JSW Steel / Tata Tiscon) with ultrasonic testing.' },
                      { item: 'Cement & Concrete', details: 'Ultratech / ACC 53-grade OPC and M25/M30 ready-mix concrete formulations.' },
                      { item: 'Waterproofing', details: 'Multi-layer crystalline & elastomeric membranes for basements & terraces.' },
                      { item: 'Plumbing & Electrical', details: 'Ashirvad CPVC, Finolex / Havells heavy-duty concealed conduits.' },
                    ].map((st, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 bg-bone/90 rounded-2xl border border-ink/5">
                        <div className="w-6 h-6 rounded-full bg-brand-teal/20 text-brand-teal-deep flex items-center justify-center text-[12px] font-bold shrink-0 mt-0.5">
                          ✓
                        </div>
                        <div>
                          <div className="font-bold text-ink text-[14.5px]">{st.item}</div>
                          <div className="text-ink/70 text-[13px] mt-0.5">{st.details}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: MILESTONES */}
            {activeTab === 'stats' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="glass-strong rounded-3xl p-8 border border-ink/10">
                  <h3 className="font-display text-2xl text-ink mb-6">
                    Journey of Quality (2010 — Present)
                  </h3>
                  <div className="relative border-l-2 border-brand-teal/40 ml-4 space-y-8">
                    {companyMilestones.map((m, i) => (
                      <div key={i} className="relative pl-6">
                        <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-brand-teal border-2 border-bone" />
                        <span className="text-[12px] font-mono font-bold text-brand-teal-deep bg-brand-teal/10 px-2.5 py-0.5 rounded-full">
                          {m.year}
                        </span>
                        <h4 className="font-display text-lg text-ink font-bold mt-1">{m.title}</h4>
                        <p className="text-ink/70 text-[13.5px] mt-1">{m.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ACTION BUTTONS */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="/contact" className="btn btn-primary shadow-lg">
                Speak with Founder Anuj Jain &rarr;
              </Link>
              <Link href="/#projects" className="btn btn-ghost">
                View Completed Projects &darr;
              </Link>
            </div>
          </div>

          {/* RIGHT: BLUEPRINT VISUALIZATION CARD */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="glass-strong rounded-3xl p-3 border border-ink/15 shadow-2xl bg-gradient-to-b from-bone via-white to-bone">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden relative bg-[#0F172A] p-6 text-white flex flex-col justify-between">
                {/* SVG Blueprint Overlay */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  <svg className="w-full h-full" viewBox="0 0 400 500" fill="none">
                    <defs>
                      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#38BDF8" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                    {/* Beam grid lines */}
                    <line x1="40" y1="100" x2="360" y2="100" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="4 4" />
                    <line x1="40" y1="220" x2="360" y2="220" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="4 4" />
                    <line x1="40" y1="340" x2="360" y2="340" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="4 4" />
                    <line x1="100" y1="40" x2="100" y2="440" stroke="#38BDF8" strokeWidth="1.5" />
                    <line x1="300" y1="40" x2="300" y2="440" stroke="#38BDF8" strokeWidth="1.5" />
                  </svg>
                </div>

                {/* Top Blueprint Tag */}
                <div className="relative z-10 flex items-center justify-between border-b border-white/20 pb-3">
                  <span className="text-[10px] font-mono tracking-[0.2em] text-sky-400 uppercase">
                    GURUKRIPA · STRUCTURAL SPEC
                  </span>
                  <span className="text-[10px] font-mono text-white/50">DRAWING # GK-2026-A</span>
                </div>

                {/* Middle Content */}
                <div className="relative z-10 space-y-4 my-auto">
                  <div className="w-12 h-12 rounded-2xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-300">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0V11m0 0h4m-4 0H7" />
                    </svg>
                  </div>

                  <h4 className="font-display text-2xl text-white font-light leading-snug">
                    Bespoke Villa &amp; Structural Engineering Studio
                  </h4>

                  <p className="text-white/75 text-[13.5px] leading-relaxed">
                    Based in Basavanagudi, Bengaluru. Every design is calculated for high durability, seismic factor compliance, and zero structural deflection over time.
                  </p>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-[10px] text-white/50 uppercase font-mono">Location</div>
                      <div className="text-[13px] font-bold text-sky-300 mt-0.5">Basavanagudi</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-[10px] text-white/50 uppercase font-mono">Scope</div>
                      <div className="text-[13px] font-bold text-sky-300 mt-0.5">Turnkey + Consult</div>
                    </div>
                  </div>
                </div>

                {/* Bottom Footer Details */}
                <div className="relative z-10 pt-3 border-t border-white/15 flex items-center justify-between text-[11px] font-mono text-white/60">
                  <span>APPROVED BY: ANUJ JAIN</span>
                  <span className="text-emerald-400 font-bold">● ACTIVE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
