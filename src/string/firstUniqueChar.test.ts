import { describe, expect, it } from 'vitest';
import { firstUniqueChar } from './firstUniqueChar';

describe('firstUniqueChar', () => {
  it('finds first unique char in "loveleetcode"', () => {
    expect(firstUniqueChar('loveleetcode')).toBe(2);
  });

  it('returns -1 when all chars repeat', () => {
    expect(firstUniqueChar('aabb')).toBe(-1);
  });

  it('handles single char', () => {
    expect(firstUniqueChar('z')).toBe(0);
  });

  it('handles empty string', () => {
    expect(firstUniqueChar('')).toBe(-1);
  });

  it('finds first unique at position 0', () => {
    expect(firstUniqueChar('aab')).toBe(2);
  });
});
