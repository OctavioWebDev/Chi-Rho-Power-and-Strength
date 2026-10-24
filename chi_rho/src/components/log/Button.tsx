import Link from 'next/link';
import type { ReactNode } from 'react';

export function ButtonLink({ href, children, variant = 'solid' }: { href: string; children: ReactNode; variant?: 'solid' | 'line' }) {
  const cls = variant === 'solid' ? 'lg-btn' : 'lg-link';
  if (/^https?:\/\//.test(href)) {
    return (
      <a className={cls} href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link className={cls} href={href}>
      {children}
    </Link>
  );
}
