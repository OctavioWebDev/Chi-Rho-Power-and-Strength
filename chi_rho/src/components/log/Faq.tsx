import type { ReactNode } from 'react';

export type FaqGroup = { heading?: string; items: { q: string; a: ReactNode }[] };

export function Faq({ groups, openFirst = false }: { groups: FaqGroup[]; openFirst?: boolean }) {
  return (
    <div className="lg-faq">
      {groups.map((g, gi) => (
        <div key={g.heading ?? gi}>
          {g.heading ? <h3 className="lg-h3 group">{g.heading}</h3> : null}
          {g.items.map((it, i) => (
            <details key={it.q} open={openFirst && gi === 0 && i === 0}>
              <summary>{it.q}</summary>
              <div className="a">{it.a}</div>
            </details>
          ))}
        </div>
      ))}
    </div>
  );
}
