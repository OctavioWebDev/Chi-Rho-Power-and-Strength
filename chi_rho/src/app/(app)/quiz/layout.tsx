import type { Metadata } from 'next';
import { pageMeta } from '@/lib/seo';

// The quiz page is a client component, so its title and description live here.
export const metadata: Metadata = pageMeta(
  'Program quiz',
  'Which program should you run? Answer a few questions and get a place to start.',
);

export default function QuizLayout({ children }: { children: React.ReactNode }) {
  return children;
}
