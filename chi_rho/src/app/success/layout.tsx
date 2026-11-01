import type { Metadata } from 'next';

// After-checkout page: keep it out of search.
export const metadata: Metadata = { title: 'Got it. Now go lift.', robots: { index: false } };

export default function SuccessLayout({ children }: { children: React.ReactNode }) {
  return children;
}
