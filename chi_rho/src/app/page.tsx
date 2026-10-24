import type { Metadata } from 'next';
import {
  ButtonLink, Cover, Entry, LogTable, Myths, RateList, Seal, Sheet,
} from '@/components/log';

export const metadata: Metadata = {
  title: { absolute: 'Chi-Rho Power & Strength | Strength coaching in Toledo and online' },
  description: 'Strength coaching for men in Toledo and online. Are you stronger than you were last month?',
};

const DAY_ONE = [
  'What are you doing now, and why?',
  'Can you explain the logic behind it?',
  'How old are you?',
  'What do you weigh?',
  'How long have you been training?',
  'What are you eating?',
];

export default function Home() {
  return (
    <main className="lg-wrap">
      <Entry label="Toledo, Ohio" sub="and online">
        <div className="lg-hero">
          <div>
            <h1 className="lg-h1">
              Are you stronger than you were <em>last month?</em>
            </h1>
            <p className="lg-lede">
              If you don&apos;t know, you&apos;re not writing it down. I coach men in Toledo and online to get stronger every
              week. Stronger is healthier.
            </p>
            <div className="lg-ctas">
              <ButtonLink href="/apply">Apply for coaching</ButtonLink>
              <ButtonLink href="/apply?service=discovery-call" variant="line">Book a free 20-minute call</ButtonLink>
            </div>
          </div>
          <Sheet title="Week 9 · Friday" caption="Sets × reps">
            <LogTable
              columns={[
                { key: 'lift', label: 'Lift' },
                { key: 'sets', label: 'Sets', align: 'right' },
                { key: 'w', label: 'Weight', align: 'right', tone: 'weight' },
                { key: 'ok', label: '', align: 'right' },
              ]}
              rows={[
                { lift: 'Squat', sets: '1 × 3', w: '315 lb', ok: 'PR' },
                { lift: 'Bench press', sets: '3 × 5', w: '205 lb', ok: '✓' },
                { lift: 'Deadlift', sets: '1 × 5', w: '365 lb', ok: '✓' },
                { lift: 'Chin-ups', sets: '3 × 8', w: 'BW', ok: '✓' },
              ]}
            />
            <p className="lg-note">PR on squat. Yeaaaa buddy. Now move on.</p>
          </Sheet>
        </div>
      </Entry>

      <Entry label="The name">
        <div className="lg-name">
          <Seal size={190} className="lg-seal" />
          <div>
            <h2 className="lg-h2">
              Chi-Rho means <em>Christ reigns.</em>
            </h2>
            <p className="lg-big">
              Not my feelings. Not the training. Lifting is a tool. It won&apos;t make you a man, and plenty of real men
              don&apos;t train. It will make you stronger, and stronger is healthier.
            </p>
          </div>
        </div>
      </Entry>

      <Entry label="Day one">
        <h2 className="lg-h2">Before I write you a program, I need answers.</h2>
        <Sheet className="lg-asks">
          <ul>
            {DAY_ONE.map((q) => <li key={q}>{q}</li>)}
          </ul>
        </Sheet>
        <p className="lg-after">
          Answer those in your application. That&apos;s where we start. <ButtonLink href="/apply" variant="line">Fill it out</ButtonLink>
        </p>
      </Entry>

      <Entry label="What you'd do" sub="Month one">
        <h2 className="lg-h2">Your first month, on paper</h2>
        <p className="lg-lede lg-muted">
          An example for a new lifter. Day A and Day B, alternating, three days a week. Add 5 pounds when you get every rep.
        </p>
        <Sheet>
          <LogTable
            columns={[
              { key: 'day', label: 'Day', tone: 'day' },
              { key: 'lift', label: 'Lift' },
              { key: 'sets', label: 'Sets × reps', align: 'right' },
              { key: 'w1', label: 'Week 1', align: 'right' },
              { key: 'w4', label: 'Week 4', align: 'right', tone: 'weight' },
              { key: 'note', label: 'Note', tone: 'note', hideOnPhone: true },
            ]}
            rows={[
              { day: 'Mon · A', lift: 'Squat', sets: '3 × 5', w1: '135', w4: '195', note: '5 lb a session while form holds' },
              { day: 'Mon · A', lift: 'Bench press', sets: '3 × 5', w1: '95', w4: '125', note: 'Alternates with the press' },
              { day: 'Mon · A', lift: 'Deadlift', sets: '1 × 5', w1: '155', w4: '245', note: 'One hard set, make it count' },
              { day: 'Wed · B', lift: 'Squat', sets: '3 × 5', w1: '140', w4: '200', note: 'Same lift, every session' },
              { day: 'Wed · B', lift: 'Overhead press', sets: '3 × 5', w1: '65', w4: '85', note: 'Smaller jumps' },
            ]}
          />
        </Sheet>
      </Entry>

      <Entry label="Things people say">
        <Myths
          items={[
            { said: "Deadlifts don't have much ROI.", answer: 'ROI is an investment term. How are you measuring it? The pump? How you feel the next morning? Show me something objective.' },
            { said: 'I need a new program.', answer: "What are you doing now, and why? Most of the time it isn't the program. It's form, it's fatigue, or you're not training as hard as you think you are." },
            { said: 'Lifting makes you a man.', answer: "It doesn't. Only God makes a man. The bar makes you stronger, and that's enough." },
          ]}
        />
      </Entry>

      <Entry label="Rates">
        <h2 className="lg-h2">Coaching rates</h2>
        <p className="lg-lede">I coach men. Any age, any experience. The only question is whether you&apos;re stronger than you were last month.</p>
        <RateList
          items={[
            { name: 'Online · Strength', price: '$250', unit: '/ mo', tag: 'Anywhere', description: 'Your program, check-ins and messages in the Chi-Rho Lifts app. Form checks up to 3 a week.' },
            { name: 'Online · Elite', price: '$500', unit: '/ mo', tag: '5 spots', description: 'For competitive lifters. Video calls, unlimited form checks, meet prep and attempt selection.' },
            { name: 'In-person', price: '$1,150', unit: '/ mo', tag: 'Toledo', description: 'Three coached sessions a week, 47 weeks a year.' },
            { name: 'Group classes, men 50+', price: '$300', unit: '/ mo', tag: 'Toledo', description: 'Five lifters max. Same program, coached together.' },
          ]}
        />
        <p style={{ marginTop: 22 }}>
          <ButtonLink href="/coaching" variant="line">Everything that&apos;s included</ButtonLink>
        </p>
      </Entry>

      <Entry label="Also here">
        <div className="lg-bookrow">
          <Cover top="Octavio Sanchez" title="Shut Up and Lift" bottom="A no-nonsense guide to getting strong" />
          <div>
            <p className="lg-pull">You need three things: a barbell, progressive overload, and consistency.</p>
            <p className="lg-small" style={{ marginTop: 12 }}>From chapter 1 of <i>Shut Up and Lift</i>.</p>
            <div className="lg-ctas" style={{ marginTop: 18 }}>
              <ButtonLink href="/book" variant="line">The book</ButtonLink>
              <ButtonLink href="/gym" variant="line">Help build the barbell gym</ButtonLink>
            </div>
          </div>
        </div>
      </Entry>
    </main>
  );
}
