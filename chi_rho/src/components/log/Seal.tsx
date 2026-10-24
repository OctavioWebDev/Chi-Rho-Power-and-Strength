import { useId } from 'react';

// The Chi-Rho Power & Strength seal.
export function Seal({ size = 46, className }: { size?: number; className?: string }) {
  const id = useId().replace(/:/g, '');
  return (
    <svg viewBox="0 0 120 120" width={size} height={size} className={className} aria-hidden="true">
      <defs>
        <path id={`${id}t`} d="M18,60 a42,42 0 0 1 84,0" />
        <path id={`${id}b`} d="M14,60 a46,46 0 0 0 92,0" />
      </defs>
      <g fill="#F4F1EA" fontFamily="var(--font-display), Arial Narrow, sans-serif" fontWeight={700}>
        <text fontSize={17} letterSpacing={2}>
          <textPath href={`#${id}t`} startOffset="50%" textAnchor="middle">POWER</textPath>
        </text>
        <text fontSize={17} letterSpacing={2}>
          <textPath href={`#${id}b`} startOffset="50%" textAnchor="middle">STRENGTH</textPath>
        </text>
      </g>
      <g stroke="#F4F1EA" strokeWidth={4} strokeLinecap="round" fill="none">
        <line x1={44} y1={44} x2={76} y2={80} />
        <line x1={76} y1={44} x2={44} y2={80} />
        <line x1={60} y1={34} x2={60} y2={88} />
        <path d="M60,34 h7 a8,8 0 0 1 0,16 h-7" />
      </g>
      <g fill="#EAB308" fontFamily="Georgia, serif" fontSize={12}>
        <text x={34} y={66} textAnchor="middle">α</text>
        <text x={86} y={66} textAnchor="middle">Ω</text>
      </g>
    </svg>
  );
}
