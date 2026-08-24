import { describe, expect, it } from 'vitest';
import { mergeIntervals } from './mergeIntervals';

describe('mergeIntervals', () => {
  it('merges overlapping intervals', () => {
    expect(
      mergeIntervals([
        [1, 3],
        [2, 6],
        [8, 10],
        [15, 18],
      ]),
    ).toEqual([
      [1, 6],
      [8, 10],
      [15, 18],
    ]);
  });

  it('merges touching intervals', () => {
    expect(
      mergeIntervals([
        [1, 4],
        [4, 5],
      ]),
    ).toEqual([[1, 5]]);
  });

  it('handles empty input', () => {
    expect(mergeIntervals([])).toEqual([]);
  });

  it('handles single interval', () => {
    expect(mergeIntervals([[1, 3]])).toEqual([[1, 3]]);
  });

  it('handles nested intervals', () => {
    expect(
      mergeIntervals([
        [1, 10],
        [2, 5],
        [3, 7],
      ]),
    ).toEqual([[1, 10]]);
  });

  it('handles unsorted input', () => {
    expect(
      mergeIntervals([
        [5, 7],
        [1, 3],
        [2, 4],
      ]),
    ).toEqual([
      [1, 4],
      [5, 7],
    ]);
  });
});
