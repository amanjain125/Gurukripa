'use client';

import Link from 'next/link';
import { COMPANY } from '@/lib/company';

export function VideoHero() {
  return (
    <section className="relative w-full h-[85vh] md:h-screen overflow-hidden bg-black flex items-center justify-center">
      {/* Cinematic Video Background */}
      <video
        src="/finalvideo.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dynamic light gradient to add depth (similar to VillaScrollHero visual cues) */}
      <div 
        className="absolute inset-0 z-10 mix-blend-screen pointer-events-none opacity-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-teal/20 via-transparent to-transparent" 
      />

      {/* Content Container */}
      <div className="container-wide relative z-20 w-full h-full flex flex-col justify-center items-start text-left px-6 md:px-10">
        <div className="max-w-4xl text-white">
          {/* Eyebrow badge */}
          <div 
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-[10px] font-bold tracking-[0.22em] uppercase mb-6 backdrop-blur-md"
            data-reveal
            data-reveal-delay="100"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-pulse" />
            {COMPANY.name} · {COMPANY.city}
          </div>

          {/* Heading */}
          <h1 
            className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-tight text-white mb-6"
            data-reveal
            data-reveal-delay="200"
          >
            We engineer <em className="font-display-italic text-brand-red not-italic font-normal italic">trust</em>—<br />
            one quiet, precision-built structure at a time.
          </h1>

          {/* Subtitle */}
          <p 
            className="text-white/80 text-[15px] sm:text-lg md:text-xl leading-relaxed max-w-2xl mb-10 font-light"
            data-reveal
            data-reveal-delay="300"
          >
            Anuj Jain <span className="text-white/60 font-mono text-[14px]">({COMPANY.founder.credentials})</span> personally verifies every structural plan, soil test, and material pour to build legacy homes and commercial structures across Bengaluru.
          </p>

          {/* Action buttons */}
          <div 
            className="flex flex-wrap items-center gap-4 animate-fadeIn"
            data-reveal
            data-reveal-delay="400"
          >
            <Link 
              href="/#projects" 
              className="btn btn-primary shadow-lg shadow-brand-red/35"
            >
              Explore Projects
              <span className="ml-1" aria-hidden>→</span>
            </Link>
            <Link 
              href="/contact" 
              className="btn border border-white/25 hover:border-white/50 text-bone bg-white/5 hover:bg-white/10 backdrop-blur-md transition-all duration-300"
            >
              Get in Touch
              <span className="ml-1" aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

