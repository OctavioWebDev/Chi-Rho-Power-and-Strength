import { describe, expect, it } from 'vitest';
import { buildApplyParams, serviceFromParam, validateApply, type ApplyForm } from './apply';

const blank: ApplyForm = { name: '', email: '', phone: '', age: '', weight: '', now: '', logic: '', years: '',
  eating: '', squat: '', bench: '', deadlift: '', hurt: '', schedule: '', service: '' };
const min: ApplyForm = { ...blank, name: ' Joe ', email: 'joe@x.com', service: 'elite' };

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
  it('blank form lists all three', () =>
    expect(validateApply(blank)).toEqual(['Add your name.', 'Add an email I can reply to.', 'Pick which coaching you want.']));
  it('bad email', () => expect(validateApply({ ...min, email: 'joe@' })).toEqual(['Add an email I can reply to.']));
  it('minimum passes', () => expect(validateApply(min)).toEqual([]));
});

describe('buildApplyParams', () => {
  it('minimum: blanks become Not provided, never undefined', () => {
    const p = buildApplyParams(min);
    expect(p.full_name).toBe('Joe');
    expect(p.service).toBe('Online Elite · $500/mo');
    expect(p.current_squat).toBe('Not provided');
    expect(p.additional_info).toBe('None provided');
    expect(p.primary_goal).toBe('Not asked');
    expect(Object.values(p).some(v => v === '' || v.includes('undefined'))).toBe(false);
  });
  it('labeled lines, blanks skipped', () => {
    const p = buildApplyParams({ ...min, now: '5x5', weight: '212', schedule: 'nights' });
    expect(p.additional_info).toBe('What are you doing now, and why?: 5x5\nBodyweight: 212\nSchedule: nights');
  });
});
