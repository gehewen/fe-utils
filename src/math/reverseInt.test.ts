import { describe, expect, it } from 'vitest';
import { reverseInt } from './reverseInt';

describe('reverseInt', () => {
  it('reverses positive number', () => {
    expect(reverseInt(123)).toBe(321);
  });

  it('reverses negative number', () => {
    expect(reverseInt(-123)).toBe(-321);
  });

  it('handles trailing zeros', () => {
    expect(reverseInt(120)).toBe(21);
  });

  it('handles zero', () => {
    expect(reverseInt(0)).toBe(0);
  });

  it('returns 0 on positive overflow', () => {
    expect(reverseInt(1534236469)).toBe(0);
  });

  it('returns 0 on negative overflow', () => {
    expect(reverseInt(-1534236469)).toBe(0);
  });
});
