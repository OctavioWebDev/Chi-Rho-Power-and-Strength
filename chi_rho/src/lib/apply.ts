// The /apply intake sheet. It must ask exactly what the old /contact form asked
// and send it to EmailJS template_jmuzz7g under the same keys with the same raw
// option values, so the emails Octavio receives don't change. Only the look did.

export type Option = { value: string; label: string };

export const SERVICES = [
  { value: 'strength-coaching', label: 'Strength Coaching ($250/month)' },
  { value: 'elite', label: 'Elite Performance Coaching ($500/month)' },
  { value: 'inperson', label: 'In-Person Coaching ($1,150/month)' },
  { value: 'group-class', label: 'Group Classes ($300/month)' },
  { value: 'consultation-program', label: 'Program Design Consultation ($100 one-time)' },
  { value: 'technique-audit', label: 'Technique Audit ($97 one-time)' },
  { value: 'discovery-call', label: 'Free Discovery Call (just exploring options)' },
] as const;

export type ServiceId = (typeof SERVICES)[number]['value'];

export type ChoiceField =
  | 'trainingExperience' | 'currentFrequency' | 'equipmentAccess' | 'primaryGoal'
  | 'timeline' | 'startDate' | 'heardAbout' | 'readBook';

export const OPTIONS: Record<ChoiceField, Option[]> = {
  trainingExperience: [
    { value: 'beginner', label: 'Less than 6 months' },
    { value: 'experienced-beginner', label: '6 months - 1 year' },
    { value: 'intermediate', label: '1-3 years' },
    { value: 'advanced', label: '3+ years' },
  ],
  currentFrequency: [
    { value: '1-2', label: '1-2 days per week' },
    { value: '3', label: '3 days per week' },
    { value: '4', label: '4 days per week' },
    { value: '5+', label: '5+ days per week' },
  ],
  equipmentAccess: [
    { value: 'full-gym', label: 'Full gym with barbell, rack, plates' },
    { value: 'home-barbell', label: 'Home gym with barbell and basic equipment' },
    { value: 'dumbbells', label: 'Dumbbells only' },
    { value: 'bodyweight', label: 'Bodyweight/minimal equipment' },
    { value: 'planning', label: 'Planning to get equipment' },
  ],
  primaryGoal: [
    { value: 'general-strength', label: 'Build general strength' },
    { value: 'powerlifting-compete', label: 'Compete in powerlifting' },
    { value: 'powerlifting-hobby', label: 'Powerlifting as a hobby (no competition)' },
    { value: 'athletic-performance', label: 'Improve athletic performance' },
    { value: 'body-composition', label: 'Improve body composition' },
    { value: 'other', label: 'Other (explain in additional info below)' },
  ],
  timeline: [
    { value: 'trying-month', label: 'Just trying it out for a month' },
    { value: '3-6-months', label: 'Committed to 3-6 months' },
    { value: 'long-term', label: 'Long-term (6+ months)' },
    { value: 'not-sure', label: 'Not sure yet, exploring options' },
  ],
  startDate: [
    { value: 'asap', label: 'As soon as possible' },
    { value: 'next-2-weeks', label: 'Within the next 2 weeks' },
    { value: 'next-month', label: 'Within the next month' },
    { value: 'future', label: 'Just exploring for future consideration' },
  ],
  heardAbout: [
    { value: 'book', label: 'Read "Shut Up and Lift"' },
    { value: 'youtube', label: 'YouTube' },
    { value: 'instagram', label: 'Instagram' },
    { value: 'facebook', label: 'Facebook' },
    { value: 'google', label: 'Google search' },
    { value: 'referral', label: 'Friend/referral' },
    { value: 'other', label: 'Other' },
  ],
  readBook: [
    { value: 'yes-full', label: 'Yes, read the full book' },
    { value: 'yes-partial', label: 'Yes, read parts of it' },
    { value: 'no-plan', label: 'No, but I plan to' },
    { value: 'no', label: 'No' },
  ],
};

export type ApplyForm = {
  fullName: string; email: string; phone: string; location: string; age: string;
  service: ServiceId | '';
  trainingExperience: string; currentFrequency: string; equipmentAccess: string;
  currentSquat: string; currentBench: string; currentDeadlift: string;
  primaryGoal: string; biggestChallenge: string; timeline: string;
  startDate: string; heardAbout: string; readBook: string;
  additionalInfo: string;
};

export const EMPTY_FORM: ApplyForm = {
  fullName: '', email: '', phone: '', location: '', age: '', service: '',
  trainingExperience: '', currentFrequency: '', equipmentAccess: '',
  currentSquat: '', currentBench: '', currentDeadlift: '',
  primaryGoal: '', biggestChallenge: '', timeline: '', startDate: '', heardAbout: '', readBook: '',
  additionalInfo: '',
};

export function serviceFromParam(p: string | null): ServiceId | '' {
  return SERVICES.find((s) => s.value === p)?.value ?? '';
}

// The old form's required fields, in form order, with the message for each.
const REQUIRED: [keyof ApplyForm, string][] = [
  ['fullName', 'Add your full name.'],
  ['email', 'Add an email I can reply to.'],
  ['location', 'Add your location.'],
  ['service', 'Pick a coaching package.'],
  ['trainingExperience', 'Say how long you have been training.'],
  ['currentFrequency', 'Say how many days a week you can train.'],
  ['equipmentAccess', 'Say what equipment you have.'],
  ['primaryGoal', 'Pick your primary goal.'],
  ['biggestChallenge', 'Tell me your biggest challenge.'],
  ['timeline', 'Pick your timeline.'],
  ['startDate', 'Say when you want to start.'],
  ['heardAbout', 'Say how you heard about Chi-Rho.'],
  ['readBook', 'Say whether you have read Shut Up and Lift.'],
];

export function validateApply(f: ApplyForm): string[] {
  return REQUIRED.filter(([key]) =>
    key === 'email' ? !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim()) : !f[key].trim()
  ).map(([, message]) => message);
}

const or = (v: string, fallback: string) => v.trim() || fallback;

// Same keys and fallbacks the old /contact page sent.
export function buildApplyParams(f: ApplyForm): Record<string, string> {
  return {
    full_name: f.fullName.trim(),
    email: f.email.trim(),
    phone: or(f.phone, 'Not provided'),
    location: f.location.trim(),
    age: or(f.age, 'Not provided'),
    service: or(f.service, 'Not specified'),
    training_experience: f.trainingExperience,
    current_frequency: f.currentFrequency,
    equipment_access: f.equipmentAccess,
    current_squat: or(f.currentSquat, 'Not provided'),
    current_bench: or(f.currentBench, 'Not provided'),
    current_deadlift: or(f.currentDeadlift, 'Not provided'),
    primary_goal: f.primaryGoal,
    biggest_challenge: f.biggestChallenge.trim(),
    timeline: f.timeline,
    start_date: f.startDate,
    heard_about: f.heardAbout,
    read_book: f.readBook,
    additional_info: or(f.additionalInfo, 'None provided'),
  };
}
