/**
 * Returns `true` if the array contains any duplicate values.
 *
 * @param nums - Array of values.
 * @returns `true` if any value appears more than once.
 * @complexity Time O(n), Space O(n).
 *
 * @example
 * containsDuplicate([1, 2, 3, 1]); // true
 * containsDuplicate([1, 2, 3, 4]); // false
 */
export function containsDuplicate(nums: number[]): boolean {
  const seen = new Set<number>();
  for (const v of nums) {
    if (seen.has(v)) {
      return true;
    }
    seen.add(v);
  }
  return false;
}
