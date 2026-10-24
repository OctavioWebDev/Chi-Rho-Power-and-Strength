'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Entry, PageTitle } from '@/components/log';

type Question = {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
};

const questions: Question[] = [
  {
    id: 1,
    question: 'How long have you been consistently strength training?',
    options: [
      'Less than 6 months',
      '6 months - 1 year',
      '1-3 years',
      '3+ years'
    ],
    correctAnswer: 0
  },
  {
    id: 2,
    question: 'How often do you currently train per week?',
    options: [
      '1-2 days',
      '3 days',
      '4-5 days',
      '6-7 days'
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    question: 'What best describes your progress in the last 3 months?',
    options: [
      'Making progress almost every workout (new PRs frequently)',
      'Progressing weekly or every other week',
      'Progressing monthly or every few months',
      'Progress is very slow or stalled'
    ],
    correctAnswer: 0
  },
  {
    id: 4,
    question: 'What is your current squat 1RM relative to bodyweight?',
    options: [
      'Less than bodyweight',
      '1-1.5x bodyweight',
      '1.5-2x bodyweight',
      '2x+ bodyweight'
    ],
    correctAnswer: 0
  },
  {
    id: 5,
    question: 'What best describes your training experience?',
    options: [
      'Still learning basic movements and technique',
      'Comfortable with main lifts, refining technique',
      'Experienced with periodization and advanced techniques',
      'Very experienced, possibly competing'
    ],
    correctAnswer: 0
  }
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const router = useRouter();

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answerIndex;
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateResults = () => {
    // Calculate experience level based on training duration and progress rate
    const trainingDuration = answers[0];
    const progressRate = answers[2];
    const squatLevel = answers[3];
    const trainingExperience = answers[4];
    
    // Calculate a composite score (0-12, higher = more experienced)
    const experienceScore = trainingDuration + progressRate + squatLevel + trainingExperience;
    
    // Determine the recommended program based on experience level
    let recommendedProgram = 'beginner-strength';
    let programName = 'Beginner Strength Program';
    
    if (experienceScore >= 9) {
      // Advanced (3+ years, slow progress, high strength levels)
      recommendedProgram = 'advanced-powerlifting';
      programName = 'Advanced Powerlifting Program';
    } else if (experienceScore >= 5) {
      // Intermediate (1-3 years, monthly progress, intermediate strength)
      recommendedProgram = 'intermediate-hypertrophy';
      programName = 'Hypertrophy & Strength Program';
    } else {
      // Beginner (<1 year, rapid progress, learning technique)
      recommendedProgram = 'beginner-strength';
      programName = 'Foundational Strength Program';
    }

    // Adjust based on training frequency (answers[1])
    const trainingFrequency = answers[1];
    if (trainingFrequency === 0) { // 1-2 days
      recommendedProgram += '-2day';
    } else if (trainingFrequency === 1) { // 3 days
      recommendedProgram += '-3day';
    } else { // 4+ days
      recommendedProgram += '-4day';
    }

    return { 
      score: experienceScore, 
      total: 12, // Max possible score
      recommendedProgram,
      programName
    };
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  const { score, total, recommendedProgram, programName } = showResults ? calculateResults() : { score: 0, total: 0, recommendedProgram: '', programName: 'Strength Training Program' };

  if (showResults) {
    return (
      <main className="lg-wrap">
        <Entry label="Program quiz" sub="Your result">
          <PageTitle lede="Based on your answers, start here. Run it start to finish and log every session.">
            {programName}
          </PageTitle>
          <p className="lg-small">Score {score} of {total}</p>
          <div className="lg-ctas" style={{ marginTop: 18 }}>
            <button type="button" className="lg-btn" onClick={() => router.push(`/templates/${recommendedProgram}`)}>
              See the program
            </button>
            <button type="button" className="lg-link" onClick={handleRestart}>
              Take it again
            </button>
          </div>
        </Entry>
      </main>
    );
  }

  const q = questions[currentQuestion];
  return (
    <main className="lg-wrap">
      <Entry label="Program quiz" sub={`Question ${currentQuestion + 1} of ${questions.length}`}>
        <h1 className="lg-h2">{q.question}</h1>
        <ul className="lg-quiz">
          {q.options.map((option, index) => (
            <li key={index}>
              <button type="button" onClick={() => handleAnswer(index)}>
                {option}
              </button>
            </li>
          ))}
        </ul>
      </Entry>
    </main>
  );
}
