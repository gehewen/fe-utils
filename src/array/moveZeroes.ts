/**
 * Returns a new array with all zero values moved to the end, preserving the
 * relative order of non-zero elements. The input is never mutated.
 *
 * @param arr - The input array of numbers.
 * @returns A new array with zeros pushed to the end.
 * @complexity Time O(n), Space O(n).
 *
 * @example
 * moveZeroes([0, 1, 0, 3, 12]); // [1, 3, 12, 0, 0]
 */
export function moveZeroes(arr: number[]): number[] {
  const result: number[] = [];
  let zeroCount = 0;
  for (const v of arr) {
    if (v === 0) {
      zeroCount++;
    } else {
      result.push(v);
    }
  }
  for (let i = 0; i < zeroCount; i++) {
    result.push(0);
  }
  return result;
}
