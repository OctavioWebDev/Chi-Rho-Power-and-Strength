import Image from 'next/image';

// Octavio's actual Chi-Rho Power & Strength logo (white on transparent).
const LOGO = '/assets/logos/4885c978-6521-4cbf-85d6-fea7774ef2d9.png';
const RATIO = 3464 / 2886; // height / width of the source file

export function Seal({ size = 46, className }: { size?: number; className?: string }) {
  return (
    <Image
      src={LOGO}
      alt="Chi-Rho Power & Strength"
      width={size}
      height={Math.round(size * RATIO)}
      className={className}
      priority={size <= 64}
    />
  );
}
