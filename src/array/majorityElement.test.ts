import { describe, expect, it } from 'vitest';
import { majorityElement } from './majorityElement';

describe('majorityElement', () => {
  it('finds majority', () => {
    expect(majorityElement([3, 2, 3])).toBe(3);
  });

  it('finds majority in longer array', () => {
    expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toBe(2);
  });

  it('handles single element', () => {
    expect(majorityElement([5])).toBe(5);
  });

  it('throws on empty array', () => {
    expect(() => majorityElement([])).toThrow(RangeError);
  });
});
