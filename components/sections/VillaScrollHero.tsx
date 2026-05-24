'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

/**
 * Cinematic single-image scroll hero.
 *
 * Performance:
 *   - Zero React re-renders during scroll. Scroll progress is written directly
 *     as CSS custom properties on the stage element; the GPU does the rest.
 *   - No `filter: blur()` on the giant background image (most expensive CSS
 *     filter). Depth-of-field is faked with a second, pre-blurred image layer
 *     that fades out as you "approach".
 *   - Updates are paused via IntersectionObserver when the section is off-screen.
 */
export function VillaScrollHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const dollyRef = useRef<HTMLDivElement>(null);
  const blurLayerRef = useRef<HTMLDivElement>(null);
  const vignetteRef = useRef<HTMLDivElement>(null);
  const lightBloomRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const sceneIntroRef = useRef<HTMLDivElement>(null);
  const scene2Ref = useRef<HTMLDivElement>(null);
  const scene3Ref = useRef<HTMLDivElement>(null);
  const sceneFinaleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const dolly = dollyRef.current;
    const blurLayer = blurLayerRef.current;
    const vignette = vignetteRef.current;
    const bloom = lightBloomRef.current;
    const progBar = progressBarRef.current;
    const sIntro = sceneIntroRef.current;
    const s2 = scene2Ref.current;
    const s3 = scene3Ref.current;
    const sFin = sceneFinaleRef.current;

    if (!section || !dolly || !blurLayer || !vignette || !bloom || !progBar) return;

    let visible = true;
    let rafId = 0;
    let pulse = 0;

    const apply = () => {
      rafId = 0;
      if (!visible) return;

      const rect = section.getBoundingClientRect();
      const total = section.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      const p = Math.max(0, Math.min(1, scrolled / total));
      const eased = 1 - Math.pow(1 - p, 3);

      // Camera dolly
      const scale = 1.06 + eased * 0.36;
      const ty = -2 + eased * 8;
      dolly.style.transform = `scale(${scale.toFixed(4)}) translateY(${ty.toFixed(2)}%)`;

      // Depth-of-field via cross-fade between blurred and sharp layers
      blurLayer.style.opacity = String(1 - eased);

      // Vignette
      const vStop = 35 + eased * 25;
      const vAlpha = 0.55 + eased * 0.15;
      vignette.style.background = `radial-gradient(120% 90% at 50% 55%, transparent ${vStop}%, rgba(0,0,0,${vAlpha}) 100%)`;

      // Light bloom (gentle pulse + grows with progress)
      pulse += 0.02;
      const bloomOp = 0.55 + Math.sin(pulse) * 0.12 + eased * 0.3;
      bloom.style.opacity = String(Math.min(1, bloomOp));

      // Progress rail
      progBar.style.width = `${(p * 100).toFixed(2)}%`;

      // Scenes
      setSceneOpacity(sIntro, sceneOpacity(p, 0.02, 0.20));
      setSceneOpacity(s2, sceneOpacity(p, 0.32, 0.54));
      setSceneOpacity(s3, sceneOpacity(p, 0.66, 0.88));
      setSceneOpacity(sFin, sceneOpacity(p, 0.92, 1));
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(apply);
    };

    const io = new IntersectionObserver(
      (entries) => {
        visible = entries[0]?.isIntersecting ?? false;
        if (visible) apply();
      },
      { rootMargin: '0px' }
    );
    io.observe(section);

    apply();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      io.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-ink text-bone"
      style={{ height: '380vh' }}
      aria-label="Cinematic villa approach"
    >
      <div ref={stageRef} className="sticky top-0 h-[100svh] w-full overflow-hidden">
        {/* Image dolly layer (sharp on top, blurred below) */}
        <div
          ref={dollyRef}
          className="absolute inset-0 will-change-transform"
          style={{
            transform: 'scale(1.06) translateY(-2%)',
            transformOrigin: '50% 60%',
          }}
        >
          {/* Blurred backplate — fades out as we approach */}
          <div
            ref={blurLayerRef}
            className="absolute inset-0 bg-center bg-cover"
            style={{
              backgroundImage: 'url(/villa-hero.jpg)',
              filter: 'blur(8px) brightness(0.92) saturate(1.06)',
              transform: 'scale(1.04)', // hides blur edges
              opacity: 1,
              willChange: 'opacity',
            }}
          />
          {/* Sharp foreplate */}
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{
              backgroundImage: 'url(/villa-hero.jpg)',
            }}
          />
        </div>

        {/* Sunset color grade */}
        <div
          className="pointer-events-none absolute inset-0 mix-blend-soft-light"
          style={{
            background:
              'linear-gradient(180deg, rgba(255,176,128,0.45) 0%, rgba(255,210,150,0.10) 30%, transparent 55%, rgba(20,18,40,0.45) 100%)',
            opacity: 0.85,
          }}
        />

        {/* Atmosphere */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(14,15,18,0.05) 0%, rgba(255,200,160,0.05) 50%, rgba(14,15,18,0.18) 100%)',
          }}
        />

        {/* Warm light bloom — opacity driven by JS */}
        <div
          ref={lightBloomRef}
          className="pointer-events-none absolute"
          style={{
            left: '50%',
            top: '50%',
            width: '60%',
            height: '60%',
            transform: 'translate(-50%, -45%)',
            background:
              'radial-gradient(closest-side, rgba(255,184,110,0.45), rgba(255,184,110,0) 70%)',
            mixBlendMode: 'screen',
            opacity: 0.55,
            willChange: 'opacity',
          }}
        />

        {/* Vignette — gradient driven by JS */}
        <div
          ref={vignetteRef}
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(120% 90% at 50% 55%, transparent 35%, rgba(0,0,0,0.55) 100%)',
          }}
        />

        {/* Subtle film grain */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay"
          style={{ backgroundImage: 'url(/noise.svg)', backgroundSize: '320px 320px' }}
        />

        {/* Top chrome */}
        <div className="absolute top-24 inset-x-0 z-20 flex items-center justify-between px-6 md:px-10 text-bone/65 text-[10px] tracking-[0.3em] uppercase">
          <span className="flex items-center gap-2">
            <span className="block w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
            Now playing · Villa 45 approach
          </span>
          <span className="hidden md:inline">Bengaluru · Sunset · 18:42</span>
        </div>

        {/* Progress rail */}
        <div className="absolute bottom-6 inset-x-6 md:inset-x-10 z-20 flex items-center gap-4 text-bone/55 text-[10px] tracking-[0.3em] uppercase">
          <span>00 · 00</span>
          <div className="flex-1 h-px bg-bone/15 relative">
            <div
              ref={progressBarRef}
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-brand-red via-gold to-brand-teal"
              style={{ width: '0%', willChange: 'width' }}
            />
          </div>
          <span>02 · 30</span>
        </div>

        {/* SCENES */}
        <SceneSlot innerRef={sceneIntroRef} align="center">
          <p className="eyebrow text-bone/60 mb-6">Gurukripa Constructions · Est. 2010</p>
          <h1 className="font-display text-bone leading-[0.95] text-[clamp(40px,7vw,108px)]">
            We don&rsquo;t just build<br />
            <em className="font-display-italic text-gold">structures.</em>
          </h1>
          <p className="mt-6 max-w-md mx-auto text-bone/75 text-[14px] leading-body">
            Scroll. Walk into a Gurukripa home with us.
          </p>
          <div className="mt-10 inline-flex items-center gap-3 text-bone/55 text-[10px] tracking-[0.3em] uppercase animate-pulse">
            <span className="block h-px w-10 bg-bone/40" />
            Scroll
            <span className="block h-px w-10 bg-bone/40" />
          </div>
        </SceneSlot>

        <SceneSlot innerRef={scene2Ref} align="left">
          <p className="eyebrow text-gold mb-4">Past the gates</p>
          <h2 className="font-display text-bone leading-[0.95] text-[clamp(32px,5.5vw,80px)] max-w-2xl">
            Every threshold<br />
            is <em className="font-display-italic text-gold">designed.</em>
          </h2>
          <p className="mt-6 max-w-md text-bone/80 text-[14px] leading-body">
            The columns, the lights, the levels of the porch. The first three metres of a
            Gurukripa home tell you what the next thirty years will feel like.
          </p>
        </SceneSlot>

        <SceneSlot innerRef={scene3Ref} align="right">
          <p className="eyebrow text-gold mb-4">Inside the volume</p>
          <h2 className="font-display text-bone leading-[0.95] text-[clamp(32px,5.5vw,80px)] max-w-2xl ml-auto">
            <em className="font-display-italic text-brand-red">Engineered</em><br />
            for the way you live.
          </h2>
          <p className="mt-6 max-w-md ml-auto text-bone/80 text-[14px] leading-body">
            Every span we draw begins with a load case. Every wall we place begins with a
            reason. Quietly, deliberately, with evidence.
          </p>
        </SceneSlot>

        <SceneSlot innerRef={sceneFinaleRef} align="center">
          <p className="eyebrow text-gold mb-4">Welcome home</p>
          <h2 className="font-display text-bone leading-[0.95] text-[clamp(36px,6vw,92px)] max-w-3xl">
            Let&rsquo;s build <em className="font-display-italic text-gold">yours.</em>
          </h2>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/projects" className="btn btn-primary">
              See our work
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="/contact"
              className="btn"
              style={{
                background: 'rgba(255,255,255,0.08)',
                color: '#F6F2EC',
                border: '1px solid rgba(255,255,255,0.25)',
                backdropFilter: 'blur(10px)',
              }}
            >
              Talk to Anuj
              <span aria-hidden>→</span>
            </Link>
          </div>
        </SceneSlot>
      </div>
    </section>
  );
}

