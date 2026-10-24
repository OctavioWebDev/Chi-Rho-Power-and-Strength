'use client';

import { Suspense } from 'react';
import SuccessContent from './SuccessContent';

export default function SuccessPage() {
  return (
    <Suspense fallback={<p className="lg-wrap lg-small" style={{ paddingBlock: 60 }}>Loading…</p>}>
      <SuccessContent />
    </Suspense>
  );
}