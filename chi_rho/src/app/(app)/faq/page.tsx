'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

interface FAQ {
  question: string
  answer: string | React.ReactNode
  category: string
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>('All')

  const faqs: FAQ[] = [
    // GETTING STARTED
    {
      category: 'Getting Started',
      question: 'I\'m a complete beginner. Is this for me?',
      answer: (
        <>
          <p className="mb-3">It depends on what you mean by "complete beginner."</p>
          <p className="mb-3"><strong className="text-yellow-400">If you've never touched a barbell:</strong> I recommend starting with in-person training (if you're in Toledo) so you can learn proper technique from day one. Bad habits formed early are hard to break.</p>
          <p><strong className="text-yellow-400">If you have 6+ months of training experience:</strong> Strength Coaching is perfect. You know the basics, you just need better programming and accountability.</p>
        </>
      )
    },
    {
      category: 'Getting Started',
      question: 'What if I\'ve never done the "big three" lifts before?',
      answer: 'If you\'re completely new to squats, bench press, and deadlifts, I strongly recommend in-person coaching first (if possible) or starting with Strength Coaching and studying form videos extensively. These movements require proper technique to be safe and effective. I can program alternatives if needed, but the big three are the foundation of strength training for a reason.'
    },
    {
      category: 'Getting Started',
      question: 'How quickly will I see results?',
      answer: 'Honest answer: If you\'re a true beginner following the program consistently, you should be adding weight to the bar every workout for the first 2-3 months. That\'s measurable progress. If you\'re more advanced, progress is slower - maybe 5-10 lbs per month on your main lifts. I don\'t promise body transformation timelines because those depend on nutrition, genetics, and consistency. What I can promise: if you follow the program, you\'ll get stronger.'
    },
    {
      category: 'Getting Started',
      question: 'Do I need to read "Shut Up and Lift" before coaching?',
      answer: 'No, but it helps. The book explains the philosophy and methodology I use in coaching. If you read it first, you\'ll understand why I program the way I do. Plus, book buyers get 15% off their first month of coaching. But if you want to jump straight into coaching, that works too.'
    },

    // PROGRAM & TRAINING
    {
      category: 'Program & Training',
      question: 'What equipment do I need?',
      answer: (
        <>
          <p className="mb-3"><strong className="text-yellow-400">Ideal:</strong> Barbell, squat rack, bench, and plates. This is what I program for by default because it produces the best results.</p>
          <p className="mb-3"><strong className="text-yellow-400">Acceptable:</strong> Home gym with basic barbell setup. I can work with whatever equipment you have.</p>
          <p><strong className="text-yellow-400">Limited:</strong> Dumbbells only or minimal equipment. I can program for this, but results will be slower. Barbell training is more effective for building strength.</p>
        </>
      )
    },
    {
      category: 'Program & Training',
      question: 'How many days per week do I need to train?',
      answer: 'Three days per week is the sweet spot for online Strength Coaching, based on optimal frequency for strength gains. If you can only do 2 days, we can make it work, but progress will be slower. If you want to train 4-5 days, we can program that too, but beginners don\'t need it. In-person coaching is a fixed 3 sessions a week.'
    },
    {
      category: 'Program & Training',
      question: 'What if I miss workouts?',
      answer: 'Life happens. Miss a workout, pick up where you left off next session. Miss a week? We adjust the program when you return. The key is communication - let me know what\'s going on and we\'ll make it work. Consistency over perfection.'
    },
    {
      category: 'Program & Training',
      question: 'Can I add extra exercises or "accessory work"?',
      answer: 'We can discuss additions, but most beginners don\'t need more volume. They need better execution on the basics. If you\'re advanced enough to benefit from accessories, we\'ll program them strategically.'
    },
    {
      category: 'Program & Training',
      question: 'What\'s your approach to periodization?',
      answer: 'For beginners: Linear progression until it stops working. No need to overcomplicate it. For intermediate/advanced lifters: We use basic periodization - building volume, then intensity, then deloading. Nothing fancy. The goal is progressive overload over time, not complicated programming.'
    },
    {
      category: 'Program & Training',
      question: 'Do you provide nutrition coaching?',
      answer: 'Strength Coaching includes a nutrition framework (calories, protein targets, meal timing) that flexes toward strength or fat-loss goals. Elite Performance includes comprehensive nutrition periodization and supplement guidance. I\'m not a registered dietitian, but I can guide you on eating to support your goals.'
    },

