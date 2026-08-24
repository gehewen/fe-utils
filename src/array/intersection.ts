/**
 * Returns the unique intersection of two arrays in ascending order. Each
 * element in the result appears at most once.
 *
 * @param nums1 - First array.
 * @param nums2 - Second array.
 * @returns A sorted, deduplicated array of common elements.
 * @complexity Time O(n + m), Space O(n + m).
 *
 * @example
 * intersection([1, 2, 2, 1], [2, 2]);     // [2]
 * intersection([4, 9, 5], [9, 4, 9, 8, 4]); // [4, 9]
 */
export function intersection(nums1: number[], nums2: number[]): number[] {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const result: number[] = [];
  for (const v of set1) {
    if (set2.has(v)) {
      result.push(v);
    }
  }
  return result.sort((a, b) => a - b);
}
