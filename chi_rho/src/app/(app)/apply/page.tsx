import type { Metadata } from 'next';
import { Suspense } from 'react';
import { Entry, PageTitle } from '@/components/log';
import ApplyForm from './ApplyForm';

export const metadata: Metadata = {
  title: 'Apply',
  description: 'Fill out the intake sheet for Chi-Rho strength coaching. Online, in person in Toledo, or group classes for men 50+.',
};

export default function ApplyPage() {
  return (
    <main className="lg-wrap">
      <Entry label="Apply">
        <PageTitle lede={'I read every one myself. Be honest. "I don\'t know" is a fine answer. That\'s what I\'m here for.'}>
          Fill out the <em>intake sheet.</em>
        </PageTitle>
        <Suspense fallback={null}>
          <ApplyForm />
        </Suspense>
      </Entry>
    </main>
  );
}
