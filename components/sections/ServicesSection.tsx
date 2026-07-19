'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ServiceDiscipline {
  id: string;
  code: string;
  title: string;
  caption: string;
  description: string;
  motif: string;
  bullets: string[];
  specs: string[];
}

interface DivisionData {
  id: 'construction' | 'renovation';
  title: string;
  subtitle: string;
  divisionCode: string;
  badge: string;
  image: string;
  overview: string;
  disciplines: ServiceDiscipline[];
  process: string[];
  deliverables: string[];
}

const CONSTRUCTION_DIVISION: DivisionData = {
  id: 'construction',
  title: 'Construction & Turnkey Builds',
  subtitle: 'Structural Engineering, Residential Villas & Commercial Complexes',
  divisionCode: 'DIVISION 01',
  badge: 'Turnkey New Build Scope',
  image: '/construction/Channsandra/render%201.png',
  overview:
    'End-to-end structural engineering and turnkey building construction across Bengaluru. Guided by Founder Anuj Jain (B.E. Civil, M.Tech Structural), every villa, commercial tower, and RCC frame is built with STAAD/ETABS load modeling and zero-compromise engineering.',
  disciplines: [
    {
      id: 'villas',
      code: '01',
      title: 'Residential Villas & Custom Homes',
      caption: 'G+1 to G+4 Turnkey Residences',
      description:
        'Bespoke luxury villa construction featuring post-tensioned slabs, high-grade TMT steel, custom elevations, and Vaastu-aligned spatial planning.',
      motif: '⌂',
      bullets: [
        'RCC frame skeleton with post-tensioned beam grid',
        'Infill brickwork with damp-proof acoustic barriers',
        'Custom facade glazing & illumination integration',
        'Turnkey handover with finishes signed off before pour',
      ],
      specs: ['Post-Tension Slabs', 'Fe550D TMT Steel', 'Acoustic Insulation'],
    },
    {
      id: 'commercial',
      code: '02',
      title: 'Commercial Towers & Mixed-Use Complexes',
      caption: 'Offices, Showrooms & IT Blocks',
      description:
        'Multi-tier commercial office blocks and retail towers planned with critical-path modeling for zero schedule variance.',
      motif: '▤',
      bullets: [
        'High axial capacity column grids & raft footings',
        'Structural steel & curtain wall facade integration',
        'MEP & BMS coordination with board-level progress reports',
        'Heavy-duty floor loading capacity design',
      ],
      specs: ['Raft Footings', 'Structural Glazing', 'BMS Integration'],
    },
    {
      id: 'consulting',
      code: '03',
      title: 'Structural Consulting & Peer Review',
      caption: 'Analysis, Modeling & Certification',
      description:
        'Independent structural design, foundation analysis, and peer review for developers, architects, and institutions.',
      motif: '⌗',
      bullets: [
        'STAAD.Pro, ETABS, and SAFE 3D structural modeling',
        'Seismic Zone III & wind load certification',
        'Foundation design for difficult soils & sloped sites',
        'Independent second-engineer drawing verification',
      ],
      specs: ['STAAD.Pro V8i', 'ETABS 2024', 'Seismic Cert.'],
    },
    {
      id: 'turnkey',
      code: '04',
      title: 'Turnkey Project Management',
      caption: 'Single Contract, Single Accountable Team',
      description:
        'Full EPC responsibility holding design, procurement, statutory approvals, construction execution, and final handover.',
      motif: '▦',
      bullets: [
        'Single accountable point of contact',
        'In-house QS, MEP, and structural leads',
        'BBMP, BWSSB, and BESCOM statutory clearance liaison',
        'Locked cost schedules with weekly variance tracking',
      ],
      specs: ['Statutory Liaison', 'In-House QS/MEP', 'Locked Budget'],
    },
  ],
  process: [
    '01. Soil Testing & Sub-surface Geotechnical Analysis',
    '02. 3D STAAD/ETABS Structural Load Modeling & Peer Verification',
    '03. Foundation Excavation, Micro-piling & RCC Footing Cast',
    '04. Frame Construction with Laser-Guided Shuttering & Quality Checks',
    '05. MEP & Utility Integration with Acoustic/Waterproof Barriers',
    '06. Facade Finishing, Interior Handover & Structural Certification',
  ],
  deliverables: [
    'Turnkey RCC Skeleton & Foundation',
    'As-Built Structural Drawings & STAAD Reports',
    'Statutory BBMP / BESCOM / BWSSB Approvals',
    '10-Year Structural Integrity & Waterproofing Warranty',
  ],
};

