/**
 * Groups strings that are anagrams of each other. Uses the sorted-chars form
 * as the group key. The order of groups and the order within each group is
 * implementation-defined.
 *
 * @param strs - Array of strings.
 * @returns Array of groups, each group being an array of anagrams.
 * @complexity Time O(n · k log k), Space O(n · k) where k = max string length.
 *
 * @example
 * groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);
 * // [['eat','tea','ate'], ['tan','nat'], ['bat']]
 */
export function groupAnagrams(strs: string[]): string[][] {
  const groups = new Map<string, string[]>();
  for (const s of strs) {
    const key = s.split('').sort().join('');
    const group = groups.get(key);
    if (group) {
      group.push(s);
    } else {
      groups.set(key, [s]);
    }
  }
  return Array.from(groups.values());
}
