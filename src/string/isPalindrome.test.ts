import { describe, expect, it } from 'vitest';
import { isPalindrome } from './isPalindrome';

describe('isPalindrome', () => {
  it('detects palindrome with punctuation and mixed case', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
  });

  it('detects non-palindrome', () => {
    expect(isPalindrome('race a car')).toBe(false);
  });

  it('treats empty string as palindrome', () => {
    expect(isPalindrome('')).toBe(true);
  });

  it('treats string with only non-alphanumeric as palindrome', () => {
    expect(isPalindrome('!!!')).toBe(true);
  });

  it('handles single char', () => {
    expect(isPalindrome('a')).toBe(true);
  });

  it('ignores case', () => {
    expect(isPalindrome('AbBa')).toBe(true);
  });
});
