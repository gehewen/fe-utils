import { describe, expect, it } from 'vitest';
import { indexOf } from './indexOf';

describe('indexOf', () => {
  it('finds substring', () => {
    expect(indexOf('hello', 'll')).toBe(2);
  });

  it('returns -1 when not found', () => {
    expect(indexOf('aaaaa', 'bba')).toBe(-1);
  });

  it('returns 0 for empty needle', () => {
    expect(indexOf('anything', '')).toBe(0);
  });

  it('finds substring at start', () => {
    expect(indexOf('hello world', 'hello')).toBe(0);
  });

  it('finds substring at end', () => {
    expect(indexOf('hello world', 'world')).toBe(6);
  });

  it('returns 0 when needle equals haystack', () => {
    expect(indexOf('abc', 'abc')).toBe(0);
  });

  it('returns -1 when haystack shorter than needle', () => {
    expect(indexOf('a', 'abc')).toBe(-1);
  });
});
