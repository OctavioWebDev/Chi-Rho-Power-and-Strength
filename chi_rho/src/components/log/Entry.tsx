import type { ReactNode } from 'react';

// A ledger row: a small label in the left margin, the content beside it.
export function Entry({ label, sub, id, children }: { label: string; sub?: string; id?: string; children: ReactNode }) {
  return (
    <section className="lg-entry" id={id}>
      <div className="lg-label">
        {label}
        {sub ? <span>{sub}</span> : null}
      </div>
      <div className="lg-body">{children}</div>
    </section>
  );
}
