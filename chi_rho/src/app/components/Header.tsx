'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Seal } from '@/components/log';

const NAV = [
  { href: '/coaching', label: 'Coaching' },
  { href: '/coaching/group-classes', label: 'Classes' },
  { href: '/gym', label: 'Barbell Club' },
  { href: '/book', label: 'Book & Journal' },
  { href: '/philosophy', label: 'Philosophy' },
  { href: '/blog', label: 'Articles' },
  { href: '/mystory', label: 'My Story' },
  { href: '/faq', label: 'FAQ' },
];

// The most specific nav item that matches the current path is active.
function activeHref(path: string): string | null {
  const hits = NAV.filter((n) => path === n.href || path.startsWith(n.href + '/'));
  if (path.startsWith('/journal')) return '/book';
  if (path.startsWith('/apply')) return '/coaching';
  return hits.sort((a, b) => b.href.length - a.href.length)[0]?.href ?? null;
}

export default function Header() {
  const path = usePathname() || '/';
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [path]);
  const active = activeHref(path);

  return (
    <header className="lg-header">
      <div className="lg-wrap lg-header-row">
        <Link href="/" className="lg-brand" aria-label="Chi-Rho Power and Strength, home">
          <Seal size={52} />
          <span>
            <b>Chi-Rho</b>
            <small>Power &amp; Strength</small>
          </span>
        </Link>
        <nav id="main-nav" className={`lg-nav ${open ? 'open' : ''}`} aria-label="Main">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} aria-current={active === n.href ? 'page' : undefined}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="lg-header-right">
          <button
            type="button"
            className="lg-menu-btn"
            aria-expanded={open}
            aria-controls="main-nav"
            onClick={() => setOpen((o) => !o)}
          >
            Menu
          </button>
          <Link href="/apply" className="lg-apply">
            Apply
          </Link>
        </div>
      </div>
    </header>
  );
}
