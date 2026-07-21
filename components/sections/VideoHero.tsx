'use client';

import Link from 'next/link';

export function VideoHero() {
  return (
    <section className="relative w-full h-[85vh] md:h-screen overflow-hidden bg-black flex items-center">
      {/* Cinematic Video Background on the Right */}
      <div className="absolute right-0 top-0 bottom-0 w-full md:w-[65%] lg:w-[70%] xl:w-[76%] h-full overflow-hidden z-0">
        <video
          src="/finalvideo.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* Responsive Blending Gradient Overlay */}
      <div className="absolute inset-0 pointer-events-none z-10 hero-gradient-overlay" />

      {/* Content Container */}
      <div className="container-wide relative z-20 w-full h-full flex flex-col justify-center items-start text-left px-6 md:px-10">
        <div className="max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl text-white flex flex-col items-start">
          {/* Red horizontal accent line */}
          <div className="w-12 md:w-16 h-1 bg-brand-red mb-6 md:mb-8" />

          {/* Heading */}
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[48px] xl:text-[54px] font-bold leading-[1.1] tracking-tight text-white mb-6">
            We engineer <em className="font-display-italic text-brand-red not-italic font-normal italic">trust</em>—<br />
            one quiet,<br />
            precision-built<br />
            structure at a time.
          </h1>

          {/* Subtitle */}
          <p className="text-white/80 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] leading-relaxed max-w-sm md:max-w-md lg:max-w-xl mb-8 md:mb-10 font-normal">
            Anuj Jain personally verifies every structural plan, soil test, and material pour to build legacy homes and commercial structures across Bengaluru.
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-3 md:gap-4">
            <Link 
              href="/#projects" 
              className="btn btn-primary shadow-lg shadow-brand-red/35 !py-3 !px-5 md:!py-3.5 md:!px-[22px] text-[13px] md:text-[14px]"
            >
              Explore Projects
              <span className="ml-1" aria-hidden>→</span>
            </Link>
            <Link 
              href="/contact" 
              className="btn border border-white/20 text-white bg-black/40 hover:bg-black/60 hover:border-white/45 backdrop-blur-md transition-all duration-300 !py-3 !px-5 md:!py-3.5 md:!px-[22px] text-[13px] md:text-[14px]"
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
