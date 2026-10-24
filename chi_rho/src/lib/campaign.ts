// Gym campaign numbers for the barbell progress bar. The API can fail or
// return odd values, so everything here falls back to 0 instead of NaN.
export function fundedPercent(raised: number | null | undefined, goal: number): number {
  if (!raised || raised < 0 || !goal || goal <= 0) return 0;
  return Math.min(100, Math.floor((raised / goal) * 100));
}

export function formatDollars(n: number | null | undefined): string {
  const v = typeof n === 'number' && Number.isFinite(n) && n > 0 ? Math.round(n) : 0;
  return `$${v.toLocaleString('en-US')}`;
}
