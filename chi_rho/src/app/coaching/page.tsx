'use client';

import React from 'react';
import Link from 'next/link';
import { FaCheck, FaDumbbell, FaHeartbeat, FaChartLine, FaUsers, FaArrowRight } from 'react-icons/fa';

export default function CoachingPage() {
  const packages = [
    {
      name: 'Strength Coaching',
      price: '$250',
      period: '/month',
      tagline: 'Most Popular',
      description:
        'Comprehensive, hands-on online coaching for men who are serious about getting stronger and building a body that performs. Weekly check-ins, form review, and programming that adapts to your life — whether your goal is chasing PRs or losing significant weight while preserving muscle.',
      features: [
        'Custom training program based on detailed assessment',
        'Your program and meal plan in the Chi-Rho Lifts app (included free)',
        'Weekly check-ins in the Chi-Rho Lifts app',
        'Form check video analysis (up to 3/week)',
        'Program adjustments based on performance data',
        'Direct messaging in the Chi-Rho Lifts app (24-hour response time)',
        'Bi-weekly accountability calls (15 minutes)',
        'Nutrition framework — strength-focused or fat-loss focused',
      ],
      bestFor: [
        'Men who want real accountability and coaching',
        'Intermediate lifters who\'ve plateaued on generic programs',
        'Men with significant weight to lose who want to preserve muscle',
        'Guys balancing training with demanding careers and family',
      ],
      cta: 'Apply Now',
      href: '/contact?service=strength-coaching',
      popular: true,
      color: 'border-yellow-500',
    },
    {
      name: 'Elite Performance Coaching',
      price: '$500',
      period: '/month',
      tagline: 'All-In',
      description:
        'White-glove service for competitive lifters pursuing elite strength. Limited to 5 clients at any time.',
      features: [
        'Everything in Strength Coaching, PLUS:',
        'Bi-weekly video coaching calls (30 minutes)',
        'Unlimited form check reviews (48-hour turnaround)',
        'Daily messaging access in the Chi-Rho Lifts app',
        'Comprehensive nutrition coaching',
        'Competition prep and attempt selection',
        'Quarterly in-depth program design sessions',
        'Priority support - same-day responses',
      ],
      bestFor: [
        'Men who want maximum results with maximum support',
        'Competitive powerlifters or aspiring competitors',
        'Executives and professionals who value premium service',
      ],
      cta: 'Apply Now',
      href: '/contact?service=elite',
      popular: false,
      color: 'border-gray-700',
    },
  ];

  const whyChiRho = [
    {
      icon: <FaDumbbell className="w-8 h-8 text-yellow-500" />,
      title: '10+ Years Under the Bar',
      description:
        'Not theory from a textbook. 480-pound squat. 480-pound deadlift. A decade of figuring out what actually works and what\'s just noise.',
    },
    {
      icon: <FaChartLine className="w-8 h-8 text-yellow-500" />,
      title: 'Systems That Work',
      description:
        'Auto-regulated periodization refined over 5 years. Programming that adapts to your life, not the other way around. No cookie-cutter templates.',
    },
    {
      icon: <FaHeartbeat className="w-8 h-8 text-yellow-500" />,
      title: 'Training That Fits Your Health',
      description:
        'Coming back from an injury, managing a condition, or on a prescribed medication? I build your training around where you are. Medical decisions stay with your doctor.',
    },
    {
      icon: <FaUsers className="w-8 h-8 text-yellow-500" />,
      title: 'Built for Real Men',
      description:
        'Dads. Shift workers. Desk jockeys. Guys who\'ve let it slide for too long. This isn\'t Instagram fitness—it\'s coaching for men with real lives.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-950"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(234,179,8,0.15) 0%, transparent 50%)' }}></div>
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-yellow-500 font-semibold tracking-widest uppercase text-sm mb-4">
            Chi-Rho Power & Strength
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Stop Guessing.<br />
            <span className="text-yellow-500">Start Getting Stronger.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-4">
            Evidence-based strength coaching for men who are done with excuses, gimmicks, and programs that don't work.
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10">
            Whether you're picking up a barbell for the first time, getting back in shape after years away, or chasing serious strength—there's a place for you here. No judgment. Just work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#packages"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 px-8 rounded-lg transition duration-200 shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              See Coaching Packages
            </Link>
            <Link
              href="/contact?service=discovery-call"
              className="inline-block bg-transparent border-2 border-yellow-500 hover:bg-yellow-500 hover:text-gray-900 text-yellow-500 font-bold py-4 px-8 rounded-lg transition duration-200"
            >
              Free Discovery Call
            </Link>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-16 md:py-20 bg-gray-900/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            This Is For <span className="text-yellow-500">You</span> If...
          </h2>
          <div className="w-16 h-1 bg-yellow-500 mx-auto mb-12"></div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'You\'re tired of spinning your wheels with random YouTube workouts',
              'You\'ve got 30, 50, or 100+ pounds to lose and don\'t know where to start',
              'You used to be strong but life got in the way—kids, career, injuries',
              'You\'re under a doctor\'s care and want training that works alongside it',
              'You want to build real strength, not just "tone up"',
              'You need someone to hold you accountable because willpower alone isn\'t cutting it',
              'You\'re a beginner who wants to learn the barbell lifts the right way',
              'You\'re an intermediate lifter who\'s been stuck at the same numbers for months',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-gray-900/80 p-4 rounded-lg border border-gray-800">
                <FaCheck className="text-yellow-500 mt-1 flex-shrink-0" />
                <p className="text-gray-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Chi-Rho */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Why <span className="text-yellow-500">Chi-Rho</span>?
          </h2>
          <div className="w-16 h-1 bg-yellow-500 mx-auto mb-12"></div>
          <div className="grid md:grid-cols-2 gap-8">
            {whyChiRho.map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 mt-1">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coaching Packages */}
      <section id="packages" className="py-16 md:py-20 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Online Coaching <span className="text-yellow-500">Packages</span>
          </h2>
          <div className="w-16 h-1 bg-yellow-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Every package includes evidence-based programming built on the same auto-regulated periodization system from <em>Shut Up and Lift</em>. Pick the level of support that fits your life.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {packages.map((pkg, i) => (
              <div
                key={i}
                className={`relative bg-gray-900 rounded-xl border-2 ${pkg.color} p-6 md:p-8 flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/5`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-500 text-gray-900 text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white">{pkg.name}</h3>
                  <p className="text-sm text-yellow-500 font-semibold uppercase tracking-wide mt-1">
                    {pkg.tagline}
                  </p>
                </div>
                <div className="mb-4">
                  <span className="text-4xl font-extrabold text-white">{pkg.price}</span>
                  <span className="text-gray-400">{pkg.period}</span>
                </div>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed">{pkg.description}</p>

                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    What&apos;s Included
                  </p>
                  <ul className="space-y-2">
                    {pkg.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-300">
                        <FaCheck className="text-yellow-500 mt-1 flex-shrink-0 text-xs" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    Best For
                  </p>
                  <ul className="space-y-2">
                    {pkg.bestFor.map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-400">
                        <FaArrowRight className="text-yellow-500/60 mt-1 flex-shrink-0 text-xs" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                  <Link
                    href={pkg.href}
                    className={`block text-center font-bold py-3 px-6 rounded-lg transition duration-200 ${
                      pkg.popular
                        ? 'bg-yellow-500 hover:bg-yellow-600 text-gray-900'
                        : 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700'
                    }`}
                  >
                    {pkg.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Ways to Train */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Other Ways to <span className="text-yellow-500">Train</span>
          </h2>
          <div className="w-16 h-1 bg-yellow-500 mx-auto mb-12"></div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-1">In-Person Coaching</h3>
              <p className="text-3xl font-extrabold text-yellow-500 mb-3">$1,150<span className="text-base font-normal text-gray-400">/month</span></p>
              <p className="text-gray-400 text-sm mb-4">
                Side-by-side coaching in the gym, 3 sessions a week for 47 weeks a year. Real-time technique corrections every rep — Toledo, OH.
              </p>
              <Link
                href="/coaching/in-person"
                className="text-yellow-500 hover:text-yellow-400 text-sm font-semibold"
              >
                Learn More →
              </Link>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-1">Group Classes</h3>
              <p className="text-3xl font-extrabold text-yellow-500 mb-3">$300<span className="text-base font-normal text-gray-400">/month</span></p>
              <p className="text-gray-400 text-sm mb-4">
                Coached barbell training in small groups, built for men and women over 50. Single-gender classes, capped at 12 people.
              </p>
              <Link
                href="/coaching/group-classes"
                className="text-yellow-500 hover:text-yellow-400 text-sm font-semibold"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="py-16 md:py-20 bg-gray-900/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Additional <span className="text-yellow-500">Services</span>
          </h2>
          <div className="w-16 h-1 bg-yellow-500 mx-auto mb-12"></div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-900 border border-yellow-500/40 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-2">Program Design Consultation</h3>
              <p className="text-2xl font-bold text-yellow-500 mb-3">$100</p>
              <p className="text-gray-400 text-sm mb-4">
                One consultation, then a custom program built for you — your choice of 8, 12, or 16 weeks. For the DIY lifter who wants expert programming without ongoing coaching.
              </p>
              <Link
                href="/contact?service=consultation-program"
                className="text-yellow-500 hover:text-yellow-400 text-sm font-semibold"
              >
                Learn More →
              </Link>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-2">Technique Audit</h3>
              <p className="text-2xl font-bold text-yellow-500 mb-3">$97</p>
              <p className="text-gray-400 text-sm mb-4">
                Submit videos of your squat, bench, and deadlift. Get a detailed written analysis with specific corrections and drill recommendations. Follow-up review included.
              </p>
              <Link
                href="/contact?service=technique-audit"
                className="text-yellow-500 hover:text-yellow-400 text-sm font-semibold"
              >
                Learn More →
              </Link>
            </div>
            {/* <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-2">Competition Prep</h3>
              <p className="text-2xl font-bold text-yellow-500 mb-3">$597</p>
              <p className="text-gray-400 text-sm mb-4">
                8-week peaking protocol with attempt selection, weight cut management (if needed), and day-of support. For lifters with an upcoming powerlifting meet.
              </p>
              <Link
                href="/contact?service=comp-prep"
                className="text-yellow-500 hover:text-yellow-400 text-sm font-semibold"
              >
                Learn More →
              </Link>
            </div> */}
          </div>
        </div>
      </section>

      {/* Gym Discount Callout */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-yellow-500/10 to-transparent border-y border-yellow-500/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-2">Train at Chi-Rho Barbell Club?</h3>
            <p className="text-gray-300">
              Coaching clients who train at the gym get <span className="text-yellow-500 font-bold">$25/month deducted</span> from their coaching rate. In-person coaching clients get gym access included.
            </p>
          </div>
          <Link
            href="/gym"
            className="flex-shrink-0 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 rounded-lg transition duration-200"
          >
            Learn About the Gym →
          </Link>
        </div>
      </section>

      {/* Chi-Rho Lifts App Callout */}
      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center gap-6 bg-gray-900 border border-gray-800 rounded-xl p-6 md:p-8">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-2">Your Program Lives in Chi-Rho Lifts</h3>
            <p className="text-gray-300">
              Every coaching client gets the Chi-Rho Lifts app free. I program your workouts and your meals in it. You check off each set and meal, adjust weight and RPE as you go, and I see what you planned next to what you actually did, every week. Available on web and mobile.
            </p>
          </div>
          <a
            href="https://chirholifts.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-6 rounded-lg transition duration-200"
          >
            See Chi-Rho Lifts →
          </a>
        </div>
      </section>

      {/* Specials */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="text-yellow-500">Deals</span> & Discounts
          </h2>
          <div className="w-16 h-1 bg-yellow-500 mx-auto mb-12"></div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 text-center">
              <p className="text-yellow-500 font-bold text-lg mb-2">Book Buyer Discount</p>
              <p className="text-gray-300 text-sm">
                Show proof of <em>Shut Up and Lift</em> purchase → <strong>15% off your first month</strong> of any coaching package.
              </p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 text-center">
              <p className="text-yellow-500 font-bold text-lg mb-2">Referral Bonus</p>
              <p className="text-gray-300 text-sm">
                Refer someone who signs up → <strong>$50 credit</strong> toward your next month. They get <strong>$25 off</strong> their first month.
              </p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 text-center">
              <p className="text-yellow-500 font-bold text-lg mb-2">Multi-Month Discount</p>
              <p className="text-gray-300 text-sm">
                3 months upfront: <strong>5% off</strong>. 6 months: <strong>10% off</strong>. 12 months: <strong>15% off</strong>. Online coaching only.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Common <span className="text-yellow-500">Questions</span>
          </h2>
          <div className="w-16 h-1 bg-yellow-500 mx-auto mb-12"></div>
          <div className="space-y-4">
            {[
              {
                q: "I'm not an athlete. Is this for me?",
                a: "Most of my clients aren't athletes. They're regular guys—dads, professionals, shift workers—who want to get stronger, lose weight, and feel better. You don't need to be competitive or have any experience. You just need to be willing to show up and do the work.",
              },
              {
                q: 'What if I\'ve never touched a barbell?',
                a: "Good. You don't have bad habits to unlearn. Every client starts with an assessment, and your program is built around where you actually are—not where I think you should be. If you're brand new and local, in-person coaching is the fastest way to learn the lifts right; if you're remote, Strength Coaching works too.",
              },
              {
                q: 'I need to lose weight first, then I\'ll start lifting.',
                a: "That's backwards, and it's the number one reason guys fail. Strength training while losing weight preserves muscle, keeps your metabolism healthy, and gives you something productive to focus on besides the scale. Strength Coaching is built to flex toward a fat-loss and health focus, not just chasing PRs.",
              },
              {
                q: "I'm on a prescribed medication (like TRT or a GLP-1). Can you work with that?",
                a: "Yes, I coach lifters on prescribed medications. I'm not a doctor and I don't give medical advice: questions about your medication, dosing, or labs belong with your physician. My job is your training, and I'll program around whatever your doctor has you doing.",
              },
              {
                q: 'What\'s the difference between Strength Coaching and the Program Design Consultation?',
                a: "Strength Coaching ($250/mo) is an ongoing relationship — weekly check-ins, form reviews, and a program that adapts as you go. The Program Design Consultation ($100 one-time) is for the DIY lifter who just wants an expert-built 8, 12, or 16-week program and doesn't want ongoing coaching.",
              },
              {
                q: 'How long before I see results?',
                a: "If you follow the program: you'll feel different in 2-3 weeks, look different in 6-8 weeks, and other people will notice in 12 weeks. Strength gains start showing up almost immediately for beginners. This isn't a quick fix—it's a permanent upgrade.",
              },
            ].map((faq, i) => (
              <div key={i} className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Ready to <span className="text-yellow-500">Shut Up and Lift</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            No gimmicks. No BS. Just honest coaching that gets results. Let's talk about your goals and find the right fit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact?service=discovery-call"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 px-10 rounded-lg transition duration-200 shadow-lg hover:shadow-xl hover:scale-105 transform text-lg"
            >
              Schedule a Free Discovery Call
            </Link>
          </div>
          <p className="text-gray-500 text-sm mt-6">
            No pressure. No hard sell. Let's just talk about your goals and see if I can help.
          </p>
        </div>
      </section>
    </div>
  );
}