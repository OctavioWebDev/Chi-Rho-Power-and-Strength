import type { Metadata } from 'next';
import { ButtonLink, Checklist, Entry, Facts, Faq, LogTable, PageTitle, Sheet } from '@/components/log';

export const metadata: Metadata = {
  title: 'Group classes for men 50+',
  description: 'Coached barbell classes in Toledo for men over 50. Five lifters max, $300 a month.',
};

// Open spots are set by hand until classes fill.
const CLASSES = [
  { name: 'Morning', slug: 'morning-mwf', days: 'Mon · Wed · Fri', spotsLeft: 5 },
  { name: 'Evening', slug: 'evening-mwf', days: 'Mon · Wed · Fri', spotsLeft: 5 },
  { name: 'Morning', slug: 'morning-tts', days: 'Tue · Thu · Sat', spotsLeft: 5 },
  { name: 'Evening', slug: 'evening-tts', days: 'Tue · Thu · Sat', spotsLeft: 5 },
];

export default function GroupClassesPage() {
  return (
    <main className="lg-wrap">
      <Entry label="Group classes" sub="Men 50+">
        <div className="lg-two">
          <div>
            <PageTitle lede="Coached barbell training in groups of five or fewer, built for men over 50. Joint-friendly loading, controlled jumps, and real strength you can see in the log.">
              Over 50? <em>Get under the bar.</em>
            </PageTitle>
            <div className="lg-ctas">
              <ButtonLink href="/apply?service=group-class">Reserve a spot</ButtonLink>
              <ButtonLink href="/apply?service=discovery-call" variant="line">Free 20-minute call</ButtonLink>
            </div>
          </div>
          <Facts
            items={[
              { label: 'Month to month', value: '$300 / mo' },
              { label: 'Paid up front', value: '$3,600 / yr' },
              { label: 'Per class', value: '3 to 5 men' },
              { label: 'Training weeks', value: '47 a year' },
            ]}
          />
        </div>
      </Entry>

      <Entry label="Schedule">
        <h2 className="lg-h2">Four classes. Pick one.</h2>
        <p className="lg-lede lg-muted">
          A class starts once 3 men sign up. If it never fills, you get a full refund or move to another class.
        </p>
        <Sheet title="Class sign-up sheet" caption="Max 5 per class">
          <LogTable
            columns={[
              { key: 'name', label: 'Class' },
              { key: 'days', label: 'Days' },
              { key: 'who', label: 'Who', hideOnPhone: true },
              { key: 'spots', label: 'Open spots', align: 'right', tone: 'weight' },
            ]}
            rows={CLASSES.map((c) => ({
              name: c.name,
              days: c.days,
              who: 'Men 50+',
              spots: `${c.spotsLeft} left`,
            }))}
          />
          <p className="lg-note">3 names and it starts.</p>
        </Sheet>
      </Entry>

      <Entry label="Every class">
        <div className="lg-two">
          <Checklist
            items={[
              'Coached sessions with hands-on technique work',
              'Group program updated every month',
              'Progress logged every session',
              'Warm-ups and cool-downs built for 50+ recovery',
              'Messages between sessions',
              'The Chi-Rho Lifts app, included',
            ]}
          />
          <div>
            <h3 className="lg-h3">Founding member path</h3>
            <p className="lg-muted" style={{ marginTop: 10 }}>
              Pay the year up front ($3,600) and you&apos;re a founding member of Chi-Rho Barbell Club. Finish your 47
              weeks and you get lifetime gym access. No monthly fee, ever. Limited-time offer.
            </p>
            <ButtonLink href="/gym" variant="line">About the gym</ButtonLink>
          </div>
        </div>
      </Entry>

      <Entry label="Questions">
        <Faq
          groups={[
            {
              items: [
                { q: "What if a class doesn't reach 3 men?", a: "It doesn't start until 3 sign up. If you paid up front and it never fills, you get a full refund or move to another class." },
                { q: 'Do I need experience?', a: 'No. We teach the lifts from scratch and progress at a pace that makes sense for you.' },
                { q: 'Do you offer classes for women?', a: "I coach men. If you're a woman with a training question, ask. I'll point you in the right direction." },
                { q: 'Can I switch classes?', a: "Yes, if there's room in the other class. Just tell me." },
                { q: 'What if I miss classes?', a: "It happens. Your rate covers the membership, not single sessions. Showing up is what gets you stronger, but a missed week won't wreck you." },
                { q: 'Is lifetime access really free after a year?', a: "Yes. Pay the year up front and finish 47 weeks of training. That's the founding member deal." },
              ],
            },
          ]}
        />
      </Entry>
    </main>
  );
}
