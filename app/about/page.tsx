import type { Metadata } from 'next';
import { COMPANY } from '@/lib/company';
import { RevealOnScroll } from '@/components/providers/RevealOnScroll';

export const metadata: Metadata = {
  title: 'About — A quiet, evidence-led practice',
  description:
    'Gurukripa Constructions is a Bengaluru civil construction and structural consultancy firm, led by Anuj Jain (B.E. Civil, M.Tech Structural). Founded 2010.',
};

export default function AboutPage() {
  return (
    <>
      <RevealOnScroll />
      <section className="pt-40 pb-24 md:pt-48 md:pb-32 bg-bone relative overflow-hidden">
        <div className="aurora aurora-soft" />
        <div className="container-wide relative z-10">
          <p className="eyebrow mb-6" data-reveal>About the firm</p>
          <h1
            className="font-display text-display max-w-5xl text-ink leading-[0.95]"
            data-reveal
            data-reveal-delay="80"
          >
            A quiet, evidence-led<br />
            <em className="font-display-italic text-brand-red">practice.</em>
          </h1>
        </div>
      </section>

      <section className="section-tight bg-bone relative overflow-hidden">
        <div className="aurora aurora-soft aurora-warm" />
        <div className="container-wide relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6 text-[16px] leading-body text-ink/85">
            <p data-reveal>
              {COMPANY.name} began in {COMPANY.established} with a single conviction: that
              construction is a profession of evidence, not enthusiasm. Every member should be
              sized to a load case. Every estimate should be defensible to a stranger. Every
              site report should match what is actually built.
            </p>
            <p data-reveal data-reveal-delay="80">
              Today the firm is a small, deliberate team of structural engineers, site
              managers, and quantity surveyors operating out of Basavanagudi, Bengaluru. We
              take on a limited number of projects each year so the founder can stay
              technically involved on every one.
            </p>
            <p data-reveal data-reveal-delay="160">
              Our work covers independent residences, row-house clusters, mixed-use blocks,
              tenant fit-outs, and structural retrofits of older buildings. Some are turnkey,
              some are consulting-only. All of them get the same standard of documentation,
              the same weekly report, the same after-handover follow-up.
            </p>

            <div className="hairline mt-12" />

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12">
              {[
                ['Founded', String(COMPANY.established)],
                ['Practice size', '14 engineers'],
                ['Live projects', '7 active'],
                ['City', COMPANY.city],
              ].map(([k, v]) => (
                <div key={k} className="glass rounded-2xl p-5" data-reveal>
                  <div className="text-[10px] tracking-[0.22em] uppercase text-steel mb-1">{k}</div>
                  <div className="font-display text-2xl text-ink">{v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="glass-strong rounded-3xl p-2">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden relative bg-gradient-to-br from-brand-teal/15 to-brand-red/10">
                {/* Decorative wireframe-style SVG study */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 500" fill="none">
                  <defs>
                    <linearGradient id="lg" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0%" stopColor="#3FA9A1" />
                      <stop offset="100%" stopColor="#2C7B76" />
                    </linearGradient>
                  </defs>
                  {/* Slabs */}
                  {[100, 180, 260, 340].map((y) => (
                    <rect key={y} x="60" y={y} width="280" height="4" fill="url(#lg)" />
                  ))}
                  {/* Columns */}
                  {[80, 200, 320].map((x) => (
                    <rect key={x} x={x} y="100" width="3" height="240" fill="url(#lg)" />
                  ))}
                  {/* Beams hatching */}
                  {[0, 1, 2].map((i) => (
                    <g key={i}>
                      {Array.from({ length: 12 }).map((_, j) => (
                        <line
                          key={j}
                          x1={70 + j * 22}
                          y1={102 + i * 80}
                          x2={70 + j * 22}
                          y2={142 + i * 80}
                          stroke="url(#lg)"
                          strokeWidth="0.5"
                          opacity="0.4"
                        />
                      ))}
                    </g>
                  ))}
                  {/* Annotations */}
                  <text x="60" y="60" fill="#0E0F12" fontSize="10" fontFamily="Inter" letterSpacing="2">FRAME · G+3</text>
                  <text x="60" y="78" fill="#9AA0A6" fontSize="9" fontFamily="Inter">Scale 1:50</text>
                  <text x="280" y="78" fill="#9AA0A6" fontSize="9" fontFamily="Inter">Rev 02</text>

                  <line x1="60" y1="380" x2="340" y2="380" stroke="#C8A24B" strokeWidth="0.6" />
                  <text x="60" y="400" fill="#9AA0A6" fontSize="9" fontFamily="Inter" letterSpacing="2">SECTION A-A</text>
                  <text x="280" y="400" fill="#C0322B" fontSize="9" fontFamily="Inter" letterSpacing="2">+12.40m</text>

                  {/* Dimension marks */}
                  <line x1="40" y1="100" x2="40" y2="340" stroke="#9AA0A6" strokeWidth="0.4" />
                  <text x="22" y="220" fill="#9AA0A6" fontSize="9" fontFamily="Inter" transform="rotate(-90 22 220)">12.4m</text>
                </svg>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] tracking-[0.22em] uppercase text-ink/55">
                  <span>Frame study</span>
                  <span>1:50</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-ink text-bone relative overflow-hidden">
        <div className="absolute -top-40 -left-20 w-[60vw] h-[60vw] rounded-full opacity-25 blur-3xl pointer-events-none"
             style={{ background: 'radial-gradient(circle, rgba(192,50,43,0.5), transparent 65%)' }} />
        <div className="absolute -bottom-40 -right-20 w-[60vw] h-[60vw] rounded-full opacity-25 blur-3xl pointer-events-none"
             style={{ background: 'radial-gradient(circle, rgba(63,169,161,0.5), transparent 65%)' }} />

        <div className="container-wide relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <p className="eyebrow text-bone/55 mb-4" data-reveal>Founder</p>
            <h2 className="font-display text-h1 text-bone" data-reveal data-reveal-delay="80">
              Anuj Jain
            </h2>
            <p className="font-display-italic text-gold text-2xl mt-2" data-reveal data-reveal-delay="160">
              B.E. Civil · M.Tech Structural
            </p>
            <p className="mt-8 text-bone/75 leading-body max-w-md" data-reveal data-reveal-delay="220">
              Anuj founded {COMPANY.name} in {COMPANY.established} after fourteen years of
              structural design work in Bengaluru and Pune. He still personally signs every
              structural drawing that leaves the office, and is the first call on any site that
              asks for him.
            </p>
          </div>

          <div className="md:col-span-7" data-reveal data-reveal-delay="160">
            <div className="glass-dark rounded-2xl p-8 md:p-10">
              <div className="flex items-start justify-between border-b border-bone/15 pb-4 mb-6 text-[10px] tracking-[0.22em] uppercase text-bone/55">
                <span>Spec sheet · founder</span>
                <span>Rev 01</span>
              </div>
              <ul className="divide-y divide-bone/10">
                {[
                  ['Education', 'B.E. Civil — VTU · M.Tech Structural'],
                  ['Years of practice', '14+ years'],
                  ['Expertise', 'RCC, composite frames, retrofits'],
                  ['Software', 'STAAD Pro · ETABS · SAFE · Revit'],
                  ['Memberships', 'IStructE (India) · Institution of Engineers'],
                  ['Languages', 'English · Hindi · Kannada'],
                ].map(([k, v]) => (
                  <li key={k} className="grid grid-cols-12 py-4 gap-4">
                    <span className="col-span-4 text-[11px] tracking-[0.22em] uppercase text-bone/55">{k}</span>
                    <span className="col-span-8 text-bone/90 text-[15px]">{v}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex justify-between text-[10px] tracking-[0.22em] uppercase text-bone/45">
                <span>Drawn by · A.J.</span>
                <span>Checked · A.J.</span>
                <span>{COMPANY.city}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
