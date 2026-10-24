import { describe, expect, it } from 'vitest';
import { fundedPercent, formatDollars } from './campaign';

describe('fundedPercent', () => {
  it('0 raised is 0', () => expect(fundedPercent(0, 65000)).toBe(0));
  it('half way', () => expect(fundedPercent(32500, 65000)).toBe(50));
  it('rounds down', () => expect(fundedPercent(649, 65000)).toBe(0));
  it('caps at 100', () => expect(fundedPercent(90000, 65000)).toBe(100));
  it('null/undefined/negative is 0', () => {
    expect(fundedPercent(null, 65000)).toBe(0);
    expect(fundedPercent(undefined, 65000)).toBe(0);
    expect(fundedPercent(-5, 65000)).toBe(0);
  });
  it('goal 0 is 0, not NaN', () => expect(fundedPercent(100, 0)).toBe(0));
});

describe('formatDollars', () => {
  it('formats', () => expect(formatDollars(65000)).toBe('$65,000'));
  it('null is $0', () => expect(formatDollars(null)).toBe('$0'));
});
