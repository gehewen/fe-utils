import { describe, expect, it } from 'vitest';
import { mergeSortedArrays } from './mergeSortedArrays';

describe('mergeSortedArrays', () => {
  it('merges two sorted arrays', () => {
    expect(mergeSortedArrays([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)).toEqual([1, 2, 2, 3, 5, 6]);
  });

  it('handles first array empty', () => {
    expect(mergeSortedArrays([], 0, [1, 2, 3], 3)).toEqual([1, 2, 3]);
  });

  it('handles second array empty', () => {
    expect(mergeSortedArrays([1, 2, 3], 3, [], 0)).toEqual([1, 2, 3]);
  });

  it('ignores trailing values in nums1 past m', () => {
    expect(mergeSortedArrays([1, 2, 99, 99], 2, [3, 4], 2)).toEqual([1, 2, 3, 4]);
  });

  it('handles both empty', () => {
    expect(mergeSortedArrays([], 0, [], 0)).toEqual([]);
  });
});
