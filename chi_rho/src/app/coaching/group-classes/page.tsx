'use client';

import React from 'react';
import Link from 'next/link';
import { FaCheck, FaUsers, FaMars, FaTrophy, FaCalendarAlt } from 'react-icons/fa';

export default function GroupClassTraining() {
  const classes = [
    {
      name: "Men's Morning Class (Mon/Wed/Fri)",
      days: 'Mon · Wed · Fri',
      icon: <FaMars className="w-6 h-6" />,
      gender: 'Male',
      ageGroup: '50+',
      spotsTotal: 12,
      spotsLeft: 5,
      description: 'Barbell-focused strength training built around what men over 50 actually need — joint-friendly loading, controlled progression, and real strength gains.',
    },
    {
      name: "Men's Evening Class (Mon/Wed/Fri)",
      days: 'Mon · Wed · Fri',
      icon: <FaMars className="w-6 h-6" />,
      gender: 'Male',
      ageGroup: '50+',
      spotsTotal: 12,
      spotsLeft: 5,
      description: 'Same no-nonsense programming as the morning class, just a later time slot for working men who train after hours.',
    },
    {
      name: "Men's Morning Class (Tue/Thu/Sat)",
      days: 'Tue · Thu · Sat',
      icon: <FaMars className="w-6 h-6" />,
      gender: 'Male',
      ageGroup: '50+',
      spotsTotal: 12,
      spotsLeft: 5,
      description: 'The same barbell-focused programming on a Tuesday, Thursday and Saturday schedule.',
    },
    {
      name: "Men's Evening Class (Tue/Thu/Sat)",
      days: 'Tue · Thu · Sat',
      icon: <FaMars className="w-6 h-6" />,
      gender: 'Male',
      ageGroup: '50+',
      spotsTotal: 12,
      spotsLeft: 5,
      description: 'Evening sessions on a Tuesday, Thursday and Saturday schedule for men who train after work.',
    },
  ];

  const whyItWorks = [
    {
      title: 'Built for 50+',
      description: 'Programming accounts for recovery, joint health, and hormonal changes. You train hard — just intelligently.',
    },
    {
      title: 'Small Groups Only',
      description: 'Classes cap at 12. You get coached, not just counted. Minimum of 5 to launch, so every class is tight-knit by design.',
    },
    {
      title: 'Same Methodology',
      description: 'The "Shut Up and Lift" principles apply here. Progressive overload. Compound movements. Consistency over complexity.',
    },
    {
      title: 'Built for Men Over 50',
      description: 'Every class is men only, coached around the recovery, joint health and goals of this stage of life.',
    },
  ];

  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-500/10 rounded-full mb-6">
            <FaUsers className="w-10 h-10 text-yellow-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
            Group Strength Classes
          </h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            Coached barbell training in small groups. Built specifically for men over 50 who are done sitting on the sidelines.
          </p>
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-5 py-2">
            <FaUsers className="text-yellow-500 w-4 h-4" />
            <span className="text-yellow-400 text-sm font-semibold">Minimum 5 to launch a class — spots are limited</span>
          </div>
        </div>

        {/* Pricing Card */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="bg-gray-900 rounded-xl overflow-hidden border-2 border-yellow-500">
            <div className="p-8 border-b border-gray-800 text-center">
              <p className="text-yellow-400 text-sm font-semibold uppercase tracking-widest mb-3">One Price. Two Options.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-8">
                <div>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold text-yellow-500">$300</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                  <p className="text-gray-400 text-sm mt-1">Month-to-month</p>
                </div>
                <div className="hidden sm:block w-px bg-gray-700"></div>
                <div>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold text-yellow-500">$3,600</span>
                    <span className="text-gray-400">/year</span>
                  </div>
                  <p className="text-yellow-400 text-sm mt-1 font-semibold">Pay upfront — Founding Member</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              {/* Founding Member Callout */}
              <div className="bg-yellow-500/10 border border-yellow-500/40 rounded-xl p-6 mb-6">
                <div className="flex items-start gap-3">
                  <FaTrophy className="text-yellow-500 w-6 h-6 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-yellow-400 font-bold text-lg mb-2">Founding Member Benefit</p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Pay a full year upfront and you become a Founding Member of Chi-Rho Barbell Club. Complete your first year of training (47 weeks) and you earn <strong className="text-white">lifetime gym access</strong> — no monthly membership fee, ever.
                      <p className="text-gray-400 text-xs mt-2">*Limited time offer.</p>
                    </p>
                    <p className="text-gray-400 text-xs mt-2">47 weeks of training scheduled across 52 weeks — built-in holidays and planned recovery time.</p>
                  </div>
                </div>
              </div>

              <h4 className="font-semibold text-white mb-4 text-sm">Every Class Includes:</h4>
              <ul className="space-y-3 mb-6">
                {[
                  'Coached group sessions with hands-on technique work',
                  'Custom group programming updated monthly',
                  'Progressive overload tracked every session',
                  'Warm-up and cool-down protocols for 50+ recovery',
                  'Access to class notes and workout log',
                  'Direct messaging support between sessions',
                ].map((feature, i) => (
                  <li key={i} className="flex items-start text-sm">
                    <FaCheck className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact?service=group-class"
                className="block w-full text-center bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 px-6 rounded-lg transition duration-200"
              >
                Reserve Your Spot
              </Link>
              <p className="text-center text-gray-500 text-xs mt-3">
                Classes launch once 5 members are confirmed. Reserve now to lock in your spot.
              </p>
            </div>
          </div>
        </div>

        {/* The 4 Classes */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-yellow-400 mb-4">The 4 Classes</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-4"></div>
          <p className="text-center text-gray-400 text-sm mb-12 max-w-xl mx-auto">
            Four classes for men over 50: two on Monday, Wednesday and Friday, two on Tuesday, Thursday and Saturday. Pick the one that fits your schedule.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {classes.map((cls, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-yellow-500/40 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border ${
                      cls.gender === 'Male'
                        ? 'bg-blue-500/10 border-blue-500/30 text-blue-400'
                        : 'bg-pink-500/10 border-pink-500/30 text-pink-400'
                    }`}>
                      {cls.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{cls.name}</h3>
                      <p className="text-xs text-gray-500">{cls.days} · Ages {cls.ageGroup} · Max {cls.spotsTotal} per class</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-yellow-500 font-bold text-sm">{cls.spotsLeft} spots left</p>
                    <div className="w-24 bg-gray-800 rounded-full h-1.5 mt-1">
                      <div
                        className="bg-yellow-500 h-1.5 rounded-full"
                        style={{ width: `${((cls.spotsTotal - cls.spotsLeft) / cls.spotsTotal) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{cls.description}</p>
                <Link
                  href={`/contact?service=group-class&class=${cls.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block w-full text-center bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2.5 px-4 rounded-lg transition duration-200 text-sm"
                >
                  Reserve a Spot
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Why It Works */}
        <div className="bg-gray-900/80 rounded-xl p-8 mb-16 border border-yellow-500/20">
          <h2 className="text-3xl font-bold text-center text-yellow-400 mb-4">Why This Works for 50+</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-10"></div>
          <div className="grid md:grid-cols-2 gap-8">
            {whyItWorks.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-8 h-8 bg-yellow-500/10 border border-yellow-500/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FaCheck className="w-3 h-3 text-yellow-500" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Founding Member Timeline */}
        <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-500/5 rounded-xl p-8 mb-16 border border-yellow-500/20">
          <div className="flex items-center gap-3 mb-6">
            <FaTrophy className="text-yellow-500 w-7 h-7" />
            <h2 className="text-2xl font-bold text-yellow-400">How the Founding Member Path Works</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-black/30 rounded-lg p-5 border border-yellow-500/20">
              <div className="text-3xl font-bold text-yellow-500 mb-2">Step 1</div>
              <h3 className="text-white font-bold mb-2">Pay Upfront</h3>
              <p className="text-gray-400 text-sm">Pay $3,600 for the full year. You're locked in as a Founding Member of Chi-Rho Barbell Club from day one.</p>
            </div>
            <div className="bg-black/30 rounded-lg p-5 border border-yellow-500/20">
              <div className="text-3xl font-bold text-yellow-500 mb-2">Step 2</div>
              <h3 className="text-white font-bold mb-2">Complete 47 Weeks</h3>
              <p className="text-gray-400 text-sm">Show up and do the work across 47 training weeks scheduled over the year. Holidays and planned breaks are built in.</p>
            </div>
            <div className="bg-black/30 rounded-lg p-5 border border-yellow-500/20">
              <div className="text-3xl font-bold text-yellow-500 mb-2">Step 3</div>
              <h3 className="text-white font-bold mb-2">Lifetime Gym Access</h3>
              <p className="text-gray-400 text-sm">Complete your year and you earn free lifetime membership to Chi-Rho Barbell Club. No monthly fee. Ever.</p>
            </div>
          </div>
          <div className="mt-6 bg-black/20 rounded-lg p-4 flex items-start gap-3">
            <FaCalendarAlt className="text-yellow-500 w-4 h-4 flex-shrink-0 mt-0.5" />
            <p className="text-gray-300 text-sm">
              <strong className="text-white">Why 47 weeks?</strong> Training runs 47 weeks out of 52. The remaining 5 weeks account for major holidays and scheduled summer time off. Your monthly rate reflects a consistent year-round coaching relationship — you're not paying for weeks you don't train.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center text-yellow-400 mb-4">Common Questions</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-10"></div>
          <div className="space-y-4">
            {[
              {
                q: 'What if a class doesn\'t reach 5 people?',
                a: 'The class doesn\'t launch until 5 members confirm. If you\'ve paid upfront and we don\'t hit 5, you get a full refund or can transfer to another class.',
              },
              {
                q: 'Do I need prior training experience?',
                a: 'No. These classes are designed for people who may be coming back to fitness or starting fresh. We teach the movements from scratch and progress at a pace that makes sense for you.',
              },
              {
                q: 'Do you offer classes for women?',
                a: 'Not yet. Group classes are for men over 50 for now. Women are welcome in 1-on-1 coaching, online or in person.',
              },
              {
                q: 'Can I switch classes if my schedule changes?',
                a: 'Yes, as long as there\'s space in another class. Just reach out and we\'ll make it work.',
              },
              {
                q: 'What if I miss classes?',
                a: 'Life happens. Your monthly rate covers your membership, not individual sessions. Consistent attendance is what drives results, but missing a week here and there won\'t derail your progress.',
              },
              {
                q: 'Is the lifetime gym access really free after one year?',
                a: 'Yes — if you pay the full year upfront and complete 47 weeks of training, you earn lifetime access to Chi-Rho Barbell Club at no additional cost. That\'s the founding member deal.',
              },
            ].map((faq, i) => (
              <div key={i} className="bg-gray-900/50 p-6 rounded-lg border border-yellow-500/10 hover:border-yellow-500/30 transition-colors">
                <h3 className="text-lg font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-gray-300 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-gray-900 to-black rounded-xl p-8 md:p-12 text-center border border-yellow-500/20">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Train with People Who Get It?</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Classes are small by design. Reserve your spot now — a class launches the moment 5 members are confirmed.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="/contact?service=group-class"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 px-8 rounded-lg transition duration-200 shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              Reserve Your Spot
            </Link>
            <Link
              href="/contact?service=discovery-call"
              className="inline-block bg-transparent border-2 border-yellow-500 hover:bg-yellow-500 hover:text-gray-900 text-yellow-500 font-bold py-4 px-8 rounded-lg transition duration-200"
            >
              Schedule a Free Discovery Call
            </Link>
          </div>
          <p className="text-gray-400 text-sm mt-6">
            Questions? No pressure. Let's talk about which class is the right fit.
          </p>
        </div>

      </div>
    </div>
  );
}