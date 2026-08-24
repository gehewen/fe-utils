import { describe, expect, it } from 'vitest';
import { longestCommonPrefix } from './longestCommonPrefix';

describe('longestCommonPrefix', () => {
  it('finds common prefix', () => {
    expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toBe('fl');
  });

  it('returns empty when no common prefix', () => {
    expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toBe('');
  });

  it('handles empty array', () => {
    expect(longestCommonPrefix([])).toBe('');
  });

  it('handles single string', () => {
    expect(longestCommonPrefix(['alone'])).toBe('alone');
  });

  it('returns empty when array contains empty string', () => {
    expect(longestCommonPrefix(['', 'abc'])).toBe('');
  });

  it('handles all identical strings', () => {
    expect(longestCommonPrefix(['abc', 'abc', 'abc'])).toBe('abc');
  });
});
