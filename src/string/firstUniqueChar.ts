/**
 * Returns the index of the first non-repeating character in the string, or
 * `-1` if every character repeats.
 *
 * @param s - The input string.
 * @returns Index of the first unique character, or -1 if none.
 * @complexity Time O(n), Space O(1) (Map keyed by code points).
 *
 * @example
 * firstUniqueChar('loveleetcode'); // 2 ('v')
 * firstUniqueChar('aabb');         // -1
 */
export function firstUniqueChar(s: string): number {
  const counts = new Map<string, number>();
  for (const ch of s) {
    counts.set(ch, (counts.get(ch) ?? 0) + 1);
  }
  for (let i = 0; i < s.length; i++) {
    if (counts.get(s[i] ?? '') === 1) {
      return i;
    }
  }
  return -1;
}
