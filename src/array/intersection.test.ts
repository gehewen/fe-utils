import { describe, expect, it } from 'vitest';
import { intersection } from './intersection';

describe('intersection', () => {
  it('returns common elements sorted', () => {
    expect(intersection([1, 2, 2, 1], [2, 2])).toEqual([2]);
  });

  it('handles multiple common elements', () => {
    const result = intersection([4, 9, 5], [9, 4, 9, 8, 4]);
    expect(result).toEqual([4, 9]);
  });

  it('returns empty when no intersection', () => {
    expect(intersection([1, 2, 3], [4, 5, 6])).toEqual([]);
  });

  it('handles empty inputs', () => {
    expect(intersection([], [1, 2])).toEqual([]);
    expect(intersection([1, 2], [])).toEqual([]);
  });

  it('deduplicates and sorts', () => {
    expect(intersection([3, 1, 4, 1, 5], [5, 9, 2, 6, 5, 3])).toEqual([3, 5]);
  });
});
