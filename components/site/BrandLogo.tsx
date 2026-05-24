/**
 * Faithful SVG of the Gurukripa Constructions logo.
 * Includes explicit `width` and `height` attributes (in addition to className)
 * so the SVG never flashes at viewport size before CSS applies.
 */
export function BrandLogo({
  variant = 'stacked',
  className = '',
  width,
  height,
}: {
  variant?: 'stacked' | 'mark';
  className?: string;
  width?: number;
  height?: number;
}) {
  if (variant === 'mark') {
    return (
      <svg
        viewBox="0 0 200 170"
        width={width ?? 36}
        height={height ?? 36}
        className={className}
        fill="none"
        aria-hidden
      >
        <Mark />
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 200 220"
      width={width ?? 200}
      height={height ?? 220}
      className={className}
      fill="none"
      aria-label="Gurukripa Constructions"
    >
      <Mark />
      <text
        x="100"
        y="200"
        fontFamily="Helvetica, Arial, sans-serif"
        fontSize="22"
        fontWeight="700"
        fill="#9AA0A6"
        textAnchor="middle"
        letterSpacing="2"
      >
        CONSTRUCTIONS
      </text>
    </svg>
  );
}

function Mark() {
  return (
    <g>
      <path
        d="
          M 92 12
          L 14 80
          L 14 132
          L 110 132
          L 110 100
          L 150 100
          L 150 80
          L 170 80
          L 170 80
          L 92 12
          Z
        "
        fill="#9AA0A6"
      />
      <rect x="36" y="36" width="14" height="22" fill="#9AA0A6" />
      <rect x="50" y="62" width="32" height="32" fill="#FFFFFF" />
      <rect x="64" y="62" width="3"  height="32" fill="#9AA0A6" />
      <rect x="50" y="76" width="32" height="3"  fill="#9AA0A6" />

      <text
        x="118"
        y="124"
        fontFamily="Helvetica, Arial, sans-serif"
        fontSize="118"
        fontWeight="900"
        fill="#C0322B"
        letterSpacing="-4"
      >
        G
      </text>

      <path
        d="M 6 154 Q 100 178 194 154"
        stroke="#C0322B"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
    </g>
  );
}
