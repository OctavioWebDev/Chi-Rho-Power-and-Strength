import { ButtonLink, Checklist, Entry, Faq, Facts, RateList, Sheet, Steps } from '@/components/log';

export function WhoFor() {
  return (
    <Entry label="This is you if">
      <div className="lg-two">
        <Checklist
          items={[
            "You're tired of random YouTube workouts.",
            "You've got 30, 50 or 100+ pounds to lose and don't know where to start.",
            'You used to be strong. Then kids, career and injuries happened.',
            "You're under a doctor's care and want training that works with it. Medical calls stay with your doctor.",
            "You've been stuck at the same numbers for months.",
            'You need someone to hold you to it.',
          ]}
        />
        <Facts
          items={[
            { label: 'Under the bar', value: '10+ years' },
            { label: 'Best squat', value: '480 lb' },
            { label: 'Best deadlift', value: '480 lb' },
            { label: 'Programming refined', value: '5 years' },
          ]}
        />
      </div>
    </Entry>
  );
}

function Package({ name, price, tag, items, forWho, cta, href }: { name: string; price: string; tag: string; items: string[]; forWho: string; cta: string; href: string }) {
  return (
    <Sheet className="lg-pkg">
      <p className="lg-pkg-tag">{tag}</p>
      <h3 className="lg-h3">{name}</h3>
      <p className="lg-pkg-price">
        {price}
        <small> / month</small>
      </p>
      <Checklist tone="paper" items={items} />
      <p className="lg-pkg-for">
        <b>For:</b> {forWho}
      </p>
      <ButtonLink href={href} variant="line">{cta}</ButtonLink>
    </Sheet>
  );
}

export function OnlinePackages() {
  return (
    <Entry label="Online">
      <h2 className="lg-h2">Online coaching</h2>
      <p className="lg-lede lg-muted">
        Train anywhere: your gym, your garage, on the road. Your program, meal plan, check-ins and messages all live in the
        Chi-Rho Lifts app, free with coaching.
      </p>
      <div className="lg-pair">
        <Package
          name="Strength Coaching"
          price="$250"
          tag="Most picked"
          items={[
            'Custom program from a detailed assessment',
            'Weekly check-ins in the app',
            'Form check videos, up to 3 a week',
            'Program changes based on your numbers',
            'Messages in the app, answered within 24 hours',
            '15-minute calls every two weeks',
            'Nutrition plan for strength or fat loss',
          ]}
          forWho="lifters who've stalled on generic programs, men with weight to lose who want to keep their muscle, and guys juggling work and family."
          cta="Apply for Strength"
          href="/apply?service=strength-coaching"
        />
        <Package
          name="Elite Performance"
          price="$500"
          tag="5 spots"
          items={[
            'Everything in Strength Coaching',
            '30-minute video calls every two weeks',
            'Unlimited form checks, 48-hour turnaround',
            'Daily messaging, same-day answers',
            'Full nutrition coaching',
            'Meet prep and attempt selection',
            'Quarterly program design sessions',
            'The book and the training journal, free',
          ]}
          forWho="competitive powerlifters and anyone chasing a serious total."
          cta="Apply for Elite"
          href="/apply?service=elite"
        />
      </div>
    </Entry>
  );
}

export function InPerson() {
  return (
    <Entry label="In person" sub="Toledo">
      <h2 className="lg-h2">In-person coaching</h2>
      <p className="lg-lede">
        I&apos;m right there for every rep. Three 60-minute sessions a week, 47 weeks a year. The other 5 weeks are
        holidays and planned time off, so you aren&apos;t paying for weeks you don&apos;t train. The goal is that you can
        train on your own by the end of a year.
      </p>
      <RateList
        items={[
          {
            name: 'Full-time coaching',
            price: '$1,150',
            unit: '/ month',
            description: (
              <Checklist
                items={[
                  'Every session coached',
                  "Programming updated week to week from how you're lifting",
                  'Priority messages in the app, same-day answers',
                  'Nutrition plan and quarterly programming sessions',
                  'The book and the training journal, free',
                ]}
              />
            ),
            action: <ButtonLink href="/apply?service=inperson" variant="line">Apply for in-person</ButtonLink>,
          },
        ]}
      />
      <p className="lg-small" style={{ marginTop: 14 }}>You need access to a barbell, rack and plates. Exact location after the call.</p>
    </Entry>
  );
}

