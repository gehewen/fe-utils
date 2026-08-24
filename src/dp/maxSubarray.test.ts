import { describe, expect, it } from 'vitest';
import { maxSubarray } from './maxSubarray';

describe('maxSubarray', () => {
  it('classic mixed array', () => {
    expect(maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
  });

  it('all positive', () => {
    expect(maxSubarray([1, 2, 3, 4])).toBe(10);
  });

  it('all negative picks least negative', () => {
    expect(maxSubarray([-1, -2, -3])).toBe(-1);
  });

  it('single element', () => {
    expect(maxSubarray([5])).toBe(5);
  });

  it('throws on empty', () => {
    expect(() => maxSubarray([])).toThrow(RangeError);
  });
});
