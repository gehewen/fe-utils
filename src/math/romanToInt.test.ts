import { describe, expect, it } from 'vitest';
import { romanToInt } from './romanToInt';

describe('romanToInt', () => {
  it('parses simple numerals', () => {
    expect(romanToInt('III')).toBe(3);
  });

  it('parses subtractive notation', () => {
    expect(romanToInt('IV')).toBe(4);
    expect(romanToInt('IX')).toBe(9);
    expect(romanToInt('XL')).toBe(40);
  });

  it('parses LVIII', () => {
    expect(romanToInt('LVIII')).toBe(58);
  });

  it('parses MCMXCIV', () => {
    expect(romanToInt('MCMXCIV')).toBe(1994);
  });

  it('parses maximum 3999', () => {
    expect(romanToInt('MMMCMXCIX')).toBe(3999);
  });

  it('parses single characters', () => {
    expect(romanToInt('V')).toBe(5);
    expect(romanToInt('M')).toBe(1000);
  });
});
