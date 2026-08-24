import { describe, expect, it } from 'vitest';
import { containsDuplicate } from './containsDuplicate';

describe('containsDuplicate', () => {
  it('detects duplicates', () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
  });

  it('returns false for all unique', () => {
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
  });

  it('handles empty array', () => {
    expect(containsDuplicate([])).toBe(false);
  });

  it('handles single element', () => {
    expect(containsDuplicate([1])).toBe(false);
  });

  it('handles all identical', () => {
    expect(containsDuplicate([5, 5, 5])).toBe(true);
  });
});
