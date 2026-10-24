import type { ReactNode } from 'react';

export function Checklist({ items, tone = 'dark', negative = false }: { items: ReactNode[]; tone?: 'dark' | 'paper'; negative?: boolean }) {
  const cls = ['lg-checks', tone === 'paper' ? 'paper' : '', negative ? 'negative' : ''].filter(Boolean).join(' ');
  return (
    <ul className={cls}>
      {items.map((it, i) => (
        <li key={i}>{it}</li>
      ))}
    </ul>
  );
}
