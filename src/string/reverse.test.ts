import { describe, expect, it } from 'vitest';
import { reverse } from './reverse';

describe('reverse', () => {
  it('reverses ASCII', () => {
    expect(reverse('hello')).toBe('olleh');
  });

  it('returns empty for empty string', () => {
    expect(reverse('')).toBe('');
  });

  it('returns same string for single char', () => {
    expect(reverse('a')).toBe('a');
  });

  it('preserves spaces', () => {
    expect(reverse('a b c')).toBe('c b a');
  });

  it('handles Unicode (emoji surrogate pair)', () => {
    expect(reverse('a😀b')).toBe('b😀a');
  });
});
