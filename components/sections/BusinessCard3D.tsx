'use client';

import { useEffect, useRef, useState } from 'react';
import { COMPANY } from '@/lib/company';
import { BrandLogo } from '@/components/site/BrandLogo';

/**
 * 3D business card.
 *
 * Two transform layers, separated so they never fight each other:
 *   1. Tilt/float layer — rAF in JS, runs every frame for parallax + idle.
 *   2. Flip layer       — pure CSS transition controlled by React state.
 *
 * onClick + onTouchStart for instant response on every device.
 */
export function BusinessCard3D() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);
  const [flipped, setFlipped] = useState(false);
  const [hinted, setHinted] = useState(true);

  const tilt = useRef({ x: 0, y: 0 });
  const targetTilt = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const wrap = wrapRef.current;
    const tiltEl = tiltRef.current;
    const shadow = shadowRef.current;
    if (!wrap || !tiltEl) return;

    const onMove = (e: PointerEvent) => {
      if (reduce) return;
      const rect = wrap.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      targetTilt.current.y = px * 14;
      targetTilt.current.x = -py * 9;
    };

    const onLeave = () => {
      targetTilt.current = { x: 0, y: 0 };
    };

    let raf = 0;
    const tick = () => {
      const t = performance.now() / 1000;
      const idleX = Math.sin(t * 0.6) * 0.9;
      const idleY = Math.cos(t * 0.5) * 1.2;
      const float = Math.sin(t * 0.9) * 3.5;

      tilt.current.x += (targetTilt.current.x - tilt.current.x) * 0.18;
      tilt.current.y += (targetTilt.current.y - tilt.current.y) * 0.18;

      const rx = tilt.current.x + idleX;
      const ry = tilt.current.y + idleY;

      tiltEl.style.transform = `translateY(${(-float).toFixed(2)}px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`;

      if (shadow) {
        const sx = -tilt.current.y * 0.5;
        const sy = float * 1.2;
        const scale = 1 + Math.abs(float) * 0.012;
        const blur = 28 + Math.abs(float) * 1.4;
        shadow.style.transform = `translate3d(${sx.toFixed(2)}px, ${sy.toFixed(2)}px, 0) scale(${scale.toFixed(3)})`;
        shadow.style.filter = `blur(${blur.toFixed(1)}px)`;
      }

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    wrap.addEventListener('pointermove', onMove);
    wrap.addEventListener('pointerleave', onLeave);

    return () => {
      cancelAnimationFrame(raf);
      wrap.removeEventListener('pointermove', onMove);
      wrap.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  const flip = () => {
    setFlipped((v) => !v);
    if (hinted) setHinted(false);
  };

  return (
    <div
      ref={wrapRef}
      className="relative w-full max-w-[440px] mx-auto select-none"
      style={{ perspective: '1600px', touchAction: 'manipulation' }}
    >
      {/* Floor shadow */}
      <div
        ref={shadowRef}
        aria-hidden
        className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-[80%] h-[10%] rounded-[50%] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(14,15,18,0.55), rgba(14,15,18,0) 65%)',
          filter: 'blur(28px)',
          willChange: 'transform, filter',
        }}
      />

      {/* Tilt/float layer — JS rAF writes to this */}
      <div
        ref={tiltRef}
        className="relative aspect-[1.75/1] w-full will-change-transform"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Flip layer — CSS transition controlled by React state */}
        <button
          type="button"
          onClick={flip}
          aria-label={flipped ? 'Show front of business card' : 'Show back of business card'}
          className="absolute inset-0 cursor-pointer rounded-[18px] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
          style={{
            transformStyle: 'preserve-3d',
            transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            transition: 'transform 700ms cubic-bezier(0.22,1,0.36,1)',
            background: 'transparent',
            border: 0,
            padding: 0,
          }}
        >
          <CardFront />
          <CardBack />
        </button>
      </div>

      <div
        className={`pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-9 glass-pill rounded-full px-3 py-1.5 text-[10px] tracking-[0.22em] uppercase text-ink/65 transition-opacity duration-500 ${
          hinted ? 'opacity-100' : 'opacity-0'
        }`}
      >
        Tap to flip
      </div>
    </div>
  );
}

