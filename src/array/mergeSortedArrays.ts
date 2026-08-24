/**
 * Merges two sorted arrays into a new sorted array. The first `m` elements of
 * `nums1` and the first `n` elements of `nums2` are the meaningful data; any
 * trailing elements are ignored. The input arrays are never mutated.
 *
 * @param nums1 - First sorted array (with at least m meaningful elements).
 * @param m - Number of meaningful elements in nums1.
 * @param nums2 - Second sorted array.
 * @param n - Number of meaningful elements in nums2.
 * @returns A new sorted array containing the merged elements.
 * @complexity Time O(m + n), Space O(m + n).
 *
 * @example
 * mergeSortedArrays([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3); // [1, 2, 2, 3, 5, 6]
 */
export function mergeSortedArrays(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number,
): number[] {
  const result: number[] = [];
  let i = 0;
  let j = 0;
  while (i < m && j < n) {
    const a = nums1[i] as number;
    const b = nums2[j] as number;
    if (a <= b) {
      result.push(a);
      i++;
    } else {
      result.push(b);
      j++;
    }
  }
  while (i < m) {
    result.push(nums1[i] as number);
    i++;
  }
  while (j < n) {
    result.push(nums2[j] as number);
    j++;
  }
  return result;
}
