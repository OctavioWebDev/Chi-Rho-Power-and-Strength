'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaCheck, FaDumbbell, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';

// ─── Campaign config ────────────────────────────────────────────────────────
const CAMPAIGN_GOAL = 65000;
const DAYS_REMAINING = 60;
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
    priceNote: 'one-time',
    description:
      "Back the mission. You believe Toledo needs a real barbell gym and you want to help make it happen.",
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
    priceNote: 'one-time',
    description:
      'Everything in Community Supporter, plus gear to rep the gym before it exists.',
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
    priceNote: '/year — locked in for life',
    description:
      'Full gym access for a year at the lowest rate this gym will ever offer. This price is locked in forever as long as you renew annually.',
    perks: [
      'Full gym access for 12 months',
      'Founding rate locked for life on renewal',
      'First through the doors at soft open',
      'Everything in Supporter Plus',
      'Quarterly 1-on-1 programming review (30 min)',
      'Chi-Rho Lifts app included',
    ],
    highlight: true,
    badge: 'MOST POPULAR',
  },
  {
    id: 'founding-monthly',
    name: 'Founding Monthly Member',
    price: '$25',
    priceNote: '/month — rate locked for life',
    description:
      'All the access, month to month. Your $25/month rate is locked for life.',
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
    priceNote: '/month',
    description:
      "Chi-Rho online coaching — and when the gym opens, $25/month of your coaching fee covers your membership. You train online now, in-person later.",
    perks: [
      'Full Chi-Rho online coaching package',
      '$25/month gym membership credit at opening',
      'Chi-Rho Lifts app included',
      'Priority access to in-person training slots',
      'Founding member status for life',
      'Everything in Supporter Plus',
    ],
    badge: 'BEST VALUE',
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
  const [totals, setTotals] = useState<CampaignTotals>({
    totalRaisedDollars: 0,
    totalBackers: 0,
    percentFunded: 0,
  });

  useEffect(() => {
    fetch('/api/gym/campaign')
      .then((res) => res.json())
      .then((data) =>
        setTotals({
          totalRaisedDollars: data.totalRaisedDollars ?? 0,
          totalBackers: data.totalBackers ?? 0,
          percentFunded: data.percentFunded ?? 0,
        })
      )
      .catch(() => {
        // Leave totals at zero — the campaign section still renders fine.
      });
  }, []);

  const progressPercent = totals.percentFunded;

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
    <div className="min-h-screen bg-gray-950 text-white">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-yellow-500 font-semibold tracking-widest uppercase text-sm mb-4">
            Founding Member Campaign
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Help Build Toledo&apos;s First<br />
            <span className="text-yellow-500">Dedicated Barbell Gym</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-4">
            Chi-Rho Barbell Club. 100% Rogue equipment. Real coaching. No machines, no cardio decks, no nonsense.
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10">
            We&apos;re raising $65,000 through founding memberships to build, equip, and open a gym Toledo has never had. Be one of the first through the door.
          </p>

          {/* Progress bar */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 max-w-2xl mx-auto mb-8">
            <div className="flex justify-between text-sm text-gray-400 mb-3">
              <span>
                <span className="text-white font-bold text-lg">${totals.totalRaisedDollars.toLocaleString()}</span> raised
              </span>
              <span>Goal: ${CAMPAIGN_GOAL.toLocaleString()}</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-4 mb-4 overflow-hidden">
              <div
                className="bg-yellow-500 h-4 rounded-full transition-all duration-700"
                style={{ width: `${Math.max(progressPercent, 1)}%` }}
              />
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-yellow-400">{totals.totalBackers}</p>
                <p className="text-xs text-gray-400">Founding Members</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-yellow-400">{progressPercent.toFixed(0)}%</p>
                <p className="text-xs text-gray-400">Funded</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-yellow-400">{DAYS_REMAINING}</p>
                <p className="text-xs text-gray-400">Days Remaining</p>
              </div>
            </div>
          </div>

          <a
            href="#tiers"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 px-10 rounded-lg transition duration-200 shadow-lg hover:scale-105 transform text-lg"
          >
            Become a Founding Member
          </a>
        </div>
      </section>

      {/* ── Why Toledo / The Problem ─────────────────────────────────────── */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-center">Toledo Deserves a Real Gym</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { stat: '426K', label: 'Toledo metro area residents' },
              { stat: '36.9%', label: 'adult obesity rate — above national average' },
              { stat: '0', label: 'dedicated barbell-first gyms in Toledo' },
            ].map((item) => (
              <div key={item.stat} className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center">
                <p className="text-4xl font-extrabold text-yellow-500 mb-2">{item.stat}</p>
                <p className="text-gray-300 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-300 text-lg text-center max-w-2xl mx-auto">
            Toledo has big-box gyms and cardio studios. What it doesn&apos;t have is a place built for people who want to squat, bench, and deadlift. Chi-Rho Barbell Club is that place.
          </p>
        </div>
      </section>

      {/* ── Founding Member Tiers ────────────────────────────────────────── */}
      <section id="tiers" className="py-16 bg-gray-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
              Choose Your Founding Membership
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6" />
            <p className="text-gray-300 max-w-2xl mx-auto">
              Every tier directly funds equipment, space, and buildout. Your founding rate is locked in — this is the lowest price this gym will ever offer.
            </p>
            <p className="text-gray-400 text-sm max-w-2xl mx-auto mt-3">
              Founding rates: $25/month or $300/year. After the campaign, memberships are $35/month or $300/year. Every membership, coaching plan, and class includes the Chi-Rho Lifts app.
            </p>
          </div>

          {error && (
            <div className="max-w-2xl mx-auto mb-8 p-4 bg-red-900/20 border border-red-500/30 text-red-400 rounded-lg text-center">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={`bg-gray-900 rounded-xl overflow-hidden border-2 flex flex-col relative transition-all hover:border-yellow-500/60 ${
                  tier.highlight ? 'border-yellow-500' : 'border-gray-800'
                }`}
              >
                {tier.badge && (
                  <div className="absolute top-0 right-0 bg-yellow-500 text-gray-900 font-bold px-3 py-1 text-xs">
                    {tier.badge}
                  </div>
                )}

                <div className="p-6 border-b border-gray-800">
                  <h3 className="text-xl font-bold text-white mb-1">{tier.name}</h3>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-extrabold text-yellow-500">{tier.price}</span>
                    <span className="text-gray-400 text-sm">{tier.priceNote}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{tier.description}</p>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <ul className="space-y-2 mb-6 flex-1">
                    {tier.perks.map((perk, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <FaCheck className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{perk}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleCheckout(tier.id)}
                    disabled={loadingTier !== null}
                    className={`w-full font-bold py-3 px-6 rounded-lg transition duration-200 flex items-center justify-center gap-2 ${
                      tier.highlight
                        ? 'bg-yellow-500 hover:bg-yellow-600 text-gray-900'
                        : 'bg-gray-800 hover:bg-gray-700 text-white'
                    } disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    {loadingTier === tier.id ? (
                      <>
                        <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Processing...
                      </>
                    ) : (
                      'Back This Tier'
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Equipment ───────────────────────────────────────────────────── */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-center">
            <FaDumbbell className="inline mr-3 mb-1" />
            What Your Money Buys
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {equipment.map((item) => (
              <div key={item.item} className="bg-gray-900 border border-gray-800 rounded-lg p-4 flex items-start gap-3">
                <FaCheck className="text-yellow-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold">{item.item}</p>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6 text-center">
            <p className="text-yellow-400 font-bold text-lg mb-1">Budget Transparency</p>
            <p className="text-gray-300">
              $50,000 equipment + $15,000 buildout (flooring, platforms, deposits). Every dollar is tracked. Updates go to founding members first.
            </p>
          </div>
        </div>
      </section>

      {/* ── Timeline ────────────────────────────────────────────────────── */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-yellow-400 mb-10 text-center">The Roadmap</h2>
          <div className="space-y-4">
            {timeline.map((step, i) => (
              <div
                key={step.phase}
                className={`flex items-start gap-4 p-5 rounded-xl border ${
                  step.status === 'active'
                    ? 'bg-yellow-500/10 border-yellow-500/40'
                    : 'bg-gray-900 border-gray-800'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm ${
                    step.status === 'active'
                      ? 'bg-yellow-500 text-gray-900'
                      : 'bg-gray-800 text-gray-400'
                  }`}
                >
                  {i + 1}
                </div>
                <div>
                  <p className={`font-bold ${step.status === 'active' ? 'text-yellow-400' : 'text-white'}`}>
                    {step.phase}
                    {step.status === 'active' && <span className="ml-2 text-xs text-yellow-500 uppercase tracking-wider">← We are here</span>}
                  </p>
                  <p className="text-gray-400 text-sm mt-1">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-black">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-center">Common Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: "What if the campaign doesn't hit $65K?",
                a: "Founding members will be contacted directly. We'll either refund in full or, if we're close, discuss how to bridge the gap. Full transparency, no games.",
              },
              {
                q: "Where will the gym be located?",
                a: "Toledo, Ohio. Exact location is in negotiation — founding members get location updates before public announcements.",
              },
              {
                q: "I'm a beginner. Is this gym for me?",
                a: "Yes. Chi-Rho is built for people who want to get strong — beginners included. Coaches on staff, no judgment culture. The opposite of a globo-gym.",
              },
              {
                q: "What's the Chi-Rho Lifts app?",
                a: "Chi-Rho Lifts is the training app built for this gym: log every set, track your progress and nutrition, and train from the program your coach builds. It's included with every membership, coaching plan, and class.",
              },
              {
                q: "Is my founding monthly rate really locked forever?",
                a: "Your founding rate is locked for the first year. After that, you'll be protected from any price increases with 90-day advance notice.",
              },
              {
                q: "Can I get a refund if something falls through?",
                a: "If the gym doesn't open within 18 months, founding members receive full refunds. One-time tiers (Community Supporter, Supporter Plus) are non-refundable contributions to the mission.",
              },
            ].map((faq) => (
              <div key={faq.q} className="bg-gray-900 border border-gray-800 rounded-lg p-5">
                <p className="font-semibold text-white mb-2">{faq.q}</p>
                <p className="text-gray-400 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ───────────────────────────────────────────────────── */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            This Gym Gets Built With You
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6" />
          <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
            Every founding member is an investor in this community. Your name on the wall. Your barbell in the rack. Your gym.
          </p>
          <a
            href="#tiers"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 px-10 rounded-lg transition duration-200 shadow-lg hover:scale-105 transform text-lg"
          >
            Become a Founding Member
          </a>
          <p className="text-gray-500 text-sm mt-4">
            Questions?{' '}
            <a href="mailto:chirhostrength@gmail.com" className="text-yellow-400 hover:underline">
              chirhostrength@gmail.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}