'use client';

import emailjs from '@emailjs/browser';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Sheet } from '@/components/log';
import { EMPTY_FORM, SERVICES, buildApplyParams, serviceFromParam, validateApply, type ApplyForm as Form } from '@/lib/apply';

type Field = { key: keyof Form; label: string; hint?: string; long?: boolean; half?: boolean; type?: string; auto?: string };

const FIELDS: Field[] = [
  { key: 'name', label: 'Name', half: true, auto: 'name' },
  { key: 'email', label: 'Email', half: true, type: 'email', auto: 'email' },
  { key: 'phone', label: 'Phone', hint: 'Optional', half: true, type: 'tel', auto: 'tel' },
  { key: 'age', label: 'How old are you?', half: true },
  { key: 'weight', label: 'What do you weigh?', half: true },
  { key: 'years', label: 'How long have you been training?', half: true },
  { key: 'now', label: 'What are you doing now, and why?', hint: 'Program, days a week, where you train', long: true },
  { key: 'logic', label: 'Can you explain the logic behind it?', long: true },
  { key: 'eating', label: 'What are you eating?', long: true },
];

export default function ApplyForm() {
  const params = useSearchParams();
  const [form, setForm] = useState<Form>(EMPTY_FORM);
  const [errors, setErrors] = useState<string[]>([]);
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'failed'>('idle');

  useEffect(() => {
    const s = serviceFromParam(params.get('service'));
    if (s) setForm((f) => ({ ...f, service: s }));
  }, [params]);

  const set = (k: keyof Form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
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

  const input = (f: Field) => (
    <div key={f.key} className={f.half ? 'lg-field' : 'lg-field full'}>
      <label htmlFor={`f-${f.key}`}>
        {f.label}
        {f.hint ? <small>{f.hint}</small> : null}
      </label>
      {f.long ? (
        <textarea id={`f-${f.key}`} name={f.key} value={form[f.key]} onChange={set(f.key)} rows={3} />
      ) : (
        <input id={`f-${f.key}`} name={f.key} type={f.type ?? 'text'} autoComplete={f.auto} value={form[f.key]} onChange={set(f.key)} />
      )}
    </div>
  );

  return (
    <form onSubmit={onSubmit} noValidate className="lg-form">
      <Sheet title="Chi-Rho intake" caption="Page 1 of 1">
        <div className="lg-form-grid">
          {FIELDS.map(input)}
          <div className="lg-field full">
            <label>
              Best lifts right now<small>Weight × reps. Leave blank if you don&apos;t know</small>
            </label>
            <div className="lg-lifts">
              {(['squat', 'bench', 'deadlift'] as const).map((k) => (
                <div key={k}>
                  <label htmlFor={`f-${k}`}>
                    <small>{k === 'bench' ? 'Bench' : k === 'squat' ? 'Squat' : 'Deadlift'}</small>
                  </label>
                  <input id={`f-${k}`} name={k} value={form[k]} onChange={set(k)} />
                </div>
              ))}
            </div>
          </div>
          {input({ key: 'hurt', label: 'Injuries, conditions or medications?', hint: 'Your doctor makes the medical calls. I build around them' })}
          {input({ key: 'schedule', label: 'Your schedule', hint: 'Shift work is fine. I train around overnights myself' })}
          <fieldset className="lg-field full">
            <legend>Which coaching?</legend>
            <div className="lg-opts">
              {SERVICES.map((s) => (
                <label key={s.id}>
                  <input
                    type="radio"
                    name="service"
                    value={s.id}
                    checked={form.service === s.id}
                    onChange={() => setForm((f) => ({ ...f, service: s.id }))}
                  />
                  {s.label}
                </label>
              ))}
            </div>
          </fieldset>
        </div>
        {errors.length ? (
          <ul className="lg-errors" role="alert">
            {errors.map((m) => <li key={m}>{m}</li>)}
          </ul>
        ) : null}
        {state === 'sent' ? (
          <p className="lg-sent" role="status">Got it. I&apos;ll read it and get back to you.</p>
        ) : (
          <div className="lg-form-actions">
            <button className="lg-btn" type="submit" disabled={state === 'sending'}>
              {state === 'sending' ? 'Sending…' : 'Send it'}
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
