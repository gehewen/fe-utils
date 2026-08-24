import { describe, expect, it } from 'vitest';
import { atoi } from './atoi';

describe('atoi', () => {
  it('parses positive integer', () => {
    expect(atoi('42')).toBe(42);
  });

  it('parses negative integer with leading whitespace', () => {
    expect(atoi('   -42')).toBe(-42);
  });

  it('stops at first non-digit', () => {
    expect(atoi('4193 with words')).toBe(4193);
  });

  it('handles positive sign', () => {
    expect(atoi('+123')).toBe(123);
  });

  it('clamps to INT_MAX on overflow', () => {
    expect(atoi('2147483648')).toBe(2 ** 31 - 1);
  });

  it('clamps to INT_MIN on underflow', () => {
    expect(atoi('-2147483649')).toBe(-(2 ** 31));
  });

  it('returns 0 for non-numeric string', () => {
    expect(atoi('abc')).toBe(0);
  });

  it('returns 0 for empty string', () => {
    expect(atoi('')).toBe(0);
  });

  it('handles string of only whitespace', () => {
    expect(atoi('     ')).toBe(0);
  });
});
