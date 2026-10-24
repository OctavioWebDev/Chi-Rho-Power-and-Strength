// Guards the voice rules (spec §3–5): no stock-copy words, no emoji, no
// stock photos, and the one coaching-policy line can't drift back.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';

const ROOTS = ['src/app', 'src/components'];
const SKIP = /[\\/](privacy|terms|api)[\\/]/;

function files(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const p = path.join(dir, name);
    if (statSync(p).isDirectory()) return files(p);
    return p.endsWith('.tsx') && !SKIP.test(p) ? [p] : [];
  });
}

const all = ROOTS.flatMap((r) => files(r)).map((p) => ({ p, text: readFileSync(p, 'utf8') }));

describe('copy guard', () => {
  it('finds the pages', () => expect(all.length).toBeGreaterThan(20));

  it('no stock-copy words', () => {
    const hits = all.filter((f) => /\b(journey|transform\w*|unlock\w*|empower\w*|elevate\w*)\b/i.test(f.text)).map((f) => f.p);
    expect(hits).toEqual([]);
  });

  it('no emoji', () => {
    const hits = all.filter((f) => new RegExp('\\p{Extended_Pictographic}', 'u').test(f.text.replace(/[✓©×·]/g, ''))).map((f) => f.p);
    expect(hits).toEqual([]);
  });

  it('"no BS" at most once site-wide', () => {
    const n = all.reduce((sum, f) => sum + (f.text.match(/no bs\b/gi)?.length ?? 0), 0);
    expect(n).toBeLessThanOrEqual(1);
  });

  it('no stock photos', () => {
    expect(all.filter((f) => /unsplash/i.test(f.text)).map((f) => f.p)).toEqual([]);
  });

  it('coaching policy line stays put', () => {
    expect(all.filter((f) => /Women are welcome/i.test(f.text)).map((f) => f.p)).toEqual([]);
  });
});
