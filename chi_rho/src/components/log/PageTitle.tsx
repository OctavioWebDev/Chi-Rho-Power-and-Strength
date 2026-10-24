import type { ReactNode } from 'react';

// Wrap one phrase of the title in <em> to set it in brass.
export function PageTitle({ children, lede }: { children: ReactNode; lede?: ReactNode }) {
  return (
    <>
      <h1 className="lg-h1">{children}</h1>
      {lede ? <p className="lg-lede">{lede}</p> : null}
    </>
  );
}
