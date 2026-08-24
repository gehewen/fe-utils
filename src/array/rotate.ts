/**
 * Returns a new array rotated to the right by `k` steps. Negative `k` rotates
 * to the left. The input is never mutated. `k` is normalized against the
 * array length.
 *
 * @param arr - The input array.
 * @param k - Number of steps to rotate (can be negative).
 * @returns A new array containing the rotated elements.
 * @complexity Time O(n), Space O(n).
 *
 * @example
 * rotate([1, 2, 3, 4, 5], 2);   // [4, 5, 1, 2, 3]
 * rotate([1, 2, 3, 4, 5], -1);  // [2, 3, 4, 5, 1]
 */
export function rotate(arr: number[], k: number): number[] {
  const n = arr.length;
  if (n === 0) {
    return [];
  }
  const normalized = ((k % n) + n) % n;
  if (normalized === 0) {
    return arr.slice();
  }
  return arr.slice(-normalized).concat(arr.slice(0, n - normalized));
}
