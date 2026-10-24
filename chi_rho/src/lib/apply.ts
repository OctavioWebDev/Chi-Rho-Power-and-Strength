// The /apply intake sheet. It sends through the same EmailJS template the old
// contact page used (template_jmuzz7g), so the keys below must keep its names.
export const SERVICES = [
  { id: 'strength-coaching', label: 'Online Strength · $250/mo' },
  { id: 'elite', label: 'Online Elite · $500/mo' },
  { id: 'inperson', label: 'In-person · $1,150/mo' },
  { id: 'group-class', label: 'Group class, men 50+ · $300/mo' },
  { id: 'consultation-program', label: 'Program design consultation · $100' },
  { id: 'technique-audit', label: 'Technique audit · $97' },
  { id: 'discovery-call', label: 'Free 20-minute call first' },
] as const;

export type ServiceId = (typeof SERVICES)[number]['id'];

export type ApplyForm = {
  name: string; email: string; phone: string; age: string; weight: string;
  now: string; logic: string; years: string; eating: string;
  squat: string; bench: string; deadlift: string;
  hurt: string; schedule: string; service: ServiceId | '';
};

export const EMPTY_FORM: ApplyForm = {
  name: '', email: '', phone: '', age: '', weight: '', now: '', logic: '', years: '',
  eating: '', squat: '', bench: '', deadlift: '', hurt: '', schedule: '', service: '',
};

export function serviceFromParam(p: string | null): ServiceId | '' {
  return SERVICES.find((s) => s.id === p)?.id ?? '';
}

export function validateApply(f: ApplyForm): string[] {
  const errors: string[] = [];
  if (!f.name.trim()) errors.push('Add your name.');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) errors.push('Add an email I can reply to.');
  if (!f.service) errors.push('Pick which coaching you want.');
  return errors;
}

const orNot = (v: string) => v.trim() || 'Not provided';
const NOT_ASKED = 'Not asked';

export function buildApplyParams(f: ApplyForm): Record<string, string> {
  const extra: [string, string][] = [
    ['What are you doing now, and why?', f.now],
    ['Logic behind it', f.logic],
    ['Bodyweight', f.weight],
    ['What are you eating?', f.eating],
    ['Injuries / conditions / meds', f.hurt],
    ['Schedule', f.schedule],
  ];
  const lines = extra.filter(([, v]) => v.trim()).map(([k, v]) => `${k}: ${v.trim()}`);
  return {
    full_name: orNot(f.name),
    email: orNot(f.email),
    phone: orNot(f.phone),
    location: NOT_ASKED,
    age: orNot(f.age),
    service: SERVICES.find((s) => s.id === f.service)?.label ?? 'Not provided',
    training_experience: orNot(f.years),
    current_frequency: NOT_ASKED,
    equipment_access: NOT_ASKED,
    current_squat: orNot(f.squat),
    current_bench: orNot(f.bench),
    current_deadlift: orNot(f.deadlift),
    primary_goal: NOT_ASKED,
    biggest_challenge: NOT_ASKED,
    timeline: NOT_ASKED,
    start_date: NOT_ASKED,
    heard_about: NOT_ASKED,
    read_book: NOT_ASKED,
    additional_info: lines.length ? lines.join('\n') : 'None provided',
  };
}
