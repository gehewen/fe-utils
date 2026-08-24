import { describe, expect, it } from 'vitest';
import { removeDuplicates } from './removeDuplicates';

describe('removeDuplicates', () => {
  it('removes adjacent duplicates from sorted array', () => {
    const arr = [1, 1, 2];
    const len = removeDuplicates(arr);
    expect(len).toBe(2);
    expect(arr.slice(0, len)).toEqual([1, 2]);
  });

  it('handles all unique', () => {
    const arr = [1, 2, 3, 4];
    expect(removeDuplicates(arr)).toBe(4);
  });

  it('handles all duplicates', () => {
    const arr = [7, 7, 7, 7];
    expect(removeDuplicates(arr)).toBe(1);
  });

  it('handles empty array', () => {
    expect(removeDuplicates([])).toBe(0);
  });

  it('handles single element', () => {
    expect(removeDuplicates([1])).toBe(1);
  });

  it('handles negative numbers', () => {
    const arr = [-3, -3, -1, 0, 0, 5];
    expect(removeDuplicates(arr)).toBe(4);
  });
});