const RENOVATION_DIVISION: DivisionData = {
  id: 'renovation',
  title: 'Renovation & Structural Retrofitting',
  subtitle: 'FRP Wrapping, Column Strengthening, Floor Additions & Villa Restorations',
  divisionCode: 'DIVISION 02',
  badge: 'Retrofit & Modernization Scope',
  image: '/renovation/mrs%20-%20Shoma%20Nandi%20Hills/IMG20240320123631.jpg',
  overview:
    'Diagnosing and strengthening existing buildings with carbon fiber (FRP) wrapping, steel jacketing, load-bearing wall removals, and floor extensions. We extend building lifecycles by 30+ years while maintaining structural integrity.',
  disciplines: [
    {
      id: 'retrofitting',
      code: '01',
      title: 'Structural Retrofitting & Column Strengthening',
      caption: 'FRP Wrapping & Steel Jacketing',
      description:
        'Strengthening aged or under-reinforced RCC members using high-tensile carbon fiber laminates, FRP wraps, and steel jacket encasement.',
      motif: '◫',
      bullets: [
        'Non-destructive rebar scanning & ultrasonic testing',
        'FRP wrapping on tension faces of beams & slabs',
        'Steel jacketing for column load capacity augmentation',
        'Micro-piling & underpinning for foundation settlement repair',
      ],
      specs: ['Carbon Fiber FRP', 'Steel Jacketing', 'Ultrasonic Scan'],
    },
    {
      id: 'remodeling',
      code: '02',
      title: 'Villa Modernization & Open-Plan Remodeling',
      caption: 'Wall Removals & Cantilever Extensions',
      description:
        'Converting traditional multi-room floor plans into modern open-concept layouts by replacing load-bearing walls with hidden steel lintels.',
      motif: '⌂',
      bullets: [
        'Load transfer calculation & temporary prop framing',
        'Steel ISMB lintel beam insertion for wide open spans',
        'Full interior wall, lighting, and joinery modernization',
        'Cantilever floor slab & balcony additions',
      ],
      specs: ['ISMB Steel Lintels', 'Cantilever Slabs', 'Open Layouts'],
    },
    {
      id: 'heritage',
      code: '03',
      title: 'Heritage & Estate Villa Restoration',
      caption: 'Historic Fabric Repair & Timber Strengthening',
      description:
        'Preserving historical architecture while retrofitting structural strength beneath original roofs, facades, and timber frameworks.',
      motif: '◆',
      bullets: [
        'Madras-tile and heritage timber roof preservation',
        'Stitching foundation settlement with micro-piles',
        'Polymer-modified structural plastering & mortar injection',
        'Original facade restoration & weather-proof sealing',
      ],
      specs: ['Micro-piles', 'Madras Roof Presv.', 'Polymer Mortar'],
    },
    {
      id: 'waterproofing',
      code: '04',
      title: 'Waterproofing & Facade Overhaul',
      caption: 'Damp Remediation & Exterior Cladding',
      description:
        'Comprehensive damp-proof membrane injection, basement waterproofing, and exterior curtain wall upgrades.',
      motif: '⚡',
      bullets: [
        'Chemical pressure injection for damp wall remediation',
        'Multi-layer elastomeric roof waterproofing membranes',
        'Modern exterior facade redesign & cladding installation',
        '10-Year leak-proof performance warranty',
      ],
      specs: ['Pressure Injection', 'Elastomeric Seal', 'Cladding Retrofit'],
    },
  ],
  process: [
    '01. Non-Destructive Structural Health Audit & Core Sampling',
    '02. Retrofit Load Calculation & Carbon Fiber / Steel Design',
    '03. Temporary Propping & Shoring Installation on Site',
    '04. Member Surface Preparation, FRP Wrapping & Jacketing',
    '05. Structural Load Transfer Testing & Wall Integration',
    '06. Final Waterproofing, Facade Finishing & Safety Sign-off',
  ],
  deliverables: [
    'Structural Audit & Load Assessment Certificate',
    'FRP Wrapping & Steel Strengthening Warranty',
    'Complete Architectural & Facade Upgrade',
    'Extended 30+ Year Building Lifecycle Guarantee',
  ],
};

