export function Facts({ items }: { items: { label: string; value: string }[] }) {
  return (
    <ul className="lg-facts">
      {items.map((f) => (
        <li key={f.label}>
          {f.label} <b>{f.value}</b>
        </li>
      ))}
    </ul>
  );
}
