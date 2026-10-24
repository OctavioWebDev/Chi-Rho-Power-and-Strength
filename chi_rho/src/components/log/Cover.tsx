// A type-only book or journal cover.
export function Cover({ top, title, bottom, variant = 'light' }: { top: string; title: string; bottom: string; variant?: 'light' | 'dark' }) {
  return (
    <div className={`lg-cover ${variant === 'dark' ? 'dark' : ''}`} role="img" aria-label={`${title} cover`}>
      <small>{top}</small>
      <b>{title}</b>
      <small>{bottom}</small>
    </div>
  );
}
