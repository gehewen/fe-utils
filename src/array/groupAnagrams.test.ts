import { describe, expect, it } from 'vitest';
import { groupAnagrams } from './groupAnagrams';

describe('groupAnagrams', () => {
  it('groups anagrams', () => {
    const result = groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);
    // Sort each group and the list of groups for deterministic comparison
    const normalized = result
      .map((g) => g.slice().sort())
      .sort((a, b) => {
        const aKey = a[0] ?? '';
        const bKey = b[0] ?? '';
        return aKey.localeCompare(bKey);
      });
    expect(normalized).toEqual([['ate', 'eat', 'tea'], ['bat'], ['nat', 'tan']]);
  });

  it('handles single string', () => {
    expect(groupAnagrams(['a'])).toEqual([['a']]);
  });

  it('handles empty string in input', () => {
    const result = groupAnagrams(['', '']);
    expect(result).toEqual([['', '']]);
  });

  it('handles empty input', () => {
    expect(groupAnagrams([])).toEqual([]);
  });

  it('groups identical strings', () => {
    expect(groupAnagrams(['abc', 'abc'])).toEqual([['abc', 'abc']]);
  });
});
