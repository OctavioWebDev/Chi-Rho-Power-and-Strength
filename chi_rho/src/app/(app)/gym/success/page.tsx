import { Suspense } from 'react';
import type { Metadata } from 'next';
import GymSuccessContent from './GymSuccessContent';

// After-checkout page: keep it out of search.
export const metadata: Metadata = { title: { absolute: 'Founding membership | Chi-Rho Power & Strength' }, robots: { index: false } };

export default function GymSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-black flex items-center justify-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-yellow-400 border-r-transparent"></div>
        </div>
      }
    >
      <GymSuccessContent />
    </Suspense>
  );
}