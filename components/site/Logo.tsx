import { BrandLogo } from './BrandLogo';

export function Logo({ className = '', invert = false }: { className?: string; invert?: boolean }) {
  return (
    <span className={`inline-flex items-center ${className}`} aria-label="Gurukripa Constructions">
      <BrandLogo
        invert={invert}
        className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 hover:scale-[1.02]"
      />
    </span>
  );
}
