import { BrandLogo } from './BrandLogo';

export function Logo({ className = '', invert = false }: { className?: string; invert?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`} aria-label="Gurukripa Constructions">
      <span
        className={`inline-block w-9 h-9 shrink-0 ${invert ? 'invert brightness-0' : ''}`}
        style={{ width: 36, height: 36 }}
      >
        <BrandLogo variant="mark" width={36} height={36} className="block w-9 h-9" />
      </span>
      <span className="leading-tight">
        <span className={`block font-display text-[20px] tracking-tighter ${invert ? 'text-bone' : 'text-ink'}`}>
          Gurukripa
        </span>
        <span className={`block text-[10px] tracking-[0.24em] uppercase ${invert ? 'text-bone/70' : 'text-steel'}`}>
          Constructions
        </span>
      </span>
    </span>
  );
}
