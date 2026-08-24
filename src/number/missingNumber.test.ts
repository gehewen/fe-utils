import { describe, expect, it } from 'vitest';
import { missingNumber } from './missingNumber';

describe('missingNumber', () => {
  it('finds missing in middle', () => {
    expect(missingNumber([3, 0, 1])).toBe(2);
  });

  it('finds missing at end', () => {
    expect(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])).toBe(8);
  });

  it('finds missing at start', () => {
    expect(missingNumber([1, 2, 3])).toBe(0);
  });

  it('handles empty array (missing 0)', () => {
    expect(missingNumber([])).toBe(0);
  });

  it('handles two elements', () => {
    expect(missingNumber([0])).toBe(1);
    expect(missingNumber([1])).toBe(0);
  });
});
