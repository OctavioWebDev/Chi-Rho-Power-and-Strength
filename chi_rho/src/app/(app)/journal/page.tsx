import type { Metadata } from 'next';
import { ButtonLink, Checklist, Cover, Entry, Myths, PageTitle } from '@/components/log';

export const metadata: Metadata = {
  title: 'Strength Training Journal',
  description: 'The Chi-Rho Strength Training Journal: 450+ pages of daily logs, weekly check-ins, monthly reviews and PR tracking.',
};

const AMAZON = 'https://www.amazon.com/dp/B0GDY9XK56';

export default function JournalPage() {
  return (
    <main className="lg-wrap">
      <Entry label="The journal">
        <div className="lg-bookrow">
          <Cover variant="dark" top="Chi-Rho" title="Strength Training Journal" bottom="450+ pages" />
          <div>
            <PageTitle lede="Apps crash. Phones get lost. A notebook stays on the shelf. More than a year of daily logs, weekly check-ins, monthly reviews, PR pages and habit tracking.">
              Write it <em>down.</em>
            </PageTitle>
            <div className="lg-ctas">
              <ButtonLink href={AMAZON}>Buy on Amazon</ButtonLink>
              <ButtonLink href="/book" variant="line">The book</ButtonLink>
            </div>
            <p className="lg-small" style={{ marginTop: 14 }}>Elite and in-person clients get one free.</p>
          </div>
        </div>
      </Entry>

      <Entry label="What's inside">
        <div className="lg-two">
          <Checklist
            items={[
              'Daily logs: sets, reps, weight, RPE, rest',
              'Weekly check-ins',
              'Monthly reviews and next-month goals',
              'Annual goal pages',
              'PR tracking for every main lift',
              'Body composition tracking',
              'Readiness before, session rating after',
              'Sleep, nutrition and training habits',
            ]}
          />
          <div>
            <h3 className="lg-h3">Who it&apos;s for</h3>
            <p className="lg-muted" style={{ marginTop: 10 }}>
              Lifters who track every set. Powerlifters planning a meet. Clients who bring it to sessions and check-ins.
            </p>
          </div>
        </div>
      </Entry>

      <Entry label="Why paper">
        <Myths
          items={[
            { said: 'I just use my phone.', answer: "Pull it out to log a set and suddenly you're on Instagram. A notebook keeps you on the bar." },
            { said: 'Apps keep my data.', answer: 'Until the company shuts down. This will be on your shelf in 5 years when you want to see where you started.' },
            { said: "Why write it by hand?", answer: 'Writing makes you think. The weekly and monthly pages are where you look at what actually happened.' },
          ]}
        />
      </Entry>
    </main>
  );
}
