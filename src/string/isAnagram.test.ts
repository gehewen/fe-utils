import { describe, expect, it } from 'vitest';
import { isAnagram } from './isAnagram';

describe('isAnagram', () => {
  it('detects anagram', () => {
    expect(isAnagram('anagram', 'nagaram')).toBe(true);
  });

  it('detects non-anagram', () => {
    expect(isAnagram('rat', 'car')).toBe(false);
  });

  it('is case-insensitive', () => {
    expect(isAnagram('Listen', 'Silent')).toBe(true);
  });

  it('ignores non-alphanumeric', () => {
    expect(isAnagram('a!b@c', 'b!a@c')).toBe(true);
  });

  it('returns false for different lengths', () => {
    expect(isAnagram('a', 'aa')).toBe(false);
  });

  it('handles empty strings', () => {
    expect(isAnagram('', '')).toBe(true);
  });
});
