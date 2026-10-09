'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaCheck, FaLaptop, FaVideo, FaChartLine, FaComments, FaDumbbell } from 'react-icons/fa';

export default function OnlineCoaching() {
  const packages = [
    {
      name: 'Strength Coaching',
      price: '$250',
      period: '/month',
      tagline: 'Most Popular',
      description: 'Comprehensive coaching for serious lifters chasing PRs — or for men who need to lose significant weight while preserving muscle.',
      features: [
        'Custom training program based on detailed assessment',
        'Your program and meal plan in the Chi-Rho Lifts app (included free)',
        'Weekly check-ins via discord',
        'Form check video analysis (up to 3/week)',
        'Program adjustments based on performance data',
        'Direct messaging support (24-hour response time)',
        'Bi-weekly accountability calls (15 minutes)',
        'Nutrition framework — strength-focused or fat-loss focused',
        'TRT and GLP-1 medication considerations if applicable'
      ],
      bestFor: [
        'Intermediate to advanced lifters chasing PRs',
        'Those preparing for powerlifting meets',
        'Men with significant weight to lose who want to preserve muscle',
        'Anyone who needs accountability and feedback'
      ],
      guarantee: 'See measurable strength gains in first 8 weeks',
      cta: 'Start Coaching',
      href: '/contact?service=strength-coaching',
      popular: true
    },
    {
      name: 'Elite Performance Coaching',
      price: '$500',
      period: '/month',
      tagline: 'Premium Service',
      description: 'White-glove service for competitive lifters pursuing elite strength.',
      features: [
        'Everything in Strength Coaching, PLUS:',
        'Bi-weekly video coaching calls (30 minutes)',
        'Unlimited form check reviews (48-hour turnaround)',
        'Daily messaging access via private channel',
        'Comprehensive nutrition coaching',
        'Competition prep and attempt selection',
        'Quarterly in-depth program design sessions',
        'Priority support - same-day responses'
      ],
      bestFor: [
        'Competitive powerlifters preparing for meets',
        'Advanced lifters pursuing elite totals',
        'High-performers who demand premium service'
      ],
      bonus: 'Free copy of "Shut Up and Lift" + training journal',
      cta: 'Apply Now',
      href: '/contact?service=elite',
      popular: false
    }
  ];

  const howItWorks = [
    {
      step: '1',
      title: 'Complete Application',
      description: 'Fill out the coaching application with your training history, goals, and current situation.',
      icon: <FaComments className="w-8 h-8" />
    },
    {
      step: '2',
      title: 'Discovery Call',
      description: `We'll schedule a 20-minute call to ensure we're a good fit and answer questions.`,
      icon: <FaVideo className="w-8 h-8" />
    },
    {
      step: '3',
      title: 'Assessment & Setup',
      description: 'Complete a detailed assessment, get free access to the Chi-Rho Lifts app, and receive your first program in it.',
      icon: <FaChartLine className="w-8 h-8" />
    },
    {
      step: '4',
      title: 'Start Training',
      description: 'Begin your program with ongoing support, form checks, and adjustments based on performance.',
      icon: <FaDumbbell className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-500/10 rounded-full mb-6">
            <FaLaptop className="w-10 h-10 text-yellow-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
            Online Strength Coaching
          </h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Expert strength programming and accountability from anywhere in the world. Train on your schedule with guidance from someone who actually understands what builds strength.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">Why Online Coaching Works</h2>
            <ul className="space-y-4">
              {[
                'Train anywhere - your gym, home, or on the road',
                'Programs built around your equipment and schedule',
                'Expert programming without the commute',
                'More affordable than in-person training',
                'Your program, meal plan, and progress in the Chi-Rho Lifts app',
                'Form checks via video analysis'
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
              alt="Online coaching session"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Packages */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-yellow-400 mb-4">
            Choose Your Package
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {packages.map((pkg, index) => (
              <div 
                key={index}
                className={`bg-gray-900 rounded-xl overflow-hidden border-2 ${
                  pkg.popular ? 'border-yellow-500' : 'border-gray-800'
                } hover:border-yellow-500/50 transition-all relative`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-yellow-500 text-gray-900 font-bold px-4 py-1 text-sm z-10">
                    MOST POPULAR
                  </div>
                )}
                
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
                    className={`block w-full text-center font-bold py-3 px-6 rounded-lg transition duration-200 ${
                      pkg.popular
                        ? 'bg-yellow-500 hover:bg-yellow-600 text-gray-900'
                        : 'bg-gray-800 hover:bg-gray-700 text-white'
                    }`}
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
              <p className="text-gray-300 text-sm">Refer a friend who signs up → $50 credit. They get $25 off.</p>
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
                question: 'What equipment do I need?',
                answer: `Strength Coaching works best with a barbell, rack, and plates. I can adapt for dumbbells, but barbell training produces better results. Elite clients: I'll work with whatever you have.`
              },
              {
                question: 'How often will we communicate?',
                answer: 'Strength Coaching: weekly app check-ins + bi-weekly calls. Elite: bi-weekly video calls + daily messaging access.'
              },
              {
                question: 'I\'m a complete beginner. Is this for me?',
                answer: 'Strength Coaching works for experienced beginners (6+ months training). True beginners should consider in-person training first to learn proper technique, or start online and be prepared to study form videos closely.'
              },
              {
                question: 'Can I cancel anytime?',
                answer: 'Yes. First month is risk-free with full refund if not satisfied. After that, it\'s month-to-month billing with 30-day notice to cancel.'
              },
              {
                question: 'What if I miss workouts?',
                answer: 'Life happens. We\'ll adjust your program accordingly. The key is communication—let me know what\'s going on and we\'ll make it work.'
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
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Limited coaching spots available. Apply now to see if we're a good fit.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              href="/contact" 
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 px-8 rounded-lg transition duration-200 shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              Apply for Online Coaching
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