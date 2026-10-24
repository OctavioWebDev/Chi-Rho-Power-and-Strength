'use client';

import emailjs from '@emailjs/browser';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Sheet } from '@/components/log';
import {
  EMPTY_FORM, OPTIONS, SERVICES, buildApplyParams, serviceFromParam, validateApply,
  type ApplyForm as Form, type ChoiceField,
} from '@/lib/apply';

type Text = { key: keyof Form; label: string; required?: boolean; hint?: string; type?: string; auto?: string; half?: boolean; long?: boolean; placeholder?: string };

export default function ApplyForm() {
  const params = useSearchParams();
  const [form, setForm] = useState<Form>(EMPTY_FORM);
  const [errors, setErrors] = useState<string[]>([]);
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'failed'>('idle');

  useEffect(() => {
    const s = serviceFromParam(params.get('service'));
    if (s) setForm((f) => ({ ...f, service: s }));
  }, [params]);

  const set = (k: keyof Form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validateApply(form);
    setErrors(errs);
    if (errs.length) return;
    setState('sending');
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        'template_jmuzz7g',
        buildApplyParams(form),
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      );
      setState('sent');
      setForm(EMPTY_FORM);
    } catch {
      setState('failed');
    }
  }

  const label = (text: string, required?: boolean, hint?: string) => (
    <>
      {text}
      {required ? <span className="lg-req" aria-hidden="true"> *</span> : null}
      {hint ? <small>{hint}</small> : null}
    </>
  );

  const text = (f: Text) => (
    <div key={f.key} className={f.half ? 'lg-field' : 'lg-field full'}>
      <label htmlFor={`f-${f.key}`}>{label(f.label, f.required, f.hint)}</label>
      {f.long ? (
        <textarea id={`f-${f.key}`} name={f.key} value={form[f.key]} onChange={set(f.key)} rows={3} aria-required={f.required} placeholder={f.placeholder} />
      ) : (
        <input id={`f-${f.key}`} name={f.key} type={f.type ?? 'text'} autoComplete={f.auto} value={form[f.key]} onChange={set(f.key)} aria-required={f.required} placeholder={f.placeholder} />
      )}
    </div>
  );

  const choice = (key: ChoiceField, q: string, half = true) => (
    <div key={key} className={half ? 'lg-field' : 'lg-field full'}>
      <label htmlFor={`f-${key}`}>{label(q, true)}</label>
      <select id={`f-${key}`} name={key} value={form[key]} onChange={set(key)} aria-required>
        <option value="">Select…</option>
        {OPTIONS[key].map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
    </div>
  );

  return (
    <form onSubmit={onSubmit} noValidate className="lg-form">
      <Sheet title="Chi-Rho intake" caption="* Required">
        <h3 className="lg-form-section">About you</h3>
        <div className="lg-form-grid">
          {text({ key: 'fullName', label: 'Full name', required: true, half: true, auto: 'name' })}
          {text({ key: 'email', label: 'Email address', required: true, half: true, type: 'email', auto: 'email' })}
          {text({ key: 'phone', label: 'Phone number', hint: 'Optional', half: true, type: 'tel', auto: 'tel' })}
          {text({ key: 'location', label: 'Location', hint: 'City, state', required: true, half: true, placeholder: 'Toledo, OH' })}
          {text({ key: 'age', label: 'Age', hint: 'Optional', half: true, type: 'number' })}
        </div>

        <h3 className="lg-form-section">Which coaching?</h3>
        <fieldset className="lg-field full">
          <legend>{label('Coaching package', true)}</legend>
          <div className="lg-opts">
            {SERVICES.map((s) => (
              <label key={s.value}>
                <input
                  type="radio"
                  name="service"
                  value={s.value}
                  checked={form.service === s.value}
                  onChange={() => setForm((f) => ({ ...f, service: s.value }))}
                />
                {s.label}
              </label>
            ))}
          </div>
        </fieldset>

        <h3 className="lg-form-section">Your training</h3>
        <div className="lg-form-grid">
          {choice('trainingExperience', 'How long have you been training consistently?')}
          {choice('currentFrequency', 'How many days per week can you train?')}
          {choice('equipmentAccess', 'What equipment do you have access to?', false)}
        </div>

        <h3 className="lg-form-section">Current lifts <small>Optional, but helpful</small></h3>
        <div className="lg-lifts">
          {text({ key: 'currentSquat', label: 'Squat (lbs)', half: true, placeholder: 'e.g. 225' })}
          {text({ key: 'currentBench', label: 'Bench press (lbs)', half: true, placeholder: 'e.g. 185' })}
          {text({ key: 'currentDeadlift', label: 'Deadlift (lbs)', half: true, placeholder: 'e.g. 315' })}
        </div>

        <h3 className="lg-form-section">Goals</h3>
        <div className="lg-form-grid">
          {choice('primaryGoal', "What's your primary training goal?", false)}
          {text({ key: 'biggestChallenge', label: "What's your biggest challenge right now?", required: true, long: true })}
          {choice('timeline', "What's your timeline/commitment level?", false)}
        </div>

        <h3 className="lg-form-section">Getting started</h3>
        <div className="lg-form-grid">
          {choice('startDate', 'When do you want to start?')}
          {choice('heardAbout', 'How did you hear about Chi-Rho Power and Strength?')}
          {choice('readBook', 'Have you read "Shut Up and Lift"?')}
        </div>

        <div className="lg-form-grid">
          {text({ key: 'additionalInfo', label: 'Is there anything else I should know?', hint: 'Optional', long: true })}
        </div>

        {errors.length ? (
          <ul className="lg-errors" role="alert">
            {errors.map((m) => <li key={m}>{m}</li>)}
          </ul>
        ) : null}
        {state === 'sent' ? (
          <p className="lg-sent" role="status">Got it. I&apos;ll read it and get back to you within 24–48 hours.</p>
        ) : (
          <div className="lg-form-actions">
            <button className="lg-btn" type="submit" disabled={state === 'sending'}>
              {state === 'sending' ? 'Sending…' : 'Send application'}
            </button>
            {state === 'failed' ? (
              <span className="lg-errors-inline" role="alert">That didn&apos;t send. Try again, or email chirhostrength@gmail.com.</span>
            ) : null}
          </div>
        )}
      </Sheet>
    </form>
  );
}
