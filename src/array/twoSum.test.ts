import { describe, expect, it } from 'vitest';
import { twoSum } from './twoSum';

describe('twoSum', () => {
  it('finds the pair', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  it('returns null when no pair exists', () => {
    expect(twoSum([1, 2, 3], 7)).toBeNull();
  });

  it('handles negative numbers', () => {
    expect(twoSum([-3, 4, 3, 90], 0)).toEqual([0, 2]);
  });

  it('handles zero target', () => {
    expect(twoSum([0, 0], 0)).toEqual([0, 1]);
  });

  it('handles empty array', () => {
    expect(twoSum([], 5)).toBeNull();
  });
});
