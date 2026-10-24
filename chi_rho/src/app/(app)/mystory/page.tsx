import type { Metadata } from 'next';
import { ButtonLink, Checklist, Entry, Facts, PageTitle, Sheet } from '@/components/log';

export const metadata: Metadata = {
  title: 'My story',
  description: 'Octavio Sanchez: 10+ years under the bar around overnight shifts, a 480 squat and deadlift, and the author of Shut Up and Lift.',
};

const MISTAKES = [
  ['Switching programs every 6 to 8 weeks', 'Wasted a whole year.'],
  ['Worrying about tempo, rest times and "optimal" reps', 'Just lift.'],
  ['Chasing the pump with tons of accessory work', 'Add weight to the main lifts.'],
  ['Same weights for months', "Then wondering why I wasn't stronger."],
  ['Supplements, special programs, the perfect split', "Didn't matter."],
];

export default function MyStoryPage() {
  return (
    <main className="lg-wrap">
      <Entry label="My story">
        <div className="lg-two">
          <div>
            <PageTitle>
              I&apos;m not special. <em>I just kept writing it down.</em>
            </PageTitle>
            <div className="lg-prose" style={{ marginTop: 26 }}>
              <p>
                I&apos;m Octavio. I wasn&apos;t a college athlete and I don&apos;t have good genetics. I&apos;ve trained for
                over ten years, most of them around overnight shifts in a warehouse. I have an IT degree from WGU and I
                wrote a book.
              </p>
              <p>
                About five years ago I stopped trying to be clever. Squat, press, deadlift. Three days a week. More weight
                every time I could. It worked better than anything I&apos;d paid for.
              </p>
              <p>Now I coach men who want the same thing: to be stronger next month than they are today.</p>
              <p className="lg-sign">
                Octavio Sanchez<small>Coach · Author of Shut Up and Lift</small>
              </p>
            </div>
          </div>
          <Facts
            items={[
              { label: 'Training', value: '10+ years' },
              { label: 'Best squat', value: '480 lb' },
              { label: 'Best deadlift', value: '480 lb' },
              { label: 'Degree', value: 'BS, IT Mgmt · WGU 2025' },
              { label: 'Shift', value: 'Overnight' },
            ]}
          />
        </div>
      </Entry>

      <Entry label="Mistakes I made">
        <h2 className="lg-h2">Every mistake you&apos;re about to make</h2>
        <Sheet className="lg-mt lg-crossed">
          <ul>
            {MISTAKES.map(([did, note]) => (
              <li key={did}>
                <s>{did}</s>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </Sheet>
      </Entry>

      <Entry label="How I coach">
        <div className="lg-pair">
          <div>
            <h3 className="lg-h3">What I won&apos;t do</h3>
            <div style={{ marginTop: 12 }}>
              <Checklist negative items={['Sell you supplements', 'Promise you a 90-day makeover', 'Overcomplicate your program', 'Let you program-hop', 'Make you feel small for being new']} />
            </div>
          </div>
          <div>
            <h3 className="lg-h3">What I will do</h3>
            <div style={{ marginTop: 12 }}>
              <Checklist items={['Tell you the truth, straight', 'Teach you to add weight to the bar', 'Keep it to the lifts that work', 'Check your form and your log', 'Hold you to it']} />
            </div>
          </div>
        </div>
        <div className="lg-ctas" style={{ marginTop: 28 }}>
          <ButtonLink href="/coaching">Coaching</ButtonLink>
          <ButtonLink href="/book" variant="line">Read the book first</ButtonLink>
        </div>
      </Entry>
    </main>
  );
}
