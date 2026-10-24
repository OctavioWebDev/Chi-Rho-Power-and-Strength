import type { Metadata } from 'next'
import { ButtonLink, Entry, PageTitle, RateList } from '@/components/log'

export const metadata: Metadata = {
  title: 'Programs',
  description: 'Training programs you can run yourself, $5 each: foundational strength, hypertrophy and powerlifting.',
}

const paidTemplates = [
  {
    id: 'beginner-strength-2day',
    title: 'Foundational Strength (2-Day)',
    description: 'Perfect for those new to strength training, focusing on mastering fundamental movements with linear progression.',
    price: 5.00,
    image: '/assets/images/Foundation2dayCover.png',
    category: 'Strength',
    duration: '12 weeks',
    level: 'Beginner',
    frequency: '2 days/week',
    focus: 'Movement patterns, technique, and building consistency',
  },
  {
    id: 'beginner-strength-3day',
    title: 'Foundational Strength (3-Day)',
    description: 'Build a solid strength base with this 3-day full body program, perfect for beginners ready to commit to regular training.',
    price: 5.00,
    image: '/assets/images/Foundation3Day.png',
    category: 'Strength',
    duration: '12 weeks',
    level: 'Beginner',
    frequency: '3 days/week',
    focus: 'Progressive overload, movement mastery',
  },
  {
    id: 'intermediate-hypertrophy-3day',
    title: 'Hypertrophy & Strength (3-Day)',
    description: 'For lifters with 6+ months of experience looking to build muscle and increase strength with proper periodization.',
    price: 5.00,
    image: '/assets/images/Hyper&StrengthCover.png',
    category: 'Hypertrophy',
    duration: '8 weeks',
    level: 'Intermediate',
    frequency: '3 days/week',
    focus: 'Muscle growth, strength development',
  },
  {
    id: 'advanced-powerlifting-3day',
    title: 'Powerlifting Program (3-Day)',
    description: 'For advanced lifters focusing on the big three lifts with intelligent programming for competition prep.',
    price: 5.00,
    image: '/assets/images/CompPrepCover.png',
    category: 'Powerlifting',
    duration: '12 weeks',
    level: 'Advanced',
    frequency: '3 days/week',
    focus: 'Peaking, competition prep',
  },
  {
    id: 'advanced-powerlifting-4day',
    title: 'Powerlifting Program (4-Day)',
    description: 'High-volume powerlifting program for advanced athletes with proper recovery capacity and training age.',
    price: 5.00,
    image: '/assets/images/AdvancedValumeCover.png',
    category: 'Powerlifting',
    duration: '12 weeks',
    level: 'Advanced',
    frequency: '4 days/week',
    focus: 'Strength development, accessory work',
  },
]

export default function TemplatesPage() {
  return (
    <main className="lg-wrap">
      <Entry label="Programs" sub="$5 each">
        <PageTitle lede="Programs you can run yourself. Pick the one that matches where you are, run it start to finish, and log every session.">
          Run it <em>yourself.</em>
        </PageTitle>
        <RateList
          items={paidTemplates.map((t) => ({
            name: (
              <>
                {t.title}
                <span className="lg-level">{t.level}</span>
              </>
            ),
            price: `$${t.price}`,
            description: `${t.duration}, ${t.frequency}. ${t.description}`,
            action: <ButtonLink href={`/templates/${t.id}`} variant="line">See the program</ButtonLink>,
          }))}
        />
      </Entry>
      <Entry label="Want more">
        <h2 className="lg-h2">Want it built for you?</h2>
        <p className="lg-lede">A template can&apos;t check your form or change the plan when your log says so. Coaching can.</p>
        <div className="lg-ctas">
          <ButtonLink href="/coaching">Coaching</ButtonLink>
          <ButtonLink href="/book" variant="line">Read the book</ButtonLink>
        </div>
      </Entry>
    </main>
  )
}
