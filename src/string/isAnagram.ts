/**
 * Determines whether two strings are anagrams of each other (same multiset of
 * characters, case-insensitive, ignoring non-alphanumeric characters).
 *
 * @param s - The first string.
 * @param t - The second string.
 * @returns `true` if `s` and `t` are anagrams.
 * @complexity Time O(n + m), Space O(1) (26-letter counter for ASCII).
 *
 * @example
 * isAnagram('anagram', 'nagaram'); // true
 * isAnagram('rat', 'car');         // false
 */
export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }
  const normalize = (str: string): string => str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const a = normalize(s);
  const b = normalize(t);
  if (a.length !== b.length) {
    return false;
  }
  const counts = new Map<string, number>();
  for (const ch of a) {
    counts.set(ch, (counts.get(ch) ?? 0) + 1);
  }
  for (const ch of b) {
    const current = counts.get(ch) ?? 0;
    if (current === 0) {
      return false;
    }
    counts.set(ch, current - 1);
  }
  return true;
}
