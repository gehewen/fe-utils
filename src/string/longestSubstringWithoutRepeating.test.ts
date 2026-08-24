import { describe, expect, it } from 'vitest';
import { longestSubstringWithoutRepeating } from './longestSubstringWithoutRepeating';

describe('longestSubstringWithoutRepeating', () => {
  it('classic example', () => {
    expect(longestSubstringWithoutRepeating('abcabcbb')).toBe(3);
  });

  it('all same chars', () => {
    expect(longestSubstringWithoutRepeating('bbbbb')).toBe(1);
  });

  it('all unique chars', () => {
    expect(longestSubstringWithoutRepeating('pwwkew')).toBe(3);
  });

  it('empty string', () => {
    expect(longestSubstringWithoutRepeating('')).toBe(0);
  });

  it('single char', () => {
    expect(longestSubstringWithoutRepeating('a')).toBe(1);
  });

  it('with spaces and symbols', () => {
    expect(longestSubstringWithoutRepeating('a b!a')).toBe(4);
  });
});