    // PRICING & LOGISTICS
    {
      category: 'Pricing & Logistics',
      question: 'Why are your prices higher than [other online coach]?',
      answer: 'Two reasons: (1) I\'m not running a "scale to 100 clients" operation. I limit my roster so each client gets real attention. (2) I\'m not selling you a generic template. You get customized programming and actual coaching. If you want cheap, there are plenty of options out there. If you want effective coaching from someone who\'s been there, I\'m worth the investment.'
    },
    {
      category: 'Pricing & Logistics',
      question: 'Can I cancel anytime?',
      answer: 'Yes. First month is risk-free with full refund if you\'re not satisfied. After that, it\'s month-to-month billing with 30-day notice to cancel. No long-term contracts. No cancellation fees. If it\'s not working for you, you can leave. Simple as that.'
    },
    {
      category: 'Pricing & Logistics',
      question: 'Do you offer payment plans?',
      answer: 'Monthly packages are already payment plans. If you want to prepay for 3, 6, or 12 months, you get a discount (5%, 10%, or 15% respectively). I don\'t do weekly billing or custom payment schedules.'
    },
    {
      category: 'Pricing & Logistics',
      question: 'What\'s the refund policy?',
      answer: 'First month: Full refund if you\'re not satisfied within the first 30 days. After first month: No refunds for unused time if you cancel mid-month, but you won\'t be charged for the following month. I want clients who are committed, not people who are on the fence.'
    },
    {
      category: 'Pricing & Logistics',
      question: 'How quickly do you respond to messages?',
      answer: (
        <>
          <p className="mb-2"><strong className="text-yellow-400">Strength Coaching:</strong> 24-hour response time, messaging in the Chi-Rho Lifts app</p>
          <p><strong className="text-yellow-400">Elite:</strong> Same-day response, messaging in the Chi-Rho Lifts app</p>
        </>
      )
    },

    // ONLINE VS IN-PERSON
    {
      category: 'Online vs In-Person',
      question: 'Is online coaching as effective as in-person?',
      answer: 'For intermediate and advanced lifters: Yes, absolutely. You know the movements, you just need programming and accountability. For beginners: In-person is better if you can afford it because real-time form corrections are valuable. But online coaching with video form checks works well too if you\'re willing to study and be honest about your technique.'
    },
    {
      category: 'Online vs In-Person',
      question: 'How do form checks work for online coaching?',
      answer: 'You film your working sets (side angle is best) and upload via discord. I review within the timeframe for your package (24-48 hours depending on tier) and provide detailed feedback. I\'ll tell you what to fix and how to fix it. If it\'s a major issue, we might schedule a video call to work through it.'
    },
    {
      category: 'Online vs In-Person',
      question: 'I\'m in Toledo. Should I do in-person or online?',
      answer: 'If you\'re a beginner: Start with in-person training to learn proper technique. If you\'re experienced: Online coaching is more cost-effective. If you want maximum coaching contact and can commit to 3 sessions a week: In-person is the full-time option.'
    },

    // COACHING STYLE & PHILOSOPHY
    {
      category: 'Coaching Style',
      question: 'What\'s your coaching style?',
      answer: 'Direct and honest. I don\'t sugarcoat things, but I\'m not a drill sergeant either. I tell you what you need to hear, not what you want to hear. If your form sucks, I\'ll tell you. If you\'re making excuses, I\'ll call it out. But I\'m also supportive and understand that progress isn\'t linear. I care about your success, which means I won\'t let you bullshit yourself.'
    },
    {
      category: 'Coaching Style',
      question: 'Do you coach women?',
      answer: 'Yes. Strength training principles are the same regardless of gender. Progressive overload works for everyone. The only difference is I might adjust volume and frequency based on your individual recovery and hormonal factors, but that\'s true for all clients.'
    },
    {
      category: 'Coaching Style',
      question: 'What if I don\'t like your programming?',
      answer: 'Tell me. Seriously. If something isn\'t working or you hate a particular exercise, we can discuss it. But understand that "I don\'t like it" isn\'t the same as "it doesn\'t work." Sometimes the exercises you hate are the ones you need most. I\'ll listen to your feedback, but ultimately I program based on what produces results, not what\'s most comfortable.'
    },
    {
      category: 'Coaching Style',
      question: 'Are you anti-bodybuilding or anti-hypertrophy?',
      answer: 'No. I focus on strength because that\'s my specialty and what I\'m passionate about. But getting stronger builds muscle. If your goal is primarily hypertrophy, I can program for that. The difference is I won\'t sell you on bro-splits or unnecessary volume. You\'ll get intelligent, progressive programming based on what actually builds muscle.'
    },

