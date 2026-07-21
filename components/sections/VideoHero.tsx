'use client';

import Link from 'next/link';

export function VideoHero() {
  return (
    <section className="relative w-full h-[85vh] md:h-screen overflow-hidden bg-black flex items-center">
      {/* Cinematic Video Background on the Right */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[78%] h-full overflow-hidden z-0">
        <video
          src="/finalvideo.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Mobile Dark Overlay */}
        <div className="absolute inset-0 bg-black/55 lg:hidden pointer-events-none z-10" />
      </div>

      {/* Horizontal Gradient Overlay for Desktop (blends solid black on left into the video on right) */}
      <div 
        className="absolute inset-0 pointer-events-none z-10 hidden lg:block"
        style={{
          background: 'linear-gradient(to right, #000000 0%, #000000 18%, rgba(0, 0, 0, 0.95) 24%, rgba(0, 0, 0, 0.6) 34%, rgba(0, 0, 0, 0.2) 46%, transparent 60%)'
        }}
      />

      {/* Content Container */}
      <div className="container-wide relative z-20 w-full h-full flex flex-col justify-center items-start text-left px-6 md:px-10">
        <div className="max-w-2xl text-white flex flex-col items-start">
          {/* Red horizontal accent line */}
          <div className="w-16 h-1 bg-brand-red mb-8" />

          {/* Heading */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-bold leading-[1.1] tracking-tight text-white mb-6">
            We engineer <em className="font-display-italic text-brand-red not-italic font-normal italic">trust</em>—<br />
            one quiet,<br />
            precision-built<br />
            structure at a time.
          </h1>

          {/* Subtitle */}
          <p className="text-white/80 text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed max-w-xl mb-10 font-normal">
            Anuj Jain personally verifies every structural plan, soil test, and material pour to build legacy homes and commercial structures across Bengaluru.
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Link 
              href="/#projects" 
              className="btn btn-primary shadow-lg shadow-brand-red/35"
            >
              Explore Projects
              <span className="ml-1" aria-hidden>→</span>
            </Link>
            <Link 
              href="/contact" 
              className="btn border border-white/20 text-white bg-black/40 hover:bg-black/60 hover:border-white/45 backdrop-blur-md transition-all duration-300"
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
