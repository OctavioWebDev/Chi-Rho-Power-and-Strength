// Only for real sequences (how coaching starts, the gym roadmap).
export function Steps({ items }: { items: { title: string; text: string; here?: boolean; note?: string }[] }) {
  return (
    <ol className="lg-steps">
      {items.map((s) => (
        <li key={s.title} className={s.here ? 'here' : undefined}>
          <div>
            <b>{s.title}</b>
            {s.note ? <span className="here-note">{s.note}</span> : null}
            <p>{s.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