/* ------------ FRONT ------------ */
function CardFront() {
  return (
    <div
      className="absolute inset-0 rounded-[18px] overflow-hidden bg-white text-left"
      style={{
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.9), 0 1px 0 rgba(0,0,0,0.04)',
      }}
    >
      <div className="absolute inset-0 rounded-[18px] pointer-events-none"
           style={{ boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.06)' }} />
      <div className="absolute inset-0 opacity-[0.04] mix-blend-multiply pointer-events-none"
           style={{ backgroundImage: 'url(/noise.svg)', backgroundSize: '180px 180px' }} />
      <div className="absolute inset-0 pointer-events-none"
           style={{
             background:
               'linear-gradient(115deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 30%, rgba(255,255,255,0) 70%, rgba(255,255,255,0.35) 100%)',
           }} />

      <div className="relative h-full flex flex-col items-center justify-center px-[6%] py-[5%]">
        <div className="w-[24%] aspect-[200/220] flex-shrink-0">
          <BrandLogo variant="stacked" className="w-full h-full" />
        </div>

        <div className="mt-[3.5%] w-[80%]">
          <div className="h-px w-full bg-ink" />
          <h3 className="font-display font-semibold tracking-[0.04em] text-ink text-center my-[3%] text-[clamp(13px,2.4vw,22px)] leading-none">
            GURUKRIPA CONSTRUCTIONS
          </h3>
          <div className="h-px w-full bg-ink" />
        </div>

        <p className="mt-[3%] text-ink/80 text-center text-[clamp(10px,1.6vw,13px)]">
          Consultants &amp; Builders
        </p>
      </div>
    </div>
  );
}

/* ------------ BACK ------------ */
function CardBack() {
  return (
    <div
      className="absolute inset-0 rounded-[18px] overflow-hidden bg-white text-left"
      style={{
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        transform: 'rotateY(180deg)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.9), 0 1px 0 rgba(0,0,0,0.04)',
      }}
    >
      <div className="absolute inset-0 rounded-[18px] pointer-events-none"
           style={{ boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.06)' }} />
      <div className="absolute inset-0 opacity-[0.04] mix-blend-multiply pointer-events-none"
           style={{ backgroundImage: 'url(/noise.svg)', backgroundSize: '180px 180px' }} />
      <div className="absolute inset-0 pointer-events-none"
           style={{
             background:
               'linear-gradient(295deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 30%, rgba(255,255,255,0) 70%, rgba(255,255,255,0.3) 100%)',
           }} />

      <div className="relative h-full flex items-stretch px-[5%] py-[5%] gap-[4%]">
        <div className="flex items-center justify-center" style={{ width: '24%' }}>
          <BrandLogo variant="stacked" className="w-[88%] h-auto" />
        </div>

        <div className="flex items-stretch" style={{ width: '1px' }}>
          <div className="w-px bg-ink/25 self-stretch" />
        </div>

        <div className="flex flex-col justify-center flex-1 pl-[1%]">
          <h3 className="font-sans font-bold tracking-[0.02em] text-ink leading-none text-[clamp(13px,2.2vw,20px)]">
            ANUJ JAIN
          </h3>
          <p className="text-ink/80 mt-[1.5%] text-[clamp(9px,1.4vw,12px)]">
            B.E. Civil, M.Tech Structural
          </p>

          <div className="h-px bg-ink/20 my-[5%] w-full" />

          <ul className="space-y-[3%] text-[clamp(8px,1.3vw,11px)] text-ink/85 leading-[1.4]">
            <li className="flex items-start gap-[3%]">
              <IconPhone />
              <div>
                <a
                  href={`tel:${COMPANY.phones[0].replace(/\s/g, '')}`}
                  onClick={(e) => e.stopPropagation()}
                  className="block hover:text-brand-red transition-colors"
                >
                  {COMPANY.phones[0]}
                </a>
                <a
                  href={`tel:${COMPANY.phones[1].replace(/\s/g, '')}`}
                  onClick={(e) => e.stopPropagation()}
                  className="block hover:text-brand-red transition-colors"
                >
                  {COMPANY.phones[1]}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-[3%]">
              <IconMail />
              <a
                href={`mailto:${COMPANY.email}`}
                onClick={(e) => e.stopPropagation()}
                className="break-all hover:text-brand-red transition-colors"
              >
                {COMPANY.email}
              </a>
            </li>
            <li className="flex items-start gap-[3%]">
              <IconPin />
              <span>
                {COMPANY.address.line1},<br />
                {COMPANY.address.line2},<br />
                {COMPANY.address.line3}, {COMPANY.address.state} {COMPANY.address.pincode}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

/* Icons */
function IconWrap({ children }: { children: React.ReactNode }) {
  return (
    <span className="shrink-0 grid place-items-center rounded-full border border-ink/45 text-ink/75"
          style={{ width: 'clamp(13px, 2vw, 18px)', height: 'clamp(13px, 2vw, 18px)' }}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-[58%] h-[58%]">
        {children}
      </svg>
    </span>
  );
}
function IconPhone() {
  return <IconWrap><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13 1 .37 1.97.72 2.9a2 2 0 0 1-.45 2.11L8.09 10.05a16 16 0 0 0 6 6l1.32-1.32a2 2 0 0 1 2.11-.45c.93.35 1.9.59 2.9.72A2 2 0 0 1 22 16.92z" /></IconWrap>;
}
function IconMail() {
  return <IconWrap><><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 6-10 7L2 6" /></></IconWrap>;
}
function IconPin() {
  return <IconWrap><><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" /><circle cx="12" cy="10" r="3" /></></IconWrap>;
}
