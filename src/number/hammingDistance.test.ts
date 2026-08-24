import { describe, expect, it } from 'vitest';
import { hammingDistance } from './hammingDistance';

describe('hammingDistance', () => {
  it('counts differing bits', () => {
    expect(hammingDistance(1, 4)).toBe(2);
  });

  it('returns 0 for identical values', () => {
    expect(hammingDistance(0, 0)).toBe(0);
    expect(hammingDistance(7, 7)).toBe(0);
  });

  it('handles larger values', () => {
    expect(hammingDistance(0b1011, 0b1001)).toBe(1);
  });

  it('returns full bit count when no bits match', () => {
    expect(hammingDistance(0, 0b1111)).toBe(4);
  });
});
