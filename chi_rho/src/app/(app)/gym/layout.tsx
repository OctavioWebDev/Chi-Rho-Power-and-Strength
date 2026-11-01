import type { Metadata } from 'next';
import { pageMeta } from '@/lib/seo';

// The gym page is a client component, so its title and description live here.
export const metadata: Metadata = pageMeta(
  'Chi-Rho Barbell Club',
  'Toledo needs a barbell gym. Racks, bars, plates and platforms. No machines. Become a founding member of Chi-Rho Barbell Club.',
);

export default function GymLayout({ children }: { children: React.ReactNode }) {
  return children;
}