export function ServicesSection() {
  const [activeModal, setActiveModal] = useState<DivisionData | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Lock body scroll and handle ESC key when modal open
  useEffect(() => {
    if (activeModal) {
      const prevBodyOverflow = document.body.style.overflow;
      const prevHtmlOverflow = document.documentElement.style.overflow;
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setActiveModal(null);
      };

      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = prevBodyOverflow;
        document.documentElement.style.overflow = prevHtmlOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [activeModal]);

  return (
    <section id="services" className="section relative overflow-hidden bg-bone">
      <div className="aurora aurora-warm aurora-soft" />
      <div className="container-wide relative z-10">
        {/* Header Title */}
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.22em] text-brand-red font-bold mb-3" data-reveal>
              <span>Gurukripa Capabilities</span>
              <span>·</span>
              <span>Two Specialized Divisions</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-ink font-semibold leading-tight" data-reveal data-reveal-delay="80">
              Our Services.<br />
              <em className="font-display-italic text-brand-red font-normal">Engineering precision in every discipline.</em>
            </h2>
          </div>

          <div className="text-right" data-reveal data-reveal-delay="120">
            <span className="text-xs text-steel font-mono">Click Any Division Card to View Complete Technical Scope & Details</span>
          </div>
        </div>

        {/* SIDE-BY-SIDE DIVISION CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-reveal data-reveal-delay="140">
          {/* Construction Services Card */}
          <div
            onClick={() => setActiveModal(CONSTRUCTION_DIVISION)}
            className="group relative p-8 sm:p-10 rounded-3xl border border-white/20 bg-ink text-white shadow-2xl transition-all duration-500 cursor-pointer flex flex-col justify-between hover:scale-[1.015] hover:border-gold hover:shadow-2xl min-h-[320px]"
          >
            {/* Background subtle pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none rounded-3xl" />

            <div className="relative z-10">
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="bg-gold text-ink font-extrabold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
                  Division 01
                </span>
                <span className="text-gold font-mono text-xs font-semibold">
                  New Builds & Turnkey
                </span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl font-semibold group-hover:text-gold transition-colors">
                Construction Services
              </h3>
              <p className="text-white/90 text-sm mt-3 leading-relaxed font-normal">
                Residential Villas, Multi-Story Commercial Towers, RCC Frame Skeleton & STAAD Structural Load Modeling.
              </p>
            </div>

            <div className="relative z-10 mt-8 flex items-center justify-between border-t border-white/15 pt-6">
              <span className="text-xs font-mono text-white/70">4 Specialized Disciplines</span>
              <div className="inline-flex items-center gap-2 bg-gold text-ink font-extrabold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full shadow-lg group-hover:bg-white transition-colors">
                <span>View Construction Details</span>
                <span className="text-sm font-bold">→</span>
              </div>
            </div>
          </div>

          {/* Renovation Services Card */}
          <div
            onClick={() => setActiveModal(RENOVATION_DIVISION)}
            className="group relative p-8 sm:p-10 rounded-3xl border border-steel/20 bg-white text-ink shadow-xl transition-all duration-500 cursor-pointer flex flex-col justify-between hover:scale-[1.015] hover:border-gold hover:shadow-2xl min-h-[320px]"
          >
            <div className="relative z-10">
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="bg-ink text-white font-extrabold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
                  Division 02
                </span>
                <span className="text-steel font-mono text-xs font-semibold">
                  Retrofits & Restructuring
                </span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl font-semibold group-hover:text-brand-red transition-colors">
                Renovation Services
              </h3>
              <p className="text-ink/80 text-sm mt-3 leading-relaxed font-normal">
                Structural Retrofitting, FRP Column Wrapping, Steel Jacketing, Cantilever Slab Extensions & Facades.
              </p>
            </div>

            <div className="relative z-10 mt-8 flex items-center justify-between border-t border-steel/15 pt-6">
              <span className="text-xs font-mono text-steel">4 Specialized Disciplines</span>
              <div className="inline-flex items-center gap-2 bg-ink text-white font-extrabold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full shadow-lg group-hover:bg-brand-red transition-colors">
                <span>View Renovation Details</span>
                <span className="text-sm font-bold">→</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FULL EXPANDED POPUP MODAL CARD */}
      {activeModal && (
        <div
          className="fixed inset-0 z-[100] bg-ink/90 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6 md:p-8 animate-fadeIn"
          onClick={() => setActiveModal(null)}
        >
          <div
            ref={modalRef}
            onWheel={(e) => {
              e.stopPropagation();
              if (modalRef.current) {
                modalRef.current.scrollTop += e.deltaY;
              }
            }}
            className="relative w-full max-w-5xl max-h-[85vh] overflow-y-auto bg-ink border border-white/25 rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl text-bone overscroll-contain scrollbar-thin shadow-gold/10"
            onClick={(e) => e.stopPropagation()}
            style={{ overscrollBehavior: 'contain' }}
          >
            {/* Sticky Top Close Bar */}
            <div className="sticky -top-6 sm:-top-10 md:-top-12 z-30 bg-ink/95 backdrop-blur-md flex items-center justify-between gap-4 border-b border-white/15 pb-4 pt-2 mb-6">
              <div className="flex items-center gap-3">
                <span className="bg-gold text-ink font-extrabold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
                  {activeModal.divisionCode}
                </span>
                <span className="text-white/80 font-mono text-xs hidden sm:inline">{activeModal.badge}</span>
              </div>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="w-11 h-11 rounded-full bg-white/10 text-white font-extrabold text-xl flex items-center justify-center border border-white/25 hover:bg-gold hover:text-ink hover:border-gold transition-all shadow-xl cursor-pointer shrink-0"
              >
                ✕
              </button>
            </div>

            {/* Modal Title & Hero Header */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
              <div className="lg:col-span-7">
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white font-semibold leading-tight">
                  {activeModal.title}
                </h2>
                <p className="text-gold font-mono text-sm mt-3 font-semibold">
                  {activeModal.subtitle}
                </p>
                <p className="mt-5 text-white/90 text-[15px] leading-relaxed font-normal">
                  {activeModal.overview}
                </p>
              </div>

              <div className="lg:col-span-5 relative aspect-[16/10] lg:aspect-square rounded-2xl overflow-hidden border border-white/15 shadow-xl">
                <Image
                  src={activeModal.image}
                  alt={activeModal.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
              </div>
            </div>

            {/* Complete Disciplines Breakdown */}
            <div className="mb-10">
              <h3 className="font-display text-2xl text-white font-semibold mb-6 border-b border-white/15 pb-3">
                Core Engineering Disciplines & Scope
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {activeModal.disciplines.map((disc, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-gold/50 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 rounded-full bg-gold text-ink font-bold text-xs flex items-center justify-center shrink-0">
                        {disc.code}
                      </span>
                      <h4 className="font-display text-lg text-white font-semibold leading-snug">
                        {disc.title}
                      </h4>
                    </div>
                    <p className="text-white/80 text-[13px] leading-relaxed mb-4">
                      {disc.description}
                    </p>
                    <ul className="space-y-2">
                      {disc.bullets.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-[12px] text-white/90">
                          <span className="text-gold font-bold">✓</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Process & Deliverables Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 border-t border-white/15 pt-8">
              <div>
                <h4 className="font-display text-xl text-white font-semibold mb-4 text-gold">
                  Engineering & Execution Workflow
                </h4>
                <ul className="space-y-3">
                  {activeModal.process.map((step, i) => (
                    <li key={i} className="bg-white/5 px-4 py-2.5 rounded-xl border border-white/10 text-[13px] text-white/90 font-mono">
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-display text-xl text-white font-semibold mb-4 text-gold">
                  Key Deliverables & Guarantees
                </h4>
                <ul className="space-y-3">
                  {activeModal.deliverables.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 bg-white/5 px-4 py-2.5 rounded-xl border border-white/10 text-[13px] text-white/90 font-medium">
                      <span className="w-6 h-6 rounded-full bg-gold text-ink font-bold text-xs flex items-center justify-center shrink-0">
                        ★
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-white/15">
              <Link
                href="/contact"
                className="bg-gold text-ink font-extrabold px-8 py-3.5 rounded-full text-sm hover:bg-white transition-colors shadow-xl"
              >
                Schedule Technical Consultation with Founder Anuj Jain →
              </Link>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-full border border-white/20 text-xs transition-colors cursor-pointer"
              >
                Close Detailed View
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
