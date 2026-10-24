'use client';

import React, { useEffect, useState } from 'react';
import { BarbellProgress, Checklist, Entry, Faq, LogTable, PageTitle, RateList, Sheet, Steps } from '@/components/log';

// ─── Campaign config ────────────────────────────────────────────────────────
const CAMPAIGN_GOAL = 65000;
// ────────────────────────────────────────────────────────────────────────────

interface CampaignTotals {
  totalRaisedDollars: number;
  totalBackers: number;
  percentFunded: number;
}

type TierId =
  | 'community-supporter'
  | 'supporter-plus'
  | 'founding-annual'
  | 'founding-monthly'
  | 'founding-coaching';

const tiers: Array<{
  id: TierId;
  name: string;
  price: string;
  priceNote: string;
  description: string;
  perks: string[];
  highlight?: boolean;
  badge?: string;
}> = [
  {
    id: 'community-supporter',
    name: 'Community Supporter',
    price: '$25',
    priceNote: 'once',
    description:
      "You think Toledo needs a real barbell gym and you want to help build it.",
    perks: [
      'Name on the Chi-Rho Barbell Club Founders Wall',
      'Exclusive "Founding Supporter" Discord role',
      'Early-access opening announcements',
      'Chi-Rho sticker pack',
    ],
  },
  {
    id: 'supporter-plus',
    name: 'Supporter Plus',
    price: '$50',
    priceNote: 'once',
    description:
      'Everything in Community Supporter, plus a shirt before the gym even exists.',
    perks: [
      'Everything in Community Supporter',
      'Exclusive founding t-shirt',
      'Priority build-out update newsletter',
      '10% off first month of any coaching package',
    ],
  },
  {
    id: 'founding-annual',
    name: 'Founding Annual Member',
    price: '$300',
    priceNote: '/ year, locked for life',
    description:
      'A year of gym access at the lowest rate this gym will ever have. Renew every year and it never goes up.',
    perks: [
      'Full gym access for 12 months',
      'Founding rate locked for life on renewal',
      'First through the doors at soft open',
      'Everything in Supporter Plus',
      'Quarterly 1-on-1 programming review (30 min)',
      'Chi-Rho Lifts app included',
    ],
    highlight: true,
    badge: 'Most picked',
  },
  {
    id: 'founding-monthly',
    name: 'Founding Monthly Member',
    price: '$25',
    priceNote: '/ month, locked for life',
    description:
      'Full access, month to month. $25 a month, locked for life.',
    perks: [
      'Full gym access, cancel anytime',
      '$25/month locked for life',
      'Founding member status + Discord role',
      'Chi-Rho Lifts app included',
      'Everything in Community Supporter',
    ],
  },
  {
    id: 'founding-coaching',
    name: 'Founding Coaching Client',
    price: '$250',
    priceNote: '/ month',
    description:
      "Online coaching now. When the gym opens, $25 of it covers your membership, and you get first pick of in-person slots.",
    perks: [
      'Full Chi-Rho online coaching package',
      '$25/month gym membership credit at opening',
      'Chi-Rho Lifts app included',
      'Priority access to in-person training slots',
      'Founding member status for life',
      'Everything in Supporter Plus',
    ],
    badge: 'Best value',
  },
];

const equipment = [
  { item: '4× Rogue HR-2 Half Racks', desc: 'Each with a bench, bar and plates package.' },
  { item: '4× Rogue RM-3 Monster Racks', desc: 'Full workout stations for the main lifts.' },
  { item: '16× Rogue Ohio Power Bars', desc: 'Aggressive knurl, stiff steel.' },
  { item: 'Full Olympic Plate Sets', desc: '1.25 lb through 45 lb plates in quantity.' },
  { item: '4× Rogue Westside Benches', desc: 'Wide pad, competition height.' },
  { item: 'Rubber Flooring & Deadlift Platforms', desc: '2,500–3,000 sq ft of proper training surface.' },
  { item: 'Plate Storage Trees & Bar Holders', desc: 'Organized and professional from day one.' },
  { item: 'Chalk Stations & Gym Timer', desc: 'The essentials. No fancy screens.' },
];

const timeline = [
  { phase: 'Campaign Launch', desc: 'Founding memberships live. Build the community before we build the gym.', status: 'active' },
  { phase: 'Campaign Funded', desc: 'Hit $65K. Place the Rogue equipment order.', status: 'upcoming' },
  { phase: 'Build-Out', desc: 'Install flooring, build platforms, set up racks. Documented for the community.', status: 'upcoming' },
  { phase: 'Founding Members First', desc: 'Doors open exclusively for founding members before the public.', status: 'upcoming' },
  { phase: 'Grand Opening', desc: 'Chi-Rho Barbell Club is open to Toledo.', status: 'upcoming' },
];

