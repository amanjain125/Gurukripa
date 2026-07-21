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
  return (
    <img
      src={invert ? '/logo-white.svg' : '/logo.svg'}
      alt="Gurukripa Constructions Logo"
      width={width ?? 180}
      height={height ?? 140}
      className={`object-contain ${className}`}
    />
  );
}
