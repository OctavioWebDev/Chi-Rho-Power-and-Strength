import type { Metadata } from 'next';
import { ButtonLink, Entry, PageTitle } from '@/components/log';
import { CoachingFaq, HowItStarts, IN_PERSON_FAQ, InPerson, TheDeal } from '../sections';

export const metadata: Metadata = {
  title: 'In-person coaching',
  description: 'In-person strength coaching in Toledo, Ohio. Three coached sessions a week, $1,150 a month.',
};

export default function InPersonCoachingPage() {
  return (
    <main className="lg-wrap">
      <Entry label="Coaching" sub="Toledo">
        <PageTitle lede="Side by side in the gym. Every rep coached, every session logged. Spots are limited.">
          I&apos;m there for <em>every rep.</em>
        </PageTitle>
        <div className="lg-ctas">
          <ButtonLink href="/apply?service=inperson">Apply</ButtonLink>
          <ButtonLink href="/apply?service=discovery-call" variant="line">Free 20-minute call</ButtonLink>
        </div>
      </Entry>
      <InPerson />
      <TheDeal />
      <HowItStarts />
      <CoachingFaq items={IN_PERSON_FAQ} />
    </main>
  );
}
