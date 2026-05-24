'use client';

import { useEffect, useRef } from 'react';

/**
 * Snappy, zero-lag cursor: one small dot positioned directly in pointermove.
 * No requestAnimationFrame, no lerp, no second element.
 */
export function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return;

    const onMove = (e: PointerEvent) => {
      const el = dot.current;
      if (!el) return;
      el.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t || !dot.current) return;
      const interactive = t.closest('a, button, input, textarea, select, [role="button"], [data-cursor="hover"]');
      dot.current.classList.toggle('is-hover', !!interactive);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('mouseover', onOver, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('mouseover', onOver);
    };
  }, []);

  return <div ref={dot} className="cursor-dot" aria-hidden />;
}