export default function GymFundingPage() {
  const [loadingTier, setLoadingTier] = useState<TierId | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [totals, setTotals] = useState<{ raised: number | null; members: number | null }>({ raised: null, members: null });

  useEffect(() => {
    fetch('/api/gym/campaign')
      .then((res) => res.json())
      .then((data) => setTotals({ raised: data.totalRaisedDollars ?? null, members: data.totalBackers ?? null }))
      .catch(() => {
        // Leave totals empty; the bar shows $0.
      });
  }, []);

  const handleCheckout = async (tierId: TierId) => {
    setLoadingTier(tierId);
    setError(null);

    try {
      const res = await fetch('/api/gym/checkout_sessions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tierId,
          successUrl: `${window.location.origin}/gym/success?session_id={CHECKOUT_SESSION_ID}&tierId=${tierId}`,
          cancelUrl: `${window.location.origin}/gym`,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Something went wrong');
      }

      const { url } = await res.json();
      if (url) {
        window.location.href = url;
      } else {
        throw new Error('No checkout URL returned');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to start checkout. Please try again.');
      setLoadingTier(null);
    }
  };

  return (
    <main className="lg-wrap">
      <Entry label="Barbell Club" sub="Founding members">
        <PageTitle lede="Racks, bars, plates and platforms. No machines, no cardio decks. We're raising $65,000 through founding memberships to build Chi-Rho Barbell Club. Founding members get in first and keep the lowest rate this gym will ever have.">
          Toledo needs a <em>barbell gym.</em>
        </PageTitle>
        <BarbellProgress raised={totals.raised} members={totals.members} goal={CAMPAIGN_GOAL} />
      </Entry>

      <Entry label="Memberships" id="tiers">
        <h2 className="lg-h2">Pick your founding membership</h2>
        <p className="lg-lede lg-muted">
          Founding rates: $25 a month or $300 a year, locked for life. After the campaign it&apos;s $35 a month. Every
          membership, coaching plan and class includes the Chi-Rho Lifts app.
        </p>
        {error ? <p className="lg-error" role="alert">{error}</p> : null}
        <RateList
          items={tiers.map((t) => ({
            name: t.name,
            price: t.price,
            unit: t.priceNote,
            tag: t.badge,
            description: (
              <>
                {t.description}
                <Checklist items={t.perks} />
              </>
            ),
            action: (
              <button
                type="button"
                className="lg-link"
                onClick={() => handleCheckout(t.id)}
                disabled={loadingTier !== null}
              >
                {loadingTier === t.id ? 'Opening checkout…' : `Back this tier · ${t.price}`}
              </button>
            ),
          }))}
        />
      </Entry>

      <Entry label="The order">
        <h2 className="lg-h2">What your money buys</h2>
        <Sheet title="Equipment order" caption="$50,000 equipment · $15,000 build-out" className="lg-mt">
          <LogTable
            columns={[
              { key: 'item', label: 'Item' },
              { key: 'note', label: 'Note', tone: 'note' },
            ]}
            rows={equipment.map((e) => ({ item: e.item, note: e.desc }))}
          />
          <p className="lg-note">Every dollar tracked. Founders get the updates first.</p>
        </Sheet>
      </Entry>

      <Entry label="The plan">
        <Steps
          items={timeline.map((t) => ({
            title: t.phase,
            text: t.desc,
            here: t.status === 'active',
            note: t.status === 'active' ? "We're here" : undefined,
          }))}
        />
        <p style={{ marginTop: 24 }}>
          <a className="lg-btn" href="#tiers">Become a founding member</a>
        </p>
      </Entry>

      <Entry label="Questions">
        <Faq
          groups={[
            {
              items: [
                { q: "What if the campaign doesn't hit $65K?", a: "I'll contact founding members directly. Either a full refund or, if we're close, we talk about how to close the gap. No games." },
                { q: 'Where will the gym be?', a: 'Toledo, Ohio. The exact location is in negotiation. Founding members hear first.' },
                { q: "I'm a beginner. Is this gym for me?", a: 'Yes. It\'s built for people who want to get strong, beginners included. Coaches on the floor.' },
                { q: "What's the Chi-Rho Lifts app?", a: "The training app built for this gym. Log every set, track progress and nutrition, and run the program your coach builds. It's included with every membership, coaching plan and class." },
                { q: 'Is my founding rate really locked forever?', a: "Yes, as long as your membership stays active. Cancel and rejoin later and you pay the standard rate." },
                { q: 'Can I get a refund if it falls through?', a: "If the gym doesn't open within 18 months, founding members get full refunds. The one-time tiers (Community Supporter, Supporter Plus) are contributions and aren't refundable." },
              ],
            },
          ]}
        />
      </Entry>
    </main>
  );
}
