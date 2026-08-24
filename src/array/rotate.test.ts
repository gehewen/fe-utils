import { describe, expect, it } from 'vitest';
import { rotate } from './rotate';

describe('rotate', () => {
  it('rotates right by k', () => {
    expect(rotate([1, 2, 3, 4, 5], 2)).toEqual([4, 5, 1, 2, 3]);
  });

  it('returns a copy when k is 0', () => {
    const arr = [1, 2, 3];
    const result = rotate(arr, 0);
    expect(result).toEqual([1, 2, 3]);
    expect(result).not.toBe(arr);
  });

  it('handles k larger than length', () => {
    expect(rotate([1, 2, 3], 5)).toEqual([2, 3, 1]);
  });

  it('handles negative k (left rotation)', () => {
    expect(rotate([1, 2, 3, 4, 5], -1)).toEqual([2, 3, 4, 5, 1]);
  });

  it('handles empty array', () => {
    expect(rotate([], 3)).toEqual([]);
  });

  it('does not mutate the original array', () => {
    const arr = [1, 2, 3, 4];
    const copy = [...arr];
    rotate(arr, 2);
    expect(arr).toEqual(copy);
  });
});
