import { describe, expect, it } from 'vitest';
import { plusOne } from './plusOne';

describe('plusOne', () => {
  it('increments without carry', () => {
    expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
  });

  it('handles single carry', () => {
    expect(plusOne([1, 2, 9])).toEqual([1, 3, 0]);
  });

  it('handles all 9s', () => {
    expect(plusOne([9, 9, 9])).toEqual([1, 0, 0, 0]);
  });

  it('handles single digit', () => {
    expect(plusOne([0])).toEqual([1]);
  });

  it('handles single 9', () => {
    expect(plusOne([9])).toEqual([1, 0]);
  });

  it('does not mutate input', () => {
    const input = [1, 2, 3];
    const copy = [...input];
    plusOne(input);
    expect(input).toEqual(copy);
  });
});
