export function BrandLogo({
  variant = 'stacked',
  className = '',
  width,
  height,
  invert = false,
}: {
  variant?: 'stacked' | 'mark';
  className?: string;
  width?: number;
  height?: number;
  invert?: boolean;
}) {
  const src = variant === 'mark'
    ? (invert ? '/logo-mark-white.svg' : '/logo-mark.svg')
    : (invert ? '/logo-white.svg' : '/logo.svg');

  return (
    <img
      src={src}
      alt="Gurukripa Constructions Logo"
      width={width ?? 180}
      height={height ?? 140}
      className={`object-contain ${className}`}
    />
  );
}
