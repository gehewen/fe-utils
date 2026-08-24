/**
 * Increments a non-negative integer represented as a digit array by one, and
 * returns a new array. The input is never mutated. Handles carry propagation
 * and length increase.
 *
 * @param digits - The digits of the integer (each 0-9, no leading zeros except 0 itself).
 * @returns A new array representing the incremented value.
 * @complexity Time O(n), Space O(n) in worst case.
 *
 * @example
 * plusOne([1, 2, 3]);    // [1, 2, 4]
 * plusOne([9, 9, 9]);    // [1, 0, 0, 0]
 */
export function plusOne(digits: number[]): number[] {
  const result = digits.slice();
  for (let i = result.length - 1; i >= 0; i--) {
    const current = (result[i] ?? 0) + 1;
    if (current < 10) {
      result[i] = current;
      return result;
    }
    result[i] = 0;
  }
  result.unshift(1);
  return result;
}
