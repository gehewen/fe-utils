/**
 * Finds two distinct indices in `nums` whose values sum to `target`. Returns
 * `null` if no such pair exists. Uses a single-pass hashmap.
 *
 * @param nums - Array of integers.
 * @param target - The target sum.
 * @returns Tuple of the two indices, or `null` if not found.
 * @complexity Time O(n), Space O(n).
 *
 * @example
 * twoSum([2, 7, 11, 15], 9); // [0, 1]
 * twoSum([3, 2, 4], 6);      // [1, 2]
 */
export function twoSum(nums: number[], target: number): [number, number] | null {
  const seen = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const value = nums[i] ?? 0;
    const complement = target - value;
    const complementIndex = seen.get(complement);
    if (complementIndex !== undefined) {
      return [complementIndex, i];
    }
    seen.set(value, i);
  }
  return null;
}