export function AddOns() {
  return (
    <Entry label="Add-ons">
      <h2 className="lg-h2">One-time help</h2>
      <RateList
        items={[
          {
            name: 'Program design consultation',
            price: '$100',
            description: 'One consultation, then a program built for you: 8, 12 or 16 weeks. For lifters who want a plan without ongoing coaching.',
            action: <ButtonLink href="/apply?service=consultation-program" variant="line">Ask for one</ButtonLink>,
          },
          {
            name: 'Technique audit',
            price: '$97',
            description: 'Send video of your squat, bench and deadlift. You get written corrections and drills, plus a follow-up review.',
            action: <ButtonLink href="/apply?service=technique-audit" variant="line">Ask for one</ButtonLink>,
          },
        ]}
      />
    </Entry>
  );
}

const OFFERS = [
  { big: '8 weeks', text: "You'll see measurable strength gains in the first 8 weeks. Numbers in the log, not feelings." },
  { big: 'Month 1', text: "Full refund if you're not satisfied. After that it's month to month with 30 days' notice. No contracts." },
  { big: '15% off', text: 'Bought Shut Up and Lift? Show the receipt and your first month is 15% off.' },
  { big: '$50', text: 'Refer a friend who signs up and you get $50. He gets $25 off his first month.' },
  { big: '5 · 10 · 15%', text: 'Pay 3, 6 or 12 months up front and save 5, 10 or 15%.' },
];

export function TheDeal() {
  return (
    <Entry label="The deal">
      <h2 className="lg-h2">Guarantees and discounts</h2>
      <div className="lg-offers">
        {OFFERS.map((o) => (
          <div key={o.big}>
            <b>{o.big}</b>
            <p>{o.text}</p>
          </div>
        ))}
      </div>
    </Entry>
  );
}

export function HowItStarts() {
  return (
    <Entry label="How it starts">
      <Steps
        items={[
          { title: 'Apply', text: 'Training history, goals, what you eat, your schedule.', here: true },
          { title: '20-minute call', text: "We make sure it's a fit. You ask anything." },
          { title: 'Assessment', text: 'We find your baselines. You get the app and your first program in it.' },
          { title: 'Train and log', text: "Show up, do the work, write it down. I'll handle the adjustments." },
        ]}
      />
      <p style={{ marginTop: 24 }}>
        <ButtonLink href="/apply">Apply now</ButtonLink>
      </p>
    </Entry>
  );
}

export function CoachingFaq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <Entry label="Questions">
      <Faq groups={[{ items }]} />
    </Entry>
  );
}

export const ONLINE_FAQ = [
  { q: 'What equipment do I need?', a: 'A barbell, a rack and plates works best. I can adapt for dumbbells, but the barbell gets better results. Elite clients: I work with whatever you have.' },
  { q: 'How often will we talk?', a: 'Strength: weekly check-ins in the app plus a call every two weeks. Elite: a video call every two weeks plus daily messages.' },
  { q: "I'm a complete beginner. Is this for me?", a: 'Online works best once you have about 6 months under the bar. Brand new? Start in person to learn the lifts, or start online and study the form videos closely.' },
  { q: 'Can I cancel anytime?', a: "Yes. Full refund in month one if you're not satisfied. After that it's month to month with 30 days' notice." },
  { q: 'What if I miss workouts?', a: "Tell me what's going on and I'll adjust the program. Pick up where you left off." },
];

export const IN_PERSON_FAQ = [
  { q: 'Where do sessions take place?', a: 'In Toledo. You get the exact location after the call. You need a barbell, a rack and plates, and we confirm the setup before your first session.' },
  { q: 'Do I need experience?', a: "No. If you're brand new we start with the basics and build from there. Show up ready to work." },
  { q: 'What if I miss a session?', a: 'Give me a heads-up and we reschedule when we can. The monthly rate covers the coaching, not single sessions.' },
  { q: 'Can I get help between sessions?', a: 'Priority messages are included. Want programming for the days I\'m not there? Bring it up on the call.' },
  { q: 'Can I cancel anytime?', a: "Yes. Full refund in month one if you're not satisfied. After that it's month to month with 30 days' notice. No contracts." },
  { q: 'How fast will I see results?', a: 'Most clients hit their first PRs in 4 to 6 weeks of training consistently.' },
];
