import type { ReactNode } from 'react';

export type LogColumn = {
  key: string;
  label: string;
  align?: 'left' | 'right';
  hideOnPhone?: boolean;
  tone?: 'weight' | 'day' | 'note';
};

export function LogTable({ columns, rows }: { columns: LogColumn[]; rows: Record<string, ReactNode>[] }) {
  const cls = (c: LogColumn) =>
    [c.align === 'right' ? 'r' : '', c.tone ? `t-${c.tone}` : '', c.hideOnPhone ? 'phone-hide' : ''].filter(Boolean).join(' ') || undefined;
  return (
    <div className="lg-scroll">
      <table className="lg-table">
        <thead>
          <tr>
            {columns.map((c) => (
              <th key={c.key} className={[c.align === 'right' ? 'r' : '', c.hideOnPhone ? 'phone-hide' : ''].filter(Boolean).join(' ') || undefined}>
                {c.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {columns.map((c) => (
                <td key={c.key} className={cls(c)}>
                  {row[c.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
