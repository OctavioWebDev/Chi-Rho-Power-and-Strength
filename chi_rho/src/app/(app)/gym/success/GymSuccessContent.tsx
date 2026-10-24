'use client';

import { useSearchParams } from 'next/navigation';
import { ButtonLink, Checklist, Entry, PageTitle } from '@/components/log';

const tierMessages: Record<string, { headline: string; body: string }> = {
  'community-supporter': {
    headline: "You're a Community Supporter.",
    body: 'Thank you for backing this. Your money goes straight into building Chi-Rho Barbell Club in Toledo.',
  },
  'supporter-plus': {
    headline: "You're a Supporter Plus.",
    body: "Thank you. When we open, you'll have a place to train that's built for lifting.",
  },
  'founding-annual': {
    headline: "You're a Founding Annual Member.",
    body: "Your founding rate is locked for as long as you keep your membership. Your member number and details are coming by email.",
  },
  'founding-monthly': {
    headline: "You're a Founding Monthly Member.",
    body: 'Your $25 a month is locked for life. Your founding member number and build-out updates are coming by email.',
  },
  'founding-coaching': {
    headline: "You're a Founding Coaching Client.",
    body: "Gym access plus online coaching at the founding rate. I'll reach out within 48 hours to get your coaching started.",
  },
};

const defaultMessage = {
  headline: 'Thank you for backing the gym.',
  body: "Your contribution went through. A confirmation email is on its way.",
};

export default function GymSuccessContent() {
  const searchParams = useSearchParams();
  const tierId = searchParams.get('tierId') || '';
  const message = tierMessages[tierId] || defaultMessage;

  const next = [
    'Confirmation email on its way',
    'Build-out updates as we hit each milestone',
    'Founding members get in first when we open',
  ];
  if (tierId === 'founding-coaching') next.push('A message from me within 48 hours to start your coaching');

  return (
    <main className="lg-wrap">
      <Entry label="Barbell Club" sub="You're in">
        <PageTitle lede={message.body}>{message.headline}</PageTitle>
        <h3 className="lg-h3" style={{ marginBottom: 10 }}>What happens next</h3>
        <Checklist items={next} />
        <p className="lg-small" style={{ marginTop: 18 }}>
          Questions? Email <span className="lg-sel">chirhostrength@gmail.com</span>
        </p>
        <div className="lg-ctas" style={{ marginTop: 22 }}>
          <ButtonLink href="/gym">Back to the campaign</ButtonLink>
          <ButtonLink href="/coaching" variant="line">Coaching</ButtonLink>
        </div>
      </Entry>
    </main>
  );
}
