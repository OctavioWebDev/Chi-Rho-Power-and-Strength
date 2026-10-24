import type { Metadata } from 'next';
import { ButtonLink, Entry, Faq, PageTitle, type FaqGroup } from '@/components/log';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Straight answers about Chi-Rho coaching: beginners, equipment, prices, cancelling, form checks, the app and who I coach.',
};

const GROUPS: FaqGroup[] = [
  {
    heading: 'Getting started',
    items: [
      { q: "I'm a complete beginner. Is this for me?", a: "Never touched a barbell? Start in person if you're in Toledo, so you learn the lifts right from day one. Bad habits are hard to break. Six months or more under the bar? Online Strength Coaching fits. You know the basics. You need better programming and someone to answer to." },
      { q: 'What if I\'ve never done the "big three" lifts?', a: 'Start in person if you can. If not, start with Strength Coaching and study the form videos closely. These lifts need good technique to be safe. I can program alternatives, but squat, bench and deadlift are the foundation for a reason.' },
      { q: 'How fast will I see results?', a: "A true beginner running the program should add weight to the bar every workout for the first 2 to 3 months. That's measurable. More advanced? Maybe 5 to 10 pounds a month on the main lifts. I don't promise body-change timelines. That depends on food, genetics and consistency. Run the program and you'll get stronger." },
      { q: 'Do I need to read "Shut Up and Lift" first?', a: "No, but it helps. It explains how and why I program the way I do. And book buyers get 15% off their first month." },
      { q: 'What equipment do I need?', a: "Best: barbell, rack, bench and plates. That's what I program for. A basic home barbell setup works too. Dumbbells only? I can program for it, but you'll progress slower." },
    ],
  },
  {
    heading: 'Training',
    items: [
      { q: 'How many days a week?', a: 'Three is the sweet spot for online coaching. Two works, slower. Four or five is possible, but beginners don\'t need it. In-person is a fixed three sessions a week.' },
      { q: 'What if I miss workouts?', a: "Miss a workout, pick up where you left off. Miss a week, we adjust when you're back. Tell me what's going on. Consistency beats perfect." },
      { q: 'Can I add extra exercises?', a: "We can talk about it, but most beginners don't need more volume. They need better reps on the basics. When you're advanced enough to benefit, I'll add accessories on purpose." },
      { q: "What's your approach to periodization?", a: 'Beginners: add weight every session until it stops working. Intermediate and advanced: build volume, then intensity, then deload. Nothing fancy. The goal is more weight over time.' },
      { q: 'Do you do nutrition?', a: "Strength Coaching includes a nutrition plan (calories, protein, timing) for strength or fat loss. Elite gets full nutrition coaching. I'm not a registered dietitian, but I can show you how to eat for your goal." },
      { q: 'How fast do you answer messages?', a: 'Strength: within 24 hours. Elite: same day. Both in the Chi-Rho Lifts app.' },
    ],
  },
  {
    heading: 'Money',
    items: [
      { q: 'Why do you cost more than other online coaches?', a: "I'm not trying to run 100 clients, so everyone gets real attention. And you get a program built for you, not a template. Want cheap? There are plenty of options." },
      { q: 'Can I cancel anytime?', a: "Yes. Full refund in month one if you're not satisfied. After that it's month to month with 30 days' notice. No contracts, no cancellation fees." },
      { q: 'Payment plans?', a: "Monthly billing is the plan. Pay 3, 6 or 12 months up front and save 5, 10 or 15%. No weekly billing or custom schedules." },
      { q: "What's the refund policy?", a: "Full refund in the first 30 days if you're not satisfied. After that, no refunds for the rest of a month, but you won't be billed for the next one." },
    ],
  },
  {
    heading: 'Online or in person',
    items: [
      { q: 'Is online as good as in person?', a: "If you know the lifts, yes. You need programming and someone to answer to. If you're new, in person is better because I can fix your form on the spot. Online with video form checks still works if you're honest about your technique." },
      { q: 'How do online form checks work?', a: "Film your working sets from the side and send them on Discord. I review them in 24 to 48 hours, depending on your plan, and tell you what to fix and how. If it's a big problem, we get on a video call." },
      { q: "I'm in Toledo. In person or online?", a: 'New to lifting: in person, to learn the lifts. Experienced: online costs less. Want the most coaching and can commit to three sessions a week: in person.' },
    ],
  },
  {
    heading: 'Coaching style',
    items: [
      { q: "What's your coaching style?", a: "Direct. I tell you what you need to hear. If your form is off, I'll say so. If you're making excuses, I'll call it out. Progress isn't a straight line and I get that. But I won't let you lie to yourself." },
      { q: 'Do you coach women?', a: "I coach men. If you're a woman with a training question, ask. I'll point you in the right direction." },
      { q: "What if I don't like your programming?", a: '"I don\'t like it" isn\'t the same as "it doesn\'t work." Tell me what\'s not working and we\'ll talk. Sometimes the exercise you hate is the one you need. I program for results, not comfort.' },
      { q: 'Are you against bodybuilding?', a: "No. Strength is my specialty, and getting stronger builds muscle. If size is your goal, I can program for it. You just won't get bro splits or pointless volume." },
    ],
  },
  {
    heading: 'Special situations',
    items: [
      { q: 'I have an old injury.', a: "I'm not a physical therapist. If a doctor has cleared you to train, I'll program around it. If not, get cleared first. I won't program through pain. That's how small problems become big ones." },
      { q: "I'm over 40, 50 or 60. Is this okay?", a: 'Training age matters more than your age. Recovery may take longer, so we adjust volume and frequency. The rule doesn\'t change: add weight over time. Over 50 and in Toledo? Look at the group classes.' },
      { q: 'I work nights or odd hours.', a: "Good. So do I. Train when you can train consistently. We'll build around your schedule." },
      { q: 'I want to compete in powerlifting.', a: "First meet or working toward competitive numbers? I can help. Chasing a 2,000-pound total? You may want someone who only coaches elite powerlifters." },
    ],
  },
  {
    heading: 'Comparing options',
    items: [
      { q: "What's the difference between the two online plans?", a: 'Strength ($250): weekly check-ins, up to 3 form checks a week, messages, calls every two weeks, a nutrition plan. Elite ($500, 5 spots): video calls every two weeks, unlimited form checks, daily messages, full nutrition coaching and meet prep.' },
      { q: 'Should I buy the book or hire you?', a: "The book is $15–20 and teaches the method so you can program for yourself. Coaching is for a program built for you, form feedback and someone to answer to. Not sure? Buy the book first. You get 15% off coaching if you do." },
      { q: "Can't I just run a free program?", a: "You can. There are good ones. Coaching adds a plan built for you, form feedback, someone to answer to, and changes when it stalls. Are you stronger than you were last month? If yes, keep going. If not, apply." },
    ],
  },
  {
    heading: 'The app',
    items: [
      { q: 'What app do you use?', a: 'Chi-Rho Lifts. Your program, check-ins and messages live there, free with coaching. Form videos go through Discord. It works on phone and desktop.' },
      { q: 'Do I need to track my own workouts?', a: 'The app logs your sets. Also jot down how sets felt, sleep and stress. It helps me make better calls.' },
      { q: 'No signal at my gym?', a: 'Log offline. It syncs when you get service.' },
    ],
  },
];

export default function FaqPage() {
  return (
    <main className="lg-wrap">
      <Entry label="FAQ">
        <PageTitle lede="Don't see your question? Ask. I'd rather answer it than have you guess.">
          Ask me <em>straight.</em>
        </PageTitle>
        <Faq groups={GROUPS} />
        <div className="lg-ctas" style={{ marginTop: 32 }}>
          <ButtonLink href="/apply?service=discovery-call">Ask me on a free call</ButtonLink>
          <ButtonLink href="/coaching" variant="line">Coaching</ButtonLink>
        </div>
      </Entry>
    </main>
  );
}
