import type { Metadata } from 'next';
import { ButtonLink, Entry, PageTitle } from '@/components/log';
import { AddOns, HowItStarts, InPerson, OnlinePackages, TheDeal, WhoFor } from './sections';

export const metadata: Metadata = {
  title: 'Coaching',
  description: 'Strength coaching for men: online from $250 a month, in person in Toledo at $1,150 a month.',
};

export default function CoachingPage() {
  return (
    <main className="lg-wrap">
      <Entry label="Coaching">
        <PageTitle
          lede="Strength coaching for men. Never touched a barbell, coming back after years away, or stuck at the same numbers for months. Doesn't matter. Are you stronger than last month? That's what we work on."
        >
          Stop guessing. <em>Get stronger.</em>
        </PageTitle>
        <div className="lg-ctas">
          <ButtonLink href="/apply">Apply</ButtonLink>
          <ButtonLink href="/apply?service=discovery-call" variant="line">Free 20-minute call</ButtonLink>
        </div>
      </Entry>
      <WhoFor />
      <OnlinePackages />
      <InPerson />
      <AddOns />
      <TheDeal />
      <HowItStarts />
    </main>
  );
}
