import type { ReactNode } from 'react';

// A flat paper log sheet. With a title it gets a header line.
export function Sheet({ title, caption, className = '', children }: { title?: string; caption?: string; className?: string; children: ReactNode }) {
  return (
    <div className={`lg-sheet ${className}`}>
      {title ? (
        <div className="lg-sheet-head">
          <b>{title}</b>
          {caption ? <small>{caption}</small> : null}
        </div>
      ) : null}
      {children}
    </div>
  );
}
