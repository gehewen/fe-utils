import { describe, expect, it } from 'vitest';
import { moveZeroes } from './moveZeroes';

describe('moveZeroes', () => {
  it('moves zeros to end preserving order', () => {
    expect(moveZeroes([0, 1, 0, 3, 12])).toEqual([1, 3, 12, 0, 0]);
  });

  it('handles no zeros', () => {
    expect(moveZeroes([1, 2, 3])).toEqual([1, 2, 3]);
  });

  it('handles all zeros', () => {
    expect(moveZeroes([0, 0, 0])).toEqual([0, 0, 0]);
  });

  it('handles empty array', () => {
    expect(moveZeroes([])).toEqual([]);
  });

  it('does not mutate the input', () => {
    const arr = [0, 1, 0, 3];
    const copy = [...arr];
    moveZeroes(arr);
    expect(arr).toEqual(copy);
  });
});
