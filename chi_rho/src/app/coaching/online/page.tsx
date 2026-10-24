import type { Metadata } from 'next';
import { ButtonLink, Entry, PageTitle } from '@/components/log';
import { CoachingFaq, HowItStarts, ONLINE_FAQ, OnlinePackages, TheDeal } from '../sections';

export const metadata: Metadata = {
  title: 'Online coaching',
  description: 'Online strength coaching for men, from $250 a month. Your program, check-ins and messages in the Chi-Rho Lifts app.',
};

export default function OnlineCoachingPage() {
  return (
    <main className="lg-wrap">
      <Entry label="Coaching" sub="Online">
        <PageTitle lede="Your program, your check-ins and my answers, wherever you train. Are you stronger than last month? We'll know, because it's in the log.">
          Coached from <em>anywhere.</em>
        </PageTitle>
        <div className="lg-ctas">
          <ButtonLink href="/apply?service=strength-coaching">Apply</ButtonLink>
          <ButtonLink href="/apply?service=discovery-call" variant="line">Free 20-minute call</ButtonLink>
        </div>
      </Entry>
      <OnlinePackages />
      <TheDeal />
      <HowItStarts />
      <CoachingFaq items={ONLINE_FAQ} />
    </main>
  );
}
