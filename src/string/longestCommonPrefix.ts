/**
 * Finds the longest common prefix string amongst an array of strings. Returns
 * an empty string if there is no common prefix.
 *
 * @param strs - Array of strings. Empty array yields "".
 * @returns The longest common prefix.
 * @complexity Time O(n·k) where n = strs.length, k = shortest length.
 *             Space O(1).
 *
 * @example
 * longestCommonPrefix(['flower', 'flow', 'flight']); // 'fl'
 * longestCommonPrefix(['dog', 'racecar', 'car']);    // ''
 */
export function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) {
    return '';
  }
  if (strs.length === 1) {
    return strs[0] ?? '';
  }
  const first = strs[0] ?? '';
  for (let i = 0; i < first.length; i++) {
    const ch = first[i];
    for (let j = 1; j < strs.length; j++) {
      if (i >= (strs[j] ?? '').length || (strs[j] ?? '')[i] !== ch) {
        return first.slice(0, i);
      }
    }
  }
  return first;
}
