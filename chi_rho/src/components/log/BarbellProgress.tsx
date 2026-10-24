import { formatDollars, fundedPercent } from '@/lib/campaign';

const TICKS = ['$0', '$15k', '$30k', '$45k', '$65k'];

export function BarbellProgress({ raised, members, goal }: { raised: number | null; members: number | null; goal: number }) {
  const pct = fundedPercent(raised, goal);
  return (
    <div className="lg-raise">
      <div className="nums">
        <div><b>{formatDollars(raised)}</b><span>Raised</span></div>
        <div><b>{members && members > 0 ? members : 0}</b><span>Founding members</span></div>
        <div><b>{formatDollars(goal)}</b><span>Goal</span></div>
      </div>
      <div className="lg-barbell" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={pct} aria-label="Campaign funded">
        <div className="shaft" />
        <div className="fill" style={{ width: `${pct}%` }} />
        <div className="collar l" />
        <div className="collar r" />
      </div>
      <div className="lg-ticks">{TICKS.map((t) => <span key={t}>{t}</span>)}</div>
    </div>
  );
}
