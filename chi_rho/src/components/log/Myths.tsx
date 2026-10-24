import type { ReactNode } from 'react';

// "Things people say": what they say on the left, the answer on the right.
export function Myths({ items }: { items: { said: string; answer: ReactNode }[] }) {
  return (
    <ul className="lg-myths">
      {items.map((m) => (
        <li key={m.said}>
          <q>{m.said}</q>
          <p>{m.answer}</p>
        </li>
      ))}
    </ul>
  );
}
