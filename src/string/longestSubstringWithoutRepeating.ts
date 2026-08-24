/**
 * Returns the length of the longest substring without repeating characters.
 * Uses a sliding window with a Map of last-seen index.
 *
 * @param s - The input string.
 * @returns Length of the longest substring with all unique characters.
 * @complexity Time O(n), Space O(min(n, alphabet)).
 *
 * @example
 * longestSubstringWithoutRepeating('abcabcbb'); // 3 ('abc')
 * longestSubstringWithoutRepeating('bbbbb');    // 1
 * longestSubstringWithoutRepeating('');         // 0
 */
export function longestSubstringWithoutRepeating(s: string): number {
  const lastSeen = new Map<string, number>();
  let maxLen = 0;
  let windowStart = 0;
  for (let i = 0; i < s.length; i++) {
    const ch = s[i] ?? '';
    const prev = lastSeen.get(ch);
    if (prev !== undefined && prev >= windowStart) {
      windowStart = prev + 1;
    }
    lastSeen.set(ch, i);
    const currentLen = i - windowStart + 1;
    if (currentLen > maxLen) {
      maxLen = currentLen;
    }
  }
  return maxLen;
}
