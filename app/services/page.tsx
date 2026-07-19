import type { Metadata } from 'next';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { RevealOnScroll } from '@/components/providers/RevealOnScroll';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Engineering & Construction Services — Gurukripa Constructions',
  description:
    'Turnkey residential villas, commercial structures, structural retrofitting, FRP column strengthening, and turnkey project management across Bengaluru.',
};

export default function ServicesPage() {
  return (
    <>
      <RevealOnScroll />

      {/* Services Header */}
      <section className="pt-40 pb-16 md:pt-48 md:pb-20 bg-ink text-bone relative overflow-hidden">
        <div
          className="absolute -top-40 -right-20 w-[60vw] h-[60vw] rounded-full opacity-25 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(192,50,43,0.5), transparent 65%)' }}
        />
        <div className="container-wide relative z-10">
          <div className="flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.22em] text-gold font-bold mb-6">
            <Link href="/" className="hover:underline text-white/80">
              Home
            </Link>
            <span>/</span>
            <span>Services</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-white font-semibold leading-[1.05]">
                Engineering Services & Specialized Scope.
              </h1>
              <p className="mt-6 max-w-2xl text-white/90 text-[16px] md:text-[18px] leading-relaxed">
                Structured under two core divisions: Turnkey New Builds and Structural Retrofitting. Guided by Founder Anuj Jain (M.Tech Structural).
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3 lg:items-end">
              <div className="bg-gold text-ink font-extrabold px-5 py-2.5 rounded-full text-xs shadow-xl border border-gold tracking-wide">
                2 Key Engineering Divisions
              </div>
              <Link
                href="/contact"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-2.5 rounded-full border border-white/20 text-xs transition-colors shadow-md"
              >
                Schedule Technical Consultation →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Two Main Division Cards Section */}
      <ServicesSection />
    </>
  );
}
