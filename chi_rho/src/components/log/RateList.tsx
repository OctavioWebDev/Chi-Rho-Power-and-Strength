import type { ReactNode } from 'react';

export type Rate = { name: ReactNode; price: string; unit?: string; tag?: string; description: ReactNode; action?: ReactNode };

// A rate sheet: name, dotted leader, price; description underneath.
export function RateList({ items }: { items: Rate[] }) {
  return (
    <ul className="lg-rates">
      {items.map((r, i) => (
        <li key={i}>
          <div className="name">
            <h3 className="lg-h3">{r.name}</h3>
          </div>
          <div className="price">
            {r.price}
            {r.unit ? <small> {r.unit}</small> : null}
          </div>
          <div className="what">
            {r.tag ? <span className="lg-tag">{r.tag}</span> : null}
            {r.description}
          </div>
          {r.action ? <div className="action">{r.action}</div> : null}
        </li>
      ))}
    </ul>
  );
}