function setSceneOpacity(el: HTMLElement | null, op: number) {
  if (!el) return;
  el.style.opacity = String(op);
  el.style.transform = `translateY(${(1 - op) * 12}px)`;
  el.style.pointerEvents = op > 0.5 ? 'auto' : 'none';
}

function sceneOpacity(progress: number, start: number, end: number) {
  const fade = 0.08;
  if (progress < start - fade || progress > end + fade) return 0;
  if (progress < start) return (progress - (start - fade)) / fade;
  if (progress > end) return 1 - (progress - end) / fade;
  return 1;
}

function SceneSlot({
  innerRef,
  align,
  children,
}: {
  innerRef: React.RefObject<HTMLDivElement>;
  align: 'left' | 'right' | 'center';
  children: React.ReactNode;
}) {
  const justify =
    align === 'left'
      ? 'items-start text-left'
      : align === 'right'
      ? 'items-end text-right'
      : 'items-center text-center';
  return (
    <div
      ref={innerRef}
      className={`absolute inset-0 z-10 flex flex-col justify-center px-8 md:px-16 lg:px-24 ${justify}`}
      style={{
        opacity: 0,
        pointerEvents: 'none',
        transition: 'transform 200ms linear, opacity 200ms linear',
      }}
    >
      <div
        className="max-w-3xl w-full"
        style={{ marginInline: align === 'center' ? 'auto' : undefined }}
      >
        {children}
      </div>
    </div>
  );
}