    // SPECIFIC SITUATIONS
    {
      category: 'Special Situations',
      question: 'I have an old injury. Can you work around it?',
      answer: 'Probably, but I\'m not a physical therapist. If you\'re cleared to train by a medical professional, I can modify programming around your limitations. If you\'re not cleared to train, get clearance first. I won\'t program through pain - that\'s how minor issues become major problems.'
    },
    {
      category: 'Special Situations',
      question: 'I\'m over 40/50/60. Is this program appropriate for my age?',
      answer: 'Age is less relevant than training age. A 50-year-old with 5 years of training experience is more advanced than a 25-year-old who just started. That said, recovery might take longer as you age, and we\'ll adjust frequency and volume accordingly. But the fundamentals don\'t change: progressive overload builds strength at any age.'
    },
    {
      category: 'Special Situations',
      question: 'I work irregular hours / night shifts. Will this work for me?',
      answer: 'Yes. I don\'t care what time of day you train. Consistency matters more than timing. Train when you can train consistently. We\'ll work around your schedule, whatever it is.'
    },
    {
      category: 'Special Situations',
      question: 'I want to compete in powerlifting. Can you coach me?',
      answer: 'Yes, but understand my specialty is getting people strong, not optimizing elite-level competitors. If you\'re doing your first meet or working toward competitive numbers, I can absolutely help. If you\'re an elite lifter looking to maximize a 2000+ lb total, you might need someone more specialized in competitive powerlifting.'
    },

    // COMPARING TO OTHER OPTIONS
    {
      category: 'Comparing Options',
      question: 'What\'s the difference between your two online packages?',
      answer: (
        <>
          <p className="mb-3"><strong className="text-yellow-400">Strength Coaching ($250/mo):</strong> Weekly check-ins, form checks, messaging support, bi-weekly calls, a nutrition framework that flexes toward strength or fat-loss goals. For people who want real accountability and regular feedback.</p>
          <p><strong className="text-yellow-400">Elite ($500/mo):</strong> White-glove service. Daily check-ins, bi-weekly video calls, unlimited form checks, daily messaging, comprehensive nutrition, competition prep. For serious lifters who demand premium support.</p>
        </>
      )
    },
    {
      category: 'Comparing Options',
      question: 'Should I buy your book or hire you for coaching?',
      answer: 'The book is $15-20 and teaches you the fundamentals. It\'s perfect if you want to learn the methodology and program for yourself. Coaching is for people who want customized programming, accountability, form feedback, and expert guidance. Buy the book first if you\'re not sure about coaching. If you love the approach, then consider coaching. (Plus you get 15% off coaching if you bought the book.)'
    },
    {
      category: 'Comparing Options',
      question: 'Can\'t I just follow a free program online?',
      answer: 'Yes, you can. There are good free programs out there (StrongLifts, etc.). The difference with coaching is: (1) Customization to your specific situation, (2) Form feedback so you\'re not reinforcing bad habits, (3) Accountability so you actually stick with it, (4) Adjustments when things aren\'t working. Free programs work if you have the discipline and knowledge to execute them properly. Most people don\'t.'
    },

    // TECHNICAL QUESTIONS
    {
      category: 'Technical',
      question: 'What app/platform do you use?',
      answer: 'I use a training app for program delivery, form check uploads, and communication (exact platform depends on your package). You\'ll get login credentials after signing up. It works on both phone and desktop.'
    },
    {
      category: 'Technical',
      question: 'Do I need to track my own workouts?',
      answer: 'The app tracks everything automatically when you log your sets. But I also recommend keeping personal notes about how sets felt, sleep quality, stress levels, etc. This helps me make better programming decisions.'
    },
    {
      category: 'Technical',
      question: 'What if I don\'t have good internet/phone service at my gym?',
      answer: 'You can log workouts offline and they sync when you get service. You don\'t need internet during your training session, just to upload later.'
    }
  ]

  const categories = ['All', ...Array.from(new Set(faqs.map(faq => faq.category)))]

  const filteredFAQs = activeCategory === 'All' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
            Frequently Asked Questions
          </h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Straight answers to common questions. No marketing BS.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
          <p className="text-gray-400 text-sm mb-3">Filter by category:</p>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-yellow-500 text-gray-900'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ List */}
        <div className="space-y-4 mb-12">
          {filteredFAQs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden hover:border-yellow-500/30 transition-colors"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-800/50 transition-colors"
              >
                <div className="flex-1 pr-4">
                  <span className="text-xs text-yellow-400 font-semibold mb-1 block">
                    {faq.category}
                  </span>
                  <h3 className="text-lg font-semibold text-white">
                    {faq.question}
                  </h3>
                </div>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <FaChevronUp className="w-5 h-5 text-yellow-500" />
                  ) : (
                    <FaChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-5 text-gray-300 border-t border-gray-800 pt-4">
                  {typeof faq.answer === 'string' ? (
                    <p>{faq.answer}</p>
                  ) : (
                    faq.answer
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="bg-gradient-to-r from-gray-900 to-black rounded-xl p-8 border border-yellow-500/20 text-center">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            If your question isn't answered here, reach out directly. I'd rather answer your 
            questions now than have you make assumptions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-lg transition duration-200"
            >
              Send Me a Question
            </Link>
            <Link 
              href="/coaching"
              className="inline-block bg-transparent border-2 border-yellow-500 hover:bg-yellow-500 hover:text-gray-900 text-yellow-500 font-bold py-3 px-8 rounded-lg transition duration-200"
            >
              View Coaching Options
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}