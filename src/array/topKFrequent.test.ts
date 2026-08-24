import { describe, expect, it } from 'vitest';
import { topKFrequent } from './topKFrequent';

describe('topKFrequent', () => {
  it('returns top k frequent', () => {
    const result = topKFrequent([1, 1, 1, 2, 2, 3], 2).sort((a, b) => a - b);
    expect(result).toEqual([1, 2]);
  });

  it('returns single most frequent', () => {
    expect(topKFrequent([1], 1)).toEqual([1]);
  });

  it('handles all unique', () => {
    const result = topKFrequent([1, 2, 3, 4], 2).sort((a, b) => a - b);
    expect(result).toEqual([1, 2]);
  });

  it('handles negative numbers', () => {
    const result = topKFrequent([-1, -1, -2, -2, -2, 3], 2).sort((a, b) => a - b);
    expect(result).toEqual([-2, -1]);
  });
});
