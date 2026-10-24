import type { Metadata } from 'next';
import { ButtonLink, Checklist, Cover, Entry, PageTitle, Sheet } from '@/components/log';

export const metadata: Metadata = {
  title: 'Shut Up and Lift',
  description: 'Shut Up and Lift by Octavio Sanchez. Three exercises, three days a week, add weight. A no-nonsense guide to getting strong.',
};

const AMAZON = 'https://www.amazon.com/dp/B0GF41CCDH';
const SAMPLE = '/downloads/shut-up-and-lift-sample-chapter.pdf';

export default function BookPage() {
  return (
    <main className="lg-wrap">
      <Entry label="The book">
        <div className="lg-bookrow">
          <Cover top="Octavio Sanchez" title="Shut Up and Lift" bottom="A no-nonsense guide to getting strong" />
          <div>
            <PageTitle lede="The book I wish I had when I started. Three exercises. Three days a week. Add weight. That's the system.">
              Shut up <em>and lift.</em>
            </PageTitle>
            <div className="lg-ctas">
              <ButtonLink href={AMAZON}>Buy on Amazon</ButtonLink>
              <a className="lg-link" href={SAMPLE} download="Shut-Up-and-Lift-Sample-Chapter.pdf">Read chapter 1 free</a>
            </div>
            <p className="lg-small" style={{ marginTop: 16 }}>$15–20. Buy it, then get 15% off your first month of coaching.</p>
          </div>
        </div>
      </Entry>

      <Entry label="Chapter 1">
        <p className="lg-pull">You don&apos;t need 17 different exercises. You need three things: a barbell, progressive overload, and consistency.</p>
        <div className="lg-two" style={{ marginTop: 34 }}>
          <Checklist
            items={[
              'The three lifts that build serious strength',
              'How to add weight to the bar every session',
              'Form for the squat, bench press and deadlift',
              'A simple 3-day schedule',
              'When to add weight, when to deload, how to track it',
              'The mistakes beginners make, and how to skip them',
            ]}
          />
          <div>
            <h3 className="lg-h3">Who it&apos;s for</h3>
            <p className="lg-muted" style={{ marginTop: 10 }}>
              Never touched a barbell. Been training and not getting stronger. Switching programs every month. Drowning in
              information.
            </p>
          </div>
        </div>
      </Entry>

      <Entry label="Book or coach">
        <div className="lg-pair">
          <Sheet>
            <h3 className="lg-h3">Get the book if</h3>
            <div style={{ marginTop: 12 }}>
              <Checklist tone="paper" items={['You can run it on your own', 'You want to learn the method yourself', "Money's tight", 'You want to try it before you hire anybody']} />
            </div>
          </Sheet>
          <Sheet>
            <h3 className="lg-h3">Get a coach if</h3>
            <div style={{ marginTop: 12 }}>
              <Checklist tone="paper" items={['You want a program built for your situation', 'You need someone to check your form', 'You want check-ins and someone to answer to']} />
            </div>
            <p className="lg-note">Buy the book first. 15% off coaching.</p>
            <ButtonLink href="/coaching" variant="line">Coaching</ButtonLink>
          </Sheet>
        </div>
      </Entry>

      <Entry label="The journal">
        <div className="lg-bookrow">
          <Cover variant="dark" top="Chi-Rho" title="Strength Training Journal" bottom="450+ pages" />
          <div>
            <h2 className="lg-h2">Write it down.</h2>
            <p className="lg-lede">A year of daily logs, check-ins and PR pages, with no phone in your hand between sets.</p>
            <ButtonLink href="/journal" variant="line">See the journal</ButtonLink>
          </div>
        </div>
      </Entry>
    </main>
  );
}
