'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaCheck, FaMapMarkerAlt, FaVideo, FaChartLine, FaComments, FaDumbbell } from 'react-icons/fa';

export default function InPersonCoaching() {
  const packages = [
    {
      name: 'In-Person Coaching',
      price: '$1,150',
      period: '/month',
      tagline: 'Full-Time Coaching',
      description: '3 coached sessions a week, 47 weeks a year. Full-time commitment for lifters who are all-in on getting as strong as possible.',
      features: [
        'Three 60-minute coached sessions per week',
        '47 weeks of training scheduled across 52 weeks — holidays and planned recovery built in',
        'Fully periodized custom programming updated in real time',
        'Every session coached — no guesswork, no wasted reps',
        'Weekly program adjustments based on how you\'re performing',
        'Priority messaging in the Chi-Rho Lifts app — same-day responses',
        'Comprehensive nutrition framework',
        'Quarterly deep-dive programming design sessions',
      ],
      bestFor: [
        'Dedicated lifters with serious strength goals',
        'Those who want maximum coaching contact',
        'Lifters ready to make strength their top priority'
      ],
      guarantee: 'See measurable strength gains in the first 8 weeks',
      bonus: 'Free copy of "Shut Up and Lift" + training journal',
      cta: 'Apply Now',
      href: '/contact?service=inperson',
      popular: false
    }
  ];

  const howItWorks = [
    {
      step: '1',
      title: 'Apply',
      description: 'Fill out a short application with your training history, goals, and availability.',
      icon: <FaComments className="w-8 h-8" />
    },
    {
      step: '2',
      title: 'Consultation Call',
      description: "We'll do a quick 20-minute call to make sure we're a good fit and answer your questions.",
      icon: <FaVideo className="w-8 h-8" />
    },
    {
      step: '3',
      title: 'Assessment Session',
      description: 'Your first session is a full movement and strength assessment. We find your baselines and build from there.',
      icon: <FaChartLine className="w-8 h-8" />
    },
    {
      step: '4',
      title: 'Train & Progress',
      description: 'Show up, execute the program, and let the coaching take care of the details.',
      icon: <FaDumbbell className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-500/10 rounded-full mb-6">
            <FaMapMarkerAlt className="w-10 h-10 text-yellow-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
            In-Person Strength Coaching
          </h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Side-by-side coaching in the gym. Real-time feedback, hands-on technique work, and programming built around you — not a template.
          </p>
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-5 py-2">
            <FaMapMarkerAlt className="text-yellow-500 w-4 h-4" />
            <span className="text-yellow-400 text-sm font-semibold">Toledo, OH — Limited Spots Available</span>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">Why In-Person Coaching?</h2>
            <ul className="space-y-4">
              {[
                'Real-time technique corrections every single rep',
                'No second-guessing — I\'m right there with you',
                'Accountability that an app or text can\'t replicate',
                'Learn to train with intention, not just go through the motions',
                'Build a foundation that lasts a lifetime - I want you to be independent by the end of a year'
              ].map((benefit, i) => (
                <li key={i} className="flex items-start">
                  <FaCheck className="w-5 h-5 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/assets/images/jakub-zerdzicki-2MbXuj8PDrA-unsplash.jpg"
              alt="In-person coaching session"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Packages */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-yellow-400 mb-4">
            One Package. All In.
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-4"></div>
          <p className="text-center text-gray-400 text-sm mb-12 max-w-xl mx-auto">
            Billed monthly at a flat rate. Training runs 47 weeks out of 52 — the remaining 5 account for major holidays and scheduled time off, so your rate reflects a consistent year-round coaching relationship, not individual sessions.
          </p>

          <div className="grid gap-8 max-w-md mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-xl overflow-hidden border-2 border-yellow-500 relative"
              >
                <div className="p-6 border-b border-gray-800">
                  <h3 className="text-2xl font-bold text-white mb-1">{pkg.name}</h3>
                  <p className="text-yellow-400 text-sm mb-4">{pkg.tagline}</p>
                  <div className="flex items-baseline mb-2">
                    <span className="text-4xl font-bold text-yellow-500">{pkg.price}</span>
                    <span className="text-gray-400 ml-2">{pkg.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{pkg.description}</p>
                </div>

                <div className="p-6">
                  <h4 className="font-semibold text-white mb-4 text-sm">What's Included:</h4>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <FaCheck className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <h4 className="font-semibold text-white mb-3 text-sm">Best For:</h4>
                  <ul className="space-y-2 mb-6">
                    {pkg.bestFor.map((item, i) => (
                      <li key={i} className="text-gray-400 text-sm">• {item}</li>
                    ))}
                  </ul>

                  {pkg.guarantee && (
                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3 mb-4">
                      <p className="text-yellow-400 text-xs font-semibold">✓ GUARANTEE</p>
                      <p className="text-gray-300 text-sm">{pkg.guarantee}</p>
                    </div>
                  )}

                  {pkg.bonus && (
                    <div className="bg-gray-800/50 rounded-lg p-3 mb-4">
                      <p className="text-yellow-400 text-xs font-semibold">🎁 BONUS</p>
                      <p className="text-gray-300 text-sm">{pkg.bonus}</p>
                    </div>
                  )}

                  <Link
                    href={pkg.href}
                    className="block w-full text-center font-bold py-3 px-6 rounded-lg transition duration-200 bg-yellow-500 hover:bg-yellow-600 text-gray-900"
                  >
                    {pkg.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-gray-900/80 rounded-xl p-8 mb-16 border border-yellow-500/20">
          <h2 className="text-3xl font-bold text-center text-yellow-400 mb-4">How It Works</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-12"></div>
          <div className="grid md:grid-cols-4 gap-8">
            {howItWorks.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center text-yellow-500 mx-auto mb-4 border border-yellow-500/30">
                  {item.icon}
                </div>
                <div className="text-2xl font-bold text-yellow-400 mb-2">{item.step}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Special Offers */}
        <div className="bg-gradient-to-r from-yellow-500/10 to-yellow-500/5 rounded-xl p-8 mb-16 border border-yellow-500/20">
          <h2 className="text-2xl font-bold text-yellow-400 mb-6 text-center">Special Offers</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-black/50 p-6 rounded-lg border border-gray-800">
              <p className="text-yellow-400 font-semibold mb-2">📚 Book Buyer Discount</p>
              <p className="text-gray-300 text-sm">Bought "Shut Up and Lift"? Get 15% off your first month of coaching.</p>
            </div>
            <div className="bg-black/50 p-6 rounded-lg border border-gray-800">
              <p className="text-yellow-400 font-semibold mb-2">🤝 Referral Bonus</p>
              <p className="text-gray-300 text-sm">Refer a friend who signs up → $50 credit. They get $25 off their first month.</p>
            </div>
            <div className="bg-black/50 p-6 rounded-lg border border-gray-800">
              <p className="text-yellow-400 font-semibold mb-2">💰 Multi-Month Discount</p>
              <p className="text-gray-300 text-sm">Pay upfront: 3mo = 5% off | 6mo = 10% off | 12mo = 15% off</p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center text-yellow-400 mb-4">Common Questions</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-12"></div>
          <div className="space-y-4">
            {[
              {
                question: 'Where do sessions take place?',
                answer: 'Sessions are held in Toledo, OH. Exact location provided after your consultation call. You need access to a barbell, rack, and plates — we\'ll confirm the setup before your first session.'
              },
              {
                question: 'Do I need experience to train with you?',
                answer: 'Some basic familiarity with barbell movements is helpful, but not required. If you\'re a true beginner, we\'ll start with the fundamentals and build from the ground up. Just be ready to show up and put in the work.'
              },
              {
                question: 'What happens if I need to miss a session?',
                answer: 'Life happens — especially for working men and fathers. Give me a heads up and we\'ll reschedule when possible. The monthly rate covers your ongoing coaching relationship, not just individual sessions.'
              },
              {
                question: 'Can I add online coaching support between sessions?',
                answer: 'Priority messaging between sessions is already included. If you want more structured programming for the days you\'re not in the gym with me, we can discuss it on your consultation call.'
              },
              {
                question: 'Can I cancel anytime?',
                answer: 'Yes. First month is risk-free with a full refund if not satisfied. After that, it\'s month-to-month with 30 days notice to cancel. No long-term contracts.'
              },
              {
                question: 'How quickly will I see results?',
                answer: 'Most clients hit their first noticeable PRs within 4–6 weeks of consistent training.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-900/50 p-6 rounded-lg border border-yellow-500/10 hover:border-yellow-500/30 transition-colors">
                <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                <p className="text-gray-300 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/coaching"
              className="text-yellow-400 hover:text-yellow-300 font-semibold"
            >
              ← Back to All Coaching Options
            </Link>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-gray-900 to-black rounded-xl p-8 md:p-12 text-center border border-yellow-500/20">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Train?</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            In-person spots are limited. Apply now and let's see if we're a good fit.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="/contact"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 px-8 rounded-lg transition duration-200 shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              Apply for In-Person Coaching
            </Link>
            <Link
              href="/contact?service=discovery-call"
              className="inline-block bg-transparent border-2 border-yellow-500 hover:bg-yellow-500 hover:text-gray-900 text-yellow-500 font-bold py-4 px-8 rounded-lg transition duration-200"
            >
              Schedule a Free Discovery Call
            </Link>
          </div>
          <p className="text-gray-400 text-sm mt-6">
            No pressure. No hard sell. Let's talk about your goals.
          </p>
        </div>

      </div>
    </div>
  );
}