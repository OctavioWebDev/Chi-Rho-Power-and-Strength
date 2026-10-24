import { describe, expect, it } from 'vitest';
import { EMPTY_FORM, buildApplyParams, serviceFromParam, validateApply, type ApplyForm } from './apply';

// Every key template_jmuzz7g receives, exactly as the old /contact form sent them.
const TEMPLATE_KEYS = [
  'full_name', 'email', 'phone', 'location', 'age', 'service', 'training_experience', 'current_frequency',
  'equipment_access', 'current_squat', 'current_bench', 'current_deadlift', 'primary_goal', 'biggest_challenge',
  'timeline', 'start_date', 'heard_about', 'read_book', 'additional_info',
];

const full: ApplyForm = {
  fullName: 'Joe Lifter', email: 'joe@x.com', phone: '', location: 'Toledo, OH', age: '',
  service: 'elite', trainingExperience: 'intermediate', currentFrequency: '3', equipmentAccess: 'full-gym',
  currentSquat: '', currentBench: '', currentDeadlift: '',
  primaryGoal: 'general-strength', biggestChallenge: 'Stuck on squat', timeline: 'long-term',
  startDate: 'asap', heardAbout: 'book', readBook: 'yes-full', additionalInfo: '',
};

describe('serviceFromParam', () => {
  it('old links preselect', () => {
    expect(serviceFromParam('strength-coaching')).toBe('strength-coaching');
    expect(serviceFromParam('discovery-call')).toBe('discovery-call');
    expect(serviceFromParam('group-class')).toBe('group-class');
  });
  it('unknown, retired or missing is empty', () => {
    expect(serviceFromParam('comp-prep')).toBe('');
    expect(serviceFromParam('foo')).toBe('');
    expect(serviceFromParam(null)).toBe('');
  });
});

describe('validateApply', () => {
  it('blank form lists every required question, in form order', () =>
    expect(validateApply(EMPTY_FORM)).toEqual([
      'Add your full name.', 'Add an email I can reply to.', 'Add your location.', 'Pick a coaching package.',
      'Say how long you have been training.', 'Say how many days a week you can train.', 'Say what equipment you have.',
      'Pick your primary goal.', 'Tell me your biggest challenge.', 'Pick your timeline.', 'Say when you want to start.',
      'Say how you heard about Chi-Rho.', 'Say whether you have read Shut Up and Lift.',
    ]));
  it('bad email', () => expect(validateApply({ ...full, email: 'joe@' })).toEqual(['Add an email I can reply to.']));
  it('optional fields can stay blank', () => expect(validateApply(full)).toEqual([]));
});

describe('buildApplyParams', () => {
  it('sends exactly the template keys', () => expect(Object.keys(buildApplyParams(full)).sort()).toEqual([...TEMPLATE_KEYS].sort()));
  it('sends the same raw values the old form did', () => {
    const p = buildApplyParams(full);
    expect(p.full_name).toBe('Joe Lifter');
    expect(p.service).toBe('elite');
    expect(p.training_experience).toBe('intermediate');
    expect(p.equipment_access).toBe('full-gym');
    expect(p.read_book).toBe('yes-full');
    expect(p.biggest_challenge).toBe('Stuck on squat');
  });
  it('optional blanks use the old fallbacks, never empty or undefined', () => {
    const p = buildApplyParams(full);
    expect(p.phone).toBe('Not provided');
    expect(p.age).toBe('Not provided');
    expect(p.current_squat).toBe('Not provided');
    expect(p.additional_info).toBe('None provided');
    expect(Object.values(p).some((v) => v === '' || v.includes('undefined'))).toBe(false);
  });
});
