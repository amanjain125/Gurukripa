export function Logo({ className = '', invert = false }: { className?: string; invert?: boolean }) {
  const markSrc = invert ? '/logo-mark-white.svg' : '/logo-mark.svg';

  return (
    <span className={`inline-flex items-center gap-3 ${className}`} aria-label="Gurukripa Constructions">
      <img
        src={markSrc}
        alt="Gurukripa Constructions Logo Mark"
        className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 hover:scale-[1.02]"
        style={{ height: '44px', width: 'auto' }}
      />
      <span className="leading-tight">
        <span className={`block font-display text-[22px] font-semibold tracking-tight ${invert ? 'text-bone' : 'text-ink'}`}>
          Gurukripa
        </span>
        <span className={`block text-[10px] font-bold tracking-[0.24em] uppercase ${invert ? 'text-gold' : 'text-brand-red'}`}>
          Constructions
        </span>
      </span>
    </span>
  );
}
