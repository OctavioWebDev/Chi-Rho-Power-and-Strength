import type { Metadata } from 'next';
import { ButtonLink, Entry, Faq, LogTable, Myths, PageTitle, Sheet } from '@/components/log';

export const metadata: Metadata = {
  title: 'Training philosophy',
  description: 'The Shut Up and Lift method: squat, bench, deadlift and press, three days a week, more weight every time you get every rep.',
};

const day = (press: string) => [
  { lift: 'Squat', sets: '3 × 5' },
  { lift: press, sets: '3 × 5' },
  { lift: 'Deadlift', sets: '1 × 5' },
];

export default function PhilosophyPage() {
  return (
    <main className="lg-wrap">
      <Entry label="Philosophy">
        <PageTitle lede="Getting stronger means lifting more weight over time. Not muscle confusion. Not the burn. Not a new program every six weeks. Did the weight on the bar go up? Yes or no.">
          Add weight to the bar. <em>That&apos;s the principle.</em>
        </PageTitle>
      </Entry>

      <Entry label="The template">
        <h2 className="lg-h2">Three days a week. A, B, A, B.</h2>
        <div className="lg-pair lg-mt">
          {[
            ['Day A', 'Bench press'],
            ['Day B', 'Overhead press'],
          ].map(([title, press]) => (
            <Sheet key={title} title={title}>
              <LogTable columns={[{ key: 'lift', label: 'Lift' }, { key: 'sets', label: 'Sets × reps', align: 'right' }]} rows={day(press)} />
            </Sheet>
          ))}
        </div>
        <p className="lg-lede" style={{ marginTop: 22 }}>
          Got every rep with good form? Add 5 lb next time. Missed a workout? Pick up where you left off. Don&apos;t restart and
          don&apos;t switch programs.
        </p>
      </Entry>

      <Entry label="What it's not">
        <Myths
          items={[
            { said: 'Bodybuilding', answer: "We train for strength. Strength builds muscle, but muscle isn't the target." },
            { said: 'Powerlifting (yet)', answer: "This is beginner programming. Meet prep comes later, when you've earned it." },
            { said: 'Functional fitness', answer: 'No box jumps, no battle ropes. Getting strong is functional.' },
            { said: 'Optimal', answer: "There's no perfect program. The best one is the one you'll still be running in two years." },
          ]}
        />
      </Entry>

      <Entry label="Objections">
        <Faq
          openFirst
          groups={[
            {
              items: [
                { q: "Only three exercises? That's not enough.", a: 'For a beginner it is plenty. Those lifts work your whole body. More exercises just split your focus and your recovery.' },
                { q: 'What about arms, abs and calves?', a: 'Squats and deadlifts hit your core harder than any ab exercise. Pressing grows your arms. Want accessories? Do them after the main work.' },
                { q: "Three days isn't enough volume.", a: "If you're adding weight every session, it's enough. Train hard three days, recover four." },
                { q: 'This seems too simple to work.', a: 'Run it for three months and look at your log. Then tell me.' },
              ],
            },
          ]}
        />
      </Entry>

      <Entry label="After that">
        <h2 className="lg-h2">When you stop adding weight every session</h2>
        <p className="lg-lede">
          That&apos;s normal. You&apos;re not a beginner anymore. Now it&apos;s weekly progress, planned heavy and light
          phases, and deloads. That&apos;s where coaching earns its money.
        </p>
        <ButtonLink href="/coaching" variant="line">Coaching</ButtonLink>
      </Entry>
    </main>
  );
}
